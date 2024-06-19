---
layout: post
title: Applying Custom List Based Filter in Grid | Bold BI Embedded
description: Learn how to apply filter in Grid visual in Bold BI Embedded based on a custom list added as table in SQL Server and custom function used in expression column.
canonical: "/cloud-bi/faq/how-to-apply-the-filter-for-any-column-value-based-on-the-multiple-words/"
platform: bold-bi
documentation: ug
---

# How to apply filter in Grid widget based on your list of keywords?

Please follow the below steps to apply the filter for the any column based on the multiple keywords,

* Create the table in your **SQL** server to store the list of keywords to be filtered,

   ![Word Bank](/bold-bi-docs/static/assets/embedded/faq/images/wordBank.png)

* Create the **Custom function** in the SQL server to find whether the column’s value contains any of the words present in the table which has keywords.

   ![Custom Function](/bold-bi-docs/static/assets/embedded/faq/images/customFunction.png) 

Here, If the `@searchWord` contains any one of the Keyword table words, it will
return as ‘1’  otherwise, it will return as ‘0’.

> **NOTE:**  You can customize this logic based on your requirements. 

* By using the created **Custom function**, you can create the expression like below in our Dashboard Designer,

   ![Expression With Custom Fucntion](/bold-bi-docs/static/assets/embedded/faq/images/expressionWithCustomFucntion.png) 

* Configure the created expression column into the widgets. Here, the Expression column added into the Grid widget’s Hidden Column section.

   ![Grid with Expression](/bold-bi-docs/static/assets/embedded/faq/images/gridwithExpression.png) 

* Apply the filter for that Expression column based on the **0** and **1** value. 

   ![Filter Window](/bold-bi-docs/static/assets/embedded/faq/images/filterWindow.png) 

Here, **1** represents the Column value contains the filter words. **0** represents the Column value not contain the filter words. 

Before applying filter in Grid widget,

![Before apply filter](/bold-bi-docs/static/assets/embedded/faq/images/before-apply-filter.png)

After applying the filter in Grid widget,

![Before apply filter](/bold-bi-docs/static/assets/embedded/faq/images/after-apply-filter.png) 

> **NOTE:**   In this approach, you don’t need to modify the expression. You just add the new word in your Keyword table alone. 


