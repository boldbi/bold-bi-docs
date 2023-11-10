---
layout: post
title: Embedding Analytics with React and Node.js | Bold BI Docs
description: Learn how to embed an analytics dashboard with a Node.js and React application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with Node.js using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/react-with-nodejs-sample/tree/master) the sample application, which demonstrates the dashboard rendering in your Bold BI server and followed by steps to create a new embedding application in `React` with `Node.js` on your own.  

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The Getting Started guide gives you enough information to know before working on the sample.      

## Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

 > **NOTE:** Node.js v14.16 to v18.18 are supported.

 ## How to run the sample

 1. Please get the [React with Node.js](https://github.com/boldbi/react-with-nodejs-sample)  sample from GitHub.

 2. Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
 4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-nodejs-sample) within the application. Please ensure you have placed it in the application as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/ReactWIthNodeJS_EmbedConfig.png)

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
    <td align="left">Your Bold BI application environment. (If it is cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your own server, use `BoldBI.Environment.Enterprise`).</td>
    </tr>
    <tr>
    <td align="left">DashboardId</td>
    <td align="left">Item id of the dashboard to be embedded in your application.</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a></td>
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

 5. To install all dependent packages, use the following command.

     ```js
          npm install
     ```

 6. To run the samples, use the following command.

     ```js
          npm start
     ```

7.	The dashboard can be editable in design mode and create a new dashboard with the following changes in the `renderDashboard()` method.

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <td align="left">mode</td>
    <td align="left">In which mode do you want to render the dashboard? It can either be 'BoldBI.Mode.View' or 'BoldBI.Mode.Design' mode. </td>
    </tr>
    <tr>
    <td align="left">authorizationServer</td>
    <td align="left">Url of the 'authorizationServerAPI' action in the application.</td>
    </tr>
    </tbody>
    </table>

    ```js
          renderDashboard(data) {
                this.dashboard= BoldBI.create({
                serverUrl: data.ServerUrl+"/" + data.SiteIdentifier,
                dashboardId: data.DashboardId,
                embedContainerId: "dashboard",
                embedType: data.EmbedType,
                environment: data.Environment,
                mode:BoldBI.Mode.View,
                width:"100%",
                height: window.innerHeight + 'px',
                expirationTime:100000,
                authorizationServer: {
                    url: apiHost + authorizationUrl
                }
            });
    
            this.dashboard.loadDashboard();                     
        }

     ```

