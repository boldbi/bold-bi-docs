---
layout: post
title: Stacked Area Chart – Embedded BI | Bold BI Documentation
description: Learn how to create a Stacked Area Chart visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/stacked-area-chart/"
platform: bold-bi
control: Stacked Area Chart
documentation: ug
---

# Stacked Area Chart

Stacked Area Chart allows you to compare multiple measures through filled curves stacked one after the other vertically.

![Stacked Area Chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart.png)

## How to configure the table data to stacked area chart?

Stacked Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Y Values block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Rows block in addition. 

The following steps explains how to configure data to stacked area chart:

1.  Drag and drop the stacked area chart into a canvas and resize it to your required size.

![Drag and drop the stacked area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/add-stackedareachart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Launch a new connection](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Listed connection type button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![ASSIGN DATA](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked area assigndata](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/areaassigndata.png)

8.  The data tab will be opened with the available measures and dimensions from the connected data source.

![Data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

#### Adding Value(s)

You can add more than one `Measures` into `Y Values` field by drag and drop the required measure.

![Add more than one Measures](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/add-measure.png)

Click the `Settings` option to change the name by using the `Rename` option and required summary type from the available summary types shown in `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in funnel chart by using filter. For more details, refer to the[filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using format option. For more details, refer to the[measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type column](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/format-option.png)

To remove the added value fields click highlighted button.

![Remove the added value](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/removebutton.png)

You can add more than one column from `Dimensions` field into `Value(s)` field.

#### Adding Columns

You can add more than one value into `Columns` field. 

![Add more than one column](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/adding-columns.png)

Stacked area chart will be rendered like this

![Stacked area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart.png)

You can change the `Settings.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/column-settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/rename.png)

### Sorting data

You can `Sort` the dimension data using  Sort option under `Settings` menu list. To apply sorting for the data, refer to the[Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting#dimension-column/).

![Sort and Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/sort-option.png)

### Filtering data

You can apply filters by selecting filters option in settings. For more details, refer to the[filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension column](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/filter-option-column.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

### Multi-Level Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No,` a single value will be added to the `Columns` field.

![Drill alert](/static/assets/embedded/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareadrill.png)

### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Adding Rows](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-row.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render stacked area chart in series.

![Render stacked area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-series.png)


## How to format stacked area chart?

You can format the stacked area chart for better illustration of the view that you require, through the settings available in `Properties` tab.

To configure data into stacked area chart follow the steps

1. Drag and drop the stacked area chart into canvas and resize it to your required size.

2. Configure the data into stacked area chart.

3. Focus on the stacked area chart and click on widget settings.

![Format stacked area chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-format.png)

The property window will be opened.

![Property window](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/property.png)

#### Name

This allows you to change the `title` for this stacked area chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/title.png)

#### Subtitle

Allows you to provide the `subtitle` for this stacked area chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/Subtitle.png)

#### Description

Allows you to provide the `description` about this stacked area chart widget.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a chart.

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/tooltip.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type and Axis Settings` dialog. 

![Chart Type](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

### Enable Animation

It animates the measure values when you toggle the `Enable Animation.`

### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-value-labels.png)

If you Disable `Show Value Labels` properties, the dependent properties, which are **color**, **Value label position**, **Value label rotation** and **Value label suffix** will be hidden.

![Show value label](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-label.png)

#### Customize

This allows you to customize the toggle visibility of value labels in each series.

![Show Value Labels Customize](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-value-labels-customize.png)

![Show Value Labels](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-value-labels-output.png)

### Value Label Color

This allows you to customize the value label's color.

![Value label Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/data-label-color-option.png)

![Value label Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/data-label-color.png)

### Value Label Position

This option allows you to customize the value label position in a chart. By default, it is set to ‘Auto,’ so the label position for the stacked area chart will be set to Middle.

![Value label position](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/valuelabelposition.png)

### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-showlabelrotation.png)

### Value Label Suffix

This allows you to show or hide the suffix value of value labels.

### Suffix Value

This allows you to customize the suffix value of value labels.

![Suffix Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/suffix-value.png)

**Note:** When Increased the height and number of data in chart the value label was hidden. Use label rotation property to visible the label.

### Show Marker

This allows you to toggle the visibility of marker from label to adorn each data point in a chart series.

![Show Marker](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data which column does `not` have value.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is `null or undefined.`

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-gap.png)

### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Zero](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-average.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Page Size

This option allows you to set number of records needs to be fetched on initial load.

### Legend Settings

![Legend settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-settings.png)

### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-label-color.png)

#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legendcustomize.png)

![Legend customization Change](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legendcustomize-change.png)

**Custom Legend Settings when giving Row Section**

You can customize the legend text using the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

![Legend customization For Row](/static/assets/embedded/visualizing-data/visualization-widgets/images/legendcustomization.png)

***Group***

`{{ : Row }} ({{ : Y Value }})`

![Legend customization For Row](/static/assets/embedded/visualizing-data/visualization-widgets/images/legendcustomizationgroup.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top, and Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle.`

![Show Legend shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in a `Series.`

![Show Legend shape Series](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend.`

![Show Legend Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/legendtitle.png)

#### Text Overflow

This option allows you to customize legend text based on the 'Text Width' property value.

***None***

This option allows you to render legend items without any wrap and trim.

![Legend Overflow None in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart_LegendNone.png)

***Trim***

This option allows you to trim the legend items if its legend exceeds the 'Text Width' value.

![Legend Overflow Trim in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart_Legendtrim.png)

***Wrap***

This option allows you to wrap legend items based on the 'Text Width' value.

![Legend Overflow Wrap in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart_Legendwrap.png)

#### Text Width

This option allows you to set a maximum width for the Legend Items and it is applicable only if text-overflow is set to Trim or Wrap.

![Legend Text Width in chart](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart_Legendwidth.png)

If you uncheck the `Show Legend` property in the property panel, the dependent properties, which are **Legend color**, **Legend position**, **customization button** and **Legend title** are also hidden.

> **NOTE:** For single series, Legend wont be visible. 
### Link

![Link](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/linking.png)

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the[Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Axis Settings

![Axis Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

### Title color

This allows you to customize the axis title color.

![Title color](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/title-color.png)

### Label color

This allows you to customize the axis label color.

![Label color](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/label-color.png)

### Show Category Axis

This allows you to enable the visibility of `Category Axis.`

![Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-category-axis.png)

If you disable the `Show Category Axis` option, dependencies properties, which are **Show axis title**, **Axis title text**, **Trim overflow mode**, **Trim axis labels**, **Label Rotation** and **Auto Interval** option will be hidden.

![Show Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-axis.png)

### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-categoryaxistitle.png)

### Category Axis Title

This allows you to edit the `Category Axis` title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-editcategoryaxistitle.png)

If we uncheck the `Show Axis Title` property, the Axis title text box property will be hidden.

![Show Category axis title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-axis-title.png)

### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis.`

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-category-axis.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/hide-lable.png)

#### Trim Axis Labels

This option allows you to `trim` the axis labels based on the `Maximum Label Width` property value.

#### Label Maximum Width

This option allows you to set a `maximum width` for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/maximum-label-width.png)

![Trimmed label](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/trimming-label.png)

### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/axis-label-rotation.png)

#### Auto Interval and Interval

![Axis interval](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-auto-interval.png)

By default, the 'Auto Interval' property is enabled. Auto Interval property is used to set auto intervals based on the number of data points for category axis labels. If the user wants to customize the interval, then the user needs to disable the auto intervals and set required interval.

![Axis interval Value](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chart-interval.png)

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for chart. 

![Show Primary Value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/show-primary-value.png)

If you disable the `Show Primary Axis` option, dependencies properties, which are **Axis title**, **Axis title text**, **Axis type** and **Axis Format** properties will be hidden.

![Show primary value axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/primary-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of `Primary Value Axis` title of chart.

![Show Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-primaryvalueaxistitle.png)

### Inverse Axis

By default, the chart axis showing positive values on the top and negative values at the bottom. But, there are times when we need to inverse the axis and show the negative values on the top and positive values on the bottom. For Example, When we bind the temperature data to the chart and to display the negative values on the top, we can make use of this property.

On enabling this property the chart negative values will display on the top and positive values display on the bottom.

![Inversed axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/inverseaxis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum, and Interval values of primary value axis through the `Axis Range Settings` dialog.

![Axis Range Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-axisrangesettings.png)

It will reflect in the primary value axis of chart.

![Axis Range Output](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stackedareachart-axisrangeoutput.png)

#### Grid Line

![Grid Line](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/chartgridlines.png)

#### Primary value Axis

This allows you to enable the `Primary Value Axis` gridlines for the stacked area chart.

![Primary value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/primary-value-axis.png)

#### Category Axis**

This allows you to enable the `Category axis` gridlines for the stacked area chart.

![Category Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/category-axis.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart.

![Secondary value Axis](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/secondaryaxis.png)

### Formatting

This allows you to change the `color` for the stacked area chart.

![Format Colors](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/formatting.png)

It will reflect in the stacked area chart.

![Formating Data Colors](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/formatting-color.png)

### Series Palette

This allows you to apply color for chart series either by using a default palette or a custom color palette. By default, the colors will be applied using the default palette. This series of settings will be visible only if we configured the row section in the chart.

![Series Palette](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/series-palette.png)

#### Use Default Palette

This Option allows you to apply default color for chart series.

By toggle off the `Use Default Palette` option, the `Color Mapping Type` will be shown.

![Color Mapping option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/color-mapping-type.png)

#### Color Mapping Type

Using the Color Mapping type, you can apply the colors to the series either based on data or index.

![Color Mapping Type option](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/color-mapping-type-options.png)

***Data***

It allows you to apply color for chart series based on data. If you want to apply a specific color to specific data(i.e. Violet color for 2021, Sky Blue color for 2022, and green for 2020), you can use Data based color mapping. By default, the Color Mapping Type will be `Data`.

![Color Mapping Type Data](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stacked-area-chart-data-type-color.png)

***Index***

It allows you to apply color for chart series based on `Index`. Such that the colors are maintained based on index even if data is changed. It shows only 15 different colors. After that, the color will be repeated from above colors.

For example, If you are displaying the countries based on the increasing order of the case count, then the index-based color mapping will be useful to set the colors based on the rank. Say red color to the top, then the red color will be maintained for the country having the largest case count.

![Color Mapping Type Index](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/stacked-area-chart-index-based-color.png)

**Note:** We prefer to use Index based color customization only for minimum data(upto 15 series).

### Font settings

This section allows you to customize the font size of chart elements.

![Font settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/font-settings.png)

#### Auto font Size and font size

By default, the 'Auto Font Size' property is enabled. Auto font-size property is used to set font size based on the dashboard viewing client machine resolution. If the user wants to customize or set fixed font size, then the user needs to disable the auto font size and set required font size.

### Filter

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/filter.png)

### Act as Master Widget

This allows you to define this 100% stacked area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

### Ignore Filter Actions

This allows you to define this 100% stacked area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

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

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the[view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the chart has been placed with less than 7 columns chart Y-axis labels, Y-axis titles will be hidden.

![Widget Element](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/Y-axis-label.png)

When the chart has been placed with less than 6 rows, chart X-axis labels, X-axis titles and gridlines will be hidden.

![Widget Element](/static/assets/embedded/visualizing-data/visualization-widgets/images/stacked-area-chart/X-axis-label.png)