---
layout: post
title: Configuring Expression Fields in Bold BI | Bold BI Embedded Docs
description: Learn how to configure expression fields in Bold BI comprising calculated expressions using built-in functions.
platform: bold-bi
documentation: ug
---

# Configuring Expression Columns in Bold BI Dashboard Designer

  An expression column is used to create an expression which is a combination of data columns, operators and built-in functions. This expression column will act as a calculated measure that can be configured to widget like other normal numeric columns as a quantitative measure.

## Adding an expression column

   An expression field can be added by clicking `Expression` menu in the tool bar of the data design view.

   ![Expression icon](/static/assets/working-with-datasource/images/expressicon.PNG)

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
   
   ![Expression columns](/static/assets/working-with-datasource/images/expressioncolumns.PNG)

  Saved dimension expression will be shown in `Dimension Columns` section of `ASSIGN DATA` tab like below.

  ![Expression columns](/static/assets/working-with-datasource/images/expressioncolumns1.PNG)
   
   You can also drag and drop expression column into widgets from measure or dimension fields or both. 
   
   ![Aggregation function expression](/static/assets/working-with-datasource/images/aggregationfunctionsforexpressions.PNG)
   
   You can also apply filters for expression column which is used in widget. For numeric expressions, you can apply filter just like a [measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/). For string and date expressions, you can apply filter just like a [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).
   
  
## Related Links
   Blog Post - <a href="https://www.boldbi.com/blog/using-calculated-fields-in-your-dashboard" target="_blank">Using Calculated Fields in Your Dashboard</a>