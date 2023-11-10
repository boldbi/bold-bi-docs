---
layout: post
title:  Embedded Dashboard in Django Web Application | Bold BI Docs
description: Explore the steps to embed a Bold BI dashboard in a Django web application with a demo sample walkthrough.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Django using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/django-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `Django` on your own. 

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation.  The `Getting Started` guide gives you enough information that you need to know before working on the sample.      

## How to run the sample

 1. Please [get](https://github.com/boldbi/django-sample) the Django sample from the attached file.

 2. You need to set the following properties in the `models.py` file as follows. 
    ![Embed Properties](/static/assets/javascript/sample/images/django-props.png#max-width=75%)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
        <td align="left">DashboardId</td>
            <td align="left">Provide the dashboard id of the dashboard that you want to embed here.</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step.</td>
        </tr>    
    </tbody>
    </table>

 3. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/site-administration/embed-settings/) for more details.

 4. Run your Django application.

## How this sample works

 1. Based on the provided embed details with the dashboard, authorize the server URL by calling the get embed details function `(views.py/get_embed_details)` call with the provided `EmbedProperties` values
 
    Learn more about authorize server [here](/security-configuration/authorize-server/)
    
    ![Authorize Server URL](/static/assets/javascript/sample/images/django-api.png)
    ![Get Embed Details](/static/assets/javascript/sample/images/django-authorize.png)

    > **NOTE:** Remove the CSRF Token from the headers, if your application does not have CSRF middleware `(django.middleware.csrf.CsrfViewMiddleware)`.
    
    ![CSRF Token](/static/assets/javascript/sample/images/django_csrf_token.png)

 2. In the above authorization, generate the SignatureUrl using the provided EmbedSecret key and validate embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `models.py`, change the dashboard Id of the respective dashboard that you want to embed.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/django-props.png)