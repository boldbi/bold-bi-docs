---
layout: post
title: Embedding Analytics with ASP.NET Web Forms | Bold BI Docs
description: Learn how to embed an analytics dashboard with ASP.NET Web Forms application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in ASP.NET Web Forms using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/aspnet-web-forms-sample) the sample application, which demonstrates the dashboard rendering with the list of dashboards available in your Bold BI server and followed by steps to create new embedding application in the `ASP.NET Web Forms` on your own.    

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.  

 ## Prerequisites

 * [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
 * [.NET Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework)

## How to run the sample

1. Please get the [ASP.NET Web Forms](https://github.com/boldbi/aspnet-web-forms-sample) sample from GitHub.

2. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not enabled, refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-web-forms-sample/tree/master/BoldBIEmbedSample) within the application. Please ensure you have placed it in the application, as shown in the following image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/asp-net-webforms-embed-config.png)

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
          <td align="left">Your Bold BI application environment. (If it is a cloud analytics server, use <code> BoldBI.Environment.Cloud</code>; if it is your server, use <code> BoldBI.Environment.Enterprise</code>)</td>
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

5. Run your `ASP.NET Web Forms` sample in Visual Studio.

   > **NOTE:** If you are facing an error related to the `bin\roslyn\csc.ex`, it indicates that performing a `clean build` and `rebuild` is necessary.

 6.	The dashboard can be edited in the design mode, and create a new dashboard with the following changes in the `Init()` method.
     
       <meta charset="utf-8"/>
       <table>
       <tbody>
       <tr>
       <td align="left">dashboardId</td>
       <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. This property no need to create a new dashboard.</td>
       </tr>
       <tr>
       <td align="left">mode</td>
       <td align="left">In which mode you want to render dashboard. It can either be <code>BoldBI.Mode.View</code> or <code>BoldBI.Mode.Design</code> mode.</td>
       </tr>
       <tr>
       <td align="left">authorizationServer</td>
       <td align="left">Url of the <code>authorizationServerAPI</code> action in the application.</td>
       </tr>
        <tr>
         <td align="left">RenderDesigner</td>
         <td align="left">loadDesigner()</td>
        </tr>
       </tbody>
       </table>
     
      ```js
       function Init() {
            this.dashboard = BoldBI.create({
                serverUrl: rootUrl + "/" + siteIdentifier,
                //Provide an item id to render it in the design mode. To create a dashboard, remove this property.
                dashboardId: dashboardId,
                embedContainerId: "dashboard",
                embedType: embedType,
                // If Cloud, you should use the BoldBI.Environment.Cloud.
                environment: environment,
                width: "100%",
                height: "100%",
                mode: BoldBI.Mode.View,
                expirationTime: 100000,
                authorizationServer: {
                    url: "Default.aspx/AuthorizationServer"
                }
            });
            this.dashboard.loadDashboard();
        };
     ```

## How this sample works

 1. The application checks if the `embedConfig.json` is available; if so, it `deserializes` and stores the content in `EmbedDetails`. Otherwise, it throws an error.

    ![Parsing embed Config](/static/assets/javascript/sample/images/asp-net-webforms-parse-json.png)

 2. The `Init()` function renders the dashboard using the retrieved data from the `embedConfig.json`.

    ![Dashboard rendering](/static/assets/javascript/sample/images/asp-net-webforms-renderdashboard.png)

 3. Before rendering, the `authorizationUrl` is called, which redirects to the `AuthorizationServer` action in the `Default.aspx`, which generates the `EmbedSignature` using the embed secret from the `embedConfig.json`.
        
    ![Authorize Server URL](/static/assets/javascript/sample/images/asp-net-webforms-authorize.png)

 4. These details will be sent to the Bold BI server and validated there. Once details are validated, the dashboard starts to render.

