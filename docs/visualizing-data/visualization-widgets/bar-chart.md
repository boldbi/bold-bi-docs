---
layout: post
title: Bar Chart - Embedded BI Visual | Bold BI Documentation
description: Learn how to create a Bar Chart visual in Bold BI Embedded dashboard, configure data and other settings.
canonical: "/visualizing-data/visualization-widgets/bar-chart/"
platform: bold-bi
control: Bar Chart
documentation: ug

---

# Bar Chart

A `Bar chart` enables you to compare values for a group of items that are not in any specific order across different categories, using vertical bars. 

![Default Bar chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/barchart.png)

## How to configure the table data to bar chart

The `Bar chart` needs a minimum of one value element and one column element to showcase. The `measure` column or `expression` column that you would like to analyze can be dropped into the values block. The dimension column that you would like to categorize the measure column can be dropped onto the columns block. If you would like to categorize based on a series column, then the respective dimension column can be dropped onto the Rows block in addition. These blocks are composed into a data pane.

The following steps explains the  data configuration of bar chart:

1.   Drag and drop the icon for the `column chart control` from the toolbox into the design panel. You can find the control in the toolbox by searching.

![Adding column chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/drop-widget.png)

2.	Resize the widget as required.

![Resizing widget in design panel](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/resizing.png)

3.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

4.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

5.  In the connection type panel, click on any one of the listed connection type buttons. (Here, the `Microsoft Excel` connection type is selected for demonstration.)

![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

6.  In the `NEW DATA SOURCE` configuration panel, please fill in the connection type and the related details. Then, proceed to click the `Preview & Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

7.  Drag and drop your preferred table or view from the left pane in the data design view, and click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

8.	Click the `Properties icon` in the configuration panel.

![Click properties icon](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

9.	The `properties` panel of the widget will be displayed as shown in the following screenshot.

![Properties pane](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/assign-data.png)

10.  Now, switch to the `ASSIGN DATA` tab.

![Properties pane](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

11.	The `ASSIGN DATA` tab will be opened, displaying the available columns from the connected data source.

### Adding fields to Value(s)

Bind column by dragging and dropping the element from sections to `values.`

![Add value field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/add-measure.png)

> **IMPORTANT:**  
> * The field that is added in this section will act as a measured value. 
> * It is a mandatory section for the widget visualization, and any number of fields can be configured in this section.

### Settings menu options

You can `filter` and `format` the data displayed in the widget from the settings menu options. To open the `settings menu,` click the `settings icon.`

The following screenshots show the various options in the settings menu, based on the type of field configured in the section.

![Numeric field settings menu](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/settings-menu.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu, as shown in the following screenshot. Please refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Changing the aggregation](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/settings.png)

#### Filtering data

You can use `filters` to change the values by selecting the Filter option. For more details, refer to the [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, please refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/format-option.png)

#### Removing the fields

To remove the added value fields, click on the highlighted button.

![Removing  Fields](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/removebutton.png)

### Adding fields to Column(s)

Please drag and drop the elements from the sections to the columns.

![Add column field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/adding-columns.png)

> **IMPORTANT:**  
> * The field added in this section will serve as a dimension value.
> * This section is optional, and adding more than one value will enable drill down.

#### Settings 

You have the ability to change the `settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-settings.png)

#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option that is provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rename.png)

#### Sorting

You can sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) feature.

![Sort Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/sort-option.png)

#### Filtering data

You can apply a filter by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filter-option-column.png)

The chart will be displayed in this manner.

![Adding column field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/barchart.png)

Similarly, you can add the `Measures` and `Expression Columns` into the column field.

#### Drill down

When the second value is added to the Columns section, the alert message will be displayed.

![Drill confirmation alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

Click `Yes` to enable the option. If you click `No`, a single value will be added to the Columns section.

*Figure: Chart with a drilled view of the selected region.*

![Drilled view](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/drilled-view.png)

#### Drill up

Once you've drilled down, you can drill up to the previous view using the breadcrumb navigator located at the top of the widget.

![Drill_up view](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/drill_up-view.png)

### Adding fields to Row

Please drag and drop the elements from the sections to the `Row`.

![Add row fields](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-row.png)

![Chart view with row configured](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/configured-widget.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to participate in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data).  

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/assigndata.png)

