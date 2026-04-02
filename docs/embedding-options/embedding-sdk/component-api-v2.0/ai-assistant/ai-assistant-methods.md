---
layout: post
title: API Reference – AI Assistant Methods | Bold BI Docs
description: Learn how to use the SDK API to embed and render the AI Assistant in Bold BI deployments on your server.
platform: bold-bi
documentation: UG
---

# AI Assistant Methods

## loadAIAssistant()

The `loadAIAssistant()` method renders the **AI Assistant** within a Bold BI instance. It should be called after creating the instance using the `BoldBI.create()` method.

### **Example**

```js
var dashboard = BoldBI.create({
    serverUrl: "<Bold BI Server URL>",
    embedContainerId: "<Embed Container ID>", // The container ID where the AI Assistant will be embedded
    mode: BoldBI.Mode.AIAssistant,// Set mode to AI Assistant
    embedToken: "<Embed token generated from backend server>"
});

dashboard.loadAIAssistant();
```

> **NOTE:** 
> The loadAIAssistant() method is supported from version 14.1 and above.
> Ensure you use the CDN corresponding to v14.1 or later when embedding the AI Assistant.