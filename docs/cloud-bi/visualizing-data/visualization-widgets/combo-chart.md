---
layout: post
title: Combo Chart Widget – Cloud BI | Bold BI Documentation
description: Learn how to create a Combo Chart visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Combo Chart
documentation: ug
---

# Combo Chart

Combination Chart allows you to compare values by combining multiple Cartesian charts (column, bar, stacked column, stacked bar, 100% stacked column, 100% stacked bar, spline, line, area, stacked area, 100% stacked area).

![Combo Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochart.png)

## How to configure table data to combo chart

Combo Chart need a minimum value of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Primary or Secondary Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. By default, primary values render with Column chart and secondary values render with line chart.

Follow the below steps to configure data into combo chart:

Click `Data Source` button in configure panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one of the listed connection type button shown, here `Microsoft SQL` Connection type is selected for demonstration.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![virtualtable](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Drag and Drop Combo chart into canvas and resize into required size.

![Combo Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartConfigure.png)

Click `Properties` button in configuration panel, property panel opens. Now, Switch to `ASSIGN DATA` tab.

![Designer properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPropertyPanel.png)

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartAssignData.png)

The data tab will be opened with available measures and dimensions from the connected data source.

![Combo chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartData.png)

**Adding Primary and Secondary Values**

You can add more than one `measures` into `Primary Y Values` and `Secondary Y Values` field by dragging and dropping the required measure.

![Combo chart Primary data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryData.png)

![Combo chart Secondary data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryData.png)

Now, you can see combo chart renders as follows,

![Combo chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartrender.png)

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Combo-chart Menu Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartMenuSettings.png)

![Combo-chart Secondary Menu Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryMenuSettings.png)

You can filter the data to be displayed in combo chart by using filter. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/)

![Combo-chart Value filter settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartFilterSettings.png)

![Combo-chart Value filter settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryFilterSettings.png)

You can format the data to be displayed in the combo chart by using format option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Combo-chart Primary value formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryFormattingpng.png)

![Combo-chart secondary Value formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryFormatting.png)

To remove the added value fields click highlighted button.

![Combo-chart secondary Value formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryFieldremove.png)

![Combo-chart secondary Value formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryFieldremove.png)

**Adding Columns**

You can add more than one value to the `Columns` field.

![Combo-chart Column Adding](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartColumnAdding.png)

You can see Combo chart renders as follows,

![Combo-chart Column data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartColumndata.png)

Add more than one value to `Columns` field. The drilled view of the Combo chart region selected.

![Combo-chart Column drilldown data](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/CombochartDrilldown.png)

You can change the `Settings`.

![Combo-chart Column settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartcolumnsetting.png)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Combo-chart Column sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartColumnSorting.png)

You can apply filters by selecting filter in settings. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Combo-chart Column Filtering](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartColumnFiltering.png)

To show all records click `Clear`.

![Combo-chart Column Filtering](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartshowAllRecords.png)

## How to format Combo chart

You can format the Combo chart for better illustration of the view that you require, using the settings available in Properties tab.

Follow the below steps to format the combo chart

1. Drag and Drop combo chart into canvas and resize it to your required size.

2. Configure the data into combo chart.

3. Focus on the combo chart and click on Widget settings.

![Click on Widget Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPropertyPanelsetting.png)

You can see property window opened.

![Property panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartProperties.png)

You can see the list of properties available for the widget with default value.

**General Settings**

Name, Subtitle and Description for combo chart can be given using these properties.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartName.png)

**Basic Settings**

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartBasicSettings.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another convertible chart type. You can also set axis type as secondary or primary.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Legend Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartLegend.png)

Enabling this option of **Customize Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Customize**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartLegendcustomize.png)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![Label Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartLabel.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartLabelRotation.png)

**Value Label Suffix**

Allows you to enable the Suffix value text to the value labels. 

**Suffix Value**

Allows you to set\edit suffix value to the value labels.

![Value Label Suffix](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSuffix.png)

**Show Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series. Marker supports only for distribution type chart(line, spline, area, stacked area, 100% stacked area).

![Show Marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartMarker.png)

**Show Items With No Data**

This allows you to show data which column does not have value.

![Show Marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartshownodata.png)

**Link**

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/Link.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

**Axis**

![Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartAxis.png)

This section allow you to customize axis settings in combination chart.

**Show Category Axis**

This allows to enable the visibility of `Category Axis`.

![Category Axis visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartCategoryAxisV.png)

**Show Category AXis Title**

This allows you to enable the visibility of `Category Axis` title.

![Category Axis Title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartCategoryAxisTitleV.png)

**Category Axis Title**

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartCategoryAxisTitle.png)

**Label Overflow Mode**

This allows you to handle the display mode of the overlapping labels in the `Category Axis`. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartLabelTrim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode Hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartLabelHide.png)

**Category Axis Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartCategoryLabelRotation.png)

**Primary Value Axis**

This allows you to enable the `Primary Value Axis` for chart. You can set interval of primary axis by `Edit Axis Range` button.

![Primary Axis visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryAxisV.png)

**Show Primary Value Axis Title**

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Primary Axis Title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryAxisTitleV.png)

**Primary Axis Title Value**

This allows you to edit the `Primary Value Axis` title. It will reflect in primary y-axis name of chart. 

![Primary Axis Title value](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryAxisTitleVa.png)

