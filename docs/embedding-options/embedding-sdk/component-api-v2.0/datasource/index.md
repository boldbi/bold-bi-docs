---
layout: post
title: Datasource API Reference – SDK Embedding | Bold BI Docs
description: Learn about the Datasource SDK APIs in the Bold BI Embed SDK to pass the server URL, datasource name, and authorization server details for embedding datasources inside your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, Datasource
---

# Bold BI Embedding SDK for Datasource

The Bold BI Embed SDK allows you to seamlessly integrate and visualize datasources published on your Bold BI server within your web applications. By specifying the **server URL**, **datasource Id**, **mode**, and **embed token**, you can securely embed and manage the datasource experience.

For more details, refer to the official documentation: [Embed Datasource](/embedding-options/embedding-sdk/embed-different-components/embed-datasource/).

For additional supported customization options in the Bold BI Embed SDK, refer to the [sample embed](https://samples.boldbi.com/embed/) for more details.

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var boldbiEmbedInstance = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      datasourceId: "<Datasource ID>",
      embedContainerId: "<Embed Container ID>",
      mode: BoldBI.Mode.DataSource,
      embedToken: "<Embed token generated from backend server>"
    });
    boldbiEmbedInstance.loadDatasource();
  }
</script>
```

In this section, the details of public APIs are provided along with code examples:

* [Members](/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-members/)
* [Events](/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-events/)