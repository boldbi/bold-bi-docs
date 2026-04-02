---
layout: post
title: Embedding Analytics Dashboard with Xamarin | Bold BI Docs
description: Learn how to embed an analytics dashboard with Xamarin application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Xamarin using the Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/xamarin-sample) the sample application, which demonstrates the rendering of the dashboard with the list of available dashboards on your Bold BI server. The steps to create a new embedding application in `Xamarin` on your own.  

> **NOTE:** Reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation is the best way to begin. The `Getting Started` guide provides you with the necessary information that you need to know before working on the sample.

## Prerequisites

 * [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
 * [JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

## How to run the sample

1. Please [get](https://github.com/boldbi/xamarin-sample) the Xamarin Forms sample.    

2. Please ensure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/xamarin-sample/tree/master/Xamarin.Forms.Sample/Xamarin.Forms.Sample) within the application. Make sure that you have placed it correctly in the application, as shown in the image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/xamarin-embed-config.png)

<meta charset="utf-8"/>
<table>
<tbody>
<tr>
    <td align="left">ServerUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, https://demo.boldbi.com/bi)</td>
</tr>
<tr>
    <td align="left">SiteIdentifier</td>
    <td align="left">For the Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be an empty string.</td>
</tr>
<tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
</tr>
<tr>
    <td align="left">EmbedSecret</td>
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a> </td>
</tr>
<tr>
    <td align="left">Environment</td>
    <td align="left">Your Bold BI application environment. (If it is a cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your server, use `BoldBI.Environment.Enterprise`)</td>
</tr>
<tr>
    <td align="left">DashboardId</td>
    <td align="left">Item ID of the dashboard to be embedded in your application.</td>
</tr>
<tr>
    <td align="left">ExpirationTime</td>
    <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds)</td>
</tr>
</tbody>
</table>

 5. Open the Xamarin sample's solution file `Xamarin.Forms.Sample.sln` in Visual Studio and run it.

## How this sample works

 1. To generate an access token, call the `GetEmbedDetails` API with the provided `embedConfig` values in `embedDetails`.
    ![Get token Details](/static/assets/javascript/sample/images/xamarin-authorize.png)

 2. Once the token is generated, it will be append to the htmlString and the dashboard will start to render it.

    ```js
        var token = GetEmbedDetails();
        var tokenJson = JsonConvert.SerializeObject(token);
        var serverUrlJson = JsonConvert.SerializeObject(EmbedProperties.RootUrl + "/" + EmbedProperties.SiteIdentifier);
        var dashboardIdJson = JsonConvert.SerializeObject(EmbedProperties.DashboardId);
        var embedContainerIdJson = JsonConvert.SerializeObject("dashboard");
        var widthJson = JsonConvert.SerializeObject("100%");
        var heightJson = JsonConvert.SerializeObject("100%");

        var html = $@"<!DOCTYPE html>
            <html style=""height:100%;width:100%"">
                <head>
                    <meta name=""viewport"" content=""width=device-width, initial-scale=1"">
                    <script src=""https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js""></script>
                    <script src=""https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js""></script>
                    <script>
                        $(document).ready(function() {{
                            var dashboard = BoldBI.create({{
                                serverUrl: {serverUrlJson},
                                dashboardId: {dashboardIdJson},
                                embedContainerId: {embedContainerIdJson},
                                width: {widthJson},
                                height: {heightJson},
                                embedToken: {tokenJson}
                            }});
                            console.log(dashboard);
                            dashboard.loadDashboard();
                        }});
                    </script>
                </head>
                <body style=""background-color: white;height:100%;width:100%"">
                    <div id=""viewer-section"" style=""background-color: white;height:100%;width:100%"">
                        <div id=""dashboard""></div>
                    </div>
                </body>
            </html>";
    ```

