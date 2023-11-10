---
layout: post
title: Line Chart Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Line Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/line-chart/"
platform: bold-bi
control: Line Chart
documentation: ug

---

# Line Chart

Line Chart allows you to showcase trends for analysis over a time period with data points connecting using straight lines.

![Line Chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/line-chart.png)

## How to configure the table data to line chart?

Line Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition.

The following steps explain the steps to configure data to the Line chart:

1.  Drag and drop the control to a canvas and resize it to your required size.

![Drag and drop the control](/static/assets/visualizing-data/visualization-widgets/images/line-chart/add-linechart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Line assign data](/static/assets/visualizing-data/visualization-widgets/images/line-chart/lineassigndata.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![chart data](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chartdata.png)

10.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Add more than one Measures](/static/assets/visualizing-data/visualization-widgets/images/line-chart/adding-values.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in the `Settings.`

![Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the funnel chart by using the Filter. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/line-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the Format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/visualizing-data/visualization-widgets/images/line-chart/format-option.png)

To remove the added value fields click highlighted button.

![Click highlighted button](/static/assets/visualizing-data/visualization-widgets/images/line-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Add more than one value into Columns](/static/assets/visualizing-data/visualization-widgets/images/line-chart/adding-columns.png)

Line chart will be rendered like this

![Line chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/line-chart.png)

You can change the `Settings.`

![Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/line-chart/rename.png)

#### Sorting data

You can Sort the dimension data using the Sort option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting the Filter(s) option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/line-chart/filter-option-column.png)

To show all records click on `Show All Records.`

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-level Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view of the chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linedrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Drag and drop the Dimension](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-row.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render line chart in series.

![Linechart_series](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-series.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data).

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/line-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/line-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/line-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/line-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/line-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/line-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/line-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/line-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/line-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/line-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/line-chart/info-icon.png)

The below chart displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/line-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, and individual column is split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/line-chart/after.png)

## How to format line chart?

You can format the line chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into line chart follow the steps

1. Drag and drop the line chart into canvas and resize it to your required size.

2. Configure the data into line chart.

3. Focus on the line chart and click on widget settings.

![Line widget settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linewidgetsettings.png)

The property window will be opened

![Property window](/static/assets/visualizing-data/visualization-widgets/images/line-chart/lineproperties.png)

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/property.png)

#### Name

This allows you to change the `title` for this line chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/title.png)

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/Subtitle.png)

#### Description

Allows you to provide the `description` about this spline area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/tooltip.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/line-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: The configured field is plotted as the primary axis by default. If you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you enable the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-value-labels.png)

If you Disable `Show Value Label`s properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of each series in a chart.

![Show Value Labels Customization OPtion](/static/assets/visualizing-data/visualization-widgets/images/line-chart/label-customize.png)

