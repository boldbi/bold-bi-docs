---
layout: post
title: Configuring Level of Detail Functions | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated Level of Detail(LOD) function expression using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Configure Level Of Detail Expressions in Bold BI

Level of Detail expressions (also known as LOD expressions) allow you to compute values at the data source level and the visualization level. However, LOD expressions let you control the granularity you want to compute. They can be performed at a more granular level (INCLUDE), a less granular level (EXCLUDE), or an entirely independent level (FIXED).

## LOD expression syntax

A level of detail expression has the following structure:

```format
FIXED | INCLUDE | EXCLUDE(AGG: <aggregate expression>, DIMENSIONS: <dimension declaration>)
```
### [FIXED | INCLUDE | EXCLUDE]

#### FIXED

FIXED LOD expressions compute an aggregation at the exact dimensional level specified in the expression, regardless of the dimensions present in the visualization. The calculation is grouped only by the dimensions listed, and the result remains consistent even when users add or remove other dimensions in the view.

```format
Example: FIXED(AGG: SUM([Sales]), DIMENSIONS: [Category], [Name])
```

For more information about FIXED level of detail expressions, and for some example FIXED level of detail scenarios, see the [FIXED](/working-with-data-sources/data-modeling/configuring-expression-columns/level-of-detail-expressions/###FIXED) section.

#### INCLUDE

INCLUDE level of detail expressions compute values using the specified dimensions in addition to whatever dimensions are in the view.
INCLUDE level of detail expressions are most useful when including a dimension that isn’t in the view.

```format
Example: INCLUDE(AGG: SUM(Sales), DIMENSIONS: [Category], [ProductName])
```

For more information about INCLUDE level of detail expressions, and for some example INCLUDE level of detail scenarios, see the [INCLUDE](/working-with-data-sources/data-modeling/configuring-expression-columns/level-of-detail-expressions/###INCLUDE) section.

#### EXCLUDE

EXCLUDE level of detail expressions explicitly remove dimensions from the expression—that is, they subtract dimensions from the view level of detail.
EXCLUDE level of detail expressions are most useful for eliminating a dimension in the view.

```format
Example: EXCLUDE(AGG: SUM(Sales), DIMENSIONS: [Category], [ProductName])
```

For more information about EXCLUDE level of detail expressions, and for some example EXCLUDE level of detail scenarios, see the [EXCLUDE](/working-with-data-sources/data-modeling/configuring-expression-columns/level-of-detail-expressions/###EXCLUDE) section.

### \<aggregate expression\>
The aggregate expression is the calculation that is performed. For example, SUM(Sales) or AVG(Discount). The results of the calculation in the aggregate expression depend on the dimension declaration and keyword.

- AGG: SUM(Sales)

### \<dimension declaration\>
Specifies one or more dimensions that set the scope of the aggregate expression, according to the keyword.

- DIMENSIONS: [Column]

Use commas to separate multiple dimensions.

- [Segment], [Category], [Region]

## Types of LOD expressions

- FIXED
- INCCLUDE
- EXCLUDE

### Sample Data

<table>
    <tr>
        <th>OrderID</th>
        <th>Region</th>
        <th>SalesRep</th>
        <th>OrderDate</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Amount</th>
    </tr>
    <tr>
        <td>101</td>
        <td>"East"</td>
        <td>"Alice"</td>
        <td>"2025-01-01"</td>
        <td>"Laptop"</td>
        <td>2</td>
        <td>2000.00</td>
    </tr>
    <tr>
        <td>102</td><td>"East"</td><td>"Bob"</td><td>"2025-01-03"</td><td>"Monitor"</td><td>1</td><td>250.00</td>
    </tr>
    <tr>
        <td>103</td><td>"East"</td><td>"Alice"</td><td>"2025-01-05"</td><td>"Mouse"</td><td>5</td><td>100.00</td>
    </tr>
    <tr>
        <td>104</td><td>"West"</td><td>"Charlie"</td><td>"2025-01-02"</td><td>"Laptop"</td><td>1</td><td>1000.00</td>
    </tr>
    <tr>
        <td>106</td><td>"East"</td><td>"Bob"</td><td>"2025-01-06"</td><td>"Laptop"</td><td>1</td><td>1000.00</td>
    </tr>
    <tr>
        <td>107</td><td>"West"</td><td>"Charlie"</td><td>"2025-01-07"</td><td>"Mouse"</td><td>10</td><td>200.00</td>
    </tr>
    <tr>
        <td>108</td><td>"East"</td><td>"Alice"</td><td>"2025-01-08"</td><td>"Monitor"</td><td>2</td><td>500.00</td>
    </tr>
    <tr>
        <td>109</td><td>"East"</td><td>"Alice"</td><td>"2025-01-09"</td><td>"Laptop"</td><td>3</td><td>3000.00</td>
    </tr>
    <tr>
        <td>110</td><td>"West"</td><td>"Bob"</td><td>"2025-01-10"</td><td>"Monitor"</td><td>2</td><td>500.00</td>
    </tr>
</table>

### FIXED

FIXED level of detail expressions compute a value using the specified dimensions, without reference to the dimensions in the view.

**Example**

The following FIXED level of detail expression computes the sum of amount per product:

```format
FIXED(AGG: SUM([Amount]), DIMENSIONS: [Product])
```
The view level of detail is [Product] and [SalesRep]. But FIXED level of detail expressions don't look at the dimensions in the view, only the dimensions specified in the calculation (here, Product). Therefore, the values for the individual SalesRep in each Product are identical.

 ![Fixed](/static/assets/data-modeling/configuring-expression-columns/Fixed.png)

### INCLIUDE

INCLUDE level of detail expressions compute values using the specified dimensions in addition to whatever dimensions are in the view.

INCLUDE can be useful when you want to calculate at a fine level of detail in the database, but re-aggregate at a coarser level of detail in your view. Fields based on INCLUDE level of detail expressions change as you add or remove dimensions from the view.

**Example**

This INCLUDE level of detail expression computes total amount per salesrep:

```format
INCLUDE(AGG: SUM([Amount]), DIMENSIONS: [SalesRep])
```

With Product in the view, the INCLUDE calculation is regrouped by Product. It still computes Amount at the SalesRep level internally, but the final result shows SUM(Amount) per Product.

![Include_Img1](/static/assets/data-modeling/configuring-expression-columns/Include_Example_1.png)

With the LOD placed on Rows and aggregated as SUM, and Product on Columns, the INCLUDE calculation is regrouped by Product. Even though it computes values at the SalesRep level internally, the final result displayed is the SUM of Amount per Product.

![Include_Img2](/static/assets/data-modeling/configuring-expression-columns/Include_Example_2.png)

### EXCLUDE

EXCLUDE level of detail expressions declare dimensions to omit from the view level of detail.

**Example**

The following EXCLUDE level of detail expression that excludes region from the sum of amount:

```format
EXCLUDE(AGG: SUM([Amount]), DIMENSIONS: [Region])
```

With Region in the view, the EXCLUDE calculation ignores Region during aggregation. It still computes Amount at a higher level (removing Region from the grouping), so the final result shows SUM(Amount) without Region, even though Region is displayed in the view.

![Exclude_Img1](/static/assets/data-modeling/configuring-expression-columns/Exclude_Example_1.png)

With the EXCLUDE LOD placed on Rows and aggregated as SUM, and Product on Columns, the calculation removes Region from the grouping. Even though Region appears in the view, the result is computed at a higher level, so the final output displayed is the SUM of Amount at the Product level, not per Region.

![Exclude_Img2](/static/assets/data-modeling/configuring-expression-columns/Exclude_Example_2.png)

## Limitations

- LOD expressions are not supported in raw data views such as Data Preview, View Underlying Data, or Grid Raw Data.  
- LOD expressions cannot be used within other expressions (for example, nested expressions). 
- EXCLUDE LOD expressions remove the specified dimension(s) from the calculation. For the result to render correctly in the widget, at least one additional dimension must be included in the view; otherwise, the widget will produce an error.
- When an INCLUDE expression specifies a dimension, that dimension must be present in the view. If you do not want it visible, it should be placed in the Hidden Columns section.
- In the syntax `FIXED | INCLUDE | EXCLUDE (AGG: <aggregate expression>, DIMENSIONS: <dimension declaration>)`, the DIMENSIONS section can contain only direct column names; expressions, formulas, calculated fields, or any non-column references are not supported and cannot be used within the dimension declaration