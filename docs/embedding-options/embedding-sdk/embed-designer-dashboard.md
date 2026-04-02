---
layout: post
title: Bold BI dashboard designer - JavaScript Embedding | Bold BI Docs
description:  Learn how to seamlessly embed the Bold BI dashboard designer into your business application using the SDK, enhancing data visualization and decision-making capabilities.
platform: bold-bi
documentation: ug

---
# Embed a Dashboard Designer using an Embed Token
Embedding the designer enables your users to <b>create</b> and <b>modify</b> dashboards directly within your application.

### Prerequisites
<ul style="margin:0; padding-left:20px;">
  <li> First learn how to generate an <a href="/embedding-options/embedding-sdk/generate-embed-token/">Embed Authorization Token</a> and review <a href="/embedding-options/embedding-sdk/embed-viewer-dashboard/">Embedding Dashboard</a> in <b>view mode</b>.</li>
   <li style="margin-top: 15px; line-height: 25px;">The <b>Embed Token</b> must always be generated <b>on the backend server side</b>. The <code>embedSecret</code> is highly sensitive and should never be exposed in frontend code, browsers, or client applications.</li>
</ul>

### Key Considerations

<ul style="margin-top: 15px; padding-left:20px;">
  <li style="margin-top: 15px;">Set the <b>mode</b> property to <b>BoldBI.Mode.Design</b> in your frontend configuration.</li>
  <li style="margin-top: 15px;">Call the <b>loadDesigner()</b> method to render the new Dashboard Designer.</li>
  <li style="margin-top: 15px;">Ensure the user has the required <b>edit/design permissions</b> to design dashboards.</li>
</ul>

## Steps to Embed the Designer

<ul style="list-style-type: decimal; padding-left:20px; margin-top: 15px;">
  <li style="margin-top: 15px;">Install the Bold BI Embedded SDK (via NPM or CDN).</li>
  <li style="margin-top: 15px;">Add a container <code>&lt;div&gt;</code> in your frontend where the AI Assistant will load.</li>
  <li style="margin-top: 15px;">Create a Bold BI instance with the required properties and call <code>loadDesigner()</code>.</li>
</ul>

```html
<div id="dashboard_container_id"></div>
<script>
    var boldbiEmbedInstance = BoldBI.create({
        serverUrl: "<Bold BI Server URL>",
        dashboardId: "<Dashboard Id>",
        mode: BoldBI.Mode.Design, // Sets designer mode
        embedContainerId: "<Embed Container Id>", // Div ID where dashboard will render
        embedToken: "<Embed token retrieved from backend>"
    });
    boldbiEmbedInstance.loadDesigner();  
</script>
```
> **Note:** The same embed token can be used for both the dashboard view and the designer.

  <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
    <th style="width: 20%;">Property</th>
    <th style="width: 20%;">Type</th>
    <th style="width: 60%;">Description</th>
    </tr>
    <tr>
    <td align="left">serverUrl</td>
    <td align="left"><i>string</i></td>
    <td align="left">Your Bold BI Server URL (e.g., https://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
    <td align="left">dashboardId</td>
    <td align="left"><i>string</i></td>
    <td align="left">Unique ID of the dashboard to embed in designer mode.</td>
    </tr>
    <tr>
    <td align="left">mode</td>
    <td align="left"><i>enum</i></td>
    <td align="left">Set to BoldBI.Mode.Design to load the dashboard designer.</td>
    </tr>
    <tr>
    <td align="left">embedContainerId</td>
    <td align="left"><i>string</i></td>
    <td align="left">ID of the <div> element where the designer will render.</td>
    </tr>
    <tr>
    <td align="left">embedToken</td>
    <td align="left"><i>string</i></td>
    <td align="left">Embed token generated from your backend server.</td>
    </tr>
    </tbody>
  </table>

>**Note:** For advanced designer options (methods, events, theming), refer to the [Designer Component Reference](/embedding-options/embedding-sdk/component-api-v2.0/designer/).