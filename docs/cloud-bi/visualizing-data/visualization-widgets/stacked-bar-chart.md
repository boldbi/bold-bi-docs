---
layout: post
title: Stacked Bar Chart – Cloud BI | Bold BI Documentation
description: Learn how to create a Stacked Bar Chart visual in Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Stacked Bar Chart
documentation: ug
---

# Stacked Bar Chart

Stacked Bar chart allows you to compare the multiple measures through the bars stacked one after the other horizontally.

![Stacked Bar Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stacked-barchart.png)

## How to configure the flat table data to stacked bar chart?

Stacked Bar chart needs a minimum of 1 value element and 1 column element to showcase. The **measure** or **expression** field that you would like to analyze can be dropped into the Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto **Rows block** in addition.

The following steps explains how to configure data to stacked bar chart.

1.  Drag and drop the stacked bar chart into the canvas and resize it your required size.

![Drag and drop the stacked bar chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/drop-widget.png)

2.  Click the **Data Source** button in the configuration panel.

![Data Source](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the **CREATE NEW** button to launch a new connection from the connection type panel.

![Datasource button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the **Microsoft Excel** Connection type is selected for demonstration) of the listed connection type button shown.

![Datasource list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the **NEW DATA SOURCE** configuration panel, fill the connection type and related details. Click the **Connect** button

![Connect](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, and click the **Save** button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the **Properties** button in the configuration panel, property pane opens. Now, switch to the **ASSIGN DATA** tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Stacked bar assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/assign-data.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/assign-data-section.png)

9.  You can add the required data from the **Measures** and **Dimensions** into the required field.

#### Adding Value(s)

You can add more than one **Measures** into **Y Values** field by drag and drop the required measure.

![Add more than one Measures](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/add-measure.png)

Click the **Settings** option to change the name by using the **Rename** option and the required summary type from the available summary types shown in **Settings.**

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/settings.png)

#### Filtering data

You can filter the data to be displayed in funnel chart by using filter. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/filter-option.png)

#### Formatting data

You can format the data to be displayed in the chart by using format option. For more details, refer [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Formatting measure type column](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/format-option.png)

#### Remove Fields

To remove the added value fields click highlighted button.

![Click highlighted button](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/removebutton.png)

You can add more than one column from **Dimensions** field into **Y Values** field.

#### Adding Columns

You can add more than one value into **Columns** field. If you add more than one column, then drill down option enabled automatically.

![Add more than one value into Columns](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/adding-columns.png)

Stacked bar chart will be rendered like this

![Stacked bar chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stacked-barchart.png)


You can change the **Settings**.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/column-settings.png)

#### Sorting data

You can **Sort** the dimension data using **Sort** option under **Settings** menu list. To apply Sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/).

![Sort](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/sort-option.png)

#### Filtering data

You can apply filters by selecting **Filter(s)** in settings. For more details, refer to the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring filter for dimension column](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/filter-option-column.png)

To show all records click on **Show All Records**.

Similarly you can add the **Measures** and **Expression Columns** into column field.

#### Multi-Level Drill Down

Add more than one value to the **Columns** field, an alert message will be shown. Click **Yes to enable the option.

> **NOTE:**  If you click **No**, a single value will be added to the **Columns** field.

![Drill alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbardrill.png)

#### Adding Rows

You can drag and drop the **Dimension** into the **Rows** field. 

![Adding Rows](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-row.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

This will render stacked bar chart in series.

![Stacked bar chart in series](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/stackedbarchart-series.png)

## How to format stacked bar chart?

You can format the stacked bar chart for better illustration of the view that you require, through the settings available in **Properties** tab.

To configure data into stacked bar chart follow the steps

1. Drag and drop the stacked bar chart into canvas and resize it to your required size.

2. Configure the data into stacked bar chart.

3. Focus on the stacked chart and click on widget settings.

The property window will be opened.

![Property click](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/widget-settings.png)

![Property window](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/property-window.png)

You can see the list of properties available for the widget with default value.

#### General Settings

#### Name

This allows you to set **title** for this stacked-column chart widget.

#### Subtitle

This allows you to set **subtitle** for this stacked-column chart widget.

#### Description

This allows you to set brief explanation about this stacked-column chart widget.

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/general-settings.png)

#### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/basic-settings.png)

#### Chart type and axis

Click the **Change** button to open the **Chart Type and Axis Settings** dialog. 

![Chart type and axis settings dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-type.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another convertible chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis, if you enable this option, the selected field will be plotted as the secondary axis. 

![Secondry axis in chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/secondary-axis.png)

#### Enable Animation

It animates the measure values when you toggle the **Enable Animation**.

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

#### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-color.png)

#### Customize

You can customize the legend text through the **Custom Legend Settings** dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-customization.png)

![Legend customization Change](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-customization-change.png)

#### Legend Shape

This allows you to change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a **Circle.**

![Show Legend shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in **Series.**

![Show Legend shape Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the **Show Legend**.

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/legend-title.png)
 
#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-value-label.png)

#### Value Label Customization

This allows you to customize the visibility of the value labels.

![Value labels customization change](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-value-label-customization.png)

![Value labels customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-value-label-customization-change.png)

#### Value Label Color

This allows you to customize value label's color.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-value-label-color-change.png)

#### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/label-rotation.png)

#### Value Label Suffix

Allows you to enable the Suffix value text to the value labels. 

#### Suffix Value

Allows you to set\edit suffix value to the value labels. 

![Suffix Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/suffix-value.png)

#### Show items with no data

This allows you to show data, which column does not have value.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-gap.png)

