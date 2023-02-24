---
layout: post
title:  How to add threshold to a Chart – Cloud Analytics | Bold BI
description: This page describes how to add a threshold line in a chart visualization for cloud dashboards to showcase when data satisfies a specific condition.
platform: bold-bi
documentation: ug
---

# How to add threshold to a Chart widget 

You can show the threshold line in the chart widget using both the [Expressions](https://help.boldbi.com/cloud-bi/working-with-data-source/transforming-data/configuring-expression-columns/) field and [Dashboard Parameter](https://help.boldbi.com/cloud-bi/working-with-data-source/configuring-dashboard-parameters/) support of the Bold BI application. 

* `Expression field`: You can use this option to show a static threshold value for all users.
* `Dashboard Parameter`: You can use this option to select the dynamic threshold value. You can use this along with the user-based filter to show the threshold value based on the user currently viewing the dashboard.

Please follow these steps:

1. Create a Dashboard parameter of `Numeric` type and it can be either a constant value or data from any table. Refer to these sections:
 
    * [Literal Mode](https://help.boldbi.com/cloud-bi/working-with-data-source/configuring-dashboard-parameters/#literal-mode): To create a constant value dashboard parameter.
    * [List Data Source Type](https://help.boldbi.com/cloud-bi/working-with-data-source/configuring-dashboard-parameters/#list-data-source-type): To get a Maximum value of the required column using the `Custom Query` dashboard parameter. 

   >**NOTE:** You can [change this parameter](https://help.boldbi.com/cloud-bi/working-with-data-source/configuring-dashboard-parameters/#change-the-dashboard-parameter-value-dynamically) value while viewing the dashboard.

2. Create an [Expression column](https://help.boldbi.com/cloud-bi/working-with-data-source/configuring-dashboard-parameters/#expression) using the dashboard parameter along with the `Max` function.

   `Syntax: MAX(Parameter)`

   ![Parameter in Expression](/static/assets/cloud/faq/images/parameter-in-expression.png)

3. Now, you can configure the chart widget with that created expression column as follows.
   
   ![Configure Chart Widget with Expression](/static/assets/cloud/faq/images/configure-chart-widget-with-expression.png) 

4. You can change the column type of Value as per the requirement from the `Chart Type & Axis` property of the chart widget but you have to set the threshold value chart type as Line as follows.

   ![Threshold Chart Type](/static/assets/cloud/faq/images/threshold-chart-type.png)

5. Also, you need to uncheck the `Show Marker` property to disable the marker of the line.

   ![Uncheck Show Marker for Threshold](/static/assets/cloud/faq/images/showmarker-threshold.png)

6. Now the widget will be rendered as follows.

   ![Threshold line in Chart](/static/assets/cloud/faq/images/thresholdline-chart.png)