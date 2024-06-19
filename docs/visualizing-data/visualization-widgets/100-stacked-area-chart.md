---
layout: post
title: 100% Stacked Area Chart – Embedded BI | Bold BI Docs
description: Learn how to create a 100% Stacked Area Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/100-stacked-area-chart/"
platform: bold-bi
control: 100% Stacked Area Chart
documentation: ug
---

# 100% Stacked Area Chart

100% Stacked Area Chart allows you to compare multiple measures through filled curves stacked one after the other vertically.

![Stacked area chart](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/stacked-area-chart.png)

## How to configure the table data to 100% stacked area chart?

100% Stacked Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explain how to configure the data to a 100% stacked area chart:

1.  Drag and drop the 100% stacked area chart into a canvas and resize it to your required size.

![Adding widget](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Assign data](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened with the available measures and dimensions from the connected data source.

![Chart data](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/add-measure.png)

Click the `Settings` option to change the required summary type from the available summary types shown in `Settings.`

![Settings menu](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in a chart by using the filter option. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filtering](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in a chart by using the format option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/format-option.png)

To remove the added value fields click highlighted button.

![Remove fields](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Values` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Adding columns](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/adding-columns.png)

Chart will be rendered like this,

![Configured widget with columns](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-columns.png)

You can change the `Settings.`

![Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/rename.png)

#### Sorting data

You can `Sort` the dimension data using  Sort option under `Settings` menu list. To apply sorting for the data, refer to the [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sorting](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting filters option in settings. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Dimension Filters](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, the alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drilled-view.png)

#### Adding Rows

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 

![Adding row](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Configured with series](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-with-series.png)


## How to format 100% stacked area chart?

You can format the 100% stacked area chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into 100% stacked area chart follow the steps

1. Drag and drop the 100% stacked area chart into canvas and resize it to your required size.

2. Configure the data into 100% stacked area chart.

3. Focus on the 100% stacked area chart and click on widget settings.

![Settings Icon](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings-icon.png)

The property window will be opened.

![Properties pane](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/properties-pane.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/property.png)

#### Name

This allows you to change the `title` for this 100% stacked area chart widget.

![General Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Title.png)

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

![General Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Subtitle.png)

#### Description

Allows you to provide the `description` about this spline area chart widget.

![General Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/description.png)

#### Basic Settings

![Basic Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Tooltip.png)

#### Show Value in Tooltip

As it is a percentage type, while you hover on the chart the values will be shown with percentages. If you enable this option, the value will be shown in the tooltip

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show value label](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-value-label.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **value label position**, **value label rotation** and **value label suffix** will be hidden.

![Show value label](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Show value label Customize](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/custom-valuelabel.png)

![Show value label](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/valuelabel.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-label-color-option.png)

![Value label Color](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the percent stacked area chart will be set as middle.

![Value label position](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value label rotation](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/label-rotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix value](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/suffix-value.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use label rotation property to visible the label.

#### Show Marker

This allows you to toggle the visibility of marker from label to adorn each data point in the chart series.

![Show marker](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data which column does `not` have any values.

![Empty Point Mode Gap](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)

### Empty Point Mode

This option allows you to handle the display mode of the data point values is `null or undefined.`

![Empty Point Mode Gap](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)
 
### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-average.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Page Size

This option allows you to set a number of records that need to be fetched on initial load.

#### Legend Settings

![Legend settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-label-color-option.png)

![Chart Legend Color](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendcustomize.png)

![Legend customization Change](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

![Legend customization For Row](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize the legend text based on the 'Text Width' property value.

***None***

This option allows you to render the legend items without any wrap and trim.

![Legend Overflow None in chart](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Chart_LegendNone.png)

***Trim***  

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Chart_Legendtrim.png)

***Wrap***

This option allows you to wrap the legend items based on 'Text Width' value.

![Legend Overflow Wrap in chart](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart_Legendwrap.png)

#### Text Width

This option allows you to set a maximum width for the Legend Items and it is applicable only if text-overflow set as Trim or Wrap.

![Legend Text Width in chart](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart_Legendwidth.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are the **legend color**, **legend position**, **customization button** and **legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 

#### Link

![Linking](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis Settings

![Axis settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

![Title color](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/title-color.png)

#### Label color

This allows you to customize the axis label color.

![Label color](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/label-color.png)

#### Show Category Axis

This allows you to enable the visibility of `Category Axis.`

![Show Category axis](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependent properties such as the **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category axis title](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis-title.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of a chart.

![Category axis title](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.

![Trim](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.png)

***Hide***

This option hides the overlapping label in the axis. 

![Hide](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/maximum-label-width.png)

![Trimmed label](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/trimming-label.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Axis label rotation](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show primary value axis](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-primary-value-axis.png)

If you disable `Show Primary Axis` option, dependencies properties **Axis title**, **Axis title text** and **Axis type**, **Axis Format** properties will be hidden.

![Show primary value axis](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary value axis title](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of a chart.

![Primary value axis title](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/edit-primary-value-axis-title.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis range settings output](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangeoutput.png)

#### Grid Line

![Chart grid lines](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the 100% stacked area chart.

![Axis Gridline](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-gridline.png)

#### Category Axis

This allows you to enable the `Category axis` gridlines for the 100% stacked area chart.

![Category Axis](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if you configured the row section in the chart.

![Series Palette](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property used to set font size based on dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Formatting

This allows you to customize the color for the widget.

![Formatting](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/formatting.png)

![Formatting Otput](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/formatting-output.png)

#### Filter

![Filter settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter.png)

#### Act as Master Widget

This allows you to define this 100% stacked area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this 100% stacked area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

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

This allows you to set the **background image** for the spline area chart widget.

### Background Color

This allows you to set the **background color** to the spline area chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `Shadow` surrounding the widget.

### Container actions

![Container Actions](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the 100% stacked area chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the 100% stacked area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the 100% stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the 100% stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the 100% stacked area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the 100% stacked area chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the widget's size for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Y-axis-label.png)

When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

![Widget Element](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/X-axis-label.png)
