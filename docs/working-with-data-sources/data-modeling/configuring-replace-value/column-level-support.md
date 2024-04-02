---
layout: Post
title: Configuring the Replace Value Support in Column Level
description: This page demonstrates how to configure the replace value support in the column level in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Replace value support in column level

You can modify the specific column values in the datasource that contain null and blank by using the replace value support at the column level.

![Settings icon](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-7.png)

So, you can also replace the value through the Settings icon which will be displayed like above for all the measure and dimension columns.

![Null replace value in column](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-8.png)

Save the datasource, the changes will be updated in the dashboard.

 ![Null replace value output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-19.png)

This column replace value takes precedence when we use both the datasource level and the column level replace value. By using the same columns in the dashboard, you can see the replace value changes reflected in the dashboard as follows.

![Column level support output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-9.png)

## Configuring the Replace value in Column by Add rule option

Add rule feature in the replace value support allows you to modify any values in any column from the datasource along with the null and blank customization.  

![Add rule](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-10.png)

The following steps explain how to replace the values through the add rule option.

1.	Click the Add Rule option. The edit dialog will open, as shown.

![Edit Rule](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-11.png)

2.	After customizing the value to find and the value to replace, click the add rule button.

![Custom Rule](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-12.png)

3.	After updating the add rule, click the Apply button.

After applying changes, save the datasource. The changes will be updated in the dashboard as follows.

![Save button](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-13.png)

### Replace the value based on matching case

The match case option will be the case sensitive. So, it allows you to replace the specific values in a column based on a matching condition.

![Match case](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-14.png)

Enable the match case option and after updating the add rule, click the Apply button. After saving the datasource, the changes will be updated in the dashboard as follows.

![Match case value](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-13.png)

### Replace the value based on Match entire String

Match Entire String option in the replace value functionality means that the replacement will occur only if the entire string in the target column matches the specified value.

![Match entire string](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-17.png)

Enable the match entire string option.

![Match entire string value](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-15.png)

After updating the add rule, click the Apply button. 

![Match entire string output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-16.png)

After saving the datasource, the changes will be updated in the dashboard as follows.

![Edit and Delete](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-18.png)

The Edit and Delete options are also available to update the value in the add rule option.

**NOTE:** This feature is common for all the measure as well as dimension columns in the datasource.