---
layout: post
title: Funnel Chart – Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Funnel Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/funnel-chart/"
platform: bold-bi
control: Funnel Chart
documentation: ug
---

# Funnel Chart

The Funnel Chart control shows values across multiple stages in a process by highlighting different stages with different colors. It allows you to make proportional comparisons between values showcased in a progressively decreasing manner.

![Funnel chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnel-chart.png)

## How to configure table data in the Funnel Chart

The Funnel Chart needs a minimum of one value element and one column element to showcase. The measure or expression field that you want to analyze can be dropped into the Values block. The dimension for which you want to categorize the measure can be dropped into the Columns block. To categorize the measure based on a series, drop the respective dimension into the Rows block.

To configure data in the Funnel Chart, follow these steps:

1. Drag the Funnel Chart into the canvas and resize it to your required size.

![Drag and drop](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/add-funnelchart.png)

2. Click the **Data Source** icon in the configuration panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnelchart_databutton.png)

3. Click **CREATE NEW** to launch a new connection from the connection-type panel.

![Add data source](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4. In the connection-type panel, click any one of the listed connection type buttons shown. Here, Microsoft Excel connection type is selected for demonstration.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5. In the NEW DATA SOURCE configuration panel, choose the file path and click **Preview &Connect**.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

6. Drag your preferred table or view from the left pane from the data design view and click **Save**.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7. Click the **Properties** icon in the configuration panel. The property pane opens.

![Properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8. Now, switch to **ASSIGN DATA** tab.

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/assigndata.png)

The data tab will be opened with the available measures and dimension sections from the connected data source.

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/chartdata.png)

**Adding values**

You can add the required data from the Measures and Dimensions sections to the required field.

![Add data to value](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Add-data.png)

You can add more than one measure section to the Values field by dragging the required measures.

![Add more data](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Add-more-data.png)

Now, the Funnel Chart will be rendered as follows.

![Configured Funnel chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/configured-widget.png)

Click **Settings** to change the required summary type from the available summary types shown in the settings.

![Settings option](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnelchart_settings.png)

You can filter the data displayed in the Funnel Chart by using the Filter option. For more details, refer to [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter option](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/filteroption.png)

You can format the data displayed in the chart by using the Format option. For more details, refer to [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Format option](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/formatoption.png)

To remove the added value fields, click **Remove**.

![Remove button](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/removebutton.png)

**Adding columns**

Drag data from the Dimension field to the Column(s) field.

![Add data to column](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnelchart_columnfield.png)

The Funnel Chart will be rendered as follows.

![Funnel chart with dimension field](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnel-chart.png)

You can add more than one value to the Columns field. The following message will open.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/drillalert.png)

You can enable this option to get further details about the selected chart region. To enable drill down, click **Yes**.

![Selecting chart region](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/select-region.png)

> **NOTE:**  If you click No, a single value will be added to the columns field.

The drilled-down view of the selected chart region will be as follows.

![Drilled chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Drilled-chart.png)

You can change the Settings.

![Column settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/columnsettings.png)

You can sort the dimension data using the Sort option under the Settings menu list. To apply sorting for the data, refer to [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort option](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/sortoption.png)

You can apply a filter by selecting the filter option in settings.

> **NOTE:**  By default, the filter will be set for the top 5 records.

You can apply filters by selecting the filter option in settings. For more details, refer to [filters](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

Similarly, you can add the Measures and Expression Columns to the Column field.

**Adding rows**

You can drag the Dimension into the Rows field.

![Add data to row](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnelchart_row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a funnel chart in the series.

![Funnel chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnelchart_series.png)

Scroll down to see all charts. 

## How to format a Funnel Chart

You can format a Funnel Chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in Funnel Chart, follow these steps:

1. Drag and drop the Funnel Chart into the canvas and resize it to your required size.

2. Configure data in the Funnel chart.

3. Focus the funnel chart and click the Widget Settings icon.

![Widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Widget-settings.png)

The property window will be opened as follows.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/property-window.png)

You can see the list of properties available for the widget with default value.

**General settings**

![Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Title.png)

**Name**

Allows you to set a title for the Funnel Chart widget.

**Subtitle**

Allows you to set a subtitle for the Funnel Chart widget.

**Description**

Set a description for the Funnel Chart widget, whose visibility will be denoted by **i** icon, and hovering over it will display the description in a tooltip.

**Basic settings**

![Basic settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Basic-settings.png)

**Chart type**

Switch the widget view from the current chart type to another chart type.

**Enable animation**

Enable the series rendering in animated mode.

**Show legend**

A Legend is text used to describe the plotted data. It allows you to toggle the visibility of the legend in the chart and change the legend text position (selecting through the combo box).

![Show legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Show-legend.png)

Enabling the Custom Legend Text option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

**Show value labels**

Toggle the visibility of value labels.

![Show value labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Show-value-labels.png)

**Data label**

Define the display format as a value, percentage, or both.

**Value**

![Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Value.png)

**Percentage**

![Percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Percentage.png)

**Value and percentage**

![Value and percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Value-and-percentage.png)


**Value labels suffix**

Set a suffix for the value labels.

![Value labels suffix](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Value-labels-suffix.png)

**Filter**

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Filter.png)

**Act as Master Widget**

Define the Funnel Chart widget as a master widget such that its filter action will be shown in other widgets of the dashboard.

**Ignore filter actions**

Define the Funnel Chart widget to ignore the filter actions applied to other widgets in the dashboard.

**Hierarchical filter**

Through this option, you can enable or disable hierarchical Top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the Hierarchical Filter option is enabled, the Top N filter will be applied for each individual column separately based on the number set for each column.

**Link**

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Link.png)

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Container appearance**

![Container appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/Container-appearance.png)

**Title alignment**

Handle the alignment of the widget title to left, center, or right.

**Title color**

Apply a text color to the widget title.

**Show border**

Toggle the visibility of the border surrounding the widget.

**Corner radius**

Apply a specified radius to widget corners, if the `Show Border` property is enabled. Values can be between 0 and 10.

**Show maximize**

Enable or disable the maximized mode of the Funnel Chart widget. The visibility of the maximize icon in the widget header will be defined based on this setting in the viewer.

**CSV export**

Enable or disable the CSV export option for the Funnel Chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

**Excel export**

Enable or disable the Excel export option for the Funnel Chart widget. Enabling this allows you to export the summarized data of the widget view to .xlsx or .xls format in the viewer.

**Image export**

Enable or disable the image export option for the Funnel Chart widget. Enabling this allows you to export the view of the widget to image format (.jpg, .png, or .bmp) in the viewer.

**Enable comments**

Enable or disable the comments for the dashboard widget. For more details refer [here](/dashboard-cloud/visualize-data/commenting-dashboard-and-widget).

**Series palette**

Customize the chart series color through the Series Palette section.

***Use Default Palette***

Toggle the series color between the default palette and a custom palette. By default, the Use Default Palette option is toggled on and the default palette will be applied to proportion series segments.

![Series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/seriescolorpalette.png)

By toggle off the Use Default Palette, you can customize the proportion series segments' colors. This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the series color by changing the corresponding hexadecimal value at the right.

![Series color palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/series-color-palette-window.png)

![Funnel chart Series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/funnel-chart/funnelchart_seriescolorpalette.png)