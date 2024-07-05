---
layout: post
title:  Dashboard View – JavaScript Embedding | Bold BI Learning
description: Learn how to embed dashboard view using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed the dashboard with a view in your application

Follow these steps to embed a dashboard with view in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following Embed SDK URL in the head tag of your page.

    ```js
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.9.50/boldbi-embed.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for dashboard embedding.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

    > **NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create BoldBI instance with the following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadView()` function.

    You can load the View in embedded dashboard using either View Id or View name like in below samples.

    ### Embed using view ID

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId : "755e99c7-f858-4058-958b-67577b283309",
                    viewId: "3ff6775c-d70d-492e-972a-4032a042a846",                
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadView();
            }
        </script>
    </body>
    ```  
    > **NOTE:**  Dashboard Id and path is optional while setting view Id for calling loadView method.

    ### Embed using view name

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId : "755e99c7-f858-4058-958b-67577b283309",
                    viewName : "filtercountry",
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard designer
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://example.com/embeddetail/get"
                    }
                });
                boldbiEmbedInstance.loadView();
            }
        </script>
    </body>
    ```  
    > **NOTE:**  Dashboard Id must be specified in the options if you are using view name to embed a Dashboard view.

    ### Steps to get view details of a Dashboard

    1. In Bold BI Server, click the context menu of the respective dashboard and choose the `Views` option.
        ![EmbedusingViewname](/static/assets/javascript/images/Views-option.png#max-width=85%)

        > **NOTE:**  You can get the views list of specific dashboard using [getViewsByDashboardId](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference/methods/#getviewsbydashboardid) method of SDK.

    2. You can find all the views name for the respective dashboard from the displayed list.
        ![EmbedusingViewname](/static/assets/javascript/images/view-names.png#max-width=85%)

    3. To get a view's ID click on the respective view.The dashboard will be loaded in a new tab with the chosen view. You can find the view ID at the end of URL.Refer to the image below.
        ![EmbedusingViewId](/static/assets/javascript/images/view-url.png#max-width=85%)
    
4. Refer to the following table for value of the previous properties based on your application.  

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
    <td align="left">viewId</td>
    <td align="left">Use id of a saved view,which needs to be applied in the dashboard.</td>
    </tr>
    <tr>
    <td align="left">viewName</td>
    <td align="left">Use name of a saved view,which needs to be applied in the dashboard.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Id of the created div element in your body.</td>
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
    </tbody>
    </table>

5. Copy the previous embedSample() function and paste in your page. You need to update your values to the properties.  

> **NOTE:**  embedContainerId should be same as your div element id value.

<meta charset="utf-8"/>
<meta charset="utf-8"/>
<table>
<thead>
<tr>
<th style="width:20%;"><code>Bold BI Version</th>
<th style="width:80%;"><code>Dependent Scripts</code></th>
</tr></thead>
<tbody>  
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
</tbody>
</table>

## How to implement the AuthorizeAPI endpoint with user mail or user name

1. You need to implement the AuthorizeAPI endpoint in your application. This will act as the bridge between your application and the Bold BI server and also you need to update the secure details like email. Learn more about the [authorization server](/security-configuration/authorize-server/).

2. To create the AuthorizeAPI action method, copy the following code snippet in your controller. You can use currently logged in user email at `user@domain.com` or user name at `username`, but this user should have write access to the dashboard.   

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

3. Add the GetSignatureUrl method, and this method would be called from the previous GetEmbedDetails action. Follow the next section to get the EmbedSecret key from Bold BI application.

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

You can get your Embed Secret key from the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and looking for embedding the Designer in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.