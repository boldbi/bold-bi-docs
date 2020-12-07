---
layout: post
title: Column Chart – Cloud BI Visual | Bold BI Documentation
description: Learn how to add a Column Chart visual to Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Column Chart
documentation: ug
---

# Configuring and Formatting Column Chart

`Column chart` allows you to compare values for a set of unordered items across categories through vertical bars ordered horizontally.

![Default Column chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/ColumnChart.png)

## How to configure the table data to column chart

`Column chart` need a minimum of one value element and one column element to showcase. The measure column or expression column that you would like to analyze can be dropped into values block. The dimension column that you would like to categorize the measure column can be dropped onto Columns block. If you would like to categorize based on a series column, then the respective dimension column can be dropped onto Rows block in addition. These blocks are composed into Data pane.

> **NOTE:**  Before adding the card widget to the design layout, make sure to create the data source. You can refer to [this section](/cloud-bi/working-with-data-source/creating-a-new-data-source) to learn how to create a new data source.

The following steps explains data configuration of column chart:

### Step 1: Add a column chart widget to the design canvas 

1.	Drag and drop the `column chart control` icon from the tool box into design panel. You can find the control in tool box by search.
![Adding column chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/drop-widget.png)

2.	Resize the widget as required.
![Resizing widget in design panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/resizing.png)

### Step 2: Configuring data into the widget

1.	Click the `Properties icon` in the configuration panel.
![Click properties icon](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/properties-icon-click.png)

2.	The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.
![Properties pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/properties-pane.png)

3.	The data tab will be opened with the available columns from the connected data source.
![Date pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/data-pane.png)

### Adding fields to Value(s)

Bind column by dragging and dropping the element from sections to `values`.

![Add value field](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/add-value.png)

> **IMPORTANT:**  
* The field added in this section will act as a measure value. 
* It is a mandatory section for widget visualization and any number of fields can be configured in this section. 

### Adding fields to Column(s)

Drag and drop the elements from sections to columns.

![Add column field](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/add-column.png)

> **IMPORTANT:**  
* The field added in this section will act as a dimension value. 
* It is an optional section and adding more than one value will enable drill down.

#### Drill down
On Adding the second value to the Columns section, the alert message will be shown.

![Drill confirmation alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/drill-alert.png)

Click `Yes` to enable the option. If you click `No`, single value will be added to the Columns section.

*Figure: Chart with drilled view of the selected region.*

![Drilled view](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/drilled-view.png)

### Adding fields to Row

Drag and drop the elements from sections to `Row`.

![Add row fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/add-row.png)

![Chart view with row configured](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/configured-widget.png)

#### Adding tooltip fields

You can configure `tooltip section` to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to this section for more details on configuring the [tooltip fields](/cloud-bi/visualizing-data/working-with-widgets/tooltip-customization/).

### Step 3 (Optional): Settings menu options

You can `filter`, `format`, and `sort` the data displayed in the widget from the settings menu options.  To open the `settings menu`, click the `settings icon`. 

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Numeric field settings menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/numeric-menu.png)

![Non numeric fields measure settings menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/non-numeric-menu.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/cloud-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Changing the aggregation](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/aggregation-type.png)

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/formatting-option.png)

#### Sorting

You can `Sort` the dimension data using `Sort` option under Settings menu list. To apply sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

1. Click the Settings menu icon and select the `Rename` menu option.
![Rename option](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/rename-option.png)

2. The column name will become editable now. Enter the required text and press `enter` key.
![Edit field name](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/edit-field-name.png)

Now, the changes will be reflected in the column chart widget’s tooltip, chart legends, and in the axis titles.

## How to format column chart widget

You can format the column chart for better illustration of the view that you require using the settings available in `Properties` tab.

### General settings

#### Name

This allows you to set `title` for this column chart widget.

#### Subtitle

This allows you to set `subtitle` for this column chart widget. It is optional.

#### Description

This allows you to set brief explanation about this grid widget. It is optional.

### Basic settings

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Change type and axis settings dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/chart-type-and-axis.png)

**Chart Type**: This allows you to switch the widget view from current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis, if you enable this option, the selected field will be plotted as the secondary axis. 

![Secondry axis in chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/secondary-axis.png)

#### Enable animation

This allows you to enable the rendering of series in animated mode.

#### Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).

![chart legends](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/chart-legends.png)

#### Show legend

Enabling this option of Custom Legend Text will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

##### Custom legend settings

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added to Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

##### Individual

Selecting  `Individual` option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

`{{ : Row }} ({{ : Y Value }})`

