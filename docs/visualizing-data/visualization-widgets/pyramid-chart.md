---
layout: post
title: Pyramid Chart – Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Pyramid Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/pyramid-chart/"
platform: bold-bi
control: Pyramid Chart
documentation: ug

---

# Pyramid Chart

The Pyramid Chart is a triangle diagram that allows you to make proportional comparisons between values showcased in a progressively increasing manner. It consists of various segments, each representing a data point.

![Pyramid Chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart.png)

## How to configure table data in the Pyramid Chart

The Pyramid Chart needs a minimum of one value element and one column element to showcase. The measure or expression field that you want to analyze can be dropped into the Values block. The dimension for which you want to categorize the measure can be dropped into the Columns block. To categorize the measure based on a series, drop the respective dimension into the Rows block.

To configure data in the Pyramid Chart, follow these steps:

1. Drag the Pyramid Chart into the canvas and resize it to your required size.

![Drag and drop](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/add-pyramidchart.png)

2. Click the **Data Source** icon in the configuration panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3. Click **CREATE NEW** to launch a new connection from the connection-type panel.

![Add data source](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection-type panel, click any one of the listed connection type buttons shown. Here, the Microsoft Excel connection type is selected for demonstration.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the NEW DATA SOURCE configuration panel, choose the file path and click **Preview & Connect**.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view and click **Save**.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the **Properties** icon in the configuration panel. The property pane opens.

![Properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the **ASSIGN DATA** tab.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/assigndata.png)

9.  The **ASSIGN DATA** tab will be opened with the available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/chartdata.png)

10. You can add the required data from measures and dimensions to the required field.

#### Adding value(s)

You can add more than one data from the `Measures` section to the `Value(s)` field by dragging the required data.

![Adding data to value](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/adding-values.png)

#### Settings

Click **Settings** to change the name by using the `Rename` option and required summary type from the available summary types shown in the settings.

![Settings option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/settings.png)

#### Filtering data

You can filter data displayed in the Pyramid chart by using the Filter option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/filter-option.png)

#### Formatting data

You can format the data displayed in the chart by using the Format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Format option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/format-option.png)

To remove the added value fields, click **Remove**.

![Remove button](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/removebutton.png)

#### Adding columns

You can add data from the Dimensions field into the Columns field.

![Add data to column](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/adding-columns.png)

The Pyramid chart will be rendered as follows.

![Pyramid chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart-column.png)

You can change the settings.

![Column settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/rename.png)

#### Sorting data

You can sort the dimension data using the Sort option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/sort-option.png)

#### Filtering data

You can apply a filter by selecting the filter option in settings. For more details, refer to the [filters](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

> **NOTE:**  By default, the filter will be set for the top 5 records.

![Filter option column](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/filter-option-column.png)

Similarly, you can add the Measures and Expression Columns into the Column field.

#### Multi Level Drill Down

Add more than one Dimension field into the Columns field. The alert message will open.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

You can enable this option to get further details about the selected chart region. To enable drill down, click **Yes**.

![Select chart region](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/select-chart-region.png)

> **NOTE:**  If you click **No**, a single value will be added to the columns field.

The drilled-down view of the selected chart region will be as follows.

![Drilled chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/pyramiddrill.png)

## Hidden Column

Hidden columns are useful in cases where we don’t want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering), and [view data](#view-data).

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/assign-data.png)

We can configure both measure and dimension fields into the hidden column. For measure, we will be having all the settings have for the measure fields except formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section. On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as a URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as a URL parameter but do not want it to influence the visualization, we can configure the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/custom.png)

Now, we can see in the image below, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/viewdata.png)

> **NOTE:** We don’t recommend configuring lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/info-icon.png)

The below chart displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/before.png)

If we hide lower hierarchy data (Player Name) in columns compared to the column and row field data, the data in the widgets may appear duplicated. This can affect the visualization of the chart, as shown in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/after.png)

#### Adding rows

You can drag the Dimension section into the Rows field.

![Add data to row](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/chart-row.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render a pyramid chart in the series.

![Pyramid charts in series](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidchart-series.png)

Scroll down to see all charts.

## How to format a Pyramid Chart

You can format a Pyramid Chart for better illustration of the view by using the settings available in the Properties tab.

To configure data in the Pyramid Chart, follow these steps:

1. Drag the Pyramid Chart into the canvas and resize it to your required size.

2. Configure the data in the Pyramid Chart.

3. Focus on the Pyramid Chart and click the **Widget Settings** icon.

![Widget settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidwidgetsettings.png)

The property window will be opened as follows:

![Pyramid chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/pyramidproperties.png)

You can see the list of properties available for the widget with default values.

#### General settings

![Title](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/property.png)

#### Name

Allows you to set a `title` for the Pyramid chart widget.

![Title](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/Name.png)

#### Subtitle

Allows you to set a `subtitle` for the Pyramid chart widget.

![Title](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/Subtitle.png)

#### Description

Set a `description` for the Pyramid chart widget whose visibility will be denoted by the **i** icon, and hovering over it will display the description in a tooltip.

![Title](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/Description.png)

#### Basic settings

![Basic settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in the pyramid chart.

![Title](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/tooltip.png)

#### Chart type

Switch the widget view from the current chart type to another chart type.

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/widget-view.png)

#### Show value labels

Toggle the visibility of value labels.

![Show value labels](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/show-value-labels.png)

If you disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/value-label.png)

