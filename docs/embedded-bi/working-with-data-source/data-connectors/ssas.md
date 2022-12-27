---
layout: post
title: Microsoft SSAS – Embedded BI Connector | Bold BI Learning
description: Learn how to connect Microsoft SQL Server Analysis Services (SSAS) with Bold BI Embedded and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/ssas/"
platform: bold-bi
documentation: ug
---
 
# Connecting to Microsoft SQL Server Analysis Services(SSAS) data source
Bold BI supports connecting Microsoft SQL Server Analysis Services (SSAS) database using the SQL MDX Query (C# API).

## Choose a Microsoft SQL Server Analysis Services (SSAS) data source
To configure the Microsoft SQL Server Analysis Services (SSAS) data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft SQL Server Analysis Services** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source server](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/ChooseDS_server.png)

## Connect to Microsoft SQL Server Analysis Services (SSAS)
### Create a Microsoft SQL Server Analysis Services (SSAS) data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens.
Follow the given steps to create a Microsoft SQL Server Analysis Services (SSAS) data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid SSAS server (Syncfusion supports both multi-dimensional tabular mode connection) or host name in the **Server name** text box.
3. Choose **None**, **Windows Authentication**, or **Server Authentication** in Authentication Mechanism combo box.
4. Enter a valid SSAS server username and password, if you choose Server Authentication Mechanism.
5. Select the database you want to query in the listed database associated with the given SSAS Server in **Database** combo box.

   ![SSAS Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/SSAS_Connection.png)

In future, you can edit the connection information using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

### Cube customization
> **IMPORTANT:**  Code view and join operation is not supported and the buttons are always in disable state. And data preview is also not supported for the dragged cube.

1. Click **Connect** to connect the SSAS server with configured details. 
The available Cubes list is shown in treeview for the selected database that are retrieved from the SSAS server.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Treeview_schema.png)

2. In the data design view page, drag and drop the cube.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/QueryEditor.png)

3. Syncfusion only supports String to Date conversion. You can convert the string to date format and then use this column in the filter and widget operations.

   ![Column customization](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Column_customization.png)

4. Click **Save** to save the data source with a relevant name.

## Connect to expression designer
Expression designer is used to create a calculated field or column based on the field(s) or column(s) in selected cube(s).

   ![Expression Designer](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Expression_dialog.png)

### Supported expression list

   <table>
   <tr>
   <th>Function Type</th>
   <th>Function Name</th>
   </tr>
   <td>Numbers</td>
   <td>ABS, ACOS, ASIN, ATAN, COS, DEGREES, EXP, LOG, PI, POWER, RADIAN, ROUND, SIGN, SIN, SQRT, TAN</td>
   <tr>
   <td>Aggregation</td>
   <td>AVG, COUNT, COUNTD, MAX, MIN, STDEV, SUM, VAR</td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>AND, OR, NOT</td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>IF, IFNULL, ISNULL, ISNOTNULL</td>
   </tr>
   <tr>
   <td>Date</td>
   <td>NOW, DATESUB, DATEADD, TODAY</td>
   </tr>
   <tr>
   <td>String</td>
   <td>CHAR, LEN, LEFT, RIGHT, LTRIM, RTRIM</td>
   </tr>
   </table>

