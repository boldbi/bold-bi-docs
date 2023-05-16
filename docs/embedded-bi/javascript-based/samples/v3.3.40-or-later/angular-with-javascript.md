---
layout: post
title:  Embed SDK v3.3.40 Angular Framework Sample | Bold BI Docs
description: Explore the Angular JS-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Angular using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/angular-with-aspnet-core-sample) the sample application, which demonstrates dashboard rendering with a list of dashboards available in your Bold BI server and is followed by steps to create a new embedding application in the `Angular` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.

## How to run the sample 
 1. Please [get](https://github.com/boldbi/angular-with-aspnet-core-sample) the Angular Application with the ASP.NET Core Application sample.    

 2. Here, the Angular application acts as a client, and the ASP.NET Core application acts as a server since you need to set the following properties in the `app.component.ts` file.
    ![Embed Properties in App Component](/static/assets/embedded/javascript/sample/images/angular-app-comp.png)

 3. In the `EmbedProperties.cs` of the ASP.NET Core application, you need to set the `RootUrl`, `SiteIdentifier`, `UserEmail`, and `EmbedSecret` properties.
    ![Embed Properties in App Component](/static/assets/embedded/javascript/sample/images/asp-net-backend-prop.png)

    <meta charset="utf-8"/>
        <table>
        <tbody>
            <tr>
                <td align="left">apiHost</td>
                <td align="left">ASP.NET Core application would be run on http://localhost:61377/, which needs to be set as apiHost</td>
            </tr>
            <tr>
                <td align="left">environment</td>
                <td align="left">Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)</td>
            </tr>
            <tr>
                <td align="left">rootUrl</td>
                <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
            </tr>
            <tr>
                <td align="left">siteIdentifier</td>
                <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
            </tr>
            <tr>
                <td align="left">authorizationUrl</td>
                <td align="left">Url of the GetDetails action in ValuesController of the ASP.NET Core application</td>
            </tr>
            <tr>
                <td align="left">getDashboardsUrl</td>
                <td align="left">Url of the GetDashboards action in ValuesController of the ASP.NET Core application</td>
            </tr>
        </tbody>
        </table>

 4. Run your ASP.NET Core application as well as the Angular App. 

 5. The dashboard can be rendered in design mode or created with the following changes in the `renderDashboard()` method.

     ```js
      renderDashboard(dashboard: Item) {
        this.dashboard= BoldBI.create({
            serverUrl: this._appComponent.baseUrl,
            dashboardId: dashboard.Id, //Provide item id here to render dashboard in design mode, to create dashboard ignore this property
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
            mode: BoldBI.Mode.Design,
            width:"100%",
            height:"100%",
            expirationTime:100000,
            authorizationServer: {
                url:this._appComponent.apiHost + this._appComponent.authorizationUrl
            }
        });
        this.dashboard.loadDesigner();        
      } 
     ```     

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. Ignore this property to create new dashboard.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Container Id in which dashboard renders.It should not contain hypen.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode you want to render dashboard. It can either be 'View' or 'Design' mode. </td>
    </tr>
    <tr>
    <td align="left">expirationTime</td>
    <td align="left">Set the duration for the token to be alive.</td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'GetDetails' action in the ASP.NET application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works
 1. Based on the properties set on the `app.component.ts` file, the `GetDashboards()` method would be called from the `ngOnInit()` in the `dashboard-listing.component.ts`.  
    ![Get Dashboards](/static/assets/embedded/javascript/sample/images/angular-get-dashboards.png)  

 2. Above the `GetDashboards()` method would call the `GetDashboards` action in the `HomeController` of the ASP.NET Core Application. Then, it would generate a user token and get the dashboard list.  
    ![Get Dashboards Controller](/static/assets/embedded/javascript/sample/images/angular-home-controller.png)  

 3. In the `dashboard-listing.component.html` file, a page is designed to list the dashboards on the left side and render the dashboard. The retrieved dashboard list has been sent to the `dashboardsList` property.  
    ![Dashboard Listing](/static/assets/embedded/javascript/sample/images/angular-dash-listing.png)  

 4. By default, the first dashboard is rendered from the list using the `renderDashboard()` method in the `dashboards-listing.component.ts` file. This render method implemented with the Bold BI SDK component code.  
    ![Dashboard Rendering](/static/assets/embedded/javascript/sample/images/angular-dash-render.png) 

 5. Before rendering, the `authorizationUrl` is called, which redirects to the `GetDetails` action in the `HomeController`, which generates the `EmbedSignature` using the embed secret provided in the `EmbedProperties.cs` of the ASP.NET Core application.  
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/angular-get-details.png)  

 6. These details will be sent to the Bold BI server and validated there. Once details are validated, the dashboard starts to render. 

