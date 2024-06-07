---
layout: post
title: How to add threshold to a Chart – Embedded Analytics | Bold BI
description: This page describes how to add a threshold line in a chart visualization for embedded dashboards to showcase when data satisfies a specific condition.
canonical: "/how-to-add-threshold-to-a-chart-widget/"
platform: bold-bi
documentation: ug
---

# How to add threshold to a Chart widget 

You can display the threshold line in the chart widget using both the [Expressions](/working-with-data-sources/data-modeling/configuring-expression-columns/) field and [Dashboard Parameter](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) support in the Bold BI application.

* `Expression field`: You can use this option to display a static threshold value for all users.
* `Dashboard Parameter`: You can use this option to select the dynamic threshold value. You can also use this in conjunction with the user-based filter to display the threshold value based on the user currently viewing the dashboard.

Please follow these steps:

1. Create a Dashboard parameter of `Numeric` type that can be either a constant value or data from any table. Refer to these sections:

   * [Literal Mode](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/#literal-mode): To create a constant value for a dashboard parameter.
   * [List Data Source Type](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/#list-data-source-type): To obtain the maximum value of the specified column using the `Custom Query` dashboard parameter.

   >**NOTE:** You can [change the parameter](/working-with-data-sources/dashboard-parameter/change-the-dashboard-parameter-value-dynamically/) value while viewing the dashboard.

2. Create an [Expression column](/working-with-data-sources/dashboard-parameter/uses-of-dashboard-parameters/#expression) using the dashboard parameter along with the `Max` function.

   `Syntax: MAX(Parameter)`

   ![Parameter in Expression](/static/assets/faq/images/parameter-in-expression.png)

3. Now, you can configure the chart widget with the expression column that was created as follows.
   
   ![Configure Chart Widget with Expression](/static/assets/faq/images/configure-chart-widget-with-expression.png) 

4. You can change the column type of Value according to the requirement in the `Chart Type & Axis` property of the chart widget. However, you must set the threshold value chart type as Line.

   ![Threshold Chart Type](/static/assets/faq/images/threshold-chart-type.png)

5. Also, you need to uncheck the `Show Marker` property in order to disable the marker on the line.

   ![Uncheck Show Marker for Threshold](/static/assets/faq/images/showmarker-threshold.png)

6. Now the widget will render like this.

   ![Threshold line in Chart](/static/assets/faq/images/thresholdline-chart.png)