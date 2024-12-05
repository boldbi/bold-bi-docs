---
layout: post
title: Bold BI dashboard - JavaScript Embedding | Bold BI Docs
description: Learn to embed Bold BI dashboards seamlessly in your business application using JavaScript, enhancing data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug

---

# How to embed Bold BI dashboard using javascript

Follow these steps to embed the dashboard using the token API member.

1. In your .html page, you need to add the following Embed SDK URL in the head tag of your page.

    ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v8.2.22/boldbi-embed.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for embedding.

    ```js
    <body>
        <div id="embed_container"></div>
    </body>
    ```
    
    >**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows.

    ## Embed dashboard designer in your application

    You can edit the dashboard in the embedded designer using either the dashboard ID or the dashboard path, as shown in the sample below.

    **Embed using dashboard ID**
    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "755e99c7-f858-4058-958b-67577b283309", // <-- Update this line     
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.Design, // <-- Update this line
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDesigner(); // <-- Update this line
            }
        </script>
    </body>
    ```
    **Embed using dashboard path**

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardPath: "/Sales/Sales Analysis Dashboard", // <-- Update this line
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.Design, // <-- Update this line
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDesigner(); // <-- Update this line
            }
        </script>
    </body>
    ```

    ## Creating draft dashboard in designer embedding

    If you do not specify either the dashboard ID or dashboard path, the server will automatically create a new draft dashboard. The embedded user must have permission to create drafts in designer embedding.

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.Design, // <-- Update this line
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDesigner(); // <-- Update this line
            }
        </script>
    </body>
    ```
    ## Creating draft dashboard with existing datasource in designer embedding

    When creating a draft in designer embedding, if you specify either an existing datasource ID or datasource name, the draft will use that existing datasource selected by default.

    **Draft with datasource ID**

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    datasourceId: "895e99c7-f858-4058-958b-67577b283345", // <-- Update this line
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.Design, // <-- Update this line
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDesigner();// <-- Update this line
            }
        </script>
    </body>
    ```

   **Draft with datasource name**

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    datasourceName: "Northwind Datasource",// <-- Update this line
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.Design,  // <-- Update this line
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
               });
                boldbiEmbedInstance.loadDesigner();// <-- Update this line
            }
        </script>
    </body>
    ```

    ## Embed the dashboard widget in your application

    You can embed the dashboard widget using either the `widget name` or `widget ID`, as shown in the samples below.

    **Embed using widget name**

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "9a4b8ddb-606f-4acd-8c53-8ccdcaa92a87",
                    embedContainerId: "embed_container",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDashboardWidget("Sales By Country"); // Pass widget name as argument to loadDashboardWidget function 
            }
        </script>
    </body>
    ```

    **Embed using widget ID**

    To learn about getting widget ID, please refer [How to get widget id](/embedding-options/embedding-sdk/embedding-using-javascript/#how-to-get-widget-id).

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "9a4b8ddb-606f-4acd-8c53-8ccdcaa92a87",
                    embedContainerId: "embed_container",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDashboardWidget("efbf2999-f7e7-4831-a492-53c4df394af0"); // To get widget id, please refer `How to get Widget ID`
            }
        </script>
    </body>
    ```

    ## Embed the data source in your application

    You can embed the data source using either the data source ID or data source name, as shown in the following code sample.
    
    **Embed using data source ID**

    ```js
        <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    datasourceId: "755e99c7-f858-4058-958b-67577b283309", // <-- Update this line            
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.DataSource,
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDatasource(); // <-- Update this line
            }
        </script>
        </body>
    ```  
    **Embed using data source Name**

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    datasourceName: "Datasource Name", // <-- Update this line
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.DataSource,  // <-- Update this line
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDatasource(); // <-- Update this line
            }
        </script>
    </body>
    ```  

    **Creating datasource in datasource embedding**

    If you need to create a new data source in embedding, set the mode as `connection` as shown in the following examples and call the `loadDatasource()` function. The embedded user must have permission to create data sources in data source embedding.

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    embedContainerId: "embed_container",
                    mode: BoldBI.Mode.Connection,  // <-- Update this line
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadDatasource(); // <-- Update this line
            }
        </script>
    </body>
    ```

    ## Embed the multiple dashboard and widgets in your application

    In the `body` tag, you need to add the function to create a BoldBI instance with the following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function for every dashboard and widget.

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div> 
        <div id="widget1_container"></div> // <-- Update this line
        <div id="widget2_container"></div> // <-- Update this line
        <script>
            function embedSample() {
                var dashboardInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardPath: "/Sales/Sales Analysis Dashboard",  
                    embedContainerId: "embed_container",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                dashboardInstance.loadDashboard();

                var widget1Instance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardPath: "/Sales/Sales Analysis Dashboard",               
                    embedContainerId: "widget1_container",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                widget1Instance.loadDashboardWidget("Top 10 Products By Sales");

                var widget2Instance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardPath: "/Sales/Sales Analysis Dashboard",               
                    embedContainerId: "widget2_container",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                widget2Instance.loadDashboardWidget("Sales By Country");
            }
        </script>
    </body>
    ```
    ## Embed the pinboard in your application

    You can embed the pinboard by using the pinboard name, as shown in the following samples.

    ```js
    <body onload="embedSample();">
        <div id="embed_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    pinboardName: "pinboardName", // <-- Update this line
                    embedContainerId: "embed_container",
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadPinboard(); // <-- Update this line
            }
        </script>
    </body>
    ```  