## Steps to create new Angular application to embed dashboard
 1. Install the `nodeJs` application. Use the command prompt and type `ng new my-app` in desired location to create an angular application. Here `my-app` is the name of the folder for your application.

 2. Open the created folder in the visual studio code, and create a `dashboard-listing` folder with a `dashboard-listing-component.cshtml` and `dashboard-listing-component.ts` files in it. In the`app.component.ts` file, define the mandatory properties and invoke the `ngOnInit()` which is implemented in `dashboard-listing-component.ts` method as follows.

    ```js
        export class AppComponent {

            public apiHost="http://localhost:61377/";//ASP.NET Core application would be run on http://localhost:61377/, 

            public environment = "enterprise";//Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)

            public rootUrl = "http://localhost:1234/bi";//Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)

            public siteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.

            public authorizationUrl="/api/home/getdetails";//Url of the GetDetails Controller of the ASP.NET Core application

            public getDashboardsUrl="/api/home/getdashboards";//Url of the GetDashboards Controller of the ASP.NET Core application
                
            public dashboards: any;

            public baseUrl: any;

            public dashboardServerApiUrl: string;
        
            constructor(private _app: appService) {
            }

            ngOnInit() {
            }
       }
    ```

 3. In the `dashboard-listing-component.cshtml` file, create the DOM element to render the dashboard and  its list as follows.

     ```js 
        <div id="container">
            <div class="header-section">
                 <div id="grid-title">All Dashboard</div>
            </div>
            <div id="panel">
                 <div (click)="renderDashboard(i)" *ngFor="let i of dashboardsList" class="dashboard-item"
                 [attr.name]="i.Name" [attr.itemid]="i.Id" [attr.version]="i.Version" [attr.ispublic]="i.IsPublic">{{i.Name}}
                </div>
            </div>
        </div>
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
     ```

 4. In `Index.html` file, refer to the following cdn files in the `<head>` tag,
     ```js
    <link rel="stylesheet" href="./assets/css/site.css"/>
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js"></script>
     ```
    
 5. In the `dashboard-listing-component.ts`, you need to implement the `ngOnInit()` and `renderDashboard()` methods.

 6. In the `ngOnInit()` method, assign value for the `baseUrl` and `dashboardServerApiUrl`, which is used by the `renderDashboard()` method to render dashboard. Invoke the `getDashboard()` with the token to get the dashboard details and dashboard list from server.

     ```js
        ngOnInit() {
            if (this._appComponent.environment == "enterprise") {
                this._appComponent.baseUrl = this._appComponent.rootUrl + "/" + this._appComponent.siteIdentifier;
                this._appComponent.dashboardServerApiUrl = this._appComponent.rootUrl + "/api/" + this._appComponent.siteIdentifier;
            }
            else {
                this._appComponent.baseUrl = this._appComponent.rootUrl;
                this._appComponent.dashboardServerApiUrl = this._appComponent.rootUrl + "/api";

            }
            this.head = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

            let body = new HttpParams();
            body = body.set('username', this._appComponent.UserEmail);
            body = body.set('embed_secret', this._appComponent.EmbedSecret);
            body = body.set('grant_type','embed_secret');
            var accessurl = this._appComponent.dashboardServerApiUrl + '/token'
            this.http.post(accessurl, body, {
            headers: this.head
            }).subscribe(data => {
                this.result = data;
                this._appComponent.token = this.result.access_token;
                this.getDashboard(this._appComponent.token);
            });
        }
     ```

 7. In the `getDashboard`, dashboard list is obtained from the server and passed to the `dashboardDetails()` method to render a dashboard.

     ```js
        getDashboard(token:string)
        {
            this.header = new HttpHeaders();
            this.header = this.header.append('Access-Control-Allow-Origin', '*');
            this.header = this.header.append('Authorization', 'bearer ' +  this._appComponent.token);
            this.http.get(this._appComponent.dashboardServerApiUrl + "/v2.0/items?ItemType=2", {
                headers: this.header
            }).subscribe(data => {
            this._appComponent.dashboards = <any>data;
                this.dashboardsList = this._appComponent.dashboards;
                this.dashboarddetails(this.dashboardsList[0]);
            });
        }
        dashboarddetails(dashboard:Item)
        {
            let embedQuerString = "embed_nonce=" + Guid.create() +
            "&embed_dashboard_id="  + dashboard.Id +
            "&embed_timestamp=" + Math.round((new Date()).getTime() / 1000) +
            "&embed_expirationtime=100000";
            embedQuerString += "&embed_user_email=" + this._appComponent.UserEmail;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + this.GetSignatureUrl(embedQuerString);
            var serverurl =  this._appComponent.dashboardServerApiUrl + embedDetailsUrl;
            let embeddata  = this.http.get(serverurl).subscribe(res => {
            this.renderDashboard(res);
            });

        }

        GetSignatureUrl(message:string) {
            var hash = CryptoJS.HmacSHA256(message,this._appComponent.EmbedSecret);
            var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
            return hashInBase64;
        }
     ```

 8. In the `renderDashboard()` method, an instance is created to render a dashboard using the `loadDashboard()` method as follows.

     ```js
        renderDashboard(dataObj) {
            this.dashboard= BoldBI.create({
                serverUrl: this._appComponent.baseUrl,
                dashboardId:"efbf2999-f7e7-4831-a492-53c4df394af0",
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                mode: BoldBI.Mode.View,
                width:"100%",
                height:"100%",
                expirationTime:100000,
                authorizationServer: {
                    url :'',
                    data : dataObj
                }
            });
            this.dashboard.loadDashboard();        
        } 
     ```

 9. Run a command `npm install` in the terminal once completed, run a command `npm i @boldbi/boldbi-embedded-sdk` once completed, and import `@boldbi/boldbi-embedded-sdk` in the `dashboard-listing.component.ts`.

 10. To create the ASP.NET core Web application, start Visual Studio and click `Create a new project`

     ![SelectProject](/static/assets/embedded/javascript/sample/images/ProjectFramework.png#max-width=85%)
     ![SelectFrameworkVersion](/static/assets/embedded/javascript/sample/images/framework_version.png)

 11. Change the project name as you want, and then click `Create`.

 12. Select the Web Application (Model-View-Controller) template, then click `Create`.

 13. In the `ngOnInit()` method of angular application, assign value for the `baseUrl` and `dashboardServerApiUrl`, which is used by the `renderDashboard()` method to render dashboard. Invoke the `getDashboard()`, which is needed to be implemented in the `app.service.ts` to get the dashboard details through ASP.NET application to contact BOLD BI server.

     ```js
        ngOnInit() {
            if (this._appComponent.environment == "enterprise") {
                this._appComponent.baseUrl = this._appComponent.rootUrl + "/" + this._appComponent.siteIdentifier;
                this._appComponent.dashboardServerApiUrl = this._appComponent.rootUrl + "/api/" + this._appComponent.siteIdentifier;
            }
            else {
                this._appComponent.baseUrl = this._appComponent.rootUrl;
                this._appComponent.dashboardServerApiUrl = this._appComponent.rootUrl + "/api";

            }
            this._app.GetDashboards(this._appComponent.apiHost + this._appComponent.getDashboardsUrl).subscribe(data => {
                this._appComponent.dashboards = <any>data;
                this.dashboardsList = this._appComponent.dashboards;
                this.renderDashboard(this.dashboardsList[0]);
            });
        }
     ```

 14. In the ASP.NET core, create a model classes `EmbedProperties.cs` and `DataClass.cs`.
 
 15. In the `EmbedProperties.cs` class, define the mandatory properties as follows.

     ```js
      public class EmbedProperties
        {
            public static string RootUrl = "http://localhost:5000/bi";//Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)

            public static string SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.

            public static string Environment = "enterprise";//Your Bold BI application environment.

            public static string UserEmail = "";//UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list.

            public static string UserPassword = "";//Password of the Admin in Bold BI, which would be used to get the dashboards list

            public static string EmbedSecret = "";//You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page(https://help.boldbi.com/embedded-bi/site-administration/embed-settings/).
        }

     ```

 16. In the `DataClass.cs`, define the following properties, which are used to get the dashboard list from the server.

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
     ```
    
 17. In the`HomeController.cs` define the `GetDashboard()` method to get the list of dashboards from the serve. It uses the `GetToken()` method, which helps to get the token from the server.
    
        Add a default view as `Index.cshtml`.

        ```js
        public IActionResult Index()
        {
                return View();
        }

        [HttpGet]
        [Route("GetDashboards")]
        public string GetDashboards()
        {
            var token = GetToken();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(EmbedProperties.RootUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Add("Authorization", token.TokenType + " " + token.AccessToken);
                var result = client.GetAsync(EmbedProperties.RootUrl + "/api/" + EmbedProperties.SiteIdentifier + "/v2.0/items?ItemType=2").Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return resultContent;
            }
        }
        public Token GetToken()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(EmbedProperties.RootUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var content = new FormUrlEncodedContent(new[]
                    {
                        new KeyValuePair<string, string>("grant_type", "password"),
                        new KeyValuePair<string, string>("UserId", EmbedProperties.UserEmail),
                        new KeyValuePair<string, string>("Password", EmbedProperties.UserPassword)
                    });
                var result = client.PostAsync(EmbedProperties.RootUrl + "/api/" + EmbedProperties.SiteIdentifier + "/get-user-key", content).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                var response = JsonConvert.DeserializeObject<TokenObject>(resultContent);//Token token = new Token();
                var tokenObj = JsonConvert.DeserializeObject<Token>(response.Token);
                return tokenObj;
            }
        }
     ``` 

 18. To get particular dashboard details, define the API `GetDetails()` which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, `embedQuerString`,`userEmail` and the value from  `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard.

     ```js
        [HttpPost]
        [Route("GetDetails")]
        public string GetDetails([FromBody] object embedQuerString)
        {
            var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());
            var embedQuery = embedClass.embedQuerString;
            // User your user-email as embed_user_email
            embedQuery += "&embed_user_email=" + EmbedProperties.UserEmail;
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
                var keyBytes = encoding.GetBytes(EmbedProperties.EmbedSecret);
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

 19. Once the server sends the response to the `GetDashboards()` of an angular application, this method returns the response to the `ngOnInit()` method to call the `renderDashboard()` method.

 20. In the `renderDashboard()` of an angular application, implement a code like the following to render the dashboard.

     ```js
        renderDashboard(dashboard: Item) {
            this.dashboard= BoldBI.create({
                serverUrl: this._appComponent.baseUrl,
                dashboardId: dashboard.Id,
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
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

21. Now, run the ASP.NET core and angular applications using the `ng serve` command.