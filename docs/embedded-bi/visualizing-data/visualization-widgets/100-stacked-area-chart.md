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

![Stacked area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/stacked-area-chart.png)

## How to configure the table data to 100% stacked area chart?

100% Stacked Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explain how to configure the data to a 100% stacked area chart:

1.  Drag and drop the 100% stacked area chart into a canvas and resize it to your required size.

![Adding widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened with the available measures and dimensions from the connected data source.

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/add-measure.png)

Click the `Settings` option to change the required summary type from the available summary types shown in `Settings.`

![Settings menu](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in a chart by using the filter option. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filtering](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in a chart by using the format option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/format-option.png)

To remove the added value fields click highlighted button.

![Remove fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Values` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Adding columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/adding-columns.png)

Chart will be rendered like this,

![Configured widget with columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-columns.png)

You can change the `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting data

You can `Sort` the dimension data using  Sort option under `Settings` menu list. To apply sorting for the data, refer to the [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sorting](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting filters option in settings. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Dimension Filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, the alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drilled-view.png)

#### Adding Rows

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 

![Adding row](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Configured with series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-with-series.png)


## How to format 100% stacked area chart?

You can format the 100% stacked area chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into 100% stacked area chart follow the steps

1. Drag and drop the 100% stacked area chart into canvas and resize it to your required size.

2. Configure the data into 100% stacked area chart.

3. Focus on the 100% stacked area chart and click on widget settings.

![Settings Icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings-icon.png)

The property window will be opened.

![Properties pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/properties-pane.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/general-settings.png)

#### Name

This allows you to change the `title` for this 100% stacked area chart widget.

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

#### Description

Allows you to provide the `description` about this spline area chart widget.

#### Basic Settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-value-label.png)

#### Customize

This allows you to customize the toggle visibility of each series in a Chart.

![Show value label Customize](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/custom-valuelabel.png)

![Show value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/valuelabel.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the percent stacked area chart will be set as middle.

![Value label position](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value label rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/label-rotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix value](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/suffix-value.png)

#### Show Marker

This allows you to toggle the visibility of marker from label to adorn each data point in the chart series.

![Show marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data which column does `not` have any values.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)

### Empty Point Mode

This option allows you to handle the display mode of the data point values is `null or undefined.`

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)
 
### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-average.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Page Size

This option allows you to set a number of records that need to be fetched on initial load.

#### Legend Settings

![Legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendcustomize.png)

![Legend customization Change](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

![Legend customization For Row](/static/assets/embedded/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/static/assets/embedded/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize the legend text based on the 'Text Width' property value.

***None***

This option allows you to render the legend items without any wrap and trim.

![Legend Overflow None in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Chart_LegendNone.png)

***Trim***  

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Chart_Legendtrim.png)

***Wrap***

This option allows you to wrap the legend items based on 'Text Width' value.

![Legend Overflow Wrap in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart_Legendwrap.png)

#### Text Width

This option allows you to set a maximum width for the Legend Items and it is applicable only if text-overflow set as Trim or Wrap.

![Legend Text Width in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart_Legendwidth.png)

#### Link

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis Settings

![Axis settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows you to enable the visibility of `Category Axis.`

![Show Category axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis-title.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of a chart.

![Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.

![Trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.png)

***Hide***

This option hides the overlapping label in the axis. 

![Hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/trimming-label.png)

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/maximum-label-width.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Axis label rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show primary value axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-primary-value-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of a chart.

![Primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/edit-primary-value-axis-title.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis range settings output](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangeoutput.png)

#### Grid Line

![Chart grid lines](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the 100% stacked area chart.

![Axis Gridline](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-gridline.png)

#### Category Axis

This allows you to enable the `Category axis` gridlines for the 100% stacked area chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis.png)

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property used to set font size based on dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Formatting

This allows you to customize the color for the widget.

![Formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/formatting.png)

![Formatting Otput](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/formatting-output.png)

#### Filter

![Filter settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter.png)

#### Act as Master Widget

This allows you to define this 100% stacked area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this 100% stacked area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

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

### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the spline area chart widget.

### Background Color

This allows you to set the **background color** to the spline area chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

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