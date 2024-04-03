---
layout: post
title: Transformation and Preview – Embedded BI | Bold BI Learning
description: Learn working with Projects in ETL application in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Transformation

Select the project and click the Transform tab in the right side panel. You can transform the data after or before loading the data source into the destination using SQL scripts.

![Transform1](/static/assets/working-with-etl/images/etl_t1.png)

Click Add New to create a table in the destination using SQL scripts. Specify the table name in the "Transform table name" text box. Optionally, specify primary key values in a comma-separated format.

![Transform3](/static/assets/working-with-etl/images/etl_t3.png)
![Transform2](/static/assets/working-with-etl/images/etl_t2.png)

If the Data Store settings are Apache Doris or MySQL, data will be moved to ``DuckDB`` under ``{project_name}`` schema first and transformed into Bold ETL Data Store. For example, if the project name is "test, the data will be moved under ``test`` table schema.

If the Data Store settings are Bold IMDB Data Store, MSSQL, or PostgreSQL, data will be moved to direct destination DB under ``{project_name}`` table schema. 

Sample Transformation scripts:

![Transform4](/static/assets/working-with-etl/images/etl_t6.png)


## Preview:

Click **Preview** to preview data with a limit value of 10. The preview option only works after the data is initially loaded.
![Transform5](/static/assets/working-with-etl/images/etl_t5.png)