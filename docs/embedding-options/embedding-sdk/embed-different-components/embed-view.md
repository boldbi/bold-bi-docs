---
layout: post
title: Bold BI Dashboard View - SDK Based Embedding | Bold BI Docs
description: Learn how to seamlessly embed Bold BI Dashboard Views into your business application using the SDK to enhance data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug
---

# Embed a Dashboard View Using an Embed Token

Dashboard View refers to saved states of a dashboard, including filter and layout configurations. This allows for secure visualization of specific dashboards with their filters applied.

## Prerequisites

Before you begin, ensure the following:
<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">You have learned how to generate an <a href="/embedding-options/embedding-sdk/token-generation/">Embed Authorization Token</a>.</li>
  <li style="margin-top: 15px; line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>. The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

## Steps to Embed the dashboard views

<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN).</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the Dashboard View will load.</li>
</ul>

```html
    <body onload="embedSample();">
      <div id="embed_container"></div>
      <script>
        function embedSample() {
          var boldbiEmbedInstance = BoldBI.create({
            serverUrl: "<Bold BI Server URL>",
            viewId: "<View ID>",
            embedContainerId: "<Embed Container Id>", 
            embedToken: "<Embed token generated from backend server>"
          });
          boldbiEmbedInstance.loadView();
        }
      </script>
    </body>

```

## Supported Authentication
* [Embed Token (v14)](/embedding-options/embedding-sdk/token-generation/) - Support only with View ID.
* [Authorization Server URL](/embedding-options/embedding-sdk/authorization-options/authorization-server-url-work-flow/) - Supports with View ID and Name.
* [API Key](/embedding-options/embedding-sdk/authorization-options/api-key-authentication/) - Support only with View ID.


## How to get view details of a dashboard

1. In Bold BI Server, click the context menu of the respective dashboard and choose the `Views` option.
    ![EmbedusingViewname](/static/assets/javascript/images/Views-option.png#max-width=85%)

  > **NOTE:** You can get the views list of specific dashboard using [fetchbydashboardid](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-methods/#fetchbydashboardid) method of SDK.

2. You can find all the views name for the respective dashboard from the displayed list.
    ![EmbedusingViewname](/static/assets/javascript/images/view-names.png#max-width=85%)

3. To get a view's ID click on the respective view. The dashboard will be loaded in a new tab with the chosen view. You can find the view ID at the end of URL. Refer to the image below.
    ![EmbedusingViewId](/static/assets/javascript/images/view-url.png#max-width=85%)

>**Note:** For more information on view members, methods, and events, refer to this [link](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/).
