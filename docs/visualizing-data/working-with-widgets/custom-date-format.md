---
layout: post
title: Displaying Custom Date Format in Dashboard Widget | Bold BI Docs
description: Learn how to configure Custom Date Format that helps the user implicitly set the selected date fields in the dashboard widget using the Bold BI application.
platform: bold-bi
documentation: ug
---

# Custom Formatting Date Type Column
Custom date format allows you to set the desired format for the date field implicitly and apply formatting based on the fiscal year. This can be supported for all date formats such as year, month, date, day, and many more.

> **NOTE:**  Custom date format support is only applicable for chart and grid widgets.

## Configuring custom date format to date field 
The custom date format option is applicable only for the date-time type of dimension column. To configure the custom date format settings, open the `Date Settings` dialog from the `Settings` option by clicking the `Settings icon`.

![Create Custom Date](/static/assets/visualizing-data/working-with-widgets/images/customdateformatoption.png#max-width=60%)

By clicking `Edit..` menu item, `Date Settings` dialog will open as follows.

![Custom Date Dialog Box](/static/assets/visualizing-data/working-with-widgets/images/customdateformatdialog.png#max-width=62%)

The `Date Settings` dialog has the following options that allow you to customize the date field with the applicable date format:
1. [Predefined format](/visualizing-data/working-with-widgets/custom-date-format/#format).
2. [Custom format](/visualizing-data/working-with-widgets/custom-date-format/#custom-format).
3. [Fiscal year start](/visualizing-data/working-with-widgets/custom-date-format/#fiscal-year-start).

To clear the custom date format settings for the date field, click on `clear` in the settings drop-down menu. This menu item is enabled only when the date field is already configured with custom date settings.

![Clear Custom Date](/static/assets/visualizing-data/working-with-widgets/images/customdateformatclear.png#max-width=62%)

## How to customize date field with custom date format
The date field can be customized by the `Format` and `Fiscal year start` options provided in the `Date Settings` dialog.

### Format
You can customize the date format of the date field using various custom date format options based on the fiscal year. For example, if the date format is `Year`, then the year format can be customized by using the provided default options like `2016-2017...or 16-17....`

Follow these steps to apply a predefined date format:
1. Click on the `Format` dropdown.
2. Choose any one of the predefined format options as follows.

    ![Set Custom Date Format](/static/assets/visualizing-data/working-with-widgets/images/customdateformatdropdown.png#max-width=62%)

The supported built-in date format types are listed in the following table.

<table>
<tr>
    <td><b>Types</b></td>
    <td><b>Formats</b></td></tr>
<tr>
    <td rowspan='2'>Year</td>
    <td>2016, 2017, ... </td>
</tr>
<tr>
    <td>16, 17...</td>
</tr>
<tr>
    <td rowspan='3'>Quarter</td>
    <td>Quarter 1, Quarter 2</td>
</tr>
<tr>
    <td>Q1, Q2, Q3, Q4</td>
</tr>
<tr>
    <td>1, 2, 3, 4</td>
</tr>
<tr>
    <td rowspan='4'>Month</td>
    <td>Jan, Feb, Mar</td>
</tr>
<tr>
    <td>January, February</td>
</tr>
<tr>
    <td>1, 2, 3...12</td>
</tr>
<tr>
    <td>01, 02, 03...12</td>
</tr>
<tr>
    <td rowspan='3'>Hour</td>
    <td>00, 01, 02, 03...</td>
</tr>
<tr>
    <td>1 AM, 2 PM..</td>
</tr>
<tr>
    <td>0, 1, 2, 3....</td>
</tr>
<tr>
    <td rowspan='2'>Minutes</td>
    <td>00, 01, 02, 03...</td>
</tr>
<tr>
    <td>0, 1, 2, 3...</td>
</tr>
<tr>
    <td rowspan='2'>Seconds</td>
    <td>00, 01, 02, 03...</td>
</tr>
<tr>
    <td>0, 1, 2, 3...</td>
</tr>
<tr>
    <td rowspan='2'>Quarter Year</td>
    <td>Quarter 1 2017, Quarter 2 2018</td>
</tr>
<tr>
    <td>Q1 2017, Q2 2017</td>
</tr>
<tr>
    <td rowspan='2'>Month Year</td>
    <td>Jan 2016, Feb 2017</td>
</tr>
<tr>
    <td>January 2016, February 2017</td>
</tr>
<tr>
    <td>Date Hour</td>
    <td>23/07/2017 00</td>
</tr>
<tr>
    <td rowspan='3'>Week of Year</td>
    <td>00, 01, 02, 03...</td>
</tr>
<tr>
    <td>Week 0, Week 1, Week 2...</td>
</tr>
<tr>
    <td>Week 00, Week 01, Week 02...</td>
</tr>
<tr>
    <td rowspan='2'>Day</td>
    <td>00, 01, 02, 03...31</td>
</tr>
<tr>
    <td>1, 2, 3...31</td>
</tr>
</table>

### Custom Format
You can see the `Custom` option under the `Format` drop-down, which allows the user to customize the date format based on their requirements. 
For example, if the date format is set to `Date`, then the format can be customized to MM/dd/yyyy, dd-MM-yyyy, and more.

To apply a custom format, follow these steps:
1. Click on the `Format` dropdown.
2. Select the `Custom` option.
3. A textbox named `Custom Format` will be enabled.
4. Add desired formats, which can be referred to from the supported format information by hovering over the `info icon`.

    ![Set Custom for Date Field](/static/assets/visualizing-data/working-with-widgets/images/customdatecustomformat.png#max-width=62%)

5. The preview of the entered date format will be displayed under the text box.

    ![Reference format](/static/assets/visualizing-data/working-with-widgets/images/customdatereferenceformat.png#max-width=62%)

> **NOTE:**  The Custom Format option is visible only for Date Time, Date, Year, and Date Hour.

The supported custom format types are provided in the following table.

<table>
<tr>
    <td><b>Types</b></td>
    <td><b>Custom Formats</b></td>
    <td><b>description</b></td>
</tr>
<tr>
    <td rowspan='2'>Year</td>
    <td>yy</td>
    <td>Displays the year, from 00 to 99</td>
</tr>
<tr>
    <td>yyyy</td>
    <td>Display the year as a four-digit number</td>
</tr>
<tr>
    <td rowspan='3'>Month</td>
    <td>MM</td>
    <td>Display the month, from 01 through 12</td>
</tr>
<tr>
    <td>MMM</td>
    <td>Display the abbreviated name of the month</td>
</tr>
<tr>
    <td>MMMM </td>
    <td>Display the full name of the month</td>
</tr>
<tr>
    <td rowspan='2'>Hour</td>
    <td>HH</td>
    <td>Display the hour, using a 24-hour clock from 00 to 23</td>
</tr>
<tr>
    <td>hh</td>
    <td>Display the hour, using a 12-hour clock from 01 to 12</td>
</tr>
<tr>
    <td>Minute</td>
    <td>mm</td>
    <td>Display the minute, from 00 through 59</td>
</tr>
<tr>
    <td>Second</td>
    <td>ss</td>
    <td>Display the second, from 00 through 59</td>
</tr>
<tr>
    <td>Time</td>
    <td>ttt</td>
    <td>Display the AM/PM</td>
</tr>
</table>

### Fiscal Year Start
If you want to apply the custom format along with the fiscal year, use the `Fiscal Year Start` option from the `Date Settings` dialog as follows.

![Set Custom Firmat](/static/assets/visualizing-data/working-with-widgets/images/customdatefiscalyear.png#max-width=62%)

>**NOTE:** The filtering operation won't work when you are choosing the widget as a master and applying the custom date format for the date column.
