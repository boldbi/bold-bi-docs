---
layout: post
title: Azure SQL Data Warehouse - Embedded BI Connector | Bold BI
description: Learn how to connect Azure SQL Data Warehouse using SQL Live Query with Bold BI deployed in your server and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/azure-sql-data-warehouse/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Azure SQL Data Warehouse data source
The Bold BI Dashboard Designer supports connecting Azure SQL Data Warehouse database using SQL Live Query (C# API).

## Choose Azure SQL Data Warehouse data source
To configure the Azure SQL Data Warehouse data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Azure SQL Data Warehouse** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureSqlDW/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureSqlDW/ChooseDS_server.png)

## Connect to Azure SQL Data Warehouse
### Create Azure SQL Data Warehouse data source
After clicking a data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a Azure SQL Data Warehouse data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid Azure SQL Data Warehouse server or host name in the **ServerName** text box.
3. Enter a valid Azure SQL Data Warehouse username in the **UserName** text box. 
4. Enter a valid Azure SQL Data Warehouse password in the **Password** text box.
5. Select a database that you want to query in the listed database associated with the given Azure SQL Data Warehouse server in the database combo box.

   ![Azure SQL Data Warehouse Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/AzureSqlDW/AzureSqlDW_Connection.png)

> **NOTE:**  Azure SQL Data Warehouse supports live mode connection only.

### Data Preview
1. Click **Connect** to connect the Azure SQL Data Warehouse server with configured details. 
The schema represents the collection list retrieved from the Azure SQL Data Warehouse server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use  the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)