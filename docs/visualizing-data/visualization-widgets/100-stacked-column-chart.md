---
layout: post
title: 100% Stacked Column Chart – Embedded BI | Bold BI Docs
description: Learn how to create a 100% Stacked Column Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/100-stacked-column-chart/"
platform: bold-bi
control: 100% Stacked Column Chart
documentation: ug
---

# 100% Stacked Column Chart

100% Stacked Column Chart allows you to compare multiple measures through bars stacked one after the other vertically.

![Hundred Stacked Column Chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstacked-columnchart.png)

## How to configure the table data to 100% stacked column chart?

100% Stacked Column Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explains how to configure data to 100% stacked column chart:

1.  Drag and drop the 100% stacked column chart to canvas and resize it to your required size.

![Hundred Stacked Column Chart resize](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/add-hundredstacked-columnchart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Connection type panel](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. 

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Hundred Stacked Column assign data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/assign-data.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

10. You can add the required data from `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in `Settings.`

![Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the chart by using the `Filter` option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the `Format` option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/format-option.png)

To remove the added value fields click highlighted button.

![Click the highlighted button](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Adding Columns](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/adding-columns.png)

100% stacked column chart chart will be rendered like this

![Hundred stacked column chart renders](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/configured-hundredstackedcolumnchart.png)

You can change the `Settings`.

![Change the Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/rename.png)

#### Sorting data

You can Sort the dimension data using the `Sort` option under `Settings` menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Advanced sorting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/sort-option.png)

#### filtering data

You can apply filters by selecting the `Filter(s)` option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configure for dimension filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, the alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` the single value will be added to the `Columns` field.

![Columns field](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region selected.

![Drilled View](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstackedcolumndrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-row.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Hundred stacked column chart customlegendsetting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstackedcolumnchart-customlegendsetting.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden Column](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in Hidden Column section denotes the same.

![Info Icon](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/info-icon.png)

The below chart displays the goals and Attempts On Target by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, and individual column is split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/after.png)

## How to format 100% stacked column chart?

You can format the 100% stacked column chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into 100% stacked column chart follow the steps

1. Drag and drop the 100% stacked column chart into canvas and resize it to your required size.

2. Configure the data into 100% stacked column chart.

3. Focus on the 100% stacked column chart and click on widget settings.

![Widget Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/widget-settings.png)

The property window will be opened.

![Property Window](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/property.png)

#### Name

This allows you to change the title for this 10% stacked column chart widget

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Title.png)

#### Subtitle

Allows you to provide the `subtitle` for this 100% Stacked Column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Subtitle.png)

#### Description

Allows you to provide the `description` for this 100% Stacked Column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/basic-settings.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type` and `Axis Settings` dialog. 

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

>**Note:** The 100 % Stacked Column having the axis value as 100% so you can't able to enable the secondary axis. You can enable the secondary axis by switching the chart types.

![Chart Type Secondary Axis Customization ](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/secondaryaxis-customization.png)

![Chart Type Secondary Axis ](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/secondaryaxis.png)

### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Showtooltip.png)

### Show Value in Tooltip

As it is a percentage type, while you hover on the chart, values will be shown with percentages. If you enable this option, the value will be shown in the tooltip.

#### Enable Animation

It animates the measure values by toggling the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Show Value Labels Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels-customization.png)

![Show Value Labels Customization Change](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels-customization-change.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in chart. By default, it set as ‘Auto,' so the label position for percent stacked column chart will be set as middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/value-label-rotation.png)

#### Value Label Suffix

This allows you to show/hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/suffix-value.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use label rotation property to visible the label.

### Show Items With No Data

This allows you to show the data which column does `not` have value.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is `null or undefined` when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-average.png)

#### Column Width

You can increase or decrease the width of the column by using the `Column Width` option.

![Column Width Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/columnwidth-value.png)

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-width.png)

#### Column Spacing 

You can increase or decrease the space between the columns by using the `Column Spacing` option.

![Column Space Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-spacing.png)

![Column Space Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-space-customization.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Page Size

This option allows you to set number of records needs to be fetched on initial load.

## Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-interactivity-enable.png)

#### Legend Label Colors

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize legend text, based on the 'Text Width' property value.

***None***

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 

#### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis

![Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/title-color.png)

#### Label color

This allows you to customize the axis label color.

![label color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/label-color.png)

#### Show Category Axis

This allows you to enable the visibility of `Category Axis.`

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/categoryaxistitle.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/editcategoryaxistitle.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.

![Trim](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Hide](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hide.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-auto-interval.png)

By default, 'Auto Interval' property is enabled. Auto Interval property used to set auto interval based on number of data points for category axis labels. If user wants to customize the interval, then user need to disable auto interval and set required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-primary-value-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of the chart.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of the chart.

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-title.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis range settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis range settings output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axisrangeoutput.png)

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/formatting-button.png)

#### Grid Lines

![Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the 100% stacked column chart.

![Primary value Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primaryaxis.png)
 
#### Category Axis

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-axis-title.png)

This allows you to enable the `Category Axis` gridlines for the 100% stacked column chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/categoryaxis.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if you configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/100-stacked-column-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/100-stacked-column-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/font-settings.png)

#### Auto font Size and font size

By default, 'Auto Font Size' property is enabled. Auto font size property used to set font size based on dashboard viewing client machine resolution. If user want to customize/set fixed font size, then user need to disable auto font size and set required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter.png)

#### Act as Master Widget

This allows you to define this 100% stacked column chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this 100% stacked column chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable or disable hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

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

This allows you to set the **background image** for the 100% Stacked Column chart widget.

### Background Color

This allows you to set the **background color** to the 100% Stacked Column chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the 100% Stacked Column chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the 100% Stacked Column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Y-axis-label.png)

When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/X-axis-label.png)
