---
layout: post
title: Radial Gauge – Embedded BI | Bold BI Documentation
description: Learn how to create a Radial Gauge visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/radial-gauge/"
platform: bold-bi
control: Radial Gauge
documentation: ug

---

# Configuring Radial Gauge

`Radial Gauge` allows you measure the processing efficiency through the key performance indicator (KPI) like value and goal.

![Radial gauge](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/radialgauge.png)

## How to configure data to Radial Gauge

`Radial Gauge` needs one actual value and/or one target value as minimum requirement to showcase.

Follow these steps to configure data to the Radial Gauge:

1. Drag the Radial Gauge into the canvas and resize it to your required size.

![Drag and drop](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/drop-widget.png)

2. Click the `Data Source` button in the configuration panel.

![Data source panel click](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3. Click `CREATE NEW` to launch a new connection from the connection type panel.

![Create new click](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the `DATA SOURCES` panel, click any one of the listed connection type buttons as shown in the following. Here, the `Microsoft Excel` type is selected for demonstration.

![Excel connection type](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, enter the name and choose the file path, and then click `Preview & Connect.`

![Select file path](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Select the required tables from the `Choose Table(s)` dialog and click `Connect.`

![Connect tables](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/choose-tables.png)

7.  Drag your preferred table or view from the left pane in the data design view and click `Save.`

![Virtual tables](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

8.  Click the `Properties` button in the configuration panel. The property pane opens.

![Property pane open](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/propertypane.png)

9.  Now, switch to the `ASSIGN DATA` tab.

![Assign data click](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/data-pane.png)

10. The data tab will be opened with available `Measures` and `Dimensions` from the connected data source.

### Actual Value

Bind column by dragging any field from any section to `Actual Value.`

![Actual Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvalue.png)

### Aggregate Function

You can use the `aggregate function` to change the actual values of the Radial Gauge.

![Settings menu](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/rename.png)

#### Filtering data

You can use the `Filter` option to filter the data by specifying the filter condition. For more details, refer to the [filter](https://help.syncfusion.com/dashboard-embedded/visualize-data/configuring-widget-filters).

![Measure filter](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/filter-option.png)

#### Formatting data

You can format the data to be displayed in the gauge by using the `Format` option.

![Measure format](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/format-option.png)

> **NOTE:**  Refer to this [link](/visualizing-data/working-with-widgets/formatting-measure-type-column/) for more details on Measure formatting.

### Target Value

Similarly, drag any field from any section to `Target Value.`

![Target value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/targetvalue.png)

### Series

Drag any field from the Dimensions section to `Series.`

![Series configuration](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/seriesconfiguration.png)

![Series view](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/seriesview.png)

### Settings 

You can apply the `Sort` and `Filter` options for the Series field, if required from the `settings` menu.

![Settings menu options](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/sorting-settings.png)

**Sorting**: You can customize the sorting behavior of dimension fields in the Radial Gauge widget. You can order them based on alphabet or value, data source (default), or field. Refer to this [link](/visualizing-data/working-with-widgets/advanced-sorting/) for the detailed steps.

**Filtering**: You can use the “Filter” option to filter the data by specifying the filter condition. Refer to the detailed steps on applying measure filter from this [page](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

### Minimum Value

Drag any field from the Measures section to `Minimum Value.` If the minimum value is configured, then this value will be the start range for the gauge widget.

![Minimum Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/minimumvalue.png)

![Minimum Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/minimumvalue-change.png)

### Maximum Value

Drag any field from the Measures section to `Maximum Value.` If the maximum value is configured, it will act as the end range for the gauge widget.

![Maximum Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/maximumvalue.png)

![Maximum Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/maximum-value-change.png)

## Hidden Column

Hidden columns are useful in cases where we don't want the fields to take part in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/assigndata.png)

In the case of dimension fields we will having the following options only. In Date fields we will having all available types except sorting, relative date filter, settings and filters.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/measure.png)

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/dimension.png)

![Date field](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/date.png)

#### Linking

The primary use case of the hidden columns is linking. On configuring hidden columns, we can see below that the fields configured in hidden columns are listed in the linking section.  On configuring the column in linking we can pass the corresponding column value in linking parameter.

**Measure Based Example:** If we wish to pass the number of Matches played as an URL parameter but do not want it to influence the visualization, we can configure the Matches in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/link-measure.png)

**Dimension Based Example:** If we wish to pass the number of Team Name played as an URL parameter but do not want it to influence the visualization, we can configure  the Team Name in the hidden columns and incorporate them into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/filtericon.png)

Click the Custom button highlighted in the filter configuration dialog image below. It will list all the fields configured in the widget. Keep the field configured in the hidden column and remove the other fields, then click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/custom.png)

Now, we can see in the below image, the data is filtered based on the hidden column field instead of the actual column that we bound in the widget. 

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Filter Configuration documentation](/working-with-dashboards/configuring-dashboard-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you to identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/viewdata.png)

> **NOTE:** We don't recommend to configure lower hierarchy data in hidden columns as we can see in the info icon in `Hidden Column` section denotes the same. 

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/info-icon.png)

