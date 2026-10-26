---
layout: post
title: Webhook Payload for Dashboard Scheduled Events | Bold BI Docs
description: "Learn which payload properties Bold BI sends in webhook notifications for time-driven and alert-driven dashboard export events, with an example of each one."
platform: bold-bi
documentation: ug
---

# Payload Details for Dashboard Scheduling Events

Here is a list of payload property details used in `Time-Driven` and `Alert-Driven` export events.

<table>
<tr>
<td><strong>Payload Data</td>
<td><strong>Description</td>
</tr>

<tr>
<td>Dashboard Id</td>
<td>The ID of the dashboard selected for export</td>
</tr>

<tr>
<td>Dashboard Name</td>
<td>The name of the dashboard selected for export</td>
</tr>

<tr>
<td>Export Format</td>
<td>The dashboard schedule export format. For example: pdf</td>
</tr>

<tr>
<td>File Content</td>
<td>The file content of the dashboard</td>
</tr>

<tr>
<td>File Extension</td>
<td>The extension of the export file</td>
</tr>

<tr>
<td>Message</td>
<td>The mail content of the dashboard export</td>
</tr>

<tr>
<td>Schedule Id</td>
<td>The ID of the export schedule</td>
</tr>

<tr>
<td>Schedule Name</td>
<td>The name of the export schedule</td>
</tr>

<tr>
<td>Alert Info
</td>
<td><table>
<tr>
<td>WidgetId</td>
<td>The ID of the widget selected for the data alert</td>
</tr>
<tr>
<td>WidgetName</td>
<td>The name of the widget selected for the data alert</td>
</tr>
<tr>
<td>Condition</td>
<td>The condition that you used for the data alert</td>
</tr>
<tr>
<td>FilterValues</td>
<td>The details of the condition you configured for the data alert</td>
</tr>
</table></td>
</tr>
</table> 

> **NOTE:** The `Alert Info` payload property is only used in data alerts.