## Steps to create new Xamarin application to embed dashboard

 1. Open Visual Studio, search for `Xamarin`, and click on `Mobile App(Xamarin.Forms)` as shown in the following image.
    ![Embed Properties](/static/assets/javascript/sample/images/xamarin_create.png#max-width=80%)

 2. Then, click `Next`, select the blank project as shown, and click `Create`.
    ![Embed Properties](/static/assets/javascript/sample/images/xamarin_empty_project.png#max-width=60%)

 3. Create the `EmbedProperties.cs` class to define the mandatory properties as follows.

     ```js
        public class EmbedProperties
        {
            public static string RootUrl = "http://localhost:5000/bi";//For Bold BI Enterprise edition, it should be like site/site1.

            public static string SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.

            public static string Environment = "enterprise";//Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)

            public static string EmbedType = "component";//Your Embedding type. If you are embedding as component, you should set 'component', if your are embedding as iframe, you should set 'iframe'

            public static string UserEmail = "";//UserEmail of the Admin in your Bold BI, which would be used to get the dashboard

            public static string UserPassword = "";//Password of the Admin in Bold BI, which would be used to get the dashboards

            public static string EmbedSecret = "";//You could get your EmbedSecret key from Embed tab by enabling <code>Enable embed authentication</code> in Administration page.(/site-administration/embed-settings/)

            public static string DashboardId = "";//Provide the dashboard id of the dashboard you want to embed here.
        }

     ```

 4. Please create a folder for the script and include the most recent wrapper [file](https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js).

 5. Please open the `MainPage.xaml.cs` file and initialize the `GetHtmlString()` method. In this method, you should declare the HTML contents along with the necessary scripts to render the dashboard.

     ```js
      public MainPage()
        {
            InitializeComponent();
            EmbedWebView.Source = new HtmlWebViewSource
            {
                Html = GetHtmlString(),
                BaseUrl = DependencyService.Get<IBaseUrl>().Get()
            };
        }

        public string GetHtmlString()
        {
            var embedAuthorizeDetails = GetEmbedDetails();
            var html = @"<!DOCTYPE html>
                <html style=""height:100%;width:100%"">
                    <head>
                        <meta name=""viewport"" content=""width=device-width, initial-scale=1"">
                        <script type=""text/javascript"" src=""EmbedBiWrapper.js""></script>
                        <script type=""text/javascript"">
                            $(document).ready(function() {
                                this.dashboard = BoldBI.create({ 
                                    serverUrl:""" + EmbedProperties.RootUrl + "/" + EmbedProperties.SiteIdentifier + "\","
                                    + "dashboardId: \"" + EmbedProperties.DashboardId + "\","
                                    + "embedContainerId: \"dashboard\","
                                    + "embedType: \"" + BoldBI.EmbedType.Component + "\","
                                    + "environment: \"" + BoldBI.Environment.Enterprise, /* If Cloud, you should use BoldBI.Environment.Cloud */  + "\","
                                    + "mode: \"" + BoldBI.Mode.View + "\","
                                    + "width: \"100%\","
                                    + "height: \"100%\","
                                    + @"expirationTime: 100000,
                                    authorizationServer:
                                    {
                                        url: """","
                                        + "data: " + embedAuthorizeDetails
                                },
                                });
                                this.dashboard.loadDashboard();
                            });
                        </script>
                    </head>
                    <body style=""background-color: white;height:100%;width:100%"">
                        <div id =""viewer-section"" style=""background-color: white;height:100%;width:100%"">
                            <div id =""dashboard"">
                            </div>
                        </div>
                    </body>
                </html>";
            return html;
        }
     ```

 6. The `GetEmbedDetails()` function utilizes the `GetSignatureUrl()` method to generate the algorithm.

    In this method, the `embedQueryString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to obtain details of a specific dashboard.

     ```js
     public string GetEmbedDetails()
        {
            var embedAuthorizeDetails = string.Empty;
            decimal time = (decimal)Math.Round((DateTime.Now.ToUniversalTime() - new DateTime(1970, 1, 1)).TotalMilliseconds / 1000);
            var dashboardServerApiUrl = EmbedProperties.RootUrl + "/api/" + EmbedProperties.SiteIdentifier;
            var embedQuerString = "embed_nonce=" + Guid.NewGuid() +
            "&embed_dashboard_id=" + EmbedProperties.DashboardId +
            "&embed_mode=view" +
            "&embed_timestamp=" + Math.Round(time) +
            "&embed_expirationtime=100000";

            embedQuerString += "&embed_user_email=" + EmbedProperties.UserEmail;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + GetSignatureUrl(embedQuerString);
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                embedAuthorizeDetails = result.Content.ReadAsStringAsync().Result;
            }
            return embedAuthorizeDetails;
        }

        public string GetSignatureUrl(string message)
        {
            var encoding = new System.Text.UTF8Encoding();
            var keyBytes = encoding.GetBytes(EmbedProperties.EmbedSecret);
            var messageBytes = encoding.GetBytes(message);
            using (var hmacsha1 = new HMACSHA256(keyBytes))
            {
                var hashMessage = hmacsha1.ComputeHash(messageBytes);
                return Convert.ToBase64String(hashMessage);
            }
        }
     ```

 7. Then, run the Xamarin application in order to render the dashboard.