---
layout: post
title: Treemap Visual – embedded BI Widget | Bold BI Documentation
description: Learn how to create a Treemap visual in Bold BI embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/tree-map/"
platform: bold-bi
control: Tree Map
documentation: ug

---

# Configuring and Formatting Tree Map

The `Tree map` allows you to visualize large data using its proportional shelves and color scales.

*Figure: Default Tree map visualization showing country wise stocks count.* 

![Default Treemap visualization](/static/assets/visualizing-data/visualization-widgets/images/tree-map/tree-map-widget.png)

*Figure: Tree map visualization after various customizations.*

![Customized Treemap visualization](/static/assets/visualizing-data/visualization-widgets/images/tree-map/tree-map.png)

## How to configure the table data to tree map widget

> **NOTE:**  Before adding the tree map widget to the design layout, make sure to create the data source. You can refer to this [section](/working-with-data-sources/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a tree map, a minimum requirement of one value and one group by field is needed.

The following steps explain the data configuration of the tree map.

### Step 1: Add a tree map widget to the design canvas 

1.  Drag and drop the tree map control icon from the toolbox into the design panel. You can find the control in the toolbox by searching.

![Adding a treemap](/static/assets/visualizing-data/visualization-widgets/images/tree-map/drop-widget.png)

2.	Resize the widget as required.

![Repositioning treemap widget](/static/assets/visualizing-data/visualization-widgets/images/tree-map/resizing-widget.png)

### Step 2: Configuring data into the widget

1.   Click the `Properties` icon in the `configuration panel.`

![Clikcing properties pane icon](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

2.	The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.

![Properties pane view](/static/assets/visualizing-data/visualization-widgets/images/tree-map/propertypanel.png)

3.	The data tab will be opened with the available columns from the connected data source.

![Assign data pane](/static/assets/visualizing-data/visualization-widgets/images/tree-map/data-pane.png)

### Adding Value section 

Bind columns by dragging and dropping elements from sections to `values`.

![Adding value field](/static/assets/visualizing-data/visualization-widgets/images/tree-map/addingvalues.png)

> **IMPORTANT:**  
> * The field added in this section will act as a measure value.
> * It is a mandatory section and a minimum of one value is needed for visualization. 
> * A maximum of two fields can only be added.

You can `filter`, `format`, and `Rename` the data displayed in the widget from the settings menu options. To open the `settings menu`, click the `settings icon`.

The following screenshots show the various settings menu options based on the type of field configured in the type of section.

![Settings Icon](/static/assets/visualizing-data/visualization-widgets/images/tree-map/field-settings.png)


#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/tree-map/rename.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot.

![Summary type changing](/static/assets/visualizing-data/visualization-widgets/images/tree-map/summary.png)

Refer to this [ section ](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/)for more details.

#### Filtering data

You can use the `Filters` to change the values by selecting the Filter option. For more details, refer to the [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter menuitem](/static/assets/visualizing-data/visualization-widgets/images/tree-map/filter-value.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting menu item](/static/assets/visualizing-data/visualization-widgets/images/tree-map/format-value.png)

### Adding Column section 

Drag and drop the elements from sections to `columns.`

![Configuring column](/static/assets/visualizing-data/visualization-widgets/images/tree-map/adding-column.png)

![Widget visualization after minimum configuration](/static/assets/visualizing-data/visualization-widgets/images/tree-map/configure-widget.png)

> **IMPORTANT:**  
> * The field added in this section will act as a dimension value. 
> * It is a mandatory section and a minimum of one value is needed for visualization.
> * Any number of fields can be added. 


You can change the `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Filtering data

You can apply `filters` by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/tree-map/configuring-filter-column.png)

## Hidden Column

Hidden columns are useful in cases where we don’t want the fields to take part in the visualization but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/tree-map/assigndata.png)

We can configure both measure and dimension fields in the hidden column. For measures, we will have all the settings available for measure fields except formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/tree-map/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/tree-map/dimension.png)

![date field](/static/assets/visualizing-data/visualization-widgets/images/tree-map/date.png)

#### Linking

The primary use case for hidden columns is linking. When hidden columns are configured, the fields included in hidden columns are listed in the linking section. By configuring a column in the linking section, we can pass the corresponding column value as a linking parameter.

**Measure Based Example:** If we want to pass the number of shots as a URL parameter but do not want it to affect the visualization, we can configure the shots in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/tree-map/link-measure.png)

**Dimension Based Example:** If we want to pass the number of Team Name played as a URL parameter without affecting the visualization, we can configure the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/tree-map/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click on the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/tree-map/filtericon.png)

Click on the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/tree-map/custom.png)

Now, in the image below, we can see that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/tree-map/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/tree-map/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the info icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/tree-map/info-icon.png)

The tree map below displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/tree-map/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns, the data configured in the widgets will be duplicated. The sorting order of the widget will change. This affects the tree map visualization, as shown in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/tree-map/after.png)

### Tooltip section 

You can configure the `tooltip` section to showcase additional information in the widget's tooltip without affecting the visualization. Refer to [this section](/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields.

## How to format tree map widget

You can format the tree map widget to better illustrate the desired view using the settings available in the `Properties` tab.

### General settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/property.png)

#### Name

This allows you to set a `title` for the tree map widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/title.png)

#### Subtitle

This allows you to set a `subtitle` for the tree map widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/Subtitle.png)

#### Description

This allows you to provide a brief explanation about the grid widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/Description.png)

### Basic settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/Treemap-basic-setting.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in the tree map.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/tree-map/tooltip.png)

#### Show legend

This allows you to toggle the visibility of the legend.

![Legend enabled Treemap](/static/assets/visualizing-data/visualization-widgets/images/tree-map/showlegend.png)

#### Label color

This allows you to select the color for the tree map label. The default value is `#ffffff`.

![After changing the label color](/static/assets/visualizing-data/visualization-widgets/images/tree-map/label-color.png)

![label color](/static/assets/visualizing-data/visualization-widgets/images/tree-map/label-color-change.png)

#### Show Value Label

This allows you to toggle the visibility of `value labels`.

![Value label](/static/assets/visualizing-data/visualization-widgets/images/tree-map/value-label.png)

#### Enable Text Wrap

This option allows you to wrap the `Lable text`.

![label text wrap](/static/assets/visualizing-data/visualization-widgets/images/tree-map/Treemap-text-wrap.png)

#### Enable drill-down

In case of hierarchical view, multiple levels will get rendered in the same view. **This option will be visible, if you bind more than one column in the Columns section**. This can be switched to drill down view by enabling this setting.

![Drill down Applied in Treemap](/static/assets/visualizing-data/visualization-widgets/images/tree-map/drilldown.png)

#### Drill up

Once you've drilled down, you can drill up to the previous view using the breadcrumb navigator located at the top of the widget.

![Drill up](/static/assets/visualizing-data/visualization-widgets/images/tree-map/drillup.png)

### Link

![Linking](/static/assets/visualizing-data/visualization-widgets/images/tree-map/link.png)

To configure linking to a URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) section.

### Formatting

![Formatting color](/static/assets/visualizing-data/visualization-widgets/images/tree-map/formatting-settings.png)

#### Monochromatic

This allows you to configure a single color palette whose saturation will vary based on the value density. The default value is `#f6727f`.

![After changing the monochromatic color](/static/assets/visualizing-data/visualization-widgets/images/tree-map/applied-color.png)

![After the monochromatic color](/static/assets/visualizing-data/visualization-widgets/images/tree-map/applied-color-change.png)

#### Advanced setting

Select Advanced Setting to configure conditions and apply color to the cells based on that. Click [here](/visualizing-data/visualization-widgets/tree-map/#how-to-apply-conditional-formatting-in-tree-map) for more details.

### Filter

![Filter properties](/static/assets/visualizing-data/visualization-widgets/images/tree-map/filter.png)

#### Act as master widget

This allows you to define this tree map widget as a `master widget` so that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this tree map widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical `top N` filtering. While applying `top N` filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the top N will be applied for each individual column separately based on the number set for each column.

## How to apply conditional formatting in tree map

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1.	In the properties pane, under the Formatting section, click the Advanced Setting radio button.

![Enable advance formatting](/static/assets/visualizing-data/visualization-widgets/images/tree-map/advance-formatting.png)

2.	This will open the Conditional Formatting dialog.

![Conditional Formatting dialog](/static/assets/visualizing-data/visualization-widgets/images/tree-map/format-dialog.png)

3.	Select the mode and enter the conditions as required and click the Save button to apply. 

![Apply conditions](/static/assets/visualizing-data/visualization-widgets/images/tree-map/applycondition.png)

4.	Now, the widget visualization will be updated based on the conditions. 

![Treemap with conditional formatting](/static/assets/visualizing-data/visualization-widgets/images/tree-map/formatting-result.png)

Refer to the following sections for detailed steps on using the [Gradient](/visualizing-data/visualization-widgets/tree-map/#gradient-mode), [Rule](/visualizing-data/visualization-widgets/tree-map/#rule-based-condition-mode), and [individual](/visualizing-data/visualization-widgets/tree-map/#individual-mode) modes. 

### Gradient mode

You can customize the fill color of the tree map using gradient-based conditional formatting. This is the default mode.

#### Based on field

Choose any field from the Based-On section to apply the conditions from the drop-down.

#### Summary type

Select the summary type for the selected measure field.

#### Low, mid, and high values

Define your range by entering the low, mid, and high values.

> **NOTE:**  It is optional. If no value is entered, then the ranges will be automatically calculated based on the minimum and maximum values from the data source. 

#### Legend title

You can enter the title for the tree map legends. 

#### Default color

If the value of a region in the tree map is outside the specified range, then the color specified in the default color will be applied.

### Rule based condition mode

This allows you to customize the fill color of the tree map based on one or more numerical/text conditions.

![Rule mode](/static/assets/visualizing-data/visualization-widgets/images/tree-map/rulemode.png)

#### Value type

The value type drop-down allows you to choose whether to apply the direct value (such as three goals or order ID 10248) or percentage (values above 30% or 50%).

##### Condition name

You can give a meaningful name to the applied conditions.

### Condition type

Choose the condition for the measure field from the highlighted conditions.

![Numeric condition types](/static/assets/visualizing-data/visualization-widgets/images/tree-map/numericcondition.png)

If you selected the dimension as a based-on field and want to use a text condition, the following text-based conditions are available.

![Text condition types](/static/assets/visualizing-data/visualization-widgets/images/tree-map/textcondition.png)

> **NOTE:**  The text-based condition type will only be enabled when the selected dimension is used as the based on field.

#### Value

You can specify the condition value.

#### Case sensitive

For *dimensions*, the case sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Select the fill color for that condition using the color picker.

#### Add condition

Click the `add condition` button to specify a new condition.

![Add condition](/static/assets/visualizing-data/visualization-widgets/images/tree-map/addcondition.png)

#### Delete condition

Click the `delete` button to remove the existing condition.

![Remove conditions](/static/assets/visualizing-data/visualization-widgets/images/tree-map/delete-conditions.png)

#### Individual mode

Using the `individual` mode, you can specify a color for each record.

> **IMPORTANT:**  Only the top 100 records will be listed in the dialog.

![Individual mode](/static/assets/visualizing-data/visualization-widgets/images/tree-map/individualmode.png)

#### Color

You can choose a color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset.`


### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/container-appearance.png)

### Title Alignment

This allows you to adjust the alignment of the widget title to either **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

When `Auto Font Size` is enabled, the font size of the title will be adjusted automatically if the screen resolution varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will be adjusted automatically if the widget size varies.

**Padding**

This allows you to customize the padding of the widget container if **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply a specified `radius` to the widget corners if **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This allows you to set a **background image** for the tree map widget.

### Background Color

This allows you to set the **background color** for the tree map widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow
This allows you to toggle the visibility of  the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the following link: [Dashboard Widget Comments](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the tree map has been placed with fewer than 7 columns, the legend will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/tree-map/legend.png).
