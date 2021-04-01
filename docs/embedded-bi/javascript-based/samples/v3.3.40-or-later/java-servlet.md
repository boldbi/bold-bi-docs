---
layout: post
title:  Building dashboard app with Java Servlets | Bold BI Docs
description: Explore the dashboard embedded web application built with Java Servlets supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Building dashboard app with Java Servlets

We have created the sample java application along with Javascript to embed the Bold BI Dashboard. Here, we could set the sever and dashboard details as the embed details then the dashboard will be rendered after passing the authorization.  

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation. It will give you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the Java Servlet project from this [link](https://onpremise-demo.boldbi.com/getting-started/java-v4.1/sample.zip).    

2. You need to set your embed property details in the `index.jsp` and `BoldBI.java.`
![Embed Properties in Index](/static/assets/embedded/javascript/sample/images/java-index-props.png)
![Embed Properties in API](/static/assets/embedded/javascript/sample/images/java-boldbi-props.png)  
<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">AuthorizationUrl</td>
        <td align="left">Url of the GetDetails action in the Go application(http://localhost:8086/getDetails). Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/)</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud`, if  Enterprise, you should use `onpremise`)</td>
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
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as shown below</td>
    </tr>
  </tbody>
</table>


3. You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

4. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.    

5. Then, run your Java Servlet project.  

## How this sample works

1. Based on the `dashboardId` provided in the `index.jsp`, we would authorize the server by calling the `doPost` function using the `AuthorizeURL(http://localhost:8080/BoldBIEmbed/BoldBI.do)` with the provided EmbedProperties values.  
![Get Embed Details](/static/assets/embedded/javascript/sample/images/java-authorize.png)

2. In the above authorization, we have generated the SignatureURL with the provided EmbedSecret key and embed details which can be validated in the Bold BI Server API and returns the token. Based on the returned token, the dashboard will be started to render in `index.jsp`.

3. In `index.jsp`, you can change the dashboard Id of the respective dashboard based on your requirement.
![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/java-dashboard.png)  