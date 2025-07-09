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
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v12.1.5/boldbi-embed.js"></script>
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

    ### Embed using dashboard ID with Personal Access Token

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "755e99c7-f858-4058-958b-67577b283309",                
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldm9wc0Bib2xkYmkuY29tIiwidXBuIjouYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSIsImF1ZCI6Imh0dHBzOi8vaG90Zml4LXdpbmRvd3MuYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSJ9.JzbqVr6Brv1mAEvnbHnE-FuShos", // Use the generated personal access token.
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
    </body>
    ```  

    ### Embed using dashboard ID with API Key

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "http://localhost:51777/bi/site/site1",
                    dashboardId: "755e99c7-f858-4058-958b-67577b283309",                
                    embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
                    token: "NjQ2ZDgwZjgtN2Q3MS00ZDQwLWFkNTItYTdkNDRhOGE2NmVi", // Use the generated API key.
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
    <td align="left">The height is an optional member of the API. If you do not specify a height for the API, it will automatically take the dimensions of your embedding container. If no value is provided, it will inherit the height from the dimensions of the parent container of the embedding. For more details please refer to this <a href="/embedding-options/embedding-sdk/embedding-api-reference/members/#height">link here.</a></td>
    </tr>
    <tr>
    <td align="left">width</td>
    <td align="left">The width is an optional member of the API. If you do not specify a width for the API, it will automatically take the dimensions of your embedding container. If no value is provided, it will inherit the width from the dimensions of the parent container of the embedding. For more details please refer to this <a href="/embedding-options/embedding-sdk/embedding-api-reference/members/#width">link here.</a></td>
    </tr>
    </tbody>
    </table>

## Token Generation

The following methods can be utilized to generate an access token for an embedding application.

 1.    [API Key through Bold BI server user interface](/embedding-options/embedding-sdk/token-generation/#steps-to-generate-the-api-key-from-bold-bi-server-ui).
 2.    [Personal Access Token through REST API](/embedding-options/embedding-sdk/token-generation/#generate-personal-access-token-using-rest-api).

### Steps to generate the API key from Bold BI server UI

The API key can be generated from the Bold BI server UI, which provides the flexibility to set the token's expiration period. To learn more about the API key, please refer to this [link](https://help.boldbi.com/site-administration/api-key). Follow the below steps to generate API Key.
 
   1. Click on the `profile` icon located at the top right corner of the Bold BI server.

       ![User profile](/static/assets/javascript/images/User_Profile.png)

   2. In `My Profile` click the `API Key` tab.

       ![API Key Tab](/static/assets/managing-resources/images/api-key-tab.png)

   3. Click the `Generate API Key` button, and provide a name for the API Key. By enabling the API Key Expiration toggle, you can set an expiration time. By default, there will be no expiration for infinity period. After that, click `Create API Key`.

       ![Generate API Key](/static/assets/managing-resources/images/generate-api-key.png)
       
       ![Token Dialog](/static/assets/javascript/images/apikey-dialog.png)

       > **NOTE:** For security breaches, if you feel that the API key generated without an expiration should no longer be used once it is deleted.

   4. An API key has been generated. Now, you can copy and use it for embedding.

       ![Token generation](/static/assets/javascript/images/apikey-copy.png)

        > **NOTE:** You can generate up to 2 API keys, but they should be stored securely. Once you navigate away from this page, we will not be able to retrieve or restore this token.
    
### Generate Personal Access Token using REST API

Generate an access token using token [REST API](https://support.boldbi.com/kb/article/16716/how-to-generate-access-token-to-authenticate-user/). By this approach the expiration time will be set to 7 days as default. Once you have generated the token, you cannot expire it.

> **NOTE:** Once you have generated the token, it will remain valid until its specified expiration period. If you happen to lose the token, you can generate a new one. Both tokens will function properly without any issues until their expiration times.

## Following embedding modules is achievable by using token API member

<li>Designer</li>
<li>Data source</li>
<li>Connection</li>
<li>Widget</li>
<li>LoadView</li>

> **NOTE:** For token API member is applicable to identifiers such as Dashboard ID, Datasource ID, Widget ID, and View ID.