---
layout: post
title: Dashboard Parameters Overview – Embedded BI | Bold BI Docs
description: Learn about the dashboard parameters feature in Bold BI Embedded and its usage scenarios in custom expressions, stored procedures, custom query, and more.
canonical: "/cloud-bi/working-with-data-source/configuring-dashboard-parameters/"
platform: bold-bi
documentation: ug
keywords: Dashboard parameter, dashboard, parameter, Parameters, Dynamic, configure dashboard parameter, query parameter
---

# Configuring Dashboard Parameters

Dynamic parameter allows user to execute the custom query or stored procedure dynamically based on the parameter while viewing the dashboard. User can also use the parameter in the expression columns.

## Add a Dashboard Parameters

User can create the dashboard Parameter at datasource level. The dashboard parameter icon is provided as shown in the following image.

![Dashboard Parameter icon](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-icon.png)

Open the Dashboard Parameter window. A default parameter will be added as follows.

![Dashboard Parameter window](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-window.png)

## Modes

There are two different modes in the dashboard parameter as follows:

1.	`Literal`: Defines the static value of the parameter. 

2.	`List`: Users can select the multiple values that can be used for initial execution.

## Literal mode

The literal mode allows you to add the text, number, date, boolean, and range type of values.

![Dashboard Parameter Literal Mode](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-mode.png)

Select the String or Number Type and enter the Current Value as shown in the following screenshot.

![Dashboard Parameter String](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-string.png)

Select the Date type and also select the date in the date picker for date type parameter.

![Dashboard Parameter Date](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-date.png)

Select the Boolean type and also select true or false for boolean type parameter.

![Dashboard Parameter Boolean](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-bool.png)

User can add the description for the dashboard parameter.

![Dashboard Parameter Description](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-description.png)

Click `Save` to save the added parameter. After the parameter saved successfully, the success message is shown in the footer of the dialog and `Add` will be enabled at the footer.

![Dashboard Parameter Literal Mode](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-string-save.png)

User can provide the range values for number and date type parameters on choosing `Selection Type` as range.

![Selection type for Dashboard Parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-selectiontype.png)

To add or edit the relative date range for date type parameters, Select the `Add Relative Date Range` option from drop-down. User can create the relative date ranges.
![Dashboard Parameter relative range](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-relative-range.png)

To remove all relative date range for the data type parameter, Select the `Clear Relative Date` option from drop-down. User can remove all relative ranges.

![Dashboard Parameter relative range clear](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-relative-range-clear.png)

## List Mode

There are two different types in the list mode as follows:

1.	`Manual`: The list mode allows user to add any number of values from a same data type, which can be a text, number, or date. 

2.	`Data Source`: The list mode allows user to select the multiple values from the data source.

## List Manual type

The list type allows user to add values to the list manually.

![Dashboard Parameter - List Manual](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-grid.png)

User can edit the added values using the double click the value. Also, uncheck or check a eye icon to include or exclude the values.

![List mode manual value edit](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-value-edit.png)

Users can uncheck or check the values and include or exclude the values using the multi selection combo box.

![List mode value select](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-value-combo-box.png)

The list values will be shown as follows while viewing the dashboard, and user can select a value from the list.

![List mode preview](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-list-in-preview.png)

User can create parameters with the same name for more than one data sources. When dashboard previewing, data source name will be appended with the parameter name.

![Parameter name in preview](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-duplicate-name.png)

## List Data Source type

There are three different types in the list data source type as follows:

1.	`Data Source`: Data fetched from fields for currently dragged tables. 

2.	`Table`: Data fetched from any of the table from current data source.

3.	`Custom Query`: User can also fetch the data by using the custom query option.


User can select the type of data fetched from `Field From` drop-down.

![List data source Field From](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-field-from.png)

User can select the field where the data to be fetched from `Field` drop-down.

![List data source Field](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-field.png)

User can select or unselect and include or exclude the data from the multi selection combo box.

![List data source Combo box](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-combo-box.png)

In `Table` type parameter, user can select the table from the current data source from `Table` drop-down.

![List data source Table](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-table.png)

In `Custom Query` type parameter, select the `Run` to execute the query.

![List data source Custom Query](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-custom-query.png)

## Show In Viewer

When the `Show in Viewer` option is enabled in the Dashboard Parameters window, then the parameters added in the dashboard will be available in the dashboard preview.

![Show in viewer option](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-showinviewer.png)

## Set first value

When the `Set first value` option is enabled in the Dashboard Parameters window, only then first value is selected from the list of selected values for the parameter.

![Set first value option](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-setfirstvalue.png)

## Edit a Dashboard parameter

Select a parameter from the left panel. Modify the parameters and click the `Update`. 

![Update dashboard parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/update-dashboard-parameter.png)

## Remove a Dashboard Parameter

Select a parameter from the left panel and remove the parameter using the delete icon.

![Delete dashboard parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-delete.png)

## Uses of Dashboard parameters

The dashboard parameters can be used in the expression, stored procedures, and  custom query.

## Expression

Select the parameter from the `Column Settings` or use the following syntax to create a expression with dashboard parameter.

 Syntax: `@{{:ParameterName}}`

 For range type parameter, syntax should be provided as follows.

 Syntax:`@{{:ParameterName.START}}` or `@{{:ParameterName.END}}`

![Use dashboard parameter in expression column](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-expression.png)

