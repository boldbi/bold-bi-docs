---
layout: post
title:  Embedding Analytics Using SDK – Getting Started | Bold BI
description: Get started with JavaScript-based analytics embedding by knowing how to use Bold BI inside your html page, implement authorize server and get embed secret key.
platform: bold-bi
documentation: ug

---

# Steps to embed Bold BI in your application

Follow these steps to embed dashboard in your application

> **NOTE:** We do support scrollable dashboards while embedding in your application.

## How to use Bold BI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL in the head tag of your page.

    ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.6.12/boldbi-embed.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for dashboard embedding.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

    >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function.

    You can embed the dashboard using either the dashboard ID or dashboard path like in below samples.

### Embed using dashboard ID

   ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "755e99c7-f858-4058-958b-67577b283309",                
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
                    embedType: BoldBI.EmbedType.Component,
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    },
                    expirationTime: "100000",
                });
                boldbiEmbedInstance.loadDashboard();
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
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
                    embedType: BoldBI.EmbedType.Component,
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    },
                    expirationTime: "100000",
                });
                boldbiEmbedInstance.loadDashboard();
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
    <td align="left">Use item id of the dashboard, which need to be embed in your application.</td>
    </tr>
    <tr>
    <td align="left">dashboardPath</td>
    <td align="left">dashboardPath will be like `/{category_name}/{dashboard_name}` Use item id of the dashboard, which need to be embed in your application.</td>
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
    <td align="left">Height of the dashboard in your page</td>
    </tr>
    <tr>
    <td align="left">width</td>
    <td align="left">Width of the dashboard in your page</td>
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

> **NOTE:**  The embedContainerId should be the same as your div element id value.

> **NOTE:**  For Bold BI **v5.2.48** or lower version, you must have add the following dependent scripts and also refer the below **Embed SDK URL** of respective Bold BI version.<br />
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

## How to embed the Multi-tabbed dashboard

You can embed the multi-tabbed dashboard by using the dashboard ID or dashboard path which is similar to embedding a regular dashboard. Please refer to the following code sample for embedding a multi-tabbed dashboard

```js

<body onload="embedSample();">
    <div id="dashboard_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardId: "119c6622-62e7-42d2-955a-55c938ab8583",  // Multi-tabbed dashboard id              
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
                embedType: BoldBI.EmbedType.Component,
                mode: BoldBI.Mode.View,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDashboard();
        }
    </script>
</body>
```  

## How to implement the authorize server with user mail or user name

1. You need to implement authorization end point in your application. This will act as the bridge between your application and Bold BI server and also you need to update the secure details like email and group based access. Learn more about authorize server [here](/security-configuration/authorize-server/).  

2. To create authorization-server action method, copy the following snippet in your controller. You can use currently logged in user email at `user@domain.com` or user name at `username`, but this user should have access to the dashboard.   

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

## How to pass the Dashboard Parameter and URL Filter Parameter in the authorization end point dynamically

In the authorization end point, you can pass the both type of filters(Dashboard Parameter/Filter Parameter) at the same time. 

To pass filters to the `embed_datasource_filter` parameter in the authorization endpoint, refer to the following sample in C#(It differs based on your platform language). Here, we have to set both types of filters to the `embed_datasource_filter` property in the endpoint.

