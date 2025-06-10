---
layout: post
title: Spline Area Chart – Embedded Dashboard Widget | Bold BI Docs
description: Learn how to create a Spline Area Chart widget in Bold BI embedded dashboard (analytical,operational, or strategic), configure data fields and others.
canonical: "/visualizing-data/visualization-widgets/spline-area-chart/"
platform: bold-bi
control: Spline Area Chart
documentation: ug
---

# Spline Area Chart

The Spline Area chart allows you to showcase the difference between the minimum and maximum values over a certain time period, with data points connected by smooth curves.

![Spline Area Chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/spline-area-chart.png) 

## How to configure the table data to spline area chart?

To configure data for a Spline Area chart, you need at least 1 value element and 1 column element. The `measure` or `expression` field you want to analyze can be dropped into the Y values block. The `dimension` you want to categorize the measure can be dropped onto the Columns block. If you want to categorize based on a series, then the respective dimension can be dropped onto the Rows block in addition.

Follow these steps to configure data for a Spline Area Chart:

1.  Drag and drop the control to the canvas and resize it to your required size.

![Drag and drop the control](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/add-splineareachart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button.

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, and click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Spline Area assign data](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-assigneddata.png)

8.  The `ASSIGN DATA` tab will be opened with the available measures and dimensions from the connected data source.

![chart data](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chartdata.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

### Adding Values

You can add more than one `Measure` into the `Values` field by dragging and dropping the required measure.

![Add more than one Measures](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/add-measures.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Changing the aggregation type

Click the `Settings` option to change the name and the required summary type from the available summary types shown in the Settings.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-settings.png)

#### Filtering data

You can filter the data to be displayed in the funnel chart by using the `Filter` option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/widget-filters.png)

#### Measure formatting

You can format the data to be displayed in the chart by using the `Format` option. For more details, refer to [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/formatting-measure.png)

To remove the added value fields, click the highlighted button.

![Click highlighted button](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/remove-fields.png)

You can add more than one column from the `Dimensions` field into the `Values` field.

### Adding Columns

You can add more than one value into the `Columns` field.

![Add more than one value into Columns](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/adding-columns.png)

Spline Area chart will be rendered like this,

![Spline Area chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/spline-area-chart-sample.png)

#### Settings 

You can change the `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/rename.png)

#### Sorting

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/sort-settings.png)

#### Filtering data

You can apply filters by selecting the `Filter(s)` option in the settings. For more details, refer to [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/configuring-filter.png)

*After Filtering data*

![Filtering data](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/filter-data.png)

To show all records, click on `Show All Records`.

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Columns` field.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view of the chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/linedrill.png)

### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Drag and drop the Dimension](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-row.png)

You can apply the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render the spline area chart in a series.

![SplineAreachart_series](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-series.png)

## Hidden Column

Hidden columns are useful in cases where we don’t want the fields to take part in the visualization, but only to be used for  [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/info-icon.png)

The chart below displays the goals and attempts on target by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and row field data, the data configured in the widgets get duplicated, and individual columns are split based on the hidden column field. This affects the chart visualization, as we can see in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/after.png)

## How to format spline area chart?

You can format the spline area chart for better illustration of the view that you require through the settings available in the `Properties` tab.

To configure the data into a spline area chart, follow these steps:

1. Drag and drop the spline area chart onto the canvas and resize it to your required size.

2. Configure the data into the spline area chart.

3. Focus on the spline area chart and click on the widget settings.

![Spline Area widget settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-widgetsettings.png)

The property window will open:

![Property window](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-properties.png)

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/property.png)

#### Name

This allows you to change the `title` for this spline area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/Title.png)

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/subtitle.png)

#### Description

Allows you to provide a `description` about this spline area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/Description.png)

### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/tooltip.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type` and `Axis Settings` dialog. 

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

This allows you to enable the `animation` property. It animates by the measure values.

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-value-labels.png)

If you disable the `Show Value Labels` property, the dependent properties, which are **color**, **value label position**, **value label rotation**, and **value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Show Value Labels Customization OPtion](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/label-customize.png)

![Show Value Labels Customization](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/label-customize-values.png)

### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/data-label-color.png)

### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the spline area chart will be set to Top.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/valuelabelposition.png)

### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-showlabelrotation.png)

### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

### Suffix Value

This allows you to customize the suffix value of value labels.

![Value Label Suffix](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/label-suffix.png)

> **Note:** When the height and number of data in the chart are increased, the value label may be hidden. Use the label rotation property to make the label visible.

### Show Marker

This allows you to toggle the visibility of the `marker` from the label to adorn each data point in a chart series.

![Show Marker](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-marker.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Page Size

This option allows you to set the number of records that need to be fetched on the initial load.

### Show Items With No Data

By default, the chart doesn’t display the columns with null or empty values.

![Chart Default](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-default.png)

If you enable the `Show Items With No Data` property, then the columns with null data will be displayed in the chart.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode for empty points with the properties `Gap`, `Zero`, `Average` and `Connect`.

![Empty Point Mode Options](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-options.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-gap.png)

### Zero

This option allows you to show the null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-zero.png)

### Average

This option allows you to display the null or undefined values as an average.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-average.png)

### Connect

This option ignores the empty values and connects the remaining points.

![Empty Point Mode Connect](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-connect.png)

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-settings.png)

#### Show Legend