#### Value Label Color

Allow you to customize the value label’s color.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/data-label-color.png)

#### Data label value

Defines the display format as a `category, value, percentage, category and value, category and percentage, value and percentage,` or all details.

### Category

![Category](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/category.png)

### Value

![Value](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/value.png)

### Percentage

![Percentage](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/percentage.png)

### Category and value

![Category and Value](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/categoryandvalue.png)

### Category and percentage

![Category and Percentage](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/categoryandpercentage.png)

### Value and percentage

![Value and Percentage](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/valueandpercentage.png)

### All details

![Pyramid Chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/alldetails.png)

#### Value labels suffix

This allows you to show/hide the suffix value of value labels.

### Suffix Value

This allows you to customize the suffix value of value labels.

![Value labels suffix](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/labels-suffix.png)

### Series Settings

The `Series Settings` option is enabled only when you configure the **series** in the `Assigned Data` tab.

![Series Settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/series-settings.png)

### Fixed rows and columns 

If you enable fixed rows and columns, you can customize the rows and columns. The rows and columns are fixed based on the container size and size of the pyramid chart.

![Pyramid Series Settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/series-settingspyramidchart.png)

### Row count 

By enabling the `Row Count`, you can set the count of the rows.

### Column count 

By enabling the `Column Count,` you can set the column count.

![Pyramid Series Settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/series-settingsfixed.png)

>**Note**: If the invalid columns and rows are given, the rows and columns reset to their default value. For example, if you are given the number of rows as 6 and the number of columns as 5 but your data count is only 20. In this case, the rows and columns will reset to their default value.

#### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-settings.png)

#### Show legend

A legend is text used to describe the plotted data. It allows you to toggle the visibility of the legend in the chart and change the legend text position by selecting through a combo box.

![Show legend](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-interactivity-enable.png)

#### Legend Label Color

This feature allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at the left and corresponding text area at the right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

![Legend position](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-position.png)

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.

The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-as-dropdown.png)

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This feature allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle`.

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend for `Series`.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legendshape-series.png)

#### Legend Title

This feature allows you to add the legend title for the chart. It will reflect with the `Show Legend`.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legendtitle.png)

### Text Overflow

This feature allows you to customize legend text based on the `Text Width` property value.

**None**

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-none.png)

**Trim**

This option allows you to trim the legend items if the legend exceeds the `Text Width` value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-trim.png)

**Wrap**

This option allows you to wrap legend items based on the 'Text Width' value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items and is applicable only if text overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties **Legend color**, **Legend position**, **customization button**, and **Legend title** are also hidden.

#### Link

You can enable linking and configure navigating to a general URL with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/link.png)

#### Series palette

By toggling the `series palette`, you can customize the proportion series segments' colors.

![Series palette](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/seriespalette.png)

#### Based On

You can choose the field from the Based On section to apply the conditions.

This section shows a palette of colors. By clicking the colored square, the color picker will open. You can choose a color and change the color by changing the corresponding hexadecimal value on the right.

![Individual mode](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/column-chart-individual-mode.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/column-chart-formatting-color-mapping-type-options.png)

***Data***

Data allows you to apply color for chart series based on data. If you want to apply a specific color to specific data, you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/column-chart-individual-mode.png)

> **IMPORTANT:**  Only the top 100 records will be listed in the dialog.
***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/column-chart-formatting-index-based-color.png)

> **Note:** We prefer to use Index based color customization only for a minimum of data (up to 15 series).

![Use Basedon Palette](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/column-chart-individual-mode.png)

![Change Series color](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/seriescolor-palette-window.png)

![Series palette Customization](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/color-customization.png)

### Use Default Palette

This option shows when you add more than one measure field to the Value(s).

By toggling off the `Use Default Palette`, you can customize the proportion series segments' colors by clicking the colored squares.

![Series color palette window](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/series-color-palette-window.png)

### Font settings

This section allows you to customize the font size of the chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/font-settings.png)

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/pyramid-chart/filter.png)

#### Act as master widget

Define the Pyramid Chart widget as a `master widget` such that its filter action will be shown in other widgets of the dashboard.

#### Ignore filter actions

Define the Pyramid Chart widget to ignore the filter actions applied to other widgets in the dashboard.

#### Hierarchical filter

Through this option, you can enable or disable hierarchical `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the hierarchical filter option is enabled, the `Top N` filter will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of the widget title to either **left, center,** or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the pyramid chart widget.

### Background Color

This allows you to set the **background color** for the pyramid chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color`.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the pyramid chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the pyramid chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the pyramid chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the pyramid chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the pyramid chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the pyramid chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.