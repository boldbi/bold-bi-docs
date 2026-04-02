---
layout: post
title: Column Chart V2 – Embedded BI Visual | Bold BI Documentation
description: Learn how to add a Column Chart V2 visual to Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-v2-widgets/column-chart/"
platform: bold-bi
control: Column Chart
documentation: ug

---

# Column Chart

A `column chart` allows you to compare values for a set of unordered items across categories using vertical bars that are arranged horizontally.

![Default Column chart](/static/assets/visualizing-data/visualization-v2-widgets/images/column-chart/column-chart-view.png)

## How to configure the table data to column chart

A `Column chart` requires at least one value element and one column element in order to be displayed. The measure column or expression column that you want to analyze can be placed in the values block. The dimension column that you want to use to categorize the measure column can be placed in the columns block. If you want to categorize based on a series column, then the corresponding dimension column can also be placed in the rows block. These blocks are combined in the Data pane.

The following steps explains the data configuration of column chart:

1.	Drag and drop the icon for the `column chart control` from the toolbox into the design panel. You can locate the control in the toolbox by searching for it.


2.	Please resize the widget as necessary.


3.  Click the `Data Source` button in the configuration panel.


4.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.


5.  In the connection type panel, click on any one of the listed connection type buttons. (Here, the `Microsoft Excel` connection type is selected for demonstration.)


6.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Then, click the `Preview & Connect` button.


7.  Please drag and drop your preferred table or view from the left pane in the data design view, and then click the `Save` button.


8.	Please click the `Properties icon` in the configuration panel.


9.	The `properties` panel of the widget will be displayed as shown in the screenshot below.


10.  Now, switch to the `ASSIGN DATA` tab.


11.	The `ASSIGN DATA` tab will be opened with the available columns from the connected data source.

### Adding fields to Value(s)

To bind a column, drag and drop the element from the sections to the `values` section.


> **IMPORTANT:**  
> * The field added in this section will act as a measure value.
> * This section is mandatory for the widget visualization, and an unlimited number of fields can be configured in it.

### Settings menu options

You can `filter` and `format` the data displayed in the widget from the options in the settings menu. To open the `settings menu`, click the `settings icon`.

The following screenshots show the various options in the settings menu, which are based on the type of field configured in the type section. 


#### Renaming fields

The field names that have been configured can be edited by utilizing the `Rename` option which is available in the settings menu.


#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu, as shown in the following screenshot. Please refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.


#### Filtering data

You can change the values by selecting the Filter option and using `Filters`. For more details, refer to the [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).


#### Removing the fields

To remove the added value fields, click on the highlighted button.


### Adding fields to Column(s)

Please drag and drop the elements from the sections into the columns.


> **IMPORTANT:**  
> * The field added in this section will function as a dimension value.
> * It is an optional section, and adding more than one value will enable drill down.

#### Settings 

You are able to change the `settings`.


#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.


#### Sorting

You can sort the dimension data using the `Sort` option in the Settings menu. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).


#### Filtering data

You can apply a filter by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).


The chart will be displayed in this manner.


Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Drill down

When a second value is added to the Columns section, you will be prompted to enable drill down. Click Yes to enable.

Once enabled, clicking a category will drill into the next level based on the Columns hierarchy.

#### Drill up

After drilling down, use the breadcrumb at the top of the widget to navigate back to the previous level.

### Adding fields to Row

Please drag and drop the elements from the sections to the `Row`.



#### Adding tooltip fields

You can configure the `tooltip section` to display additional information in the widget's tooltip without impacting the visualization. Please refer to this section for further details on how to configure the [tooltip fields](/visualizing-data/working-with-widgets/tooltip-customization/).

## How to format column chart widget

You can format the column chart to better illustrate the view you require using the settings available in the `Properties` tab.

### General settings


#### Name

This feature allows you to set the `title` for the column chart widget.


#### Subtitle

This allows you to set the `subtitle` for this column chart widget.


#### Description

This feature enables you to set a `description` for the column chart widget.


### Basic settings

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog.

-- Chart Type: Switch the widget view from the current chart type to another convertible chart type.
-- Secondary Axis: By default, the configured field is plotted on the primary axis. Enable this to plot the selected field on the secondary axis.

#### Enable animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show value labels