A legend is text used to describe the plotted data. This allows you to toggle the visibility of the legend in a chart and also change the legend text position (selecting through the combo box). 

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define custom text (through the text area) to display for each legend series (selected through the combo box) in a chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-interactivity-enable.png)

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels on the left and corresponding text area on the right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.
 
The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-as-dropdown.png)

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle`.

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series`.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend`.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-legendtitle.png)

#### Text Overflow

This option allows you to trim the legend items if the legend exceeds the `Text Width` value.

***None***

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the `Text Width` value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button**, and **Legend title** are also hidden.

> **NOTE:** For single series, Legend won't be visible.

### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/link.png)

### Axis Settings

This section allows you to customize the `axis settings` in a chart.

![Axis Settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/axis-settings.png)

### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/title-color.png)

### Label color

This allows you to customize the axis label color.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/label-color.png)

#### Show Axis Border

This option allows you to enable or disable the axis border of the chart.

![Show axis border](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-axis-border.png)

### Show Category Axis

This allows you to enable the visibility of the `Category Axis`.

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependency properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation**, and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-axis.png)

### Show Category Axis Title

This allows you to enable the visibility of the `Category Axis` title.

![Show Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-categoryaxis-title.png)

### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-axis-title.png)

### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`.

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-category-trim-axis.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/hide-label.png)

#### Trim Axis Labels

This option allows you to trim the axis labels, based on the **Maximum Label Width** property value.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels and it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/trimming-label.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/label-rotation.png)

### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on a number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart. 

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/show-primary-value.png)

If you disable the `Show Primary Axis` option, dependent properties, which are **Axis title**, **Axis title text**, **Axis type**, and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of the chart.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of the chart. 

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/primary-value-axis-title.png)

### Inverse Axis

By default, the chart axis shows positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For example, when we bind the temperature data to the chart and want to display the negative values on the top, we can make use of this property.

On enabling this property, the chart negative values will display on the top and positive values will display on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/inverseaxis.png)

#### Axis Type

This allows you to change the type of axis in a spline area chart.

***Linear***

This option allows you to handle the type of axis as linear.

***Logarithmic***

This option allows you to handle the logarithmic axis uses logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (eg: 10-6) and higher order of magnitude (eg: 106). 

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/formatting-button.png)

### Axis Range Settings

This allows you to manually set the **Minimum, Maximum,**  and **Interval** values of the primary value axis through the `Axis Range Settings` dialog.

![Axis Range Customization](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-axisrange-settings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Settings output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-axisrange-output.png)

### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in number type like below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/parameter.png)

Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/minparam.png)

Now the parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareamin.png)

### Range Parameter Value:

If you wish to set the same ranges in multiple cases, create the range type parameter value. This type of parameter has the start and end values.

1. Create a parameter in range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The value in the first textbox is stored in the start parameter, and the value in the second textbox is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/rangeaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value is based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/datasource.png)

2. Click the axis range settings dialog and enter @ in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/datasourceaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/datasourcemin.png)

### Grid Line

You can toggle the visibility of the each axis gridlines visibility using the property.

![Grid Line](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/chart-gridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the spline area chart.

![Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/enable-primary-value-axis.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart.

![Secondary value Axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachartsecondaryaxis.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the spline area chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/category-axis.png)

### Formatting

This allows you to change the `color` for the spline area chart.

![Format Colors](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/formatting.png)

It will reflect in the spline area chart.

![Formating Data Colors](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/formatting-color.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggling off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data (i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data-based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/spline-area-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on the index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/spline-area-chart-index-based-color.png)

> **Note:** We prefer to use Index-based color customization only for minimum data (up to 15 series).

### Font Settings 

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The Auto font-size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set a fixed font size, then the user needs to disable auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the spline area chart widget.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/filter.png)

**Act as Master Widget**

This allows you to define this chart widget as a `master widget` such that its filter action can be made to listen to by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this chart widget to ignore responding to the filter actions applied on other widgets in the dashboard.

**Enable Hierarchical Filter**

Through this option, you can enable or disable hierarchical `top N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added. 

When the `Enable Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Trendline

You can add more than one trendline to Cartesian charts except for bar type series (Line, Column, Area, Spline) and stacked type of charts. You can **add**, **edit**, and **delete** trendlines.

![Trendline](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendline.png)

#### Add Trendline and Edit Trendline

To add the trendline, click the highlighted button.

![Trendline Add](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendlineadd.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendlinedialog.png)

Click `OK` button to add a trendline in a spline area chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendlinechart.png)

To edit the trendline select the one to be edited and click the highlighted button.

![Trendline Edit](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendline-edit.png)

Again, the trendline dialog window opens now.

***Legend Text***

You can edit the trendline legend by the `Legend Text` text box. By default, the `Legend Text` renders are based on the Line type and Series name.

***Series***

You can change the series to which series have to show the trendline by `Series` dropdown option. 

***Line Type***

You can select the line type by the `Line Type` dropdown option (Linear, Exponential, Logarithmic, Power, and Polynomial).

***Line Color***

You can change the color of the trendline by the `Line Color` color picker.

***Line Style***

You can change the style of the trendline by the `Line Style` drop-down option (Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot).

#### Delete Trendline

To delete the trendline, select the one to be deleted and click the highlighted button.

![Trendline Delete](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendline-delete.png)

### Container Appearance

This Section allows you to customize the `Container Appearance` for the spline area chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/container-appearance.png)

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

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/container-actions.png)

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

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/Y-axis-label.png)

When the chart has been placed with fewer than 6 rows, chart X-axis labels, X-axis titles, and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/spline-area-chart/X-axis-label.png)