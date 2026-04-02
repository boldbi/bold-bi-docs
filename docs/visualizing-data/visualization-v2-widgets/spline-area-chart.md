---
layout: post
title: Spline Area Chart (V2) – Embedded Dashboard Widget | Bold BI Docs
description: Learn how to create a Spline Area Chart (V2) widget in Bold BI embedded dashboard (analytical,operational, or strategic), configure data fields and others.
canonical: "/visualizing-data/visualization-v2-widgets/spline-area-chart/"
platform: bold-bi
control: Spline Area Chart
documentation: ug
---

# Spline Area Chart

The Spline Area chart allows you to showcase the difference between the minimum and maximum values over a certain time period, with data points connected by smooth curves.

![Spline Area Chart](/static/assets/visualizing-data/visualization-v2-widgets/images/spline-area-chart/spline-area-chart.png) 

## How to configure the table data to spline area chart?

To configure data for a Spline Area chart, you need at least 1 value element and 1 column element. The `measure` or `expression` field you want to analyze can be dropped into the Y values block. The `dimension` you want to categorize the measure can be dropped onto the Columns block. If you want to categorize based on a series, then the respective dimension can be dropped onto the Rows block in addition.

Follow these steps to configure data for a Spline Area Chart:

1.  Drag and drop the control to the canvas and resize it to your required size.


2.  Click the `Data Source` button in the configuration panel.


3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.


4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button.


5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.


6.  Drag your preferred table or view from the left pane from the data design view, and click the `Save` button.


7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.



8.  The `ASSIGN DATA` tab will be opened with the available measures and dimensions from the connected data source.


9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

### Adding Values

You can add more than one `Measure` into the `Values` field by dragging and dropping the required measure.


#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Changing the aggregation type

Click the `Settings` option to change the name and the required summary type from the available summary types shown in the Settings.


#### Filtering data

You can filter the data to be displayed in the funnel chart by using the `Filter` option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).


### Adding Columns

You can add more than one value into the `Columns` field.


Spline Area chart will be rendered like this,


#### Settings 

You can change the `Settings`.


#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.


#### Sorting

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).


#### Filtering data

You can apply filters by selecting the `Filter(s)` option in the settings. For more details, refer to [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	


*After Filtering data*


To show all records, click on `Show All Records`.

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Multi-level drill down

- When more than one value is configured in Columns, drill down is enabled. Click a category to drill into the next level in the Columns hierarchy.

#### Drill up

Use the breadcrumb at the top of the widget to navigate back to the previous level after drilling down.

### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 


You can apply the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render the spline area chart in a series.


## How to format spline area chart?

You can format the spline area chart for better illustration of the view that you require through the settings available in the `Properties` tab.

To configure the data into a spline area chart, follow these steps:

1. Drag and drop the spline area chart onto the canvas and resize it to your required size.

2. Configure the data into the spline area chart.

3. Focus on the spline area chart and click on the widget settings.


The property window will open:


### General Settings


#### Name

This allows you to change the `title` for this spline area chart widget.


#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.


#### Description

Allows you to provide a `description` about this spline area chart widget.


### Basic Settings

#### Enable Animation

This allows you to enable the `animation` property. It animates by the measure values.

#### Show Value Labels

This allows you to toggle the visibility of value labels.


If you disable the `Show Value Labels` property, the dependent properties, which are **color**, **value label position**, **value label rotation**, and **value label suffix** will be hidden.


### Value Label Color

This allows you to customize the value label's color.



### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the spline area chart will be set to Top.


### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Tooltip Settings

The Tooltip Settings section allows you to customize the appearance and behavior of tooltips in widget visualizations.

#### Show Tooltip
This option allows you to toggle the visibility of tooltip in chart.

#### Customize Tooltip
This option allows you to customize which columns are visible in the chart's tooltip.

#### Enable RTL
This option allows you to display fields and their data from right to left.

#### Apply Legend Color
This option allows you to display tooltip text and value colors that correspond with the legend colors.

### Legend Settings


#### Show Legend

A legend is text used to describe the plotted data. This allows you to toggle the visibility of the legend in a chart and also change the legend text position (selecting through the combo box). 


Enabling the **Custom Legend Text** option will allow you to define custom text (through the text area) to display for each legend series (selected through the combo box) in a chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends


### Legend Label Color

This allows you to change the chart legend title and label colors.



#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-v2-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle`.


***Series Type***

This option allows you to change the shape of the legend in a `Series`.


#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend`.


#### Text Overflow

This option allows you to trim the legend items if the legend exceeds the `Text Width` value.

***None***

This option allows you to render legend items without any wrap and trim.



***Trim***

This option allows you to trim the legend items if its legend exceeds the `Text Width` value.



***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.



#### Text Width

This option allows you to set the maximum width for the Legend Items and is applicable only if text-overflow is set as Trim or Wrap.



If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button**, and **Legend title** are also hidden.

> **NOTE:** For single series, Legend won't be visible.

### Axis Settings

This section allows you to customize the `axis settings` in a chart.


### Title color

This allows you to customize the axis title color.


### Label color

This allows you to customize the axis label color.


### Show Category Axis

This allows you to enable the visibility of the `Category Axis`.


If you disable the `Show Category Axis` option, dependency properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation**, and **Auto Interval** option will be hidden.


### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.


If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.


### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`.

***Trim***

This option trims the end of overlapping label in the axis.


***Hide***

This option hides the overlapping label in the axis. 


#### Trim Axis Labels

This option allows you to trim the axis labels, based on the **Maximum Label Width** property value.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels and it can be made customizable when the `trim axis label` option is enabled.



#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.


### Auto Interval and Interval


By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on a number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.


#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart. 


If you disable the `Show Primary Axis` option, dependent properties, which are **Axis title**, **Axis title text**, **Axis type**, and **Axis Format** properties will be hidden.


#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of the chart. 


### Inverse Axis

By default, the chart axis shows positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For example, when we bind the temperature data to the chart and want to display the negative values on the top, we can make use of this property.

On enabling this property, the chart negative values will display on the top and positive values will display on the bottom.


#### Axis Type

This allows you to change the type of axis in a spline area chart.

***Linear***

This option allows you to handle the type of axis as linear.

***Logarithmic***

This option allows you to handle the logarithmic axis uses logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (eg: 10-6) and higher order of magnitude (eg: 106). 

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).


