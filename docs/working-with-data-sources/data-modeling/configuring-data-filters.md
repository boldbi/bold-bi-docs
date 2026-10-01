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

   Now, a filter condition will be added by default as shown below:

   ![Filter condition](/static/assets/working-with-datasource/images/filtercondition.png)

   You can add Add a filter condition by clicking the `Add Group` button in the `Data Filters` window.

   ![Filters wizard](/static/assets/working-with-datasource/images/filterswizard.png)

  
   
   You can filter values with or without `Null` by checking or unchecking the `Include Null` option. If you check this option, only `Equals` and `Does Not Equal` conditions will be shown. Based on these conditions, you may filter values with or without `Null`.
   
   ![Null values condition](/static/assets/working-with-datasource/images/nullvaluecondition.png)

### Nested Groups and Conditions

The Data Filters feature allows you to organize filter conditions into nested groups to configure complex filtering requirements. Each group can contain multiple conditions and additional nested groups.

You can combine conditions and groups using the AND/OR operators to define how the filter conditions are evaluated.

#### Adding Nested Groups and Conditions

Click the `+` icon within a group to display the available options.

- **Add Group:** Adds a nested group within the selected group.
- **Add Condition:** Adds another filter condition within the selected group.

![Null values condition](/static/assets/working-with-datasource/images/addgroup.png)

You can add multiple conditions within a group and combine them using the AND/OR operators.

#### Understanding Nested Groups

Nested groups allow you to organize related conditions and control how they are evaluated.

For example, to retrieve orders shipped to London or Berlin where the freight is greater than 500 or the shipping method is 2, configure the following conditions:

**Filter configuration:**
 ![Null values condition](/static/assets/working-with-datasource/images/nested2.png)


### Configuring Maximum Nested Group Depth

By default, Data Filters supports a  nested group depth of 3.

When the configured nesting depth is reached, the `Add Group` option will no longer be displayed. You can continue adding filter conditions within the existing group.

The default value of `DataFiltersMaxDepth` is **3**, and the maximum supported value is **8**.

#### Modifying the Maximum Nested Group Depth

To increase the maximum nesting depth, modify the `DataFiltersMaxDepth` property in the `config.json` file.

Follow these steps:

1. Navigate to the Bold BI administration page.
2. Open **Settings → Configuration**.
3. Select the `config.json` file.
4. Locate the `DataFiltersMaxDepth` property.
5. Update the value to the required maximum nesting depth.
6. Click **Save** to save the configuration.

For example, to increase the maximum nesting depth to 4, configure the following property:

```json
{
  "DataFiltersMaxDepth": "4"
}
```

In this example, users can configure nested groups up to the configured depth of 4.

**Note:** When the configured maximum nesting depth is reached, the `Add Group` option will be hidden, while the `Add Condition` option will remain available. The maximum supported nesting depth is 8.


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

   To add more than one condition, click the `Add Group` button.

   ![Selected filters condition](/static/assets/working-with-datasource/images/selectfilter.png)

   > **NOTE:**  By default, the AND operation will be used between two conditions. The operator can be changed to OR if necessary. 

   Click `OK` to save the defined data filter conditions.

   Click `Close` or the Close icon at the top right corner of the window to close the Filters window.

#### Parameters
Filter the records based on the dashboard parameter values. This allows for dynamically changing the parameter values in both view and preview modes.

   Click on the `Parameters` option as shown below.

   ![Parmeters Option](/static/assets/working-with-datasource/images/parameteroption.png)

   Select the desired parameter lists from the dropdown menu. The first parameter will be selected by default.

   ![Parmeters List](/static/assets/working-with-datasource/images/parameterlists.png)

   The following example displays data where the selected table column is equal to the chosen dashboard parameter. To create parameters, follow the instructions provided in [configuring dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/)

   ![Data Preview](/static/assets/working-with-datasource/images/datapreview.png)

   For a date column with a date range type, only date format parameters will be shown.

   ![Parameter Date filter](/static/assets/working-with-datasource/images/paramdatefilter.png)

   > **NOTE:**  Support is only provided for dimensions, measures, and date columns with date range types.

### Deleting a filter condition

   Remove a filter condition by clicking the highlighted icon to its right, and then click Apply Filter to apply the changes.

   ![Delete filter condition](/static/assets/working-with-datasource/images/deletefliter.png)

   ![Delete filter condition](/static/assets/working-with-datasource/images/deletefliter1.png)

   
   ![Delete filter condition](/static/assets/working-with-datasource/images/deletefliter2.png)


 


