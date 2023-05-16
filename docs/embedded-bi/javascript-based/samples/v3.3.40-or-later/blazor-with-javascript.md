---
layout: post
title:  Embedded SDK v3.3.40 Blazor with javascript Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with Blazor sample application, which has been supported by Bold BI since v3.3.40.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Blazor using the Embedded SDK

The sample has been provided in following sections for `Blazor Server` and `Blazor WebAssembly`, which demonstrates the dashboard rendering available in your Bold BI server and is followed by steps to create a new embedding application in the `Blazor Server` and `Blazor WebAssembly` on your own.  

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The `Getting Started` guide gives you enough information that you need to know before working on the sample. 

## How to run Blazor Server sample

1. Please [get](https://github.com/boldbi/blazor-server-sample) the Blazor forms sample from the attached file.    

2. You need to set the following properties in the `EmbedProperties.cs` files as follows. 
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/blazor-props.png#max-width=70%) 

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboard.</td>
    </tr>
    <tr>
    <td align="left">UserPassword</td>
    <td align="left">Password of the Admin in Bold BI, which will be used to get the dashboard.</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">You can get your EmbedSecret key from embed tab by enabling <code>Enable embed authentication</code> in <a href='/embedded-bi/site-administration/embed-settings/'> administration page.</a></td>
    </tr>
    <tr>
    <td align="left">RootUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi).</td>
    </tr>
    <tr>
    <td align="left">SiteIdentifier</td>
    <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
    <td align="left">DashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to render.</td>
    </tr>   
    </tbody>
    </table>

3. The dashboard can be rendered in design mode or created with the following changes in the `_Host.cshtml`.

     ```js
     $(document).ready(function () {
        this.dashboard = BoldBI.create({
            serverUrl: rootUrl + "/" + siteIdentifier,
            dashboardId: dashboardId,
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
            mode: BoldBI.Mode.Design,
            width: window.innerWidth + "px",
            height: window.innerHeight + "px",
            expirationTime: 100000,
            authorizationServer: {
                url: authorizationServerUrl
            }
        });
        this.dashboard.loadDesigner();
    });
     ```

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

4. Run your Blazor Forms application.

