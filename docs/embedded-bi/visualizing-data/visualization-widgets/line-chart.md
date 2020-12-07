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

![Line Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/line-chart.PNG)

## How to configure the table data to line chart?

Line Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition.

Follow the steps to configure data to Line chart

Drag and drop the control to canvas and resize it to your required size.

![Drag and drop the control](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/add-linechart.PNG)

Click `Data Source` button in configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![CREATE NEW](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![Designer properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Line assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/lineassigndata.PNG)

The data tab will be opened with available measures and dimensions from the connected data source

![chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chartdata.png)

You can add the required data from `Measures` and `Dimensions` into required field.

**Adding Y Values**

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Add more than one Measures](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/add-y-values.PNG)

Now, the line chart will be rendered like this

![Line chart will be rendered](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/configured-chart.PNG)

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_settings.PNG)

You can `Sort` the data using `Sort` option shown under `Settings` menu list. To sort the measure data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/)

![Advanced sorting](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/sort-option.PNG)

You can filter the data to be displayed in funnel chart by using filter. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/widget-filters.PNG)

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type column](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Formatting-measure.PNG)

To remove the added value fields click highlighted button.

![Click highlighted button](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/remove-fields.PNG)

You can add more than one column from `Dimensions` field into `Y Values` field.

**Adding Columns**

You can add more than one value into `Columns` field.

![Add more than one value into Columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/adding-columns.PNG)

Line chart will be rendered like this

![Line chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/line-chart.PNG)

Add more than one value to `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, single value will be added to the `Columns` field.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/drillalert.PNG)

The drilled view of the chart region selected.

![Drilled view of the chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linedrill.PNG)

You can change the `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Settings.PNG)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Sort-Settings.PNG)

You can apply filters by selecting filters option in settings. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Configuring-filter.PNG)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

**Adding Rows**

You can drag and drop the `Dimension` into the `Rows` field. 

![Drag and drop the Dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chart_row.PNG)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render line chart in series.

![Linechart_series](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_series.PNG)

## How to format line chart?

You can format the line chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into line chart follow the steps

1. Drag and drop the line chart into canvas and resize it to your required size.

2. Configure the data into line chart.

3. Focus on the line chart and click on widget settings.

![Line widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linewidgetsettings.PNG)

The property window will be opened

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/lineproperties.PNG)

**General Settings**

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/General-Settings.PNG)

**Name**

This allows you to change the title for this line chart widget.

**Basic Settings**

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Basic-Settings.PNG)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Show-Legend.PNG)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

`{{ : Row }} ({{ : Y Value }})`

Where, Row represents the value of dimension column added to `Rows section` and Value represents the value of the measure column added to `Y Values section`. 

![Custom Legend Settings window](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_customlegendsettingwindow.PNG)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![Custom Legend Settings group](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_customlegendsettinggroup.PNG)

For example, If Display Format is {{ : Row }} ({{ : Value }}), then Legend series will display like Austria (Sum of Freight)

![Custom Legend Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_customlegendsetting.PNG)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Show-Value-Labels.PNG)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_showlabelrotation.PNG)

**Value Label Suffix**

Allows you to enable the Suffix value text to the value labels. 

**Suffix Value**

Allows you to set\edit suffix value to the value labels. 

![Value Label Suffix](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Label-Suffix.PNG)

**Show Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series.

![Show Marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Show-Marker.PNG)

**Filter**

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Filter.PNG)

**Act as Master Widget**

This allows you to define this chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Link.PNG)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container Appearance**

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Container-Appearance.PNG)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners, if the **Show Border** is enabled. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this line chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**

This allows you to enable/disable the CSV export option for this line chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this line chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this line chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.PNG), or (.bmp) in viewer.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/)

**Axis Settings**

![Axis Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chartAxis.PNG)

This section allows you to customize the axis settings in chart. 

**Show Category Axis**

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Show-Category-Axis.PNG)

**Show Category Axis Title**

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_categoryaxistitle.PNG)

**Category Axis Title**

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_editcategoryaxistitle.PNG)

**Label overflow mode**

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Show-Category-Axis.PNG)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/hide-label.PNG)

**Category Axis Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Label-Rotation.PNG)

**Show Primary Value Axis**

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Show-Primary-Value.PNG)

**Show Primary Value Axis Title**

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_primaryvalueaxistitle.PNG)

**Primary Value Axis Title**

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Primary-Value-Axis-Title.PNG)

**Axis Range Settings**

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Settings output](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/linechart_axisrangeoutput.png)

**Grid Line**

![Grid Line](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/chartgridlines.PNG)

**Primary Value Axis**

This allows you to enable the `Primary Value Axis` gridlines for the line chart.

![Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Enable-Primary-Value-Axis.PNG)

**Category Axis**

This allows you to enable the `Category Axis` gridlines for the line chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/Category-Axis.PNG)

**Series Palette**

This allows you to customize the chart series color through Series Palette section. 

***Use Default Palette***

This allows you to toggle the series color between default palette and custom palette. By default, the property is toggled on and default palette will be applied to series.

![Series Color Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/seriescolorpalette.PNG)

By toggle off the `Use Default Palette`, you can customize the series colors. This section shows, list of series’ labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. You can choose a color. And, you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series Color Palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/series-color-palette-window.PNG)

![Line Series Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/line-chart/lineseriescolor.PNG)






