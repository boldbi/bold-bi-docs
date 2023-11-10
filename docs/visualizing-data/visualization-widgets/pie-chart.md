---
layout: post
title: Pie Chart – Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Pie Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/pie-chart/"
platform: bold-bi
control: Pie Chart
documentation: ug

---

# Pie Chart

Pie chart allows you to showcase the proportionality of each item to the total in the form of pie-slices.

![Pie Chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pie-chart.png)

## How to configure table data in the Pie Chart

The Pie chart needs a minimum of one value element and one column element to showcase. The `measure` or `expression` field that you would like to analyze can be dropped into the `Values` block. The `dimension` that you would like to categorize the measure can be dropped onto the Columns block. If you would like to categorize  the measure based on a series, then the respective dimension can be dropped onto the `Rows block` in addition

To configure data in the Pie Chart, follow these steps:

1.  Drag and drop the `Pie Chart` to the canvas and resize it to your required size.

![Adding widget](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/adding-widget.png)

2.  Click the `Data Source` icon in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click `CREATE NEW` to launch a new connection from the connection-type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one of the listed connection type buttons shown. Here, the `Microsoft Excel` connection type is selected for demonstration.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, choose the file path and click `Preview & Connect.`

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view and click `Save.`

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` icon in the configuration panel. The property pane opens.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/assigndata.png)

9.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/chartdata.png)

10. You can add the required data from the Measures and Dimensions sections to the required field.

### Adding values

You can add more than one measure to the `Value(s)` field by dragging the required field.

![Configure measures](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/configure-measures.png)

Now, the Pie chart will be rendered as follows.

![Configured widget](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/configured-widget.png)

Click the `Settings` option to change the required summary type from the available summary types shown in the Settings.

![Pie Chart settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechart-settings.png)

You can filter the data displayed in the Pie Chart by using the `Filter` option. For more details, refer to the[filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Widget filters](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/widget-filters.png)

You can format the data displayed in the Pie Chart by using the `Format` option. For more details, refer to the[measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure format](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/measure-format.png)

To remove the added value fields, click the highlighted button.

![Remove fields](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/remove-fields.png)

### Adding columns

You can add data from the `Dimension` field to the `Column(s)` field.

![Adding columns](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/adding-columns.png)

The pie chart will be rendered as follows.

![Configured Pie Chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pie-chart.png)

Add more than one value to the `Column(s)` field. The following alert message will open.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

You can enable this option to get further details about the selected chart region. To enable drill down, click **Yes**.

![Enable drill](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/enable-drill.png)

> **NOTE:**  If you click `No,` a single value will be added to the Columns field.

The drilled view of the selected chart region will be as follows.

![Pie Chart drilled view](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechartdrill.png)

You can change the Settings.

![Pie Chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/columnsettings.png)

You can sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for data, refer to the[Sort] (/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Pie Chart dimension](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/sortoption.png)

You can apply filters by selecting `Filter(s)` option in settings. For more details, refer to the[filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

> **NOTE:**  By default, the filter will be set for the top 5 records.

Similarly, you can add the Measures and Expressions Columns to the Columns field.

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/rename.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/assign-data.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![filtering](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/info-icon.png)

The below chart displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/after.png)

### Adding rows

You can drag the `Dimension` field into the `Rows field.`

![Pie Chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/chart-row.png)

You can apply the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a pie chart in a series.

![Pie Chart series](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechart-series.png)

Scroll down to see all the charts.  

## How to format Pie Chart

You can format the pie chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in the pie chart, follow these steps:

1. Drag and drop the pie chart into the canvas and resize it to your required size.

2. Configure data in the pie chart.

3. Focus the pie chart and click the Widget Settings icon.

![Widget settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechart-settingsicon.png)

The property window will be opened as follows.

![Pie Chart properties](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/property-window.png)

You can see the list of properties available for the widget with default value.

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/property.png)

### Name

Allows you to set the `title` for the Pie chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/Name.png)

### Subtitle

Allows you to set the `subtitle` for the Pie chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/Subtitle.png)

### Description

Set a description for the Pie chart, whose visibility will be denoted by **i** icon, and hovering over it will display the `description` in a tooltip.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/Description.png)

### Basic settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in the pie chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/tooltip.png)

**Chart type**

Switch the widget view from the current chart type to another chart type.

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/widget-view.png)

### Enable animation

It animates the measure values when you enable the `Enable Animation.`

### Show value label

It allows you to toggle the visibility of value labels.

![Show Value Label](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/show-value-label.png)

If you disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden..

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/value-label.png)
### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/data-label-color.png)

### Data label

Defines the display format as a `category, value, percentage, category and value, category and percentage, value and percentage,` or `all details.`

### Category

![Category](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechart-category.png)

### Value

![Value](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechart-Value.png)

### Percentage

![Percentage](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/show-value-label.png)

### Category and value

![Category and Value](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piecatergoryandvalue.png)

### Category and percentage

![Category and Percentage](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piecatergoryandper.png)

### Value and percentage

![Value and Percentage](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pievalueandper.png)

### All details

![Pie Chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/piechart-alldetails.png)

### Value labels suffix

This allows you to show or hide the suffix value of value labels.

### Suffix Value

This allows you to customize the suffix value of value labels.

![Value Labels Suffix](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/labels-suffix.png)

### Chart Size

This allows you to customize the size of the pie chart. Values can be between 0.1 and 1.

### Series Settings

The `Series Settings` option is enabled only when you configure the **series** in the `Assigned Data` tab.

![Series Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/series-settings.png)

### Fixed rows and columns 

If you enable the Fixed rows and columns, you can customize the rows and columns. The rows and columns are fixed based on the container size and size of the pie chart.

### Row count 

By enabling the `Row Count`, you can set the count of the rows.

### Column count 

By enabling the `Column Count,` you can set the column count.

![Pie Series Settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/series-settingsfixed.png)

>**Note**: If the invalid columns and rows are given, the rows and columns reset to their default value. For example: If you are given the number of rows as 6 and the number of columns as 5 but your data count is only 20. In this case, the rows and columns will reset to their default value.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-settings.png)

### Show legend

A Legend is a text used to describe the plotted data. It allows you to toggle the visibility of the legend in the chart and change the legend text position (selecting through combo box). Enabling the Custom Legend Text option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/show-legend.png)

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-interactivity-enable.png)

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-label-color.png)

### Legend Customize 

It allows you to customize the legends. When you click the `customize` button, the dialog box will be shown.

![Chart Legend Customize](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-customize.png)

![Chart Legend Customization](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-customization.png)

### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

![Legend position](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legent-position.png)

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pie-legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pie-legendshape-series.png)

### Legend Title 

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pie-legendtitle.png)

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

**None**

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-none.png)

**Trim**

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-trim.png)

**Wrap**

This option allows you to wrap legend items based on the 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

### Link

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to the[Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/linking.png)

### Series palette

By toggling the `series palette,` you can able to customize the proportion series segments’ colors.

![Use Series Palette](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/seriespallete.png)

***Based On***

You can choose the field from the Based On section to apply the conditions.

This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the color by changing the corresponding hexadecimal value at the right.

![Individual mode](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/column-chart-individual-mode.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/column-chart-formatting-color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data, you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/column-chart-individual-mode.png)

> **IMPORTANT:**  Only top 100 records will be listed in the 
dialog. 
***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/column-chart-formatting-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

![Use Basedon Palette](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/column-chart-individual-mode.png)

![Change Series color](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/series-color-palette-window.png)

![Series color view](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/series-color-view.png)

### Use Default Palette

This option shows when you add more than one measure field to the Value(s).

By toggle off the `Use Default Palette,` you can customize the proportion series segments' colors by clicking the colored squares.

![Series color palette window](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/series-color-window.png)

### Font settings

This section allows you to customize the font size of the chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/font-settings.png)

### Filter

This section allows you to handle the `filter` actions for the pie chart widget.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/filter.png)

### Act as master widget

Define the Pie Chart widget as a `master widget` such that its filter action will be shown in other widgets of the dashboard.

### Ignore filter actions

Define the Pie chart widget to ignore the filter actions applied to other widgets in the dashboard.

### Enable Hierarchical Filtering

Through this option, you can enable or disable the hierarchical `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the **Enable Hierarchical Filtering** option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

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

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allow you to set the **background image** for the pie chart widget.

### Background Color

This allows you to set the **background color** to the pie chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.
