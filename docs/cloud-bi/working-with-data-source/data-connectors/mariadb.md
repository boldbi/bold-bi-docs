---
layout: post
title: MariaDB – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect MariaDB using SQL Live Query with cloud-hosted Bold BI and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to MariaDB data source
The Bold BI Dashboard Designer supports connecting the MariaDB database using the SQL Live Query (C# API).

## Choose MariaDB data source
To configure the MariaDB data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **MariaDB** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/ChooseDS_server.png)

## Connect to MariaDB
### Create MariaDB data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a MariaDB data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid MariaDB server or host name in the **ServerName** text box.
3. Enter a valid MariaDB username in the **UserName** text box. 
4. Enter a valid MariaDB password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given MariaDB server in the database combo box.

   ![MariaDB Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Connection.png)

There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect the MariaDB server with configured details. 
The schema represents the collection list retrieved from the MariaDB server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this connection type, a data source is fetched from source periodically. Choose the **Extract** mode option for this connection.

![Extract Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Extract_Connection.png)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
 ![Max rows option](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/maxRowOption.png#max-width=60%)	
 
### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/Mariadb/Mariadb_Refresh_Setting.png)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown at the right-side for users convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/cloud/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect the MariaDB server with configured details.
2. The Extract data dialog opens. This dialog has two modes of connection either via Table or [Custom query](/cloud-bi/faq/working-with-custom-query-extract-mode-in-bold-bi/). Under custom query option, write the required query and click **Connect**.
Under Table option, This dialog displays a list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer. [Incremental Update](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update) can be performed in both tables and views. 
The option is available for configuring incremental refresh column for the selected items in the right-side panel. 
      * The table must have a primary key column and date column to configure the incremental refresh option.
      * The Views must have a date column to configure the incremental refresh option and unique column(s) is optional which is used to update the modified records.

      If you configure it, then the data source will work on [Incremental update](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update), otherwise it will work on [Full load](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) concept. Finally, click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview_Extract.png#max-width=100%)

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

## Connecting Bold BI to MariaDB Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be mariadb.

[Rest API - v4.0](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/)

### Modes

Through the REST API, only the **live mode** data source can be created and edited.

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
   Port number used to connect to MariaDB</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid Username for the connection</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid Password for the connection</td>
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
"Connection": [
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
]
```

#### For editing connection:

``` json
"Connection": [
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
]
```

> **NOTE:**  Through Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection": [
{
"RegionEndpoint": "string",
"AwsAccessKeyId": "string",
"AwsSecretAccessKey": "string",
"OutputLocation": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
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
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)
