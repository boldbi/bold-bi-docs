---
layout: post
title: Joining tables based on expression columns | Cloud Bold BI Docs
description: This page provides an overview of how to combine columns in the Bold BI Cloud application using expression columns in data source designer.
canonical: "/embedded-bi/faq/how-to-join-tables-based-on-expression-columns/"
platform: bold-bi
documentation: ug
---

# Joining tables based on expression column

Bold BI allows joining tables based on the expression columns created.


1. Create an [expression](/cloud-bi/working-with-data-source/transforming-data/configuring-expression-columns) for joining the tables and click `Save`. The below expression used to split the employee name from Email column in the Employee table and joining the Employee table with EmployeesProfile table.

    ![create expression](/static/assets/cloud/faq/images/create-expression-for-join.png)

2. Select the column created in previous step under expression.

    ![select expression column](/static/assets/cloud/faq/images/select-expression-columns.png)

3. Click `Merge` to join the tables.

    ![click merge button](/static/assets/cloud/faq/images/click-merge-icon.png)

4. Joined tables are displayed based on the Expression column when you click `Update` or `Data preview`.

    ![joined columns are shown in table](/static/assets/cloud/faq/images/joined-columns-table.png)

> **Note**: When choosing the expression columns, aggregate expressions are restricted.
