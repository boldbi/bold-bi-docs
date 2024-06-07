---
layout: post
title: 100% Stacked Bar Chart – Embedded BI Visual | Bold BI Docs
description: Learn how to create a 100% Stacked Bar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/100-stacked-bar-chart/"
platform: bold-bi
control: 100% Stacked Bar Chart
documentation: ug
---

# 100% Stacked Bar Chart

The 100% Stacked Bar Chart allows you to compare multiple measures by stacking the bars horizontally, one after the other.

![Hundred stacked bar chart image1](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstacked-barchart.png)

## How to configure the table data to 100% stacked bar chart?

A 100% Stacked Bar Chart requires a minimum of 1 value element and 1 column element to be showcased. The measure or expression field that you want to analyze can be placed in the Y Values block. The dimension that you want to use to categorize the measure can be placed in the Columns block. If you want to categorize based on a series, you can also place the respective dimension in the Rows block.

The following steps explain how to configure data in a 100% stacked bar chart:

1.  Drag and drop the 100% stacked bar chart onto the canvas and resize it to your desired size.

![Add Hundred stacked bar chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/add-hundredstacked-barchart.png)

2.  Please click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any of the listed connection type buttons. (Here, the `Microsoft Excel` connection type is selected for demonstration.)

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, please fill in the connection type and its related details. Then, click on the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel to open the property pane.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/assign-data.png)

9.  The `ASSIGN DATA` tab will be opened, displaying the available measures and dimensions from the connected data source.

![Chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

10.  You can add the necessary data from `Measures` and `Dimensions` into the designated field.

#### Adding Value(s)

You can add more than one `Measures` to the `Y Values` field by dragging and dropping the required measures.

![Add Y values](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/add-measure.png)

Click on the `Settings` option in order to change the required summary type from the available summary types displayed in the Settings.

![Settings option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/settings.png)

#### Filtering data

You can filter the data that is displayed in the chart by using the filter option. For more details, please refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Widget filters](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, please refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/format-option.png)
To remove the added value fields, click the highlighted button.

![Remove fields](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/removebutton.png)

You can add more than one column from the `Dimensions` field to the `Y Values` field.

#### Adding Columns

You can add more than one value to the `Columns` field.

![Adding Columns](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/adding-columns.png)

The 100% stacked bar chart will be rendered in this manner.

![Hundred stacked bar](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstacked-barchart.png)

You are able to change the `settings`.

![Change the Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-settings.png)

#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/rename.png)


#### Sorting data 

You can `sort` the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Advanced sorting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/sort-option.png)

#### Filtering data
You can apply filters by selecting the "filters" option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filter-option-column.png)

To display all records, click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

#### Multi-Level Drill Down

If more than one value is added to the `Columns` field, an alert message will be displayed. Click `Yes` to enable the option.

>**NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The selected view of the chart region is drilled.

![Hundred percent stacked bar drill](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbardrill.png)

#### Adding Rows

You can drag and drop the `Measure` or `Dimension` into the `Rows` field. 

![Chart row](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-row.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will generate a series of charts.

![Hundred stacked bar series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbar-series.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to participate in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden Column](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/assigndata.png)

We can configure both measure and dimension fields in the hidden column. For measures, we will have all the settings that we have for measure fields except for formatting and filtering.

![Configure measure series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Configure dimension series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/dimension.png)

![Configure date field](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/date.png)

#### Linking

The primary use case for hidden columns is linking. When configuring hidden columns, we can see that the fields configured in hidden columns are listed in the linking section. When configuring the column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to influence the visualization, we can configure the matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/link-measure.png)

**Dimension Based Example:** If we want to include the number of Team Name played as a URL parameter but do not want it to affect the visualization, we can set up the Team Name in hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure the hidden columns and click the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filtericon.png)

Please click on the Custom button that is highlighted in the filter configuration dialog image below. This will provide a list of all the fields that have been configured in the widget. Please retain the field that is configured in the hidden column and remove the remaining fields. Finally, click on the Update button.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the information icon in the Hidden Column section.

![Info Icon](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/info-icon.png)

The chart below displays the goals and Attempts On Target for each team, without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and row field data, the data configured in the widgets gets duplicated, and individual columns are split based on the hidden column field. This affects the chart visualization, as can be seen in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/after.png)

## How to format 100% stacked bar chart?

You can format the 100% stacked bar chart to better illustrate the view you require by using the settings available in the `Properties` pane.

To configure data into a 100% stacked bar chart, follow the steps:

1. Please drag and drop the 100% stacked bar chart onto the canvas and resize it to the size you need.

2. Configure the data into a 100% stacked bar chart.

3. Please focus on the 100% stacked bar chart and click on the widget settings.

