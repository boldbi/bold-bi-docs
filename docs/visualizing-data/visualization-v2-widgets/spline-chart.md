---
layout: post
title: Spline Chart Widget (V2) – Embedded BI | Bold BI Documentation
description: Learn how to create a Spline Chart (V2) visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-v2-widgets/spline-chart/"
platform: bold-bi
control: Spline Chart
documentation: ug

---

# Spline Chart

The Spline Chart allows you to showcase trends for analysis over a specific time period, with data points connected using splines.

![Spline Chart](/static/assets/visualizing-data/visualization-v2-widgets/images/spline-chart/spline-chart.png)

## How to configure the table data to spline Chart?

A Spline Chart requires a minimum of 1 value element and 1 column element to display. The `measure` or `expression` field that you want to analyze should be placed in the Y Values block. The dimension that you want to categorize the measure by should be placed in the Columns block. If you want to categorize based on a series, then the respective dimension can also be placed in the `Rows block`.

The following steps explain how to configure the data for spline charts:

1.  Drag and drop the spline chart onto a canvas and adjust the size as needed.


2.  Click the `Data Source` button highlighted in the configuration panel.


3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.


4.  In the connection type panel, click any one of the listed connection type buttons shown (Here, the `Microsoft Excel` Connection type is selected for demonstration).


5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Click the `Preview & Connect` button.


6.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.


7.  Click the `Properties` button in the configuration panel, and the property pane will open. Now, switch to the `ASSIGN DATA` tab.



8.  The `ASSIGN DATA` tab will open with available measures and dimensions from the connected data source.


9.  You can add the required data from the `Measures` and `Dimensions` into the required fields.

**Adding Value(s)**

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.


#### Settings

Click the `Settings` option to change the name using the `Rename` feature and select the required summary type from the available summary types shown in the `Settings`.


#### Filtering data

You can filter the data to be displayed in the funnel chart using the filter. For more details, please refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).


#### Adding Columns

You can add more than one value to the `Columns` field.


The spline chart will be rendered accordingly.


You can change the `Settings.`


#### Renaming fields

The configured field names can be edited using the `Rename` option provided in the settings menu.


#### Sorting data

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column/).


#### Filtering data

You can apply filters by selecting the Filter(s) option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

To show all records click on `Show All Records.`

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

If you add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

#### Drill down

When drill down is enabled, clicking a category will drill into the next level based on the Columns hierarchy.

#### Drill up

After drilling down, use the breadcrumb at the top of the widget to navigate back to the previous level.

If you add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.


The drilled view of the chart region is selected.


#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 


You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render the spline chart in series.


## How to format spline Chart?

You can format the spline chart for better illustration of the view that you require, through the settings available in the `Properties` tab.

To configure data into the spline chart follow the steps:

1. Drag and drop the spline chart into the canvas and resize it to your required size.

2. Configure the data into the spline chart.

3. Focus on the spline chart and click on the widget settings.


The property window will be opened.


You can see the list of properties available for the widget with default values.

### General Settings


#### Name

This allows you to change the `title` for this spline chart widget.


#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.


#### Description

Allows you to provide the `description` about this spline area chart widget.


### Basic Settings

#### Enable Animation

On enabling animation, it animates the measure values.

#### Show Value Labels

This allows you to toggle the visibility of value labels.


If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation**, and **Value label suffix** will be hidden.


#### Value Label Color

This allows you to customize the value label's color.



#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the spline chart will be set to Top.


#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Tooltip Settings

The Tooltip Settings section allows you to customize the appearance and behavior of tooltips in widget visualizations.

#### Show Tooltip
This option allows you to toggle the visibility of the tooltip in a chart.

#### Customize Tooltip
This option allows you to customize which columns are visible in the chart's tooltip.

#### Enable RTL
This option allows you to display fields and their data from right to left.

#### Apply Legend Color
This option allows you to display tooltip text and value colors that correspond with the legend colors.

### Legend Settings


#### Show Legend

A legend is text used to describe the plotted data. This option allows you to toggle the visibility of the legend in the chart and also change the legend text position by selecting through the combo box.


Enabling the **Custom Legend Text** option allows you to define custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

Enabling the interactivity feature in the Legend Settings category allows you to click on the legends.


#### Legend Label Color

This allows you to change the chart legend title and label colors.



#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-v2-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle.`


***Series Type***

