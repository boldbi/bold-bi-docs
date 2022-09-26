---
layout: post
title: PostgreSql – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect PostgreSql database with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to PostgreSql data source
The Bold BI Dashboard Designer supports connecting the PostgreSql database using the SQL Live Query (C# API).

**Supported Server Versions:** PostgreSQL `(v9.5, v9.6, v10, v11, and v12)`

## Choose PostgreSql data source
To configure the PostgreSql data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **PostgreSql** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/ChooseDS_server.png)

## Connect to PostgreSql
### Create PostgreSql data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a PostgreSql data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid PostgreSql server or host name in the ServerName text box.
3. Enter a valid PostgreSql username in the UserName text box. 
4. Enter a valid PostgreSql password in the Password text box.
5. Enter a valid PostgreSql database in the Database text box.
6. To connect PostgreSql with SSL connection, enter the connection string **sslmode=Require;TrustServerCertificate=true** in **Additional connection parameters** text box.

   ![PostgreSql Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/Postgresql_Connection.png#max-width=60%)
   
   To kill the created sessions, enter the connection string **Maximum Pool Size=1;Connection Idle Lifetime=45;Command Timeout=15** in **Additional connection parameters** text box.

   ![Kill sessions](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/additional-parameters.png#max-width=60%)
   
There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/Postgresql_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect the PostgreSql server with configured details. 
The schema represents the collection list retrieved from the PostgreSql server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this connection type, a data source is fetched from source periodically. Choose the **Extract** mode option for this connection.

![Extract Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/Postgresql_Extract_Connection.png)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
 ![Max rows option](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/maxRowOption.png#max-width=60%)	
 
### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/Postgresql/Postgresql_Refresh_Setting.png)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown at the right-side for users convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/cloud/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect the PostgreSql server with configured details.
2. The Extract data dialog opens. This dialog has two modes of connection either via Table or [Custom query](/cloud-bi/faq/working-with-custom-query-extract-mode-in-bold-bi/). Under custom query option, write the required query and click **Connect**.
Under Table option, this dialog displays list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right-side panel. If you configure it, then the data source will work on [Incremental update](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update), otherwise works on [Full load](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) concept. And finally click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview_Extract.png#max-width=100%)

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)
