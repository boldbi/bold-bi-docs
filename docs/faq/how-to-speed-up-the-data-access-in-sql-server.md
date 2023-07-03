---
layout: post
title: Improving SQL Query Performance - Embedded BI | Bold BI Docs
description: This page describes the general recommendations to improve SQL Server query performance for faster data access to dashboard embedded in your application.
canonical: "/faq/how-to-speed-up-the-data-access-in-sql-server/"
platform: bold-bi
documentation: ug
---

# General Recommendations to improve SQL Server Query Performance:

* Indexing data would increase the storage size but data accessing speed will be better. The general recommendation is to index the data based on fields that we will be used to group or perform filtering.
* All tables should have a clustered index, normally on the primary key.
* If you are creating an index, check the queries that are made against the table. Give preference to the index columns that appear on most WHERE and JOIN clauses and their order.
* Do not be afraid to create non-clustered indexes on most tables. Just be sure that you are not over-indexing your tables. Too many indexes degrade insertions.
* Separate the serving layer for the dashboard from the original database server. (i.e.) Having a separate server running only to serve the Dashboard, Reporting, and Analytics use case. In this way, the transactional database server or production DB performance will not be affected.
* Instead of having a duplicate copy of records in the serving layer as mentioned in the above point, another option is to create Data Marts (Tables with aggregated data) as a serving layer for the dashboard. In this way, there will not be any large aggregations performed over the data improving the query performance.
* Adding partitioning techniques will improve performance.
* Use `Denormalization` to decrease the running time of select queries by making data more accessible to the queries or by generating summarized reports in separate tables.
* Remove the unused tables or columns in your database.
* Avoid TRIGGERS. Because it will extend the length of transactions and increase the chance of deadlocks. It is better to use CONSTRAINTS and STORED PROCEDURES to maintain the integrity of your databases.
* Take steps to avoid fields with unnecessary precision and high cardinality. For example, you could split highly unique datetime values into separate columns – for example, month, year, date, and so on. Or, where possible, use rounding on high-precision fields to lower cardinality – (for example, 13.29889 -> 13.3).