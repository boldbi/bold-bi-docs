---
layout: post
title: Embedding Analytics with ASP.NET Core and Vue | Bold BI Docs
description: Learn how to embed an analytics dashboard with ASP.NET Core and Vue.js application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Vue.js with ASP.NET core using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/vue-with-aspnet-core-sample) the sample application, which demonstrates the rendering of the dashboard available on your Bold BI server. This is followed by steps to create a new embedding application in `Vue.js` with `ASP.NET Core` on your own. 

> **NOTE:** The recommended starting point is to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide provides all the necessary information you need to know before working on the sample.

## Requirements/Prerequisites

 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Node.js](https://nodejs.org/en/)

 > **NOTE:** Node.js versions 18.17 to 20.15 are supported.

## How to run the sample

 1. Please retrieve the [Vue.js with ASP.NET core](https://github.com/boldbi/vue-with-aspnet-core-sample/) sample from GitHub.       

 2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Furthermore, you can refer to the accompanying image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

  4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/BoldBI.Embed.Sample/BoldBI.Embed.Sample) within the application. Please make sure that you have placed it in the application exactly as shown in the image below.

     ![EmbedConfig Location Image](/static/assets/javascript/sample/images/vuejs-core-embedconfig.png)

      <meta charset="utf-8"/>
      <table>
      <tbody>
      <tr>
      <td align="left">ServerUrl</td> 
      <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
      </tr>
      <tr>
      <td align="left">SiteIdentifier</td>
      <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
      </tr>
      <tr>
      <td align="left">Environment</td>
      <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use <code>BoldBI.Environment.Cloud</code>; if it is your own server, use <code>BoldBI.Environment.Enterprise</code>).</td>
      </tr>
      <tr>
      <td align="left">DashboardId</td>
      <td align="left">Item id of the dashboard to be embedded in your application.</td>
      </tr>
      <tr>
      <td align="left">EmbedSecret</td>
      <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a></td>
      </tr>
      <tr>
      <td align="left">UserEmail</td>
      <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard</td>
      </tr>
      <tr>
      <td align="left">ExpirationTime</td>
      <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
      </tr>
      </tbody>
      </table>

 5. Please open your `ASP.NET Core` sample in **Visual Studio Code.**
    
 6. To run the back-end `ASP.NET Core` sample, use the following command: `dotnet run`.

 7. Please open the `Vue` sample in a new window of **Visual Studio Code.**

 8. To install all dependent packages, use the following command: `npm install.`.

 9. To run your `Vue` sample, use the following command: `npm run serve`.

 10. The dashboard can be edited in design mode. Please create a new dashboard with the following changes in the `renderDashboard()` method.

     <meta charset="utf-8"/>
     <table>
     <tbody>
     <td align="left">mode</td>
     <td align="left">In which mode do you want to render the dashboard? It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode.         </td>
     </tr>
     <tr>
     <td align="left">authorizationServer</td>
     <td align="left">Url of the 'authorizationServerAPI' action in the application.</td>
     </tr>
      <tr>
      <td align="left">RenderDesigner</td>
      <td align="left">loadDesigner()</td>
        </tr>
     </tbody>
     </table>

     ```js
           renderDashboard(data) {
                 this.dashboard= BoldBI.create({
                 serverUrl: data.ServerUrl+"/" + data.SiteIdentifier,
                 dashboardId: data.DashboardId,
                 embedContainerId: "dashboard",
                 embedType: data.EmbedType,
                 environment: data.Environment,
                 mode:BoldBI.Mode.View,
                 width:"100%",
                 height: window.innerHeight + 'px',
                 expirationTime:100000,
                 authorizationServer: {
                     url: authorizationUrl
                 }
             });
 
             this.dashboard.loadDashboard();                     
         }
 
      ```
      
