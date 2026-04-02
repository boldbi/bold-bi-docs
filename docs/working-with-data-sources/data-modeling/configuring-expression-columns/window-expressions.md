---
layout: post
title: Configuring Window Functions | Bold BI Embedded Docs
description: Learn how to configure expression fields comprising calculated window function expression using built-in functions in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Configure Window Expressions in Bold BI



A **window expression** (or **window function**) is a special type of SQL (or BI tool) expression that performs calculations across a set of rows related to the current row, without collapsing them into a single output row.

 Unlike aggregate functions, which return a single value for a group of rows, window functions return a value for each row within the defined window or partition.



## Types of Window Expressions

* SUM()
* AVG() 
* MIN() 
* MAX()
* COUNT() 
* ROW_NUMBER()
* RANK()
* DENSE_RANK()
* NTILE(n) 
* FIRST_VALUE() 
* LAST_VALUE()


## Syntax of a Window Function

WindowExpression([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn], Frame := FrameType)


##  Explanation of Parameters
<table>
    <tr>
    <th>Parameter</th>
    <th>Description</td>
    </tr>
    <tr>
    <td>Column</td>
    <td>The column on which the calculation is performed. This parameter is required only when the window function operates on a column (for example, SUM, AVG, MAX, etc.). It is optional for functions that do not require a specific column, such as RANK(), DENSE_RANK(), or ROW_NUMBER().</td>
    </tr>
    <tr>
    <td>PartitionBy</td>
    <td>Defines how the data is divided into groups or partitions. Calculations are performed separately within each partition. Multiple dimension columns can be passed by separating them with commas.<br>Example: PartitionBy := [Dimension1], [Dimension2]</td>
    </tr>
    <tr>
    <td>OrderBy</td>
    <td>Determines the order of rows within each partition. This parameter is required for functions such as ROW_NUMBER(), RANK(), DENSE_RANK(), FIRST_VALUE(), and LAST_VALUE(). Multiple dimension columns can also be specified using commas. <br>Example: OrderBy := [Dimension1], [Dimension2]</td>
    </tr>
    <tr>
    <td>Frame</td>
    <td>
Supported frame types include:<br><br>
1. Running – Includes all rows from the start of the group up to the current row.<br><br>
2. RowsTrailing(n) – Includes the current row and the previous n rows.<br><br>
3. DaysTrailing(n) - Includes the current row and rows from the past n days.<br><br>
4. EntirePartition  - Includes all rows in the group (partition).<br><br>

Example:<br><br>
Frame := Running<br><br>
Frame := RowsTrailing(3)<br><br>
Frame := DaysTrailing(7)<br><br>
Frame := EntirePartition<br><br>

Notes: It's only suitable for aggregation-related window expressions such as SUM, COUNT, AVG, MIN, MAX, FIRST_VALUE, and LAST_VALUE.
Specifies the subset of rows used for the calculation. <br><br>


</td>
    </tr>
</table>

## Sample Data

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

## Window Functions

## COUNTPARTITON

The COUNTPARTITION() window expression calculates a running count of a specified column across rows within a defined partition, while maintaining each row in the output.

### Syntax

COUNTPARTITION([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn], Frame := FrameType)

### Example

Displays the count of OrderID values, partitioned by SalesRep and ordered by OrderDate, with a running frame applied.

COUNTPARTITION([OrderID], PartitionBy := [SalesRep], OrderBy := [OrderDate], Frame := Running)

 ![CountPartition](/static/assets/data-modeling/configuring-expression-columns/countpartition.png)


## SUMPARTITON

The SUMPARTITION() window expression calculates a **running total** of a specified column across rows within a defined partition, while maintaining each row in the output.

### Syntax

SUMPARTITION([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn], Frame := FrameType)

### Example

Displays the sum of Amount partitioned by SalesRep, ordered by OrderDate, with a running frame.

SUMPARTITION([amount], PartitionBy := [salesrep], OrderBy := [orderdate], Frame := Running)

 ![SumPartition](/static/assets/data-modeling/configuring-expression-columns/sumpartition.png)

## AVGPARTITON

The AVGPARTITION() window expression calculates a **running average** of a specified column across rows within a defined partition.

### Syntax

AVGPARTITION([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn], Frame := FrameType)

### Example

Displays the average of Amount for each SalesRep, ordered by OrderDate, with a frame that includes the current row and the previous row (ROWS Trailing 1).

AVGPARTITION([amount], PartitionBy := [salesrep], OrderBy := [orderdate], Frame := RowsTrailing(1))

 ![AvgPartition](/static/assets/data-modeling/configuring-expression-columns/avgpartition.png)

 ## MINPARTITON

The MINPARTITION() window expression returns the **minimum value** of a column within the current frame of a partition.

### Syntax

MINPARTITION([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn], Frame := FrameType)

### Example

Displays the Min of Amount for each SalesRep, ordered by OrderDate, with a running frame

