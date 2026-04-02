---
layout: post
title: Bold BI Pinboard dashboard - SDK Based Embedding | Bold BI Docs
description: Learn how to embed Bold BI Pinboards seamlessly into your business application using the SDK to enhance data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug
---
# Embed a Pinboard Using an Embed Token

You can view curated insights and visuals in place of the pinboard based on the user permissions.

## Prerequisites

Before you begin, ensure the following:
<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">You have learned how to generate an <a href="/embedding-options/embedding-sdk/token-generation/">Embed Authorization Token</a>.</li>
  <li style="margin-top: 15px; line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>.The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

## Steps to Embed the Pinboard

<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN).</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the Pinboard will load.</li>
</ul>

```js
  <body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "<Bold BI Server URL>",
                pinboardName:"<Pinboard Name>",
                embedContainerId: "<Embed Container Id>",
                embedToken: "<Embed token generated from backend server>"
            });
            boldbiEmbedInstance.loadPinboard();
        }
    </script>
</body>
```

## Supported Authentication

* [Embed Token (v14)](/embedding-options/embedding-sdk/token-generation/)
* [Authorization Server URL](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/)
* [API Key](/embedding-options/embedding-sdk/authorization-options/api-key-authentication/) 

>**Note:** For more information on pinboard members, methods, and events, refer to this [link](/embedding-options/embedding-sdk/component-api-v2.0/pinboard/)