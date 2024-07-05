---
layout: post
title:  Embedding Analytics Using SDK – Getting Started | Bold BI
description: Get started with JavaScript-based analytics embedding by knowing how to use Bold BI inside your html page, implement authorize server and get embed secret key.
platform: bold-bi
documentation: ug

---

# Steps to embed Bold BI in your application

Please follow these steps to embed the dashboard in your application.

> **NOTE:** We do support scrollable dashboards when they are embedded in your application.

You may also watch the below video to learn more about embedding Bold BI dashboard in an ASP.NET Core application.<br/>

<iframe class="helpsite-video-section" src="https://www.youtube.com/embed/OXISapzYAj8?start=379" frameborder="0" allowfullscreen></iframe>

## How to use Bold BI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL in the `head` tag of your page.

    ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.9.50/boldbi-embed.js"></script>
    </head>
    ```

2. In the `body` tag, you need to create the `div` element with your own id name. This element will be used for dashboard embedding.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

  >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the `body` tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function.

    You can embed the dashboard using either the dashboard ID or dashboard path, as shown in the samples below.

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

5. Please copy the previous embedSample() function and paste it into your page. Make sure to update the values with the appropriate properties.  

> **NOTE:**  The embedContainerId should be the same as the value of your div element id.

> **NOTE:**  For Bold BI **v5.2.48** or lower versions, you must add the following dependent scripts and also refer to the **Embed SDK URL** of the respective Bold BI version below.<br />
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
<td><code>v7.9.50(latest)</code></td>
<td><code>

```js
<head> 
   <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.9.50/boldbi-embed.js"></script>
</head>
```

</code></td>
</tr>
</tbody>
</table>

## How to embed the Multi-tabbed dashboard

To embed the multi-tabbed dashboard, you can use either the dashboard ID or the dashboard path, similar to embedding a regular dashboard. Please refer to the code sample below for embedding a multi-tabbed dashboard.

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

## How to implement the authorize server with user email or user name

1. You need to implement an authorization endpoint in your application. This will act as the bridge between your application and the Bold BI server. Additionally, you need to update the secure details, such as email and group-based access. To learn more about the [authorization server](/security-configuration/authorize-server/).

2. To create the authorization-server action method, copy the following snippet into your controller. You can use the currently logged-in user's email at `user@domain.com` or `username`, but this user should have access to the dashboard. 

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

3. Please add the GetSignatureUrl method, which will be called from the previous GetEmbedDetails action. Follow the next section to obtain the EmbedSecret key from the Bold BI application.

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

## How to pass the Dashboard Parameter and URL Filter Parameter in the authorization endpoint dynamically

In the authorization endpoint, you can pass both types of filters (Dashboard Parameter/Filter Parameter) at the same time. 

To pass filters to the `embed_datasource_filter` parameter in the authorization endpoint, refer to the following sample in C# (it may differ based on your platform language). Here, we need to set both types of filters to the `embed_datasource_filter` property in the endpoint.

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

* The `Dashboard Parameter` filter must be started with a double ampersand `&&` in the endpoint. Please refer to the [configuring dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) for more details.

* The `URL Parameter` filter must be started with a single ampersand `&` in the endpoint. Please refer to the [URL Filter](/working-with-dashboards/preview-dashboard/urlparameters/) for more details.  

Please refer to the table below for the values of the filter properties related to your filter.

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
<td align="left">If passing multiple Dashboard Parameters </td>
<td align="left">"&embed_datasource_filter=[{&&Parameter=Value&&Parameter1=Value1}]"</td>
</tr>
<tr>
<td align="left">If passing multiple URL Parameters </td>
<td align="left">"&embed_datasource_filter=[{&Parameter=Value&Parameter1=Value1}]"</td>
</tr>
<tr>
<td align="left">If passing both Dashboard Parameter and URL Parameter</td>
<td align="left">"&embed_datasource_filter=[{&&Parameter=Value&Parameter=Value}]"</td>
</tr>
<tr>
<td align="left">If passing both URL Parameter and Dashboard Parameter</td>
<td align="left">"&embed_datasource_filter=[{&Parameter=Value&&Parameter=Value}]"</td>
</tr>
</tbody>
</table>

> **NOTE:**  The filter value should be enclosed with square brackets and curly braces as mentioned above.

## How to get Embed Secret key from Bold BI application

You can obtain your Embed Secret key from the administrator's settings section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and are looking to embed the Dashboard in your application, we recommend using the common embed secret instead of a separate embed secret for each site. You can refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to obtain the common embed secret. 

## How to use Server URL for embedding the Bold BI in different scenarios

To obtain the Server URL of the corresponding Bold BI tenant, refer to the UMS sites management page.

>**Note:** The Site Management page is only accessible for OnPremise or Enterprise deployment.

To open the UMS page, open the OnPremise dashboard listing page. From there, select the user profile in the side menu and click on the `Manage sites (Admin access)` option.

![GotoUMSPage](/static/assets/javascript/images/goto_ums_page.png)

![GetServerURL](/static/assets/javascript/images/get-server-url.png)

Please refer to the table below for instructions on how to use the server URL in various scenarios to embed Bold BI.

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