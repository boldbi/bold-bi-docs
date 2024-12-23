---
layout: post
title: Microsoft SSAS – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Microsoft SQL Server Analysis Services (SSAS) with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
 
# Connecting to Microsoft SQL Server Analysis Services(SSAS) data source
Bold BI supports connecting Microsoft SQL Server Analysis Services (SSAS) database using the SQL MDX Query (C# API).

## Choose a Microsoft SQL Server Analysis Services (SSAS) data source
To configure the Microsoft SQL Server Analysis Services (SSAS) data source, follow these steps: 
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft SQL Server Analysis Services** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ssas/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source server](/static/assets/working-with-datasource/data-connectors/images/ssas/ChooseDS_server.png)

## Connect to Microsoft SQL Server Analysis Services (SSAS)
### Create a Microsoft SQL Server Analysis Services (SSAS) data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens.
Follow the steps to create a Microsoft SQL Server Analysis Services (SSAS) data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid SSAS server (Syncfusion supports both multi-dimensional tabular mode connection) or host name in the **Server name** text box.
3. Choose **None**, **Windows Authentication**, or **Server Authentication** in the Authentication Mechanism combo box.
4. Enter a valid SSAS server username and password, if you choose Server Authentication Mechanism.
5. Select the database you want to query from the listed databases associated with the given SSAS Server in the **Database** combo box.

   ![SSAS Connection](/static/assets/working-with-datasource/data-connectors/images/ssas/SSAS_Connection.png)

In future, you can edit the connection information using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/ssas/ssasCustom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/ssas/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.
### Cube customization
> **IMPORTANT:** The code view and join operation are not supported, and the buttons are always in a disabled state. Additionally, data preview is also not supported for the dragged cube.

1. Click **Connect** to connect to the SSAS server with the configured details. 
The available list of Cubes is displayed in a treeview for the selected database, which are retrieved from the SSAS server.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/ssas/Treeview_schema.png)

2. In the data design view page, drag and drop the cube.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/ssas/QueryEditor.png)

3. Syncfusion only supports conversion from String to Date. You can convert the string to date format and then use this column in filter and widget operations.

   ![Column customization](/static/assets/working-with-datasource/data-connectors/images/ssas/Column_customization.png)

4. Click **Save** to save the data source with a relevant name.

## Connect to expression designer
The Expression Designer is used to create a calculated field or column based on the field(s) or column(s) in the selected cube(s).

   ![Expression Designer](/static/assets/working-with-datasource/data-connectors/images/ssas/Expression_dialog.png)

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

## Query filters or Initial filters 
Query filters can be used to filter data for the created data source. For example, if you want to create a data source to display share market data only for the year 2018, then you can utilize this filter.

   ![Query filters](/static/assets/working-with-datasource/data-connectors/images/ssas/Filter_Dialog.png)

You can configure the filter by dragging the required columns to the right side canvas.

   ![Filter DragDrop](/static/assets/working-with-datasource/data-connectors/images/ssas/Filter_DragDrop.png)

The condition can be defined based on two options:
1. Custom
2. Parameters
3. Custom Attributes

## Custom

In Custom, The Values will be listed.Select the values and Configure.

![Custom SSAS](/static/assets/working-with-datasource/data-connectors/images/ssas/Custom_ssas.png)

## Parameters

Filter the records based on the dashboard parameter values. This allows for dynamically changing the parameter values in both view and preview modes.

Click on the `Parameters` option as shown below.

![Parameters](/static/assets/working-with-datasource/data-connectors/images/ssas/parameters.png)
   

Select the desired parameter lists from the dropdown menu. The first parameter will be selected by default.

![Parameters](/static/assets/working-with-datasource/data-connectors/images/ssas/parameter_values.png)

To create parameters, follow the instructions provided in [configuring dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/)

## Custom Attributes

Similar to the Parameters, we can configure the filters with Custom Attributes

To create Custom Attributes, follow the instructions provided in [configuring custom attribute](/working-with-data-sources/configuring-custom-attribute/)

## Connecting through MDX query

You can connect to the data source of specific data connections through a custom MDX Query. By default, the data design view opens in the design view. Switch to the code view by enabling the toggle option in the tools pane in the data design view, as shown in the following image.
   
   ![Code view toggle](/static/assets/working-with-datasource/data-connectors/images/ssas/code-view-toggle.png)
   
This will open the query editor window as follows.
   
   ![Query editor window](/static/assets/working-with-datasource/data-connectors/images/ssas/query-editor-window.png)
 