### Axis Range Settings

This allows you to manually set the **Minimum, Maximum,**  and **Interval** values of the primary value axis through the `Axis Range Settings` dialog.


It will reflect in the primary value axis of the chart.


### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in number type like below.


Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (Number type parameter values only allowed).


Now the parameter value is reflected in the chart axis.


### Range Parameter Value:

If you wish to set the same ranges in multiple cases, create the range type parameter value. This type of parameter has the start and end values.

1. Create a parameter in range type.


2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The value in the first textbox is stored in the start parameter, and the value in the second textbox is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).


3. The parameter value is reflected in the chart axis.


### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value is based on the selected field value.


2. Click the axis range settings dialog and enter @ in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value.


3. The parameter value is reflected in the chart axis.


### Grid Line

You can toggle the visibility of the each axis gridlines visibility using the property.


#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the spline area chart.


#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart.


#### Category Axis

This allows you to enable the `Category Axis` gridlines for the spline area chart.


### Formatting

> IMPORTANT: The Formatting section will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the color for the spline area chart.

#### Advance settings

The Advance setting option will be enabled when only one column and one row is configured. You can refer more details from this section: /visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting

## How to apply conditional formatting

The color in the spline area chart widget can be customized using the color settings available in the properties section. This will allow users to improve the visualization and distinguish the data based on conditional range values.

### How to enable advanced formatting

1. In the properties pane, under the Formatting section, check the Advanced Setting check box.
2. This will open the Conditional Formatting dialog.

3. Select the mode and enter the required conditions. Then, click Save to apply.

4. The widget visualization will be updated based on the conditions.

Refer to the following sections for the detailed steps on using the Gradient, Rule and Individual modes.

#### Gradient mode

Customize series colors using gradient-based conditional formatting. This is the default mode.

#### Based on field

Select any field from Based-On to apply conditions.

#### Summary type

Select the summary type for the chosen measure field.

#### Low, mid, and high values

Define the range by entering low, mid, and high values. If omitted, ranges are auto-calculated from data min/max.

#### Legend title

Enter the legend title for the spline area chart.

### Rule based condition mode

Customize the fill color based on one or more numeric/text conditions.

#### Value type

Choose Direct value or Percentage.

#### Condition name

Provide a name for the condition.

#### Condition type

Pick a condition type for the measure. If a dimension is selected as Based-On, text conditions are available.

#### Value

Enter the comparison value.

#### Case sensitive

For dimensions, control case sensitivity.

#### Fill color

Pick the color for the condition.

#### Add/Delete condition

Use Add to create a new condition or Delete to remove one.

### Individual mode

Assign a specific color for each record. Only the top 100 records are listed in the dialog.

#### Color Mapping Type

Apply colors to series based on Data or Index.

Data: Apply colors based on data values.

Index: Apply colors based on position (up to 15 distinct colors, then repeats).

Note: Prefer index-based mapping for smaller datasets (up to 15 series).

#### Color

Choose the color for each record.

#### Reset

Click Reset to undo all changes.

### Font Settings 

This section allows you to customize the font size of chart elements.


#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The Auto font-size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set a fixed font size, then the user needs to disable auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the spline area chart widget.

#### Act as master widget

This allows you to define this spline area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this spline area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This Section allows you to customize the `Container Appearance` for the spline area chart widget.


**Title Alignment**

This allows you to handle the alignment of the widget title to either **left, center,** or **right**.

**Title Color**

This allows you to apply the text `color` to the widget title.

**Title Auto Font Size**

This allows you to toggle the size of the font for the widget title.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

**Subtitle Auto Font Size**

This allows you to toggle the size of the font for the widget subtitle.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

**Auto Padding**

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

**Show Border**

This allows you to toggle the visibility of the `border` surrounding the widget.

**Corner Radius**

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

**Show Background Image**

This allows you to set the **background image** for the spline area chart widget.

**Background Color**

This allows you to set the **background color** to the spline area chart widget.

**Transparency**

This property allows you to specify the **transparency** for the `background color`.

**Show Shadow**

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This Section allows you to customize the `Container actions` for the spline area chart widget.


#### Show Header

This allows you to enable or disable the `widget title` of the spline area chart widget. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the spline area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the spline area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the spline area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the spline area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the Column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with fewer than 7 columns chart Y-axis labels, Y-axis titles will be hidden.


When the chart has been placed with fewer than 6 rows, chart X-axis labels, X-axis titles, and gridlines will be hidden.

