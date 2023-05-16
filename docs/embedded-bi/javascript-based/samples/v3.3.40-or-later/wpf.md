---
layout: post
title:  Embedded SDK v3.3.40 WPF Framework Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with WPF sample application,which has been supported by Bold BI since v3.3.40.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in WPF using the Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/wpf-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `WPF` on your own.  

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

## Sample to embed dashboard

 1. Please [get](https://github.com/boldbi/wpf-sample) the WPF Forms sample .    

 2. You need to set the following properties in the `EmbedProperties.cs` file as follows.  
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/wpf-props.png#max-width=80%)
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
            <td align="left">Provide the dashboard id of the dashboard you want to embed here. Please refer below how to get the dashboard id. </td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list</td>
        </tr>
        <tr>
        <td align="left">UserPassword</td>
            <td align="left">Password of the Admin in Bold BI, which will be used to get the dashboards list</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code> Enable embedauthentication</code> in <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a>. </td>
        </tr>    
    </tbody>
    </table>

 3. Then, run your WPF application.

 4. The dashboard can be rendered in design mode or created with the following changes in the `InitializeAsync()` method.

     ```js
     async void InitializeAsync(string resultContent)
        {
            var html = @"
            <!DOCTYPE html>
        <html><head><meta http-equiv='X-UA-Compatible' content='IE=Edge' />
        <script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script>
        <script type='text/javascript' src='https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js'></script>" +
        "<script type='text/javascript'>$(document).ready(function() " +
        "{this.dashboard = BoldBI.create({ serverUrl:'" + EmbedProperties.RootUrl + EmbedProperties.SiteIdentifier + "', dashboardId:'" + EmbedProperties.DashboardId + "',embedContainerId: 'dashboard',embedType:'" + BoldBI.EmbedType.Component + "',environment:'" + BoldBI.Environment.Enterprise, /* If Cloud, you should use BoldBI.Environment.Cloud */ + "'mode: '" + BoldBI.Mode.Design + "',width: window.innerWidth - 20 + 'px',height: window.innerHeight - 20 + 'px',expirationTime: 100000,authorizationServer:{url: '', data:" + resultContent + "}});this.dashboard.loadDesigner();});</script>" +
        "</head>" +
        "<body><div id ='viewer-section'>" +
        "<div id ='dashboard'></div></div>" +
        "</body>" +
        "</ html>";
                
        await wbSample.EnsureCoreWebView2Async(null);
            if (wbSample != null && wbSample.CoreWebView2 != null)
                {
                    File.WriteAllText(System.IO.Path.Combine(Environment.CurrentDirectory, @"MyWebView.html"), html);
                    wbSample.CoreWebView2.Navigate(System.IO.Path.Combine(Environment.CurrentDirectory, @"MyWebView.html"));
                }
            }
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

 Get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.
   ![Get dashboard ID](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png#max-width=55%)

 After changing the above details in the sample, run the WPF forms and the dashboard will be rendered.

## How this sample works
 1. Use `WebView` to render the BoldBI Dashboard in the WPF application.

 2. Since you are using `WebView`, you have to generate the html file to append to `WebView`.

 3. Authorize the application by calling the `MainWindow` method as follows.
    ![embed details](/static/assets/embedded/javascript/sample/images/mainwindow-wpf.png#max-width=100%)

 4. In the above authorization, the `SignatureUrl` is generated with the provided `EmbedSecret`. Using the signature, You will validate the details and BoldBI will return the token. You will pass the token with the `HtmlString` as follows.
    ![Htmlstring](/static/assets/embedded/javascript/sample/images/wpf-htmlstring.png#max-width=80%)

 5. In the` EmbedProperties.cs`, change the `dashboard Id` of the respective dashboard as you wish to embed.
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/wpf-props.png#max-width=80%)

## Steps to create new WPF Core application to embed dashboard
 1. Open visual studio and search WPF in the search template as follows.
    ![Create_WPF](/static/assets/embedded/javascript/sample/images/wpf_create.png#max-width=80%)

 2. Choose like the above highlighted one, then click `Next`.

 3. Change the project name as you want, then click `Create`.

 4. Create the model class `EmbedProperties.cs` and define properties as follows.

     ```js
        public class EmbedProperties
        {
            public static string RootUrl = "";//Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)

            public static string SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.
            
            public static string Environment = "enterprise"; 
            public static string EmbedType = "component";

            public static string DashboardId = "";//Provide the dashboard id of the dashboard you want to embed here. Please refer below how to get the dashboard id.

            public static string UserEmail = ""; //UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list

            public static string UserPassword = "";//Password of the Admin in Bold BI, which will be used to get the dashboards list

            public static string EmbedSecret = "";//You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page

        }
     ```

 5. In this method, the `embedQuerString`, `userEmail`, and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

     ```js
     public MainWindow()
        {
            InitializeComponent();
            //this.RenderSize = Screen.PrimaryScreen.WorkingArea.Size;
            this.WindowState = WindowState.Maximized;
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
                //wbSample.ObjectForScripting = this;
                InitializeAsync(resultContent);
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

 6. In the `InitializeAsync()` method, create the html content and include the mandatory cdn files in it. Create a DOM element with id dashboard where the `dashboard` is rendered.

     ```js
        async void InitializeAsync(string resultContent)
            {
                var html = @"
                <!DOCTYPE html>
        <html><head><meta http-equiv='X-UA-Compatible' content='IE=Edge' />
        <script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script>
        <script type='text/javascript' src='https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js'></script>" +
        "<script type='text/javascript'>$(document).ready(function() " +
        "{this.dashboard = BoldBI.create({ serverUrl:'" + EmbedProperties.RootUrl + EmbedProperties.SiteIdentifier + "', dashboardId:'" + EmbedProperties.DashboardId + "',embedContainerId: 'dashboard',embedType:'" + BoldBI.EmbedType.Component + "',environment:'" + BoldBI.Environment.Enterprise, /* If Cloud, you should use BoldBI.Environment.Cloud */ + "'mode: '" + BoldBI.Mode.View + "',width: window.innerWidth - 20 + 'px',height: window.innerHeight - 20 + 'px',expirationTime: 100000,authorizationServer:{url: '', data:" + resultContent + "}});this.dashboard.loadDashboard();});</script>" +
        "</head>" +
        "<body><div id ='viewer-section'>" +
        "<div id ='dashboard'></div></div>" +
        "</body>" +
        "</ html>";
                
        await wbSample.EnsureCoreWebView2Async(null);
            if (wbSample != null && wbSample.CoreWebView2 != null)
                {
                    File.WriteAllText(System.IO.Path.Combine(Environment.CurrentDirectory, @"MyWebView.html"), html);
                    wbSample.CoreWebView2.Navigate(System.IO.Path.Combine(Environment.CurrentDirectory, @"MyWebView.html"));
                }
            }
     ```