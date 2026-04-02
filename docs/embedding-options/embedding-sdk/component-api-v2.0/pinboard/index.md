---
layout: post
title: Pinboard API Reference – SDK Embedding | Bold BI Docs
description: Learn about the Pinboard SDK APIs in the Bold BI Embed SDK to pass the server URL, pinboard name, and embed token for embedding pinboards inside your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, Pinboard
---

# Bold BI Embedding SDK for Pinboard

The Bold BI Embed SDK allows you to seamlessly integrate and visualize pinboards published on your Bold BI server within your web applications. By specifying the **server URL**, **pinboard name**, and **embed token**, you can securely embed and manage the pinboard experience.

For more details, refer to the official documentation: [Embed Pinboard](/embedding-options/embedding-sdk/embed-different-components/embed-pinboard/).

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var boldbiEmbedInstance = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      pinboardName: "<Pinboard Name>",
      embedContainerId: "<Embed Container ID>",
      embedToken: "<Embed token generated from backend server>"
    });
    boldbiEmbedInstance.loadPinboard();
  }
</script>
```

In this section, the details of public APIs are provided along with code examples:

* [Members](/embedding-options/embedding-sdk/component-api-v2.0/pinboard/pinboard-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/pinboard/pinboard-methods/)
* [Events](/embedding-options/embedding-sdk/component-api-v2.0/pinboard/pinboard-events/)