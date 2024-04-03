---
layout: post
title: User Filter – Query Mode – Embedded BI | Bold BI Learning
description: Learn how to create user filter in Bold BI Embedded through mapping another data source and run query against it to generate the fields and map.
canonical: "/working-with-data-sources/user-filter/user-filter-advanced-query-mode/"
platform: bold-bi
documentation: ug

---

# User Filter - Query Mode

## Query Mode
The query mode gives us more control over the data that is used for the mapping. We can write our own query that will be executed towards the connection of the data source selected from the Mapping Data source list.

We can write query that can be a Stored procedure or return an expression column.

Hit on **Run** button to run the query. If the query is valid the identity column drop down and the mapping column list will be populated. 

From here we can follow the same steps that we followed while configuring the data source mode.
![User Filter Query Mode](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-adv-query-mode.png)
