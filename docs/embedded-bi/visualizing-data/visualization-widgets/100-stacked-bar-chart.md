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

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/general-settings.png)

#### Name

This allows you to change the `title` for this area chart widget.

#### Subtitle

Allows you to provide the `subtitle` for this area chart widget.

#### Description

Allows you to provide the `description` about this area chart widget.

#### Basic Settings

![Basic-Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/basic-settings.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you toggle `Enable Animation.`

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

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show-Value-Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-value-labels.png)

#### Customize Value Labels 

You can able to customize the visibility of the Value Labels.

![Show-Value-Labels-Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/value-label-customize.png)

![Show-Value-Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-customization.png)

#### Value Label Color

This allows you to customize value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/data-label-color.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Label-Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-rotation.png)

#### Value Label Suffix

Allows you to enable the Suffix value text to the value labels. 

#### Suffix Value

Allows you to set\edit suffix value to the value labels. 

![Suffix-Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/suffix-value.png)

### Show Items With No Data

This allows you to show the data which column does `not` have value.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Column width

You can decrease or increase the width of the column.

![Column Width Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-width-custom.png)

![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-width.png)

#### Column Spacing

You can able to decrease or increase the space of the column.

![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-spacing.png)

![Column Width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/spacing.png)

#### Link

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis

![Chart axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows to enable the visibility of `Category Axis`.

![Hundred percent stacked bar chart Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-showcategoryaxis.png)

#### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-categoryaxistitle.png)

#### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Edit category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-editcategoryaxistitle.png)

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

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/trimming-label.png)

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/maximum-label-width.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category-Axis-Label-Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-label-rotation.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show-Primary-Value-Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-primary-value-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Edit primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/editprimaryvalueaxistitle.png)

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
 
### Font Settings

Font settings section allows you to enable the auto font size property.

![Font Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/fontsettings.png)

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

### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allow you to set the **background image** for the 100% Stacked Bar chart widget.

### Background Color

This allows you to set the **background color** to the 100% Stacked Bar chart widget.

### Transparency

This property allows you to specify the **transparency** for the background color.

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
