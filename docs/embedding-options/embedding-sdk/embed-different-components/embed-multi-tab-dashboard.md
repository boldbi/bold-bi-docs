---
layout: post
title: Bold BI Multi-Tab Dashboard - SDK Based Embedding | Bold BI Docs
description: Learn how to seamlessly embed a multi-tab dashboard into your business application using the SDK to enhance data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug
---

# Embed Authentication for the Multi-Tab Dashboard Viewer

Embed a **multi-tab dashboard** programmatically from a Bold BI dashboard using authorization server authentication.

> **Note:**  
> To embed a multi-tab dashboard using **Bold BI Server version 10.1.18 or later**, you must use the following CDN link: https://cdn.boldbi.com/embedded-sdk/v10.1.18/boldbi-embed.js <br>
> If you are using a **Bold BI Server version earlier than 10.1.18**, use this CDN link instead: https://cdn.boldbi.com/embedded-sdk/v9.1.73/boldbi-embed.js

## Steps to Embed a Multi-Tab Dashboard Programmatically

<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN).</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the multi-tab dashboard will load.</li>
</ul>

## Embed a Multi-Tab Dashboard Programmatically

You can embed a multi-tab dashboard programmatically in two ways:
### Using Dashboard IDs

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "<Bold BI Server URL>",
                dashboardIds: ["<Dashboard ID 1>", "<Dashboard ID 2>"], // The IDs of the dashboards to embed.
                embedContainerId: "<Embed Container ID>", 
                authorizationServer: {
                   url: "<Authorization Server URL>"
                }
            });
            boldbiEmbedInstance.loadTabbedDashboards(); // Use loadMultitabDashboard() for versions prior to v13.1.
        }
    </script>
</body>
```
### Using Dashboard Paths

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "<Bold BI Server URL>",
                dashboardPaths: ["<Dashboard Path 1>", "<Dashboard Path 2>"], // The paths of the dashboards to embed.
                embedContainerId: "<Embed Container ID>", 
                authorizationServer: {
                    url: "<Authorization Server URL>"
                }
            });
            boldbiEmbedInstance.loadTabbedDashboards(); // Use loadMultitabDashboard() for versions prior to v13.1.
        }
    </script>
</body>
```
## Supported Authentication

* [Authorization Server URL](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/)

>**Note:** For more information on multi-tab dashboard members, methods, and events, refer to this [link](/embedding-options/embedding-sdk/component-api-v2.0/multi-tab/).