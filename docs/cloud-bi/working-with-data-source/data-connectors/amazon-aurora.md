---
layout: post
title: Amazon Aurora - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Amazon Aurora data with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Amazon Aurora data source
The Bold BI Dashboard Designer supports connecting multiple database through Amazon Aurora using SQL Live Query .

## Choose Amazon Aurora data source
To configure the Amazon Aurora data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Amazon Aurora** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-aurora/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-aurora/ChooseDS_server.png)

## Connect to Amazon Aurora
### Create Amazon Aurora data source
After clicking a data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a Amazon Aurora data source: 
1. Enter a name and description (optional) for the data source. 
2. Select a database engine you want to use with the given Amazon Aurora Server from the **Database Engine** combo box.
3. Enter a valid Amazon Aurora server or host name in the **ServerName** text box.
4. Enter a valid Amazon Aurora user name in the **UserName** text box. 
5. Enter a valid Amazon Aurora password in the **Password** text box.
6. Enter a valid Amazon Aurora Database in the Database text box or select in the combo box.

### Amazon Aurora supported database  engine in Bold bi
   * MySQL
   * PostgreSQL
 

### Database Engine

   ![Amazon Aurora Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-aurora/Amazonaurora_databaseEngine.png)



There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-aurora/Amazonaurora_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect the Amazon Aurora server with configured details. 
The schema represents the collection list retrieved from the Amazon Aurora server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this connection type, a data source is fetched from source periodically. Choose the **Extract** mode option for this connection.

![Extract Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/amazon-aurora/Amazonaurora_Extract_Connection.png)

### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/cloud/working-with-datasource/data-connectors/images/Mysql/Mysql_Refresh_Setting.png)

2. Select the recurrence type, recurrence start and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown in the right side for users convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/cloud/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect the Amazon Aurora server with configured details.
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

[Amazon Aurora Integration](https://www.boldbi.com/integrations/amazon-aurora)