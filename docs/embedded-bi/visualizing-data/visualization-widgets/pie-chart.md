---
layout: post
title: Pie Chart – Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Pie Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/pie-chart/"
platform: bold-bi
control: Pie Chart
documentation: ug
---

# Pie Chart

Pie chart allows you to showcase the proportionality of each item to the total in the form of pie-slices.

![Pie Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/pie-chart.png)

## How to configure table data in the Pie Chart

The Pie chart needs a minimum of one value element and one column element to showcase. The `measure` or `expression` field that you would like to analyze can be dropped into the `Values` block. The `dimension` that you would like to categorize the measure can be dropped onto the Columns block. If you would like to categorize  the measure based on a series, then the respective dimension can be dropped onto the `Rows block` in addition

To configure data in the Pie Chart, follow these steps:

1.  Drag and drop the `Pie Chart` to the canvas and resize it to your required size.

![Adding widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/adding-widget.png)

2.  Click the `Data Source` icon in the configuration panel.

![Data button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click `CREATE NEW` to launch a new connection from the connection-type panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one of the listed connection type buttons shown. Here, the `Microsoft Excel` connection type is selected for demonstration.

![Data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, choose the file path and click `Preview & Connect.`

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view and click `Save.`

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` icon in the configuration panel. The property pane opens.

![Designer properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/assigndata.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/chartdata.png)

10. You can add the required data from the Measures and Dimensions sections to the required field.

### Adding values

You can add more than one measure to the `Value(s)` field by dragging the required field.

![Configure measures](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/configure-measures.png)

Now, the Pie chart will be rendered as follows.

![Configured widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/configured-widget.png)

Click the `Settings` option to change the required summary type from the available summary types shown in the Settings.

![Pie Chart settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechart-settings.png)

You can filter the data displayed in the Pie Chart by using the `Filter` option. For more details, refer to the[filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/widget-filters.png)

You can format the data displayed in the Pie Chart by using the `Format` option. For more details, refer to the[measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure format](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/measure-format.png)

To remove the added value fields, click the highlighted button.

![Remove fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/remove-fields.png)

### Adding columns

You can add data from the `Dimension` field to the `Column(s)` field.

![Adding columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/adding-columns.png)

The pie chart will be rendered as follows.

![Configured Pie Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/pie-chart.png)

Add more than one value to the `Column(s)` field. The following alert message will open.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

You can enable this option to get further details about the selected chart region. To enable drill down, click **Yes**.

![Enable drill](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/enable-drill.png)

> **NOTE:**  If you click `No,` a single value will be added to the Columns field.

The drilled view of the selected chart region will be as follows.

![Pie Chart drilled view](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechartdrill.png)

You can change the Settings.

![Pie Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/columnsettings.png)

You can sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for data, refer to the[Sort] (/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Pie Chart dimension](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/sortoption.png)

You can apply filters by selecting `Filter(s)` option in settings. For more details, refer to the[filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

> **NOTE:**  By default, the filter will be set for the top 5 records.

Similarly, you can add the Measures and Expressions Columns to the Columns field.

### Adding rows

You can drag the `Dimension` field into the `Rows field.`

![Pie Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/chart-row.png)

You can apply the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a pie chart in a series.

![Pie Chart series](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechart-series.png)

Scroll down to see all the charts.  

## How to format Pie Chart

You can format the pie chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in the pie chart, follow these steps:

1. Drag and drop the pie chart into the canvas and resize it to your required size.

2. Configure data in the pie chart.

3. Focus the pie chart and click the Widget Settings icon.

![Widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechart-settingsicon.png)

The property window will be opened as follows.

![Pie Chart properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/property-window.png)

You can see the list of properties available for the widget with default value.

### General Settings

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/general-settings.png)

### Name

Allows you to set the `title` for the Pie chart widget.

### Subtitle

Allows you to set the `subtitle` for the Pie chart widget.

### Description

Set a description for the Pie chart, whose visibility will be denoted by **i** icon, and hovering over it will display the `description` in a tooltip.

### Basic settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/basic-settings.png)

**Chart type**

Switch the widget view from the current chart type to another chart type.

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/widget-view.png)

### Enable animation

It animates the measure values when you enable the `Enable Animation.`

### Show legend

A Legend is a text used to describe the plotted data. It allows you to toggle the visibility of the legend in the chart and change the legend text position (selecting through combo box). Enabling the Custom Legend Text option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/show-legend.png)

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/legend-label-color.png)

### Legend Customize 

It allows you to customize the legends. When you click the `customize` button, the dialog box will be shown.

![Chart Legend Customize](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/legend-customize.png)

![Chart Legend Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/legend-customization.png)

### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/pie-legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/pie-legendshape-series.png)

### Legend Title 

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/pie-legendtitle.png)

### Show value label

It allows you to toggle the visibility of value labels.

![Show Value Label](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/show-value-label.png)

### Value Label Color

This allows you to customize value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/data-label-color.png)

### Data label

Defines the display format as a `category, value, percentage, category and value, category and percentage, value and percentage,` or `all details`.

### Category

![Category](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechart-category.png)

### Value

![Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechart-Value.png)

### Percentage

![Percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/show-value-label.png)

### Category and value

![Category and Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piecatergoryandvalue.png)

### Category and percentage

![Category and Percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piecatergoryandper.png)

### Value and percentage

![Value and Percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/pievalueandper.png)

### All details

![Pie Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/piechart-alldetails.png)

### Value labels suffix

Set a `suffix` value for the value labels.

![Value Labels Suffix](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/labels-suffix.png)

### Link

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to the[Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/linking.png)

### Series palette

By toggling the `series palette,` you can able to customize the proportion series segments’ colors.

![Use Series Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/seriespallete.png)

***Based On***

You can choose the field from the Based On section to apply the conditions.

This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the color by changing the corresponding hexadecimal value at the right.

![Use Basedon Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/basedon.png)

![Change Series color](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/series-color-palette-window.png)

![Series color view](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/series-color-view.png)

### Use Default Palette

This option shows when you add more than one measure field to the Value(s).

By toggle off the `Use Default Palette,` you can customize the proportion series segments' colors by clicking the colored squares.

![Series color palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/series-color-window.png)

### Filter

This section allows you to handle the `filter` actions for the pie chart widget.

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/filter.png)

### Act as master widget

Define the Pie Chart widget as a `master widget` such that its filter action will be shown in other widgets of the dashboard.

### Ignore filter actions

Define the Pie chart widget to ignore the filter actions applied to other widgets in the dashboard.

### Enable Hierarchical Filtering

Through this option, you can enable or disable the hierarchical `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the **Enable Hierarchical Filtering** option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,** or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size , the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allow you to set the **background image** for the pie chart widget.

### Background Color

This allows you to set the **background color** to the pie chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/pie-chart/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the pie chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the pie chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the pie chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the pie chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the pie chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the pie chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.
