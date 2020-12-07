---
layout: post
title: Table Visual – Cloud BI Widget | Bold BI Documentation
description: Learn how to create a Table visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Grid
documentation: ug
---

# Configuring and Formatting Grid

`Grid` allows you to showcase the ranking relationship by vertical arrangement of items ordered from top to bottom.

![Grid widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid-widget.png)

## How to configure the table data to Grid

> **NOTE:**  Before adding the Grid widget to the design layout, make sure to **create the data source**. You can refer to this [section](/cloud-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

To construct a grid, a minimum requirement of one column is needed. You can visualize both measure, calculated measure, and dimension column data in the grid control. You can also add a column that is hidden from the view by adding the column to the hidden columns section. The data of these columns will be hidden from the view but can be used for filtering other widgets in the dashboard.

The following steps explains data configuration of grid:

### Step 1: Creating a grid widget

1. Drag and drop the Grid control icon from the tool box into design panel. You can find control in tool box by search.
![Adding grid](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/adding-grid.png)

2. Resize the widget as required. 
![Resizing widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/resizing.png)

### Step 2: Configuring data into the widget

1. Click the `Properties` icon in the configuration panel.
![Properties icon](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/properties-icon.png)

2. The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.
![Assign data click](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/assign-data-click.png)

3. The data tab will be opened with available columns from the connected data source.
![Data pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/data-pane.png)

#### Column section

Bind column by dragging and dropping element from `Measures` or `Dimension` section to `Columns` section.

![Column section](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/column-section.png)

*Image: Visualization of grid widget after configuration.*

![After adding column](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/configured-widgets.png)

> **NOTE:**  * 1000 records are displayed by default for optimized Grid rendering performance (100 records in mobile view) and then additional rows will be scrolled virtually on demand.
> **NOTE:** 
> **NOTE:**  * If any of the Grid columns have conditional formatting, bar template or KPI applied only 100 records will be fetched by default and then scrolled on demand.

#### Hidden column section

You can drag and drop the elements to `Hidden Columns` if required. Based on the hidden column elements, the values will be shown in grid widget.

![Hidden column configuration](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/hidden-column.png)

### Step 3(Optional): Settings menu options

You can `filter`, `format`, and `sort` the data displayed in the widget from the settings menu options.  To open the `settings menu`, click the `settings icon`. 

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/cloud-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Aggregation type](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/aggregation-type.png)

#### Sorting

You can Sort the data using `Sort` option under Settings menu list. Click [here](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/) for the detailed steps.

![Sorting menu item](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/sorting-menu.png)

#### Filtering data

You can use Filters to change the values by selecting the Filter option. For more details, refer to [Measure filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/filter-option.png)

#### Measure formatting
You can format the elements by selecting the Format option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure format option](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/measure-format.png)

*Image: Grid widget after applying the measure formatting*

![Applied measure formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/applied-measure-formatting.png)

#### Renaming fields

The grid widget column names can be edited by using the `Rename` option provided in the settings menu. 

*Figure: Default column names after widget configuration*
![Column names](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/column-name.png)

1. Click the settings menu icon and select the `Rename` menu option.
![Rename menu item](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/rename-menu.png)

2. The column name can become editable now. Enter the required text and press `enter` key.
![Editing field name](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/edit-name.png)

3. Now, the changes will be reflected in the grid widget.
![After rename](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/after-renaming.png)

## How to format grid widget

You can format the grid for better illustration of the view that you require using the settings available in `Properties` tab.

### General settings

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/general-settings.png)

##### Name 
This allows you to set `title` for this grid widget.

##### Subtitle
This allow you to set `subtitle` for this grid widget.

##### Description
This allows you to set brief explanation about this grid widget.

### Basic settings

![Basic settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/grid_basicsetting.png)

#### Allow sorting

You can toggle the interactive sorting of columns in grid control using this option. `It is enabled by default`.

#### Fit to content
The columns in the grid can be made to auto size based on the length of the content of the column. `This option is not enabled by default`.

#### Allow Text Wrap
This allows you to wrapping whole the text if text length is high.

#### Horizontal grid lines
You can enable or disable horizontal grid lines in the grid control. `This option is enabled by default`.

