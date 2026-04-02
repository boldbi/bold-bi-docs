---
layout: post
title: Line Chart Widget V2 – Embedded BI | Bold BI Documentation
description: Learn how to create a Line Chart V2 visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-v2-widgets/line-chart/"
platform: bold-bi
control: Line Chart
documentation: ug

---

# Line Chart

A line chart allows you to showcase trends for analysis over a time period, with data points connecting using straight lines.

![Line Chart](/static/assets/visualizing-data/visualization-v2-widgets/images/line-chart/line-chart.png)

## How to configure the table data to line chart?

A Line Chart requires a minimum of 1 value element and 1 column element to display. The measure or expression field that you want to analyze should be placed in the Y Values block. The dimension that you want to categorize the measure by should be placed in the Columns block. If you want to categorize based on a series, then the respective dimension can also be placed in the Rows block.

The following steps explain how to configure data for the Line chart:

1.  Drag and drop the control onto a canvas and resize it as needed.


2.  Click the `Data Source` button in the configuration panel.


3.  Click the `CREATE NEW` button to create a new connection from the connection type panel.


4.  In the connection type panel, select a connection type (for example, `Microsoft Excel`) and fill in the related details. Click Connect.


5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.


6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.


7.  Click the `Properties` button in the configuration panel, property pane opens.


8.  Now, switch to the `ASSIGN DATA` tab.


9.  The `ASSIGN DATA` tab will display available measures and dimensions from the connected data source.


10.  Add the required data from the `Measures` and `Dimensions` into the appropriate fields.

#### Adding Value(s)

You can add multiple `Measures` into the `Y Values` field by dragging and dropping the required measures.


Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in the `Settings.`


#### Filtering data

You can filter the data to be displayed in the funnel chart by using the Filter. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).


#### Adding Columns

You can add more than one value into `Columns` field.


Line chart will be rendered like this


You can change the `Settings.`


#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.


#### Sorting data

You can Sort the dimension data using the Sort option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).


#### Filtering data

You can apply filters by selecting the Filter(s) option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).


To show all records, click on `Show All Records.`

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Drill down

When a second value is added to the Columns section, you will be prompted to enable drill down. Click Yes to enable.

Once enabled, clicking a category will drill into the next level based on the Columns hierarchy.

#### Drill up

After drilling down, use the breadcrumb at the top of the widget to navigate back to the previous level.

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 


You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a line chart in series.


## How to format line chart?

You can format the line chart for better illustration of the view that you require through the settings available in the `Properties` tab.

To configure data into a line chart, follow these steps:

1. Drag and drop the line chart onto the canvas and resize it to your required size.

2. Configure the data into the line chart.

3. Focus on the line chart and click on widget settings.


The property window will open.


#### General Settings


#### Name

This allows you to change the `title` for this line chart widget.


#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.


#### Description

Allows you to provide a `description` about this spline area chart widget.


#### Basic Settings

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog.

- Chart Type: Switch the widget view from the current chart type to another convertible chart type.
- Secondary Axis: By default, the configured field is plotted on the primary axis. Enable this to plot the selected field on the secondary axis.

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in a chart.


#### Enable Animation

It animates the measure values when you enable the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.


If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation**, and **Value label suffix** will be hidden.


#### Value Label Color

This allows you to customize the value label's color.



#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the line chart will be set to Top.


#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Tooltip Settings

The Tooltip Settings section allows you to customize the appearance and behavior of tooltips in widget visualizations.

#### Customize Tooltip
This option allows you to customize which columns are visible in the chart's tooltip.

#### Enable RTL
This option allows you to display fields and their data from right to left.

#### Apply Legend Color
This option allows you to display tooltip text and value colors that correspond with the legend colors.

### Legend Settings


#### Show Legend

A legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in the chart and also change the legend text position (selected through a combo box).


Enabling the option of **Custom Legend Text** will allow you to define custom text (through the text area) to display for each legend series (selected through the combo box) in the chart.

> **NOTE:** If only a single series is available in the chart, the legend is not visible.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

Enabling the interactivity feature in the Legend Settings category allows you to click on the legends.


