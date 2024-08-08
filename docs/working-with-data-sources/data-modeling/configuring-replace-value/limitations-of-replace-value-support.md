---
layout: Post
title: Limitations of Replace Value Support in Bold BI application
description: This page demonstrates the aspects that will not be affected by the Replace Value support in the Bold BI
platform: bold-bi
documentation: ug
---

# Limitation of Replace Value Support

The Replace Value feature is primarily used to change null or blank values in columns of a data source to enhance the appearance of widgets and dashboards. However, this replacement will not affect the following aspects of Bold BI applications:

1. The **Custom Rule** option for column-level Replace Value support is only applicable for Date and String data type columns.
2. **Data Preview:** The replaced values will not be reflected in the Data Preview grid of the data design view page of a data source, as it will show the original database value only.
3. **Code View Mode:** It is not possible to use the replaced value in the code view mode of a data source, as the code view mode will execute the query and fetch the data from the original database.
4. **Expression Columns:** If you replaced the Null or Blank value or the value of a column using the Custom Rule option, the expression column will work based on the original value rather than the replaced value. For example, if you create an expression column using a replaced value, it will not change the way the column is displayed in visualizations.

In the following example, the country name "Australia" is replaced with "AUS" and an expression column is created based on the replaced value's Custom Rule option. 
 
  ![Add Rule for Country](/static/assets/working-with-datasource/configuring-replace-value/images/add-rule-country.png)

  ![Country Name Expression](/static/assets/working-with-datasource/configuring-replace-value/images/country-name-exp.png)  
 
When utilizing this expression column in a widget, it will show the value according to the original value rather than the replaced value.

  ![Country Name Expression](/static/assets/working-with-datasource/configuring-replace-value/images/bind-exp-in-grid.png)