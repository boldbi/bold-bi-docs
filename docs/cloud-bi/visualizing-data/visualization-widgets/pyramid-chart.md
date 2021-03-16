---
layout: post
title: Pyramid Chart – Cloud BI Visual | Bold BI Documentation
description: Learn how to create a Pyramid Chart visual in Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Pyramid Chart
documentation: ug
---

# Pyramid Chart

The Pyramid Chart is a triangle diagram, which allows you to make proportional comparisons between values showcased in a progressively increasing manner. It consists of various segments, each representing a data point.

![Pyramid Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart.png)

## How to configure table data in the Pyramid Chart

The Pyramid Chart needs a minimum of one value element and one column element to showcase. The measure or expression field that you want to analyze can be dropped into Values block. The dimension for which you want to categorize the measure can be dropped into the Columns block. To categorize the measure based on a series, drop the respective dimension into the Rows block.

To configure data in the Pyramid Chart, follow these steps:

1. Drag the Pyramid Chart into the canvas and resize it to your required size.

![Drag and drop](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/add-pyramidchart.png)

2. Click the **Data Source** icon in the configuration panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3. Click **CREATE NEW** to launch a new connection from the connection-type panel.

![Add data source](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection-type panel, click any one of the listed connection type buttons shown. Here, Microsoft Excel connection type is selected for demonstration.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the NEW DATA SOURCE configuration panel, choose the file path and click **Preview & Connect**.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from the data design view and click **Save**.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Click the **Properties** icon in the configuration panel. The property pane opens.

![Properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

Now, switch to the **ASSIGN DATA** tab.

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/assigndata.png)

The data tab will be opened with the available measures and dimensions from the connected data source.

![Chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/chartdata.png)

You can add the required data from measures and dimensions to the required field.

**Adding values**

You can add more than one data from the Measures section to the Values field by dragging the required data.

![Adding data to value](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Adding-values.png)

Now, the Pyramid Chart will be rendered as follows.

![Pyramid chart with more values](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/configured-pyramidchart.png)

Click **Settings** to change the required summary type from the available summary types shown in the settings.

![Settings option](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart_settings.png)

You can filter data displayed in the Pyramid Chart by using the Filter option. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter option](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Filter-option.png)

You can format the data displayed in the chart by using the Format option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Format option](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Format-option.png)

To remove the added value fields, click **Remove**.

![Remove button](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Remove-button.png)

**Adding columns**

You can add data from the Dimensions field into the Columns field.

![Add data to column](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Adding-columns.png)

The Pyramid Chart will be rendered as follows.

![Pyramid chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart_column.png)

Add more than one Dimension field into the Columns field. The alert message will open.

![Drill alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/drillalert.png)

You can enable this option to get the further details about the selected chart region. To enable drill down, click **Yes**.

![Select chart region](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Select-chart-region.png)

> **NOTE:**  If you click **No**, a single value will be added to the columns field.

The drilled-down view of the selected chart region will be as follows.

![Drilled chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramiddrill.png)

You can change the settings.

![Column settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Column-settings.png)

You can sort the dimension data using the Sort option under the Settings menu list. To apply sorting for the data, refer to [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort option](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Sort-option.png)

You can apply a filter by selecting the filter option in settings. For more details, refer to [filters](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

> **NOTE:**  By default, the filter will be set for the top 5 records.

![Filter option column](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Filter-option-column.png)

Similarly, you can add the Measures and Expression Columns into the Column field.

**Adding rows**

You can drag the Dimension section into the Rows field.

![Add data to row](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/chart_row.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a pyramid chart in the series.

![Pyramid charts in series](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart_series.png)

Scroll down to see all charts.

## How to format a Pyramid Chart

You can format a Pyramid Chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in the Pyramid Chart, follow these steps:

1. Drag the Pyramid Chart into the canvas and resize it to your required size.

2. Configure the data in the Pyramid Chart.

3. Focus the Pyramid Chart and click the **Widget Settings** icon.

![Widget settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidwidgetsettings.png)

The property window will be opened as follows.

![Pyramid chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidproperties.png)

You can see the list of properties available for the widget with default value.

**General settings**

![Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Title.png)

**Name**

Allows you to set a title for the Pyramid Chart widget.

**Subtitle**

Allows you to set a subtitle for the Pyramid Chart widget.

**Description**

Set a description for the Pyramid Chart widget whose visibility will be denoted by the **i** icon, and hovering over it will display the description in a tooltip.

**Basic settings**

![Basic settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Basic-settings.png)

**Chart type**

Switch the widget view from the current chart type to another chart type.

**Enable animation**

Enable the series rendering in animated mode.

**Show legend**

A legend is text used to describe the plotted data. It allows you to toggle the visibility of the legend in chart and change the legend text position (selecting through combo box).

![Show legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

**Legend Label Color**

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/legend-label-color.png)

**Show value labels**

Toggle the visibility of value labels.

![Show value labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Show-value-labels.png)

**Value Label Color**

This allows you to customize value label's color.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/data-label-color.png)

**Data label value**

Define the display format as a value, percentage, or both.

**Value**

![Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramid_value.png)

**Percentage**

![Percentage](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramid_percent.png)

**Value and percentage**

![Value and percentage](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramid_valuepercent.png)

**Value labels suffix**

Set a suffix for the value labels.

![Value labels suffix](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/labels-suffix.png)

**Filter**

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Filter.png)

**Act as master widget**

Define the Pyramid Chart widget as a master widget such that its filter action will be shown in other widgets of the dashboard.

**Ignore filter actions**

Define the Pyramid Chart widget to ignore the filter actions applied to other widgets in the dashboard.

**Hierarchical filter**

Through this option, you can enable or disable hierarchical Top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the hierarchical filter option is enabled, the Top N filter will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Link.png)

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container appearance**

![Container appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/Container-appearance.png)

**Title alignment**

Handle the alignment of the widget title to the left, center, or right.

**Title color**

Apply a text color to the widget title.

**Show border**

Toggle the visibility of the border surrounding the widget.

**Corner radius**

Apply a specified radius to widget corners if the `Show Border` property is enabled. Values can be between 0 and 10.

**Show maximize**

Enable or disable the maximized mode of the Pyramid Chart widget. The visibility of the maximize icon in the widget header will be defined based on this setting in the viewer.

**CSV export**

Enable or disable the CSV export option for the Pyramid Chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

**Excel export**

Enable or disable the Excel export option for the Pyramid Chart widget. Enabling this allows you to export the summarized data of the widget view to .xlsx or .xls format in the viewer.

**Image export**

Enable or disable the image export option for the Pyramid Chart widget. Enabling this allows you to export the view of the widget to image format (.jpg, .png, or .bmp) in the viewer.

**Enable comments**

Enable or disable the comments for the dashboard widget. For more details refer [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/)

**Series palette**

Customize the chart series color through the Series Palette section.

**Use default palette**

Toggle the series color between the default palette and a custom palette. By default, the property the Use Default Palette option is toggled on and the default palette will be applied to proportion series segments.

![Series color palette](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/seriescolorpalette.png)

By toggling off the Use Default Palette option, you can customize the proportion series segments' colors. This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the series color by changing the corresponding hexadecimal value at the right.

![Series color palette window](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/series-color-palette-window.png)

![Pyramid chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart_seriescolorpalette.png)