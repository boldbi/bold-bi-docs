---
layout: post
title:  Embed Data source in JavaScript application | Bold BI Docs
description: Learn how to embed data source securely using the Bold BI Embedded SDK in any JavaScript-based business application with secret key, user authorization, and more.
platform: bold-bi
documentation: ug
---

# Steps to embed the data source in your application

Please follow these steps to embed a data source in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL in the `head` tag of your page.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.8.18/boldbi-embed.js"></script>
    </head>
    ```

2. In the `body` tag, you need to create the `div` element with your own id name. This element will be used for embedding a data source.

    ```js
    <body>
        <div id="datasource_container"></div>
    </body>
    ```
    >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. ¬In the `body` tag, you need to add the function that creates a BoldBI instance with the following properties and call that function in the body using the `onload` attribute as shown. Additionally, call the `loadDatasource()` function.

    You can embed the data source using either the data source ID or data source name, as shown in the following code samples.

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

    > **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

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

    If you need to create a new data source in embedding, set the mode as `connection` as shown in the following examples and call the `loadDatasource()` function. The embedded user must have permission to create data sources in data source embedding.

    ```js
    <body onload="embedSample();">
        <div id="datasource_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    embedContainerId: "datasource_container",// This should be the container id where you want to embed the datasource
                    embedType: BoldBI.EmbedType.Component,
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

4. Please refer to the following table for the values of the previous properties based on your application.

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

5. Copy the previous embedSample() function and paste it on your page. Make sure to update the values to the appropriate properties. 

> **NOTE:**  The embedContainerId should be the same as the value of your div element id.

> **NOTE:**  To use Bold BI **v5.2.48** or a lower version, you need to include the following dependent scripts and refer to the **Embed SDK URL** of respective Bold BI version.<br />
`https://cdn.boldbi.com/embedded-sdk/v5.2.48/embed-js.js`

<meta charset="utf-8"/>
<table>
<thead>
<tr>
<th style="width:20%;"><code>Bold BI Version</th>
<th style="width:80%;"><code>Dependent Scripts</code></th>
</tr></thead>
<tbody>        
<tr>            
<td><code>v5.2.48 or Lower</code></td>            
<td><code>

```js
<head>  
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v5.2.48/embed-js.js"></script>
</head>
```  

</code></td>
</tr>
<tr>            
<td><code>v5.3.53</code></td>            
<td><code>

```js
<head> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v5.3.53/boldbi-embed.js"></script>
</head>
```

</code></td>
</tr>
<tr>            
<td><code>v7.8.18(latest)</code></td>            
<td><code>

 ```js
<head> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.8.18/boldbi-embed.js"></script>
</head>
```
</code></td>
</tr>
</tbody>
</table>

## How to implement the authorize server with user mail or user name

1. You need to implement an authorization endpoint in your application. This endpoint will act as the bridge between your application and the Bold BI server. Additionally, you need to up-date the secure details such as email and group-based access. Learn more about the [authorization server](/security-configuration/authorize-server/).

2. To create an authorization-server action method, copy the following snippet into your con-troller. You can use either the currently logged in user's email at `user@domain.com` or their `username`, but this user must have access to the dashboard.

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

3. Please add the GetSignatureUrl method, and this method will be called from the previous GetEmbedDetails action. Refer to the following section to obtain the EmbedSecret key from the Bold BI application.

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

You can obtain your Embed Secret key from the administrator settings section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for additional information.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and want to embed the designer in your application, we recommend using the common embed secret instead of a separate embed secret for each site. You can refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to obtain the common embed secret.