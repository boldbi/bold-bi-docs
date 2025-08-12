---
layout: post
title: Embedding Analytics Dashboard with Node.js | Bold BI Docs
description: Learn how to embed an analytics dashboard with a Node.js application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Node.js using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/nodejs-sample) the sample application, which demonstrates the rendering of the dashboard available on your Bold BI server. This is followed by steps to create a new embedding application in `Node.js` on your own.   

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.

## Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Python 3.8](https://www.python.org/downloads/release/python-383/)

> **NOTE:** Node.js v12.13 to v18.18 are supported

## How to run the sample

 1. Please [get](https://github.com/boldbi/nodejs-sample) the Node.js sample from GitHub.

 2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Furthermore, you can refer to the accompanying image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
 4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/nodejs-sample) within the application. Make sure to place it in the application as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/nodejs-embedconfig-location.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">ServerUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
    <td align="left">siteIdentifier</td>
    <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
    <td align="left">environment</td>
    <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your own server, use `BoldBI.Environment.Enterprise`).</td>
    </tr>
    <tr>
    <td align="left">DashboardId</td>
    <td align="left">Item id of the dashboard to be embedded in your application.</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
    <tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list.</td>
    </tr>
    <tr>
    <td align="left">ExpirationTime</td>
    <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
    </tr>
    </tbody>
    </table>

 5. To install all the necessary packages, please use the following command.

     ```js
          npm install
     ```

 6. To run the samples, please use the following command.

     ```js
          node embed.js
     ```

7.	The dashboard can be edited in design mode and can create a new dashboard with the following changes in the `embedSample()` method.

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode.     This property no need to create a new dashboard.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left">In which mode you want to render dashboard. It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode. 
    </td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'embedDetails' method in the 'embed.js' file.</td>
    </tr>
    </tbody>
    </table>

     ```js
            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: rootUrl + "/" + siteIdentifier,
                    dashboardId: dashboardId,//Provide item id to render it in design mode,to create dashboard remove this property                
                    embedContainerId: "dashboard",// This should be the container id where you want to embed the dashboard
                    embedType: embedType,
                    environment: environment,
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

## How this sample works
 1. To authorize the server URL, call the `GetEmbedDetails` API (`http://localhost:8080/embeddetail/get`) with the provided `embedConfig` values, based on the `dashboardId` from the `embedConfig.json` file.
    ![Get Embed Config Details](/static/assets/javascript/sample/images/nodejs-authorize.png)

 2. In the previous authorization, generate the `SignatureUrl` using the provided `EmbedSecret key` and validate the embed details in Bold BI. Once the details are validated, the dashboard will start to render in `index.html`.

