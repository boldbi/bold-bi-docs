---
layout: post
title: User Filter – Data Source Mode – Embedded BI | Bold BI
description: Learn how to create the user filter in Bold BI Embedded through mapping another data source existing in that server that holds detail about the user.
canonical: "/working-with-data-sources/user-filter/user-filter-advanced-data-source-mode/"
platform: bold-bi
documentation: ug

---

# User Filter Modes

There are two types of modes present in User Filter:

* [Data Source Mode](/working-with-data-sources/user-filter/user-filter-advanced-data-source-mode/)
* [Query Mode](/working-with-data-sources/user-filter/user-filter-advanced-query-mode/)

## Configure Data Source Mode

Let's consider our <a href="https://www.boldbi.com/dashboard-examples/hospitality/hotel-revenue-management-dashboard" target="_blank">Hotel Revenue Management Dashboard</a>. If the staff or managers handling each region are more dynamic and are shuffled every 3 months, then the manual mode filter will require updating the user filter settings every 3 months. This can lead to errors if an update is not done on time.

This issue can be overcome by using the Data Source mode. In this mode, we can have a mapping data source that will hold the details of the user along with the region they serve. So, when the region the manager or staff is serving is changed, only the mapping data source data needs to be updated, and the dashboard will automatically reflect the changes.

![User Filter Data Source](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-adv.png)


For our example, we can create a mapping data source that will hold the names of the staff and managers and the country where they serve. The data can be generated from any data source such as Excel, Web API, or SQL data sources. In this case, we will be using an Excel file.

![User Filter Data Source Mapping](/static/assets/working-with-datasource/user-filter/images/user-filter-adv-mapping-data.png)


> **NOTE:**  Microsoft Analysis Services data source cannot be used as a mapping data source.

First, using the created Excel data, we will create a data source as Mapping. 

In the **Hotel Revenue Management Dashboard Data Source**, open the User Filter dialog and choose Data Source mode. From the mapping data source list, choose the newly created data source **Mapping**.

> **IMPORTANT:**  All the data sources that the current user has permission to read will be listed in the **Mapping Data Source** list.

The columns from the mapping data source will be fetched, and the data will be populated in the Identity column dropdown and the column mapping list.

From the **Identity Type**, choose the identity as Full Name as we are going to map the user based on the name column.

![User Filter Identity Type](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-adv-identity-type.png)

From the **Identity Column**, choose the column **Name**, as this column contains the user's full name.

![User Filter Identity Column](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-adv-identity-column.png)

From the **Column Mapping** list, set the mapping for the Country column with the Region column of the Hotel Revenue data source. Then check the Country column to use its data as the filter for the Region column.

![User Filter Mapped](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-adv-mapped.png)

We can see a preview of the configuration using the Preview button. This will show us 10 records of the selected identity column and the mapping columns.

> **NOTE:**  Multiple columns can be selected from the Column Mapping list. All the filters will be applied based on the AND logical operator.

![User Filter Preview](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-adv-preview.png)

