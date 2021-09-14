---
layout: post
title: Table Visual – Embedded BI Widget | Bold BI Documentation
description: Learn how to create a Table visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/grid/"
platform: bold-bi
control: Grid
documentation: ug
---

# Configuring and Formatting Grid

`Grid` allows you to showcase the ranking relationship by the vertical arrangement of items ordered from top to bottom.

![Grid widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid.png)

## How to configure the table data to Grid

> **NOTE:**  Before adding the Grid widget to the design layout, make sure to **create the data source**. You can refer to this [section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

To construct a grid, a minimum requirement of one column is needed. You can visualize both measure, calculated measure, and dimension column data in the grid control. You can also add a column that is hidden from the view by adding the column to the hidden columns section. The data of these columns will be hidden from the view but can be used for filtering other widgets in the dashboard.

The following steps explains data configuration of grid:

### Step 1: Creating a grid widget

1. Drag and drop the Grid control icon from the toolbox into the design panel. You can find control by searching in the toolbox.

![Adding grid](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/adding-grid.png)

2. Resize the widget as required. 

![Resizing widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/resizing.png)

### Step 2: Configuring data into the widget

1. Click the `Properties` icon in the configuration panel.

![Properties icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

2. The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.

![Assign data click](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/assign-data-click.png)

3. The `ASSIGN DATA` tab will be opened with available columns from the connected data source.

![Data pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/data-pane.png)

#### Column section

Bind column by dragging and dropping element from `Measures` or `Dimension` section to `Columns` section.

![Column section](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/column-section.png)

**Image: Visualization of grid widget after configuration.**

![After adding column](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/configured-widgets.png)

> **NOTE:**  1000 records are displayed by default for the optimized Grid rendering performance (100 records in mobile view) and then additional rows will be scrolled virtually on-demand.

> **NOTE:**  If any of the Grid columns have conditional formatting, bar template, or KPI applied only 100 records will be fetched by default and then scrolled on-demand.

#### Hidden column section

You can drag and drop the elements to `Hidden Columns` if required. Based on the hidden column elements, the values will be shown in grid widget.

![Hidden column configuration](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/hidden-column.png)

### Step 3(Optional): Settings menu options

You can `Rename,` `filter,` `format,` and `sort` the data displayed in the widget from the settings menu options.  To open the `settings menu,` click the `settings icon.`

![Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/settings-click.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/rename-menu.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Aggregation type](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/aggregation-type.png)

#### Filtering data

You can use the filters to change the values by selecting the `Filter` option. For more details, refer to the [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure format option](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/measure-format.png)

**Image: Grid widget after applying the measure formatting**

![Applied measure formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/applied-measure-formatting.png)

## How to format grid widget

You can format the grid for better illustration of the view that you require using the settings available in `Properties` tab.

### General settings

![General settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/general-settings.png)

#### Name 

This allows you to set `title` for this grid widget.

#### Subtitle

This allow you to set `subtitle` for this grid widget.

#### Description

This allows you to set a brief explanation about this grid widget.

### Basic settings

![Basic settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-basicsetting.png)

#### Allow sorting

You can toggle the interactive sorting of columns in grid control using this option. `It is enabled by default.`

#### Fit to content

The columns in the grid can be made to auto-size based on the length of the content of the column. `This option is not enabled by default.`

#### Allow Text Wrap

This allows you to wrapping whole the text if text length is high.

#### Horizontal grid lines

You can enable or disable horizontal grid lines in the grid control. `This option is enabled by default.`

#### Vertical grid lines

You can enable or disable vertical lines in the grid control. `This option is enabled by default.`

#### Show Border

This allows you to enable or disable the border of the grid control. This option is enabled by default.

#### Enable Alternative Row

This allows you to differentiate `alternative rows` of the grid by the background color. If you enable this property, the alternative rows change their background color as `#F7F7F7` by default. It can be customized from the `Content Settings` section.

![Grid Row Height](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-alternativerowcolor.png)

### Header Settings

This section allows you to format the grid header visibility, color, and font-size.

![Grid Row Height](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-headersettings.png)

#### Show Header

This allows you to enable or disable the grid header. This option is enabled by default.

#### Foreground

You can customize the header font color. The default color of the header font is `#2d3748.`

#### Background

You can customize the header background color. The default color of the header background is `#f3f7fa.`

#### Row Height

You can customize the height of the grid header by increasing or decreasing the values. 

#### Auto Font Size

This property picks auto font-size for grid header when it is enabled, otherwise it allows you to choose fixed font-size from `Font Size` property. This option is enabled by default.

#### Font Size

You can enable this property by disabling `Auto Font Size,` which allows you to change the font size of the grid header.

#### Padding

You can increase or decrease the space between the border and the header by adjusting the `padding` option. The value can range between 1 and 20.

![Header  Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-padding-change.png)

![Header change Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-padding-change-value.png)

### Content Settings

This section allows you to format the grid row height, color, and font-size.

![Grid Row Height](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-contentsetting.png)
#### Foreground

You can customize the font color. The default color of the font is `#000000.`

#### Background

You can customize the background color. The default color of the background is `#ffffff.`

#### Alternative Foreground

You can customize the font color of alternative rows. The default color of the alternative font is `#000000.` This property can be displayed by enabling the `Enable Alternative Row.`

#### Alternative Background

You can customize the background color of alternative rows. The default color of the alternative background is `#f7f7f7.` This property can be displayed by enabling the `Enable Alternative Row.`

#### Row Height

You can customize the height of the grid rows. The default value is 32 and maximum value is 120.

#### Auto Font Size

This property picks auto font-size for grid rows when it is enabled, otherwise, it allows you to choose fixed font-size from the `Font Size` property. This option is enabled by default.

#### Font Size

You can enable this property by disabling `Auto Font Size,` which allows you to change the font size of grid content.

#### Padding

You can increase or decrease the space between the border and the header by adjusting the `padding` option.

**After customizing the content settings**

![Content  Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-content-change.png)

![Content Customization color](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-contentcustomized.png)

### Filter

![Filter settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/filter-settings.png)

#### Allow filter

This allows you to enable a filter box for each column in the grid for easy filtering of data using this option.

The below filtering options are supported in `Allow filtering`:

For Measure Fields

* `<[numeric value]` - Returns the value less than the numeric value
* `<=[numeric value]` - Returns the value less than or equal to the numeric value
* `>[numeric value]` - Returns the value less than the numeric value
* `>=[numeric value]` -Returns the value less than or equal to the numeric value
* `[numeric value]` - Return the value equal to the numeric value

For Dimensional Fields

* `[text]` - It perform contains operation
* `[text]*` - It performs start with operation
* `*[text]` - It performs ends with operation
* `[text1],[text2]` - search multiple text by using `,`

#### Act as master widget

This allows you to define this grid widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this grid widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical top N filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When the Hierarchical Filter option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Column settings

This section allows you to format the grid column based on alignment, width, and KPI customization.

![Column settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-columnSetting.png)

#### Column Settings

This allows you to set width and align each column of the grid.

If you click the `Customize` button, the window will render like this. 

![Column customize button](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/grid-columnalign.png)

***Header Align*** - You can align the header of the column by left, right, and center alignment for each column.

***Content Align*** - You can align the content of the column by left, right, and center alignment for each column.

***Column Width*** - You can specify the width for a particular column by entering numeric values in the textbox. To set width to default, clear the entered value from the textbox.

You can add `Key Performance Indicator (KPI)` columns to grid control by navigating to the KPI Expression window by clicking the Add KPI button from the property panel at the top.

#### Key Performance Indicator (KPI)

A Key Performance Indicator changes each column color depending on its relation to a target line value.

#### Creating a KPI Column 

1. Click the `+` button to create a new KPI column. 

![Add KPI](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/add-kpi.png)

2. It will open the `KPI Expression` dialog. 

![KPI Expression dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/kpi-dialog.png)

3. From the `KPI Expression` dialog, you can specify the name of the KPI and the column whose values need to be considered as actual values, and the column that needs to be considered as a target.

4. The value type can be set based on which the KPI will be calculated. The following value types are available:

    * Actual Variation (Default)
    * Actual Value
    * Percentage of variation
    * Percentage of target
    * Value and Percentage

5. The result can be set to showcase the result as gain or loss based on which the value will be visualized. You can choose the type as value or graphical bar to showcase the data in the column.

#### KPI column measure filtering 

The KPI column can be filtered based on the measure values bind to the KPI. You can set measure filter by clicking the filter icon button, which will open the Measure Filter dialog from where you can specify the column and the condition for filtering the data showcased.

![Filter icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/filter-icon.png)

![Filtering dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/filtering-dialog.png)

#### KPI Column measure formatting 

The values showcased in KPI column can be formatted as any other measure column. You can open the Measure Formatting dialog box by clicking the `format` KPI column button. This allows you to handle different formatting options such as display type, representation, decimal places, and currency culture to the respective KPI column added.

![Format icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/format-icon.png)

![Measure formatting dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/formatting-dialog.png)

#### Editing the saved KPI column 

You can Edit KPI column by clicking the `Edit` KPI column icon.

![Edit KPI column](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/edit-kpi-column.png)

#### Deleting a KPI column 

You can delete KPI column by clicking the `Delete` KPI column.

![Delete KPI column](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/delete-kpi-column.png)

>This action cannot be undone. 

### Formatting

You can define the column value represented as text, bar, or condition-based coloring. This lists out the columns, which are added to the grid widget. 

![Column settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/formattingdatalist.png)

For each of those columns, the value representation can be configured using the options displayed at the right side.

![Configured columns](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/formattingradiofield.png)

#### Value 

Select value as display type to get the column values represented as it is.

![Value representation](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/value-representation.png)

#### Bar

This property allows you to configure the color, shape, and range of progress bar from the `Bar Settings` dialog.

To customize the progress bar, open the `Bar Settings` dialog by selecting the `Bar` radio button from the `Formatting` section.

Dialog can be opened by selecting the `Bar` radio button for initial configuration, thereafter, click the `Customize` button.

![Bar setting](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/bar.png)

***Hide Bar Text*** Text of the progress bar can be able to enable or disable. By default, the text is enabled for the progress bar.

***Bar Text***  The Progress bar text color can be changed by using this property.

***Positive Bar*** The Progress bar background color for positive values can be changed.

***Negative Bar*** The Progress bar background color for negative values can be changed.

***Bar Style***  This property allows you to change bar shape. The dropdown contains two shapes `Cylinder` and `Rectangle`.

![Bar shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/barshape.png)

***Minimum*** The minimum property renders the progress bar from the given value. It contains two modes in the dropdown to configure the minimum value.

*Lowest Value* - It takes the default minimum value to render the progress bar.

*Customize* - Selecting this property will enable the text box. Users can be able to customize the minimum value, by entering a numeric value in the text box.  

***Maximum*** The maximum property renders the progress bar up to the given value. It contains two modes in the dropdown to configure the maximum value,

*Highest Value* - It takes the default maximum value to render the progress bar.

*Customize* - Selecting this property will enable the text box. Users can be able to customize the maximum value, by entering a numeric value in the text box.  

Click the `OK` button to apply the changes to the grid.

![Formatting progress bar](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/formattingdatabar.png)

#### Advance setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/embedded-bi/visualizing-data/visualization-widgets/grid/#how-to-apply-conditional-formatting-in-grid) for more details. 

![Advance settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/advance-settings.png)

![Advance settings Customization](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/advancesettings-customization.png)

### Link

![Linking](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/linking.png)

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

## How to apply conditional formatting in grid

If you have the requirement to highlight any data based on some conditions, you have to enable the advanced formatting option.

### How to enable advanced formatting

In the `properties` pane, under the `Formatting section`, click the `Advanced Setting` radio button.

![Enable Advanced Setting](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/advanced-setting.png)

This will open the `Conditional Formatting` dialog.

![Conditional Formatting dialog](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/conditional-formatting-dialog.png)

### Color types

**Gradient:** You can customize the cell background color of the grid columns using the gradient based conditional formatting. This is the default mode. 

**Rule based:** This allows you to customize the cell color and the text style of the grid columns.

### Gradient mode

#### Based on field

You can choose the field from the Based-On section to apply the conditions from the highlighted drop-down.

![based on field](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/based-on-field.png)

#### Summary type

You can select the summary type for the selected measure field.

![Aggregation type of based on field](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/summary-type.png)

#### Low, mid, and high values

You can define your range by entering the low, mid, and high values. 

![Condition values](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/condition-values.png)

> **NOTE:**  It is optional, if no value is entered, then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

### Rule bases mode

#### Value type

The value type drop-down allows you to choose whether to apply the direct value (specific number like three goals, order ID 10248) or percentage (values above 30% or 50 %).

![Value type](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/value-type.png)

#### Condition name

You can give a meaningful name to the applied conditions using the highlighted text box.

![Condition name](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/condition-name.png)

#### Condition type

Choose the condition for measure field from the highlighted conditions.

![Numeric conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/numeric-condition.png)

If you have selected the dimension as a based-on field and want to use text condition, the following text-based conditions are available.

![Text conditions](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/text-conditions.png)

> **NOTE:**  The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

Enter the condition value.

![Condition value](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/condition-value.png)

#### Font style

Allows you to choose the title font style. (`Bold, Italic, Underline, and Superscript`).

#### Case sensitivity

For the dimensions, the case sensitive option is provided to choose whether the entered value is case sensitive or not.

![Case sensitivity](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/case-sensitivity.png)

#### Colors and icons 

Select the checkbox provided near the options to customize the properties, similarly, click the font style icons for applying them as shown in the following screenshot.

![Icons](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/icons.png)

*Figure: Grid widget the applied customization*

![Grid with conditional formatting](/static/assets/embedded/visualizing-data/visualization-widgets/images/grid/formatted-result.png)


### Container appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title alignment

This allows you to handle the alignment of widget title to either **left, center, or right**.

### Title color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified font size to the widget title if the Title Auto Font Size is disabled. The value can range between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the Subtitle Auto Font Size is disabled. The value can range between 10 and 32.

### Show Border

This allows you to toggle the visibility of border surrounding the widget.

### Corner Radius

This allows you to apply the specified radius to the widget corners if the Show Border is enabled. The value can range between 0 and 10.

### Transparency

You can change the transparency from 0 to 1.

### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show header

This allows you to enable or disable the widget title of the Grid. 

#### Allow maximize view

This allows you to enable or disable the maximized mode of the Grid. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV export

This allows you to enable or disable the CSV export option for the Grid. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel export

This allows you to enable or disable the Excel export option for the Grid. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in the viewer.

#### Allow image export

This allows you to enable or disable the image export option for the Grid. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in the viewer.

#### Allow PDF export

This allows you to enable or disable the PDF export option for the Grid. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable comments

This allows you to enable or disable comment for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow Viewing of underlying data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin widget

This allows you to pin the widget.