MINPARTITION([amount], PartitionBy := [salesrep], OrderBy := [orderdate], Frame := Running)

 ![MinPartition](/static/assets/data-modeling/configuring-expression-columns/minpartition.png)

 
 ## MAXPARTITON

The MAXPARTITION() window expression returns the **maximum value** of a column within the current frame of a partition.

### Syntax

MAXPARTITION([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn], Frame := FrameType)

### Example

Displays the Max of Amount for each SalesRep, ordered by OrderDate, with a running frame

MAXPARTITION([amount], PartitionBy := [salesrep], OrderBy := [orderdate], Frame := Running)

 ![MaxPartition](/static/assets/data-modeling/configuring-expression-columns/maxpartition.png)

## ROW_NUMBER

The ROWNUMBER() window expression assigns a **unique sequential number** to each row within a partition based on the order specified.

### Syntax

ROWNUMBER(PartitionBy := [GroupColumn], OrderBy := [SortColumn])

### Example

 Assigns a row number to each order within its region, sorted by OrderDate.

ROW_NUMBER(PartitionBy := [region], OrderBy := [orderdate])

 ![RowNumberPartition](/static/assets/data-modeling/configuring-expression-columns/rownumberpartition.png)

 ## RANK

The RANK() window expression assigns a rank to each row within a partition based on the order specified.

### Syntax

RANK(PartitionBy := [GroupColumn], OrderBy := [SortColumn])

### Example

Displays the rank for each SalesRep, ordered by OrderDate.

RANK(PartitionBy := [salesrep], OrderBy := [orderdate])

 ![RankPartition](/static/assets/data-modeling/configuring-expression-columns/rankpartition.png)

## DENSE_RANK

The DENSE_RANK() window expression is similar to RANK but does not leave gaps for ties.

### Syntax

DENSERANK(PartitionBy := [GroupColumn], OrderBy := [SortColumn])

### Example

Displays the Orders are ranked by **amount** within each region. If two orders tie, they share the same rank, but the next rank is consecutive (e.g., 1, 2, 2, 3).

RANK(PartitionBy := [region], OrderBy := [amount])

 ![DenseRankPartition](/static/assets/data-modeling/configuring-expression-columns/denserankpartition.png)

## NTILE(n)

The NTILE(n) window expression is divides rows into n buckets within a partition.

### Syntax

NTILE(n, PartitionBy := [GroupColumn], OrderBy := [SortColumn])

### Example

Displays the Orders within each region are divided into 4 groups based on **amount**. Each row is assigned a bucket number from 1 to 4.

NTILE(4, PartitionBy := [region], OrderBy := [amount])

 ![NTILEPartition](/static/assets/data-modeling/configuring-expression-columns/ntilepartition.png)

## FIRST_VALUE

The FIRST_VALUE() window expression returns the first value in an ordered partition.

### Syntax

FIRSTVALUE([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn])

### Example

For each salesrep, this returns the earliest OrderDate in the partition.

FIRSTVALUE([orderdate], PartitionBy := [salesrep], OrderBy := [orderdate])

 ![FirstValuePartition](/static/assets/data-modeling/configuring-expression-columns/firstvaluepartition.png)

 
## LAST_VALUE

The LAST_VALUE() window expression returns the last value in an ordered partition.

### Syntax

LASTVALUE([Column], PartitionBy := [GroupColumn], OrderBy := [SortColumn])

### Example

For each salesrep, this returns the latest OrderDate in the partition.

LASTVALUE([orderdate], PartitionBy := [salesrep], OrderBy := [orderdate])

 ![LastValuePartition](/static/assets/data-modeling/configuring-expression-columns/lastvaluepartition.png)



## Limitations

* **Window expressions are not supported** in raw data views, such as **Data Preview, View Underlying Data,** or **Grid Raw Data.**  
* Aggregations such as **COUNT or AVG** cannot be used directly inside a window expression.

    **Example:**

    COUNT([Ordered]) 
    COUNTPARTITION([Expression1], PartitionBy := [SalesRep], OrderBy := [OrderDate], Frame := Running)

* **Window expressions can return multiple values** based on partition columns.  
* **Window expressions cannot be used within other expressions,** such as nested expressions.  
* **Window expressions do not work with aggregation fields** (such as COUNT, SUM, etc.) alone; at least **one dimension must be included** along with the aggregation expression.  
* **Window expressions are not supported in widgets with Row or Column category types,** because they return multiple values that cannot fit into a single row, column, or certain widget value types.  
* **Window functions can be used in the aggregation category,** but they are **not supported in the Value field together with aggregation,** and **window expressions in columns are not supported** in Bar or Column charts. 
* For **complex query scenarios,** Bold BI recommends using **aggregation tables, view tables, or Code View instead of window expressions.**
* **Window expression could not use** in Filter due to windows expression only used in **SELECT and Order BY** only.

* Do not use the **DaysTrailing()** frame type in **SQL Intermediate or SQL Live Connector,** as it is not natively supported in SQL Server.

> NOTE: For **complex query scenarios,** Bold BI recommends using **aggregation tables, view tables, or Code View instead of window expressions.**