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

*Figure: Heatmap visualization after various customizations*

![Customized Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/formattedresult.png)

## How to configure the data table to Heatmap widget

> **NOTE:**  Before adding the Heatmap widget to the design layout, make sure to **create the data source**. You can refer to this [section](/cloud-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a Heatmap, a minimum requirement of `one value` and `two groups` by the field is needed.

The following steps explains about data configuration of the Heatmap.

### Step 1: Add a heatmap widget to the design canvas 

1.   Drag and drop the `Heatmap` control icon from the toolbox into the design panel. You can find control in a toolbox by search.

![Adding Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/drop-widget.png)

2.	Resize the widget as required.

![Resizing Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/resizing.png)

3.	Click the `Properties` icon in the configuration panel.

![Properties click](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

4.	The properties panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.

![Properties pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/propertypanel.png)

5.	The data tab will be opened with available columns from the connected data source.

![Available fields list](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/assign-data.png)

### Step 2: Add a measures and dimensions in assign data. 

#### Value section

Bind column by dragging and dropping the element from sections to `values.`

![Value fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/field-value.png)

> **NOTE:**  
* The field added in this section will act as a measure value. 
* It is a mandatory section for widget visualization and only one value can be configured. 

#### X-Axis section

Drag and drop the elements from sections to `X-Axis` section.

![X Axis fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/x-field.png)

> **NOTE:** 
* The field added in this section will act as a dimension value. 
* It is a mandatory section and only one value can be configured

#### Y-Axis section

Drag and drop the elements from sections to `Y-Axis` section.

![Y-Axis fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-field.png)

> **NOTE:** 
* The field added in this section will act as a dimension value. 
* It is a mandatory section and only one value can be configured. 

*Image: Heatmap widget after configuring the mandatory fields.*

![Configured Heatmap view](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/configure-heatmap.png)

#### Size section

Drag and drop the elements from sections to `size` section. It will define the size of the bubble in the heatmap. Also, it is an optional section. 

![Size fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/field-size.png)

*Image: Heatmap widget after configuring the size field*

![Size customized Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/heatmap-size.png)

#### Tooltip section 

You can configure the `tooltip` section to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to [this section](/cloud-bi/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields.

### Step 3: Settings menu options

You can `filter,` `format,` and `Rename` the data displayed in the widget from the settings menu options.  To open the settings menu, click the `settings` icon.

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

**Measure field in values**

![Settings Menu - Measure fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/measure-field.png)

**Dimension field in value** 

![Settings Menu - Dimensions](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/dimension-field.png)


#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename ](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/rename.png)


#### Changing the aggregation type

You can change the `aggregation type` of the `measure` section from the settings menu as shown in the following screenshot. Refer to [this section](/cloud-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Changing the aggregation type](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/aggregation-type.png)

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to the [Measure filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filtering data](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/data-filter.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to the [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/data-format.png)

#### Drill Down

When the second value is added to the x-axis or y-axis section, the alert message will be shown.

![Drill confirmation alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

Click `Yes` to enable the option. If you click `No,` then a single value will be added to the respected section( x-axis or y-axis).

*Figure: Heat Map with a drilled view of the selected region.*

![Drilled view](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/drilled-view.png)

## How to format Heatmap widget

You can format the `Heatmap` for better illustration of the view that you require using the settings available in the `Properties` tab.

### General settings

#### Name

This allows you to set `title` for this Heatmap widget.

#### Subtitle

This allows you to set `subtitle` for this Heatmap widget. 

#### Description

This allows you to set brief explanation about this Heatmap widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/general-settings.png)

### Cell settings

![Cell settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cellsettings.png)

#### Show label

This allows you to toggle the visibility of value labels.

![Label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/show-label.png)

#### Label Color

This allows you to change the color of the label.

![Label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/show-label-color.png)

![Label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/show-label-color-change.png)

#### Cell radius

This allows you to apply the specified radius to cell corners. The value ranges from 0 to 10. `The Default value is 3.`

![Cell radius](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cell-radius-settings.png)

![Cell radius](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cellradius.png)

#### Cell border

This allows you to toggle the visibility of border surrounding the cell. Value ranges from 0 to 10. `Default value is 1`.

![Cell border](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cellborder-settings.png)

![Cell border](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cellborder.png)

### Formatting

You can change the color of the widget.

![Formatting Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/formatting-color-settings.png)

#### Monochromatic

This allows you to configure a single-color palette whose saturation will be varied based on the value density.

#### Types

![Color Types](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/monochromatic-types.png)

**Across Table**: Monochromatic color applied based on the whole table minimum and maximum data values.

![Across Table](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/across-table.png)

**Column Wise**:Monochromatic color applied based on the individual column wise minimum and maximum data values.

![Column Wise](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/column-wise.png)

**Row Wise**: Monochromatic color applied based on the individual row wise minimum and maximum data values.

![Row Wise](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/row-wise.png)

#### Advanced setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/cloud-bi/visualizing-data/visualization-widgets/heat-map/#how-to-apply-conditional-formatting-in-heatmap)  for more details.

### Legend settings

![Legend settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/legendsettings.png)

#### Show legend

This allows you to toggle the visibility of legend in the heatmap. By default, it will be disabled. 

![Legend settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/legendsettings-show.png)

#### Legend Position

This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

### X-axis settings

![X- axis label - Toggled off](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/x-axis-settings.png)

#### Show axis label

This allows you to enable the visibility of x-axis labels.

![Show axis label - Toggled off](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/showaxis-label.png)

#### Label Color

This allows you to change the x-axis label color.

![Axis Label color](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/x-axis-label-color.png)

![Axis Label color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/x-label-color-option.png)


#### Show axis title

This allows you to enable the visibility of x-axis title.

![Axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/axistitle.png)

#### Axis title

This allows you to edit the x-axis title for the heatmap. It will reflect in the x-axis title of the heatmap.

![Axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/edit-axis-title.png)

#### Label rotation

This allows you to define the rotation angle for x-axis labels to display.

![Label rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/label-rotate.png)

#### Label intersect action

**None**

This option did not trim the end of overlapping label in the axis.

![None](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/none.png)

**Trim**

This option trims the end of overlapping label in the axis.

![Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/trim.png)

#### Enable Trim

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/trimming-label.png)

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `Enable Trim` option is enabled.

![Label maximum width](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/maximum-label-width.png)

#### Inversed axis

This allows you to change the axis label’s placement order from left to right in the x-axis.

![Inversed axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/inversedaxis.png)

#### Opposed axis

This allows you to change the axis position from bottom to top in the x-axis.

![Opposed axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/opposedaxis.png)

### Y-axis settings

![axis label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-settings.png)

#### Show axis label

This allows you to enable the visibility of y-axis labels.

![axis label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-axis-settings.png)

#### Label Color

This allows you to change the y-axis label color.

![Axis Label color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-label-color-option.png)

![Axis Label color](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-axis-label-color.png)

#### Show axis title

This allows you to enable the visibility of y-axis title.

![axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-axis-title.png)

#### Axis title

This allows you to edit the x-axis title for the Heatmap. It will reflect in the y-axis title of the Heatmap.

![axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/y-axis-title-edit.png)

#### Enable Trim

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/trimming-label-y.png)

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `Enable Trim` option is enabled.

![Label maximum width](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/maximum-label-width-y.png)

#### Inversed axis

This allows you to change the axis label’s placement order from bottom to top in the y-axis.

![Inversed y-axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/inversed-axis-y.png)

#### Opposed axis

This allows you to change the axis position from left to right in the y-axis.

![Opposed y-axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/opposed-axis-y.png)

### Link

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/link.png)

### Filter 

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/filter.png)

