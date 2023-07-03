---
layout: post
title:  Embedded Analytics using Embedded SDK NPM package | Bold BI
description: Embed analytical dashboards into JavaScript-based applications using the Bold BI embedded SDK NPM package, a zipped version of dependent scripts and assets.
platform: bold-bi
documentation: ug
---

# Steps to embed Bold BI into your application using the NPM package

Follow these steps to embed dashboard in your application:

> **NOTE:** The Bold BI Embedded SDK NPM package will provide support for Javascript framework applications from Bold BI Embedded Edition `v4.2.68`. If you use same version of NPM package, Bold BI Embedded Edition will work fine.

## How to install Bold BI Embedded SDK NPM package

1. Install the *Bold BI Embedded SDK* package using the following command.

    ```js
    npm install -save @boldbi/boldbi-embedded-sdk
    ```

    If you are using the yarn package manager, use the following command.

    ```js
    yarn add @boldbi/boldbi-embedded-sdk
    ```

## How to use Bold BI Embedded SDK NPM package into application

1. Import the `@boldbi/boldbi-embedded-sdk` package into the application where you want to embed the Bold BI Dashboard, as shown in the following command. You should use `BoldBI` named importing with braces because it is an ECMAScript six structure and also a non-default export.

    ```js
    import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
    ```

2. In the body tag or component template, it is must to create the div element with the container id attribute. This element will be the container for the embedded dashboard.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

## Create Bold BI instance

1. Add the function to create the Bold BI instance with the following API's to the component page and call the `loadDashboard()` function from the appropriate as follows.
  
	Provided the support to embed the dashboard with the dashboard ID and dashboard path as shown in the following samples:

	### Embed using the dashboard ID

	```js
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardId: "755e99c7-f858-4058-958b-67577b283309",                
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
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
            boldbiEmbedInstance.loadDashboard();
        }
	</script>
	```  

	### Embed using the dashboard path

	```js
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardPath: "/Sales/Sales Analysis Dashboard",// /{CategoryName}/{Dashboardname}
                embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
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
            boldbiEmbedInstance.loadDashboard();
        }
    </script>
	```  

2. Refer to the following table for the values of the previous properties based on your application.  

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Use your Bold BI server url (http://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Use the item id of the dashboard, which needs to be embedded in your application.</td>
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
    <td align="left">environment</td>
    <td align="left">BoldBI.Environment.Cloud or BoldBI.Environment.Enterprise</td>
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

3. Copy and paste the previous embedSample() function into your page. You need to update your values to the properties passed by the instance.  

> **NOTE:**  The embedContainerId should be the same as your div element id value.

## How to embed cloud analytics server dashboard

You can embed the dashboards created using the Cloud site by changing the following API values based on your Bold BI Cloud site in the below code example.

serverUrl - It should be like `{https://example.boldbi.com/bi}`.

environment - It should be `{BoldBI.Environment.Cloud}`.

```js
<script>
    function embedBoldBICloudDashboard() {
        var boldbiEmbedInstance = BoldBI.create({
            serverUrl: "https://example.boldbi.com/bi",
            dashboardId: "755e99c7-f858-4058-958b-67577b283309",             
            embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Cloud,
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
```  

## How to embed the Multi-tabbed dashboard

You can embed the multi-tabbed dashboard with the dashboard ID and dashboard path as well. snippet - sample

```js
<script>
    function embedMutiTabDashboard() {
        var boldbiEmbedInstance = BoldBI.create({
            serverUrl: "http://localhost:51777/bi/site/site1",
            dashboardId: "119c6622-62e7-42d2-955a-55c938ab8583",  // Multi-tabbed dashboard id              
            embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
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
        boldbiEmbedInstance.loadDashboard();
    }
</script>
```  

## How to implement the authorize server with user mail

1. You need to implement an authorization end point in your application. This will act as the bridge between your application and Bold BI server, and also you will need to update the secure details like email and group based access. Learn more about authorize serve [here](/security-configuration/authorize-server/).

    Provided the following code sample in C# language. It should be based on the application's backend server language. Already, there are samples on multiple platforms with this authorization server implementation. Look at the samples [here](/embedding-options/embedding-sdk/samples/).

2. To create authorization-server action method, refer to the following code sample and copy the following sample to the controller, if your server-side language is C#. You can use the currently logged-in users' email address at `user@domain.com`, but this user should have access to the dashboard.   

	```js  
    [HttpPost]
    [Route("embeddetail/get")]
    public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
    {
        // Use your user-email as embed_user_email
        embedQuerString += "&embed_user_email=user@domain.com";

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

3. Add the `GetSignatureUrl` method, which will be called from the previous GetEmbedDetails action. To obtain the EmbedSecret key from Bold BI application, proceed to the next section.

	```js    
    public string GetSignatureUrl(string queryString)
    {
        // Get the embedSecret key from Bold BI application.
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

Embed Secret key is available in the administrator setting section. Refer to this [link](/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and want to embed the Dashboard in your application, then you can use the common embed secret rather than the separate embed secret for each site. Refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.

> **NOTE:**  This embed setting will be enabled, only if you have an Embedded BI plan.