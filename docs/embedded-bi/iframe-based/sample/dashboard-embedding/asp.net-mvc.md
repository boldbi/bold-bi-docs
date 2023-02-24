---
layout: post
title: Dashboard Embedding in ASP.NET MVC Application | Bold BI Docs
description: Learn how to embed the dashboard in an ASP.NET MVC application using iFrame and learn the code to view the particular dashboard with different data connections.
platform: bold-bi
documentation: ug
---

# Dashboard Embedding in ASP.NET MVC Sample
This section explains how to embed the Bold BI dashboard into an ASP.NET MVC sample application by providing the dashboard URL.

## Prerequisites
You need to follow these steps before running the given sample:  
*	Download the sample from [here](https://onpremise-demo.boldbi.com/getting-started/iframe/asp-net-mvc/sample.zip).
*   For the Cloud, You should have an existing Bold BI Cloud application.  
*	For On-Premise, You should have any of the following environment:
     * Install the latest Bold BI Enterprise build.
     * You should have Bold BI deployed on a Linux server.
     * You should have Bold BI running on Kubernetes.
     * You should have Bold BI running on Docker.   

## How to run the sample

1. You need to set the following properties in `EmbedProperties.cs` file as follows.  
    ![Embed Properties](/static/assets/embedded/iFrame-based/sample/images/EmbedProperties_MVC.png#max-width=100%)

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
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling <code>Enable embed authentication</code> in Administration page as mentioned in next step. </td>
        </tr>    
    </tbody>
    </table>


2. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/), for more details.  

3. In the `Index.cshtml` file, set the URL of the dashboard in the variable  `dashboardUrl` that you want to render.
    ![Index.cshtml](/static/assets/embedded/iFrame-based/sample/images/index_MVC.png#max-width=100%)    

4. To get the dashboard URL, click on the `Dashboard name` in the dashboard list page. The dashboard will open in a new window when you click it. In that window, you can get the dashboard URL by copying the link up to the question mark, as shown in the following image.
    ![DashboardUrl](/static/assets/embedded/iFrame-based/sample/images/dashboardUrl.png#max-width=85%)

5. Then, run your MVC application.
