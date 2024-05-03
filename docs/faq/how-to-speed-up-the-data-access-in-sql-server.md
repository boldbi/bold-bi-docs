---
layout: post
title: Improving SQL Query Performance - Embedded BI | Bold BI Docs
description: This page describes the general recommendations to improve SQL Server query performance for faster data access to dashboard embedded in your application.
canonical: "/faq/how-to-speed-up-the-data-access-in-sql-server/"
platform: bold-bi
documentation: ug
---

# General Recommendations to improve SQL Server Query Performance:

* Indexing data would increase the storage size, but data access speed will be better. The general recommendation is to index the data based on fields that will be used for grouping or filtering.
* All tables should have a clustered index, typically on the primary key.
* When creating an index, it is important to check the queries being made against the table. It is advisable to prioritize the index columns that are commonly used in WHERE and JOIN clauses, taking into consideration their order.
* Do not be afraid to create non-clustered indexes on most tables, just make sure that you are not over-indexing your tables. Too many indexes can degrade insertions.
* Separate the serving layer for the dashboard from the original database server. This means having a separate server dedicated solely to serving the Dashboard, Reporting, and Analytics use case. By doing this, the performance of the transactional database server or production DB will not be affected.
* Instead of having a duplicate copy of records in the serving layer, as mentioned in the previous point, another option is to create Data Marts (tables with aggregated data) as a serving layer for the dashboard. This approach eliminates the need for large aggregations to be performed over the data, thereby improving query performance.
* Adding partitioning techniques will improve performance.
* Use `denormalization` to decrease the running time of select queries by making data more accessible to the queries or by generating summarized reports in separate tables.
* Remove any unused tables or columns in your database.
* Avoid using TRIGGERS. They can extend the length of transactions and increase the chance of deadlocks. It is better to use CONSTRAINTS and STORED PROCEDURES to maintain the integrity of your databases.
* Take steps to avoid fields with unnecessary precision and high cardinality. For example, you could split highly unique datetime values into separate columns, such as month, year, date, and so on. Alternatively, use rounding on high-precision fields to lower cardinality, such as rounding 13.29889 to 13.3 when possible.