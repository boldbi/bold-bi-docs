---
layout: post
title: API Reference – JavaScript Embedding | Bold BI Documentation
description: Know about the JavaScript APIs in Embed SDK to pass server URL, dashboard path, authorization server details for embedding dashboard inside your application.
platform: bold-bi
documentation: UG
keywords: Bold BI,embedding,Dashboard
---

# Bold BI Embedding SDK

The Bold BI Embed SDK enables you to visualize the dashboard published on the Bold BI server by including the server URL, dashboard path, and authorization server details in your application. For additional supported customization options in the Bold BI Embed SDK, please refer to the [sample embed](https://samples.boldbi.com/embed/) for more details.

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
          authorizationServer: {
          url: "http://example.come/authorize/server"
          }   
     });
     dashboard.loadDashboard();
</script>
```
    
**Requires**
     

* module:`boldbi-embed.js`

In this section, the details of public APIs are mentioned along with code snippets. 

* [Members](/embedding-options/embedding-sdk/embedding-api-reference/members/)
* [Methods](/embedding-options/embedding-sdk/embedding-api-reference/methods/)
* [Events](/embedding-options/embedding-sdk/embedding-api-reference/events/)