This option allows you to change the shape of the legend in a `Series.`


#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`


#### Text Overflow

This option allows you to customize legend text based on the `Text Width` property value.

***None***

This option allows you to render legend items without any wrap and trim.



***Trim***

This option allows you to trim the legend items if its legend exceeds the `Text Width` value.



***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.



#### Text Width

This option allows you to set the maximum width for the Legend Items and it is applicable only if text-overflow is set as Trim or Wrap.



If you uncheck the `Show Legend` property in the property panel, the dependent properties, such as **Legend color**, **Legend position**, **customization button**, and **Legend title**, are also hidden. 

> **NOTE:** For single series, the Legend won't be visible.

### Axis Settings


This section allows you to customize the axis settings in the chart.

### Title color

This allows you to customize the axis title color.


### Label color

This allows you to customize the axis label color.


### Show Category Axis

This allows to enable the visibility of the `Category Axis.`


If you disable the `Show Category Axis` option, dependent properties, such as **Show axis title**, **Axis title text**, **Trim overflow** mode, **Trim axis labels**, **Label Rotation**, and **Auto Interval** option, will be hidden.


### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.


If you uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.


### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.` 

***Trim***

This option trims the end of overlapping label in the axis.


***Hide***

This option hides the overlapping labels in the axis.


#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and it can be made customizable when the `trim axis label` option is enabled.



### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.


### Auto Interval and Interval


By default, the `Auto Interval` property is enabled. The Auto Interval property is used to set the auto interval based on the number of data points for category axis labels. If a user wants to customize the interval, the user needs to disable the auto interval and set the required interval.


### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart.


If you disable the `Show Primary Axis` option, dependent properties, such as **Axis title**, **Axis title text**, **Axis type**, and **Axis Format** properties, will be hidden.


### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog. 


It will reflect in the primary value axis of the chart.


### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters:

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


2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The first textbox value is stored in the start parameter, and the second textbox value is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).


3. The parameter value is reflected in the chart axis.


### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value is based on the selected field value.


2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value.


3. The parameter value is reflected in the chart axis.


### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title, which will be reflected in the y-axis name of the chart.


### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when it may be necessary to invert the axis to display negative values at the top and positive values at the bottom. For example, when displaying temperature data on a chart, this property can be used to show negative values at the top.

Enabling this property will display negative values at the top and positive values at the bottom of the chart.


### Axis Type

This allows you to change the `type of axis` in the spline area chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option enables you to format the values on the primary and secondary axes of the chart using the provided formatting details accessible through the `Format` button. For more information, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).


#### Grid Line


#### Primary Value Axis

This option allows you to enable gridlines on the `Primary Value Axis` for the spline chart.


#### Secondary Value Axis

This option allows you to enable gridlines on the `Secondary Value Axis` for the spline chart.


#### Category Axis

This option allows you to enable gridlines on the `Category Axis` for the spline chart.


### Formatting

> IMPORTANT: The Formatting section will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the color for the spline chart.

#### Advance settings

The Advance setting option will be enabled when only one column and one row is configured. You can refer more details from this section: /visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting

## How to apply conditional formatting

The color in the spline chart widget can be customized using the color settings available in the properties section. This will allow users to improve the visualization and distinguish the data based on conditional range values.

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

Enter the legend title for the spline chart.

### Rule based condition mode

Customize the fill or stroke color based on one or more numeric/text conditions.

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

### Font Settings 

This section allows you to customize the font size of chart elements.


#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The Auto font-size property is used to set the font size based on the dashboard viewing client machine resolution. If the user wants to customize or set a fixed font size, then the user needs to disable the auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the spline chart widget.

#### Act as master widget

This allows you to define this spline chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this spline chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance


### Title Alignment

This allows you to handle the alignment of the widget title to either **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

By enabling Auto Font Size, the font size of the title will adjust automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

### Subtitle Auto Font Size

By enabling Auto Font Size, the font size of the subtitle will adjust automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

By enabling Auto Padding, the padding of the widget container will adjust automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the spline chart widget.

### Background Color

This allows you to set the **background color** for the spline chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow
This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions


#### Show Header

This allows you to enable or disable the `widget title` of the spline chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the spline chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the spline chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the spline chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the spline chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the spline chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns, chart Y-axis labels, and Y-axis titles will be hidden.


When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles, and gridlines will be hidden.