We can configure both measure and dimension fields in the hidden column. For measures, we will have all the settings that we have for the measure fields except formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/date.png)

#### Linking

The primary use case for hidden columns is linking. When configuring hidden columns, we can see that the fields configured in hidden columns are listed in the linking section. When configuring the column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we want to pass the number of Matches played as a URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/link-measure.png)

**Dimension Based Example:** If we want to pass the number of Team Name played as a URL parameter but do not want it to affect the visualization, we can configure the Team Name in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure the hidden columns and click on the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filtericon.png)

Please click on the Custom button that is highlighted in the filter configuration dialog image below. This will display a list of all the fields that have been configured in the widget. Please retain the field that has been configured in the hidden column and remove the other fields. Finally, click on the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the information icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/info-icon.png)

The chart below displays the goals scored by each team without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/before.png)

If we hide the lower hierarchy data (Player Name) in the columns compared to the data in the column and row fields, the data in the widgets becomes duplicated, and each column is split based on the hidden column field. This affects the visualization of the chart, as shown in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/after.png)

#### Adding tooltip fields

You can configure the `tooltip section` to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to this section for more details on configuring the [tooltip fields](/visualizing-data/working-with-widgets/tooltip-customization/).

## How to format bar chart widget

You can format the bar chart for a better illustration of the view you require by using the settings available in the `Properties` tab.

![Property Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/property-window.png)

### General settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/property.png)

#### Name

This allows you to set the `title` for this bar chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/Name.png)

#### Subtitle

This feature enables you to establish a `subtitle` for the bar chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/subtitle.png)

#### Description

This feature enables you to provide a concise explanation for this bar chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/Description.png)

### Basic settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in the chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/tooltip.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog.

![Chart type and axis settings dialog](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-type.png)

**Chart Type**: This feature allows you to switch the widget view from the current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis. 

![Secondry axis in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/secondary-axis.png)

#### Enable animation

It animates the measure values by toggling the `Enable Animation` feature.

#### Show value labels

This feature enables you to switch the visibility of value labels.

![Value labels in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-value-label.png)

If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Value labels customization change](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/value-label-customization.png)

![Value labels customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/value-label-change.png)

#### Value Label Color

This allows you to customize the color of the value label.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/label-color-change.png)

### Value Label Position

This option allows you to customize the position of the value labels in the chart. By default, it is set to `Auto`, so the label position for the area chart will be set as Top.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-valuelabelposition.png)

#### Value label rotation

This allows you to define the `rotation angle for the value labels` to be displayed.

![Rotated labels](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/label-rotation.png)

#### Value label suffix

This allows you to display or conceal the suffix value of value labels.

#### Suffix Value

This feature enables you to customize the suffix value of the value labels.

![Labels with suffix](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/suffix-label.png)

> **Note:** When the height and number of data in the chart increased, the value label was hidden. Use the label rotation property to make the label visible.

#### Show items with no data

This allows you to display data for columns that do not have a value.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values if they are null or undefined when the `Show Items With No Data` option is enabled.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

### Gap

This option allows you to display null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-gap.png)

### Zero

This option enables you to display null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-zero.png)

### Average

This option displays the null or undefined values along with the average value.

![Empty Point Mode Average](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-average.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width`.

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-width-customization.png)
   
![Column Width](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing`.

![Column Spacing Customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-space-customization.png)

![Column Spacing](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-spacing.png)

#### Enable Smooth Scroll

When this support is enabled, the thumb size of the chart scroll bar will be calculated based on the total number of records. As a result, you will be able to view the last record by simply scrolling once.

### Page Size

This option allows you to set the number of records that need to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-settings.png)

#### Show legend

A `Legend` is a text used to describe the plotted data. This allows you to toggle the visibility of the legend in the chart and also change the position of the legend text by selecting through a combo box.

![chart legends](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-legend.png)

