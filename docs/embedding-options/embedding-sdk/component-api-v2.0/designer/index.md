---
layout: post
title: Designer API Reference – SDK Embedding | Bold BI Docs
description: Learn about the Designer SDK APIs in the Bold BI Embed SDK to pass the server URL, dashboard ID, and embed token for embedding the dashboard designer inside your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, Dashboard
---

# Bold BI Embedding SDK for Designer

The Bold BI Embed SDK allows you to seamlessly integrate and visualize dashboards in design mode from your Bold BI server within your web applications. By specifying the **server URL**, **dashboard ID**, **mode**, and **embed token**, you can securely embed the dashboard designer experience.

For more details, refer to the official documentation: [Embed Designer Dashboard](/embedding-options/embedding-sdk/embed-designer-dashboard/).

For additional supported customization options in the Bold BI Embed SDK, refer to the [sample embed](https://samples.boldbi.com/embed/) for more details.

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var dashboard = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      dashboardId: "<Dashboard ID>",
      mode: BoldBI.Mode.Design,
      embedContainerId: "<Embed Container ID>",
      embedToken: "<Embed token generated from backend server>"
    });
    dashboard.loadDesigner();
  }
</script>
```

In this section, the details of public APIs are provided along with code examples:

* [Members](/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-methods/)
* [Events](/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-events/)