#### Act as master widget

This allows you to define the Heatmap widget as a master widget, such that its filter action can be listened by other widgets in the Dashboard.

#### Ignore filter actions

This allows you to define the Heatmap widget to ignore responding filter actions applied on other widgets in the Dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable the hierarchical Top N filtering. While applying Top N filter with multiple dimension columns, the returned data can be customized based on whether the filtering need to be done as flat or hierarchy of added dimension columns.

When the hierarchical filter option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

## How to apply conditional formatting in Heatmap

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1. In the properties pane, under the `Formatting` section, click the `Advanced Setting` radio button.

![Advanced setting enable](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/advanced-settings.png)

2. This will open the `Conditional Formatting` dialog.

![Conditional formatting dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/conditionalformatting-dialog.png)

3. Select the `mode` and enter the conditions as required and click the `Save` button to apply.

4. Now, the widget visualization will be updated based on the conditions.

![Heatmap with conditional formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/formattedresult.png)

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

![Rule mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/rulemode.png)

#### Condition name

You can give a meaningful name to the applied conditions.

#### Condition type

Choose the condition for measure field from the highlighted conditions.

![Condition type](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/conditiontype.png)

#### Value

You can mention the condition value.

#### Fill color

Select the fill color for that condition using the color picker. 

#### Add condition

Click add condition to specify add new condition. 

![Add rules](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/addrules.png)

#### Delete condition

Click the delete button to remove the existing condition. 

![Delete rules](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/remove-rules.png)

## Cohort Visualization

Cohort visualization examines the outcomes of predetermined groups, called cohorts, as they progress through a set of stages. The signature characteristic of a cohort is its comparison of the change in a variable across two different time series. A cohort is a group of people sharing common characteristics over a specified period and it's helps for decision making purpose.

### How to do cohort visualization in HeatMap widget

1. Drag and Drop the heatmap widget and bind the measure values in it.

2. Go to the `Formatting section` and change the drop-down value to `Row Wise.`

![Formatting Section](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/formatting-section.png)

![Cohort Visualization](/static/assets/cloud/visualizing-data/visualization-widgets/images/heat-map/cohorot_visulization.png)

Above screenshot shows cohort visualization in heatmap widget.

### Container Appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the heat map widget.

### Background Color

This allows you to set the **background color** to the heat map widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the heat map. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the heat map widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the heat map widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the heat map widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the heat map widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the heat map widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.
