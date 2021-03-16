---
layout: post
title: Radial Gauge Visual – Cloud BI | Bold BI Documentation
description: Learn how to create a Radial Gauge visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Radial Gauge
documentation: ug
---

# Configuring Radial Gauge

`Radial Gauge` allows you measure the processing efficiency through the key performance indicator (KPI) like value and goal.

![Radial gauge](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/RadialGauge.png)

## How to configure data to Radial Gauge

`Radial Gauge` needs one actual value and/or one target value as minimum requirement to showcase.

Follow these steps to configure data to the Radial Gauge:

1. Drag the Radial Gauge into the canvas and resize it to your required size.
![Drag and drop](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Add-RadialGauge.png)

2. Click the `Data Source` button in the configuration panel.
![Data source panel click](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Data-source-click.png)

3. Click `CREATE NEW` to launch a new connection from the connection type panel.
![Create new click](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/CREATE-NEW-ds.png)

In the `DATA SOURCES` panel, click any one of the listed connection type buttons as shown in the following. Here, the `Microsoft Excel` type is selected for demonstration.
![Excel connection type](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Choose-Ds.png)

In the `NEW DATA SOURCE` configuration panel, enter the name and choose the file path, and then click `Preview & Connect`.

![Select file path](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Select-file-path.png)

Select the required tables from the `Choose Table(s)` dialog and click `Connect`. 

![Connect tables](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Connect-tables.png)

Drag your preferred table or view from the left pane in the data design view and click `Save`.

![Save data source](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Save-data-source.png)

Click the `Properties` button in the configuration panel. The property pane opens.

![Property pane open](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Property-pane.png)

Now, switch to the `ASSIGN DATA` tab.

![Assign data click](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/data-pane.png)

The data tab will be opened with available `Measures` and `Dimensions` from the connected data source.

![Measures and dimensions](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/field-lists.png)

### Actual Value
Bind column by dragging any field from any section to `Actual Value`.

![Actual Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Actual-Value.png)

You can use the `aggregate function` to change the actual values of the Radial Gauge.

![Settings menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Settings-menu.png)

You can use the Filter option to filter the data by specifying the filter condition. For more details, refer to [filter](https://help.syncfusion.com/dashboard-cloud/visualize-data/configuring-widget-filters).

![Measure filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Measure-filter.png)

You can format the data to be displayed in the gauge by using the `Format` option.

![Measure format](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Measure-format.png)

> **NOTE:**  Refer [here](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/) for more details on Measure formatting. 

### Target Value

Similarly, drag any field from any section to `Target Value`. 

![Target value](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Target-value.png)

### Series
Drag any field from the Dimensions section to `Series`.   

![Series configuration](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Series-configuration.png)

![Series view](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Series-view.png)

You can apply the `Sort` and `Filter` options for the Series field, if required from the `settings` menu.

![Settings menu options](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Dimension-Settings.png)

**Sorting**: You can customize the sorting behavior of dimension fields in the Radial Gauge widget. You can order them based on alphabet or value, data source (default), or field. Refer [here](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/) for the detailed steps. 

**Filtering**: You can use “Filter” option to filter the data by specifying the filter condition. Refer the detailed steps on applying measure filter from this [page](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column). 

### Minimum Value

Drag any field from the Measures section to `Minimum Value`. If the minimum value is configured, then this value will be the start range for the gauge widget .

![Minimum Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Start-Value.png)

### Maximum Value

Drag any field from the Measures section to `Maximum Value`. If the maximum value is configured, it will act as the end range for the gauge widget . 

![Maximum Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/End-Value.png)

## How to format the Radial Gauge

You can format the Radial Gauge for better illustration of the view through the settings available in the Properties tab.

To format the Radial Gauge, follow the given steps:
1.	Drag the Radial Gauge into the canvas and resize it to your required size.
2.	Configure data into the Radial Gauge.
3.	Focus the Radial Gauge and click the `settings` icon.
![Settings menu click](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/settings-menu-click.png)
![Properties pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Properties-window.png)

### General Settings

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/General-Settings.png)

