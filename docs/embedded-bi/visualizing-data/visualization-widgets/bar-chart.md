---
layout: post
title: Bar Chart - Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Bar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/bar-chart/"
platform: bold-bi
control: Bar Chart
documentation: ug
---

# Bar Chart

`Bar chart` allows you to compare values for a set of unordered items across categories through horizontal bars ordered vertically.

![Default Bar chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/barchart.png)

## How to configure the table data to bar chart

The `Bar chart` needs a minimum of one value element and one column element to showcase. The `measure` column or `expression` column that you would like to analyze can be dropped into the values block. The dimension column that you would like to categorize the measure column can be dropped onto the columns block. If you would like to categorize based on a series column, then the respective dimension column can be dropped onto the Rows block in addition. These blocks are composed into a data pane.

The following steps explains the  data configuration of bar chart:

1.   Drag and drop the `column chart control` icon from the toolbox into the design panel. You can find the control in toolbox by search.

![Adding column chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/drop-widget.png)

2.	Resize the widget as required.

![Resizing widget in design panel](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/resizing.png)

3.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

4.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

5.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

6.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

7.  Drag and drop your preferred table or view from the left pane from the data design view, and click the `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

8.	Click the `Properties icon` in the configuration panel.

![Click properties icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

9.	The `properties` panel of the widget will be displayed as shown in the following screenshot.

![Properties pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/assign-data.png)

10.  Now, switch to the `ASSIGN DATA` tab.

![Properties pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/assign-data-section.png)

11.	The `ASSIGN DATA` tab will be opened with the available columns from the connected data source.

### Adding fields to Value(s)

Bind column by dragging and dropping the element from sections to `values.`

![Add value field](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/add-measure.png)

> **IMPORTANT:**  
* The field added in this section will act as a measured value. 
* It is a mandatory section for the widget visualization and any number of fields can be configured in this section.

### Settings menu options

You can `filter` and `format` the data displayed in the widget from the settings menu options. To open the `settings menu,` click the `settings icon.`

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Numeric field settings menu](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/settings-menu.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Changing the aggregation](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/settings.png)

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/format-option.png)

#### Removing the fields

To remove the added value fields, click the highlighted button.

![Removing  Fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/removebutton.png)

### Adding fields to Column(s)

Drag and drop the elements from sections to columns.

![Add column field](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/adding-columns.png)

> **IMPORTANT:**  
* The field added in this section will act as a dimension value. 
* It is an optional section and adding more than one value will enable drill down.

#### Settings 

You can change the `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/sort-option.png)

#### Filtering data

You can apply filter by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/filter-option-column.png)

The chart will be rendered like this,

![Adding column field](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/barchart.png)

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Drill down

On adding the second value to the Columns section, the alert message will be shown.

![Drill confirmation alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

Click `Yes` to enable the option. If you click `No,` a single value will be added to the Columns section.

*Figure: Chart with a drilled view of the selected region.*

![Drilled view](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/drilled-view.png)

### Adding fields to Row

Drag and drop the elements from sections to `Row.`

![Add row fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/chart-row.png)

![Chart view with row configured](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/configured-widget.png)

#### Adding tooltip fields

You can configure the `tooltip section` to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to this section for more details on configuring the [tooltip fields](/embedded-bi/visualizing-data/working-with-widgets/tooltip-customization/).

## How to format bar chart widget

You can format the bar chart for better illustration of the view that you require using the settings available in `Properties` tab.

![Property Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/property-window.png)

### General settings

#### Name

This allows you to set `title` for this bar chart widget.

#### Subtitle

This allows you to set `subtitle` for this bar chart widget.

#### Description

This allows you to set a brief explanation about this bar chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/general-settings.png)

### Basic settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in chart.

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart type and axis settings dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/chart-type.png)

**Chart Type**: This allows you to switch the widget view from current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis, if you enable this option, the selected field will be plotted as the secondary axis. 

![Secondry axis in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/secondary-axis.png)

#### Enable animation

It animates the measure values by toggling the `Enable Animation`.

#### Show value labels

This allows you to toggle the visibility of value labels.

