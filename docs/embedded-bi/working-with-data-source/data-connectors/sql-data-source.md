---
layout: post
title: Connect Microsoft SQL Server in Embedded BI | Bold BI Docs
description: Learn how to connect and create data source(s) for the Microsoft SQL Server database with the full and incremental update refresh settings in Embedded Bold BI.
canonical: "/cloud-bi/working-with-data-source/data-connectors/sql-data-source/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Microsoft SQL Server Data Source

The Bold BI designer allows you to connect with several SQL data sources to visualize and analyze the data using interactive dashboards.  

**Supported Server Versions:** Microsoft SQL Server (2012, 2014, 2016, 2017, and 2019)

## Modes

There are two types of modes to create connection with SQL data source using the Bold BI designer:

1. Live
2. Extract

### Live

In live mode, the Bold BI designer execute the query directly into the database server and fetches the result to visualize data in the dashboard widgets at real time.

### Extract

In extract mode, the Bold BI designer extract data and store it in Azure SQL database, which Bold BI maintains as extracting data from REST data sources. The SQL query will execute in intermediate database instead of executing in actual database server to fetch data. Currently, Bold BI designer extracts 50000 record initially and other records will be extracted in next iteration based on the [Refresh Settings](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#sql-data-source-refresh-settings). 

## How to create Microsoft SQL Server data source

To configure the Microsoft SQL Server data source, follow these steps:

1. Click the **Data Source** button in the configuration panel to add a new data connection.  
![Data source button](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Create-data-source.png)

2. Click **CREATE NEW** to launch a new connection panel.  
![Create new data source](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Create-new-data-source.png)

3. Click the **Microsoft SQL** connection button in the connection panel.  
![Select data source](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/select-data-source.png)

> **NOTE:**  You can also create a data source from the dashboard server page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.  
![Create data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/create-ds-from-server.png)

> **NOTE:**  To connect data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.
![Enable SSH](/static/assets/embedded/working-with-datasource/images/enable-ssh.png#max-width=60%)
 
### Create Microsoft SQL Server data source in live mode

To connect with the SQL server database in [live](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#live) mode, follow these steps:

1. Set the **server name** in which the Microsoft SQL server runs.  

2. Enter the **user name** and **password** to connect to the Microsoft SQL server.  

3. Choose the **Live** mode radio button to establish a live mode connection with Microsoft SQL server. Refer [Live](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#live) mode to learn more.  

4. Select the database and click **Connect** to connect the Bold BI designer with Microsoft SQL server database.  
![Connect data source](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Connect-data-source.png)

5. Drag and drop the table from the table schema in the data design view page.  
![Create data design](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Create-data-design.png)

6. Click **Save** to save the data source with a relevant name to proceed with designing dashboard.  
![Save data source](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Save-data-source.png)

### Create Microsoft SQL Server data source in extract mode

To connect the SQL server database in [extract](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#extract) mode, follow these steps:

1. Set the **server name** in which the Microsoft SQL server runs.  

2. Enter the **user name** and **password** to connect to the Microsoft SQL server.  

3. Choose the **Extract** mode radio button to enable extract mode for creating data source. Refer [Extract](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#extract) mode to learn more.

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh. 
 ![Max rows option](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/maxRowOption.png#max-width=60%)					 
                  
4. Select the database name from dropdown text box from which the tables to be extracted.  

5. Choose a relevant time interval from **Refresh Settings** dropdown menu for refreshing the data source periodically. Refer [Refresh Settings](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#sql-data-source-refresh-settings) to learn more.  
![Connect data source in Extract mode](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/connect-ds-in-extract.png)

6. Click **Connect**, the Choose Table(s) dialog will open, select the required tables to be extracted from the Microsoft SQL server from the dialog.  
![Choose Tables](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Choose-Tables.png)

7. The incremental refresh settings configuration pane is used to configure the selected table to perform [Full Load](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) or [Incremental Update](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update) based on refresh time interval configured in Step 5.  

	* To perform [Full Load](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) refresh, off the **Incremental Refresh** toggle button for selected table.  
	* To perform [Incremental Update](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update) refresh, on the**Incremental Refresh** toggle button and select the last modified time column (represent the last modified time of the record, which is used to fetch the record modified recently) from the list of time stamp column loaded in dropdown box for selected table.  

	> **NOTE:**  The **Incremental Refresh** toggle button is enabled only when the selected table contains time stamp column. If it is not enabled, the Bold BI designer will do [Full Load](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) refresh by default.  
	![Incremental Refresh](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Incremental-Refresh.png)

8. Click **Connect** to extract the selected tables and get into the data design view page.  
![Extract tables](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Extract-tables.png)

	> **NOTE:**  The extracted table will be stored in the intermediate database in name format `<tableName>_<schemaName>`. For example, in the previous step, the table **Orders** are extracted from schema **dbo** hence, the table name was stored as `Orders_dbo` in intermediate database.
    
9. Drag and drop the table from the left panel of data design page.  
![Drag and drop the table](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Drag-and-drop-the-table.png)

	> **NOTE:**  MS SQL Server data source supports all uni-code characters and other languages tables in Bold BI v4.2
	![Supports other language tables and columns](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/other-language-support.png)

10. Click **Save** to save the data source with a relevant name.  
![Save data source](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Save-data-source.png)

### View table schema support

From the Bold BI 4.2 Enterprise Edition, we are using the GUID as the column name to resolve the large column name issue.

> **NOTE:**  The view table schema is supported only in the Extract Mode.

1.	After connecting the data source in an extract mode, the data design view opens with the design view. Now, you can see the `View Schema` Option in a TreeView.
![Data design view](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/data-design-view-in-extract-mode.png#max-width=100%)
<br/>
![View schema option](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/view-schema-option-in-treeview.png#max-width=100%)

2.	Click `View Schema,` the dialog will open with the Column name and Description. For the data source created on or after the 4.2 version, the GUID is used as the column name in extract data sources.
![View schema dialog](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/view-schema-dialog.png#max-width=75%)

3.	You can copy the column name and GUID name using the `CTRL+C` by selecting the cell.
![Copy guid name](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/copy-guid-name.png#max-width=75%)

4.	You can use the GUID name in the code view mode.
![View guid in code view mode](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/view-guid-in-code-view-mode.png#max-width=100%)

## Connecting to stored procedure in SQL Server database

The Bold BI designer allows you to use stored procedures defined in the SQL server database using **Microsoft SQL** connection.

> **NOTE:**  Bold BI designer supports stored procedure only for Microsoft SQL Server.

### Connecting to Stored Procedure in Live mode

To connect the SQL Server database in live mode, refer [Create Microsoft SQL Server data source in live mode](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-in-live-mode).

After completing **Step 4** in [Create Microsoft SQL Server data source in live mode](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-in-live-mode), you will get into the data design view with the available stored procedure that is displayed on the left pane of tree view. The available parameters can also be displayed while expanding the procedure.  
![Data design view](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Data-design-view.png)

You can drag the desired stored procedure into the canvas area. Enter the parameter values in the Parameters dialog and click **OK** to proceed further.    
![Stored procedure parameters](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Stored-procedure-parameters.png)

![Create data design for stored procedure](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/add-stored procedure.png)

The Bold BI designer allows you to edit the supplied parameters by using the edit parameters button that is available in the created table.  
![Edit stored procedure parameters](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Edit-stored-procedure.png)

>**NOTE:** You can add only one stored procedure per model even if the database contains more than one stored procedure.

### Connecting to stored procedure in extract mode

To connect the SQL server database in extract mode, refer [Create Microsoft SQL Server data source in extract mode](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-in-extract-mode).

After completing **Step 6** in [Create Microsoft SQL Server data source in extract mode](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#create-microsoft-sql-server-data-source-in-extract-mode), you will get into the Choose Table(s) dialog with the available stored procedure that is displayed on the left pane of tree view.  
![Choose stored procedure](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Choose-stored-procedure.png)

Now, enter the parameter value required for selected stored procedure and click **Connect** button.  
![Stored procedure parameters](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/add-parameters.png)

When the **Connect** button is clicked, the selected stored procedures data based on supplied parameter will be extracted and stored as a table in Azure SQL database maintained for Bold BI and then, the data design view page opens with extracted stored procedure table details in left pane of tree view.  
![Extract stored procedures](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Extract-stored-procedures.png)

Now, you can drag and drop the table from left panel of data design page and save the data source by clicking the **Save** button.  
![Create data design](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/add-table.png)

> **NOTE:**  Stored procedure follows only [Full Load](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) refresh for regular update of data in extract mode.

## Connecting through Custom SQL Query

You can connect to data source of certain data connections through the custom SQL query. This feature allows you to define the data source with manually written queries instead of manually dragged tables for data connection type such as `Microsoft SQL` connections.

### Establish Data Connection

To connect the `Microsoft SQL` Server database, refer to the [Microsoft SQL](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/).

### Switch to Code View

By default, the data design view opens with design view. Switch to the code view by enabling the slider option in the tools pane in data design view as shown (highlighted) in the following image.

![Code view](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/Customsql_CodeSlider.png)

This will open the query editor window as like below,

![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-QueryEditor.png)

### Write query and execute

In the `Query Editor` window, you can write your own query which helps you to access table schema information and create a new data source that can be bound to dashboard widgets.

After writing your query, click the `Execute` button in the tools pane. You can also view the data for your query in bottom of the Query Editor by clicking `Update`. 

![Execute](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-SampleQueryExecution.png)

Then click `Save` to save the data source.

![Save Data source](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-SaveDataSource.png)

### Code View for Design View Tables

You can view the query in Query Editor window for already created a data source in design view.

For example, I have dragged the `Categories` table in design view and added expression column and applied filters too.

Then, I tried to enable the `Code` Slider to view the query, this query shows the added expression column, applied filters and whatever changes that made in the table.

![Query for design view](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-QueryforTables.png)

If you click `Execute`, you will be prompted with an alert message for confirmation as proceeding with this action, will reset the design view expression.

![Alert for Execute](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-AlertforExecute.png)

### Alias Name for Tables and Columns
In query editor window, you can write/edit your query and perform all the operations with respect to retrieving data from your database.

Here, you can change the table or column name using `SQL Alias` name. Refer the below image,

![Alias name](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-AliasName.png)

After clicking `Execute`, this modification will be reflected in your table.

> **NOTE:**  You can modify the column name in design view itself. Please refer [here](/embedded-bi/working-with-data-source/transforming-data/formatting-column/#renaming-column).

### Configuring Expression Columns

Code view supports `expressions` which is a combination of data columns, operators, and built-in functions.

The following image shows the sample SQL query for using expressions with built-in functions like SUM(), COUNT(), and more in the code view editor. After altering the query, click the `Run` icon to execute the query and click `Update` to fetch the data.

![Expressions in code view](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/code-view-expressions.png#max-width=100%)

To know more, refer to this [link.](https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/)

### Configuring User Filter

Code view supports the `User filter`, which provides row-level security for the data used for creating dashboards.

After switching to code view, press the `Shift+2` key to list the available [default parameters.](https://help.boldbi.com/embedded-bi/working-with-data-source/configuring-dashboard-parameters/#default-parameters)

The `Current User Full Name` parameter filters the data based on the full name, and the `Current User Email` parameter filters the data based on the user email.

![Parameters list](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/parameters-list.png#max-width=100%)

Here, you need to assign the `Current User Full Name` parameter to the `Name` column, which will fetch the records of the currently logged user based on the full name. After altering the query, click the `Run` icon to execute the query and click `Update` to fetch the filtered data.

![Name parameter](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/name-parameter.png#max-width=100%)

You can refer to the [documentation](https://help.boldbi.com/embedded-bi/working-with-dashboards/) to create a dashboard using Bold BI. Once the dashboard is created, you can preview the dashboard by clicking the `Preview` button.

**Dashboard preview for User 1:**

![Dashboard for user1](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/userfilter-dashboard1.png#max-width=100%)

**Dashboard preview for User 2:**

![Dashboard for user2](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/userfilter-dashboard2.png#max-width=100%)

You can also filter the data based on the users using the `Configure User Filters` icon, as shown in the following image. Refer to this [link](https://help.boldbi.com/embedded-bi/working-with-data-source/user-filter/) to configure the user filters.

![User filters icon](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/userfilters-icon.png#max-width=100%)

### Configuring Dashboard Parameter

Code view supports the `dashboard parameter`, which allows the user to execute the custom query or stored procedure dynamically based on the parameter while viewing the dashboard.

To configure the dashboard parameter, refer to the [documentation.](https://help.boldbi.com/embedded-bi/working-with-data-source/configuring-dashboard-parameters/#add-a-dashboard-parameters)

Here, you can find the configured dashboard parameter in the following image.

![Configured dashboard parameters](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/configured-dashboard-parameters.png)

Press the `Shift+2` key to list the available parameters. You can use it anywhere in the query editor window.

![Available dashboard parameters](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/available-dashboard-parameters.png#max-width=100%)

The following image shows the sample SQL query using the dashboard parameter in the code view editor. Using this query, you can fetch the records based on the configured dashboard parameter value. After altering the query, click the `Run` icon to execute the query and click `Update` to fetch the filtered data.

![Assigning dashboard parameter](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/assigning-parameter.png#max-width=100%)

You can use [this documentation](https://help.boldbi.com/embedded-bi/working-with-dashboards/) to create a dashboard using Bold BI. Once the dashboard is created, you can preview the dashboard by clicking the `Preview` button. 

You can also change the parameter value by clicking the `dashboard parameters` icon, as shown in the following image.

![Student details dashboard](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/student-details-dashboard.png#max-width=100%)

Here, you can find the `StudentIDParameter` value is changed.

![Change dashboard parameter](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/change-parameter.png)

Now, you can view the updated dashboard in the following image.

![Updated Student dashboard](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/student-dashboard2.png#max-width=100%)

To know more, please refer to this [link.](/embedded-bi/working-with-data-source/configuring-dashboard-parameters/#custom-query)

### Sample Query with CUBE and ROLLUP

Bold BI supports SQL Server from 2005 and above. We cannot connect SQL server 2003 here, but we can use the statements `CUBE` and `ROLLUP` in the Code view by connecting any SQL server from 2005+ in Bold BI dashboard.

The below image shows the sample query for SQL Server `CUBE and ROLLUP` in Code View editor.

![Sample Query](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSql-CubeSampleQuery.png)

### Switch to Design View

If you tried to switch back design view by disabling the Code Slider in tools pane, you will be prompted with an alert message to remove your query for confirmation as proceeding with this action, will reset the code view expression.

![Remove query Alert](/static/assets/embedded/working-with-datasource/data-connectors/images/SQLDataSource/CustomSQL-RemoveQueryAlert.png)

After clicking `Ok`, remove your query and then disable the Code slider to switch back to design view.

> **NOTE:**  In PostgreSQL connection type, the query editor does not support the query with parameters.

## SQL data source refresh settings

The refresh settings for SQL data source is available only in extract mode. There are two types of data source refresh available for SQL data sources:

1. Full load
2. Incremental update

### Full load

For full load refresh, the Bold BI designer will truncate all records from extracted table present in intermediate database and extract the entire table from original database to intermediate database.

### Incremental update
For incremental update, users should specify the last modified timestamp column for tables while creating data source in extract mode. Using that last modified column, the Bold BI designer will extract and load the newly updated data from actual database to intermediate database table.

> **NOTE:**  Incremental update process depends on tables primary key and last modified date time column. If any one of the columns is not available on the table, the extracted table will get full load refresh by truncating the existing data and reload all data from the actual database.

## Related Links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Microsoft SQL Server Integration](https://www.boldbi.com/integrations/microsoft-sql-server?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimssqlserverintegration)

[Blog Post](https://www.boldbi.com/blog/sales-dashboard-example-with-microsoft-sql-server-database-using-bold-bi)
