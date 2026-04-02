---
layout: post
title: AI Assistant API Reference – SDK Embedding | Bold BI Docs
description: Learn about the AI Assistant SDK APIs in the Bold BI Embed SDK to pass necessary details for embedding the AI Assistant into your application.
platform: bold-bi
documentation: ug
keywords: Bold BI, embedding, AI Assistant
---

# Bold BI Embedding SDK for AI Assistant

The Bold BI Embed SDK enables you to render the **AI Assistant** by specifying the **server URL**, **mode** and **embed token** within your application.

For more details, refer to the official documentation: [Embed AI Assistant](/embedding-options/embedding-sdk/embed-different-components/embed-ai-assistant/).

## Syntax and Example

```html
<div id="embed_container"></div>
<script>
  function embedSample() {
    var boldbiEmbedInstance = BoldBI.create({
      serverUrl: "<Bold BI Server URL>",
      mode: BoldBI.Mode.AIAssistant,
      embedContainerId: "<Embed Container Id>",
      embedToken: "<Embed token generated from the backend server>"
    });
    boldbiEmbedInstance.loadAIAssistant();
  }
</script>
```

In this section, the details of public APIs are provided along with their code references:

* [Members](/embedding-options/embedding-sdk/component-api-v2.0/ai-assistant/ai-assistant-members/)
* [Methods](/embedding-options/embedding-sdk/component-api-v2.0/ai-assistant/ai-assistant-methods/)