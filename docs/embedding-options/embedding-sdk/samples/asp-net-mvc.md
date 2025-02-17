---
layout: post
title: Embedding Analytics with ASP.NET MVC | Bold BI Docs
description: Learn how to embed an analytics dashboard with an ASP.NET MVC application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in ASP.NET MVC Sample with Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/aspnet-mvc-sample) obtain the sample application. This application demonstrates dashboard rendering with a list of dashboards available in your Bold BI server. It is then followed by steps to create a new embedding application in `ASP.NET MVC `on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The `Getting Started` guide provides you with enough information that you need to know before working on the sample. 

## Prerequisites

* [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
* [.NET Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework)

## How to run the sample

1. Please [get](https://github.com/boldbi/aspnet-mvc-sample) the ASP.NET MVC sample from GitHub.

2. Please make sure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it, using a concise number of words.
   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please click on the following [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.
  
   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-mvc-sample/tree/master/BoldBI.Embed.Sample) within the application. Make sure you have placed it in the application, as shown in the image below.

   ![EmbedConfig image](/static/assets/javascript/sample/images/embed-config.png)

      <meta charset="utf-8"/>
       <table>
       <tbody>
       <tr>
            <td align="left">ServerUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, https://demo.boldbi.com/bi)</td>
       </tr>
       <tr>
          <td align="left">SiteIdentifier</td>
          <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be an empty string.</td>
       </tr>
       <tr>
          <td align="left">UserEmail</td>
          <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list.</td>
       </tr>
       <tr>
          <td align="left">EmbedSecret</td>
          <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a> </td>
       </tr>
       <tr>
          <td align="left">Environment</td>
          <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your own server, use `BoldBI.Environment.Enterprise`)</td>
       </tr>
       <tr>
          <td align="left">DashboardId</td>
          <td align="left">Item id of the dashboard to be embedded in your application.</td>
       </tr>
       <tr>
          <td align="left">ExpirationTime</td>
          <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds)</td>
       </tr>
       </tbody>
      </table>

5. Please run your `ASP.NET MVC` sample in Visual Studio.

> **NOTE:** If you encounter an error with `bin\roslyn\csc.ex`, it means that you need to perform a clean `clean build` and `rebuild`.

6.	The dashboard can be edited in the design mode and create a new dashboard with the following changes in the `renderDashboard()` method.
     
       <meta charset="utf-8"/>
       <table>
       <tbody>
       <tr>
       <td align="left">dashboardId</td>
       <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. This property no need to create a new dashboard.</td>
       </tr>
       <tr>
       <td align="left">mode</td>
       <td align="left">In which mode you want to render dashboard. It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode.</td>
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
                environment: environment, // If Cloud, you should use BoldBI.Environment.Cloud
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

> **NOTE:** By default, we display the dashboard embedding without the dashboard listing sidebar. To access the dashboard list, you need to navigate to the `dashboardlisting` URL (e.g., `https://localhost:44382/home/dashboardlisting`).

 ## How this sample works

 1. Based on the values in the `embedConfig.json` file, you will retrieve the user token and validate it. After that, you can obtain the dashboard list from the server.

 2. In `HomeController.cs`file, we have added the `GetToken()` method and `GetDashboards()` action, which are called when initializing the DOM in `Index.html`.
    ![Get Dashboards](/static/assets/javascript/sample/images/mvc-home-getdashboard.png)

 3. When choosing the dashboard to display, authorize the server URL by making a call to the `AuthorizationServer` action using the values provided in the `embedConfig.json` file.
    ![Authorization Server](/static/assets/javascript/sample/images/mvc-home-getdetails.png)

 4. In the above authorization, we generated the `SignatureUrl` using the provided `EmbedSecret key` and validated the embed details in Bold BI. Only then, the dashboard will be rendered in the viewer section of `Index.cshtml`.

