---
layout: post
title: Config Dashboard Parameter - Embedded BI| Bold BI Documentation
description: Learn how to configure dashboard parameter in Bold BI Embedded through add, edit, delete and mode selection.
platform: bold-bi
documentation: ug
---

# Configuring Dashboard Parameters

Dynamic parameter allows user to execute the custom query or stored procedure dynamically based on the parameter while viewing the dashboard. User can also use the parameter in the expression columns.

## Add a Dashboard Parameters

Users can create the dashboard Parameter at the datasource level. The dashboard parameter icon is provided as shown in the following image.

![Dashboard Parameter icon](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-icon.png)

Open the Dashboard Parameter window. A default parameter will be added as follows.

![Dashboard Parameter window](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-window.png)

## Modes

There are two different modes in the dashboard parameter as follows:

1.	`Literal`: Defines the static value of the parameter. 

2.	`List`: Users can select the multiple values that can be used for initial execution.

## Literal mode

The literal mode allows you to add the text, number, date, boolean, and range type of values.

![Dashboard Parameter Literal Mode](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-mode.png)

Select the String or Number Type and enter the Current Value as shown in the following screenshot.

![Dashboard Parameter String](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-string.png)

Select the Date type and also select the date and time in the date time picker for the date type parameter. The selected date and time values will be filtered based on the selected `Date Format`.

![Dashboard Parameter Date](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-date.png)

Select the Boolean type and also select true or false for boolean type parameter.

![Dashboard Parameter Boolean](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-bool.png)

User can add the description for the dashboard parameter.

![Dashboard Parameter Description](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-description.png)

Click `Save` to save the added parameter. After the parameter saved successfully, the success message is shown in the footer of the dialog and `Add` will be enabled at the footer.

![Dashboard Parameter Literal Mode](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-string-save.png)

User can provide the range values for number and date type parameters on choosing `Selection Type` as range.

![Selection type for Dashboard Parameter](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-selectiontype.png)

To add or edit the relative date range for date type parameters, Select the `Add Relative Date Range` option from drop-down. User can create the relative date ranges.
![Dashboard Parameter relative range](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-relative-range.png)

To remove all relative date range for the data type parameter, Select the `Clear Relative Date` option from drop-down. User can remove all relative ranges.

![Dashboard Parameter relative range clear](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-relative-range-clear.png)

## List Mode

There are two different types in the list mode as follows:

1.	`Manual`: The list mode allows user to add any number of values from a same data type, which can be a text, number, or date. 

2.	`Data Source`: The list mode allows user to select the multiple values from the data source.

## List Manual type

The list type allows user to add values to the list manually.

![Dashboard Parameter - List Manual](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-grid.png)

User can edit the added values using the double click the value. Also, uncheck or check a eye icon to include or exclude the values.

![List mode manual value edit](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-value-edit.png)

Users can uncheck or check the values and include or exclude the values using the multi selection combo box.

![List mode value select](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-value-combo-box.png)

The list values will be shown as follows while viewing the dashboard, and user can select a value from the list.

![List mode preview](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-list-in-preview.png)

User can create parameters with the same name for more than one data sources. When dashboard previewing, data source name will be appended with the parameter name.

![Parameter name in preview](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-duplicate-name.png)

## List Data Source type

There are three different types in the list data source type as follows:

1.	`Data Source`: Data fetched from fields for currently dragged tables. 

2.	`Table`: Data fetched from any of the table from current data source.

3.	`Custom Query`: User can also fetch the data by using the custom query option.


User can select the type of data fetched from `Field From` drop-down.

![List data source Field From](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-field-from.png)

User can select the field where the data to be fetched from `Field` drop-down.

![List data source Field](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-field.png)

User can select or unselect and include or exclude the data from the multi selection combo box.

![List data source Combo box](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-combo-box.png)

In `Table` type parameter, user can select the table from the current data source from `Table` drop-down.

![List data source Table](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-table.png)

In `Custom Query` type parameter, select the `Run` to execute the query.

![List data source Custom Query](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-custom-query.png)

## Show In Viewer

When the `Show in Viewer` option is enabled in the Dashboard Parameters window, then the parameters added in the dashboard will be available in the dashboard preview.

![Show in viewer option](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-showinviewer.png)

## Set first value

When the `Set first value` option is enabled in the Dashboard Parameters window, only then first value is selected from the list of selected values for the parameter.

![Set first value option](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-setfirstvalue.png)

## Edit a Dashboard parameter

Select a parameter from the left panel. Modify the parameters and click the `Update`. 

![Update dashboard parameter](/static/assets/working-with-datasource/dashboard-parameter/images/update-dashboard-parameter.png)

## Remove a Dashboard Parameter

Select a parameter from the left panel and remove the parameter using the delete icon.

![Delete dashboard parameter](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-delete.png)
