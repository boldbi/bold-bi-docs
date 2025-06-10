---
layout: post
title: Combo Chart Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Combo Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/combo-chart/"
platform: bold-bi
control: Combo Chart
documentation: ug

---

# Configuring and Formatting Combo Chart

Combination Chart allows you to compare values by combining multiple Cartesian charts, such as column, bar, stacked column, stacked bar, 100% stacked column, 100% stacked bar, spline, line, area, stacked area, and 100% stacked area.

![Combo Chart](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-view.png)

## How to configure table data to combo chart

A Combo Chart requires a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into the Primary or Secondary Values block. The dimension that you would like to categorize the measure can be dropped onto the Columns block. By default, primary values render with a Column chart and secondary values render with a line chart.

The following steps explain how to configure data into a combo chart:

1.  Click the `Data Source` button in the configure panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

2.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

3.  In the connection type panel, click on any one of the listed connection type buttons shown. Here, the `Microsoft Excel` Connection type is selected for demonstration.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

4.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

5.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.

![virtualtable](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

6.  Drag and drop the combo chart onto the canvas and resize it to the required size.

![Combo Chart](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-drop.png)

7.  Click the `Properties` button in the configuration panel to open the property panel. Switch to the `ASSIGN DATA` tab.

![Designer properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/property.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![Combo chart data](/static/assets/visualizing-data/visualization-widgets/images/assign-data-section.png)

#### Adding Primary and Secondary Values

You can add more than one `measure` to `the Primary Y Values` and `Secondary Y Values` fields by dragging and dropping the required measure. 

![Combo chart Primary data](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/primaryvalue.png)

![Combo chart Secondary data](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/secondaryvalue.png)

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in `Settings.`

![Combo-chart Menu Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in the combo chart by using the filter. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/)

![Combo-chart Value filter settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the combo chart by using the format option. For more details, refer to [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Combo-chart Primary value formatting](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/format-option.png)

#### Removing Fields

To remove the added value fields, click the highlighted button.

![Combo-chart secondary Value formatting](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/removebutton.png)

#### Adding Columns

You can add more than one value to the `Columns` field.

![Combo-chart Column Adding](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/adding-column.png)

You can see the Combo chart rendered as follows.

![Combo-chart Column data](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-view.png)

You can change the `Settings`.

![Combo-chart Column settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/rename.png)

#### Sorting data

You can `sort` the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting for the data, refer to [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Combo-chart Column sorting](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/columnsorting.png)

#### Filtering data

You can apply filters by selecting filter in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Combo-chart Column Filtering](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/columnfilter.png)

To show all records click `Clear`.

### Multi-Level Drill Down

Add more than one value to the `Columns` field. The drilled view of the Combo chart region is selected.

![Combo-chart Column drilldown data](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

![Combo-chart Column drilldown data](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/drilldown.png)

## Hidden Column

Hidden columns are useful in cases where we don’t want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden coumn](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For a measure, we will have all the settings we have for the measure fields except formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/measure.png)

In the case of dimension fields, we will have the following options only. In Date fields, we will have all available types except sorting, relative date filter, settings, and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/date.png)

#### Linking

The primary use case of hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section. By configuring the column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as a URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as a URL parameter but do not want it to influence the visualization, we can configure the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/viewdata.png)

> **NOTE:** We don’t recommend configuring lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/info-icon.png)

The below chart displays the goals and Attempts On Target by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/before.png)

If we configure lower hierarchy data (Player Name) in hidden columns compared to column and Row field data, the data configured in the widgets gets duplicate, and individual columns are split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/after.png)

## How to format Combo chart

You can format the Combo chart for better illustration of the view that you require using the settings available in the Properties tab. 

Follow the below steps to format the combo chart:

1. Drag and Drop the combo chart into the canvas and resize it to your required size.

2. Configure the data into the combo chart.

3. Focus on the combo chart and click on Widget settings.

![Click on Widget Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/widgetsettings.png)

You can see the property window opened.

![Property panel](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/property.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/propertyname.png)

#### Name

This allows you to change the `title` for the combo chart widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/Name.png)

#### Subtitle

This allows you to add the subtitle for the combo chart widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/Subtitle.png)

#### Description

