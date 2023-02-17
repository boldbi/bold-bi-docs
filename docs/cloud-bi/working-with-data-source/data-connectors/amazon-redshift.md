---
layout: post
title: Amazon Redshift – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect an Amazon Redshift database cluster and read its data into Bold BI Cloud dashboard.
platform: bold-bi
documentation: ug
---
   
# Connecting Bold BI to Amazon Redshift Database

Using the `Amazon Redshift` connection type, you can connect an Amazon Redshift database.

Click `Data Source` button in the configuration panel to add a new data connection.

![Data source Image](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/datasource.png#width=352px;height=501.51px)

Click `CREATE NEW` to launch a new connection from the connection type panel. 

![Data source Button](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/datasourcebutton.png#width=351px;height=504.4px)

Click `Amazon Redshift` connection button in the connection type panel.

![Red shift button](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftbutton.png#width=351px;height=504.06px)

Set the `server Name` and `port number` where the Amazon Redshift service is running.

Enter the `user name` and `password` to connect to the Amazon Redshift.

There are two connection types available in a data source:

* Live mode
* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the `Live` mode option for this connection.

![Redshift Live mode](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftlivemode.png#width=348px;height=500.95px)
 
The selected database will be opened in the data design view window.

![Data Design view](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/datadesignview.png#max-width=100%)

Drag and drop the table from table list, and click `Save` button to save the data source with valid name.

## Extract mode connection

In this connection type, a data source is fetched from source periodically. Choose the `Extract` mode option for this connection.

![Redshift Extract Mode](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftExtractmode.png#width=350px;height=503.92px)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
 ![Max rows option](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/maxRowOption.png#max-width=60%)	
 
## Refresh Settings

### Steps to configure the data source refresh settings:

1. Click Refresh Settings in the configuration panel.

![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/amazonredshiftRefreshSetting.png#width=350px;height=503.25px)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.

     * Data refresh can be scheduled hourly, daily, weekly, and monthly.
     * Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown at the right-side for users convenience. After selecting, click `Schedule`.

![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/RefreshSetting.png#max-width=100%)

## Preview and data import

1. Click `Connect` to redshift server with configured details.

2. The Extract Data dialog opens. This dialog has two modes of connection either via Table or [Custom query](/cloud-bi/faq/working-with-custom-query-extract-mode-in-bold-bi/). Under custom query option, write the required query and click **Connect**.
Under the Table option, this dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right-side panel. If you configure it, then the data source will work on [Incremental update](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update), otherwise works on [Full load ](https://help.boldbi.com/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) concept. And finally click `Connect`.

![Preview Extract](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/PreviewExtract.png#max-width=100%)

1. Now, the data design view page with the selected table schema opens. Drag the table.

![Query Editor Extract](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/QueryEditorExtract.png#max-width=100%)

* You can use the Code View option for passing query to display data.

![Code view mode extract](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-redshift/CodeViewModeExtract.png#max-width=100%)

Click `Save` to save the data source with a relevant name.

> **NOTE:** In future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

## Connecting Bold BI to Amazon Redshift Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be redshift.

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
   Port number used to connect to redshift instance.</br></br>
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

> **NOTE:**  Through Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

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

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Blog post for Amazon Redshift](https://www.boldbi.com/blog/unlock-actionable-insights-from-amazon-redshift-data)

[Amazon Redshift Integration](https://www.boldbi.com/integrations/amazon-redshift)