## How this sample works

 1. The application checks if `embedConfig.json` is available; if it is, it `deserializes` and stores the content in `EmbedDetails`. Otherwise, it throws an error.

    ![embedconfig](/static/assets/javascript/sample/images/vuejs-core-embedconfigerror.png)
 
 2. The dashboard will be rendered using the data obtained by utilizing the `/getserverdetails` endpoint, which retrieves data from the `asp.net core` front-end.

    ![Get server details](/static/assets/javascript/sample/images/vuejs-core-getseverdetails.png)
 
 3. Before rendering, the `authorizationUrl` is called, which redirects to the `AuthorizationServer` action in `Default.aspx`. This action generates the `EmbedSignature` using the embed secret from `embedConfig.json`.
        
     ![Authorize Server URL](/static/assets/javascript/sample/images/vuejs-core-authentication.png)
    
 4. These details will be sent to the Bold BI server and validated there. Once the details are validated, the dashboard starts to render.

## Steps to create new Vue.js with ASP.NET Core application to embed dashboard

 1. Please create a folder in the desired location and open it in **Visual Studio Code**. 

 2. Open the terminal in **Visual Studio Code.** Please refer to the image below.
 
     ![Terminal Image](/static/assets/javascript/sample/images/vuejs-core-terminal.png)

 3. To create a new project, we need to run this command in the terminal and then navigate to the directory.
     ```js
         dotnet new webapi -n asp-net
     ```

 4. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)

    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 6. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/BoldBI.Embed.Sample/BoldBI.Embed.Sample) within the application. Please make sure that you have placed it in the application exactly as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/vuejs-core-embedconfig.png)

 7. Create a new folder named `Models`. Create a model class named `DataClass.cs` to define the following properties. These properties are used for retrieving the dashboard list from the server.

    To add the necessary references to the project, execute the following commands in the terminal: `dotnet add package Newtonsoft.Json` and `dotnet add package System.Runtime.Serialization.Primitives`. Make sure to include the `System.Runtime.Serialization` and `Newtonsoft.Json` namespaces in the `DataClass.cs` model file.

    ```js
    [DataContract]
    public class EmbedClass
    {
        [DataMember]
        public string embedQuerString { get; set; }
        [DataMember]
        public string dashboardServerApiUrl { get; set; }
    }

    public class TokenObject
    {
        public string Message { get; set; }

        public string Status { get; set; }

        public string Token { get; set; }
    }

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

        public string LoginResult { get; set; }

        public string LoginStatusInfo { get; set; }

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

 8. Create another model class called `GlobalAppSettings.cs` to define the following properties. These properties will maintain the `embedConfig.json` file object within the `GlobalAppSettings`.

    ```js 
    public class GlobalAppSettings
    {
        public static EmbedDetails EmbedDetails { get; set; }
    }
    ```

 9. Please create a class called `BoldBIEmbedController.cs` in the `Controllers` folder. To retrieve specific dashboard details, define an API called `AuthorizationServer()` that utilizes the `GetSignatureUrl()` method to generate the algorithm. In this API, append the `embedQueryString`, `userEmail`, and the value from the `GetSignatureUrl()` method as query parameters in the URL to the authorization server of the particular dashboard. Make sure to include the following namespaces: `Newtonsoft.Json`, `System.Security.Cryptography`, `System.Net.Http`, and `Microsoft.AspNetCore.Mvc`.

    ```js
    [ApiController]
    [Route("api/[controller]")]
    public class BoldBIEmbedController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
               string basePath = AppDomain.CurrentDomain.BaseDirectory;
                string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
                GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
                return Ok("Application Running....");
        }

        [HttpGet]
        [Route("GetServerDetails")]
        public IActionResult GetServerDetails()
        {
            var jsonData = System.IO.File.ReadAllText("embedConfig.json");
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
            GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
            return Ok(jsonData);
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
    }
    ```

 10. Open the `Program.cs` file and insert the following code snippet before `app.UseHttpsRedirection()`.

     ```js
     app.UseCors(corsPolicyBuilder => corsPolicyBuilder
       .AllowAnyOrigin()
       .AllowAnyMethod()
       .AllowAnyHeader()
     );
 
     app.MapControllerRoute(
       name: "default",
       pattern: "{controller=BoldBIEmbed}/{action=Get}/{id?}");
     ```

 11. To create another folder in the desired location and open it in **Visual Studio Code.**
 
 12. To create a new Vue.js project, we need to execute this command in the terminal and choose the second option.
     
     ```js
          vue create vue
     ```
     ![Defualt preset](/static/assets/javascript/sample/images/vuejs-core-preset.png)
     
 13. Please open the `App.vue` file and replace the existing code with the following.

     ```js
     <template>
       <div id="app" ref="app">
         <div id="dashboard" ref="dashboard"></div>
       </div>
     </template>
     
     <script>
     import Vue from 'vue'
     import $ from 'jquery'
     import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
     window.jQuery = $
     
     export default Vue.extend ({
       name: 'App',
       async mounted() {
         var scripts = [
           "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js",
         ];
         scripts.forEach(script => {
           let tag = document.createElement("script");
           tag.setAttribute("src", script);
           tag.setAttribute("type", "text/javascript");
           tag.setAttribute("defer", "defer");
           tag.async = true;
           document.head.appendChild(tag);
         });
     
         //ASP.NET Core application would be run on http://localhost:5297, which needs to be set as `apiHost`.
         let apiHost = "<your application url>";
         //Url of the GetDetails action in the ValuesController of the ASP.NET Core application.
         let authorizationUrl = "/api/boldbiembed/authorizationserver";
         //Url of the GetDashboards action in the ValuesController of the ASP.NET Core application.
         let getserverdetails = "/api/boldbiembed/getserverdetails"
     
           const response = await fetch(apiHost + getserverdetails);
           const data = await response.json();
           renderDashboard(data);
           
         function renderDashboard(data) {
           let dashboard = BoldBI.create({
             serverUrl: data.ServerUrl + '/' + data.SiteIdentifier,
             dashboardId: data.DashboardId,
             embedContainerId: 'dashboard',
             embedType: data.EmbedType,
             environment: data.Environment,
             width: '100%',
             height: window.innerHeight -18 + 'px',
             expirationTime: 100000,
             authorizationServer: {
               url: apiHost + authorizationUrl ,
             },
           });
           dashboard.loadDashboard();
         }
       }
     });
     </script>
     ```

     > **NOTE:** Open the `launchSettings.json` file, copy the `applicationUrl`, and paste it in the `apiHost`.

 14. Please open the `package.json` file and replace the code within it.

     ```js
     {
        "name": "embeddedbi",
        "version": "0.1.0",
        "private": true,
        "scripts": {
          "serve": "vue-cli-service serve",
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        },
        "dependencies": {
          "@boldbi/boldbi-embedded-sdk": "6.10.12",
          "axios": "1.4.0",
          "core-js": "^3.6.5",
          "jquery": "^3.5.1",
          "vue": "^2.6.11"
        },
        "devDependencies": {
          "@babel/core": "^7.12.16",
          "@babel/eslint-parser": "^7.12.16",
          "@vue/cli-plugin-babel": "~5.0.0",
          "@vue/cli-plugin-eslint": "~5.0.0",
          "@vue/cli-service": "~5.0.0",
          "eslint": "^7.32.0",
          "eslint-plugin-vue": "^8.0.3",
          "vue-template-compiler": "^2.6.14"
        },
        "eslintConfig": {
          "root": true,
          "env": {
            "node": true
          },
          "extends": [
            "plugin:vue/essential",
            "eslint:recommended"
          ],
          "parserOptions": {
            "parser": "@babel/eslint-parser"
          },
          "rules": {}
        },
        "browserslist": [
          "> 1%",
          "last 2 versions",
          "not dead"
        ]
     }
     ```

 15. Then, run the ASP.NET Core application using the `dotnet run` command.
 
 16. Open the `vue` and use this command to install dependencies `npm install` and run the sample by using the `npm run serve` command to render the dashboard.