**Secondary Value Axis**

This allows you to enable the `Secondary Value Axis` for chart. You can set interval of Secondary axis by `Edit Axis Range` button.

![v Axis visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryAxisV.png)

**Show Secondary Value Axis Title**

This allows you to enable the visibility of `Secondary Value Axis` title of chart.

![Secondary Axis Title visibility](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryAxisTitleV.png)

**Secondary Axis Title Value**

This allows you to edit the `Secondary Value Axis` title. It will reflect in Secondary y-axis name of chart. 

![Secondary Axis Title value](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecondaryAxisTitleVa.png)

**Grid Lines**

![Grid Lines](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartGridLines.png)

**Primary value Axis**

This allows you to enable the `Primary Value Axis` gridlines for the Combination chart

![Primary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartPrimaryGrid.png)

**Secondary value Axis**

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart

![Secondary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartSecGrid.png)

**Category Axis**

This allows you to enable the `Category Axis` gridlines for the Combination chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartCategoryGrid.png)

**Trendline**

![Trendline](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartTrendline.png)

You can add more than one trendline to Cartesian charts except bar type series(Line, Column, Area, Spline) and stacked type of charts. You can add, edit and delete trendlines.

***Add Trendline and Edit Trendline***

To add trendline, click highlighted button

![Trendline Add](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartTrendlineAdd.png)

Now dialog will open as follows

![Trendline Dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartTrendlineDialog.png)

Click `OK` button to add trendline in combination chart. Now, chart renders as follows.

![Trendline chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartTrendlinechart.png)

To edit trendline select the one to be edited and click highlighted button.

![Trendline Edit](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartTrendlineEdit.png)

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

![Trendline Delete](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartTrendlineDelete.png)

**Color Settings**

![Color Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartColorSettings.png)

This allows you to customize chart series color. This section renders with each series of default color. You can change its default color by color picker.

![Default Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartDefaultColor.png)

If you apply changes, by clicking the `Apply` button, the chart renders as follows.

![Changed Default Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartDefaultColorChange.png)

**Advanced Color**

![Advanced Color Button](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartAdvColorBtn.png)

This allows you to apply advance color customization to combination chart.

This option is only visible when combination chart have one or more than one series and if only one column or bar type chart, other series are Cartesian charts except bar or column type chart. You can apply advance color customization only to column or bar type chart.

If you enable option of `Advanced Color`, color customization window will render as follows. By disabling this option, color customization removed and default color will applied.

![Color customization Window](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartAdvanceWindow.png)

This window has three color types. (i) Gradient (ii) Rule (iii) Individual. By default, window renders with gradient type.

***Gradient***

You can select based on which field the gradient color will be applied by `Based On` drop down. You can change summary type. You can edit `Low` and `High` value and their color. By default, Low value takes minimum value of chart and High value takes maximum value of chart. `Mid` and its value and color can be enabled. By default, mid color disabled.

You can edit your gradient legend title by `Legend Title` text box.

If you click save button, chart will render as follows

![Gradient](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartGradient.png)

***Rule***

You can select rule settings by clicking `Rule` radio button. Now, color customization window renders as follows

![Rule](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartRuleDefault.png)

You can change based on field and summary type as gradient type. `Value Type` can be change with Value or Percentage. 

You can choose a series color with `Fill` color picker using multiple condition sets such as Greater than, Less than, Equal to, Not Equal to, Between, Not between, Greater than or equal to, Less than or equal to. You can also customize the legend name by providing necessary values inside condition name. You can add multiple conditions.

![Rule Setings](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartRuleSettings.png)

If you click save button, now chart widget renders as follows

![Rule Setings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartRuleSettingsC.png)


***Individual***

You can select rule settings by clicking `Individual` radio button. Now, color customization window renders as follows.

![Individual](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartIndividual.png)

This type renders with Individual default color for each point of series. You can change it's color by Individual color pickers.

![Individual](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartIndividualsettings.png)

You can save your changes by clicking `Save` button. If you want to reset your changes there is an option to render its default color `Reset`. Now, chart renders with changes.

![Individual Setings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/combochartIndividualsettingsChanges.png)  

**Filter**

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/Filter.png)

**Act as Master Widget**

This allows you to define this Combination chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this Combination chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container appearance

![Container appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/Container_Apperence.png)

**Title Alignment**

This allows you to handle the alignment of widget title to the left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of the border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

**Background Color**

This allows you to select the color for the chart background. `The default value is #ffffff`. 
![Background Color Property](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/container_apperence_bgcolor_change.png)

![Background Color Changed](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/ComboChart_Container_Appearence_bgcolor.png)

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/combo-chart/Container_Actions.png)

**Show Header**

This allows you to enable or disable the widget title of the column chart widget. 

**Allow Maximize View**

This allows you to enable or disable the maximized mode of the Column chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

**Allow CSV Export**

This allows you to enable or disable the CSV export option for the Column chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

**Allow Excel Export**

This allows you to enable or disable the Excel export option for the Column chart widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in the viewer.

**Allow Image Export**

This allows you to enable or disable the image export option for the Column chart widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in the viewer.

**Allow PDF Export**

This allows you to enable or disable the PDF export option for the Column chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

**Enable Comments**

This allows you to enable or disable comment for the dashboard widget. For more details refer to [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

**Allow View Underlying Data**

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 