This feature enables you to toggle the visibility of value labels.


If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.


#### Value Label Color

This allows you to customize the color of the value label.



### Value Label Position

This option allows you to customize the position of the value label in the chart. By default, it is set to 'Auto,' so the label position for the column chart will be set to the Top.


#### Value label rotation

This allows you to define the `rotation angle for the value labels` to be displayed.


#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width`.



#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing`.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Tooltip Settings

The Tooltip Settings section allows you to customize the appearance and behavior of tooltips in widget visualizations.

#### Show Tooltip
This option enables you to toggle the visibility of the tooltip in the chart.

#### Customize Tooltip
This option allows you to customize which columns are visible in the chart's tooltip.

#### Enable RTL
This option allows you to display fields and their data from right to left.

#### Apply Legend Color
This option allows you to display tooltip text and value colors that correspond with the legend colors.

### Legend Settings


#### Show legend

A legend is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting through a combo box.


Enabling the Custom Legend Text option will allow you to define custom text (using the text area) to display for each legend series (selected through the combo box) in the chart.

#### Legend Interactivity

The chart's `legend interactivity` option allows you to control the behavior of the chart legends. This option provides the ability to make chart legends non-clickable, which can be particularly useful in situations where you do not want users to be able to hide or show series data by clicking on the legend. This feature might also be beneficial when presenting crucial data that should always be visible for accuracy and context.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.


### Legend Label Color

This allows you to change the chart legend title and label colors.



#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Alignment

The Legend Alignment allows you to adjust the alignment of the legend within its designated area. You can choose from four alignment options: **Near, Center, Far,** and **None**.

For further legend's placement details are in the below table.

<table>
<tr><td>
<b>Alignment
</b></td><td><b>
Description</b></td>
</tr><tr><td>
Near</td>
<td>
Aligns the legend to the start (top or left, depending on position).</td>
</tr><tr><td>
Center</td>
<td>
Positions the legend in the middle of the available space.</td>
</tr><tr><td>
Far</td>
<td>
Aligns the legend to the end (bottom or right, depending on position).</td>
</tr><tr><td>
None</td>
<td>
Leaves the legend unaligned, allowing default rendering.</td>
</tr></table>

This enhancement allows users to control both the position and alignment of the legend, providing greater flexibility in customizing the chart’s appearance to meet specific design or layout needs.

When Position is set to `Auto` and Alignment is set to `None`, the legend will be displayed as shown in the image below.


When Position is set to `Top` and Alignment is set to `Near`, the legend will be displayed as shown in the image below.


