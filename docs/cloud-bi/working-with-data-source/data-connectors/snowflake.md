---
layout: post
title: Snowflake – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Snowflake, an analytic data warehouse with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Snowflake data source
Bold BI Dashboard Designer supports connecting Snowflake database through SQL Live query.

**Supported Server Editions:** Standard, Enterprise and Business Critical

## Choose Snowflake data source
To configure the Snowflake data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Snowflake** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/ChooseDS_server.png)

## Connect to Snowflake
### Create Snowflake data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a Snowflake data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid Snowflake server or host name in the Server Name text box.
For example, `https://dum421.west-europe.azure.snowflakecomputing.com` 
3. Enter a valid Snowflake user name in the User Name text box.
4. Enter a valid Snowflake password in the Password text box.
5. Enter a valid Snowflake database name in the  Database text box.

   ![Snowflake Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/Snowflake_newconnection.png)

There are two connection types in a data source:
* Live mode
* Extract mode

## Live mode connection
In this connection type, a data source is directly fetched from the source. Choose the Live mode option for this connection.

   ![Snowflake Live Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/Snowflake_livemode.png)

### Data Preview
1. Click **Connect** to connect the Snowflake server with configured details.
The schema represents the collection list that are retrieved from the Snowflake server. This dialog displays a list of schemas in treeview and its corresponding values.

   ![Treeview schema](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    Either you can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection
In this connection type, a data source is fetched from the source periodically. Choose the Extract mode option for this connection.

   ![Snowflake Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/Snowflake_extractmode.png)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
  ![Max rows option](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/maxRowOption.png#max-width=60%)
	
### Refresh settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/Snowflake/Snowflake_Refresh_Setting.png)

2. Select the recurrence type, recurrence start and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown in the right side for users convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/cloud/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect the MySQL server with configured details.
2. The Choose Table(s) dialog opens. This dialog displays a list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right side panel. If you configured it, then the data source will work on [Incremental update](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update), otherwise works on [Full load](/cloud-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) concept. And finally click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview_Extract.png)

3. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both Live and Extract mode connections using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.


## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Snowflake Integration](https://www.boldbi.com/integrations/snowflake?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbisnowflakeintegration)

