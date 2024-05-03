---
layout: post
title: 100% Stacked Area Chart – Embedded BI | Bold BI Docs
description: Learn how to create a 100% Stacked Area Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/100-stacked-area-chart/"
platform: bold-bi
control: 100% Stacked Area Chart
documentation: ug
---

# 100% Stacked Area Chart

The 100% Stacked Area Chart allows for the comparison of multiple measures through the use of filled curves that are stacked vertically, one after another.

![Stacked area chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/stacked-area-chart.png)

## How to configure the table data to 100% stacked area chart?

A 100% Stacked Area Chart requires at least one value element and one column element to display. The measure or expression field that you want to analyze can be placed in the Y Values block. The dimension that you want to categorize the measure by can be placed in the Columns block. If you want to categorize based on a series, you can also place the respective dimension in the Rows block.

To configure the data to a 100% stacked area chart, follow the steps below:

1.  Drag and drop the 100% stacked area chart onto the canvas and resize it according to your desired size.

![Adding widget](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons (Here, the `Microsoft Excel` Connection type is selected for demonstration).

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill out the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, and the property pane will open. Now, switch to the `ASSIGN DATA` tab.

![Designer properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/assign-data.png)

8.  The `ASSIGN DATA` tab will be opened, displaying the available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the necessary data from the `Measures` and `Dimensions` into the designated field.

#### Adding Value(s)

You can add more than one `Measures` into the `Value(s)` field by dragging and dropping the required measure.

![Adding Value(s)](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/add-measure.png)

Click on the `Settings` option to change the required summary type from the available summary types shown in the `Settings` section.

![Settings menu](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings.png)

#### Filtering data

You can filter the data that is displayed in a chart by using the filter option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in a chart by using the format option. For more details, please refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/format-option.png)

To remove the added value fields, click the highlighted button.

![Remove fields](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/removebutton.png)

You can add multiple columns from the `Dimensions` field to the `Values` field.

#### Adding Columns

You can add more than one value to the `Columns` field.

![Adding columns](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/adding-columns.png)

The chart will be rendered like this.

![Configured widget with columns](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-columns.png)

You can change the `settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/column-settings.png)

#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/rename.png)

#### Sorting data

You can `sort` the dimension data using the Sort option under the `Settings` menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sorting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting the filters option in the settings. For more details, please refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Dimension Filters](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter-option-column.png)

To view all the records, click on `Show All Records`.

Similarly, you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

If you add more than one value to the `Columns` field, the alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Columns` field.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The zoomed in view of the chart region has been selected.

![Drilled view](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/drilled-view.png)

#### Adding Rows

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 

![Adding row](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-row.png)

You can apply a [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render the chart in a series.

![Configured with series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/configured-with-series.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to be included in the visualization, but only used for [linking](#linking), [filtering](#filtering) and [view data](#view-data).

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measures, we will have all the settings we have for the measure fields except for formatting and filtering.

![Configured with  measure series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Configured with  dimension series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/dimension.png)

![Configured with  date field](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/date.png)

#### Linking

The primary use case for hidden columns is linking. When hidden columns are configured, we can see that the fields configured in hidden columns are listed in the linking section. By configuring the column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to affect the visualization, we can configure the matches in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/link-measure.png)

**Dimension Based Example:** If we want to pass the number of Team Name played as a URL parameter but do not want it to affect the visualization, we can configure the Team Name in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure the hidden columns and click the filter icon below.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filtericon.png)

Click the Custom button, which is highlighted in the filter configuration dialog image below. This will display a list of all the fields that have been configured in the widget. Retain the field that is configured in the hidden column and remove the other fields. Finally, click the Update button.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the information icon in the `Hidden Column` section. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/info-icon.png)

The chart below displays the goals and Attempts On Target for each team without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/before.png)

If we configure the lower hierarchy data (Player Name) in hidden columns compared to column and row field data, the data configured in the widgets becomes duplicated, and each individual column is split based on the hidden column field. This affects the visualization of the chart, as can be seen in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/after.png)

## How to format 100% stacked area chart?

You can format the 100% stacked area chart for better illustration of the view you need using the settings available in the `Properties` pane.

To configure data into 100% stacked area chart follow the steps

1. Please drag and drop the 100% stacked area chart onto the canvas and resize it to the size you need.

2. Configure the data into a 100% stacked area chart.

3. Please focus on the 100% stacked area chart and click on the widget settings.

![Settings Icon](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/settings-icon.png)

The property window will be opened.

![Properties pane](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/properties-pane.png)

You can view the list of properties that are available for the widget with the default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/property.png)

#### Name

This feature allows you to modify the `title` for the 100% stacked area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Title.png)

