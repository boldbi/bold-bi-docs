---
layout: post
title:  Pinboard – JavaScript Embedding | Bold BI Learning
description: Learn how to embed pinboard securely using the JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed the pinboard in your application

Follow these steps to embed pinboard in your application.

## How to use Bold BI wrapper inside your html page

1. In your `.html` page, you need to add the following dependent scripts in the head tag of your page.

    ```js
    <head>  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/signalr/jquery.signalr-2.1.0.min.js"></script>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v4.2.68/embed-js.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for pinboard embedding.

    ```js

    <body>
        <div id="pinboard-container"></div>
    </body>
    ```

3. In the body tag, you need to add the function to create a Bold BI instance with the following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadPinboard()` function.

You can embed the pinboard using the pinboard name like in the following samples.

### Embed using Pinboard Name

```js
<body onload="embedSample();">
    <div id="pinboard-container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                pinboardName: "pinboardName",                
                embedContainerId: "pinboard-container",// This should be the container id where you want to embed the pinboard.
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadPinboard();
        }
    </script>
</body>
```  

4. Refer to the following table for value of the previous properties based on your application.  

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">serverUrl</td>
        <td align="left">Use your Bold BI server url. For Example,<br>1. On-premise - <I>`http://localhost:[portno]/bi/site/site1`</I><br>2. Cloud - <I>`https://[company].boldbi.com`</I></td>
    </tr>
    <tr>
        <td align="left">pinboardName</td>
        <td align="left">Use the pinboard name, which needs to be embed in your application.</td>
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
        <td align="left">Height of the pinboard in your page</td>
    </tr>
    <tr>
        <td align="left">width</td>
        <td align="left">Width of the pinboard in your page</td>
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




5. Copy the previous embedSample() function and paste it into your page. You need to update your values to the properties. 

> **NOTE:**  The embedContainerId should be same as your div element id value  

## How to implement the authorize server with user mail or user name

1. You need to implement an authorization endpoint in your application. This will act as the bridge between your application and Bold BI server and also you need to update the secure details like email and group-based access. Learn more about authorizing server in this [link](/embedded-bi/javascript-based/authorize-server/).  

2. To create an authorization-server action method, copy the following sample in your controller. You can use the currently logged-in user email at `user@domain.com` or user name at `username`, but this user should have write access to the pinboard. 

    ```js  

            [HttpPost]
            [Route("embeddetail/get")]
            public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
            {
                // Use your user-email as embed_user_email
                embedQuerString += "&embed_user_email=user@domain.com";

                // Use your username as embed_user_email
                //embedQuerString += "&embed_user_email=username";

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

## How to pass the Dashboard Parameter and URL Filter Parameter in the authorization endpoint dynamically

In the authorization endpoint, you can pass both types of filters(Dashboard Parameter/Filter Parameter) at the same time.

To pass filters to the `embed_datasource_filter` parameter in the authorization endpoint, refer to the following sample in C#(It differs based on your platform language). Here, we have to set both types of filters to the `embed_datasource_filter` property in the endpoint.

```js  

        [HttpPost]
        [Route("embeddetail/get")]
        public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
        {
            // Use your user-email as embed_user_email
            embedQuerString += "&embed_user_email=user@domain.com" + "&embed_datasource_filter=" + "[{&&Parameter=Value&Parameter=Value}]";

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

> **NOTE:**  
>* Filter value should be enclosed with the square and curly brackets as mentioned above.

>* Filter value should be applied in all widgets of a pinboard, and it does not affect the particular widget.

## How to get Embed Secret key from Bold BI application

You can get your Embed Secret key from the administrator setting section. Refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.

## How to get common Embed Secret key from UMS

If you are using multi-tenant Bold BI server sites and looking for embedding the Pinboard in your application, then we recommend using the common embed secret instead of the separate embed secret for each site. Refer to this [link](/embedded-bi/site-administration/embed-settings/#get-common-embed-secret-code-from-ums) to get the common embed secret.

> **NOTE:**  <br>This embed setting will be enabled only if you have an Embedded BI plan. <br><br>Refer to this [link](/embedded-bi/faq/how-to-resolve-jquery-no-conflict-in-embedding) to resolve the jQuery conflict problem in embedded.