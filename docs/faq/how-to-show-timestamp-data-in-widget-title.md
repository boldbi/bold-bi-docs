---
layout: post
title: How to show Timestamp data in widget title | Bold BI Docs
description: This page summarizes how to show timestamp data in dashboard widget's title using label parameter support of Bold BI application with available format types.
documentation: ug
---

# How to show Timestamp data in widget’s title

You can show Timestamp information in the widget’s title by using the corresponding timestamp column in [Label Parameter](https://help.boldbi.com/embedded-bi/visualizing-data/working-with-widgets/configuring-label-parameters/) and that timestamp column should be present in the data source.

The following is the list of supported date formatting. If you did not apply any formatting, the actual value of the timestamp column will be rendered in the widget’s title.

<table>
   <tr>
   <th>Date Foramtting Type</th>
   <th>Syntax</th>
   </tr>
   <td>Date Time</td>
   <td>{{:DateTime(Column_Name)}}</td>
   <tr>
   <td>Date</td>
   <td>{{:Date(Column_Name)}}</td>
   </tr>
   <td>Year</td>
   <td>{{:Year(Column_Name)}}</td>
   </tr>
   <tr>
   <td>Quarter Year</td>
   <td>{{:QuarterYear(Column_Name)}}</td>
   </tr>
   <tr>
   <td>Month Year</td>
   <td>{{:MonthYear(Column_Name)}}</td>
   </tr>
   <tr>
   <td>Week Year</td>
   <td>{{:WeekYear(Column_Name)}}</td>
   </tr>
   <tr>
   <td>Day Month Year</td>
   <td>{{:DayMonthYear(Column_Name)}}</td>
   </tr>
    <td>Month Day Year</td>
   <td>{{:MonthDayYear(Column_Name)}}</td>
   </tr>
   </table>

Follow these steps to achieve this requirement:

1. Configure any widget with the required fields. In this example, we have configured the KPI Card with the required fields in the **Assign Data** tab

    ![Configure KPI Card widget](/static/assets/embedded/faq/images/configure-kpi-card-widget.png#max-width=60%)

2. Navigate to the **Properties** tab and in the widget title and add a label parameter with the timestamp column name.

    `Syntax: {{:ColumnName}}`

    ![Timestamp Column in Datasource](/static/assets/embedded/faq/images/timestamp-column-in-datasource.png#max-width=60%)

    ![Add Timestamp in Label Parameter](/static/assets/embedded/faq/images/add-timestamp-label-parameter.png#max-width=60%)

3. In preview, you can view the data of a widget with the corresponding timestamp like the screenshot below:

    ![KPI Card with Timestamp](/static/assets/embedded/faq/images/kpi-card-with-timestamp.png#max-width=50%)