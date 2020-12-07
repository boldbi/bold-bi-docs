---
layout: post
title:  Combining Data Sources – Embedded BI | Bold BI Docs
description: Learn how to combine different data sources of same connector type and connect to dashboard in Bold BI Embedded. 
canonical: "/cloud-bi/working-with-data-source/combine-data-sources/"
platform: bold-bi
documentation: ug
keywords: combine, combine data source, data source
---

# How to create combine data source

Combine data source feature allows you to create a new data source from the existing extracted mode data sources by appending all rows with column mapping.

To create combine data source, click `Combine Data Source` from the data source listing page.

![Combine data source icon](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-icon.png)

Combine data source page will open as follows.

![Combine data source page](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-page.png)

Here, extract mode data sources will be listed out. You can select more than one data sources to create combine data source.

![Create Combine data source](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/create-combine-ds.png)

If you want to map the data source columns, use the `Column Mapping` option.

![Combine data source mapping window](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-column-mapping.png)

The default column mapping based on the source table columns is shown as follows. If the target table column does not match with the source table column, `NULL` value is selected by default. You can select the desired mapping column using this window.

![Combine data source mapping](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-mapping.png)

Then, click `Append` to create a new data source. It navigates to the data source editing page and appended data is shown in the preview grid as follows.

![Combine data source in query designer](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-query-designer.png)

You can change the column mapping using the settings icon near the table name.

![Combine data source query designer mapping](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-mapping-in-query-designer.png)

You can see the combined tables list by expanding the arrow icon near the table name.

![Combine table list](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-table-list.png)

You can combine new tables from shared tables option as follows.

![Combine add shared tables](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-shared-tables.png)

Using the delete icon, you can remove the table from the combined table list.

![Combine remove table](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-remove-table.png)

To save the data source, click `Save and Exit` as follows.

![Combine data source save](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-save.png)

Now, combined data source created successfully. In server page, `Data Refresh Status` will be shown as follows.

![Combine data source refresh](/static/assets/embedded/working-with-datasource/combine-ds-and-isolation-code/images/combine-ds-refresh-status.png)