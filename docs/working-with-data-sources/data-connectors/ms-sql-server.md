---
layout: post
title: Connect Microsoft SQL Server in Cloud BI | Bold BI Docs
description: Learn how to connect and create data source(s) for the Microsoft SQL Server database with the full and incremental update refresh settings in Bold BI Cloud based Web designer.
platform: bold-bi
documentation: ug

---

# Connecting Bold BI to Microsoft SQL Server Data Source

The Bold BI designer allows you to connect with multiple SQL data sources to visualize and analyze the data using interactive dashboards.

**Supported Server Versions:** Microsoft SQL Server (2012, 2014, 2016, 2017, and 2019)

> **NOTE:**  If you are hosting your database on a Windows platform, there are no restrictions. However, if it is hosted on any other platform, only SQL Server/Express 2016 or above will be supported.

## Modes

There are two types of modes to create connections with an SQL data source using the Bold BI designer:

1. Live
2. Extract

### Live

In live mode, the Bold BI designer executes the query directly into the database server and fetches the result to visualize data in the dashboard widgets in real-time.

### Extract

 In extract mode, the Bold BI designer extracts data and stores it in [Intermediate Database](https://help.boldbi.com/working-with-data-sources/bold-bi-intermediate-database/), which Bold BI maintains for extracting data from REST data sources. The SQL query will execute in an intermediate database instead of executing in the actual database server to fetch data. Currently, the Bold BI designer extracts 50,000 records initially, and additional records will be extracted in the next iteration based on the [Refresh Settings](/working-with-data-sources/data-connectors/ms-sql-server/#sql-data-source-refresh-settings). 

## How to create Microsoft SQL Server data source

To configure the Microsoft SQL Server data source, follow these steps:

1. Click the **Data Source** button in the configuration panel to add a new data connection.  
![Data source button](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Create-data-source.png)

2. Click **CREATE NEW** to launch a new connection panel.  
![Create new data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Create-new-data-source.png)

3. Click the **Microsoft SQL** connection button in the connection panel.  
![Select data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/select-data-source.png)

> **NOTE:**  You can also create a data source from the dashboard server page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.  
![Create data source from server](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/create-ds-from-server.png)

> **NOTE:**  To connect the data source using **SSH**, enable the SSH checkbox in the **NEW DATA SOURCE** configuration panel and enter the necessary credentials.
![Enable SSH](/static/assets/working-with-datasource/images/enable-ssh.png#max-width=60%)

### Create Microsoft SQL Server data source in live mode

To connect to the SQL server database in [live](/working-with-data-sources/data-connectors/ms-sql-server/#live) mode, follow these steps:

1. Set the **server name** in which the Microsoft SQL server runs.  

2. Enter the **user name** and **password** to connect to the Microsoft SQL server.  

3. Choose the **Live** mode radio button to establish a live mode connection with Microsoft SQL server. Refer to [Live](/working-with-data-sources/data-connectors/ms-sql-server/#live) mode to learn more.  

4. Select the database and click **Connect** to connect the Bold BI designer with the Microsoft SQL server database.  
![Connect data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Connect-data-source.png)

5. Drag and drop the table from the table schema onto the data design view page.  
![Create data design](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Create-data-design.png)

6. Click **Save** to save the data source with a relevant name in order to proceed with designing the dashboard.  
![Save data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Save-data-source.png)

### Create Microsoft SQL Server data source in extract mode

To Connect to Bold ETL from sql server, switch to extract mode. Refer to [Bold ETL](/managing-resources/manage-data-sources/#advanced-category)
1. switch to Extract mode, Redirect dialog will pop up.
  ![etl Redirect Dialog](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/etlRedirectDialog.png)

2. Click on the Redirect to Bold ETL button to redirect to Bold ETL. Or
3. To continue with Bold BI, click on 'Continue with connector.

To connect the SQL server database in [extract](/working-with-data-sources/data-connectors/ms-sql-server/#extract) mode, follow these steps:

1. Set the **server name** on which the Microsoft SQL server runs.  

2. Enter the **user name** and **password** to connect to the Microsoft SQL server.  

3. Choose the **Extract** mode radio button to enable extract mode for creating a data source. Refer to [Extract](/working-with-data-sources/data-connectors/ms-sql-server/#extract) mode to learn more. 

> **NOTE:**  Initially, data will be extracted based on the maximum number of rows selected in order to proceed with data model creation. The remaining records (with no limit) will be extracted during the next refresh. 
 ![Max rows option](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/maxRowOption.png#max-width=60%)					                    

4. Select the database name from the dropdown text box from which the tables are to be extracted.  

5. Choose a relevant time interval from the **Refresh Settings** dropdown menu for refreshing the data source periodically.  Refer to [Refresh Settings](/working-with-data-sources/data-connectors/ms-sql-server/#sql-data-source-refresh-settings) to learn more.  
![Connect data source in Extract mode](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/connect-ds-in-extract.png)

6. Click **Connect** Extract Data dialog opens. This dialog has two modes of connection either via Table or [Custom query](https://support.boldbi.com/kb/article/16675/working-with-custom-query-extract-mode-in-bold-bi). Under custom query option, write the required query and click **Connect**.
Under Table option, this dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview_Extract.png#max-width=100%)

7. The incremental refresh settings configuration pane is used to configure the selected table to perform [Full Load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) or [Incremental Update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update) based on refresh time interval configured in Step 5.  

	* To perform [Full Load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) refresh, off the **Incremental Refresh** toggle button for selected table/view.

	* [Incremental Update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update) can be performed in both tables and views.  
	* To perform [Incremental Update](/working-with-data-sources/data-connectors/ms-sql-server/#incremental-update) refresh, on the **Incremental Refresh** toggle button and select the last modified time column (represent the last modified time of the record, which is used to fetch the record modified recently) from the list of time stamp column loaded in dropdown box for selected table.   
      * The table must have a primary key column and date column to configure the incremental refresh option.
      * Views must have a date column to configure the incremental refresh option, and a unique column(s) is optional, which is used to update the modified records.

	> **NOTE:**  The **Incremental Refresh** toggle button is only enabled when the selected table contains a time stamp column. If it is not enabled, the Bold BI designer will do [Full Load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) refresh by default.  
	![Incremental Refresh](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Incremental-Refresh.png)

8. Click **Connect** to extract the selected tables and get into the data design view page.  
![Extract tables](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Extract-tables.png)

	> **NOTE:**  The extracted table will be stored in the intermediate database in name format `<tableName>_<schemaName>`. For example, in the previous step, the table **Orders** are extracted from schema **dbo** hence, the table name was stored as `Orders_dbo` in intermediate database.

9. Drag and drop the table from the left panel of the data design page.  
![Drag and drop the table](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Drag-and-drop-the-table.png)

	> **NOTE:**  MS SQL Server data source supports all uni-code characters and other languages tables in Bold BI v4.2
	![Supports other language tables and columns](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/other-language-support.png)

10. Click **Save** to save the data source with a relevant name.  
![Save data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Save-data-source.png)

### View table schema support

We are using the GUID as the column name in the Bold BI 4.2 Enterprise Edition to resolve the issue of large column names.
> **NOTE:**  The view table schema is supported only in the Extract Mode.

1.	After connecting the data source in extract mode, the data design view will open with the design view. You will then see the `View Schema` Option in a TreeView.
![Data design view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/data-design-view-in-extract-mode.png#max-width=100%)</br>
![View schema option](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/view-schema-option-in-treeview.png#max-width=100%)

2.	Click `View Schema`, and the dialog will open with the column name and description. For data sources created on or after version 4.2, the GUID is used as the column name in extract data sources.
![View schema dialog](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/view-schema-dialog.png#max-width=75%)

3.	You can copy the column name and GUID name by selecting the cell and using `CTRL+C`.
![Copy guid name](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/copy-guid-name.png#max-width=75%)

4.	You can use the GUID name in the code view mode.
![View guid in code view mode](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/view-guid-in-code-view-mode.png#max-width=100%)

>**Note:** Following a successful connection, Query Designer will list `Tables`, `Views`, and `Stored procedure`. Materialized views will be listed under the `Views` section.

## Connecting to stored procedure in SQL Server database

The Bold BI designer enables you to use stored procedures defined in the SQL Server database using a **Microsoft SQL** connection.

> **NOTE:**  Bold BI designer only supports stored procedures for Microsoft SQL Server.

### Connecting to Stored Procedure in Live mode

To connect to a stored procedure in live mode, you can refer to the guide on [Create Microsoft SQL Server data source in live mode](/working-with-data-sources/data-connectors/ms-sql-server/#create-microsoft-sql-server-data-source-in-live-mode).

After completing **Step 4** in [Create Microsoft SQL Server data source in live mode](/working-with-data-sources/data-connectors/ms-sql-server/#create-microsoft-sql-server-data-source-in-live-mode), you will get into the data design view with the available stored procedure that is displayed on the left pane of tree view. The available parameters can also be displayed while expanding the procedure.  
![Data design view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Data-design-view.png)

You can drag the desired stored procedure onto the canvas area. Enter the parameter values in the Parameters dialog, and click **OK** to proceed further.    
![Stored procedure parameters](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Stored-procedure-parameters.png)

![Create data design for stored procedure](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/add-stored-procedure.png)

The Bold BI designer allows you to edit the supplied parameters by using the Edit Parameters button that is available in the created table.  
![Edit stored procedure parameters](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Edit-stored-procedure.png)

>**NOTE:** You can only add one stored procedure per model, even if the database contains more than one stored procedure.

### Connecting to stored procedure in extract mode

To connect the SQL server database in extract mode, refer to [Create Microsoft SQL Server data source in extract mode](/working-with-data-sources/data-connectors/ms-sql-server/#create-microsoft-sql-server-data-source-in-extract-mode).

After completing **Step 6** in [Create Microsoft SQL Server data source in extract mode](/working-with-data-sources/data-connectors/ms-sql-server/#create-microsoft-sql-server-data-source-in-extract-mode), you will get into the Choose Table(s) dialog with the available stored procedure that is displayed on the left pane of tree view.  
![Choose stored procedure](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Choose-stored-procedure.png)

Now, enter the parameter value required for the selected stored procedure and click **Connect** button.  
![Stored procedure parameters](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/add-parameters.png)

When the **Connect** button is clicked, the selected stored procedure's data based on the supplied parameter will be extracted and stored as a table in the Azure SQL database maintained for Bold BI. Subsequently, the data design view page opens with the extracted stored procedure table details displayed in the left pane of the tree view. 
![Extract stored procedures](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Extract-stored-procedures.png)

Now, you can drag and drop the table from the left panel of the data design page and save the data source by clicking the **Save** button. 
![Create data design](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/add-table.png)

> **NOTE:**  Stored procedure follows only [Full Load](/working-with-data-sources/data-connectors/ms-sql-server/#full-load) refresh for regular update of data in extract mode.

## Connecting through Custom SQL Query

You can connect to a data source with specific data connections through a custom SQL query. This feature enables you to define the data source using manually written queries instead of manually dragging tables for data connection types like `Microsoft SQL` connections.

### Establish Data Connection

To connect to the `Microsoft SQL` Server database, refer to the [Microsoft SQL](/working-with-data-sources/data-connectors/ms-sql-server/).

### Switch to Code View

By default, the data design view opens in design view. To switch to the code view, enable the slider option in the tools pane in the data design view, as shown (highlighted) in the following image.

![Code view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Customsql_CodeSlider.png)

This will open the query editor window as like below,

![Query Editor](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-QueryEditor.png)

### Write query and execute

In the `Query Editor` window, you can write your own query to access table schema information and create a new data source that can be bound to dashboard widgets. 

After writing your query, click the `Execute` button in the tools pane. You can also view the data for your query at the bottom of the Query Editor by clicking `Update`.

![Execute](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-SampleQueryExecution.png)

Then click `Save` to save the data source.

![Save Data source](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-SaveDataSource.png)

### Code View for Design View Tables

You can view the query in the Query Editor window for a data source that has already been created in design view.

For example, I dragged the `Categories` table into design view, added an expression column, and applied filters as well.

Then, I attempted to enable the `Code` Slider in order to view the query. This query displays the added expression column, applied filters, and any changes made in the table.

![Query for design view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-QueryforTables.png)

If you click `Execute`, you will be prompted with an alert message for confirmation as proceeding with this action, will reset the design view expression.

![Alert for Execute](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-AlertforExecute.png)

### Alias Name for Tables and Columns
In query editor window, you can write/edit your query and perform all the operations with respect to retrieving data from your database.

Here, you can change the table or column name using `SQL Alias` name. Refer to the below image,

![Alias name](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-AliasName.png)

After clicking `Execute`, this modification will be reflected in your table.

> **NOTE:**  You can modify the column name in design view itself. Please refer [here](/working-with-data-sources/data-modeling/formatting-column/#renaming-column).

### Configuring Expression Columns

the code view supports `expressions`, which are a combination of data columns, operators, and built-in functions.

The image below displays a sample SQL query for using expressions with built-in functions such as SUM(), COUNT(), and others in the code view editor. Once you have modified the query, click on the `Run` icon to execute it and then click `Update` to retrieve the data.

![Expressions in code view](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/code-view-expressions.png#max-width=100%)

To know more, refer to the [Configuring Expression Columns](/working-with-data-sources/data-modeling/configuring-expression-columns/).

### Configuring User Filter

The Code view supports the `User filter`, which provides row-level security for the data used to create dashboards.

After switching to code view, press the `Shift+2` key to list the available [default parameters.](/working-with-data-sources/dashboard-parameter/change-the-dashboard-parameter-value-in-url/#default-parameters)

The `Current User Full Name` parameter filters the data based on the full name, and the `Current User Email` parameter filters the data based on the user email.

![Parameters list](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/parameters-list.png#max-width=100%)

Here, you need to assign the `Current User Full Name` parameter to the `Name` column, which will fetch the records of the currently logged-in user based on their full name. After modifying the query, click the `Run` icon to execute it and then click `Update` to retrieve the filtered data.

![Name parameter](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/name-parameter.png#max-width=100%)

You can refer to the [documentation](/working-with-dashboards/) to create a dashboard using Bold BI. Once the dashboard is created, you can preview the dashboard by clicking the `Preview` button.

**Dashboard preview for User 1:**

![Dashboard for user1](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/userfilter-dashboard1.png#max-width=100%)

**Dashboard preview for User 2:**

![Dashboard for user2](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/userfilter-dashboard2.png#max-width=100%)

You can also filter the data based on the users using the `Configure User Filters` icon, as shown in the following image. Refer to the [User Filter](/working-with-data-sources/user-filter/).

![User filters icon](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/userfilters-icon.png#max-width=100%)

### Configuring Dashboard Parameter

The code view supports the `dashboard parameter`, which enables the user to dynamically execute a custom query or stored procedure based on the parameter while viewing the dashboard.

To configure the dashboard parameter, refer to the [documentation.](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/#add-a-dashboard-parameters)

Here, you can find the configured dashboard parameter in the following image.

![Configured dashboard parameters](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/configured-dashboard-parameters.png)

Press the `Shift+2` key to list the available parameters. You can use it anywhere in the query editor window.

![Available dashboard parameters](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/available-dashboard-parameters.png#max-width=100%)

The image below displays a sample SQL query using the dashboard parameter in the code view editor. With this query, you can retrieve records based on the configured dashboard parameter value. Once you have made changes to the query, click the `Run` icon to execute it and then click `Update` to fetch the filtered data.

![Assigning dashboard parameter](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/assigning-parameter.png#max-width=100%)

You can use [this documentation](/working-with-dashboards/) to create a dashboard using Bold BI. Once the dashboard is created, you can preview the dashboard by clicking the `Preview` button. 

You can also change the parameter value by clicking the `dashboard parameters` icon, as shown in the following image.

![Student details dashboard](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/student-details-dashboard.png#max-width=100%)

Here, you can find the `StudentIDParameter` value is changed.

![Change dashboard parameter](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/change-parameter.png)

Now, you can view the updated dashboard in the following image.

![Updated Student dashboard](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/student-dashboard2.png#max-width=100%)

To know more, please refer to this [link.](/working-with-data-sources/dashboard-parameter/uses-of-dashboard-parameters/#custom-query)

### Sample Query with CUBE and ROLLUP

Bold BI supports SQL Server from 2005 and above. We cannot connect to SQL Server 2003 here, but we can use the statements `CUBE` and `ROLLUP` in the Code view by connecting to any SQL Server from 2005 or later in the Bold BI dashboard.

The image below shows a sample query for SQL Server `CUBE and ROLLUP` in the Code View editor.

![Sample Query](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-CubeSampleQuery.png)

### Switch to Design View

If you attempt to switch back to design view by disabling the Code Slider in the tools pane, you will receive an alert message asking you to confirm the removal of your query. Proceeding with this action will reset the code view expression.

![Remove query Alert](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/CustomSQL-RemoveQueryAlert.png)

After clicking `Ok`, remove your query and then disable the Code slider to switch back to design view.

> **NOTE:**  In PostgreSQL connection type, the query editor does not support queries with parameters.

### Custom SQL Queries Performance Considerations

The Code View Mode in Bold BI provides you with the flexibility to write and execute custom SQL queries for data transformations and analysis, as discussed in the above sections. However, it is important to understand that Code View Mode is not equivalent to Design Mode, and you may experience slower performance compared to Design Mode at times.

In Code View Mode, Bold BI issues the custom SQL query as a subquery to the database server. It is important to note that this can have an impact on performance. To mitigate any performance issues, it is crucial to use proper syntax for your custom SQL queries and optimize them with appropriate aggregations if necessary. Additionally, it is recommended to be mindful of query execution time and the number of rows it will return before utilizing it in Bold BI. This will help ensure efficient processing and avoid potential performance bottlenecks. Alternatively, you can consider creating views in your database by utilizing a custom SQL query and connecting them through the design mode in Bold BI.

## SQL data source refresh settings

The refresh settings for SQL data source is available only in [extract](/working-with-data-sources/classification-of-data-sources-queried-directly-and-extracted/) mode. When we refresh the data source in Bold BI, the most recent data from the original source connection is retrieved and updated in the data store. Users have the flexibility to manually refresh the data or schedule it according to their requirements. By keeping the data up-to-date, users can rely on accurate and current information for their analyses and visualizations. There are two types of data source refresh available for SQL data sources:

1. Full load
2. Incremental update

### Full load

Full Load Refresh is a process of refreshing a data source in Bold BI by loading all the data from the original database into the intermediate database. This process is typically used when there have been significant changes to the data in the original database, or when you want to start with a clean slate. For a full load refresh, the Bold BI designer will truncate all records from the extracted table present in the intermediate database and extract the entire table from the original database to the intermediate database.

![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview_Extract.png)

**When should use Full Load Refresh?**

You should use Full Load Refresh when:
-	There have been significant changes to the data in the original database.
-	Starting with a fresh dataset is required.

### Incremental update
Incremental Refresh is a feature in Bold BI that allows you to refresh a data source by extracting only the data that has changed since the last refresh. This method is particularly useful when dealing with large databases, as it can save time and resources by avoiding the need to extract and load all the data again. The primary requirement is to have a date field and a primary key field included in the table.

**When should you use Incremental Refresh?**
When should you use Incremental Refresh? Incremental Refresh is recommended in the following scenarios:
- The data in the original database undergoes frequent changes.
- There is a need to refresh the data quickly.
- Saving time and resources is a priority.

**Views :** To perform incremental refresh for views, specify the last modified timestamp column when creating the data source in extract mode. The Bold BI designer will use this last modified column to extract and load the newly updated data from the actual database to the intermediate database table.
 * The "Include Unique Column(s)" option is available in Incremental Refresh and allows you to specify the unique or constraint columns that are used to identify and update the modified records in the intermediate database. By enabling and selecting the appropriate unique columns, you ensure that the modified records are correctly updated during the incremental refresh process.

![views](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Incremental-Refresh_views.PNG)

> **NOTE:**  
- The incremental update process depends on the table's primary key and last modified datetime column. If either of these columns is not available on the table, the extracted table will undergo a full load refresh by truncating the existing data and reloading all data from the actual database.
- The "Include Unique column(s)" toggle button is enabled only when the "Incremental Refresh" toggle button is in the enabled state. If the "Unique column(s)" toggle button is not enabled, only the newly added records are fetched rather than the recently modified existing records. 

### Differences between data refresh, dashboard refresh:
[Data refresh](/managing-resources/manage-data-sources/#refresh-data) and [Dashboard refresh](/working-with-dashboards/preview-dashboard/refresh-dashboard/) are two different processes. Data refresh refers to the process of refreshing the data in a data source. Dashboard refresh refers to the process of refreshing the data in a dashboard.

The main difference between data refresh and dashboard refresh is that data refresh can be scheduled to occur automatically, while dashboard refresh must be initiated manually. In Bold BI, you have the flexibility to configure the scheduled refresh of your dashboards. You can choose to automatically refresh the entire dashboard or specific widgets within a dashboard, based on a predefined timer.

Furthermore, data refresh can be utilized to update the data in a singular data source, whereas dashboard refresh can be utilized to update the data in multiple data sources.

### Best practices to schedule and run data refresh:
**Tips for best practice:**

- Select the appropriate refresh frequency.
  - The frequency of data refresh will be determined by the data source and the business requirements. For example, if the data source is a live stream, you may want to refresh the data every minute or second. However, if the data source is a static file, you may only need to refresh the data once daily or once weekly.
- Plan data refresh for off-peak times.
  - Scheduling data refresh during non-peak times will reduce the impact on the performance of the data source.
- Before releasing a data refresh to production, test it. 
  - Prior to publishing data refresh to production, it is crucial to test it.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/sqlCustom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/SQLDataSource/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Connecting Bold BI to Microsoft SQL Server Data Source via REST API

### Prerequisites 

**Supported Server Versions:** Microsoft SQL Server (2012, 2014, 2016, 2017, and 2019)

Type while creating the data source needs to be sqlserver.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)

### Modes

Only the **live mode** data source can be created and edited through the REST API.

### Parameters for creating Data Source

> **NOTE:** The ability to provide join support is only available during the creation of a new data source. Join in edit connection mode is not supported.

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
   <td>IntegratedSecurity</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
   This is used to specify Authentication mechanism. Needed to provide true for Windows Authentication, false for Basic Authentication.</br></br>
   default value is false</td>
   </tr>
   <tr>
   <td>Username</br></br>
   <b>optional</b>  </td>
  <td><code>string</code></br></br>
   A valid user name. Required if Integrated Security is not provided or is provided as false.</td>
   </tr>
   <tr>
   <td>Password</br></br>
   <b>optional</b>  </td>
  <td><code>string</code></br></br>
   A valid Password. Required if Integrated Security is not provided or is provided as false.</td>
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
   <td>Impersonate</br></br>
   <b>optional</b> </td>
   <td>`boolean`</br></br>
   Enable or disable user impersonation. By default, it is false.</td>
   </tr>
   <tr>
   <td>AdvancedSettings</br></br>
   <b>optional</b> </td>
  <td><code>string</code></br></br>
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

#### Parameters for edit the connection while upload the dashboard via API

 <table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   </tr>
   <tr>
   <td>DataSource</br></br>
   <b>required</b> </td>
   <td><code>string</code></br></br>
   Server name or Host name of the connection</td>
   </tr>
   <tr>
   <td>IntegratedSecurity</br></br>
   <b>optional</b> </td>
   <td><code>string</code></br></br>
   This is used to specify Authentication mechanism. Needed to provide true for Windows Authentication, false for Basic Authentication.</br></br>
   default value is false</td>
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
   <td>InitialCatalog</br></br>
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

#### For creating connection:

``` json
"Connection":
{
"Servername": "string",
"IntegratedSecurity": "false",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"Impersonate": "false",
"AdvancedSettings": "string",
"IsEnableSSL": false,
"CommandTimeout": "300",
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
"Impersonate": "false",
"AdvancedSettings": "string",
"IsEnableSSL": false,
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
"IntegratedSecurity": "false",
"Username": "string",
"Password": "string",
"Database": "string",
"Schemaname": "string",
"Tablename": "string",
"Impersonate": "false",
"AdvancedSettings": "string",
"IsEnableSSL": false,
"CommandTimeout": "300",
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

> **NOTE:**  Through the Rest API, the data source can be created or edited with only one table. If different table is provided in edit data source, the table will be replaced. The widgets will be retained only if the schema is same as the previous table.

### Connection Sample for Code View Mode

``` json
"Connection":
{
"Servername": "string",
"IntegratedSecurity": "false",
"Username": "string",
"Password": "string",
"Database": "string",
"Query": "string",
"Impersonate": "false",
"AdvancedSettings": "string",
"IsEnableSSL": "string",
"CommandTimeout": "300",
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
### Sample connection for editing the connection while uploading the dashboard via API.

```json
"Connection":  {
      "DataSource": "string",
      "InitialCatalog": "string",
      "UserName": "string",
      "Password": "string",
      "Schema": "string",
      "IntegratedSecurity": "string",
      "AdvancedSettings": "string",
      "CommandTimeout": "string"    
  } 
```

## Related Links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/microsoft-sql-server?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimssqlserverintegration" target="_blank">Microsoft SQL Server Integration</a>

<a href="https://www.boldbi.com/blog/sales-dashboard-example-with-microsoft-sql-server-database-using-bold-bi" target="_blank">Blog Post</a>

<a href="https://www.boldbi.com/kb/faq/how-to-connect-sql-server-with-different-port-number-in-a-dashboard" target="_blank">How to connect SQL Server with different port number in a dashboard</a>
