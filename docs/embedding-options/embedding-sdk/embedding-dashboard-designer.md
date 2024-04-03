---
layout: post
title:  Dashboard Designer – JavaScript Embedding | Bold BI Learning
description: Learn how to embed dashboard designer using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed the dashboard designer in your application

Follow these steps to embed the dashboard designer in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL to the `head` tag of your page.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.6.12/boldbi-embed.js"></script>
    </head>
    ```

2. In the `body` tag, you should create a `div` element with your own id name. This element will be utilized for embedding the dashboard designer.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

    >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create a BoldBI instance with the following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDesigner()` function.

    You can edit the dashboard in the embedded designer using either the dashboard ID or the dashboard path, as shown in the samples below.

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

    > **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

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

    If you do not specify either the dashboard ID or dashboard path, the server will automatically create a new draft dashboard. The embedded user must have permission to create drafts in designer embedding.

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                    embedType: BoldBI.EmbedType.Component,
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

    When creating a draft in designer embedding, if you specify either an existing datasource ID or datasource name, the draft will use that existing datasource selected by default.

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

4. Please refer to the following table for the values of the previous properties based on your application.

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

5. Copy the previous embedSample() function and paste it onto your page. Make sure to update the values to match the properties.  

> **NOTE:**  The embedContainerId should be the same as the value of your div element id.

> **NOTE:**  In order to use Bold BI **v5.2.48** or a lower version, you need to add the following dependent scripts and also refer to the **Embed SDK URL** for the respective Bold BI version.<br />
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
<td><code>v7.6.12(latest)</code></td>            
<td><code>

```js
<head> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.6.12/boldbi-embed.js"></script>
</head>
```

</code></td>
</tr>
</tbody>
</table>

## How to implement the authorize server with user mail or user name

1. You need to implement an authorization endpoint in your application. This endpoint will serve as the bridge between your application and the Bold BI server. Additionally, you need to update the secure details, such as email and group-based access. You can learn more about the authorization server [here](/security-configuration/authorize-server/).  

2. To create an authorization-server action method, copy the following code snippet into your controller. You can use the currently logged-in user's email, which is `user@domain.com` , or the `username`. However, this user must have write access to the dashboard.

    ```js  
    [HttpPost] 
    [Route("embeddetail/get")]
    public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
    {
        // Use your user-email as embed_user_email
        embedQuerString += "&embed_user_email=user@domain.com";

        // Use your username as embed_user_email
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

3. Please add the GetSignatureUrl method, which should be called from the previous GetEmbedDetails action. Refer to the next section for instructions on obtaining the EmbedSecret key from the Bold BI application.

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

You can obtain your Embed Secret key from the administrator settings section. Please refer to this [link](/site-administration/embed-settings/) for further information.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and are looking to embed the Designer in your application, we recommend using the common embed secret instead of a separate embed secret for each site. Please refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to obtain the common embed secret.