#### Vertical grid lines
You can enable or disable vertical lines in the grid control. `This option is enabled by default`.

#### Alternative Row color
This allows you to differentiate alternative rows of the grid by the background color. If you enable this property, alternative rows change its background color by `#F7F7F7`.

#### Row height
You can customize the height of the grid rows. The default value is 32 and maximum value is 120.
![Grid Row Height](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/grid_row_height.png)

### Column Header
This section allows you to format the grid cells. 
![Formatting properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_columnHeader.jpeg)

#### Show Header
This allows you to show or hide the grid column header. The header is shown by default.

#### Header foreground color
This allows you to select the color for the header row’s foreground. `The default value is #ffffff`. 

#### Header background color
This allows you to select the color for the header row’s background. `The default value is #f67280`. 

![Header background color](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/header-background-color.png)

### Filter

![Filter settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/filter-settings.png)

#### Allow filter

This allows you to enable a filter box for each column in the grid for easy filtering of data using this option.

#### Act as master widget

This allows you to define this grid widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this grid widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical top N filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When Hierarchical Filter option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Column settings

#### Key Performance Indicator (KPI)

![Column settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/grid_columnSetting.png)

#### Column Alignment

This allows you to align each column of the grid.

If you click the `Customize` button, the window will render like this. 

![Column customize button](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/grid_columnalign.png)

***Header Align*** - You can align the header of the column by left, right, and center alignment for each column.

***Content Align*** - You can align the content of the column by left, right, and center alignment for each column.

You can add `Key Performance Indicator (KPI)` columns to grid control by navigating to KPI Expression window by clicking the Add KPI button from property panel at top.

#### Creating a KPI Column 

1. Click the `+` button to create a new KPI column. 
![Add KPI](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/add-kpi.png)

2. It will open the `KPI Expression` dialog. 
![KPI Expression dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/kpi-dialog.png)

3. From the `KPI Expression` dialog, you can specify name of the KPI and the column whose values need to be considered as actual value and the column that need to be considered as target.

4. The value type can be set based on which the KPI will be calculated. The following value types are available:

    * Actual Variation (Default)
    * Actual Value
    * Percentage of variation
    * Percentage of target
    * Value and Percentage

5. The result can be set to showcase the result as gain or loss based on which the value will be visualized. You can choose the type as value or graphical bar to showcase the data in the column.

#### KPI column measure filtering 

The KPI column can be filtered based on the measure values bind to the KPI. You can set measure filter by clicking the filter icon button, which will open the Measure Filter dialog from where you can specify the column and the condition for filtering the data showcased.

![Filter icon](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/filter-icon.png)

![Filtering dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/filtering-dialog.png)

#### KPI Column measure formatting 

The values showcased in KPI column can be formatted as any other measure column. You can open the Measure Formatting dialog box by clicking the `format` KPI column button. This allows you to handle different formatting options such as display type, representation, decimal places, and currency culture to the respective KPI column added.

![Format icon](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/format-icon.png)

![Measure formatting dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/formatting-dialog.png)

#### Editing the saved KPI column 

You can Edit KPI column by clicking the `Edit` KPI column icon.
![Edit KPI column](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/edit-kpi-column.png)

#### Deleting a KPI column 

You can delete KPI column by clicking the `Delete` KPI column.

![Delete KPI column](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/delete-kpi-column.png)

>This action cannot be undone. 

### Formatting

You can define the column value represented as text, bar, or condition-based coloring. This lists out the columns, which are added to the grid widget. 

![Column settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_formattingDataList.jpeg)

For each of those columns, the value representation can be configured using the options displayed at the right side.

![Configured columns](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_formattingRadioField.jpeg)

#### Value 

Select value as display type to get the column values represented as it is.

![Value representation](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/value-representation.png)

#### Bar

This property allows you to configure the color, shape, and range of progress bar from the `Bar Settings` dialog.

To customize the progress bar, open the `Bar Settings` dialog by selecting the `Bar` radio button from the `Formatting` section.

![Bar Customize button](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_barCustomizeButton.jpeg)

Dialog can be opened by selecting the `Bar` radio button for initial configuration, thereafter, click the `Customize` button.

![Bar setting](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_barSettingDialog.jpeg)