Those parameters, which are created using the list mode, will not be used in expression.

## Stored Procedure

Choose the parameter option from the stored procedure parameter window. Available parameter will be listed in value drop-down box.

![Use dashboard parameter in stored procedure](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-SP.png)

You can use the range type parameters as follows.

![Range type parameter in stored procedure](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-SP-range.png)

## Custom Query

Press the key `Shift+2` to list the available parameters. You can use it anywhere in query editor window.

Another way is, user can manually type the required parameter in code view using the syntax.

Syntax: `@{{:ParameterName}}`

 For range type parameter, syntax should be provided as follows.

Syntax: `@{{:ParameterName.START}}` or `@{{:ParameterName.END}}`

![Use dashboard parameter in code view](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-code-view.png)

## Conditions to use list-mode type with multiple selected values

`Expression`: You can prefer the ‘CONCAT’ function.

Example: `CONCAT([Parameter1])`

`Stored Procedure`: You should create a stored procedure using the logic trick. Because, SQL stored procedure accepts only single object as parameter. However, you can pass multiple values as comma separated single string to the parameter by a trick.

`Custom Query`: You can use this dashboard parameter with multiple values only using IN query.

Example: `Select * from Table_Name where ColumnName in (@{{:ParameterName}})`

## Uses of Dashboard Parameter on other data source

User can use the parameter from the cross data source using the following syntax.

Syntax: `@{{:DatasourceName.ParameterName}}`

![Use dashboard parameter cross data source](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-cross-datasource.png)

## Change the Dashboard Parameter value dynamically

The dashboard parameters used the dashboards, user can update the parameter value dynamically in view mode.

Click dashboard parameter icon to update the dashboard parameters.

![Dashboard parameter icon](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-icon-preview.png)

Now, the list of added parameters will be shown in the following dialog.

![Dashboard parameter viewer dialog](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-viewer.png)

You can change the values and click `Apply` to render the dashboard based on the updated value.

## Change the Dashboard Parameter value in URL

The dashboard parameters used the dashboards, user can update the parameter value in URL. 

You can pass the parameters to a dashboard by including them in a dashboard URL. Passing parameter values within URL will apply filter in the dashboard on initial load itself.

To set a dashboard parameter within a URL, use the following syntax:

<b>For single parameter:</b>

`<parameter1>=<value>`

<b>For multiple parameter:</b>

`<parameter1>=<value>&&<parameter>=<value>`

Using the syntax, you can pass the dashboard parameter value in URL as follows.

`https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?&&<parameter1>=<value1>&&<parameter2>=<value2>`

![Dashboard parameter used in URL filter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-for-url-update.png)

![Dashboard parameter in URl update before](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-before.png)

![Dashboard parameter in URl update after](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-after.png)

## Passing Stored Procedure parameter with URL using the Dashboard Parameter

You can pass the stored procedure parameters to a dashboard by including them in a dashboard URL. Passing parameter values within URL will apply filter in the dashboard on initial load itself. 

To set a dashboard parameter within a URL, use the following syntax:

<b>For single parameter:</b>

`@<parameter>=<value>`

<b>For multiple parameter:</b>

`@<parameter1>=<value1>&&@<parameter2>=<value2>`

<b>For dashboard parameter:</b>

`@<parameter>=<@{{:DashboardParameterName}}>`

> **NOTE:**  Parameter name is case sensitive.
### Supported Data types

•	Character and String

•	Numeric

•	Date and time

•	Binary

For date type parameter values, you can provide the server (where the query will be executed) supported date format as parameter value.

To append your query string with URL, add a prefix (?) to the query string. If (?) is already there in the URL, add a prefix (&&) to the query string.

 `https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?@<parameter1>=<value1>&&@<parameter2>=<value2>`

![Stored procedure URL parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/stored-procedure-url-parameter.png)

Using the dashboard parameter syntax, you can pass the dashboard parameter value in URL as follows.

![Dashboard parametr in URL parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboardparameter-in-url.png)

## Default parameters

Default parameters enhances to filter the data based on the current user. It can be passed in custom query and web URL. Currently, the default parameter is supported with,

•   Full name

•   Email

For the current user, use the following syntax to filter the data based on full name.

Syntax: `@{{:CURRENTUSER.FULLNAME}}`

For the current user, use the following syntax to filter the data based on email.

Syntax: `@{{:CURRENTUSER.EMAIL}}`


### Default parameter in custom query

Include the default parameter by pressing the key `Shift+2`, to list the default parameter along with the available user defined parameters. You can use it anywhere in query editor window.

Another way is, user can manually type the default parameter in code view using the following syntax.

![Use default parameter in custom query](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-code-view-listing.png)

### Default parameter in web URL

You can include the default parameter in the web URL with live connection using the following syntax.

![Use default parameter in web URL](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-web-url.png)

Here, Sales Analysis Dashboard is rendered for two users with full name **ALFKI** and **BERGS**. The default parameter is applied as follows.

![Use default parameter in Sales Analysis Dashboard](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-code-view.png)

For the user **ALFKI**, the dashboard will be rendered as follows.

![Default parameter in Sales Analysis for ALFKI user](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-sample-ALFKI.png)

For the user **BERGS**, the dashboard will be rendered as follows.

![Default parameter in Sales Analysis for BERGS user](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-sample-BERGS.png)


