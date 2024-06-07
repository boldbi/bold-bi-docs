---
layout: post
title:  JavaScript Embedding with Embed SDK | Bold BI Docs
description: Study the overview of JavaScript-based embedding with Bold BI Embedded SDK. This embedding reduces the amount of code and effort needed to embed the dashboards.
platform: bold-bi
documentation: ug
---

# Overview of JavaScript based with Embedded SDK

You can use our Embedded SDK, which is a JavaScript library that enables you to embed your BoldBI dashboards in various applications such as ASP.NET MVC, ASP.NET Core, Angular, and React. This embedding reduces the amount of code and effort required to embed the dashboards and widgets.

## Workflow architecture
![JavaScriptBased](/static/assets/javascript/images/javascript-based.png)

1. The user requests the dashboard Embedded page in the client browser, and this action will initialize and run the component in the client browser.

2. The Authorization Server, which should be implemented in the embedding application, is called by the Embedded SDK from the client browser to collect the dashboard data and access token.

3. The Authorization Server will send the details received from the Embed SDK, along with user details, to the Bold BI server in order to obtain the access token and other dashboard details.

4. The Bold BI Server will validate the request from the Authorization Server and send back the user token and other dashboard details to the Authorization Server, which is implemented in the Embedding Application.

5. Once the details are received from the Bold BI Server, the Authorization Server will send back these details to the client's browser to start embedding the dashboard.

## Bold BI Server
The Bold BI Server is the server responsible for serving the dashboards. It consists of an Application Server/UI and a data service for processing data. It can be deployed in various environments, such as `customer infrastructure` or `Cloud`. 

## Customer Server
The Customer Server is simply an embedding application that functions as an Authorization Server. This application will make calls to the Bold BI Server as part of the embedding architecture.

> **NOTE:** Learn more about the authorized server at the following link:[Authorized Server Information](/security-configuration/authorize-server/).

## Key features  

* The JavaScript SDK includes a native client-side component for embedding Bold BI dashboards into your web application.

* Embed APIs are used for data view customization, including the ability to pass filters, apply themes, and more.

* The dashboard embedding is secured by restricting access to specific IP addresses.

* Dynamic connection string changes are performed for live mode connected data sources within the Embedded dashboard.

* Share app authorization with the Embedded dashboard by utilizing Single Sign-On (SSO).

