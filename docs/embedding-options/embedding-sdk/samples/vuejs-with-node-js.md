---
layout: post
title: Embedding Analytics in Node.js with Vue.js | Bold BI Docs
description: Learn how to embed Bold BI in an application with Node.js and Vue.js using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Vue.js with Node.js using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/vue-with-nodejs-sample) the sample application, which showcases the rendering of the dashboard that is accessible on your Bold BI server. Following this, there are instructions on how to create a new embedding application in `Vue.js` with `Node.js` on your own.

> **NOTE:** The best way to get started is by reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide provides enough information to know before working on the sample.

## Requirements/Prerequisites

 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Node.js](https://nodejs.org/en/)

 > **NOTE:** Node.js versions 12.13 to 18.18 are supported.

## How to run the sample

 1. Please obtain the sample for [Vue.js with Node.js](https://github.com/boldbi/vue-with-nodejs-sample) from GitHub.       

 2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not enabled, please follow the provided [instructions](/site-administration/embed-settings/#get-embed-secret-code) or refer to the image below for guidance on how to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. Please use this [link](/site-administration/embed-settings/#get-embed-configuration-file) as a reference to download the `embedConfig.json` file. Additionally, you can refer to the following image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

  4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-nodejs-sample/tree/master/Nodejs) within the application. Please ensure that you have placed it in the application as shown in the following image.

     ![EmbedConfig Location Image](/static/assets/javascript/sample/images/vue-node-embedconfig.png)

      <meta charset="utf-8"/>
      <table>
      <tbody>
      <tr>
      <td align="left">ServerUrl</td> 
      <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
      </tr>
      <tr>
      <td align="left">SiteIdentifier</td>
      <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
      </tr>
      <tr>
      <td align="left">Environment</td>
      <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use <code>BoldBI.Environment.Cloud</code>; if it is your own server, use <code>BoldBI.Environment.Enterprise</code>).</td>
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
      <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard</td>
      </tr>
      <tr>
      <td align="left">ExpirationTime</td>
      <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
      </tr>
      </tbody>
      </table>

 5. Open your `Nodejs` sample in **Visual Studio Code.**
    
 6. To install all dependencies, use the command `npm install.`
 
 7. Please run the back-end `Nodejs` sample by using the command `node embed.js`.

 8. Open the `vue` sample in a new window of **Visual Studio Code.**

 9. To install all dependent packages, use the following command: `npm install.`

 10. Please run your `vue` sample using the following command: `npm run serve`.

 11. The dashboard can be edited in design mode and a new dashboard can be created with the following changes in the `renderDashboard()` method.

     <meta charset="utf-8"/>
     <table>
     <tbody>
     <td align="left">mode</td>
     <td align="left">In which mode do you want to render the dashboard? It can either be <code>BoldBI.Mode.View</code> or <code>BoldBI.Mode.Design</code> mode.</td>
     </tr>
     <tr>
     <td align="left">authorizationServer</td>
     <td align="left">Url of the <code>authorizationServerAPI</code> action in the application.</td>
     </tr>
      <tr>
      <td align="left">RenderDesigner</td>
      <td align="left">loadDesigner()</td>
        </tr>
     </tbody>
     </table>

     ```js
        renderDashboard(data) {
            let dashboard = BoldBI.create({
            serverUrl: data.ServerUrl + '/' + data.SiteIdentifier,
            dashboardId: data.DashboardId,
            embedContainerId: 'dashboard',
            embedType: BoldBI.EmbedType.Component,
            environment: data.Environment,
            width: '100%',
            height: window.innerHeight + 'px',
            expirationTime: 100000,
            authorizationServer: {
            url: authorizationUrl,
            },
        })
        dashboard.loadDashboard();
        }
 
      ```
## How this sample works
 
 1. The dashboard will be rendered using data fetched from the `embedconfig.json` file through the `/getdetails` endpoint in the back-end `Node.js`.
    ![embedconfig](/static/assets/javascript/sample/images/vue-node-getdetails.png)

 2. Before rendering, the `authorizationUrl` is invoked, redirecting to the `AuthorizationServer` action within `embed.js`. This action generates the `EmbedSignature` using the embed secret from the `embedConfig.json`.
    ![Authorization server](/static/assets/javascript/sample/images/vue-node-authorization.png)

 3. These details will be sent to the Bold BI server for validation. Once the details have been validated, the dashboard will begin to render.

## Steps to create new Vue.js with Node.js application to embed dashboard

 1. Create a folder in the desired location and open it in **Visual Studio Code**. 

 2. Open the terminal in Visual Studio Code. Please refer to the image below.
    ![Terminal Image](/static/assets/javascript/sample/images/vue-node-terminal.png)

 3. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not enabled, please follow the provided [instructions](/site-administration/embed-settings/#get-embed-secret-code) or refer to the image below to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 4. Please use this [link](/site-administration/embed-settings/#get-embed-configuration-file) as a reference for downloading the `embedConfig.json` file. Additionally, you can refer to the following image for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 5. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-nodejs-sample/tree/master/Nodejs) within the application. Please ensure that you have placed it in the application as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/node-embed-settings-image.png)

 6. Create a JavaScript file named `embed.js` and create an API called `/authorizationserver/get` that uses the `GetSignatureUrl()` method to generate the algorithm. Within this API, append the `embedQueryString`, `userEmail`, and the value obtained from the `GetSignatureUrl()` method as query parameters in the URL to retrieve details of a specific dashboard.

    ```js
        var fs = require("fs");
        var http = require("http");
        var https = require("https");
        var url = require("url");
        var express = require('express');
        var cors = require('cors');
        var app = express();
        var crypto = require('crypto');
        const path = require('path');

        app.use(cors());
        //Parse JSON bodies (as sent by API clients).
        app.use(express.json());

        //Assign a port number for an API to run.
        const port = 8080;

        let appconfig;
        try {
        appconfig = JSON.parse(fs.readFileSync('embedConfig.json'));
        } catch (error) {
        console.error('Error: embedConfig.json file not found.');
        process.exit(1);
        }

        var embedSecret = appconfig.EmbedSecret;
        var userEmail = appconfig.UserEmail;

        app.post('/authorizationserver',  async function (req, response){
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
        app.get('/getdetails', (req, res) => {
        const embedConfigPath = path.join(__dirname, 'embedConfig.json');
        const jsonData = fs.readFileSync(embedConfigPath, 'utf8');
        res.send(jsonData);
        });

        app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        }); 
    ```
    > **NOTE:** You can change the port number in embed.js according to your preferences. However, if you change the port number of the API host, you must also update the port number in the `App.vue` file.

 7. Please create a new file and name it `package.json`. It is essential to install the `packages` listed in the following dependencies section.
    
    ```js
    {
  
        "version": "1.0.0",
        "description": "",
        "main": "embed.js",
        "dependencies": {
            "cors": "^2.8.5",
            "express": "^4.17.3"
        },
        "devDependencies": {},
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }

    ```
 8. Create another folder in the desired location and open it in **Visual Studio Code.**

 9. To create a new Vue.js project, we need to run this command in the terminal and select the second option.
     
     ```js
          vue create vue
     ```
     ![Defualt preset](/static/assets/javascript/sample/images/vuejs-core-preset.png)

 10. Open the `App.vue` file and replace the code below.

     ```js
        <template>
            <div id="app" ref="app">
                <div id="dashboard" ref="dashboard">
                <div id="errorModal" class="modal" v-show="showErrorModal">
                    <p class="error-message">{{ errorMessage }} Please use this <a href="/site-administration/embed-settings/" target="_blank">link</a> to obtain the Json file from the Bold BI server.</p>
                </div>
                </div>
            </div>
            </template>

            <script>
            import $ from 'jquery';
            import { BoldBI } from '@boldbi/boldbi-embedded-sdk';
            window.jQuery = $
            export default {
            name: 'App',
            data() {
                return {
                errorMessage: '',
                };
            },
            async mounted() {
                    var scripts = [
                        'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js',
                    ];
                    scripts.forEach((script) => {
                        let tag = document.createElement('script');
                        tag.setAttribute('src', script);
                        tag.setAttribute('type', 'text/javascript');
                        tag.setAttribute('defer', 'defer');
                        tag.async = true;
                        document.head.appendChild(tag);
                    });


                    //NodeJs application would be run on http://localhost:8080, which needs to be set as `apiHost`.
                    let ApiHost = 'http://localhost:8080';

                    try {
                        const response = await fetch(ApiHost+'/getdetails');
                        const data = await response.json();
                        renderDashboard(data);
                    }catch (error) {
                        this.errorMessage = 'To compile and run the project, an embed config file needs to be required.';
                        this.showErrorModal = true;
                    }

                    function renderDashboard(data) {
                    let dashboard = BoldBI.create({
                        serverUrl: data.ServerUrl + '/' + data.SiteIdentifier,
                        dashboardId: data.DashboardId,
                        embedContainerId: 'dashboard',
                        embedType: BoldBI.EmbedType.Component,
                        environment: data.Environment,
                        width: '100%',
                        height: window.innerHeight + 'px',
                        expirationTime: 100000,
                        authorizationServer: {
                        url: ApiHost + "/authorizationserver",
                        },
                    });
                    dashboard.loadDashboard();
                    }
                },
            };
            </script>
            <style>
            .error-message {
            color: red;
            text-align: center;
            font-size: 20px;
            margin-top: 300px
            }
            </style>
     ```
     > **NOTE:** Please make sure to update the port number in the `apiHost` variable in the `App.vue` file if you have made any changes to the port number of the API host in `embed.js`.

 11. Open the `package.json` file and replace the code within it.

     ```js
        {
            "name": "vue",
            "version": "0.1.0",
            "private": true,
            "scripts": {
                "serve": "vue-cli-service serve",
                "build": "vue-cli-service build",
                "lint": "vue-cli-service lint"
            },
            "dependencies": {
                "@boldbi/boldbi-embedded-sdk": "6.16.12",
                "core-js": "^3.8.3",
                "jquery": "^3.5.1",
                "vue": "^2.6.14"
            },
            "devDependencies": {
                "@babel/core": "^7.12.16",
                "@babel/eslint-parser": "^7.12.16",
                "@vue/cli-plugin-babel": "~5.0.0",
                "@vue/cli-plugin-eslint": "~5.0.0",
                "@vue/cli-service": "~5.0.0",
                "eslint": "^7.32.0",
                "eslint-plugin-vue": "^8.0.3",
                "vue-template-compiler": "^2.6.14"
            },
            "eslintConfig": {
                "root": true,
                "env": {
                "node": true
                },
                "extends": [
                "plugin:vue/essential",
                "eslint:recommended"
                ],
                "parserOptions": {
                "parser": "@babel/eslint-parser"
                },
                "rules": {}
            },
            "browserslist": [
                "> 1%",
                "last 2 versions",
                "not dead"
            ]
        }
     ```
 12. Open `Node.js` and execute the command `npm install` to install the necessary dependencies. Then, run the sample using the command `node embed.js`.
 
 13. Open `vue` and execute the command `npm install` to install the necessary dependencies. Then, run the sample by using the `npm run serve` command to render the dashboard.
 
 14. Once you execute the command above, the sample will be hosted at `http://localhost:8081/`.
