---
layout: post
title: Oracle – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Oracle database with Bold BI Embedded and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/oracle/"
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Oracle Database

**Supported Server Versions:** Oracle Database `(11g, 12c, 18c, and 19c)`

   Using the `Oracle` connection type, you can connect an Oracle database.

   Click `Data Source` button in the configuration panel to add a new data connection.
   
   ![Data button](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/datasource.png)
   
   Click `CREATE NEW` to launch a new connection from the connection type panel. 
   
   ![Data source button](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/datasourcebutton.png)
   
   Click `Oracle` connection button in the connection type panel.
   
   ![Oracle button](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/Oracle-button.png)
   
   Set the `server Name` and `port number` where the Oracle service is running. 
   
   `Service Instance Name` is an optional parameter. Set the Service Instance Name if you have specific name for Oracle service: otherwise, Oracle connection will be launched with default service name

   > **NOTE:**  What is Service Instance Name – Service Instance Name is a name given for Oracle Cloud Service. For more details refer [Service Instance Name](https://docs.oracle.com/en/cloud/paas/identity-cloud/uaids/service-instances.html)

   Enter the `user name` and `password` to connect to the Oracle.
   
   Select a database from the drop-down list and click the `Connect` button to connect the Oracle.

   ![Oracle connect](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/Oracle-connect.png)
   
   > **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
   ![Max rows option](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/maxRowOption.png#max-width=45%)		

   The selected database will be opened in the data design view window.

   ![Oracle database](/static/assets/embedded/working-with-datasource/data-connectors/images/oracle/Oracle-database.png)

   Drag and drop the table from table list, and click `Save` button to save the data source with valid name.

## Connecting Bold BI to Oracle Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be oracle.

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
   Port number used to connect to oracle</br></br>
   </td>
   </tr>
   <tr>
   <td>InstanceName</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   InstanceName or service name of the connection</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid username for the connection</td>
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

"Connection": [</br></br>
{</br></br>
"Servername": "string",</br></br>
"Port": "string",</br></br>
"InstanceName": "string",</br></br>
"Username": "string",</br></br>
"Password": "string",</br></br>
"Database": "string",</br></br>
"Schemaname": "string",</br></br>
"Tablename": "string",</br></br>
"AdvancedSettings": "string",</br></br>
"CommandTimeout": "string",</br></br>
"Expressions" : [{</br></br>
"Name": "Expression1",</br></br>
"Expression" : "SUM(numeric expression)"</br></br>
    },</br></br>
    {</br></br>
"Name": "Expression2",</br></br>
"Expression" :  "UPPER(string expression)"</br></br>
}]</br></br>
}</br></br>
]

#### For editing connection:

"Connection": [</br></br>
{</br></br>
"Servername": "string",</br></br>
"Port": "string",</br></br>
"InstanceName": "string",</br></br>
"Username": "string",</br></br>
"Password": "string",</br></br>
"Database": "string",</br></br>
"Schemaname": "string",</br></br>
"Tablename": "string",</br></br>
"AdvancedSettings": "string",</br></br>
"CommandTimeout": "string",</br></br>
"Expressions" : [{</br></br>
"Name": "Expression1",</br></br>
"Expression" : "SUM(numeric expression)",</br></br>
"NewName" : "Sum",</br></br>
"Action": "edit"</br></br>
    },</br></br>
    {</br></br>
"Name": "Expression2",</br></br>
"Expression" :  "UPPER(string expression)"</br></br>
"Action": "delete"</br></br>
}]</br></br>
}</br></br>
]

> **NOTE:**  Through Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

"Connection": [</br></br>
{</br></br>
"Servername": "string",</br></br>
"Port": "string",</br></br>
"InstanceName": "string",</br></br>
"Username": "string",</br></br>
"Password": "string",</br></br>
"Database": "string",</br></br>
"Query": "string",</br></br>
"AdvancedSettings": "string",</br></br>
"CommandTimeout": "string",</br></br>
"Expressions" : [{</br></br>
"Name": "Expression1",</br></br>
"Expression" : "SUM(numeric expression)"</br></br>
    },</br></br>
    {</br></br>
"Name": "Expression2",</br></br>
"Expression" :  "UPPER(string expression)"</br></br>
}]</br></br>
}</br></br>
]

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Oracle Integration](https://www.boldbi.com/integrations/oracle?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbioracleintegration)
   










  
