This allows you to add description for the combo chart widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a combo chart.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/tooltip.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Change type and axis settings dialog](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/chart-type-and-axis.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another convertible chart type.

**Secondary Axis**: The configured field is plotted as the primary axis by default. if you enable this option, the selected field will be plotted as the secondary axis.

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of the legend in the chart and also change the legend text position (selecting through the combo box). 

![Legend Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-legend.png)

Enabling this option of **Customize Legend Text** will allow you to define custom text (through the text area) to display for each legend series (selecting through the combo box) in the chart.

#### Legend Interactivity

The chart `legend interactivity` option allows you to control the behavior of the chart legends. This provides an option to make chart legends non-clickable, which can be especially useful in scenarios where you do not want users to hide or show series data by clicking on the legend. This might also be useful when displaying critical pieces of data that should always be present for accuracy and context purposes.

Disabling the Interactivity feature in the Legend Settings category does not allow you to click on the legends.

![Legend Interactivity Disable](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/legend-interactivity-disable.png)
Enabling the Interactivity feature in the Legend Settings category allows you to click on the legends.

![Legend Interactivity Enable](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/legend-interactivity-enable.png)

#### Customize

You can customize the legend text through the Custom Legend Settings dialog. This dialog will display the legend text list as labels on the left and corresponding text area on the right to add formatted text for display.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-legendcustomize.png)

#### Legend Position

A legend is used to describe the plotted data. This option allows you to position the legend on the **Left, Right, Top,** and **Bottom**.

### Legend Alignment

Legend Alignment enables you to control how the legend is positioned within its allocated space. For detailed guidance, refer to the [Legend Alignment](/visualizing-data/visualization-widgets/column-chart/#legend-alignment) section.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend to `Series.`

![Show Legend shape Series](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/legend-series.png)

#### Legend Title

This allows you to add a title to the legend for the chart, which will be reflected with the `Show Legend` option.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/legend-title.png)

#### Show value labels

This allows you to toggle the visibility of value labels.

![Value labels in chart](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/value-label.png)

If you disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-value-label.png)

#### Customize

This allows you to customize the visibility of value labels in each series.

![Value labels customization change](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/color-customize.png)

![Value labels customization](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/label-customize.png)

#### Value Label Color

This allows you to customize the color of the value labels.

![Value label Color Option](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/data-color.png)

![Value label Color](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/value-color.png)

#### Value Label Position

This option allows you to customize the value label position in Cartesian charts. By default, it is set to ‘Auto,’ so the label position will be set based on the chart types (i.e. For stacked series, then position set as Middle and normal series the position set to Top).

![Value label position](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/valuelabelposition.png)

#### Value label rotation

This allows you to define the `rotation angle for the value labels` to display.

![Rotated labels](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/value-label-rotation.png)

#### Value Label Suffix

This allows you to show/hide the suffix value of value labels.

#### Suffix Value

This allows you to customize the suffix value of value labels.

![Labels with suffix](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/suffix-value.png)

> **Note:** When increasing the height and number of data in the chart, the value label was hidden. Use the label rotation property to make the label visible.

### Show Marker

This allows you to toggle the visibility of the marker from the label to adorn each data point in the chart series. The marker is supported only for distribution type charts (line, spline, area, stacked area, 100% stacked area).

![Show Marker](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-marker.png)

#### Show items with no data

This allows you to show data for columns that do not have a value.

![Empty Mode](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/show-no-data.png)

#### Column Width

This option allows you to increase or decrease the width of the column using the `Column Width` setting.

![Column Width Customization](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/column-width-customization.png)

