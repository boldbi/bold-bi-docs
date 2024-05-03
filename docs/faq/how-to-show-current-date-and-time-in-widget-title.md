---
layout: post
title: How to show current Data & Time in widget title | Bold BI Docs
description: This page summarizes how to show current date and time in widget title along with the required date formatting types in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to show Current Date and Time in Widget Title

You can display the **current date and time** in widget’s title using the [Expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) and [Label Parameter](/visualizing-data/working-with-widgets/configuring-label-parameters/) supported by Bold BI application.

Follow these steps to meet this requirement:

1. Create and save a column with an expression using the `TODAY()` function.

    ![Create Expression with Today function](/static/assets/faq/images/create-expression-with-today-function.png)

2. In the widget title, use the expression column as the label parameter.

    ![Use Today expression in widget title](/static/assets/faq/images/use-today-exp-in-widget-title.png)

3. Preview the dashboard to help you view the current date and time in the widget title. 

    ![Today date in view mode](/static/assets/faq/images/today-date-in-view-mode.png#max-width=50%)

    By default, the current date and time will be shown when using the created expression column. You can also display a required date formatting, as well as the following.

    ![Label Parameter with Date Formatting](/static/assets/faq/images/label-parameter-with-date-formatting.png)

    ![Date Formatting review](/static/assets/faq/images/date-formatting-preview.png#max-width=50%)

The following is a list of supported date formatting types.
    
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