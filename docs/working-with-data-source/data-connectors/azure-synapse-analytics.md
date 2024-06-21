---
layout: post
title: Azure Synapse Analytics - Embedded BI Connector | Bold BI
description: Learn how to connect Azure Synapse Analytics using SQL Live Query with Bold BI deployed in your server and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/azure-synapse-analytics/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Azure Synapse Analytics data source
The Bold BI Dashboard Designer supports connecting Azure Synapse Analytics database using SQL Live Query (C# API).

## Choose Azure Synapse Analytics data source
To configure the Azure Synapse Analytics data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure Synapse Analytics** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureSynapseAnalytics/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureSynapseAnalytics/ChooseDS_server.png)

## Connect to Azure Synapse Analytics
### Create Azure Synapse Analytics data source
After clicking a data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a Azure Synapse Analytics data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid server or host name in the **ServerName** text box.
3. Enter a valid username in the **UserName** text box. 
4. Enter a valid password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given Azure Synapse Analytics server in the database combo box.

   ![Azure Synapse Analytics Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureSynapseAnalytics/AzureSynapseAnalytics_Connection.png)

> **NOTE:**  Azure Synapse Analytics supports live mode connection only.

### Data Preview
1. Click **Connect** to connect the Azure Synapse Analytics server with configured details. 
The schema represents the collection list retrieved from the Azure Synapse Analytics server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use  the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Connecting Bold BI to Azure Synapse Analytics Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be azuresynapseanalytics.

[Rest API - v4.0](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/)

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
   <td>Username</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid user name.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid Password.</td>
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
   <td>IsEnableSSL</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   Enable or disable SSL. By default, it is false.</td>
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
"Username": "string",</br></br>
"Password": "string",</br></br>
"Database": "string",</br></br>
"Schemaname": "string",</br></br>
"Tablename": "string",</br></br>
"AdvancedSettings": "string",</br></br>
"IsEnableSSL": false,</br></br>
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
"Username": "string",</br></br>
"Password": "string",</br></br>
"Database": "string",</br></br>
"Schemaname": "string",</br></br>
"Tablename": "string",</br></br>
"AdvancedSettings": "string",</br></br>
"IsEnableSSL": false,</br></br>
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
"Username": "string",</br></br>
"Password": "string",</br></br>
"Database": "string",</br></br>
"Query": "string",</br></br>
"AdvancedSettings": "string",</br></br>
"IsEnableSSL": "string",</br></br>
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

[Azure Synapse Analytics Integration](https://www.boldbi.com/integrations/azure-synapse-analytics)