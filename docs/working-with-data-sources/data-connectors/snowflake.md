---
layout: post
title: Snowflake – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Snowflake, an analytic data warehouse with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Snowflake data source
The Bold BI dashboard designer supports connecting to Snowflake database through SQL Live query.

**Supported Server Editions:** Standard, Enterprise and Business Critical

## Choose Snowflake data source
To configure the Snowflake data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Snowflake** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Snowflake/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Snowflake/ChooseDS_server.png)

## Connect to Snowflake
### Create Snowflake data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a Snowflake data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid Snowflake server or host name in the Server Name text box.
For example, `https://dum421.west-europe.azure.snowflakecomputing.com` 
3. Enter a valid Snowflake user name in the User Name text box.
4. Enter a valid Snowflake password in the Password text box.
5. Enter a valid Snowflake database name in the Database text box.

   ![Snowflake Connection](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Snowflake_newconnection.png)

There are two connection types in a data source:
* Live mode
* Extract mode

## Live mode connection
In this type of connection, data is directly fetched from the source. Select the Live mode option for this connection.

   ![Snowflake Live Connection](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Snowflake_livemode.png)

### Data Preview
1. Click **Connect** to establish a connection with the Snowflake server using the configured details.
The schema represents the collection of lists retrieved from the Snowflake server. This dialog displays a treeview list of schemas and their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    Either you can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection
In this connection type, a data source is fetched from the source periodically. Choose the Extract mode option for this connection.

   ![Snowflake Connection](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Snowflake_extractmode.png)

> **NOTE:**  Initially, data will be extracted based on the maximum number of rows selected in order to proceed with data model creation. The remaining records (with no limit) will be extracted during the next refresh.  <br /> 
  ![Max rows option](/static/assets/working-with-datasource/data-connectors/images/Snowflake/maxRowOption.png#max-width=60%)
	
### Refresh settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Snowflake_Refresh_Setting.png)

2. Select the recurrence type, recurrence start date, and end date in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* The Application Time Zone is displayed below the date picker. The start time of the schedule is converted to the client's Time Zone and shown on the right side for users' convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to establish a connection with the Snowflake server using the configured details.
2. The Extract Data dialog opens. This dialog has two modes of connection either via Table or [Custom query](https://support.boldbi.com/kb/article/16675/working-with-custom-query-extract-mode-in-bold-bi). Under custom query option, write the required query and click **Connect**.
Under Table option, this dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer. [Incremental Update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update) can be performed in both tables and views. 
The option is available for configuring incremental refresh column for the selected items in the right-side panel. 
      * The table must have a primary key column and date column to configure the incremental refresh option.
      * Views must have a date column to configure the incremental refresh option, and unique column(s) are optional but can be used to update the modified records.

   If you configured it, then the data source will work on [Incremental update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update), otherwise works on [Full load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) concept. And finally click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview_Extract.png#max-width=100%)
   


3. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both Live and Extract mode connections using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to Snowflake using Session Variables

In Bold BI, support for Snowflake session variables has been extended to ensure that user-defined values can be set dynamically before query execution. This enhancement allows more flexible and secure parameter usage during runtime.

Steps to Configure Session Variables in Snowflake Data Source:

**1. Create Data Source with Custom Attribute**

a) When configuring the Snowflake Live connector, include the custom attribute in the Parameters field.
![Connect Using Session Parameter](/static/assets/working-with-datasource/data-connectors/images/Snowflake/ConnectDS_session_param.png)

**2. Add Custom Attribute**

Add a custom attribute in the form of a key-value pair under the data source configuration. This attribute defines session variables that will be passed during query execution.
![Add Custom Attribute](/static/assets/working-with-datasource/data-connectors/images/Snowflake/Add_custom_attribute.png)

**3. Use JSON Template Syntax**

Use the following JSON format with Custom Attribute to define the session variables: 
   ```
   {
    "set_variables": {
        "${{:paramKey}}": "${{:paramValue}}"
        }
    }
   ```
**4. Preview the Data**

a) Once configured, Connect and continue to dashboard page to ensure that the variable is correctly passed and the query executes as expected.
![Preview the data](/static/assets/working-with-datasource/data-connectors/images/Snowflake/preview_snowflake.png)

### For Example - Using Session Variables in Views 
You can also create Snowflake views that reference session variables, as shown below: 

