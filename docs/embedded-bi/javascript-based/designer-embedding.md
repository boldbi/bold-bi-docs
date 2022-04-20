---
layout: post
title:  Dashboard Designer – JavaScript Embedding | Bold BI Learning
description: Learn how to embed dashboard designer using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed the dashboard designer in your application

Follow these steps to embed dashboard designer in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following dependent scripts in the head tag of your page.

    ```js
    <head>  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/signalr/jquery.signalr-2.1.0.min.js"></script>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v5.1.55/embed-js.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for dashboard designer embedding.

    ```js

    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDesigner()` function.

You can edit the dashboard in embedded designer using either dashboard ID or dashboard path like in below samples.

### Embed using dashboard ID

```js
<body onload="embedSample();">
    <div id="dashboard_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardId: "755e99c7-f858-4058-958b-67577b283309",                
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.Design,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDesigner();
        }
    </script>
</body>
```  

### Embed using dashboard path

```js
<body onload="embedSample();">
    <div id="dashboard_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardPath: "/Sales/Sales Analysis Dashboard",
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.Design,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDesigner();
        }
    </script>
</body>
```  

### Creating draft dashboard in designer embedding

If you do not specify none of the dashboard ID or dashboard path, then the server will automatically create a new draft dashboard. The embedded user needs to have dashboard create permission to create draft in designer embedding.

```js
<body onload="embedSample();">
    <div id="dashboard_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.Design,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDesigner();
        }
    </script>
</body>
```  

### Creating draft dashboard with existing datasource in designer embedding

When creating a draft in designer embedding, if you specify either existing datasource ID or datasource name, the draft will use that existing datasource selected by default.

#### Draft with datasource ID

```js
<body onload="embedSample();">
    <div id="dashboard_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                datasourceId: "895e99c7-f858-4058-958b-67577b283345",
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.Design,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDesigner();
        }
    </script>
</body>
```  

#### Draft with datasource name

```js
<body onload="embedSample();">
    <div id="dashboard_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                datasourceName: "Northwind Datasource",
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.Design,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDesigner();
        }
    </script>
</body>
```  

4. Refer the following table for value of the previous properties based on your application.  

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">serverUrl</td>
        <td align="left">Use your Bold BI server url (http://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
        <td align="left">dashboardId</td>
        <td align="left">Use item id of the dashboard, which needs to be edited in embedded designer in your application.</td>
    </tr>
    <tr>
        <td align="left">dashboardPath</td>
        <td align="left">dashboardPath will be like `/{category_name}/{dashboard_name}` Use item id of the dashboard, which needs to be edited in embedded designer in your application.</td>
    </tr>
    <tr>
        <td align="left">datasourceId</td>
        <td align="left">Use existing datasource ID to use it in draft dashboard on embedded designer in your application.</td>
    </tr>
    <tr>
        <td align="left">datasourceName</td>
        <td align="left">Use existing datasource name to use it in draft dashboard on embedded designer in your application.</td>
    </tr>
    <tr>
        <td align="left">embedContainerId</td>
        <td align="left">Id of the created div element in your body.</td>
    </tr>
    <tr>
        <td align="left">embedType</td>
        <td align="left">BoldBI.EmbedType.Component</td>
    </tr>
    <tr>
        <td align="left">environment</td>
        <td align="left">BoldBI.Environment.Cloud or BoldBI.Environment.Enterprise</td>
    </tr>
    <tr>
        <td align="left">height</td>
        <td align="left">Height of the dashboard designer in your page</td>
    </tr>
    <tr>
        <td align="left">width</td>
        <td align="left">Width of the dashboard designer in your page</td>
    </tr>
    <tr>
        <td align="left">authorizationServer</td>
        <td align="left">Use your authorization URL</td>
    </tr>
    <tr>
        <td align="left">expirationTime</td>
        <td align="left">Token expiration time</td>
    </tr>
  </tbody>
</table>




5. Copy the previous embedSample() function and paste in your page. You need to update your values to the properties.  

> **NOTE:**  embedContainerId should be same as your div element id value  

## How to implement the authorize server with user mail or user name

1. You need to implement authorization end point in your application. This will act as the bridge between your application and Bold BI server and also you need to update the secure details like email and group based access. Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/).  

2. To create authorization-server action method, copy the following code snippet in your controller. You can use currently logged in user email at `user@domain.com` or user name at `username`, but this user should have write access to the dashboard.   

    ```js  

            [HttpPost]
            [Route("embeddetail/get")]
            public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
            {
                // Use your user-email as embed_user_email
                embedQuerString += "&embed_user_email=user@domain.com";

                // Use your username as embed_user_email
                //embedQuerString += "&embed_user_email=username";

                var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString);

                var embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(dashboardServerApiUrl);
                    client.DefaultRequestHeaders.Accept.Clear();

                    var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                    string resultContent = result.Content.ReadAsStringAsync().Result;
                    return resultContent;
                }
            }
    ```

3. Add the GetSignatureUrl method, and this method would be called from the previous GetEmbedDetails action. Follow the next section to get EmbedSecret key from Bold BI application.

    ```js  
            
            public string GetSignatureUrl(string queryString)
            {
                // Get the embedSecret key from Bold BI.
                var embedSecret = "8apLLNabQisvriG2W1nOI7XWkl2CsYY";
                var encoding = new System.Text.UTF8Encoding();
                var keyBytes = encoding.GetBytes(embedSecret);
                var messageBytes = encoding.GetBytes(queryString);
                using (var hmacsha1 = new HMACSHA256(keyBytes))
                {
                    var hashMessage = hmacsha1.ComputeHash(messageBytes);
                    return Convert.ToBase64String(hashMessage);
                }
            }
    ```

## How to get Embed Secret key from Bold BI application

You can get your Embed Secret key from administrator setting section. Refer this [link](/embedded-bi/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and looking for embedding the Designer in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/embedded-bi/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.

> **NOTE:**  <br>This embed setting will be enabled only if you have an Embedded BI plan. <br><br>Refer to this [link](/embedded-bi/faq/how-to-resolve-jquery-conflict-in-embedding) to resolve the jQuery conflict problem in embedded.
