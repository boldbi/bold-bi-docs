---
layout: post
title:  Building dashboard app with Go and Vue.js | Bold BI Docs
description: Explore the dashboard embedded web application built with Go and Vue.js supported since v4.1.36 of Bold BI.
platform: bold-bi
documentation: ug
---

# Building dashboard app with Go and Vue.js

We have created the sample application for VueJS along with Go for embedding the Bold BI dashboard. Here, the VueJS app acts as a client and the Go app acts as a server. Using this environment, we are able to render the dashboard on it.  

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation. It will give you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the VueJS with Go Application from this [link](https://onpremise-demo.boldbi.com/getting-started/vuejs-go-v4.1/sample.zip).    

2. Here, the VueJS application act as a client, and the Go application act as a server since we need to set the following properties in the `App.vue` file in the VueJS app as follows.
![Embed Properties in VueJS](/static/assets/embedded/javascript/sample/images/vuejs-go-props.png)  
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
        <td align="left">Url of the GetDetails action in the Go application(http://localhost:8086/getDetails). Learn more about authorize server in this [link](/embedded-bi/javascript-based/authorize-server/)</td>
    </tr>
    <tr>
        <td align="left">environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud,` if  Enterprise, you should use `on-premise)</td>
    </tr>
    <tr>
        <td align="left">DashboardId</td>
        <td align="left">Set the item id of the dashboard to embed from the BI server.</td>
    </tr>
  </tbody>
</table>


3. You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

4. In `main.go` of the Go application, you need to set the UserEmail and EmbedSecret properties.  
![Embed Properties in GO](/static/assets/embedded/javascript/sample/images/react-go-main.png)

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

6. Then, run your Go application and as well as the VueJS App.  

## How this sample works

1. Based on the `dashboardId` provided in the `App.vue,` we would authorize the server by calling the GetEmbedDetails function using the `AuthorizeURL(http://localhost:8086/getDetails)` with the provided EmbedProperties values.  
![Get Embed Details](/static/assets/embedded/javascript/sample/images/react-go-authorize.png)

2. In the above authorization, we have generated a SignatureURL with the provided EmbedSecret key and embed details which can be validated in the Bold BI Server API and returns the token. Based on the returned token, the dashboard will be started to render.  
![Get Signature Url](/static/assets/embedded/javascript/sample/images/react-go-signature.png)

3. In `App.vue`, you can change the dashboard Id of the respective dashboard based on your requirement.  
![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/vuejs-go-dashboard.png)  