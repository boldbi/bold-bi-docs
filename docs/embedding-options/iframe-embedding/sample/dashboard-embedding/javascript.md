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
> **NOTE:** Node.js v14.16 to v18.18 are supported.

## How to run the sample

* Please get the [Iframe Dashboard embedding Javascript](https://github.com/boldbi/iframe-dashboard-javascript-sample) sample from GitHub.
* Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, refer to the following image for visual guidance.

    ![Embed Settings Download](/static/assets/javascript/sample/images/embed-settings-download.png)

    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/iframe-dashboard-javascript-sample) within the application. Please ensure that you have placed it in the application as shown in the following image.  

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
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a></td>
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
* Open the terminal in Visual Studio code and run this command to install the `http-server` package, which enables the sample to run a local HTTP server.
    ```bash
        npm install -g http-server
    ```
* Run this command to initiate the HTTP server on a specific port(eg. `http-server -p 5555`)
    ```bash
        http-server -p <port number>
    ```
    > **NOTE:** Replace `<port number>` with the desired port number
* Once the server runs, open your web browser and navigate to the `DashboardListing.html` file(eg. `http://localhost:5555/DashboardListing.html`).

    ![DashboardListingSample](/static/assets/iFrame-based/sample/images/dashboard-sample.png)

## How the Sample works

* Making a request to retrieve the embed details of the `embedConfig.json` file by using the `fetch()` function in `Properties.js`. If the `embedConfig.json` file cannot be found, the `showErrorPopup()` function will throw an error.

    ![Dashboard_iframe_js_embedconfigScript](/static/assets/iFrame-based/sample/images/dashboard-embedconfigfetch.png)

* The `getToken()` function generates a user authorization token using the user's email and embedded secret key from the `apiRequest` object in `Properties.js`. This token will be used for listing, rendering, and designing the dashboard. The obtained token is stored in the `accessToken` variable.

    ![Dashboard_iframe_js_gettoken](/static/assets/iFrame-based/sample/images/dashboard-gettoken.png)

* The `showDashboardListing()` function in `DashboardListing.js` makes a GET request to the `dashboardServerApiUrl +"/v2.0/items?ItemType=dashboard"` endpoint with the `accessToken` as the authorization header. The `accessToken` is obtained from the `getToken()` function. 

    ![Dashboard_iframe_js_DashboardListing](/static/assets/iFrame-based/sample/images/dashboard-listing.png)  

* Dashboards List retrieved from sever, then we would create the items based on the list.

###  Viewing an existing Dashboard

* The `renderDashboard()` method in `DashboardListing.js` is invoked to render the dashboard. It passes the dashboard ID, dashboard name, and category name in the embed URL. We obtain the required value from the attribute when the user clicks on the dashboard and create the embed URL using this value. We then append this code into the application.

    ![Dashboard_iframe_js_view](/static/assets/iFrame-based/sample/images/dashboard-view-code.png)

### Creating a new Dashboard

* When the `Create` button is clicked on the dashboard page, the `openDesignerForCreate()` function in `DashboardListing.js` is activated. This function sets up the environment for creating a dashboard by removing existing content. Subsequently, it generates an embedded view using an `<iframe>` element that directs to the dashboard designer page.

	![Dashboard_create_button](/static/assets/iFrame-based/sample/images/dashboard-create-page.png)

	![Dashboard_iframe_js_create](/static/assets/iFrame-based/sample/images/dashboard-create-code.png)

###  Editing an existing Dashboard

* The `openDesignerForEdit()` method in `DashboardListing.js` is invoked when you click any dashboard in the dashboard listing container and then click the `Edit` button. It retrieves the item ID, dashboard name, and category from the properties of the clicked item and uses them to open the dashboard designer page for editing within the "dashboard" element.

    ![Dashboard_iframe_js_edit](/static/assets/iFrame-based/sample/images/dashboard-edit-page.png)

    ![Dashboard_iframe_js_edit](/static/assets/iFrame-based/sample/images/dashboard-edit-code.png)