## Embed the dashboard with view in your application

You can load the View in embedded dashboard using either View Id or View name like in below samples. Please refer [How to get view id](/embedding-options/embedding-sdk/embedding-using-javascript/#how-to-get-view-details-of-a-dashboard)

**Embed using view ID**

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardId : "755e99c7-f858-4058-958b-67577b283309",
                viewId: "3ff6775c-d70d-492e-972a-4032a042a846", // <-- Update this line        
                embedContainerId: "embed_container",// This should be the container id where you want to embed the dashboard with view
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                }
            });
            boldbiEmbedInstance.loadView(); // <-- Update this line
        }
    </script>
</body>
```
> **NOTE:**  Dashboard Id and path is optional while setting view Id for calling loadView method.

**Embed using view name**

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardId : "755e99c7-f858-4058-958b-67577b283309",
                viewName : "filtercountry", // <-- Update this line
                embedContainerId: "embed_container",// This should be the container id where you want to embed the dashboard with view
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                }
            });
            boldbiEmbedInstance.loadView(); // <-- Update this line
        }
    </script>
</body>
```  
> **NOTE:**  Dashboard Id must be specified in the options if you are using view name to embed a Dashboard view.


## Embed a multitab dashboard programmatically

You can embed the programmatic multi-tab dashboard using either [dashboard IDs](/embedding-options/embedding-sdk/embedding-api-reference/members/#dashboardids) or [dashboard Paths](/embedding-options/embedding-sdk/embedding-api-reference/members/#dashboardpaths) like in the below samples.

**Embed using dashboard IDs**

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "https://boldbi/site/site1",
                dashboardIds: ["9a4b8ddb-606f-4acd-8c53-8ccdcaa92a87","7f1ba4ee-2fcc-40f1-b2fc-a69de4dee522"], // The Ids of the dashboards that you want to embed.
                embedContainerId: "embed_container",
                authorizationServer: {
                    url: "https://boldbi/embeddetail/get"
                }
            });
            boldbiEmbedInstance.loadMultitabDashboard(); // <-- Update this line
        }
    </script>
</body>
```  

**Embed using dashboard Paths**

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "https://boldbi/site/site1",
                dashboardPaths: ["/Sales/Market Sales Dashboard","/Support/Support Analysis Dashboard"], // The paths of the dashboard that you want to embed.
                embedContainerId: "embed_container",
                authorizationServer: {
                    url: "https://boldbi/embeddetail/get"
                }
            });
            boldbiEmbedInstance.loadMultitabDashboard(); // <-- Update this line
        }
    </script>
</body>
```

## How to implement the authorize server with user mail or user name

1. You need to implement an authorization endpoint in your application. This endpoint will serve as the bridge between your application and the Bold BI server. Additionally, you need to update the secure details, such as email and group-based access. You can learn more about the [authorization server](/security-configuration/authorize-server/).

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

If you are using multi-tenant Bold BI server sites and are looking to embed the Designer in your application, we recommend using the common embed secret instead of a separate embed secret for each site. Please refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to obtain the common embed secret.

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

## How to get view details of a dashboard

1. In Bold BI Server, click the context menu of the respective dashboard and choose the `Views` option.
    ![EmbedusingViewname](/static/assets/javascript/images/Views-option.png#max-width=85%)

    > **NOTE:**  You can get the views list of specific dashboard using [getViewsByDashboardId](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference/methods/#getviewsbydashboardid) method of SDK.

2. You can find all the views name for the respective dashboard from the displayed list.
    ![EmbedusingViewname](/static/assets/javascript/images/view-names.png#max-width=85%)

3. To get a view's ID click on the respective view. The dashboard will be loaded in a new tab with the chosen view. You can find the view ID at the end of URL. Refer to the image below.
    ![EmbedusingViewId](/static/assets/javascript/images/view-url.png#max-width=85%)

## Backward compatibility

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
<td><code>v8.2.22(latest)</code></td>            
<td><code>

```js
<head> 
    <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v8.2.22/boldbi-embed.js"></script>
</head>
```

</code></td>
</tr>
</tbody>
</table>
