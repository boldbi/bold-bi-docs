---
layout: post
title: EDI – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect EDI file with cloud-hosted Bold BI and create data source for dashboard preparation.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to EDI data source
The Bold BI dashboard designer supports connecting to EDI files.

## Choose an EDI data source
To configure the EDI data source, follow these steps: 
1. Click on **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **EDI** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Edi/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Edi/ChooseDS_server.png)

## Connect to EDI
### Create an EDI data source
After clicking on the data source, the **NEW DATA SOURCE** configuration panel will open. Follow the steps provided to create an EDI data source:
1.	Enter a name and description (optional) for the data source.
2.	Upload a file based on selected file type data source.
3.	If your data contain headers, enable the option **Consider the first row as header** to treat them as headers while designing dashboards.
4.	Enter a valid element delimiter character in the **Element Separator** text box.
5.	Enter a valid EOL delimiter character in the **End Of Line Separator** text box.

   ![EDI Connection](/static/assets/working-with-datasource/data-connectors/images/Edi/Edi_Connection.png)

> **NOTE:** Please note that you can preview data with a file size of 200 megabytes or less. You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Preview and data import
1. Click on **Preview and Connect** to connect with the configurations set.
2. The Choose Schema(s) dialog box will open. The schema represents the key fields of data from the uploaded file. This dialog box displays a list of schemas in a tree view and their corresponding values in a grid for preview. Select the required schema(s) from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/Edi/Preview_Extract.png)

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/Edi/QueryEditor_Extract.png)

4. Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)