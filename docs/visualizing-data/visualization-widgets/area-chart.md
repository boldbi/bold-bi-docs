---
layout: post
title: Area Chart Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Area Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/area-chart/"
platform: bold-bi
control: Area Chart
documentation: ug

---

# Area Chart

The Area Chart enables you to compare values for a group of unordered items across different categories by using filled curves that are arranged vertically.

![Area Chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/area-chart.png)

## How to configure the table data to area chart?

An Area Chart requires at least one value element and one column element in order to be displayed. The measure or expression field that you wish to analyze can be placed in the Y Values block. The dimension that you want to use for categorizing the measure can be placed in the Columns block. If you want to categorize based on a series, you can also place the corresponding dimension in the Rows block.

The following steps explain how to configure data for an area chart:

1.  Please drag and drop the area chart widget onto the canvas and resize it to your desired size.

![Configure the table data](/static/assets/visualizing-data/visualization-widgets/images/area-chart/configure-widget.png)

2.  Please click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.

![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons (here, the `Microsoft SQL` connection type is selected for demonstration).

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Then, click on the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane in the data design view, and then click the `Save` button.

![Save](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel to open the property pane.

![Properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![ASSIGN DATA](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areaassigndata.png)

9.  The data tab will be opened, displaying the available measures and dimensions from the connected data source.

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

10.  You can add the required data from `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measure` to the `Y Values` field by dragging and dropping the required measures.

![Drag and drop the required measure](/static/assets/visualizing-data/visualization-widgets/images/area-chart/add-measure.png)

Click on the `Settings` option to change the required summary type from the available summary types shown in the `Settings` menu.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/settings.png)

You can filter the data to be displayed in the chart by using the filter. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/area-chart/filter-option.png)

You can format the data to be displayed in the chart by using the format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type](/static/assets/visualizing-data/visualization-widgets/images/area-chart/format-option.png)

To remove the added value fields, click the highlighted button.

![click highlighted button](/static/assets/visualizing-data/visualization-widgets/images/area-chart/removebutton.png)

You can add more than one column from the `Dimensions` field to the `Y Values` field.

#### Adding Columns

You can add more than one value to the `Columns` field.

![Add more than one value](/static/assets/visualizing-data/visualization-widgets/images/area-chart/adding-columns.png)

The area chart will be rendered in this manner.

![Area chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/area-chart.png)

You have the option to change the `settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/area-chart/rename.png)

#### Sorting data

You can `sort` the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort the dimension data](/static/assets/visualizing-data/visualization-widgets/images/area-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting the "filters" option in settings. For more details, please refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/area-chart/filter-option-column.png)

To view all records, click on `Show All Records.`

Similarly you can add the `Measures` and `Expression Columns` into column field.
Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Columns` field.

![Drillalert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The selected view of the chart region is drilled.

![Drilled view of the chart region](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areadrill.png)

#### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field.

![Adding Rows](/static/assets/visualizing-data/visualization-widgets/images/area-chart/chart-row.png)

If necessary, you can apply a [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option to the rows field.

This will render an area chart in a series.

![Render area chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-series.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to be involved in the visualization. Instead, they should only be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden Column](/static/assets/visualizing-data/visualization-widgets/images/area-chart/assigndata.png)

We can configure both measure and dimension fields in the hidden column. For measures, we will have all the settings we have for the measure fields except for formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/area-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/area-chart/dimension.png)

![Date Field](/static/assets/visualizing-data/visualization-widgets/images/area-chart/date.png)

#### Linking

The primary use of hidden columns is for linking. When configuring hidden columns, we can observe that the fields set in hidden columns are listed in the linking section. By configuring the column in the linking section, we can pass the corresponding column value as a linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to influence the visualization, we can configure the matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/area-chart/link-measure.png)

**Dimension Based Example:** If we want to pass the number of Team Name played as a URL parameter but do not want it to affect the visualization, we can configure the Team Name in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/area-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/area-chart/filtericon.png)

Click on the Custom button that is highlighted in the image of the filter configuration dialog below. This will display a list of all the fields that have been configured in the widget. Keep the field that is configured in the hidden column and remove the other fields. Finally, click on the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/area-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/area-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.
 
