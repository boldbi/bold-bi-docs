---
layout: post
title: 100% Stacked Column Chart – Embedded BI | Bold BI Docs
description: Learn how to create a 100% Stacked Column Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/100-stacked-column-chart/"
platform: bold-bi
control: 100% Stacked Column Chart
documentation: ug
---

# 100% Stacked Column Chart

The 100% Stacked Column Chart allows you to compare multiple measures by stacking bars vertically, one after the other.

![Hundred Stacked Column Chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstacked-columnchart.png)

## How to configure the table data to 100% stacked column chart?

A 100% Stacked Column Chart requires at least one value element and one column element to display. The measure or expression field that you want to analyze can be placed in the Y Values block. The dimension that you want to use to categorize the measure can be placed in the Columns block. If you want to categorize based on a series, the corresponding dimension can also be placed in the Rows block.

The following steps explain how to configure data for a 100% stacked column chart:

1.  Drag and drop the 100% stacked column chart onto the canvas and resize it to your desired size.

![Hundred Stacked Column Chart resize](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/add-hundredstacked-columnchart.png)

2.  Click the `Data Source` button located in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.

![Connection type panel](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons shown (Here, the `Microsoft Excel` connection type is selected for demonstration).

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Then, click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel to open the property pane.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, please switch to the `ASSIGN DATA` tab.

![Hundred Stacked Column assign data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/assign-data.png)

9.  The `ASSIGN DATA` tab will be opened, with available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

10. You can add the required data from the `Measures` and `Dimensions` into the designated field.

#### Adding Value(s)

You can add more than one `Measures` to the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and selecting the required summary type from the available summary types shown in `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/settings.png)

#### Filtering data

You can filter the data that is displayed in the chart by using the `Filter` option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the `Format` option. For more details, please refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/format-option.png)

To remove the added value fields, click the highlighted button.

![Click the highlighted button](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/removebutton.png)

You can add more than one column from the `Dimensions` field into the `Value(s)` field.

#### Adding Columns

You can add more than one value to the `Columns` field.

![Adding Columns](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/adding-columns.png)

The 100% stacked column chart will be rendered like this.

![Hundred stacked column chart renders](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/configured-hundredstackedcolumnchart.png)

You can change the `settings`.

![Change the Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-settings.png)

#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/rename.png)

#### Sorting data

You can sort the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Advanced sorting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/sort-option.png)

#### filtering data

You can apply filters by selecting the `Filter(s)` option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configure for dimension filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter-option-column.png)

To display all records, click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

If you add more than one value to the `Columns` field, the alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` the single value will be added to the `Columns` field.

![Columns field](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The selected region of the chart is displayed in a drilled view.

![Drilled View](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstackedcolumndrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-row.png)

If necessary, you can apply a [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option to the rows field.

This will generate a series of charts.

![Hundred stacked column chart customlegendsetting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hundredstackedcolumnchart-customlegendsetting.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to participate in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden Column](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measures, we will have all the settings we have for measure fields except formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/date.png)

#### Linking

The primary use case for hidden columns is linking. When configuring hidden columns, we can see that the fields configured in hidden columns are listed in the linking section. When configuring the column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to affect the visualization, we can configure the matches in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/link-measure.png)

**Dimension Based Example:** If we want to include the number of Team Name played as a URL parameter without affecting the visualization, we can set up the Team Name in hidden columns and include them in the link.

![linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Please configure hidden columns and click on the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filtericon.png)

Click on the Custom button that is highlighted in the filter configuration dialog image below. This will display a list of all the fields that are currently configured in the widget. Keep the field that is configured in the hidden column and remove the other fields. Finally, click on the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns. This is indicated by the information icon in the Hidden Column section.

![Info Icon](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/info-icon.png)

The chart below displays the goals and attempts on target by each team without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and Row field data, the data configured in the widgets becomes duplicated, and individual columns are split based on the hidden column field. This affects the chart visualization, as can be seen in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/after.png)

## How to format 100% stacked column chart?

You can format the 100% stacked column chart to better illustrate the view you require by using the settings available in the `Properties` tab.

To configure data into a 100% stacked column chart, follow these steps:

1. Please drag and drop the 100% stacked column chart onto the canvas and resize it to your desired size.

2. Configure the data into a 100% stacked column chart.

3. Please focus on the 100% stacked column chart and click on the widget settings.

![Widget Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/widget-settings.png)

The property window will be opened.

![Property Window](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/property-window.png)

You can view the list of properties that are available for the widget with the default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/property.png)

#### Name

This allows you to change the title for this 100% stacked column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Title.png)

#### Subtitle

This widget allows you to provide the `subtitle` for the 100% Stacked Column chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Subtitle.png)

