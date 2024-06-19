---
layout: post
title: Filtering Views with Parameters in URL | Bold BI Embedded
description: Learn how to use parameters in Dashboard URL to apply filters on its initial loading in Bold BI Embedded.
canonical: "/cloud-bi/working-with-dashboards/preview-dashboard/urlparameters/"
platform: bold-bi
documentation: ug
---
# Filtering Views through URL Parameters

## Passing Parameter With URL

You can pass parameters to a dashboard by including them in a dashboard URL. Passing parameter values within URL will apply filter in the dashboard on initial load itself. 

To set a dashboard parameter within a URL, use the following syntax:

`parameter=value1, value2,…, valueN`

where `parameter` represents the column name.
Parameter can be single-valued and multiple-valued.

To append your query string made with parameters and values, to URL, add a prefix (?) to the query string. If (?) is already there in the URL,add a prefix(&) to the query string.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?ProductName=Chang`

Here is a dashboard view illustrating the same with single-valued parameter.

![URLFilter Single Parameter Value](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urlsingleparameter.png)

Here is a dashboard view illustrating the same with multi-valued parameter.

![URLFilter Multiple Parameter Values](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urlmultipleparameters.png)


## Supported Operators 

You can also define parameters with operators to search for one or more values like below.

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

You can define parameters (date and time typed columns) with date & time functions applied to search for formatted date values like below.

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

List of operators supported in date time functions. For example purpose we are using year date time function.

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

> **NOTE:**  Do consider that for between and inbetween operators, the value must be in given format <b>M/d/yyyy h:mm tt</b>, and also no date time function is required for the same

Here is a dashboard view illustrating the use of parameter with date & time function.

![URLFilter Date Value](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urldate.png)

## Measure Parameters Support
You can define parameters with measure typed columns just as shown below

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?MeasureTypeParameter=value`

For measure you can following operators to the value.

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

Besides these operators, you can apply following conditions for measure parameters.

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

Comma separator is used in the condition to filter with the multiple values for the measure column like `parameter=value1,value2,value3,...,valueN`.

> **NOTE:**  Do note that you are only allowed to pass one parameter value , except for between and notbetween which needs 2 parameter values.

Here is a dashboard view illustrating the use of parameter with measure parameter values.

![URLFilter Measure Value](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urlmeasure.png)

![URLFilter Parameter Value](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urlmeasureIN.png)

## Dimension Parameters Support

You can also pass Dimension type parameter values to filter.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?DimensionTypeParameter=value`

For measure you can only use following operators to the value.

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

Here is a dashboard view illustrating the use of parameter with measure parameter values.

![URLFilter Dimension Value](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urldimension.png)

## Passing Parameters with dataSource

You can pass parameter value along with datasource name to specifically filter the same. For that purpose you can pass the Url like given below.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?DataSourceName.ParameterName=value`

Here is a dashboard view illustrating the use of parameter with datasource.

![URLFilter Data source](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urldatasource.png)

Where <b>Northwind</b> is the required data source name.

## Passing Multiple Parameters With URL

You can pass more than one parameter within a URL introducing an ampersand (&) symbol in between them to differentiate like below.

`http://<servername>/<culturename>/dashboards/<dashboardid>/<category>/<dashboardname>?Year(OrderDate)=1996&Country=Germany`

Here is a dashboard view illustrating the same.

![Two Different Parameter](/bold-bi-docs/static/assets/embedded/working-with-dashboards/preview-dashboards/images/urlmultipleparameter.png)

> **NOTE:**  Points to be considered,</br> <li> The parameter names and values are case-sensitive.</br><li> The operators and date & time function names are case-insensitive.</br><li> Characters like comma (,) and ampersand (&) in value should be prefixed and suffixed with tilde (~) symbol to differentiate itself from syntax elements. For example, `CompanyName=Syncfusion Inc~,~ ` </br><li> The invalid parameter name will get ignored from filter consideration.</br><li> The invalid parameter value will result in "No data available to display" in widgets. </br><li> Parameters are applicable for both live and extract mode in dynamic data source creation, but extract mode changes will be reflected only when the refresh setting is triggered.