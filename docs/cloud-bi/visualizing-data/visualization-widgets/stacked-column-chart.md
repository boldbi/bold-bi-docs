---
layout: post
title: Stacked Column Chart – Cloud BI | Bold BI Documentation
description: Learn how to create a Stacked Column Chart visual in Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Stacked Column Chart
documentation: ug
---

# Stacked Column Chart

Stacked Column Chart allows you to compare multiple measures through bars stacked one after the other vertically.

![Stacked Column Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.png)

## How to configure the table  data to stacked column chart?

Stacked Column Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explains to configure data to stacked column chart:

1.  Drag and drop the stacked column chart to the canvas and resize it to your required size.

![Stacked Column Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/add-stackedcolumnchart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Datasource button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked column assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by drag and drop the required measure.

![Adding Value(s)](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in `Settings.`

![summary type](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in chart by using filter. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter options](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Measure formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/format-option.png)

To remove the added value fields click highlighted button.

![Highlight button](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Stacked column chart values](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/adding-columns.png)

Chart will be rendered like this

![Stacked column chart output](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.png)

You can change the `Settings.`

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting data

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort dimension](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting filters option in settings. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Selecting filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill Alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Stacked column chart drill](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumndrills.png)


#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Show All Records](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-row.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Chart illustration](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart-seriesview.png)

## How to format stacked column chart?

You can format the stacked column chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into stacked column chart follow the steps

1. Drag and drop the stacked column chart into canvas and resize it to your required size.

2. Configure the data into stacked column chart.

3. Focus on the stacked column chart and click on widget settings.

![Widget Setting](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/widget-setting.png)

The property window will be opened.

![Property window](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

#### Name

This allows you to set `title` for this stacked-column chart widget.

#### Subtitle

This allows you to set `subtitle` for this stacked-column chart widget.

#### Description

This allows you to set a brief explanation about this stacked-column chart widget.

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/general-settings.png)

#### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/basic-settings.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart type and axis settings dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-type.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis, if you enable this option, the selected field will be plotted as the secondary axis. 

![Secondry axis in chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/secondary-axis.png)

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-change.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-customization.png)

![Legend customization Change](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-customization-change.png)

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-title.png)
 

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-value-label.png)

#### Value Label Customization

This allows you to customize the visibility of the value labels.

![Value labels customization change](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-value-label-customization.png)

![Value labels customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/value-label-change.png)

#### Value Label Color

This allows you to customize value label's color.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/showlabelrotation.png)

#### Value Label Suffix

Allows you to enable the Suffix value text to the value labels. 

#### Suffix Value

Allows you to set\edit suffix value to the value labels. 

![Suffix Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/suffix-value.png)

#### Show items with no data

This allows you to show data, which column does not have value.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is null or undefined when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Average](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-average.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using `Column Width.`

![Column Width Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/column-width-customization.png)

![Column Width](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing.`

![Column Spacing Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/column-spacing-customization.png)

![Column Spacing](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/column-space.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-format.png)

#### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/linking.png)

#### Axis

![Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-category-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-category-axis-title.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-categoryaxis.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/trimming-axis-labels.png)

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/maximum-label-width.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/label-rotation.png)

### Auto Interval

This allows you to dynamically calculate the `axis intervals.` When you resize the chart, the axis intervals are displayed differently depending on their given data.

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-primary-value-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/show-primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-primaryaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-axisrange.png)

It will reflect in the primary value axis of the chart.

![Axis Range settings output](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/axisrange-output.png)

#### Grid Lines

![Grid Lines](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the stacked column chart.

![Primary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/primaryaxis-gridlines.png)
 
#### Category Axis

This allows you to enable the `Category Axis` gridlines for the stacked column chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/categoryaxis-gridlines.png)

#### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the stacked column chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/Secondary-gridlines.png)

#### Formatting

This allows you to customize the color of the widget.

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/formatting-color.png)

![Formatting color change](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/format-color-change.png)

### Font Settings 

Font settings section allows you to enable the auto font size.

### Auto Font Size

On enabling `auto font fize,` the size of the font is adjusted automatically based on the screen resolution.

![Font settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/fontsettings.png)

#### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-column-chart/filter.png)

#### Act as Master Widget

This allows you to define this stacked column chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this stacked column chart widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added. 

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the stacked-column chart widget.

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

`On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.


### Show Border

This allows you to toggle the visibility of **border** surrounding the widget.

### Corner Radius

This allows you to apply the specified **radius** to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the column chart widget.

### Background Color

This allows you to set the **background color** to the column chart widget.

### Transparency

This property allows you to specifies the **transparency** for the **background color**.

### Container actions

This Section allows you to customize the **Container actions** for the column chart widget.

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the **widget title** of the column chart. 

#### Allow Maximize View

This allows you to enable or disable the **maximized mode** of the column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the **CSV export** option for the column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the **Excel export** option for the column chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the column chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the **PDF export** option for the column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
