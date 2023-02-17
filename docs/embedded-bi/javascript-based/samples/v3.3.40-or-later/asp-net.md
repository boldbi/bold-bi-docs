---
layout: post
title:  Embed SDK v3.3.40 ASP.NET Framework Sample | Bold BI Docs
description: Explore the JavaScript-based sample embedded in ASP.NET application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in ASP.NET Web Forms using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/aspnet-web-forms-sample) the sample application, which demonstrates dashboard rendering with a list of dashboards available in your Bold BI server and is followed by steps to create a new embedding application in the `ASP.NET Web Forms` on your own.

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.  

## How to run the sample

1. Please [get](https://github.com/boldbi/aspnet-web-forms-sample) the ASP.NET Web Forms sample.    

2. You need to set your embed property details in the `EmbedProperties.cs` and `Site.Master` as follows.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/asp-net-embed.png)
![Embed Properties in Site](/static/assets/embedded/javascript/sample/images/asp-net-site.png)
 <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
        </tr>
        <tr>
            <td align="left">EmbedSecret</td>
            <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a> </td>
        </tr>
        <tr>
            <td align="left">rootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
        </tr>
        <tr>
            <td align="left">siteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
            <td align="left">environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)</td>
        </tr>
        <tr>
            <td align="left">DashboardId</td>
            <td align="left">Set the item id of the dashboard to embed from BI server.</td>
        </tr>
    </tbody>
    </table>


3. Run your ASP.NET Web Forms sample.

4. The dashboard can be rendered in design mode or created with the following changes in the `Init()` method.
    ```js
    <script type="text/javascript">
        var dashboardId = "db8d3eb2-a608-4ffd-9aad-cd51278e1531";
        function Init() {
            this.dashboard = BoldBI.create({
                serverUrl: "http://localhost:12345/bi/site/site1",
                dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment: "enterprise",
                mode:BoldBI.Mode.Design
                width: "100%",
                height: "100%",
                expirationTime: 100000,
                authorizationServer: {
                    url: "Default.aspx/GetEmbedDetails"
                }
                
            });
            this.dashboard.loadDesigner();
        }
    </script>
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

 1. Based on the provided embed details with the dashboard, authorize the server URL by calling the `GetEmbedDetails` function, `(Default.aspx/GetEmbedDetails)`call, and the provided `EmbedProperties` values.
 Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/)
 ![Authorize Server URL](/static/assets/embedded/javascript/sample/images/asp-net-api.png)
 ![Get Embed Details](/static/assets/embedded/javascript/sample/images/asp-net-authorize.png)

 2. In the above authorization, the `SignatureUrl` is generated with the provided `EmbedSecret key` and validated embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `Site.Master`, change the dashboard Id of the respective dashboard as you wish to embed.
 ![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/asp-net-dashboard.png)

## Steps to create new ASP.NET Web Forms application to embed dashboard
 1. Start Visual Studio and click `Create a new project`.
 2. Choose ASP.NET Web Application (.NET Framework), then click `Next.`
   ![SelectProject](/static/assets/embedded/javascript/sample/images/MVC_framework.png)
 3. Change the project name as you want, then click `Create`.
 4. Choose Web Forms and Web API, then click `OK`.
 ![SelectProject](/static/assets/embedded/javascript/sample/images/asp_net_create_project.png)

 5. Under the model folder, create the `EmbedProperties.cs` class to define the mandatory properties as follows.

    ```js
    public class EmbedProperties
    {
       //Enter your BoldBI credentials here.
        public static string UserEmail = "";

        // Get the embedSecret key from Bold BI, please refer this link(https://help.syncfusion.com/bold-bi/on-premise/site-settings/embed-settings)
        public static string EmbedSecret = "";
    }

    ```
 6. Open the `Default.aspx.cs` implement an API `GetEmbedDetails()`, which invokes the `GetSignatureUrl()` method as follows.

     ```js
     [WebMethod()]
        public static void GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
        {
            embedQuerString += "&embed_user_email=" + EmbedProperties.UserEmail;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + GetSignatureUrl(embedQuerString);

            using (var client = new System.Net.Http.HttpClient())
            {
                client.BaseAddress = new Uri(dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                //return resultContent;
                var js = new System.Web.Script.Serialization.JavaScriptSerializer();

                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.ContentType = "application/json; charset=utf-8";
                HttpContext.Current.Response.Write(js.Serialize(resultContent));
                HttpContext.Current.Response.Flush();
                HttpContext.Current.Response.End();
            }
        }

        public static string GetSignatureUrl(string message)
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

    In this API, the `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()`  method are appended as query parameters in the URL to get details of a particular dashboard from the server.

 7. In the `Site.Master`, refer to the following file, which is mandatory to render the dashboard.
    ```js
    <script src="https://cdn.boldbi.com/embedded-sdk/v5.3.53/boldbi-embed.js"></script>
    ```
 8. In the `<body>` section, initialize the method as `Init()` and remove the existing header container. In the `<script>`tag, implement its functionality as follows.
 
     ```js
        <script type="text/javascript">
            var dashboardId = "db8d3eb2-a608-4ffd-9aad-cd51278e1531";
            function Init() {
                this.dashboard = BoldBI.create({
                    serverUrl: "http://localhost:12345/bi/site/site1",//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
                    dashboardId: dashboardId,//Dashboard id of the dashboard you want to embed here.
                    embedContainerId: "dashboard",//DOM id where the dashboard will be rendered, here it is dashboard.
                    embedType: BoldBI.EmbedType.Component,
                    environment: "enterprise",//Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)
                    width: "100%",
                    height: "100%",
                    expirationTime: 100000,//Set the duration for the token to be alive.
                    authorizationServer: {
                        url: "Default.aspx/GetEmbedDetails"//URL from which particular dashboard details is obtained from server.
                    }
                    
                });
                this.dashboard.loadDashboard();
            }
        </script>
     ```