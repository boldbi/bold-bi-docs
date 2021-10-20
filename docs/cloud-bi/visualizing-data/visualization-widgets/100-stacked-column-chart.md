---
layout: post
title: 100% Stacked Column Chart – Cloud BI | Bold BI Documentation
description: Learn how to create a 100% Stacked Column Chart visual in Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: 100% Stacked Column Chart
documentation: ug
---

# 100% Stacked Column Chart

100% Stacked Column Chart allows you to compare multiple measures through bars stacked one after the other vertically.

![Hundred Stacked Column Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstacked-columnchart.png)

## How to configure the table data to 100% stacked column chart?

100% Stacked Column Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explains how to configure data to 100% stacked column chart:

1.  Drag and drop the 100% stacked column chart to canvas and resize it to your required size.

![Hundred Stacked Column Chart resize](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/add-hundredstacked-columnchart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Connection type panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Hundred Stacked Column assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/assign-data.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/assign-data-section.png)

10. You can add the required data from `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in `Settings.`

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the chart by using the `Filter` option. For more details, refer to the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the `Format` option. For more details, refer to the [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/format-option.png)

To remove the added value fields click highlighted button.

![Click the highlighted button](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field.

![Adding Columns](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/adding-columns.png)

100% stacked column chart chart will be rendered like this

![Hundred stacked column chart renders](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/configured-hundredstackedcolumnchart.png)

You can change the `Settings`.

![Change the Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting data

You can Sort the dimension data using the `Sort` option under `Settings` menu list. To apply sorting for the data, refer to the [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Advanced sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/sort-option.png)

#### filtering data

You can apply filters by selecting the `Filter(s)` option in settings. For more details, refer to the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configure for dimension filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

Add more than one value to the `Columns` field, the alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` the single value will be added to the `Columns` field.

![Columns field](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region selected.

![Drilled View](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstackedcolumndrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-row.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Hundred stacked column chart customlegendsetting](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstackedcolumnchart-customlegendsetting.png)

## How to format 100% stacked column chart?

You can format the 100% stacked column chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into 100% stacked column chart follow the steps

1. Drag and drop the 100% stacked column chart into canvas and resize it to your required size.

2. Configure the data into 100% stacked column chart.

3. Focus on the 100% stacked column chart and click on widget settings.

![Widget Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/widget-settings.png)

The property window will be opened.

![Property Window](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/general-settings.png)

#### Name

This allows you to change the title for this 10% stacked column chart widget

#### Subtitle

Allows you to provide the `subtitle` for this 100% Stacked Column chart widget.

#### Description

Allows you to provide the `description` for this 100% Stacked Column chart widget.

#### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/basic-settings.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type` and `Axis Settings` dialog. 

![Chart Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

>**Note:** The 100 % Stacked Column having an axis value of 100% so you can not enable the secondary axis. You can enable the secondary axis by switching the chart types.

![Chart Type Secondary Axis Customization ](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/secondaryaxis-customization.png)

![Chart Type Secondary Axis ](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/secondaryaxis.png)

#### Enable Animation

It animates the measure values by toggling the `Enable Animation.`

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Label Colors

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendcustomize.png)

![Legend customization Change](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendtitle.png)

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels.png)

#### Value Label Customization

This allows you to customize the visibility of the Value Label.

![Show Value Labels Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels-customization.png)

![Show Value Labels Customization Change](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels-customization-change.png)

#### Value Label Color

This allows you to customize value label's color.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/data-label-color.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/value-label-rotation.png)

#### Value Label Suffix

Allows you to enable the Suffix value text to the value labels. 

#### Suffix Value

Allows you to set\edit suffix value to the value labels. 

![Suffix Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/suffix-value.png)

### Show Items With No Data

This allows you to show the data which column does `not` have value.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is `null or undefined` when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-average.png)

#### Column Width

You can increase or decrease the width of the column by using the `Column Width` option.

![Column Width Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/columnwidth-value.png)

![Column Width Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-width.png)

#### Column Spacing 

You can increase or decrease the space between the columns by using the `Column Spacing` option.

![Column Space Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-spacing.png)

![Column Space Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-space-customization.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Link

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis

![Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-category-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis title](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/categoryaxistitle.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/editcategoryaxistitle.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hide.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-label-rotation.png)

### Auto Interval

This allows you to dynamically calculate the `axis intervals.` When you resize the chart, the axis intervals are displayed differently depending on their given data.

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-primary-value-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-title.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis range settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis range settings output](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axisrangeoutput.png)

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/formatting-button.png)

#### Grid Lines

![Grid Lines](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the 100% stacked column chart.

![Primary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primaryaxis.png)
 
#### Category Axis

This allows you to enable the `Category Axis` gridlines for the 100% stacked column chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/categoryaxis.png)

### Font Settings 

Font settings section allows you to enable the auto font size .

### Auto Font Size

On enabling `auto font size,` the size of the font is adjusted automatically based on the screen resolution.

![Font Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/fontsettings.png)

#### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter.png)

#### Act as Master Widget

This allows you to define this 100% stacked column chart widget as a master widget such that its filter action can be made to listen by other widgets in a dashboard.

#### Ignore Filter Actions

This allows you to define this 100% stacked column chart widget to ignore responding to the filter actions applied on other widgets in a dashboard.

#### Hierarchical Filter

Through this option, you can enable and disable the hierarchical top `N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added. 

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

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

This allows you to set the **background image** for the 100% Stacked Column chart widget.

### Background Color

This allows you to set the **background color** to the 100% Stacked Column chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

