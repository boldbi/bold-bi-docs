---
layout: post
title: Treemap Visual – embedded BI Widget | Bold BI Documentation
description: Learn how to create a Treemap visual in Bold BI embedded dashboard, configure data fields and other settings.
canonical: "/embedded-bi/visualizing-data/visualization-widgets/tree-map/"
platform: bold-bi
control: Tree Map
documentation: ug
---

# Configuring and Formatting Tree Map

`Tree map` allows you to visualize large data using its proportional shelves and color scales.

*Figure: Default Tree map visualization showing country wise stocks count.* 

![Default Treemap visualization](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/tree-map-widget.png)

*Figure: Tree map visualization after various customizations.*

![Customized Treemap visualization](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/tree-map.png)

## How to configure the table data to tree map widget

> **NOTE:**  Before adding the Treemap widget to the design layout, make sure to **create the data source**. You can refer to this [section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a tree map, a minimum requirement of one value and one group by field is needed.

The following steps explains data configuration of tree map.

### Step 1: Add a tree map widget to the design canvas 

1.  Drag and drop the Tree Map control icon from the toolbox into the design panel. You can find the control in toolbox by search.

![Adding a treemap](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/drop-widget.png)

2.	Resize the widget as required.

![Repositioning treemap widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/resizing-widget.png)

### Step 2: Configuring data into the widget

1.   Click the `Properties` icon in the `configuration panel.`

![Clikcing properties pane icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

2.	The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.

![Properties pane view](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/propertypanel.png)

3.	The data tab will be opened with the available columns from the connected data source.

![Assign data pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/data-pane.png)

### Adding Value section 

Bind column by dragging and dropping element from sections to `values.`

![Adding value field](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/addingvalues.png)

> **IMPORTANT:**  
* The field added in this section will act as a measure value. 
* It is a mandatory section and minimum of one value is needed for visualization. 
* Maximum of two fields can only be added. 

You can `filter,` `format,` and `Rename` the data displayed in the widget from the settings menu options.  To open the `settings menu,` click the `settings icon.`

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Settings Icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/field-settings.png)


#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/rename.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot.

![Summary type changing](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/summary.png)

Refer to this [ section ](/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/)for more details.

#### Filtering data

You can use the `Filters` to change the values by selecting the Filter option. For more details, refer to the [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter menuitem](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/filter-value.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting menu item](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/format-value.png)

### Adding Column section 

Drag and drop the elements from sections to `columns.`

![Configuring column](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/adding-column.png)

![Widget visualization after minimum configuration](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/configure-widget.png)

> **IMPORTANT:**  
* The field added in this section will act as a dimension value. 
* It is a mandatory section and minimum of one value is needed for visualization. 
* Any number of fields can be added. 


You can change the `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Filtering data

You can apply `filter` by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/configuring-filter-column.png)

### Tooltip section 

You can configure the `tooltip` section to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to [this section](/embedded-bi/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields. 

## How to format tree map widget

You can format the tree map for better illustration of the view that you require, using the settings available in `Properties` tab.

### General settings

#### Name

This allows you to set `title` for this tree map widget.

#### Subtitle

This allows you to set `subtitle` for this tree map widget.

#### Description

This allows you to set brief explanation about this grid widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/general-settings.png)

### Basic settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/basic-settings.png)

#### Show legend

This allows you to toggle the visibility of legend.

![Legend enabled Treemap](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/showlegend.png)

#### Label color

This allows you to select the color for the tree map label. The default value is `#ffffff.`

![After changing the label color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/label-color.png)

![label color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/label-color-change.png)

#### Show Value Label

This allows you to toggle the visibility of `value labels.`

![Value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/value-label.png)

#### Enable drill-down

In case of hierarchical view, multiple levels will get rendered in the same view. **This option will be visible, if you bind more than one column in the Columns section**. This can be switched to drill down view by enabling this setting.

![Drill down Applied in Treemap](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/drilldown.png)

### Link

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/link.png)

To configure linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Formatting

![Formatting color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/formatting-settings.png)

#### Monochromatic

This allows you to configure a single-color palette whose saturation will be varied based on the value density. The default value is `#f6727f.`

![After changing the monochromatic color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/applied-color.png)

![After the monochromatic color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/applied-color-change.png)

#### Advanced setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/embedded-bi/visualizing-data/visualization-widgets/tree-map/#how-to-apply-conditional-formatting-in-tree-map) for more details.

### Filter

![Filter properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/filter.png)

#### Act as master widget

This allows you to define this tree map widget as a `master widget` such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this tree map widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable the hierarchical` top N` filtering. While applying `top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the top N will be applied for each individual column separately based on the number set for each column.

## How to apply conditional formatting in tree map

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1.	In the properties pane, under the Formatting section, click the Advanced Setting radio button.

![Enable advance formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/advance-formatting.png)

2.	This will open the Conditional Formatting dialog.

![Conditional Formatting dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/format-dialog.png)

3.	Select the mode and enter the conditions as required and click the Save button to apply. 

![Apply conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/applycondition.png)

4.	Now, the widget visualization will be updated based on the conditions. 

![Treemap with conditional formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/formatting-result.png)

Refer to the following sections for the detailed steps on using the [Gradient](/embedded-bi/visualizing-data/visualization-widgets/tree-map/#gradient-mode), [Rule](/embedded-bi/visualizing-data/visualization-widgets/tree-map/#rule-based-condition-mode), and [individual](/embedded-bi/visualizing-data/visualization-widgets/tree-map/#individual-mode) modes. 

### Gradient mode

You can customize the fill color of the tree map using the gradient based conditional formatting. This is the default mode. 

#### Based on field

You can choose any field from the Based-On section to apply the conditions from the drop-down.

#### Summary type

You can select the summary type for the selected measure field.

#### Low, mid, and high values

You can define your range by entering the low, mid, and high values. 

> **NOTE:**  It is optional, if no value is entered, then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

#### Legend title

You can enter the title for the tree map legends. 

#### Default color

If the region of tree map value is out of the specified range,then the color specified in the default color will be applied. 

### Rule based condition mode

This allows you to customize the fill color of the tree map based on one or more numerical / text conditions.

![Rule mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/rulemode.png)

#### Value type

The value type drop-down allows you to choose whether to apply the direct value (specific number such as three goals, order ID 10248) or percentage (values above 30% or 50 %).

##### Condition name

You can give a meaningful name to the applied conditions.

### Condition type

Choose the condition for measure field from the highlighted conditions.

![Numeric condition types](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/numericcondition.png)

If you selected the dimension as a based-on field and want to use text condition, the following text-based conditions are available.

![Text condition types](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/textcondition.png)

> **NOTE:**  The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

You can mention the condition value.

#### Case sensitive

For the *dimensions*, the case sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Select the fill color for that condition using the color picker. 

#### Add condition

Click the `add condition` to specify add new condition. 

![Add condition](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/addcondition.png)

#### Delete condition

Click the `delete` button to remove the existing condition. 

![Remove conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/delete-conditions.png)

#### Individual mode

Using the `individual` mode, you can specify a color for each record. 

> **IMPORTANT:**  Only top 100 records will be listed in the dialog. 

![Individual mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/individualmode.png)

#### Color

You can choose a color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset.`


### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/spline-area-chart/container-appearance.png)

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

This allows you to set the **background image** for the tree map widget.

### Background Color

This allows you to set the **background color** to the tree map widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/spline-area-chart/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the tree map. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the tree map widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the tree map widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the tree map widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the tree map widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the tree map widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.
