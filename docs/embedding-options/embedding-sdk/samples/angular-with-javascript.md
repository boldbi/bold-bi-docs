---
layout: post
title:  Embed SDK v3.3.40 Angular Framework Sample | Bold BI Docs
description: Explore the Angular JS-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Angular using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/angular-with-aspnet-core-sample) the sample application, which demonstrates dashboard rendering with a list of dashboards available in your Bold BI server and is followed by steps to create a new embedding application in the `Angular` on your own. 

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample. To explore the angular embedding sample in the Bold BI v3.2.16, please refer [here](/embedding-options/embedding-sdk/samples/v3.2.16/angular/).

## Prerequisites

 * [.NET Core 6.0 or later](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

> **NOTE:** Node.js v14.16 to v18.16 are supported

## How to run the sample

1. Please [get](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular-with-ASP.NETCore) the Angular with ASP.NET Core sample from GitHub.        

2. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.
  
   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular-with-ASP.NETCore) within the application. Please ensure you have placed it in the application as shown in the following image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/angular-embed-config.png)

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

5. Here, the Angular application acts as a client, and the ASP.NET Core application acts as a server since you need to set the following properties in the `app.component.ts` file.
    ![Embed Properties in App Component](/static/assets/javascript/sample/images/angular-app-comp.png)

6. Open your Angular with ASP.NET Core project in `Visual Studio Code` and install all dependent packages, using the following command `npm install`.

7. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.

8. Run your Angular with ASP.NET Core sample with the command `dotnet run` in Visual Studio Code.

9. The dashboard can be editable in design mode and create a new dashboard with the following changes in the `renderDashboard()` method.

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
        renderDashboard(dashboard: Item) {
        this.dashboard= BoldBI.create({
        serverUrl: this._appComponent.baseUrl,
        dashboardId: dashboard.Id,
        embedContainerId: "dashboard",
        embedType: this.dashboardService.embedConfig.EmbedType,
        environment: this.dashboardService.embedConfig.Environment,
        width:"100%",
        height:"100%",
        expirationTime:100000,
        authorizationServer: {
            url:this._appComponent.apiHost + this._appComponent.authorizationUrl
            }
        });
        this.dashboard.loadDashboard();        
        }

     ```

## How this sample works
 1. Based on the configured embedConfig values in the `app.component.ts` file, the `GetDashboards()` method would be called from the `ngOnInit()` in the `dashboard-listing.component.ts`.  
    ![Get Dashboards](/static/assets/javascript/sample/images/angular-get-dashboards.png)

 2. Above the `GetDashboards()` method would call the `GetDashboards` action in the `BoldBIEmbedController` of the ASP.NET Core server module.
    ![Get Dashboards Controller](/static/assets/javascript/sample/images/angular-home-controller.png)

 3. By default, the first dashboard is rendered from the list using the `renderDashboard()` method in the `dashboards-listing.component.ts` file. This render method implemented with the Bold BI SDK component code.  
    ![Dashboard Rendering](/static/assets/javascript/sample/images/angular-dash-render.png)

 4. Before rendering, the `authorizationUrl` is called, which redirects to the `AuthorizationServer` action in the `BoldBIEmbedController`, which generates the `EmbedSignature` using the embed secret provided in the `embedConfig.json` of the ASP.NET Core application.  
    ![Get Embed Details](/static/assets/javascript/sample/images/angular-get-details.png)

 5. These details will be sent to the Bold BI server and validated there. Once details are validated, the dashboard starts to render. 

## Steps to create new Angular application to embed dashboard

 1. Create a folder in the desired location and open it in the Visual Studio Code. 

 2. Open the terminal in the Visual Studio Code. Please refer to the following image.
    ![Terminal Image](/static/assets/javascript/sample/images/angular-terminal-image.png)
    
 3. To create a new project, run this command in the terminal.

    ```js
         dotnet new angular
    ```

 4. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 5. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

     ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
     ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 6. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/ASP.NET%20Core/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.
 
      ![EmbedConfig image](/static/assets/javascript/sample/images/angular-embed-config.png)

 7. Create a new folder called `Models`. Create a model class as `DataClass.cs` to define the following properties. These properties are used to get the dashboard details from the server. 

    Execute the following commands in the terminal to add the necessary references to the project: `dotnet add package Newtonsoft.Json` and `dotnet add package System.Runtime.Serialization.Primitives`. Ensure the `System.Runtime.Serialization` and `Newtonsoft.Json` namespaces are in the `DataClass.cs` model file.

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
        public string AccessToken {get;set;}

        [JsonProperty("token_type")]
        public string TokenType {get;set; }

        [JsonProperty("expires_in")]
        public string ExpiresIn {get; set;}

        [JsonProperty("email")]
        public string Email {get;set;}

        public string LoginResult {get;set;}

        public string LoginStatusInfo {get;set;}

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

 8. Create another model class as `GlobalAppSettings.cs` to define the following properties. These properties maintain the `embedConfig.json` file object within the `GlobalAppSettings`.

    ```js 
    public class GlobalAppSettings
    {
        public static EmbedDetails EmbedDetails { get; set; }
    }
    ```

 9. Create a new controller as `BoldBIEmbedController.cs`. In the `Controllers\BoldBIEmbedController.cs`, To get particular dashboard details, define the API `GetDetails()` which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

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

        [HttpGet]
        [Route("GetDashboards")]
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
                client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("grant_type", "embed_secret"),
                    new KeyValuePair<string, string>("Username", GlobalAppSettings.EmbedDetails.UserEmail),
                    new KeyValuePair<string, string>("embed_secret", GlobalAppSettings.EmbedDetails.EmbedSecret)
                });
                var result = client.PostAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/token", content).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                var response = JsonConvert.DeserializeObject<Token>(resultContent);
                return response;
            }
          }
        }
     ```

 10. In the `Controllers\BoldBIEmbedController.cs`, To get particular dashboard details, define an API `AuthorizationServer()` which uses the method `GetSignatureUrl()` to generate the algorithm. In this API, the `embedQuerString`,`userEmail` and the value from the  `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard. With these details, the `renderDashboard()` method is called in the angular application.

     ![EmbedConfig image](/static/assets/javascript/sample/images/angular-home-controller-img.png)

     ```js

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