![Column Width](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combo-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between columns using the `Column Spacing` setting.

![Column Spacing Customization](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/column-spacing-customization.png)

![Column Spacing](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/column-spacing.png)

### Enable Smooth Scroll

Enabling this support will calculate the chart scroll bar thumb-size based on the total record count, allowing you to see the last record with a single scroll.

> **Note** If you uncheck the `Show Legend` property in the property panel, the dependent properties such as **Legend color**, **Legend position**, **customization button**, and **Legend title** will also be hidden.

#### Line Style

Click `Customize` to open the `Custom Line Style Settings` dialog.

![Line Style](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/linestyle-property-combochart.png)

Now, the dialog will open as follows.

![Line Style Settings Dialog](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/custom-linestyle-settings-dialog.png)

***Series***

The default option applies to all Line or Spline series in the combo chart. Select a particular series in the Series dropdown if you want to customize individual series.

***Line Style***

![Line Style Type](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/linestyle-type.png)

To change the Line Style of the selected Series, choose the available styles such as Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot from the `Line Style` drop-down option.

***Line Width***

Use the Line Width option to adjust the line width for the selected series.

Click `OK` to add a custom line style settings in a combo chart. Now, the chart renders as follows.

![Custom Line Style Chart](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/custom-linestyle-combochart.png)

> **Note:** The Line Style property is only visible if you have Line or Spline chart.

### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/linking.png)

Configure the linking to a URL or dashboard with the widget through its settings. For more details, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Axis

![Axis](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-axis.png)

This section allows you to customize axis settings in a combination chart.

#### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/title-color.png)

#### Label color

This allows you to customize the axis label color.

![Label color](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/label-color.png)

### Show Category Axis

This allows you to enable the visibility of the `Category Axis`.

![Category Axis visibility](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-categoryaxis.png)

### Show Category AXis Title

This allows you to enable the visibility of the `Category Axis` title.

![Category Axis Title visibility](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/category-axistitle.png)

### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/edit-categoryaxis.png)

### Label Overflow Mode

This allows you to handle the display mode of overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping labels in the axis.

![Label overflow mode Trim](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trim.png)

***Hide***

This option hides the overlapping labels in the axis.

![Label overflow mode Hide](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/hide.png)

### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/axis-labelrotation.png)

#### Trim Axis Labels

This option allows you to trim axis labels based on the 'Maximum Label Width' property value.

![Trimmed label](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trimming-label-axis.png)

#### Maximum Label Width

This option allows you to set the maximum width for the axis labels, which can be made customizable when the trim axis label option is enabled.

![Maximum label width](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/maximumlabelwidth.png)

### Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart. You can set the interval of the primary axis using the `Edit Axis Range` button.

![Primary Axis visibility](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochart-primaryaxis.png)

### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of the chart.

![Primary Axis Title visibility](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/primary-value-axis-title.png)

### Primary Axis Title Value

This allows you to edit the `Primary Value Axis` title, reflecting in the primary y-axis name of the chart. 

![Primary Axis Title value](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/edit-primaryaxis-title.png)

### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` for the chart. You can set the interval of the Secondary axis using the `Edit Axis Range` button.

![v Axis visibility](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/secondary-axis.png)

### Show Secondary Value Axis Title

This allows you to enable the visibility of the `Secondary Value Axis` title of the chart.

![Secondary Axis Title visibility](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/secondary-axis-title.png)

### Secondary Axis Title Value

This allows you to edit the `Secondary Value Axis` title, reflecting in the Secondary y-axis name of the chart.

![Secondary Axis Title value](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/secondary-axis-title-edit.png)

#### Axis Range Settings

This feature allows you to manually set the Minimum, Maximum, and Interval values of the primary value axis and secondary value axis through the `Axis Range Settings` dialog.

### Parameter Support in Axis range:

This feature allows you to dynamically set the Minimum, Maximum, and Interval values of the primary value axis through the `Axis Range Settings` dialog by using the dashboard parameter values. Only number-type Dashboard parameter values are allowed in the axis range properties. You can create multiple types of dashboard parameters:

1. Single parameter value.
2. Range parameter value.
3. Data source field based parameter values.

For more details about dashboard parameter, refer to the [Dashboard parameter documentation](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

### Single Parameter Value:

A single value is stored in this type of parameter.

1. Create a dashboard parameter in number type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/parameter.png)

Click the axis range settings dialog and enter `@` in the textbox. Select the parameter value (Numeric parameter values only allowed in the **minimum**, **maximum**, and **interval**).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/singleaxis.png)

The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/combochartmin.png)


### Range Parameter Value:

If you wish to set the same ranges in multiple cases, create the range type parameter value. This type of parameter has start and end values.

1. Create a parameter in range type.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/rangeparameter.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). The range parameter is split into start and end parameters. The first textbox value is stored in the start parameter, and the second textbox value is stored in the end parameter. Select the parameter value (Number type parameter values only allowed).

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/rangeaxis.png)

3. The parameter value is reflected in the chart axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/primaryrange.png)

### Data Source Field Based Parameter Value:

1. Create a parameter in the data source type. Choose any field. The value is based on the selected field value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/datasource.png)

2. Click the axis range settings dialog and enter `@` in any textbox (**minimum**, **maximum**, and **interval**). Select the parameter value.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/datasourceaxis.png)

3. The parameter value is reflected in the chart primary axis.

![Axis Range Settings Output](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/primarydatasource.png)

#### Axis Format

This option allows you to format primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/formatting-button.png)

#### Grid Lines

![Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/gridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the Combination chart.

![Primary value Axis](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/primary-grid.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart.

![Secondary value Axis](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/secondary-grid.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the Combination chart.

![Category Axis](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/category-grid.png)

#### Trendline

![Trendline](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trendlinesettings.png)

You can add more than one trendline to Cartesian charts except for bar type series (Line, Column, Area, Spline) and stacked type of charts. You can add, edit, and delete trendlines.

***Add Trendline and Edit Trendline***

To add trendline, click highlighted button

![Trendline Add](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trendline-add.png)

Now dialog will open as follows

![Trendline Dialog](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trendline-dialog.png)

Click `OK` button to add trendline in combination chart. Now, chart renders as follows.

![Trendline chart](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trendline.png)

To edit trendline select the one to be edited and click highlighted button.

![Trendline Edit](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trendline-edit.png)

Again trendline dialog window opens, now.

***Legend Text***

You can edit Trendline legend by `Legend Text` text box. By default, `Legend Text` renders based on Line type and Series name. 

***Series***

You can change the series to which the series have to show trendline by `Series` drop-down option.

***Line Type***

You can select line type by `Line Type` drop-down option (Linear, Exponential, Logarithmic, Power, Polynomial).

***Line Color***

You can change the color of the trendline by `Line Color` color picker.

***Line Style***

You can change the style of the trendline by `Line Style` drop-down option (Solid, Dot, Dash, DotDash, LongDash, LongDashDotDot).

***Delete Trendline***

To delete a trendline, select the one to be deleted and click the highlighted button.

![Trendline Delete](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/trendline-delete.png)

#### Formatting 

![Color Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/formatting.png)

This allows you to customize chart series color. This section renders with each series of default color. You can change its default color by the color picker.

If you apply changes by clicking the `Apply` button, the chart renders as follows.

![Default Color](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/format-color.png)

#### Advanced Color

![Advanced Color Button](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/advance-color.png)

This allows you to apply advance color customization to combination chart.

This option is only visible when combination chart have one or more than one series and if only one column or bar type chart, other series are Cartesian charts except bar or column type chart. You can apply advance color customization only to column or bar type chart.

If you enable option of `Advanced Color`, color customization window will render as follows. By disabling this option, color customization removed and default color will applied.

This window has three color types. (i) Gradient (ii) Rule (iii) Individual. By default, window renders with gradient type.

***Gradient***

You can select the field on which the gradient color will be applied by selecting from the `Based On` drop-down menu. You can change the summary type, edit the `Low` and `High` values and their colors. By default, the Low value takes the minimum value of the chart, and the High value takes the maximum value of the chart. The `Mid` value and its color can be enabled. By default, the mid color is disabled.

You can edit the title of your gradient legend in the `Legend Title` text box.

Clicking the save button will render the chart as follows.

![Gradient](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/gradient.png)

***Rule***

You can select rule settings by clicking on the `Rule` radio button. The color customization window will then render as follows.

![Rule](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/rule.png)

You can change the field and summary type to gradient type. The `Value Type` can be changed to either Value or Percentage. 

You can choose a series color with `Fill` color picker using multiple condition sets such as Greater than, Less than, Equal to, Not Equal to, Between, Not between, Greater than or equal to, Less than or equal to. You can also customize the legend name by providing necessary values inside condition name. You can add multiple conditions.

![Rule Setings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/ruleset.png)

If you click save button, now chart widget renders as follows

![Rule Setings changes](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/rule-color.png)


***Individual***

You can select individual rule settings by clicking on the `Individual` radio button. The color customization window will then render as follows.

![Individual](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/individual.png)

This type renders with an individual default color for each point of the series. You can change its color using the Individual color pickers.

Save your changes by clicking the `Save` button. If you want to reset your changes, there is an option to `Reset` to the default color.

### Font settings

This section allows you to customize the font size of the combo chart elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/font-settings.png)

#### Auto font Size and font size

By default, the `Auto Font Size` property is enabled. This property is used to set the font size based on the dashboard viewing client machine resolution. If you want to customize or set a fixed font size, you need to disable the auto font size and set the required font size.

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-chart/filter.png)

#### Act as Master Widget

This allows you to define this Combination chart widget as a master widget so that its filter action can be used by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this Combination chart widget to ignore responding to filter actions applied on other widgets in the dashboard.

#### Hierarchical Filter

This option allows you to enable/disable hierarchical `top N` filtering. When applying a `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done flat or based on the hierarchy of dimension columns added.

When the` Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container appearance

![Container appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

#### Title Alignment

This allows you to handle the alignment of the widget title to the left, center, or right.

#### Title Color

This allows you to apply text color to the widget title.

### Title Auto Font Size

Enabling Auto Font Size will adjust the font size of the title automatically based on the screen resolution.

**Font Size**

This allows you to apply a specified font size to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

### Subtitle Auto Font Size

Enabling Auto Font Size will adjust the font size of the subtitle automatically based on the screen resolution.

**Font Size**

This allows you to apply a specified font size to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

### Auto Padding

Enabling Auto Padding will adjust the padding of the widget container automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if **Auto Padding** is disabled. The value can be between 0 and 25.

#### Show Border

This allows you to toggle the visibility of the border surrounding the widget.

#### Corner Radius

This allows you to apply a specified radius to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

#### Background Color

This allows you to select the color for the chart background. `The default value is #ffffff`.

#### Transparency

This property allows you to specify the **transparency** for the `background color.`

#### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the widget title of the column chart widget. 

#### Allow Maximize View

This allows you to enable or disable the maximized mode of the Column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the CSV export option for the Column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the Excel export option for the Column chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in the viewer.

#### Allow Image Export

This allows you to enable or disable the image export option for the Column chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in the viewer.

#### Allow PDF Export

This allows you to enable or disable the PDF export option for the Column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable comment for the dashboard widget. For more details refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