![Show Value Labels Customization](/static/assets/visualizing-data/visualization-widgets/images/line-chart/label-customize-values.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/line-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/line-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the line chart will be set to Top.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/line-chart/valuelabelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-showlabelrotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Value Label Suffix](/static/assets/visualizing-data/visualization-widgets/images/line-chart/label-suffix.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use label rotation property to visible the label.

#### Show Marker

This allows you to toggle the visibility of marker from label to adorn each data point in the chart series.

![Show Marker](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-marker.png)

#### Line Width

This allows you to customize the width of the line chart.

![Line Width](/static/assets/visualizing-data/visualization-widgets/images/line-chart/line-width.png)

### Show Items With No Data

By default, The chart doesn't display the columns with Null or Empty Value as shown in the below image

![Chart Default](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-default.png)

If you enable the `Show Items With No Data` property, Then the columns with the Null data will be displayed in the chart.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode to empty points with the properties `Gap`, `Zero`, `Average` and `Connect`.

![Empty Point Mode Options](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-options.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Average](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-average.png)

### Connect

This option ignores the empty values and connect the remaining points.

![Empty Point Mode Connect](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-connect.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

**Page Size**

This option allows you to set number of records needs to be fetched on initial load.

#### Line Style

Click `Customize` to open the `Custom Line Style Settings ` dialog.

![Line Style](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linestyle-property.png)

Now, the dialog will open as follows.

![Line Style Settings Dialog](/static/assets/visualizing-data/visualization-widgets/images/line-chart/custom-linestyle-settings-dialog.png)

***Series***

The default option applies to all the series in the line chart. If you want to customize individual series, select that series by the `Series` drop-down option.

***Line Style***

![Line Style Type](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linestyle-type.png)

To change the Line Style of the selected Series, choose the available styles such as Solid, Dot, Dash, DotDash, LongDash and LongDashDotDot from the `Line Style` drop-down option.

***Line Width***

Use the Line Width option to adjust the line width for the selected series.

Click `OK` to add a custom line style settings in a line chart. Now, the chart renders as follows.

![Custom Line Style Chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/custom-linestyle-series.png)

> **Note:** The Line Style property is only visible if you have Line or Spline chart.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

> **NOTE:** single series is available in chart, legend doesn’t visible. 

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-interactivity-enable.png)

**Legend Label Color**

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

![Legend customization For Row](/static/assets/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/static/assets/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legendtitle.png)

#### Legend Shape

This option allows you change the **shape** of the legend.

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

***None***

This option allows you to render the legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

#### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/line-chart/link.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis Settings

![Axis Settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows you to enable the visibility of `Category Axis.`

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-categoryaxistitle.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-axis-title-prop.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-category-axis-trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/visualizing-data/visualization-widgets/images/line-chart/hide-label.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/line-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trimming-label.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/line-chart/label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. The Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/show-primary-value.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of a chart.

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/line-chart/primary-value-axis-title.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Customization](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Settings output](/static/assets/visualizing-data/visualization-widgets/images/line-chart/linechart-axisrangeoutput.png)

### Axis Type

This allows you to change the `type of axis` in the line area chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details,refer to the this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/line-chart/formatting-button.png)

#### Grid Line

![Grid Line](/static/assets/visualizing-data/visualization-widgets/images/line-chart/chartgridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the line chart.

![Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/enable-primary-value-axis.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the line chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/category-axis.png)

#### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the line chart.

![Secondary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/line-chart/secondary-axis.png)


### Trendline

![Trendline](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trendline.png)

You can add more than one trendline to Cartesian charts except for bar type series(Line, Column, Area, and Spline) and stacked type of charts. You can `add, edit, and delete` trendlines.

### Add Trendline and Edit Trendline

To `add` the trendline, click the `highlighted button.`

![Trendline Add](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trendlineadd.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trendlinedialog.png)

Click the `OK` button to add a trendline in a line area chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trendlinechart.png)

To `edit` the trendline select the one to be edited and click the `highlighted button.`

![Trendline Edit](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trendline-edit.png)

Again, the trendline dialog window opens now.

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

To `delete` the trendline, select the one to be deleted and click the highlighted button.

![Trendline Delete](/static/assets/visualizing-data/visualization-widgets/images/line-chart/trendline-delete.png)

### Formatting

This allows you to change the `color` for the line area chart.

![Format Colors](/static/assets/visualizing-data/visualization-widgets/images/line-chart/formatting.png)

It will reflect in the line area chart.

![Formating Data Colors](/static/assets/visualizing-data/visualization-widgets/images/line-chart/formatting-color.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/line-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/line-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/line-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/line-chart/line-chart-data-type-color.png)

***Index***


It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/line-chart/line-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize the font size of the chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/line-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. The Auto font size property is used to set font size based on dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/line-chart/filter.png)

#### Act as Master Widget

This allows you to define this chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

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

This allow you to set the **background image** for the line chart widget.

### Background Color

This allows you to set the **background color** to the line chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/line-chart/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details,refer to the this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/line-chart/Y-axis-label.png)

When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/line-chart/X-axis-label.png)