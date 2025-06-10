---
layout: post
title: Stacked Column Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Stacked Column Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/stacked-column-chart/"
platform: bold-bi
control: Stacked Column Chart
documentation: ug
---

# Stacked Column Chart

The Stacked Column Chart allows you to compare multiple measures by displaying bars stacked vertically, one after the other.

![Stacked Column Chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.png)

## How to configure the table  data to stacked column chart?

A Stacked Column Chart requires a minimum of one value element and one column element to display. The measure or expression field that you want to analyze can be placed in the Y Values block. The dimension that you want to use for categorizing the measure can be placed in the Columns block. If you want to categorize based on a series, you can also place the respective dimension in the Rows block.

The following steps explain how to configure data for the stacked column chart:

1.  Drag and drop the stacked column chart to a canvas and resize it to your required size.

![Stacked Column Chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/add-stackedcolumnchart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.

![Datasource button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons. For demonstration purposes, the `Microsoft Excel` connection type is selected.

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Then, click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, and the property pane will open. Now, switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked column assign data](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened, displaying the available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the necessary data from the `Measures` and `Dimensions` into the designated field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)`ga  field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and selecting the required summary type from the available summary types shown in the `Settings` menu.

![summary type](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the chart by using a filter. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter options](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure formatting](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/format-option.png)

To remove the added value fields, click the highlighted button.

![Highlight button](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/removebutton.png)

You can add more than one column from the `Dimensions` field to the `Value(s)` field.

#### Adding Columns

You can add more than one value to the `Columns` field.

![Stacked column chart values](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/adding-columns.png)

The chart will be rendered like this.

![Stacked column chart output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart.png)

You can change the `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/rename.png)

#### Sorting data

You can `sort` the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort dimension](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/sort-option.png)

#### Filtering data

To apply filters, select the "Filters" option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Selecting filters](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filter-option-column.png)

To view all records, click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into the column field.

#### Multi-Level Drill Down

If more than one value is added to the `Columns` field, an alert message will be displayed. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill Alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The selected view of the chart region is drilled.

![Stacked column chart drill](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumndrills.png)

#### Drill up

Once you've drilled down, you can drill up to the previous view using the breadcrumb navigator located at the top of the widget.

![Stacked column chart drill up](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumndrillup.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field.

![Show All Records](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-row.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will display the chart in a series.

![Chart illustration](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnchart-seriesview.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to participate in the visualization, but rather be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/assigndata.png)

We can configure both measure and dimension fields in the hidden column. For measures, we will have all the settings we have for measure fields except formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/dimension.png)

![Date](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/date.png)

#### Linking

The primary use case for hidden columns is linking. When configuring hidden columns, the fields that are set in hidden columns will be listed in the linking section. When configuring the column in linking, we can pass the corresponding column value as a linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to affect the visualization, we can configure the matches in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/link-measure.png)

**Dimension Based Example:** If we want to pass the number of Team Name played as a URL parameter but do not want it to influence the visualization, we can configure the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure the hidden columns and click the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filtericon.png)

Click the Custom button that is highlighted in the filter configuration dialog image below. It will list all the fields that are configured in the widget. Keep the field that is configured in the hidden column and remove the other fields. Finally, click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that was bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is helpful for checking the data in more detail and can assist you in identifying any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the info icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/info-icon.png)

The chart below displays the goals and attempts on target by each team, without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and row field data, the data configured in the widgets gets duplicated, and individual columns are split based on the hidden column field. This affects the chart visualization, as we can see in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/after.png)

## How to format stacked column chart?

You can format the stacked column chart to better illustrate the view that you require by using the settings available in the `Properties` tab.

To configure data into a stacked column chart, follow these steps:

1. Please drag and drop the stacked column chart onto the canvas and resize it to your desired size.

2. Please configure the data into a stacked column chart.

3. Please focus on the stacked column chart and click on the widget settings.

![Widget Setting](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/widget-setting.png)

The property window will be opened.

![Property window](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/property-window.png)

You can view the list of properties that are available for the widget, with the default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/property.png)

#### Name

This feature allows you to set the `title` for this stacked-column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/title.png)

#### Subtitle

This feature allows you to set a `subtitle` for the stacked-column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/subtitle.png)

#### Description

This feature enables you to provide a concise explanation for the stacked column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/Discription.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/tooltip.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart type and axis settings dialog](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-type.png)

**Chart Type**: This feature enables you to change the widget view from the current chart type to a different convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis.

