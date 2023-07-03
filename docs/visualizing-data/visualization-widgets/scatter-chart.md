---
layout: post
title: Scatter Chart – Embedded Dashboard Widget | Bold BI Docs
description: Learn how to create and add a Scatter Chart visual in an embedded dashboard, configure data fields and other settings using Bold BI application.
platform: bold-bi
control: Scatter Chart
documentation: ug
---

# Scatter Chart

`Scatter Chart` is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data.

![Default Scatter chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/scatter-chart-view.png)

A Bubble Chart is a variation of a scatter chart in which the data points are replaced with bubbles, and an additional dimension of the data is represented in the size of the bubbles.

![Default Bubble chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/bubble-chart-view.png)

## How to configure the table data to scatter chart

Scatter chart needs minimum of 1 `X-Axis` element and 1 `Y-Axis` element to showcase the data.  The measure or expression field that you would like to analyze can be dropped into `X-axis` and `Y-Axis` blocks. The dimension that you would like to categorize the measure, can be dropped onto Label block. If you would like to visualize data in bubble type, then the respective measure can be dropped onto Size block in addition.

The following steps explain the data configuration of the Scatter Chart:

1. Drag and drop the `Scatter chart control` icon from the tool box into design panel. You can find the control in tool box by search.

    ![Adding Scatter chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/drop-widget.png)

2. Resize the widget as required.

    ![Resizing Scatter chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/resize-widget.png)

3. Click the `Data Source` button in the configuration panel.

    ![Data Source](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

4. Click the `CREATE NEW` button to launch a new connection from the connection type panel.

    ![CREATE NEW](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

5. In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button.

    ![Datasource list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

6. In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

    ![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

7. Drag and drop your preferred table or view from the left pane from the data design view, and click the `Save` button.

    ![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

8. Click the `Properties icon` in the configuration panel.

    ![Click properties icon](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

9. The `properties` panel of the widget will be displayed as shown in the following screenshot.

    ![Properties pane](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/properties-pane.png)

10. Now, switch to the `ASSIGN DATA` tab.

    ![Assign Data section](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/assign-data.png)

11. The `ASSIGN DATA` tab will be opened with the available columns from the connected data source.

### Adding fields to Y-Axis

You can drag and drop the Measures field into the `Y-Axis` section.

![Add Y-Axis field](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/add-y-axis.png)

**Note:** It is a mandatory section and only one value can be configured.

### Settings menu options

You can `filter` and `format` the data displayed in the widget from the settings menu options. To open the `settings menu,` click the `settings icon.`

The following screenshots shows the various settings menu options based on the type of field configured in the type of section. 

![Numeric field settings menu](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/settings-menu.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Changing the aggregation](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/settings.png)

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/format-option.png)

#### Removing the fields

To remove the added value fields, click the highlighted button.

![Removing  Fields](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/remove-icon.png)

### Adding fields to X-Axis

You can drag and drop the Measures or Dimensions field into the X-Axis section.

![Add X-Axis field](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/add-x-axis.png)

**Note:** It is a mandatory section and only one value can be configured.

#### Settings 

You can change the `Settings.`

![Settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/x-axis-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/rename.png)

#### Sorting

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/sort-option.png)

#### Filtering data

You can apply filter by selecting the `Filter(s)` option in the settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/x-axis-filter-option.png)

The chart will be rendered like this,

![Scatter chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/scatter-chart.png)

### Adding fields to Label 

You can drag and drop the Dimensions field into the Label section. 

![Adding Label section](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/adding-label-section.png)

The chart will be rendered like this,

![Scatter chart with Label section](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/chart-with-label-section.png)

**Note:**
You can not bind field into Label section, when X-Axis section bind with Dimensions field.
You can not bind field into Label, when X-Axis or Y-Axis or both have summary type as None.
You can not visualize data when X-Axis or Y-Axis summary type changed to as None when Label section is configured with data

### Adding fields to Row

Drag and drop the elements from sections to `Row.`

![Adding row section](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/row-section.png)

![Scatter chart with Row](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/chart-view-with-row.png)

### Adding fields to Size section

When you bind data to Size section, chart will render as bubble chart. You can drag and Drop the Measures field into the Size section.

![Configure size section](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/adding-size-section.png)

Chart will render as shown,

![Bubble chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/bubble-chart.png#max-width=50%)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measure we will be having all the settings we have for the measure fields expect formatting and filtering. 

![Measure](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/measure.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/info-icon.png)

The below chart displays the goals by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns compared to column and Row filed data, the data configured in the widgets gets duplicate, and individual column is split based on hidden column field. This affects the chart visualization as we can see in the below image.

![After](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/after.png)

#### Adding tooltip fields

You can configure the `tooltip section` to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to this section for more details on configuring the [tooltip fields](/visualizing-data/working-with-widgets/tooltip-customization/).

## How to format scatter chart widget

You can format the scatter chart for better illustration of the view that you require using the settings available in `Properties` tab.

### General settings

![General settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/property.png)

#### Name

This allows you to set `title` for this scatter chart widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/Name.png)

#### Subtitle

This allows you to set `subtitle` for this scatter chart widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/Subtitle.png)

#### Description

This allows you to set `description` for this scatter chart widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/Description.png)

### Basic settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in chart.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/tooltip.png)

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Value labels in chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/value-labels.png)

