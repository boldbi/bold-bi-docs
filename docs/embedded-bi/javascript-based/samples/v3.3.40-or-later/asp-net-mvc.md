---
layout: post
title:  Embed SDK v3.3.40 ASP.NET MVC Framework Sample | Bold BI
description: Explore the JavaScript-based sample embedded in ASP.NET MVC application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in ASP.NET MVC Sample with Embedded SDK

We have provided link to [download](https://onpremise-demo.boldbi.com/getting-started/asp-net-mvc-v3.3/sample.zip) the sample application, which demonstrates the dashboard rendering with list of dashboards available in your Bold BI server and followed by steps to create new embedding application in `ASP.NET MVC `on your own.

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

## How to run the sample

1. Please [download](https://onpremise-demo.boldbi.com/getting-started/asp-net-mvc-v3.3/sample.zip) the ASP.NET MVC sample.  

2. In the ASP.NET MVC sample, you could find the `EmbedProperties` class file in the Models folder.
![Embed Properties](/static/assets/embedded/javascript/sample/images/prop-mvc.png#max-width=75%)

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
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use cloud, if  Enterprise, you should use enterprise)</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">UserPassword</td>
        <td align="left">Password of the Admin in Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling Enable embed authentication in <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
   </tbody>
   </table>

3. Then, run your ASP.NET MVC sample.

4. Dashboard can be rendered in design mode or create with below changes in `renderDashboard()` method,
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
 1. Based on the values provided in the `EmbedProperties.cs`, we would get the user token and validate it, and then we could get the dashboards list from the server.

 2. In `HomeController.cs`, we have added the `GetToken()` method and `GetDashboards()` action, which has been called when initializing the DOM in `Index.html`.
 ![Get Dashboards](/static/assets/embedded/javascript/sample/images/mvc-home-getdashboard.png)

 3. When you are selecting the dashboard to render, we would authorize the server URL by calling the `GetEmbedDetails` action with the provided `EmbedProperties` values.
 ![Get Embed Details](/static/assets/embedded/javascript/sample/images/mvc-home-getdetails.png)

 4. In the above authorization, we have generated the `SignatureUrl` with the provided `EmbedSecret key` and validate embed details in Bold BI. Then only, the dashboard would be rendered in the viewer-section of `Index.cshtml`.

## Steps to create new ASP.NET MVC application to embed dashboard

 1. Start Visual Studio and click `Create` new project.
 2. Choose ASP.NET Web Application (.NET Framework), and then click Next.
   ![SelectProject](/static/assets/embedded/javascript/sample/images/MVC_framework.png)
 3. Change the project name as you want, and then click Create.
 4. Choose MVC and Web API, and then click OK.
   ![SelectProject](/static/assets/embedded/javascript/sample/images/MVC_WebAPI.png#max-width=68%)

 5. Under model folder create `EmbedProperties.cs`  class to define the mandatory properties like below,

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

 6. Create model class as `DataClass.cs` to define below properties. These properties are used to get dashboard list from server.

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

 7. Create model class as `ApiResponse.cs`, to define the API response properties like below,
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
    
 8. The following scripts and style sheets are mandatorily required to render the dashboard. Set `Layout = null` in the top and replace the following code in your `\Views\Home\Index.cshtml` page of `<head>` tag.
 ![Index.cshml location](/static/assets/embedded/javascript/sample/images/ViewFolderLocationMvc.png#max-width=30%)
    ```js 
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
        <script type="text/javascript" src="http://cdn.boldbi.com/embedded-sdk/v5.2.48/embed-js.js"></script>
        <script type="text/javascript" src="~/Scripts/Index.js"></script>
    ```
    
 9. In `<body>` section initialize a method as `Init()` which can be implemented in `Index.js` file. Inside `<body>` section include`<div id="panel">` to display list of dashboard and `<div id="viewer-section">` with a `<div id="dashboard">` inside it. This container can be used to render dashboard.

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

 10. In `Controllers\HomeController.cs` define a `GetDashboard()` method to get list of dashboards from serve. It uses a method `GetToken()` which helps to get the token from server. Add a default view as `Index.cshtml`

     ```js
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("GetDashboard")]
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

 11. To get a particular dashboard details, define an API `GetDetails()` which uses a method `GetSignatureUrl()` to generate the algorithm. In this API, `embedQuerString`,`userEmail` and value from  `GetSignatureUrl()` method is appended as query parameters in the URL to get details of particular dashboard.

     ```js
        [HttpPost]
        [Route("GetDetails")]
        public ActionResult GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
        {
            embedQuerString += "&embed_user_email=" + EmbedProperties.UserEmail;
            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + "&embed_signature=" + GetSignatureUrl(embedQuerString);

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
            var keyBytes = encoding.GetBytes(EmbedProperties.EmbedSecret);
            var messageBytes = encoding.GetBytes(message);
            using (var hmacsha1 = new HMACSHA256(keyBytes))
            {
                var hashMessage = hmacsha1.ComputeHash(messageBytes);
                return Convert.ToBase64String(hashMessage);
            }
        }
     ```

 12. Create a `Index.js` file under `Script` folder. Define `Init()` function which uses `Ajax` call. Once `Ajax` call is succeeded  `ListDashboards()` method will be invoked to list dashboards and render the dashboard.
  ![Index.cshtml location ](/static/assets/embedded/javascript/sample/images/jsFolder_MVC.png#max-width=30%)

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

 13. In `ListDashboards()`method we extract the dashboard list details from the response and append the list in respective container.`renderDashboard()` method that helps to render dashboard.

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

 14. In `renderDashboard()` method we create a instance `dashboard` and call a method `loadDashboard()` to render dashboard.

     ```js
            function renderDashboard(dashboardId) {
            var dashboard = BoldBI.create({
                serverUrl: "http://localhost:5000/bi/site/site1",//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://demo.boldbi.com/bi/site/site1)
                dashboardId: dashboardId,//Provide the dashboard id of the dashboard you want to embed here.   
                embedContainerId: "dashboard",//DOM id where the dashboard will be rendered, here it is dashboard.
                embedType: BoldBI.EmbedType.Component,
                environment: "enterprise",
                width: "100%",
                height: "100%",
                mode: BoldBI.Mode.View,//Rendering mode of dashboard it can be Design and View for dashboard.
                expirationTime: 100000,//Set the duration for the token to be alive.
                authorizationServer: {
                    url: "/GetDetails"//URL from which particular dashboard details is obtained from server.
                }
                
            });

            dashboard.loadDashboard();
            };
     ```