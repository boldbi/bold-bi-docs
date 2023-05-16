---
layout: post
title:  Embedded SDK v3.3.40 Node.js Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with Node.js runtime environment supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Node.js using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/nodejs-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `Node.js` on your own.   

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The `Getting Started` guide gives you enough information that you need to know before working on the sample.
## How to run the sample
 1. Please [get](https://github.com/boldbi/nodejs-sample) the Node.js Application.    

 2. You need to set your embed properties details in the `index.html` and `Embed.js`.  
    ![Embed Properties in Index](/static/assets/embedded/javascript/sample/images/nodejs-index-props.png)
    ![Embed Properties in Embed](/static/assets/embedded/javascript/sample/images/nodejs-embed-props.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">rootUrl</td>
    <td align="left">Bold BI Server URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
    <td align="left">siteIdentifier</td>
    <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
    <td align="left">environment</td>
    <td align="left">Your Bold BI application environment. (If Cloud, you should use <code>cloud</code>, if  Enterprise, you should use <code>enterprise</code>)</td>
    </tr>
    <tr>
    <td align="left">DashboardId</td>
    <td align="left">Item id of the dashboard in BI server.</td>
    </tr>
    <tr>
    <td align="left">authorizationUrl</td>
    <td align="left">Url of the GetDetails(API) in this application</td>
    </tr>
     <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">You can get your EmbedSecret key from embed tab by enablingEnable embedauthentication in <a href ='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
    <tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which would be used to authorize the server.</td>
    </tr>
    </tbody>
    </table>

 3. Get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot. 
    ![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png#max-width=55%)

 4. Run your Node.js sample.

 5. The dashboard can be rendered in design mode or created with the following changes in the `embedSample()` method.

     ```js
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: rootUrl + siteIdentifier,
                dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property                
                embedContainerId: "dashboard",// This should be the container id where you want to embed the dashboard
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                mode: BoldBI.Mode.Design,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://localhost:8080/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDesigner();
        }
     ```

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. Ignore this property to create new dashboard.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left">Container Id in which dashboard renders.It should not contain hypen.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode you want to render dashboard. It can either be 'View' or 'Design' mode. </td>
    </tr>
    <tr>
    <td align="left">expirationTime</td>
    <td align="left">Set the duration for the token to be alive.</td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'embedDetails' method in the 'embed.js' file.</td>
    </tr>
    </tbody>
    </table>

## How this sample works
 1. Based on the `dashboardId` provided in the `index.html` file, authorize the server URL by calling the `GetEmbedDetails` API(http://localhost:8080/embeddetail/get) call with the provided `EmbedProperties` values.
    ![Get Embed Details](/static/assets/embedded/javascript/sample/images/nodejs-authorize.png)
 
 2. In the above authorization, generate the `SignatureUrl` with the provided `EmbedSecret key` and validate embed details in Bold BI. Once the details are validated, the dashboard starts to render in `index.html`.

 3. In the `Index.html`, change the dashboard Id of the respective dashboard as you wish to embed.
    ![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/nodejs-dashboard.png)

## Steps to create new Node.js application to embed dashboard
 1. Create a folder in the desired location and open it in the visual studio code. Create a `js` file with the name `embed.js` and `html` file in it.
 
 2. In the `html` file, refer to the mandatory file in the `<head>`, the `<body>` tag initializes the `embedSample()` method, the DOM element with the  `dashboard` id is created in the `<div>` tag where the required dashboard will be rendered.
    ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v6.4.6/boldbi-embed.js"></script>
    </head>
    <body onload="embedSample();">
        <div id="dashboard"></div>
    </body>
    ```
    
 3. In the `<script>` tag, define the required properties as follows.

     ```js
         <script>
            var siteIdentifier = "site/site1";
            
            var environment = "enterprise";

            var dashboardId ="";

            var rootUrl = "http://localhost:1234/bi/";
            var authorizationUrl="http://localhost:8080/embeddetail/get";

            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: rootUrl + siteIdentifier,//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)
                    dashboardId: dashboardId, //Item id of the dashboard in BI server.                
                    embedContainerId: "dashboard", // This should be the container id where you want to embed the dashboard.
                    embedType: BoldBI.EmbedType.Component,
                    environment: BoldBI.Environment.Enterprise, // If Cloud, you should use BoldBI.Environment.Cloud
                    mode: BoldBI.Mode.View,
                    height: "800px",
                    width: "1200px",
                    authorizationServer: {
                        url: "http://localhost:8080/embeddetail/get" //Url of the GetDetails(API) in this application.
                    },
                    expirationTime: "100000", //Set the duration for the token to be alive.
                });
                boldbiEmbedInstance.loadDashboard();
            }
        </script>
     ```

 4. In the `javascript` file, declare the variables `embedSecret` and `userEmail` , create an API `/embeddetail/get`  which uses the method `GetSignatureUrl()` to generate the algorithm. In this API, the `embedQuerString`,`userEmail` and the value from the   `GetSignatureUrl()` method are appended as query parameters in the URL to get details of a particular dashboard. Run the command ` node embed.js` to render the dashboard.

     ```js 
       // Get the embedSecret key from the Bold BI.
        var embedSecret = "";

       //Enter your BoldBI credentials here.
        var userEmail = "";

        //Parse the JSON bodies (as sent by API clients).
        app.use(express.json());

        app.post('/embeddetail/get', function (req, response) {
        var embedQuerString = req.body.embedQuerString;
        var dashboardServerApiUrl = req.body.dashboardServerApiUrl;

        embedQuerString += "&embed_user_email=" + userEmail;
        var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString);
        var embedDetailsUrl = "/embed/authorize?" + embedQuerString+embedSignature;

        http.get(dashboardServerApiUrl+embedDetailsUrl, function(res){
                var str = '';
                res.on('data', function (chunk) {
                    str += chunk;
                });
                res.on('end', function () {
                    response.send(str);
                });
        });
        })

        function GetSignatureUrl(queryString)
        {
        var keyBytes = Buffer.from(embedSecret);
        var hmac = crypto.createHmac('sha256', keyBytes);
        data = hmac.update(queryString);
        gen_hmac= data.digest().toString('base64');

        return gen_hmac;
        }
     ```