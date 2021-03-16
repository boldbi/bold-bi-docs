---
layout: post
title: SQLite – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect SQLite database with cloud-hosted Bold BI and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to SQLite data source
The Bold BI Dashboard Designer supports connecting the SQLite database using the SQL Live Query (C# API).

## Choose a SQLite data source
To configure the SQLite data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SQLite** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Sqlite/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Sqlite/ChooseDS_server.png)

## Connect to SQLite
### Create a SQLite data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a SQLite data source: 
1. Enter a name and description (optional) for the data source. 
2. Upload the SQLite database file using the **File Path** upload box.
3. Enter a valid SQLite password (optional) in the **Password** text box.

   ![SQLite Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Sqlite/Sqlite_Connection_Cloud.png)

> **NOTE:**  You can preview data with the file size less than or equal to 75 megabytes. You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

### Preview and data import
1. Click **Connect** to connect the SQLite database with configured details.
2. The Choose Table(s) dialog box opens. This dialog box displays a list of tables and views in tree view. Select the required table(s) or view(s) from the tree view to use it in the designer. Finally, click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/Sqlite/Preview_Extract.png)

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/Sqlite/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/Sqlite/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)