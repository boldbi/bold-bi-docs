---
layout: post
title:  Embedded Analytics using Embedded SDK NPM package | Bold BI
description: Embed analytical dashboards into JavaScript-based applications using the Bold BI embedded SDK NPM package, a zipped version of dependent scripts and assets.
platform: bold-bi
documentation: ug
---

# Steps to embed Bold BI into your application using the NPM package

Follow these steps to embed a dashboard in your application.

> **NOTE:** The Bold BI Embedded SDK NPM package will provide support for JavaScript framework applications starting from Bold BI Embedded Edition `v4.2.68`. If you use the same version of the NPM package, Bold BI Embedded Edition will work fine.

## How to install Bold BI Embedded SDK NPM package

1. To install the Bold BI Embedded SDK package, use the following command.

    ```js
    npm install -save @boldbi/boldbi-embedded-sdk
    ```

    If you are using the yarn package manager, use the following command.

    ```js
    yarn add @boldbi/boldbi-embedded-sdk
    ```

## How to use Bold BI Embedded SDK NPM package into application

1. Import the `@boldbi/boldbi-embedded-sdk` package into the application where you want to embed the Bold BI Dashboard. Use the fol-lowing command, which shows the proper syntax for importing `BoldBI` with braces because it is an ECMAScript six structure and a non-default export.

    ```js
    import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
    ```

2. In the body tag or component template, it is necessary to create a div element with the container id attribute. This element will serve as the container for the embedded dashboard.

    ```js
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

>**NOTE:** If you use hyphens in ID, your code may become more prone to errors and be harder to read while using Jquery. Instead, use underscores or camelCase if you are in control of the ID.

## Create Bold BI instance

1. Please add the function that creates the Bold BI instance with the following API's to the component page. Then, call the `loadDashboard()` function from the appropriate place.

	I provided the support to embed the dashboard by using the dashboard ID and dashboard path, as demonstrated in the following examples:

	### Embed using the dashboard ID

	```js
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
	```  

    > **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

	### Embed using the dashboard path

	```js
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardPath: "/Sales/Sales Analysis Dashboard",// /{CategoryName}/{Dashboardname}
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
	```  

2. Please refer to the table below for the values of the previous properties based on your application. 

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

3. Please copy and paste the previous embedSample() function into your page. You should update your values with the properties passed by the instance. 

> **NOTE:**  The embedContainerId should be identical to the value of your div element id.

## How to embed cloud analytics server dashboard

You can embed the dashboards created using the Cloud site by changing the following API values in the code example below, based on your Bold BI Cloud site.

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

You can also embed the multi-tabbed dashboard using the dashboard ID and dashboard path. Here is a sample snippet. 

```js
<script>
    function embedMutiTabDashboard() {
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
```  

## How to implement the authorize server with user mail

1. You need to implement an authorization endpoint in your application. This will act as the bridge between your application and the Bold BI server. Additionally, you will need to update the secure details such as email and group-based access. Learn more about the [authorization server](/security-configuration/authorize-server/).

    Here is the provided code sample in C# language, which should be based on the application's backend server language. There are already samples available on multiple platforms with this authorization server implementation. Please take a look at the [samples](/embedding-options/embedding-sdk/samples/).

2. To create an authorization-server action method, please refer to the code sample below and copy it to your controller if you are using C# as your server-side language. You can utilize the email address of the currently logged-in user, which should be `user@domain.com`. However, it is important to ensure that this user has access to the dashboard.  

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

3. Please add the `GetSignatureUrl`, which will be called from the previous GetEmbedDetails action. In order to obtain the EmbedSecret key from the Bold BI application, please proceed to the next section.

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

The embed secret key can be found in the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and want to embed the Dashboard in your application, you can use the common embed secret instead of the separate embed secret for each site. Refer to this [link](/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to obtain the common embed secret.