![View data](/static/assets/visualizing-data/visualization-widgets/images/area-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the information icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/area-chart/info-icon.png)

The chart below displays the goals scored by each team without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/area-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and row field data, the data configured in the widgets gets duplicated, and each individual column is split based on the hidden column field. This affects the visualization of the chart, as you can see in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/area-chart/after.png)

## How to format area chart?

You can format the area chart to better illustrate the view you require by using the settings available in the `Properties` tab.

To format an area chart, follow these steps.

Please drag and drop the area chart onto the canvas and resize it to your desired size.

Please configure the data into an area chart.

Please focus on the area chart and click on the widget settings.

![Widget settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areawidgetsettings.png)

The property window will be opened.

![Property window](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areaproperties.png)

You can view the list of properties that are available for the widget, with the default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/property.png)

#### Name

This feature enables you to modify the `title` for the area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/Title.png)

#### Subtitle

This area chart widget allows you to provide the `subtitle`.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/subtitle.png)

#### Description

This area chart widget allows you to provide a `description` about it.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in the chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/Showtooltip.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog.

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/area-chart/name.png)

**Chart Type**: This feature enables you to change the widget view from the current chart type to a different chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation` feature.

#### Show Value Labels

This feature enables you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-labels.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix**, will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-label.png)

#### Customize

This feature allows you to customize the visibility of value labels in each series.

![Value labels customization change](/static/assets/visualizing-data/visualization-widgets/images/area-chart/value-label-customization.png)

![Value labels customization](/static/assets/visualizing-data/visualization-widgets/images/area-chart/value-label-change.png)

#### Value Label Color

This feature enables you to customize the color of the value label.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/area-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/area-chart/data-label-color.png)

#### Value Label Position

This option allows you to customize the position of the value label in the chart. By default, it is set to 'Auto,' so the label position for the area chart will be set as Top.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/area-chart/valuelabelposition.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the display of value labels.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-showlabelrotation.png)

#### Value Label Suffix

This feature enables you to display or conceal the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix Value](/static/assets/visualizing-data/visualization-widgets/images/area-chart/suffix-value.png)

> **Note:** When I increased the height and number of data in the chart, the value label was hidden. Use the label rotation property to make the label visible.

#### Show Marker

This feature enables you to switch the visibility of the marker from a label to an adornment for each data point in the chart series.

![Visibility of marker](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-marker.png)

### Show Items With No Data

By default, the chart does not display the columns with null or empty values, as shown in the image below.

![Chart Default](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-default.png)

If you enable the `Show Items With No Data` property, then the columns with null data will be displayed in the chart.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-gap.png)

### Empty Point Mode

This allows you to handle the display mode for empty points using the properties `Gap`, `Zero`, `Average` and `Connect`.

![Empty Point Mode Options](/static/assets/visualizing-data/visualization-widgets/images/area-chart/chart-options.png)

### Gap

This option allows you to display null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-gap.png)

### Zero

This option allows you to display the null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-zero.png)

### Average

This option allows you to display the null or undefined values along with the average value.

![Empty Point Mode Average](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-average.png)

### Connect

This option ignores the empty values and connects the remaining points.

![Empty Point Mode Connect](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-connect.png)

### Enable Smooth Scroll

When this support is enabled, the thumb-size of the chart scroll bar will be calculated based on the total count of records. Therefore, you will be able to view the last record by simply performing a single scroll.

#### Page Size

This option allows you to set the number of records that need to be fetched on the initial load.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-settings.png)

#### Show Legend

A legend is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting through a combo box.

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-legend.png)

Enabling the **Custom Legend Text** option will allow you to define a custom text, using the text area, to display for each legend series in the chart by selecting from the combo box.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This option provides the ability to make chart legends non-clickable, which can be particularly useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This feature might also be helpful when displaying critical pieces of data that should always be present for accuracy and context.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature under the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-interactivity-enable.png)

#### Legend Label Color

This allows you to change the title of the chart legend and the colors of its labels.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-label-color.png)

#### Customize

You can customize the legend text by using the `Custom Legend Settings` dialog. This dialog displays a list of legend text labels on the left, and a corresponding text area on the right where you can add formatted text to be displayed instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog displays the legend text list as labels on the left and a corresponding text area on the right. You can add formatted text to the text area to be displayed instead. When a column is added to the Row section, this dialog also provides two options at the top, `Individual` and `Group`, to toggle between.

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

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-as-dropdown.png)

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart, and it will be reflected with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize the legend text based on the value of the `Text Width` property.

***None***

This option allows you to render legend items without wrapping or trimming.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if their legend exceeds the value of `Text Width`.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on the value of `Text Width`.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-wrap.png)
#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For a single series, the legend will not be visible.

#### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/area-chart/linking.png)

You can enable linking and configure it to navigate to a general URL with or without parameters. For more details, please refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

#### Axis

![Axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/axis-settings.png)

This section enables you to customize the axis settings in a chart.

#### Title color

This enables you to customize the color of the axis title.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/area-chart/title-color.png)

#### Label color

This enables you to customize the color of the axis label.

![Label-color](/static/assets/visualizing-data/visualization-widgets/images/area-chart/label-color.png)

#### Show Axis Border

This option allows you to enable or disable the axis border of the chart.

![Show axis border](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-axis-border.png)

#### Show Category Axis

This allows you to enable the visibility of the `Category Axis`.

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of the `Category Axis` title.

![Show Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-categoryaxistitle.png)

#### Category Axis Title

This allows you to edit the title of the `Category Axis` for the chart, which will be reflected as the name of the x-axis on the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/area-chart/show-axis-title.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of the overlapping label on the axis.

![Label overflow mode trim](/static/assets/visualizing-data/visualization-widgets/images/area-chart/category-axis.png)

***Hide***

This option hides the overlapping label on the axis.

![Label overflow mode hide](/static/assets/visualizing-data/visualization-widgets/images/area-chart/hide-overflow.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and it can also be customized when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/area-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trimming-label.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for displaying the category axis labels.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/area-chart/label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/area-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If a user wants to customize the interval, they need to disable the auto interval and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart.

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/primary-axis.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/primary.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of the chart.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the title of the `Primary Value Axis`. It will be reflected in the y-axis name of the chart.

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/area-chart/axis-title.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display negative values at the top and positive values at the bottom. For example, when binding temperature data to the chart and wanting to display negative values at the top, we can utilize this property.

When this property is enabled, the chart will display negative values on the top and positive values on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the minimum, maximum, and interval values of the primary value axis through the Axis Range Settings dialog.

![Axis Range Settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-axisrangesettings.png)

It will be reflected on the primary value axis of the chart.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areachart-axisrangeoutput.png)

### Parameter Support in Axis range:

This feature allows you to dynamically set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog by using the values of the dashboard parameters. Only number-type dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in the number type as shown below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/parameter.png)

Click on the axis range settings dialog and enter `@` in the textbox. Select the parameter value (Numeric parameter values are only allowed in the **minimum**, **maximum**, and **interval**).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/minparam.png)

Now the parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/areamin.png)


### Range Parameter Value:

If you want to establish the same ranges in multiple cases, create the parameter value for the range type. This type of parameter includes the start and end values.

1. Create a parameter of type range.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The value of the first textbox is stored in the start parameter, and the value of the second textbox is stored in the end parameter. Select the parameter value (only Number type parameter values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/rangeaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type, wherein you can choose any field. The value of the parameter will be determined by the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/datasource.png)

2. Click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Then, select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/datasourceaxis.png)

3. The value of the parameter is reflected in the axis of the chart.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/area-chart/datasourcemin.png)

#### Grid Line

![Grid Line](/static/assets/visualizing-data/visualization-widgets/images/area-chart/chartgridlines.png)

#### Primary Value Axis

This allows you to enable the gridlines for the `Primary Value Axis` in the area chart.

![Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/primary-value-axis.png)

#### Category Axis

This allows you to enable the gridlines for the `Category Axis` in the area chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/enable-category-axis.png)

#### Secondary Value Axis

This feature enables you to activate the gridlines for the `Secondary Value Axis` in the area chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/area-chart/secondaryaxis.png)

### Trendline

![Trendline](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trendlinesettings.png)

You can add more than one trendline to Cartesian charts, except for bar type series (Line, Column, Area, and Spline) and stacked types of charts. You can `add, edit, and delete` trendlines.

### Add Trendline and Edit Trendline

To `add` the trendline, click the `highlighted button`.

![Trendline Add](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trendlineadd.png)

Now, the dialogue will open as follows.

![Trendline Dialog](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trendlinedialog.png)

Click the `OK` button to add a trendline in a spline area chart. Now, the chart is rendered as follows.

![Trendline chart](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trendline.png)

To `edit` the trendline, select the one that needs to be edited and click the `highlighted button`.

![Trendline Edit](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trendlineedit.png)

Once again, the trendline dialog window is now open.

***Legend Text***

You can edit the trendline legend by using the `Legend Text` text box. By default, the `Legend Text` is generated based on the line type and series name.

***Series***

You can change the series for which the trendline is displayed by selecting the desired series from the `Series` dropdown option. 

***Line Type***

You can select the line type by choosing from the options in the `Line Type` dropdown menu, which include Linear, Exponential, Logarithmic, Power, and Polynomial.

***Line Color***

You can change the color of the trendline using the `Line Color` color picker.

***Line Style***

You can change the style of the trendline by selecting the `Line Style` drop-down option, which includes choices such as Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot.

### Delete Trendline

To `delete` the trendline, select the one that needs to be deleted and click on the `highlighted button`.

![Trendline Delete](/static/assets/visualizing-data/visualization-widgets/images/area-chart/trendlinedelete.png)


#### Formatting

This allows you to customize the color of the widget.

![Formatting](/static/assets/visualizing-data/visualization-widgets/images/area-chart/formatting.png)

![Formatting Otput](/static/assets/visualizing-data/visualization-widgets/images/area-chart/formatting-output.png)

### Series Palette

This feature allows you to apply color to chart series either using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This set of options will only be visible if you have configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/area-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/area-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/area-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color to chart series based on data. If you want to assign a specific color to specific data (e.g., Violet for 2021, Sky Blue for 2022, and green for 2020), you can use data-based color mapping. The default Color Mapping Type is `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/area-chart/area-chart-data-type-color.png)

