---
layout: post
title: Bold BI AI Assistant - SDK Embedding | Bold BI Docs
description: Learn how to seamlessly embed the Bold BI AI Assistant into your business application using the SDK to enhance data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug

---
# Embed a AI Assistant using an Embed Token

The AI Assistant is a securely embeddable, conversational interface that lets users ask natural-language questions inside your application and receive context-aware insights, with persistent chat history and full adherence to user permissions.

## Prerequisites

Before you begin, ensure the following:
<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">You have learned how to generate an <a href="/embedding-options/embedding-sdk/token-generation/">Embed Authorization Token</a>.</li>
  <li style="margin-top: 15px; line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>. The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

 > **Note:** Here we are generating a token based on the provider user permission and not dashboard embedding specific. This token can be used for all other supported types of embedding. As of now, we have provided the dashboard ID as a mandatory valid property to generate the token. We will remove this dashboard ID mandatory requirement in an upcoming future release.

## Key Considerations

<ul style="padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Set the <b>mode</b> property to <b>BoldBI.Mode.AIAssistant</b> in your frontend configuration.</li>
  <li style="margin-top: 15px;">Call the <b>loadAIAssistant()</b> method to render the AI Assistant.</li>
</ul>

## Steps to Embed the AI Assistant

<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN).</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the AI Assistant will load.</li>
  <li style="margin-top: 15px;">Create a Bold BI instance with the required properties and call <code>loadAIAssistant()</code>.</li>
</ul>

```html
  <body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
      function embedSample() {
        var boldbiEmbedInstance = BoldBI.create({
          serverUrl: "<Bold BI Server URL>",
          mode: BoldBI.Mode.AIAssistant,
          embedContainerId: "<Embed Container Id>", 
          embedToken: "<Embed token generated from backend server>"
        });
        boldbiEmbedInstance.loadAIAssistant();
      }
    </script>
  </body>
```

## Supported Authentication
* [Embed Token (v14)](/embedding-options/embedding-sdk/token-generation/)
* [Authorization Server URL](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/)

>**Note:** For more information on AI Assistant members and methods, refer to this [link](/embedding-options/embedding-sdk/component-api-v2.0/ai-assistant/)