Where, Row represents the value of dimension column added to `Rows section` and Value represents the value of the measure column added to `Values section`. 

![Individual legends](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/individual-legends.png)

##### Group

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![Group legends](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/group-legends.png)

For example, If Display Format is `{{ : Row }} ({{ : Value }})`, then Legend series will display like Austria (Sum of Freight)

![Chart with customized legends](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/legend-customized-widget.png)

#### Legend position

This provides option to select the legend placement. 

#### Legend Title

Enabling `Show Legend` option will allows you to toggle the visibility of Legend Title.

![Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/LegendTitle.png)

`legend title` property allows you to edit the legend title for chart.

![Legend Title in chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/ColumnChart_LegendTitle.png)

#### Show value labels

This allows you to toggle the visibility of value labels.

![Value labels in chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/value-labels.png)

#### Value label rotation

This allows you to define the `rotation angle for the value labels` to display.

![Rotated labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/rotated-labels.png)

#### Value label suffix

Allows you to enable the Suffix value text to the value labels.

![Labels with suffix](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/label-with-suffix.png)

#### Show items with no data

This allows you to show data, which column does not have value.

![Chart with no data item](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/no-data-item.png)

### Link

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Axis settings

This section allows you to customize the axis settings in chart.

![Chart axis properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Axis_Setting_Foreground.png)

#### Title color

This allows you to customize the chart title color.

#### Label color

This allows you to customize the chart label color.

#### Show category axis

This allows you to toggle the visibility of category axis.
![Category axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/category-axis.png)

#### Show category axis title

This allows you to toggle the visibility of category axis title.

![Category axis title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/show-category-axis.png)

#### Category axis title

This allows you to edit the category axis title for chart. It will reflect in x-axis name of chart.

![category axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/category-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the category axis.

##### Trim

This option trims the end of overlapping label in the axis.

![Trimmed label overflow](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/trimmed-label.png)

##### Hide

This option hides the overlapping label in the axis.

![Hidden label overflow](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/hidden-label.png)

#### Category axis label rotation

This allows you to define the rotation angle for the category axis labels to display.

![Rotated category axis labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/label-rotation.png)

#### Primary value axis

This allows you to enable the primary value axis for chart.

![Chart primary axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/primary-axis.png)

#### Show primary axis title

This allows you to enable the visibility of primary value axis title of chart.

![Primary axis title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/show-primary-axis-title.png)

#### Primary axis title value

This allows you to edit the primary value axis title. It will reflect in y-axis name of chart.

![Primary axis title value](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/title-value.png)

##### Axis Type

This allows you to customize Axis type as `linear` or `logarithmic`

**Linear**: Linear interpolation is used to determine where a value lies on the axis.

![Linear](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Axis_Setting_Linear.png)

![Linear Axis Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Axis_Setting_Linear_Chart.png)

**Logarithmic**: Logarithmic axis uses logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (eg: 10-6) and higher order of magnitude (eg: 106).

![Logarithmic](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Axis_Setting_Logarithmic.png)

![Logarithmic Axis Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Axis_Setting_Logarithmic_Chart.png)

### Axis range settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the Axis Range Settings dialog.

![Axis range settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/axis-range.png)

It will reflect in the primary value axis of the chart.

![Modified ranges](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/modified-range.png)

### Gridlines

![Grid line properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/grid-line.png)

You can toggle the visibility of the each axes gridlines visibility using the property and refer to [this page](/cloud-bi/visualizing-data/working-with-widgets/chart-gridlines/) for more details. 

### Trendline
You can add, edit, and delete the trendlines for the chart widget using the `Trendline properties`. Refer to [this page](/cloud-bi/visualizing-data/working-with-widgets/chart-trendlines/) for the detailed steps. 

### Series palette

This allows you to customize the chart series color through `Series Palette` section.

> **IMPORTANT:**  Series color palette option will be enabled only when the row field is configured. 

#### Use default palette

This allows you to toggle the series color between default palette and custom palette. By default, the property is toggled on and default palette will be applied to series.

![Default color palette option](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/color-palette.png)

By toggle off the `Use Default Palette`, you can customize the series colors. This section shows the list of series labels on the left-hand side and corresponding series color on the right-hand side. By clicking the colored square, color picker will be opened. You can choose a color. And, you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side.

![customizing the color palette](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/customizing-color.png)

### Formatting

> **IMPORTANT:**  `Formatting section` will be enabled when the widget is configured, and it will be hidden if the row field is configured. 

![Formatting properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/formatting.png)

In the `Formatting section`, there will be options to define the color for the each of the configured value fields. 

You can select the color by clicking the color picker option provided near the field name.  it will open the color picker. 

![Color picker for fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/color-picker.png)

#### After modification 

![Customized colors](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/customized-colors.png)

#### Advance settings

![Advance color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/advanced-colors.png)

`Advance setting` option will be enabled when only one column and one row is configured. You can refer more details from [this section](/cloud-bi/visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting)

### Filter

#### Act as master widget

This allows you to define this column chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this column chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable hierarchical top N filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When `Hierarchical Filter option` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container appearance

This allows you to customize the widget container appearance, widget title’s properties and provides options to enable or disable the widget exporting options. For more detailed information, refer to the  [container appearance properties](/cloud-bi/visualizing-data/working-with-widgets/customizing-container-appearance/). 

![Container appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Container_Apperence.png)

**Title Alignment**

This allows you to handle the alignment of widget title to the left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of the border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

**Background Color**

This allows you to select the color for the chart background. `The default value is #ffffff`. 
![Background Color Property](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/container_apperence_bgcolor_change.png)

![Background Color Changed](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Container_Appearence_bgcolor.png)

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/Container_Actions.png)

