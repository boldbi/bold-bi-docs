---
layout: post
title:  Embed Dashboard in Java Servlets-based Application | Bold BI Docs
description: Explore the steps to embed a Bold BI dashboard in Java Servlets-based application with a demo sample walkthrough.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Java Servlet using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/java-servlet-sample) the sample application, which demonstrates the rendering of the dashboard available on your Bold BI server. This is followed by steps to create a new embedding application in `Java Servlet` on your own. 

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.     

## How to run the sample

 1. Please [get](https://github.com/boldbi/java-servlet-sample) the Java Servlet project from this link.

 2. You need to set the embed property details in the `index.jsp` and `BoldBI.java`.
    ![Embed Properties in Index](/static/assets/javascript/sample/images/java-index-props.png)
    ![Embed Properties in API](/static/assets/javascript/sample/images/java-boldbi-props.png)  
    
    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use <code>cloud</code>, if  Enterprise, you should use <code>onpremise</code>)</td>
    </tr>
    <tr>
        <td align="left">DashboardId</td>
        <td align="left">Set the item id of the dashboard to embed from BI server. </td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard details from the BI server</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling <code>Enable embed authentication</code> in Administration page as shown below</td>
    </tr>
    </tbody>
    </table>


 3. You can obtain your Embed Secret key from the administrator settings section. Please refer to this [link](/site-administration/embed-settings/) for more details.    

 4. Execute your Java Servlet project.

## How this sample works

 1. To authorize the server, call the `doPost` function using the `AuthorizeURL(http://localhost:8080/BoldBIEmbed/BoldBI.do)` with the provided EmbedProperties values, based on the `dashboardId` provided in the `index.jsp`.
    ![Get Embed Details](/static/assets/javascript/sample/images/java-authorize.png)

 2. In the previous authorization, generate the SignatureURL using the provided EmbedSecret key and embed details. This SignatureURL can be validated in the Bold BI Server API and will return a token. Based on the returned token, the dashboard will begin rendering in the `index.jsp`.

 3. In the `index.jsp`, change the dashboard ID of the respective dashboard according to your requirement.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/java-dashboard.png)  