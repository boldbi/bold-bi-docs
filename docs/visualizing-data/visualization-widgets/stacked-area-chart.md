---
layout: post
title: Stacked Area Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Stacked Area Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/stacked-area-chart/"
platform: bold-bi
control: Stacked Area Chart
documentation: ug
---

# Stacked Area Chart

The Stacked Area Chart allows you to compare multiple measures by displaying filled curves that are stacked vertically, one after the other.

![Stacked Area Chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart.png)

## How to configure the table data to stacked area chart?

A Stacked Area Chart requires a minimum of 1 value element and 1 column element to be showcased. The measure or expression field that you wish to analyze can be placed in the Y Values block. The dimension that you want to use to categorize the measure can be placed in the Columns block. If you want to categorize based on a series, you can also place the respective dimension in the Rows block.

The following steps explain how to configure data for a stacked area chart:

1.  Please drag and drop the stacked area chart onto the canvas, then resize it to your desired size.

![Drag and drop the stacked area chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/add-stackedareachart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to initiate a new connection from the connection type panel.

![Launch a new connection](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons (here, the `Microsoft SQL` Connection type is selected for demonstration).

![Listed connection type button](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Then, click the `Connect` button.

![Connect](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel to open the property pane. Now, switch to the `ASSIGN DATA` tab.

![ASSIGN DATA](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked area assigndata](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/areaassigndata.png)

8.  The data tab will be opened, displaying the available measures and dimensions from the connected data source.

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the necessary data from the `Measures` and `Dimensions` into the designated field.

#### Adding Value(s)

You can add more than one `Measures` into the `Y Values` field by dragging and dropping the required measure.

![Add more than one Measures](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and selecting the required summary type from the available summary types shown in `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/settings.png)

#### Filtering data

You can filter the data that is displayed in the funnel chart by using a filter. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using the format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type column](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/format-option.png)

To remove the added value fields, click the highlighted button.

![Remove the added value](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/removebutton.png)

You can add more than one column from the `Dimensions` field to the `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field. 

![Add more than one column](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/adding-columns.png)

The stacked area chart will be rendered like this.

![Stacked area chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart.png)

You have the ability to modify the `settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/column-settings.png)

#### Renaming fields

The field names that have been configured can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/rename.png)

### Sorting data

You can `sort` the dimension data using the Sort option under the `Settings` menu list. To apply sorting to the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column/).

![Sort and Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/sort-option.png)

### Filtering data

You can apply filters by selecting the "Filters" option in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/filter-option-column.png)

To view all records, click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

### Multi-Level Drill Down

If more than one value is added to the `Columns` field, an alert message will be displayed. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

The selected view of the chart region is drilled.

![Drilled view](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareadrill.png)

### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-row.png)

If necessary, you can apply a [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option to the rows field.

This will render a stacked area chart in a series.

![Render stacked area chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-series.png)

## Hidden Column

Hidden columns are useful in cases where we do not want the fields to participate in the visualization, but rather to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measures, we will have all the settings we have for measure fields except formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/dimension.png)

![Date](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/date.png)

#### Linking

The primary use case for hidden columns is linking. When configuring hidden columns, we can observe that the fields configured in hidden columns are listed in the linking section. By configuring the column in linking, we can pass the corresponding column value as a linking parameter.

**Measure Based Example:** If we want to pass the number of matches played as a URL parameter but do not want it to affect the visualization, we can configure the matches in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/link-measure.png)

**Dimension Based Example:** If we want to pass the number of Team Name played as a URL parameter but do not want it to affect the visualization, we can configure the Team Name in the hidden columns and include them in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the filter icon below.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/filtericon.png)

Click the Custom button that is highlighted in the filter configuration dialog image below. It will display a list of all the fields that are configured in the widget. Keep the field that is configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/hidden-column-filter.png)

For more details filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the info icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/info-icon.png)

The chart below displays the goals and attempts on target by each team without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and row field data, the data configured in the widgets gets duplicated, and individual columns are split based on the hidden column field. This affects the chart visualization, as can be seen in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/after.png)

## How to format stacked area chart?

You can format the stacked area chart to better illustrate the view you require through the settings available in the `Properties` tab.

To configure data into a stacked area chart, follow these steps:

1. Please drag and drop the stacked area chart onto the canvas and resize it to your desired size.

2. Configure the data for the stacked area chart.

3. Direct your attention to the stacked area chart and click on the widget settings.

![Format stacked area chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-format.png)

The property window will be opened.

![Property window](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/property-window.png)

You can view the list of properties that are available for the widget with the default value.

#### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/property.png)

#### Name

This feature allows you to change the `title` for this stacked area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/title.png)

#### Subtitle

This widget allows you to provide the `subtitle` for the stacked area chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/Subtitle.png)

#### Description

This allows you to provide a `description` for this stacked area chart widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/tooltip.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis. If you enable this option, the selected field will be plotted as the secondary axis. 

### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

### Show Value Labels

This feature allows you to switch the visibility of value labels.

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-value-labels.png)

If you disable the `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-label.png)

#### Customize

This feature allows you to customize the visibility of value labels in each series.

![Show Value Labels Customize](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-value-labels-customize.png)

![Show Value Labels](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-value-labels-output.png)

### Value Label Color

This allows you to customize the color of the value label's.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/data-label-color-option.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/data-label-color.png)

### Value Label Position

This option enables you to personalize the position of the value label in a chart. By default, it is set to 'Auto,' therefore the label position for the stacked area chart will be set to Middle.

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/valuelabelposition.png)

### Value Label Rotation
 
This allows you to define the rotation angle for displaying the value labels.

![Value Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-showlabelrotation.png)

### Value Label Suffix

This feature allows you to display or conceal the suffix value of value labels.

### Suffix Value

This feature enables you to customize the suffix value of value labels.

![Suffix Value](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/suffix-value.png)

> **Note:** When I increased the height and number of data in the chart, the value label was hidden. Use the label rotation property to make the label visible.

### Show Marker

This feature allows you to switch the visibility of the marker, which labels and adorns each data point in a chart series.

![Show Marker](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-marker.png)

### Show Items With No Data

By default, the chart does not display the columns with null or empty values, as shown in the image below.

![Chart Default](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-default.png)

If you enable the `Show Items With No Data` property, then the columns with null data will be displayed in the chart.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode for empty points with the properties `Gap`, `Zero`, `Average` and `Connect`.

![Empty Point Mode Options](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-options.png)

### Gap

This option allows you to display the null or undefined values as gaps.

![Empty Point Mode Gap](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-gap.png)

### Zero

This option enables you to display the null or undefined values on the zero axis.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values along with the average value.

![Empty Point Mode Zero](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-average.png)

### Connect

This option ignores the empty values and connects the remaining points.

![Empty Point Mode Connect](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-connect.png)

### Enable Smooth Scroll

When this support is enabled, the size of the chart scroll bar thumb will be calculated based on the total count of records. This will allow you to view the last record by scrolling just once.

#### Page Size

This option allows you to set the number of records that need to be fetched on the initial load.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-settings.png)

### Show Legend

A legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in the chart and also change the legend text position (selecting through a combo box). 

![Show Legend](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-legend.png)

Enabling the option of **Custom Legend Text** allows you to define custom text (using the text area) to display for each legend series (selected via the combo box) on the chart.

#### Legend Interactivity

The `legend interactivity` option on the chart allows you to control the behavior of the chart legends. This option enables you to make the chart legends non-clickable, which can be particularly useful in situations where you do not want users to hide or show series data by clicking on the legend. This feature is also helpful when displaying critical pieces of data that should always be present for accuracy and context.

Disabling the Interactivity feature in the Legend Settings category prevents you from clicking on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-interactivity-enable.png)

### Legend Label Color

You are able to change the title and label colors of the chart legend.

![Chart Legend Color Option](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-label-color.png)

#### Customize

You can customize the legend text using the `Custom Legend Settings` dialog. This dialog will display a list of legend text labels on the left, and a corresponding text area on the right, where you can add formatted text to be displayed instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text by using the Custom Legend Settings dialog. This dialog will display the legend text list as labels on the left and a corresponding text area on the right. You can add formatted text to the text area to be displayed instead. When a column is added to the Row section, this dialog will also show two options at the top: `Individual` and `Group`. These options can be toggled between.

***Individual***

![Legend customization For Row](/static/assets/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/static/assets/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A legend is a text used to describe the plotted data. This option allows you to position the legend on the **Left, Right, Top, and Bottom**.

#### Legend Item as Dropdown

Legends can be displayed as a dropdown menu when the legend position is set to "dropdown." When you hover over a chart, a legend icon appears. Clicking on this icon will bring up a legend dropdown. This feature allows you to toggle the visibility of the legend in the chart.

This option will hide the legends in the chart area, resulting in increased chart space and enhanced visibility.
 
The chart legend dropdown option can be used to simplify viewing complex charts with multiple data sources. For example, if you have a chart displaying sales data for the different years, you can use the legend dropdown to deselect all other years and focus only on a specific year.

![Legend item as dropdown](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-as-dropdown.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend to a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-shape.png)

***Series Type***

This option enables you to modify the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart, which will be reflected with the `Show Legend.`

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize the legend text based on the value of the `Text Width` property.

***None***

This option allows you to render legend items without wrapping or trimming.

![Legend Overflow None Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-none-option.png)

![Legend Overflow None in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-none.png)

***Trim***

This option allows you to trim the legend items if their legend exceeds the value of `Text Width`.

![Legend Overflow Trim Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-trim-option.png)

![Legend Overflow Trim in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-trim.png)

***Wrap***

This option enables you to wrap legend items based on the value of `Text Width`.

![Legend Overflow Wrap Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-wrap-option.png)

![Legend Overflow Wrap in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-wrap.png)

#### Text Width

This option allows you to set the maximum width for the Legend Items, and it is applicable only if text-overflow is set as Trim or Wrap.

![Legend Text Width Option in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-width-option.png)

![Legend Text Width in chart](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-text-overflow-width.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title**, are also hidden.

> **NOTE:** For a single series, the Legend will not be visible.
### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/linking.png)

You can enable linking and configure it to navigate to a general URL, with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) section.

### Axis Settings

![Axis Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/axis-settings.png)

This section allows you to customize the axis settings in the chart.

### Title color

This allows you to customize the color of the axis title.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/title-color.png)

### Label color

This feature enables you to customize the color of the axis label.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/label-color.png)

