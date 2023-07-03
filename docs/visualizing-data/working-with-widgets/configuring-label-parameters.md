---
layout: post
title: Configuring Label Parameters – Embedded BI | Bold BI Docs
description: Learn how to configure label parameters in label widget and name property in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/configuring-label-parameters/"
platform: bold-bi
documentation: ug
---

# Configuring Label Parameters

You can configure the label parameters by using the field name in the `Name` of widget. Use the following format to configure the label parameter.

**Syntax:** `{{:Column_Name}}` **when single data source is present** 

Or

**Syntax:** `{{:DataSource_Name.Column_Name}}` **when more than one data source is present**.

For example, the name text of the Grid widget as: `Ship Country` - `{{:ShipCountry}}`.

![Name property](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_header.PNG)

Now, the dashboard will show the label parameter for all countries like `Ship Country - All`

![All parameters](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_allparameters.PNG)

You can select the required country to display by selecting the country name in the grid widget. Based on the selected country, the values will be displayed on the widget.

![Particular name](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_particularname.PNG)

You can also use label widget to configure the label parameters.

Drag and drop the label widget into the design pane and click the edit label to add the label parameters.

![Edit label](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_editlabel.PNG)

While previewing the dashboard, initially the parameter of the ship country will be shown as `All` in the label widget.

![Label all](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_labelall.PNG)

While selecting the particular country, it will show that country name in the label widget.

![Label in specified data](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_labelinspecifieddata.PNG)

You can add the data source before the parameters in the `Name` of the properties tab, when more than one data source is present in the dashboard.

![Using data source](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_usingdatasource.PNG)

While previewing the dashboard, initially the values of parameters will be shown as `All`.

![Result](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_result.PNG)

While selecting the particular country, you can show that country name in the widget.

![Specified data](/static/assets/visualizing-data/working-with-widgets/images/configuringlabelparameters_specifieddata.PNG)

## Functions supported in label parameters

You can configure the label parameters using the column name with functions such as `Sum, Count, Average, Min, Max, Var, and Distinct Count` for numeric values.

For `Date Time` type, the supported functions are `Date, Year, Month, Quarter, Day, Day Month Year, Minutes, Second, Month Year, Date Hour, Day of Week, and Week of Year`.

For `Text` type, the supported functions are `Count and Distinct Count`.

Use the following format, to configure the label parameter.

**Syntax:**  `{{:function(Column_Name)}}` **when single data source is present** 

Or

**Syntax:** `{{:function(DataSource_Name.Column_Name)}}` **when more than one data source is present**.

<table>
<tr>
<th>Function Name</th>
<th>Supported Type(s)</th>
<th>Description</th>
<th>Example(s)</th>
</tr>
<tr>
<td>Sum</td>
<td>Number</td>
<td>This function returns the summation of the given column in number format.</td>
<td>Total Quantity - {{:Quantity}} or Total Quantity - {{:sum(Quantity)}}</td>
</tr>
<tr>
<td>Average</td>
<td>Number</td>
<td>This function returns the average of the given column in number format.</td>
<td>Average freight amount is {{:avg(Freight)}} or {{:average(Freight)}}</td>
</tr>
<tr>
<td>Count</td>
<td>Number, Text, Date Time</td>
<td>This function returns the count of the given column in numeric format.</td>
<td>Number of records : {{:count(Quantity)}} or Number of records : {{:count(ShipCountry)}} or Total Transactions : {{:count(InvoiceDate)}}</td>
</tr>
<tr>
<td>DistinctCount</td>
<td>Number, Text, Date Time</td>
<td>This function returns the count of distinct values in the given column in number format.</td>
<td>Number of unique records are {{:dcount(OrderID)}} or {{:distinctcount(OrderID)}} Countries count is {{:dcount(ShipCountry)}} or {{:distinctcount(ShipCountry)}}
Total unique transaction count is, {{:dcount(InvoiceDate)}}</td>
</tr>
<tr>
<td>Minimum</td>
<td>Number</td>
<td>This function returns the minimum value in the given column in number format.</td>
<td>Minimum value of Quantity: {{:min(Quantity)}}</td>
</tr>
<tr>
<td>Maximum</td>
<td>Number</td>
<td>This function returns the highest value of the given column in number format.</td>
<td>Maximum value of Quantity: {{:max(Quantity)}}</td>
</tr>
<tr>
<td>Date</td>
<td>Date Time</td>
<td>This function returns the date value as string formatted based on the current system culture.</td>
<td>Sales done on {{:date(ShippedDate)}}</td>
</tr>
<tr>
<td>DayMonthYear</td>
<td>Date Time</td>
<td>This function returns the date value as string formatted in DD/MM/YYYY format.</td>
<td>Sales done on - {{:daymonthyear(ShippedDate)}}</td>
</tr>
<tr>
<td>MonthDayYear</td>
<td>Date Time</td>
<td>This function returns the date value as string formatted in MM/DD/YYYY format.</td>
<td>Sales done on - {{:monthdayyear(ShippedDate)}}</td>
</tr>
<tr>
<td>Year</td>
<td>Date Time</td>
<td>This function returns the year in number format.</td>
<td>Revenue for the Year - {{:year(ShippedDate)}}</td>
</tr>
<tr>
<td>Month</td>
<td>Date Time</td>
<td>This function returns the month name as MMM format on the selected row.</td>
<td>Weather in NYC - {{:monthname(ShippedDate)}}</td>
</tr>
<tr>
<td>Quarter</td>
<td>Date Time</td>
<td>This function returns the ‘Quarter 1/2/3/4’ based on calendar year on the selected row.</td>
<td>Total sales for the Quarter - {{:quarter(ShippedDate)}}</td>
</tr>
<tr>
<td>Day</td>
<td>Date Time</td>
<td>This function returns the day value (1-28/29/30/31) on the selected row.</td>
<td>Store rate for the day - {{:day(ShippedDate)}}</td>
</tr>

<tr>
<td>Minutes</td>
<td>Date Time</td>
<td>This function returns the minute value (00-59) on the selected row.</td>
<td>Stock rate in - {{:minutes(ShippedDate)}} minutes</td> 
</tr>
<tr>
<td>QuarterYear</td>
<td>Date Time</td>
<td>This function returns the ‘Quarter 1/2/3/4’ and the year based on calendar year on the selected row.</td>
<td>Total sales in - {{:quarteryear(ShippedDate)}}</td>
</tr>
<tr>
<td>MonthYear</td>
<td>Date Time</td>
<td>This function returns the month and year as MMM YYYY format for the selected record.</td>
<td>Weather in NYC on {{:monthyear(ShippedDate)}}</td>
</tr>
<tr>
<td>DateHour</td>
<td>Date Time</td>
<td>This function returns the date and hour values for the selected record.</td>
<td>Total sales in - {{:datehour(ShippedDate)}}</td>
</tr>
<tr>
<td>DayOfWeek</td>
<td>Date Time</td>
<td>This function returns the day value of the week (Sunday to Saturday) for the selected record.</td>
<td>Weather in NYC on {{:dayofweek(ShippedDate)}}</td>
</tr>
<tr>
<td>WeekOfYear</td>
<td>Date Time</td>
<td>This function returns the week value of respective year as number in the selected record.</td>
<td>Week of the year is, {{:weekofyear(ShippedDate)}}</td>
</tr>
</table>

> **NOTE:**  Function name of label parameters are `case insensitive`.
