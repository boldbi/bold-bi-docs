---
layout: post
title: Amazon Redshift – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect an Amazon Redshift database cluster and read its data into Bold BI Cloud dashboard.
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Amazon Redshift Database

Using the `Amazon Redshift` connection type, you can connect to an Amazon Redshift database.

Click the `Data Source` button in the configuration panel to add a new data connection.

![Data source Image](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/datasource.png#width=352px;height=501.51px)

Click `CREATE NEW` to launch a new connection from the connection type panel.

![Data source Button](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/datasourcebutton.png#width=351px;height=504.4px)

Click the `Amazon Redshift` connection button in the connection type panel.

![Red shift button](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftbutton.png#width=351px;height=504.06px)

Set the `server Name` and `port number` where the Amazon Redshift service is running.

Enter the `user name` and `password` to connect to Amazon Redshift.

There are two connection types available in a data source:

* Live mode
* Extract mode

## Live mode connection

In this type of connection, a data source is directly fetched from the source. Choose the `Live` mode option for this connection.

![Redshift Live mode](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftlivemode.png#width=348px;height=500.95px)

> **NOTE:**  To connect to a data source using **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.
![Enable SSH](/static/assets/working-with-datasource/images/enable-ssh.png#max-width=60%) 

The selected database will open in the data design view window.

![Data Design view](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/datadesignview.png#max-width=100%)

Drag and drop the table from the table list, and click the `Save` button to save the data source with a valid name.

## Extract mode connection

In this type of connection, a data source is fetched from the source periodically. Choose the `Extract` mode option for this connection.

![Redshift Extract Mode](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftExtractmode.png#width=350px;height=503.92px)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
 ![Max rows option](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/maxRowOption.png#max-width=60%)	
 
## Refresh Settings

### Steps to configure the data source refresh settings:

1. Click Refresh Settings in the configuration panel.

![Refresh Setting](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftRefreshSetting.png#width=350px;height=503.25px)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.

     * Data refresh can be scheduled hourly, daily, weekly, and monthly.
     * Application Time Zone is displayed below the date picker. The start time of the schedule is converted to the client Time Zone and shown on the right side for user convenience. After selecting, click `Schedule`.

![Refresh Setting](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/RefreshSetting.png#max-width=100%)

## Preview and data import

1. Click `Connect` to the redshift server with configured details.

2. The Extract Data dialog opens. This dialog has two modes of connection either via Table or [Custom query](https://support.boldbi.com/kb/article/16675/working-with-custom-query-extract-mode-in-bold-bi). Under custom query option, write the required query and click **Connect**.
Under the Table option, this dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right-side panel. If you configure it, then the data source will work on [Incremental update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update), otherwise works on [Full load ](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) concept. And finally click `Connect`.

![Preview Extract](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/PreviewExtract.png#max-width=100%)

1. Now, the data design view page with the selected table schema opens. Drag the table.

![Query Editor Extract](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/QueryEditorExtract.png#max-width=100%)

* You can use the Code View option for passing a query to display data.

![Code view mode extract](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/CodeViewModeExtract.png#max-width=100%)

Click `Save` to save the data source with a relevant name.

> **NOTE:** In the future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/amazon-redshift/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to Amazon Redshift Data Source via REST API

### Prerequisites 

The type when creating the data source needs to be redshift.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the **live mode** data source can be created and edited through the REST API.

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
   Port number used to connect to redshift instance.</br></br>
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
   Port number used to connect to redshift instance.</br></br>
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
   Enter a valid Schema</td>
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
   <td>TrustServerCertificate</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   To enable trusting the server's certificate without validation, set it to true. To perform standard SSL certificate validation, set it to false. By default, it is false.</td>
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

> **NOTE:**  To edit the Data Source via the API, all parameters are optional. Only the parameter that needs to be changed should be provided.

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
        ]
    },
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

> **NOTE:**  Through the Rest API, the data source can be created or edited using only one table. If a different table is provided for editing the data source, the table will be replaced. The widgets will be retained only if the schema is the same as the previous table.

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

### Sample connection for editing the connection while uploading the dashboard via API.

```json
"Connection":  {
    "ServerName": "string", 
    "Database": "string",
    "UserName": "string",
    "Password": "string",
    "Port": "string",
    "SslMode": "string",
    "TrustServerCertificate": "string",
    "AdvancedSettings": "string",
    "CommandTimeout": "string",
    "Schema": "string"
  } 
```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Blog post for Amazon Redshift](https://www.boldbi.com/blog/unlock-actionable-insights-from-amazon-redshift-data)

[Amazon Redshift Integration](https://www.boldbi.com/integrations/amazon-redshift)