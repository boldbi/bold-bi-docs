---
layout: post
title:  Appending Data Sources – Embedded BI | Bold BI Docs
description: Learn how to append different data sources of same connector type and connect to dashboard in Bold BI Embedded. 
canonical: "/working-with-data-sources/append-data-sources/"
platform: bold-bi
documentation: ug
keywords: append, append data source, data source
---

# How to create append data source

The append data source feature allows you to create a new data source by combining existing extracted mode data sources. This is done by appending all rows with column mapping.

To create a append data source, go to the data source listing page and click on `Append Data Source`.

![Combine data source icon](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-icon.png)

The append data source page will open.

![Combine data source page](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-page.png)

Listing out the extract mode data sources. You can select more than one data source to create the append data source.

![Create Append data source](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/create-combine-ds.png)

If you want to map the data source columns, use the `Column Mapping` option.

![Append data source mapping window](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-column-mapping.png)

The default column mapping is based on the source table columns. If the target table column does not match with the source table column, a `NULL` value is selected by default. You can select the desired mapping column using this window.

![Append data source mapping](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-mapping.png)

Once you have finished mapping the columns, click on `Append` to create the new data source. This will take you to the data source editing page, where the appended data is shown in the preview grid.

![Append data source in query designer](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-query-designer.png)

You can change the column mapping by clicking on the settings icon near the table name.

![Append data source query designer mapping](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-mapping-in-query-designer.png)

To view the appended tables list, expand the arrow icon near the table name.

![Append table list](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-table-list.png)

You can also append new tables from the shared tables option.

![Append add shared tables](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-shared-tables.png)

If you want to remove a table from the appended table list, use the delete icon.

![Append remove table](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-remove-table.png)

To save the data source, click on `Save and Exit`.

![Append data source save](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-save.png)

Now, the appended data source has been created successfully. On the server page, the `Data Refresh Status` will be shown.

![Append data source refresh](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-refresh-status.png)