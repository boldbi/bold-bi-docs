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

Additionally, you can also replace the value through the Settings icon, which will be displayed above, for all the measure and dimension columns.

![Null replace value in column](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-8.png)

Save the data source; the changes will be updated in the dashboard.

 ![Null replace value output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-19.png)

The column replace value takes precedence when we use both the data source level and the column level replace value. By using the same columns in the dashboard, you can see the replace value changes reflected in the dashboard as follows.

![Column level support output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-9.png)

## Configuring the Replace value in Column by Add rule option

The addition of the rule feature in the replace value support allows you to modify any values in any column from the datasource, as well as customize null and blank values. 

![Add rule](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-10.png)

The following steps explain how to replace values using the add rule option:

1.	Click on the Add Rule option. The edit dialog will open, as shown.

![Edit Rule](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-11.png)

2.	After customizing the value to find and the value to replace, click the Add Rule button.

![Custom Rule](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-12.png)

3.	After updating the rule, click the Apply button.

After applying changes, save the data source. The changes will be updated in the dashboard as follows.

![Save button](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-13.png)

### Replace the value based on matching case

The match case option will be case sensitive, allowing you to replace specific values in a column based on a matching condition.

![Match case](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-14.png)

To enable the match case option, update the add rule and click the Apply button. After saving the datasource, the changes will be updated in the dashboard.

![Match case value](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-13.png)

### Replace the value based on Match entire String

Enable the match entire string option. This means that the replacement will only occur if the entire string in the target column matches the specified value.

![Match entire string](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-17.png)

Enable the match entire string option.

![Match entire string value](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-15.png)

After updating the rule, click the Apply button.

![Match entire string output](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-16.png)

After saving the datasource, the changes will be reflected in the dashboard.

![Edit and Delete](/static/assets/working-with-datasource/configuring-replace-value/images/sshot-18.png)

The Edit and Delete options can also be used to update values in the rule.

**NOTE:** This feature is applicable to all measure and dimension columns in the datasource.