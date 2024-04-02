---
layout: post
title:  Embed SDK with ASP.NET Core and Angular | Bold BI Learning
description: Find Angular with ASP.NET Core sample for embedding Bold BI. List the dashboard and render in app with Angular app as client and Core app as server. 
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in Angular with ASP.NET Core using Embedded SDK

We have created an Angular and ASP.NET Core application to achieve this embedding. In this setup, the Angular app serves as the client while the Core app serves as the server. With this environment, we are able to list the dashboards and render them on it. 

> **NOTE:**  The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The [Getting Started](/getting-started/embedding-in-your-application/) guide provides just enough information that you need to know before working on the sample.

## How to run the sample

1. Please download the Angular App with ASP.NET Core Application from [here](https://github.com/boldbi/samples/tree/master/v3.2.16/angular).

2. Here, the Angular application acts as the client and the ASP.NET Core application acts as the server. We need to set the following properties in the `app.component.ts` file as follows.
![AppComponent](/static/assets/javascript/sample/images/angular-app-comp.png)  

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


3. In the ASP.NET Core application, it is necessary to set the RootUrl, SiteIdentifier, UserEmail, UserPassword, and EmbedSecret properties in `EmbedProperties.cs`. 
![Properties](/static/assets/javascript/sample/images/angular-properties.png)

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


4. You can obtain your Embed Secret key from the administrator settings section. Please refer to this [link](/site-administration/embed-settings/) for more details.   

5. Then, run your ASP.NET Core application as well as the Angular App. 

## How this sample works

1. Based on the properties set in the `app.component.ts` file, we would call the `GetDashboards()` method from the `ngOnInit()` function in `dashboard-listing.component.ts`.  
![Properties](/static/assets/javascript/sample/images/angular-get-dashboards.png)  

2. The `GetDashboards()` method above calls the GetDashboards action in the HomeController of the ASP.NET Core Application. After that, it generates a user token and retrieves the dashboard list. 
![Properties](/static/assets/javascript/sample/images/angular-home-controller.png)  

3. In the `dashboard-listing.component.html` file, we have designed a page for listing dashboards on the left side and rendering the dashboard. The retrieved dashboard list has been sent to the `dashboardsList` property.  
![Properties](/static/assets/javascript/sample/images/angular-dash-listing.png)  

4. By default, we have rendered the first dashboard from the list using the `renderDashboard()` method in the `dashboards-listing.component.ts` file. This rendering method is implemented with the Bold BI SDK component code.
![Rendering](/static/assets/javascript/sample/images/angular-dash-render.png) 

5. Before rendering, we call `authorizationUrl`, which redirects to the GetDetails action in the HomeController. This action generates the EmbedSignature using the embed secret provided in `EmbedProperties.cs` in the ASP.NET Core application. 
![Rendering](/static/assets/javascript/sample/images/angular-get-details.png)  

6. These details will be sent to the Bold BI server and validated there. Once the details are validated, the dashboard will start to render.  