![Value labels in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/show-value-label.png)

#### Customize

This allows you to customize the toggle visibility of each series in Chart.

![Value labels customization change](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/value-label-customization.png)

![Value labels customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/value-label-change.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/label-color-change.png)

### Value Label Position

This option allows you to customize the value label position in the chart. By default, it is set to ‘Auto,’ so the label position for area chart will be set as Top.

![Value label position](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/bar-valuelabelposition.png)

#### Value label rotation

This allows you to define the `rotation angle for the value labels` to display.

![Rotated labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/label-rotation.png)

#### Value label suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Labels with suffix](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/suffix-label.png)

#### Show items with no data

This allows you to show data, which column does not have value.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width.`

![Column Width Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-width-customization.png)
   
![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing.`

![Column Spacing Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-space-customization.png)

![Column Spacing](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-spacing.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Page Size

This option allows you to set number of records needs to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-settings.png)

#### Show legend

A `Legend` is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).

![chart legends](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/show-legend.png)

Enabling this option of `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in a chart.

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-customization.png)

![Legend customization Change](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-customization-change.png)

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/legend-title.png)

#### Legend Shape

This option allows you change the **shape** of the legend.

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

***None***

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/barChart_LegendNone.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/barChart_Legendtrim.png)

***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/barChart_Legendwrap.png)

#### Text Width

This option allows you to set maximum width for the Legend Items and it is applicable only if text overflow set as Trim or Wrap.

![Legend Text Width in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/barChart_Legendwidth.png)

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/axis-format.png)

### Link

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/linking.png)

### Axis settings

This section allows you to customize the axis settings in chart.

![Chart axis properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/axis-settings.png)

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show category axis

This allows you to toggle the visibility of category axis.
![Category axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/show-categoryaxis.png)

#### Show category axis title

This allows you to toggle the visibility of category axis title.

![Category axis title visibility](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/show-axis-title.png)

#### Category axis title

This allows you to edit the category axis title for chart. It will reflect in x-axis name of chart.

![category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/axis-title-edit.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the category axis.

#### Trim

This option trims the end of overlapping label in the axis.

![Trimmed label overflow](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trim.png)

#### Hide

This option hides the overlapping label in the axis.

![Hidden label overflow](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trim-axis-labels.png)

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/maximum-label-width.png)

#### Category axis label rotation

This allows you to define the rotation angle for the category axis labels to display.

![Rotated category axis labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. The Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/chart-interval.png)

#### Primary value axis

This allows you to enable the primary value axis for chart.

![Chart primary axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/show-primary-value-axis.png)

#### Show primary axis title

This allows you to enable the visibility of primary value axis title of chart.

![Primary axis title visibility](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/show-primary-value-axis-title.png)

#### Primary axis title value

This allows you to edit the primary value axis title. It will reflect in y-axis name of chart.

![Primary axis title value](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/edit-axis-title.png)

### Axis range settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the Axis Range Settings dialog.

![Axis range settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/axis-range.png)

It will reflect in the primary value axis of the chart.

![Modified ranges](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/modified-ranges.png)

### Axis Type

This allows you to change the type of axis in the Bar chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

### Gridlines

You can toggle the visibility of the each axes gridlines visibility using the property.

![Grid line properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/chartgridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the bar chart.

![Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/primary-gridlines.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the bar chart.

![Secondary value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/secondary-gridlines.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the bar chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/category-axis.png)

### Trendline

You can add more than one trendline to Cartesian charts except for bar type series(Line, Column, Area, Spline) and stacked type of charts. You can **add, edit,** and **delete** trendlines.

![Trendline](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trendline-settings.png)

### Add Trendline and Edit Trendline

To add the trendline, click the highlighted button.

![Trendline Add](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trendline-add.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trendlinedialog.png)

Click `OK` button to add trendline in a bar chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trendline.png)

To edit the trendline select the one to be edited and click the highlighted button.

![Trendline Edit](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trendline-edit.png)

Again the trendline dialog window opens now.

***Legend Text***

You can edit the trendline legend by the `Legend Text` text box. By default, the `Legend Text` renders are based on the Line type and Series name.

***Series***

You can change the series to which series have to show the trendline by the `Series` dropdown option.

***Line Type***

You can select line type by the `Line Type` dropdown option(Linear, Exponential, Logarithmic, Power, and Polynomial).

***Line Color***

You can change the color of the trendline by the `Line Color` color picker.

***Line Style***

You can change the style of the trendline by the `Line Style` drop down option(Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot).

### Delete Trendline

To delete the trendline, select the one to be deleted and click the highlighted button.

![Trendline Delete](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/trendline-delete.png)

### Formatting

> **IMPORTANT:** The `Formatting section` will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the `color` for the bar chart.

![Format Colors](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/formatting-color.png)

It will reflect in the bar chart.

![Formating Data Colors](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/formatting-color-change.png)

#### Advance settings

The `Advance setting` option will be enabled when only one column and one row is configured. You can refer more details from [this section](/embedded-bi/visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting).

![Advance color settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/column-chart/advanced-colors.png)

## How to apply conditional formatting

Color in the Bar chart widget can be customized using the color settings available in the `properties` section. This will allow the users to improve the visualization in a bar chart and to distinguish the data based on conditional range values that will let the visualizer to understand what is shown in data.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, check the `Advanced Setting` check box.

2. This will open the `Conditional Formatting` dialog.

![Conditional formatting dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/formatting-dialog.png)

3. Select the mode and enter the conditions as required and click the `save` button to apply.

![Applying the conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/apply-conditions.png)

4. Now, the widget visualization will be updated based on the conditions.

![After applying conditional formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/formatted-result.png)

Refer to the following sections for the detailed steps on using the [Gradient](/embedded-bi/visualizing-data/visualization-widgets/column-chart/#gradient-mode), [Rule](/embedded-bi/visualizing-data/visualization-widgets/column-chart/#rule-based- condition-mode) and [individual](/embedded-bi/visualizing-data/visualization-widgets/column-chart/#individual-mode) modes. 

#### Gradient mode

You can customize the fill color of the Bar chart using the gradient based conditional formatting. `This is the default mode.`

#### Based on field

You can choose any field from the Based-On section to apply the conditions from the drop-down.

#### Summary type

You can select the summary type for the selected measure field.

#### Low, mid, and high values

You can define your range by entering the low, mid, and high 
values. 

> **NOTE:**  It is optional, if no value is entered then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

#### Legend title

You can enter the title for the Bar chart legends. 

### Rule based condition mode

This allows you to customize the fill color of the bar chart based on one or more numerical/text conditions.

![rule mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/rule-mode.png)

#### Value type

The value type drop-down allows you to choose whether you are going to apply the direct value (specific number like 3 goals, order ID 10248) or percentage (values above 30% or 50 %).

#### Condition name

You can give a meaningful name to the applied conditions.

#### Condition type

Choose the condition for measure field from the highlighted 
conditions.

![numeric condition types](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/numeric-condition.png)

If you selected the dimension as a `based-on field` and want to use text condition, the following text-based conditions are available.

![text conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/text-condition.png)

> The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

You can mention the condition value.

#### Case sensitive

For the dimensions, case sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Select the fill color for that condition using the color picker. 

#### Add condition

Click ` add condition` to specify add new condition. 

#### Delete condition

Click the `delete` button to remove the existing condition. 

### Individual mode

Using the `individual` mode, you can specify color for each record. 

> **IMPORTANT:**  Only top 100 records will be listed in the dialog. 

![Individual mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/individual-mode.png)

#### Color Mapping Type

Using Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data, you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

#### Color

You can choose the color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset`.

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/color-mapping-type.png)

#### Color Mapping Type

Using Color Mapping type, We can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/bar-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If we are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/bar-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the spline area chart widget.

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/bar-chart/filter.png)

#### Act as master widget

This allows you to define this bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the bar chart widget.

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

`On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

`On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the bar chart widget.

### Background Color

This allows you to set the **background color** to the bar chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Container actions

This section allows you to customize the `Container actions` for the bar chart widget.

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the bar chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the bar chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the bar chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the bar chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the bar chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
