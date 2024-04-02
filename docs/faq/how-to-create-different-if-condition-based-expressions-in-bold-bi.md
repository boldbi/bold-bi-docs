---
layout: post
title: Create If condition-based expressions in Bold BI | Bold BI Docs 
description: This page summarizes about how to create different If condition-based expressions while creating a data source for a dashboard widget in Bold BI application.
canonical: "/faq/how-to-create-different-if-condition-based-expressions-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to create different If condition-based expressions in Bold BI

The IF function allows you to make logical comparisons between a value and what you expect. So, an IF statement can have two results. The first result is if your comparison is True, the second if your comparison is False. This document explains how to create conditional expressions based on your requirement in Bold BI using the expressions.

### Basic syntax
`IF and THEN` is syntax as follows:

**Syntax:** `if <condition> then <true action> else <false action>`

## Steps to create a simple expression and configure in widgets

Follow these steps to create IF and THEN expression column:

1.	Refer to this help document to successfully create a new [data source](/working-with-data-sources/creating-a-new-data-source/) by connecting to your database.

2.	Consider you have the following data from the sample table named `SalesOrderDetail` in the data source as shown in the following screenshot.

    ![SalesOrderDetail table](/static/assets/faq/images/SalesOrderDetail-table.PNG)

3.	For Example, consider above customer’s table that contains a field named `OrderQty`. In column, you want to denote whether the `OrderQty` is high when it is more than 15. Now, You need to create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) by using the IF and THEN syntax.               

    **Sample Expression:** `IF([OrderQty]>15, 'High', 'Low')`
    
    ![IF and THEN syntax](/static/assets/faq/images/IF-and-THEN-syntax.PNG)

4. Now configure the created expression in the widget. From the following screenshot you can see the resultant values for each row.
    
    ![Simple IF Expression](/static/assets/faq/images/Simple-IF-Expression.PNG)

## Using Nested IF and THEN conditions
   
You can use any expression as any part of an `IF and THEN` statement. You can also "nest" If and THEN expressions, allowing you to evaluate a series of dependent expressions.

To continue with the preceding example, you might want to test for several different values, and then display the appropriate Quantity depending on which value exists:

**Sample Expression:** `IF([OrderQty]>15, 'High', IF([OrderQty]<8,'Low','Medium'))`

The text Medium is the false part argument of the innermost If and THEN function. Since each nested IF and THEN function is the false part argument of the IF and THEN function that contains it, the text Medium is only returned if all the expression arguments of all the IF and THEN functions evaluate to False which means the `OrderQty` is between 8 to 15.
    
   ![Nested IF Expression](/static/assets/faq/images/Nested-IF-Expression.PNG)

## Calculating the sum in the if condition

For [SUMIF function](https://support.microsoft.com/en-us/office/sumif-function-169b8c99-c05c-4483-a712-1697a653039b) adds all numbers in a range of cells based on specific criteria. In Dashboard Designer, we are not supporting SUMIF( ) expression directly under aggregation function, since our engine supports table based calculation not cell based.  But however we can achieve the same SUMIF( ) formula in Dashboard Designer using column based calculations. For example, calculate sum of `HighOrderQty` like below. 

`HighOrderQty:  IF([Expression1]='High’, [OrderQty],0)`

After that using sum aggregation function in `HighOrderQty` in expression column we can achieve the Total `OrderQty` when `OrderQty` is High.
   
   ![SUMIF Expression](/static/assets/faq/images/SUMIF-Expression.PNG)

## Using the Equals operators with the If in the expression condition

Generally, equal operators compare their operands for equality or inequality values. The result type for these operators is boolean. The equal operator returns true value if both operands have the same value. otherwise, it returns false. The not equal operator returns true if the operands don't have the same value. otherwise, it returns false. You can be able to determine If expression condition using both Equal (=) and not equal operator (<>). 

To proceed with the example, refer the following expression with Not Equal operator and the resultant screenshot.
 
 **Sample Expression:** `IF([Expression1] <>'Low', [OrderQty], '0')`
 
   ![Not Equals Operator](/static/assets/faq/images/Not-Equal-Operator.PNG)

Refer the following sample expression to Equal operator function using IF condition:

 **Sample Expression:** `IF([Expression1] ='Low', [OrderQty], '0')`

## Using the logical functions with the If in the expression function

If you want to check multiple conditions, where let’ consider all conditions need to be True or False (AND), or only one condition needs to be True or False (OR), or if you want to check if a condition does NOT meet your criteria? These 3 functions can be used on their own, however generally these functions are used along with the IF expression function.

When using Logical operators such as `AND` or `OR` in the expression argument of the IF and THEN function, you must enclose the logical expression in the condition function. See the example that follows.

 **Sample Expression:** `IF(([OrderQty]<15 AND [OrderQty]>8), 'Medium', (IF([OrderQty]>15, 'High',' low')))`
    
   ![IF Expression Logical](/static/assets/faq/images/IF-Expression-Logical.PNG)

Refer the following syntax to create `OR` and `NOT` function using IF condition:

**OR Expression:** `IF((<Condition1> OR <Condition2>), <true action>, <false action>)`
 
**NOT Expression:** `IF(NOT(<Condition>), <true action>, <false action>)`

> **NOTE:** Please make sure to configure the string dimension field in the widget along with the created expression field to get the desired results.