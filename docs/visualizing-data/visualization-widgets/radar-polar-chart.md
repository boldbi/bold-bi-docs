---
layout: post
title: Radar Polar Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Radar Polar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/radar-polar-chart/"
platform: bold-bi
control: Radar Polar Chart
documentation: ug
---

# Radar/Polar Chart

A Radar/Polar chart is a graphical method used to display multivariate data in the form of a two-dimensional chart. It utilizes three or more quantitative variables represented on axes that originate from a common point. 

![Radar Polar Chart](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/radar-polar-chart.png)

## How to configure the table data to Radar/Polar chart?

The Radar/Polar chart requires a minimum of 1 value element and 1 Column element to display the data. The chart can be configured by dragging and dropping series into the Value section and variables into the Column section.

Please follow the steps below to configure the data for the Radar/Polar chart:

1.  Please drag and drop the Radar/Polar chart widget onto a canvas and resize it to your desired size.

![Configure the table data](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/add-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.

![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any of the listed connection type buttons (Here, the `Excel` Connection type is selected for demonstration).

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Then, click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag and drop your preferred table or view from the left pane from the data design view, click the `Save` button.

![Save](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click on the `Properties` button in the configuration panel to open the property pane. Then, switch to the `ASSIGN DATA` tab.

![Properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![ASSIGN DATA](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened, displaying the available measures and dimensions from the connected data source.

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/assign-data-section.png)

You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value

You can drag and drop the `Measures` field into the `Value` section.

![Drag and drop the required measure/dimension](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/configure-fields.png)

You can add a maximum of six series into the `Value` field.

Click on the `Settings` option to change the name by accessing the `Rename` option and selecting the required summary type from the available summary types shown in the `Settings` menu.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the chart by using the filter. For more details, please refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/filters.png)

#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/formatting.png)

#### Removing fields

To remove the added value fields, click the highlighted button.

![click highlighted button](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/remove-fields.png)

#### Adding Column

You can add a single value into the `Column` field. It can be either a `Dimension` or `Measure.`

![Add one value to Column Field](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/category-field.png)

#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/rename.png)

#### Sorting data 

You can `sort` the dimension data by using the `Sort` option in the `Settings` menu list. To apply sorting to the data, please refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) function.

![Sort the dimension data](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/sorting.png)

#### Filtering data

You can apply filters by selecting the "filters" option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/dimension-filter.png)

Now the Radar/Polar Chart will be rendered as shown below.

![Radar/Polar chart](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/configured-widget.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to participate in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data).  

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measures, we will have all the settings we have for measure fields except formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/measure.png)

In the case of dimension fields, we will have the following options only. For date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/date.png)

#### Linking

The primary use case of hidden columns is linking. By configuring hidden columns, the fields configured in hidden columns are listed in the linking section. By configuring the column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to influence the visualization, we can configure the matches in the hidden columns and incorporate them into the link.

![Linking ](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/link-measure.png)

**Dimension Based Example:** If we want to pass the team name as a URL parameter but do not want it to influence the visualization, we can configure the team name in the hidden columns and incorporate them into the link.

![Linking ](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. To configure hidden columns, click on the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/filtericon.png)

Next, click on the Custom button highlighted in the filter configuration dialog image below. This will display a list of all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/custom.png)

Now, in the image below, you can see that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the info icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/info-icon.png)

The below chart displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column filed data, the data configured in the widgets gets duplicated, and individual columns are split based on the hidden column field. This affects the chart visualization, as can be seen in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/after.png)

## How to format Radar/Polar chart?

You can format the Radar/Polar chart to better illustrate the view you require by using the settings available in the `Properties` tab.

To format a Radar/Polar chart, follow these steps:

1.  Drag and drop the Radar/Polar chart onto the canvas and resize it to your desired size.

2.  Configure the data for the Radar/Polar chart.

3.  Focus on the Radar/Polar chart and click on the widget settings icon.

![Widget settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/widget-settings.png)

The property window will open.

![Property window](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/property-window.png)

You will see a list of properties available for the widget, each with a default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/general-settings.png)

#### Name

This allows you to change the `title` for the Radar/Polar chart widget.

![Name](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/name.png)

#### Subtitle

This allows you to add a subtitle for the Radar/Polar chart widget.

![Subtitle](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/subtitle.png)

#### Description

This allows you to add a description for the Radar/Polar chart widget.