#### Subtitle

This widget allows you to provide the `subtitle` for the spline area chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Subtitle.png)

#### Description

This spline area chart widget allows you to provide the `description`.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Tooltip.png)

#### Show Value in Tooltip

As it is a percentage type, the values will be shown with percentages when you hover over the chart. If you enable this option, the value will be shown in the tooltip.

#### Chart Type and axis

To open the `Chart Type and Axis Settings` dialog, click the `Change` button.

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/name.png)

**Chart Type**: This feature allows you to switch the widget view from the current chart type to a different chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis. 

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation`.

#### Show Value Labels

This feature allows you to switch the visibility of value labels.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-value-label.png)

If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **value label position**, **value label rotation** and **value label suffix**, will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-label.png)

#### Customize

This feature allows you to customize the toggle visibility of value labels in each series.

![Show value label Customize](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/custom-valuelabel.png)

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/valuelabel.png)

#### Value Label Color

This allows you to customize the color of the value label.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the position of the value label in a chart. By default, it is set to `Auto`, so the label position for the percent stacked area chart will be set as middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for displaying the value labels.

![Value label rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/label-rotation.png)

#### Value Label Suffix

This feature allows you to display or hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/suffix-value.png)

> **Note:** When the height and number of data in the chart were increased, the value label was hidden. Use the label rotation property to make the label visible.

#### Show Marker

This allows you to toggle the visibility of markers, which label and adorn each data point in the chart series.

![Show marker](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data for which column does `not` have any values.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)

### Empty Point Mode

This option allows you to handle the display mode of the data point values when they are `null or undefined`.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)
 
### Gap

This option allows you to display the null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-gap.png)

### Zero

This option allows you to display the null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-zero.png)

### Average

This option enables you to present the null or undefined values using the average value.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-average.png)

### Enable Smooth Scroll

By enabling this support, the size of the chart scroll bar thumb will be calculated based on the total number of records. This will allow you to view the last record by simply scrolling once.

### Page Size

This option allows you to specify the number of records that need to be fetched on the initial load.

#### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-settings.png)

#### Show Legend

A legend is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting through the combo box.  

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-legend.png)

Enabling the option of **Custom Legend Text** will allow you to define a custom text, using the text area, to display for each legend series in the chart (selected through the combo box).

#### Legend Interactivity

The chart's `legend interactivity` option allows you to control the behavior of the chart legends. This option provides the ability to make chart legends non-clickable, which can be particularly useful in situations where you do not want users to hide or show series data by clicking on the legend. This feature might also be beneficial when displaying crucial data that should always be present for accuracy and context.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-interactivity-enable.png)

#### Legend Label Color

This feature enables you to modify the title and label colors of the chart legend.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-label-color.png)

#### Customize

You can customize the legend text by using the `Custom Legend Settings` dialog. This dialog displays a list of legend text labels on the left, with a corresponding text area on the right. In this text area, you can add formatted text that will be displayed instead of the default legend text.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog will display the legend text list as labels on the left and a corresponding text area on the right to add formatted text to be displayed instead. When a column is added to the Row section, this dialog will also show two options, `Individual` and `Group`, at the top to toggle between.

***Individual***

![Legend customization For Row](/static/assets/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/static/assets/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.

The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-as-dropdown.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option enables you to modify the shape of the legend to a `Circle`.

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series`.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend`.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legendtitle.png)

#### Text Overflow

This option enables you to customize the legend text based on the value of the `Text Width` property.

***None***

This option enables you to display the legend items without any wrapping or trimming.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-none.png)
***Trim***  

This option allows you to trim the legend items if their legend exceeds the value of `Text Width`.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap the legend items based on the value of `Text Width`.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the legend items, and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are the **legend color**, **legend position**, **customization button** and **legend title**, are also hidden.

> **NOTE:** For a single series, the legend won't be visible.

#### Link

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/linking.png)

You can enable linking and configure it to navigate to a general URL, whether with or without parameters. For more details, please refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis Settings

![Axis settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-settings.png)

This section allows you to customize the axis settings in the chart. 

#### Title color

This feature allows you to customize the color of the axis title.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/title-color.png)

#### Label color

This feature allows you to customize the color of the axis labels.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/label-color.png)

#### Show Category Axis

This allows you to enable the visibility of the `Category Axis.`

![Show Category axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependent properties such as the **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval**, option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of the `Category Axis` title.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-category-axis-title.png)

#### Category Axis Title

This feature allows you to edit the title of the `Category Axis` for the chart, which will be displayed as the x-axis name of the chart.

![Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of the overlapping label on the axis.

![Trim](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis-title.png)

***Hide***

This option hides the overlapping label on the axis.

![Hide](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/hide.png)

#### Trim Axis Labels

This option enables you to shorten the axis labels according to the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels. It can also be customized when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/trimming-label.png)

#### Category Axis Label Rotation

This feature allows you to specify the rotation angle for displaying the category axis labels.

![Axis label rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to set automatic intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then the user needs to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart. 

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/show-primary-value-axis.png)

If you disable `Show Primary Axis` option, dependencies properties **Axis title**, **Axis title text** and **Axis type**, **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of the chart.

![Show Primary value axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the title of the `Primary Value Axis`, which will be reflected as the name of the y-axis on a chart.

![Primary value axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/edit-primary-value-axis-title.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display the negative values at the top and positive values at the bottom. For example, when we bind temperature data to the chart and want to display the negative values at the top, we can utilize this property.

When this property is enabled, the chart will display negative values on the top and positive values on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangesettings.png)

It will be reflected in the primary value axis of the chart.

![Axis range settings output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axisrangeoutput.png)

### Parameter Support in Axis range:

This allows you to dynamically set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Please create a dashboard parameter in the number type as shown below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/singleparameter.png)

Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (Number type parameter values are the only ones allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/singleaxis.png)

Now, the parameter value is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/single.png)

### Range Parameter Value:

If you want to establish identical ranges in multiple instances, create a parameter value for the range type. This parameter type includes the starting and ending values.

1. Create a parameter in range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The value in the first textbox is stored in the start parameter, and the value in the second textbox is stored in the end parameter. Select the parameter value (only Number type parameter values allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/rangeaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type, choosing any field. The value should be based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/datasource.png)

2. Click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Then, select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/datasourceaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/datasourcemin.png)

#### Grid Line

![Chart grid lines](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/chartgridlines.png)

#### Primary value Axis

This feature allows you to enable gridlines for the `Primary Value Axis` in the 100% stacked area chart.

![Axis Gridline](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/axis-gridline.png)

#### Category Axis

This allows you to enable the gridlines for the `Category axis` in the 100% stacked area chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/category-axis.png)

### Series Palette

This allows you to apply color to chart series either by using a default palette or a custom color palette. The colors will be applied using the default palette by default. This series of settings will only be visible if you have configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/color-mapping-type.png)

#### Color Mapping Type

By using the Color Mapping type, you have the ability to apply colors to the series, either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color to chart series based on data. If you want to assign a specific color to specific data (e.g., Violet for 2021, Sky Blue for 2022, and green for 2020), you can use data-based color mapping. The default Color Mapping Type is `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/data-type-color.png)

