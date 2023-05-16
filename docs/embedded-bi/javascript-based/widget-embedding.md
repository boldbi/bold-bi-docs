---
layout: post
title:  Dashboard Widget – JavaScript Embedding | Bold BI Docs
description: Learn how to embed dashboard widget using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed the dashboard widget in your application

Follow these steps to embed dashboard widget in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL in the head tag of your page.

    ```js
    <head> 
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for dashboard widget embedding.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

3. In the body tag, you need to add the function to create a BoldBI instance with the following properties and call that function in the body using the `onload` attribute. Also, call the `loadDashboardWidget("{widget_name/widget_id}")` function with widget details.

    You can embed the dashboard widget using either `widget name` or `widget ID` like in the below samples.

    ### Embed using widget name

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "9a4b8ddb-606f-4acd-8c53-8ccdcaa92a87",
                    embedContainerId: "dashboard-container",// This should be the container id where you want to embed the dashboard designer
                    embedType: BoldBI.EmbedType.Component,
                    environment: BoldBI.Environment.Enterprise,
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    },
                    expirationTime: "100000",
                });
                boldbiEmbedInstance.loadDashboardWidget("Sales By Country"); // Pass widget name as argument to loadDashboardWidget function 
            }
        </script>
    </body>
    ```  

    ### Embed using widget ID

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "9a4b8ddb-606f-4acd-8c53-8ccdcaa92a87",
                    embedContainerId: "dashboard-container",// This should be the container id where you want to embed the dashboard designer
                    embedType: BoldBI.EmbedType.Component,
                    environment: BoldBI.Environment.Enterprise,
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    },
                    expirationTime: "100000",
                });
                boldbiEmbedInstance.loadDashboardWidget("efbf2999-f7e7-4831-a492-53c4df394af0"); // To get widget id, please refer `How to get Widget ID`
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

> **NOTE:**  embedContainerId should be same as your div element id value.

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
<td><code>v6.4.6(latest)</code></td>            
<td><code>

 ```js
<head> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js"></script>
</head>
```

</code></td>
</tr>
</tbody>
</table>

## How to get widget ID

1. We have REST API for retrieving all the widgets of the specific dashboard, `https://localhost:[portno]/bi/api/site/site1/v4.0/dashboards/{dashboardId}/widgets`, `dashboardId` which specifies the itemId of the desired dashboard.

    Please find the below code snippet to call the given API,
    
    ```js
    [HttpGet]
    [Route("GetDashboardWidgets")]
    public string GetDashboardWidgets()
    {
        var token = GetToken();
        using (var client = new HttpClient())
        {
            client.BaseAddress = new Uri(EmbedProperties.RootUrl);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Add("Authorization", token.TokenType + " " + token.AccessToken);
            var result = client.GetAsync("https://localhost:51777/bi/api/site/site1/v4.0/dashboards/b646b8a1-a4c6-4dee-9877-f9559c82f7fa/widgets").Result;
            string resultContent = result.Content.ReadAsStringAsync().Result;
            return resultContent;
        }
    }
    ```

2. Using JSON result, you can get a collection of widgets available in that dashboard with widget ID and widget name as shown below.

    ![InspectElement](/static/assets/embedded/javascript/images/get_widgets_api.png)


## How to implement the authorize server with user mail or user name

1. You need to implement authorization end point in your application. This will act as the bridge between your application and Bold BI server and also you need to update the secure details like email and group based access. Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/).  

2. To create authorization-server action method, copy the following snippet in your controller. You can use currently logged in user email at `user@domain.com` or user name at `username`, but this user should have access to the dashboard.   

    ```js  
    [HttpPost]
    [Route("embeddetail/get")]
    public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
    {   
        // Use the user-email as embed_user_email
        embedQuerString += "&embed_user_email=user@domain.com";

        // Use the username as embed_user_email
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

## How to pass the Dashboard Parameter and URL Parameter filters in the authorization end point dynamically

In the authorization endpoint, you can pass both types of filters(Dashboard Parameter/URL Filter Parameter) at the same time. 

To pass filters to the `embed_datasource_filter` parameter in the authorization endpoint, refer to the following sample in C#(It differs based on your platform language). Here, we have set both types of filters to the `embed_datasource_filter` property in the endpoint.

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

* The `Dashboard Parameter` filter must be started with a double ampersand `&&` in the endpoint. Refer to this [link](/embedded-bi/working-with-data-source/configuring-dashboard-parameters/) for more details.    

* The `URL Parameter` filter must be started with a single ampersand `&` in the endpoint. Refer to this [link](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/) for more details.     

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

You can get your Embed Secret key from administrator setting section. Refer this [link](/embedded-bi/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and looking for embedding the Widgets in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/embedded-bi/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.

> **NOTE:**  <br>This embed setting will be enabled only if you have an Embedded BI plan. <br><br>Refer to this [link](/embedded-bi/faq/how-to-resolve-jquery-conflict-in-embedding) to resolve the jQuery conflict problem in embedded.