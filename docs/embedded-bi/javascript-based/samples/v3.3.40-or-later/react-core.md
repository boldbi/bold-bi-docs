---
layout: post
title:  Embed SDK v3.3.40 React with ASP.NET Core Sample | Bold BI
description: Explore the React JS-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in React with ASP.NET Core using Embedded SDK

We have created the React and ASP.NET Core application for achieving this embedding. Here, the React app acts as a client and the Core app acts as a server. Using this environment, we could be able to list the dashboards and render it.  

> **NOTE:** The best way to get started would be reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide gives you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the React App with ASP.NET Core Application from [here](https://onpremise-demo.boldbi.com/getting-started/react-core-v3.3/sample.zip).    

2. Here, the React application act as a client, and the ASP.NET Core application act as a server since we need to set the following properties in the `DashboardListing.js` file as follows.
![Embed Properties In App Component](/static/assets/embedded/javascript/sample/images/react-prop.png)  
<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">siteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud`, if  Enterprise, you should use `onpremise`)</td>
    </tr>
    <tr>
        <td align="left">apiHost</td>
        <td align="left">ASP.NET Core application would be run on http://localhost:61377/, which needs to be set as `apiHost`</td>
    </tr>
    <tr>
        <td align="left">rootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">authorizationUrl</td>
        <td align="left">Url of the GetDetails action in ValuesController of the ASP.NET Core application</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to authorize the server</td>
    </tr>
    <tr>
        <td align="left">UserPassword</td>
        <td align="left">Password of the Admin in Bold BI, which would be used to get the dashboards list</td>
    </tr>
  </tbody>
</table>


3. In `EmbedProperties.cs` of the ASP.NET Core application, you need to set the RootUrl, SiteIdentifier, UserEmail, and EmbedSecret properties.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/react-core-prop.png)

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as shown below</td>
    </tr>
  </tbody>
</table>


4. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.    

5. Then, run your ASP.NET Core application and as well as the React App.  

## How this sample works

1. Based on the properties set on the `DashboardListing.js` file, we would call the GetDashboards Server API from the `componentDidMount()` function.    
![Embed Properties](/static/assets/embedded/javascript/sample/images/react-get-dashboards.png)  

2. For contacting the GetDashboards Server API, we would generate a user token by using the user email and password and then get the dashboard list.    

3. In the `DashboardListing.js` file, we have designed a page for listing dashboards on the left side and rendering dashboard. The retrieved dashboard list has been set to `items` using the `setState()` property.  
![Dashboard Listing](/static/assets/embedded/javascript/sample/images/react-dash-listing.png)   

4. By default, we have rendered the first dashboard from the list using the `renderDashboard()` method in the `DashboardListing.js` file. This render method is implemented with the Bold BI SDK component code.    
![Render Dashboard](/static/assets/embedded/javascript/sample/images/react-dash-render.png)  

5. Before rendering, we are calling the `authorizationUrl`, which redirects to the GetDetails action in HomeController, which generates the EmbedSignature using the embed secret provided in the `EmbedProperties.cs` of ASP.NET Core application.    
![Get Embed Details](/static/assets/embedded/javascript/sample/images/angular-get-details.png)  

6. These details will be sent to the Bold BI server and get validated there. Once the details are validated, the dashboard starts to render.  