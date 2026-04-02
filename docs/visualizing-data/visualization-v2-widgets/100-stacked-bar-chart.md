---
layout: post
title: 100% Stacked Bar Chart (V2) – Embedded BI Visual | Bold BI Docs
description: Learn how to create a 100% Stacked Bar Chart (V2) visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-v2-widgets/100-stacked-bar-chart/"
platform: bold-bi
control: 100% Stacked Bar Chart
documentation: ug
---

# 100% Stacked Bar Chart

The 100% Stacked Bar Chart allows you to compare multiple measures by stacking the bars horizontally, one after the other.

![Hundred stacked bar chart image1](/static/assets/visualizing-data/visualization-v2-widgets/images/100-stacked-bar-chart/hundredstacked-barchart.png)

## How to configure the table data to 100% stacked bar chart?

A 100% Stacked Bar Chart requires a minimum of 1 value element and 1 column element to be showcased. The measure or expression field that you want to analyze can be placed in the Y Values block. The dimension that you want to use to categorize the measure can be placed in the Columns block. If you want to categorize based on a series, you can also place the respective dimension in the Rows block.

The following steps explain how to configure data in a 100% stacked bar chart:

1.  Drag and drop the 100% stacked bar chart onto the canvas and resize it to your desired size.


2.  Please click the `Data Source` button in the configuration panel.


3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.


4.  In the connection type panel, click on any of the listed connection type buttons. (Here, the `Microsoft Excel` connection type is selected for demonstration.)


5.  In the `NEW DATA SOURCE` configuration panel, please fill in the connection type and its related details. Then, click on the `Connect` button.


6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.


7.  Click the `Properties` button in the configuration panel to open the property pane.


8.  Now, switch to the `ASSIGN DATA` tab.


9.  The `ASSIGN DATA` tab will be opened, displaying the available measures and dimensions from the connected data source.


10.  You can add the necessary data from `Measures` and `Dimensions` into the designated field.

#### Adding Value(s)

You can add more than one `Measures` to the `Y Values` field by dragging and dropping the required measures.


Click on the `Settings` option in order to change the required summary type from the available summary types displayed in the Settings.


#### Filtering data

You can filter the data that is displayed in the chart by using the filter option. For more details, please refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).


#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, please refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

To remove the added value fields, click the highlighted button.


You can add more than one column from the `Dimensions` field to the `Y Values` field.

#### Adding Columns

You can add more than one value to the `Columns` field.


The 100% stacked bar chart will be rendered in this manner.


You are able to change the `settings`.


#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.



#### Sorting data 

You can `sort` the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).


#### Filtering data

You can apply filters by selecting the "filters" option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	


To display all records, click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-level drill down

- When more than one value is configured in Columns, drill down is enabled. Click a category to drill into the next level in the Columns hierarchy.

#### Drill up

Use the breadcrumb at the top of the widget to navigate back to the previous level after drilling down.

#### Adding Rows

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 


You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will generate a series of charts.


## How to format 100% stacked bar chart?

You can format the 100% stacked bar chart to better illustrate the view you require by using the settings available in the `Properties` pane.

To configure data into a 100% stacked bar chart, follow the steps:

1. Please drag and drop the 100% stacked bar chart onto the canvas and resize it to the size you need.

2. Configure the data into a 100% stacked bar chart.

3. Please focus on the 100% stacked bar chart and click on the widget settings.


The property window will be opened.


You can view the list of properties that are available for the widget with the default value.

#### General Settings


#### Name

This allows you to change the `title` for this area chart widget.


#### Subtitle

This area chart widget allows you to provide the `subtitle`.


#### Description

This allows you to provide the `description` about this area chart widget.


#### Basic Settings

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog.

- Chart Type: Switch the widget view from the current chart type to another convertible chart type.
- Secondary Axis: By default, the configured field is plotted on the primary axis. Enable this to plot the selected field on the secondary axis.


### Show Value in Tooltip

As it is a percentage type, values will be shown with percentages when you hover on the chart. If you enable this option, the value will be shown in the tooltip.


#### Enable Animation

It animates the measure values when you toggle `Enable Animation.`

#### Show Value Labels

This feature enables you to switch the visibility of value labels.



If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.


#### Value Label Color

This feature enables you to personalize the color of the value label.



#### Value Label Position

This option allows you to customize the position of the value label in a chart. By default, it is set to 'Auto,' so the label position for the percent stacked bar chart will be set as middle.


#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.


### Column width

You can decrease or increase the width of the column.



#### Column Spacing

You can decrease or increase the space of the column.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Tooltip Settings

The Tooltip Settings section allows you to customize the appearance and behavior of tooltips in widget visualizations.

#### Show Tooltip
This option allows you to toggle the visibility of tooltips in a chart.

#### Customize Tooltip
This option allows you to customize which columns are visible in the chart's tooltip.

#### Enable RTL
This option allows you to display fields and their data from right to left.

#### Apply Legend Color
This option allows you to display tooltip text and value colors that correspond with the legend colors.

#### Legend Settings


#### Show Legend

A legend is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting through the combo box.


Enabling the option of **Custom Legend Text** will allow you to define custom text (using the text area) to display for each legend series (selected from the combo box) in a chart.

#### Legend Interactivity

The chart's `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make the chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.


#### Legend Label Color

This allows you to change the title and label colors of the chart legend.



#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-v2-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This enables you to alter the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle.`


***Series Type***

This option allows you to change the shape of the legend in the `Series` section.