**Show Header**

This allows you to enable or disable the widget title of the column chart widget. 

**Allow Maximize View**

This allows you to enable or disable the maximized mode of the Column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

**Allow CSV Export**

This allows you to enable or disable the CSV export option for the Column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

**Allow Excel Export**

This allows you to enable or disable the Excel export option for the Column chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in the viewer.

**Allow Image Export**

This allows you to enable or disable the image export option for the Column chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in the viewer.

**Allow PDF Export**

This allows you to enable or disable the `PDF export` option for the Column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

**Enable Comments**

This allows you to enable or disable comment for the dashboard widget. For more details refer to [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/)

**Allow View Underlying Data**

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/).

## How to apply conditional formatting

Color in column chart widget can be customized using the color settings available in the `properties` section. This will allow the users to improve the visualization in column chart and to distinguish the data based on conditional range values that will let the visualizer to understand what is shown in data.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, check the `Advanced Setting` check box.
![Advance color settings option](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/advance-color.png)

2. This will open the `Conditional Formatting` dialog.
![Conditional formatting dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/formatting-dialog.png)

3. Select the mode and enter the conditions as required and click the `save` button to apply.
![Applying the conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/apply-conditions.png)

4. Now, the widget visualization will be updated based on the conditions.
![After applying conditional formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/formatted-result.png)

Refer to the following sections for the detailed steps on using the [Gradient](/cloud-bi/visualizing-data/visualization-widgets/column-chart/#gradient-mode), [Rule](/cloud-bi/visualizing-data/visualization-widgets/column-chart/#rule-based- condition-mode) and [individual](/cloud-bi/visualizing-data/visualization-widgets/column-chart/#individual-mode) modes. 

#### Gradient mode

You can customize the fill color of the column chart using the gradient based conditional formatting. `This is the default mode.`

#### Based on field

You can choose any field from the Based-On section to apply the conditions from the drop-down.

#### Summary type

You can select the summary type for the selected measure field.

#### Low, mid, and high values

You can define your range by entering the low, mid, and high 
values. 

> **NOTE:**  It is optional, if no value is entered then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

#### Legend title

You can enter the title for the column chart legends. 

### Rule based condition mode

This allows you to customize the fill color of the column chart based on one or more numerical / text conditions.

![rule mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/rule-mode.png)

#### Value type

The value type drop-down allows you to choose whether you are going to apply the direct value (specific number like 3 goals, order ID 10248) or percentage (values above 30% or 50 %).

#### Condition name

You can give a meaningful name to the applied conditions.

#### Condition type

Choose the condition for measure field from the highlighted 
conditions.

![numeric condition types](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/numeric-condition.png)

If you selected the dimension as a `based-on field` and want to use text condition, the following text-based conditions are available.

![text conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/text-condition.png)

> The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

You can mention the condition value.

#### Case sensitive

For the dimensions, case sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Select the fill color for that condition using the color picker. 

#### Add condition

Click ` add condition` to specify add new condition. 

![add conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/add-conditions.png)

#### Delete condition

Click the `delete` button to remove the existing condition. 

![delete conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/delete-conditions.png)

### Individual mode

Using the `individual` mode, you can specify color for each record. 

> **IMPORTANT:**  Only top 100 records will be listed in the 
dialog. 

![Individual mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/column-chart/individual-mode.png)

#### Color
You can choose the color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset`.