---
layout: post
title:  Embedded Dashboard in an Ionic Application | Bold BI Docs
description: Explore the steps to embed a Bold BI dashboard in a web application built with ASP.NET Core and Ionic Frameworks.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Ionic with ASP.NET core using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/ionic-with-aspnet-core-sample) the sample application, which demonstrates the rendering of dashboard available in your Bold BI server and followed by steps to create a new embedding application in the `Ionic` with `ASP.NET Core` on your own.

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation.  The `Getting Started` guide gives you enough information that you need to know before working on the sample.      

## How to run the sample
 
 1. Please [get](https://github.com/boldbi/ionic-with-aspnet-core-sample) the Ionic project.

 2. You need to set the following properties in the `home.service.ts` and the dashboard id in the `home.page.ts` files as follow.
    ![Ionic_properties](/static/assets/javascript/sample/images/ionic-properties.png#max-width=75%)
    ![Ionic_renderdashboard](/static/assets/javascript/sample/images/ionic-renderdashboard.png#max-width=75%)
  
    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
        <td align="left">apiHost</td>
        <td align="left">Java Servlet Core application would be run on http://localhost:61377/, which needs to be set as apiHost</td>
        </tr>
        <tr>
            <td align="left">environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use <code>cloud</code>, if Enterprise, you should use <code>enterprise</code>)</td>
        </tr>
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
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in the Administration page as mentioned in the next step.</td>
        </tr>    
    </tbody>
    </table>

 3. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/site-administration/embed-settings/) for more details.

 4. Run your Ionic application.

## How this sample works

 1. Based on the dashboardId provided in the `home.page.ts`, authorize the server URL by calling the GetEmbedDetails function as follows.
    ![Ionic_renderdashboard](/static/assets/javascript/sample/images/ionic-renderdashboard.png#max-width=75%)

 2. The SignatureUrl will be generated with the provided EmbedSecret key and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render using the `renderDashboard()` method available in the `home.page.ts`.

 3. In the `home.page.ts`, change the dashboard Id of the respective dashboard as you wish to embed.