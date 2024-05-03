---
layout: post
title:  Embedding-Multitab-Dashboard-Programmatically | Bold BI Docs
description: Learn how to embed a programmatical multi-tab dashboard using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed a multi-tab dashboard programmatically

Through this process, you can embed a multi-tab dashboard programmatically by using either dashboardIds or dashboardPaths. Please note that these programmatically generated multi-tab dashboards are temporary and can be created without directly accessing the BoldBI application.

Follow these steps to embed a programmatically created multi-tab dashboard into your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the lasted Embed SDK URL in the head tag of your page.

    ```js
    <head> 
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.8.18/boldbi-embed.js"></script>
    </head>
    ```

2. Create the div element with your ID name in the body tag. This element will be used for programmatic multi-tab dashboard embedding.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

    > **NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

3. In the body tag, you need to add the function to create a BoldBI instance with the following properties and call that function in the body using the `onload` attribute. Also, call the [loadMultitabDashboard()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#loadmultitabdashboard) function.

    You can embed the programmatic multi-tab dashboard using either [dashboard IDs](/embedding-options/embedding-sdk/embedding-api-reference/members/#dashboardids) or [dashboard Paths](/embedding-options/embedding-sdk/embedding-api-reference/members/#dashboardpaths) like in the below samples.
    
    ### Embed using dashboard IDs

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "https://boldbi/site/site1",
                    dashboardIds: ["9a4b8ddb-606f-4acd-8c53-8ccdcaa92a87","7f1ba4ee-2fcc-40f1-b2fc-a69de4dee522"], // The Ids of the dashboards that you want to embed.
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the programmatically created multi-tab dashboard.
                    environment: BoldBI.Environment.Enterprise,
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "https://boldbi/embeddetail/get"
                    },
                });
                boldbiEmbedInstance.loadMultitabDashboard();
            }
        </script>
    </body>
    ```  

    ### Embed using dashboard Paths

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "https://boldbi/site/site1",
                    dashboardPaths: ["/Sales/Market Sales Dashboard","/Support/Support Analysis Dashboard"], // The paths of the dashboard that you want to embed.
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the programmatically created multi-tab dashboard.
                    environment: BoldBI.Environment.Enterprise,
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "https://boldbi/embeddetail/get"
                    },
                });
                boldbiEmbedInstance.loadMultitabDashboard();
            }
        </script>
    </body>
    ```  
>**Note:** Please ensure that dashboardIds only contains Ids of individual dashboard, dashboardPaths only contains paths of individual dashboard and do not provide the Id or path of an existing multi-tab dashboard.

4. Refer to the following table for the value of the previous properties based on your application.  

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Use your Bold BI server url (http://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardIds</td>
    <td align="left">Use the item IDs of individual dashboards in the form of an array, which need to be embedded in your application</td>
    </tr>
    <tr>
    <td align="left">dashboardPaths</td>
    <td align="left"> Use the paths of individual dashboards in the form of an array, which need to be embedded in your application. Consider using the format /{category_name}/{dashboard_name} for the dashboardPath.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Id of the created div element in your body.</td>
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
    </tbody>
    </table>

5. Copy the previous embedSample() function and paste in your page. You need to update your values to the properties.  

> **NOTE:**  embedContainerId should be same as your div element id value.

<meta charset="utf-8"/>
<table>
<thead>
<tr>
<th style="width:20%;"><code>Bold BI Version</th>
<th style="width:80%;"><code>Dependent Scripts</code></th>
</tr></thead>
<tbody>        
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

## How to implement the authorize server with user mail or user name

1. Implement an authorization endpoint in your application. This will bridge your application and the Bold BI server and update secure details like email and group-based access. You can learn more about the authorized server [here](/security-configuration/authorize-server/).  

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

## How to get Embed Secret key from Bold BI application

You can get your Embed Secret key from administrator setting section. Refer this [link](/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and looking for embedding the programmatic multi-tab dashboard in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.