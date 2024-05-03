---
layout: post
title: Config Dashboard Parameter - Embedded BI| Bold BI Documentation
description: Learn how to configure dashboard parameter in Bold BI Embedded through add, edit, delete and mode selection.
platform: bold-bi
documentation: ug
---

# Configuring Dashboard Parameters

Dynamic parameters allow users to execute custom queries or stored procedures dynamically based on the parameter while viewing the dashboard. Users can also use the parameter in expression columns.

## Add a Dashboard Parameters

Users can create dashboard parameters at the datasource level. The dashboard parameter icon is provided as shown in the image below.

![Dashboard Parameter icon](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-icon.png)

To open the Dashboard Parameter window, a default parameter will be added as follows.

![Dashboard Parameter window](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-window.png)

## Modes

There are two different modes in the dashboard parameter:

1.	`Literal`: Defines the static value of the parameter. 

2.	`List`: Users can select multiple values for initial execution.

## Literal mode

The literal mode allows users to add text, number, date, boolean, and range type values.

![Dashboard Parameter Literal Mode](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-mode.png)

Select the String or Number Type and enter the Current Value as shown in the screenshot.

![Dashboard Parameter String](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-string.png)

Select the Date type and choose the date and time in the date time picker for the date type parameter. The selected date and time values will be filtered based on the selected `Date Format`.

![Dashboard Parameter Date](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-date.png)

Select the Boolean type and choose true or false for the boolean type parameter.

![Dashboard Parameter Boolean](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-bool.png)

Users can add a description for the dashboard parameter.

![Dashboard Parameter Description](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-description.png)

Click `Save` to save the added parameter. After the parameter is saved successfully, a success message will be shown in the dialog footer and `Add` will be enabled at the footer.

![Dashboard Parameter Literal Mode](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-literal-string-save.png)

Users can provide range values for number and date type parameters by choosing `Selection Type` as range.

![Selection type for Dashboard Parameter](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-selectiontype.png)

To add or edit the relative date range for date type parameters, select the `Add Relative Date Range` option from the drop-down. Users can create relative date ranges.
![Dashboard Parameter relative range](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-relative-range.png)

To remove all relative date ranges for the data type parameter, select the `Clear Relative Date` option from the drop-down. Users can remove all relative ranges.

![Dashboard Parameter relative range clear](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-relative-range-clear.png)

## List Mode

There are two different types in the list mode:

1.	`Manual`: Allows users to add any number of values from the same data type, which can be text, number, or date. 

2.	`Data Source`: Allows users to select multiple values from the data source.

## List Manual type

The list type allows users to add values to the list manually.

![Dashboard Parameter - List Manual](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-grid.png)

Users can edit the added values by double-clicking on the value. Users can also uncheck or check an eye icon to include or exclude values.

![List mode manual value edit](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-value-edit.png)

Users can uncheck or check values and include or exclude values using the multi selection combo box.

![List mode value select](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-value-combo-box.png)

The list values will be shown while viewing the dashboard, and users can select a value from the list.

![List mode preview](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-list-in-preview.png)

Users can create parameters with the same name for more than one data source. When previewing the dashboard, the data source name will be appended with the parameter name.

![Parameter name in preview](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-duplicate-name.png)

## List Data Source type

There are three different types in the list data source type:

1.	`Data Source`: Data fetched from fields for currently dragged tables. 

2.	`Table`: Data fetched from any table from the current data source.

3.	`Custom Query`: Users can fetch data using the custom query option.


Users can select the type of data fetched from the `Field` drop-down.

![List data source Field From](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-field-from.png)

Users can select the field from where the data is to be fetched from the `Field` drop-down.

![List data source Field](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-field.png)

Users can select or unselect and include or exclude data from the multi-selection combo box.

![List data source Combo box](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-combo-box.png)

In `Table` type parameter, users can select the table from the current data source from the `Table` drop-down.

![List data source Table](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-table.png)

In `Custom Query` type parameter, select `Run` to execute the query.

![List data source Custom Query](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-datasource-custom-query.png)

## Show In Viewer

When the `Show in Viewer` option is enabled in the Dashboard Parameters window, the parameters added in the dashboard will be available in the dashboard preview.

![Show in viewer option](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-showinviewer.png)

## Set first value

When the `Set First Value` option is enabled in the Dashboard Parameters window, only the first value is selected from the list of selected values for the parameter.

![Set first value option](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-setfirstvalue.png)

## Edit a Dashboard parameter

Select a parameter from the left panel, modify the parameters, and click `Update`.

![Update dashboard parameter](/static/assets/working-with-datasource/dashboard-parameter/images/update-dashboard-parameter.png)

## Remove a Dashboard Parameter

Select a parameter from the left panel and remove the parameter using the delete icon.

![Delete dashboard parameter](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-delete.png)