You can similarly customize position and alignment in various scenarios.

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle.`


***Series Type***

This option allows you to change the shape of the legend in `Series.`


#### Legend Title

This allows you to add the legend title for the chart, which will be reflected with the `Show Legend` option.


#### Text Overflow

This option allows you to customize the legend text based on the value of the `Text Width` property.

***None***

This option allows you to render legend items without wrapping or trimming them.



***Trim***

This option allows you to trim the legend items if their legend exceeds the value of `Text Width`.



***Wrap***

This option enables you to wrap legend items according to the value of `Text Width`.



#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if text-overflow is set to Trim or Wrap.



If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** In a single series, the legend will not be visible.

#### Axis Format

This option enables you to format the values of the primary and secondary axes using the provided formatting details accessed through the Format button. For more information, please refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).


### Axis settings

This section allows you to customize the axis settings in the chart.


#### Title color

This enables you to personalize the color of the axis title.


#### Label color

This feature allows you to customize the color of the axis labels.


#### Show category axis

This feature allows you to toggle the visibility of the category axis.


If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option, will be hidden.


#### Category axis title

This allows you to edit the category axis title for chart. It will reflect in x-axis name of chart.



If we uncheck the `Show Axis Title` property, the property for the Axis title text box will be hidden.


#### Label overflow mode

This feature enables you to manage the display mode of the overlapping labels on the category axis.

#### Trim

This option trims the end of the overlapping label on the axis.


#### Hide

This option trims the end of the overlapping label on the axis.


#### Trim Axis Labels

This option allows you to trim the axis labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and it can also be customized when the `trim axis label` option is enabled.



#### Category axis label rotation

This allows you to define the rotation angle for displaying the category axis labels.


#### Auto Interval and Interval


By default, the `Auto Interval` property is enabled. The Auto Interval property is used to automatically set intervals based on the number of data points for category axis labels. If the user wants to customize the interval, they need to disable the auto interval and set the desired interval.


#### Primary value axis

This allows you to enable the primary value axis for the chart.


If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.


#### Primary axis title value

This allows you to edit the title of the primary value axis, which will be reflected as the name of the y-axis in the chart.


### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display the negative values at the top and positive values at the bottom. For example, when we bind temperature data to the chart and want to display the negative values at the top, we can utilize this property.

Enabling this property will result in the display of negative values at the top of the chart and positive values at the bottom.


### Axis Type

This enables you to modify the axis type in the column chart.

### Linear

This option enables you to set the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale, which is very useful in visualizing data with values of both lower and higher orders of magnitude (e.g., 10-6 and 106).

### Axis range settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the Axis Range Settings dialog.


It will be reflected in the primary value axis of the chart.


### Parameter Support in Axis range:

This feature enables you to dynamically set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog, using the dashboard parameter values. Only number-type dashboard parameter values are permitted in the axis range properties. It is possible to create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameter/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in the number type as shown below.


Click the axis range settings dialog and enter `@` in the textbox. Select the parameter value (Numeric parameter values are only allowed in the **minimum**, **maximum**, and **interval**).


Now, the parameter value is reflected on the chart axis.



### Range Parameter Value:

If you want to set the same ranges in multiple cases, create the parameter value of type range. This type of parameter includes the start and end values.

1. Create a parameter of the range type.


2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The value from the first textbox is stored in the start parameter, and the value from the second textbox is stored in the end parameter. Select the parameter value (only number type parameter values allowed).


3. The parameter value is reflected in the chart axis.


### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type where you can choose any field. The value of the parameter will be based on the selected field value.


2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum and interval**). Select the parameter value.


3. The value of the parameter is reflected in the axis of the chart.


#### Axis Format

This option allows you to format the values for the primary and secondary axes using the formatting details provided through the Format button. For more information, please refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).


### Gridlines

You can toggle the visibility of each axis gridlines using the property.


#### Primary Value Axis

This enables you to enable the gridlines for the `Primary Value Axis` in the column chart.


#### Secondary value Axis

This allows you to enable the gridlines for the `Secondary Value Axis` in the column chart.


#### Category Axis

This allows you to enable the gridlines for the `category axis` in the column chart.


### Formatting

> IMPORTANT: The Formatting section will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the color for the column chart.

It will be reflected in the column chart.

#### Advance settings

The Advance setting option will be enabled when only one column and one row is configured. You can refer more details from this section: /visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting

## How to apply conditional formatting

The color in the Column chart widget can be customized using the color settings available in the properties section. This will allow users to improve the visualization and distinguish the data based on conditional range values.

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

Enter the legend title for the column chart.

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

This section enables you to personalize the font size of chart elements.


#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The Auto font size property is used to set the font size based on the resolution of the client machine viewing the dashboard. If the user wants to customize or set a fixed font size, then the user needs to disable the auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the column chart widget.

#### Act as master widget

This allows you to define this column chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this column chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the column chart widget.


### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

By enabling Auto Font Size, the title's font size will be adjusted automatically depending on the screen resolution.

**Font Size**

This allows you to apply the specified font size to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

### Subtitle Auto Font Size

When Auto Font Size is enabled, the subtitle's font size will be automatically adjusted according to the screen resolution.

**Font Size**

This allows you to apply the specified font size to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will be automatically adjusted if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can range from 0 to 25.

### Show Border

This feature allows you to toggle the visibility of the **border** surrounding the widget.

### Corner Radius

This allows you to apply the specified **radius** to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This feature allows you to set the **background image** for the column chart widget.

### Background Color

This allows you to set the **background color** to the column chart widget.

### Transparency

This property allows you to specifies the **transparency** for the **background color**.

### Show Shadow

This feature allows you to switch the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the **container actions** for the column chart widget.


#### Show Header

This allows you to enable or disable the **widget title** of the column chart. 

#### Allow Maximize View

This allows you to enable or disable the **maximized mode** of the column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the **CSV export** option for the column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the **Excel export** option for the column chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the column chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the **PDF export** option for the column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.


When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