**Legend Label Color**

This allows you to change the chart legend title and label colors.



#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-v2-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`


***Series Type***

This option allows you to change the shape of the legend in a `Series.`


#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`


#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

***None***

Renders the legend items without any wrap and trim.



***Trim***

Trims the legend items if the legend exceeds the `Text Width` value.



***Wrap***

This option allows you to wrap legend items based on `Text Width` value.



#### Text Width

This option allows you to set the maximum width for the Legend Items and is applicable only if text-overflow is set as Trim or Wrap.



If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button**, and **Legend title**, are also hidden.

#### Axis Settings


This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows you to enable the visibility of the `Category Axis.`


If you disable the `Show Category Axis` option, dependent properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation**, and **Auto Interval** option, will be hidden.


#### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.


If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.


#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.


***Hide***

This option hides the overlapping label in the axis. 


#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and it can be made customizable when the `trim axis` label option is enabled.



#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.


#### Auto Interval and Interval


By default, the 'Auto Interval' property is enabled. The Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.


#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart. 


If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type**, and **Axis Format** properties, will be hidden.


#### Primary Value Axis Title

This option allows you to edit the P`rimary Value Axis` title, which will be reflected in the y-axis name of the chart.


### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when you may need to invert the axis to show negative values at the top and positive values at the bottom. For example, when displaying temperature data on a chart and wanting to show negative values at the top, this property can be used.

Enabling this property will display negative values at the top and positive values at the bottom on the chart.


#### Axis Range Settings

This option allows you to manually set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog.


These settings will affect the primary value axis of the chart.


### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in number type.


Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (Number type parameter values only allowed).


Now the parameter value is reflected in the chart axis.


### Range Parameter Value:

If you wish to set the same ranges in multiple cases, create the range type parameter value. This type of parameter has the start and end values.

1. Create a parameter in range type.


2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. First textbox value is stored in the start parameter, and the second textbox value is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).


3. The parameter value is reflected in the chart axis.


### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. Choose any field. The value is based on the selected field value.


2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum and interval**). Select the parameter value.


3. The parameter value is reflected in the chart axis.


### Axis Type

This option allows you to change the `type of axis` in the line area chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option allows you to format the primary and secondary axis values using the formatting details provided using the `Format` button. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).


### Formatting

> IMPORTANT: The Formatting section will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the color for the line chart.

#### Advance settings

The Advance setting option will be enabled when only one column and one row is configured. You can refer more details from this section: /visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting

## How to apply conditional formatting

The color in the Line chart widget can be customized using the color settings available in the properties section. This will allow users to improve the visualization and distinguish the data based on conditional range values.

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

Enter the legend title for the line chart.

### Rule based condition mode

Customize the stroke or fill color based on one or more numeric/text conditions.

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

#### Fill/Stroke color

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

#### Grid Line


#### Primary Value Axis

This option allows you to enable the `Primary Value Axis` gridlines for the line chart.


#### Category Axis

This option allows you to enable the `Category Axis` gridlines for the line chart.


#### Secondary Value Axis

This option allows you to enable the `Secondary Value Axis` gridlines for the line chart.


### Filter

This section allows you to handle the `filter` action for the line chart widget.

#### Act as master widget

This allows you to define this line chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this line chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance


### Title Alignment

You can adjust the alignment of the widget title to be **left, center, or right**.

### Title Color

This setting allows you to change the text `color` of the widget title.

### Title Auto Font Size

Enabling this feature adjusts the font size of the title automatically based on screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

Similar to the title, you can enable auto font size for the subtitle to adjust its size based on screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Auto Padding

Enabling this feature adjusts the padding of the widget container automatically based on its size.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

You can toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the line chart widget.

### Background Color

This allows you to set the **background color** to the line chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

You can toggle the visibility of the `shadow` surrounding the widget.

### Container actions


#### Show Header

This allows you to enable or disable the `widget title` of the line chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the line chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the line chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the line chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the line chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the line chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details,refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.


When the chart has fewer than 6 rows, the X-axis labels, X-axis titles, and gridlines will be hidden.

