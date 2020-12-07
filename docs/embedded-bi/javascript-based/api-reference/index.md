---
layout: post
title: API Reference – Embed SDK | Bold BI Documentation
description: Know about the JavaScript APIs in Embed SDK to pass server URL, dashboard path, authorization server details for embedding dashboard inside your application.
platform: bold-bi
documentation: UG
keywords: Bold BI,embedding,Dashboard
---

# Bold BI Embedding SDK

Bold BI Embed SDK allows you to visualize the dashboard that was published in Bold BI server by providing the server URL, dashboard path, and authorization server details inside your application. Refer this link [here](https://embed-sdk.boldbi.com/), for more supported customization in Bold BI Embed SDK.

**Syntax**

```js
var dashboard = BoldBI.create(options);
dashboard.loadDashboard();
```

**Example** 
  
```js   
<div id="container"></div> 
<script> 
     // Embed Dashboard 
     var dashboard = BoldBI.create({
          serverUrl: "http://localhost:51777/bi/site/site1",
          dashboardId: "755e99c7-f858-4058-958b-67577b283309",
          embedContainerId: "dashboard-container",// This should be the container id where you want to embed the dashboard
          embedType: BoldBI.EmbedType.Component,
          environment: BoldBI.Environment.Enterprise,
          height: "800px",
          width: "1200px",
          authorizationServer: {
          url: "http://example.come/authorize/server"
          },
          expirationTime: "100000",     
     });
     dashboard.loadDashboard();
</script>
```
    
**Requires**
     
* module:`jquery-1.10.2.min.js`
  
* module:`jquery.easing.1.3.min.js` 

* module:`jsrender.1.0.5.min.js` 

* module:`embed-js.min.js`

In this section, public API's details with code snippets are mentioned.

* [Methods](/embedded-bi/javascript-based/api-reference/methods/)
* [Members](/embedded-bi/javascript-based/api-reference/members/)
* [Events](/embedded-bi/javascript-based/api-reference/events/)