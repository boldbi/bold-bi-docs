---
layout: post
title: Doughnut Chart – Cloud BI Visual | Bold BI Documentation
description: Learn how to create a Doughnut Chart visual in Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Doughnut Chart
documentation: ug
---

# Doughnut Chart

The Doughnut Chart allows you to showcase proportionality of each item to the total in the form of doughnut-slices. It works best to display data with a small number of categories.

![Doughnut chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart_column.png)

## How to configure table data in the Doughnut Chart

The Doughnut Chart needs a minimum of one value element and one column element to showcase. The measure or expression field that you want to analyze can be dropped into the Values block. The dimension for which you want to categorize the measure can be dropped into the Columns block. To categorize based on a series, drop the respective dimension into the Rows block.

To configure data in the Doughnut Chart, follow these steps:

1. Drag the Doughnut Chart into the canvas and resize it to your required size.

![Drag and drop](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/add-doughnutchart.png)

2. Click the **Data Source** icon in the configuration panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3. Click **CREATE NEW** to launch a new connection from the connection-type panel.

![Add data source](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4. In the connection-type panel, click any one of the listed connection type buttons shown. Here, the Microsoft Excel connection type is selected for demonstration.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5. In the NEW DATA SOURCE configuration panel, choose the file path and click **Preview & Connect**.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

6. Drag your preferred table or view from the left pane from the data design view and click **Save**.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7. Click the **Properties** icon in the configuration panel. The property pane opens.

![Properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8. Now, switch to the **ASSIGN DATA** tab.

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/assigndata.png)

The data tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/chartdata.png)

You can add the required data from Measures and Dimensions sections to the required field.

**Adding values**

You can add more than one measures section to the Values field by dragging the required data.

![Add data to value](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Add-data.png)

Now, the doughnut chart will be rendered as follows.

![Configured Doughnut chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/configured-doughnutchart.png)

Click **Settings** to change the required summary type from the available summary types shown in the settings.

![Settings option](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart_settings.png)

You can filter the data displayed in the Doughnut Chart by using the Filter option. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter option](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Filter-option.png)

You can format the data displayed in the Doughnut Chart by using the Format option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Format option](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Format-option.png)

To remove the added value fields, click **Remove**.

![Remove button](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Remove-fields.png)

**Adding columns**

You can add data from the Dimension field to the Column(s) field.

![Add data to column](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/add-column.png)

The Doughnut Chart will be rendered as follows.

![Doughnut chart with column field](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart_column.png)

Add more than one value to the Columns field. The following alert message will open.

![Drill alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/drillalert.png)

You can enable this option to get further details about the selected chart region. To enable drill down, click **Yes**.

![Selecting chart region](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/select-region.png)

> **NOTE:**  If you click No, a single value will be added to the Columns field.

The drilled view of the selected chart region will be as follows.

![Drilled chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutdrill.png)

You can change the Settings.

![Column settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/columnsettings.png)

You can sort the dimension data using the Sort option under the Settings menu list. To apply sorting for data, refer to [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort option](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/sortoption.png)

You can apply filters by selecting the filter option in settings. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

> **NOTE:**  By default, the filter will be set for the top 5 records.

Similarly, you can add the Measures and Expression Columns to the Column field.

**Assigning rows**

You can drag the Dimension field into the Rows field.

![Add data to row](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/chart_row.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a Doughnut Chart in series.

![Doughnut chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart_series.png)

Scroll down to see all charts.

## How to format Doughnut Chart

You can format the Doughnut Chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in Doughnut Chart, follow these steps:

1. Drag and drop the Doughnut Chart into the canvas and resize it to your required size.

2. Configure data in the Doughnut Chart.

3. Focus the Doughnut Chart and click the Widget Settings icon.

![Widget settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Widget-settings.png)

The property window will be opened as follows.

![Property window](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/property-window.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Title.png)

**Name**

Allows you to set a title for the Doughnut Chart widget.

**Subtitle**

Allows you to set a subtitle for the Doughnut Chart widget.

**Description**

Set a description for the Doughnut Chart, whose visibility will be denoted by **i** icon, and hovering over it will display the description in a tooltip.

**Basic settings**

![Basic settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Basic-settings.png)

**Chart type**

Switch the widget view from the current chart type to another chart type.

**Enable animation**

This allows you to enable the series rendering in animated mode.

**Show legend**

A Legend is a text used to describe the plotted data. It allows you to toggle the visibility of the legend in the chart and change the legend text position (selecting through the combo box).

![Show legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

**Show value labels**

Toggle the visibility of value labels.

![Show value labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/value-labels.png)

**Data label**

Define the display format as a value, percentage, or both.

**Value**

![Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Value.png)

**Percentage**

![Percentage](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/value-labels.png)

**Value and percentage**

![Value and percentage](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart_valueandpercent.png)

**Value labels suffix**

Set a suffix for the value labels.

![Value labels suffix](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Value-label-suffix.png)

**Filter**

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Filter.png)

**Act as Master Widget**

Define the Doughnut Chart widget as a master widget such that its filter action will be shown in other widgets of the dashboard.

**Ignore filter actions**

Define the Doughnut Chart widget to ignore the filter actions applied to other widgets in the dashboard.

**Hierarchical Filter**

Through this option, you can enable or disable hierarchical Top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of added dimension columns.

When the Hierarchical Filter option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Link.png)

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container appearance**

![Container appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/Container-appearance.png)

**Title alignment**

Handle the alignment of the widget title to left, center, or right.

**Title color**

Apply a text color to the widget title.

**Show border**

Toggle the visibility of the border surrounding the widget.

**Corner radius**

Apply a specified radius to widget corners, if the **Show Border** property is enabled. Value can be between 0 and 10.

**Show maximize**

Enable or disable the maximized mode of the doughnut chart widget. The visibility of the maximize icon in the widget header will be defined based on this setting.

**CSV export**

Enable or disable the CSV export option for the Doughnut Chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

**Excel export**

Enable or disable the Excel export option for the Doughnut Chart widget. Enabling this allows you to export the summarized data of the widget view to .xlsx or .xls format in the viewer.

**Image export**

Enable or disable the image export option for the Doughnut Chart widget. Enabling this allows you to export the view of the widget to image format (.jpg, .png, or .bmp) in the viewer.

**Enable comments**

Enable or disable the comments for the dashboard widget. For more details refer [here](/dashboard-cloud/visualize-data/commenting-dashboard-and-widget)

**Series palette**

Customize the chart series color through the Series Palette section.


**Use default palette**

Toggle the series color between the default palette and a custom palette. By default, the Use Default Palette is toggled on and default palette will be applied to proportion series segments.

![Series color palette](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/seriescolorpalette.png)

By toggle off the Use Default Palette, you can customize the proportion series segments' colors. This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the series color by changing the corresponding hexadecimal value at the right.

![Series color palette window](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/series-color-palette-window.png)

![Doughnut chart Series color](/static/assets/cloud/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart_seriescolorpalette.png)




