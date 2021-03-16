---
layout: post
title:  Embed SDK v3.3.40 Angular Framework Sample | Bold BI Docs
description: Explore the Angular JS-based sample embedded in ASP.NET Core application supported since v3.3.40 of Bold BI.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Angular with ASP.NET Core using Embedded SDK

We have created the Angular and ASP.NET Core application for achieving this embedding. Here, the Angular app acts as a client and the Core app acts as a server. Using this environment, we could be able to list the dashboards and render them on it.  

> **NOTE:** The best way to get started would be  reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide gives you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the Angular App with ASP.NET Core Application from [here](https://onpremise-demo.boldbi.com/getting-started/angular-v3.3/sample.zip).    

2. Here, the Angular application act as a client, and the ASP.NET Core application act as a server since we need to set the following properties in the `app.component.ts` file as follows.
![Embed Properties in App Component](/static/assets/embedded/javascript/sample/images/angular-app-comp.png)
<meta charset="utf-8"/>
<table>
  <tbody>
      <tr>
        <td align="left">apiHost</td>
        <td align="left">ASP.NET Core application would be run on http://localhost:61377/, which needs to be set as `apiHost`</td>
    </tr>
    <tr>
        <td align="left">environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud`, if  Enterprise, you should use `enterprise`)</td>
    </tr>
    <tr>
        <td align="left">rootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">siteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">authorizationUrl</td>
        <td align="left">Url of the GetDetails action in ValuesController of the ASP.NET Core application</td>
    </tr>
    <tr>
        <td align="left">getDashboardsUrl</td>
        <td align="left">Url of the GetDashboards action in ValuesController of the ASP.NET Core application</td>
    </tr>
  </tbody>
</table>


3. In `EmbedProperties.cs` of the ASP.NET Core application, you need to set the RootUrl, SiteIdentifier, UserEmail, UserPassword, and EmbedSecret properties.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/prop-angular.png)
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
        <td align="left">UserPassword</td>
        <td align="left">Password of the Admin in Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as shown below</td>
    </tr>
  </tbody>
</table>


4. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/) for more details.

5. Then, run your ASP.NET Core application as well as the Angular App.  

## How this sample works

1. Based on the properties set on the `app.component.ts` file, we would call the GetDashboards() method from the `ngOnInit()` in the `dashboard-listing.component.ts`.  
![Get Dashboards](/static/assets/embedded/javascript/sample/images/angular-get-dashboards.png)  

2. Above the GetDashboards() method would call the GetDashboards action in HomeController of the ASP.NET Core Application. Then, it would generate a user token and get the dashboard list.  
![Get Dashboards Controller](/static/assets/embedded/javascript/sample/images/angular-home-controller.png)  

3. In the `dashboard-listing.component.html` file, we have designed a page for listing the dashboards on the left side and rendering the dashboard. The retrieved dashboard list has been sent to the `dashboardsList` property.  
![Dashboard Listing](/static/assets/embedded/javascript/sample/images/angular-dash-listing.png)  

4. By default, we have rendered the first dashboard from the list using the `renderDashboard()` method in the `dashboards-listing.component.ts` file. This render method implemented with the Bold BI SDK component code.  
![Dashboard Rendering](/static/assets/embedded/javascript/sample/images/angular-dash-render.png) 

5. Before rendering, we are calling the `authorizationUrl`, which redirects to GetDetails action in the HomeController, which generates the EmbedSignature using the embed secret provided in the `EmbedProperties.cs` of ASP.NET Core application.  
![Get Embed Details](/static/assets/embedded/javascript/sample/images/angular-get-details.png)  

6. These details will be sent to the Bold BI server, and get validated there. Once details are validated, the dashboard starts to render.  