---
layout: post
title: Embedding Analytics with .NET WinForms | Bold BI Docs
description: Learn how to embed an analytics dashboard with .NET Win Forms application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Windows Forms using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/winforms-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `Windows Forms` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The `Getting Started` guide provides you with enough information that you need to know before working on the sample. 

## Prerequisites

 * [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
 * [.NET Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework)

## How to run the sample

1. Please [get](https://github.com/boldbi/winforms-sample) the Windows Forms sample.    

2. Please ensure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/winforms-sample/tree/master/BoldBI.Winforms) within the application. Make sure that you have placed it correctly in the application, as shown in the image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/winforms-embed-config.png)

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

 5. Then, run your Windows Forms sample.

## How this sample works

 1. To generate an access token, call the `GetEmbedDetails` API with the provided `embedConfig` values in `embedDetails`.
    ![Get token Details](/static/assets/javascript/sample/images/winforms-authorize.png)

 2. Once the token is generated, it will be append to the htmlString and the dashboard will start to render it.

    ```js
        var htmlString = new StringBuilder();
        var serverUrlForJs = EmbedConfigProvider.Current.ServerUrl.TrimEnd('/') + "/" + EmbedConfigProvider.Current.SiteIdentifier;
        var environment = EmbedConfigProvider.Current.Environment;

        var cssPath = System.AppDomain.CurrentDomain.BaseDirectory.Replace("bin\\x64\\Debug\\", "") + "content\\chromium.css";
        htmlString.Append("<!DOCTYPE html><html><head><link rel='stylesheet' href='" + cssPath + "'/><script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script><script type='text/javascript' src='https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js'></script>");

        // Use JsonConvert.ToString(accessToken) to ensure the token is properly escaped as a JS string literal
        htmlString.Append("<script type='text/javascript'>$(document).ready(function() {this.dashboard = BoldBI.create({ serverUrl:'" + serverUrlForJs + "', dashboardId:'" + EmbedConfigProvider.Current.DashboardId + "', embedContainerId: 'dashboard', embedToken: " + JsonConvert.ToString(accessToken) + ", environment:'" + environment + "', width: window.innerWidth - 20 + 'px', height: window.innerHeight - 20 + 'px' "  + "}); this.dashboard.loadDashboard(); });</script></head><body style='background-color: white'><div id ='viewer-section' style='background-color: white'><div id ='dashboard'></div></div></body></html>");
    ```

## Steps to create new Windows Forms application to embed dashboard

 1. Start Visual Studio and click on `Create a new project`.

 2. Choose Windows Forms Application (.NET Framework), then click `Next`.

    ![SelectProject](/static/assets/javascript/sample/images/winforms_create_project.png#max-width=85%)

 3. Change the project name as you want, then click `Create`.

 4. Create a script folder in the project and add the latest `EmbedWrapper.js` in it.

 5. Create the model class `EmbedProperties.cs` within the project, and include the following code.

     ```js
        internal class EmbedProperties
        {
            public static string RootUrl = "http://localhost:64503/bi/";//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)

            public static string SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.

            public static string Environment = "enterprise";//Your Bold BI application environment. (If Cloud, you should use Cloud, if  Enterprise, you should use OnPremise)

            public static string EmbedType = "component";//Your Embedding type. If you are embedding as component, you should set 'component', if your are embedding as ifrmae, you should set 'iframe'

            public static string DashboardId = "enter dashboard id here";//Set the item id of the dashboard to embed from BI server.

            public static string UserEmail = "enter user email here";//UserEmail of the Admin in your Bold BI, which would be used to authorize the server.

            public static string EmbedSecret = "enter embed secret here";//You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in Administration page.
        }
     ```

 6. In the `Forms.cs`, define the API `GetDetails()`, which uses the method `GetSignatureUrl()` to generate the algorithm. In this API, the `embedQuerString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

     ```js
     public string Url { get; set; }
        public Form1()
        {
            this.Size = Screen.PrimaryScreen.WorkingArea.Size;
            this.WindowState = FormWindowState.Maximized;

            GetEmbedDetails();
            InitializeComponent();
        }

        public void GetEmbedDetails()
        {
            decimal time = (decimal)Math.Round((DateTime.Now.ToUniversalTime() - new DateTime(1970, 1, 1)).TotalMilliseconds / 1000);
            var dashboardServerApiUrl = EmbedProperties.RootUrl + "api/" + EmbedProperties.SiteIdentifier;

            var embedQuerString = "embed_nonce=" + Guid.NewGuid() +
            "&embed_dashboard_id=" + EmbedProperties.DashboardId +
            "&embed_timestamp=" + Math.Round(time) +
            "&embed_expirationtime=100000";
            embedQuerString += "&embed_user_email=" + EmbedProperties.UserEmail;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + GetSignatureUrl(embedQuerString);

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                //webBrowser1.ObjectForScripting = this;
                var htmlString = new StringBuilder();
                htmlString.Append("<!DOCTYPE html><html><head><link rel='stylesheet' href='" + System.AppDomain.CurrentDomain.BaseDirectory.Replace("bin\\x64\\Debug\\", "") + "content\\chromium.css'/><script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script><script type='text/javascript' src='" + System.AppDomain.CurrentDomain.BaseDirectory.Replace("bin\\x64\\Debug\\", "") + "scripts\\EmbedBiWrapper.js'></script></script><script type='text/javascript'>$(document).ready(function() {this.dashboard = BoldBI.create({ serverUrl:'" + EmbedProperties.RootUrl + EmbedProperties.SiteIdentifier + "', dashboardId:'" + EmbedProperties.DashboardId + "',embedContainerId: 'dashboard',embedType:'" + BoldBI.EmbedType.Component + "',environment:'" + BoldBI.Environment.Enterprise, /* If Cloud, you should use BoldBI.Environment.Cloud */ + "'mode: '" + BoldBI.Mode.View + "',width: window.innerWidth - 20 + 'px',height: window.innerHeight - 20 + 'px',expirationTime: 100000,authorizationServer:{url: '', data:" + resultContent + "}});this.dashboard.loadDashboard();});</script></head><body style='background-color: white'><div id ='viewer-section' style='background-color: white'><div id ='dashboard'></div></div></body></html>");
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
                using (FileStream fs = new FileStream(filePath, FileMode.Create))
                {
                    using (StreamWriter wr = new StreamWriter(fs, Encoding.UTF8))
                    {
                        wr.Write(htmlString.ToString());
                    }
                }
                Url = filePath;
            }
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

 7. In the above authorization, the `SignatureUrl` has been generated with the provided `EmbedSecret` key and the embed details have been validated in Bold BI. Once the details are validated, the dashboard will start rendering.

 8. In the `EmbedProperties.cs` file, you can change the dashboard Id of the respective dashboard as desired for embedding.

 9. In the `htmlString` variable, please append the mandatory script files and a function that creates an instance to call the `LoadDashboard()` and render the dashboard.