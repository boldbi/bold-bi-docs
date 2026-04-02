---
layout: post
title: Embedding Analytics with React and Python | Bold BI Docs
description: Learn how to embed an analytics dashboard with a Python and React application using Bold BI Embed SDK and try it yourself.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with Python using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/react-with-python) the sample application,  which demonstrates the rendering of a single dashboard and a list of dashboards in your Bold BI server and followed by steps to create a new embedding application in `React` with `Python` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The Getting Started guide provides enough information that you need to know before working on the sample.

## Prerequisites

 * [Python installer](https://www.python.org/downloads/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Python extension in VS code](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

 ## How to run the sample

 1. Please get the [React with Python](https://github.com/boldbi/react-with-python) sample from GitHub.

 2. Please make sure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) for enabling it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. To download the `embedConfig.json` file, please click on this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
 4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/react-with-nodejs-sample) within the application. Make sure to place it in the application exactly as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/ReactWIthPython_EmbedConfig.png)

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

 5. Run the python application using the command "python manage.py runserver" The application will be running on port number 8000.

    ![Python Backend API](/static/assets/javascript/sample/images/react-with-python-backend.png)

 6. Once you provide these details, run the command `npm install`. After all the packages are installed, run the command `npm start`.

    ![React with Python](/static/assets/javascript/sample/images/react-with-python-dashboard.png)

> **NOTE:** By default, we display the dashboard embedding without the dashboard listing sidebar. To enable the dashboard list, you need to navigate to the `dashboardlisting` URL (e.g., `https://localhost:3000/dashboardlisting`).

## How this sample works

 1. In the React application, we use the `BoldBI.create()` method, which includes the dashboard details and server information. The `tokenGenerationUrl` API member has been provided with a Python application that uses the `tokenGeneration` method.

    ![Render dashboard](/static/assets/javascript/sample/images/react-with-python-renderdashboard.png)

 2. The tokenGeneration API is the intermediary that contacts the Bold BI application to retrieve the dashboard details with token. 

    ![Get Embed Details](/static/assets/javascript/sample/images/react-with-python-authorize.png)

 3. Once the token is generated, it will be returned to the `Dashboard.js` file and the dashboard will start to render it.