The below gauge displays the goals and Attempts On Target by each team without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/before.png)

If we configure lower hierarchy data(Player Name) in hidden columns, incorrect data is being displayed on the gauge.

![After](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/after.png)

## How to format the Radial Gauge

You can format the Radial Gauge for better illustration of the view through the settings available in the Properties tab.

To format the Radial Gauge, follow the given steps:

1.	Drag the Radial Gauge into the canvas and resize it to your required size.

2.	Configure data into the Radial Gauge.

3.	Focus the Radial Gauge and click the `settings` icon.

![Settings menu click](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/settings-menu-click.png)

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/property.png)

#### Name

This option allows you change the `title` for the Radial Gauge.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/Name.png)

#### Subtitle

Allows you provide `subtitle` for the Radial Gauge.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/subtitle.png)

#### Description

Allows you provide `description` about the Radial Gauge.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/Description.png)

### Basic Settings
 
![Basic settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/radialgaugebasicsettings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in the radial gauge.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/tooltip.png)

#### Gauge Type

Allows you to switch the widget view from the Half Circle type to Horse Shoe type or Full circular gauge or vice versa. The default type is `Horse Shoe.`

> **Note:** If you change gauge type to `Full circle`, **Color settings** or **Range settings** categories will be hidden. In the `Pointer settings` category, **Value Pointer**, **Target Pointer** and **Target Color** properties will be hidden, and in `Scale settings` category, **Show ticks**, **Show label** and their dependent properties will be hidden. The `Size` option will be shown, which is used to customize the font size of the difference value.

#### Half Circular Gauge

![Half Circular Gauge](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/half-circle.png)

### Full circular Gauge

You can change the type `Full Circle` to show a full circular gauge. If you change, the gauge will render like this. For full circular type, the difference value will not be shown, only the percentage of the difference value will be shown.

![Full Circular Gauge](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/fullcirculargauge.png)

For full circular gauge, some of the categories in property panel get hidden. If properties are applied before changing their type, which is not unnecessary to the full circular gauge, it will be reverted. Here, is the list of categories that do not support for full circular gauge.

- Color Settings
- Range Settings

In property panel, two more properties(Difference value color and size) shown in the `Basic Settings` for full circular gauge.

**Difference value color**

You can apply color for difference value of the gauge. 

**Difference value size**

This allows you to change size of difference value. The default value of this property is 15. You can change its size between 12 and 55.

#### Minimum Value

Allows you to change the minimum value of the gauge. This option will be in a disabled state when you configure the column to start value in the data configuration panel.

#### Maximum Value

Allows you to change the maximum value of the gauge. This option will be in a disabled state when you configure the column to end value in the data configuration panel.

#### Enable Animation

You can enable the animation for gauge by setting this property to true. The default value of this property is false.

#### Show Actual value

Allows you to hide or show the actual value in gauge by disabling or enabling the option. The default value of this property is true.

![Actual Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvalue-set.png)

#### Value Color 

You can apply color for the Actual value displayed in the Radial Gauge. The default value is `#666666.`

![Actual Value color](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvalue-set-color.png)

![Actual Value color](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvalue-set-color-set.png)

If you uncheck the `show actual value` property, its dependent property **Value color** will be hidden.

#### Label Color 

You can apply color for the Radial Gauge labels. The default value is `#000000.`

![Actual Label color](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvalue-set-color-label.png)

![Actual Label color](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvalue-set-color-label-change.png)

