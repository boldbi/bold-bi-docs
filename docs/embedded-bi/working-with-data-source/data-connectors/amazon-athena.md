---
layout: post
title: Amazon Athena – Embedded BI Connector | Bold BI Learning
description: Learn how to connect Amazon Athena database with Bold BI deployed in your server and create data source.
canonical: "/embedded-bi/working-with-data-source/data-connectors/amazon-athena/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Amazon Athena data source
The **Bold BI** Dashboard Designer supports connecting the Amazon Athena database using the SQL Live Query (C# API).

## Choose an Amazon Athena data source
To configure the Amazon Athena data source, follow these steps: 
1.  Click **Data Sources** in the configuration panel to add a new data connection.
![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/data-sources-icon.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
![Create new datasource](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/create-new-datasource.png#max-width=60%)

3. Select the **Amazon Athena** connection in the connection panel.
![Amazon Athena icon](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/amazon-athena-icon.png#max-width=60%)

>**NOTE:** You can also create a data source from the home page by clicking the Data Sources menu from the left menu panel and Create Data Source from the data sources page.
![Amazon Athena connector](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/athena-select-connector.png#max-width=90%)

## Connect to Amazon Athena
Amazon Athena data source can be accessed in Bold BI using the live connection mode.

### Create Amazon Athena data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create an Amazon Athena data source: 
1.	Enter a name and description (optional) for the data source. 
2.	Choose the region endpoint of the server from the **Region Endpoint** drop-down.
3.	Enter the port, in which the server is running in the **AwsAccessKeyID** text box.
4.	Enter a valid Amazon Athena secret key in the **AwsSecretKey** text box. 
5.	Enter a valid output location for storing the output files in the **Output location** text box in the format mentioned in the tooltip.
6.	Select a database that you want to query in the listed database associated with the given Amazon Athena server in the database combo box.
![Amazon Athena connection details](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/athena-connection-details.png#max-width=60%)

### Data preview
1.	Click Connect to connect the Amazon Athena server with the configured details. The schema represents the collection list retrieved from the Amazon Athena server. This dialog box displays a list of schemas in a tree view and their corresponding values.
![Query designer page](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/athena-query-designer.png#max-width=100%)

2.	Now, the data design view page with the selected table schema opens. Drag the table.
![Drag table](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/drag-table.png#max-width=100%)
 
You can use the Code View option for passing a query to display data.
![Code view mode](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/code-view-mode.png#max-width=100%)

3.	Click Save to save the data source with a relevant name.

>**NOTE:** In the future, you can edit the connection information using the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

## Connecting Bold BI to Amazon Athena Data Source via REST API

### Prerequisites

Type while creating the data source needs to be amazonathena.

[Rest API - v4.0](https://help.boldbi.com/embedded-bi/rest-api-reference/v4.0/api-reference/)

### Parameters for creating Data Source

   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>RegionEndpoint</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   Region in which the server is available</br></br>
   The region code must be provided. Examples: us-east-1, ap-south-1, and more. A list of available regions is provided in the following link.</br></br>
   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">
    <div style="height:100%;width:100%">
      The available AWS regions
    </div>
   </a> </br></br></td>
   </tr>
   <tr>
   <td>AwsAccessKeyId</br></br>
   <b>required</b> </td>
   <td>`string`</br></br>
   AWS access key of the account.</td>
   </tr>
   <tr>
   <td>AwsSecretAccessKey</br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   AWS secret key of the account.</td>
   </tr>
   <tr>
   <td>OutputLocation</br></br></br></br>
   <b>required</b>  </td>
   <td>`string`</br></br>
   A valid S3 location to store the query results. Format: s3://bucketname/foldername </br></br>
   The following link explains the s3 output location in Athena and its usage.
   <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html#query-results-specify-location">
    <div style="height:100%;width:100%">
      Output location in the Athena.
    </div>
   </a>
   </td>
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
   Enter a valid Schemaname which will mostly be the database name.</td>
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
``` json
"Connection":
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
```

#### For editing connection:
``` json
"Connection":
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

> **NOTE:**  Through Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection":
{
"RegionEndpoint": "string",
"AwsAccessKeyId": "string",
"AwsSecretAccessKey": "string",
"OutputLocation": "string",
"Database": "string",
"Query": "string",
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

## Related links
[Data transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a data connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)

[Dashboard designer walk-through](/embedded-bi/getting-started/quick-start/)



