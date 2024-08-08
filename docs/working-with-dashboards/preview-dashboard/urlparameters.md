---
layout: post
title: Filtering Views with Parameters in URL | Bold BI Embedded
description: Learn how to use parameters in Dashboard URL to apply filters on its initial loading in Bold BI Embedded.
canonical: "/working-with-dashboards/preview-dashboard/urlparameters/"
platform: bold-bi
documentation: ug
---
# Filtering Views through URL Parameters

## Passing Parameter With URL

You can pass parameters to a dashboard by including them in the dashboard URL. Passing parameter values within the URL will apply filters in the dashboard on initial load itself.

To set a dashboard parameter within a URL, use the following syntax:

`parameter=value1, value2,…, valueN`

where the `parameter` represents the column name. 
The parameter can be single-valued or multiple-valued.

To append your query string made with parameters and values to the URL, add a prefix (?) to the query string. If (?) is already present in the URL, add a prefix(&) to the query string.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?ProductName=Chang`

Here is a dashboard view illustrating the same with a single-valued parameter.

![URLFilter Single Parameter Value](/static/assets/working-with-dashboards/preview-dashboards/images/urlsingleparameter.png)

Here is a dashboard view illustrating the same with a multi-valued parameter.

![URLFilter Multiple Parameter Values](/static/assets/working-with-dashboards/preview-dashboards/images/urlmultipleparameters.png)


## Supported Operators 

You can also define parameters with operators to search for one or more values, like below.

<table>
<tr>
<td><b>Operator</b></td>
<td>Syntax</td>
</tr>
<tr>
<td>IN</td>
<td>parameter=IN(value1, value2,..., valueN)</td>
</tr>
<tr>
<td>NOTIN</td>
<td>parameter=NOTIN(value1, value2, …, valueN)</td>
</tr>
<tr>
<td>BETWEEN</td>
<td>parameter=BETWEEN(value1, value2)</td>
</tr>
<tr>
<td>INBETWEEN</td>
<td>parameter=INBETWEEN(value1, value2)</td>
</tr>
<tr>
<td>NOTBETWEEN</td>
<td>parameter=NOTBETWEEN(value1, value2)</td>
</tr>
<tr>
<td>STARTSWITH</td>
<td>parameter=STARTSWITH(value)</td>
</tr>
<tr>
<td>ENDSWITH</td>
<td>parameter=ENDSWITH(value)</td>
</tr>
<tr> 
<td>CONTAINS</td>
<td> parameter=CONTAINS(value1, value2)</td> 
</tr>
</table>

	
## Date Parameters Support

You can define parameters (date and time typed columns) with date and time functions applied to search for formatted date values like the one shown below.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?Year(OrderDate)=1996`

