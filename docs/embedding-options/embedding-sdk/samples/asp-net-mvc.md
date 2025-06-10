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

1. Please get the [ASP.NET MVC](https://github.com/boldbi/aspnet-mvc-sample) sample from GitHub.

2. Please make sure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
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

6. By default, we display the dashboard embedding without the dashboard listing sidebar. To access the dashboard list, you need to navigate to the `dashboardlisting` URL (e.g., `https://localhost:44382/home/dashboardlisting`).

7.	The dashboard can be edited in the design mode and create a new dashboard with the following changes in the `renderDashboard()` method.
     
    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode.</td>
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
             environment: environment, // If Cloud, you should use BoldBI.Environment.Cloud
             mode: BoldBI.Mode.Design,
             authorizationServer: {
                url: authorizationServerUrl
             }
       });
       dashboard.loadDesigner();
    };
    ```

 ## How this sample works

 ### Single Dashboard Embedding

 1. In `HomeController.cs`, the `Index()` method reads values from `embedConfig.json` and stores them in the server-side model. These values are then assigned to JavaScript variables in `Index.cshtml` for front-end use. The `authorizationServer` URL is configured to call the `AuthorizationServer` action for authentication.

    ```js
    public ActionResult Index()
    {
       string basePath = AppDomain.CurrentDomain.BaseDirectory;
       string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
       GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
       return View();
    }
    ```

    ```js
    <html>
       <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
          <link rel="stylesheet" href="~/Content/Site.css" />
          <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>
          <script type="text/javascript" src="~/Scripts/Embed/Index.js"></script>
          <script type="text/javascript">
             var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
             var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
             var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
             var environment = "@GlobalAppSettings.EmbedDetails.Environment";
             var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
             var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
          </script>
       </head>
       <body onload="renderDashboard(dashboardId)">
          <div id="viewer-section" style="width: 100%";>
             <div id="dashboard"></div>
          </div>
       </body>
    </html>
    ```

 2. The renderDashboard(dashboardId) function runs when the page loads. It initializes the BoldBI.create() function, setting key parameters like the server URL, dashboard ID, environment, embedContainerId, and the authorizationServer URL is assigned for authentication..

    ```js
    function renderDashboard(dashboardId) {
       this.dashboard = BoldBI.create({
          serverUrl: rootUrl + "/" + siteIdentifier,
          dashboardId: dashboardId,
          embedContainerId: "dashboard",
          environment: environment,
          authorizationServer: {
             url: authorizationServerUrl
          }
       });
       this.dashboard.loadDashboard();
    };
    ```

 4. In the authorization, we generated the `SignatureUrl` using the provided `EmbedSecret key` and validated the embed details in Bold BI. Only then, the dashboard will be rendered in the viewer section of `Index.cshtml`.

    ```C#
      [HttpPost]
      [Route("AuthorizationServer")]
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
    ```

 ### Dashboard Listing

1. The `DashboardListing` action in `HomeController.cs` retrieves the necessary properties from `embedConfig`, deserializes them into `GlobalAppSettings.EmbedDetails`, and passes them to the view.

    ```C#
    [HttpGet]
    [Route("DashboardListing")]
    public ActionResult DashboardListing()
    {
       string basePath = AppDomain.CurrentDomain.BaseDirectory;
       string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
       GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
       return View();
    }
    ```

    ```C#
      <!DOCTYPE html>
         <html>
         <head>
            <link rel="stylesheet" href="~/Content/Site.css" />
            <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>
            <script type="text/javascript" src="~/Scripts/Embed/Index.js"></script>
            <script type="text/javascript">
               var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
               var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
               var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
               var environment = "@GlobalAppSettings.EmbedDetails.Environment";
               var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
               var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
               var getDashboardsUrl = "@Url.Action("GetDashboards", "Home")";
            </script>
         </head>
      
         <body onload="Init()">
            <div id="container">
               <div class="header-section">
                     <div id="grid-title">All Dashboard</div>
               </div>
               <div id="panel">
               </div>
            </div>
            <div id="viewer-section">
               <div id="dashboard"></div>
            </div>
         </body>
      </html>
    ```

2. When the page loads, the Init() function triggers an AJAX request to the getDashboardsUrl endpoint, where the GetDashboards() method in `HomeController.cs` retrieves an authentication token using GetToken() and fetches the list of available dashboards from the Bold BI server.
   
    ```js
    function Init() {
       var http = new XMLHttpRequest();
       http.open("GET", getDashboardsUrl, true);
       http.responseType = 'json';
       http.setRequestHeader("Content-type", "application/json");
       http.onreadystatechange = function () {
           if (http.readyState == 4 && http.status == 200) {
               ListDashboards.call(this, typeof http.response == "object" ? http.response : JSON.parse(http.response));
           }
           else if (http.readyState == 4 && http.status == 404) {
               console.log("Server not found");
           }
           else if (http.readyState == 4) {
               console.log(http.statusText);
           }
       };
       http.send();
    };
    ```

    ```C#
    [HttpGet]
    [Route("dashboards/get")]
    public string GetDashboards()
    {
       var token = GetToken();
 
       using (var client = new HttpClient())
       {
             client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
             client.DefaultRequestHeaders.Accept.Clear();
             client.DefaultRequestHeaders.Add("Authorization", token.TokenType + " " + token.AccessToken);
             var result = client.GetAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/v2.0/items?ItemType=2").Result;
             string resultContent = result.Content.ReadAsStringAsync().Result;
             return resultContent;
       }
    }
    
    public Token GetToken()
    {
       using (var client = new HttpClient())
       {
             System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
             client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
             client.DefaultRequestHeaders.Accept.Clear();
 
             var content = new FormUrlEncodedContent(new[]
             {
                new KeyValuePair<string, string>("Username", GlobalAppSettings.EmbedDetails.UserEmail),
                new KeyValuePair<string, string>("grant_type", "embed_secret"),
                new KeyValuePair<string, string>("embed_secret", GlobalAppSettings.EmbedDetails.EmbedSecret)
             });
             var result = client.PostAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/token", content).Result;
             string resultContent = result.Content.ReadAsStringAsync().Result;
             var response = JsonConvert.DeserializeObject<Token>(resultContent);
             return response;
       }
    }
    ```

3. Once the dashboards are retrieved, the `ListDashboards()` function is called with the fetched data. This function automatically loads the first dashboard from the list by calling `renderDashboard(data[0].Id)`.
    
    ```js
    function ListDashboards(data) {
      if (typeof (data) != "undefined" && data != null) {
         renderDashboard(data[0].Id);
         data.forEach(function (element) {
               var divTag = document.createElement("div");
               divTag.innerHTML = element.Name;
               divTag.className = "dashboard-item";
               divTag.setAttribute("onclick", "renderDashboard('" + element.Id + "')");
               divTag.setAttribute("name", element.Name);
               divTag.setAttribute("itemid", element.Id);
               divTag.setAttribute("version", element.Version);
               divTag.setAttribute("ispublic", element.IsPublic);
               document.getElementById("panel").appendChild(divTag);
         });
      }
    }

    function renderDashboard(dashboardId) {
      this.dashboard = BoldBI.create({
         serverUrl: rootUrl + "/" + siteIdentifier,
         dashboardId: dashboardId,
         embedContainerId: "dashboard",
         environment: environment,
         authorizationServer: {
               url: authorizationServerUrl
         }
      });

      this.dashboard.loadDashboard();
    };
    ```

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

 8. Please create another model class named `DataClass.cs` to define the following properties. These properties will be used to retrieve the dashboard details from the server. Please make sure to include the `using Newtonsoft.Json;` namespace in the `DataClass.cs` model file.

    ```js
       public class Token
       {
          [JsonProperty("access_token")]
          public string AccessToken { get; set; }
 
          [JsonProperty("token_type")]
          public string TokenType { get; set; }
 
          [JsonProperty("expires_in")]
          public string ExpiresIn { get; set; }
 
          [JsonProperty("email")]
          public string Email { get; set; }
 
          [JsonProperty(".issued")]
          public string Issued { get; set; }
 
          [JsonProperty(".expires")]
          public string Expires { get; set; }
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

 9. Please create another model class called `GlobalAppSettings.cs`. This class will define the following properties that will maintain the `embedConfig.json` file object within the `GlobalAppSettings`. Make sure to include the static `static BoldBI.Embed.Sample.Models.DataClass` namespace in the `GlobalAppSettings.cs` model file.

    ```js
       public class GlobalAppSettings
       {
          public static EmbedDetails EmbedDetails { get; set; }
       }
    ```

 10. The following script is necessary to display the dashboard. Set `Layout = null` at the top and replace the code below in the `<head>` tag of your page. Ensure that the Models folder is included in the namespaces.

     **Single Dashboard Embedding**
 
     ```js
     <head>
     <link rel="stylesheet" href="~/Content/Site.css" />
      <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v12.1.5/boldbi-embed.js"></script>
      <script type="text/javascript" src="~/Scripts/Embed/Index.js"></script>
      <script type="text/javascript">
         var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
         var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
         var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
         var environment = "@GlobalAppSettings.EmbedDetails.Environment";
         var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
         var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
      </script>
     </head>
     ``` 
     In the `<body>` section, include the `<div id="viewer-section">` with a `<div id="dashboard">` inside it. This container can be used to display the dashboard. 
     ```js
     <body onload="renderDashboard(dashboardId)">
        <div id="viewer-section">
           <div id="dashboard"></div>
        </div>
     </body>
     ```
 
     **Dashboard Listing**

     To embed a dashboard in dashboard listing page, create a new Razor view named `DashboardListing.cshtml` and set `Layout = null` at the top of the file. Replace the `<head>` section of your page with the following code, ensuring that the Models folder is included in the namespaces.

     ```js
      <head>
         <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>
         <link rel="stylesheet" href="~/Content/Site.css" />
         <script type="text/javascript" src="~/Scripts/Embed/Index.js"></script>
         <script type="text/javascript">
               var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
               var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
               var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
               var environment = "@GlobalAppSettings.EmbedDetails.Environment";
               var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
               var authorizationServerUrl = "@Url.Action("AuthorizationServer", "Home")";
               var getDashboardsUrl = "@Url.Action("GetDashboards", "Home")";
         </script>
      </head>
     ```

     In the `<body>` section, include a container to display the list of dashboards and a `<div id="viewer-section">` with a nested `<div id="dashboard">`. This section will be used to display the selected dashboard.

     ```js
     <body onload="Init()">
        <div id="container">
           <div class="header-section">
                 <div id="grid-title">All Dashboards</div>
           </div>
           <div id="panel">
           </div>
        </div>
        <div id="viewer-section">
           <div id="dashboard"></div>
        </div>
     </body>
     ```
     To style the Dashboard Listing page correctly, add the following CSS rules to your `Site.css` file.

     ```css
      ul {
         list-style-type: none;
         padding-left: 0;
      }

      .tab {
         padding-top: 2px;
         padding-bottom: 18px;
         cursor: pointer
      }

      .active {
         background-color: burlywood;
      }

      #container {
         width: 13%;
         float: left;
         height: 100%;
         float: left;
         background: #f4f4f4;
         height: 100%;
         box-shadow: 2px 0 4px 0 rgba(0, 0, 0, .12);
         overflow: auto;
         overflow-x: hidden;
      }

      #grid-title {
         font-size: 17px;
         border-bottom: 1px solid #333;
         padding: 15px;
      }

      #panel {
         width: 100%;
         float: left;
         background: #f4f4f4;
         overflow: auto;
      }

      #dashboard {
         width: 100%;
         float: left;
         height: 100%;
         display: block;
      }

      .dashboard-item {
         padding: 10px;
         border-bottom: 1px solid #ccc;
         cursor: pointer;
      }

      #viewer-section {
         width: 87%;
         height: 100%;
         float: left;
      }

      #viewer-header {
         padding: 10px;
         display: block;
         float: left;
         width: 100%;
      }

      #create-dashboard {
         float: right;
         margin-right: 20px;
         background: #0565ff;
         border: 0;
         border-radius: 4px;
         color: #fff;
         cursor: pointer;
         display: inline-block;
         font-size: 12px;
         font-weight: 600;
         height: 28px;
         line-height: 28px;
         min-width: 90px;
         outline: none;
         text-align: center;
         border: 1px solid #0450cc;
      }
      ```
 
 11. Please create a new folder called `Controllers`. Then, create a new file called `HomeController.cs` within the `Controllers` folder. To obtain specific dashboard details in the `Controllers\HomeController.cs`, an API method called `AuthorizationServer()` needs to be defined. This API will utilize the `GetSignatureUrl()` method to generate the algorithm. The parameters `embedQueryString`, `userEmail`, and the value from the `GetSignatureUrl()` method should be added as query parameters in the URL to fetch the desired dashboard details. Please ensure that the `Newtonsoft.Json` and `System.Security.Cryptography` namespaces are included.

     ```js
     public ActionResult Index()
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
     Additionally, include the `GetDashboards()` and `GetToken()` functions to retrieve the list of dashboards and display the dashboard listing page.

     ```C#
     [HttpGet]
     [Route("DashboardListing")]
     public ActionResult DashboardListing()
     {
        return View();
     }
     
     [HttpGet]
     [Route("dashboards/get")]
     public string GetDashboards()
     {
      var token = GetToken(); 
      using (var client = new HttpClient())
      {
         client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
         client.DefaultRequestHeaders.Accept.Clear();
         client.DefaultRequestHeaders.Add("Authorization", token.TokenType + " " + token.AccessToken);
         var result = client.GetAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/v2.0/items?ItemType=2").Result;
         string resultContent = result.Content.ReadAsStringAsync().Result;
         return resultContent;
      }
     } 
     public Token GetToken()
     {
        using (var client = new HttpClient())
        {
         System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls | System.Net.SecurityProtocolType.Tls11 | System.Net.SecurityProtocolType.Tls12;
         client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
         client.DefaultRequestHeaders.Accept.Clear(); 
         var content = new FormUrlEncodedContent(new[]
         {
            new KeyValuePair<string, string>("Username", GlobalAppSettings.EmbedDetails.UserEmail),
            new KeyValuePair<string, string>("grant_type", "embed_secret"),
            new KeyValuePair<string, string>("embed_secret", GlobalAppSettings.EmbedDetails.EmbedSecret)
         });
         var result = client.PostAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/token", content).Result;
         string resultContent = result.Content.ReadAsStringAsync().Result;
         var response = JsonConvert.DeserializeObject<Token>(resultContent);
         return response;
        }
     }
     ```

 12. Open the `Scripts` folder. Inside the `Scripts` folder, create a new folder called `Embed`. Within the `Embed` folder, create a new file named `Index.js`. Define the `renderDashboard()` method, which creates an instance and calls the `loadDashboard()` method to render the dashboard. The `renderDashboard()` method is responsible for rendering the dashboard using the `Embed SDK` file.

     ![Index.cshtml location](/static/assets/javascript/sample/images/jsFolder-MVC.png#max-width=30%)

     ```js
     function renderDashboard(dashboardId) {
        var dashboard = BoldBI.create({
           serverUrl: rootUrl + "/" + siteIdentifier, // Dashboard Server BI URL (e.g., http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
           dashboardId: dashboardId, // Provide the dashboard ID of the dashboard you want to embed here.   
           embedContainerId: "dashboard", // DOM ID where the dashboard will be rendered; here it is "dashboard".
           environment: environment, // If Cloud, you should use BoldBI.Environment.Cloud
           mode: BoldBI.Mode.View, // Rendering mode of the dashboard; it can be either Design or View.
           expirationTime: 100000, // Set the duration for which the token will be valid.
           authorizationServer: {
              url: authorizationServerUrl // URL from which the specific dashboard details are obtained from the server.
           }      
        });
        dashboard.loadDashboard();
     }
     ```
    
     For dashboard listing, additionally include the following scripts in the `Index.js` file:
    
       ```js
       function Init() {
          var http = new XMLHttpRequest();
          http.open("GET", getDashboardsUrl, true);
          http.responseType = 'json';
          http.setRequestHeader("Content-type", "application/json");
          http.onreadystatechange = function () {
             if (http.readyState == 4 && http.status == 200) {
                   ListDashboards.call(this, typeof http.response == "object" ? http.response : JSON.parse(http.response));
             } else if (http.readyState == 4 && http.status == 404) {
                   console.log("Server not found");
             } else if (http.readyState == 4) {
                   console.log(http.statusText);
             }
          };
          http.send();
       }
    
       function ListDashboards(data) {
          if (typeof data !== "undefined" && data !== null) {
             renderDashboard(data[0].Id);
             data.forEach(function (element) {
               var divTag = document.createElement("div");
               divTag.innerHTML = element.Name;
               divTag.className = "dashboard-item";
               divTag.setAttribute("onclick", "renderDashboard('" + element.Id + "')");
               divTag.setAttribute("name", element.Name);
               divTag.setAttribute("itemid", element.Id);
               divTag.setAttribute("version", element.Version);
               divTag.setAttribute("ispublic", element.IsPublic);
               document.getElementById("panel").appendChild(divTag);
             });
          }
       }
       ```

 13. Please run your ASP.NET MVC sample in Visual Studio.