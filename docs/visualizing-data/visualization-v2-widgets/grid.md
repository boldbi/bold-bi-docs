---
layout: post
title: Table Visual - BI Widget (Grid) | Bold BI Documentation
description: Learn how to create a Table visual in Bold BI Embedded dashboard using Grid, configure data fields and other settings.
canonical: "/visualizing-data/visualization-v2-widgets/grid/"
platform: bold-bi
control: Grid
documentation: ug

---

# Configuring and Formatting Grid

The `Grid` allows you to showcase the ranking relationship through the vertical arrangement of items ordered from top to bottom.

![Grid widget](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid.png)

## How to configure the table data to Grid

> **NOTE:**  Before adding the Grid widget to the design layout, make sure to **create the data source**. You can refer to this [section](/working-with-data-sources/creating-a-new-data-source/) to learn how to create a new data source.

To construct a grid, a minimum requirement of one column is needed. You can visualize measure, calculated measure, and dimension column data in the Grid control. You can also add a column that is hidden from view by adding the column to the hidden columns section. The data of these columns will be hidden from view but can be used for filtering other widgets in the dashboard.

The following steps explain data configuration of Grid:

### Step 1: Creating a Grid widget

1. Drag and drop the Grid control icon from the toolbox into the design panel. You can find the control by searching in the toolbox.

![Adding grid](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-adding-grid.png)

2. Resize the widget as required. 

![Resizing widget](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-resizing.png)

### Step 2: Configuring data into the widget

1. Click the `Properties` icon in the configuration panel.

![Properties icon](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-designerpropertiesbutton.png)

2. The `properties` panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.

![Assign data click](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-assign-data-click.png)

3. The `ASSIGN DATA` tab will be opened with available columns from the connected data source.

![Data pane](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-data-pane.png)

#### Column section

Bind columns by dragging and dropping elements from the `Measures` or `Dimension` section to the `Columns` section.

![Column section](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-column-section.png)

**Image: Visualization of Grid widget after configuration.**

![After adding column](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-configured-widgets.png)

> **NOTE:**  By default, 1000 records are displayed for optimized Grid rendering performance (100 records in mobile view), and additional rows will be scrolled virtually on-demand.

> **NOTE:**  If any of the Grid columns have advanced settings, bar template, or KPI applied, only 100 records will be fetched by default and then scrolled on-demand.

#### Hidden column section

If required, you can drag and drop elements to `Hidden Columns`. Based on the hidden column elements, the values will be shown in the Grid widget.

![Hidden column configuration](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-hidden-column.png)

### Step 3(Optional): Settings menu options

You can `Rename`, `filter`, `format`, and `sort` the data displayed in the widget from the settings menu options. To open the `settings` menu, click the `settings icon`.

![Settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-settings-click.png)

#### Renaming fields

The configured field names can be edited using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-rename-menu.png)

#### Changing the aggregation type

You can change the aggregation type of the measure section from the settings menu, as shown in the following screenshot. Refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.

![Aggregation type](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-aggregation-type.png)

#### Filtering data

You can use filters to change the values by selecting the `Filter` option. For more details, refer to the [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filter option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-filter-option.png)

#### Measure formatting

You can format the elements by selecting the `Format` option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Measure format option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-measure-format.png)

**Image: Grid widget after applying the measure formatting**

![Applied measure formatting](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-applied-measure-formatting.png)

## How to format Grid widget

You can format the Grid for better illustration of the view that you require using the settings available in the `Properties` tab.

### General settings

![General settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-property.png)

#### Name

This allows you to set a `title` for this Grid widget.

![General settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-name.png)

#### Subtitle

This allows you to set a `subtitle` for this Grid widget.

![General settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-Subtitle.png)

#### Description

This allows you to set a brief explanation about this Grid widget.

![General settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-description.png)

### Basic settings