#### Name
This option allows you change the title for the Radial Gauge.

#### Subtitle
Allows you provide subtitle for the Radial Gauge.

#### Description
Allows you provide description about the Radial Gauge.

### Basic Settings
 
![Basic settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/radialgaugebasicsettings.png)

#### Gauge Type
Allows you to switch the widget view from the Half Circle type to Horse Shoe type or Full circular gauge or vice versa. The default type is `Horse Shoe`.

#### Minimum Value
Allows you to change the minimum value of the gauge. This option will be in a disabled state when you configure the column to start value in the data configuration panel.

#### Maximum Value
Allows you to change the maximum value of the gauge. This option will be in a disabled state when you configure the column to end value in the data configuration panel.

#### Enable Animation
You can enable the animation for gauge by setting this property to true. The default value of this property is false.

#### Show Actual value
Allows you to hide or show the actual value in gauge by disabling or enabling the option. The default value of this property is true.

#### Value Color 
You can apply color for the Actual value displayed in the Radial Gauge. The default value is `#666666`.

#### Show Difference Value
When you bind both actual and target values in gauge, this option will be shown. This allows you to hide or show the difference value of actual and target value with its percentage value. The default value of this property is true.

#### Label Color 
You can apply color for the Radial Gauge labels. The default value is `#000000`. 

#### Title Color
The Radial Gauge title color can be customized. The default value is `#000000`. This option will be disabled, if the series is not configured in the Radial Gauge.

### Full circular Gauge

You can change the type `Full Circle` to show a full circular gauge. If you change, the gauge will render like this. For full circular type, difference value will not be shown, only the percentage of the difference value will be shown. 

![Full Circular Gauge](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/fullcirculargauge.png)

For full circular gauge, some of the categories in property panel get hidden. If properties applied before changing their type, which is not unnecessary to the full circular gauge, it will be reverted. Here, is the list of categories that do not support for full circular gauge.

- Color Settings
- Range Settings

In property panel, two more properties(Difference value color and size) shown in the `Basic Settings` for full circular gauge.

![Full circular gauge basic setting](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/fullcirculargaugebasic.png)

#### Difference value color
You can apply color for difference value of the gauge. 

#### Difference value size
This allows you to change size of difference value. The default value of this property is 15. You can change its size between 12 and 55.

### Color Settings
![Color Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Color-Settings.png)

#### Direction
You can set the value label status to High is Good or Low is Good. The default setting is High is Good. This option is enabled only when you configured the actual value and target value.

From the provided color pickers, you can customize the color values for the High, Medium, and low colors. 

### Pointer Settings

![Pointer settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Pointer-settings.png)

#### Value Pointer
You can set the actual value pointer type to any of the following three types and the default value of this property is Range Pointer.
- Range Pointer
- Needle Pointer
- Range with Needle

#### Range Pointer
The range pointer is used to display the actual value by coloring the region up to the actual value in Radial Gauge.

#### Range Pointer Color
You can apply color for the Range Pointer. The default value is `#77A7FB`. This option will be disabled, if the Value Pointer is set to Needle Pointer.

### Scale Settings

![Scale settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Scale-settings.png)

#### Scale Color
Allows you to set the color of the scale. The default value is `#e0e0e0`.

#### Show Ticks
Allows you display the ticks for gauge scales. The default value is `false`. The interval between ticks will be auto-calculated.

#### Ticks Position
You can change the tick’s position either at inside or `outside`. The default value is outside. This option is displayed only when the show ticks’ option is enabled.

#### Ticks Height
Allows you change the tick’s height. The minimum and maximum value of ticks’ height is 1 and 10 respectively and the default value is `5`. This option is displayed only when the Show Ticks option is enabled.

#### Ticks Width
Allows you change the tick’s width of the gauge. The minimum and maximum value of ticks’ width is 1 and 5 respectively and the default value is `1`. This option is displayed only when the Show Ticks option is enabled.

