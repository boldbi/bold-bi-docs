---
layout: post
title: Bold BI Widget - JavaScript Embedding | Bold BI Docs
description: Learn how to seamlessly embed widget into your business application using the SDK, enhancing data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug
---

# Embed Authentication for the Widget Embedding

Embed the <b>Bold BI single widget</b> using an Embed Token and <b>multiple widgets</b> using Authorization Server Authentication.

## Prerequisites

Before you begin, ensure the following:
<ul style="margin-top: 15px; padding-left:20px;">
 <li style="margin-top: 15px;">You have learned how to generate an <a href="/embedding-options/embedding-sdk/token-generation/">Embed Authorization Token</a> for single widget embedding.</li>
  <li style="margin-top: 15px;">You have configured an <a href="/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/">Authorization Server</a> to embed multiple widget embedding.</li>
  <li style="margin-top: 15px; line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>. The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

## Key Considerations

<ul style="padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Users must have the required <b>view permissions</b> for the dashboards containing the widgets.</li>
  <li style="margin-top: 15px;">Use the <b>loadWidget()</b> method to load a single widget.</li> 
  <li style="margin-top: 15px;">Use the <b>loadWidgets()</b> method to load multiple widgets.</li> 
</ul>

## Steps to Embed the Widget 
<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN)</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the widget will load.</li>
</ul>

## Embed a Single Widget Using `loadWidget` Method

```js
<body onload="embedSample();">
    <div id="embed_container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "<Bold BI Server URL>",
                dashboardId: "<Dashboard Id>",
                embedContainerId: "<Embed Container Id>", 
                embedToken: "<Embed token generated from backend server>"
            });
            boldbiEmbedInstance.loadWidget("<Widget ID>"); // For versions prior to v13.1, use loadDashboardWidget().
        }
    </script>
</body>
```


## Embed Multiple Widgets in a Single Instance Using `loadWidgets` Method

This method will load multiple widgets of the current dashboard with a single instance call.

```js
<body onload="embedSample();">
    <div id="dashboard"></div>
    <div id="widget1" style="height:500px;width:500px"></div> 
    <div id="widget2" style="height:500px;width:500px"></div> 
    <div id="widget3" style="height:500px;width:500px"></div>     
    <script>
        function embedSample() {
            var dashboard = BoldBI.create({
                serverUrl: "<Bold BI Server URL>",
                dashboardId: "<Dashboard Id>",
                embedContainerId: "<Embed Container Id>", 
                widgetList: [
                    {widgetName: "Medal details by Country", containerId: "widget1" },
                    {widgetName: "Total Medals by Country", containerId: "widget2" },
                    {widgetName: "Country", containerId: "widget3" }],
                authorizationServer: {
                    url: "<Authorization Server URL>"
                }
            });
            dashboard.loadWidgets();  // For versions prior to v13.1, use loadMultipleWidgets().
        }
    </script>
</body>
```

## Supported Authentication

<table>
  <thead>
    <tr>
      <th>Scope</th>
      <th>Method</th>
      <th>Supports</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Single widget</td>
      <td><a href="/embedding-options/embedding-sdk/token-generation/">Embed Token (v14)</a></td>
      <td>Widget ID</td>
    </tr>
    <tr>
      <td><a href="/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/">Authorization Server URL</a></td>
      <td>Widget ID, Name</td>
    </tr>
    <tr>
      <td><a href="/embedding-options/embedding-sdk/authorization-options/api-key-authentication/">API Key</a></td>
      <td>Widget ID</td>
    </tr>
    <tr>
      <td>Multiple widgets</td>
      <td><a href="/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/">Authorization Server URL</a></td>
      <td>Multiple widget names (list)</td>
    </tr>
  </tbody>
</table>

>**Note:** For more information on widget members, methods, and events, refer to this <a href="/embedding-options/embedding-sdk/component-api-v2.0/widget/">link</a>.

## How to Get Widget ID

1. In the **Bold BI UI**, navigate to the dashboard that contains the widget you want to embed. Click the **context menu** (three-dot icon) of the desired widget and select **Get Embed Code**.  

   ![Embed Code Option](/static/assets/iFrame-based/images/Widget-GetEmbedCode.png#max-width=90%)

2. In the **Get Embed Code** dialog, you can find the **Widget ID** within the embed code details.  

   ![Copy Embed URL](/static/assets/javascript/images/widget-id.png#max-width=45%)