## Steps to create new ASP.NET Web Forms application to embed dashboard

 1. Start Visual Studio and click `Create a new project`.

 2. Choose ASP.NET Web Application (.NET Framework), then click `Next.`

    ![SelectProject](/static/assets/javascript/sample/images/MVC_framework.png)

 3. Change the project name as you want, then click `Create`.

 4. Choose Web Forms and Web API, then click `Create`.

    ![SelectProject](/static/assets/javascript/sample/images/asp_net_create_project.png)

 5. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 6. To download the `embedConfig.json` file, follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
   
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![SelectProject](/static/assets/javascript/sample/images/prop-core.png)

 7. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-web-forms-sample/tree/master/BoldBIEmbedSample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/asp-net-webforms-embed-config.png)

 8. Create the `EmbedClass.cs` class within the models folder. This class should define certain properties used to retrieve dashboard details from the server. Ensure the `System.Runtime.Serialization` and `System` namespaces are included in the `EmbedClass.cs` model file.

    ```js
    public class EmbedClass
    {
        [DataMember]
        public string embedQuerString { get; set; }
        [DataMember]
        public string dashboardServerApiUrl { get; set; }
    }

    public class EmbedDetails
    {
        public string Environment { get; set; }

        public string SiteIdentifier { get; set; }

        public string ServerUrl { get; set; }

        public string EmbedSecret { get; set; }

        public string UserEmail { get; set; }

        public string EmbedType { get; set; }

        public string DashboardId { get; set; }
    }
    ```

 9. Create a new model class called `GlobalAppSettings.cs` to define the following properties. These properties will maintain the `embedConfig.json` file object within the `GlobalAppSettings`.

     ```js
     public class GlobalAppSettings
     {
        public static EmbedDetails EmbedDetails { get; set; }
     }
     ```

 10. Open the `Default.aspx` file and replace the following code in the `<asp:Content>`section. This container can be used to render the dashboard.

     ```js
     <div id="viewer-section">
        <div id="dashboard"></div>
     </div>
     ```
    
 
 11. In `Default.aspx.cs`, to get particular dashboard details, define an API `AuthorizationServer()`, which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`,`userEmail`, and the value from the `GetSignatureUrl()` method are appended as the query parameters in the URL to get details of the particular dashboard

     ```js
        [WebMethod()]
        public static void AuthorizationServer(string embedQuerString, string dashboardServerApiUrl)
        {
            embedQuerString += "&embed_user_email=" + GlobalAppSettings.EmbedDetails.UserEmail;
            //To set embed_server_timestamp to overcome the EmbedCodeValidation failing while different timezone using at client application.
            double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
            embedQuerString += "&embed_server_timestamp=" + timeStamp;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + GetSignatureUrl(embedQuerString);

            using (var client = new HttpClient())
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
            var keyBytes = encoding.GetBytes(GlobalAppSettings.EmbedDetails.EmbedSecret);
            var messageBytes = encoding.GetBytes(message);
            using (var hmacsha1 = new HMACSHA256(keyBytes))
            {
                var hashMessage = hmacsha1.ComputeHash(messageBytes);
                return Convert.ToBase64String(hashMessage);
            }
        }
     ```

 12. The following script is mandatory to render the dashboard. Insert the given code into the `Site.Master` page within the `<head>` section.

     ```js
        <script src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>
        <script type="text/javascript">
            var rootUrl = "<%= <your project name>.Models.GlobalAppSettings.EmbedDetails.ServerUrl %>";
            var dashboardId = "<%= <your project name>.Models.GlobalAppSettings.EmbedDetails.DashboardId %>";
            var siteIdentifier = "<%= <your project name>.Models.GlobalAppSettings.EmbedDetails.SiteIdentifier %>";
            var environment = "<%= <your project name>.Models.GlobalAppSettings.EmbedDetails.Environment %>";
            var embedType = "<%= <your project name>.Models.GlobalAppSettings.EmbedDetails.EmbedType %>";

            function Init() {
                this.dashboard = BoldBI.create({
                    serverUrl: rootUrl + "/" + siteIdentifier,
                    dashboardId: dashboardId,
                    embedContainerId: "dashboard",
                    embedType: embedType,
                    environment: environment,
                    width: "100%",
                    height: "100%",
                    expirationTime: 100000,
                    authorizationServer: {
                        url: "Default.aspx/AuthorizationServer"
                    }
                });
                this.dashboard.loadDashboard();
            }
        </script>
     ```
     > **NOTE:** Change `<your project name>` to the name of your project.
    
 13. In the `<body>` section, include the following, which is used to initialize the method `Init()`.
     
     ```js
     <body onload="Init()">
        <form runat="server" style="height: 100%">
            <div class="container body-content" style="height: 100%">
             <asp:ContentPlaceHolder ID="MainContent" runat="server">
                </asp:ContentPlaceHolder>
            </div>
        </form>
     </body>
     ```

 14. Open the `Global.asax.cs` file and include the following code sample.

     ```js
        RouteConfig.RegisterRoutes(RouteTable.Routes);
        string embedConfigPath = Server.MapPath("~/embedConfig.json");
        string jsonString = System.IO.File.ReadAllText(embedConfigPath);
        GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
     ```
     
 15. Rewrite the following code in the `RouteConfig.cs` file located in the `App_Start` folder:
     
     ```js
      var settings = new FriendlyUrlSettings();
      settings.AutoRedirectMode = RedirectMode.Off;
      routes.EnableFriendlyUrls(settings);
     ```

 16. Run your `ASP.NET Web Forms` sample in **Visual Studio**.