***Index***

It allows you to apply color to chart series based on the `Index`, so that the colors remain consistent even if the data is changed. It only shows a maximum of 15 different colors, after which the colors will be repeated from the ones above.

For example, if you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. For instance, assigning the red color to the top-ranked country will be maintained for the country with the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/index-based-color.png)

> **Note:** We only prefer to use index-based color customization for a minimum amount of data, up to 15 series.

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The auto font size property is used to set the font size based on the resolution of the machine on which the dashboard is being viewed. If the user wants to customize or set a fixed font size, they need to disable the auto font size and manually set the desired font size.

#### Formatting

This feature enables you to personalize the color of the widget.

![Formatting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/formatting.png)

![Formatting Otput](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/formatting-output.png)

#### Filter

![Filter settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/filter.png)

#### Act as Master Widget

This allows you to define the 100% stacked area chart widget as a master widget, so that other widgets in the dashboard can listen to its filter action.

#### Ignore Filter Actions

This feature allows you to define the 100% stacked area chart widget to ignore any filter actions applied to other widgets on the dashboard.

#### Hierarchical Filter

Through this option, you can enable or disable the hierarchical `top N` filtering. When applying the `Top N` filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied to each individual column separately, based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This feature allows you to adjust the alignment of the widget title to either the **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

When Auto Font Size is enabled, the title's font size will be automatically adjusted if the screen resolution varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

When Auto Font Size is enabled, the subtitle's font size will be automatically adjusted if the screen resolution varies.

**Font Size**

This allows you to apply the specified font size to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will adjust automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This feature allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can range from 0 to 10.

### Show Background Image

This allows you to set the **background image** for the spline area chart widget.

### Background Color

This feature allows you to set the **background color** for the spline area chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This feature allows you to toggle the visibility of the `Shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This feature allows you to enable or disable the `widget title` of the 100% stacked area chart.

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the 100% stacked area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the 100% stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the 100% stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the 100% stacked area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the 100% stacked area chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the widget's size for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/Y-axis-label.png)

When the chart has fewer than 6 rows, the X-axis labels, X-axis titles, and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-area-chart/X-axis-label.png)