<table>
<tr><td>
<b>Function
</b></td><td>
Syntax</td>
</tr><tr><td>
YEAR</td>
<td>
YEAR(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
MONTHNAME</td>
<td>
MONTHNAME(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
QUARTER</td>
<td>
QUARTER(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
QUARTERYEAR</td>
<td>
QUARTERYEAR(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
MONTHYEAR</td>
<td>
MONTHYEAR(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
DAYMONTHYEAR</td>
<td>
DAYMONTHYEAR(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
MONTHDAYYEAR</td>
<td>
MONTHDAYYEAR(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
HOURS</td>
<td>
HOURS(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
MINUTES</td>
<td>
MINUTES(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
DAY</td>
<td>
DAY(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
SECONDS</td>
<td>
SECONDS(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
DATEHOUR</td>
<td>
DATEHOUR(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
DAYOFWEEK</td>
<td>
DAYOFWEEK(parameter)=value1, value2, …, valueN</td>
</tr><tr><td>
WEEKOFYEAR</td>
<td>
WEEKOFYEAR(parameter)=value1, value2, …, valueN</td>
</tr>
</table>

List of operators supported in date and time functions. For example, for illustrative purposes, we are using the year date and time function.

<table>
<tr><td>
<b>Function
</b></td><td>
Syntax</td>
</tr><tr><td>
IN</td>
<td>
YEAR(parameter)=IN(value1, value2, …, valueN)</td>
</tr><tr><td>
NOTIN</td>
<td>
YEAR(parameter)=NOTIN(value1, value2, …, valueN)</td>
</tr><tr><td>
BETWEEN</td>
<td>
parameter=BETWEEN(value1,value2)</td>
</tr><tr><td>
INBETWEEN</td>
<td>
parameter=INBETWEEN(value1,value2)</td>
</tr></table>

> **NOTE:**  The between and inbetween operators, the value must be in the format **M/d/yyyy h:mm tt**. Additionally, no date time function is required for this.

Here is a dashboard view illustrating the use of parameters with date and time functions.

![URLFilter Date Value](/static/assets/working-with-dashboards/preview-dashboards/images/urldate.png)

## Measure Parameters Support
You can define parameters with measure-typed columns just as shown below:

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?MeasureTypeParameter=value`

For measures, you can use the following operators with the value.

<table>
<tr><td>
<b>Function
</b></td><td>
Syntax</td>
</tr><tr><td>
BETWEEN</td>
<td>
parameter=BETWEEN(value1, value2)</td>
</tr><tr><td>
NOTBETWEEN</td>
<td>
parameter=NOTBETWEEN(value1, value2)</td>
</tr><tr><td>
IN</td>
<td>
parameter=IN(value1, value2, ..., valueN)</td>
</tr><tr><td>
NOTIN</td>
<td>
parameter=NOTIN(value1, value2, ..., valueN)</td>
</tr></table>

In addition to these operators, you can apply the following conditions to measure parameters.

<table>
<tr><td>
<b>Condition
</b></td></tr>
<tr><td>
parameter!=value</td>
</tr><tr><td>
parameter&ltvalue</td>
</tr><tr><td>
parameter>value</td>
</tr><tr><td>
parameter&lt=value</td>
</tr><tr><td>
parameter>=value</td>
</tr></table>

Comma separator is used in the condition to filter with multiple values for the measure column, like `parameter=value1, value2, value3, ..., valueN`.

> **NOTE:**  You are only allowed to pass one parameter value, except for between and not between which require 2 parameter values.

Here is a dashboard view illustrating the use of parameters with measure values.

![URLFilter Measure Value](/static/assets/working-with-dashboards/preview-dashboards/images/urlmeasure.png)

![URLFilter Parameter Value](/static/assets/working-with-dashboards/preview-dashboards/images/urlmeasureIN.png)

## Dimension Parameters Support

You can also pass Dimension type parameter values to filter.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?DimensionTypeParameter=value`

For measures, you can only use the following operators with the value.

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
</tr><tr><td>
STARTSWITH</td>
<td>
parameter=STARTSWITH(value)</td>
</tr><tr><td>
ENDSWITH</td>
<td>
parameter=ENDSWITH(value)</td>
</tr><tr><td>
CONTAINS</td>
<td>
parameter=CONTAINS(value)</td>
</tr></table>

Here is a dashboard view illustrating the use of parameters with measure parameter values.

![URLFilter Dimension Value](/static/assets/working-with-dashboards/preview-dashboards/images/urldimension.png)

## Special Characters Support

You can also pass parameter values with special characters to filter. To use a value with special characters, you can pass the value inside square brackets as shown below:

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?DimensionTypeParameter=[value"!@"]`

<table style="margin-right: 100%; width: 30%;">
<tr><td><b>Special Characters</b></td></tr>
<tr><td>!</td></tr>
<tr><td>%</td></tr>
<tr><td>@</td></tr>
<tr><td>$</td></tr>
<tr><td>^</td></tr>
<tr><td>*</td></tr>
<tr><td>(</td></tr>
<tr><td>)</td></tr>
<tr><td>-</td></tr>
<tr><td>_</td></tr>
<tr><td>+</td></tr>
<tr><td>[</td></tr>
<tr><td>]</td></tr>
<tr><td>:</td></tr>
<tr><td>;</td></tr>
<tr><td>"</td></tr>
<tr><td>/</td></tr>
<tr><td>\</td></tr>
<tr><td>?</td></tr>
<tr><td>``</td></tr>
<tr><td>.</td></tr>
<tr><td>></td></tr>
<tr><td><</td></tr>
</table>

Here is a dashboard view illustrating the use of parameters with special characters.

![Special Characters](/static/assets/working-with-dashboards/preview-dashboards/images/Special_char.png)

## Passing Keywords with URL

The following keywords are used for our internal purposes. If you have any of these keywords as column names, you can specify them inside square brackets as shown below:

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?[Keywords]=value`

<table style="margin-right: 100%; width: 30%;">
<tr><td><b>Keywords</b></td></tr>
<tr><td>Id</td></tr>
<tr><td>Comment</td></tr>
<tr><td>tab</td></tr>
<tr><td>showmydashboards</td></tr>
<tr><td>viewid</td></tr>
<tr><td>ismultitab</td></tr>
<tr><td>bi_theme</td></tr>
<tr><td>multitabid</td></tr>
<tr><td>hide_header</td></tr>
<tr><td>Hide_tool</td></tr>
<tr><td>hide_widget_tool</td></tr>
<tr><td>isembed</td></tr>
<tr><td>views</td></tr>
<tr><td>export</td></tr>
<tr><td>dashboard_comments</td></tr>
<tr><td>widget_comment</td></tr>
<tr><td>embed_dashboard_views_edit</td></tr>
<tr><td>embed_dashboard_favorite</td></tr>
<tr><td>embed_dashboard_toolbar</td></tr>
<tr><td>embed_expirationtime</td></tr>
<tr><td>embed_nonce</td></tr>
<tr><td>embed_user_token</td></tr>
</table>

Here is a dashboard view illustrating the use of parameters with the mentioned keywords.

![Keywords](/static/assets/working-with-dashboards/preview-dashboards/images/Keywords.png)

## Passing Parameters with dataSource

You can pass a parameter value along with the DataSource name to specifically filter the data. For this purpose, you can pass the URL as shown below:

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?DataSourceName.ParameterName=value`

Here is a dashboard view illustrating the use of parameters with DataSource.

![URLFilter Data source](/static/assets/working-with-dashboards/preview-dashboards/images/urldatasource.png)

Where <b>Northwind</b> is the required data source name.

## Passing Multiple Parameters With URL

You can pass more than one parameter within a URL by introducing an ampersand (& or &&) or vertical bar (| or ||) symbol in between them to differentiate, like below:

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?CustomerID=ALFKI&OrderID=10643||CustomerID=VINET&OrderID=10248`

Here is a dashboard view illustrating the same.

![Two Different Parameter](/static/assets/working-with-dashboards/preview-dashboards/images/OR_AND_filter.png)

## Limitations of URL Parameter

<li> The parameter names and values are case-sensitive.</br><li> The operators and date & time function names are case-insensitive.</br><li> Characters like comma (,), ampersand (&), and vertical bar (|) in the value should be prefixed and suffixed with a tilde (~) symbol to differentiate them from syntax elements.</br></br> <ol>

For example, `CompanyName=Syncfusion Inc~,~ `</ol></br><li> An invalid parameter name will be ignored for filter consideration.</br><li> An invalid parameter value will result in `There is no data to be displayed` in widgets. </br><li> Parameters are applicable for both live and extract mode in dynamic DataSource creation, but changes in extract mode will only be reflected when the refresh setting is triggered.</br><li>When a user wants to apply a filter to a dashboard parameter by passing a URL parameter in the dashboard URL, the dashboard parameter name should be unique and not match any column name in the data source. If the dashboard parameter name matches a column name in the data source, the URL parameter will apply the filter to the data source column instead of the dashboard parameter.</br>
<ol style="font-weight: bold;">
Example Scenario:</br></ol><ol>
Consider a scenario where a user creates a dashboard parameter named `ShipAddress` with the country name value and uses it in the code view of a data source.

![Create Dashboard Parameter](/static/assets/working-with-dashboards/preview-dashboards/images/create-dashboard-param.png)

![Use Dashboard Parameter in Query](/static/assets/working-with-dashboards/preview-dashboards/images/use-dashboard-param-in-query.png)

However, the data source also contains a column named 'ShipAddress' with shipping address details.

![Column in Data Source](/static/assets/working-with-dashboards/preview-dashboards/images/column-in-datasource.png)

When applying a URL parameter like ‘Dashboard-URL?`ShipAddress=Austria`, it will filter the data source column `ShipAddress` instead of the dashboard parameter ` ShipAddress`. This will result in a `There is no data to be displayed` message in widgets.

![Column in Data Source](/static/assets/working-with-dashboards/preview-dashboards/images/result-of-url-parameter.png)