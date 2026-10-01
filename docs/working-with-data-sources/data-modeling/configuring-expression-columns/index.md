---
layout: post
title: Configuring Expression Fields in Bold BI | Bold BI Embedded Docs
description: Learn how to configure expression fields in Bold BI comprising calculated expressions using built-in functions.
platform: bold-bi
documentation: ug
---

# Configuring Expression Columns in Bold BI Dashboard Designer

An expression column lets you create custom calculations without modifying the original data. By combining data columns, operators, and built-in functions, you can generate calculated values that can be used as quantitative measures in widgets.

## Expression Types

You can create expressions in the following ways:

1. **Data Source Expressions** 

2. **Dashboard Expressions**.

To create either a Data Source Expression or a Dashboard Expression, click the Add Expression icon in the dashboard design view, as shown in the following image.

 ![Expression wizard](/static/assets/working-with-datasource/images/image.png)

## Data Source Expressions

Data Source Expressions are created and managed at the data source level. They are stored as part of the data source configuration and are available in any dashboard that uses the data source.

Only users with permission to access and edit the data source can create or modify Data Source Expressions. Existing Data Source Expressions can be used by all users who have access to the dashboard.

> **Note:** Data Source Expressions retain their original expression names and do not include any suffix. In the user interface, they are identified with the **DS** indicator.

## Dashboard Expressions

Dashboard Expressions are created and managed at the dashboard level for a selected data source. These calculated fields are stored as part of the dashboard configuration and are available only within that dashboard.

Dashboard Expressions enable dashboard authors to create custom calculations without modifying the underlying data source. They can be created and managed even by users who do not have permission to edit the data source, provided they have permission to edit the dashboard.

> **Note:** Dashboard Expressions are internally identified by the **_fxDB** suffix appended to the expression name. In the user interface, they are identified with the **DB** indicator.

 ![Expression wizard](/static/assets/working-with-datasource/images/image1.png)

## Key Differences Between Data Source Expressions and Dashboard Expressions

<table>
  <tr>
    <th></th>
    <th>Data Source Expressions (DS)</th>
    <th>Dashboard Expressions (DB)</th>
  </tr>
  <tr>
    <td><strong>Created At</strong></td>
    <td>Data source level</td>
    <td>Dashboard level</td>
  </tr>
  <tr>
    <td><strong>Stored In</strong></td>
    <td>Data source</td>
    <td>Dashboard</td>
  </tr>
  <tr>
    <td><strong>Available In</strong></td>
    <td>All dashboards using the data source</td>
    <td>Current dashboard only</td>
  </tr>
  <tr>
    <td><strong>Managed By</strong></td>
    <td>Data source / Dashboard</td>
    <td>Dashboard</td>
  </tr>
  <tr>
    <td><strong>Reusable</strong></td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td><strong>Expression Name</strong></td>
    <td>Original name</td>
    <td><code>_fxDB</code> suffix (internal)</td>
  </tr>
  <tr>
    <td><strong>UI Indicator</strong></td>
    <td><strong>DS</strong></td>
    <td><strong>DB</strong></td>
  </tr>
</table>


## Adding an expression column

   An expression field can be added by clicking `Expression` menu in the tool bar of the data design view.

   ![Expression icon](/static/assets/working-with-datasource/images/expressicon2.png)

   Click `Add` in the `Query Expressions` window to add a new expression column.

   ![Expression wizard](/static/assets/working-with-datasource/images/expressiondesignerwizard.PNG)

   Enter a suitable name for the expression in the `Name` text area. By default, it will be Expression1.

   Enter the expression that you like to define in the Expression text area. 
   
  ![Add expression](/static/assets/working-with-datasource/images/addexpression.PNG)
   
   The syntax for defining a simple expression is,

   `{function name(}[columnname]{operator[columnname]…}`

   Where, content within curly braces is optional.

   Some expressions for reference:

   1)	YEAR([Order Date]) – To compute year of order date.

   2)	COUNTD([EmployeeID]) – To compute distinct count of employees.

   3)	[Freight]+100 – To compute the total with 100 added to Freight.

   Following built-in functions are supported in Expression Designer.

    You can explore about each expressions detail here,

[Number Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/number-expressions/)

[Aggregation Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/aggregation-expressions/)

[Conditional Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/conditional-expressions/)

[Logical Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/logical-expressions/)

[Date Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/date-expressions/)

[String Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/string-expressions/)

[Row Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/row-expressions/)

[Level Of Detail Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/level-of-detail-expressions/)

## Deleting an expression column

   Select an expression column in left pane.

   Click `Delete` icon to remove the selected expression column.

   ![Delete icon](/static/assets/working-with-datasource/images/deleteicon.PNG)
   
## Updating an expression column

   Select an expression column in left pane that you need to update.

   Edit the Name and Expression text areas, if required.

   Click `Save` in Query Expression window to save the modifications handled.
   
## Configuring expression column in widgets
   
   Saved measure expression will be shown in `Measure Columns` section of `ASSIGN DATA` tab like below.
   
   ![Expression columns](/static/assets/working-with-datasource/images/expressioncolum2.png)

  Saved dimension expression will be shown in `Dimension Columns` section of `ASSIGN DATA` tab like below.

  ![Expression columns](/static/assets/working-with-datasource/images/expressioncolumn2.png)
   
   You can also drag and drop expression column into widgets from measure or dimension fields or both. 
   
   ![Aggregation function expression](/static/assets/working-with-datasource/images/aggregationfunctionsforexpressions2.png)
   
   You can also apply filters for expression column which is used in widget. For numeric expressions, you can apply filter just like a [measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/). For string and date expressions, you can apply filter just like a [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).
   
  
## Related Links
   Blog Post - <a href="https://www.boldbi.com/blog/using-calculated-fields-in-your-dashboard" target="_blank">Using Calculated Fields in Your Dashboard</a>