---
layout: post
title: Connect to InfluxDB data source | Cloud BI Dashboard
description: Learn how to create data source by connecting to the InfluxDB data source in Cloud BI Dashboard Designer
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to InfluxDB data source
The Bold BI dashboard designer supports connecting to an InfluxDB database using SQL Live Query (C# API).

**Supported Server Version:** InfluxDB v1.8

## Choose InfluxDB data source
To configure the InfluxDB data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **InfluxDB** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Influxdb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Influxdb/ChooseDS_server.png)

## Connect to InfluxDB
### Create InfluxDB data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create an InfluxDB data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid InfluxDB server or host name in the **ServerName** text box.
3. Enter the port, in which the server is running in the **Port** text box.
4. Choose **None** or **Server Authentication** in the Authentication Mechanism combo box.
5. Enter a valid InfluxDB username and password, if you choose a Server Authentication Mechanism
6. Select a database that you want to query in the listed database associated with the given InfluxDB server in the database combo box.

   ![InfluxDB Connection](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Connection.png)

> **NOTE:**  To connect to a data source with **SSH**, enable the SSH checkbox in the **NEW DATA SOURCE** configuration panel and enter the necessary credentials.
![Enable SSH](/static/assets/working-with-datasource/images/enable-ssh.png#max-width=60%)

### Data Preview
1. Click **Connect** to connect to the InfluxDB server with the configured details. 
The schema represents the collection list retrieved from the InfluxDB server. This dialog displays a list of schemas in a tree view and their corresponding values. Measurements will be listed as tables.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/Influxdb/QueryEditor.png)

    You can use the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/Influxdb/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Influxdb/influxCustom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

### Here is the Bold BI supported features in InfluxDB connector
> **IMPORTANT:**  InfluxDB is a time series database, therefore there are few limitations for the InfluxDB connector in Bold BI's live mode connection.

> **NOTE:**  Joins are not supported for InfluxDB data source in Bold BI.

### Group by and Order by
InfluxDB is a time series database. The data can only be ordered using the time column and can only be grouped by time intervals.

   ![InfluxDB Group by](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Groupby.png)
  
### Expressions
Expressions can be created for numeric field(s) and calculated field(s) in the selected table.

**Supported functions**

<table>   
   <tr>
   <td>
   Function type </td><td>
   Function name
</td></tr>
   <tr>
   <td>
   Numbers</td><td>
   ABS, ACOS, ASIN, ATAN, COS, COT, DEGREES, EXP, LOG, PI, POWER, RADIANS, ROUND, SIN, SQRT, TAN</td></tr>
   <tr>
   <td>
   Aggregation</td><td>
   AVG, COUNT, COUNTD, MAX, MIN, STDEV, SUM</td></tr>
   <tr>
   <td>
   Logical</td><td>
   NOT</td></tr>
   <tr>
   <td>
   Row</td><td>
   RUNNINGCOUNT, RUNNINGAVG RUNNINGMAX, RUNNINGMIN, RUNNINGSUM</td></tr>
   </table>

   ![InfluxDB Expressions](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Expressions.png)

### Filters
You can only filter numeric columns in the query filters on the query designer page.

   ![InfluxDB Filters](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Filters.png)

   ![InfluxDB Filters1](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Filters1.png)
 
### Widget level filtering
You can filter data based on year, month, week, day, and hour for time column only using the Relative Date Filtering.

   ![InfluxDB WidgetLevelFiltering](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_WidgetLevelFiltering.png)
 
[Relative date filtering](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-date-column)

> **NOTE:**  You cannot filter measure columns in the widget level filtering. 

### Top N filters
The data can be applied to the top and bottom filters for the time column based on the measure fields in the selected list.

   ![InfluxDB Top N](/static/assets/working-with-datasource/data-connectors/images/Influxdb/Influxdb_TopN.png)

   (Time column has been filtered top 5 values based on Sum of Alloc)

## Connecting Bold BI to InfluxDB Data Source via REST API

### Prerequisites 

**Supported Server Version:** InfluxDB v1.8

The data source type needs to be InfluxDB when creating the data.

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
   <td>Port</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   Port number used to connect to InfluxDB</br></br>
   </td>
   <tr>
   <td>AuthenticationType</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   None or Server Authentication. By default, it is None.</td>
   </tr>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid username for the connection. Required for Server Authentication.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid Password for the connection. Required for Server Authentication.</td>
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
   Enter a valid Schemaname</td>
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
   <td>IsSshConnection</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   Enable or disable SSH. By default, it is false.</td>
   </tr>
   <tr>
   <td>SshServerName</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   Enter a valid Ssh Server name. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SshPort</br></br>
   <b>optional</b> </td>
   <td>`integer`</br></br>
   Enter a valid Ssh Port number.</td>
   </tr>
   <tr>
   <td>SshUserName</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   Enter a valid Ssh Username. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SshPassword</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   Enter a valid Ssh Password. By default, it is empty.</td>
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
   Port number used to connect to the postgresql</br></br>
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
   <td>AuthenticationType</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   None or Server Authentication. By default, it is None.</td>
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
   <tr>
   <td>IsSshConnection</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   Enable or disable SSH. By default, it is false.</td>
   </tr>
   <tr>
   <td>SshServerName</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Ssh Server name. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SshPort</br></br>
   <b>optional</b> </td>
   <td>`integer`</br></br>
   Enter a valid Ssh Port number.</td>
   </tr>
   <tr>
   <td>SshUserName</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Ssh Username. By default, it is empty.</td>
   </tr>
   <tr>
   <td>SshPassword</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Ssh Password. By default, it is empty.</td>
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

> **NOTE:**  To edit the Data Source via API, all parameters are optional. Only provide the parameter that needs to be changed.

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
   By default, it is add.</br></br>
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
"Port": "string",
"AuthenticationType": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
"IsSshConnection": "false",
"SshServerName": "string",
"SshPort": 0,
"SshUsername": "string",
"SshPassword": "string",
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
"AuthenticationType": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
"IsSshConnection": "false",
"SshServerName": "string",
"SshPort": 0,
"SshUsername": "string",
"SshPassword": "string",
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
"Port": "string",
"AuthenticationType": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Query": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
"IsSshConnection": "false",
"SshServerName": "string",
"SshPort": 0,
"SshUsername": "string",
"SshPassword": "string",
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
       "Port": "string",
       "Schema": "string",
       "AuthenticationType": "string",
       "AdvancedSettings": "string",
       "CommandTimeout": "string"  
  } 
```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)