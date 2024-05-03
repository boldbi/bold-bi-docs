---
layout: post
title: Amazon Athena – Bold BI Connector | Bold BI Learning
description: Learn how to connect Amazon Athena database with Bold BI deployed in your server and create data source in cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Amazon Athena data source
The **Bold BI** Dashboard Designer supports connecting to the Amazon Athena database using the SQL Live Query (C# API). 

## Choose an Amazon Athena data source
To choose an Amazon Athena data source, follow these steps:
1.  Click on **Data Sources** in the configuration panel to add a new data connection.
![Data source icon](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/data-sources-icon.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
![Create new datasource](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/create-new-datasource.png#max-width=60%)

3. Select the **Amazon Athena** connection in the connection panel.
![Amazon Athena icon](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/amazon-athena-icon.png#max-width=60%)

>**NOTE:** You can also create a data source from the home page by clicking on the Data Sources menu in the left menu panel and selecting Create Data Source from the data sources page.
![Amazon Athena connector](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/athena-select-connector.png#max-width=90%)

## Connect to Amazon Athena
The Amazon Athena data source can be accessed in Bold BI using the live connection mode.

### Create Amazon Athena data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create an Amazon Athena data source: 
1.	Enter a name and description (optional) for the data source. 
2.	Choose the region endpoint of the server from the **Region Endpoint** drop-down.
3.	Enter the port in which the server is running in the **AwsAccessKeyID** text box.
4.	Enter a valid Amazon Athena secret key in the **AwsSecretKey** text box.
5.	Enter a valid output location for storing the output files in the **Output location** text box in the format mentioned in the tooltip.
6.	Select a database that you want to query in the listed database associated with the given Amazon Athena server in the database combo box.
![Amazon Athena connection details](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/athena-connection-details.png#max-width=60%)

### Data preview
1.	Click Connect to connect to the Amazon Athena server with the configured details. The schema represents the collection list retrieved from the Amazon Athena server. This dialog box displays a list of schemas in a tree view and their corresponding values.
![Query designer page](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/athena-query-designer.png#max-width=100%)

2.	Now, the data design view page with the selected table schema opens. Drag the table.
![Drag table](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/drag-table.png#max-width=100%)
 
You can use the Code View option for passing a query to display data.
![Code view mode](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/code-view-mode.png#max-width=100%)

3.	Click Save to save the data source with a relevant name.

>**NOTE:** In the future, you can edit the connection information using the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/Custom'.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/amazon-athena/Dashboardparameter.png)

>**Note:** Please refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to Amazon Athena Data Source via REST API

### Prerequisites

The type while creating the data source needs to be amazonathena.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Parameters for creating Data Source

> **NOTE:** The ability to provide join support is available only during the creation of a new data source. Join in edit connection mode is not supported.

   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>RegionEndpoint</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
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
  <td><code>string</code></br></br>
   AWS access key of the account.</td>
   </tr>
   <tr>
   <td>AwsSecretAccessKey</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   AWS secret key of the account.</td>
   </tr>
   <tr>
   <td>OutputLocation</br></br></br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid S3 location to store the query results. Format: s3://bucketname/foldername </br></br>
   The following link explains the s3 output location in Athena and its usage.
   <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html#query-results-specify-location">
    <div style="height:100%;width:100%">
      Output location in the Athena
    </div>
   </a>
   </td>
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
   Enter a valid Schemaname which will mostly be the database name.</td>
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
   <td>RegionEndpoint</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
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
   <td><code>string</code></br></br>
   AWS access key of the account.</td>
   </tr>
   <tr>
   <td>AwsSecretAccessKey</br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   AWS secret key of the account.</td>
   </tr>
   <tr>
   <td>OutputLocation</br></br></br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   A valid S3 location to store the query results. Format: s3://bucketname/foldername </br></br>
   The following link explains the s3 output location in Athena and its usage.
   <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html#query-results-specify-location">
    <div style="height:100%;width:100%">
      Output location in the Athena
    </div>
   </a>
   </td>
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
   Enter a valid Schemaname, which will mostly be the database name.</td>
   </tr>
   <tr>
   <td>AdvancedSettings</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Additional optional connection parameters can be provided. By default, it is empty.</td>
   </tr>
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

> **NOTE:**  For editing a Data Source via API, all parameters are optional. The required parameter that needs to be changed can be provided.

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

#### For creating connection with multiple tables :

``` json
"Connection":
{
"RegionEndpoint": "string",
"AwsAccessKeyId": "string",
"AwsSecretAccessKey": "string",
"OutputLocation": "string",
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

> **NOTE:**  Through the REST API, the data source can be created or edited with only one table. If a different table is provided in editing the data source, the table will be replaced. The widgets will be retained only if the schema is the same as the previous table.

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

### Sample connection for editing the connection while uploading the dashboard via API.

```json
"Connection":  {   
       "Database": "string",
       "RegionEndpoint": "string",
       "OutputLocation": "string",
       "AwsAccessKeyId": "string",
       "AwsSecretAccessKey": "string",
       "Schema": "string"
  } 
```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a data connection](/working-with-data-sources/editing-a-data-connection/)

[Dashboard designer walk-through](/getting-started/creating-dashboard/)