![Secondry axis in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/secondary-axis.png)

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Value Labels

This feature allows you to toggle the visibility of the value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-value-label.png)

If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-label.png)

#### Customize

This feature allows you to customize the visibility of value labels in each series by toggling it.

![Value labels customization change](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-value-label-customization.png)

![Value labels customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/value-label-change.png)

#### Value Label Color

This allows you to customize the color of the value label.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the position of the value label in a chart. By default, it is set to `Auto`, so the label position for the stacked column chart will be set to the middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/valuelabelposition.png)

#### Value Label Rotation
 
This feature enables you to specify the rotation angle for displaying the value labels.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/showlabelrotation.png)

#### Value Label Suffix

This feature allows you to display or conceal the suffix value of value labels.

#### Suffix Value

This feature enables you to customize the suffix value of the value labels.

![Suffix Value](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/suffix-value.png)

> **Note:** When the height and number of data in the chart were increased, the value label was hidden. Use the label rotation property to make the label visible.

#### Show items with no data

This allows you to display data for columns that do not have a value.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values if they are null or undefined when the `Show Items With No Data` is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Gap

This option allows you to display null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-gap.png)

### Zero

This option allows you to display null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-zero.png)

### Average

This option allows you to display null or undefined values along with the average value.

![Empty Point Mode Average](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-average.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width`.

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-width-customization.png)

![Column Width](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing`.

![Column Spacing Customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-spacing-customization.png)

![Column Spacing](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/column-space.png)

#### Enable Smooth Scroll

When this support is enabled, the size of the chart scroll bar thumb will be calculated based on the total number of records. This means that you can see the last record by simply scrolling once.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-settings.png)

#### Show Legend

A legend is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting from the combo box.

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define a custom text, using the text area, to display for each legend series. You can select the series through the combo box in a chart.

#### Legend Interactivity

The chart's `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make the chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and contextual purposes.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-interactivity-enable.png)

#### Legend Label Color

This feature allows you to modify the title and label colors of the chart legend.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-label-color-change.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will display the legend text list as labels on the left and a corresponding text area on the right, where you can add formatted text to be displayed instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-customization.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-customization-change.png)

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.

The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-as-dropdown.png)

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This enables you to modify the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle`.

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series`.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart, which will be reflected with the `Show Legend` option.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-title.png)

#### Text Overflow

This option allows you to customize the legend text based on the value of the `Text Width` property.

***None***

This option enables you to display legend items without any wrapping or trimming.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if their legend exceeds the `Text Width` value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on `Text Width` value.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if the text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title**, are also hidden.

> **NOTE:** For a single series, the legend won't be visible.

#### Axis Format

This option enables you to format the values of the primary and secondary axis using the formatting details provided through the `Format` button. For additional information, please consult this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-format.png)

#### Link

You can enable linking and configure it to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) section.

![Link](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/linking.png)

#### Axis

![Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in the chart. 

#### Title color

This allows you to customize the color of the axis title.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/title-color.png)

#### Label color

This enables you to customize the color of the axis label.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/label-color.png)

#### Show Axis Border

This option allows you to enable or disable the axis border of the chart.

![Show axis border](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-axis-border.png)

#### Show Category Axis

This allows for the visibility of the `Category Axis` to be enabled.

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-axis.png)

#### Show Category Axis Title

This feature allows you to enable the visibility of the `Category Axis` title.

![Show Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-category-axis-title.png)

#### Category Axis Title

This allows you to edit the title of the `Category Axis` for the chart. It will be reflected in the x-axis name of the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-categoryaxis.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-axis-title.png)

#### Label overflow mode

This feature enables you to control the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of the overlapping label on the axis.

![Label overflow mode trim](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/trim.png)

***Hide***

This option hides the overlapping label on the axis.

![Label overflow mode hide](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels and also makes them customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/trimming-axis-labels.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for displaying the category axis labels.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to automatically set intervals based on the number of data points for category axis labels. If the user wants to customize the interval, they need to disable auto interval and manually set the desired interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart.

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-primary-value-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/primary-axis.png)

#### Show Primary Value Axis Title

This feature allows you to enable the visibility of the title of the chart's `Primary Value Axis`.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/show-primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the title of the `Primary Value Axis`, which will be reflected in the y-axis name of the chart.

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-primaryaxis.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display negative values at the top and positive values at the bottom. For example, when binding temperature data to the chart and wanting to display negative values at the top, we can utilize this property.

