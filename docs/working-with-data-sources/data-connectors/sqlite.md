---
layout: post
title: SQLite – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect SQLite database with Bold BI deployed in your server and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to SQLite data source
The Bold BI dashboard designer supports connecting to SQLite database using the SQL Live Query (C# API).

## Choose a SQLite data source
To configure the SQLite data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SQLite** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Sqlite/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Sqlite/ChooseDS_server.png)

## Connect to SQLite
### Create a SQLite data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a SQLite data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid SQLite database file path in the **File Path** text box. 
3. Enter a valid SQLite password (optional) in the **Password** text box.

   ![SQLite Connection](/static/assets/working-with-datasource/data-connectors/images/Sqlite/Sqlite_Connection.png)

There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this type of connection, the data source is directly fetched from the source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/working-with-datasource/data-connectors/images/Sqlite/Sqlite_Live_Connection.png)

> **NOTE:**  In this live mode connection, the given **File Path** location should be the physical location of the machine where the Bold BI On-Premises Enterprise build has been installed.

### Data Preview
1. Click **Connect** to connect the SQLite server with the configured details. 
The schema represents the collection list retrieved from the SQLite server. This dialog displays a list of schemas in a treeview and their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/Sqlite/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/Sqlite/QueryEditor_sql.png)

    You can use the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/Sqlite/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this type of connection, a data source is fetched from the source periodically. Select the **Extract** mode option for this connection. In this extract mode, upload the SQLite database file using the **File Path** upload box.

![Extract Connection](/static/assets/working-with-datasource/data-connectors/images/Sqlite/Sqlite_Extract_Connection.png)

> **NOTE:**  You can preview data with the file size less than or equal to 200 megabytes.

### Preview and data import
1. Click **Connect** to connect the SQLite database with configured details.
2. The Choose Table(s) dialog box opens. This dialog box displays a list of tables and views in tree view. Select the required table(s) or view(s) from the tree view to use it in the designer. Finally, click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/Sqlite/Preview_Extract.png)

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/Sqlite/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/Sqlite/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In the future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Sqlite/SqlliteCustom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Sqlite/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)