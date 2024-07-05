---
layout: post
title: Embedding Analytics with Blazor and JavaScript | Bold BI Docs
description: Learn how to embed an analytics dashboard with Blazor and JavaScript application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Blazor using the Embedded SDK

The sample has been provided in the following sections for `Blazor Server`, which demonstrates the dashboard rendering available on your Bold BI server. It is followed by steps to create a new embedding application in `Blazor Server` on your own. 

> **NOTE:** Reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation is the best way to begin. The `Getting Started` guide provides you with all the necessary information you need to know before working on the sample.

## Prerequisites

 * [.NET Core 6.0 or later](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Visual Studio Code](https://code.visualstudio.com/download)

## How to run Blazor Server sample

1. Please [get](https://github.com/boldbi/blazor-server-sample) the Blazor Server sample from GitHub. 

2. Please make sure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.
   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/blazor-server-sample) within the application. Please make sure that you have placed it in the application, as shown in the following image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/blazor-embed-config.png)

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

       
5. Please open your project in `Visual Studio Code` and use the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the command `dotnet build` to build the project.

6. To run the Blazor Server sample, use the command `dotnet watch run` in Visual Studio Code. 

7. The dashboard can be edited in design mode, and you can create a new dashboard with the following changes in the `renderDashboard()` method.

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

> **NOTE:** By default, we represent the dashboard embedding without the dashboard listing sidebar. To enable the dashboard list, you need to navigate to the `dashboardlisting` URL (e.g., `https://localhost:5001/dashboardlisting`).

## How Blazor Server sample works
 1. Based on the dashboard details in the `_Host.cshtml`, authorize the server URL by calling the `AuthorizationServer` function in the following manner.
    ![Authorization Server](/static/assets/javascript/sample/images/blazor-authorize.png#max-width=95%)

 2. In the above authorization, generate the `SignatureUrl` using the provided `EmbedSecret key` and validate the authorization server in Bold BI. Once the details are validated, the dashboard will start to render.

 3. In `embedConfig.json`, change the dashboard ID of the respective dashboard as you wish to embed.
    ![EmbedProperties](/static/assets/javascript/sample/images/prop-core.png#max-width=70%)

## Steps to create new Blazor Server application to embed dashboard

 1. Create a folder in the desired location and open it in the Visual Studio Code. 

 2. Open the terminal in the Visual Studio Code. Please refer to the following image.
    ![Terminal Image](/static/assets/javascript/sample/images/blazor-terminal-image.png)
    
 3. To create a new project, we need to run this command in the terminal.

    ```js
         dotnet new blazorserver
    ```

 4. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 6. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/blazor-server-sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/blazor-embed-config.png)

 7. Create a new folder called `Models`. Create a model class as `DataClass.cs` to define the following properties. These properties are used to get the dashboard details from the server. 

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

 9. The following script is mandatory to render the dashboard. Set the `Layout = null` at the top and the following code in your `\Pages\_Host.cshtml` page of the `<body>` tag. This ready function can be used to render the dashboard.

     ![Index.cshml Image](/static/assets/javascript/sample/images/ViewFolderProperties-blazor.png)

     ```js 
       <div id="dashboard"></div>
       <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
       <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.9.50/boldbi-embed.js"></script>
       <script type="text/javascript">
             var rootUrl = "@GlobalAppSettings.EmbedDetails.ServerUrl";
             var siteIdentifier = "@GlobalAppSettings.EmbedDetails.SiteIdentifier";
             var dashboardId = "@GlobalAppSettings.EmbedDetails.DashboardId";
             var embedType = "@GlobalAppSettings.EmbedDetails.EmbedType";
             var environment = "@GlobalAppSettings.EmbedDetails.Environment";
             var authorizationServerUrl = "/AuthorizationServer";
       </script>
     ``` 
 10. In the `renderDashboard()` method, an instance is created and called the `loadDashboard()` method to render the dashboard.
        ```js
        <script>
               $(document).ready(function () {
              this.dashboard = BoldBI.create({
                serverUrl: rootUrl + "/" + siteIdentifier,
                dashboardId: dashboardId,
                embedContainerId: "dashboard",
                embedType: embedType,
                environment: environment,
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                expirationTime: 100000,
                authorizationServer: {
                    url: authorizationServerUrl
                }
            });
            this.dashboard.loadDashboard();
        });
        </script>
       ```

 11. Create a new folder called `Controllers`. To create a new controller and name it `HomeController.cs`. In the `Controllers\HomeController.cs`. To get particular dashboard details, define an API `AuthorizationServer()` using the `GetSignatureUrl()` method to generate the algorithm. 
 
     In this API, the `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()` method are appended as the query parameters in the URL to authorization server of particular dashboard. 
 
     Include the `Newtonsoft.Json`, `System.Security.Cryptography`, `using BlazorServerTest.Models`, `System.Net.Http` and `Microsoft.AspNetCore.Mvc` namespaces.

     ```js
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
     ```

 12. Open the `Program.cs` file and add the following code snippet before `app.UseHttpsRedirection()`. To read the `embedConfig.json` file to utilize it in the controller. Ensure that the `Newtonsoft.Json` and `models` files are added to the namespaces within the `Program.cs` file.

        ```js
            app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
        ```
        
 13. To run the application, use the command `dotnet watch run` in the terminal. After executing the command, the application will automatically launch in the default browser. You can access it at the specified port number (e.g., `https://localhost:5001`).