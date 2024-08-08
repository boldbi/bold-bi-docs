---
layout: post
title:  Dashboard Widget – JavaScript Embedding | Bold BI Docs
description: Learn how to embed dashboard widget using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed the dashboard widget in your application

Follow these steps to embed a dashboard widget in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL within the `head` tag of your page.

    ```js
    <head> 
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.10.16/boldbi-embed.js"></script>
    </head>
    ```

2. In the `body` tag, you need to create the `div` element with your own ID name. This element will be used for embedding dashboard widgets.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

    >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create a BoldBI instance with the following properties and call that function in the body using the `onload` attribute. Additionally, you need to call the `loadDashboardWidget("{widget_name/widget_id}")` function with the widget details.

    You can embed the dashboard widget using either the `widget name` or `widget ID`, as shown in the samples below.

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

    > **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

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

4. Please refer to the following table for the value of the previous properties based on your application. 

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


5. Copy the previous embedSample() function and paste it on your page. Make sure to update the values to the appropriate properties.

> **NOTE:**  The embedContainerId should be the same as the value of your div element's id.

> **NOTE:**  To use Bold BI **v5.2.48** or a lower version, you must add the following dependent scripts and refer to the **Embed SDK URL** of respective Bold BI version.<br />
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
<td><code>v7.10.16(latest)</code></td>            
<td><code>

```js
<head> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.10.16/boldbi-embed.js"></script>
</head>
```

</code></td>
</tr>
</tbody>
</table>

## How to get widget ID
1. We have a REST API for retrieving all the widgets of a specific dashboard, which can be accessed at `https://localhost:[portno]/bi/api/site/site1/v4.0/dashboards/{dashboardId}/widgets`. The `dashboardId` parameter specifies the itemId of the desired dashboard.

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

2. By utilizing the JSON result, you can obtain a collection of widgets that are available in the dashboard, displaying the widget ID and widget name as depicted below.

    ![InspectElement](/static/assets/javascript/images/get_widgets_api.png)


## How to implement the authorize server with user mail or user name

1. You need to implement an authorization endpoint in your application. This endpoint will act as the bridge between your application and the Bold BI server. Additionally, you need to update the secure details such as email and group based access. Learn more about the [authorization server](/security-configuration/authorize-server/).

2. To create the authorization-server action method, please copy the following snippet into your controller. You can use the currently logged-in user's email at `user@domain.com` or their `username`, but please ensure that this user has access to the dashboard.   

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

3. Please add the GetSignatureUrl method, and this method should be called from the previous GetEmbedDetails action. Refer to the next section to obtain the EmbedSecret key from the Bold BI application.

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

In the authorization endpoint, you can pass both types of filters (Dashboard Parameter and URL Filter Parameter) simultaneously.

To pass filters to the `embed_datasource_filter` parameter in the authorization endpoint, refer to the following sample in C# (which may vary depending on your platform language). In this example, we have set both types of filters to the `embed_datasource_filter` property in the endpoint.

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

Please refer to the table below for the values of the filter properties based on your filter. 

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

> **NOTE:**  Please refer to the table below for the values of the filter properties based on your filter. 

## How to get Embed Secret key from Bold BI application

You can obtain your Embed Secret key from the administrator settings section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and are looking to embed the Widgets in your application, we recommend using the common embed secret instead of a separate embed secret for each site. Please refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to obtain the common embed secret.