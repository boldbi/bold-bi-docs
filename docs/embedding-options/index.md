---
layout: post
title: Embedding Options – Embedded BI | Bold BI Documentation
description: Learn how to embed dashboards using the Embedding SDK and iFrame-based embedding in Bold BI deployed on your server.
platform: bold-bi
documentation: ug
---

# Embedding Dashboards in Bold BI

Embed interactive Bold BI dashboards into your applications, portals, or SaaS platforms. This guide explains the embedding methods available and how to implement them using best practices.

## Why Embed Dashboards?

Embedding dashboards into your application allows you to:
<ul style="margin:0; padding-left:20px;">
  <li>Deliver real-time insights directly within your app interface.</li>
  <li>Maintain a seamless, branded experience.</li>
  <li>Empower users to make contextual, data-driven decisions.</li>
  <li>Eliminate the need to switch between multiple platforms.</li>
</ul>

## Embedding Methods in Bold BI

Bold BI offers two primary methods for embedding dashboards.

### 1. JavaScript SDK

The JavaScript SDK provides:
<ul style="margin:0; padding-left:20px;">
  <li>Full programmatic control over embedding.</li>
  <li>Ideal for interactive and dynamic dashboards.</li>
  <li>Supports event handling, theming, and dynamic filtering.</li>
  <li>Best suited for developers and SaaS platforms.</li>
</ul>

**Example**

```javascript
BoldBI.create({
  serverUrl: "<Bold BI Server URL>",
  dashboardId: "<Dashboard ID>",
  embedContainerId: "<Embed Container ID>", // Div ID where the dashboard renders
  embedToken: "<Embed token generated from the backend server>"
});
```

2. iFrame embedding
iFrame embedding is:

<ul style="margin:0; padding-left:20px;"> <li>Quick and easy to set up with minimal code.</li> <li>Best for static dashboards or internal portals.</li> <li>Can embed the entire Bold BI portal (Full Server embedding), including dashboards, the designer, and data sources.</li> </ul>
Example

```javascript
<iframe src="http://localhost:51777/bi/site/site1/dashboards/9e940aa3-8061-4576-9286-c81e4fdcc4c2/Embed/testembed?isembed=true"
        id="dashboard-frame"
        width="100%"
        height="100%"
        allowfullscreen
        frameborder="0">
</iframe>
```
## Feature Comparison Between JavaScript SDK vs iFrame Embedding
<table> <thead> <tr> <th style="width: 20%;">Feature</th> <th style="width: 40%;">JavaScript SDK</th> <th style="width: 40%;">iFrame embedding</th> </tr> </thead> <tbody> <tr> <td>Customization</td> <td>High: full API control (layout, filters, events)</td> <td>Limited: appearance and theme only</td> </tr> <tr> <td>Interactivity</td> <td>Full: supports events and dynamic filters</td> <td>Limited</td> </tr> <tr> <td>Ease of Use</td> <td>Moderate: requires coding</td> <td>Very easy: embed URL only</td> </tr> <tr> <td>Token-based security</td> <td>Supported</td> <td>Supported (via URL or embed secret)</td> </tr> <tr> <td>Event Handling</td> <td>Supported</td> <td>Not supported</td> </tr> <tr> <td>Ideal For</td> <td>SaaS applications, development teams</td> <td>Internal tools, portals, blogs</td> </tr> </tbody> </table>
Deployment Options
Bold BI supports both cloud and enterprise deployment models, with full embedding support:

<table> <thead> <tr> <th>Deployment Model</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>Cloud (hosted)</td> <td>Managed by Syncfusion. Best for teams needing a quick, fully managed setup.</td> </tr> <tr> <td>Enterprise (self-hosted)</td> <td>Deploy on your infrastructure. Best for maximum control, security, and custom integrations.</td> </tr> </tbody> </table>
Authentication & Security
Bold BI uses token-based authentication to secure embedded dashboards:

Key Benefits

<ul style="margin:0; padding-left:20px;"> <li>Authenticate users from your existing system.</li> <li>Generate time-limited tokens with scoped permissions.</li> <li>Control access at the user or tenant level.</li> <li>Enable multi-tenant SaaS embedding using token claims.</li> </ul>
Common Use Cases
<table> <thead> <tr> <th>Scenario</th> <th>Recommended Method</th> </tr> </thead> <tbody> <tr> <td>Internal analytics for teams</td> <td>iFrame or JavaScript SDK (based on interactivity needs)</td> </tr> <tr> <td>SaaS app with per-user or per-tenant views</td> <td>JavaScript SDK</td> </tr> <tr> <td>Public dashboards or blogs</td> <td>iFrame embedding</td> </tr> <tr> <td>Interactive dashboards with filters/events</td> <td>JavaScript SDK</td> </tr> <tr> <td>Full admin portal embedding</td> <td>iFrame embedding</td> </tr> </tbody> </table>
Further Reading & References
API Reference Documentation
JavaScript SDK Embedding Sample
Learn More About Token Authentication