## Steps to create new Node.js application to embed dashboard

 1. Create a folder in the desired location and open it in Visual Studio Code.

 2. Open the terminal in Visual Studio Code. Please refer to the following image.
    ![Terminal Image](/static/assets/javascript/sample/images/node-terminal-image.png)

 3. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed <a href="/site-administration/embed-settings/#get-embed-secret-code" target="_blank">instructions</a> to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 4. To download the `embedConfig.json` file, please follow this <a href="/site-administration/embed-settings/#get-embed-configuration-file" target="_blank">link</a> for reference. Additionally, you can refer to the following image for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 5. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/nodejs-sample) within the application. Make sure you have placed it in the application exactly as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/node-embed-settings-image.png)

 6. Create a `JavaScript` file named `embed.js` and an `html` file named `index.html`.

 7. In the `index.html` file, refer to the mandatory file in the <head> tag. The <body> tag initializes the `embedSample()` method, and the DOM element with the `dashboard` id is created in the `<div>` tag where the required dashboard will be rendered.

    ```js
    <head>  
        <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/v7.11.24/boldbi-embed.js"></script>
    </head>
    <body onload="embedSample();">
        <div id="dashboard"></div>
    </body>
    ```
    
 8. In the `<script>` tag, define the required properties as follows:

     ```js
     
         <script>
            //For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.
            var siteIdentifier = configjson.SiteIdentifier;
    
            //Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `enterprise`)
            var environment = configjson.Environment;

            var embedType = configjson.EmbedType;

            //Item id of the dashboard in the Bold BI server`
            var dashboardId = configjson.DashboardId;

            //Bold BI Server URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)
            var rootUrl = configjson.ServerUrl;
 
            //Url of the GetDetails(API) in this application
            var authorizationUrl="http://localhost:8080/embeddetail/get";

            function embedSample() {
                var boldbiEmbedInstance = BoldBI.create({
                    serverUrl: rootUrl + "/" + siteIdentifier,//Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)
                    dashboardId: dashboardId, //Item id of the dashboard in BI server.                
                    embedContainerId: "dashboard", // This should be the container id where you want to embed the dashboard.
                    embedType: embedType,
                    environment: environment, // If Cloud, you should use BoldBI.Environment.Cloud
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

 9. In the `javascript` file, create an API `/embeddetail/get`  that utilizes the `GetSignatureUrl()` method to generate the algorithm. In this API, append the `embedQuerString`,`userEmail` and the value from the  `GetSignatureUrl()` method as query parameters in the URL to retrieve details of a specific dashboard.

     ```js 
           var express = require('express');
           var app = express();
           var url = require("url");
           var cors = require('cors');
           var fs = require("fs");
           app.use(cors());
           var http = require("http");
           var https = require("https");
           var crypto = require('crypto');
           // Parse JSON bodies (as sent by API clients)
           app.use(express.json());

           var appconfig = JSON.parse(fs.readFileSync('embedConfig.json'));

           // Get the embedSecret key from Bold BI
           var embedSecret = appconfig.EmbedSecret;

           var configjson ={"DashboardId": appconfig.DashboardId, "ServerUrl": appconfig.ServerUrl, "SiteIdentifier": appconfig.SiteIdentifier, "Environment": appconfig.Environment, "EmbedType": appconfig.EmbedType};

           //Enter your BoldBI credentials here
           var userEmail = appconfig.UserEmail;

           app.post('/embeddetail/get', function (req, response) {
           var embedQuerString = req.body.embedQuerString;
           var dashboardServerApiUrl = req.body.dashboardServerApiUrl;

           embedQuerString += "&embed_user_email=" + userEmail;
           embedQuerString += "&embed_server_timestamp=" + Math.round((new Date()).getTime() / 1000);
           var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString);
           var embedDetailsUrl = "/embed/authorize?" + embedQuerString+embedSignature;

           var serverProtocol = url.parse(dashboardServerApiUrl).protocol == 'https:' ? https : http;
           serverProtocol.get(dashboardServerApiUrl+embedDetailsUrl, function(res){
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

            app.get("/",function (request, response) {

            var pathname = url.parse(request.url).pathname;
            console.log("Request for " + pathname + " received.");

            response.writeHead(200);

            if(pathname == "/") {
            html = fs.readFileSync("index.html", "utf8");
            html = html.replace("<script>","<script>var configjsonstring='"+JSON.stringify(configjson)+"';var configjson=JSON.parse(configjsonstring);");
            response.write(html);
            }
            response.end();
            })

            var server = app.listen(8080, function () {
            var host = server.address().address
            var port = server.address().port
            console.log("Example app listening at http://%s:%s", host, port)
            })

     ```

10. Create a new file and name it `package.json`. It is essential to install the `packages` listed in the following dependencies section.

     ```js
          {
            "name": "NodeJS",
            "version": "",
            "description": "",
            "main": "embed.js",
            "dependencies": {
                 "cors": "",
                 "express": "",
                 "utf8-bytes": ""
                }
           }
          
     ```

11. Please run the following commands in the terminal: `npm install`, `npm install express`, `npm install cors` and `npm install utf8-bytes`.

12. To run the sample, execute the following command.

      ```js

         node embed.js
      ```

13.	Once you execute the command above, the sample will be hosted at `http://localhost:8080/`.
 