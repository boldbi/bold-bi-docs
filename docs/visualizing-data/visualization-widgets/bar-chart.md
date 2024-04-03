---
layout: post
title: Bar Chart - Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Bar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/bar-chart/"
platform: bold-bi
control: Bar Chart
documentation: ug

---

# Bar Chart

`Bar chart` allows you to compare values for a set of unordered items across categories through horizontal bars ordered vertically.

![Default Bar chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/barchart.png)

## How to configure the table data to bar chart

The `Bar chart` needs a minimum of one value element and one column element to showcase. The `measure` column or `expression` column that you would like to analyze can be dropped into the values block. The dimension column that you would like to categorize the measure column can be dropped onto the columns block. If you would like to categorize based on a series column, then the respective dimension column can be dropped onto the Rows block in addition. These blocks are composed into a data pane.

The following steps explains the  data configuration of bar chart:

1.   Drag and drop the `column chart control` icon from the toolbox into the design panel. You can find the control in toolbox by search.

![Adding column chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/drop-widget.png)

2.	Resize the widget as required.

![Resizing widget in design panel](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/resizing.png)

3.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

4.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

5.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button.

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

6.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

7.  Drag and drop your preferred table or view from the left pane from the data design view, and click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

8.	Click the `Properties icon` in the configuration panel.

![Click properties icon](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

9.	The `properties` panel of the widget will be displayed as shown in the following screenshot.

![Properties pane](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/assign-data.png)

10.  Now, switch to the `ASSIGN DATA` tab.

![Properties pane](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

11.	The `ASSIGN DATA` tab will be opened with the available columns from the connected data source.

### Adding fields to Value(s)

Bind column by dragging and dropping the element from sections to `values.`

![Add value field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/add-measure.png)

> **IMPORTANT:**  
* The field added in this section will act as a measured value. 
* It is a mandatory section for the widget visualization and any number of fields can be configured in this section.

### Settings menu options

You can `filter` and `format` the data displayed in the widget from the settings menu options. To open the `settings menu,` click the `settings icon.`

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Numeric field settings menu](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/settings-menu.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Changing the aggregation](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/settings.png)

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/format-option.png)

#### Removing the fields

To remove the added value fields, click the highlighted button.

![Removing  Fields](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/removebutton.png)

### Adding fields to Column(s)

Drag and drop the elements from sections to columns.

![Add column field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/adding-columns.png)

> **IMPORTANT:**  
* The field added in this section will act as a dimension value. 
* It is an optional section and adding more than one value will enable drill down.

#### Settings 

You can change the `Settings.`

![Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rename.png)

#### Sorting

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/sort-option.png)

#### Filtering data

You can apply filter by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filter-option-column.png)

The chart will be rendered like this,

![Adding column field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/barchart.png)

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Drill down

On adding the second value to the Columns section, the alert message will be shown.

![Drill confirmation alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

Click `Yes` to enable the option. If you click `No,` a single value will be added to the Columns section.

*Figure: Chart with a drilled view of the selected region.*

![Drilled view](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/drilled-view.png)

### Adding fields to Row

Drag and drop the elements from sections to `Row.`

![Add row fields](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-row.png)

![Chart view with row configured](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/configured-widget.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data).  

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/info-icon.png)

The below chart displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, and individual column is split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/after.png)

#### Adding tooltip fields

You can configure the `tooltip section` to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to this section for more details on configuring the [tooltip fields](/visualizing-data/working-with-widgets/tooltip-customization/).

## How to format bar chart widget

You can format the bar chart for better illustration of the view that you require using the settings available in `Properties` tab.

![Property Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/property-window.png)

### General settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/property.png)

#### Name

This allows you to set `title` for this bar chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/Name.png)

#### Subtitle

This allows you to set `subtitle` for this bar chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/subtitle.png)

#### Description

This allows you to set a brief explanation about this bar chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/Description.png)

### Basic settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/tooltip.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart type and axis settings dialog](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-type.png)

**Chart Type**: This allows you to switch the widget view from current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis, if you enable this option, the selected field will be plotted as the secondary axis. 

![Secondry axis in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/secondary-axis.png)

#### Enable animation

It animates the measure values by toggling the `Enable Animation`.

#### Show value labels

This allows you to toggle the visibility of value labels.

![Value labels in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-value-label.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Value labels customization change](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/value-label-customization.png)

![Value labels customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/value-label-change.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/label-color-change.png)

### Value Label Position

This option allows you to customize the value label position in the chart. By default, it is set to ‘Auto,’ so the label position for area chart will be set as Top.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-valuelabelposition.png)

#### Value label rotation

This allows you to define the `rotation angle for the value labels` to display.

![Rotated labels](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/label-rotation.png)

#### Value label suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Labels with suffix](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/suffix-label.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use label rotation property to visible the label.

#### Show items with no data

This allows you to show data, which column does not have value.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is null or undefined when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-zero.png)

### Average

This option displays the null or undefined values with the average value.

![Empty Point Mode Average](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-average.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width.`

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-width-customization.png)
   
![Column Width](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing.`

![Column Spacing Customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-space-customization.png)

![Column Spacing](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-spacing.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Page Size

This option allows you to set number of records needs to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-settings.png)

#### Show legend

A `Legend` is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).

![chart legends](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-legend.png)