Enabling the `Custom Legend Text` option will allow you to define a custom text, using the text area, to display for each legend series selected in the combo box in a chart.

#### Legend Interactivity

The chart's `legend interactivity` option allows you to control the behavior of the chart legends. This option provides the ability to make chart legends non-clickable, which can be particularly useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This feature might also be helpful when displaying critical pieces of data that should always be present for accuracy and contextual purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-interactivity-enable.png)

### Legend Label Color

This enables you to modify the title and label colors of the chart legend.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will display the legend text list as labels on the left and a corresponding text area on the right to add the formatted text for display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-customization.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-customization-change.png)

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.

The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-as-dropdown.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle`.

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series`.

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend`.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-title.png)

#### Text Overflow

This option allows you to customize legend text based on the `Text Width` property value.

***None***

This option allows you to render legend items without wrapping or trimming.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if their legend exceeds the value of `Text Width`.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-trim.png)

***Wrap***

This option allows you to wrap legend items based on the value of `Text Width`.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/legend-text-overflow-width.png)


If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 

#### Axis Format

This option allows you to format the values of the primary and secondary axes using the formatting details provided by using the Format button. For more information, please refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-format.png)

### Link

To configure the linking to a URL or dashboard with the widget, use its settings. For more details, refer to the section on [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/linking.png)

### Axis settings

This section allows you to customize the axis settings in the chart.

![Chart axis properties](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-settings.png)

#### Title color

This feature enables you to customize the color of the axis title.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-title-color.png)

#### Label color

This enables you to customize the color of the axis label.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-label-color.png)

#### Show category axis

This feature allows you to switch the visibility of the category axis.

![Category axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-categoryaxis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-axis.png)

#### Show category axis title

This feature allows you to easily switch the visibility of the category axis title.

![Category axis title visibility](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-axis-title.png)

#### Category axis title

This allows you to edit the title of the category axis for the chart. It will be reflected as the name of the x-axis on the chart.

![category axis title](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-title-edit.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-axis-title-prop.png)

#### Label overflow mode

This feature allows you to manage the display mode of the overlapping labels on the category axis.

#### Trim

This option trims the end of the overlapping label on the axis.

![Trimmed label overflow](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trim.png)

#### Hide

This option hides the overlapping label on the axis.

![Hidden label overflow](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and it can also be customized when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trim-axis-labels.png)

#### Category axis label rotation

This allows you to define the rotation angle for displaying the category axis labels.

![Rotated category axis labels](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to automatically set intervals based on the number of data points for category axis labels. If a user wants to customize the interval, they need to disable the auto interval and set the desired interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chart-interval.png)

#### Primary value axis

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/primary-axis.png)

This feature allows you to enable the primary value axis for the chart.

![Chart primary axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-primary-value-axis.png)

#### Show primary axis title

This feature allows you to enable the visibility of the primary value axis title on the chart.

![Primary axis title visibility](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/show-primary-value-axis-title.png)

#### Primary axis title value

This allows you to edit the title of the primary value axis. It will be reflected in the y-axis name of the chart.

![Primary axis title value](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/edit-axis-title.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display negative values at the top and positive values at the bottom. For example, when we bind temperature data to the chart and want to display negative values at the top, we can utilize this property.

Enabling this property will cause the chart to display negative values on the top and positive values on the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/inverseaxis.png)

### Axis range settings

This feature allows you to manually set the minimum, maximum, and interval values of the primary value axis through the Axis Range Settings dialog.

![Axis range settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-range.png)

It will be reflected in the primary value axis of the chart.

![Modified ranges](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/modified-ranges.png)

### Parameter Support in Axis range:

This feature allows you to dynamically set the minimum, maximum, and interval values of the primary value axis using the `Axis Range Settings` dialog and the values of dashboard parameters. Only number-type dashboard parameter values can be used in the axis range properties. It is possible to create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in the number type as shown below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/parameter.png)

Click on the axis range settings dialog and enter `@` in the textbox. Select the parameter value (Numeric parameter values are only allowed in the **minimum**, **maximum** and **interval**).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/minparam.png)

Now the parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/barmin.png)


### Range Parameter Value:

If you want to set the same ranges in multiple cases, create the parameter value for the range type. This type of parameter includes the start and end values.

1. Create a parameter in range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rangeparameter.png)

2. Click on the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is divided into start and end parameters. The value of the first textbox is stored in the start parameter, and the value of the second textbox is stored in the end parameter. Select the parameter value (only numeric values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rangeaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type, choosing any field. The value should be based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/datasource.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum and interval**). Select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/datasourceaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/datasourcemin.png)

### Axis Type

This allows you to change the type of axis in the bar chart.

### Linear

This option allows you to specify the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis, which uses a logarithmic scale. It is very useful for visualizing data with values that have both a lower order of magnitude (e.g., 10-6) and a higher order of magnitude (e.g., 106).

#### Axis Format

This option allows you to format the values of the primary and secondary axis using the formatting details provided through the `Format` button. For more information, please refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/axis-format.png)

### Gridlines

You can toggle the visibility of each axis gridlines using the property.

![Grid line properties](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/chartgridlines.png)

#### Primary Value Axis

This feature allows you to enable the gridlines for the `Primary Value Axis` in the bar chart.

![Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/primary-gridlines.png)

#### Secondary value Axis

This enables you to enable the gridlines for the `Secondary Value Axis` in the bar chart.

![Secondary value Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/secondary-gridlines.png)

#### Category Axis

This enables you to enable the gridlines for the `Category Axis` in the bar chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/category-axis.png)

### Trendline

You can add more than one trendline to Cartesian charts except for bar type series(Line, Column, Area, Spline) and stacked type of charts. You can **add, edit,** and **delete** trendlines.

![Trendline](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-settings.png)

### Add Trendline and Edit Trendline

To add the trendline, click the highlighted button.

![Trendline Add](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-add.png)

Now, the dialogue will open as follows.

![Trendline Dialog](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendlinedialog.png)

Click the `OK` button to add a trendline in a bar chart. Now, the chart is rendered as follows.

![Trendline chart](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline.png)

To edit the trendline select the one to be edited and click the highlighted button.

![Trendline Edit](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-edit.png)

Again the trendline dialog window opens now.

***Legend Text***

You can edit the trendline legend by the `Legend Text` text box. By default, the `Legend Text` renders are based on the Line type and Series name.

***Series***

You can change the series to which series have to show the trendline by the `Series` dropdown option.

***Line Type***

You can select a line type from the `Line Type` dropdown options, which include Linear, Exponential, Logarithmic, Power, and Polynomial.

***Line Color***

You have the ability to change the color of the trendline using the color picker labeled `Line Color`.

***Line Style***

You can change the style of the trendline by the `Line Style` drop down option(Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot).

### Delete Trendline

To delete the trendline, select the one that you want to delete and click the highlighted button.

![Trendline Delete](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/trendline-delete.png)

### Formatting

> **IMPORTANT:** The `Formatting section` will be enabled when the widget is configured, and it will be hidden if the row field is configured.

This allows you to change the `color` for the bar chart.

![Format Colors](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatting-color.png)

It will be reflected in the bar chart.

![Formating Data Colors](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatting-color-change.png)

#### Advance settings

The `Advance setting` option will be enabled when only one column and one row is configured. You can refer more details from [this section](/visualizing-data/visualization-widgets/column-chart/#how-to-apply-conditional-formatting).

![Advance color settings](/static/assets/visualizing-data/visualization-widgets/images/column-chart/advanced-colors.png)

## How to apply conditional formatting

The color in the Bar chart widget can be customized using the color settings available in the `properties` section. This will allow users to improve the visualization in a bar chart and distinguish the data based on conditional range values. This will help the visualizer understand what is being shown in the data.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, check the `Advanced Setting` check box.

2. This will open the `Conditional Formatting` dialog.

![Conditional formatting dialog](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatting-dialog.png)

3. Please select the mode and enter the required conditions. Then, click the `save` button to apply.

![Applying the conditions](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/apply-conditions.png)

4. Now, the widget visualization will be updated based on the conditions.

![After applying conditional formatting](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/formatted-result.png)

Refer to the following sections for the detailed steps on using the [Gradient](/visualizing-data/visualization-widgets/column-chart/#gradient-mode), [Rule](/visualizing-data/visualization-widgets/column-chart/#rule-based-condition-mode) and [individual](/visualizing-data/visualization-widgets/column-chart/#individual-mode) modes. 

#### Gradient mode

You can customize the fill color of the Bar chart using the gradient based conditional formatting. `This is the default mode.`

#### Based on field

You may select any field from the Based-On section to apply the conditions from the drop-down.

#### Summary type

You can select the summary type for the selected measure field.

#### Low, mid, and high values

You can define your range by entering the low, mid, and high 
values. 

> **NOTE:**  It is optional; if no value is entered, then the ranges will be automatically calculated based on the minimum and maximum values from the data source.

#### Legend title

You can enter the title for the Bar chart legends. 

### Rule based condition mode

This allows you to customize the fill color of the bar chart based on one or more numerical/text conditions.

![rule mode](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/rule-mode.png)

#### Value type

The value type drop-down allows you to choose whether you are going to apply the direct value (such as a specific number like 3 goals or order ID 10248) or a percentage (values above 30% or 50%).

#### Condition name

You can assign a meaningful name to the conditions that have been applied.

#### Condition type

Choose the condition for the measure field from the highlighted conditions.

![numeric condition types](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/numeric-condition.png)

If you selected the dimension as a `based-on field` and want to use text condition, the following text-based conditions are available.

![text conditions](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/text-condition.png)

> The text-based condition type will only be enabled when the selected dimension is used as the based-on field.

#### Value

You may mention the value of the condition.

#### Case sensitive

For the dimensions, a case-sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Please select the fill color for that condition using the color picker.

#### Add condition

Click ` add condition` to specify a new condition.

#### Delete condition

Click the `delete` button to remove the existing condition. 

### Individual mode

In the `individual` mode, you can specify a color for each record.

> **IMPORTANT:**  Only the top 100 records will be listed in the dialogue.

![Individual mode](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/individual-mode.png)

#### Color Mapping Type

Using Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-color-mapping-type-options.png)

***Data***

It allows you to apply color to chart series based on data. If you want to apply a specific color to specific data, you can use data-based color mapping. By default, the color mapping type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-data-type-color.png)

***Index***

It allows you to apply color to chart series based on the `Index`. This means that the colors will remain the same based on the index even if the data is changed. It only shows a maximum of 15 different colors. Once all 15 colors have been used, the colors will start to repeat from the previously used colors.

For example, if you are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. For instance, assigning red to the top, the red color will be maintained for the country with the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/column-chart-formatting-index-based-color.png)

> **Note:** We prefer to use index-based color customization only for a minimum amount of data (up to 15 series).

#### Color

You can choose the color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset`.

