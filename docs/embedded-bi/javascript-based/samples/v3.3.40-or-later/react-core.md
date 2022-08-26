---
layout: post
title:  Embed SDK v3.3.40 React with ASP.NET Core Sample | Bold BI
description: Explore the React JS-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with ASP.NET Core using Embedded SDK

The link has been provided to [download](https://onpremise-demo.boldbi.com/getting-started/react-core-v3.3/sample.zip) the sample application, which demonstrates the dashboard rendering in your Bold BI server and followed by steps to create a new embedding application in `React` with `ASP.NET Core` on your own.  

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please [download](https://onpremise-demo.boldbi.com/getting-started/react-core-v3.3/sample.zip) the React Application with ASP.NET Core Application.    

2. Here, the React application act as a client, and the ASP.NET Core application act as a server since you need to set the following properties in the `DashboardListing.js` file as follows.
![Embed Properties In App Component](/static/assets/embedded/javascript/sample/images/react-prop.png)

3. In the `EmbedProperties.cs` of the ASP.NET Core application, you need to set the `RootUrl`, `SiteIdentifier`, `UserEmail`, and `EmbedSecret` properties.
  ![Embed Properties in App Component](/static/assets/embedded/javascript/sample/images/asp-net-backend-prop.png)
  
4. Then, run your ASP.NET Core application and as well as the React App.  

5. The dashboard can be rendered in design mode or created with the following changes in the `renderDashboard()` method.

     ```js
        renderDashboard(data) {
        this.dashboard= BoldBI.create({
        serverUrl: rootUrl + siteIdentifier,
        dashboardId: data.Id,//Provide item id to render it in design mode,to create dashboard remove this property
        embedContainerId: "dashboard",
        embedType: BoldBI.EmbedType.Component,
        environment: environment,
        mode:BioldBI.Mode.Design,
        width:"100%",
        height: window.innerHeight + 'px',
        expirationTime:100000,
        authorizationServer: {
            url:apiHost + authorizationUrl
        }
        });

        console.log(this.dashboard);
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
    <td align="left">Url of the 'GetDetails' action in the Asp.NET application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works
 1. Based on the properties set on the `DashboardListing.js` file, you will call the `GetDashboards` Server API from the `componentDidMount()` function.    
 ![Embed Properties](/static/assets/embedded/javascript/sample/images/react-get-dashboards.png#max-width=65%)  

 2. To contact the `GetDashboards` Server API, generate a user token by using the user email and password, then get the dashboard list.    

 3. In the `DashboardListing.js` file, a page has been designed to list dashboards on the left side and render the dashboard. The retrieved dashboard list has been set to the `items` using the `setState()` property.  
 ![Dashboard Listing](/static/assets/embedded/javascript/sample/images/react-dash-listing.png)   

 4. By default, the first dashboard has been rendered from the list using the `renderDashboard()` method in the `DashboardListing.js` file. This render method is implemented with the Bold BI SDK component code.    
 ![Render Dashboard](/static/assets/embedded/javascript/sample/images/react-dash-render.png#max-width=65%)  

 5. Before rendering, call the `authorizationUrl`, which redirects to the `GetDetails` action in the `HomeController`, which generates the `EmbedSignature` using the embed secret provided in the `EmbedProperties.cs` of the ASP.NET Core application.    
 ![Get Embed Details](/static/assets/embedded/javascript/sample/images/angular-get-details.png)  

 6. These details will be sent to the Bold BI server and get validated there. Once the details are validated, the dashboard starts to render.  

## Steps to create new React with ASP.NET Core application to embed dashboard
 1. Install the `nodeJS` using the command prompt and type `npx create-react-app my-app` in desired location to create an angular application. Here, `my-app` is the name of the folder for your application.
 2. Open the created folder in the visual studio code. Under the `src,` create a `DashboardListing` folder with `DashboardListing.js`.In the `DashboardListing.js` file define the mandatory properties and implement the methods `renderDashboard()` to render dashboard, `render()` to create the DOM elements and `componentDidMount()` to contact server as follows.
 
     ```js
        const apiHost="http://localhost:61377"//ASP.NET Core application would be run on http://localhost:61377/, which needs to be set as apiHost

        const environment = "enterprise";//Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)

        const rootUrl = "http://localhost:54321/bi/"; //"https://demo-chargebackgurus.boldbi.com/bi/";

        const siteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.

        const authorizationUrl="/api/home/getdetails";//Url of the GetDetails action in ValuesController of the ASP.NET Core application

        const userEmail= ""; //UserEmail of the Admin in your Bold BI, which will be used to get the dashboards ;
        const userPassword= ""; //Password of the Admin in Bold BI, which will be used to get the dashboard.;
        var BoldBiObj;
     ```
    
 3. Create a DOM element with the Id `dashboard`, which will be utilized in the`renderDashboard()` method to render the dashboard in it.

     ```js
        render() {
            return (
            <div id="DashboardListing">
                <div id="container">
                    <div className="header-section">
                    <div id="grid-title">All Dashboard</div>
                    </div>
                    <div id="panel">
                    {this.state.items.map((el) => 
                        <button className="dashboard-item" attr-name ={el.Name} attr-id = {el.Id} value={el} onClick={((e) => this.renderDashboard(el))} >
                        {el.Name}
                        </button>
                    )}
                    </div>
                </div>
                <div id="viewer-section">
                    <div id="dashboard"></div>
                </div>
            </div>
            );
        }
     ```

 4. In the `Index.html` file, refer to the following cdn files in the `<head>` tag,

     ```js
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
        <link rel="stylesheet" href="./assets/css/site.css"/>
     ```

 5. The `componentDidMount()` method contact the server to get the token and with this token, particular dashboard details is collected and passed to the `renderDashboard()` method to render it.

     ```js
        componentDidMount() {
            var dashboard = undefined;
            var querystring = require('querystring');
            var token = "";
            Axios.post(rootUrl+'api/'+ siteIdentifier +'/get-user-key',
            querystring.stringify({
                    UserId: userEmail,
                    Password: userPassword
            }), {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            }
            }).then(response => {
                var result = response;
                token = JSON.parse(result.data.Token).access_token;
                this.setState({ toke: token});
                //Get Dashboards
            Axios.get(rootUrl+'api/'+ siteIdentifier +'/v2.0/items?ItemType=2',
            {
                headers: { 
                "Access-Control-Allow-Origin": "*",
                "Authorization":'bearer ' + this.state.toke
                }
            }).then(res => {
                var arrayOfObjects = res.data;
                this.setState({ items: arrayOfObjects});
                this.renderDashboard(arrayOfObjects[0]);
            },
            error => {
                this.setState({items: "error"});
            });
            },
            error => {
            this.setState({toke: "error"});
            });
        }  
     ```

 6. In the `renderDashboard()`, use the following code to render the dashboard.
  
     ```js
        renderDashboard(data) {
        this.dashboard= BoldBI.create({
        serverUrl: rootUrl + siteIdentifier,//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
        dashboardId: data.Id,//Dashboard id of the dashboard you want to embed here.
        embedContainerId: "dashboard",//DOM id where the dashboard will be rendered.
        embedType: BoldBI.EmbedType.Component,
        environment: environment,//Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)
        width:"100%",
        height: window.innerHeight + 'px',
        expirationTime:100000,//Set the duration for the token to be alive.
        authorizationServer: {
            url:apiHost + authorizationUrl//URL from which particular dashboard details is obtained from server.
        }
        });

        console.log(this.dashboard);
        this.dashboard.loadDashboard();     
        
        }
     ```

 7. Run the command `npm install`. Once completed, run the command `npm i @boldbi/boldbi-embedded-sdk`. Once completed, import the`@boldbi/boldbi-embedded-sdk` in the `DashboardListing.js`.
 8. To create the ASP.NET core Web application, start Visual Studio and click `Create new project.`
   ![SelectProject](/static/assets/embedded/javascript/sample/images/ProjectFramework.png)
   ![SelectFrameworkVersion](/static/assets/embedded/javascript/sample/images/framework_version.png)
 9. Change the project name as you want, then click `Create`.
 10. Select the Web Application (Model-View-Controller) template, then click `Create`.
 11. In ASP.NET core, create the model classes `EmbedProperties.cs` and `DataClass.cs`. 
 12. Under the model folder, create the `EmbedProperties.cs` class to define the mandatory properties as follows

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

 13. In the `DataClass.cs`  class, define the following properties. These properties are used to get the dashboard list from the server.

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
    
    
 14. In the `Controllers\HomeController.cs`, define the `GetDashboard()` method to get the list of dashboards from the server. It uses the method `GetToken()` which helps to get the token from the server.
 Add a default view as `Index.cshtml`

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

 15. To get particular dashboard details, define an API `GetDetails()` which uses the method `GetSignatureUrl()` to generate the algorithm. In this API, the `embedQuerString`,`userEmail` and the value from the  `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard. With these details, the `renderDashboard()` method is called in the react application.

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

 16. Run the ASP.NET core application, then run the React application in the visual studio code by the command `npm start`.