---
layout: post
title: Configuring Data Filters – Embedded BI | Bold BI Learning
description: Learn how to configure data filters to restrict user access to records at data source level in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Data filters 

## Configuring Data Filters

  Data Filters can be configured to restrict record visibility based on defined criteria. The configuration can be done by adding and deleting a filter condition.
  
### Adding a filter condition

   Click on the `Filters` option shown in the data design view window. The Data Filter window will open.

   ![Data filters](/static/assets/working-with-datasource/images/datafilters.png)

   Add a filter condition by clicking the `Add` button in the `Data Filters` window.

   ![Filters wizard](/static/assets/working-with-datasource/images/filterswizard.png)

   Now, a filter condition will be added by default as shown below:

   ![Filter condition](/static/assets/working-with-datasource/images/filtercondition.png)
   
   You can filter values with or without `Null` by checking or unchecking the `Include Null` option. If you check this option, only `Equals` and `Does Not Equal` conditions will be shown. Based on these conditions, you may filter values with or without `Null`.
   
   ![Null values condition](/static/assets/working-with-datasource/images/nullvaluescondition.PNG)
   
   Modify the condition as needed and define the criteria. The condition can be defined based on two options:
   1. Custom
   2. Parameters

### Custom
   In the custom option, filter the records based on the columns. The parameters to define will differ based on the data type.

   ![Condition based on column](/static/assets/working-with-datasource/images/conditionbasedoncolumn.png)

   For columns like date time or text type, you may see a toggle button for TOP `N` on the right to enable the Top `N`filter and configure the field and condition.

   ![Select type](/static/assets/working-with-datasource/images/selecttype.PNG)

   ![Select aggregation type](/static/assets/working-with-datasource/images/selectaggregationtype.PNG)
   
   ![Dimension with Top N](/static/assets/working-with-datasource/images/dimensionwithTopn.png)
   
   Below example shows top 5 freight data of a city.
   
   ![Example of Top N](/static/assets/working-with-datasource/images/exampledimensionwithtop.png)

   For numeric type columns, the parameters will be as shown below:

   ![Numeric type](/static/assets/working-with-datasource/images/numerictype.PNG)

   ![Select operators](/static/assets/working-with-datasource/images/selectoperators.PNG)
   
   The example below shows data of freight with values greater than 500. 
   
   ![Filter greater than](/static/assets/working-with-datasource/images/filtergreaterthan.png)

   Upon clicking `OK` in the dialog above, the Data Preview grid will appear as shown below.

   ![Column greater than 500](/static/assets/working-with-datasource/images/column-greater-than-500.png)

   For date and time columns, the parameters will be as follows:

   ![Date time](/static/assets/working-with-datasource/images/datetimetypefilter.png)

   ![Select date time type](/static/assets/working-with-datasource/images/selectdatetimetype.PNG)

   ![Check all](/static/assets/working-with-datasource/images/selectcheckall.PNG)

   ![Date time options](/static/assets/working-with-datasource/images/datetimeoptions.png)
   
   The example below shows data within the specified date range.
   
   ![Example date time column](/static/assets/working-with-datasource/images/examplefordatetimecolumn.png)

   To add more than one condition, click the `Add` button.

   ![Selected filters condition](/static/assets/working-with-datasource/images/selectedfilterscondition.PNG#max-width=100%)

   > **NOTE:**  By default, the AND operation will be used between two conditions. The operator can be changed to OR if necessary. 

   Click `OK` to save the defined data filter conditions.

   Click `Close` or the Close icon at the top right corner of the window to close the Filters window.

#### Parameters
Filter the records based on the dashboard parameter values. This allows for dynamically changing the parameter values in both view and preview modes.

   Click on the `Parameters` option as shown below.

   ![Parmeters Option](/static/assets/working-with-datasource/images/parameteroption.png)

   Select the desired parameter lists from the dropdown menu. The first parameter will be selected by default.

   ![Parmeters List](/static/assets/working-with-datasource/images/parameterlists.png)

   The following example displays data where the selected table column is equal to the chosen dashboard parameter. To create parameters, follow the instructions provided in [configuring dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/)

   ![Data Preview](/static/assets/working-with-datasource/images/datapreview.png)

   For a date column with a date range type, only date format parameters will be shown.

   ![Parameter Date filter](/static/assets/working-with-datasource/images/paramdatefilter.png)

   > **NOTE:**  Support is only provided for dimensions, measures, and date columns with date range types.

### Deleting a filter condition

   Remove a filter condition by clicking the highlighted icon on the right of the respective filter condition.

   ![Delete filter condition](/static/assets/working-with-datasource/images/deletefiltercondition.png)


 