### Show Category Axis

This allows you to enable the visibility of the `Category Axis`.

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval**, option will be hidden.

![Show Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-axis.png)

### Show Category Axis Title

This allows you to enable the visibility of the `Category Axis` title.

![Show Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-categoryaxistitle.png)

### Category Axis Title

This feature allows you to edit the title of the `Category Axis` for the chart. The edited title will be reflected as the name of the x-axis on the chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-axis-title.png)

### Label overflow mode

This allows you to manage the display mode of the overlapping labels in the `Category Axis`.

***Trim***

This option trims the end of the overlapping label on the axis.

![Label overflow mode trim](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-category-axis.png)

***Hide***

This option hides the overlapping label on the axis.

![Label overflow mode hide](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/hide-lable.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the value of the `Maximum Label Width` property.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and it can also be customized when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/maximum-label-width.png)

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/trimming-label.png)

### Category Axis Label Rotation

This feature enables you to specify the rotation angle for the category axis labels to be displayed.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-auto-interval.png)

By default, the `Auto Interval` property is enabled. The Auto Interval property is used to set automatic intervals based on the number of data points for category axis labels. If the user wants to customize the interval, they need to disable the auto intervals and set the required interval.

![Axis interval Value](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart.

![Show Primary Value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/show-primary-value.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the title of the `Primary Value Axis` on the chart.

![Show Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the title of the `Primary Value Axis`, which will be reflected in the y-axis name of the chart.

![Primary Value Axis Title](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-primaryvalueaxistitle.png)

### Inverse Axis

By default, the chart axis shows positive values at the top and negative values at the bottom. However, there are times when we need to invert the axis and display the negative values at the top and positive values at the bottom. For example, when we bind temperature data to the chart and want to display the negative values at the top, we can utilize this feature.

When this property is enabled, the chart will display negative values at the top and positive values at the bottom.

![Inversed axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-axisrangesettings.png)

It will be reflected in the primary value axis of the chart.

![Axis Range Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-axisrangeoutput.png)

### Parameter Support in Axis range:

This allows you to dynamically set the minimum, maximum, and interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters.

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in numeric format as shown below.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/parameter.png)

Click on the axis range settings dialog and input `@` in any textbox (**minimum**, **maximum**, and **interval**). Choose the parameter value (Only number type parameter values are allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/minparam.png)

The parameter value is now reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareamin.png)

### Range Parameter Value:

If you want to set the same ranges in multiple cases, create the range type parameter value. This parameter type has the start and end values.

1. Create a parameter of type range.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox(**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. First textbox value is stored in the start parameter, and the second textbox value is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/rangeaxis.png)

3. The value of the parameter is reflected in the axis of the chart.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/range.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type, where you can choose any field. The value of the parameter will be based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/datasource.png)

2. Click on the axis range settings dialog and enter `@` in each textbox (**minimum**, **maximum**, and **interval**). Then, select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/datasourceaxis.png)

3. The value of the parameter is reflected on the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/datasourcemin.png)

#### Grid Line

![Grid Line](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the stacked area chart.

![Primary value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/primary-value-axis.png)

#### Category Axis**

This allows you to enable the `Category axis` gridlines for the stacked area chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/category-axis.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart.

![Secondary value Axis](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/secondaryaxis.png)

### Formatting

This allows you to change the `color` for the stacked area chart.

![Format Colors](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/formatting.png)

It will reflect in the stacked area chart.

![Formating Data Colors](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/formatting-color.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stacked-area-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/stacked-area-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font-size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set required font size.

### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/filter.png)

### Act as Master Widget

This allows you to define this 100% stacked area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

### Ignore Filter Actions

This allows you to define this 100% stacked area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

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

This allow you to set the **background image** for the stacked area chart widget.

### Background Color

This allows you to set the **background color** to the stacked area chart widget.

### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow
This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the stacked area chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the stacked area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the stacked area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the stacked area chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the[view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/Y-axis-label.png)

When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/stacked-area-chart/X-axis-label.png)