### Series Palette

This allows you to apply color to chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will only be visible if we have configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/series-palette.png)

#### Use Default Palette

This option allows you to apply the default color for chart series.

By toggling off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, we can apply colors to the series based on either data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If we are displaying the countries based on the increasing order of the case count, then index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable auto font size and set the required font size.

### Filter

This section allows you to handle the `filter` action for the spline area chart widget.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/filter.png)

#### Act as master widget

This allows you to define this bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the bar chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

`On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

`On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified font size to the widget title if the **Subtitle Auto Font Size** is disabled. The value can range from 10 to 32.

### Auto Padding

When Auto Padding is enabled, the padding of the widget container will be automatically adjusted if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This feature enables you to switch the visibility of the `border` that surrounds the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

### Show Background Image

This feature allows you to set the **background image** for the bar chart widget.

### Background Color

This feature enables you to define the **background color** for the bar chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This feature enables you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

This section allows you to customize the `Container actions` for the bar chart widget.

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the bar chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the bar chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the bar chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the bar chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the bar chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart is displayed with fewer than 7 columns on the X-axis, the X-axis labels and titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/X-axis-label.png)

When the chart has been placed with fewer than 6 rows, the Y-axis labels, Y-axis titles, and gridlines of the chart will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/Y-axis-label.png)