---
layout: post
title:  JavaScript Embedding with Embed SDK | Bold BI Docs
description: Study the overview of JavaScript-based embedding with Bold BI Embedded SDK. This embedding reduces the amount of code and effort needed to embed the dashboards.
platform: bold-bi
documentation: ug

---

# Overview of JavaScript based with Embedded SDK

You can use our Embedded SDK, which is a JavaScript library that enables you to embed your BoldBI dashboards in your applications, which may be ASP.NET MVC application, ASP.NET Core application, Angular, and React application. This embedding reduce the amount of code and effort required to embed the dashboards and widgets.

## Workflow architecture
![JavaScriptBased](/static/assets/javascript/images/javascript-based.png)

1. User request the dashboard Embedded page in the client browser, and this will initialize and run the component in the client browser.

2. From the client browser, Embedded SDK calls the Authorization Server (this should be implemented in embedding application) for collecting the dashboard data and access token.

3. The Authorization Server will send the details received from the Embed SDK along with user details to Bold BI server to get the access token and other dashboard details.

4. Bold BI Server will validate the request from Authorization Server, and send back the user token and other dashboard details to the Authorization Server implemented in the Embedding Application.

5. Once details are received from Bold BI Server, the Authorization Server will sent back this details to client browser to start embedding the dashboard.

## Bold BI Server
Bold BI Server is the server that serves the dashboards. It includes an Application Server/UI and a data service for processing data. It can be deployed to any environment like `customer infrastructure` or `Cloud`. 

## Customer Server
Customer Server is nothing but an embedding application which act as an Authorization Server. This application will be calling into the Bold BI Server as part of the embedding architecture. 

> **NOTE:** Know more about authorize server [here](/security-configuration/authorize-server/).

## Key features  

* JavaScript SDK with native client-side component to embed Bold BI dashboard in your web application.

* Embed APIs for data view customization such as, passing filters, theming, and more.

* Secured dashboard embedding using the restricted access to IP addresses.

* Dynamically change connection string for live mode connected data sources in Embedded dashboard.

* Share app authorization with Embedded dashboard using the Single Sign-On (SSO).