Enabling this property will cause the chart to display negative values at the top and positive values at the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog.

![Axis Range settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/edit-axisrange.png)

It will be reflected in the primary value axis of the chart.

![Axis Range settings output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axisrange-output.png)

### Parameter Support in Axis range:

This feature enables you to dynamically set the minimum, maximum, and interval values of the primary value axis using the `Axis Range Settings` dialog by utilizing the dashboard parameter values. Only dashboard parameter values of number type are permitted in the axis range properties. You have the ability to create various types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in the number type as shown below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/parameter.png)

Click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (only number type parameter values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/minparam.png)

Now, the parameter value is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stackedcolumnmin.png)

### Range Parameter Value:

If you want to have the same ranges in multiple cases, create a parameter value of the range type. This type of parameter includes both the start and end values.

1. Create a parameter of the range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The value entered in the first textbox is stored in the start parameter, and the value entered in the second textbox is stored in the end parameter. Only number type parameter values are allowed for selection.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/rangeaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value is based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/datasource.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum and interval**). Select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/datasourceaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/datasourcemin.png)

#### Axis Format

This option allows you to format the values of the primary and secondary axis using the formatting details provided by the Format button. For more information, please refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/axis-format.png)

#### Grid Lines

![Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/chartgridlines.png)

#### Primary value Axis

This enables you to enable the gridlines for the `Primary Value Axis` in the stacked column chart.

![Primary value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/primaryaxis-gridlines.png)
 
#### Category Axis

This enables you to enable the gridlines for the `Category Axis` in the stacked column chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/categoryaxis-gridlines.png)

#### Secondary Value Axis

This allows you to enable the gridlines for the `Secondary Value Axis` in the stacked column chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/Secondary-gridlines.png)

#### Formatting

This feature enables you to customize the color of the widget.

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/formatting-color.png)

![Formatting color change](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/format-color-change.png)

### Series Palette

This allows you to apply color to chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will only be visible if we have configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for the chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/color-mapping-type.png)

#### Color Mapping Type

By using the Color Mapping type, you have the ability to apply colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color to chart series based on data. If you want to assign a specific color to specific data (e.g., Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use data-based color mapping. The default Color Mapping Type is `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stacked-column-chart-data-type-color.png)

***Index***

It allows you to apply color to chart series based on their `Index`, ensuring that the colors remain consistent even if the data is changed. It provides a selection of 15 unique colors, after which the colors will start to repeat from the ones used previously.

For example, if you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful for setting the colors based on the rank. For instance, red color can be assigned to the top country, and this red color will be maintained for the country with the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/stacked-column-chart-index-based-color.png)

> **Note:** We prefer to use index-based color customization only for a minimum amount of data (up to 15 series).

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The auto font-size property is used to set the font size based on the resolution of the client machine viewing the dashboard. If the user wants to customize or set a fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/filter.png)

#### Act as Master Widget

This allows you to define the stacked column chart widget as a master widget, so that other widgets in the dashboard can listen to its filter action.

#### Ignore Filter Actions

This allows you to define this stacked column chart widget as ignoring the filter actions applied to other widgets in the dashboard.

#### Hierarchical Filter

Through this option, you can enable or disable the hierarchical top `N` filtering. When applying the Top N filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of the dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied to each individual column separately, based on the number set for each column.

### Container Appearance

This section allows you to customize the `Container Appearance` for the stacked-column chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to align the widget title to either the **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

By enabling Auto Font Size, the title's font size will adjust automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified font size to the widget title if the **Title Auto Font Size** is disabled. The value can range from 10 to 44.

### Subtitle Auto Font Size

When Auto Font Size is enabled, the subtitle's font size will be automatically adjusted if the screen resolution varies.

**Font Size**

This feature enables you to apply a specific font size to the widget title when the **Subtitle Auto Font Size** is turned off. The value can range from 10 to 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This feature allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This feature allows you to set the **background image** for the stacked-column chart widget.

### Background Color

This feature allows you to set the **background color** for the stacked-column chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow
This feature allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the `Container actions` for the stacked-column chart widget.

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This option allows you to enable or disable the `widget title` of the stacked column chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the stacked-column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the stacked-column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the stacked-column chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the stacked-column chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the stacked-column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with fewer than 7 columns, the Y-axis labels and titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/Y-axis-label.png)

When the chart has fewer than 6 rows, the X-axis labels, X-axis titles, and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/stacked-column-chart/X-axis-label.png)