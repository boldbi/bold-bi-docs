---
layout: post
title: Configuring Aggregate Expression Fields | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated aggregation expressions using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configure Aggregation expressions

## Functions

### AVG

<table>
    <tr>
    <td><b>Syntax</b></td>
    <td>AVG(numeric_expression)</td>
    </tr>
    <tr>
    <td><b>Description</b></td>
    <td>Returns the average of the values in the given expression.</td>
    </tr>
    <tr>
    <td><b>Example</b></td>
    <td>AVG([UnitPrice])</td>
    </tr>
</table>

### AVGD

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>AVGD(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the average of the distinct values in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>AVGD([UnitPrice])</td>
    </tr>
</table>

### COUNT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>COUNT(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the number of items in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>COUNT([OrderID])</td>
    </tr>
</table>

### COUNTD

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>COUNTD(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the distinct number of items in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>COUNTD([OrderID])</td>
    </tr>
</table>

### MAX

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MAX(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the maximum value in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MAX([UnitPrice])</td>
    </tr>
</table>

### MIN

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>MIN(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the minimum value in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>MIN([UnitPrice])</td>
    </tr>
</table>

### STDEV

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>STDEV(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the standard deviation of values in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>STDEV([OrderID])</td>
    </tr>
</table>

### SUM

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>SUM(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the sum of values in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>SUM([UnitPrice])</td>
    </tr>
</table>

### SUMD

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>SUMD(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the sum of the distinct values in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>SUMD([UnitPrice])</td>
    </tr>
</table>

### VAR

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>VAR(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the variance of values in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>VAR([OrderID])</td>
    </tr>
</table>

### TOTAL

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>TOTAL(numeric_expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Returns the total values in the given expression.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>TOTAL(SUM([UnitPrice]))</td>
    </tr>
</table>

### QUANTILEEXACT

<table>
    <tr>
        <td><b>Syntax</b></td>
        <td>QUANTILEEXACT(level, expression)</td>
    </tr>
    <tr>
        <td><b>Description</b></td>
        <td>Exactly computes the quantile of a numeric data sequence. Support is only provided for the ClickHouse Connector.</td>
    </tr>
    <tr>
        <td><b>Example</b></td>
        <td>QUANTILEEXACT(0.8, [UnitPrice])
        </td>
    </tr>
</table>