#### Show Difference Value

When you bind both actual and target values in gauge, this option will be shown. This allows you to hide or show the difference value of actual and target value with its percentage value. The default value of this property is true.

![Show Difference Value](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/show-difference-value.png)

#### Title Color

The Radial Gauge title color can be customized. The default value is #000000. This option will be disabled if the series is not configured in the Radial Gauge.

### Color Settings

![Color Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/colorsettings.png)

#### Direction

You can set the value label status to High is Good or Low is Good. The default setting is High is Good. This option is enabled only when you configured the actual value and target value.

From the provided color pickers, you can customize the color values for the **High, Medium,** and **low** colors. 

### Pointer Settings

![Pointer settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/pointersettings.png)

**Needle Pointer Color**

You can change the color of the needle pointer.

**Needle Pointer Height**

You can increase or decrease the height of the needle by changing the `Needle pointer height.`

**Target Pointer**

You can change the pointer as **line, triangle** and **inverted triangle**.

**Target Color**

You change change the color for the `target pointer`.

**Needle Pointer Customization**

![Needle Pointer](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/needle-change.png)
 
### Range with Needle

This is used to display the actual value by coloring the region and set the needle pointer up to the actual value in Radial Gauge.

![Range Needle Pointer](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/rangeneedle-settings.png)

![Range Needle Pointer Customization](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/rangeneedle.png)

### Scale Settings

![Scale settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/scalesettings.png)

#### Scale Color

Allows you to set the color of the scale. The default value is `#e0e0e0.`

#### Show Ticks

Allows you displays the ticks for gauge scales. The default value is `false.` The interval between ticks will be auto-calculated.

![Scale Ticks](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/show-ticks.png)

If you check the `Show Ticks` property, **Ticks Position**, **Ticks Height** and **Ticks Width** properties will be shown.

![Scale Ticks](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/tick.png)

#### Ticks Position

You can change the tick’s position either at inside or `outside.` The default value is outside. This option is displayed only when the show ticks’ option is enabled.

#### Ticks Height

Allows you to change the tick’s height. The minimum and maximum value of ticks’ height is 1 and 10 respectively and the default value is `5.` This option is displayed only when the Show Ticks option is enabled.

#### Ticks Width

Allows you to change the tick’s width of the gauge. The minimum and maximum value of ticks’ width is 1 and 5 respectively and the default value is `1.` This option is displayed only when the Show Ticks option is enabled.

#### Scale Width

Allows you change the scale width of the gauge. The minimum and maximum values of gauge is 1 and 60 respectively and the default value is `40.`

#### Show Scale Label

Allows you display the scale label of the gauge. The default value is `true.`

By enabling this property, the **Scale label position** property will be shown.

![Scale Ticks](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/scale.png)


#### Scale Label Position

Allows you change the scale label position. The default value is `outside.` This option will be disabled, if the gauge type is half circle and the Show Ticks is false.

### Range Settings

![Range Settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/range-settings.png)

#### Show Range

You can enable or disable this option to display the scale with three different ranges. The default value is `false.`

> **NOTE:**  If you enable Show Range, the needle pointer will be set as a fixed pointer and the range pointer option will not be displayed in the property panel.

#### Range

You can select a range to change its start, end, and color values.

> **NOTE:**  Currently, you can configure only three ranges.

#### Start

Allows you to set the start value of the selected range. This option is displayed only if the Show Range is true.

#### End

Allows you to set the end value of the selected range. This option is displayed only if the Show Range is true.

#### Color

Allows you to set the color of the selected range. This option is displayed only if the Show Range is true.

#### Value Color
You can customize color for the Actual value displayed in the Radial Gauge by range color or default label color.

#### Label Color
You can customize color for the Radial Gauge labels with the range color or default color.

### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [linking URLs](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/linking.png)

### Font settings

This section allows you to customize the font size of radial gauge elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font size property used to set font size based on dashboard viewing client machine resolution. If the user wants to customize or set the fixed font size, then the user needs to disable auto font size and set the required font size.

### Widget with Auto Font Size

![Auto Font Size](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/auto-font-settings.png)

### Scale Label Font Size

This option allows you to customize font size of scale labels. While `Auto Font Size` option is enabled, font size will be applied based on resolution.

