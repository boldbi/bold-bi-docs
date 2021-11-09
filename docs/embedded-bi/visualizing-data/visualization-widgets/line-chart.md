---
layout: post
title: Line Chart Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Line Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/line-chart/"
platform: bold-bi
control: Line Chart
documentation: ug
---

# Line Chart

Line Chart allows you to showcase trends for analysis over a time period with data points connecting using straight lines.

![Line Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/line-chart.png)

## How to configure the table data to line chart?

Line Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition.

The following steps explain the steps to configure data to the Line chart:

1.  Drag and drop the control to a canvas and resize it to your required size.

![Drag and drop the control](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/add-linechart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens.

![Designer properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Line assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/lineassigndata.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chartdata.png)

10.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Add more than one Measures](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/adding-values.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in the `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the funnel chart by using the Filter. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the Format option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/format-option.png)

To remove the added value fields click highlighted button.

![Click highlighted button](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Add more than one value into Columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/adding-columns.png)

Line chart will be rendered like this

![Line chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/line-chart.png)

You can change the `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting data

You can Sort the dimension data using the Sort option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting the Filter(s) option in settings. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/filter-option-column.png)

To show all records click on `Show All Records.`

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-level Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view of the chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linedrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Drag and drop the Dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render line chart in series.

![Linechart_series](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-series.png)

## How to format line chart?

You can format the line chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into line chart follow the steps

1. Drag and drop the line chart into canvas and resize it to your required size.

2. Configure the data into line chart.

3. Focus on the line chart and click on widget settings.

![Line widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linewidgetsettings.png)

The property window will be opened

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/lineproperties.png)

#### General Settings

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/general-settings.png)

#### Name

This allows you to change the `title` for this line chart widget.

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

#### Description

Allows you to provide the `description` about this spline area chart widget.

#### Basic Settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you enable the `Enable Animation.`

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/show-value-labels.png)

#### Customize

This allows you to customize the toggle visibility of each series in a chart.

![Show Value Labels Customization OPtion](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/label-customize.png)

![Show Value Labels Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/label-customize-values.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the line chart will be set to Top.

![Value label position](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/valuelabelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-showlabelrotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Value Label Suffix](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/label-suffix.png)

#### Show Marker

This allows you to toggle the visibility of marker from label to adorn each data point in the chart series.

![Show Marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data which column does `not` have value.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is `null or undefined.`

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-gap.png)
 
### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-average.png)

#### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

**Page Size**

This option allows you to set number of records needs to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Legend Label Color**

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legendcustomize.png)

![Legend customization Change](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legendcustomize-change.png)

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

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/legendtitle.png)

#### Legend Shape

This option allows you change the **shape** of the legend.

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

##### None

This option allows you to render the legend items without any wrap and trim.

![Legend Overflow None in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart_LegendNone.png)

##### Trim

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart_Legendtrim.png)

##### Wrap

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart_Legendwrap.png)

#### Text Width

This option allows you to set a maximum width for the Legend Items and it is applicable only if text-overflow set to Trim or Wrap.

![Legend Text Width in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart_Legendwidth.png)

#### Link

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/link.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis Settings

![Axis Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows you to enable the visibility of `Category Axis.`

![Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/show-category-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-categoryaxistitle.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.

![Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-editcategoryaxistitle.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/show-category-axis-trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/hide-label.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trimming-label.png)

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/maximum-label-width.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. The Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/show-primary-value.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of a chart.

![Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/primary-value-axis-title.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Settings output](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart-axisrangeoutput.png)

### Axis Type

This allows you to change the `type of axis` in the line area chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details,refer to the this [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/formatting-button.png)

#### Grid Line

![Grid Line](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chartgridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the line chart.

![Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/enable-primary-value-axis.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the line chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/category-axis.png)

#### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the line chart.

![Secondary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/secondary-axis.png)


### Trendline

![Trendline](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trendline.png)

You can add more than one trendline to Cartesian charts except for bar type series(Line, Column, Area, and Spline) and stacked type of charts. You can `add, edit, and delete` trendlines.

### Add Trendline and Edit Trendline

To `add` the trendline, click the `highlighted button.`

![Trendline Add](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trendlineadd.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trendlinedialog.png)

Click the `OK` button to add a trendline in a line area chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trendlinechart.png)

To `edit` the trendline select the one to be edited and click the `highlighted button.`

![Trendline Edit](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trendline-edit.png)

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

![Trendline Delete](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/trendline-delete.png)

### Formatting

This allows you to change the `color` for the line area chart.

![Format Colors](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/formatting.png)

It will reflect in the line area chart.

![Formating Data Colors](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/formatting-color.png)

### Font settings

This section allows you to customize the font size of the chart elements.

![Font settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. The Auto font size property is used to set font size based on dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/filter.png)

#### Act as Master Widget

This allows you to define this chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

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

This allow you to set the **background image** for the line chart widget.

### Background Color

This allows you to set the **background color** to the line chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details,refer to the this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin Widget

This allows you to pin the widget.

