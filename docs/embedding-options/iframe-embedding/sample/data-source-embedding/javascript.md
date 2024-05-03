---
layout: post
title:  Embed Data Source Designer in JavaScript App | Bold BI Docs
description: Explore how to embed the data source designer module in your JavaScript-based Web application using iFrame and how to create and edit the data source.
platform: bold-bi
documentation: ug
---

# Data Source view
This section explains how to integrate the Bold BI data source into the sample application by embedding the item listing and designing modules. 

![DatasourceListingSample](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js.png)

## Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

 > **NOTE:** Node.js versions 14.16 to 18.18 are supported.

## How to run the sample

* Please retrieve the sample of the [Iframe DataSource embedding Javascript](https://github.com/boldbi/iframe-datasource-javascript-sample) from GitHub.

* Please make sure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

* To download the `embedConfig.json` file, please click on the following [link](/site-administration/embed-settings/#get-embed-configuration-file). Additionally, you can refer to the image below for visual guidance.

    ![Embed Settings Download](/static/assets/javascript/sample/images/embed-settings-download.png)
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)

* Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/iframe-datasource-javascript-sample/tree/master) within the application. Make sure that you have placed it in the application as shown in the following image.
  
    ![EmbedConfig image](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js_EmbedConfig.png)

    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <td align="left">ServerUrl</td>
    <td align="left">Datasource Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
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
    <td align="left">Item id of the dashboard to be embedded in your application, For the datasource, DashboardId is not needed</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
    <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a></td>
    </tr>
    <tr>
    <td align="left">UserEmail</td>
    <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the Datasource List </td>
    </tr>
    <tr>
    <td align="left">ExpirationTime</td>
    <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds).</td>
    </tr>
    </tbody>
    </table>
 * Open the terminal in Visual Studio Code and run this command to install the `http-server` package. This package enables the sample to run a local HTTP server.
     ```bash
        npm install -g http-server
     ```
 * To initiate the HTTP server on a specific port (for example, `http-server -p 8000`), run this command.
   
     ```bash
        http-server -p <port number>
      ```
     > **NOTE:** Please replace `<port number>` with the desired port number.

 * Once the server is running, open your web browser and go to the `DatasourceListing.html` file (for example, `http://localhost:8000/DatasourceListing.html`).

    ![DatasourceListingSample](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js.png)
  
## How the Sample works

* Using the built-in browser object `XMLHttpRequest` retrieve data from the `embedConfig.json` file within the `DatasourceListing.html`. If the `embedConfig.json` file is not found, the `showError()` function will throw an error.

	![Datasource_iframe_js_embedconfigScript](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js_embdConfigScript.png)

* The `getToken()` function generates an authorization token by utilizing the user's email and embedded secret key from the `apiRequest object`. he resulting token is then stored in the `accessToken` variable.
  
  	![Datasource_iframe_js_gettoken](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js_gettoken.png)

* The `showDatasourceListing()` function sends a GET request to the `dashboardServerApiUrl/v2.0/items?ItemType=4` endpoint, including the `accessToken` as the authorization header. The `accessToken` is obtained from the `getToken()` function. The received data is then stored in the `datasource` variable.
  
  	![Datasource_iframe_js_DatasourceListing](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js_DatasourceListing.png)
  
* If the `datasource` variable is not empty, a div element is created for each item in the datasource and added to the panel element. This action will result in the datasource list becoming visible.
   
   ### Creating a new Data Source

   * When the create button is clicked on the data source page, the `openDesignerForCreate()` function is activated. This function sets up the environment for creating a data source by removing existing content. Subsequently, it generates an embedded view using an `<iframe>`element, which directs to the data source designer page.

	 	![Datasource_create_button](/static/assets/iFrame-based/sample/images/Datasource_create_button.png)
	        
		![Datasource_iframe_js_create](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js_create.png)
 
   ###  Editing an existing Data Source
  
   * The `openDesignerForEdit()` method is called when we click on any data source in the data source listing contain-er. It retrieves the ID and name of the clicked item from its properties and utilizes them to open the data source designer page for editing within the "datasource" element.

     	![Datasource_iframe_js_edit](/static/assets/iFrame-based/sample/images/Datasource_Iframe_js_edit.png)