***Hide Bar Text*** Text of the progress bar can be able to enable or disable. By default, the text is enabled for the progress bar.

***Bar Text***  The Progress bar text color can be changed by using this property.

***Positive Bar*** The Progress bar background color for positive values can be changed.

***Negative Bar*** The Progress bar background color for negative values can be changed.

***Bar Style***  This property allows you to change bar shape. The dropdown contains two shapes `Cylinder` and `Rectangle`.

![Bar shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_barShape.jpeg)

***Minimum*** The minimum property renders the progress bar from the given value. It contains two modes in the dropdown to configure the minimum value,

*Lowest Value* - It takes the default minimum value to render the progress bar.

*Customize* - Selecting this property will enable the text box. Users can be able to customize the minimum value, by entering a numeric value in the text box.  

***Maximum*** The maximum property renders the progress bar up to the given value. It contains two modes in the dropdown to configure the maximum value,

*Highest Value* - It takes the default maximum value to render the progress bar.

*Customize* - Selecting this property will enable the text box. Users can be able to customize the maximum value, by entering a numeric value in the text box.  

Click the `OK` button to apply the changes to the grid.

![Formatting progress bar](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/Grid_formattingProgressBar.jpeg)

#### Advance setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/cloud-bi/visualizing-data/visualization-widgets/grid/#how-to-apply-conditional-formatting-in-grid) for more details. 

![Advance settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/advance-settings.png)

### Link

![Linking](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/linking.png)

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Container appearance
![Container appearance properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/container-settings.png)

This allows you to customize the widget container appearance and widget title’s properties, and provides options to enable or disable the widget exporting options. For more detailed information, refer to [container appearance properties](/cloud-bi/visualizing-data/working-with-widgets/customizing-container-appearance/).

## How to apply conditional formatting in grid

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

In the `properties` pane, under the `Formatting section`, click the `Advanced Setting` radio button.

![Enable Advanced Setting](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/advanced-setting.png)

This will open the `Conditional Formatting` dialog.

![Conditional Formatting dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/conditional-formatting-dialog.png)

### Color types

![Modes](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/color-modes.png)

**Gradient:** You can customize the cell background color of the grid columns using the gradient based conditional formatting. This is the default mode. 

**Rule based:** This allows you to customize the cell color and the text style of the grid columns.

### Gradient mode

#### Based on field

You can choose the field from the Based-On section to apply the conditions from the highlighted drop-down.

![based on field](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/based-on-field.png)

#### Summary type

You can select the summary type for the selected measure field.

![Aggregation type of based on field](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/summary-type.png)

#### Low, mid, and high values

You can define your range by entering the low, mid, and high values. 

![Condition values](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/condition-values.png)

> **NOTE:**  It is optional, if no value is entered, then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

### Rule bases mode

#### Value type

The value type drop-down allows you to choose whether to apply the direct value (specific number like three goals, order ID 10248) or percentage (values above 30% or 50 %).

![Value type](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/value-type.png)

#### Condition name

You can give a meaningful name to the applied conditions using the highlighted text box.

![Condition name](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/condition-name.png)

#### Condition type

Choose the condition for measure field from the highlighted conditions.

![Numeric conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/numeric-condition.png)

If you have selected the dimension as a based-on field and want to use text condition, the following text-based conditions are available.

![Text conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/text-conditions.png)

> **NOTE:**  The text-based condition type will be enabled only when the dimension selected is used as the based-on field.

#### Value

Enter the condition value.

![Condition value](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/condition-value.png)

#### Font style

Allows you to choose the title font style. (`Bold, Italic, Underline, and Superscript`).

![Font style](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/font-style.png)

#### Case sensitivity

For the dimensions, case sensitive option is provided to choose whether the entered value is case sensitive or not.

![Case sensitivity](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/case-sensitivity.png)

#### Colors and icons 

Select the checkbox provided near the options to customize the properties, similarly click the font style icons for applying them as shown in the following screenshot.

![Colors](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/colors.png)

![Icons](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/icons.png)

*Figure: Applying the conditional formatting to highlight the stock availability based on ordered count and available count.*

![Apply conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/apply-conditions.png)

*Figure: Grid widget the applied customization*

![Grid with conditional formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/grid/formatted-result.png)