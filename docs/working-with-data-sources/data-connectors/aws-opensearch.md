---
layout: post
title: AWS OpenSearch data source for Cloud BI | Bold BI Docs
description: Learn how to create and connect AWS OpenSearch data source in the dashboard widget for your Amazon OpenSearch data using SQL live query in Bold BI cloud application.
canonical: "/working-with-data-sources/data-connectors/aws-opensearch/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to AWS Open Search
The **Bold BI** Dashboard designer supports connecting to AWS Open Search using the [SQL Live Query](https://opensearch.org/docs/latest/search-plugins/sql/index/).

**Supported Server Versions**:
*  Amazon Elastic Search `7.10` and above

### Prerequisites
To connect to Amazon Elasticsearch service through Open Search, make sure you have enabled the following settings:

PUT _opendistro/_sql/settings <br />

{
   “persistent”:
   { 
      “opendistro.sql.cursor.enabled:true 
   } 
}

## How to create AWS Open Search data source
You can connect your AWS Open Search data source using the Elastic Search data source connector. To configure the AWS Open Search data source, follow these steps:
1. Open the dashboard designer configuration panel and click on the `Data Sources` icon to add a new data connection.

     ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Datasourceicon.png#width=359.5px;height=512.2px)

2. Click the `CREATE NEW` button to launch a new connection from the connection panel.

3. Select the Elastic Search connection in the connection panel.

     ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Choosedatasource.png#width=355.5px;height=509.7px)
   
> **NOTE:**  You can also create a data source from the Bold BI home page by clicking on the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Select data source](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Selectdatasource.png#max-width=85%)

## Connect to AWS Open Search
An AWS Open Search data source can be accessed in Bold BI using the live connection mode.

### Create an AWS Open Search data source in Live mode
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Open Search data source: <br/>
1.	Enter a name and description (optional) for the data source. 
2.	To connect to an Amazon Web Service hosted Open Search instance, please use the connection type as Open Distro.
3.	Enter a valid Open Search `server` or `hostname` in the Server Name text box.
4.	Enter the `port` in which the server is running in the port text box.
5.  Choose the `Live` mode option for this connection.
6.	Enter a valid `username` in the Username text box.
7.	Enter a valid `password` in the Password text box.
8.	Click Connect to connect the AWS Open Search server with the configured details.

     ![Open search connection](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/opendistrolive.png#max-width=100%)

### Create an AWS Open Search data source in Extract mode
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create an Open Search data source: <br/>
1.	Enter a name and description (optional) for the data source. 
2.	To connect to an Amazon Web Service hosted Open Search instance, use the connection type as Open Distro.
3.	Enter a valid Open Search `server` or `hostname` in the Server Name text box.
4.	Enter the `port` in which the server is running in the port text box.
5.  Choose the `Extract` mode option for this connection.
6.	Enter a valid `username` in the Username text box.
7.	Enter a valid `password` in the Password text box.
8.	Click Connect to connect the AWS Open Search server with the configured details.

     ![Open search connection](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/opendistroextract.png#max-width=100%)

> **NOTE:**  You can connect to the Elasticsearch database by selecting the connection type as Elasticsearch SQL. Please click [here](/working-with-data-sources/data-connectors/elastic-search/) for Elasticsearch data source connection.

> **NOTE:** You can also connect through the `Custom query` support in the extract mode of connection by providing a valid SQL query in both the Elasticsearch SQL and Open Distro connection types.

![Custom query connection](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/customquery.png#max-width=70%)

### Data Transformation

1.	After connecting to the data source, the data design view page will open. On this page, a list of schemas and tables from the AWS Open Search server will be displayed in a `treeview` section.

     ![Tree view](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Treeview.png#max-width=100%)

2.	Now, you can drag and drop the required table from the `treeview` list.

     ![Drag and drop table](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Draganddroptable.png#max-width=100%)

3.	After dragging and dropping the required table, you can do data modeling such as  [Formatting Columns](/working-with-data-sources/data-modeling/), [Configure Data Filters](/working-with-data-sources/data-modeling/), and [Configure Expression Columns](/working-with-data-sources/data-modeling/) can be done.

### Data Preview
1.	To view the data from the selected table, click the `Update` button.

     ![Update values](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Updatevalues.png#max-width=100%)

2.	The data from the selected table will then be displayed.

     ![Table values retrieve](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Retrievedvalues.png#max-width=100%)
	
3.	Click `Save` to save the data source with a relevant name.

     ![Save data source](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Savedatasource.png#max-width=100%)	

> **NOTE:** Amazon Open Search has the following limitations:  <br />
•	Joins are not supported and will throw an error message.  <br />
•	Code view switching is restricted as grouping for sub queries is unsupported.  <br />
•	Virtual scrolling is restricted for now as there is no SQL function for the operation.  <br />
•	The Top N option in initial filters is unsupported as the join command is not supported.  <br />
•	Expressions that use today() and now functions are unsupported in widgets.  <br />
•	The data sampling feature is restricted, as applying a limit in a subquery is not supported. <br />

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Amazon-opensearch/DashboardParameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to AWS Open Search Data Source via REST API

### Prerequisites 

**Supported Server Versions**:
*  Amazon Elastic Search `7.10` and above
* All versions of Open Search

To connect to Amazon Elasticsearch service, make sure you have enabled the following settings:

PUT _opendistro/_sql/settings <br />

{
   “persistent”:
   { 
      “opendistro.sql.cursor.enabled:true 
   } 
}

The type required for creating the data source is elasticsearch or awsopensearch.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the **live mode** data source can be created and edited through the REST API.

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
   <a href="/working-with-data-sources/data-modeling/configuring-expression-columns/">
    <div style="height:100%;width:100%">
      Expression
    </div>
   </a> </br></br>
   </td>
   </tr>
   </table>

### Parameters for editing Data Source

> **NOTE:**  When editing the Data Source via API, all parameters are optional. Only provide the parameter that needs to be changed.

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
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
