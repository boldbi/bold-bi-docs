---
layout: post
title: Applying Custom List Based Filter in Grid | Bold BI Embedded
description: Learn how to apply filter in Grid visual in Bold BI Embedded based on a custom list added as table in SQL Server and custom function used in expression column.
canonical: "/faq/how-to-apply-the-filter-for-any-column-value-based-on-the-multiple-words/"
platform: bold-bi
documentation: ug
---

# How to apply filter in Grid widget based on your list of keywords?

Please follow the steps below to apply the filter for any column based on multiple keywords,

* Create the table in your **SQL** server to store the list of keywords to be filtered,

   ![Word Bank](/static/assets/faq/images/wordBank.png)

* Create a **custom function** in the SQL server to determine if the value of a column contains any of the words found in a table of keywords.

   ![Custom Function](/static/assets/faq/images/customFunction.png) 

If the `@searchWord` contains any of the words in the Keyword table, it will return as '1'; otherwise, it will return as '0'.

> **NOTE:**  You can customize this logic according to your specific requirements. 

* By using the **custom function** that has been created, you can create the expression shown below in our Dashboard Designer,

   ![Expression With Custom Fucntion](/static/assets/faq/images/expressionWithCustomFucntion.png) 

* Configure the created expression column in the widgets. The Expression column should be added to the Hidden Column section of the Grid widget.

   ![Grid with Expression](/static/assets/faq/images/gridwithExpression.png) 

* Apply the filter to the Expression column based on the values **0** and **1**.

   ![Filter Window](/static/assets/faq/images/filterWindow.png) 

Here, **1** represents the column value that contains the filter words, and **0** represents the column value that does not contain the filter words. 

Before applying a filter in the Grid widget,

![Before apply filter](/static/assets/faq/images/before-apply-filter.png)

After applying the filter in the Grid widget,

![Before apply filter](/static/assets/faq/images/after-apply-filter.png) 

> **NOTE:**   In this approach, you do not need to modify the expression. You simply add the new word to your Keyword table alone. 


