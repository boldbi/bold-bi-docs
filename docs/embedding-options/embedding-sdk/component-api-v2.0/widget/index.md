---
layout: post
title: Widget API Reference – SDK Embedding | Bold BI Docs
description: Learn about the Widget SDK APIs in the Bold BI Embed SDK to pass the server URL, dashboard ID, and embed token for embedding widgets inside your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, Widget
---

# Bold BI Embedding SDK for Widget

The Bold BI Embed SDK enables you to visualize a specific widget from a dashboard published on your Bold BI server by including the **server URL**, **Widget ID**, **dashboard ID**, and **embed token** in your application.  

For more details, refer to the official documentation: [Embed Widget](/embedding-options/embedding-sdk/embed-different-components/embed-dashboard-widget/).

For additional supported customization options in the Bold BI Embed SDK, refer to the [sample embed](https://samples.boldbi.com/embed/) for more details.

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var boldbiEmbedInstance = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      dashboardId: "<Dashboard ID>",
      embedContainerId: "<Embed Container ID>",
      embedToken: "<Embed token generated from backend server>"
    });
    boldbiEmbedInstance.loadWidget("<Widget ID>");
  }
</script>
```

In this section, the details of public APIs are provided along with code examples:

* [Members](/embedding-options/embedding-sdk/component-api-v2.0/widget/widget-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/widget/widget-methods/)
* [Events](/embedding-options/embedding-sdk/component-api-v2.0/widget/widget-events/)