#### Description

This allows you to provide the `description` for the 100% stacked column chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/basic-settings.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type` and `Axis Settings` dialog. 

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/name.png)

**Chart Type**: This feature enables you to change the widget view from the current chart type to a different chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis. 

>**Note:** The 100% Stacked Column has the axis value set to 100%, so you are unable to enable the secondary axis. However, you can enable the secondary axis by switching the chart types.

![Chart Type Secondary Axis Customization ](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/secondaryaxis-customization.png)

![Chart Type Secondary Axis ](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/secondaryaxis.png)

### Show Tooltip

This option allows you to toggle the visibility of the tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Showtooltip.png)

### Show Value in Tooltip

When you hover over the chart, values will be displayed as percentages since it is a percentage type. If you enable this option, the tooltip will show the value.

#### Enable Animation

It animates the measure values by toggling the `Enable Animation.`

#### Show Value Labels

This feature enables you to switch the visibility of value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-label.png)

#### Customize

This feature allows you to customize the visibility of value labels in each series.

![Show Value Labels Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels-customization.png)

![Show Value Labels Customization Change](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-value-labels-customization-change.png)

#### Value Label Color

This allows you to customize the color of the value label.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the position of the value label in the chart. By default, it is set to 'Auto,' so the label position for the percent stacked column chart will be set to the middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle at which the value labels will be displayed.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/value-label-rotation.png)

#### Value Label Suffix

This allows you to show/hide the suffix value of value labels.

#### Suffix Value

This feature enables you to customize the suffix value of value labels.

![Suffix Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/suffix-value.png)

> **Note:** When the height and number of data in the chart were increased, the value label was hidden. Use the label rotation property to make the label visible.

### Show Items With No Data

This allows you to display the data for which column does `not` have a value.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values when they are `null or undefined` and the `Show Items With No Data` option is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Gap

This option allows you to display the null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-gap.png)

### Zero

This option allows you to display the null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values along with the average value.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-average.png)

#### Column Width

You can increase or decrease the width of the column by using the `Column Width` option.

![Column Width Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/columnwidth-value.png)

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-width.png)

#### Column Spacing 

You can increase or decrease the space between the columns by using the `Column Spacing` option.

![Column Space Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-spacing.png)

![Column Space Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/column-space-customization.png)

#### Enable Smooth Scroll

When this support is enabled, the size of the chart scroll bar thumb will be calculated based on the total number of records. As a result, you will be able to view the last record by scrolling just once.

#### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

## Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-settings.png)

#### Show Legend

A legend is a text that is used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting from the combo box.

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-legend.png)

Enabling the option of **Custom Legend Text** will allow you to define custom text, through the text area, to display for each legend series. You can select the series through the combo box in the chart.

#### Legend Interactivity

The `legend interactivity` option in the chart allows you to control the behavior of the chart legends. This option allows you to make the chart legends non-clickable, which can be particularly useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This feature can also be helpful when displaying critical pieces of data that should always be present for accuracy and context.

Disabling the interactivity feature in the Legend Settings category prevents you from clicking on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-interactivity-enable.png)

#### Legend Label Colors

This enables you to modify the title and label colors of the chart legend.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will display the legend text list as labels on the left and a corresponding text area on the right, allowing you to add formatted text to be displayed instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.

The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-as-dropdown.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in the `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will be reflected in the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize the legend text based on the value of the `Text Width` property.

***None***

This option allows you to render legend items without wrapping or trimming them.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if their legend exceeds the value of `Text Width`.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on the value of `Text Width`.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is only applicable if text-overflow is set to Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For a single series, the legend will not be visible.

#### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/linking.png)

You can enable linking and configure it to navigate to a general URL, with or without parameters. For more details, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis

![Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-settings.png)

This section allows you to customize the axis settings in the chart.

#### Title color

This feature enables you to customize the color of the axis title.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/title-color.png)

#### Label color

This feature enables you to customize the color of the axis labels.

![label color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/label-color.png)

#### Show Category Axis

This allows you to enable the visibility of the `Category Axis.`

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-axis.png)

#### Show Category Axis Title

This feature allows you to enable the visibility of the title for the `Category Axis`.

![Show Category Axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/categoryaxistitle.png)

#### Category Axis Title

This feature allows you to edit the title of the `Category Axis` for the chart, which will be reflected as the name of the x-axis on the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/editcategoryaxistitle.png)

#### Label overflow mode

This feature allows you to manage the display mode of the overlapping labels in the `Category Axis`.

***Trim***

This option trims the end of the overlapping label on the axis.

![Trim](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/trim.png)

***Hide***

This option hides the overlapping label on the axis.

![Hide](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/hide.png)

#### Category Axis Label Rotation

