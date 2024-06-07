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

 3. You can obtain your Embed Secret key from the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

 4. Please run your Django application.

## How this sample works

 1. To authorize the server URL, use the provided embed details from the dashboard and call the `get_embed_details` function `(views.py/get_embed_details)` with the provided values of `EmbedProperties`.
 
    Learn more about the [authorization server](/security-configuration/authorize-server/).
    
    ![Authorize Server URL](/static/assets/javascript/sample/images/django-api.png)
    ![Get Embed Details](/static/assets/javascript/sample/images/django-authorize.png)

    > **NOTE:** Remove the CSRF Token from the headers if your application does not have the CSRF middleware `(django.middleware.csrf.CsrfViewMiddleware)`.
    
    ![CSRF Token](/static/assets/javascript/sample/images/django_csrf_token.png)

 2. In the authorization mentioned above, generate the SignatureUrl using the provided EmbedSecret key and validate the embed details in Bold BI. Once the details are validated, the dashboard starts to render.

 3. In the `models.py`, change the dashboard ID of the respective dashboard that you want to embed.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/django-props.png)