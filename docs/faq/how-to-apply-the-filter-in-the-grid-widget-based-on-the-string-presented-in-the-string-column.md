---
layout: post
title: How to apply required string filter in Grid widget | Bold BI Docs
description: This page summarizes how to apply the filter in the grid widget based on the string presented in the string type column using Bold BI application
platform: bold-bi
documentation: ug
---

# How to apply the filter in the grid widget based on the string presented in the string column

Show the filtered string values in the Gid widget using the [Expression](https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/) column.

Follow these steps to achieve this requirement:

1. Create an expression column with `CONTAINS ()` string function and add the required word in the **Substring_expression** element. Add more than one word using the `OR` condition. 

    Example: **IF(CONTAINS([Comment],’good’)='true','true','false')**

    ![Contains Function Expression](/static/assets/embedded/faq/images/contains-function-expression.png#max-width=60%)

2. Configure the Grid widget with the required fields and bind the created expression in the Filters section.

    ![Drop String Expression in Filter Section](/static/assets/embedded/faq/images/drop-string-expression-in-filters-section.png#max-width=60%)

3. Open the **Filters** pop-up and then choose the true value to view the filtered data in the Grid widget

    ![Open Filters Pop-UP](/static/assets/embedded/faq/images/open-filters-pop-up.png#max-width=60%)

    ![Select True Value to Fitler the Data](/static/assets/embedded/faq/images/select-true-value-to-filter-the-data.png#max-width=60%)

4. Now, view that the grid is showing the filtered data.

    ![Grid with Filtered Data](/static/assets/embedded/faq/images/gird-with-filtered-data.png#max-width=60%)