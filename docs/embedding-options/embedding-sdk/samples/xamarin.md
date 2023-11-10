---
layout: post
title: Embedding Analytics Dashboard with Xamarin | Bold BI Docs
description: Learn how to embed an analytics dashboard with Xamarin application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Xamarin using the Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/xamarin-sample) t the sample application, which demonstrates the dashboard rendering with the list of dashboards available in your Bold BI server and followed by steps to create a new embedding application in the `Xamarin` on your own.  

> **NOTE:** Reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation is the best way to get started. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

## How to run the sample

 1. Please [get](https://github.com/boldbi/xamarin-sample) the Xamarin Forms sample.    

 2. You need to set the following properties in the `EmbedProperties.cs` file as follows. 
        ![Embed Properties](/static/assets/javascript/sample/images/xamarin-props.png#max-width=60%)
    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
        <td align="left">DashboardId</td>
            <td align="left">Provide the dashboard id of the dashboard you want to embed here.Please refer below how to get the dashboard id. </td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI server.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">ou can get your EmbedSecret key from embed tab by enabling<code> Enable embedauthentication</code> in <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a>.</td>
        </tr>    
    </tbody>
    </table>

 3. Then, run your Xamarin Forms application.

 4. The dashboard can be rendered in design mode or created with the following changes in the `GetHtmlString()` method.

     ```js
        $(document).ready(function() {
                this.dashboard = BoldBI.create({ 
                serverUrl:""" + EmbedProperties.RootUrl + "/" + EmbedProperties.SiteIdentifier + "\","
                + "dashboardId: \"" + EmbedProperties.DashboardId + "\","
                + "embedContainerId: \"dashboard\","
                + "embedType: \"" + BoldBI.EmbedType.Component + "\","
                + "environment: \"" + BoldBI.Environment.Enterprise, /* If Cloud, you should use BoldBI.Environment.Cloud */ + "\","
                + "mode: \"" + BoldBI.Mode.Design + "\","
                + "width: \"100%\","
                + "height: \"100%\","
                + @"expirationTime: 100000,
                authorizationServer:
                {
                    url: """","
                    + "data: " + embedAuthorizeDetails
                + @"},
            });
            this.dashboard.loadDesigner();
        });
     ```

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. Ignore this property to create new dashboard.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Container Id in which dashboard renders.It should not contain hypen.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode you want to render dashboard. It can either be 'View' or 'Design' mode. </td>
    </tr>
    <tr>
    <td align="left">expirationTime</td>
    <td align="left">Set the duration for the token to be alive.</td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'GetDetails' action in the application.</td>
    </tr>
    </tbody>
    </table>

## Get dashboard ID

 Get the item id of the dashboard from the BI server. Please refer to this [link](/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.

 ![Get dashboard ID](/static/assets/javascript/sample/images/get-dashboard-id.png#max-width=55%)

 After changing the above details in the sample, run the Xamarin forms and the dashboard will be rendered.

## How this sample works
 1. Use `WebView` to render the BoldBI Dashboard in the Xamarin forms application.

 2. Since you are using `WebView`, you have to generate the html file to append to `WebView`.

 3. Authorize the application by calling the `GetEmbedDetail` method as follows.

    ![Get Embed Details](/static/assets/javascript/sample/images/xamarin-authorize.png#max-width=100%)

 4. In the above authorization, the `SignatureUrl` is generated with the provided `EmbedSecret key`. Using the signature, you will validate the details and BoldBI will return the token. You will pass the token with the `HtmlString` as follows.
    ![Htmlstring](/static/assets/javascript/sample/images/xamarin-htmlstring.png#max-width=80%)

 5. In the `EmbedProperties.cs`, change the `dashboard Id` of the respective dashboard as you wish to embed.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/xamarin-props.png#max-width=60%)

## Steps to create new Xamarin application to embed dashboard
 1. Open visual studio, search for `Xamarin`, and click on `Mobile App(Xamarin.Forms)` like in the following image.
    ![Embed Properties](/static/assets/javascript/sample/images/xamarin_create.png#max-width=80%)

 2. Then, click `Next`, select the blank project as follows, and click `Create`.
    ![Embed Properties](/static/assets/javascript/sample/images/xamarin_empty_project.png#max-width=60%)

 3. Create `EmbedProperties.cs` class to define the mandatory properties as follows.

     ```js
        public class EmbedProperties
        {
            public static string RootUrl = "http://localhost:5000/bi";//For Bold BI Enterprise edition, it should be like site/site1.

            public static string SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.

            public static string Environment = "enterprise";//Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)

            public static string EmbedType = "component";//Your Embedding type. If you are embedding as component, you should set 'component', if your are embedding as iframe, you should set 'iframe'

            public static string UserEmail = "";//UserEmail of the Admin in your Bold BI, which would be used to get the dashboard

            public static string UserPassword = "";//Password of the Admin in Bold BI, which would be used to get the dashboards

            public static string EmbedSecret = "";//You could get your EmbedSecret key from Embed tab by enabling <code>Enable embed authentication</code> in Administration page.(https://help.boldbi.com/embedded-bi/site-administration/embed-settings/)

            public static string DashboardId = "";//Provide the dashboard id of the dashboard you want to embed here.
        }

     ```

 4. Create a script folder and include the latest wrapper [file](https://cdn.boldbi.com/embedded-sdk/v6.16.12/boldbi-embed.js).

 5. Open the `MainPage.xaml.cs` file, initialize the method `GetHtmlString()` where you need to declare the html contents with scripts to render the dashboard as follows.

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

 6. The `GetEmbedDetails()` uses a method `GetSignatureUrl()` to generate the algorithm.

    In this method, the `embedQuerString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

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

 7. Then, run the Xamarin application to render the dashboard.