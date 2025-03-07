---
layout: post
title: Embedding Analytics with ASP.NET Core and React | Bold BI Docs
description: Learn how to embed an analytics dashboard with an ASP.NET Core and React application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with ASP.NET Core using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/react-with-aspnet-core-sample) the sample application that demonstrates the rendering of the dashboard on your Bold BI server. This will be followed by steps to create a new embedding application in `React` with `ASP.NET Core` on your own.

> **NOTE:** The best way to get started would be by reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The `Getting Started` guide provides all the necessary information you need to know before working on the sample.      

## Prerequisites

 * [.NET Core 8.0](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

> **NOTE:** Node.js versions 18.18 to 20.15 are supported.

## How to run the sample

1. Please [get](https://github.com/boldbi/react-with-aspnet-core-sample/tree/master/React-with-ASP.NETCore) the React with ASP.NET Core sample from GitHub.  

2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
  
   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) as a reference. Additionally, you can consult the following image for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-aspnet-core-sample/tree/master/React-with-ASP.NETCore) within the application. Make sure you have placed it in the application as shown in the following image.
   
   ![EmbedConfig image](/static/assets/javascript/sample/images/react-core-embed-config.png)

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

5. Open your React with ASP.NET Core project in `Visual Studio Code` and install all dependent packages by using the following command `npm install`.

6. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.

6. Run your React with ASP.NET Core sample by using the command `dotnet run` in Visual Studio Code.

