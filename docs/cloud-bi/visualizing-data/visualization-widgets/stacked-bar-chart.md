---
layout: post
title: Stacked Bar Chart – Cloud BI | Bold BI Documentation
description: Learn how to create a Stacked Bar Chart visual in Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Stacked Bar Chart
documentation: ug
---

# Stacked Bar Chart

Stacked Bar Chart allows you to compare multiple measures through bars stacked one after the other horizontally.

![Stacked Bar Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart.PNG)

## How to configure the flat table data to stacked bar chart?

Stacked Bar Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition.

Follow the steps to configure data to stacked bar chart.

Drag and drop the stacked bar chart into canvas and resize it your required size.

![Drag and drop the stacked bar chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/add-stackedbarchart.PNG)

Click `Data Source` button in configuration panel.

![Data Source](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Datasource button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, switch to `ASSIGN DATA` tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked bar assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarassigndata.PNG)

The data tab will be opened with available measures and dimensions from the connected data source

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chartdata.png)

You can add the required data from `Measures` and `Dimensions` into required field.

**Adding Y Values**

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Add more than one Measures](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/add-measures.PNG)

Now the stacked bar chart will be rendered like this

![Stacked bar chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/configured-stackedbarchart.PNG)

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Settings.PNG)

You can `Sort` the data using `Sort` option shown under `Settings` menu list. To sort the measure data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/)

![Sort](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/sorting.PNG)

You can filter the data to be displayed in funnel chart by using filter. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/widget-filters.PNG)

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type column](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Formatting-measure.PNG)

To remove the added value fields click highlighted button.

![Click highlighted button](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Remove-fields.PNG)

You can add more than one column from `Dimensions` field into `Y Values` field.

**Adding Columns**

You can add more than one value into `Columns` field. If you add more than one column, then drill down option enabled automatically.

![Add more than one value into Columns](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/adding-columns.PNG)

Stacked bar chart will be rendered like this

![Stacked bar chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart.PNG)

Add more than one value to `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, single value will be added to the `Columns` field.

![Drill alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/drillalert.PNG)

The drilled view of the chart region selected.

![Drilled view](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbardrill.PNG)

You can change the `Settings`.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/change-settings.PNG)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply Sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/).

![Sort](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/sortdimension.PNG)

You can apply filters by selecting filter in settings. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Configuring-filter.PNG)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

**Adding Rows**

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart_row.PNG)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render stacked bar chart in series.

![Stacked bar chart in series](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_series.PNG)

## How to format stacked bar chart?

You can format the stacked bar chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into stacked bar chart follow the steps

1. Drag and drop the stacked bar chart into canvas and resize it to your required size.

2. Configure the data into stacked bar chart.

3. Focus on the stacked chart and click on widget settings.

The property window will be opened.

![Property click](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Property-click.PNG)

![Property window](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Property-window.PNG)

You can see the list of properties available for the widget with default value.

**General Settings**

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/General-Settings.PNG)

**Name**

This allows you to change the title for this stacked bar chart widget

**Basic Settings**

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Basic-Settings.PNG)

**Chart Type**

This allows you to switch the widget view from current chart type to another convertible chart type.  

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Show-Legend.PNG)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Legend Label Color**

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-label-color.png)

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

`{{ : Row }} ({{ : Y Value }})`

Where, Row represents the value of dimension column added to `Rows section` and Value represents the value of the measure column added to `Y Values section`. 

![Custom Legend Settings Window](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_customlegendsettingwindow.PNG)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![Custom Legend Settings group](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbar_customlegendsettinggroup.PNG)

For example, If Display Format is {{ : Row }} ({{ : Value }}), then Legend series will display like 1997(Sum of UnitInStock)

![Custom Legend Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_customlegendsetting.PNG)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Show-Value-Labels.PNG)

**Value Label Color**

This allows you to customize value label's color.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/data-label-color.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_showlabelrotation.PNG)

**Value Label Suffix**

Allows you to enable the Suffix value text to the value labels. 

**Suffix Value**

Allows you to set\edit suffix value to the value labels. 

![Suffix Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Suffix-Value.PNG)

**Filter**

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Filter.PNG)

**Act as Master Widget**

This allows you to define this stacked bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this stacked bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Link.PNG)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container Appearance**

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Container-Appearance.PNG)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners, if the **Show Border** is enabled. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this stacked bar chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this stacked bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this stacked bar chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this stacked bar chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in viewer.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/)

**Axis**

![Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

**Title color**

This allows you to customize the axis title color.

**Label color**

This allows you to customize the axis label color.

**Show Category Axis**

This allows to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Show-Category-Axis.PNG)

**Show Category Axis Title**

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_categoryaxistitle.PNG)

**Category Axis Title**

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_editcategoryaxistitle.PNG)

**Label overflow mode**

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/label-trim.PNG)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode Hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/hide-label.PNG)

**Category Axis Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Label-Rotation.PNG)

**Show Primary Value Axis**

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Show-Primary-Value-Axis.PNG)

**Show Primary Value Axis Title**

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_primaryvalueaxistitle.PNG)

**Primary Value Axis Title**

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/Primary-Value-Axis-Title.PNG)

**Axis Range Settings**

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Output](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_axisrangeoutput.png)

**Grid Lines**

![Grid Lines](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chartgridlines.PNG)

**Primary value Axis**	

This allows you to enable the `Primary Value Axis` gridlines for the stacked bar chart.

![Primary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_primaryaxis.PNG)
 
**Category Axis**	

This allows you to enable the `Category Axis` gridlines for the stacked bar chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_categoryaxis.PNG)

**Series Palette**

This allows you to customize the chart series color through Series Palette section. 

***Use Default Palette***

This allows you to toggle the series color between default palette and custom palette. By default, the property is toggled on and default palette will be applied to series.

![Series Palette](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/seriescolorpalette.PNG)

By toggle off the `Use Default Palette`, you can customize the series colors. This section shows, list of series labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. You can choose a color. And, you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series Palette Window](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/series-color-palette-window.PNG)

![Series color Palette](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart_seriescolorpalatte.PNG)




