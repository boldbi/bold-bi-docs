---
layout: post
title: Configuring Date Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated date expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure Date expression

## Functions

### CURRENTMONTH

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>CURRENTMONTH()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the current month.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CURRENTMONTH()</td>
    </tr>
</table>

### CURRENTYEAR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>CURRENTYEAR()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the current year.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CURRENTYEAR()</td>
    </tr>
</table>

### DATEADD

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DATEADD(datepart,numeric_expression, date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Adds a time/date interval to the specified date.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>Refer to this <a href="/working-with-data-sources/data-modeling/configuring-expression-columns/#examples-of-different-data-source-connection-for-dateadd-function">section</a> for examples</td>
    </tr>
</table>

### DATESUB

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DATESUB(numeric_expression, date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the date subtracted from the specified date.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>DATESUB(7, [OrderDate])</td>
    </tr>
</table>

### DAY

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DAY(date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a numeric value representing the day part of the specified date.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>DAY([OrderDate])</td>
    </tr>
</table>

### DAYDIFF

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DAYDIFF(start_date_expression, end_date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a numeric value representing the difference between two specified dates.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>DAYDIFF(MAX([OrderDate]), ‘1988-08-08’)</td>
    </tr>
</table>

### HOUR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>HOUR(date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the hour of the given date as an integer.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>HOUR([OrderDate])</td>
    </tr>
</table>

### MINUTE

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MINUTE(date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a numeric value representing the minute part of the date resulted from the specified date expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MINUTE([OrderDate])</td>
    </tr>
</table>

### MONTH

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MONTH(date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a numeric value representing the month part of the date resulted from specified date expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MONTH([OrderDate])</td>
    </tr>
</table>

### NOW

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>NOW()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the current date and time.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>NOW()</td>
    </tr>
</table>

### PREVIOUSDATE

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>PREVIOUSDATE()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the previous date.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>PREVIOUSDATE()</td>
    </tr>
</table>

### PREVIOUSMONTH

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>PREVIOUSMONTH()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the previous month.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>PREVIOUSMONTH()</td>
    </tr>
</table>

### PREVIOUSYEAR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>PREVIOUSYEAR()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the previous year.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>PREVIOUSYEAR()</td>
    </tr>
</table>

### TODAY

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>TODAY()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the current date.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>TODAY()</td>
    </tr>
</table>

### YESTERDAY

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>YESTERDAY()</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the yesterday date.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>YESTERDAY()</td>
    </tr>
</table>

### YEAR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>YEAR(date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a numeric value representing the year part of the date resulting from the specified date expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>YEAR([OrderDate])</td>
    </tr>
</table>

### DATENAME

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DATENAME(date_part, date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a string representing the specified date part of the given date expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>DATENAME(“day”, [OrderDate])</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a string represents using CONCAT and DATENAME functions for the specified date expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CONCAT(DATEPART("day",[Date]),'-',DATENAME("month",[Date]),'-',DATENAME("year",[Date]))</td>
    </tr>
</table>

### DATEPART

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>DATEPART(date_part, date_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns an integer value representing the specified date part of the given date expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>DATEPART(“year”, MAX([OrderDate]))</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns a string represents using CONCAT and DATEPART functions for the specified time expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>CONCAT(DATEPART("hour",[Date]),'.',DATEPART("minute",[Date]),'.',DATEPART("second",[Date]))</td>
    </tr>
</table>

### MAX

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MAX(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the maximum value in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MAX([OrderDate])</td>
    </tr>
</table>

### MIN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MIN(expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the minimum value in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MIN([OrderDate])</td>
    </tr>
</table>


