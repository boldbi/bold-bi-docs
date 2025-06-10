---
layout: post
title: Files Data Connector – Cloud BI | Bold BI Documentation
description: Learn how to connect files such as, JSON, XML and CSV with Bold BI Cloud and create data source with their data.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Files (JSON, XML, CSV) data source
The Bold BI dashboard designer supports connecting to JSON, XML and CSV files. 

## Choose Files (JSON, XML, CSV) data source
To configure the Files data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select a data source file type from the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Files/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Files/ChooseDS_Server.png)


## Create Files (JSON, XML, CSV) data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create the data source.
1. Enter a name and description (optional) for the data source.
2. Choose the Extract Engine
3. Upload a file based on selected file type data source.

## Extract Engine
You can connect to the data source using one of the following extract methods:
   
   ![Extract Engine](/static/assets/working-with-datasource/images/Extract_Engine.png)
   
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

> **NOTE:** You can preview data with a file size less than or equal to `200 megabytes`.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information

<table width="600">
<tr>
<td>
CSV
</td>
<td>

You can also upload `.txt` or `.tsv` files in this data source. Use <b>Separator</b> based on the type of file uploaded. Available options are <i>'Comma', 'Tab', 'Space' and 'Semicolon'</i>. If your data contains headers, enable option '<b>Consider the first row as header</b>' to treat them as headers while designing dashboards.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data of the uploaded file. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[CSV Integration](https://www.boldbi.com/integrations/csv)

[XML Integration](https://www.boldbi.com/integrations/xml)

[JSON Integration](https://www.boldbi.com/integrations/json)
