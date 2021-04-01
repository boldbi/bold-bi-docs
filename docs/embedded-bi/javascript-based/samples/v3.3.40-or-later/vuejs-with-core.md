---
layout: post
title:  Building dashboard app with ASP.NET Core and Vue | Bold BI Docs
description: Explore the dashboard embedded web application built with ASP.NET Core and Vue.js supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Building dashboard app with ASP.NET Core and Vue

We have created the sample application for VueJS with ASP.NET Core for embedding the Bold BI dashboard. Here, the VueJS app acts as a client and the ASP.NET Core app acts as a server. Using this environment, we are able to render the dashboard on it.  

> **NOTE:** The best way to get started would be to read the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation. It will give you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the VueJS with ASP.NET Core Application from this [link](https://onpremise-demo.boldbi.com/getting-started/vuejs-core-v4.1/sample.zip).    

2. Here, the VueJS application act as a client, and the ASP.NET Core application act as a server since we need to set the following properties in the `App.vue` file in the VueJS app as follows.
![Embed Properties](/static/assets/embedded/javascript/sample/images/vuejs-embed-props.png)  
<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">siteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1.` For Bold BI Cloud, it should be an empty string.</td>
    </tr>
    <tr>
        <td align="left">rootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">authorizationUrl</td>
        <td align="left">Url of the GetDetails action in the Go application(http://localhost:8086/getDetails). Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/)</td>
    </tr>
    <tr>
        <td align="left">environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud`, if  Enterprise, you should use `onpremise`)</td>
    </tr>
    <tr>
        <td align="left">DashboardId</td>
        <td align="left">Set the item id of the dashboard to embed from BI server. </td>
    </tr>
  </tbody>
</table>


3. You could get the item id of the dashboard from the Bold BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

4. In `EmbedProperties.cs` of the ASP.NET Core application, you need to set the UserEmail and EmbedSecret properties.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/vuejs-core-prop.png)

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard details from the BI server</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from the Embed tab by enabling the `Enable embed authentication` in the Administration page as shown below</td>
    </tr>
  </tbody>
</table>


5. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.    

6. Then, run your ASP.NET application and as well as the VueJS App.  

## How this sample works

1. Based on the `dashboardId` provided in the `App.vue,` we would authorize the server by calling the GetEmbedDetails function using the `AuthorizeURL(http://localhost:61377/getDetails)` with the provided EmbedProperties values.  
![Get Embed Details](/static/assets/embedded/javascript/sample/images/vuejs-go-authorize.png)

2. In the above authorization, we have generated a SignatureURL with the provided EmbedSecret key and embed details, which can be validated in the Bold BI Server API and returns the token. Based on the returned token, the dashboard will be started to render.  
![Get Signature Url](/static/assets/embedded/javascript/sample/images/vuejs-go-signature.png)

3. In `App.vue`, you can change the dashboard Id of the respective dashboard as you wish to embed.  
![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/vuejs-core-dashboard.png)  