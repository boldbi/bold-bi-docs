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

![Stacked area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/100%-Stacked-Area-Chart.png)

## How to configure the table data to 100% stacked area chart?

100% Stacked Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

Follow the steps to configure data to 100% stacked area chart

Drag and drop the 100% stacked area chart into canvas and resize it to your required size.

![Adding widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drop-widget.PNG)

Click `Data Source` button in configuration panel.

![Data button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, switch to `ASSIGN DATA` tab.

![Designer properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/assign-data.PNG)

The data tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-pane.png)

You can add the required data from `Measures` and `Dimensions` into required field.

 **Adding Y Values**

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Adding Y values](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/adding-y-values.PNG)

Now the chart will be rendered like this,

![Configured widget with Y values](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-widget.PNG)

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Settings menu](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings-menu.PNG)

You can `Sort` the data using `Sort` option shown under `Settings` menu list. To sort the measure data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/)

![Sorting](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/sorting.PNG)

You can filter the data to be displayed in chart by using filter option. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filtering](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filtering.PNG)

To remove the added value fields click highlighted button.

![Remove fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/remove-fields.PNG)

You can add more than one column from `Dimensions` field into `Y Values` field.

**Adding Columns**

You can add more than one value into `Columns` field.

![Adding columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/adding-columns.PNG)

Chart will be rendered like this,

![Configured widget with columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-columns.PNG)

Add more than one value to `Columns` field, the alert message will be shown to enable the drill down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, single value will be added to the `Columns` field.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drillalert.PNG)

The drilled view of the chart region selected.

![Drilled view](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drilled-view.PNG)

You can change the `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings.PNG)

You can `Sort` the dimension data using  Sort option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sorting](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/sort-dimension.PNG)

You can apply filters by selecting filters option in settings. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Dimension Filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/dimension-filters.PNG)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

**Adding Rows**

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 

![Adding row](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/adding_row.PNG)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render chart in series.

![Configured with series](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-with-series.PNG)


## How to format 100% stacked area chart?

You can format the 100% stacked area chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into 100% stacked area chart follow the steps

1. Drag and drop the 100% stacked area chart into canvas and resize it to your required size.

2. Configure the data into 100% stacked area chart.

3. Focus on the 100% stacked area chart and click on widget settings.

![Settings Icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings-icon.PNG)

The property window will be opened.

![Properties pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/properties-pane.PNG)

You can see the list of properties available for the widget with default value.

**General Settings**

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/general-settings.PNG)

**Name**

This allows you to change the title for this 100% stacked area chart widget.

**Basic Settings**

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/basic-settings.PNG)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-legend.PNG)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

`{{ : Row }} ({{ : Y Value }})`

Where, Rows represents the value of dimension column added to `Rows section` and Value represents the value of the measure column added to `Y Values section`. 

![Custom legend settings window](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/customlegendsettingwindow.PNG)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![Custom legend settings group](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/customlegendsettinggroup.PNG)

For example, If Display Format is {{ : Row }} ({{ : Value }}), then Legend series will display like Brazil (Sum of UnitsInStock)

![Custom legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/customlegendsetting.PNG)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![Show value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-value-label.PNG)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![Value label rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/label-rotation.PNG)

**Value Label Suffix**

Allows you to enable the Suffix value text to the value labels. 

**Suffix Value**

Allows you to set\edit suffix value to the value labels. 

![Suffix value](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/suffix-value.PNG)

**Show Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series.

![Show marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-marker.PNG)

**Filter**

![Filter settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-settings.PNG)

**Act as Master Widget**

This allows you to define this 100% stacked area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this 100% stacked area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Link**

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/linking.PNG)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container Appearance**

![Container appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/container-appearance.PNG)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners, if the **Show Border** is enabled. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this 100% stacked area chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this 100% stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this 100% stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this 100% stacked area chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.PNG), or (.bmp) in viewer.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/embedded-bi/working-with-widgets/commenting-widget/)

**Axis Settings**

![Axis settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-settings.PNG)

This section allows you to customize the axis settings in chart. 

**Show Category Axis**

This allows to enable the visibility of `Category Axis`.

![Show Category axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis.PNG)

**Show Category Axis Title**

This allows you to enable the visibility of `Category Axis` title.

![Show Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis-title.PNG)

**Category Axis Title**

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.PNG)

**Label overflow mode**

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.PNG)

***Hide***

This option hides the overlapping label in the axis. 

![Hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/hide.PNG)

**Category Axis Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![Axis label rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-label-rotation.PNG)

**Show Primary Value Axis**

This allows you to enable the `Primary Value Axis` for chart. 

![Show primary value axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-primary-value-axis.PNG)

**Show Primary Value Axis Title**

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/primary-value-axis-title.PNG)

**Primary Value Axis Title**

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary value axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/edit-primary-value-axis-title.PNG)

**Axis Range Settings**

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis range settings output](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangeoutput.png)


**Grid Line**

![Chart grid lines](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/gridlines.PNG)

**Primary value Axis**

This allows you to enable the `Primary Value Axis` gridlines for the 100% stacked area chart.

![Axis Gridline](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-gridline.PNG)

**Category Axis**

This allows you to enable the `Category axis` gridlines for the 100% stacked area chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis.PNG)

**Series Palette**

This allows you to customize the chart series color through Series Palette section. 

***Use Default Palette***

This allows you to toggle the series color between default palette and custom palette. By default, the property is toggled on and default palette will be applied to series.

![Proportion chart series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/seriescolorpalette.PNG)

By toggle off the `Use Default Palette`, you can customize the series colors. This section shows, list of series labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. You can choose a color. And, you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series color palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/series-color-palette-window.PNG)

![Hundred percent area series color](/static/assets/embedded/visualizing-data/visualization-widgets/images/100-stacked-area-chart/series-color.PNG)
