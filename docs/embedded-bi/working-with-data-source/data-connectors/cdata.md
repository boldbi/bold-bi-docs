---
layout: post
title: CData – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect CData with Bold BI deployed in your server and create data source for dashboard preparation.
canonical: "/cloud-bi/working-with-data-source/data-connectors/cdata/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to CDATA data source
The Bold BI Dashboard Designer supports connecting CDATA database using the SQL Live Query.

## Choose CDATA data source
To configure the CDATA data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **CDATA** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Cdata/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Cdata/ChooseDS_server.png)

## Connect to CDATA
### Create CDATA data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create the CDATA data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid CDATA server or host name in the **ServerName** text box.
3. Enter a valid CDATA username in the **UserName** text box. 
4. Enter a valid CDATA password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given CDATA server in the database combo box.

   ![CDATA Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Cdata/Cdata_Connection.png)

> **NOTE:**  To connect data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.
![Enable SSH](/static/assets/embedded/working-with-datasource/images/enable-ssh.png#max-width=60%)
 
There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Cdata/Cdata_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect the CDATA server with configured details. 
The schema represents the collection list retrieved from the CDATA server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag  the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this connection type, a data source is fetched from source periodically. Choose the **Extract** mode option for this connection.

![Extract Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Mysql/Mysql_Extract_Connection.png)

> **NOTE:**  Initially, data will be extracted based on the Max Rows selected in order to proceed with data model creation. The remaining records (there is no limit) will be extracted during the next refresh.  <br /> 
 ![Max rows option](/static/assets/embedded/working-with-datasource/data-connectors/images/Cdata/maxRowOption.png#max-width=60%)

### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/embedded/working-with-datasource/data-connectors/images/Mysql/Mysql_Refresh_Setting.png)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown in the right side for users convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/embedded/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect the CDATA server with configured details.
2. The Choose Table(s) dialog opens. This dialog displays a list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right side panel. If you configured it, then the data source will work on [Incremental update](https://help.syncfusion.com/bold-bi/data-connectivity/sql-data-source?_ga=2.25793597.1655850217.1583139404-1533432591.1558675541#incremental-update), otherwise works on [Full load](https://help.syncfusion.com/bold-bi/data-connectivity/sql-data-source?_ga=2.25793597.1655850217.1583139404-1533432591.1558675541#full-load) concept. Finally click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview_Extract.png)

3. Now, the data design view page with the selected table schema opens. Drag  the table.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both Live and Extract mode connections using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[CDATA Integration](https://www.boldbi.com/integrations/cdata)