This feature allows you to specify the rotation angle for displaying the category axis labels.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to automatically set the interval based on the number of data points for the category axis labels. If the user wants to customize the interval, they need to disable auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-primary-value-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format**, properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primary-axis.png)

#### Show Primary Value Axis Title

This feature enables you to make the `Primary Value Axis` title of the chart visible.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the title of the `Primary Value Axis`, which will be reflected in the name of the y-axis on the chart.

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axis-title.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display negative values at the top and positive values at the bottom. For example, when we bind temperature data to the chart and want to display negative values at the top, we can utilize this property.

When this property is enabled, the chart will display negative values on the top and positive values on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog.

![Axis range settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axisrangesettings.png)

It will be reflected on the primary value axis of the chart.

![Axis range settings output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/axisrangeoutput.png)

### Parameter Support in Axis range:

This allows you to dynamically set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter:

1. Create a dashboard parameter in the number type as depicted below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/singleparameter.png)

Please click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (only Number type parameter values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/singleaxis.png)

Now, the parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/single.png)

### Range Parameter Value:

If you want to apply the same ranges in multiple cases, you should create a parameter value for the range type. This type of parameter includes both the start and end values.

1. Create a parameter of the range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/rangeparameter.png)

2. Please click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is divided into start and end parameters. The value entered in the first textbox is stored in the start parameter, and the value entered in the second textbox is stored in the end parameter. Only numeric values are allowed for the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/rangeaxis.png)

3. The value of the parameter is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type, where you can choose any field. The value of the parameter will be based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/datasource.png)

2. Click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Then select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/datasourceaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/datasourcemin.png)

#### Axis Format

This option enables you to format the values of the primary and secondary axes using the formatting details provided in the `Format` button. For further information, please refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/formatting-button.png)

#### Grid Lines

![Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the gridlines for the `Primary Value Axis` in the 100% stacked column chart.

![Primary value Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/primaryaxis.png)
 
#### Category Axis

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/show-axis-title.png)

This allows you to enable the gridlines for the `Category Axis` in the 100% stacked column chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/categoryaxis.png)

### Series Palette

This allows you to apply color to chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will only be visible if you have configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggling off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/color-mapping-type.png)

#### Color Mapping Type

By using the Color Mapping type, you are able to apply colors to the series, either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color to chart series based on data. If you want to assign a specific color to specific data (e.g., violet for 2021, sky blue for 2022, and green for 2020), you can use data-based color mapping. By default, the color mapping type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/100-stacked-column-data-type-color.png)

***Index***

It enables you to assign colors to chart series based on their `Index`. This means that the colors remain consistent even if the data is modified. A total of 15 distinct colors are displayed, after which the colors will start repeating from the ones already used.

For example, if you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful in setting the colors based on the rank. For instance, the top-ranked country can be assigned the color red, and this color will be maintained for the country with the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/100-stacked-column-index-based-color.png)

> **Note:** We prefer to use index-based color customization only for minimal data (up to 15 series).

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The auto font size property is used to set the font size based on the resolution of the client machine viewing the dashboard. If the user wants to customize or set a fixed font size, then they need to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/filter.png)

#### Act as Master Widget

This allows you to define the 100% stacked column chart widget as a master widget. As a result, other widgets in the dashboard can listen to its filter action.

#### Ignore Filter Actions

This allows you to define the 100% stacked column chart widget to ignore responses to filter actions applied on other widgets in the dashboard.

#### Hierarchical Filter

You can use this option to enable or disable hierarchical top `N` filtering. When applying the Top N filter with multiple dimension columns, you can customize the data returned based on whether the filtering should be done in a flat manner or based on the hierarchy of the dimension columns added.

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This feature enables you to adjust the alignment of the widget title to either the **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

When Auto Font Size is enabled, the font size of the title will automatically adjust if the screen resolution varies.

**Font Size**

This feature enables you to apply a specific font size to the widget title when the **Title Auto Font Size** is turned off. The value can range from 10 to 44.

### Subtitle Auto Font Size

When Auto Font Size is enabled, the subtitle's font size will be adjusted automatically if the screen's resolution varies.

**Font Size**

This allows you to apply the specified font size to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This feature enables you to switch the visibility of the `border` that surrounds the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This feature enables you to choose the **background image** for the 100% Stacked Column chart widget.

### Background Color

This feature allows you to set the **background color** for the 100% Stacked Column chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This feature enables you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the 100% Stacked Column chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the 100% Stacked Column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the 100% Stacked Column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with fewer than 7 columns on the Y-axis labels, the Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/Y-axis-label.png)

When the chart has fewer than 6 rows, the X-axis labels, X-axis titles, and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-column-chart/X-axis-label.png)