#### Scale Width
Allows you change the scale width of the gauge. The minimum and maximum values of gauge is 1 and 60 respectively and the default value is `40`.

#### Show Scale Label
Allows you display the scale label of the gauge. The default value is `true`.

#### Scale Label Position
Allows you change the scale label position. The default value is `outside`. This option will be disabled, if the gauge type is half circle and the Show Ticks is false.

### Range Settings

#### Show Range
You can enable or disable this option to display the scale with three different ranges. The default value is `false`.

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

### Link
You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to [linking URLs](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Filter

![Filter properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Filter-properties.png)

The Radial Gauge widget can be set to act as a master widget by checking the `Act as Master Widget` option. The `Ignore Filter Actions` options enable the Radial gauge widget not to be filtered by any other master widgets during the interaction time in both preview and published modes. 

> The Act as Master Widget option will be enabled only when the Series section is configured.

### Container Appearance

#### Title Alignment
Allows you handle the alignment of widget title to either left, right, or center.

#### Title Color
Allows you apply the text color to the widget title.

#### Show Border
Allows you toggle the visibility of border surrounding the widget.

#### Corner Radius
Allows you apply the specified radius to the widget corners if the Show Border property is enabled. Value can be set between 0 and 10.

#### Show Maximize
Allows you to enable or disable the maximized mode of the gauge widget. The visibility of the maximize icon in the widget header will be defined based on this setting. Clicking this icon in the viewer will show the maximized view of the gauge widget.

#### CSV Export
This allows you to enable or disable the CSV Export option for the gauge widget. Enabling this allows you to export the summarized data of the widget view to CSV format.

#### Excel Export
This allows you to enable or disable the Excel Export option for the gauge widget. Enabling this allows you to export the summarized data of the widget view to (`.xlsx or .xls`) format.

#### Image Export
This allows you to enable or disable the Image Export option for the gauge widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in viewer.

#### PDF Export
This allows you to enable or disable the PDF Export option for the gauge widget. Enabling this allows you to export the view of the widget to PDF format `(.pdf)` in viewer.

#### Enable Comments
This allows you to enable or disable a comment for the dashboard widget. For more details refer to [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### View Data
This allows you to visualize the raw data associated with a widget at runtime.

## How to apply advanced conditional formatting
The color of various properties in the Radial gauge can be customized from the corresponding properties section as explained in the formatting section. This will apply the same color for all records. 

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option. 

### How to enable advanced formatting
In the properties pane, enable the `Advanced Setting` option provided under the formatting section.

![Enable advance settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Enable-advance-settings.png)

Now, the Conditional Formatting dialog opens. 

![Conditional formatting dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/formatting-dialog.png)

#### Gradient based
The `Gradient` color format requires the `Low` and `High` color values. The data will be compared with this range and the matching color will be applied to the `Range pointer` of the Gauge widget. 

If any widget data is not present in the given limit, then the property panel’s range pointer color will be applied to the gauge widget. 

Before applying advanced color customization 
![Before gradient](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Before-gradient.png)

Apply the gradient conditions
![Gradient conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Gradient-conditions.png)

After applying the conditional formatting 
![Applied Graident](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Applied-Graident.png)

#### Based On field and Summary Type
From the Conditional Formatting dialog, you can choose the `based-on field` and the `summary type` to apply the conditions. 
![Based on field](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Based-on-field.png)

> **NOTE:**  Any field from the configured data source can be selected as the `Based-on field`. 

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

![Rule dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Rule-dialog.png)

#### Measure condition
Conditional formatting condition: 
![Measure conditon](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Measure-conditon.png)

After applying the conditional formatting: 
![After applying](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Formatting-view.png)

#### Text condition
You can also use the text-based matching for the configured series field as shown in the following screenshots. 

![Text condition](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Text-condition.png)

![Rule applied view](/static/assets/cloud/visualizing-data/visualization-widgets/images/radial-gauge/Rule-applied-view.png)

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
