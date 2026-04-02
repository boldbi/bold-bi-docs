---
layout: post
title:  Embedded Dashboard in Django Web Application | Bold BI Docs
description: Explore the steps to embed a Bold BI dashboard in a Django web application with a demo sample walkthrough.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Django using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/django-sample) the sample application, which demonstrates the rendering of the dashboard available on your Bold BI server. This is followed by steps to create a new embedding application in `Django` on your own.

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.    

## Prerequisites

 * [Python installer](https://www.python.org/downloads/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Python extension in VS code](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

## How to run the sample

 1. Please [get](https://github.com/boldbi/django-sample) the Django sample from the attached file.

 2. Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.
    ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

 3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Furthermore, you can refer to the accompanying image for visual guidance.
     
    ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png) 
    ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
 4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/django-sample/tree/master) within the application. Make sure to place it in the application as shown in the following image.

    ![EmbedConfig Location Image](/static/assets/javascript/sample/images/django-embedconfig-location.png)

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

 5. Open the folder in terminal in Visual Studio Code and execute the command `python manage.py runserver` to run the application.

## How this sample works

 1. The `renderDashboard` method will be invoked from the `fetchEmbedAndLoad()` function based on the configured embedConfig values in the `index.html` file.
    ![render dashboard](/static/assets/javascript/sample/images/django_csrf_token.png)

 2. Before rendering, call the `tokenGeneration` Url, which redirects to the `TokenGeneration` action in the `views.py`. This action generates the access token using the provided `embedDetails`.    
    ![Get Embed Details](/static/assets/javascript/sample/images/django-authorize.png)  

 3. Once the token is generated, it will be returned to the `index.html` file and the dashboard will start to render it.