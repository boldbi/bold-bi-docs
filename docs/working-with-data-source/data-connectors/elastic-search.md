---
layout: post
title: Elastic Search data source for Cloud BI | Cloud Bold BI Docs 
description: Learn how to connect Elastic search data source, and create a data source for widget configuration for your elastic search data using Bold BI Cloud application.
canonical: "/working-with-data-source/data-connectors/elastic-search/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Elastic Search data source
The **Bold BI Cloud** Dashboard designer supports connecting the Elastic Search database using the SQL Live Query. 

**Supported Server Versions**:
*  Elasticsearch `6.8` and above 
*  Amazon Elastic Search `7.10` and above

## Choose an Elastic Search data source
To configure the Elastic Search data source, follow these steps:  
1. Click the `Data Sources` icon in the configuration panel to add a new data connection.

![Data source icon](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Datasourceicon.png#width=359.5px;height=512.2px)

2. Click the `CREATE NEW` button to launch a new connection from the connection panel.

![Create data source](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Newdatasource.png#width=358.5px;height=515.17px)

3. Select the Elastic Search connection in the connection panel.

![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Choosedatasource.png#width=355.5px;height=509.7px)
   
> **NOTE:**  You can also create a data source from the Bold BI home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

![Select data source](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Selectdatasource.png#max-width=85%)

## Connect to Elastic Search
An Elastic Search data source can be accessed in Bold BI using the live connection mode.

### Create an Elastic Search data source
After clicking a data source, the `NEW DATA SOURCE` configuration panel opens. Follow the given steps to create an Elastic Search data source: <br/>
1.	Enter a name and description (optional) for the data source. 
2.	Select a connection type you want to use with Elastic Search from the `Connection Type` drop-down box. 

There are two connection types available in the Elastic Search connector:
   *  Elasticsearch SQL
   *  Open Distro
	
![Elastic search Connection](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Connectiontype.png#width=349px;height=496.75px)

There are two connection types available in a data source
   *  Live mode
   *  Extract mode

### Connect using the Elasticsearch SQL connection type in Live mode
1.	Enter a valid Elastic Search `server` or `hostname` in the Server Name text box.
2.	Enter the `port` in which the server is running in the port text box.
3.	The Authentication type provided is determined by the configuration of the Elastic Search server.

   *  None
   *  Basic HTTP Authentication	

![Choose Authentication](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Authenticationtype.png#width=358.5px;height=511.06px)

4.	If the Elastic Search server uses the `Basic HTTP Authentication` in the Authentication type, then, enter a valid Elastic Search username in the `Username` text box and enter a valid Elastic Search `password` in the Password text box.
5.	Choose the `Live` mode option for this connection.
6.	Select a `database` that you want to query in the listed database associated with the given Elastic Search server in the database drop-down box.
7.	Click `Connect` to connect the Elastic Search server with the configured details.

![Data source connection](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/elasticsearchlive.png#max-width=100%)

> **NOTE:** To connect data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.

![Enable SSH](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/enable-ssh.png#max-width=45%)

### Connect using the Elasticsearch SQL connection type in Extract mode
1.	Enter a valid Elastic Search `server` or `hostname` in the Server Name text box.
2.	Enter the `port` in which the server is running in the port text box.
3.	The Authentication type provided is determined by the configuration of the Elastic Search server.

   *  None
   *  Basic HTTP Authentication	

![Choose Authentication](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Authenticationtype.png#width=358.5px;height=511.06px)

4.	If the Elastic Search server uses the `Basic HTTP Authentication` in the Authentication type, then enter a valid Elastic Search username in the `Username` text box and enter a valid Elastic Search `password` in the Password text box.
5.	Choose the `Extract` mode option for this connection.
6.	Select a `database` that you want to query in the listed database associated with the given Elastic Search server in the database drop-down box.
7.	Click `Connect` to connect the Elastic Search server with the configured details.

![Data source connection](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/elasticsearchextract.png#max-width=100%)

### Connect using Open Distro connection type

### Prerequisites
To connect Amazon Elasticsearch service through Open Distro, make sure you have enabled settings:

PUT _opendistro/_sql/settings <br />
“persistent”:{ <br />
“opendistro.sql.cursor.enabled”: true <br />
} <br />
}

Please follow these steps to connect using the Open Distro connection type.
1.	Enter a valid Elastic Search `server` or `hostname` in the Server Name text box.
2.	Enter the `port`, in which the server is running in the port text box.
3.	Enter a valid Elastic Search `username` in the Username text box.
4.	Enter a valid Elastic Search `password` in the Password text box.
5.  Select either `Live` or `Extract` mode of connection.
6.	Click `Connect` to connect the Elastic Search server with the configured details.

![Open distro connection](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/opendistrolive.png#max-width=100%)

> **NOTE:** You can also connect through the `Custom query` support on the extract mode of connection by providing the valid SQL query in both the Elastic search SQL and Open distro connection types.

![Custom query connection](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/customquery.png#max-width=70%)

### Data Transformation

1.	After connecting the data source, the data design view page will be opened. On this page, the list of schemas and tables from the Elastic Search server will be shown in a `treeview` section.

![Tree view](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Treeview.png#max-width=100%)

2.	Now, you can drag and drop the required table from the `tree view` list.

![Drag and drop table](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Draganddroptable.png#max-width=100%)

3.	After dragging and dropping the required table, you can do data modeling such as [Joining Tables](/working-with-data-source/transforming-data/), [Formatting Columns](/working-with-data-source/transforming-data/), [Configure Data Filters](/working-with-data-source/transforming-data/), and [Configure Expression Columns](/working-with-data-source/transforming-data/) can be done.

### Data Preview
1.	To view the data from the selected table, select the `Update` button.

![Update values](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Updatevalues.png#max-width=100%)

2.	Now, the data from the selected table will be shown.

![Table values retrieve](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Retrievedvalues.png#max-width=100%)
	
3.	Click `Save` to save the data source with a relevant name.

![Save data source](/static/assets/working-with-datasource/data-connectors/images/Elastic-search/Savedatasource.png#max-width=100%)	

> **NOTE:**  In the future, you can edit the connection information using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option and  <br /> Elastic Search datasource have the following Limitations:  <br />
•	Joins are not supported and thrown error message.  <br />
•	Code view switching is restricted as applying grouping for sub queries is unsupported.  <br />
•	Virtual scrolling is restricted for now as we did not have SQL function for the operation.  <br />
•	Top N option in initial filters are unsupported as join command is not supported.  <br />
•	Expressions which use today() and now functions are unsupported in widgets.  <br />
•	The data sampling feature is restricted, as applying a limit in a subquery is not supported. <br />

## Connecting Bold BI to Elastic Search Data Source via REST API

### Connect using Open Distro Connection Type

The detailed steps to connect using an open distro connection type is explained in the following document.
[AWS Open Search](/working-with-data-source/data-connectors/aws-opensearch/#connecting-bold-bi-to-aws-open-search-data-source-via-rest-api) 


### Connect using ElasticSearch SQL Connection Type

### Prerequisites 

**Supported Server Versions**:
*  Elasticsearch `6.8` and above 

Type while creating the data source needs to be elasticsearch.

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
   Connection Type must be Elasticsearch SQL</td>
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
   Port number used to connect to elasticsearch</br></br>
   </td>
   </tr>
   <tr>
   <td>AuthenticationType</br></br>
   <b>optional</b> </td>
   <td>`string`</br></br>
   AuthenticationType will be None or basichttpauthentication. By default, it is None.</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid username for the connection. Required for the basichttpauthentication</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b>  </td>
   <td>`string`</br></br>
   A valid Password for the connection. Required for the basichttpauthentication</td>
   </tr>
   <tr>
   <td>Database</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   Enter a valid Database name or cluster name</td>
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
   <td>`string`</br></br>
   Name of the Expression</br></br>
   </td>
   </tr>
   <tr>
   <td>Expression</br></br></br></br>
   <b>required</b> </br></br>
   </td>
   <td>`string`</br></br>
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

#### Connection Sample

#### For creating connection:

``` json
"Connection":
{
"ConnectionType": "Open Distro",
"Servername": "string",
"Port": "string",
"AuthenticationType": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Tablename": "string",
"AdvancedSettings": "string",
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
"ConnectionType": "Open Distro",
"Servername": "string",
"Port": "string",
"AuthenticationType": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Tablename": "string",
"AdvancedSettings": "string",
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
## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)