### Examples for SSAS supported expressions:
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
   ABS([Average Rate])</ul>
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
   EXP([Growth in Customer Base])</ul>
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
   ROUND([Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SIGN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIGN(numeric_expression)</br></br>
   <b>Description:</b></br> Returns a value representing the positive (+1), zero (0), or negative (-1) sign of the given numeric expression.</br></br>
	<b>Example:</b></br>
	SIGN([Max Quantity])</ul>
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
   SQRT([Order Count])</ul>
   </td>
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
   AVG([Customer Count])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>COUNT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COUNT(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the number of items in the given expression.</br></br>
   <b>Example:</b></br>
   COUNT([Account type])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>COUNTD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COUNTD(expression)</br></br>
   <b>Description:</b></br> Returns the distinct number of items in the given expression.
   </br></br>
   <b>Example:</b></br>
   COUNTD([Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the maximum value in the given expression.</br></br>
   <b>Example:</b></br>
   MAX([Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br></br>
   <b>Example:</b></br>
   MIN([Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>STDEV</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> STDEV(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the standard deviation of values in the given expression.</br></br>
   <b>Example:</b></br>
   STDEV([Average Rate])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>SUM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUM(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the sum of values in the given expression.</br></br>
   <b>Example:</b></br>
   SUM([Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>VAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> VAR(numeric_expression)</br></br>
   <b>Description:</b></br> Returns the variance of values in the given expression.</br></br>
   <b>Example:</b></br>
   VAR([Average Rate])</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>IF</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IF(expression, true_part, false_part)</br></br>
   <b>Description:</b></br> Returns either true part or false part, depending on the evaluation of the expression.</br></br>
   <b>Example:</b></br>
   IF([Average Rate]>50,[Amount],0)</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>IFNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IFNULL(expression1, expression2)</br></br>
   <b>Description:</b></br> Returns expression1 if the expression1 evaluates to be not null.</br></br>
   <b>Example:</b></br>
   IFNULL([Account Type],'Account not specified')</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>ISNOTNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNOTNULL(expression)</br></br>
   <b>Description:</b></br> Returns true if the given expression evaluates to be not null.</br></br>
   <b>Example:</b></br>
   ISNOTNULL([Account Type])</ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>ISNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNULL(expression)</br></br>
   <b>Description:</b></br> Returns true if the given expression evaluates to null.</br></br>
   <b>Example:</b></br>
   ISNULL([Account Type])</ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>AND</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) AND (expression2)</br></br>
   <b>Description:</b></br> Returns true if both the expressions evaluate to true.</br></br>
   <b>Example:</b></br>
   IF([Category]='Accessories' AND [Average Rate]='50', [Amount], 0)</ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>NOT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOT(expression)</br></br>
   <b>Description:</b></br> Returns the reversed logical value of the expression being evaluated.</br></br>
   <b>Example:</b></br>
   IF(NOT [subCategory]='Helmets', [Amount]-1,[Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>OR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) OR (expression2)</br></br>
   <b>Description:</b></br> Returns true if any of the expressions evaluate to true.</br></br>
   <b>Example:</b></br>
   IF([subCategory]='Helmets' OR [Average Rate]>1, [Amount]-1, [Amount])</ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATEADD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br>DATEADD(datepart,numeric_expression, date_expression)</br></br>
   <b>Description:</b></br> Adds a time/date interval to the specified date.</br></br>
   <b>Example:</b></br>
   DATEADD(year,1,[Start Date]) </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATESUB</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATESUB(numeric_expression, date_expression)</br></br>
   <b>Description:</b></br> Returns the date subtracted from the specified date.</br></br>
   <b>Example:</b></br>
   DATESUB(7,[Start Date])</ul>
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
   <td>TODAY</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TODAY()</br></br>
   <b>Description:</b></br> Returns the current date.</br></br>
   <b>Example:</b></br>
   TODAY()</ul>
   </td>
   <tr>
   <tr>
   <td>String</td>
   <td>LEN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEN(string_expression)</br></br>
   <b>Description:</b></br> Returns the number of characters in the given string expression.</br></br>
   <b>Example:</b></br>
   LEN([Accounts])</ul>
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
   <td>LEFT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEFT(string_expression, numeric_expression)</br></br>
   <b>Description:</b></br> Returns the specified number of characters from the start of the given string expression.</br></br>
   <b>Example:</b></br>
   LEFT([Departments],6)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LTRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br>LTRIM(string_expression)</br></br>
   <b>Description:</b></br> Returns the string value with any leading blanks from string expression.</br></br>
   <b>Example:</b></br>LTRIM(‘Remove trailing spaces.’)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>RIGHT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RIGHT(string_expression, numeric_expression)</br></br>
   <b>Description:</b></br> Returns the specified number of characters from the end of the given string expression.</br></br>
   <b>Example:</b></br>
   RIGHT([Departments],6)</ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>RTRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br>RTRIM(string_expression)</br></br>
   <b>Description:</b></br> Returns the string value with any trailing blanks removed from a string expression.</br></br>
   <b>Example:</b></br>RTRIM(‘Remove trailing spaces.’)</ul>
   </td>
   </tr>
   </table>
   
**Note:** Please make sure to configure the string dimension field in the widget along with the created expression field to get the desired results.</br>


## Query filters or Initial filters 
Query filters can be used to filter data for the created data source. For example, if you want to create a data source to show share market data only for year 2018, then you can use this filter.

   ![Query filters](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Filter_Dialog.png)

You can configure filter by dragging the required columns to right side canvas.

   ![Filter DragDrop](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Filter_DragDrop.png)
   
## Connecting through MDX query

You can connect to the data source of certain data connections through custom MDX Query.
By default, the data design view opens with the design view. Switch to the code view by enabling the toggle option in the tools pane in the data design view as shown in the following image.
   
   ![Code view toggle](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/code-view-toggle.png)
   
This will open the query editor window as follows.
   
   ![Query editor window](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/query-editor-window.png)
 
In the Query Editor Window, you can enter the **MDX** Query which helps to access table schema information. After entering your query, click the `Run` button in the tools pane. 
   
   ![MDX query](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/mdx-query.png)
 
You can also view the data for your query at bottom of the Query Editor by clicking `Update`.
  
  ![Preview data](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/preview-mdx-query-data.png) 
  
 ## Features Limitations:

 When you use the Microsoft SQL Server Analysis Services data source, not all the features provided in the Bold BI work the same as with relational data sources or are even available. 
 
 The following table lists the differences.

  <table>
   <tr>
   <th>Feature</th>
   <th>Support Availability</th>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/cloud-bi/managing-resources/manage-data-sources/#extract-mode-connection/">Extract Mode connection</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/">Aggregating Value Columns Based on Fields</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/data-sampling/">Data Sampling</a></td></td>
   <td>Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/iframe-based/dynamic-connection-string/">Dynamic connection string </a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/shared-table/">Shared Tables</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/joining-table/">Joining Tables</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/user-filter/">User Filter</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/cloud-bi/managing-resources/manage-data-sources/">Preview Data source</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/">Expressions</a></td></td>
   <td>
   
   Please find supported expression items <a href="https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/ssas/#supported-expression-list">here</a>.    </br>
   
   Below Expression items are not available in the Expression Module.</br>
   
   <b>Numbers:</b> COT, CEIL, FLOOR</br>

   <b>Aggregation:</b> AVGD, TOTAL, SUMD</br>

   <b>Conditional:</b> COALESCE</br>
    
   <b>Date:</b> CURRENT YEAR, CURRENT MONTH, DATEDIFF, DATENAME, DATEPART, DAY, DAYDIFF, HOUR, 
   MINUTE, MONTH, PREVIOUSMONTH, PREVIOUS YEAR, YEAR, YESTERDAY</br>
   
   <b>String:</b> CONCAT, CONTAINS, ENDSWITH, LOWER, MAX, MIN, REPLACE, STARTSWITH, SUBSTR, TRIM, UPPER</br>
       
   <b>Row:</b> RUNNING COUNT, RUNNING AVG, RUNNING MAX, RUNNING MIN, RUNNING SUM</br>

   </td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/">Sorting</a></td></td>
   <td>Field based sorting support not available</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/visualizing-data/working-with-widgets/tooltip-customization/">Customizing Tooltip</a></td></td>
   <td>Support available for Measure fields</td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/formatting-column/">Formatting Columns</a></td></td>
   <td>Renaming column support not available and date, string to integer, integer to string, date type conversion support not available. </td>
   </tr>
   <tr>
   <td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/ssas/#connecting-through-mdx-query">Code view support</a></td></td>
   <td>Support available for tables Internal Queries </td>
   </tr>
   </table>
 
> **NOTE:**  We have provided the code view mode support in SQL Server Analysis Services using subselects. <br />
 Subselects have the following Limitation:  <br />
 •	Usage of **“WITH”** and **“DAX”** queries is restricted and will be provided in the future through extract mode.  <br />
 •	The **WHERE** clause does not filter the subspace.  <br />
 •	The **WHERE** clause changes the default member in the sub-cube only.  <br />
 •	The **NON-EMPTY** clause is not allowed in an axis clause; use a filter (MDX) function expression instead.  <br />
 •	The **HAVING** clause is not allowed in an axis clause. Use a filter (MDX) function expression instead.  <br />
 For reference, click this [link.](https://docs.microsoft.com/en-us/analysis-services/multidimensional-models/mdx/subselects-in-queries?view=asallproducts-allversions)

## Connecting Bold BI to Microsoft SQL Server Analysis Services(SSAS) via REST API

### Prerequisites

Type while creating the data source needs to be ssas.

[Rest API - v4.0](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/)

### Parameters for creating Data Source

   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>Servername</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>IntegratedSecurity</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   This is used to specify Authentication mechanism. Need to provide true for Windows Authentication, false for Basic Authentication.</br></br>
   default value is false</td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid username. Required if Integrated Security is not provided or is provided as false.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid Password. Required if Integrated Security is not provided or is provided as false.</td>
   </tr>
   <tr>
   <td>Database</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   database which needs to be connected</td>
   </tr>
   <tr>
   <td>Schemaname</br></br>
   <b>required for table mode</b> </td>
   <td>`string`</br></br>
   Enter a valid Schemaname. Need to provide this as Cubes.</td>
   </tr>
   <tr>
   <td>Tablename</br></br>
   <b>required for table mode</b> </td>
   <td>`string`</br></br>
   Enter a valid Tablename</td>
   </tr>
   <tr>
   <td>Query</br></br>
   <b>required for code view mode</b> </td>
   <td>`string`</br></br>
   Enter a valid Query</td>
   </tr>
   <tr>
   <td>Impersonate</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   Enable or disable user impersonation. By default, it is false.</td>
   </tr>
   <tr>
   <td>AdvancedSettings</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   Additional optional connection parameters can be provided. By default, it is empty.</td>
   </tr>
   <tr>
   <td>CommandTimeout</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   Enter a valid Timeout for connection. By default, it is 300</td>
   </tr>
   <tr>
   <td>Expressions</br></br>
   <b>optional</b> </br></br>
   </td>
   <td>`Array of Objects`</br></br></br></br>
   </td>
   </tr>
   </table>

#### Parameters for adding expressions when creating Data Source
   
   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>Name</br></br>
   <b>required</b> </br></br>
   </td>
   <td>`string`</br></br>
   Name of the Expression</br></br>
   </td>
   </tr>
   <tr>
   <td>Expression</br></br></br></br>
   <b>required</b> </br></br>
   </td>
   <td>`string`</br></br>
   <a href="https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/">
    <div style="height:100%;width:100%">
      Expression
    </div>
   </a> </br></br>
   </td>
   </tr>
   </table>

### Parameters for editing Data Source

> **NOTE:**  For editing Data Source via API. All the parameters are optional. The parameter which needs to be changed can be provided.

#### Parameters for modifying expressions when editing Data Source
   
   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>Name</br></br>
   <b>required</b> </br></br>
   </td>
   <td>`string`</br></br>
   Name of the Expression</br></br>
   </td>
   </tr>
   <tr>
   <td>Expression</br></br></br></br>
   <b>required</b> </br></br>
   </td>
   <td>`string`</br></br>
   <a href="https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/">
    <div style="height:100%;width:100%">
      Expression
    </div>
   </a> </br></br>
   </td>
   </tr>
   <tr>
   <td>Action</br></br></br></br>
   <b>optional</b> </br></br>
   </td>
   <td>`string`</br></br>
   add/delete/edit</br></br>
   By default it is add. </br></br>
   </td>
   </tr>
   <tr>
   <td>NewName</br></br>
   <b>optional</b> </br></br>
   </td>
   <td>`string`</br></br>
   For renaming the expression. This is applicable only if the Action is <b>edit</b> </br></br>
   </td>
   </tr>
   </table>

### Connection Sample for Table Mode

#### For creating connection:

``` json
"Connection": [
{
"Servername": "string",
"IntegratedSecurity": "false",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "Cubes",
"Tablename": "string",
"Impersonate": "false",
"AdvancedSettings": "string",
"CommandTimeout": "300",
"Expressions" : [{
"Name": "Expression1",
"Expression" : "SUM(numeric expression)"
    },
    {
"Name": "Expression2",
"Expression" :  "UPPER(string expression)"
}]
}
]
```

#### For editing connection:

``` json
"Connection": [
{
"Servername": "string",
"IntegratedSecurity": "false",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "Cubes",
"Tablename": "string",
"Impersonate": "false",
"AdvancedSettings": "string",
"CommandTimeout": "300",
"Expressions" : [{
"Name": "Expression1",
"Expression" : "SUM(numeric expression)",
"NewName" : "Sum",
"Action": "edit"
    },
    {
"Name": "Expression2",
"Expression" :  "UPPER(string expression)"
"Action": "delete"
}]
}
]
```

### Connection Sample for Code View Mode

``` json
"Connection": [
{
"Servername": "string",
"IntegratedSecurity": "false",
"Username": "string",
"Password": "string",
"Database": "string",
"Query": "string",
"Impersonate": "false",
"AdvancedSettings": "string",
"CommandTimeout": "300",
"Expressions" : [{
"Name": "Expression1",
"Expression" : "SUM(numeric expression)"
    },
    {
"Name": "Expression2",
"Expression" :  "UPPER(string expression)"
}]
}
]
```

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Microsoft SQL Server Analysis Services Integration](https://www.boldbi.com/integrations/microsoft-sql-server-analysis-services?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbissasintegration)
