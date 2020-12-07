---
layout: post
title: Heatmap Visual – Cloud BI Widget | Bold BI Documentation
description: Learn how to create a Heatmap visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: HeatMap
documentation: ug
---

# Configuring and Formatting Heatmap

`Heatmap` allows you to visualize large amounts of data as clustered rectangles with a color scale.

*Figure: Default Heatmap visualization showing city wise stocks count for each ship city*

![Default Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/HeatMap.png)

*Figure: Heatmap visualization after various customizations*

![Customized Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Customized-Heatmap.png)

## How to configure the data table to Heatmap widget

> **NOTE:**  Before adding the Heatmap widget to the design layout, make sure to **create the data source**. You can refer to this [section](/cloud-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a Heatmap, a minimum requirement of `one value` and `two groups` by the field is needed.

The following steps explains about data configuration of the Heatmap.

### Step 1: Add a heatmap widget to the design canvas 

1.	Drag and drop the `Heatmap` control icon from the tool box into design panel. You can find control in tool box by search.
![Adding Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Adding-Heatmap.png)

2.	Resize the widget as required.
![Resizing Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Resizing-Heatmap.png)

### Step 2: Configuring data into the widget

1.	Click the `Properties` icon in the configuration panel.
![Properties click](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Properties-click.png)

2.	The properties panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.
![Properties pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Properties-pane.png)

3.	The data tab will be opened with available columns from the connected data source.
![Available fields list](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Available-fields-list.png)

#### Value section

Bind column by dragging and dropping the element from sections to `values`.

![Value fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Value-fields.png)

> **NOTE:**  
* The field added in this section will act as a measure value. 
* It is a mandatory section for widget visualization and only one value can be configured. 

#### X-Axis section

Drag and drop the elements from sections to `X-Axis` section.

![X Axis fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/X-Axis-fields.png)

> **NOTE:** 
* The field added in this section will act as a dimension value. 
* It is a mandatory section and only one value can be configured

#### Y-Axis section
Drag and drop the elements from sections to `Y-Axis` section.

![Y-Axis fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Y-Axis-fields.png)

> **NOTE:** 
* The field added in this section will act as a dimension value. 
* It is a mandatory section and only one value can be configured. 

*Image: Heatmap widget after configuring the mandatory fields.*

![Configured Heatmap view](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Configured-Heatmap.png)

#### Size section
Drag and drop the elements from sections to `size` section. It will define the size of the bubble in the heatmap. Also, it is an optional section. 

![Size fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Size-fields.png)

*Image: Heatmap widget after configuring the size field*

![Size customized Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Size-customized-Heatmap.png)

#### Tooltip section 

You can configure `tooltip` section to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to [this section](/cloud-bi/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields. 

### Step 4(Optional): Settings menu options

You can `filter`, `format`, and `sort` the data displayed in the widget from the settings menu options.  To open the settings menu, click the `settings` icon. 

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Settings Menu - Measure fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Measure-fields-Settings.png)

![Settings Menu - Dimensions](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Dimensions-Settings.png)

#### Changing the aggregation type

You can change the `aggregation type` of the `measure` section from the settings menu as shown in the following screenshot. Refer to [this section](/cloud-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.
![Changing the aggregation type](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/aggregation-type.png)

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filtering data](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Filtering-data.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).
![Measure formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Measure-formatting.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the `settings` menu. 

1. Click the Settings menu icon and select the `Rename` menu option.
![Click Rename](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Click-Rename.png)

2. The column name will become editable now. Enter the required text and press `enter` key.
![Modify field name](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Modify-field-name.png)

3. Now, the changes will be reflected in the Heatmap widget’s tooltip and in the axes titles.
![After rename](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/After-rename.png)

## How to format Heatmap widget

You can format the `Heatmap` for better illustration of the view that you require using the settings available in the `Properties` tab.

### General settings

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/General-settings.png)

#### Name
This allows you to set `title` for this Heatmap widget.

#### Subtitle
This allows you to set `subtitle` for this Heatmap widget. It is optional.

#### Description
This allows you to set brief explanation about this Heatmap widget. It is optional.

### Cell settings

![Cell settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Cell-settings.png)

#### Show label
This allows you to toggle the visibility of value labels.

![Label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Label.png)

#### Cell radius
This allows you to apply the specified radius to cell corners. Value ranges from 0 to 10. `The Default value is 3`. 

![Cell radius](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Cell-radius.png)

#### Cell border
This allows you to toggle the visibility of border surrounding the cell. Value ranges from 0 to 10. `Default value is 1`. 

![Cell border](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Cell-border.png)

### Formatting

#### Monochromatic
This allows you to configure a single-color palette whose saturation will be varied based on the value density.

![Formatting Monochromatic](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/heatmap_formatting_monochromatic.png)

#### Types
![Color Types](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/heatmap_color_types.png)

**Across Table**: Monochromatic color applied based on the whole table minimum and maximum data values.
![Across Table](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/heatmap_across_table.png)

**Column Wise**:Monochromatic color applied based on the individual column wise minimum and maximum data values.
![Column Wise](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/heatmap_column_wise.png)

**Row Wise**: Monochromatic color applied based on the individual row wise minimum and maximum data values.
![Row Wise](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/heatmap_row_wise.png)

#### Advanced setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/cloud-bi/visualizing-data/visualization-widgets/heat-map/#how-to-apply-conditional-formatting-in-heatmap)  for more details.

### Legend settings

![Legend settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Legend-settings.png)

#### Show legend
This allows you to toggle the visibility of legend in the heatmap. By default, it will be disabled. 

#### Legend position
This allows you to change the legend position (selecting through the combo box).

### X-axis settings

#### Show axis label
This allows you to enable the visibility of x-axis labels.

![Show axis label - Toggled off](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Show-axis-label.png)

#### Show axis title
This allows you to enable the visibility of x-axis title.

#### Axis title
This allows you to edit the x-axis title for the heatmap. It will reflect in the x-axis title of the heatmap.

![Axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Axis-title.png)

#### Label rotation
This allows you to define the rotation angle for x-axis labels to display.

![Label rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Label-rotation.png)

#### Label intersect action
This allows you to handle the display mode of overlapping labels in the x-axis.

![Label intersect action](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Label-intersect-action.png)

##### None
This option did not trim the end of overlapping label in the axis.

![None](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/None-option.png)

##### Trim
This option trims the end of overlapping label in the axis.

![Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Trim-option.png)

#### Inversed axis
This allows you to change the axis label’s placement order from left to right in the x-axis.

![Inversed axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Inversed-axis.png)

#### Opposed axis
This allows you to change the axis position from bottom to top in the x-axis.

![Opposed axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Opposed-axis.png)

### Y-axis settings

#### Show axis label
This allows you to enable the visibility of y-axis labels.

![axis label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/axis-label.png)

#### Show axis title
This allows you to enable the visibility of y-axis title.

![axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-axis-title.png)

#### Axis title
This allows you to edit the x-axis title for the Heatmap. It will reflect in the y-axis title of the Heatmap.

#### Inversed axis
This allows you to change the axis label’s placement order from bottom to top in the y-axis.

![Inversed y-axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Inversed-y-axis.png)

#### Opposed axis
This allows you to change the axis position from left to right in the y-axis.

![Opposed y-axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Size-customized-Heatmap.png)

### Link
To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Filter 

#### Act as master widget

This allows you to define the Heatmap widget as a master widget, such that its filter action can be listened by other widgets in the Dashboard.

#### Ignore filter actions

This allows you to define the Heatmap widget to ignore responding filter actions applied on other widgets in the Dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable the hierarchical Top N filtering. While applying Top N filter with multiple dimension columns, the returned data can be customized based on whether the filtering need to be done as flat or hierarchy of added dimension columns.

When the hierarchical filter option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container appearance

This section contain the property for pivot grid container's layout.

![Container appearance properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/ContainerAppearance.png)

This allows you to customize the widget container appearance, widget title’s properties and provides options to enable/ disable widget exporting options. For more detailed information, refer to [container appearance properties](/cloud-bi/visualizing-data/working-with-widgets/customizing-container-appearance/).

## How to apply conditional formatting in Heatmap

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1. In the properties pane, under the `Formatting` section, click the `Advanced Setting` radio button.
![Advanced setting enable](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Advanced-setting-enable.png)

2. This will open the `Conditional Formatting` dialog.
![Conditional formatting dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Conditional-formatting-dialog.png)

3. Select the `mode` and enter the conditions as required and click the `Save` button to apply.
![Apply conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Apply-conditions.png)

4. Now, the widget visualization will be updated based on the conditions.
![Heatmap with conditional formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Formatted-result.png)

Refer to the following sections for the detailed steps on using the [`Gradient`](/cloud-bi/visualizing-data/visualization-widgets/heat-map/#gradient) and [`Rule`](/cloud-bi/visualizing-data/visualization-widgets/heat-map/#rule-based-condition-mode) modes. 

### Gradient mode
You can customize the fill color of the heatmap using the gradient based conditional formatting. This is the default mode. 

#### Based on field
The configured value fields. Based on field cannot be changed in the conditional formatting dialog. 

#### Summary type
The summary type of the configured value field. 

#### Low, mid, and high values
You can define your range by entering the low, mid, and high values. 

> **NOTE:** It is optional, if no value is entered, then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

#### Default color
If the region of Heatmap value is out of the specified range, then the color specified in the default color will be applied.

### Rule based condition mode
This allows you to customize the fill color of the Heatmap based on one or more numerical / text conditions.

![Rule mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Rule-mode.png)

#### Condition name
You can give a meaningful name to the applied conditions.

#### Condition type
Choose the condition for measure field from the highlighted conditions.

![Condition type](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Condition-type.png)

#### Value
You can mention the condition value.

#### Fill color
Select the fill color for that condition using the color picker. 

#### Add condition
Click add condition to specify add new condition. 

![Add rules](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Add-rules.png)

#### Delete condition
Click the delete button to remove the existing condition. 

![Delete rules](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/Delete-rules.png)

## Cohort Visualization

Cohort visualization examines the outcomes of predetermined groups, called cohorts, as they progress through a set of stages. The signature characteristic of a cohort is its comparison of the change in a variable across two different time series. A cohort is a group of people sharing common characteristics over a specified period and it's helps for decision making purpose.

### How to do cohort visualization in HeatMap widget

1. Drag and Drop the heatmap widget and bind the measure values in it.

2. Go to `Formatting section` and change the drop down value to `Row Wise`.

![Formatting Section](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/formatting_section.png)
![Cohort Visualization](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cohorot_visulization.png)

Above screenshot shows cohort visualization in heatmap widget.
