---
layout: post
title:  Embedded SDK v3.3.40 WinForms Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with Windows Forms sample application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
lang: en
---

# Bold BI Dashboards embedding in Windows Forms using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/winforms-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `Windows Forms` on your own. 

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.  

## How to run the sample

 1. Please [get](https://github.com/boldbi/winforms-sample) the Windows Forms sample.    

 2. You need to set your embed property details in the `EmbedProperties.cs. `
     ![Embed Properties](/static/assets/javascript/sample/images/winforms-props.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
            <td align="left">Environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use Cloud, if  Enterprise, you should use OnPremise)</td>
        </tr>
        <tr>
            <td align="left">DashboardId</td>
            <td align="left">Set the item id of the dashboard to embed from BI server.</td>
        </tr>
            <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to authorize the server.</td>
        </tr>
        <tr>
            <td align="left">EmbedSecret</td>
            <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in Administration page</td>
        </tr>
    </tbody>
    </table>

 3. Get the item id of the dashboard from the BI server. Please refer to this [link](/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
    ![Get Dashboard Id](/static/assets/javascript/sample/images/get-dashboard-id.png#max-width=55%)

 4. Then, run your Windows Forms sample.

 5. The dashboard can be rendered in design mode or created with the following changes.

     ```js
     var htmlString = new StringBuilder();
     htmlString.Append("<!DOCTYPE html><html><head><link rel='stylesheet' href='" + System.AppDomain.CurrentDomain.BaseDirectory.Replace("bin\\x64\\Debug\\", "") + "content\\chromium.css'/><script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script><script type='text/javascript' src='" + System.AppDomain.CurrentDomain.BaseDirectory.Replace("bin\\x64\\Debug\\", "") + "scripts\\EmbedBiWrapper.js'></script></script><script type='text/javascript'>$(document).ready(function() {this.dashboard = BoldBI.create({ serverUrl:'" + EmbedProperties.RootUrl + EmbedProperties.SiteIdentifier + "', dashboardId:'" + EmbedProperties.DashboardId + "',embedContainerId: 'dashboard',embedType:'" + EmbedProperties.EmbedType + "',environment:'" + EmbedProperties.Environment + "',width: window.innerWidth - 20 + 'px',height: window.innerHeight - 20 + 'px',expirationTime: 100000,authorizationServer:{url: '', data:" + resultContent + "},dashboardSettings:{showExport: false,showRefresh: false,showMoreOption: false}});console.log(this.dashboard);this.dashboard.loadDashboard();});</script></head><body style='background-color: white'><div id ='viewer-section' style='background-color: white'><div id ='dashboard'></div></div></body></html>");
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
    <td align="left">Url of the 'GetEmbedDetails' action in the application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. Based on the dashboard provided in the embed properties, you will authorize the server URL by calling the `GetEmbedDetails` function.

    Learn more about the authorize server [here](/security-configuration/authorize-server/)
    ![Get Embed Details](/static/assets/javascript/sample/images/winforms-authorize.png)

 2. In the above authorization, the `SignatureUrl` has been generated with the provided `EmbedSecret key` and validated the embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `EmbedProperties.cs`, change the dashboard Id of the respective dashboard as you wish to embed.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/winforms-dashboard.png)


## Steps to create new Windows Forms application to embed dashboard
 1. Start Visual Studio and click `Create a new project`.

 2. Choose Windows Forms Application (.NET Framework), then click `Next`.
   ![SelectProject](/static/assets/javascript/sample/images/winforms_create_project.png#max-width=85%)

 3. Change the project name as you want, then click `Create`.

 4. Create a script folder in the project and add the latest `EmbedWrapper.js` in it.

 5. Create the model class `EmbedProperties.cs` in the project, include a code as follows.

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

 7. In the above authorization, the `SignatureUrl` has been generated with the provided `EmbedSecret` key and validated the embed details in Bold BI. Once details are validated, the dashboard starts to render.

 8. In the `EmbedProperties.cs`, change the dashboard Id of the respective dashboard as you wish to embed.

 9. In the `htmlString` variable, append the mandatory script files and a function that creates an instance to call the `LoadDashboard()` and render the dashboard.