```
//Drop View  

DROP VIEW orderview; 

//SET PARAM  

SET SHIPNAMEPARAM = 'Express'; 

//Check view with SET PARAM 

Create or replace View orderview AS SELECT "ORDERS"."ORDERDATE" AS "ORDERDATE", "ORDERS"."SHIPVIA" AS "SHIPVIA", "ORDERS"."FREIGHT" AS "FREIGHT", "ORDERS"."ORDERID" AS "ORDERID", "ORDERS"."SHIPCOUNTRY" AS "SHIPCOUNTRY", "ORDERS"."SHIPNAME" AS "SHIPNAME" FROM "NULLSCHEMA"."ORDERS" AS "ORDERS" WHERE SHIPNAME = $SHIPNAMEPARAM; 

//Check query with SET PARAM 

SELECT "ORDERS"."ORDERDATE" AS "ORDERDATE", "ORDERS"."SHIPVIA" AS "SHIPVIA", "ORDERS"."FREIGHT" AS "FREIGHT", "ORDERS"."ORDERID" AS "ORDERID", "ORDERS"."SHIPCOUNTRY" AS "SHIPCOUNTRY", "ORDERS"."SHIPNAME" AS "SHIPNAME" FROM "NULLSCHEMA"."ORDERS" AS "ORDERS" WHERE SHIPNAME = $SHIPNAMEPARAM; 
```
#### Sample JSON response  
```
{ 

    "set_variables": { 

    "SHIPNAME": "SHIPNAMEPARAM" 
    }
}
```

## Connecting Bold BI to Snowflake Data Source via REST API

### Prerequisites 

**Supported Server Editions:** Standard, Enterprise and Business Critical

Type while creating the data source needs to be snowflake.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Through the REST API, only the **live mode** data source can be created and edited.

### Parameters for creating Data Source

> **NOTE:** The ability to provide join support is only available during the creation of a new data source. Join in edit connection mode is not supported.

   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>Servername</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   Port number used to connect to snowflake</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid username for the connection</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid Password for the connection</td>
   </tr>
   <tr>
   <td>Database</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   database which needs to be connected</td>
   </tr>
   <tr>
   <td>Schemaname</br></br>
   <b>required for table mode</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Schemaname</td>
   </tr>
   <tr>
   <td>Tablename</br></br>
   <b>required for table mode</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Tablename</td>
   </tr>
   <td>JoinType</br></br>
   <b>Required For Join Info </b> </td>
  <td><code>string</code></br></br>
   Enter a valid JoinType For Example (Inner,Outer)</td>
   </tr>
   <tr>
   <td>LeftTable</br></br>
   <b>Required For Join Info </b> </td>
  <td><code>string</code></br></br>
   Enter a valid Left Table name </td>
   </tr>
   <tr>
   <td>RightTable</br></br>
   <b>Required For Join Info</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Right Table name </td>
   </tr>
   <tr>
   <td>LeftField</br></br>
   <b>Required For Join Info</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Left Table Column Name  </td>
   </tr>
   <tr>
   <td>RightField</br></br>
   <b>Required For Join Info</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Right Table Column Name  </td>
   </tr>
   <tr>
   <td>Condition</br></br>
   <b>Required For Join Info</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Condition For Example (AND,OR)  </td>
   </tr>
   <tr>
   <td>LeftField</br></br>
   <b>Required For Join Info</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Left Table Column Name  </td>
   </tr>
   <tr>
   <td>Operator</br></br>
   <b>Required For Join Info</b> </td>
  <td><code>string</code></br></br>
   Enter a Valid Operator For Example (=,>=)  </td>
   </tr>
   <tr>
   <td>Value</br></br>
   <b>Optional For only Join Info  </b> </td>
  <td><code>string</code></br></br>
   Specifically choose the column values. </td>
   </tr>
   <tr>
   <td>Query</br></br>
   <b>required for code view mode</b> </td>
  <td><code>string</code></br></br>
   Enter a valid Query</td>
   </tr>
   <tr>
   <td>AdvancedSettings</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Additional optional connection parameters can be provided. By default, it is empty.</td>
   </tr>
   <tr>
   <td>CommandTimeout</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
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

