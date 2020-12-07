---
layout: post
title: Treemap Visual – Embedded BI Widget | Bold BI Documentation
description: Learn how to create a Treemap visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/tree-map/"
platform: bold-bi
control: Tree Map
documentation: ug
---

# Configuring and Formatting Tree Map

`Tree map` allows you to visualize large data using its proportional shelves and color scales.

*Figure: Default Tree map visualization showing country wise stocks count.* 

![Default Treemap visualization](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/TreeMap.png)

*Figure: Tree map visualization after various customizations.*

![Customized Treemap visualization](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Customized-Treemap.png)

## How to configure the table data to tree map widget

> **NOTE:**  Before adding the Treemap widget to the design layout, make sure to **create the data source**. You can refer to this [section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a tree map, a minimum requirement of one value and one group by field is needed.

The following steps explains data configuration of tree map.

### Step 1: Add a tree map widget to the design canvas 

1.	Drag and drop the Tree Map control icon from the tool box into design panel. You can find the control in tool box by search.
![Adding a treemap](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/TreeMap-dragwidget.png)

2.	Resize the widget as required.
![Repositioning treemap widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Treemap-resizingwidget.png)

### Step 2: Configuring data into the widget
1.	Click the `Properties` icon in the `configuration panel`.
![Clikcing properties pane icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/TreeMap-propertiesicon.png)

2.	The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.
![Properties pane view](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Properties-pane.png)

3.	The data tab will be opened with the available columns from the connected data source.
![Assign data pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/data-pane.png)

### Value section 

Bind column by dragging and dropping element from sections to `values`.

![Adding value field](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Adding-value.png)

> **IMPORTANT:**  
* The field added in this section will act as a measure value. 
* It is a mandatory section and minimum of one value is needed for visualization. 
* Maximum of two fields can only be added. 

### Column section 

Drag and drop the elements from sections to `columns`.
![Configuring column](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Configuring-column.png)

![Widget visualization after minimum configuration](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Configured-widget.png)


> **IMPORTANT:**  
* The field added in this section will act as a dimension value. 
* It is a mandatory section and minimum of one value is needed for visualization. 
* Any number of fields can be added. 

### Tooltip section 

You can configure the `tooltip` section to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to [this section](/embedded-bi/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields. 

### Step 3(Optional): Settings menu options
You can `filter`, `format`, and `sort` the data displayed in the widget from the settings menu options.  To open the `settings menu`, click the `settings icon`. 

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Numeric field settings menu options](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Numeric-field-settings.png)

![Non-numeric field settings menu options](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Non-numeric-field-settings.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot.

![Summary type changing](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Summary-type.png)

Refer to [this section ](/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/)for more details.

#### Filtering data

You can use `Filters` to change the values by selecting the Filter option. For more details, refer to [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter menuitem](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Filter-menuitem.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting menu item](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Formatting.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu. 

1. Click the Settings menu icon and select the Rename menu option.
![Rename menu option](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Rename-menu.png)

2. The column name will become editable now. Enter the required text and press `enter` key.
![Modify field name](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Modify-field-name.png)

3. Now, the changes will be reflected in the tree map widget’s `tooltip` and in the `legend` (if Show legend option is enabled in the properties tab).
![After rename](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/After-renaming.png)

## How to format tree map widget

You can format the tree map for better illustration of the view that you require, using the settings available in `Properties` tab.

### General settings

#### Name

This allows you to set `title` for this tree map widget.

#### Subtitle

This allows you to set `subtitle` for this tree map widget. It is optional.

#### Description

This allows you to set brief explanation about this grid widget. It is optional.

### Basic settings

#### Show legend

This allows you to toggle the visibility of legend.

![Legend enabled Treemap](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Show-legend.png)

#### Label color

This allows you to select the color for the tree map label. The default value is `#ffffff`. 

![After changing the label color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Label-color.png)

#### Enable drill-down

In case of hierarchical view, multiple levels will get rendered in the same view. **This option will be visible, if you bind more than one column in the Columns section**. This can be switched to drill down view by enabling this setting.

![Drill down Applied in Treemap](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Enable-drill.png)

### Link

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Linking.png)

To configure linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Formatting

#### Monochromatic
![After changing the monochromatic color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Monochromatic.png)

This allows you to configure a single-color palette whose saturation will be varied based on the value density. The default value is `#f6727f`.

![After changing the monochromatic color](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/applied-color.png)

#### Advanced setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/embedded-bi/visualizing-data/visualization-widgets/tree-map/#how-to-apply-conditional-formatting-in-tree-map) for more details.

### Filter

![Filter properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Filter-properties.png)

#### Act as master widget

This allows you to define this tree map widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this tree map widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical top N filtering. While applying top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When Hierarchical Filter option is enabled, the top N will be applied for each individual column separately based on the number set for each column.

### Container appearance

This allows you to customize the widget container appearance, widget title’s properties and provides options to enable/ disable widget exporting options. For more detailed information, refer to [container appearance properties](/embedded-bi/visualizing-data/working-with-widgets/customizing-container-appearance/).

## How to apply conditional formatting in tree map

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1.	In the properties pane, under the Formatting section, click the Advanced Setting radio button.
![Enable advance formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Enable-advance-formatting.png)

2.	This will open the Conditional Formatting dialog.
![Conditional Formatting dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Formatting-dialog.png)

3.	Select the mode and enter the conditions as required and click the Save button to apply. 
![Apply conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Apply-conditions.png)

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

![Rule mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Rule-mode.png)

#### Value type

The value type drop-down allows you to choose whether to apply the direct value (specific number such as three goals, order ID 10248) or percentage (values above 30% or 50 %).

##### Condition name

You can give a meaningful name to the applied conditions.

### Condition type

Choose the condition for measure field from the highlighted conditions.

![Numeric condition types](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Numeric-condition.png)

If you selected the dimension as a based-on field and want to use text condition, the following text-based conditions are available.

![Text condition types](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Text-condition.png)

> **NOTE:**  The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

You can mention the condition value.

#### Case sensitive

For the *dimensions*, the case sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Select the fill color for that condition using the color picker. 

#### Add condition

Click the `add condition` to specify add new condition. 
![Add condition](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Add-condition.png)

#### Delete condition

Click the `delete` button to remove the existing condition. 
![Remove conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Remove-conditions.png)

#### Individual mode

Using the `individual` mode, you can specify a color for each record. 

> **IMPORTANT:**  Only top 100 records will be listed in the dialog. 

![Individual mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/tree-map/Individual-mode.png)

#### Color

You can choose a color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset`.