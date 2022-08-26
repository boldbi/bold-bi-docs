---
layout: post
title: Configuring Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated expressions using built-in functions in Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/configuring-expression-columns/"
platform: bold-bi
documentation: ug
---

# Configuring Expression Columns in Bold BI Dashboard Designer

  An expression column is used to create an expression which is a combination of data columns, operators and built-in functions. This expression column will act as a calculated measure that can be configured to widget like other normal numeric columns as a quantitative measure.

## Adding an expression column

   An expression field can be added by clicking `Expression` menu in the tool bar of the data design view.

   ![Expression icon](/static/assets/embedded/working-with-datasource/images/expressicon.PNG)

   Click `Add` in the `Query Expressions` window to add a new expression column.

   ![Expression wizard](/static/assets/embedded/working-with-datasource/images/expressiondesignerwizard.PNG)

   Enter a suitable name for the expression in the `Name` text area. By default, it will be Expression1.

   Enter the expression that you like to define in the Expression text area. 
   
  ![Add expression](/static/assets/embedded/working-with-datasource/images/addexpression.PNG)
   
   The syntax for defining a simple expression is,

   `{function name(}[columnname]{operator[columnname]…}`

   Where, content within curly braces is optional.

   Some expressions for reference:

   1)	YEAR([Order Date]) – To compute year of order date.

   2)	COUNTD([EmployeeID]) – To compute distinct count of employees.

   3)	[Freight]+100 – To compute the total with 100 added to Freight.

   Following built-in functions are supported in Expression Designer.

   <table>
   <tr>
   <th>Category</th>
   <th>Functions</th>
   <th>Syntax, Descriptions & Examples</th>
   </tr>
   <td>Numbers</td>
   <td>ABS</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ABS(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the absolute value of a given expression.</br></br>
   <b>Example:</b></br>
   ABS([Freight])</ul>
   </td>
   
   <tr>
   <td>Numbers</td>
   <td>ACOS</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ACOS(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the inverse cosine (also known as arccosine) of the given numeric expression.</br></br>
   <b>Example:</b></br>
   ACOS(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>ASIN</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ASIN(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the inverse sine (also known as arcsine) of the given numeric expression.</br></br>
   <b>Example:</b></br>
   ASIN(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>ATAN</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ATAN(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the inverse tangent (also known as arctangent) of the given numeric expression.</br></br>
   <b>Example:</b></br>
   ATAN(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>CEIL</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   CEIL(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the smallest integer value that is greater than or equal to the given numeric expression.</br></br>
   <b>Example:</b></br>
   CEIL([Freight])
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>COS</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   COS(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the cosine of the angle specified in radians in the given expression.</br></br>
   <b>Example:</b></br>
   COS(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>COT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br>
   COT(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the cotangent of the angle specified in radians in the given expression.</br></br>
   <b>Example:</b></br>
   COT(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>DEGREES</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> 
   DEGREES(numeric_expression)</br></br>
   <b>Description:</b></br>
   Returns the angle in degrees for the one specified in radians in the given numeric expression.</br>
   </br>
   <b>Example:</b></br>
   DEGREES(1.5708)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>EXP</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> EXP(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the exponential value of the given expression.</br>
   </br><b>Example:</b></br>
   EXP([UnitsInStock])</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>FLOOR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> FLOOR(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the largest integer value that is less than or equal to the given numeric expression.
   </br></br>
   <b>Example:</b></br>
   FLOOR([Freight])<ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>MOD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MOD(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the remainder of the first numeric expression divided by the second numeric expression.
   </br></br>
   <b>Example:</b></br>
   MOD(36,6)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>LOG</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LOG(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the logarithm of the given expression to the specified base.
   </br></br>
   <b>Example:</b></br>
   LOG(DEGREES(PI()))</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>PI</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> PI()</br></br>
   <b>Description:</b></br> Returns the constant value of PI.</br></br>
   <b>Example:</b></br>
   EXP(PI())</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>POWER</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> POWER(expression1, expression2)</br></br>
   <b>Description:</b></br> Returns the value of the given expression (expression1) to the specified power (expression2).</br></br>
   <b>Example:</b></br>
   POWER(EXP(1), SIN(90))</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>RADIANS</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RADIANS(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the angle in radians for the one specified in degrees in the given numeric expression.</br></br>
   <b>Example:</b></br>
   RADIANS(90)</ul>
   </td>
   </tr>
    <tr>
   <td>Numbers</td>
   <td>ROUND</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ROUND(numeric_expression)</br></br>
   <b>Description:</b></br> Returns a rounded value.</br></br>
   <b>Example:</b></br>
   ROUND([Freight])</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SIGN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIGN(numeric_expression)</br></br>
   <b>Description:</b></br> Returns a value representing the positive (+1), zero (0), or negative (-1) sign of the given numeric expression.</br></br>
	<b>Example:</b></br>
	SIGN([UnitsOnOrder])</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIN(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the sine of the angle specified in radians in the given expression.</br></br>
   <b>Example:</b></br>
   SIN(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SQRT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SQRT(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the square root of the given numeric expression.</br></br>
   <b>Example:</b></br>
   SQRT([UnitsInStock])</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>TOTALPERCENTAGE</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TOTALPERCENTAGE(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the percentage value for each row from the grand total of the given column.</br></br>
   <b>Example:</b></br>
   TOTALPERCENTAGE([Freight])</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>TAN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TAN(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the tangent of the given numeric expression.</br></br>
   <b>Example:</b></br>
   TAN(0.25)</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>AVG</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> AVG(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the average of the values in the given expression.</br></br>
   <b>Example:</b></br>
   AVG([UnitPrice])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>AVGD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> AVGD(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the average of the Distinct values in the given expression.</br></br>
   <b>Example:</b></br>
   AVGD([UnitPrice])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>COUNT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COUNT(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the number of items in the given expression.</br></br>
   <b>Example:</b></br>
   COUNT([OrderID])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>COUNTD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COUNTD(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the distinct number of items in the given expression.
   </br></br>
   <b>Example:</b></br>
   COUNTD([OrderID])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the maximum value in the given expression.</br></br>
   <b>Example:</b></br>
   MAX([UnitPrice])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br></br>
   <b>Example:</b></br>
   MIN([UnitPrice])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>STDEV</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> STDEV(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the standard deviation of values in the given expression.</br></br>
   <b>Example:</b></br>
   STDEV([OrderID])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>SUM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUM(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the sum of values in the given expression.</br></br>
   <b>Example:</b></br>
   SUM([UnitPrice])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>SUMD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUMD(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the sum of the Distinct values in the given expression.</br></br>
   <b>Example:</b></br>
   SUMD([UnitPrice])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>VAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> VAR(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the variance of values in the given expression.</br></br>
   <b>Example:</b></br>
   VAR([OrderID])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>TOTAL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TOTAL(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the total values in the given expression.</br></br>
   <b>Example:</b></br>
   TOTAL(SUM([UnitPrice]))</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>COALESCE</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COALESCE(exp1,exp2,...exp(n))</br></br>
   <b>Description:</b></br> Returns the first non-NULL expression among its arguments or NULL if all its arguments are NULL.</br></br>
   <b>Example:</b></br>
   COALESCE(3+NULL, 2*NULL, 5*2*7)</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>IF</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IF(expression, true_part, false_part)</br></br>
   <b>Description:</b></br> Returns either true part or false part, depending on the evaluation of the expression.</br></br>
   <b>Example:</b></br>
   IF([CustomerID]='VINET' AND [OrderID]='10248', [Discount], [Discount]+0.1)</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>IFNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IFNULL(expression1, expression2)</br></br>
   <b>Description:</b></br> Returns expression1 if the expression1 evaluates to be not null.</br></br>
   <b>Example:</b></br>
   IFNULL([ShipRegion],'Region not specified')</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>ISNOTNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNOTNULL(expression)</br></br>
   <b>Description:</b></br> Returns true if the given expression evaluates to be not null.</br></br>
   <b>Example:</b></br>
   ISNOTNULL([ShipRegion])</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>ISNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNULL(expression)</br></br>
   <b>Description:</b></br> Returns true if the given expression evaluates to null.</br></br>
   <b>Example:</b></br>
   ISNULL([ShipRegion])</ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>AND</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) AND (expression2)</br></br>
   <b>Description:</b></br> Returns true if both the expressions evaluate to true.</br></br>
   <b>Example:</b></br>
   IF([CustomerID]='VINET' AND [OrderID]='10248', [Discount], [Discount]+0.1)</ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>NOT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOT(expression)</br></br>
   <b>Description:</b></br> Returns the reversed logical value of the expression being evaluated.</br></br>
   <b>Example:</b></br>
   IF(NOT [CustomerID]='VINET', [Freight], [Freight]-100)</ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>OR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) OR (expression2)</br></br>
   <b>Description:</b></br> Returns true if any of the expressions evaluate to true.</br></br>
   <b>Example:</b></br>
   IF([CustomerID]='VINET' OR [OrderID]='10248', [Discount], [Discount]+0.1)</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>CURRENTMONTH</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CURRENTMONTH()</br></br>
   <b>Description:</b></br> Returns the current month.</br></br>
   <b>Example:</b></br>
   CURRENTMONTH()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>CURRENTYEAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CURRENTYEAR()</br></br>
   <b>Description:</b></br> Returns the current year.</br></br>
   <b>Example:</b></br>
   CURRENTYEAR()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATEADD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br>DATEADD(datepart,numeric_expression, date_expression)</br></br>
   <b>Description:</b></br> Adds a time/date interval to the specified date.</br></br>
   <b>Example:</b></br>
    There are different date part syntax for each type of data source connection. Refer to this  <a href=https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/#examples-of-different-data-source-connection-for-dateadd-function>section</a>  for examples</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATESUB</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATESUB(numeric_expression, date_expression)</br></br>
   <b>Description:</b></br> Returns the date subtracted from the specified date.</br></br>
   <b>Example:</b></br>
   DATESUB(7, [OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DAY</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DAY(date_expression)</br></br>
   <b>Description:</b></br> Returns a numeric value representing the day part of the specified date.</br></br>
   <b>Example:</b></br>
   DAY([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DAYDIFF</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DAYDIFF(start_date_expression, end_date_expression)</br></br>
   <b>Description:</b></br> Returns a numeric value representing the difference between two specified dates.</br></br>
   <b>Example:</b></br>
   DAYDIFF(MAX([OrderDate]), ‘1988-08-08’)</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>HOUR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> HOUR(date_expression)</br></br>
   <b>Description:</b></br> Returns the hour of the given date as an integer.</br></br>
   <b>Example:</b></br>
   HOUR([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MINUTE</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MINUTE(date_expression)</br></br>
   <b>Description:</b></br> Returns a numeric value representing the minute part of the date resulted from the specified date expression.</br></br>
   <b>Example:</b></br>
   MINUTE([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MONTH</td>
   <td><ul style="list-style-type:none"> 
   <b>Syntax:</b></br> MONTH(date_expression)</br></br>
   <b>Description:</b></br> Returns a numeric value representing the month part of the date resulted from specified date expression.</br></br>
   <b>Example:</b></br>
   MONTH([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>NOW</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOW()</br></br>
   <b>Description:</b></br> Returns the current date and time.</br></br>
   <b>Example:</b></br>
   NOW()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>PREVIOUSDATE</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> PREVIOUSDATE()</br></br>
   <b>Description:</b></br> Returns the previous date.</br></br>
   <b>Example:</b></br>
   PREVIOUSDATE()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>PREVIOUSMONTH</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> PREVIOUSMONTH()</br></br>
   <b>Description:</b></br> Returns the previous month.</br></br>
   <b>Example:</b></br>
   PREVIOUSMONTH()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>PREVIOUSYEAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> PREVIOUSYEAR()</br></br>
   <b>Description:</b></br> Returns the previous year.</br></br>
   <b>Example:</b></br>
   PREVIOUSYEAR()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>TODAY</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TODAY()</br></br>
   <b>Description:</b></br> Returns the current date.</br></br>
   <b>Example:</b></br>
   TODAY()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>YESTERDAY</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> YESTERDAY()</br></br>
   <b>Description:</b></br> Returns the yesterday date.</br></br>
   <b>Example:</b></br>
   YESTERDAY()</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>YEAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> YEAR(date_expression)</br></br>
   <b>Description:</b></br> Returns a numeric value representing the year part of the date resulting from the specified date expression.</br></br>
   <b>Example:</b></br>
   YEAR([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATENAME</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATENAME(date_part, date_expression)</br></br>
   <b>Description:</b></br> Returns a string representing the specified date part of the given date expression.</br></br>
   <b>Example:</b></br>
   DATENAME(“day”, [OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATEPART</td>
   <td><ul style="list-style-type:none"> 
   <b>Syntax:</b></br> DATEPART(date_part, date_expression)</br></br>
   <b>Description:</b></br> Returns an integer value representing the specified date part of the given date expression.</br></br>
   <b>Example:</b></br>
   DATEPART(“year”, MAX([OrderDate]))</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(expression)</br></br>
   <b>Description:</b></br> Returns the maximum value in the given expression.</br></br>
   <b>Example:</b></br>
   MAX([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(expression)</br></br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br>  </br>
   <b>Example:</b></br>
   MIN([OrderDate])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LEN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEN(string_expression)</br></br>
   <b>Description:</b></br> Returns the number of characters in the given string expression.</br></br>
   <b>Example:</b></br>
   LEN([ShipPostalCode])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>CHAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CHAR(integer_expression)</br></br>
   <b>Description:</b></br> Converts the given integer ASCII code into a character.</br></br>
   <b>Example:</b></br>
   CHAR(70)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>CONCAT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CONCAT(string_expression1, string_expression2,…, string_expressionN)</br></br>
   <b>Description:</b></br> Returns a string value resulting from the concatenation of two or more string values.</br> </br>
   <b>Example:</b></br>
   CONCAT(‘https://en.wikipedia.org/wiki/Main_Page’, [ShipCity])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>CONTAINS</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CONTAINS(string_expression, substring_expression)</br></br>
   <b>Description:</b></br> Returns true if the given string expression contains the specified substring expression.</br></br>
   <b>Example:</b></br>
   CONTAINS([Shipping Address], [ShipCountry])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>ENDSWITH</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ENDSWITH(string_expression substring_expression)</br></br>
   <b>Description:</b></br> Returns true if the given string expression ends with the specified substring expression.</br></br>
   <b>Example:</b></br>
   ENDSWITH([CustomerID], ‘A’)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LEFT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEFT(string_expression, numeric_expression)</br></br>
   <b>Description:</b></br> Returns the specified number of characters from the start of the given string expression.</br></br>
   <b>Example:</b></br>
   LEFT([ShipAddress], 6)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LOWER</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LOWER(string_expression)</br></br>
   <b>Description:</b></br> Returns a lower case converted string value from a given string expression.</br></br>
   <b>Example:</b></br>
   LOWER([ShipCountry])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LTRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LTRIM(string_expression)</br></br>
   <b>Description:</b></br> Returns the string value with any leading blanks from string expression.</br></br>
   <b>Example:</b></br>
   LTRIM(‘Removes trailing spaces.’)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(expression)</br></br>
   <b>Description:</b></br> Returns the maximum value in the given expression.
   </br></br>
   <b>Example:</b></br>
   MAX([ProductName])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(expression)</br></br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br>
   </br><b>Example:</b></br>
   MIN([ProductName])</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>REPLACE</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> REPLACE(string_expression, substring, new_substring)</br></br>
   <b>Description:</b></br> Replaces all occurrences of the substring within the given string expression, with the new_substring.</br></br>
   <b>Example:</b></br>
   REPLACE([ShipCountry],'France','India')</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>RIGHT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RIGHT(string_expression, numeric_expression)</br></br>
   <b>Description:</b></br> Returns the specified number of characters from the end of the given string expression.</br></br>
   <b>Example:</b></br>
   RIGHT([ProductName], 6)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>RTRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RTRIM(string_expression)</br></br>
   <b>Description:</b></br> Returns the string value with any trailing blanks removed from a string expression.</br></br>
   <b>Example:</b></br>
   RTRIM(‘Remove trailing spaces.’)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>STARTSWITH</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> STARTSWITH(string_expression, substring_expression)</br></br>
   <b>Description:</b></br> Returns true if the given string expression starts with the specified substring expression.</br></br>
   <b>Example:</b></br>
   STARTSWITH([CustomerID], ‘A’)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>SUBSTR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUBSTR(string_expression, starting_index, length_of_the_string)</br></br>
   <b>Description:</b></br> Returns a specific length of a string starting from a specific index from the given string expression.</br>
   </br><b>Example:</b></br>
   SUBSTR([CustomerID],1,3)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>TRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TRIM(string_expression)</br></br>
   <b>Description:</b></br> Removes the leading and trailing spaces from the string expression.</br></br>
   <b>Example:</b></br>
   TRIM(‘Remove trailing spaces.’)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>UPPER</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> UPPER(string_expression)</br></br>
   <b>Description:</b></br> Returns an upper case converted string value from a given string expression.</br></br>
   <b>Example:</b></br>
   UPPER([ShipCountry])</ul>
   </td>
   </tr>
   <tr>
   <td>ROW</td>
   <td>RUNNINGCOUNT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RUNNINGCOUNT(aggregate_expression)</br></br>
   <b>Description:</b></br> Returns the running count of each row.</br></br>
   <b>Example:</b></br>
   RUNNINGCOUNT(MAX([OrderID]))</ul>
   </td>
   </tr>
   <tr>
   <td>ROW</td>
   <td>RUNNINGAVG</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RUNNINGAVG(aggregate_expression)</br></br>
   <b>Description:</b></br> Returns the running average of each row.</br></br>
   <b>Example:</b></br>
   RUNNINGAVG(MAX([UnitsInStock]))</ul>
   </td>
   </tr>
   <tr>
   <td>ROW</td>
   <td>RUNNINGMAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RUNNINGMAX(aggregate_expression)</br></br>
   <b>Description:</b></br> Returns the running maximum values of each row.</br></br>
   <b>Example:</b></br>
   RUNNINGMAX(SUM([UnitsInStock]))</ul>
   </td>
   </tr>
   <tr>
   <td>ROW</td>
   <td>RUNNINGMIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RUNNINGMIN(aggregate_expression)</br></br>
   <b>Description:</b></br> Returns the running minimum values of each row.</br></br>
   <b>Example:</b></br>
   RUNNINGMIN(SUM([UnitsInStock]))</ul>
   </td>
   </tr>
   <tr>
   <td>ROW</td>
   <td>RUNNINGSUM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RUNNINGSUM(aggregate_expression)</br></br>
   <b>Description:</b></br> Returns the running sum values of each row.</br></br>
   <b>Example:</b></br>
   RUNNINGSUM(MAX([UnitsInStock]))</ul>
   </td>
   </tr>
   </table>

   Once framing an expression, click `Save` in Query Expression window.

## Examples of different data source connection for DATEADD function

<table>
   <tr>
   <th>Data Source Connection</th>
   <th>Date Part</th>
   <th>Syntax & Examples</th>
   </tr>
   <tr>
   <td rowspan=11>SQL Server</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(d,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year, 2, '2017/08/25')</br></br>
   DATEADD(yy,1,[ModifiedDate])</br></br>
   DATEADD(yyyy,1,[ModifiedDate])</br></br>
   DATEADD(y,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(d,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week, 2, '2017/08/25')</br></br>
   DATEADD(ww,1,[ModifiedDate])</br></br>
   DATEADD(w,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter, 1, '2017/08/25')</br></br>
   DATEADD(qq,1,[ModifiedDate])</br></br>
   DATEADD(q,1,[ModifiedDate])  
   </td></tr>
    <tr>
   <td rowspan=11>MySQL</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate])  
   </td></tr>
    <tr>
   <td rowspan=11>ORACLE</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
     <tr>
   <td rowspan=11>SSAS</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
   <tr>
   <tr>
   <td rowspan=11>Snowflake</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(d,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(days,1,[ModifiedDate])</br></br>
   DATEADD(dayofmonth,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])</br></br>
   DATEADD('year',1,[ModifiedDate])</br></br>
   DATEADD('yy',1,[ModifiedDate])</br></br>
   DATEADD('yyyy',1,[ModifiedDate])</br></br>
   DATEADD("yy",1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(months,1,[ModifiedDate])</br></br>
   DATEADD(mon,1,[ModifiedDate])</br></br>
   DATEADD(mm,1,[ModifiedDate])</br></br>
   DATEADD(mon,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(w,1,[ModifiedDate])</br></br>
   DATEADD(wk,1,[ModifiedDate])</br></br>
   DATEADD(weekofyear,1,[ModifiedDate])</br></br>
   DATEADD(wof,1,[ModifiedDate])</br></br>
   DATEADD(wy,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(q,1,[ModifiedDate])</br></br>
   DATEADD(qtr,1,[ModifiedDate])</br></br>
   DATEADD(qtrs,1,[ModifiedDate])</br></br>
   DATEADD(quarters,1,[ModifiedDate])
   </td></tr>
   <tr>
   <td rowspan=11>Presto</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
    <tr>
   <td rowspan=11>PostgreSQL</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
   <tr>
   <td rowspan=11>GoogleBigQuery</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
    <tr>
   <td rowspan=11>Elastic Search</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(days,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(d,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(years,1,[ModifiedDate])</br></br>
   DATEADD(yy,1,[ModifiedDate])</br></br>
   DATEADD(yyyy,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(months,1,[ModifiedDate])</br></br>
   DATEADD(mm,1,[ModifiedDate])</br></br>
   DATEADD(m,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(weeks,1,[ModifiedDate])</br></br>
   DATEADD(wk,1,[ModifiedDate])</br></br>
   DATEADD(ww,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarters,1,[ModifiedDate])</br></br>
   DATEADD(qq,1,[ModifiedDate])</br></br>
   DATEADD(q,1,[ModifiedDate])
   </td></tr>
   </table>
   
## Examples of different data source connection for DATEADD function

<table>
   <tr>
   <th>Data Source Connection</th>
   <th>Date Part</th>
   <th>Syntax & Examples</th>
   </tr>
   <tr>
   <td rowspan=11>SQL Server</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(d,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year, 2, '2017/08/25')</br></br>
   DATEADD(yy,1,[ModifiedDate])</br></br>
   DATEADD(yyyy,1,[ModifiedDate])</br></br>
   DATEADD(y,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(d,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week, 2, '2017/08/25')</br></br>
   DATEADD(ww,1,[ModifiedDate])</br></br>
   DATEADD(w,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter, 1, '2017/08/25')</br></br>
   DATEADD(qq,1,[ModifiedDate])</br></br>
   DATEADD(q,1,[ModifiedDate])  
   </td></tr>
    <tr>
   <td rowspan=11>MySQL</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate])  
   </td></tr>
    <tr>
   <td rowspan=11>ORACLE</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
     <tr>
   <td rowspan=11>SSAS</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
   <tr>
   <tr>
   <td rowspan=11>Snowflake</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(d,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(days,1,[ModifiedDate])</br></br>
   DATEADD(dayofmonth,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])</br></br>
   DATEADD('year',1,[ModifiedDate])</br></br>
   DATEADD('yy',1,[ModifiedDate])</br></br>
   DATEADD('yyyy',1,[ModifiedDate])</br></br>
   DATEADD("yy",1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(months,1,[ModifiedDate])</br></br>
   DATEADD(mon,1,[ModifiedDate])</br></br>
   DATEADD(mm,1,[ModifiedDate])</br></br>
   DATEADD(mon,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(w,1,[ModifiedDate])</br></br>
   DATEADD(wk,1,[ModifiedDate])</br></br>
   DATEADD(weekofyear,1,[ModifiedDate])</br></br>
   DATEADD(wof,1,[ModifiedDate])</br></br>
   DATEADD(wy,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(q,1,[ModifiedDate])</br></br>
   DATEADD(qtr,1,[ModifiedDate])</br></br>
   DATEADD(qtrs,1,[ModifiedDate])</br></br>
   DATEADD(quarters,1,[ModifiedDate])
   </td></tr>
   <tr>
   <td rowspan=11>Presto</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
    <tr>
   <td rowspan=11>PostgreSQL</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
   <tr>
   <td rowspan=11>GoogleBigQuery</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(day,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(year,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(month,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(week,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarter,1,[ModifiedDate]) 
   </td></tr>
    <tr>
   <td rowspan=11>Elastic Search</td>  
   </tr> 
   <tr>
   <td rowspan=2>day   
   </td> 
   </tr>  
    <tr>
   <td>
   DATEADD(days,1,[ModifiedDate])</br></br>
   DATEADD(dd,1,[ModifiedDate])</br></br>
   DATEADD(d,1,[ModifiedDate])
</td></tr>
   </tr>
   <tr>
   <td rowspan=2>year</td>
   </tr>
   <tr>
   <td>
   DATEADD(years,1,[ModifiedDate])</br></br>
   DATEADD(yy,1,[ModifiedDate])</br></br>
   DATEADD(yyyy,1,[ModifiedDate])
   </td></tr>  
   <tr>
   <td rowspan=2>month</td>
   </tr>
   <tr>
   <td>
   DATEADD(months,1,[ModifiedDate])</br></br>
   DATEADD(mm,1,[ModifiedDate])</br></br>
   DATEADD(m,1,[ModifiedDate])
</td>
</tr>
   <tr>
   <td rowspan=2>week</td>
   </tr>
   <tr>
   <td>
   DATEADD(weeks,1,[ModifiedDate])</br></br>
   DATEADD(wk,1,[ModifiedDate])</br></br>
   DATEADD(ww,1,[ModifiedDate])
 <tr>
   <td rowspan=2>quarter</td>
   </tr>   
   <tr>
   <td>
   DATEADD(quarters,1,[ModifiedDate])</br></br>
   DATEADD(qq,1,[ModifiedDate])</br></br>
   DATEADD(q,1,[ModifiedDate])
   </td></tr>
   </table>

## Deleting an expression column

   Select an expression column in left pane.

   Click `Delete` icon to remove the selected expression column.

   ![Delete icon](/static/assets/embedded/working-with-datasource/images/deleteicon.PNG)
   
## Updating an expression column

   Select an expression column in left pane that you need to update.

   Edit the Name and Expression text areas, if required.

   Click `Save` in Query Expression window to save the modifications handled.
   
## Configuring expression column in widgets
   
   Saved measure expression will be shown in `Measure Columns` section of `ASSIGN DATA` tab like below.
   
   ![Expression columns](/static/assets/embedded/working-with-datasource/images/expressioncolumns.PNG)

  Saved dimension expression will be shown in `Dimension Columns` section of `ASSIGN DATA` tab like below.

  ![Expression columns](/static/assets/embedded/working-with-datasource/images/expressioncolumns1.PNG)
   
   You can also drag and drop expression column into widgets from measure or dimension fields or both. 
   
   ![Aggregation function expression](/static/assets/embedded/working-with-datasource/images/aggregationfunctionsforexpressions.PNG)
   
   You can also apply filters for expression column which is used in widget. For numeric expressions, you can apply filter just like a [measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/). For string and date expressions, you can apply filter just like a [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).
   
  
   ## Related Links
   Blog Post - [https://www.boldbi.com/blog/using-calculated-fields-in-your-dashboard](https://www.boldbi.com/blog/using-calculated-fields-in-your-dashboard)
