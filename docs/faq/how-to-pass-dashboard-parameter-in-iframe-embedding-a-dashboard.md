---
layout: post
title: Pass dashboard parameters in iframe | Bold BI Embedded Docs
description: Learn how to pass dashboard parameters in iframe embedding a dashboard of Bold BI embedded application.
canonical: "/faq/how-to-pass-dashboard-parameter-in-iframe-embedding-a-dashboard/"
platform: bold-bi
documentation: ug
---
# How to pass dashboard parameter in iframe embedding 

## Passing Dashboard Parameter With iframe

1. Refer to this [document](/embedding-options/iframe-embedding/embedding-a-dashboard/#steps-to-embed-dashboard-using-url) to get the iframe code that can be used to embed the Bold BI dashboard on your web page.

2. The dashboard parameters have two modes. One mode is Literal and another mode is List.

## Literal Mode

To pass dashboard parameters in the literal mode, pass in the parameter name with the value after the `isembed=true` in the src attribute.
For example, `<iframe src='http://<servername>/bi/site/<siteidentifier>/dashboards/<dashboardid>/<category>/<dashboardname>?isembed=true&DashboardParameter=value' id='dashboard-frame' width='100%' height='600px' allowfullscreen frameborder='0'></iframe>` 

## List Mode

If you are using a list mode, use Operators like IN or NOTIN in the iframe src attribute.

<table>
<tr><td>
<b>Function
</b></td><td>
Syntax</td>
</tr><tr><td>
IN</td>
<td>
parameter=IN(value1, value2, …, valueN)</td>
</tr><tr><td>
NOTIN</td>
<td>
parameter=NOTIN(value1, value2, …, valueN)</td>
</tr></table>

**NOTE:** The dashboard parameter name and the column name are case sensitive.