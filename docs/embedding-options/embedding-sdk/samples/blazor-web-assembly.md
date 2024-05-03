---
layout: post
title: Embedding Analytics with Blazor Web Assembly | Bold BI Docs
description: Learn how to embed an analytics dashboard with a Blazor web assembly using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Blazor using the Embedded SDK

The sample has been provided in the following sections for `Blazor WebAssembly`, which demonstrates the dashboard rendering available on your Bold BI server. It is followed by steps to create a new embedding application in `Blazor WebAssembly` on your own.

> **NOTE:** Reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation is the best way to begin. The `Getting Started` guide provides you with sufficient information that you need to know before working on the sample.

## Prerequisites

 * [.NET Core 7.0](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Visual Studio Code](https://code.visualstudio.com/download)

## How to run Blazor WebAssembly sample

1. Please [get](https://github.com/boldbi/blazor-webassembly-sample) the Blazor WebAssembly sample from GitHub. 

2. Please make sure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Furthermore, you can refer to the image below for visual guidance.
   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

4. Please copy the downloaded `embedConfig.json` file and paste it into the `Server folder` [location](https://github.com/boldbi/blazor-webassembly-sample/tree/master/BlazorWebAssembly/Server) within the application. Please ensure you have placed it in the application, as shown in the following image. 

   ![EmbedConfig image](/static/assets/javascript/sample/images/blazor-webassembly-embed-config.png)

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

5. Please open your [project](https://github.com/boldbi/blazor-webassembly-sample/tree/master/BlazorWebAssembly) in `Visual Studio Code`.

6. Then, open the `terminal` and navigate to the `Server` project directory by using `cd command` (e.g., `cd C:\BlazorProject\Server`).

7. To run the application, use the command `dotnet watch run` in the Visual Studio Code terminal.

8. You can edit the dashboard in design mode and create a new dashboard with the following changes in the `renderDashboard()` method.

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard ID of the dashboard you want to embed in view or edit mode. In order to create a new dashboard, please exclude this specific property.</td>
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
        function renderDashboard() {
          this.dashboard = BoldBI.create({
                serverUrl: data.ServerUrl + "/" + data.SiteIdentifier,
                dashboardId: data.DashboardId,
                embedContainerId: "dashboard",
                embedType: data.EmbedType,
                environment: data.Environment,
                mode: BoldBI.Mode.Design,
                width: window.innerWidth - 300 + "px",
                height: window.innerHeight - 100 + "px",
                expirationTime: 100000,
                authorizationServer: {
                    url: authorizationServerUrl
                },
            });
            dashboard.loadDesigner();
        };
     ```

## How the Blazor WebAssembly sample works

 1. Based on the dashboard provided in the `index.html`, authorize the server URL by calling the `AuthorizationServer` function as follows.
    ![Authorization Server](/static/assets/javascript/sample/images/blazor-authorize.png#max-width=95%)

 2. In the above authorization, generate the `SignatureUrl` using the provided `EmbedSecret key` and validate the authorization in Bold BI. Once the authorization is validated, the dashboard will begin to render.

 3. In the `embedConfig.json` file, modify the dashboard ID of the respective dashboard as desired for embedding.
    ![EmbedProperties](/static/assets/javascript/sample/images/prop-core.png#max-width=70%)

## Steps to create new Blazor WebAssembly application to embed dashboard

 1. Please create a folder in the desired location and open it in Visual Studio Code.

 2. Open the terminal in the Visual Studio Code. Please refer to the following image.
    ![Terminal Image](/static/assets/javascript/sample/images/blazor-webassembly-terminal-img.png)
    
 3. In order to create a new project, we must execute the following command in the terminal.

    ```js
         dotnet new blazorwasm --hosted
    ```

 4. Please make sure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) provided.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please click on the following [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Furthermore, you can use the image below for visual guidance.
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 6. Please copy the downloaded `embedConfig.json` file and paste it into the `Server folder` [location](https://github.com/boldbi/blazor-webassembly-sample/tree/master/BlazorWebAssembly/Server) within the application. Please make sure that you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/blazor-webassembly-embed-config.png)

 7. In the `Shared project`, create a new folder called `Models`. Create a model class as `DataClass.cs` to define the following properties. These properties are used to retrieve the dashboard details from the server.

    Open the terminal and navigate to the `Shared project` directory using the cd command(e.g., `cd C:\BlazorProject\Shared`). Execute the following commands in the terminal to add the necessary references to the project: `dotnet add package Newtonsoft.Json` and `dotnet add package System.Runtime.Serialization.Primitives`. Make sure to include `System.Runtime.Serialization` and `Newtonsoft.Json` namespaces are in the `DataClass.cs` model file.

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

 8. In the `Shared Project`, create another model class called `GlobalAppSettings.cs` to define the following properties. These properties will store the `embedConfig.json` file object within the `GlobalAppSettings`.

    ```js 
    public class GlobalAppSettings
    {
        public static EmbedDetails EmbedDetails { get; set; }
    }
    ```

9. In the `Client project`, the following scripts and style sheets are mandatory to render the dashboard. Include the following code in your `\wwwroot\index.html` page of the `<head>` tag.

    ```js 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.8.18/boldbi-embed.js"></script>
    ```

10. Inside the `<body>` tag, create the DOM element with the id `dashboard` and implement a function to render the dashboard.

    ```js
        <script>
        var data;
        var authorizationServerUrl = "api/EmbedData/AuthorizationServer";
        async function fetchDataAndHandleErrors() {
            try {
                const response = await fetch('/api/EmbedData/GetConfig');
                const embedConfig = await response.json();
                data = embedConfig;
            } catch (error) {
                window.location.href = 'api/EmbedData/EmbedConfigErrorLog';
            }
        }
        fetchDataAndHandleErrors();

        function renderDashboard() {
            this.dashboard = BoldBI.create({
                serverUrl: data.ServerUrl + "/" + data.SiteIdentifier,
                dashboardId: data.DashboardId, // Provide the item id here to render the dashboard in design mode or to create dashboard don't initialize this property
                embedContainerId: "dashboard",
                embedType: data.EmbedType,
                environment: data.Environment,
                mode: BoldBI.Mode.View,
                width: "100%",
                height: window.innerHeight - 20 + "px",
                expirationTime: 100000,
                authorizationServer: {
                    url: authorizationServerUrl
                },
            });
            this.dashboard.loadDashboard();
        }
        </script>
    ```

 11. Open the `Index.razor` file in the `Client project` and implement the code as shown to invoke the `renderDashboard()` method.

     ```js
        @page "/"
        @inject IJSRuntime JsRuntime

        <div id="dashboard"> </div>

        @functions {
        protected override void OnAfterRender(bool firstRender)
        {

            JsRuntime.InvokeAsync<object>("renderDashboard");
        }
        }
     ```

 12. Open the `MainLayout.razor` file in the `Client project` and replace the code mentioned below.

     ```js
          @inherits LayoutComponentBase
          <div class="page">
          <main>
             <article class="content px-4">
             @Body
             </article>
          </main>
          </div>
     ```

 13. In the `Server project`, create the `EmbedDataController.cs` controller under the controller folder. To obtain specific dashboard details, define an API called `AuthorizationServer()` which utilizes the `GetSignatureUrl()` method to generate the algorithm. In this API, append the `embedQueryString`, `userEmail`, and the value from the `GetSignatureUrl()` method as query parameters in the URL to the authorization server of the specific dashboard.

     Open the terminal and navigate to the `Server project` directory using the cd command (e.g., `cd C:\BlazorProject\Server`). Execute the following commands in the terminal to add the necessary reference to the project: `dotnet add package Newtonsoft.Json`. Include the namespaces for the `Newtonsoft.Json`, `System.Security.Cryptography`, `System.Net.Http`, `Microsoft.AspNetCore.Mvc`, and `Models` folders.

     ```js
        [Route("api/[controller]")]
        [ApiController]
        public class EmbedDataController : Controller
        {
        [HttpGet]
        [Route("GetConfig")]
        public IActionResult GetConfig()
        {
            var jsonData = System.IO.File.ReadAllText("embedConfig.json");
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
            GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
            return Ok(jsonData);
        }
        [HttpPost("[action]")]
        [Route("AuthorizationServer")]
        public string AuthorizationServer([FromBody] object embedQuerString)
        {
            var embedClass = JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());
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

        public string GetSignatureUrl(string message)
        {
            var encoding = new System.Text.UTF8Encoding();
            var keyBytes = encoding.GetBytes(GlobalAppSettings.EmbedDetails.EmbedSecret);
            var messageBytes = encoding.GetBytes(message);
            using (var hmacsha1 = new System.Security.Cryptography.HMACSHA256(keyBytes))
            {
                var hashMessage = hmacsha1.ComputeHash(messageBytes);
                return Convert.ToBase64String(hashMessage);
            }
        }
        }
     ```

 14. Navigate to the `Server project` directory using the cd command, such as `cd C:\BlazorProject\Server`. Run your `Blazor WebAssembly` sample with the command `dotnet watch run` in Visual Studio Code.