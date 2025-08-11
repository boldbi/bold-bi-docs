---
layout: post
title:  Token Member - JavaScript Embedding | Bold BI Docs
description: Learn how to embed dashboard with help of token API member in the JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug

---

# Steps to embed Bold BI dashboard using javascript

Follow these steps to embed the dashboard using the token API member. Previously, the details were authenticated using the AuthorizeAPI endpoint. Additionally, we provided authentication support using the token without the AuthorizeAPI endpoint.

1. In your .html page, you need to add the following Embed SDK URL in the head tag of your page.

    ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.11.24/boldbi-embed.js"></script>
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

    You can embed the dashboard using the dashboard ID and [token](/embedding-options/embedding-sdk/embedding-api-reference/members/#token) like in below samples.

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
                    height: "800px",
                    width: "1200px",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldm9wc0Bib2xkYmkuY29tIiwidXBuIjouYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSIsImF1ZCI6Imh0dHBzOi8vaG90Zml4LXdpbmRvd3MuYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSJ9.JzbqVr6Brv1mAEvnbHnE-FuShos", // Use the generated Access token by any one of the below methods.
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ```  

4. Download the [embed configuration](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) file from there to obtain the server URL, site identifier, and dashboard Id values.

5. Please refer to the following table for the value of the previous properties based on your application. 

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Use your Bold BI server url (http://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Use item id of the dashboard, which needs to be viewed in your application.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Id of the created div element in your body.</td>
    </tr>
    <tr>
    <td align="left">token</td>
    <td align="left">Token which is used to authenticate the user, for generating the token<a href="/embedding-options/embedding-sdk/embedding-using-javascript/#token-generation"> refer here.</a></td>
    </tr>
    <tr>
    <td align="left">height</td>
    <td align="left">Height of the dashboard in your page</td>
    </tr>
    <tr>
    <td align="left">width</td>
    <td align="left">Width of the dashboard in your page</td>
    </tr>
    </tbody>
    </table>

## Token Generation

The following methods can be utilized to generate an access token for an embedding application.

 1.    [Through Bold BI server user interface](/embedding-options/embedding-sdk/embedding-using-javascript/#steps-to-generate-the-token-from-bold-bi-server-ui).
 2.    [Through REST API](/embedding-options/embedding-sdk/embedding-using-javascript/#generate-token-using-rest-api).

### Steps to generate the token from Bold BI server UI

The access token can be generated from the Bold BI server UI, which provides the flexibility to set the token's expiration period from a minimum of 7 days to a maximum of 45 days. For this, Follow the below steps.
 
   1. Click on the `profile` icon located at the top right corner of the Bold BI server.

       ![User profile](/static/assets/javascript/images/User_Profile.png)

   2. In `My Profile` click the `personal Access Token Tab` and Select the required duration from the dropdown for token expiration.

       ![Access Token Tab](/static/assets/javascript/images/Access_token_tab.png)

   3. Click the `Generate Token` button, and in the confirmation dialog, choose `Yes`.

       ![Token Dialog](/static/assets/javascript/images/Access_token_dialog.png)

   4. An access token is generated. Now, you can copy and use the token for embedding.

       ![Token generation](/static/assets/javascript/images/token_generation.png)

### Generate token using REST API

Generate an access token using token [REST API](https://help.boldbi.com/faq/how-to-generate-access-token-to-authenticate-user/). By this approach the expiration time will be set to 7 days as default. Once you have generated the token, you cannot expire it.

> **NOTE:** Once you have generated the token, it will valid till its expiration period. If you happen to lose the token, you can generate a new one. Both tokens will function properly without any problems till its expiration time.

## Following embedding modules is achievable by using token API member

<li>Designer</li>
<li>Data source</li>
<li>Connection</li>
<li>Widget</li>
<li>LoadView</li>

> **NOTE:** For token API member is applicable to identifiers such as Dashboard ID, Datasource ID, Widget ID, and View ID.