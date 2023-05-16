---
layout: post
title: AWS OpenSearch data source for Embedded BI  | Bold BI Docs
description: Learn how to create and connect AWS OpenSearch data source in the dashboard widget for your Amazon OpenSearch data using SQL live query in Bold BI application.
canonical: "/embedded-bi/working-with-data-source/data-connectors/aws-opensearch/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to AWS Open Search
The **Bold BI** Dashboard designer supports connecting the AWS Open Search using the [SQL Live Query](https://opensearch.org/docs/latest/search-plugins/sql/index/).

**Supported Server Versions**:
*  Amazon Elastic Search `7.10` and above
* All versions of Open Search

### Prerequisites

To connect Amazon Elasticsearch service, make sure you have enabled the following settings:

PUT _opendistro/_sql/settings <br />

{
   “persistent”:
   { 
      “opendistro.sql.cursor.enabled:true 
   } 
}

## How to create AWS Open Search data source
You can connect your AWS Open Search data source using Elastic Search data source connector. To configure the AWS Open Search data source, follow these below steps: 
1. Open dashboard designer configuration panel and Click `Data Sources` icon to add a new data connection.

     ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Datasourceicon.png#width=359.5px;height=512.2px)

2. Click the `CREATE NEW` button to launch a new connection from the connection panel.

3. Select the Elastic Search connection in the connection panel.

     ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Choosedatasource.png#width=355.5px;height=509.7px)
   
> **NOTE:**  You can also create a data source from the Bold BI home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Select data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Selectdatasource.png#max-width=85%)

## Connect to AWS Open Search
An AWS Open Search data source can be accessed in Bold BI using the live connection mode.

### Create an AWS Open Search data source in Live mode
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Open Search data source: <br/>
1.	Enter a name and description (optional) for the data source. 
2.	To connect to an Amazon Web Service hosted Open Search instance, please use connection type as Open Distro.
3.	Enter a valid Open Search `server` or `hostname` in the Server Name text box.
4.	Enter the `port`, in which the server is running in the port text box.
5.  Choose the `Live` mode option for this connection.
6.	Enter a valid `username` in the Username text box.
7.	Enter a valid `password` in the Password text box.
8.	Click Connect to connect the AWS Open Search server with the configured details.

     ![Open search connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/opendistrolive.png#max-width=100%)

### Create an AWS Open Search data source in Extract mode
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Open Search data source: <br/>
1.	Enter a name and description (optional) for the data source. 
2.	To connect to an Amazon Web Service hosted Open Search instance, use the connection type as Open Distro.
3.	Enter a valid Open Search `server` or `hostname` in the Server Name text box.
4.	Enter the `port`, in which the server is running in the port text box.
5.  Choose the `Extract` mode option for this connection.
6.	Enter a valid `username` in the Username text box.
7.	Enter a valid `password` in the Password text box.
8.	Click Connect to connect the AWS Open Search server with the configured details.

     ![Open search connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/opendistroextract.png#max-width=100%)

**NOTE:**  You can connect with Elasticsearch database by selecting connection type as Elasticsearch SQL. Please click [here](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/elastic-search/) for Elasticsearch data source connection.

> **NOTE:** You can also connect through the `Custom query` support on the extract mode of connection by providing the valid SQL query in both the Elastic search SQL and Open distro connection types.

![Custom query connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/customquery.png#max-width=70%)

### Data Transformation

1.	After connecting the data source, the data design view page will be opened. On this page, the list of schemas and tables from the AWS Open Search server will be shown in a  `treeview` section.

     ![Tree view](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Treeview.png#max-width=100%)

2.	Now, you can drag and drop the required table from the `tree view` list.

     ![Drag and drop table](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Draganddroptable.png#max-width=100%)

3.	After dragging and dropping the required table, you can do data modeling such as  [Formatting Columns](/embedded-bi/working-with-data-source/transforming-data/), [Configure Data Filters](/embedded-bi/working-with-data-source/transforming-data/), and [Configure Expression Columns](/embedded-bi/working-with-data-source/transforming-data/) can be done.

### Data Preview
1.	To view the data from the selected table, select the `Update` button.

     ![Update values](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Updatevalues.png#max-width=100%)

2.	Now, the data from the selected table will be shown.

     ![Table values retrieve](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Retrievedvalues.png#max-width=100%)
	
3.	Click `Save` to save the data source with a relevant name.

     ![Save data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Amazon-opensearch/Savedatasource.png#max-width=100%)	

> **NOTE:** Amazon Open Search have the following Limitations:  <br />
•	Joins are not supported and thrown error message.  <br />
•	Code view switching is restricted as applying grouping for sub queries is unsupported.  <br />
•	Virtual scrolling is restricted for now as we did not have SQL function for the operation.  <br />
•	Top N option in initial filters are unsupported as join command is not supported.  <br />
•	Expressions which use today() and now functions are unsupported in widgets.  <br />
•	The data sampling feature is restricted, as applying a limit in a subquery is not supported. <br />

## Connecting Bold BI to AWS Open Search Data Source via REST API

### Prerequisites 

**Supported Server Versions**:
*  Amazon Elastic Search `7.10` and above
* All versions of Open Search

To connect Amazon Elasticsearch service, make sure you have enabled the following settings:

PUT _opendistro/_sql/settings <br />

{
   “persistent”:
   { 
      “opendistro.sql.cursor.enabled:true 
   } 
}

Type while creating the data source needs to be elasticsearch or awsopensearch.

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
   <td>ConnectionType</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   Connection Type must be Open Distro</td>
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
   Port number used to connect to opensearch</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid username for the connection.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid Password for the connection.</td>
   </tr>
   <tr>
   <td>Tablename</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   Enter a valid Tablename</td>
   </tr>
   <tr>
   <td>AdvancedSettings</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   Additional optional connection parameters can be provided. By default, it is empty.</td>
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

### Connection Sample

#### For creating connection:

``` json
"Connection":
{
"ConnectionType": "Open Distro",
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
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

```

#### For editing connection:

``` json
"Connection":
{
"ConnectionType": "Open Distro",
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
"Tablename": "string",
"AdvancedSettings": "string",
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

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)
