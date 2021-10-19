---
layout: post
title: Combo Chart Widget – Cloud BI | Bold BI Documentation
description: Learn how to create a Combo Chart visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Combo Chart
documentation: ug
---

# Configuring and Formatting Combo Chart

Combination Chart allows you to compare values by combining multiple Cartesian charts (column, bar, stacked column, stacked bar, 100% stacked column, 100% stacked bar, spline, line, area, stacked area, 100% stacked area).

![Combo Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-view.png)

## How to configure table data to combo chart

Combo Chart need a minimum value of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Primary or Secondary Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. By default, primary values render with Column chart and secondary values render with line chart.

The following steps explains how to configure data into combo chart:

1.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

2.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

3.  In the connection type panel, click any one of the listed connection type button shown, here the `Microsoft Excel` Connection type is selected for demonstration.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

4.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

5.  Drag your preferred table or view from the left pane from the data design view, and click the `Save` button.

![virtualtable](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

6.  Drag and drop the combo chart into canvas and resize into required size.

![Combo Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-drop.png)

7.  Click the `Properties` button in the configuration panel, property panel opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/property.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![Combo chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/assign-data-section.png)

#### Adding Primary and Secondary Values

You can add more than one `measures` into `Primary Y Values` and `Secondary Y Values` field by dragging and dropping the required measure.

![Combo chart Primary data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/primaryvalue.png)

![Combo chart Secondary data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/secondaryvalue.png)

Click the `Settings` option to change the name by using `Rename` option and the required summary type from the available summary types shown in `Settings`.

![Combo-chart Menu Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in combo chart by using filter. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/)

![Combo-chart Value filter settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the combo chart by using format option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Combo-chart Primary value formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/format-option.png)

#### Removing Fields

To remove the added value fields click highlighted button.

![Combo-chart secondary Value formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/removebutton.png)

#### Adding Columns

You can add more than one value to the `Columns` field.

![Combo-chart Column Adding](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/adding-column.png)

You can see Combo chart renders as follows,

![Combo-chart Column data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-view.png)

You can change the `Settings`.

![Combo-chart Column settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/column-settings.png)

#### Sorting data

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Combo-chart Column sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/columnsorting.png)

#### Filtering data

You can apply filters by selecting filter in settings. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Combo-chart Column Filtering](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/columnfilter.png)

To show all records click `Clear.`

### Multi-Level Drill Down

Add more than one value to `Columns` field. The drilled view of the Combo chart region selected.

![Combo-chart Column drilldown data](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

![Combo-chart Column drilldown data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/drilldown.png)

## How to format Combo chart

You can format the Combo chart for better illustration of the view that you require, using the settings available in Properties tab.

Follow the below steps to format the combo chart

1. Drag and Drop combo chart into canvas and resize it to your required size.

2. Configure the data into combo chart.

3. Focus on the combo chart and click on Widget settings.

![Click on Widget Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/widgetsettings.png)

You can see property window opened.

![Property panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/property.png)

You can see the list of properties available for the widget with default value.

#### General Settings
#### Name

This allows you to change the `title` for the combo chart widget.

#### Subtitle

This allows you to add the subtitle for the combo chart widget.

#### Description

This allows you to add description for the combo chart widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/general-settings.png)

#### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/basic-settings.png)

#### Chart type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Change type and axis settings dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/chart-type-and-axis.png)

**Chart Type**: This allows you to switch the widget view from current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis, if you enable this option, the selected field will be plotted as the secondary axis. 

#### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Legend Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-legend.png)

