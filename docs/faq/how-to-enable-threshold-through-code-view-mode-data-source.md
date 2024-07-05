---
layout: post
title: How to enable the threshold through code view mode| Bold BI Docs
description: Learn the steps a user has to follow to enable threshold through code view mode for data sources in Bold BI.
canonical: "/faq/how-to-enable-the-threshold-feature-through-code-view-mode-in-data-source/"
platform: bold-bi
documentation: ug
---

# How to enable the threshold through code view mode in Bold BI

Please follow these steps to enable the threshold in Bold BI.

1. Connect to a data source by providing valid credentials.

2. Drag and drop the table from the table schema onto the data design view page.

3. By default, the data design view opens with design view. Switch to the code view by enabling the slider option in the tools pane in data design view as shown (highlighted) in the following image.
![Code view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Customsql_CodeSlider.png)
* This will open the query editor window as shown below,
![Query Editor](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-QueryEditor.png)

4. In the `Query Editor` window, you can write your own query to access table schema information and create a new data source that can be bound to dashboard widgets. 

5. Click on the `Threshold` icon as shown in the following image.
![Threshold](/static/assets/faq/images/thresholdIcon.png)
![Threshold dialog box](/static/assets/faq/images/threshold-dialog-box.png)
* The threshold dialog box will display after clicking the threshold icon,
how-to-enable-the-threshold-feature-through-code-view-mode-in-datasources
6. You must first select the Threshold checkbox.
7. Then, the Threshold Data Limit input box will be enabled.
Please enter the Threshold Data Limit value now.

8. After writing your query, click the `Execute` button in the tools pane. You can also view the data for your query at the bottom of the Query Editor by clicking `Update`.
![Execute](/static/assets/faq/images/threshold-run-and-update.png)
Then click `Save` to save the data source.
![Save Data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-SaveDataSource.png)

## How to connect BoldBI to a code view mode data source with a threshold via REST API.

**Prerequisites**

Refer the documentation [Rest API - v4.0](/server-api-reference/v4.0/api-reference/) for information pertaining to the REST API.

**Modes**

Only the live mode code view data source with thresholds can be created and edited through the REST API.

**Parameters for creating code view mode data source with threshold**

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
   Port number used to connect to data source</br></br>
   </td>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
    A valid Username for the connection.</td>
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
   <td>Query</br></br>
   <b>required</b> </td>
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
   <tr>
   <td>ThresHold</br></br>
   <b>required</b> </td>
  <td><code>boolean</code></br></br>
   Enable or disable ThresHold. By default, it is false.</td>
   </tr>
   <tr>
   <td>ThresHoldDataLimitValue</br></br>
   <b>required</b> </td>
  <td><code>integer</code></br></br>
   Enter the Threshold Data Limit value.</td>
   </tr>
   </table>

#### For creating code view mode connection with threshold:

``` json
{
  "Name": "string",
  "Type": "string",
  "Description": "string",
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
"Expressions" : 
[{
"Name": "Expression1",
"Expression" : "SUM(numeric expression)"
},
{
"Name": "Expression2",
"Expression" :  "UPPER(string expression)"
}],
"ThresHold": "boolean",
"ThresHoldDataLimitValue": "int",
}
}

```

**Example**

```json
{
  "Name": "Threshold data source",
  "Type": "SQL",
  "Description": "threshold",
  "Connection": 
  {
    "Servername": "localhost",
    "Port": "1234",
    "Username": "ZZZ",
    "Password": "YYY",
    "Database": "AdventureWorks2017",
    "Query": "SELECT [SalesOrderDetail].[SalesOrderID] AS [SalesOrderID] FROM [Sales].[SalesOrderDetail] AS [SalesOrderDetail]",
    "CommandTimeout": "300",
    "ThresHold": true,
    "ThresHoldDataLimitValue": "500"
  }
}

```

![code view mode](/static/assets/faq/images/codeviewt.png)

![threshold](/static/assets/faq/images/trh.png)

##### For editing code view mode connection with threshold:

``` json
{
  "Name": "string",
  "Type": "string",
  "Description": "string",
  "DataSourceId": "string",
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
"Expressions" : 
[{
"Name": "Expression1",
"Expression" : "SUM(numeric expression)"
},
{
"Name": "Expression2",
"Expression" :  "UPPER(string expression)"
}],
"ThresHold": "boolean",
"ThresHoldDataLimitValue": "int",
}
}

```

**Example**

``` json
{
  "Name": "stringthresholdone",
  "Type": "SQL",
  "Description": "stringdesc",
  "DataSourceId":"6a8f300b-c6cc-407b-a2acf1ef",
  "Connection": {
    "Servername": "localhost",
    "Username": "ZZZ",
    "Password": "YYY",
    "Database": "AdventureWorks2017",
    "Query": "SELECT * FROM [Sales].[SalesOrderDetail] AS [SalesOrderDetail]",
    "CommandTimeout": "string",
    "ThresHold": true,
    "ThresHoldDataLimitValue": "1000"
  }
}

```

![edit code view mode](/static/assets/faq/images/editcode.png)

![edit threshold](/static/assets/faq/images/editt.png)

**Limitation**

If the threshold limit is set to 5000 and a query returns more than 5000 rows, a warning message will be displayed to the user as shown below.
![Threshold warning](/static/assets/faq/images/threshold-warning.png)