#### Series Shape

This allows you to change the shape of the series to **Circle**, **Rectangle**, **Triangle**, and **Diamond**.

![Chart series shape](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/series-shape.png)

**Note:** This option only enabled if Row is configured.

### Legend Settings

![Legend settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legend-settings.png)

#### Show legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in scatter chart.

![chart legends](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/show-legend.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

![Legend position bottom](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legend-bottom.png)

![Legend position left](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legend-left.png)

![Legend position right](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legend-right.png)

![Legend position top](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legend-top.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legendcustomize.png)

![Legend customization Change](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/legendcustomize-change.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties **Legend position**, **customization button** is also hidden.

### X-Axis Settings

This section allows you to customize the x-axis settings in scatter chart.

![X-Axis settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/chart-x-axis-settings.png)

#### Show X Axis

This allows you to toggle the visibility of the category axis.

![Category axis](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/category-axis.png)

#### Show Axis Title

This allows you to toggle the visibility of the category axis title of scatter chart.

![Category axis title](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/category-axis-title.png)

#### Axis Title

This allows you to edit the category axis title. It will reflect in x-axis name of chart. 

![Category axis title change](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/category-axis-title-changed.png)

#### Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category axis label rotated](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/label-rotation.png)

#### Axis Format

This option allows you to format category axis values from the formatting details provided using 'Axis Format' button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting axis](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/category-axis-format.png)

### Y-Axis Settings

This section allows you to customize the x-axis settings in scatter chart.

![X-Axis settings](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/chart-y-axis-settings.png)

#### Show Y Axis

This allows you to toggle the visibility of the primary axis.

![Primary axis](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/primary-axis.png)

#### Show Axis Title

This allows you to toggle the visibility of the primary axis title of scatter chart.

![Primary axis title](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/primary-axis-title.png)

#### Axis Title

This allows you to edit the primary axis title. It will reflect in y-axis name of chart. 

![Primary axis title change](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/primary-axis-title-changed.png)

#### Axis Format

This option allows you to format primary axis values from the formatting details provided using 'Axis Format' button. For more details, refer to this [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting axis](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/primary-axis-format.png)

#### Opposed Axis

This allows you to render the primary axis to the opposite side of its default position.

![Opposed axis](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/opposed-axis.png)

### Grid Lines

You can toggle the visibility of the each axes gridlines using this property.

![Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/grid-lines.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the Scatter chart.

![Category Axis Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/category-axis-grid-lines.png)

#### Primary Value Axis

This allows you to enable the `Primary Axis` gridlines for the Scatter chart.

![Primary Axis Grid Lines](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/primary-axis-grid-lines.png)

### Series Palette

This section will be shown only if the row is configured.

![Series palette](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/series-color-palette.png)

#### Use Default Palette

By toggle off the `Use Default Palette,` you can customize the scatter chart series segments' colors by clicking the colored squares.

![Series color palette window](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/series-color-window.png)

### Formatting

This allows you to change the `color` for the scatter chart. This section will shown only if row is not configured.

![Formatting](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/formatting.png)

It will reflect in the scatter chart.

![Formatting Applied](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/formatting-applied-scatter-chart.png)

#### Advanced settings

Select `Advanced setting` to configure conditions and apply color to the chart based on that. You can refer more details from [this section](/visualizing-data/visualization-widgets/scatter-chart/#how-to-apply-conditional-formatting)

## How to apply conditional formatting

Color in scatter chart widget can be customized using the color settings available in the `properties` section. This will allow the users to improve the visualization in scatter chart and to distinguish the data based on conditional range values that will let the visualizer to understand what is shown in data.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, check the `Advanced Setting` check box.

2. This will open the `Conditional Formatting` dialog.

![Conditional formatting dialog](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/formatting-dialog.png)

3. Select the mode and enter the conditions as required and click the `save` button to apply.

![Applying the conditions](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/apply-conditions.png)

4. Now, the widget visualization will be updated based on the conditions.

![After applying conditional formatting](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/formatted-result.png)

Refer to the following sections for the detailed steps on using the [Gradient](/visualizing-data/visualization-widgets/scatter-chart/#gradient-mode), [Rule](/visualizing-data/visualization-widgets/scatter-chart/#rule-based-condition-mode) and [individual](/visualizing-data/visualization-widgets/scatter-chart/#individual-mode) modes. 

#### Gradient mode

You can customize the fill color of the scatter chart using the gradient based conditional formatting. `This is the default mode.`

#### Based on field

You can choose any field from the Based-On section to apply the conditions from the drop-down.

#### Summary type

You can select the summary type for the selected measure field.

#### Low, mid, and high values

You can define your range by entering the low, mid, and high 
values. 

> **Note:**  It is optional, if no value is entered then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

#### Legend title

You can enter the title for the scatter chart legends. 

### Rule based condition mode

This allows you to customize the fill color of the scatter chart based on one or more numerical / text conditions.

![rule mode](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/rule-mode.png)

#### Value type

The value type drop-down allows you to choose whether you are going to apply the direct value (specific number like 3 goals, order ID 10248) or percentage (values above 30% or 50 %).

#### Condition name

You can give a meaningful name to the applied conditions.

#### Condition type

Choose the condition for measure field from the highlighted conditions.

![numeric condition types](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/numeric-condition.png)

If you selected the dimension as a `based-on field` and want to use text condition, the following text-based conditions are available.

![text conditions](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/text-condition.png)

> The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

You can mention the condition value.

#### Case sensitive

For the dimensions, case sensitive option is provided to choose whether the entered value is case sensitive or not.

#### Fill color

Select the fill color for that condition using the color picker. 

#### Add condition

Click ` add condition` to specify add new condition. 

#### Delete condition

Click the `delete` button to remove the existing condition. 

### Individual mode

Using the `individual` mode, you can specify color for each record. 

> **IMPORTANT:**  Only top 100 records will be listed in the dialog. 

![Individual mode](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/individual-mode.png)

#### Color

You can choose the color for the record from the nearby color picker.

#### Reset

To undo all the changes, click `reset.`

### Link

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/linking.png)

### Filter

This section allows you to handle the `filter` action for the scatter chart widget.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/filter.png)

#### Act as master widget

This allows you to define this scatter chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this scatter chart widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Hierarchical filter

Using this option, you can enable or disable the hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter option` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the `Container Appearance` for the scatter chart widget.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

`On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

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

This allows you to toggle the visibility of the **border** surrounding the widget.

### Corner Radius

This allows you to apply the specified **radius** to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the scatter chart widget.

### Background Color

This allows you to set the **background color** to the scatter chart widget.

### Transparency

This property allows you to specifies the **transparency** for the **background color**.

#### Show Shadow

This property allows you to toggle the visibility of `shadow` for scatter chart widget.

### Container actions

This Section allows you to customize the **Container actions** for the scatter chart widget.

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the **widget title** of the scatter chart. 

#### Allow Maximize View

This allows you to enable or disable the **maximized mode** of the scatter chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the **CSV export** option for the scatter chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the **Excel export** option for the scatter chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the scatter chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the **PDF export** option for the scatter chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