Enabling this option of **Customize Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Customize

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-legendcustomize.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series.`

![Show Legend shape Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/legend-title.png)

### Show Marker

This allows you to toggle the visibility of marker from label to adorn each data point in chart series. Marker supports only for distribution type chart(line, spline, area, stacked area, 100% stacked area).

![Show Marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-marker.png)

#### Show items with no data

This allows you to show data, which column does not have value.

![Empty Mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/show-no-data.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using the `Column Width.`

![Column Width Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/column-width-customization.png)

![Column Width](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combo-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the `Column Spacing.`

![Column Spacing Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/column-spacing-customization.png)

![Column Spacing](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/column-spacing.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Link

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/linking.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Axis

![Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-axis.png)

This section allow you to customize axis settings in combination chart.

### Show Category Axis

This allows to enable the visibility of `Category Axis`.

![Category Axis visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-categoryaxis.png)

### Show Category AXis Title

This allows you to enable the visibility of `Category Axis` title.

![Category Axis Title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/category-axistitle.png)

### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/edit-categoryaxis.png)

### Label Overflow Mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode Hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/hide.png)

### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/axis-labelrotation.png)

#### Trim Axis Labels

This option allows you to trim axis labels based on the 'Maximum Label Width' property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trimming-label-axis.png)

#### Maximum Label Width

This option allows you to set maximum width for the axis labels, and also it can be made customizable when the trim axis label option is enabled.

![Maximum label width](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/maximumlabelwidth.png)

### Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. You can set interval of primary axis by `Edit Axis Range` button.

![Primary Axis visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart-primaryaxis.png)

### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Primary Axis Title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/primary-value-axis-title.png)

### Primary Axis Title Value

This allows you to edit the `Primary Value Axis` title. It will reflect in primary y-axis name of chart. 

![Primary Axis Title value](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/edit-primaryaxis-title.png)

### Secondary Value Axis

This allows you to enable the `Secondary Value Axis` for chart. You can set interval of Secondary axis by `Edit Axis Range` button.

![v Axis visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/secondary-axis.png)

### Show Secondary Value Axis Title

This allows you to enable the visibility of `Secondary Value Axis` title of chart.

![Secondary Axis Title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/secondary-axis-title.png)

### Secondary Axis Title Value

This allows you to edit the `Secondary Value Axis` title. It will reflect in Secondary y-axis name of chart. 

![Secondary Axis Title value](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/secondary-axis-title-edit.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis and secondary value axis through the `Axis Range Settings` dialog.

#### Axis Format

This option allows you to format primary and secondary axis values from the formatting details provided using the 'Format' button. For more details, refer to this [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/formatting-button.png)

#### Grid Lines

![Grid Lines](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/gridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the Combination chart

![Primary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/primary-grid.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart

![Secondary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/secondary-grid.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the Combination chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/category-grid.png)

#### Trendline

![Trendline](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trendlinesettings.png)

You can add more than one trendline to Cartesian charts except bar type series(Line, Column, Area, Spline) and stacked type of charts. You can add, edit and delete trendlines.

***Add Trendline and Edit Trendline***

To add trendline, click highlighted button

![Trendline Add](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trendline-add.png)

Now dialog will open as follows

![Trendline Dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trendline-dialog.png)

Click `OK` button to add trendline in combination chart. Now, chart renders as follows.

![Trendline chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trendline.png)

To edit trendline select the one to be edited and click highlighted button.

![Trendline Edit](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trendline-edit.png)

Again trendline dialog window opens, now.

***Legend Text***

You can edit Trendline legend by `Legend Text` text box. By default, `Legend Text` renders based on Line type and Series name. 

***Series***

You can change series to which series have to show trendline by `Series` drop down option. 

***Line Type***

You can select line type by `Line Type` drop down option(Linear, Exponential, Logarithmic, Power, Polynomial).

***Line Color***

You can change color of trendline by `Line Color` color picker.

***Line Style***

You can change style of trendline by `Line Style` drop down option(Solid, Dot, Dash, DotDash, LongDash, LongDashDotDot).

***Delete Trendline***

To delete trendline, select the one to be deleted and click highlighted button.

![Trendline Delete](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/trendline-delete.png)

#### Formatting 

![Color Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/formatting.png)

This allows you to customize chart series color. This section renders with each series of default color. You can change its default color by color picker.

If you apply changes, by clicking the `Apply` button, the chart renders as follows.

![Default Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/format-color.png)

#### Advanced Color

![Advanced Color Button](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/advance-color.png)

This allows you to apply advance color customization to combination chart.

This option is only visible when combination chart have one or more than one series and if only one column or bar type chart, other series are Cartesian charts except bar or column type chart. You can apply advance color customization only to column or bar type chart.

If you enable option of `Advanced Color`, color customization window will render as follows. By disabling this option, color customization removed and default color will applied.

This window has three color types. (i) Gradient (ii) Rule (iii) Individual. By default, window renders with gradient type.

***Gradient***

You can select based on which field the gradient color will be applied by `Based On` drop down. You can change summary type. You can edit `Low` and `High` value and their color. By default, Low value takes minimum value of chart and High value takes maximum value of chart. `Mid` and its value and color can be enabled. By default, mid color disabled.

You can edit your gradient legend title by `Legend Title` text box.

If you click save button, chart will render as follows

![Gradient](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/gradient.png)

***Rule***

You can select rule settings by clicking `Rule` radio button. Now, color customization window renders as follows

![Rule](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/rule.png)

You can change based on field and summary type as gradient type. `Value Type` can be change with Value or Percentage. 

You can choose a series color with `Fill` color picker using multiple condition sets such as Greater than, Less than, Equal to, Not Equal to, Between, Not between, Greater than or equal to, Less than or equal to. You can also customize the legend name by providing necessary values inside condition name. You can add multiple conditions.

![Rule Setings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/ruleset.png)

If you click save button, now chart widget renders as follows

![Rule Setings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/rule-color.png)


***Individual***

You can select rule settings by clicking `Individual` radio button. Now, color customization window renders as follows.

![Individual](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/individual.png)

This type renders with Individual default color for each point of series. You can change it's color by Individual color pickers.

You can save your changes by clicking the `Save` button. If you want to reset your changes there is an option to render its default color `Reset.`

### Font Settings 

Font settings section allows you to enable the auto font size.

### Auto Font Size

On enabling `auto font fize,` the size of the font adjusted automatically based on the screen resolution.

![Font Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/fontsettings.png)

#### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/filter.png)

#### Act as Master Widget

This allows you to define this Combination chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this Combination chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container appearance

![Container appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

#### Title Alignment

This allows you to handle the alignment of widget title to the left, center or right.

#### Title Color

This allows you to apply text color to the widget title.

### Title Auto Font Size

`On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

#### Show Border

This allows you to toggle the visibility of the border surrounding the widget.

#### Corner Radius

This allows you to apply the specified radius to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to select the color for the chart background.

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

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

This allows you to enable or disable comment for the dashboard widget. For more details refer to [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