![Hundred stacked bar chart settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-settings.png)

The property window will be opened.

![Property-window](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/property-window.png)

You can view the list of properties that are available for the widget with the default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/property.png)

#### Name

This allows you to change the `title` for this area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Title.png)

#### Subtitle

This area chart widget allows you to provide the `subtitle`.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Subtitle.png)

#### Description

This allows you to provide the `description` about this area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Description.png)

#### Basic Settings

![Basic-Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/basic-settings.png)

### Show Tooltip

This option allows you to toggle the visibility of tooltips in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Showtooltip.png)

### Show Value in Tooltip

As it is a percentage type, values will be shown with percentages when you hover on the chart. If you enable this option, the value will be shown in the tooltip.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/tooltip-value.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/name.png)

**Chart Type**: This feature allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you toggle `Enable Animation.`

#### Show Value Labels

This feature enables you to switch the visibility of value labels.

![Show-Value-Labels](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-value-labels.png)


If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-label.png)

#### Customize

This feature enables you to customize the visibility of value labels for each series by toggling them.

![Show-Value-Labels-Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/value-label-customize.png)

![Show-Value-Labels](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-customization.png)

#### Value Label Color

This feature enables you to personalize the color of the value label.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the position of the value label in a chart. By default, it is set to 'Auto,' so the label position for the percent stacked bar chart will be set as middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/value-labelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Label-Rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-rotation.png)

#### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

#### Suffix Value

This feature allows you to customize the suffix value of value labels.

![Suffix-Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/suffix-value.png)

> **Note:** When I increased the height and number of data in the chart, the value label was hidden. I used the value label rotation property to make the label visible.

### Show Items With No Data

This allows you to show the data for which column does `not` have any values.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values when they are `null or undefined` and the `Show Items With No Data` option is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Gap

This option allows you to display the null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Zero

This option enables you to display null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-gap.png)

### Average

This option displays the null or undefined values along with the average value.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/areachart-average.png)

### Column width

You can decrease or increase the width of the column.

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-width-custom.png)

![Column Width](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-width.png)

#### Column Spacing

You can decrease or increase the space of the column.

![Column Width](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/column-spacing.png)

![Column Width](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/spacing.png)

#### Enable Smooth Scroll

When this support is enabled, the size of the scroll bar thumb on the chart will be calculated based on the total number of records. As a result, you will be able to view the last record with just one scroll.

#### Page Size

This option allows you to specify the number of records that need to be fetched on the initial load.

#### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-settings.png)

#### Show Legend

A legend is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting through the combo box.

![Show-Legend](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-legend.png)

Enabling the option of **Custom Legend Text** will allow you to define custom text (using the text area) to display for each legend series (selected from the combo box) in a chart.

#### Legend Interactivity

The chart's `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make the chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-interactivity-enable.png)

#### Legend Label Color

This allows you to change the title and label colors of the chart legend.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will display the legend text list as labels on the left and a corresponding text area on the right to add the formatted text for display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.

The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-as-dropdown.png)

#### Legend Shape

This enables you to alter the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in the `Series` section.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart, which will be reflected with the `Show Legend` option.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legendtitle.png)

#### Text Overflow

This option enables you to customize the legend text according to the value of the `Text Width` property.

***None***

This option allows you to render the legend items without wrapping or trimming them.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if their legend exceeds the `Text Width` value.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap the legend items based on the value of `Text Width`.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title**, are also hidden.

> **NOTE:** For a single series, the legend will not be visible.

#### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/linking.png)

You can enable linking and configure it to navigate to a general URL with or without parameters. For more details, please refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) section.

#### Axis

![Chart axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-settings.png)

This section allows you to customize the axis settings in the chart.

#### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/title-color.png)

#### Label color

This allows you to customize the color of the axis label.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/label-color.png)

#### Show Category Axis

This enables the visibility of the `Category Axis`.

![Hundred percent stacked bar chart Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-showcategoryaxis.png)

#### Show Category Axis Title

This allows you to enable the visibility of the `Category Axis` title.

![Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-categoryaxistitle.png)

If you disable the `Show Category Axis` option, dependencies properties which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option, will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-axis.png)

#### Category Axis Title

This allows you to edit the title of the `Category Axis` for the chart. It will be reflected as the name of the x-axis on the chart.

![Edit category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-axis-title.png)

#### Label overflow mode

This allows you to control the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of the overlapping label on the axis.

![Trim](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/trim.png)

***Hide***

This option hides the overlapping label on the axis.

