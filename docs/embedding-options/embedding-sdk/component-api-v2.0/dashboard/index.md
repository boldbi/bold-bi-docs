---
layout: post
title: API Reference – Viewer SDK Embedding | Bold BI Docs
description: Learn about the Viewer SDK APIs in the Bold BI Embed SDK to pass the server URL, dashboard path, and authorization server details for embedding dashboards into your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, Dashboard
---

# Bold BI Embedding SDK for Viewer

The Bold BI Embed SDK allows you to seamlessly integrate and visualize dashboards published on your Bold BI server within your web applications. By specifying the **server URL**, **dashboard ID**, and **embed token**, you can securely embed and display dashboards inside your application.

For more details, refer to the official documentation: [Embed Dashboard](/embedding-options/embedding-sdk/embed-viewer-dashboard/).

For more information on supported customization options in the Embed SDK, refer to the [sample embed](https://samples.boldbi.com/embed/).

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var dashboard = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      dashboardId: "<Dashboard ID>",
      embedContainerId: "<Embed Container ID>",
      embedToken: "<Embed token generated from the backend server>"
    });
    dashboard.loadDashboard();
  }
</script>
```


In this section, the details of public APIs are provided along with their code references:

* [Members](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-methods/)
* [Events](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-events/)
