---
layout: post
title: View first 7 days data of each month in dashboard | Bold BI Docs
description: This page describes about how to view first 7 days data of each month in a dashboard by creating an expression field for the data source in Bold BI designer.
platform: bold-bi
documentation: ug
---
# How to view first 7 days data of each month in dashboard

You can achieve the requirement to view the first 7 days of each month in dashboard by using this [expression](https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/) field.

Please follow the given steps to achieve this requirement:
1. After creating the required data source, you need to create an expression column with the corresponding date column.

    `Syntax: IF(DAY([DateColumn) >= 1 AND DAY([DateColumn]) <= 7 , [DateColumn], null)`
 
    ![First Seven Days Expression](/bold-bi-docs/static/assets/embedded/faq/images/first-sevendays-expression.png#width=545.5px;height=370.289px)

2. Now you can bind this expression column in required widget and it will return actual value for first 7 days of a month and a Null value for all other days of a month.

    ![Configure Widget with Created Expression](/bold-bi-docs/static/assets/embedded/faq/images/configure-widget-with-created-expression.png)

3. You can bind this same expression column in `Filters` section of a widget to exclude the `Null` value.

    ![Bind Expression in Filer Section](/bold-bi-docs/static/assets/embedded/faq/images/bind-expression-in-filter-section.png)

4. Open `Filter(s)` pop-up window through the given option and uncheck `Null` value from the list like shown in the screenshot.

    ![Open Filter Window](/bold-bi-docs/static/assets/embedded/faq/images/open-filter-window.png#width=400px;height=350px)

    ![Filter Null Value](/bold-bi-docs/static/assets/embedded/faq/images/filter-null-value.png#width=370.938px;height=303.539px)    

    Now, the widget will show available data of first seven days of each month like shown in the screenshot.

    ![Widget Render with First Seven Days](/bold-bi-docs/static/assets/embedded/faq/images/widget-render-with-first-seven-days-of-a-month.png)    