#### Legend Title

This allows you to add the legend title for the chart, which will be reflected with the `Show Legend` option.


#### Text Overflow

This option enables you to customize the legend text according to the value of the `Text Width` property.

***None***

This option allows you to render the legend items without wrapping or trimming them.



***Trim***

This option allows you to trim the legend items if their legend exceeds the `Text Width` value.



***Wrap***

This option allows you to wrap the legend items based on the value of `Text Width`.



#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if text-overflow is set as Trim or Wrap.



If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title**, are also hidden.

> **NOTE:** For a single series, the legend will not be visible.

#### Axis


This section allows you to customize the axis settings in the chart.

#### Title color

This allows you to customize the axis title color.


#### Label color

This allows you to customize the color of the axis label.


#### Show Category Axis

This enables the visibility of the `Category Axis`.


#### Category Axis Title

This allows you to edit the title of the `Category Axis` for the chart. It will be reflected as the name of the x-axis on the chart.


If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.


#### Label overflow mode

This allows you to control the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of the overlapping label on the axis.


***Hide***

This option hides the overlapping label on the axis.


#### Trim Axis Labels

This option allows you to trim the `axis` labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and it can also be customized when the `trim axis label` option is enabled.



#### Category Axis Label Rotation

This allows you to define the rotation angle for displaying the category axis labels.


#### Auto Interval and Interval


By default, the `Auto Interval` property is enabled. The Auto Interval property is used to automatically set intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then they need to disable the auto interval and set the required interval.


#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 


If you disable the `Show Primary Axis` option, dependencies properties which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.


### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and show the negative values at the top and positive values at the bottom. For example, when we bind the temperature data to the chart and want to display the negative values at the top, we can make use of this property.

When this property is enabled, the chart will display negative values on the top and positive values on the bottom.


#### Axis Range Settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog.


It will be reflected in the primary value axis of the chart.


### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/).

### Single Parameter Value:

A single value is stored in this type of parameter:

1. Create a dashboard parameter of type number as shown below.


Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (Only Number type parameter values are allowed).


Now, the parameter value is reflected on the chart axis.


### Range Parameter Value:

If you want to establish the same ranges in multiple cases, create a parameter value of the range type. This type of parameter includes both the start and end values.

1. Create a parameter of type range.


2. Please click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is divided into start and end parameters. The value entered in the first textbox is stored in the start parameter, while the value entered in the second textbox is stored in the end parameter. Please select a parameter value (only Number type parameter values are allowed).


3. The value of the parameter is reflected in the axis of the chart.


### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value should be based on the selected field value.


2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Then, select the parameter value.


3. The value of the parameter is reflected in the chart axis.


#### Axis Format

This option allows you to format the primary and secondary axis values using the formatting details provided in the Format button. For more information, refer to this measure format.


#### Grid Lines


#### Primary value Axis

This enables you to enable the gridlines for the `Primary Value Axis` in the 100% stacked bar chart.

 
#### Category Axis

This allows you to enable the gridlines for the `Category Axis` on the 100% stacked bar chart.


### Series Palette

This allows you to apply color to the chart series either using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will only be visible if you have configured the row section in the chart.


#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.


#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.


***Data***

It enables you to apply colors to chart series based on data. If you wish to assign a particular color to specific data (e.g., violet for 2021, sky blue for 2022, and green for 2020), you can utilize data-based color mapping. The default Color Mapping Type is set to `Data`.


***Index***

It allows you to apply color to chart series based on the `Index`, ensuring that the colors remain consistent even if the data is changed. Only 15 different colors are shown, after which the colors will repeat from the ones above.

For example, if you are displaying the countries based on the increasing order of the case count, index-based color mapping will be useful to set the colors based on the rank. For instance, assign the color red to the top-ranked country, and this color will be maintained for the country with the largest case count.


> **Note:** We prefer to use index-based color customization only for a minimum amount of data (up to 15 series).
 
### Formatting

> IMPORTANT: The Formatting section will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the color for the 100% stacked bar chart.

#### Advance settings

The Advance setting option will be enabled when only one column and one row is configured. You can refer more details from this section: /visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting

## How to apply conditional formatting

The color in the 100% stacked bar chart widget can be customized using the color settings available in the properties section. This will allow users to improve the visualization and distinguish the data based on conditional range values.

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

Enter the legend title for the 100% stacked bar chart.

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

### Font settings

This section allows you to customize the font size of chart elements.


#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. This property is used to automatically set the font size based on the resolution of the client machine viewing the dashboard. If the user wants to customize or set a fixed font size, they need to disable the auto font size and manually set the desired font size.

### Filter

This section allows you to handle the `filter` action for the 100% stacked bar chart widget.

#### Act as master widget

This allows you to define this 100% stacked bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this 100% stacked bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

#### Container Appearance


### Title Alignment

This allows you to handle the alignment of the widget title to either the **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

When Auto Font Size is enabled, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allow you to set the **background image** for the 100% Stacked Bar chart widget.

### Background Color

This allows you to set the **background color** to the 100% Stacked Bar chart widget.

### Transparency

This property allows you to specify the **transparency** for the background color.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions


#### Show Header

This allows you to enable or disable the `widget title` of the 100% Stacked Bar chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the 100% Stacked Bar chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart X-axis labels, X-axis titles will be hidden.


When the chart has been placed with less than 6 rows, chart Y-axis labels, Y-axis titles and gridlines will be hidden.

