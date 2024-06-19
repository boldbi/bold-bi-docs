---
layout: post
title: How to show current Data & Time in widget title | Bold BI Docs
description: This page summarizes how to show current date and time in widget title along with the required date formatting types in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to show Current Date and Time in Widget Title

You can show the **current date and time** in widget’s title using [Expression](https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/) and [Label Parameter](https://help.boldbi.com/cloud-bi/visualizing-data/working-with-widgets/configuring-label-parameters/) supported by Bold BI application.

Follow these steps to achieve this requirement:

1. Create and save an expression column with `TODAY()` function.

    ![Create Expression with Today function](/bold-bi-docs/static/assets/embedded/faq/images/create-expression-with-today-function.png)

2. In widget title, use expression column as a label parameter.

    ![Use Today expression in widget title](/bold-bi-docs/static/assets/embedded/faq/images/use-today-exp-in-widget-title.png)

3. Preview the dashboard to help you view the current date and time on widget title. 

    ![Today date in view mode](/bold-bi-docs/static/assets/embedded/faq/images/today-date-in-view-mode.png#max-width=50%)

    By default, the current Date and Time will be shown while using the created expression column. You can also show a required date formatting as well as the following.

    ![Label Parameter with Date Formatting](/bold-bi-docs/static/assets/embedded/faq/images/label-parameter-with-date-formatting.png)

    ![Date Formatting review](/bold-bi-docs/static/assets/embedded/faq/images/date-formatting-preview.png#max-width=50%)

The following is the list of supported date formatting types.
    
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