Enabling this option of `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in a chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-interactivity-enable.png)

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-customization.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-customization-change.png)

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.
 
The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-as-dropdown.png)

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-title.png)

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

***None***

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-width.png)


If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-format.png)

### Link

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/linking.png)

### Axis settings

This section allows you to customize the axis settings in chart.

![Chart axis properties](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-settings.png)

#### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-title-color.png)

#### Label color

This allows you to customize the axis label color.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-label-color.png)

#### Show category axis

This allows you to toggle the visibility of category axis.

![Category axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-categoryaxis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-axis.png)

#### Show category axis title

This allows you to toggle the visibility of category axis title.

![Category axis title visibility](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-axis-title.png)

#### Category axis title

This allows you to edit the category axis title for chart. It will reflect in x-axis name of chart.

![category axis title](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-title-edit.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-axis-title-prop.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the category axis.

#### Trim

This option trims the end of overlapping label in the axis.

![Trimmed label overflow](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trim.png)

#### Hide

This option hides the overlapping label in the axis.

![Hidden label overflow](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trim-axis-labels.png)

#### Category axis label rotation

This allows you to define the rotation angle for the category axis labels to display.

![Rotated category axis labels](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. The Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-interval.png)

#### Primary value axis

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/primary-axis.png)

This allows you to enable the primary value axis for chart.

![Chart primary axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-primary-value-axis.png)

#### Show primary axis title

This allows you to enable the visibility of primary value axis title of chart.

![Primary axis title visibility](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-primary-value-axis-title.png)

#### Primary axis title value

This allows you to edit the primary value axis title. It will reflect in y-axis name of chart.

![Primary axis title value](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/edit-axis-title.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/inverseaxis.png)

### Axis range settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the Axis Range Settings dialog.

![Axis range settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-range.png)

It will reflect in the primary value axis of the chart.

![Modified ranges](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/modified-ranges.png)

### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in number type like below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/parameter.png)

Click the axis range settings dialog and enter `@` in the textbox. Select the parameter value(Numeric parameter values only allowed in the **minimum**, **maximum and interval**).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/minparam.png)

Now the parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/barmin.png)


### Range Parameter Value:

If you wish to set the same ranges in multiple cases, create the range type parameter value. This type of parameter has the start and end values.

1. Create a parameter in range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. First textbox value is stored in the start parameter, and the second textbox value is stored in the end parameter. Select the parameter value (Number type parameter values only allowed)..

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rangeaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value is based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/datasource.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum and interval**). Select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/datasourceaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/datasourcemin.png)

### Axis Type

This allows you to change the type of axis in the Bar chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-format.png)

### Gridlines

You can toggle the visibility of the each axes gridlines visibility using the property.

![Grid line properties](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chartgridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the bar chart.

![Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/primary-gridlines.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the bar chart.

![Secondary value Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/secondary-gridlines.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the bar chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/category-axis.png)

### Trendline

You can add more than one trendline to Cartesian charts except for bar type series(Line, Column, Area, Spline) and stacked type of charts. You can **add, edit,** and **delete** trendlines.

![Trendline](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-settings.png)

### Add Trendline and Edit Trendline

To add the trendline, click the highlighted button.

![Trendline Add](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-add.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendlinedialog.png)

Click `OK` button to add trendline in a bar chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline.png)

To edit the trendline select the one to be edited and click the highlighted button.

![Trendline Edit](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-edit.png)

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

![Trendline Delete](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-delete.png)

### Formatting

> **IMPORTANT:** The `Formatting section` will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the `color` for the bar chart.

![Format Colors](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatting-color.png)

It will reflect in the bar chart.

![Formating Data Colors](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatting-color-change.png)

#### Advance settings

The `Advance setting` option will be enabled when only one column and one row is configured. You can refer more details from [this section](/visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting).

![Advance color settings](/static/assets/visualizing-data/visualization-widgets/images/column-chart/advanced-colors.png)

## How to apply conditional formatting

Color in the Bar chart widget can be customized using the color settings available in the `properties` section. This will allow the users to improve the visualization in a bar chart and to distinguish the data based on conditional range values that will let the visualizer to understand what is shown in data.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, check the `Advanced Setting` check box.

2. This will open the `Conditional Formatting` dialog.

![Conditional formatting dialog](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatting-dialog.png)

3. Select the mode and enter the conditions as required and click the `save` button to apply.

![Applying the conditions](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/apply-conditions.png)

4. Now, the widget visualization will be updated based on the conditions.

![After applying conditional formatting](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatted-result.png)

Refer to the following sections for the detailed steps on using the [Gradient](/visualizing-data/visualization-widgets/column-chart/#gradient-mode), [Rule](/visualizing-data/visualization-widgets/column-chart/#rule-based-condition-mode) and [individual](/visualizing-data/visualization-widgets/column-chart/#individual-mode) modes. 

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

![rule mode](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rule-mode.png)

#### Value type

The value type drop-down allows you to choose whether you are going to apply the direct value (specific number like 3 goals, order ID 10248) or percentage (values above 30% or 50 %).

#### Condition name

You can give a meaningful name to the applied conditions.

#### Condition type

Choose the condition for measure field from the highlighted 
conditions.

![numeric condition types](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/numeric-condition.png)

If you selected the dimension as a `based-on field` and want to use text condition, the following text-based conditions are available.

![text conditions](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/text-condition.png)

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

![Individual mode](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/individual-mode.png)

#### Color Mapping Type

Using Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data, you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

#### Color

You can choose the color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset`.

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/color-mapping-type.png)

#### Color Mapping Type

Using Color Mapping type, We can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If we are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the spline area chart widget.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filter.png)

#### Act as master widget

This allows you to define this bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the bar chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

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

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the bar chart widget.

### Background Color

This allows you to set the **background color** to the bar chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the `Container actions` for the bar chart widget.

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart X-axis labels, X-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/X-axis-label.png)

When the chart has been placed with less than 6 rows, chart Y-axis labels, Y-axis titles gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/Y-axis-label.png)