---
layout: post
title: Amazon RDS - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Amazon RDS database with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Amazon RDS data source
The Bold BI Dashboard Designer supports connecting to an Amazon RDS database using SQL Live Query.

## Choose Amazon RDS data source
To choose an Amazon RDS data source, follow these steps:
1. Click on **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Amazon RDS** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/amazonrds/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu in the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/amazonrds/ChooseDS_server.png)

## Connect to Amazon RDS
### Create Amazon RDS data source
After clicking on a data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create an Amazon RDS data source:
1. Enter a name and description (optional) for the data source. 
2. Select a database engine you want to use with the given Amazon RDS Server from the **Database Engine** combo box.
3. Enter a valid Amazon RDS server or host name in the **ServerName** text box.
4. Enter a valid Amazon RDS username in the **UserName** text box.
5. Enter a valid Amazon RDS password in the **Password** text box.
6. Enter a valid Amazon RDS Database in the Database text box or select it from the combo box.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/amazonrds/DataSourcesView.png)

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/amazonrds/rdsCustom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/amazonrds/amazon_dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](/working-with-data-sources/configuring-custom-attribute/) for more details.

### Amazon RDS supported database engine in Bold bi
   * MySQL
   * MariaDB
   * Amazon Aurora MySQL
   * SQL server
   * PostgreSQL
   * Amazon Aurora PostgreSQL
   * Oracle

### Database Engine

   ![Amazon RDS Connection](/static/assets/working-with-datasource/data-connectors/images/amazonrds/Amazonrds_databaseEngine.png)

There are two connection types available in a data source: 

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from the source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/working-with-datasource/data-connectors/images/amazonrds/Amazonrds_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect to the Amazon RDS server with configured details. 
The schema represents the collection list retrieved from the Amazon RDS server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table. 

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View options for passing queries to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this connection type, a data source is fetched from the source periodically. Choose the **Extract** mode option for this connection.

![Extract Connection](/static/assets/working-with-datasource/data-connectors/images/amazonrds/Amazonrds_Extract_Connection.png)

### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click on Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/working-with-datasource/data-connectors/images/Mysql/Mysql_Refresh_Setting.png)

2. Select the recurrence type, recurrence start and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* The Application Time Zone is displayed below the date picker. The start time of the schedule is converted to the client Time Zone and shown on the right side for users' convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect to the Amazon RDS server with configured details.
2. The Extract Data dialog opens. This dialog has two modes of connection either via Table or [Custom query](https://support.boldbi.com/kb/article/16675/working-with-custom-query-extract-mode-in-bold-bi). Under custom query option, write the required query and click **Connect**.
Under Table option, the dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right side panel. If you configured it, then the data source will work on [Incremental update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update), otherwise works on [Full load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) concept. And finally click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview_Extract.png#max-width=100%)

3. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View options for passing a query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In the future, you can edit the connection information for both Live and Extract mode connections using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**
![Custom](/static/assets/working-with-datasource/data-connectors/images/amazonrds/rdsCustom.png)

**Dashboard Parameter**
![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/amazonrds/amazon_dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to Amazon RDS Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be one of the following:

	* amazonrdsmysql
	* amazonrdsmariadb
	* amazonrdsamazonauroramysql
	* amazonrdsamazonaurorapostgresql
	* amazonrdspostgresql
	* amazonrdssqlserver
	* amazonrdsoracle

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the **live mode** data source can be created and edited through the REST API.

### Parameters for creating Data Source

> **NOTE:** Join support can only be provided during the creation of a new data source. Join in edit connection mode is not supported.

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
   Port number used to connect to amazon rds</br></br>
   </td>
   </tr>
   <tr>
   <td>InstanceName</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   InstanceName or service name of the connection. Required for the oracle database engine.</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid user name for the connection</td>
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
   Enter a valid Timeout for the connection. By default, it is 300</td>
   </tr>
   <tr>
   <td>IsEnableSSL</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Enable or disable SSL. Applicable only for the sqlserver database engine.</br></br>
   </td>
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
   <td>ServerName</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Port number used to connect to amazon rds</br></br>
   </td>
   </tr>
   <tr>
   <td>InstanceName</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   InstanceName or service name of the connection. Required for the oracle database engine.</br></br>
   </td>
   </tr>
   <tr>
   <td>UserName</br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   A valid user name for the connection</td>
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
   Enter a valid Timeout for the connection. By default, it is 300</td>
   </tr>
   <tr>
   <td>IsEnableSSL</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enable or disable SSL. Applicable only for the sqlserver database engine.</br></br>
   </td>
   </tr>
    <tr>
   <td>TrustServerCertificate</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   To enable trusting the server's certificate without validation, set it to true. To perform standard SSL certificate validation, set it to false. By default, it is false.</td>
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

> **NOTE:**  When editing a Data Source via API, all parameters are optional. Only the parameter that needs to be changed should be provided.

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
"InstanceName": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
"IsEnableSSL": "string",
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
"InstanceName": "string",
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
"IsEnableSSL": "string",
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
"InstanceName": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
"IsEnableSSL": "string",
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

> **NOTE:**  Through the REST API, the data source can be created or edited with only one table. If a different table is provided in editing the data source, the table will be replaced. The widgets will be retained only if the schema is the same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection":
{
"Servername": "string",
"Port": "string",
"InstanceName": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Query": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
"IsEnableSSL": "string",
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
  "ServerName": "", 
  "Database": "",
  "UserName": "",
  "Password": "",
  "Port": "",
  "SslMode": "",
  "TrustServerCertificate": "",
  "AdvancedSettings": "",
  "CommandTimeout": "" ,
  "Schema": "" 
 } 
```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Amazon RDS Integration](https://www.boldbi.com/integrations/amazon-rds)