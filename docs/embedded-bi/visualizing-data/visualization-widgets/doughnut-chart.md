---
layout: post
title: Doughnut Chart – Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Doughnut Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/doughnut-chart/"
platform: bold-bi
control: Doughnut Chart
documentation: ug
---

# Doughnut Chart

The Doughnut chart allows you to showcase the proportionality of each item to the total in the form of doughnut-slices. It works best to display data with a small number of categories.

![Doughnut chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart-column.png)

## How to configure table data in the Doughnut Chart

The Doughnut chart needs a minimum of one value element and one column element to showcase. The `measure` or `expression` field that you want to analyze can be dropped into the Values block. The dimension for which you want to categorize the measure can be dropped into the Columns block. To categorize based on a series, drop the respective dimension into the `Rows block.`

Follow the below steps to configure the data to the doughnut chart.

1. Drag and drop the Doughnut chart into the canvas and resize it to your required size.

![Drag and drop](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/add-doughnutchart.png)

2. Click the **Data Source** icon in the configuration panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3. Click the **CREATE NEW** button to launch a new connection from the connection type panel.

![Add data source](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4. In the connection type panel, click any one of the listed connection type buttons shown. Here, the `Microsoft Excel` connection type is selected for demonstration.

![Data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5. In the `NEW DATA SOURCE` configuration panel, choose the file path and click the **Preview & Connect** button.

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

6. Drag your preferred table or view from the left pane from the data design view and click the **Save** button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7. Click the **Properties** icon in the configuration panel. The property pane opens.

![Properties button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8. Now, switch to the **ASSIGN DATA** tab.

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/assigndata.png)

9.  The **ASSIGN DATA** tab will be opened with available measures and dimensions from the connected data source.

![Chart data](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chartdata.png)

10. You can add the required data from Measures and Dimensions sections to the required field.

**Adding values**

You can add more than one measures section to the `Value(s)` field by dragging the required data.

![Add data to value](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/add-data.png)

Now, the doughnut chart will be rendered as follows.

![Configured Doughnut chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/configured-doughnutchart.png)

Click **Settings** to change the required summary type from the available summary types shown in the settings.

![Settings option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart-settings.png)

You can filter the data displayed in the Doughnut Chart by using the Filter option. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/filter-option.png)

You can format the data displayed in the Doughnut Chart by using the Format option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Format option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/format-option.png)

To remove the added value fields, click **Remove**.

![Remove button](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/remove-fields.png)

**Adding columns**

You can add data from the Dimension field to the `Column(s)` field.

![Add data to column](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/add-column.png)

The Doughnut chart will be rendered as follows.

![Doughnut chart with column field](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart-column.png)

Add more than one value to the Columns field. The following alert message will open.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/drillalert.png)

You can enable this option to get further details about the selected chart region. To enable drill down, click **Yes**.

![Selecting chart region](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/select-region.png)

> **NOTE:**  If you click No, a single value will be added to the Columns field.

The drilled view of the selected chart region will be as follows.

![Drilled chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutdrill.png)

You can change the Settings.

![Column settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/columnsettings.png)

You can sort the dimension data using the **Sort** option under the Settings menu list. To apply sorting for data, refer to the [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/sortoption.png)

You can apply filters by selecting the `filter` option in settings.

![Sort option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/filteroption.png)

For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

> **NOTE:**  By default, the filter will be set for the top 5 records.

Similarly, you can add the Measures and Expression Columns to the Column field.

**Assigning rows**

You can drag and drop the `Dimension` field into the `Rows` field.

![Add data to row](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chart-row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a Doughnut chart in a series.

![Doughnut chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart-series.png)

Scroll down to see all charts.

## How to format Doughnut Chart

You can format the Doughnut Chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in Doughnut Chart, follow these steps:

1. Drag and drop the Doughnut Chart into the canvas and resize it to your required size.

2. Configure data in the Doughnut Chart.

3. Focus on the Doughnut chart and click the Widget Settings icon.

![Widget settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/widget-settings.png)

The property window will be opened as follows.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/property-window.png)

You can see the list of properties available for the widget with default value.

### General Settings

![Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/title.png)

#### Name

Allows you to set a `title` for the Doughnut chart widget.

#### Subtitle

Allows you to set a `subtitle` for the Doughnut chart widget.

#### Description