![Hide](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the `axis` labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and it can also be customized when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/trimming-label.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for displaying the category axis labels.

![Category-Axis-Label-Rotation](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to automatically set intervals based on the number of data points for category axis labels. If a user wants to customize the interval, then they need to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show-Primary-Value-Axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/show-primary-value-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/primary-axis.png)

#### Show Primary Value Axis Title

This feature allows you to enable the visibility of the chart's `Primary Value Axis` title.

![Primary value axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/hundredstackedbarchart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the title of the `Primary Value Axis`. It will be reflected in the y-axis name of the chart. 

![Edit primary value axis title](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/editprimaryvalueaxistitle.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and show the negative values at the top and positive values at the bottom. For example, when we bind the temperature data to the chart and want to display the negative values at the top, we can make use of this property.

When this property is enabled, the chart will display negative values on the top and positive values on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axisrangesettings.png)

It will be reflected in the primary value axis of the chart.

![Axis range settings output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axisrangeoutput.png)

### Parameter Support in Axis range:

This allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter:

1. Create a dashboard parameter of type number as shown below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/singleparameter.png)

Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value (Only Number type parameter values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/singleaxis.png)

Now, the parameter value is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/single.png)

### Range Parameter Value:

If you want to establish the same ranges in multiple cases, create a parameter value of the range type. This type of parameter includes both the start and end values.

1. Create a parameter of type range.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/rangeparameter.png)

2. Please click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is divided into start and end parameters. The value entered in the first textbox is stored in the start parameter, while the value entered in the second textbox is stored in the end parameter. Please select a parameter value (only Number type parameter values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/rangeaxis.png)

3. The value of the parameter is reflected in the axis of the chart.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. In this, choose any field. The value should be based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/datasource.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Then, select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/datasourceaxis.png)

3. The value of the parameter is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/datasourcemin.png)

#### Axis Format

This option allows you to format the primary and secondary axis values using the formatting details provided in the Format button. For more information, refer to this measure format.

![Axis Format](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/axis-format.png)

#### Grid Lines

![Chart grid lines](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/chartgridlines.png)

#### Primary value Axis

This enables you to enable the gridlines for the `Primary Value Axis` in the 100% stacked bar chart.

![Hundred percent stacked bar chart primary axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/primaryaxis.png)
 
#### Category Axis

This allows you to enable the gridlines for the `Category Axis` on the 100% stacked bar chart.

![Hundred percent stacked bar chart category axis](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/categoryaxis.png)

#### Formatting 

This feature enables you to customize the color of the widget.

![Formatting](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/formatting-color.png)

![Formatting Customization](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/formatting-color-customization.png)

### Series Palette

This allows you to apply color to the chart series either using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will only be visible if you have configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/color-mapping-type-options.png)

***Data***

It enables you to apply colors to chart series based on data. If you wish to assign a particular color to specific data (e.g., violet for 2021, sky blue for 2022, and green for 2020), you can utilize data-based color mapping. The default Color Mapping Type is set to `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/100-stacked-bar-data-type-color.png)

***Index***

It allows you to apply color to chart series based on the `Index`, ensuring that the colors remain consistent even if the data is changed. Only 15 different colors are shown, after which the colors will repeat from the ones above.

For example, if you are displaying the countries based on the increasing order of the case count, index-based color mapping will be useful to set the colors based on the rank. For instance, assign the color red to the top-ranked country, and this color will be maintained for the country with the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/100-stacked-bar-index-based-color.png)

> **Note:** We prefer to use index-based color customization only for a minimum amount of data (up to 15 series).
 
### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. This property is used to automatically set the font size based on the resolution of the client machine viewing the dashboard. If the user wants to customize or set a fixed font size, they need to disable the auto font size and manually set the desired font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/filter.png)

#### Act as Master Widget

This allows you to define the 100% stacked bar chart widget as a master widget, so that other widgets in a dashboard can listen to its filter action.

#### Ignore Filter Actions

This feature allows you to configure the 100% stacked bar chart widget to disregard any filter actions applied to other widgets in a dashboard.

#### Hierarchical Filter

Through this option, you can enable and disable hierarchical top "N" filtering. When applying the Top N filter with multiple dimension columns, the returned data can be customized depending on whether the filtering should be done as a flat result or based on the hierarchy of dimension columns that have been added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied to each individual column separately, based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of the widget title to either the **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

When Auto Font Size is enabled, the font size of the title will be adjusted automatically based on the screen resolution.

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

This allow you to set the **background image** for the 100% Stacked Bar chart widget.

### Background Color

This allows you to set the **background color** to the 100% Stacked Bar chart widget.

### Transparency

This property allows you to specify the **transparency** for the background color.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the 100% Stacked Bar chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the 100% Stacked Bar chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the 100% Stacked Bar chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart X-axis labels, X-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/X-axis-label.png)

When the chart has been placed with less than 6 rows, chart Y-axis labels, Y-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/100-stacked-bar-chart/Y-axis-label.png)
