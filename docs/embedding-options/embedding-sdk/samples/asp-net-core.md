---
layout: post
title:  Embed SDK v3.3.40 ASP.NET Core Framework Sample | Bold BI
description: Explore the JavaScript-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
lang: en
---

# Bold BI Dashboards Embedding in ASP.NET Core Sample with Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/aspnet-core-sample) he sample application, which demonstrates dashboard rendering with a list of dashboards available in your Bold BI server and is followed by steps to create a new embedding application in the `ASP.NET Core` on your own.

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.  

## Prerequisites

* [.NET Core 6.0](https://dotnet.microsoft.com/download/dotnet-core)
* [Visual Studio Code](https://code.visualstudio.com/download)

## How to run the sample

1. Please [get](https://github.com/boldbi/aspnet-core-sample) the ASP.NET Core sample from GitHub.  

2. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed <a href="https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code" target="_blank">instructions</a>
 to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this <a href="https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file" target="_blank">link</a> for reference. Additionally, you can refer to the following image for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/core-embed-config.png)

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
          <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a> </td>
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

       
5. Open your project in `Visual Studio Code` and use the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.

6. Run your ASP.NET Core sample with the command `dotnet run` in Visual Studio Code.

7. The dashboard can be editable in design mode and create a new dashboard with the following changes in the `renderDashboard()` method.

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard ID of the dashboard you want to embed in view or edit mode. Ignore this property to create a new dashboard.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode do you want to render the dashboard? It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode. </td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'authorizationServerAPI' action in the application.</td>
    </tr>
    </tbody>
    </table>

    ```js
        function renderDashboard(dashboardId) {
        var dashboard = BoldBI.create({
        serverUrl: rootUrl + "/" + siteIdentifier,
        dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property   
        embedContainerId: "dashboard",
        embedType: embedType,
        environment: environment,
        width: "100%",
        height: "100%",
        mode: BoldBI.Mode.Design,
        expirationTime: 100000,
        authorizationServer: {
            url: authorizationServerUrl
        }
        });
        dashboard.loadDesigner();
        };
     ```

> **NOTE:** We represent the dashboard embedding by default without the dashboard listing sidebar. You must navigate to the `dashboardlisting` URL (such as https://localhost:5001/dashboardlisting) to enable the dashboard list.

## How this sample works

 1. Based on the values in the `embedConfig.json`, you'll get the user token and validate it, then you can get the dashboard list from the server using the respective API.

    ![Get Token](/static/assets/javascript/sample/images/core-home-gettoken.png)

 2. In the `HomeController.cs`, add the `GetDashboards()` action, which uses the `GetToken` method to get the dashboard list while initializing the DOM in the `Index.html`.
    ![Get Dashboards](/static/assets/javascript/sample/images/core-home-getdashboard.png)

 3. When selecting the dashboard to render, authorize the server URL by calling the `AuthorizationServer` action with the provided `embedConfig` values.
    ![Get Embed Details](/static/assets/javascript/sample/images/core-home-getdetails.png)

 4. In the above authorization, the `SignatureUrl` has been generated with the provided `EmbedSecret key` and validated embed details in Bold BI for the dashboard to be rendered in the viewer section of the `index.cshtml`.

## Steps to create ASP.NET Core application to embed dashboard

 1. Create a folder in the desired location and open it in the Visual Studio Code. 

 2. Open the terminal in the Visual Studio Code. Please refer to the following image.
    ![Terminal Image](/static/assets/javascript/sample/images/core-terminal-image.png)
    
 3. To create a new project, we need to run this command in the terminal.
    ```js
         dotnet new webapp
    ```

 4. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed <a href="https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code" target="_blank">instructions</a> to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please follow this
 <a href="https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file" target="_blank">link</a>  for reference. Additionally, you can refer to the following image for visual guidance.
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)

 6. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/core-embed-settings-image.png)

 7. Create a new folder called `Models`. Create a model class as `DataClass.cs` to define the following properties. These properties are used to get the dashboard list from the server. 

    Execute the following commands in the terminal to add the necessary references to the project: `dotnet add package Newtonsoft.Json` and `dotnet add package System.Runtime.Serialization.Primitives`. Ensure the `System.Runtime.Serialization` and `Newtonsoft.Json` namespaces in the `DataClass.cs` model file.

    ```js
    [DataContract]
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

 8. Create another model class as `GlobalAppSettings.cs` to define the following properties. These properties maintain the `embedConfig.json` file object within the `GlobalAppSettings`.

    ```js 
    public class GlobalAppSettings
    {
        public static EmbedDetails EmbedDetails { get; set; }
    }
    ```

 9. Create a new folder called `Home` within the `Pages` folder. To create a new file called `Index.cshtml` within the `Home` folder.

     ![Index.cshml location](/static/assets/javascript/sample/images/CoreViewFolderLocationMvc.png#max-width=30%)

 10. The following script is mandatory to render the dashboard. Set the `Layout = null` at the top and the following code in your `\Pages\Home\Index.cshtml` page of the `<head>` tag.

     ![Index.cshml Image](/static/assets/javascript/sample/images/CoreViewFolderProperties.png)

     ```js 
       <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.7.11/boldbi-embed.js"></script>
       <script type="text/javascript" src="~/js/Index.js"></script>
       <script type="text/javascript">
          var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
          var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
          var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
          var environment = "@GlobalAppSettings.EmbedDetails.Environment";
          var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
          var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
       </script>
     ```

 11. In the `<body>` section, include the `<div id="viewer-section">` with a `<div id="dashboard">` inside it. This container can be used to render the dashboard.

     ```js
      <body onload="renderDashboard(dashboardId)"> 
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
      </body>
     ``` 

 12. Create a new folder called `Controllers`. To create a new file called `HomeController.cs` within the `Controllers` folder. To get particular dashboard details, define an API `AuthorizationServer()` using the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()` method are appended as the query parameters in the URL to authorization server of particular dashboard. Include the `Newtonsoft.Json`, `System.Security.Cryptography`, `System.Net.Http` and `Microsoft.AspNetCore.Mvc` namespaces.

     ```js   
         public IActionResult Index()
         { 
             string basePath = AppDomain.CurrentDomain.BaseDirectory;
             string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
             GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
             return View("~/Pages/Home/Index.cshtml");
         }

         [HttpPost]
         [Route("AuthorizationServer")]
         public string AuthorizationServer([FromBody] object embedQuerString)
         {
            var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

            var embedQuery = embedClass.embedQuerString;
            // User your user-email as embed_user_email
            embedQuery += "&embed_user_email=" + GlobalAppSettings.EmbedDetails.UserEmail;
			   //To set embed_server_timestamp to overcome the EmbedCodeValidation failing while different timezone using at client application.
            double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
            embedQuery += "&embed_server_timestamp=" + timeStamp;
            var embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return resultContent;
            }

         }

         public string GetSignatureUrl(string queryString)
         {
            if (queryString != null)
            {
                var encoding = new System.Text.UTF8Encoding();
                var keyBytes = encoding.GetBytes(GlobalAppSettings.EmbedDetails.EmbedSecret);
                var messageBytes = encoding.GetBytes(queryString);
                using (var hmacsha1 = new HMACSHA256(keyBytes))
                {
                    var hashMessage = hmacsha1.ComputeHash(messageBytes);
                    return Convert.ToBase64String(hashMessage);
                }
            }
            return string.Empty;
         }
     ```

 13. Remove the `app.MapRazorPages()` and `builder.Services.AddRazorPages()` lines from the `Program.cs` file and add the following lines of code: `builder.Services.AddControllersWithViews(); app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}")`.
     
     ![Program.cs file](/static/assets/javascript/sample/images/ProgramFile.png#max-width=30%)
     

 14. Create the `Index.js` file under the `wwwroot/js` folder. Define the `renderDashboard()` method, an instance is created and called the `loadDashboard()` method to render the dashboard. The`renderDashboard()`  method helps to render the dashboard using the `Embed SDK` file. 
 
     ![Index.cshtml location ](/static/assets/javascript/sample/images/jsFolder-Core.png#max-width=30%)
 
     ```js
     function renderDashboard(dashboardId) {
            var dashboard = BoldBI.create({
            serverUrl: rootUrl + "/" + siteIdentifier,//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
            dashboardId: dashboardId,//Provide the dashboard id of the dashboard you want to embed here.  
            embedContainerId: "dashboard",//DOM id where the dashboard will be rendered, here it is dashboard.
            embedType: embedType,
            environment: environment,//Your Bold BI application environment.
            width: "100%",
            height: "100%",
            mode: BoldBI.Mode.View,//Rendering mode of the dashboard can be Design and View for the dashboard.
            expirationTime: 100000,//Set the duration for the token to be alive.
                authorizationServer: {
                url: authorizationServerUrl //The URL from which particular dashboard details are obtained from the server.
                }
            
            });
            dashboard.loadDashboard();
        };
     ```

 15. Run the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.

 16. Run your ASP.NET Core sample with the command `dotnet run` in Visual Studio Code.