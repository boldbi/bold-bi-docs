---
layout: post
title: How to apply required string filter in Grid widget | Bold BI Docs
description: This page summarizes how to apply the filter in the grid widget based on the string presented in the string type column using Bold BI application
platform: bold-bi
documentation: ug
---

# How to apply the filter in the grid widget based on the string presented in the string column

Display the filtered string values in the Gid widget using the [Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) column.

Follow these steps to meet this requirement:

1. Create an expression column using the `CONTAINS()` string function and include the necessary word in the **Substring_expression** element. Include multiple words using the `OR` condition. 

    Example: **IF(CONTAINS([Comment],’good’)='true','true','false')**

    ![Contains Function Expression](/static/assets/faq/images/contains-function-expression.png#max-width=60%)

2. Configure the Grid widget with the required fields and bind the created expression in the Filters section.

    ![Drop String Expression in Filter Section](/static/assets/faq/images/drop-string-expression-in-filters-section.png#max-width=60%)

3. Open the **Filters** pop-up and then select the correct value to see the filtered data in the Grid widget.

    ![Open Filters Pop-UP](/static/assets/faq/images/open-filters-pop-up.png#max-width=60%)

    ![Select True Value to Fitler the Data](/static/assets/faq/images/select-true-value-to-filter-the-data.png#max-width=60%)

4. Now, view the grid that is showing the filtered data.

    ![Grid with Filtered Data](/static/assets/faq/images/gird-with-filtered-data.png#max-width=60%)