## Steps to create new ASP.NET MVC application to embed dashboard

 1. To begin, open Visual Studio and select `Create` new project.

 2. Next, choose ASP.NET Web Application (.NET Framework) and click Next.
    ![SelectProject](/static/assets/javascript/sample/images/MVC_framework.png)

 3. Please feel free to change the project name as desired, and then click on the Create button.

 4. Please select MVC and Web API, and then click OK.
    ![SelectProject](/static/assets/javascript/sample/images/MVC_WebAPI.png#max-width=68%)

 5. Please make sure that you have enabled embed authentication on the embed `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 6. To download the `embedConfig.json` file, please click on the following [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the accompanying image for visual guidance.
   
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![SelectProject](/static/assets/javascript/sample/images/prop-core.png)

 7. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-mvc-sample/tree/master/BoldBI.Embed.Sample) within the application. Please make sure you have placed it in the application, as shown in the image below.

    ![EmbedConfig image](/static/assets/javascript/sample/images/embed-config.png)

 8. Create a model class called `ApiResponse.cs` to define the properties of the API response, as shown below. Make sure to include the `System.Runtime.Serialization` and `System` namespaces in the `ApiResponse.cs` model file.
    
    ```js
        [Serializable]
        [DataContract]
        public class ApiResponse
        {
            /// <summary>
            /// Returns the status of the API.
            /// </summary>
            [DataMember]
            public bool ApiStatus
            {
                get;
                set;
            }

            /// <summary>
            /// Returns data from the API.
            /// </summary>
            [DataMember]
            public object Data
            {
                get;
                set;
            }

            /// <summary>
            /// Returns status of the API request.
            /// </summary>
            [DataMember]
            public bool Status
            {
                get;
                set;
            }

            /// <summary>
            /// Returns the status message from the API.
            /// </summary>
            [DataMember]
            public string StatusMessage
            {
                get;
                set;
            }

            /// <summary>
            /// Returns the message from the API.
            /// </summary>
            [DataMember]
            public string Message
            {
                get;
                set;
            }
       }
    ```

 9. Please create another model class named `DataClass.cs` to define the following properties. These properties will be used to retrieve the dashboard details from the server. Please make sure to include the `System.Runtime.Serialization` namespace in the `DataClass.cs` model file.

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

 10. Please create another model class called `GlobalAppSettings.cs`. This class will define the following properties that will maintain the `embedConfig.json` file object within the `GlobalAppSettings`. Make sure to include the static `static BoldBI.Embed.Sample.Models.DataClass` namespace in the `GlobalAppSettings.cs` model file.

     ```js
        public class GlobalAppSettings
        {
           public static EmbedDetails EmbedDetails { get; set; }
        }
     ```

 11. The following script is necessary to display the dashboard. Set the `Layout = null` at the top and replace the code below in the  `<head>` tag of your `\Views\Home\Index.cshtml` page. Make sure the Models folder is included in the namespaces.
  
     ![Index.cshml location](/static/assets/javascript/sample/images/ViewFolderLocationMvc.png#max-width=30%)

     ```js 
         <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v10.1.18/boldbi-embed.js"></script>
         <link rel="stylesheet" href="~/Content/Site.css" />
         <script type="text/javascript" src="~/Scripts/Embed/Index.js"></script>
         <script type="text/javascript">
          var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
          var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
          var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
          var environment = "@GlobalAppSettings.EmbedDetails.Environment";
          var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
          var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
         </script>
     ```

 12. In the `<body>` section, include the `<div id="viewer-section">` with a `<div id="dashboard">` inside it. This container can be used to display the dashboard.

      ```js
          <body onload="renderDashboard(dashboardId)">
          <div id="viewer-section">
            <div id="dashboard"></div>
          </div>
          </body>
      ``` 

 13. To obtain specific dashboard details in the `Controllers\HomeController.cs`, an API `AuthorizationServer()` needs to be defined. This API will utilize the `GetSignatureUrl()` method to generate the algorithm. The `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()` method should be added as query parameters in the URL to fetch the desired dashboard details. Please make sure to include the `Newtonsoft.Json` and `System.Security.Cryptography` namespaces.

        ```js
            public ActionResult Index()
            {
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
            GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
            return View();
            }

            [System.Web.Http.HttpPost]
            [System.Web.Http.Route("AuthorizationServer")]
            public ActionResult AuthorizationServer(string embedQuerString, string dashboardServerApiUrl)
            {
            embedQuerString += "&embed_user_email=" + GlobalAppSettings.EmbedDetails.UserEmail;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString.ToLower() + "&embed_signature=" + GetSignatureUrl(embedQuerString.ToLower());

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return Json(resultContent);
            }
            }

            public string GetSignatureUrl(string message)
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

 14. Open the `Scripts` folder. Inside the `Scripts` folder, create a new folder called `Embed`. Inside the `Embed` folder, create a new file called `Index.js`. Define the `renderDashboard()` method, an instance is created and called the `loadDashboard()` method to render the dashboard. The`renderDashboard()`  method helps to render the dashboard using the `Embed SDK` file. 
 
     ![Index.cshtml location ](/static/assets/javascript/sample/images/jsFolder-MVC.png#max-width=30%)
 
     ```js
        function renderDashboard(dashboardId) {
            var dashboard = BoldBI.create({
                serverUrl: rootUrl + "/" + siteIdentifier, //Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
                dashboardId: dashboardId, //Provide the dashboard id of the dashboard you want to embed here.   
                embedContainerId: "dashboard", //DOM id where the dashboard will be rendered, here it is dashboard.
                embedType: embedType,
                environment: environment, // If Cloud, you should use BoldBI.Environment.Cloud
                width: "100%",
                height: "100%",
                mode: BoldBI.Mode.View, //Rendering mode of dashboard it can be Design and View for dashboard.
                expirationTime: 100000, //Set the duration for the token to be alive.
                authorizationServer: {
                    url: authorizationServerUrl //URL from which particular dashboard details is obtained from server.
                }      
            });
            dashboard.loadDashboard();
        };
     ```

 15. Please open the `Global.asax.cs` file and add the following code sample.
           
      ```js   
          string basePath = AppDomain.CurrentDomain.BaseDirectory;
          string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
          GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
      ```

 16. Please run your ASP.NET MVC sample in Visual Studio.