---
layout: post
title: Joining Data Sources – Embedded BI | Bold BI Documentation
description: Learn how to join multiple data sources in extract mode to achieve showcasing different sources of data through one dashboard in Bold BI Embedded.
canonical: "/working-with-data-source/shared-table/"
platform: bold-bi
documentation: ug

---

# What are Shared Tables

Shared tables are used to join multiple data sources to form a single data source.

After merging the tables, you can perform operations like join, expressions, and more. To learn more, click this link. [link](/working-with-data-source/transforming-data/joining-table/#adding-a-join-condition).

## How does it work?

While creating or editing an data source, under the tree view area where the schema and the tables are shown, an accordion will be shown with the name <b>Shared Tables</b>. On expanding this accordion **Only data sources of same mode** that are currently shared to the logged in user will be listed. Users can expand the data source and use the table in the data source.

The changes made in the original data source from where the table originated will be reflected here. So, if users modify a column, data or drop the table, the current data source will also be affected.

<b>Example:</b> The user can join Salesforce data with Google Analytics by same column field.

>**Note:** The shared tables feature is available only in the **All Extract** and **Web Live modes**   .

<b>Steps to Join tables:</b>
1. To integrate two or more data sources, open Shared Tables.

   ![Expand SharedTables](/static/assets/working-with-datasource/images/SharedTables-expand.png)

2. Then, select your shared data source table and perform drag-and-drop.

   ![Add SharedTables](/static/assets/working-with-datasource/images/SharedTables-add.png)  

3. The tables are merged based on your same column fields.

   ![SharedTables](/static/assets/working-with-datasource/images/SharedTables-result.png)  

>**Note:** If you connect to WEB API live data source other web API live data sources will be listed in accordion. Similarly, for extract mode data sources all extract mode data sources will be listed.