#### Parameters for edit the connection while upload the dashboard via API

   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>ServerName</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Port number used to connect to snowflake</br></br>
   </td>
   </tr>
   <tr>
   <td>UserName</br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   A valid username for the connection</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   A valid Password for the connection</td>
   </tr>
   <tr>
   <td>Database</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   database which needs to be connected</td>
   </tr>
   <tr>
   <td>Schema</br></br>
   <b>required for table mode</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Schemaname</td>
   </tr>
   <tr>
   <td>AdvancedSettings</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Additional optional connection parameters can be provided. By default, it is empty.</td>
   </tr>
   <tr>
   <td>CommandTimeout</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Timeout for connection. By default, it is 300</td>
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
  <td><code>string</code></br></br>
   Name of the Expression</br></br>
   </td>
   </tr>
   <tr>
   <td>Expression</br></br></br></br>
   <b>required</b> </br></br>
   </td>
  <td><code>string</code></br></br>
   <a href="/working-with-data-sources/data-modeling/configuring-expression-columns/">
    <div style="height:100%;width:100%">
      Expression
    </div>
   </a> </br></br>
   </td>
   </tr>
   </table>

### Parameters for editing Data Source

> **NOTE:**  To edit the data source via API, all parameters are optional. Only provide the parameter that needs to be changed.

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
  <td><code>string</code></br></br>
   Name of the Expression</br></br>
   </td>
   </tr>
   <tr>
   <td>Expression</br></br></br></br>
   <b>required</b> </br></br>
   </td>
  <td><code>string</code></br></br>
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
  <td><code>string</code></br></br>
   add/delete/edit</br></br>
   By default, it is add.</br></br>
   </td>
   </tr>
   <tr>
   <td>NewName</br></br>
   <b>optional</b> </br></br>
   </td>
  <td><code>string</code></br></br>
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
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
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

#### For creating connection with multiple tables :

``` json
"Connection":
{
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Tables": [
            {
                "Tablename": "string",
                "Schemaname": "string"
            },
            {
                "Tablename": "string",
                "Schemaname": "string"
            }
        ],
"JoinInfo": [
            {
                "JoinType": "string",
                "LeftTable": "string",
                "RightTable": "string",
                "JoinFieldInfos": [
                    {
                        "Condition": "string",
                        "LeftField": "string",
                        "Operator": "string",
                        "RightField": "string",
                        "Value": "string"
                    },
                    {
                        "Condition": "string",
                        "LeftField": "string",
                        "Operator": "string",
                        "RightField": "string",
                        "Value": "string"
                    }
                ]
            }
        ],
"AdvancedSettings": "string",
"CommandTimeout": "string",
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
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
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

> **NOTE:**  Through the Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection":
{
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Query": "string",
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
### Sample connection for editing the connection while uploading the dashboard via API.

```json
"Connection":  {   
       "ServerName": "string",
       "Database": "string",
       "UserName": "string",
       "Password": "string",
       "AdvancedSettings": "string",
       "CommandTimeout": "string",
       "Schema": "string"
  } 
```

## How to filter active warehouse through connection parameters for Snowflake data source

The Bold BI application allows you to filter the warehouse through connection parameters in the Snowflake data source by following these steps.

### Steps to connect the snowflake with the active warehouse

1.	Refer to the [Connecting Bold BI to Snowflake data source](/working-with-data-sources/data-connectors/snowflake/#connecting-bold-bi-to-snowflake-data-source) for successfully connecting to it.

2.	For connecting the [Snowflake](/working-with-data-sources/data-connectors/snowflake/) with warehouse connection, you need to add the connection string **Warehouse=WarehouseName** in the **Additional connection parameters** textbox along with the existing server details and click **Connect.**

    ![Additional COnnection Parameters](/static/assets/working-with-datasource/data-connectors/images/Snowflake/solution-no-active-warehouse.png)

In this way, you can filter the warehouse connection by passing parameters in the connection string.

3.	Drag and drop the table from the table schema in the data design view page.

    ![Table schema](/static/assets/working-with-datasource/data-connectors/images/Snowflake/ssh-tables.png#max-width=70%)

4.	Click **Save** to save the data source with a relevant name in order to proceed with designing a dashboard.

    ![Save option](/static/assets/working-with-datasource/data-connectors/images/Snowflake/ssh-save-option.png#max-width=70%)


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Snowflake Integration](https://www.boldbi.com/integrations/snowflake?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbisnowflakeintegration)

