---
layout: post
title:  Embed SDK with ASP.NET Core and Angular | Bold BI Learning
description: Find Angular with ASP.NET Core sample for embedding Bold BI. List the dashboard and render in app with Angular app as client and Core app as server. 
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Angular with ASP.NET Core using Embedded SDK

We have created Angular and ASP.NET Core application for achieving this embedding. Here Angular app acts as Client and Core app acts as Server. Using this environment we could able to listing the dashboards and render on it.  

> **NOTE:**  The best way to get started would be to read the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation to start using first. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide gives just enough information that you need to know before working on the sample.    

## How to run the sample

1. Please download the Angular App with ASP.NET Core Application from [here](https://onpremise-demo.boldbi.com/getting-started/angular/sample.zip).    

2. Here, Angular application act as Client and ASP.NET Core application act as Server. Since we need to set the following properties in `app.component.ts` file as below.
![AppComponent](/static/assets/embedded/javascript/sample/images/angular-app-comp.png)  

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


3. In `EmbedProperties.cs` of the ASP.NET Core application, you need to set RootUrl, SiteIdentifier, UserEmail, UserPassword and EmbedSecret properties.  
![Properties](/static/assets/embedded/javascript/sample/images/angular-properties.png)

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


4. You could get your Embed Secret key from administrator setting section. Please refer this [link](/embedded-bi/site-administration/embed-settings/) for more details.    

5. Then run your ASP.NET Core application and as well as the Angular App.  

## How this sample works

1. Based on the properties set on `app.component.ts` file, we would call the `GetDashboards()` method from `ngOnInit()` in `dashboard-listing.component.ts`.  
![Properties](/static/assets/embedded/javascript/sample/images/angular-get-dashboards.png)  

2. Above `GetDashboards()` method would call the GetDashboards action in HomeController of the ASP.NET Core Application. Then it would generate user token and get the dashboard list.  
![Properties](/static/assets/embedded/javascript/sample/images/angular-home-controller.png)  

3. In `dashboard-listing.component.html` file, we have designed page for listing dashboards at left side and rendering dashboard. Retrieved dashboard list has been sent to `dashboardsList` property.  
![Properties](/static/assets/embedded/javascript/sample/images/angular-dash-listing.png)  

4. By default, we have rendered the first dashboard from list using the `renderDashboard()` method in the `dashboards-listing.component.ts` file. This render method implemented with Bold BI SDK component code.  
![Rendering](/static/assets/embedded/javascript/sample/images/angular-dash-render.png) 

5. Before rendering, we are calling `authorizationUrl`, which redirects to GetDetails action in HomeController, which generate the EmbedSignature using embed secret provided in `EmbedProperties.cs` in ASP.NET Core application.  
![Rendering](/static/assets/embedded/javascript/sample/images/angular-get-details.png)  

6. This details will be sent to Bold BI server, and get validated there. Once details are validated, the dashboard starts to render.  