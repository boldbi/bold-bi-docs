---
layout: post
title: Configuring Data Filters – Embedded BI | Bold BI Learning
description: Learn how to configure data filters to restrict user access to records at data source level in Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/configuring-data-filters/"
platform: bold-bi
documentation: ug
---

# Data filters 

## Configuring Data Filters

  Data Filters can be configured to restrict records visibility based on defined criteria. The configuration can be done by adding and deleting a filter condition.
  
### Adding a filter condition

   Click `Filters` option shown in the data design view window. Data filter window opens.

   ![Data filters](/static/assets/embedded/working-with-datasource/images/datafilters.png)

   Add a filter condition through clicking the `Add` button in the `Query Filters` window.

   ![Filters wizard](/static/assets/embedded/working-with-datasource/images/filterswizard.png)

   Now, a filter condition will get added by default like below:

   ![Filter condition](/static/assets/embedded/working-with-datasource/images/filtercondition.png)
   
   You can filter values with or without `Null` by checking or unchecking the `Include Null` option. If you check this option, only `Equals` and `Does Not Equal` condition will be shown like below. Based on these conditions, you may filter values with or without `Null`.
   
   ![Null values condition](/static/assets/embedded/working-with-datasource/images/nullvaluescondition.PNG)
   
   Modify the condition as you require and define criteria. The condition can be defined based on the column. Based on its data type, the parameters to define will differ.

   ![Condition based on column](/static/assets/embedded/working-with-datasource/images/conditionbasedoncolumn.png)

   With the date time type or text type column like above, you may get a toggle button TOP ‘N’ at right, to enable the Top `N` filter to configure the field and the condition by which it has to be applied.

   ![Select type](/static/assets/embedded/working-with-datasource/images/selecttype.PNG)

   ![Select aggregation type](/static/assets/embedded/working-with-datasource/images/selectaggregationtype.PNG)
   
   ![Dimension with Top N](/static/assets/embedded/working-with-datasource/images/dimensionwithTopn.png)
   
   Below example shows top 5 freight data of a city.
   
   ![Example of Top N](/static/assets/embedded/working-with-datasource/images/exampledimensionwithtop.png)

   For numeric type column, the parameters will be like below:

   ![Numeric type](/static/assets/embedded/working-with-datasource/images/numerictype.PNG)

   ![Select operators](/static/assets/embedded/working-with-datasource/images/selectoperators.PNG)
   
   Below example shows data of freight whose values are greater than 500. 
   
   ![Filter greater than](/static/assets/embedded/working-with-datasource/images/filtergreaterthan.png)

   On clicking `OK` in above dialog, Data Preview grid will be like below,

   ![Column greater than 500](/static/assets/embedded/working-with-datasource/images/column-greater-than-500.png)

   For date time type column, the parameters will be like below:

   ![Date time](/static/assets/embedded/working-with-datasource/images/datetimetypefilter.png)

   ![Select date time type](/static/assets/embedded/working-with-datasource/images/selectdatetimetype.PNG)

   ![Check all](/static/assets/embedded/working-with-datasource/images/selectcheckall.PNG)

   ![Date time options](/static/assets/embedded/working-with-datasource/images/datetimeoptions.png)
   
   Below example shows data within the applied date range.
   
   ![Example date time column](/static/assets/embedded/working-with-datasource/images/examplefordatetimecolumn.png)

   Add more than one condition if you prefer, through clicking the `Add` button.

   ![Selected filters condition](/static/assets/embedded/working-with-datasource/images/selectedfilterscondition.PNG)

   > **NOTE:**  By default, AND operation will be handled in between two conditions. You cannot change the operation between two conditions.

   Click `OK` to save the defined data filter conditions.

   Click `Close` button or the Close icon at top right corner of the window to close the Filters window.
   
### Deleting a filter condition

   You can remove a filter condition by clicking the highlighted icon at right of the respective filter condition.

   ![Delete filter condition](/static/assets/embedded/working-with-datasource/images/deletefiltercondition.png)


 