![Customized Scale Label Font Size](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/scale-fontsize.png)

### Actual Value Font Size

This option allows you to customize font size of Actual Value. While `Auto Font Size` option is enabled, font size will be applied based on gauge size.

![Customized Actual Value Font Size](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/actualvaalue-fontsize.png)

### Difference Value Font Size

This option allows you to customize font size of Actual Value. While `Auto Font Size` option is enabled, font size will be applied based on gauge size.

![Customized Difference Value Font Size](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/differencevalue-fontsize.png)

### Series Title Font Size

This option allows you to customize font size of Series Title. While `Auto Font Size` option is enabled, font size will be applied based on resolution.

![Customized Series Title Font Size](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/seriestitle-fontsize.png)

### Filter

![Filter properties](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/filter.png)

#### Ignore filter actions

This allows you to define the radial gauge widget to ignore responding filter actions applied on other widgets in the dashboard.

#### Enable Hierarchical Filter

The Radial Gauge widget can be set to act as a master widget by checking the `Act as Master Widget` option. The `Ignore Filter Actions` options enable the Radial gauge widget not to be filtered by any other master widgets during the interaction time in both preview and published modes. 

> The Act as Master Widget option will be enabled only when the Series section is configured.

## How to apply advanced conditional formatting

The color of various properties in the Radial gauge can be customized from the corresponding properties section as explained in the formatting section. This will apply the same color for all records. 

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option. 

### How to enable advanced formatting

In the properties pane, enable the `Advanced Setting` option provided under the formatting section.

![Enable advance settings](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/enable-advance-settings.png)

Now, the Conditional Formatting dialog opens. 

![Conditional formatting dialog](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/formatting-dialog.png)

#### Gradient based

The `Gradient` color format requires the `Low` and `High` color values. The data will be compared with this range and the matching color will be applied to the `Range pointer` of the Gauge widget. 

If any widget data is not present in the given limit, then the property panel’s range pointer color will be applied to the gauge widget. 

After applying the gradient conditions

![Gradient conditions](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/gradientconditions.png)

#### Based On field and Summary Type

From the Conditional Formatting dialog, you can choose the `based-on field` and the `summary type` to apply the conditions. 

![Based on field](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/based-on-field.png)

> **NOTE:**  Any field from the configured data source can be selected as the `Based-on field.`

#### Rule based 

You can add the required conditions instead of providing a simple range using the `rule` based conditional formatting.

The based-on field and the summary type are customizable as in the gradient-conditional type. Also, you can choose the `Value type` (value/percentage) from the drop-down .

> **NOTE:** The percentage will be calculated by using the maximum value of the Based-on field. 

You can customize more than one property using the rule-based conditional formatting. 

1.	Range pointer color
2.	Actual value color
3.	Needle pointer color (Applicable only when the needle pointer is used.) 
4.	Target pointer color
5.	Title color (Applicable only when the series is configured.)

> **NOTE:**  If the condition is matched, the colors will be applied accordingly for the corresponding properties. 
> **NOTE:** 
> **NOTE:**  If the condition is not met, the property panel color will be applied. 
> **NOTE:** 
> **NOTE:**  If more than one condition is matched, the last applied condition will be applied. 

![Rule dialog](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/ruledialog.png)

#### Measure condition

Conditional formatting condition: 

![Measure conditon](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/conditon.png)

After applying the conditional formatting: 

![After applying](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/formatting-view.png)

#### Text condition

You can also use the text-based matching for the configured series field as shown in the following screenshots. 

![Text condition](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/text-condition.png)

![Rule applied view](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/rule-applied-view.png)

#### Condition Type

You can choose from any one of the following types:
1. Starts with 
2.	Ends with
3.	Contains
4.	Not Contains
5.	Equals
6.	Not Equals

#### Value

The conditional value for which you need to apply formatting.

#### Case sensitive

Indicating whether the value is `case sensitive` or not. 


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

This allows you to set the **background image** for the radial gauge widget.

### Background Color

This allows you to set the **background color** to the radial gauge  widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the radial gauge.

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the radial gauge  widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the radial gauge  widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the radial gauge  widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the radial gauge  widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the radial gauge  widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the gauge is placed with below 150 pixels of height and width, labels and ticks will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/radial-gauge/label.png)
