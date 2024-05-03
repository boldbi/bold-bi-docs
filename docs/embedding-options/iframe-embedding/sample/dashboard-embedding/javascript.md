---
layout: post
title:  Dashboard Embedding Example in JavaScript app | Bold BI Docs
description: Explore the embedded samples and learn how to embed the dashboard of the Bold BI application in a JavaScript based Web applications using iFrame.
platform: bold-bi
documentation: ug
---

# Dashboard view

This section explains how to embed the Bold BI dashboard into the sample application by integrating the Dashboards Listing, Designing, and Viewing modules.

![DashboardListingSample](/static/assets/iFrame-based/sample/images/dashboard-sample.png)

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/download)
> **NOTE:** Node.js versions 14.16 to 18.18 are supported.

## How to run the sample

* Please retrieve the sample of the [Iframe Dashboard embedding Javascript](https://github.com/boldbi/iframe-dashboard-javascript-sample) from GitHub.
* Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it. 

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

* To download the `embedConfig.json` file, please use the provided [link](/site-administration/embed-settings/#get-embed-configuration-file) as a reference. Additionally, you can refer to the accompanying image for visual guidance.

    ![Embed Settings Download](/static/assets/javascript/sample/images/embed-settings-download.png)

    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

* Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/iframe-dashboard-javascript-sample) within the application. Make sure you have placed it in the application exactly as shown in the following image.

    ![EmbedConfig image](/static/assets/iFrame-based/sample/images/dashboard-iframe.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">ServerUrl</td>
    <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
    <td align="left">SiteIdentifier</td>
    <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be an empty string.</td>
    </tr>
    <tr>
    <td align="left">Environment</td>
    <td align="left">Your Bold BI application environment. (If it is a cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your own server, use `BoldBI.Environment.Enterprise`).</td>
    </tr>
    <tr>
    <td align="left">DashboardId</td>
    <td align="left">Item id of the dashboard to be embedded in your application</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
    <tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the Dashboard List </td>
    </tr>
    <tr>
    <td align="left">ExpirationTime</td>
    <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
    </tr>
    </tbody>
    </table>
* Please open the terminal in Visual Studio code and run the following command to install the `http-server` package. This package allows the sample to run on a local HTTP server.
    ```bash
        npm install -g http-server
    ```
* Please execute this command to start the HTTP server on a designated port (eg. `http-server -p 5555`).
    ```bash
        http-server -p <port number>
    ```
    > **NOTE:** Replace `<port number>` with the desired port number.
* After the server is running, open your web browser and go to the `DashboardListing.html` file, for example, `http://localhost:5555/DashboardListing.html`.

    ![DashboardListingSample](/static/assets/iFrame-based/sample/images/dashboard-sample.png)

## How the Sample works

* To retrieve the embed details of the `embedConfig.json` file, a request is made using the `fetch()` function in `Properties.js`. If the `embedConfig.json` file cannot be found, the `showErrorPopup()` function will throw an error.

    ![Dashboard_iframe_js_embedconfigScript](/static/assets/iFrame-based/sample/images/dashboard-embedconfigfetch.png)

* The `getToken()` function generates an authorization token for the user using their email and the embedded secret key from the `apiRequest` object in `Properties.js`. This token will be utilized for listing, rendering, and designing the dashboard. The obtained token is stored in the `accessToken` variable.

    ![Dashboard_iframe_js_gettoken](/static/assets/iFrame-based/sample/images/dashboard-gettoken.png)

* The `showDashboardListing()` function in `DashboardListing.js` sends a GET request to the `dashboardServerApiUrl +"/v2.0/items?ItemType=dashboard"` endpoint with the `accessToken` as the authorization header. The `accessToken` is obtained from the `getToken()` function. 

    ![Dashboard_iframe_js_DashboardListing](/static/assets/iFrame-based/sample/images/dashboard-listing.png)  

* The dashboards list is retrieved from the server, and then we create the items based on the list.

###  Viewing an existing Dashboard

* The `renderDashboard()` method in `DashboardListing.js` is called to display the dashboard. It includes the dashboard ID, name, and category in the embedded URL. We retrieve the necessary value from the attribute when the user clicks on the dashboard and construct the embedded URL using this value. We subsequently append this code to the application.

    ![Dashboard_iframe_js_view](/static/assets/iFrame-based/sample/images/dashboard-view-code.png)

### Creating a new Dashboard

* When the `Create` button is clicked on the dashboard page, the `openDesignerForCreate()` function in `DashboardListing.js` is triggered. This function prepares the environment for creating a dashboard by removing any existing content. Afterwards, it generates an embedded view using an `<iframe>` element that redirects to the dashboard designer page.

	![Dashboard_create_button](/static/assets/iFrame-based/sample/images/dashboard-create-page.png)

	![Dashboard_iframe_js_create](/static/assets/iFrame-based/sample/images/dashboard-create-code.png)

###  Editing an existing Dashboard

* The `openDesignerForEdit()` method in `DashboardListing.js` is invoked when you click on any dashboard in the dashboard listing container and then click the `Edit` button. It retrieves the item ID, dashboard name, and category from the properties of the clicked item and uses them to open the dashboard designer page for editing within the "dashboard" element.

    ![Dashboard_iframe_js_edit](/static/assets/iFrame-based/sample/images/dashboard-edit-page.png)

    ![Dashboard_iframe_js_edit](/static/assets/iFrame-based/sample/images/dashboard-edit-code.png)