7. The dashboard can be edited in design mode and a new dashboard can be created with the following changes in the `renderDashboard()` method.

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
           renderDashboard(data) {
              this.dashboard = BoldBI.create({
              serverUrl: data.ServerUrl + "/" + data.SiteIdentifier,
              dashboardId: data.DashboardId,
              embedContainerId: "dashboard",
              embedType: data.EmbedType,
              environment: data.Environment,
              mode: BoldBI.Mode.View,
              width: "100%",
              height: window.innerHeight + 'px',
              expirationTime: 100000,
              authorizationServer: {
                  url: apiHost + authorizationUrl
              },
            });

            console.log(this.dashboard);
            this.dashboard.loadDashboard();
           }

     ```

> **NOTE:** 
> 1. If you are experiencing issues with the validity of the ASP.NET Core developer certificate, you can try the following commands to resolve it: `dotnet dev-certs https --clean`, `dotnet dev-certs https` and `dotnet dev-certs https --trust`.
> 2. If you are using a React version lower than v18.0, you can update the `index.js` file by adding the following line. Make sure to replace the existing `createRoot` line with the following line.</br>

  ```js
   import ReactDOM from 'react-dom';
   ReactDOM.render(<App />, document.getElementById('root'));
  ```

## How this sample works
 1. The `renderDashboard` method will be invoked from the `componentDidMount()` function based on the configured embedConfig values in the `DashboardListing.js` file.
    ![render dashboard](/static/assets/javascript/sample/images/react-dash-render.png)

 2. Before rendering, call the `authorizationUrl`, which redirects to the `AuthorizationServer` action in the `BoldBIEmbedController`. This action generates the `EmbedSignature` using the embed secret provided in the `embedConfig.json` of the ASP.NET Core application.    
    ![Get Embed Details](/static/assets/javascript/sample/images/angular-get-details.png)  

 3. These details will be sent to the Bold BI server and will be validated there. Once the details are validated, the dashboard will start to render.  

## Steps to create new React with ASP.NET Core application to embed dashboard

 1. Create a folder in the desired location and open it in Visual Studio Code.

 2. Open the terminal in Visual Studio Code. Please refer to the image below.
    ![Terminal Image](/static/assets/javascript/sample/images/react-terminal-image.png)
    
 3. To create a new project, you should run this command in the terminal.

    ```js
         dotnet new react
    ```

 4. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please click on the following [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Furthermore, you can consult the accompanying image for visual assistance.
     ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
     ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 6. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-aspnet-core-sample/tree/master/React-with-ASP.NETCore) within the application. Make sure you have placed it correctly in the application, as shown in the following image.
 
      ![EmbedConfig image](/static/assets/javascript/sample/images/react-core-embed-config.png)

 7. Please create a new folder named `Models`. Inside this folder, create a model class called `DataClass.cs` to define the following properties. These properties are used to retrieve the dashboard details from the server.

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

 8. Create another model class, `GlobalAppSettings.cs` to define the following properties. These properties maintain the object of the `embedConfig.json` file within the `GlobalAppSettings`.

       ```js 
           public class GlobalAppSettings
           {
               public static EmbedDetails EmbedDetails { get; set; }
           }
       ```

 9. Create a new controller named `BoldBIEmbedController.cs`. Inside the `Controllers\BoldBIEmbedController.cs` file, define an API called  `AuthorizationServer()` to retrieve specific dashboard details. This API should use the `GetSignatureUrl()` method to generate the algorithm. Append the `embedQuerString`, `userEmail` and the value obtained from the `GetSignatureUrl()` method as query parameters in the URL to retrieve the details of a particular dashboard. Finally, call the `renderDashboard()` method in the React application using these details.

    Ensure the `System.Security.Cryptography` and `Microsoft.AspNetCore.Mvc` namespaces in the `BoldBIEmbedController.cs`.

     ![EmbedConfig image](/static/assets/javascript/sample/images/home-controller-img.png)

       ```js
            [ApiController]
            [Route("api/[controller]")]
            public class BoldBIEmbedController : Controller
            {
            [HttpGet]
            [Route("GetData")]
            public IActionResult GetData()
            {
               var jsonData = System.IO.File.ReadAllText("embedConfig.json");
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

10. Open the `Program.cs` file. These lines of code configure a permissive `CORS` policy that allows requests from any origin, HTTP method, and headers. It is crucial to consider the security implications and adapt the policy to meet the application requirements. Make sure to ensure the `Newtonsoft.Json` namespaces in the `Program.cs` files.

      ```js
           app.UseCors(corsPolicyBuilder => corsPolicyBuilder
           .AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
           string basePath = AppDomain.CurrentDomain.BaseDirectory;
           string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
           GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
      ```

11. Create a new file and name it `package.json`. It is essential to install the packages that are listed in the dependencies section below.

      ```js
        {
          "name": "embedded-bi-react",
          "version": "0.1.0",
          "private": true,
          "dependencies": {
          "@boldbi/boldbi-embedded-sdk": "^6.4.6",
          "@testing-library/jest-dom": "^4.2.4",
          "@testing-library/react": "^9.4.0",
          "@testing-library/user-event": "^7.2.1",
          "axios": "^0.19.2",
          "jquery": "^3.5.1",
          "react": "^16.12.0",
          "react-dom": "^16.12.0",
          "react-scripts": "^3.4.0"
         }
        }

      ```

12. Open the `ClientApp\src` folder. Within the `ClientApp\src` folder, create a new folder named `DashboardListing`. Inside the `DashboardListing` folder, create a file named `DashboardListing.js`. In the `DashboardListing.js` file, define the mandatory properties and implement the methods `renderDashboard()` to render the dashboard, `render()` to create the DOM elements and `componentDidMount()` to contact server as follows.

     ```js
         import React from 'react';
         import '../index';
         import { BoldBI } from '@boldbi/boldbi-embedded-sdk';

        //ASP.NET Core application would be run on "https://localhost:7222;http://localhost:5137", which needs to be set as `apiHost`
        const apiHost = "https://localhost:7222";

        //Url of the AuthorizationServer action in ValuesController of the ASP.NET Core application
        const authorizationUrl = "/api/boldbiembed/authorizationserver";
        var BoldBiObj;
        class DashboardListing extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            toke: undefined,
            items: [],
            embedConfig: {},
          };
         this.BoldBiObj = new BoldBI();
         }
        } 
     ```

 > **NOTE:** Open the `launchSettings.json` file and copy the `applicationUrl`. Paste it in the `apiHost`. 

13. In `DashboardListing.js` file, include this method. Inside the `renderDashboard()` method, use the following code to render the dashboard.
  
    ![DashboardListing Image](/static/assets/javascript/sample/images/react-renderdashboard.png)

     ```js
        renderDashboard(data) {
           this.dashboard = BoldBI.create({
           serverUrl: data.ServerUrl + "/" + data.SiteIdentifier,
           dashboardId: data.DashboardId,
           embedContainerId: "dashboard",
           embedType: data.EmbedType,
           environment: data.Environment,
           mode: BoldBI.Mode.View,
           width: "100%",
           height: window.innerHeight + 'px',
           expirationTime: 100000,
           authorizationServer: {
           url: apiHost + authorizationUrl
        },
        });

        console.log(this.dashboard);
        this.dashboard.loadDashboard();
        }
     ```
    
 14. In `DashboardListing.js` file, include this method. Create a DOM element with the ID `dashboard`. which will be utilized in the `renderDashboard()` method to render the dashboard within it.

     ```js
        render() {
            return (
                <div id="viewer-section">
                    <div id="dashboard"></div>
                </div>
            );
        }
     ```

 15.  In `DashboardListing.js` file, include this method. The `componentDidMount()` method contacts the server to retrieve the token. With this token, specific dashboard details are collected and passed to the `renderDashboard()` method for rendering.

       ![DashboardListing Image](/static/assets/javascript/sample/images/react-component.png)

      ```js
         async componentDidMount() {
         var dashboard = undefined;
         var querystring = require('querystring');
         var token = "";

         try {
           const response = await fetch(apiHost + '/api/boldbiembed/GetData');
           const data = await response.json();
           this.setState({ embedConfig: data });
           const embedConfig = this.state.embedConfig;
           this.renderDashboard(embedConfig);
         } catch (error) {
         console.log(error);
         this.setState({ toke: "error", items: "error" });
         }
         }
      
         export default DashboardListing;

      ```

16. Open the `App.js`, replace the code below. This code imports the necessary modules, defines the `App` component, renders the `DashboardListing` component, and exports it for use in other files.
        
      ```js
            import React from 'react';
            import DashboardListing from './DashboardListing/DashboardListing';

            class App extends React.Component {
            render() {
               return (
                 <div>
                 <DashboardListing/>
                 </div>
                 );
                }
            }

            export default App;
        
      ```

17. Open the `Index.js` file and replace the code below. These lines of code import the necessary modules `React` and `ReactDOM`.  import the `App` component, and use `ReactDOM.render` to render the App component into the specified HTML element.
            
      ```js
            import React from 'react';
            import ReactDOM from 'react-dom';
            import App from './App';

            ReactDOM.render(<App />, document.getElementById('root'));
      ```

18. To install all dependent packages, use the following command `npm install`. Run the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.

19. Run the React sample with Core sample, use the following command `dotnet run` in visual Studio Code.

> **NOTE:** If you encounter any issues with the validity of the ASP.NET Core developer certificate, you can try resolving it by using the following commands: `dotnet dev-certs https --clean`, `dotnet dev-certs https` and `dotnet dev-certs https --trust`.