![Basic settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-basicsetting.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in a Grid.

![Basic settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-tooltip.png)

#### Allow sorting

You can toggle the interactive sorting of columns in the Grid control using this option. `It is enabled by default`.

![Basic settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-allow-sorting.png)

#### Fit to content

The columns in the Grid can be made to auto-size based on the length of the content of the column. `This option is not enabled by default`.

#### Horizontal grid lines

You can enable or disable horizontal grid lines in the Grid control. `This option is enabled by default`.

#### Vertical grid lines

You can enable or disable vertical lines in the Grid control. `This option is enabled by default`.

#### Show Border

This allows you to enable or disable the border of the Grid control. This option is enabled by default.

#### Enable Alternative Row

This allows you to differentiate `alternative rows` of the Grid by the background color. If you enable this property, the alternative rows change their background color to `#F7F7F7` by default. It can be customized from the `Content Settings` section.

![Grid Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-alternativerowcolor.png)

#### Enable Column Chooser

This option allows you to show or hide columns within the configured fields of the Grid widget.

![Grid Column Chooser](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-column-chooser-property.png)

For example, you can hide specific columns by deselecting the corresponding fields in the Grid widget.
![Grid Column Chooser](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-column-chooser.png)

#### Allow Column Reorder

This option allows you to rearrange the columns within the configured fields of the Grid widget only if the `Allow Paging` is enabled.

![Grid Reorder Default](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-reorder-property.png)

For example, the `ProductName` column in the Grid can be reordered by dragging it to a new position.

![Grid Reorder](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-reorder.png)

### Frozen Settings

The Grid supports freezing columns and rows so selected fields remain visible while scrolling.

**Frozen properties**

![Frozen properties](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-frozen-property.png)

***Enable Frozen***

Toggle this option to enable freezing behaviour for the Grid. When enabled, you can specify how many left columns or top rows should remain fixed during scrolling.

***Frozen columns***

Enter the number of left-most columns to freeze. These columns remain visible when horizontally scrolling the Grid. Typical use-cases include freezing identifier or name columns so they are always visible.

***Frozen rows***

Enter the number of top rows to freeze. These rows remain visible when vertically scrolling the Grid. Freezing header rows or important summary rows helps maintain context while navigating large datasets.

**Grid with frozen enabled**

![Grid with frozen enabled](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-frozen-enabled.png)

### Summary Row

This section allows you to add a summary row at the end of the Grid container.

![Summary Row](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-row.png)

If you enable the `Enable Summary Row` option, the following window will show.

![Summary Row window](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowwindow.png)

Click on `Add Summary` to add a summary row.

![Summary Row Add](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowadd.png)

***Type***

This option allows you to customize the aggregation type of the summary row.

***Title***

This option allows you to customize the title of the summary row.

***Show Value***

This option allows you to customize the visibility of the summary value of a column in the summary row.

***Title Color***

This option allows you to customize the Grid summary row title color.

***Value Color***

This option allows you to customize the Grid summary row value color.

***Format***

![Summary Row Customize](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowformat.png)

This option allows you to measure the format of the summary value. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

***Delete***

This option allows you to delete the summary row.

We can configure summary rows for each column by clicking on the respective column.

![Summary Row Customize](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowcustomize.png)

After configuring the summary rows and customizing the properties, click the update button. We can then see the summary rows added at the bottom of the Grid, as shown in the image below.

![Summary Row Apply](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-rowapply.png)

#### Background

You can customize the summary row background color by using this property. The default color of the summary row background is the same as the Grid header color, which is `#f3f7fa`.

![Summary Row Background Color](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-background.png)

#### Auto Height

This property picks auto height for the Grid summary row when it is enabled, otherwise, it allows you to choose a fixed height from the `Height` property. This option is enabled by default.

#### Height

You can enable this property by disabling `Auto Height`. You can use the `Height` property to view the entire summary row when creating more than one summary row. You can customize the height of the Grid summary row by increasing or decreasing the values. The minimum value of this property is 10.

![Summary Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summaryrow_height.png)

#### Auto Padding

This property picks auto padding for the Grid summary row when it is enabled. The default value of this auto padding is 15. This option is enabled by default.

#### Padding

You can enable this property by disabling `Auto Padding`. You can increase or decrease the space between the top and bottom of the border by adjusting the `padding` option.

![Summary Row Padding](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summaryrow_padding.png)

#### Auto Font Size

This property picks auto font-size for the Grid summary row title and value when it is enabled. The default value of this auto font-size is 12. This option is enabled by default.

#### Font Size

You can enable this property by disabling `Auto Font Size`, which allows you to adjust the font size of the Grid summary row title and value.

![Summary Row Font Size](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summaryrow_fontsize.png)

#### Customize

You can edit the existing summary row configuration by using this `Customize` button. Upon clicking the `Customize` button, the summary row dialog will appear displaying the current configuration, as shown in the image below.

![Summary Row Customize](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-summary-row-Customize.png)

### Page Settings

![Grid Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-page-settings.png)

#### Allow Paging

This option allows you to enable pagination in a Grid. When this option is enabled, the pager is enabled in the footer section. You can see options to navigate pages, such as previous, next, and a text box to choose a specific page. Additionally, you can view the total record count of bounded column results.

![Grid Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-allowpaging.png)

#### Disable Virtual Loading

Enabling this option will fetch the entire record on the initial load, and there will not be any waiting indicator shown when navigating between pages.

#### Page Size

This option allows you to set the number of records that need to be fetched on the initial load. It also acts as the page size for pagination.

### Header Settings

This section allows you to format the Grid header visibility, color, and font size.

![Grid Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-headersettings.png)

#### Show Header

This allows you to enable or disable the Grid header. This option is enabled by default.

If we uncheck the `Show Header`, dependent properties will be hidden, such as **Allow Text Wrap**, **Foreground color**, **Background color**, **Row height**, **Auto font size**, **padding**.

![Grid Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-header.png)

#### Allow Text Wrap

This allows you to wrap the header text if the text length is high.

![Grid Header Allow Text Wrap Option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-header-allow-text-wrap-option.png)

![Grid Header Allow Text Wrap](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-header-wrapped-text.png)

> **NOTE:** If you enable the `Allow Text Wrap` property, the `Row Height` property from header settings will be disabled.

#### Foreground

You can customize the header font color. The default color of the header font is `#2d3748.`

#### Background

You can customize the header background color. The default color of the header background is `#f3f7fa.`

#### Row Height

You can customize the height of the Grid header by increasing or decreasing the values.

#### Auto Font Size

This property automatically picks the font size for the Grid header when enabled. Otherwise, you can choose a fixed font size from the `Font Size` property. This option is enabled by default.

![Auto font size](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-font-size.png)

#### Font Size

You can enable this property by disabling `Auto Font Size,` which allows you to change the font size of the Grid header.

#### Padding

You can increase or decrease the space between the border and the header by adjusting the `padding` option. The value can range between 1 and 20.

![Header  Customization](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-padding-change.png)

![Header change Customization](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-padding-change-value.png)

### Content Settings

This section allows you to format the Grid row height, color, and font size.

![Grid Row Height](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-contentsetting.png)
#### Foreground

You can customize the font color. The default color of the font is `#000000`.

#### Allow Text Wrap

This allows you to wrap the content text if the text length is high.

![Grid Content Allow Text Wrap Option](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-content-allow-text-wrap-option.png)

![Grid Content Allow Text Wrap](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-content-wrapped-text.png)

> **NOTE:** If you enable the `Allow Text Wrap` property, the `Row Height` property from content settings will be disabled.

#### Background

You can customize the background color. The default color of the background is `#ffffff`.

#### Alternative Foreground

You can customize the font color of alternative rows. The default color of the alternative font is `#000000`. This property can be displayed by enabling the `Enable Alternative Row`.

#### Alternative Background

You can customize the background color of alternative rows. The default color of the alternative background is `#f7f7f7`. This property can be displayed by enabling the `Enable Alternative Row`.

#### Row Height

You can customize the height of the Grid rows. The default value is 32, and the maximum value is 120.

#### Auto Font Size

This property automatically picks the font size for Grid rows when enabled. Otherwise, you can choose a fixed font size from the `Font Size` property. This option is enabled by default.

#### Font Size

You can enable this property by disabling `Auto Font Size`, which allows you to change the font size of the Grid content.

#### Padding

You can increase or decrease the space between the border and the header by adjusting the `padding` option.

**After customizing the content settings**

![Content  Customization](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-content-change.png)

![Content Customization color](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-grid-contentcustomized.png)

### Filter

![Filter settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-filter-settings.png)

#### Allow filter

This allows you to enable a filter type for each column in the Grid for easy data filtering.

![Filter settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-allow-filter-types.png)

#### Filter Type

This option allows you to choose how the data can be filtered within the Grid. The filter types are  **Bar, Menu, or Excel**.

### Bar

The `Bar` filter type displays a text box under each column header that allows users to filter values.

### Menu

The `Menu` filter type displays a filter icon in the column header, allowing you to filter values using available filter conditions based on the field type.

* For Dimension fields, it provides text-based conditions such as StartsWith, EndsWith, Contains, Equal, and NotEqual.
* For Measure fields, it provides numeric conditions such as LessThan, GreaterThan, LessThanOrEqual, GreaterThanOrEqual, Equal, and NotEqual.

This filtering option is supported for Measure and Dimension fields (excluding Date fields).

### Excel

The `Excel` filter type displays a filter icon in the column header. It provides a list of available values, allowing you to select one or more items to filter the data.

This filtering option is only supported for Dimension fields (including Date fields).

#### Act as master widget

This allows you to define this Grid widget as a master widget so that its filter action can be listened to by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this Grid widget to ignore responding to filter actions applied on other widgets in the dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical top N filtering. When applying a Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done flat or based on the hierarchy of the dimension columns added.

When the Hierarchical Filter option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Show Filter

This feature allows you to toggle the visibility of the `Filter` icon for the Grid when the `Act as Master Widget` option is enabled.

### Formatting

You can define the column value represented as text, bar, or condition-based coloring. This lists out the columns, which are added to the Grid widget. 

![Column settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formattingdatalist.png)

For each of those columns, the value representation can be configured using the options displayed on the right side.

![Configured columns](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formattingradiofield.png)

#### Value 

Select value as the display type to get the column values represented as they are.

![Value representation](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-value-representation.png)

#### Bar

This property allows you to configure the color, shape, and range of the progress bar from the `Bar Settings` dialog.

To customize the progress bar, open the `Bar Settings` dialog by selecting the `Bar` radio button from the `Formatting` section.

The dialog can be opened by selecting the `Bar` radio button for initial configuration, and then clicking the `Customize` button.

![Bar setting](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-bar.png)

***Hide Bar Text*** The text of the progress bar can be enabled or disabled. By default, the text is enabled for the progress bar.

***Bar Text***  The progress bar text color can be changed using this property.

***Positive Bar*** The progress bar background color for positive values can be changed.

***Negative Bar*** The progress bar background color for negative values can be changed.

***Bar Style***  This property allows you to change the bar shape. The dropdown contains two shapes: `Cylinder` and `Rectangle`.

![Bar shape](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-barshape.png)

***Minimum*** The minimum property renders the progress bar from the given value. It contains two modes in the dropdown to configure the minimum value:

*Lowest Value* - It takes the default minimum value to render the progress bar.

*Customize* - Selecting this property will enable the text box. Users can customize the minimum value by entering a numeric value in the text box. 

***Maximum*** The maximum property renders the progress bar up to the given value. It contains two modes in the dropdown to configure the maximum value:

*Highest Value* - It takes the default maximum value to render the progress bar.

*Customize* - Selecting this property will enable the text box. Users can customize the maximum value by entering a numeric value in the text box. 

Click the `OK` button to apply the changes to the Grid.

![Formatting progress bar](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formattingdatabar.png)

#### Advanced settings

Select Advanced settings to configure conditions and apply color to the cells based on that. Click [here](/visualizing-data/visualization-v2-widgets/grid/#how-to-apply-advanced-settings-in-grid) for more details. 

![Advanced settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-advanced-settings.png)

![Advanced settings Customization](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-advancesettings-customization.png)

### Link

![Linking](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-linking.png)

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

## How to apply advanced settings in Grid

If you have the requirement to highlight any data based on some conditions, you have to enable the advanced settings option.

### How to enable advanced settings

In the `properties` pane, under the `Formatting section`, click the `Advanced Settings` radio button. 

![Enable Advanced Settings](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-enable-advanced-settings.png)

This will open the `Advanced Settings` dialog.

![Advanced Settings dialog](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-advanced-settings.png)

### Color types

**Gradient:** You can customize the cell background color of the Grid columns using gradient-based advanced settings. This is the default mode.

**Rule based:** This allows you to customize the cell color and the text style of the Grid columns.

### Gradient mode

#### Based on field

You can choose the field from the Based-On section to apply the conditions from the highlighted drop-down.

![based on field](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-based-on-field.png)

#### Summary type

You can select the summary type for the selected measure field.

![Aggregation type of based on field](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-summary-type.png)

#### Low, mid, and high values

You can define your range by entering the low, mid, and high values. 

![Condition values](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-condition-values.png)

> **NOTE:**  It is optional. If no value is entered, then the ranges will be auto-calculated based on the minimum and maximum values from the data source.

### Rule bases mode

#### Value type

The value type drop-down allows you to choose whether to apply the direct value (specific number like three goals, order ID 10248) or percentage (values above 30% or 50%).

![Value type](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-value-type.png)

#### Condition name

You can give a meaningful name to the applied conditions using the highlighted text box.

![Condition name](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-condition-name.png)

#### Condition type

Choose the condition for the measure field from the highlighted conditions.

![Numeric conditions](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-numeric-condition.png)

If you have selected the dimension as a based on field and want to use text condition, the following text-based conditions are available.

![Text conditions](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-text-conditions.png)

> **NOTE:**  The text based condition type will be enabled only when the selected dimension is used as the based on field.

#### Value

Enter the condition value.

![Condition value](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-condition-value.png)

#### Font style

Allows you to choose the title font style. (`Bold, Italic, Underline, and Superscript`).

#### Case sensitivity

For the dimensions, the option to choose whether the entered value is case sensitive or not is provided.

![Case sensitivity](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-case-sensitivity.png)

#### Colors and icons 

Select the checkbox provided next to the options to customize the properties. Similarly, click on the font style icons to apply them, as shown in the following screenshot.

![Icons](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-icons.png)

*Figure: Grid the applied customization*

![Grid with conditional formatting](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-formatted-result.png)


### Container appearance

![Container Appearance](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-container-appearance.png)

### Title alignment

This allows you to align the widget title to the **left, center, or right**.

### Title color

This allows you to apply a specific `color` to the widget title.

### Title Auto Font Size

When enabled, the font size of the title will be adjusted automatically if the screen resolution varies.

**Font Size**

This allows you to apply a specified font size to the widget title if the Title Auto Font Size is disabled. The value can range between 10 and 44.

### Subtitle Auto Font Size

When enabled, the font size of the subtitle will be adjusted automatically if the screen resolution varies.

**Font Size**

This allows you to apply a specified font size to the widget subtitle if the Subtitle Auto Font Size is disabled. The value can range between 10 and 32.

### Auto Padding

When enabled, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can range between 0 and 25.

### Show Border

This allows you to toggle the visibility of the border surrounding the widget.

### Corner Radius

This allows you to apply a specified radius to the widget corners if the Show Border is enabled. The value can range between 0 and 100.

### Transparency

You can adjust the transparency from 0 to 1.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Mobile Height Factor

This option allows you to resize widgets specifically for mobile view.

![Mobile Height Factor](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-mobile-height-factor.png)

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-v2-widgets/images/grid-v2/v2-container-actions.png)

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

This allows you to enable or disable comment for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow Viewing of underlying data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin widget

This allows you to pin the widget.
