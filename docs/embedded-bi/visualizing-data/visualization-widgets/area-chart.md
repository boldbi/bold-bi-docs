---
layout: post
title: Area Chart Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Area Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/area-chart/"
platform: bold-bi
control: Area Chart
documentation: ug
---

# Area Chart

Area Chart allows you to compare values for a set of unordered items across categories through filled curves ordered vertically.

![Area Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/area-chart.PNG)

## How to configure the table data to area chart?

Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

Following chart illustrates about how to configure data to area chart

Drag and drop the area chart widget into canvas and resize into your required size.

![Configure the table data](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/configure-widget.PNG)

Click `Data Source` button in configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![CREATE NEW](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Save](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![Properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![ASSIGN DATA](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areaassigndata.PNG)

The data tab will be opened with available measures and dimensions from the connected data source

![Data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/assign-data-section.png)

You can add the required data from `Measures` and `Dimensions` into required field.

**Adding Y Values**

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Drag and drop the required measure](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/add-measure.PNG)

Now the area chart will be rendered like this

![Configured Area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/configured-widget.PNG)

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/settings-menu.PNG)

You can `Sort` the data using `Sort` option shown under `Settings` menu list. To sort the measure data, refer [Sort](/dashboard-cloud/visualize-data/advanced-sorting)

![Sort option](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/sort-option.PNG)

You can filter the data to be displayed in chart by using filter. For more details, refer [filter](/dashboard-cloud/visualize-data/configuring-widget-filters).

![Configuring widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/configuring-filters.PNG)

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/dashboard-cloud/visualize-data/formatting-measure-type-column)

![Formatting measure type](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/formatting.PNG)

To remove the added value fields click highlighted button.

![click highlighted button](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/remove-fields.PNG)

You can add more than one column from `Dimensions` field into `Y Values` field.

**Adding Columns**

You can add more than one value into `Columns` field. 

![Add more than one value](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/add-more-fields.PNG)

Area chart will be rendered like this

![Area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/area-chart.PNG)

Add more than one value to `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, single value will be added to the `Columns` field.

![Drillalert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.PNG)

The drilled view of the chart region selected.

![Drilled view of the chart region](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areadrill.PNG)

You can change the `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/column-settings.PNG)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/dashboard-cloud/visualize-data/advanced-sorting#dimension-column).

![Sort the dimension data](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/sortdimension.PNG)

You can apply filters by selecting filters option in settings. For more details, refer [filter](/dashboard-cloud/visualize-data/configuring-widget-filters#configuring-filter-for-dimension-column).	

![Filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/dimension-filter.PNG)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

**Adding Rows**

You can drag and drop the `Dimension` into the `Rows` field.

![Adding Rows](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/add_row.PNG)

You can apply [filter](/dashboard-cloud/visualize-data/configuring-widget-filters#configuring-filter-for-dimension-column) and [sort](/dashboard-cloud/visualize-data/advanced-sorting#dimension-column) option for the rows field, if required.

This will render area chart in series.

![Render area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_series.PNG)

## How to format area chart?

You can format the area chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To format area chart follow the steps

Drag and drop the area chart into canvas and resize it to your required size.

Configure the data into area chart.

Focus on the area chart and click on widget settings.

![Widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areawidgetsettings.PNG)

The property window will be opened.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areaproperties.PNG)

You can see the list of properties available for the widget with default value.

**General Settings**

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/general-settings.PNG)

**Name**

This allows you to change the title for this area chart widget.

**Basic Settings**

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/basic-settings.PNG)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/show-legend.PNG)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

`{{ : Row }} ({{ : Y Value }})`

Where, Row represents the value of dimension column added to `Rows section` and Value represents the value of the measure column added to `Y Values section`. 

![Custom legend setting window](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_customlegendsettingwindow.PNG)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![Custom legend setting group](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/customlegendsettinggroup.PNG)

For example, If Display Format is {{ : Row }} ({{ : Value }}), then Legend series will display like Austria (Sum of Freight)

![Custom legend setting](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_customlegendsetting.PNG)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/show-labels.PNG)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_showlabelrotation.PNG)

**Value Label Suffix**

Allows you to enable the Suffix value text to the value labels. 

**Suffix Value**

Allows you to set\edit suffix value to the value labels. 

![Suffix Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/suffix-value.PNG)

**Show Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series.

![Visibility of marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/show-marker.PNG)

**Filter**

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/filtering.PNG)

**Act as Master Widget**

This allows you to define this area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/linking.PNG)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/dashboard-cloud/visualize-data/linking-urls-and-dashboards). 

**Container Appearance**

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/container-appearance.PNG)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners, if the **Show Border** is enabled. Value can be between 0 and 10.

**Maximized View**

This allows you to enable/disable the maximized mode of this area chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**

This allows you to enable/disable the CSV export option for this area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this area chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this area chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.PNG), or (.bmp) in viewer.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/dashboard-cloud/visualize-data/commenting-dashboard-and-widget)

**Axis**

![Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/chartAxis.PNG)

This section allows you to customize the axis settings in chart. 

**Show Category Axis**

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/category-axis.PNG)

**Show Category Axis Title**

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_categoryaxistitle.PNG)

**Category Axis Title**

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_editcategoryaxistitle.PNG)

**Label overflow mode**

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/category-axis.PNG)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/hide-overflow.PNG)

**Category Axis Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/label-rotation.PNG)

**Show Primary Value Axis**

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/primary-axis.PNG)

**Show Primary Value Axis Title**

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_primaryvalueaxistitle.PNG)

**Primary Value Axis Title**

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/axis-title.PNG)

**Axis Range Settings**

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the Axis Range Settings dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_axisrangesettings.PNG)

It will reflect in the primary value axis of the chart.

![Axis Range Settings Output](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areachart_axisrangeoutput.PNG)

**Grid Line**

![Grid Line](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/chartgridlines.PNG)

**Primary Value Axis**

This allows you to enable the `Primary Value Axis` gridlines for the area chart.

![Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/primary-value-axis.PNG)

**Category Axis**

This allows you to enable the `Category Axis` gridlines for the area chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/enable-category-axis.PNG)

**Series Palette**

This allows you to customize the chart series color through Series Palette section. 

***Use Default Palette***

This allows you to toggle the series color between default palette and custom palette. By default, the property is toggled on and default palette will be applied to series.

![Use Default Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/seriescolorpalette.PNG)

By toggle off the `Use Default Palette`, you can customize the series colors. This section shows, list of series’ labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. You can choose a color. And, you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series color palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/seriescolorpalettewindow.PNG)

![Series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/area-chart/areaseriescolor.PNG)





