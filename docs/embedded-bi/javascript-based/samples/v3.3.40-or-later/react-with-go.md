---
layout: post
title:  Embedded SDK v3.3.40 React with Go Sample | Bold BI Docs
description: Explore the React JS-based embedding with sample application in Go supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with Go using Embedded SDK

We have created the React and Go application for achieving this embedding. Here, the React app acts as a client and the Go app acts as a server. Using this environment, we could be able to render the dashboard on it.  

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript/getting-started/) section of the documentation to start using first. The [Getting Started](/embedded-bi/javascript/getting-started/) guide gives you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the React with Go Application from [here](https://embed-sdk.boldbi.com/getting-started/react-go-v3.3/sample.zip).    

2. Here, the React application act as a client and the Go application act as a server since we need to set the following properties in the `DashboardListing.js` file in the react app as follows.
![Embed Properties In App Component](/static/assets/embedded/javascript/sample/images/react-go-props.png)  
<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">siteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
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


3. You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.  
![Get Dashboard Id](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

4. In `main.go` of the Go application, you need to set the UserEmail and EmbedSecret properties.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/react-go-main.png)

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard details from BI server</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as shown below</td>
    </tr>
  </tbody>
</table>


5. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.    

6. Then, run your Go application and as well as the React App.  

## How this sample works

1. Based on the `dashboardId` provided in the `DashboardListing.js`, we would authorize the server by calling the GetEmbedDetails function using the `AuthorizeURL(http://localhost:8086/getDetails)` with the provided EmbedProperties values.  
![Get Embed Details](/static/assets/embedded/javascript/sample/images/react-go-authorize.png)

2. In the above authorization, we have generated SignatureUrl with the provided EmbedSecret key and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render.  
![Get Signature Url](/static/assets/embedded/javascript/sample/images/react-go-signature.png)

3. In `DashboardListing.js`, You can change the dashboard Id of the respective dashboard as you wish to embed.  
![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/react-go-dashboard.png)  