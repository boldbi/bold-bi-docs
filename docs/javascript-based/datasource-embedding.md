---
layout: post
title:  Embed Data source in JavaScript application | Bold BI Docs
description: Learn how to embed data source securely using the Bold BI Embedded SDK in any JavaScript-based business application with secret key, user authorization, and more.
platform: bold-bi
documentation: ug
---

# Steps to embed the data source in your application

Follow these steps to embed data source in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following dependent script in the head tag of your page.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v5.3.53/boldbi-embed.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for data source embedding.

    ```js

    <body>
        <div id="datasource_container"></div>
    </body>
    ```

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDatasource()` function.

You can embed the data source using either the data source ID or data source name as shown in the following code samples:

### Embed using data source ID

```js
<body onload="embedSample();">
    <div id="datasource_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                datasourceId: "755e99c7-f858-4058-958b-67577b283309",                
                embedContainerId: "datasource_container",// This should be the container id where you want to embed the datasource
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.DataSource,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDatasource();
        }
    </script>
</body>
```  

### Embed using data source Name

```js
<body onload="embedSample();">
    <div id="datasource_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                datasourceName: "Datasource Name",     
                embedContainerId: "datasource_container",// This should be the container id where you want to embed the datasource
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.DataSource,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDatasource();
        }
    </script>
</body>
```  

### Creating datasource in datasource embedding

If you need to create a new data source in embedding, then set the mode as `connection` as shown in the following samples and call the `loadDatasource()` function. The embedded user needs to have data source create permission to create data source in data source embedding.

```js
<body onload="embedSample();">
    <div id="datasource_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                embedContainerId: "datasource_container",// This should be the container id where you want to embed the datasource
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.Connection,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDatasource();
        }
    </script>
</body>
```  

4. Refer the following table for the values of the previous properties based on your application.  

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">serverUrl</td>
        <td align="left">Use your Bold BI server url (http://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
        <td align="left">datasourceId</td>
        <td align="left">Use item id of the datasource, which needs to be edited in embedded datasource in your application.</td>
    </tr>
    <tr>
        <td align="left">datasourceName</td>
        <td align="left">Use datasource name of the datasource, which needs to be edited in embedded datasource in your application.</td>
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
        <td align="left">Height of the datasource designer in your page</td>
    </tr>
    <tr>
        <td align="left">width</td>
        <td align="left">Width of the datasource designer in your page</td>
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

2. To create authorization-server action method, copy the following snippet in your controller. You can use currently logged in user email at `user@domain.com` or user name at `username`, but this user must have access to the dashboard.   

    ```js  

            [HttpPost]
            [Route("embeddetail/get")]
            public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
            {
                // User your user-email as embed_user_email
                embedQuerString += "&embed_user_email=user@domain.com";

                // Use your user-email as embed_user_email
                //embedQuerString += "&embed_user_email=username";

                //To set embed_server_timestamp to overcome the EmbedCodeValidation failing while different timezone using at client application.
                double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
                embedQuery += "&embed_server_timestamp=" + timeStamp;

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

3. Add the GetSignatureUrl method, and this method will be called from the previous GetEmbedDetails action. Follow the next section to get EmbedSecret key from the Bold BI application.

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

You can get your Embed Secret key from administrator setting section. Refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and want to embed the designer in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/embedded-bi/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.

> **NOTE:**  <br>This embed setting will be enabled only if you have an Embedded BI plan. <br><br>Refer to this [link](/embedded-bi/faq/how-to-resolve-jquery-conflict-in-embedding) to resolve the jQuery conflict problem in embedded.
