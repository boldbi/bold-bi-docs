---
layout: post
title:  Embed SDK v3.3.40 ASP.NET Core Framework Sample | Bold BI
description: Explore the JavaScript-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in ASP.NET Core Sample with Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/aspnet-core-sample) he sample application, which demonstrates dashboard rendering with a list of dashboards available in your Bold BI server and is followed by steps to create a new embedding application in the `ASP.NET Core` on your own.

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.  

## How to run the sample

1. Please [get](https://github.com/boldbi/aspnet-core-sample) the ASP.NET Core sample.  

2. In the ASP.NET Core sample, you can find the `EmbedProperties` class file in the Models folder.
![Embed Properties](/static/assets/embedded/javascript/sample/images/prop-core.png)
<meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
   <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a> </td>
    </tr>
    </tbody>
    </table>

3. Provide your details in the `EmbedProperties.cs`, then run your ASP.NET Core sample.

4. The dashboard can be rendered in design mode or created with the following changes in the `renderDashboard()` method.

     ```js
        function renderDashboard(dashboardId) {
        var dashboard = BoldBI.create({
        serverUrl: "http://localhost:5000/bi/site/site1",
        dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property   
        embedContainerId: "dashboard",
        embedType: BoldBI.EmbedType.Component,
        environment: "enterprise",
        width: "100%",
        height: "100%",
        mode: BoldBI.Mode.Design,
        expirationTime: 100000,
        authorizationServer: {
            url: "/GetDetails"
        }
         
        });

        dashboard.loadDesigner();
        };
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
    <td align="left">Url of the 'GetDetails' action in the application.</td>
    </tr>
    </tbody>
    </table>

## How this sample works

 1. Based on the values provided in the `EmbedProperties.cs`, get the user token and validate it, then get the dashboards list from the server.

 2. In the `HomeController.cs`, the `GetToken()` method and `GetDashboards()` action are added, which has been called when initializing the DOM in the `Index.html`.
 ![Get Dashboards](/static/assets/embedded/javascript/sample/images/core-home-getdashboard.png)

 3. When you are selecting the dashboard to render, authorize the server URL by calling the `GetEmbedDetails` action with the provided `EmbedProperties` values.
 ![Get Embed Details](/static/assets/embedded/javascript/sample/images/core-home-getdetails.png)

 4. In the above authorization, the `SignatureUrl` has been generated with the provided `EmbedSecret key` and validated embed details in Bold BI for the dashboard to be rendered in the viewer section of the `index.cshtml`.

## Steps to create ASP.NET Core application to embed dashboard

 1. Start Visual Studio and click `Create a new project`.
 2. Choose the ASP.NET Core Web Application, then click `Next`.
   ![SelectProject](/static/assets/embedded/javascript/sample/images/ProjectFramework.png#max-width=85%)
   ![SelectFrameworkVersion](/static/assets/embedded/javascript/sample/images/framework_version.png#max-width=85%)
 3. Change the project name as you want, then click `Create`.
 4. In the dropdown with the ASP.NET Core version, choose ASP.NET Core 3.1.
 5. Select the Web Application (Model-View-Controller) template, then click `Create`.
 6. Under the model folder, create the `EmbedProperties.cs` class to define the mandatory properties as follows.

    ```js
    public class EmbedProperties
    {
        public static string RootUrl = "http://localhost:5000/bi";//Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)

        public static string SiteIdentifier = "site/site1";//For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.

        public static string Environment = "enterprise";//Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `enterprise`)

        public static string UserEmail = "";//UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list

        public static string UserPassword = "";//Password of the Admin in Bold BI, which would be used to get the dashboards list

        public static string EmbedSecret = "";//You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page (https://help.boldbi.com/embedded-bi/site-administration/embed-settings/)
    }

    ```

 7. Create another model class as `DataClass.cs`to define the following properties. These properties are used to get the dashboard list from the server.

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

 8. The following script is mandatory to render the dashboard. Set the `Layout = null` at the top and replace the following code in your `\Views\Home\Index.cshtml` page of the `<head>` tag.
 ![Index.cshml location](/static/assets/embedded/javascript/sample/images/ViewFolderLocationMvc.png#max-width=30%)

    ```js 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v5.3.53/boldbi-embed.js"></script>
    ```

 9. In the `<body>` section, initialize a method as `Init()` which can be implemented in the `Index.js` file. Inside the `<body>` section include the `<div id="panel">` to display list of dashboard and the `<div id="viewer-section">` with a `<div id="dashboard">` inside it. This container can be used to render dashboard.

    ```js
    <body onload="Init()">
        <div id="container">
                <div class="header-section">
                    <div id="grid-title">All Dashboard</div>
                </div>
                <div id="panel"></div>
        </div>
        
        <div id="viewer-section">
            <div id="dashboard"></div>
        </div>
    </body>
    ``` 

 10. In the `Controllers\HomeController.cs` define the `GetDashboard()` method to get list of dashboards from the serve. It uses the  `GetToken()` method, which helps to get the token from the server. Add a default view as `Index.cshtml`

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
     
 11. To get particular dashboard details, define an API `GetDetails()` which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`,`userEmail` and the value from the `GetSignatureUrl()` method are appended as the query parameters in the URL to get details of particular dashboard.

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

 12. Create the `Index.js` file under the `wwwroot/js` folder. Define the `Init()` function, which uses the `Ajax` call to contact the server. Once the `Ajax` call is succeeded, the `ListDashboards()` method will be invoked to list dashboard, and the `renderDashboard()` method is used to render the dashboard.
 ![Index.cshtml location ](/static/assets/embedded/javascript/sample/images/jsFolder.png#max-width=30%)

     ```js
        function Init() {
        var http = new XMLHttpRequest();
        http.open("GET", "/GetDashboards", true);
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

 13. In the `ListDashboards()`method, the dashboard list details are extracted from the response and appended to the list in a respective container. The`renderDashboard()`  method helps to render the dashboard using the`Embed SDK` file.

     ```js
     function ListDashboards(data) {
            if (typeof (data) != "undefined" && data != null) {
            renderDashboard("'" + data[0].element.Id + "'");
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

 14. In the `renderDashboard()` method, an instance is created and calls the `loadDashboard()` method to render the dashboard.
 
     ```js
     function renderDashboard(dashboardId) {
            var dashboard = BoldBI.create({
            serverUrl: "http://localhost:5000/bi/site/site1",//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
            dashboardId: dashboardId,//Provide the dashboard id of the dashboard you want to embed here.  
            embedContainerId: "dashboard",//DOM id where the dashboard will be rendered, here it is dashboard.
            embedType: BoldBI.EmbedType.Component,
            environment: "enterprise",//Your Bold BI application environment.
            width: "100%",
            height: "100%",
            mode: BoldBI.Mode.View,//Rendering mode of the dashboard can be Design and View for the dashboard.
            expirationTime: 100000,//Set the duration for the token to be alive.
                authorizationServer: {
                url: "/GetDetails" //The URL from which particular dashboard details are obtained from the server.
                }
            
                });

                dashboard.loadDashboard();
                };
     ```