---
layout: post
title: How to connect SparkSQL in Embedded BI? | Bold BI Docs
description: Learn how to connect and access the SparkSQL database to create a data source, configure the dashboard widget, and embed the dashboards using Bold BI.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to SparkSQL data source
The Bold BI Dashboard designer connects the SparkSQL database using the SQL Live Query.

> **Note:** SparkSQL data source is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## Choose the SparkSQL data source
To configure the SparkSQL data source, follow these steps: 
1. Click the **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/Sparksql/datasource.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
   
   ![Data source Button](/static/assets/working-with-datasource/data-connectors/images/Sparksql/datasourcebutton.png#max-width=60%)
   
3. Select the **SparkSQL** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Sparksql/sparksqlbutton.png#max-width=60%)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from homepage](/static/assets/working-with-datasource/data-connectors/images/Sparksql/selectconnector.png#max-width=100%)

## Connect to SparkSQL
### Create SparkSQL data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a SparkSQL data source: 
1. Enter a name and description(optional) for the data source. 
2. Enter a valid SparkSQL server or hostname in the ServerName text box.
3. Enter its corresponding port in the Port text box.
4. Choose **None** or **BASIC authentication** in the Authentication Mechanism combo box.
5. Enter a valid SparkSQL username and password if you choose the Basic Authentication Mechanism. 
6. Select a database you want to query in the listed database associated with the given SparkSQL server in the database combo box.

   ![Sparksql Connection](/static/assets/working-with-datasource/data-connectors/images/Sparksql/sparksql_connection.png#max-width=60%)

> **NOTE:** To connect data source with SSH, enable the **SSH** check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.
![Enable SSH](/static/assets/working-with-datasource/data-connectors/images/Sparksql/enable-ssh.png#max-width=60%)

### Data Preview
1. Click **Connect** to connect the SparkSQL server with configured details. 
The schema represents the collection list that is retrieved from the SparkSQL server. This dialog displays a list of schemas in the treeview and their corresponding values.
   
   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/Sparksql/Treeview_schema.png#max-width=100%)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/Sparksql/dragtable.png#max-width=100%)

    You can either use the Code View options to pass the query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/Sparksql/CodeViewMode.png#max-width=100%)

3. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

## Connecting Bold BI to SparkSQL Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be sparksql.

[Rest API - v4.0](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/)

### Parameters for creating Data Source

> **NOTE:** The ability to provide join support is available only during the creation of a new data source. Join in edit connection mode is not supported.

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
   Port number used to connect to sparksql</br></br>
   </td>
   <tr>
   <td>AuthenticationType</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   None or Server Authentication. By default, it is None.</td>
   </tr>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b>  </td>
  <td><code>string</code></br></br>
   A valid username for the connection. Required for Server Authentication.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b>  </td>
  <td><code>string</code></br></br>
   A valid Password for the connection. Required for Server Authentication.</td>
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
   <a href="/working-with-data-source/transforming-data/configuring-expression-columns/">
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
  <td><code>string</code></br></br>
   Name of the Expression</br></br>
   </td>
   </tr>
   <tr>
   <td>Expression</br></br></br></br>
   <b>required</b> </br></br>
   </td>
  <td><code>string</code></br></br>
   <a href="/working-with-data-source/transforming-data/configuring-expression-columns/">
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
   By default it is add. </br></br>
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
"Connection": [
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
]

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
"Connection": [
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
]
```

> **NOTE:**  Through Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection": [
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
]
```

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