In the Query Editor Window, you can enter the **MDX** Query, which helps access table schema information. After entering your query, click the `Run` button in the tools pane. 
   
   ![MDX query](/static/assets/working-with-datasource/data-connectors/images/ssas/mdx-query.png)
 
You can also view the data for your query at the bottom of the Query Editor by clicking `Update`.
  
  ![Preview data](/static/assets/working-with-datasource/data-connectors/images/ssas/preview-mdx-query-data.png) 
  
 ## Features Limitations:

When using the Microsoft SQL Server Analysis Services data source, not all the features provided in Bold BI work the same as with relational data sources, or they may not even be available.
 
 The following table lists the differences.

  <table>
   <tr>
   <th>Feature</th>
   <th>Support Availability</th>
   </tr>
   <tr>
   <td><a href="/managing-resources/manage-data-sources/#extract-mode-connection/">Extract Mode connection</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/">Aggregating Value Columns Based on Fields</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/data-modeling/data-sampling/">Data Sampling</a></td></td>
   <td>Not applicable</td>
   </tr>
   <tr>
   <td><a href="/embedding-options/iframe-embedding/dynamic-connection-string/">Dynamic connection string </a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/shared-table/">Shared Tables</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/data-modeling/joining-table/">Joining Tables</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/user-filter/">User Filter</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/managing-resources/manage-data-sources/">Preview Data source</a></td></td>
   <td> Not applicable</td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/data-modeling/configuring-expression-columns/">Expressions</a></td></td>
   <td>
   
   Please find supported expression items <a href="/working-with-data-sources/data-connectors/ssas/#supported-expression-list">here</a>.    </br>
   
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
   <td><a href="/visualizing-data/working-with-widgets/advanced-sorting/">Sorting</a></td></td>
   <td>Field based sorting support not available</td>
   </tr>
   <tr>
   <td><a href="/visualizing-data/working-with-widgets/tooltip-customization/">Customizing Tooltip</a></td></td>
   <td>Support available for Measure fields</td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/data-modeling/formatting-column/">Formatting Columns</a></td></td>
   <td>Renaming column support not available and date, string to integer, integer to string, date type conversion support not available. </td>
   </tr>
   <tr>
   <td><a href="/working-with-data-sources/data-connectors/ssas/#connecting-through-mdx-query">Code view support</a></td></td>
   <td>Support available for tables Internal Queries </td>
   </tr>
   </table>
 
> **Notes:**  We have provided the code view mode support in SQL Server Analysis Services using subselects.  <br />
Subselects have the following Limitations:  <br />
•	Usage of **“WITH”** and **“DAX”** queries is restricted and will be provided in the future through extract mode.  <br />
•	The **WHERE** clause does not filter the subspace.  <br />
•	The **WHERE** clause changes the default member in the sub-cube only.  <br />
•	The **NON-EMPTY** clause is not allowed in an axis clause; use a filter (MDX) function expression instead.  <br />
•	The **HAVING** clause is not allowed in an axis clause. Use a filter (MDX) function expression instead.  <br />
For reference, click on the [this documentation](https://docs.microsoft.com/en-us/analysis-services/multidimensional-models/mdx/subselects-in-queries?view=asallproducts-allversions).



## Connecting Bold BI to Microsoft SQL Server Analysis Services(SSAS) via REST API

### Prerequisites

Type while creating the data source needs to be ssas.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

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
   This is used to specify the authentication mechanism. You need to provide "true" for Windows Authentication and "false" for Basic Authentication.</br></br>
   default value is false</td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid username is required if Integrated Security is not provided or is set to false.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid Password is required if Integrated Security is not provided or is set to false.</td>
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
   <a href="/working-with-data-sources/data-modeling/configuring-expression-columns/">
    <div style="height:100%;width:100%">
      Expression
    </div>
   </a> </br></br>
   </td>
   </tr>
   </table>

### Parameters for editing Data Source

> **NOTE:**  To edit a Data Source via API, all parameters are optional. Only provide the parameter that needs to be changed.

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
   <a href="/working-with-data-sources/data-modeling/configuring-expression-columns/">
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
   By default, it is add. </br></br>
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
"Connection":
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

```

#### For editing connection:

``` json
"Connection":
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

```

### Connection Sample for Code View Mode

``` json
"Connection":
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

```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Microsoft SQL Server Analysis Services Integration](https://www.boldbi.com/integrations/microsoft-sql-server-analysis-services?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbissasintegration)