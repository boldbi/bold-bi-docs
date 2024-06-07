---
layout: post
title: Transformation and Preview – Embedded BI | Bold BI Learning
description: Learn how to Transformation and preview in ETL application in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Transformation

After the project data has been moved into the destination database, select a project and click on the Transform tab in the right side panel.

![Transform1](/static/assets/working-with-etl/images/etl_t1.png)

Click on **Add New** to create a table in the destination using SQL scripts. The table name must be specified in the "Transform table name" text box. Optionally, primary key values can be specified in a comma-separated format.

![Transform3](/static/assets/working-with-etl/images/etl_t3.png)
![Transform2](/static/assets/working-with-etl/images/etl_t2.png)

If the Data Store settings are PostgreSQL, Apache Doris or MySQL, data will be moved to `DuckDB` under `{project_name}` schema first and transformed into Bold ETL Data Store. For example, if the project name is "test, the data will be moved under `test` table schema.

If the Data Store settings are Bold IMDB Data Store (MSSQL), MSSQL, data will be moved to MSSQL destination DB under `{project_name}` table schema.

Sample Transformation scripts:

![Transform4](/static/assets/working-with-etl/images/etl_t6.png)


## Preview:

Click on **Preview** to view the data with a limit value of 10. 
![Transform5](/static/assets/working-with-etl/images/etl_t5.png)

**Note:** The preview option only works after the source table data has been moved to destination database.

In the Transform section, users have the capability to incorporate multiple tables into their projects. They are also able to rearrange the sequence in which the transform tables are executed, as well as reuse these tables for future analyses.
![Transform5](/static/assets/working-with-etl/images/etl_t7.png)
![Transform5](/static/assets/working-with-etl/images/etl_t8.png)
![Transform5](/static/assets/working-with-etl/images/etl_t9.png)

When users desire to incorporate Primary keys into the transform tables, they should input the primary key values during the process of adding or editing the tables.
![Transform5](/static/assets/working-with-etl/images/etl_t10.png)
![Transform5](/static/assets/working-with-etl/images/etl_t11.png)


After finishing the transformation, users should click the ``Save`` button. To execute the project, navigate to the ``Load`` tab, save the project again, and then select the ``Run Now`` option on the schedule page. The tables will be transferred to the destination database during this process.
