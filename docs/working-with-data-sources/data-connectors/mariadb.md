---
layout: post
title: MariaDB – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect MariaDB using SQL Live Query with cloud-hosted Bold BI and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to MariaDB data source
The Bold BI dashboard designer supports connecting to MariaDB database using the SQL Live Query (C# API).

## Choose MariaDB data source
To configure the MariaDB data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **MariaDB** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Mariadb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Mariadb/ChooseDS_server.png)

## Connect to MariaDB
### Create MariaDB data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a MariaDB data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid MariaDB server or host name in the **ServerName** text box.
3. Enter a valid MariaDB username in the **UserName** text box. 
4. Enter a valid MariaDB password in the **Password** text box.
5. Select a database that you want to query from the list of databases associated with the specified MariaDB server in the database combo box.

   ![MariaDB Connection](/static/assets/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Connection.png)

To connect MariaDB with a specific table, enter the property currenttable={tablename} or specifictable={tablename} in the Additional connection parameters text box. The tables can be separated by a comma {table1, table2} to connect with multiple tables.
   ![MariaDB Connection Specific Table](/static/assets/working-with-datasource/data-connectors/images/Mariadb/MariaDBConnectionwithAdditionalParameter.png)

> **NOTE:**  To connect data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the necessary credentials.
![Enable SSH](/static/assets/working-with-datasource/images/enable-ssh.png#max-width=60%)s

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Mariadb/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Mariadb/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect the MariaDB server with configured details. 
The schema represents the collection list retrieved from the MariaDB server. This dialog displays a list of schemas in a treeview and their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

If the table name is provided in the Additional connection parameters text box, only the specified table will be listed.
  ![Treeview specific table](/static/assets/working-with-datasource/data-connectors/images/common/Treeview_schema_specific_table.png)

2. Now, the data design view page with the selected table schema is open. Please drag the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View option to pass a query and display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this type of connection, data is retrieved periodically from a data source. Select the **Extract** mode option for this connection.

![Extract Connection](/static/assets/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Extract_Connection.png)

> **NOTE:** Initially, data will be extracted based on the maximum number of rows selected in order to proceed with creating the data model. The remaining records, of which there is no limit, will be extracted during the next refresh. <br /> 
 ![Max rows option](/static/assets/working-with-datasource/data-connectors/images/Mariadb/maxRowOption.png#max-width=60%)	
 
### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Refresh_Setting.png)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* The Application Time Zone is displayed below the date picker. The start time of the schedule is converted to the client's Time Zone and shown on the right side for user convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to establish a connection with the MariaDB server using the configured details.

2. The Extract data dialog will open. This dialog has two modes of connection either via Table or [Custom query](https://support.boldbi.com/kb/article/16675/working-with-custom-query-extract-mode-in-bold-bi). For the custom query option, input the necessary query and then click **Connect**.
Under Table option, This dialog displays a list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer. [Incremental Update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update) can be performed in both tables and views. 
The option is available for configuring incremental refresh column for the selected items in the right-side panel. 
      * The table must have a primary key column and date column to configure the incremental refresh option.
      * The Views must have a date column to configure the incremental refresh option and unique column(s) is optional which is used to update the modified records.

   If you configured it, the data source will work on [Incremental update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update), otherwise, it will work on the [Full load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) concept. Finally click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview_Extract.png#max-width=100%)

If the table name is provided in the Additional connection parameters text box, only the specified table will be listed for selection.    
   ![Preview_specific_table](/static/assets/working-with-datasource/data-connectors/images/common/Preview_Extract_specific_table.png#max-width=100%)
   
3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

## Connecting Bold BI to MariaDB Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be mariadb.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the live mode data source can be created and edited through the REST API.

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
   Port number used to connect to MariaDB</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid Username for the connection</td>
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
   <td>Servername</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Port number used to connect to MariaDB</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   A valid Username for the connection</td>
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
   <td>Tablename</br></br>
   <b>required for table mode</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Tablename</td>
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

> **NOTE:**  To edit a Data Source via API, all parameters are optional. Only the parameter that needs to be changed should be provided.

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

### Sample connection for editing the connection while uploading the "string" via API.

```json
"Connection":  {   
       "ServerName": "string",
       "Database": "string",
       "UserName": "string",
       "Password": "string",
       "Port": "string",
       "AdvancedSettings": "string",
       "CommandTimeout": "string",
	   "Schema": "string"
  } 
```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
