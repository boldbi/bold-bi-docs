---
layout: post
title: Stacked Column Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Stacked Column Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/stacked-column-chart/"
platform: bold-bi
control: Stacked Column Chart
documentation: ug
---

# Stacked Column Chart

Stacked Column Chart allows you to compare multiple measures through bars stacked one after the other vertically.

![Stacked Column Chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.png)

## How to configure the table  data to stacked column chart?

Stacked Column Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explain how to configure data to the stacked column chart:

1.  Drag and drop the stacked column chart to a canvas and resize it to your required size.

![Stacked Column Chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/add-stackedcolumnchart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Datasource button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked column assign data](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in the `Settings.`

![summary type](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in chart by using filter. For more details, refer [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter options](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Measure formatting](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/format-option.png)

To remove the added value fields click highlighted button.

![Highlight button](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Stacked column chart values](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/adding-columns.png)

Chart will be rendered like this

![Stacked column chart output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.png)

You can change the `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/rename.png)

#### Sorting data

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort dimension](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting filters option in settings. For more details, refer [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Selecting filters](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill Alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Stacked column chart drill](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumndrills.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Show All Records](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-row.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Chart illustration](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart-seriesview.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/dimension.png)

![Date](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/info-icon.png)

The below chart displays the goals and Attempts On Target by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, and individual column is split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/after.png)

## How to format stacked column chart?

You can format the stacked column chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into stacked column chart follow the steps

1. Drag and drop the stacked column chart into canvas and resize it to your required size.

2. Configure the data into stacked column chart.

3. Focus on the stacked column chart and click on widget settings.

![Widget Setting](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/widget-setting.png)

The property window will be opened.

![Property window](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/property.png)

#### Name

This allows you to set `title` for this stacked-column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/title.png)

#### Subtitle

This allows you to set `subtitle` for this stacked-column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/subtitle.png)

#### Description

This allows you to set a brief explanation about this stacked-column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/Discription.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/tooltip.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart type and axis settings dialog](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-type.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis.

![Secondry axis in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/secondary-axis.png)

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of the value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-value-label.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Value labels customization change](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-value-label-customization.png)

![Value labels customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/value-label-change.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the stacked column chart will be set to Middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/valuelabelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/showlabelrotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix Value](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/suffix-value.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use label rotation property to visible the label.

#### Show items with no data

This allows you to show data, which column does not have value.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is null or undefined when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Average](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-average.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width.`

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-width-customization.png)

![Column Width](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing.`

![Column Spacing Customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-spacing-customization.png)

![Column Spacing](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-space.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Page Size

This option allows you to set number of records needs to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in a chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-interactivity-enable.png)

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-change.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-customization.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-customization-change.png)

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.
 
The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-as-dropdown.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-title.png)

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

***None***

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-format.png)

#### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/linking.png)

#### Axis

![Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/title-color.png)

#### Label color

This allows you to customize the axis label color.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/label-color.png)

#### Show Category Axis

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-category-axis-title.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-categoryaxis.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/trimming-axis-labels.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If the user wants to customize the interval, then the user needs to disable auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-primary-value-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-primaryaxis.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-axisrange.png)

It will reflect in the primary value axis of the chart.

![Axis Range settings output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axisrange-output.png)

### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in number type like below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/parameter.png)

Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum and interval**). Select the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/minparam.png)

Now the parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnmin.png)

### Range Parameter Value:

If you wish to set the same ranges in multiple cases, create the range type parameter value. This type of parameter has the start and end values.

1. Create a parameter in range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. First textbox value is stored in the start parameter, and the second textbox value is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/rangeaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value is based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/datasource.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum and interval**). Select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/datasourceaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/datasourcemin.png)

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-format.png)

#### Grid Lines

![Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the stacked column chart.

![Primary value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/primaryaxis-gridlines.png)
 
#### Category Axis

This allows you to enable the `Category Axis` gridlines for the stacked column chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/categoryaxis-gridlines.png)

#### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the stacked column chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/Secondary-gridlines.png)

#### Formatting

This allows you to customize the color of the widget.

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/formatting-color.png)

![Formatting color change](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/format-color-change.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stacked-column-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stacked-column-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font-size property is used to set the font size based on the dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable auto font size and set the required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filter.png)

#### Act as Master Widget

This allows you to define this stacked column chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this stacked column chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the stacked-column chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size , the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

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

This allows you to set the **background image** for the stacked-column chart widget.

### Background Color

This allows you to set the **background color** to the stacked-column chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow
This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the `Container actions` for the stacked-column chart widget.

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the stacked-column chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the stacked-column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the stacked-column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the stacked-column chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the stacked-column chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the stacked-column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/Y-axis-label.png)

When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/X-axis-label.png)