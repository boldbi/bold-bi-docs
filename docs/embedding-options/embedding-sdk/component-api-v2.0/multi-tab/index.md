---
layout: post
title: Programmatical Multi-Tab Dashboard API Reference | Bold BI Docs
description: Learn about the Multi-Tab Dashboard JavaScript APIs in the Bold BI Embed SDK to pass the server URL, dashboard IDs, and authorization server details for embedding multiple dashboards inside your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, Multi-Tab Dashboard
---

# Bold BI Embedding SDK for Multi-Tab Dashboard

The Bold BI Embed SDK enables you to visualize and interact with multiple dashboards within a single embedded view. By including the **server URL**, **dashboard IDs**, and **authorization server details** in your application, you can securely embed and manage the multi-tab dashboard experience.

For more details, refer to the official documentation: [Embed Multi-Tab Dashboard](/embedding-options/embedding-sdk/embed-different-components/embed-multi-tab-dashboard/).

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var boldbiEmbedInstance = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      dashboardIds: ["<Dashboard ID 1>", "<Dashboard ID 2>"],
      embedContainerId: "<Embed Container ID>",
      authorizationServer: {
        url: "<Authorization Server URL>"
      }
    });
    boldbiEmbedInstance.loadTabbedDashboards();
  }
</script>
```

In this section, the details of public APIs are provided along with code examples:
* [Members](/embedding-options/embedding-sdk/component-api-v2.0/multi-tab/multi-tab-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/multi-tab/multi-tab-methods/)
* [Events](/embedding-options/embedding-sdk/component-api-v2.0/multi-tab/multi-tab-events/)