## How this sample works

 1. Based on the configured embedConfig values in the `Dashboard.js` file, the `renderDashboard` method will be invoked from the `componentDidMount()` function.

    ![render dashboard](/static/assets/javascript/sample/images/react-nodejs-dashboard.png)

 2. Before rendering, authorize the server URL by calling the `AuthorizationServer` API(http://localhost:8080/authorizationserver/get) call with the provided `embedConfig` values.

    ![Get Embed Details](/static/assets/javascript/sample/images/react-node-js-authorize.png)  

 3. These details will be sent to the Bold BI server and get validated there. Once the details are validated, the dashboard starts to render.

 ## Steps to create new React with Node.js application to embed dashboard

 1. Create a folder in the desired location and open it in the **Visual Studio Code**. 

 2. Open the terminal in Visual Studio Code. Please refer to the following image.

    ![Terminal Image](/static/assets/javascript/sample/images/react-nodejs-terminal.png)
 
 3. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 4. To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)

    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

 5. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-nodejs-sample) within the application. Please ensure that you have placed it in the application as shown in the following image.

    ![EmbedConfig image](/static/assets/javascript/sample/images/react-nodejs-embed-config.png)

 6. Create a JS file named `embed.js` and create an API called `/authorizationserver/get` that utilizes the `GetSignatureUrl()` method for generating the algorithm. Within this API, append the `embedQuerString`, `userEmail`, and the value obtained from the `GetSignatureUrl()` method as query parameters in the URL to get details of a specific dashboard.

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
       process.exit(1); // Exit the program with a non-zero exit code to indicate an error
       }
   
       var embedSecret = appconfig.EmbedSecret;
   
       var userEmail = appconfig.UserEmail;
   
       app.post('/authorizationserver/get',  async function (req, response){
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
       app.get('/GetData', (req, res) => {
       const embedConfigPath = path.join(__dirname, 'embedConfig.json');
       const jsonData = fs.readFileSync(embedConfigPath, 'utf8');
       res.send(jsonData);
       });
   
       app.listen(port, () => {
       console.log(`Server is running on port ${port}`);
       });
    ```
   
    > **NOTE:** Change the port number in embed.js according to your preferences, but if you change the port number of the api host, you must update the port number in the Dashboard.js.

7. Create a new file and name it `package.json`. Installing the `packages` listed in the following dependencies section is essential.

   ```js
       {
           "name": "ReactWithNodeJS",
           "version": "1.0.0",
           "description": "",
           "main": "embed.js",
           "dependencies": {
               "@boldbi/boldbi-embedded-sdk": "6.6.12",
                "cors": "^2.8.5",
                "express": "^4.18.2"
            },
            "devDependencies": {
                "npm-run-all": "^4.1.5"
            },
           "scripts": {
               "start": "npm-run-all --parallel start-embed start-client",
               "start-embed": "node embed.js",
               "start-client": "cd client && npm start"
           },
           "keywords": [],
           "author": "",
           "license": "ISC"
       }
   ```

8. Create a new directory called `client` and navigate to it.

   ```bash
       mkdir client
       cd client
   ```

9. Run the command to create the React sample project in the client directory.

   ```bash
       npx create-react-app .
   ```

   > **NOTE:** Above comment will create a new React application inside the "client" directory itself without creating an additional subdirectory.
  
10. After creating the React sample, navigate back to the previous directory.
   
     ```bash
         cd..
     ```
     
11. Open the `client\src` folder. Within the `client\src` folder, create a new folder named `Dashboard`. Inside the `Dashboard` folder, create a file named `Dashboard.js`. In the `Dashboard.js` file, define the mandatory properties and implement the methods `renderDashboard()` to render the dashboard, `render()` to create the DOM elements, and `componentDidMount()` to contact server as follows.
   
      ```js
          import React from 'react';
          import '../index';
          import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
      
      
          //NodeJs application would be run on http://localhost:8080, which needs to be set as `apiHost`.
          const apiHost="http://localhost:8080";
      
          //Url of the authorizationserver action in ValuesController of the NodeJs application.
          const authorizationUrl="/authorizationserver/get";
            
          class Dashboard extends React.Component {
              constructor(props) {
                  super(props);
                  this.state = {
                  toke: undefined,
                  items: [],
                  embedConfig: {},
                  };
                  this.BoldBiObj = new BoldBI();
              };
          }
          export default Dashboard;
      ```
      
      > **NOTE:** If you have modified the port number of the API host, ensure that you update the port number in the apiHost within the Dashboard.js file.

12. Inside the `Dashboard.js` file, add the following code to render the dashboard.
    
      ```js 
       renderDashboard(data) {
          this.dashboard= BoldBI.create({
                serverUrl: data.ServerUrl+"/" + data.SiteIdentifier,
                dashboardId: data.DashboardId,
                embedContainerId: "dashboard",
                embedType: data.EmbedType,
                environment: data.Environment,
                mode:BoldBI.Mode.View,
                width:"100%",
                height: window.innerHeight + 'px',
                expirationTime:100000,
                authorizationServer: {
                    url: apiHost + authorizationUrl
                }
            });
      
            this.dashboard.loadDashboard();             
        }
      ```

13. Inside the `Dashboard.js` file, add the following code. Create a DOM element with the ID `dashboard`. This element will be used in the `renderDashboard()` method to render the dashboard within it.
    
      ```js
       render() {
          return (
            <div id="Dashboard">
                <div id="viewer-section">
                  <div id="dashboard"></div>
                </div>
            </div>
          );
        }
      ```

14. Inside the `Dashboard.js` file, add the following code, The `componentDidMount()` method contacts the server to get the token, and with this token, particular dashboard details are collected and passed to the `renderDashboard()` method to render it.

      ![Dashboard](/static/assets/javascript/sample/images/react-nodejs-Dashboardjs.png)
    
      ```js
      async componentDidMount() {
          try {
              const response = await fetch(apiHost+"/GetData");
              const data = await response.json();
              this.setState({ embedConfig: data });
              const embedConfig = this.state.embedConfig;
              this.renderDashboard(embedConfig);
            } catch (error) {
              console.log(error);
              this.setState({ toke: "error", items: "error" });
            }
          }
      ```

16. Open the `App.js` folder, replace the following code. The following code imports the necessary modules, defines the `App` component, renders the `Dashboard` component, and exports it for use in other files.
   
      ```js
          import React from 'react';
          import Dashboard from './Dashboard/Dashboard';
      
          class App extends React.Component {
          render() {
              return (
              <div>
              <Dashboard/>
              </div>
              );
          }
          }
      
          export default App;
      ```

17.  Open the `Index.js` file, replace the following code. These lines of code import the necessary modules `React` and `ReactDOM`, import the `App` component, and use `ReactDOM.render` to render the App component into the specified HTML element.
    
      ```js
          import React from 'react';
          import ReactDOM from 'react-dom';
          import App from './App';
      
          ReactDOM.render(<App />, document.getElementById('root'));
      ```

18. Run the following command in the terminal: `npm install`.

19. Run the React with Node.js sample, use the following command `npm start` in visual Studio Code.

20. After executing the command, the application will automatically launch in the default browser. You can access it at the specified port number (e.g., https://localhost:3000).
