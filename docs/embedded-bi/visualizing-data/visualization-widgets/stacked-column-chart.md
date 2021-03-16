---
layout: post
title: Stacked Column Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Stacked Column Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/stacked-column-chart/"
platform: bold-bi
control: Stacked Column Chart
documentation: ug
---

# Stacked Column Chart

Stacked Column Chart allows you to compare multiple measures through bars stacked one after the other vertically.

![Stacked Column Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.PNG)

## How to configure the table  data to stacked column chart?

Stacked Column Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

Follow the steps configure data to stacked column chart

Drag and drop the stacked column chart to canvas and resize it to your required size.

![Stacked Column Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/add-stackedcolumnchart.PNG)

Click `Data Source` button in configuration panel.

![Data Button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Datasource button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, switch to `ASSIGN DATA` tab.

![Designer properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked column assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnassigndata.PNG)

The data tab will be opened with available measures and dimensions from the connected data source

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/chartdata.png)

You can add the required data from `Measures` and `Dimensions` into required field.

**Adding Y Values**

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Adding Y Values](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/add-y-values.PNG)

Now the chart will be rendered like this

![stacked column chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/configured-stackedcolumnchart.PNG)

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![summary type](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Settings.PNG)

You can `Sort` the data using `Sort` option shown under `Settings` menu list. To sort the measure data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/)

![sort setting option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/sorting.PNG)

You can filter the data to be displayed in chart by using filter. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter options](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/widget-filters.PNG)

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Measure formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Formatting-measure.PNG)

To remove the added value fields click highlighted button.

![Highlight button](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Remove-fields.PNG)

You can add more than one column from `Dimensions` field into `Y Values` field.

**Adding Columns**

You can add more than one value into `Columns` field.

![Stacked column chart values](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/adding-columns.PNG)

Chart will be rendered like this

![Stacked column chart output](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.PNG)

Add more than one value to `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, single value will be added to the `Columns` field.

![Drill Alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/drillalert.PNG)

The drilled view of the chart region selected.

![Stacked column chart drill](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumndrills.PNG)

You can change the `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/change-settings.PNG)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/sortdimension.PNG)

You can apply filters by selecting filters option in settings. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Selecting filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Configuring-filter.PNG)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

**Adding Rows**

You can drag and drop the `Dimension` into the `Rows` field. 

![Show All Records](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/chart_row.PNG)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Chart illustration](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_seriesview.PNG)

## How to format stacked column chart?

You can format the stacked column chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into stacked column chart follow the steps

1. Drag and drop the stacked column chart into canvas and resize it to your required size.

2. Configure the data into stacked column chart.

3. Focus on the stacked column chart and click on widget settings.

![Widget Setting](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Widget-Setting.PNG)

The property window will be opened.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Property-window.PNG)

You can see the list of properties available for the widget with default value.

**General Settings**

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/General-Settings.PNG)

**Name**

This allows you to change the title for this stacked column chart widget

**Basic Settings**

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Basic-Settings.PNG)

**Chart Type**

This allows you to switch the widget view from current chart type to another convertible chart type.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Show-Legend.PNG)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Legend Label Color**

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color.png)

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

`{{ : Row }} ({{ : Y Value }})`

Where, Row represents the value of dimension column added to `Rows section` and Value represents the value of the measure column added to `Y Values section`. 

![Individual](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedbarchart_customlegendsettingwindow.PNG)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![Group](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedbar_customlegendsettinggroup.PNG)

For example, If Display Format is {{ : Row }} ({{ : Value }}), then Legend series will display like 1997(Sum of UnitInStock)

![Custom legend setting](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Stackedcolumnchart_customlegendsetting.PNG)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Show-Value-Labels.PNG)

**Value Label Color**

This allows you to customize value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Stackedcolumnchart_showlabelrotation.PNG)

**Value Label Suffix**

Allows you to enable the Suffix value text to the value labels. 

**Suffix Value**

Allows you to set\edit suffix value to the value labels. 

![Suffix Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Suffix-Value.PNG)

**Filter**

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Filter.PNG)

**Act as Master Widget**

This allows you to define this stacked column chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this stacked column chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Link.PNG)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container Appearance**

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Container-Appearance.PNG)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners, if the **Show Border** is enabled. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this stacked column chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**

This allows you to enable/disable the CSV export option for this stacked column widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this stacked column widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this stacked column chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in viewer.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/)

**Axis**

![Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

**Title color**

This allows you to customize the axis title color.

**Label color**

This allows you to customize the axis label color.

**Show Category Axis**

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_axis.PNG)

**Show Category Axis Title**

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_categoraxistitle.PNG)

**Category Axis Title**

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_editcategoraxistitle.PNG)

**Label overflow mode**

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/label-trim.PNG)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/hide-label.PNG)

#### Trim Axis Labels

This option allows you to trim axis labels, based on the 'Maximum Label Width' property value.

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/trimming-label.png)

#### Maximum Label Width

This option allows you to set maximum width for the axis labels, and also it can be made customizable when the trim axis label option is enabled.

![Maximum label width](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Maximum-label-width.png)

**Category Axis Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Label-Rotation.PNG)

**Show Primary Value Axis**

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Show-Primary-Value-Axis.PNG)

**Show Primary Value Axis Title**

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_categoryaxistitle.PNG)

**Primary Value Axis Title**

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/Primary-Axis-Title.PNG)

#### Axis Format

This option allows you to format primary and secondary axis values from the formatting details provided using 'Format' button. For more details, refer to this [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/formatting-button.png)

**Axis Range Settings**

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis Range settings output](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_axisrangeoutput.png)

**Grid Lines**

![Grid Lines](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/chartgridlines.PNG)

**Primary value Axis**	

This allows you to enable the `Primary Value Axis` gridlines for the stacked column chart.

![Primary value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_primaryaxis.PNG)
 
**Category Axis**	

This allows you to enable the `Category Axis` gridlines for the stacked column chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_categoryaxis.PNG)

**Series Palette**

This allows you to customize the chart series color through Series Palette section. 

***Use Default Palette***

This allows you to toggle the series color between default palette and custom palette. By default, the property is toggled on and default palette will be applied to series.

![Use Default Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/seriescolorpalette.PNG)

By toggle off the `Use Default Palette`, you can customize the series colors. This section shows, list of series labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. You can choose a color. And, you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series color palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/series-color-palette-window.PNG)

![Series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart_seriescolorpalatte.PNG)









