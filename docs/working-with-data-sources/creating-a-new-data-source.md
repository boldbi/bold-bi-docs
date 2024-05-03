---
layout: post
title: Creating a New Data Source – Embedded BI | Bold BI Learning
description: Learn how to create a new data source in Bold BI Embedded application to bind data with widgets in dashboard.
canonical: "/working-with-data-sources/creating-a-new-data-source/"
platform: bold-bi
documentation: ug

---
# Working with Data Sources

This section explains how to create a new data source and fetch data from it.

## Creating a New Data Source

To bind data to a widget, a minimum of one data source is required. Follow these steps to create a data source:

1. Click the `Data Source` button in the configuration panel. The data panel will open.

   ![Data button](/static/assets/working-with-datasource/images/databutton.png)

2. Click `CREATE NEW` to launch a new connection from the connection type panel.

   ![Data source button](/static/assets/working-with-datasource/images/datasourcebutton.png)

3. In the connection type panel, click on any one of the listed connection types (in this example, `Microsoft SQL` connection type is clicked) shown in the following image.

   ![Data source list](/static/assets/working-with-datasource/images/datasourcelist.png)

4. In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details.

   ![SQL database](/static/assets/working-with-datasource/images/sqldatabase.png)

5. Click `Connect` in the `NEW DATA SOURCE` configuration panel.

   ![Connect button](/static/assets/working-with-datasource/images/Connectbutton.png)
   
   Now, the following view will be displayed.
   
   ![Add data source](/static/assets/working-with-datasource/images/addeddatasource.png)

6. You can drag and drop tables or views in the data design view by expanding the tree view.

   ![Tree view expand](/static/assets/working-with-datasource/images/treeviewexpand.png)

7. In the data design view, we have a `SEARCH` option. You can choose the desired tables/views/stored procedure using the `SEARCH` option as follows.

   ![Tree view expand](/static/assets/working-with-datasource/images/tablesearch.png#max-width=98%)

8. Click `Update` or enable the `Data Preview` toggle option to show the preview data. When the toggle button is disabled, click the Update icon every time to preview data for each action.

    ![Tree view expand](/static/assets/working-with-datasource/images/previewdata.png#max-width=97%)

9. Click `Save` data source with a valid name.

   ![Save](/static/assets/working-with-datasource/images/datasourcesaveoption.png#max-width=97%)

[Data Modeling](/working-with-data-sources/data-modeling/)

## Post your message
If you are still unable to find the information you are looking for in the self-help resources mentioned above, please <a href="https://www.boldbi.com/support" target="_blank">contact us</a> and send your requirements.