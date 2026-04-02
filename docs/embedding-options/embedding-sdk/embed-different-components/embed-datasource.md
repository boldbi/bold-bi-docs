---
layout: post
title: Bold BI DataSource - JavaScript Embedding | Bold BI Docs
description: Learn how to seamlessly embed Bold BI data sources into your business application using the SDK, enhancing data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug
---
# Embed a Data source using an Embed Token

Embedding data source enables your users to <b>create</b> and <b>modify</b> data source directly within your application.

## Prerequisites

Before you begin, ensure the following:
<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">You have learned how to generate an <a href="/embedding-options/embedding-sdk/token-generation/">Embed Authorization Token</a>.</li>
  <li style="margin-top: 15px; line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>. The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

## Key Considerations

<ul style="padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">The user has the required <b>create/edit permissions</b> to manage data sources.</li>
  <li style="margin-top: 15px;">Set the <b>mode</b> property to:
    <ul style="margin-top:15px; padding-left:20px;">
      <li style="margin-top: 15px;"><b>BoldBI.Mode.DataSource</b> – to edit an existing data source.</li>
      <li style="margin-top: 15px;"><b>BoldBI.Mode.Connection</b> – to create a new data source connection.</li>
    </ul>
  </li>
  <li style="margin-top: 15px;">Call the <b>loadDatasource()</b> method to render the data source.</li>
</ul>

## Steps to Embed the Data source

<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN)</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the data source will load.</li>
</ul>

### Embed an Existing Data Source

To edit an existing data source, set the mode to `DataSource` and call the `loadDatasource()` method. Ensure the embedded user has permission to edit data sources.

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "<Bold BI Server URL>",
                datasourceId: "<DataSource Id>",
                embedContainerId: "<Embed Container Id>", 
                mode: BoldBI.Mode.DataSource, 
                embedToken: "<Embed token generated from backend server>"
            });
            boldbiEmbedInstance.loadDatasource();
        }
    </script>
</body>
```


### Create a New Data Source in Embedding

To create a new data source, set the mode to `Connection` and call the `loadDatasource()` method.
Ensure the embedded user has permission to create new data sources.
    
```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
               serverUrl: "<Bold BI Server URL>",
                embedContainerId: "<Embed Container Id>", 
                mode: BoldBI.Mode.Connection, 
                embedToken: "<Embed token generated from backend server>"
            });
            boldbiEmbedInstance.loadDatasource(); 
        }
    </script>
</body>
```

## Supported Authentication
* [Embed Token (v14)](/embedding-options/embedding-sdk/token-generation/) - Support only with Data source ID.
* [Authorization Server URL](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/) - Supports with Data source ID and Name.
* [API Key](/embedding-options/embedding-sdk/authorization-options/api-key-authentication/) - Support only with Data source ID.

>**Note:** For more information on data source members, methods, and events, refer to this [link](/embedding-options/embedding-sdk/component-api-v2.0/datasource/).