11. Open the `Program.cs` file and add the following code sample before `app.UseHttpsRedirection()`. To read the `embedConfig.json` file in order to utilize it in the controller. The existing `MapControllerRoute` pattern inside the `controller` name and `action` name changed as follows. Ensure the using `using Newtonsoft.Json` namespaces in the `Program.cs` file.

    ```js
        app.UseCors(corsPolicyBuilder => corsPolicyBuilder
        .AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

        string basePath = AppDomain.CurrentDomain.BaseDirectory;
        string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
        GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);

        app.MapControllerRoute(
          name: "default",
          pattern: "{BoldBIEmbed}/{action=GetData}/{id?}");
    ```

12. Create a new file and name it `package.json`. It is essential to install the packages listed in the dependencies section below.

     ```js
        {
           "name": "angular-sample",
           "version": "0.0.0",
           "scripts": {
              "ng": "ng",
              "start": "ng serve",
              "build": "ng build",
              "watch": "ng build --watch --configuration development",
              "test": "ng test"
            },
            "private": true,
            "dependencies": {
                  "@boldbi/boldbi-embedded-sdk": "^6.4.6",
                  "@angular/animations": "^14.0.0",
                  "@angular/common": "^14.0.0",
                  "@angular/compiler": "^14.0.0",
                  "@angular/core": "^14.0.0",
                  "@angular/forms": "^14.0.0",
                  "@angular/platform-browser": "^14.0.0",
                  "@angular/platform-browser-dynamic": "^14.0.0",
                  "@angular/router": "^14.0.0",
                  "rxjs": "~7.5.0",
                  "tslib": "^2.3.0",
                  "zone.js": "~0.11.4",
                  "@angular-devkit/build-angular": "^14.0.0",
                  "@angular/cli": "^14.0.6",
                  "@angular/compiler-cli": "^14.0.0"
                  }
            }

    ```

 13. Open the folder `ClientApp\src\app` and create a `dashboard-listing` folder with a `dashboard-listing.component.html` and `dashboard-listing.component.ts` files in it. In the `app.component.ts` file replace the following code, define the mandatory properties, and invoke the `ngOnInit()` which is implemented in the `dashboard-listing.component.ts` method as follows.

      ```js
        import { Component } from '@angular/core';
        import { appService } from './app.service';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
        })

        export class AppComponent {

        //ASP.NET Core application would be run on https://localhost:7210;http://localhost:5279, which needs to be set as `apiHost`
        public apiHost = "https://localhost:7210/";

        //Url of the GetDetails action in ValuesController of the ASP.NET Core application
        public authorizationUrl = "api/boldbiembed/authorizationserver";

        //Url of the GetDashboards action in ValuesController of the ASP.NET Core application
        public getDashboardsUrl = "api/boldbiembed/getdashboards";
        public getEmbedConfigUrl = "api/boldbiembed/getdata";
        public embedConfig: any;
        public dashboards: any;
        public baseUrl: any;
        public dashboardServerApiUrl!: string;

        constructor(private _app: appService) {
        }
        ngOnInit() {

        }                      
        }
     ```

 > **NOTE:** Open the `launchSettings.json` file, `applicationUrl` is copied and pasted in `apiHost`. 
 
 14. In the `dashboard-listing.component.html` file, create the DOM element to render the dashboard and  its list as follows.

     ```js 
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
     ```

 15. In the `Index.html` file, refer to the following cdn files in the `<head>` tag.

     ```js
        <!doctype html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <title>Embedded BI</title>
               <base href="/">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="icon" type="image/x-icon" href="favicon.ico">
                    <link rel="stylesheet" href="./assets/css/site.css" />
            </head>
            <body><app-root></app-root></body>
        </html>
   
     ```
    
 16. In the `dashboard-listing.component.ts`, you need to implement the `ngOnInit()` and `renderDashboard()` methods. In the `ngOnInit()` method, assign value for the `baseUrl` and `dashboardServerApiUrl`, which is used by the `renderDashboard()` method to render the dashboard. Invoke the `getDashboard()` with the token to get the dashboard details and dashboard list from server.

     ![Get Dashboards](/static/assets/javascript/sample/images/angular-get-dashboards.png)

     ```js
            import { Component, OnInit } from '@angular/core';
            import { Item } from '../app';
            import { appService } from '../app.service';
            import { AppComponent } from '../app.component';
            import { BoldBI } from '@boldbi/boldbi-embedded-sdk';
            import { DashboardService } from '../dashboard.service';

            @Component({
               selector: 'app-dashboard-listing',
               templateUrl: './dashboard-listing.component.html',
               providers: [appService]
            })

            export class DashboardListing implements OnInit {
            public dashboardsList!: Item[];
            result: any;
            dashboard: any;
            embedConfig: any;
            constructor(private _app: appService, private _appComponent: AppComponent, private dashboardService: DashboardService) {
            }

            ngOnInit() {
                this._app.GetEmbedConfig(this._appComponent.apiHost + this._appComponent.getEmbedConfigUrl).subscribe(data => {
                    this._appComponent.embedConfig = <any>data;
                    this.dashboardService.setEmbedConfig(this._appComponent.embedConfig);
                    if (this.dashboardService.embedConfig.Environment == "enterprise" || this.dashboardService.embedConfig.Environment == "onpremise") {
                    this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl + "/" + this.dashboardService.embedConfig.SiteIdentifier;
                    this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api/" + this.dashboardService.embedConfig.SiteIdentifier;
                } else {
                    this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl;
                    this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api";
                }})
              }
            }
     ```

 17. In the `getDashboard`, the dashboard list is obtained from the server and passed to the `dashboardDetails()` method to render a dashboard.

     ```js
            this._app.GetDashboards(this._appComponent.apiHost + this._appComponent.getDashboardsUrl). subscribe(data => {
            this._appComponent.dashboards = <any>data;
            this.dashboardsList = this._appComponent.dashboards;
            this.renderDashboard(this.dashboardsList[0]);
        });

     ```
 18. Once the server sends the response to the `GetDashboards()` of an angular application, this method returns the response to the `ngOnInit()` method to call the `renderDashboard()` method.

 19. In the `renderDashboard()` method, an instance is created to render a dashboard using the `loadDashboard()` method as follows.
        ![Dashboard Rendering](/static/assets/javascript/sample/images/angular-dash-render.png)

     ```js
          renderDashboard(dashboard: Item) {
            this.dashboard = BoldBI.create({
            serverUrl: this._appComponent.baseUrl,
            dashboardId: this.dashboardService.embedConfig.DashboardId,
            embedContainerId: "dashboard",
            embedType: this.dashboardService.embedConfig.EmbedType,
            environment: this.dashboardService.embedConfig.Environment,
            width: "100%",
            height: "100%",
            expirationTime: 100000,
            authorizationServer: {
               url: this._appComponent.apiHost + this._appComponent.authorizationUrl
            }
        });

        console.log(this.dashboard);
        this.dashboard.loadDashboard();
        }

     ```

 20. Open the `app.component.html` file and replace the following code.
      
       ```js
           <body>
             <main class="dashboard_container"><router-outlet></router-outlet></main>
           </body>
       ```

 21. Open the `app.module.ts` file and replace the following code. The necessary modules and components are imported.
         
       ```js

            import { BrowserModule } from '@angular/platform-browser';
            import { NgModule } from '@angular/core';
            import { FormsModule } from '@angular/forms';
            import { HttpClientModule } from '@angular/common/http';
            import { RouterModule } from '@angular/router';
            import { appService } from './app.service';
            import { AppComponent } from './app.component';
            import { NavMenuComponent } from './nav-menu/nav-menu.component';
            import { DashboardListing } from './dashboard-listing/dashboard-listing.component';
            import { CounterComponent } from './counter/counter.component';
            import { FetchDataComponent } from './fetch-data/fetch-data.component';

            @NgModule({
               imports: [
               BrowserModule,
                   RouterModule.forRoot([
                   { path: '', component: DashboardListing },
                    ]
                ),
                HttpClientModule
                ],
                   providers: [appService],
                   declarations: [
                   AppComponent,
                   DashboardListing,
                   NavMenuComponent,
                   CounterComponent,
                   FetchDataComponent
                ],

                bootstrap: [AppComponent]
                })
            export class AppModule { }

        ```

 22. Open the folder `ClientApp\src\app` and create a new file called `app.service.ts` file, include the following code. 
         
       ```js
            import { Injectable } from '@angular/core';
            import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
            import { HashLocationStrategy } from '@angular/common';

            @Injectable()
            export class appService {
            private authUrl!: string;
            private getDashboardsUrl!: string;
            private header!: HttpHeaders;
            constructor(private http: HttpClient) {
            }
            public GetDashboards(getDashboardsUrl: string) {
            this.header = new HttpHeaders();
            this.header = this.header.append('Access-Control-Allow-Origin', '*');
            this.header = this.header.append('Authorization', 'bearer ' + "token");

            return this.http.get(getDashboardsUrl, {
            headers: this.header
            }).pipe(res => {
            return <any>res;
            });
            }

            public GetEmbedConfig(getDashboardsUrl: string) {
            return this.http.get(getDashboardsUrl, {
            }).pipe(res => {
            return <any>res;
            }); }
        }
      ```
 
 23. Open the folder `ClientApp\src\app` and create a new file called `app.ts` and include the following code.
           
     ```js
           export class Item {
           Name!: string;
           Description!: string;
           Id!: string;
           Version!: string;
           IsPublic!: boolean;
           ItemLocation!: string;
           CategoryName!: string;
           }
     ```

 24. Open the folder `ClientApp\src\app` and create a new file called `dashboard.service.ts` and including the following code. These properties are used to get and set the value of this property. 

     ```js
        import { Injectable } from '@angular/core';
        @Injectable({
            providedIn: 'root'
        })
        export class DashboardService {
        public embedConfig: any;
        getEmbedConfig(): any {
        return this.embedConfig;
        }
        setEmbedConfig(embedConfig: any): void {
        this.embedConfig = embedConfig; }
        }
     ```

 25. Open the `assets` folder and create a `subfolder` named `css`. Within the `css` folder, create a new file called `site.css` and place the provided code inside it
           
     ```js
            body html { width: 100%; height: 100%; }
            html, body,app-root { width: 100%; height: 100%; margin: 0; font-family: Roboto; font-size: 13px;}
            ul { list-style-type: none; padding-left: 0; }
            .tab { padding-top: 2px; padding-bottom: 18px; cursor: pointer }
            .active { background-color: burlywood; }

            .e-dbrd-blueWaitingIndcator {
             -webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: 54px; width: 54px; top: 50%; left: 50%; position: relative; }

            .e-waiting { position: fixed; display: block; margin: 0px auto; width: 54px; height: 54px; zoom: 0.5; margin-left: 55px;}

            #container { width: 13%; float: left; height: 100%; float: left; background: #f4f4f4; height: 100%; box-shadow: 2px 0 4px 0 rgba(0, 0, 0, .12); overflow: auto; overflow-x: hidden; }
            
            #grid-title { font-size: 17px; border-bottom: 1px solid #333; padding: 15px;}
            #panel { width: 100%; float: left; background: #f4f4f4; overflow: auto;}
            #dashboard { width: 100%; float: left; height: 100%; display: block; }
            .dashboard-item { padding: 10px; border-bottom: 1px solid #ccc; cursor: pointer; }
            #viewer-section { width: 100%; height: 100%; float: left; }
            #viewer-header { padding: 10px; display: block; float: left; width: 100%; }
            #create-dashboard { float: right; margin-right: 20px; background: #0565ff; border: 0; border-radius: 4px; color: #fff;cursor: pointer; display: inline-block;font-size: 12px; font-weight: 600;height: 28px;line-height: 28px; min-width: 90px; outline: none; text-align: center;border: 1px solid #0450cc; }

            #edit-dashboard {
            float: right; background: #fff; margin-right: 20px; border: 0; border-radius: 4px; color: #333; cursor: pointer; display: inline-block; font-size: 12px; font-weight: 600; height: 28px; line-height: 28px; min-width: 90px; outline: none; text-align: center; border: 1px solid #b3b3b3; }
            #dashboardDesigner{ height: 900px; border: 2px solid #333; }
            .dashboard_container { height: 775px !important; width: 1685px !important; margin-left: 0px !important; margin-right: 0px !important; margin-top: 0px !important; margin-bottom: 0px !important;}
            .e-waitpopup-pane { display: none; }
     ```

 26. To install all dependent packages, use the following command `npm install`.
  
 27. Run the ASP.NET core and angular applications using the `dotnet run` command.