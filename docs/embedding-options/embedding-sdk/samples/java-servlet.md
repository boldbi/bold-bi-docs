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

## Prerequisites

 * [Eclipse IDE](https://www.eclipse.org/downloads/)
 * Apache Tomcat

## How to run the sample

1. Please [get](https://github.com/boldbi/java-servlet-sample) the Java Servlet project from this link.

2. Please ensure that you have enabled embed authentication on the `embed settings` settings page. If it is not currently enabled, please refer to the provided image or detailed [instructions](/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](/static/assets/javascript/sample/images/embed-settings.png)

3. To download the `embedConfig.json` file, please follow this [link](/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the image below for visual guidance.

   ![EmbedSettings image](/static/assets/javascript/sample/images/embed-settings-download.png)
   ![EmbedConfig Properties](/static/assets/javascript/sample/images/prop-core.png)
 
4. Please copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/java-servlet-sample/tree/master/WebContent) within the application. Make sure that you have placed it correctly in the application, as shown in the image.

   ![EmbedConfig image](/static/assets/javascript/sample/images/servlet-embed-config.png)

    <meta charset="utf-8"/>
       <table>
       <tbody>
       <tr>
          <td align="left">ServerUrl</td>
          <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, https://demo.boldbi.com/bi)</td>
       </tr>
       <tr>
          <td align="left">SiteIdentifier</td>
          <td align="left">For the Bold BI Enterprise edition, it should be like site/site1. For Bold BI Cloud, it should be an empty string.</td>
       </tr>
       <tr>
          <td align="left">UserEmail</td>
          <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
       </tr>
       <tr>
          <td align="left">EmbedSecret</td>
          <td align="left">Get your EmbedSecret key from the Embed tab by enabling the <code>Enable embed authentication</code> in the <a href='/site-administration/embed-settings/'>Administration page</a> </td>
       </tr>
       <tr>
          <td align="left">Environment</td>
          <td align="left">Your Bold BI application environment. (If it is a cloud analytics server, use `BoldBI.Environment.Cloud`; if it is your server, use `BoldBI.Environment.Enterprise`)</td>
       </tr>
       <tr>
          <td align="left">DashboardId</td>
          <td align="left">Item ID of the dashboard to be embedded in your application.</td>
       </tr>
       <tr>
          <td align="left">ExpirationTime</td>
          <td align="left">Token expiration time. (In the EmbedConfig.json file, the default token expiration time is 10000 seconds)</td>
       </tr>
       </tbody>
       </table>

 5. Import the Java Servlet project in Eclipse.
 
 6. Run the project by Right‑clicking it then `Run As → Run on Server`.

## How this sample works

 1. The `embedSample` method will be invoked based on the configured embedConfig values in the `index.jsp` file.
    ![render dashboard](/static/assets/javascript/sample/images/java-dashboard.png)

 2. Before rendering, call the `BoldBI.do`, which redirects to the token generation action in the `BoldBI.java`. This action generates the access token using the provided `embedDetails`.
    ![Get Embed Details](/static/assets/javascript/sample/images/java-authorize.png)  

 3. Once the token is generated, it will be returned to the `index.jsp` file and the dashboard will start to render it.