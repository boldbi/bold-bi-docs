---
layout: post
title: Create If condition-based expressions in Bold BI | Bold BI Docs 
description: This page summarizes about how to create different If condition-based expressions while creating a data source for a dashboard widget in Bold BI application.
canonical: "/faq/how-to-create-different-if-condition-based-expressions-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to create different If condition-based expressions in Bold BI

The IF function allows you to make logical comparisons between a value and what you expect. Therefore, an IF statement can have two results: the first result is if your comparison is true, and the second is if your comparison is false. This document explains how to create conditional expressions based on your requirements in Bold BI using the expressions.

### Basic syntax
`IF and THEN` is syntax as follows:

**Syntax:** `if <condition> then <true action> else <false action>`

## Steps to create a simple expression and configure in widgets

Follow these steps to create an IF and THEN expression column:

1.	Refer to this help document to successfully create a new [data source](/working-with-data-sources/creating-a-new-data-source/) by connecting to your database.

2.	Consider that you have the following data from the sample table named `SalesOrderDetail` in the data source, as shown in the following screenshot.

    ![SalesOrderDetail table](/static/assets/faq/images/SalesOrderDetail-table.PNG)

3.	For example, consider the customer's table above that contains a field named `OrderQty`. In the column, you want to denote whether the `OrderQty` is high when it is more than 15. Now, you need to create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) using the IF and THEN syntax.              

    **Sample Expression:** `IF([OrderQty]>15, 'High', 'Low')`
    
    ![IF and THEN syntax](/static/assets/faq/images/IF-and-THEN-syntax.PNG)

4. Now configure the created expression in the widget. From the following screenshot you can see the resultant values for each row.
    
    ![Simple IF Expression](/static/assets/faq/images/Simple-IF-Expression.PNG)

## Using Nested IF and THEN conditions
   
You can use any expression in any part of an `IF and THEN` statement. You can also "nest" IF and THEN expressions, allowing you to evaluate a series of dependent expressions.

To continue with the previous example, you may want to test for several different values and then display the appropriate quantity depending on which value exists.

**Sample Expression:** `IF([OrderQty]>15, 'High', IF([OrderQty]<8,'Low','Medium'))`

The text Medium is the false part argument of the innermost IF and THEN function. Since each nested IF and THEN function is the false part argument of the IF and THEN function that contains it, the text Medium is only returned if all the expression arguments of all the IF and THEN functions evaluate to False, which means the `OrderQty` is between 8 and 15.
    
   ![Nested IF Expression](/static/assets/faq/images/Nested-IF-Expression.PNG)

## Calculating the sum in the if condition

The [SUMIF function](https://support.microsoft.com/en-us/office/sumif-function-169b8c99-c05c-4483-a712-1697a653039b) adds all numbers in a range of cells based on specific criteria. In Dashboard Designer, we do not support the SUMIF() expression directly under the aggregation function because our engine supports table-based calculations, not cell-based. However, we can achieve the same result as the SUMIF() formula in Dashboard Designer using column-based calculations. For example, you can calculate the sum of `HighOrderQty` as shown below.

`HighOrderQty:  IF([Expression1]='High’, [OrderQty],0)`

After that, by using the sum aggregation function in the `HighOrderQty` column expression, we can achieve the total `OrderQty` when the `OrderQty` is high.
   
   ![SUMIF Expression](/static/assets/faq/images/SUMIF-Expression.PNG)

## Using the Equals operators with the If in the expression condition

Generally, equal operators compare their operands for equality or inequality values. The result type for these operators is boolean. The equal operator returns a true value if both operands have the same value. otherwise, it returns false. The not equal operator returns true if the operands don’t have the same value. otherwise, it returns false. You can determine the expression condition using both the Equal (=) and not equal operator (<>).

To continue with the example, refer to the following expression using the Not Equal operator and the resulting screenshot.
 
 **Sample Expression:** `IF([Expression1] <>'Low', [OrderQty], '0')`
 
   ![Not Equals Operator](/static/assets/faq/images/Not-Equal-Operator.PNG)

Please refer to the following sample expression when using the Equal operator function with an IF condition:

 **Sample Expression:** `IF([Expression1] ='Low', [OrderQty], '0')`

## Using the logical functions with the If in the expression function

If you want to check multiple conditions, consider whether all conditions need to be True or False (AND), or if only one condition needs to be true or false (OR), or if you want to check if a condition does not meet your criteria. These three functions can be used on their own, however, they are generally used along with the IF expression function.

When using Logical operators such as `AND` or `OR` in the expression argument of the IF and THEN function, you must enclose the logical expression in the condition function. See the example that follows.

 **Sample Expression:** `IF(([OrderQty]<15 AND [OrderQty]>8), 'Medium', (IF([OrderQty]>15, 'High',' low')))`
    
   ![IF Expression Logical](/static/assets/faq/images/IF-Expression-Logical.PNG)

Please refer to the following syntax for creating `OR` and `NOT` functions using IF conditions.

**OR Expression:** `IF((<Condition1> OR <Condition2>), <true action>, <false action>)`
 
**NOT Expression:** `IF(NOT(<Condition>), <true action>, <false action>)`

> **NOTE:** Please ensure that you configure the string dimension field in the widget, along with the created expression field, to achieve the desired results.