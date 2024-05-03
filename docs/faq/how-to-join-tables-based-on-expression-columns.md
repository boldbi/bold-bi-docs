---
layout: post
title: Joining tables based on expression columns  | Bold BI
description: This page provides an overview of how to combine columns in the Bold BI application using expression columns.
platform: bold-bi
documentation: ug
---

# Joining tables based on expression column

Bold BI allows for joining tables based on the expression columns that are created.

1. Create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) for joining the tables and click `Save`. The expression below is used to split the employee name from the Email column in the Employee table and join the Employee table with the EmployeesProfile table.

    ![create expression](/static/assets/faq/images/create-expression-for-join.png)

2. Select the column created in the previous step under expression.

    ![select expression column](/static/assets/faq/images/select-expression-columns.png)

3. Click `Merge` to join the tables.

    ![click merge button](/static/assets/faq/images/click-merge-icon.png)

4. Joined tables are displayed based on the Expression column when you click `Update` or `Data preview`.

    ![joined columns are shown in table](/static/assets/faq/images/joined-columns-table.png)

> **Note**: When choosing the expression columns, aggregate expressions are restricted.