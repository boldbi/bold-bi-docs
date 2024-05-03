---
layout: post
title: View first 7 days data of each month in dashboard | Bold BI Docs
description: This page describes about how to view first 7 days data of each month in a dashboard by creating an expression field for the data source in Bold BI designer.
platform: bold-bi
documentation: ug
---
# How to view first 7 days data of each month in dashboard

You can achieve the requirement of viewing the first 7 days of each month on the dashboard by using this  [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) field.

Please follow the provided steps to meet this requirement.
1. After creating the necessary data source, you must create an expression column that corresponds with the date column.

    `Syntax: IF(DAY([DateColumn) >= 1 AND DAY([DateColumn]) <= 7 , [DateColumn], null)`
 
    ![First Seven Days Expression](/static/assets/faq/images/first-sevendays-expression.png#width=545.5px;height=370.289px)

2. Now you can bind this expression column to the required widget, and it will return the actual value for the first 7 days of a month and a Null value for all other days of the month.

    ![Configure Widget with Created Expression](/static/assets/faq/images/configure-widget-with-created-expression.png)

3. You can bind the same expression column in the `Filters` section of a widget to exclude the `Null` value.

    ![Bind Expression in Filer Section](/static/assets/faq/images/bind-expression-in-filter-section.png)

4. Open the `Filter(s)` pop-up window through the provided option and uncheck the `Null` value from the list as shown in the screenshot.

    ![Open Filter Window](/static/assets/faq/images/open-filter-window.png#width=400px;height=350px)

    ![Filter Null Value](/static/assets/faq/images/filter-null-value.png#width=370.938px;height=303.539px)    

    Now, the widget will display the available data for the first seven days of each month, as shown in the screenshot.

    ![Widget Render with First Seven Days](/static/assets/faq/images/widget-render-with-first-seven-days-of-a-month.png)    