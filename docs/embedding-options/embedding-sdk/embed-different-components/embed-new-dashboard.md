---
layout: post
title: Bold BI New Dashboard Designer - SDK Embedding | Bold BI Docs
description: Learn how to embed the Bold BI New Dashboard Designer seamlessly in your business application using the SDK to enhance data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug
---
# Embed a New Dashboard Designer Using an Embed Token

This enables you to <b>create dashboards</b> directly within your application, offering an integrated and collaborative experience.

## Prerequisites

Before you begin, ensure the following:
<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">You have learned how to generate an <a href="/embedding-options/embedding-sdk/token-generation/">Embed Authorization Token</a>.</li>
  <li style="margin-top: 15px;  line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>. The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

## Key Considerations

<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">Set the <b>mode</b> property to <b>BoldBI.Mode.Design</b> in your frontend configuration.</li>
  <li style="margin-top: 15px;">Call the <b>loadDesigner()</b> method to render the new Dashboard Designer.</li>
  <li style="margin-top: 15px;">Ensure the user has the required <b>create permissions</b> to design dashboards.</li>
</ul>

## Steps to Embed the New Dashboard Designer
<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN).</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the new Dashboard Designer will load.</li>
</ul>

  ```js
    <body onload="embedSample();">
      <div id="embed_container"></div>
      <script>
          function embedSample() {
              var boldbiEmbedInstance = BoldBI.create({
                  serverUrl: "<Bold BI Server URL>",
                  mode:Bold.Mode.Design,
                  embedContainerId: "<Embed Container Id>", 
                  embedToken: "<Embed token generated from backend server>"
              });
              boldbiEmbedInstance.loadDesigner();
          }
      </script>
  </body>
  ```

## Supported Authentication
* [Embed Token (v14)](/embedding-options/embedding-sdk/token-generation/)
* [Authorization Server URL](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/)
* [API Key](/embedding-options/embedding-sdk/authorization-options/api-key-authentication/) 

>**Note:** For more information on designer members, methods, and events, refer to this [link](/embedding-options/embedding-sdk/component-api-v2.0/designer/)