---
layout: post
title: Embedding Analytics with ASP.NET Core | Bold BI Docs
description: Learn how to embed an analytics dashboard with an ASP.NET Core application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in ASP.NET Core Sample with Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/aspnet-core-sample) the sample application, which demonstrates the rendering of a single dashboard and a list of dashboards in your Bold BI server. This is followed by steps to create a new embedding application in `ASP.NET Core` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.  

## Prerequisites

* [.NET Core 8.0](https://dotnet.microsoft.com/download/dotnet-core)
* [Visual Studio Code](https://code.visualstudio.com/download)

## How to run the sample

1. Please [get](https://github.com/boldbi/aspnet-core-sample) the ASP.NET Core sample from GitHub.  

2. Please ensure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) within the application. Make sure that you have placed it correctly in the application, as shown in the image.

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

5. Open your project in `Visual Studio Code` and use the command `dotnet restore` to restore the necessary packages. After the packages have been restored, use the command `dotnet build` to build the project.

6. To run your ASP.NET Core sample in Visual Studio Code, use the command `dotnet run`.

> **NOTE:** By default, we display the dashboard embedding without the dashboard listing sidebar. To enable the dashboard list, you need to navigate to the `dashboardlisting` URL (e.g., `https://localhost:5001/dashboardlisting`).

## How this sample works

 1. Based on the values in the `embedConfig.json` file, you will obtain the user token and verify its validity. Following that, you will be able to retrieve the list of dashboards from the server by utilizing the appropriate API.
    ![Get Token](/static/assets/javascript/sample/images/core-home-gettoken.png)

 2. In the `HomeController.cs`, add the `GetDashboards()` action, which will use the `GetToken` method to retrieve the list of dashboards while initializing the DOM in the `Index.html`.
    ![Get Dashboards](/static/assets/javascript/sample/images/core-home-getdashboard.png)

 3. To generate an access token, call the `TokenGeneration` API with the provided `embedConfig` values.
    ![Get token Details](/static/assets/javascript/sample/images/core-token.png)

 4. Once the token is generated, it will be returned to the `index.html` file and the dashboard will start to render it.
    ![Render dashboard](/static/assets/javascript/sample/images/core-dashboard.png)

## Steps to create ASP.NET Core application to embed dashboard

 1. Please create a folder in the desired location and open it in Visual Studio Code.

 2. Next, open the terminal in Visual Studio Code. For reference, please see the image below.
   ![Terminal Image](/static/assets/javascript/sample/images/core-terminal-image.png)

 3. In order to create a new project, we must execute this command within the terminal.
      ```js
         dotnet new webapp
      ```

 4. Please make sure that you have enabled embed authentication on the `embed settings` page. If it is currently not enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) in order to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please click on this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)

 6. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) within the application. Please make sure that you have correctly placed it in the application, as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/core-embed-settings-image.png)

 7. Please create a new folder named `Models` and within it, create a model class called `DataClass.cs` to define the following properties. These properties will be utilized to retrieve the list of dashboards from the server.

    To add the necessary references to the project, execute the following command in the terminal: `dotnet add package Newtonsoft.Json`. Make sure to include the `Newtonsoft.Json` namespaces in the `DataClass.cs` model file.

    ```js
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

 8. Please create another model class called `GlobalAppSettings.cs` to define the following properties. These properties will maintain the object of the `embedConfig.json` file within the `GlobalAppSettings`.

    ```js 
    public class GlobalAppSettings
    {
        public static EmbedDetails EmbedDetails { get; set; }
    }
    ```

 9. Please create a new folder called `Home` within the application. Then, create a new file called `Index.cshtml` within the `Home` folder.

     ![Index.cshml location](/static/assets/javascript/sample/images/CoreViewFolderLocationMvc.png#max-width=30%)

 10. The following script is necessary to display the dashboard. Set the `Layout = null` at the top and add the following code in your `\Pages\Home\Index.cshtml` page within the `<head>` tag.

     ![Index.cshml Image](/static/assets/javascript/sample/images/CoreViewFolderProperties.png)

     ```js 
      <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>
      <script type="text/javascript" src="~/js/Index.js"></script>
      <link rel="stylesheet" href="~/css/site.css" />
      <script type="text/javascript">
         var rootUrl = "@ViewBag.ServerUrl";
         var dashboardId = "@ViewBag.DashboardId";
         var siteIdentifier = "@ViewBag.SiteIdentifier";
         var tokenGenerationUrl = "@Url.Action("TokenGeneration", "Home")";
      </script>
     ```

 11. In the `<body>` section, include the `<div id="viewer-section">` that contains a `<div id="dashboard">`. This container can be utilized to display the dashboard.

      ```js
         <body onload="renderDashboard(dashboardId)">
            <div id="viewer-section" style="width: 100%";>
               <div id="dashboard"></div>
            </div>
         </body>
      ``` 

 12. Please create a new folder called `Controllers`. Then, create a new file called `HomeController.cs` within the `Controllers` folder. To obtain specific dashboard details with token, define an API `TokenGeneration()`. In this API, get the required embed details in the object model. Make sure to include the `Newtonsoft.Json`, `System.Collections.Generic`, `System.Net.Http`, `System.Text`, and `Microsoft.AspNetCore.Mvc` namespaces.

     ```js   
        public IActionResult Index()
        {
            try
            {
                string basePath = AppDomain.CurrentDomain.BaseDirectory;
                string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
                GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);

                // Pass specific properties to the view using ViewBag
                ViewBag.DashboardId = GlobalAppSettings.EmbedDetails.DashboardId;
                ViewBag.ServerUrl = GlobalAppSettings.EmbedDetails.ServerUrl;
                ViewBag.EmbedType = GlobalAppSettings.EmbedDetails.EmbedType;
                ViewBag.Environment = GlobalAppSettings.EmbedDetails.Environment;
                ViewBag.SiteIdentifier = GlobalAppSettings.EmbedDetails.SiteIdentifier;

                return View();
            }
            catch
            {
                return View("EmbedConfigErrorLog");
            }
        }

        [HttpPost]
        [Route("TokenGeneration")]
        public string TokenGeneration()
        {
            var embedDetails = new
            {
                email = GlobalAppSettings.EmbedDetails.UserEmail,
                serverurl = GlobalAppSettings.EmbedDetails.ServerUrl,
                siteidentifier = GlobalAppSettings.EmbedDetails.SiteIdentifier,
                embedsecret = GlobalAppSettings.EmbedDetails.EmbedSecret,
                dashboard = new  // Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
                {
                    id = GlobalAppSettings.EmbedDetails.DashboardId
                }
            };

            //Post call to Bold BI server
            var client = new HttpClient();
            var requestUrl = $"{embedDetails.serverurl}/api/{embedDetails.siteidentifier}/embed/authorize";

            var jsonPayload = JsonConvert.SerializeObject(embedDetails);
            var httpContent = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

            var result = client.PostAsync(requestUrl, httpContent).Result;
            var resultContent = result.Content.ReadAsStringAsync().Result;

            return JsonConvert.DeserializeObject<dynamic>(resultContent).Data.access_token;
        }
     ```

 13. Please remove the lines `app.MapRazorPages()` and `builder.Services.AddRazorPages()` from the `Program.cs` Instead, add the following lines of code: `builder.Services.AddControllersWithViews(); app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}")`.
     
     ![Program.cs file](/static/assets/javascript/sample/images/ProgramFile.png#max-width=30%)
     

 14. Please create the `Index.js` file under the `wwwroot/js` folder. Define the `renderDashboard()` method. Then, create an instance and call the `loadDashboard()` method to render the dashboard. The`renderDashboard()` method will be used to render the dashboard using the `Embed SDK` file. 
 
     ![Index.cshtml location ](/static/assets/javascript/sample/images/jsFolder-Core.png#max-width=30%)
 
     ```js
      function getEmbedToken() {
         return fetch(tokenGenerationUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
         })
         .then(response => {
            if (!response.ok) throw new Error("Token fetch failed");
            return response.text();
         });
      }

      function renderDashboard(dashboardId) {
         getEmbedToken()
            .then(accessToken => {
                  const dashboard = BoldBI.create({
                     serverUrl: rootUrl + "/" + siteIdentifier,
                     dashboardId: dashboardId,
                     embedContainerId: "dashboard",
                     embedToken: accessToken
                  });

                  dashboard.loadDashboard();
            })
            .catch(err => {
                  console.error("Error rendering dashboard:", err);
            });
      };
     ```

 15. To restore the necessary packages, run the command `dotnet restore`. After the packages have been restored, use the command `dotnet build` to build the project.

 16. To run your ASP.NET Core sample in Visual Studio Code, use the command `dotnet run`.