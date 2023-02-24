---
layout: post
title:  Webhook Payload for Scheduled Events in Cloud BI | Bold BI Docs
description: Learn about what payload properties are used in time-driven and alert-driven export events for webhook notification for Cloud BI dashboards.
platform: bold-bi
documentation: ug
---

# Payload details for Dashboard Scheduling Events

Here is a list of payload property details used in time-driven and alert-driven export events.

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
<td>The dashboard schedule export format. For example:pdf</td>
</tr>

<tr>
<td>File Content</td>
<td>File content of the dashboard</td>
</tr>

<tr>
<td>File Extension</td>
<td>The extension of the export file</td>
</tr>

<tr>
<td>Message</td>
<td>Mail content of dashboard export</td>
</tr>

<tr>
<td>Schedule Id</td>
<td>Id of the export schedule</td>
</tr>

<tr>
<td>Schedule Name</td>
<td>Name of the export schedule</td>
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
<td>Name of the widget selected for the data alert</td>
</tr>
<tr>
<td>Condition</td>
<td>The condition which you used for the data alert</td>
</tr>
<tr>
<td>FilterValues</td>
<td>Details of the condition you configured for the data alert</td>
</tr>
</table></td>
</tr>
</table> 

> **NOTE:**  The `Alert Info` payload property is only used in data alert.