```js  
[HttpPost]
[Route("embeddetail/get")]
public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
{
    // Use your user-email as embed_user_email
    embedQuerString += "&embed_user_email=user@domain.com" + "&embed_datasource_filter=" + "[{&&Parameter=Value&Parameter=Value}]";

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

* The `Dashboard Parameter` filter must be started with a double ampersand `&&` in the endpoint. Refer to this [link](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) for more details.   

* The `URL Parameter` filter must be started with a single ampersand `&` in the endpoint. Refer to this [link](/working-with-dashboards/preview-dashboard/urlparameters/) for more details.     

Refer to the following table for the value of the filter properties based on your filter.

<meta charset="utf-8"/>
<table>
<tbody>
<tr>
<th align="left">Scenario</th>
<th align="left">Appending Query</th>
</tr>
<tr>
<td align="left">If passing Dashboard Parameter only</td>
<td align="left">"&embed_datasource_filter=[{&&Parameter=Value}]"</td>
</tr>
<tr>
<td align="left">If passing URL Parameter only </td>
<td align="left">"&embed_datasource_filter=[{&Parameter=Value}]"</td>
</tr>
<tr>
<td align="left">If passing both Dashboard Parameter and URL Parameter</td>
<td align="left">"&embed_datasource_filter=[{&&Parameter=Value&Parameter=Value}]"</td>
</tr>
</tbody>
</table>

> **NOTE:**  Filter value should be enclosed with square and curly brackets as mentioned above.

## How to get Embed Secret key from Bold BI application

You can get your Embed Secret key from administrator setting section. Refer this [link](/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and looking for embedding the Dashboard in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.

## How to use Server URL for embedding the Bold BI in different scenarios

Get the Server URL of the respective Bold BI tenant from the following UMS sites management page.

>**Note:** Site Management page is accessible only for the OnPremise or Enterprise deployment.

To open UMS page, open the OnPremise dashboard listing page, select the user profile in the side menu, then click the `Manage sites (Admin access)` option as follows.

![GotoUMSPage](/static/assets/javascript/images/goto_ums_page.png)

![GetServerURL](/static/assets/javascript/images/get-server-url.png)

Refer to the following table for using the server URL in different scenarios to embed the Bold BI.

ServerUrl - Combination of the `rootURL` and `siteIdentifier`.

<meta charset="utf-8"/>
<table>
<tbody>
<tr>
<th style="width:20%;" align="left">Scenarios</th>
<th style="width:40%;" align="left">URL from UMS page</th>
<th style="width:40%;" align="left">Example Code</th>
</tr>
<tr>
<td align="left">By default, Multi-tenancy <strong>enabled</strong> case</td>
<td>https://example.boldbi.com/bi/site/site1</td>
<td align="left">

```js
 var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "https://example.boldbi.com/bi" + "/" + "site/site1",
 });
 boldbiEmbedInstance.loadDashboard();
```
<code>rootURL</code> - https://example.boldbi.com/bi <br>
<code>siteIdentifier</code> - "site/site1"

</td>
</tr>
<tr>
<td align="left">Multi-tenancy <strong>disabled</strong> case</td>
<td>https://example.boldbi.com/bi</td>
<td align="left">

```js
 var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "https://example.boldbi.com/bi",
 });
 boldbiEmbedInstance.loadDashboard();
```
<code>rootURL</code> - https://example.boldbi.com/bi  <br>

</td>
</tr>
<tr>
<tr>
<td align="left">Hosted as <strong>one</strong> level sub application with Multi-tenancy <strong>enabled</strong> case</td>
<td>https://example.boldbi.com/bold/bi/site/site1</td>
<td align="left">

```js
 var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "https://example.boldbi.com/bold/bi" + "/" + "site/site1",
 });
 boldbiEmbedInstance.loadDashboard();
```
<code>rootURL</code> - https://example.boldbi.com/bi <br>
<code>Main application</code> - https://example.boldbi.com/ <br>
<code>Sub application</code> - "bold/bi"<br>
<code>siteIdentifier</code> - "site/site1"

</td>
</tr>
<tr>
<td align="left">Hosted as <strong>one</strong> level sub application with Multi-tenancy <strong>disabled</strong> case</td>
<td>https://example.boldbi.com/bold/bi</td>
<td align="left">

```js
 var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "https://example.boldbi.com/bold/bi",
 });
 boldbiEmbedInstance.loadDashboard();
```
<code>rootURL</code> - https://example.boldbi.com/bi  <br>
<code>Main application</code> - https://example.boldbi.com/" <br>
<code>Sub application</code> - "bold/bi"

</td>
</tr>
<tr>
<td align="left">Hosted as <strong>two</strong> level sub application with Multi-tenancy <strong>enabled</strong> case</td>
<td>https://example.boldbi.com/bold/test/bi/site/site1</td>
<td align="left">

```js
 var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "https://example.boldbi.com/bold/test/bi" + "/" + "site/site1",
 });
 boldbiEmbedInstance.loadDashboard();
```
<code>rootURL</code> - https://example.boldbi.com/bold/test/bi <br>
<code>Main application</code> -"https://example.boldbi.com/" <br>
<code>Sub applications</code> - "bold/test/bi"<br>
<code>siteIdentifier</code> - "site/site1"

</td>
</tr>
<tr>
<td align="left">Hosted as <strong>two</strong> level sub application with Multi-tenancy <strong>disabled</strong> case</td>
<td>https://example.boldbi.com/bold/test/bi</td>
<td align="left">

```js
 var boldbiEmbedInstance = BoldBI.create({
    serverUrl: "https://example.boldbi.com/bold/test/bi",
 });
 boldbiEmbedInstance.loadDashboard();
```
<code>rootURL</code> -  https://example.boldbi.com/bold/test/bi <br>
<code>Main application</code> - https://example.boldbi.com/  <br>
<code>Sub applications</code> - "bold/test/bi"

</td>
</tr>
</tbody>
</table>