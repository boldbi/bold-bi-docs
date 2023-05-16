---
layout: post
title: 100% Stacked Bar Chart – Embedded BI Visual | Bold BI Docs
description: Learn how to create a 100% Stacked Bar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/100-bar-area-chart/"
platform: bold-bi
control: 100% Stacked Bar Chart
documentation: ug
---

# 100% Stacked Bar Chart

100% Stacked Bar Chart allows you to compare the multiple measures through the bars stacked one after the other horizontally.

![Hundred stacked bar chart image1](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstacked-barchart.png)

## How to configure the table data to 100% stacked bar chart?

100% Stacked Bar Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition.

The following steps explain how to configure data in 100% stacked bar chart:

1.  Drag and drop the 100% stacked bar chart into canvas and resize it your required size.

![Add Hundred stacked bar chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/add-hundredstacked-barchart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. And click the `Connect` button.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens.

![Designer properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/assign-data.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/assign-data-section.png)

10.  You can add the required data from `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Y Values` field by dragging and dropping the required measure.

![Add Y values](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/add-measure.png)

Click the `Settings` option to change the required summary type from the available summary types shown in Settings.

![Settings option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the chart by using the filter option. For more details, refer to the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, refer to the [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/format-option.png)
To remove the added value fields click highlighted button.

![Remove fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/removebutton.png)

You can add more than one column from `Dimensions` field into `Y Values` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Adding Columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/adding-columns.png)

100% stacked bar chart will be rendered like this

![Hundred stacked bar](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstacked-barchart.png)

You can change the `Settings`.

![Change the Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/rename.png)


#### Sorting data 

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Advanced sorting](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/sort-option.png)

#### Filtering data
You can apply filters by selecting filters option in settings. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

>**NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Hundred percent stacked bar drill](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbardrill.png)

#### Adding Rows

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 

![Chart row](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Hundred stacked bar series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbar-series.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden Column](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering.

![Configure measure series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Configure dimension series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/dimension.png)

![Configure date field](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/embedded-bi/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.
 
![View data](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in Hidden Column section denotes the same.

![Info Icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/info-icon.png)

The below chart displays the goals and Attempts On Target by each team without hidden columns.

![Before](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, and individual column is split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/after.png)

## How to format 100% stacked bar chart?

You can format the 100% stacked bar chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into 100% stacked bar chart follow the steps

1. Drag and drop the 100% stacked bar chart into canvas and resize it to your required size.

2. Configure the data into 100% stacked bar chart.

3. Focus on the 100% stacked bar chart and click on widget settings.

![Hundred stacked bar chart settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-settings.png)

The property window will be opened.

![Property-window](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/property.png)

#### Name

This allows you to change the `title` for this area chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Title.png)

#### Subtitle

Allows you to provide the `subtitle` for this area chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Subtitle.png)

#### Description

Allows you to provide the `description` about this area chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Description.png)

#### Basic Settings

![Basic-Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/basic-settings.png)

### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Showtooltip.png)

### Show Value in Tooltip

As it is a percentage type, while you hover on the chart, values will be shown with percentages. If you enable this option, the value will be shown in the tooltip.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/tooltip-value.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you toggle `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show-Value-Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-value-labels.png)


If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Show-Value-Labels-Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/value-label-customize.png)

![Show-Value-Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-customization.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the percent stacked bar chart will be set as middle.

![Value label position](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Label-Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-rotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix-Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/suffix-value.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use value label rotation property to visible the label.

### Show Items With No Data

This allows you to show the data which column does `not` have any values.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is `null or undefined` when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Average

This option displays the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-average.png)

### Column width

You can decrease or increase the width of the column.

![Column Width Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-width-custom.png)

![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-width.png)

#### Column Spacing

You can decrease or increase the space of the column.

![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-spacing.png)

![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/spacing.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Page Size

This option allows you to set a number of records that need to be fetched on initial load.

#### Legend Settings

![Legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-settings.png)

#### Show Legend

A legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in the chart and also change the legend text position (selecting through combo box).

![Show-Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in a chart.

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendcustomize.png)

![Legend customization Change](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series`.

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize the legend text based on the 'Text Width' property value.

***None***

This option allows you to render the legend items without any wrap and trim.

![Legend Overflow None in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart_LegendNone.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart_Legendtrim.png)

***Wrap***

This option allows you to wrap the legend items based on 'Text Width' value.

![Legend Overflow Wrap in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart_Legendwrap.png)

#### Text Width

This option allows you to set a maximum width for the Legend Items and it is applicable only if text-overflow set as Trim or Wrap.

![Legend Text Width in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart_Legendwidth.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 

#### Link

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis

![Chart axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/title-color.png)

#### Label color

This allows you to customize the axis label color.

![Label color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-color.png)

#### Show Category Axis

This allows to enable the visibility of `Category Axis`.

![Hundred percent stacked bar chart Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-showcategoryaxis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-categoryaxistitle.png)

If you disable the `Show Category Axis` option, dependencies properties which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option, will be hidden.

![Show value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-axis.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Edit category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hide.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/maximum-label-width.png)

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/trimming-label.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category-Axis-Label-Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show-Primary-Value-Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-primary-value-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Edit primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/editprimaryvalueaxistitle.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis range settings output](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axisrangeoutput.png)

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the Format button. For more details, refer to this measure format.

![Axis Format](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-format.png)

#### Grid Lines

![Chart grid lines](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the 100% stacked bar chart.

![Hundred percent stacked bar chart primary axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/primaryaxis.png)
 
#### Category Axis

This allows you to enable the `Category Axis` gridlines for the 100% stacked bar chart.

![Hundred percent stacked bar chart category axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/categoryaxis.png)

#### Formatting 

This allows you to customize the color of the widget.

![Formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/formatting-color.png)

![Formatting Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/formatting-color-customization.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if you configured the row section in the chart.

![Series Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/100-stacked-bar-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/100-stacked-bar-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).
 
### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property used to set font size based on dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filter.png)

#### Act as Master Widget

This allows you to define this 100% stacked bar chart widget as a master widget such that its filter action can be made to listen by other widgets in a dashboard.

#### Ignore Filter Actions

This allows you to define this 100% stacked bar chart widget to ignore responding to the filter actions applied on other widgets in a dashboard.

#### Hierarchical Filter

Through this option, you can enable and disable hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

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

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart X-axis labels, X-axis titles will be hidden.

![Widget Element](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/X-axis-label.png)

When the chart has been placed with less than 6 rows, chart Y-axis labels, Y-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Y-axis-label.png)
