---
layout: post
title: Parquet – BI Data Connector | Bold BI Documentation
description: Learn how to connect a Parquet file with the Bold BI and create a data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Parquet data source
Bold BI dashboard designer supports the connection of Parquet files.

## Choose an Parquet data source
To configure the Parquet data source, follow these steps:

1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/Parquet/parquet_datasource_icon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.

3. Select the **Parquet** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Parquet/parquet_icon_designmode.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu in the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Parquet/parquet_server_side_icon.png)

## Connect to Parquet
### Create an Parquet data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a Parquet data source: 

1.	Enter a name and description (optional) for the data source.

2.	Upload a file based on selected file type data source.

   ![Parquet Connection](/static/assets/working-with-datasource/data-connectors/images/Parquet/parquet_new_connection_page.png)

> **NOTE:**  You can preview data with a file size less than or equal to 200 megabytes. You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Preview and data import
1. Click **Preview and Connect** to connect with the configurations set.

2. The Choose Schema(s) dialog box opens. The schema represents the key fields of data from the uploaded file. This dialog box displays a list of schemas in tree view and their corresponding values in a grid for preview. Select the required schema(s) from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/Parquet/parquet_preview_table.png)

 > **NOTE:** The **Preview Data** shows the supported columns as enabled and the unsupported ones as disabled in the checkbox options. The data from the supported columns will be extracted from the data source.

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/Parquet/parquet_queryds_page.png)

4. Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)