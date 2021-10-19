---
layout: post
title: Spline Chart Widget – Cloud BI | Bold BI Documentation
description: Learn how to create a Spline Chart visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Spline Chart
documentation: ug
---

# Spline Chart

Spline Chart allows you to showcase the trends for analysis over a time period with data points connected using splines.

![Spline Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/spline-chart.png)

## How to configure the table data to spline Chart?

Spline Chart need a minimum of 1 value element and 1 column element to showcase. The `measure` or `expression` field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure can be dropped onto the Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto the `Rows block` in addition.

The following steps explain to configure the data to spline charts:

1.  Drag and drop the spline chart into a canvas and resize it into the required size.

![Configure the table data](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/add-splinechart.png)

2.  Click the `Data Source` button which is highlighted in the configuration panel.

![Data](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Connection type panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Configuration panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Spline assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineassigndata.png)

8.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/chartdata.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

**Adding Value(s)**

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Add more than one Measures](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/add-measures.png)

#### Settings

Click the `Settings` option to change the name by using the `Rename` and the required summary type from the available summary types shown in the `Settings.`

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the funnel chart by using the filter. For more details, refer to the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/widget-filters.png)

#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, refer to the [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/formatting-measure.png)

To remove the added value fields click highlighted button.

![Click highlighted button](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/remove-fields.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Add more than one value into Columns](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/add-columns.png)

Spline chart will be rendered like this

![Spline chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/spline-chart-render.png)

You can change the `Settings.`

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/settings-menu.png)

#### Renaming

You can edit the name by using the `Rename` option.

#### Sorting data

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting#dimension-column/).

![Advanced sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/sortdimension.png)

#### Filtering data

You can apply filters by selecting the `Filter(s)` option in settings. For more details, refer to the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/filter-for-dimension.png)

To show all records click on `Show All Records.`

Similarly you can add the `Measures` and `Expression Columns` into column field.

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinedrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/chart-row.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render spline chart in series.

![Render spline chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-series.png)

## How to format spline Chart?

You can format the spline chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into spline chart follow the steps

1. Drag and drop the spline chart into canvas and resize it to your required size.

2. Configure the data into spline chart.

3. Focus on the spline chart and click on widget settings.

![Spline widget settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinewidgetsettings.png)

The property window will be opened.

![Spline properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineproperties.png)

You can see the list of properties available for the widget with default value.

### General Settings

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/general-settings.png)

#### Name

This allows you to change the `title` for this spline chart widget.

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

#### Description

Allows you to provide the `description` about this spline area chart widget.

### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/basic-settings.png)

#### Chart Type

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

#### Enable Animation

On enabling animation, it animates the measure values.

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/legend-label-color.png)

#### Customize Legend Settings

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-legendcustomize.png)

![Legend customization Change](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineachart-legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

![Legend customization For Row](/static/assets/cloud/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/static/assets/cloud/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/chart-legendtitle.png)

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/show-value-labels.png)

#### Show Value Label Customization

This allows you to toggle the required visibility of value labels.

![Show Value Labels Customization OPtion](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/label-customize.png)

![Show Value Labels Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/label-customize-values.png)


#### Value Label Color

This allows you to customize value label's color.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/data-label-color.png)

#### Value Label Position

This allows you to set the position of the value labels at `Top, Middle,` and `Bottom.`

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-showlabelrotation.png)

#### Value Label Suffix

Allows you to enable the suffix value text to the value labels.

#### Suffix Value

Allows you to set\edit the suffix value to the value labels.

![Suffix Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/suffix-value.png)

#### Show Marker

This allows you to toggle the visibility of marker from the label to adorn each data point in a chart series.

![Show Marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data which column does `not` have value.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is `null or undefined.`
![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-gap.png)
 
### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-average.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/link.png)

### Axis Settings

![Axis Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

### Title color

This allows you to customize the axis title color.

### Label color

This allows you to customize the axis label color.

### Show Category Axis

This allows to enable the visibility of `Category Axis.`

![Show Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/show-category-axis.png)

### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-categoryaxistitle.png)

### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-editcategoryaxistitle.png)

### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.` 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/show-category-axis.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/hide-label.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/trimming-label.png)

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/maximum-label-width.png)

### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/label-rotation.png)

### Auto Interval

This allows you to dynamically calculate the `axis intervals.` When you resize the chart, the axis intervals are displayed differently depending on their given data.

![Auto Interval](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/auto-interval.png)

### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/show-primary-value-axis.png)

### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-axisrangesettings.png)

It will reflect in the primary value axis of chart.

![Axis Range Settings Output](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-axisrangeoutput.png)

### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-primaryvalueaxistitle.png)

### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/primary-value-axis-title.png)

### Axis Type

This allows you to change the `type of axis` in the spline area chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to the [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/formatting-button.png)

#### Grid Line

![Grid Line](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/chartgridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the spline chart.

![Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/primary-value-axis.png)

#### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the spline chart.

![Secondary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/secondary-axis.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the spline chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/category-axis.png)


### Trendline

![Trendline](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-trendline.png)

You can add more than one trendline to Cartesian charts except for bar type series (Line, Column, Area, and Spline) and stacked type of charts. You can `add, edit, and delete` trendlines.

### Add Trendline and Edit Trendline

To `add` the trendline, click the `highlighted button.`

![Trendline Add](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-trendlineadd.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-trendlinedialog.png)

Click the `OK` button to add trendline in a spline area chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splineareachart-trendlinechart.png)

To `edit` the trendline select the one to be edited and click the `highlighted button.`

![Trendline Edit](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-trendline-edit.png)

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

You can change the style of the trendline by the `Line Style` dropdown option(Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot).

### Delete Trendline

To `delete` the trendline, select the one to be deleted and click the highlighted button.

![Trendline Delete](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/splinechart-trendline-delete.png)

### Formatting

This allows you to change the `color` for the spline area chart.

![Format Colors](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/formatting.png)

It will reflect in the spline area chart.

![Formating Data Colors](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/formatting-color.png)

#### Font Settings

Font Settings section allows you to enable the auto font size property.

![Font Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/fontsettings.png)

### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/filter.png)

### Act as Master Widget

This allows you to define this chart widget as a `master widget` such that its filter action can be made to listen by other widgets in the dashboard.

### Ignore Filter Actions

This allows you to define this chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

### Enable Hierarchical Filter

Through this option, you can enable/disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When the `Enable Hierarchical Filter` option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

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

This allow you to set the **background image** for the spline chart widget.

### Background Color

This allows you to set the **background color** to the spline chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-chart/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the spline chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the spline chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the spline chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the spline chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the spline chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the spline chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin Widget

This allows you to pin the widget.