## How Blazor Server sample works
 1. Based on the dashboard details in the `_Host.cshtml`, authorize the server URL by calling the `GetEmbedDetails` function as follows.
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/blazor-authorize.png#max-width=95%)

 2. In the above authorization, generate the `SignatureUrl` with the provided `EmbedSecret key` and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `EmbedProperties.cs`, change the dashboard Id of the respective dashboard as you wish to embed.
    ![EmbedProperties](/static/assets/embedded/javascript/sample/images/blazor-props.png#max-width=70%)

## Steps to create new Blazor Server Application to embed dashboard

 1. Start Visual Studio and click `Create a new project.`

 2. Choose `Blazor Server Application` (.NET Framework), then click `Next`.
    ![SelectProject](/static/assets/embedded/javascript/sample/images/blazor_server_create.png)

 3. Change the project name as you want, then click `Create`. 

 4. Create the model classes `EmbedProperties.cs` and `EmbedClass.cs` to define the mandatory properties as follows.

     ```js
        public class EmbedProperties
        {
        //BoldBI server URL(ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)
        public static string RootUrl = "http://localhost:5000/bi";

        //  For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.
        public static string SiteIdentifier = "site/site1";

        //Enter your BoldBI credentials here.
        public static string UserEmail = ""; //Provide the User Email

        //Provide the dashboard id of the dashboard you want to render
        public static string DashboardId = ""; 

        // Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `enterprise`)
        public static string Environment = "enterprise";

        // Get the embedSecret key from Bold BI.
        public static string EmbedSecret = ""; //Provide the embed secret key.
        }
        public class EmbedClass
        {
            [DataMember]
            public string embedQuerString { get; set; }
            [DataMember]
            public string dashboardServerApiUrl { get; set; }
        }
     ```

 5. The following script is mandatory to render the dashboard. Set the `Layout = null` at the top and replace the following code in your `\Pages\_Host.cshtml` page of the `<head>` tag.

     ```js 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js"></script>
    ```
    
 6. Inside the `<body>` tag, create the DOM element with the id `dashboard` and implement a function to render the dashboard.

    ```js
     <div id="dashboard"></div>
     <script>
        var rootUrl = "@EmbedProperties.rootUrl"; //Please provide the server url
        var siteIdentifier = "@EmbedProperties.siteIdentifier";
        var authorizationServerUrl = "api/EmbedData/GetDetails";
        var dashboardId = "@EmbedProperties.dashboardId"; //Please provide the required dashboard Id.
        var environment = "@EmbedProperties.Environment";
        $(document).ready(function () {
            this.dashboard = BoldBI.create({
                serverUrl: rootUrl + "/" + siteIdentifier,//Please provide the Bold BI server url
                dashboardId: dashboardId,//Please provide the required dashboard Id.
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                mode: BoldBI.Mode.View,
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

 7. Under the controller folder, create a controller `EmbedDataController.cs` and define an API `GetEmbedDetails()`, which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`, `userEmail` and the value from  the `GetSignatureUrl()` method is appended as query parameters in the URL to get details of particular dashboard.

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

 ## How to run the Blazor WebAssembly sample

 1. Please [get](https://github.com/boldbi/blazor-webassembly-sample) the Blazor WebAssembly sample.    

 2. You need to set the following properties in the `index.html` and `EmbedProperties.cs` file as follows.  
    ![Hostdetails](/static/assets/embedded/javascript/sample/images/hostdetails-blazor.png#max-width=50%)
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/blazor-webassembly-props.png#max-width=70%) 

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboard.</td>
        </tr>
        <tr>
        <td align="left">UserPassword</td>
        <td align="left">Password of the Admin in Bold BI, which will be used to get the dashboard.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You can get your EmbedSecret key from embed tab by enabling <code>Enable embedauthentication</code> in <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'> administration page.</a></td>
        </tr> 
        <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi).</td>
        </tr>
        <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <td align="left">DashboardId</td>
        <td align="left">Provide the dashboard id of the dashboard you want to embed.</td>
        </tr>   
    </tbody>
    </table> 

 3. Run your `Blazor WebAssembly` application.

 4. The dashboard can be rendered in design mode or create with the following changes in the `index.html` method.

    ```js
     $(document).ready(function () {
        this.dashboard = BoldBI.create({
            serverUrl: rootUrl + "/" + siteIdentifier,
            dashboardId: dashboardId,
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
            mode: BoldBI.Mode.Design,
            width: window.innerWidth + "px",
            height: window.innerHeight + "px",
            expirationTime: 100000,
            authorizationServer: {
                url: authorizationServerUrl
            }
        });
        this.dashboard.loadDesigner();
    });
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

## How the Blazor WebAssembly sample works
 1. Based on the dashboard provided in the `index.html`, authorize the server URL by calling the `GetEmbedDetails` function as follows.
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/blazor-authorize.png#max-width=95%)

 2. In the above authorization, generate the `SignatureUrl` with the provided `EmbedSecret key` and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `index.cshtml`, change the dashboard Id of the respective dashboard as you wish to embed.
    ![Hostdetails](/static/assets/embedded/javascript/sample/images/hostdetails-blazor.png#max-width=50%)

## Steps to create new Blazor WebAssembly application to embed dashboard

 1. Start Visual Studio and click `Create a new project`.

 2. Choose `Blazor WebAssembly` (.NET Framework), then click `Next`.
    ![SelectProject](/static/assets/embedded/javascript/sample/images/blazor_webassembly_create.png#max-width=75%)
    ![Blazor web hosted](/static/assets/embedded/javascript/sample/images/blazor_webassembly.png#max-width=60%)
    
 3. Change the project name as you want, then click `Create`. 

 4. In the `Shared Project`, create the model classes `EmbedProperties.cs` and `EmbedClass.cs` to define the mandatory properties as follows.

    ```js
        public class EmbedProperties
        {
            public static string UserEmail = "";  

            public static string UserPassword = ""; 

            public static string EmbedSecret = ""; 
        }
        public class EmbedClass
        {
            [DataMember]
            public string embedQuerString { get; set; }
            [DataMember]
            public string dashboardServerApiUrl { get; set; }
        }
    ```
 5. In the `Client project`, the following scripts and style sheets are mandatory to render the dashboard. Replace the following code in your `\wwwroot\index.html` page of the `<head>` tag.

     ```js 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js"></script>
    ```

 6. Inside the `<body>` tag, create the DOM element with the id `dashboard` and implement a function to render the dashboard.
    ```js
        <script>
         var rootUrl = "http://localhost:53623/bi";
        var siteIdentifier = "site/site1";
        var authorizationServerUrl = "api/EmbedData/GetDetails";
        var dashboardId = "c0281c29-7232-4320-bbbf-dc4e9ad540bf";
        function renderDashboard() {
            this.dashboard = BoldBI.create({
                serverUrl: rootUrl + "/" + siteIdentifier, //Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)
                dashboardId: dashboardId, //Provide the dashboard id of the dashboard you want to embed here.
                embedContainerId: "dashboard",
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                mode: BoldBI.Mode.View,
                width: window.innerWidth-300 + "px",
                height: window.innerHeight-100 + "px",
                expirationTime: 100000,
                authorizationServer: {
                    url: authorizationServerUrl
                }
            });
            this.dashboard.loadDashboard();
        }
        </script>
    ```

 7. In the `Index.razor`, implement the code as follows to invoke the `renderDashboard()` method,

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

 8. In the `Server project`, under the controller folder, create the controller `EmbedDataController.cs` and define an API `GetEmbedDetails()` which uses the `GetSignatureUrl()` method to generate the algorithm. In this API, the `embedQuerString`, `userEmail` and value from the `GetSignatureUrl()` method are appended as query parameters in the URL to get details of particular dashboard.

    ```js
        [HttpPost("[action]")]
        [Route("GetDetails")]
        public string GetDetails([FromBody] object embedQuerString)
        {
            var embedClass = JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());
            var embedQuery = embedClass.embedQuerString;
            // User your user-email as embed_user_email
            var obj = new EmbedProperties();
            embedQuery += "&embed_user_email=" + obj.UserEmail;
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