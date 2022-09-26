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

1.  Drag and drop the Radar/Polar chart widget into a canvas and resize into your required size.

![Configure the table data](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/add-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag and drop your preferred table or view from the left pane from the data design view, click the `Save` button.

![Save](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![ASSIGN DATA](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source

![Data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/assign-data-section.png)

You can add the required data from `Measures` and `Dimensions` into required field.

#### Adding Value

You can drag and drop the `Measures` field into the `Value` section.

![Drag and drop the required measure/dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/configure-fields.png)

You can add maximum upto six series into the `Value` field.

Click the `Settings` option to change the name by using the `Rename` option and required summary type from the available summary types shown in `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in chart by using the filter. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/filters.png)

#### Formatting data

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/formatting.png)

#### Removing fields

To remove the added value fields click highlighted button.

![click highlighted button](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/remove-fields.png)

#### Adding Column

You can add one value into the `Column` field. It can be either `Dimension` or `Measure.`

![Add one value to Column Field](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/category-field.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting data 

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort the dimension data](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/sorting.png)

#### Filtering data

You can apply filters by selecting filters option in settings. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/dimension-filter.png)

Now Radar/Polar Chart will be rendered like as below

![Radar/Polar chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/configured-widget.png)

## How to format Radar/Polar chart?

You can format the Radar/Polar chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To format Radar/Polar chart follow these steps:

1.  Drag and drop the Radar/Polar chart into a canvas and resize it to your required size.

2.  Configure the data into the Radar/Polar chart.

3.  Focus on the Radar/Polar chart and click on the widget settings icon.

![Widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/widget-settings.png)

The property window will be opened.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/general-settings.png)

#### Name

This allows you to change the `title` for the Radar/Polar chart widget.

![Name](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/name.png)

#### Subtitle

This allows you to add the subtitle for the Radar/Polar chart widget.

![Subtitle](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/subtitle.png)

#### Description

This allows you to add description for the Radar/Polar chart widget.

![Description](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/description.png)

#### Basic Settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in the radar polar chart.

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Marker

This allows you to enable or disable the `marker` in the Radar or Polar chart.

![Marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/marker.png)

> **NOTE:** Marker will not appear for the Scatter chart type in the Radar/Polar widget.

#### Show Value Label

This allows you to toggle the visibility of the value labels in the Radar/Polar chart.

![Value Label](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/value-label.png)

#### Draw Type

This allows you to change the draw type of the widget. By default, the `draw type` is Polar.

![Polar Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/polar-chart.png)

![Radar Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/radar-chart.png)

#### Chart Type

This allows you to switch from the current chart type to another chart type. Area chart is the default Chart type in the radar polar chart. The other chart types are `Line, Spline, Area` and `Scatter.`

#### Legend Settings

This section allows you to customize the legend in the Radar/Polar Chart

![Legend Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-settings.png)

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in Radar/Polar chart 

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/show-legend.png)

#### Legend Position

This allows you to change the legend text position by selecting through combo box. By default the legend position is bottom.

![Legend Position](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-position.png)

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-shape-series.png)

#### Custom Legend

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Custom Legend Window](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/custom-legend-window.png)


![Customized Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/customized-legend.png)

#### Axis

This section allows you to customize the axis settings in Radar/Polar chart.

![Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/axis.png)


#### Show Category Axis

This allows you to toggle the visibility of the category axis in the Radar/Polar chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/category-axis.png)

#### Primary Value Axis

This allows you to toggle the visibility of the primary value axis in the Radar/Polar chart.

![Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/primary-value-axis.png)


#### Axis Range Settings

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the Axis Range Settings dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/axis-range-settings.png)

It will reflect in the primary value axis of the Radar/Polar chart.

![Axis Range Settings Output](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/axis-range-settings-result.png)

#### Grid Line

This section allows you to toggle the visibility of gridlines in the Radar/Polar chart.

![Grid Line](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/gridlines.png)

#### Primary Value Axis

This allows you to enable or disable the `Primary Value Axis` gridlines for the Radar/Polar chart.

![Primary Value Axis view](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/primary-value-axis-view.png)

#### Category Axis

This allows you to enable or disable the `Category Axis` gridlines for the Radar/Polar chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/category-axis-view.png)

#### Series Palette

This allows you to customize the Radar/Polar chart series color through Series Palette section.

This section shows, list of series’ labels on the left-hand side and corresponding series color on the right-hand side. By clicking on the colored square, color picker will be opened. In that dialog you can choose a color or you can also change the series color by changing the corresponding Hexadecimal value in the right-hand side. 

![Series palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/series-palette-window.png)

![Series color palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/series-color-palette.png)

#### Filter

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/filter.png)

#### Act as Master Widget

This allows you to define the Radar/Polar chart widget as a master widget so that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define Radar/Polar chart widget to ignore responding to the filter actions applied by other widgets in the dashboard.

#### Link

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/radar-polar-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/). 


### Container Appearance

This sections allows you to customize the `Container Appearance` for the radar or polar chart widget.

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

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

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the radar or polar chart widget.

### Background Color

This allows you to set the **background color** to the radar or polar chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the `Container actions` for the radar or polar chart widget.

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the radar or polar chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the radar or polar chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the radar or polar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the radar or polar chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the radar or polar chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the radar or polar chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
