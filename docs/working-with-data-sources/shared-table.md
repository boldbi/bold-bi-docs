---
layout: post
title: Joining Data Sources – Embedded BI | Bold BI Documentation
description: Learn how to join multiple data sources in extract mode to achieve showcasing different sources of data through one dashboard in Bold BI Embedded.
canonical: "/working-with-data-sources/shared-table/"
platform: bold-bi
documentation: ug

---

# What are Shared Tables

Shared tables are used to combine multiple data sources into one data source.

Once the tables are merged, you can perform operations such as joins and expressions. To learn more, click on this [link](/working-with-data-sources/data-modeling/joining-table/#adding-a-join-condition).

## How does it work?

When creating or editing a data source, there will be an accordion called **Shared Tables** in the tree view area where the schema and tables are displayed. By expanding this accordion, **only data sources of the same mode** that are currently shared to the logged-in user will be shown. Users can expand the data source and utilize the tables within it.

Any changes made to the original data source from which the table originated will be reflected here. So, if users modify a column, data, or drop the table, the current data source will also be affected.

<b>Example:</b> The user can join Salesforce data with Google Analytics using the same column field.

>**Note:** The shared tables feature is only available in the **All Extract** and **Web Live modes**   .

<b>Steps to Join tables:</b>
1. Open the Shared Tables feature to integrate two or more data sources.

   ![Expand SharedTables](/static/assets/working-with-datasource/images/SharedTables-expand.png)

2. Select the shared data source table and perform a drag and drop action.

   ![Add SharedTables](/static/assets/working-with-datasource/images/SharedTables-add.png)  

3. The tables will be merged based on the same column fields.

   ![SharedTables](/static/assets/working-with-datasource/images/SharedTables-result.png)  

>**Note:** If you connect to a WEB API live data source, other web API live data sources will be listed in the accordion. Similarly, for extract mode data sources, all extract mode data sources will be listed.

## Live Mode Connection in Shared Tables

**Note:** If you connect to a Web API Live data source, only other Web API Live data sources will be listed in the accordion.
Shared Tables support only Web API Live data sources.
No other live mode data sources (such as MSSQL Live, PostgreSQL Live, etc.) will be listed.

**Note:** Refer this documentation [How to connect to web live datasource](https://help.boldbi.com/working-with-data-sources/data-connectors/live-web/) to know more about web live connection.

1. Connect to a WEB API live data source, other web API live data sources will be listed in the accordion.
   ![Other Web API Live datasource](/static/assets/working-with-datasource/images/Other_Web_Live.png)

2. Select the shared data source table and perform a drag and drop action.
   ![Shared Tables add view](/static/assets/working-with-datasource/images/SharedTables-add-view.png)

3. The tables will be merged based on the same column fields.
   ![Shared Tables result view](/static/assets/working-with-datasource/images/SharedTables-result-view.png)


## Extract Mode Connection in Shared Tables

**Note:** Refer this documentation [How to connect to web extract datasource](https://help.boldbi.com/working-with-data-sources/data-connectors/web/) to know more about web extract connection.

1. If you connected to a extract data source, all extract data sources will be listed in the accordion.

   ![Extract Data source](/static/assets/working-with-datasource/images/Extract-data-source.png)

2. Select the shared data source table and perform a drag and drop action.
 ![Extract data source drag and drop](/static/assets/working-with-datasource/images/Extract-data-drag-and-drop-view.png)

3. The tables will be merged based on the same column fields.
![Extract data merge view](/static/assets/working-with-datasource/images/Extract-data-merge-view.png)

**Note:** Refer to this documentation [How to connect to extract mode](https://help.boldbi.com/working-with-data-sources/data-connectors/) Search for the data connector you intend to use, and follow the instructions under the Extract Mode section on the page.

