---
layout: post
title:  Token Member - JavaScript Embedding | Bold BI Docs
description: Learn how to embed dashboard with help of token API member in the JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug

---

# No Backend Required for Token-Based Embedding

When using an API Key for embedding:

- No backend logic is required to generate or validate tokens.
- You can embed dashboards directly from the browser using a valid token.
- This simplifies the setup and is ideal for quick integrations.

> **Note:** For advanced scenarios like row-level security or group-based permissions, consider using the Authorization URL workflow.

## Steps to embed Bold BI dashboard using javascript

Follow these steps to embed the dashboard using the token API member. Previously, the details were authenticated using the AuthorizeAPI endpoint. Additionally, we provided authentication support using the token without the AuthorizeAPI endpoint.

1. Include the Bold BI Embed SDK in the `<head>` tag of your HTML page.
2. Create a `<div>` element in the `<body>` tag with a unique ID to serve as the dashboard container.

    ```html
    <head>
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v15.2.6/boldbi-embed.js"></script>
    </head>
    <body>
        <div id="dashboard_container"></div>
    </body>
    ```

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function. You can embed the dashboard using the dashboard ID and [token](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/#token) like in below samples.

    ```js
    <body onload="embedSample();">
        <div id="dashboard_container"></div>
        <script>
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: "<Bold BI Server URL",
                    dashboardId: "<Dashboard ID>",                
                    embedContainerId: "<Embed Container ID>",
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
    <td align="left">Token which is used to authenticate the user, for generating the token.</a></td>
    </tr>
    </tbody>
    </table>

## Token Generation
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
    
## Following embedding modules is achievable by using token API member

<ul>
    <li>Designer</li>
    <li>Data source</li>
    <li>Connection</li>
    <li>Widget</li>
    <li>LoadView</li>
</ul>

> **NOTE:** For token API member is applicable to identifiers such as Dashboard ID, Datasource ID, Widget ID, and View ID.