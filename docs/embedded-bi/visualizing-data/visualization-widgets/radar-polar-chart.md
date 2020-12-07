---
layout: post
title: Radar Polar Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Radar Polar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/radar-polar-chart/"
platform: bold-bi
control: Radar Polar Chart
documentation: ug
---

# Radar/Polar Chart

A Radar/Polar chart is a graphical method for displaying multivariate data in the form of a two-dimensional chart using three or more quantitative variables represented on axes starting from the same point. 

![Radar Polar Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radar-polar-chart.png)

## How to configure the table data to Radar/Polar chart?

Radar/Polar chart needs minimum of 1 value element and 1 Column element to showcase the data. The Chart can be configured by drag and drop series in to the Value section and variables in to the Column section.

Follow the below steps to configure the data to the Radar/Polar chart.

Drag and drop the Radar/Polar chart widget into canvas and resize into your required size.

![Configure the table data](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/add-widget.png)

Click `Data Source` button in configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radarpolar_datasource.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![CREATE NEW](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radarpolar_datasourcebutton.png)

In the connection type panel, click any one (Here `Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radarpolar_excel.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radarpolarconnect.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Save](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radarpolarvirtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![Properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/designerpropertiesbutton.png)

![ASSIGN DATA](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/assign-data.png)

The data tab will be opened with available measures and dimensions from the connected data source

![Data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Data-tab.png)

You can add the required data from `Measures` and `Dimensions` into required field.

You can drag and drop the `Measures` field into the `Values` section.

![Drag and drop the required measure/dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/configure-fields.png)

You can add maximum upto six series into `Values` field.

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Settings.png)

You can filter the data to be displayed in chart by using filter. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/filters.png)

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Formatting-measure.png)

To remove the added value fields click highlighted button.

![click highlighted button](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/remove-fields.png)

You can add one value into `Category` field. It can be either `Dimension` or `Measure`.

![Add one value to Category Field](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/category-field.png)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort the dimension data](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/sorting.png)

You can apply filters by selecting filters option in settings. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/dimension-filter.png)

Now Radar/Polar Chart will be rendered like as below

![Radar/Polar chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/configured-widget.png)

## How to format Radar/Polar chart?

You can format the Radar/Polar chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To format Radar/Polar chart follow the below steps

Drag and drop the Radar/Polar chart into canvas and resize it to your required size.

Configure the data into Radar/Polar chart.

Focus on the Radar/Polar chart and click on widget settings icon.

![Widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Widget-settings.png)

The property window will be opened.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Property-window.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/General-Settings.png)

**Name**

This allows you to change the title for the Radar/Polar chart widget.

![Name](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Name.png)

**Subtitle**

This allows you to add the subtitle for the Radar/Polar chart widget.

![Subtitle](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Subtitle.png)

**Description**

This allows you to add description for the Radar/Polar chart widget.

![Description](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Description.png)

**Basic Settings**

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Basic-Settings.png)

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Marker**

This allows you to enable/disable the marker in the Radar/Polar chart.

![Marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Marker.png)

> **NOTE:**  Marker wont appear for the Scatter chart type in the Radar/Polar widget.

**Show Value Label**

This allows you to toggle the visibility of the value labels in the Radar/Polar chart.

![Value Label](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Value-Label.png)

**Draw Type**

This allows you to change the draw type of the widget. By default the draw type is Polar.

![Polar Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Polar-Chart.png)

![Radar Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Radar-Chart.png)

**Chart Type**

This allows you to switch from current chart type to another chart type. Area Chart is the default Chart type in the radar polar chart. The other chart types are Line, Spline, Stacked Area and Scatter.

**Legend Settings**

This section allows you to customize the legend in the Radar/Polar Chart

![Legend Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Legend-Settings.png)

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in Radar/Polar chart 

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Show-Legend.png)

**Legend Position**

This allows you to change the legend text position by selecting through combo box. By default the legend position is bottom.

![Legend Position](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Legend-Position.png)

**Custom Legend**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Custom Legend Window](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Custom-Legend-Window.png)


![Customized Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Customized-Legend.png)

**Axis**

This section allows you to customize the axis settings in Radar/Polar chart.

![Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Axis.png)


**Show Category Axis**

This allows you to toggle the visibility of the category axis in the Radar/Polar chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Category-Axis.png)

**Primary Value Axis**

This allows you to toggle the visibility of the primary value axis in the Radar/Polar chart.

![Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Primary-Value-Axis.png)


**Axis Range Settings**

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the Axis Range Settings dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Axis-Range-Settings.png)

It will reflect in the primary value axis of the Radar/Polar chart.

![Axis Range Settings Output](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Axis-Range-Settings-result.png)

**Grid Line**

This section allows you to toggle the visibility of gridlines in the Radar/Polar chart.

![Grid Line](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Grid-Line.png)

**Primary Value Axis**

This allows you to enable or disable the `Primary Value Axis` gridlines for the Radar/Polar chart.

![Primary Value Axis view](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Primary-Value-Axis-view.png)

**Category Axis**

This allows you to enable or disable the `Category Axis` gridlines for the Radar/Polar chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Category-Axis-view.png)

**Series Palette**

This allows you to customize the Radar/Polar chart series color through Series Palette section.

This section shows, list of series’ labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. In that dialog you can choose a color or you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Series-palette-window.png)

![Series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Series-color-palette.png)

**Filter**

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Filter-option.png)

**Act as Master Widget**

This allows you to define the Radar/Polar chart widget as a master widget so that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define Radar/Polar chart widget to ignore responding to the filter actions applied by other widgets in the dashboard.

**Link**

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Link.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/). 

**Container Appearance**

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/Container-Appearance.png)

**Title Alignment**

This allows you to change the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners, if the **Show Border** is enabled. Value can be between 0 and 10.

**Maximize View**

This allows you to enable/disable the maximized mode of the Radar/Polar chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in the designer.

**CSV Export**

This allows you to enable/disable the CSV export option for this Radar/Polar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this Radar/Polar chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this Radar/Polar chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in viewer.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/)






