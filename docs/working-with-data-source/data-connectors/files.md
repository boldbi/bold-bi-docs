---
layout: post
title: Files Data Connector – Cloud BI | Bold BI Documentation
description: Learn how to connect files such as, JSON, XML and CSV with Bold BI Cloud and create data source with their data.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Files (JSON, XML, CSV) data source
Bold BI dashboard designer supports connecting JSON, XML and CSV files. 

## Choose Files (JSON, XML, CSV) data source
To configure the Files data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select one of the file types data source from the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Files/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Files/ChooseDS_Server.png)


## Create Files (JSON, XML, CSV) data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create data source.
1. Enter a name and description (optional) for the data source.
2. Upload a file based on selected file type data source.

> **NOTE:** You can preview data with file size less than or equal to  `200 megabytes`.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

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
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data of the uploaded file. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[CSV Integration](https://www.boldbi.com/integrations/csv)

[XML Integration](https://www.boldbi.com/integrations/xml)

[JSON Integration](https://www.boldbi.com/integrations/json)