Set a `description` for the Doughnut chart, whose visibility will be denoted by **i** icon, and hovering over it will display the description in a tooltip.

### Basic settings

![Basic settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

#### Chart type

Switch the widget view from the current chart type to another chart type.

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chart-type.png)

#### Enable animation

It animates the measure values when you enable the `Enable Animation.`

#### Show value labels

Toggle the visibility of value labels.

![Show value labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/value-labels.png)

#### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/data-label-color.png)

#### Data label

You can define the display format as a `category, value, percentage, category and value, value and percentage, category and percentage, ` or `all details.`

#### Category

![Category](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/category.png)

#### Value

![Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/value.png)

#### Percentage

![Percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/value-labels.png)

#### Category and Value

![Category and Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/categoryandvalue.png)

#### Value and percentage

![Value and percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart-valueandpercent.png)

#### Category and Percentage

![Category and Percentage](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/categoryandpercentage.png)

#### All Details

![All](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/all.png)

#### Value labels suffix

This allows you to show or hide the suffix value of value labels.

### Suffix Value

This allows you to customize the suffix value of value labels.

![Value labels suffix](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/value-label-suffix.png)

### Chart Size

This allows you to customize the size of the doughnut chart. Values can be between 0.1 and 1.

### Series Settings

The `Series Settings` option is enabled only when you configure the **series** in the `Assigned Data` tab.

![Series Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/series-settings.png)

### Fixed rows and columns 

If you enable the Fixed rows and columns, you can customize the rows and columns. The rows and columns are fixed based on the container size and size of the doughnut chart.

![Doughnut Series Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/series-settingsdoughnutchart.png)

### Row count 

By enabling the `Row Count`, you can set the count of the rows.

### Column count 

By enabling the `Column Count,` you can set the column count.

![Doughnut Series Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/series-settingsfixed.png)

>**Note**: If the invalid columns and rows are given, the rows and columns reset to their default value. For example: If you are given the number of rows as 6 and the number of columns as 5 but your data count is only 20. In this case, the rows and columns will reset to their default value.

### Legend Settings

![Legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/legend-settings.png)

#### Show legend

A Legend is a text used to describe the plotted data. It allows you to toggle the visibility of the legend in the chart and change the legend text position (selecting through the combo box).

![Show legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

#### Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/legend-custom.png)

*After customize the legend*

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/legend.png)

### Position

You can able to change the position for the legend at `Top, Left, Right,` and `Bottom.`

#### Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutlegend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnut-legendshape-series.png)

#### Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/doughnut-legendtitle.png)

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

**None**

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chart_LegendNone.png)

**Trim**

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chart_Legendtrim.png)

**Wrap**

This option allows you to wrap legend items based on 'Text Width' value.

![Legend Overflow Wrap in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chart_Legendwrap.png)

#### Text Width

This option allows you to set maximum width for the Legend Items and it is applicable only if text overflow set as Trim or Wrap.

![Legend Text Width in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/chart_Legendwidth.png)

### Filter

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/filter.png)

#### Act as Master Widget

It defines the Doughnut chart widget as a master widget such that its filter action will be shown in other widgets of the dashboard.

#### Ignore filter actions

It defines the Doughnut chart widget to ignore the filter actions applied to other widgets in the dashboard.

#### Hierarchical Filter

Through this option, you can enable or disable hierarchical `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the Hierarchical Filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Link

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/link.png)

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Series palette

By toggling the `series palette,` you can customize the proportion series segments’ colors.

![Series palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/seriespalette.png)

### Font settings

This section allows you to customize font size of chart elements.

![Font settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/font-settings.png)

#### Based On

You can choose the field from the Based On section to apply the conditions.

This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the color by changing the corresponding hexadecimal value at the right.

![Series palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/seriescolorpalette.png)

![Series palette Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/color-customization.png)

### Use Default Palette

This option shows when you add more than one measure field to the Value(s).

By toggle off the `Use Default Palette,` you can customize the proportion series segments' colors by clicking the colored squares.

![Series color palette window](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/series-color-palette-window.png)

### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

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

This allow you to set the **background image** for the spline area chart widget.

### Background Color

This allows you to set the **background color** to the spline area chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color`.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/doughnut-chart/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the spline area chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the spline area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the spline area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the spline area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the spline area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the spline area chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Allow Pin 

This allows you to pin the widget.