### Empty Point Mode

This allows you to handle the display mode of the data point values is null or undefined when the **Show Items With No Data** is enabled.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-gap.png)
 
### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-zero.png)

### Average

This option allows you to display the null or undefined values with the average value.

![Empty Point Mode Average](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/chart-average.png)

#### Column Width

This option allows you to increase or decrease the width of the column by using **Column Width**.

![Column Width Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/column-width-customization.png)

![Column Width](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/column-width.png)

#### Column Spacing

This option allows you to increase or decrease the space between the columns by using the **Column Spacing**.

![Column Spacing Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/column-spacing-customization.png)

![Column Spacing](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/column-space.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the **Format** button. For more details, refer to this [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/axis-format.png)

#### Link

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/linking.png)

#### Axis

![Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/axis-settings.png)

This section allows you to customize the axis settings in chart. 

#### Title color

This allows you to customize the axis title color.

#### Label color

This allows you to customize the axis label color.

#### Show Category Axis

This allows to enable the visibility of **Category Axis**.

![Show Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-category-axis.png)

#### Show Category Axis Title

This allows you to enable the visibility of **Category Axis**.

![Show Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-category-axis-title.png)

#### Category Axis Title

This allows you to edit the **Category Axis** title for chart. It will reflect in x-axis name of chart.

![Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/editcategoryaxistitle.png)

#### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the **Category Axis**. 

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode Trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/trim.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode Hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/hide.png)

#### Trim Axis Labels

This option allows you to trim the axis labels based on the **Maximum Label Width** property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/trimming-axis-labels.png)

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and also it can be made customizable when the **trim axis label** option is enabled.

![Label maximum width](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/maximum-label-width.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/axis-label-rotation.png)

### Auto Interval

This allows you to dynamically calculate the **axis intervals.** When you resize the chart, the axis intervals are displayed differently depending on their given data.

#### Show Primary Value Axis

This allows you to enable the **Primary Value Axis** for chart. 

![Show Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-primary-value-axis.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of **Primary Value Axis** title of chart.

![Show Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/show-primary-value-axis-title.png)

#### Primary Value Axis Title

This allows you to edit the **Primary Value Axis** title. It will reflect in y-axis name of chart. 

![Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/edit-primary-value-axis.png)

#### Axis Range Settings

This allows you to manually set the Minimum, Maximum and Interval values of primary value axis through the **Axis Range Settings** dialog.

![Axis Range Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/axisrangesettings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Output](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/axisrangeoutput.png)

#### Grid Lines

![Grid Lines](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/gridlines.png)

#### Primary value Axis

This allows you to enable the **Primary Value Axis** gridlines for the stacked bar chart.

![Primary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/primaryaxis-gridlines.png)
 
#### Category Axis

This allows you to enable the **Category Axis** gridlines for the stacked bar chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/categoryaxis-gridlines.png)

#### Secondary value Axis

This allows you to enable the **Secondary value Axis** gridlines for the stacked bar chart.

![Secondary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/secondary-gridlines.png)

#### Formatting

This allows you to customize the color of the widget.

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/formatting-option.png)

![Formatting color change](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/formatting-color.png)

### Font Settings 

Font settings section allows you to enable the auto font-size.

### Auto Font Size

On enabling **auto font size,** the size of the font is adjusted automatically based on the screen resolution.

![Font settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/fontsettings.png)

#### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/stacked-bar-chart/filter.png)

#### Act as Master Widget

This allows you to define this stacked bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this stacked bar chart widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top **N** filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added. 

When the **Hierarchical Filter** option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This sections allows you to customize the **Container Appearance** for the stacked bar chart widget.

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text **color** to the widget title.

### Title Auto Font Size

**On enabling Auto Font Size, the font size of the title will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

**On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically based on the screen resolution.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Show Border

This allows you to toggle the visibility of **border** surrounding the widget.

### Corner Radius

This allows you to apply the specified **radius** to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows you to set the **background image** for the stacked bar chart widget.

### Background Color

This allows you to set the **background color** to the stacked bar chart widget.

### Transparency

This property allows you to specify the **transparency** for the **background color.**

### Container actions

This section allows you to customize the **Container actions** for the stacked bar chart widget.

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the **widget title** of the stacked bar chart. 

#### Allow Maximize View

This allows you to enable or disable the **maximized mode** of the stacked bar chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the **CSV export** option for the stacked bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the **Excel export** option for the stacked bar chart widget. Enabling this allows you to export the summarized data of the widget view to **(.xlsx or .xls)** format in the viewer.

#### Allow Image Export

This allows you to enable or disable the **Image export** option for the stacked bar chart widget. Enabling this allows you to export the view of the widget to image format **(.jpg), (.png), or (.bmp)** in the viewer.

#### Allow PDF Export

This allows you to enable or disable the **PDF export** option for the stacked bar chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable **comment** for the dashboard widget. For more details, refer to this [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 

#### Pin widget

This allows you to pin the widget.