![Description](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in the radar polar chart.

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/tooltip.png)

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Marker

This allows you to enable or disable the `marker` in the Radar or Polar chart.

![Marker](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/marker.png)

> **NOTE:** Marker will not appear for the Scatter chart type in the Radar/Polar widget.

#### Show Value Label

This allows you to toggle the visibility of the value labels in the Radar/Polar chart.

![Value Label](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/value-label.png)

#### Draw Type

This allows you to change the draw type of the widget. By default, the `draw type` is Polar.

![Polar Chart](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/polar-chart.png)

![Radar Chart](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/radar-chart.png)

#### Chart Type

This allows you to switch from the current chart type to another. The area chart is the default Chart type in the radar polar chart. The other chart types are `Line, Spline, Area` and `Scatter.`

#### Legend Settings

This section allows you to customize the legend in the Radar/Polar Chart

![Legend Settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-settings.png)

#### Show Legend

A legend is a text used to describe the data plotted. This option allows you to toggle the visibility of the legend in the Radar/Polar chart.

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/show-legend.png)

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. It provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-interactivity-enable.png)

#### Legend Position

This option allows you to change the position of the legend text by selecting through a combo box. By default, the legend position is bottom.

![Legend Position](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-position.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle`.

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend to match the `Series`.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/legend-shape-series.png)

#### Custom Legend

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels on the left and a corresponding text area on the right to add formatted text to display instead.

![Custom Legend Window](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/custom-legend-window.png)


![Customized Legend](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/customized-legend.png)

#### Axis

This section allows you to customize the axis settings in the Radar/Polar chart.

![Axis](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/axis.png)


#### Show Category Axis

This option allows you to toggle the visibility of the category axis in the Radar/Polar chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/category-axis.png)

#### Primary Value Axis

This option allows you to toggle the visibility of the primary value axis in the Radar/Polar chart.

![Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/primary-value-axis.png)


#### Axis Range Settings

This option allows you to manually set the Minimum, Maximum, and Interval values of the primary value axis through the Axis Range Settings dialog. 

![Axis Range Settings](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/axis-range-settings.png)

These settings will be reflected in the primary value axis of the Radar/Polar chart.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/axis-range-settings-result.png)

#### Grid Line

This section allows you to toggle the visibility of gridlines in the Radar/Polar chart.

![Grid Line](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/gridlines.png)

#### Primary Value Axis

This option allows you to enable or disable the `Primary Value Axis` gridlines for the Radar/Polar chart.

![Primary Value Axis view](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/primary-value-axis-view.png)

#### Category Axis

This option allows you to enable or disable the `Category Axis` gridlines for the Radar/Polar chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/category-axis-view.png)

#### Series Palette

This option allows you to customize the Radar/Polar chart series color through the Series Palette section.

This section shows a list of series labels on the left-hand side and the corresponding series color on the right-hand side. By clicking on the colored square, the color picker will be opened. In that dialog, you can choose a color or change the series color by changing the corresponding Hexadecimal value on the right-hand side.

![Series palette window](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/series-palette-window.png)

![Series color palette](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/series-color-palette.png)

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/filter.png)

#### Act as Master Widget

This option allows you to define the Radar/Polar chart widget as a master widget so that its filter action can be listened to by other widgets in the dashboard.

#### Ignore Filter Actions

This option allows you to define the Radar/Polar chart widget to ignore responding to the filter actions applied by other widgets in the dashboard.

#### Hierarchical filter

Using this option, you can enable or disable hierarchical top N filtering. When applying the Top N filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

#### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/linking.png)

You can enable linking and configure it to navigate to a general URL with or without parameters. For more details, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/). 


### Container Appearance

This section allows you to customize the `Container Appearance` for the radar or polar chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This option allows you to handle the alignment of the widget title to either **left, center,**  or **right**.

### Title Color

This option allows you to apply the text `color` to the widget title.

### Title Auto Font Size

By enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This option allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

### Subtitle Auto Font Size

By enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This option allows you to apply the specified size of the font to the widget subtitle if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

By enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This option allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This option allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This option allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This option allows you to set the **background image** for the radar or polar chart widget.

### Background Color

This option allows you to set the **background color** for the radar or polar chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This option allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the `Container Actions` for the radar or polar chart widget.

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This option allows you to enable or disable the `widget title` of the radar or polar chart. 

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 6 rows and less than 7 columns axis labels, legends will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/radar-polar-chart/label.png)
