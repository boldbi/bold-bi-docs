---
layout: post
title: Embed a Dashboard in a Flutter App with JavaScript | Bold BI Docs
description: Explore and learn the steps for JavaScript-based dashboard embedding with Flutter applications, supported by Bold BI since v5.1.55.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Flutter using the Embedded SDK

A GitHub link is provided to [access](https://github.com/boldbi/flutter-sample) the sample application, demonstrating the rendering of a dashboard on your Bold BI server. Following are the steps to create your own embedding application in `Flutter`.

> **NOTE:** Reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation is the best way to begin. The `Getting Started` guide provides all the necessary information before working on the sample.

## Prerequisites

To run the samples, you will need the following:

- [VS Code](https://code.visualstudio.com/)
- [Flutter SDK](https://docs.flutter.dev/get-started/install)
- [Node.js and npm](https://nodejs.org/)
- Google Chrome (for Flutter web)

## How to Run the Sample

1. [Download](https://github.com/boldbi/flutter-sample) the Flutter with JavaScript sample from GitHub.

2. Ensure you have enabled embed authentication on the `embed settings` page. If not, refer to [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code?utm_source=github&utm_medium=backlinks) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. Download the `embedConfig.json` file by following this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file?utm_source=github&utm_medium=backlinks). Refer to the image below for guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

4. Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/flutter-sample/tree/master/nodejs) within the application.

   ![EmbedConfig image](/static/assets/javascript/sample/images/embedconfig-location-min.png)

5. Navigate to the `nodejs` backend folder and install dependencies:

   ```bash
   cd nodejs
   npm install
   ```

6. Start the server using the following command:

   ```bash
   node app.js
   ```

   > **Note:** The server will run on port 8080. If you want to change the port, you can do so in the `app.js` file.

7. Navigate to the `flutter` folder and install dependencies:

   ```bash
   cd flutter-sample
   flutter pub get
   ```

8. Ensure web support is enabled:

   ```bash
   flutter devices
   ```

9. Run the app with the following command to open it in Chrome:

   ```bash
   flutter run -d chrome
   ```

## How This Sample Works

1. In `api.js`, the `/getdetails` route reads values from `embedConfig.json` and provides them to the front-end as JSON. These values are used for initializing the BoldBI SDK.

   ```js
   router.get('/getdetails', (req, res) => {
     const serverEmbedConfigData = path.join(__dirname, '../embedConfig.json');
     const jsonData = fs.readFileSync(serverEmbedConfigData, 'utf8');
     const parsedData = JSON.parse(jsonData);

     const clientEmbedConfigData = {
       DashboardId: parsedData.DashboardId,
       ServerUrl: parsedData.ServerUrl,
       SiteIdentifier: parsedData.SiteIdentifier,
       EmbedType: parsedData.EmbedType,
       Environment: parsedData.Environment
     };
     res.send(clientEmbedConfigData);
   });
   ```

2. The `renderDashboard(dashboardId)` function runs when the page loads, initializing the `BoldBI.create()` function with key parameters.

   ```js
   function renderDashboard(dashboardId) {
     var dashboard = BoldBI.create({
       serverUrl: ServerUrl + "/" + SiteIdentifier,
       dashboardId: dashboardId,
       embedContainerId: "dashboard",
       embedType: BoldBI.EmbedType.Component,
       mode: BoldBI.Mode.View,
       environment: Environment,
       expirationTime: 100000,
       authorizationServer: {
         url: apiUrl + "/authorizationserver"
       }
     });
     dashboard.loadDashboard();
   }
   ```

3. The `authorizationserver` route constructs the embed signature using the `EmbedSecret` key for secure communication.

   ```js
   router.post('/authorizationserver', async (req, res) => {
     let embedQuerString = req.body.embedQuerString;
     const dashboardServerApiUrl = req.body.dashboardServerApiUrl;

     embedQuerString += "&embed_user_email=" + userEmail;
     embedQuerString += "&embed_server_timestamp=" + Math.round(Date.now() / 1000);
     const embedSignature = "&embed_signature=" + getSignatureUrl(embedQuerString, embedSecret);
     const embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

     const serverProtocol = url.parse(dashboardServerApiUrl).protocol === 'https:' ? https : http;

     serverProtocol.get(dashboardServerApiUrl + embedDetailsUrl, function(response) {
       let str = '';
       response.on('data', function(chunk) {
         str += chunk;
       });
       response.on('end', function() {
         res.send(str);
       });
     });
   });
   ```

4. The dashboard is securely embedded in the `#dashboard` container in `index.html` after successful token validation.

   ```html
   <body onload="Init()">
     <div id="viewer-section" style="width: 100%;">
       <div id="dashboard"></div>
     </div>
   </body>
   ```

## Steps to Create a New Flutter Application to Embed a Dashboard

1. Install the `Flutter` in the visual studio code.  
   ![flutter install](/static/assets/javascript/sample/images/flutter_install.png#max-width=60%)

2. Download Android Studio from the official [website](https://developer.android.com/studio) provided, download the Flutter SDK from the official [website](https://docs.flutter.dev/get-started/install/windows) provided, and include the paths in the system environment variable.

3. Create a folder for this project in the desired location and open it in Visual Studio Code.

4. Create the Flutter folder, run a command in the Visual Studio terminal as `flutter create my_app`. Here, `my_app` is the Flutter project name. Change the directory by running the command `cd my_app`.

5. In the `web/index.html` file of the Flutter project, include the following script in the `<head>` tag to load the BoldBI SDK:

   ```html
   <script type="text/javascript" src="https://cdn.boldbi.com/embedded-sdk/latest/boldbi-embed.js"></script>
   ```

6. In the `<body>` tag, invoke the `Init()` method and define the viewer container as follows:

   ```html
   <body onload="Init()">
     <div id="viewer-section">
       <div id="dashboard"></div>
     </div>
   </body>
   ```

   The `Init()` method fetches dashboard configuration from the backend API and triggers the embedding:

   ```js
   async function Init() {
     try {
       const res = await fetch('http://localhost:8080/api/getdetails');
       const config = await res.json();

       ServerUrl = config.ServerUrl;
       SiteIdentifier = config.SiteIdentifier;
       Environment = config.Environment;
       DashboardId = config.DashboardId;

       renderDashboard(DashboardId);
     } catch (err) {
       console.error('Error initializing embed:', err);
     }
   }
   ```

7. Create an `Express.js` backend (`api.js`) that exposes two endpoints: one for returning embed config and one for secure authentication:

   - `/api/getdetails`: Returns `DashboardId`, `ServerUrl`, `SiteIdentifier`, and other info from `embedConfig.json`.
   - `/api/authorizationserver`: Appends user email and timestamp to the query string, signs it using `EmbedSecret`, and securely fetches the embed token from BoldBI.

   ```js
   const express = require('express');
   const router = express.Router();
   const fs = require('fs');
   const url = require('url');
   const http = require('http');
   const https = require('https');
   const path = require('path');

   const { getSignatureUrl } = require('../utils/signature');

   let appconfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../embedConfig.json')));
   const embedSecret = appconfig.EmbedSecret;
   const userEmail = appconfig.UserEmail;

   router.post('/authorizationserver', async (req, res) => {
     let embedQuerString = req.body.embedQuerString;
     const dashboardServerApiUrl = req.body.dashboardServerApiUrl;

     embedQuerString += "&embed_user_email=" + userEmail;
     embedQuerString += "&embed_server_timestamp=" + Math.round(Date.now() / 1000);
     const embedSignature = "&embed_signature=" + getSignatureUrl(embedQuerString, embedSecret);
     const embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

     const serverProtocol = url.parse(dashboardServerApiUrl).protocol === 'https:' ? https : http;

     serverProtocol.get(dashboardServerApiUrl + embedDetailsUrl, function (response) {
       let str = '';
       response.on('data', chunk => str += chunk);
       response.on('end', () => res.send(str));
     });
   });

   router.get('/getdetails', (req, res) => {
     const config = {
       DashboardId: appconfig.DashboardId,
       ServerUrl: appconfig.ServerUrl,
       SiteIdentifier: appconfig.SiteIdentifier,
       EmbedType: appconfig.EmbedType,
       Environment: appconfig.Environment
     };
     res.send(config);
   });

   module.exports = router;
   ```

8. In the `renderDashboard()` function (inside `index.html`), call the backend authorization route to authenticate and embed the dashboard:

   ```js
   function renderDashboard(dashboardId) {
     var dashboard = BoldBI.create({
       serverUrl: ServerUrl + "/" + SiteIdentifier,
       dashboardId: dashboardId,
       embedContainerId: "dashboard",
       embedType: BoldBI.EmbedType.Component,
       mode: BoldBI.Mode.View,
       expirationTime: 100000,
       environment: Environment,
       authorizationServer: {
         url: 'http://localhost:8080/api/authorizationserver'
       }
     });
     dashboard.loadDashboard();
   }
   ```

9. Now, run the backend server using `node app.js` and execute the Flutter web app using the command:

   ```bash
   flutter run -d chrome
   ```