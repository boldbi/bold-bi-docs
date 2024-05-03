---
layout: post
title: How to add fixed target value in KPI card widget | Bold BI Docs
description: This page summarizes how to add fixed target value in KPI card widget by creating an expression column for the powerful KPI dashboard using Bold BI application.
platform: bold-bi
documentation: ug
---

# How to add fixed target value in KPI card widget

We can add a fixed target value in the KPI card widget using the [Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) and **Max** function.

Follow these steps to achieve this requirement.

1.	Create an expression column with the necessary default value and then save the data source.

    ![Create Expression with default value](/static/assets/faq/images/create-default-value-expression.png#max-width=60%)

2. Drag and drop the KPI card widget, bind the required value column in the `Actual Value` field, then bind the created expression column in the `Target Value` field, and apply the `Max` function.

    ![Assign Expression in KPI card widget](/static/assets/faq/images/assign-expression-in-kpi-card.png)

3. Now, you can apply the required formatting to the values. 

    ![KPI Card Preview](/static/assets/faq/images/kpi-card-preview.png)