***Index***

It allows you to apply color to chart series based on the `Index`, so that the colors remain consistent even if the data is changed. It shows only 15 different colors; after that, the colors will repeat from the ones above.

For example, if you are displaying the countries based on the increasing order of the case count, index-based color mapping will be useful for setting the colors based on the rank. For instance, the top-ranked country can be assigned the color red, and this red color will be maintained for the country with the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/area-chart/area-chart-index-based-color.png)

> **Note:** We prefer to use index-based color customization only for a minimum amount of data (up to 15 series).

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/area-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. The auto font size property is used to set the font size based on the resolution of the dashboard viewing client machine. If the user wants to customize or set a fixed font size, then the user needs to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/area-chart/filter.png)

#### Act as Master Widget

This allows you to define the area chart widget as a master widget, enabling other widgets in the dashboard to listen to its filter action.

#### Ignore Filter Actions

This allows you to define this area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable or disable the hierarchical top `N` filtering. When applying the Top N filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied to each individual column separately, based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of the widget title to either the **left, center, or right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

When Auto Font Size is enabled, the font size of the title will be adjusted automatically if the screen resolution varies.

**Font Size**

This feature enables you to apply a specific font size to the widget title if the **Title Auto Font Size** is turned off. The value can range from 10 to 44.

### Subtitle Auto Font Size

When Auto Font Size is enabled, the subtitle's font size will be automatically adjusted if the screen resolution varies.

**Font Size**

This allows you to apply the specified font size to the widget title when the **Subtitle Auto Font Size** is disabled. The value can range from 10 to 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will automatically adjust if the size of the widget changes.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This feature enables you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This feature allows you to set the **background image** for the spline area chart widget.

### Background Color

This allows you to set the **background color** for the spline area chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This feature allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the area chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the area chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget 

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/area-chart/Y-axis-label.png)

When the chart has fewer than 6 rows, the X-axis labels, X-axis titles, and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/area-chart/X-axis-label.png)