---
layout: post
title: ODBC – Embedded BI Data Connector | Bold BI Learning
description: Learn how to connect ODBC databases such as SQL Server, PostgreSQL, MySQL, Oracle, Exasol and DB2 with Bold BI Embedded and create data source.
canonical: "/working-with-data-sources/data-connectors/odbc/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ODBC data source
Bold BI Dashboard designer (Enterprise) supports connecting to datasources through Open Database Connectivity (ODBC).

> **Note:** The ODBC Connector is available in On-Premises Deployment but not in the Syncfusion Managed Cloud Server.

## Choose an ODBC data source
The Dashboard Designer (Enterprise) supports connecting to ODBC data sources through the following two connection modes.

•	Data Source Name (DSN).

•	Drivers
![ODBC modes](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-mode-types.png#max-width=60%)

### Data Source Name (DSN)
Create a DSN using the 32-bit driver architecture and Bold BI will retrieve the 32-bit DSN architecture types from the windows registry.

•	If Bold BI is installed in IIS, it will only show the system DSN because all applications hosted in IIS are considered to be running on the system user privilege.

By default, IIS (inetinfo.exe) is configured to run in the system account context. However, you can use the services console to change the identity of various services so that they can run in a user account rather than the system account. The system DSN will only work under the hosted application in IIS.

•	If the Bold BI is installed in IIS Express, we will list out the system and user DSN from the installed machine. So that you can connect using both the system and user DSN.
![ODBC DSN list](/static/assets/working-with-datasource/data-connectors/images/Odbc/dsn-list.png#max-width=60%)

### ODBC Drivers

ODBC data sources can also be connected through drivers. If Bold BI is installed in IIS Express, list the drivers from the installed machine so that you can connect using the driver.
![ODBC driver list](/static/assets/working-with-datasource/data-connectors/images/Odbc/driver-list.png#max-width=60%)

To configure the ODBC data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/Odbc/data-sources-icon.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.

   ![Create datasource](/static/assets/working-with-datasource/data-connectors/images/Odbc/create-new-datasource.png#max-width=60%)
   
3. Select the **ODBC** connection in the connection panel.

   ![ODBC data source](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-icon.png#max-width=60%)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.
   ![ODBC connector](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-connector.png#max-width=90%)

## Connect to ODBC
### Create an ODBC data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. The following ODBC drivers are supported:
* SQL Server
* PostgreSQL
* MySQL
* Oracle
* Exasol
* DB2
* SAP-HANA
* Vertica
* Microsoft Access
* Elasticsearch
* FileMaker
* Firebird
* Azure Databricks (Supported only in DSN Connection Type)

Follow the given steps to create an ODBC data source: 
1. Enter a name and description (optional) for the data source.
2. A drop-down box for ODBC Connection Type.

   * DSN
   * Driver

  ![ODBC modes](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-mode-types.png#max-width=60%)

### Connect using the DSN Connection Type
1. Choose a DSN name from the drop-down list.
2. Enter a valid ODBC server username in the **UserName** text box.
3. Enter a valid ODBC server password in the **Password** text box.
4. Enter a valid ODBC server database name (optional) in the **Database** text box.

   ![ODBC DSN](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-dsn.png#max-width=60%)

In future, you can edit the connection information using [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using the Driver Connection Type
1. Enter a name and description (optional) for the data source. 
2. Enter a valid ODBC server or host name in the **ServerName** text box.
3. Enter the port in which the server is running in **Port** text box.
4. Enter a valid ODBC username in the **UserName** text box. 
5. Enter a valid ODBC password in the **Password** text box.
6. Enter a valid ODBC database name in the **Database** text box.

   ![ODBC Driver](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-driver.png#max-width=60%)

### Data Preview
1. Click **Connect** to connect the ODBC server with configured details.
The schema represents the collection list that is retrieved from the ODBC server. This dialog box displays the list of schemas in a tree view and their corresponding values.

   ![ODBC designer page](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-designer-page.png#max-width=100%)

2. Now, the data design view page with selected table schema opens. Drag the table.

   ![Drag table](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-drag-table.png#max-width=100%)

   You can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/Odbc/odbc-code-view-mode.png#max-width=100%)

3. Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Odbc/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Odbc/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.


## Bold BI hosting with x86 and x64 bit wise for ODBC data source connection
If Bold BI is installed in IIS, we will list the system DSN values from the installed machine. By default, the application will be hosted in 32-bit mode in IIS. Therefore, we will only list the 32-bit System DSN values in the Bold BI ODBC connector.

Following steps to connect the 64-bit values: 
1. Open Internet Information Services (IIS) Manager (**Start** > **Run** > type "**inetmgr**").
   ![IIS Run](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_Run.png) 
2. Using the navigation pane at the left, browse to **Sites** and select your Bold BI application site (**BoldBIOnPremiseEdition**).
   ![IIS Bold BI Site](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_BoldBISite.png) 
3. Right-click the Bold BI application site (**BoldBIOnPremiseEdition**) and select the **Manage Website** > **Stop**.
   ![IIS Stop BoldBI](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_Stop_BoldBI.png) 
4. Select the **Application Pools** and then select and right click **BoldBI** > **Stop**. 
   ![IIS Stop Application Pools](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_Stop_ApplicationPools.png) 
5. Repeat the step 4 for all other application pools **BoldBIDesigner**, **BoldBIJobs**, and **BoldUMS**.
6. Select the application pool **BoldBI** and click the **Advanced Settings** option.
   ![IIS Application Pools Advanced settings](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_ApplicationPools_ADS.png) 
7. Set the “**Enable 32- bit Applications**” to “**False**”.
   ![IIS Application Pools Advanced settings False](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_ApplicationPools_ADS_False.png) 
8. Set the same property change in other three application pools (**BoldBIDesigner**, **BoldBIJobs**, and **BoldUMS**) also. 
9. Restart the site (**BoldBIOnPremiseEdition**) and all application pools (**BoldBI**, **BoldBIDesigner**, **BoldBIJobs**, and **BoldUMS**).
   ![IIS Start BoldBI](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_Start_BoldBI.png)
   ![IIS Start Application Pools](/static/assets/working-with-datasource/data-connectors/images/Odbc/IIS_Start_ApplicationPools.png) 
10. If the services are restarted, then go to the ODBC data source to list out the System DSN 64-bit values.

## Connecting Bold BI to ODBC Data Source via REST API

### Prerequisites 

Type while creating the data source needs to be ODBC.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Parameters for creating Data Source

> **NOTE:** The ability to provide join support is available only during the creation of a new data source. Join in edit connection mode is not supported.

   <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>Driver</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   ODBC Driver Name. Required for Driver Mode</td>
   </tr>
   <tr>
   <td>DsnName</br></br>
   <b>required</b> </td>
  <td><code>string</code></br></br>
   ODBC DSN Name. Required for DSN Mode.</td>
   </tr>
   <tr>
   <td>Servername</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Servername of the connection. Required for Driver Mode.</td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   Port number of the connection. Required for Driver Mode.</br></br>
   </td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid username for the connection</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>required</b>  </td>
  <td><code>string</code></br></br>
   A valid Password for the connection</td>
   </tr>
   <tr>
   <td>Database</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   database which needs to be connected. Required for Driver Mode.</td>
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
   <td>Driver</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   ODBC Driver Name. Required for Driver Mode</td>
   </tr>
   <tr>
   <td>DsnName</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   ODBC DSN Name. Required for DSN Mode.</td>
   </tr>
   <tr>
   <td>ServerName</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>Port</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Port number used to connect to the postgresql</br></br>
   </td>
   </tr>
   <tr>
   <td>UserName</br></br>
   <b>required</b>  </td>
   <td><code>string</code></br></br>
   A valid username for the connection</td>
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
   <td>Schema</br></br>
   <b>required for table mode</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Schemaname</td>
   </tr> 
   <tr>
   <td>CommandTimeout</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   Enter a valid Timeout for connection. By default, it is 300</td>
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

> **NOTE:**  To edit a Data Source via API, all parameters are optional. Only the parameter that needs to be changed should be provided.

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
   By default, it is add. </br></br>
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

#### For creating connection using Driver:

``` json
"Connection":
{
"Driver": "string",
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
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

#### For creating connection using DSN:

``` json
"Connection":
{
"DsnName": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
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
"DsnName": "string",
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
"Driver": "string",
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
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

> **NOTE:**  Through the Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection":
{
"Driver": "string",
"Servername": "string",
"Port": "string",
"Username": "string",
"Password": "string",
"Database": "string",
"Query": "string",
"AdvancedSettings": "string",
"CommandTimeout": "string",
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
      "ServerName": "string",
      "Database": "string",
      "Port": "string",
      "UserName": "string",
      "PassWord": "string",
      "DsnName": "string",
      "odbctype": "string",
      "Driver": "string",
      "schema": "string",
      "AdvancedSettings": "string",
      "CommandTimeout": "string"
  } 
```

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)