---
layout: post
title: Joining Data Sources – Embedded BI | Bold BI Documentation
description: Learn how to join multiple data sources in extract mode to achieve showcasing different sources of data through one dashboard in Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/shared-table/"
platform: bold-bi
documentation: ug
---

# What are Shared Tables

Shared tables are used to join multiple extract mode data sources to form a single data source. 

<b>Example:</b> The user can join Salesforce data with Google Analytics by same column field.

## How does it work?

While creating or editing an extract mode data source, under the tree view area where the schema and the tables are shown, an accordion will be shown with the name <b>Shared Tables</b>. On expanding this accordion the extract mode data sources that are currently shared to the logged in user will be listed. Users can expand the data source and use the table in the data source.

The changes made in the original data source from where the table originated will be reflected here. So, if users modify a column, data or drop the table, the current data source will also be affected.

<b>Example:</b>
1. To integrate two or more extract mode data source, open Shared Tables.

   ![Expand SharedTables](/static/assets/embedded/working-with-datasource/images/SharedTables-expand.png)

2. Then, select your shared data source table and perform drag-and-drop.

   ![Add SharedTables](/static/assets/embedded/working-with-datasource/images/SharedTables-add.png)  

3. The tables are merged based on your same column fields.

   ![SharedTables](/static/assets/embedded/working-with-datasource/images/SharedTables-result.png)  

> **NOTE:**  After merging the tables, you can perform operations like join, expressions, and so on. To learn more, click [here](/embedded-bi/working-with-data-source/transforming-data/joining-table/#adding-a-join-condition).
