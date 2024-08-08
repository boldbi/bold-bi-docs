---
layout: post
title: Pivot Table Visual – Embedded BI Widget | Bold BI Learning
description: Learn how to create a Pivot Table visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/pivot-grid/"
platform: bold-bi
control: Pivot Grid
documentation: ug

---

# Configuring Pivot Grid

The pivot grid allows you to display summarized data in a cross-tabular format, meaning it is organized in rows and columns.

![pivot-grid](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid-demo.png)

## How to configure table data to pivot grid?

> **NOTE:** Before adding the Pivot grid widget to the design layout, make sure to create the data source. You can refer to [this section](/working-with-data-sources/creating-a-new-data-source/) to learn how to create a new data source.

A pivot grid needs a minimum of 1 value, 1 row, and 1 column element to display proper pivot table details. The measure or expression field that you would like to analyze can be dropped into the `Value(s)` field. The dimension that you would like to categorize the measure based on row and column can be dropped into the `Row(s)` and `Column(s)` fields.

The following steps explain how to configure the data for a Pivot grid:

1.  Drag and drop the pivot grid widget onto a canvas and resize it to your required size.

![pivot-grid_dragDrop](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/drop-widget.png)

2.  Click the `Properties` icon in the Configuration panel to open the Property pane.

![configurationPanel_propertyIcon](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

3.  In the property pane, switch to the `ASSIGN DATA` tab from the `PROPERTIES,` to assign data to the pivot grid data fields.

![pivot-grid_properties](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/properties.png)

4.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source. It also contains the `Value(s)`, `Row(s)`, and `Column(s)` fields as mentioned earlier.

![pivot-grid_assignData](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/assign-data.png)

#### Adding data to Value(s) field

You can add more than one `Measure` into the `Value(s)` field by dragging and dropping the required measures.

![pivot-grid_bindValue](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/bindValue.png)


Now the pivot grid will be rendered like this for a single data.

![pivot-grid_valueRender](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-value-render.png)

Pivot grid will be rendered like this, if more than one data bind to `Value(s)`

![pivot-grid_valueMultiRender](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridmultirender.png)

If more than one data is added to `Value(s)` field and then grid column is separated based on the number of data attached to `Value(s)` field, as shown in above image.

Click the `Settings` option to change the name using the `Rename` option and the required summary type from the available summary types shown in `Settings`.

![pivot-grid_valueSettingIcon](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/settings-value.png)

### Show Value As Percentage

Depending on the Summary Type, you can convert the individual values to a percentage based on the grand total using the `Show Value As` option.

![pivot-grid_showValueAs](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/show-value-as.png)

***No Calculation***

The `No Calculation` option is used to retrieve the actual value.

***Percentage Of Grand Total***

To change the `Show Value As` type to `Percent Of Grand Total`, it converts the individual value to a percentage based on the row and column grand total.

![pivot-grid_grandTotalPercentage](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/grand-total-percentage.png)

***Percentage Of Row Total***

To change the `Show Value As` type to `Percent Of Row Total`, it converts the individual value to a percentage based on the row grand total.

![pivot-grid_rowTotal](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/row-total.png)

***Percentage Of Column Total***

To change the `Show Value As` type to `Percent Of Column Total`, it converts the individual value to a percentage based on the column grand total.

![pivot-grid_colunTotal](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/column-total.png)

> **NOTE:** Aggregated expressions and the Average summary types are not applicable for the `Show Value As` option.

#### Filtering data 

You can filter the data to be displayed in the pivot grid by using filters. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![pivot-grid_valueSettingFilter](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridfilter.png)

#### Formatting data

You can format the data to be displayed in the pivot grid by using the format option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![pivot-grid_valueSettingFormat](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridformat.png)


You can add more than one column from the `Dimensions` field into the `Value(s)` field.

### Adding Column(s)

Adding a single data to `Value(s)` and `Column(s)`

![pivot-gridsingleValuesColumn](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridsinglevaluecolumn.png)

![pivot-grid-singleValuesColumn](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridsinglevaluecolumn-change.png)

You can change the `Settings`.

![Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/rename.png)

#### Sorting data

You can `sort` the dimension data using the `Sort` option under the `Settings` menu list. To apply sorting for the data, refer to [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/sortdimension.png)

#### Filtering data

You can apply filters by selecting the filter in settings. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/configuring-widget-filters.png)


Similarly, you can add the `Measures` and `Expressions` into the `column(s)` field.

#### Adding Row(s)

You can drag and drop the `Measure` or `Dimension` into the `Row(s)` field. 

![pivot-grid_rowData](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/rowdata.png)

You can apply [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field if required.

#### Adding Multiple Column(s)

If more than one data is added to the `Column(s)` field, then the arrow icon or node is prepended to each cell of the column header. A new tree view list will be opened when the arrow icon is clicked.

Adding Multiple data to `Column(s)` with single `Value(s)` and `Row(s)`.

![pivot-grid_multipleColumn](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridmultiplecolumn.png)


#### Adding Multiple Row(s)

If more than one data is added to the `Row(s)` field, then the arrow icon or node is prepended to each cell of the row header. A new tree view list will be opened when the arrow icon is clicked.

Adding Multiple data to `Row(s)` with single `Value(s)` and `Column(s)`.

![pivot-grid_multipleRow](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridmultiplerow.png)

#### Hidden column section

You can drag and drop the elements to `Hidden Columns` if required. Based on the hidden column elements, the values will be shown.

### Tooltip section

You can configure the `tooltip` section to showcase additional information in the widget's tooltip without affecting the visualization. Refer to [this section](/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields.

### Removing Data from Field

To remove the added data from fields, click the highlighted cross icon.

![pivot-grid_valueRemove](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-remove.png)

> **Important** 

### Data Limit

> * Currently, the pivot grid has a limitation of up to 50,000 records.

## How to format pivot grid?

The pivot grid can be formatted to improve the view by using the settings available in the Properties tab.

Follow the steps below to format the pivot grid:

1.	Drag and drop the pivot grid onto the canvas and resize it to the desired size.

2.	Click on the Settings icon and configure the data from the `ASSIGN DATA` tab as mentioned in the previous section, then switch back to the `PROPERTIES` tab. 


The property window will be opened.

![Property window](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-property-window.png)

You will see a list of properties available for the widget with their default values.

### General Settings

The properties in this section allow you to give a name, subtitle, and description for the pivot grid.

![Pivot grid property Name](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/property.png)

#### Name 

This property allows you to set a `title` for the pivot grid widget.

![Pivot grid property Name](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/Name.png)

#### Subtitle

This property allows you to set a `subtitle` for the pivot grid widget.

![Pivot grid property Name](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/Subtitle.png)

#### Description

This property allows you to provide a brief explanation about the pivot grid widget.

![Pivot grid property Name](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/Description.png)

### Basic Settings

The `Basic Settings` section contains general properties for the pivot grid, including value sorting, collapsing and expanding node states, saving the state of nodes, and text wrapping.

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in the pivot grid.

![Pivot grid property Name](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/tooltip.png)

#### Allow Value Sorting

If we click the column header, the value field get sorted as ascending or descending when the property `Allow Value Sorting` is enabled.

![pivot-grid_prop-basic-sorting](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/value-sorting.png)

#### Expand Nodes by Default

If this property's checkbox is checked, the nodes will be expanded by default.

![pivot-grid_prop-basic-nodes](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridnodes.png)

By enabling the `Expand nodes` property, the **Save Nodes state** property will be hidden.

![pivot-grid_prop-basic-nodes](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-node.png)

#### Save Nodes State

This property restores the expanded and collapsed state of nodes even after reloading the dashboard.

#### Allow Text Wrap

By default, long texts get trimmed in pivot grid. But if the property `Allow Text Wrap` is enabled, then it displays a wrapped text instead of a trimmed one.

> **NOTE:** Enabling the `Allow Text Wrap` property will disable the `Row Height` property in the content settings.

#### Allow Column Resize

You can resize the pivot grid by dragging the vertical lines of the pivot grid control.

#### Fit To Content

This property automatically adjusts the column widths in the pivot grid based on the length of the content in each column.

> **NOTE:** Enabling this property will disable the **Column Width** and **Header Column Width** properties.

![pivot-grid_prop-basic-nodes](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/fits-content.png)

> **Note**: The `Virtualization` dynamically loads the given data when you scroll down the pivot grid. If any one of these properties **(Fit to content, allow text wrap, and allow column resize)** is enabled, then the `virtualization` is disabled. Also, we do not recommend using these properties **(Fit to content, allow text wrap, and allow column resize)** when dealing with a large number of records.

### Show Values in Rows

This property displays the values in rows.

![pivot-grid_prop-basic-nodes](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/values-rows.png)

#### Hide Empty Headers

Enabling this option allows you to hide `null` or `empty` headers in the pivot grid table.

In the following image, the column headers have `(Null)` values in data. 

![pivot-grid empty header cell](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-null-headers.png)

By enabling this option, the (Null) header column gets hidden.

![Pivot-grid empty header cell hidden](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-null-headers-hidden.png)

#### Empty Cell Content

This option allows you to set a value for empty cells in the pivot grid.

![Pivot-grid empty cell content value](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-empty-content-value.png)

### Content Settings

This section allows you to customize the height and width of the pivot grid cells.

![pivot-grid-content-settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/content-settings.png)

#### Row Height

This option allows you to customize the height of content rows in the pivot grid.

#### Content Column Width

This option allows you to customize the width of the content columns.

#### Row Header Width

This option allows you to customize the width of the row headers (first column) in the pivot grid.

Pivot grid with default values.

![Pivot content settings default](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-content-settings-default.png)

Pivot grid with customized values.

![Pivot content settings default](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-content-settings-customize.png)

### Group Bar Settings

This section contains properties related to the group bar (row and column headers), including show or hide, sorting, and filtering properties.

![pivot-grid_prop-groupBar](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/groupbar.png)

#### Show Group Bar

If this property's checkbox is unchecked, the group bar (row and column headers) will be disabled. Checking this property will display the group bar.

![pivot-grid_prop-group-show](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/prop-group-show.png)

#### Allow Sorting

`Allow Sorting` allows user to enable and disable sorting property for group bar.

![pivot-grid_prop-group-sorting](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/group-sorting.png)

#### Allow Filtering

`Allow Filtering` enables users to enable or disable the Filtering property for the group bar.

![pivot-grid_prop-group-filtering](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/group-filtering.png)

#### Grand Total Settings

This section contains the show and hide properties for grand and subtotals of rows and columns.

![pivot-grid_prop-grandTotal](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/grand-total.png)

#### Show Row Grand Totals

This property allows users to show or hide the row's grand total. If this property is unchecked, the row's grand total in the image below will be disabled.

![pivot-grid_prop-grand-row](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/grand-total-row.png)

#### Show Row Grand Totals Text

This property allows users to modify the text for row grand totals. The default text displayed for row grand totals is `Grand Total`. When you change the text value in the row grand totals text box, the changes will be reflected in the row grand totals, as shown in the following image.

![pivot-grid_prop-grand-row-text](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/grand-total-row-text.png)

> **NOTE:** The row grand totals text box is set to `Auto` by default, which uses the localized `Grand Total` text from the locale file for display. This allows us to modify the row grand totals text in multiple pivot grids simultaneously using localized text and [localization](/localization/).

#### Show Column Grand Totals

This property allows users to show or hide the column's grand total. If this property is unchecked, the column's grand total in the image below will be disabled.

![pivot-grid_prop-grand-column](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/prop-grand-column.png)

#### Show Column Grand Totals Text

This property allows users to modify the text for column grand totals. The default text displayed for column grand totals is `Grand Total`. When you change the text value in the column grand total text box, the changes will be reflected in the column grand total, as shown in the following image.

![pivot-grid_prop-grand-column-text](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/grand-total-column-text.png)

> **NOTE:** The column grand totals text box is set to `Auto` by default, which uses the localized `Grand Total` text from the locale file for display. This allows us to modify the column grand totals text in multiple pivot grids simultaneously using localized text and [localization](/localization/).

#### Show Row Sub Totals

This property allows users to show or hide the row's subtotals. The image below is an example of a disabled subtotal for the row.

![pivot-grid_prop-grand-subRow](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/row-subtotals.png)

#### Show Column Sub Totals

This property allows users to show or hide the column's subtotals. The image below is an example of a disabled subtotal for the column.

![pivot-grid_prop-grand-subColumn](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/subcolumntotal.png)

### Edit Field Settings

You can edit the field settings.

![Edit Field Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/edit-fieldsettings.png)

![Edit Field Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/edit-field-settings-change.png)

#### Show No Data Item

The `Show No Data Item` feature displays the empty data cell of the selected `Name` from the `Edit Field Settings`. For example, if the Show No Data Item for ShipCity is checked, it will display all the empty data points as empty cells, similar to the image below.

![pivot-grid_prop-edit-noDataItem](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/nodata.png)

In the above image, all cities except Campinas have empty data, so they are displayed as empty cells.

### Alignment Settings

This option allows you to align the Column header, Row header, and Values to either the left, right, or center.

![pivot-alignment-settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-alignment-settings.png)

***Row Header*** - You can align the row header to the left, center, or right. The default is left.

***Column Header*** - You can align the column header to the left, center, or right. The default is left.

***Value*** - You can align the Value cells to the left, center, or right. The default is right.

### Formatting

This section explains how to format the pivot grid cells. 

![Formatting properties](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/formatting-properties.png)


#### Group panel background color

This allows you to select the color for the group panel’s background. The default value is `#e9e9e9`. 

![Group panel background color](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/group-panel.png)

#### Header background color

This allows you to select the color for the header row’s background. The default value is `#eeeeee`. 

![Header background color](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/background-color.png)


#### Header foreground color

This allows you to select the color for the header row’s foreground. The default value is `#333333`. 

![Header foreground color](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/foreground-color.png)

#### Column representation

You can define the column value represented as simple text or condition-based formatted text. This lists the columns added to the pivot grid widget.

![Columns list](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/columns-list.png)

#### Value 

Select value as the display type to represent the column values as they are.

#### Advanced settings

Select Advanced settings to configure conditions and apply color to the cells based on those conditions. Click [here](/visualizing-data/visualization-widgets/grid/#how-to-apply-advanced-settings-in-grid) for more details.  

![Advanced settings  widget](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/advanced-settings-widget.png)

### Pivot Grid as Heatmap

Using advanced settings option, you can customize the pivot grid as a heatmap.

![pivot grid As Heatmap](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap.png)

### How to configure pivot grid as a heatmap

1. In the `properties` panel, under the `Formatting` section, select the field name configured in the value, then click the `Advanced Settings` radio button.

![Enable Advanced Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-field-selection.png)

2. Click the `Customize` button to open the `Advanced Settings`.

![Advanced settings applied widget](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/advanced-settings.png)

3. Customize the colors according to your needs and click the `Save` button.

![Advanced Settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-customized-conditional-formatting.png)

### Pivot Grid Datetime Hierarchy Fields

You can achieve this by applying date formatting to the configured fields.

![Pivot Grid Datetime hierarchy](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy.png)

### How to do pivot grid datetime hierarchy

1. configure the date fields as follows,

![Assign Data Section](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-row-section-before.png)

2. Click the settings menu icon and select the date format based on the hierarchy.

![Assign Data settings menu](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-field-settings.png)

3. Repeat the same steps for the remaining fields.

### Font settings

This section allows you to customize the height and width of the pivot grid content.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/font-settings.png)

Pivot grid with auto font-size.

![Auto font size](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/auto-font-size.png)

#### Header

***Auto Font Size and Font Size***

By default, the auto font size property is enabled, so the font size of the headers will be rendered based on the resolution. If this property is unchecked, the font size of the header can be customized.

![Header Font settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/header-font-size.png)

#### Content

***Auto Font Size and Font Size***

By default, the auto font size property is enabled, so the font size of the pivot grid content elements will be calculated based on the resolution. If this property is unchecked, the font size can be customized.

![Content Font settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/content-font-size.png)

### Link

To configure the linking to a URL or dashboard with the widget through its settings, refer to [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) for more details.

![pivot-grid_prop-link](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/linking.png)

### Filter

`Filter` allows you to apply filtering based on data field.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/filtering.png)

#### Act as Master Widget

This allows you to define this pivot grid widget as a master widget, so its filter action can be listened to by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this pivot grid widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable hierarchical top N filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the `Hierarchical Filter` option is enabled, the Top N will be applied to each individual column separately based on the number set for each column.

## How to apply advanced settings in pivot grid

If you have the requirement to highlight data based on certain conditions, you can enable the advanced settings option.

### How to enable advanced settings

1. In the `properties` pane, under the `Formatting` section, click the `Advanced Settings` radio button.

![Enable advance settings](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/enableadvancesettings.png)

2. This will open the `Advanced Settings` dialog.

![Advanced Settings window](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/formatting-window.png)

3. Select the `mode` and enter the conditions as required, then click the `Save` button to apply.

4. Now, the widget visualization will be updated based on the conditions.

![Widget after applying  conditions](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/applied-conditions.png)

Refer to the following sections for detailed steps on using the [Gradient](/visualizing-data/visualization-widgets/pivot-grid/#gradient-mode) and [Rule](/visualizing-data/visualization-widgets/pivot-grid/#rule-based-condition-mode) modes. 

#### Gradient mode

You can customize the background color of the pivot grid cells using the gradient-based advanced settings. This is the default mode. 

#### Based on field

The configured value fields. The "Based on Field" option cannot be changed in the advanced settings dialog.

#### Summary type

The summary type of the configured value field. 

#### Low, mid, and high values

You can define your range by entering the low, mid, and high values. 

> **NOTE:** This is optional, if no value is entered, the ranges will be auto-calculated based on the minimum and maximum values from the data source.

#### Rule based condition mode

This allows you to customize the `cell colors and value font style` of the pivot grid cells based on one or more numerical/text conditions.

![Rule mode](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/rulemode.png)

#### Condition name

You can assign a meaningful name to the applied conditions.

#### Condition type

Choose the condition for the measure field from the highlighted conditions.

![Condition type](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/condition-add.png)

#### Value

You can specify the condition value.

#### Foreground

This option allows you to define the foreground color of the pivot grid cell for this condition.

#### Background

Allows you to define the pivot grid cell background for this condition. 

#### Font style

This option allows you to choose the font style for the title (`Bold, Italic, Underline, and Superscript`).

#### Add condition

Click on `Add Condition` to specify a new condition.

![Add condition](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/condition-add-rule.png)

#### Delete condition

Click on the delete button to remove the existing condition.

![Delete condition](/static/assets/visualizing-data/visualization-widgets/images/pivot-grid/deletecondition.png)

### Container appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title alignment

This option allows you to align the widget title to the **left, center, or right**.

### Title color

This option allows you to apply a specific text `color` to the widget title.

### Title Auto Font Size

When enabled, the font size of the title will automatically adjust if the screen resolution varies.

**Font Size**

This option allows you to apply a specific font size to the widget title if the `Title Auto Font Size` is disabled. The value can range between 10 and 44.

### Subtitle Auto Font Size

When enabled, the font size of the subtitle will automatically adjust if the screen resolution varies.

**Font Size**

This option allows you to apply a specific font size to the widget subtitle if the `Subtitle Auto Font Size` is disabled. The value can range between 10 and 32.

### Auto Padding

When enabled, the padding of the widget container will automatically adjust if the size of the widget varies.

**Padding**

This option allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

### Show Border

This option allows you to toggle the visibility of the border surrounding the widget.

### Corner Radius

This option allows you to apply a specific radius to the widget corners if the `Show Border` is enabled. The value can range between 0 and 10.

### Transparency

You can adjust the transparency from 0 to 1.

### Show Shadow

This option allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show header

This option allows you to enable or disable the widget title of the pivot grid.

#### Allow maximize view

This option allows you to enable or disable the maximized mode of the pivot grid. The visibility of the maximize icon in the widget header will be determined based on the setting in the viewer.

#### Allow CSV export

This allows you to enable or disable the CSV export option for the pivot grid. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel export

This allows you to enable or disable the Excel export option for the pivot grid. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in the viewer.

#### Allow image export

This allows you to enable or disable the image export option for the pivot grid. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in the viewer.

#### Allow PDF export

This allows you to enable or disable the PDF export option for the pivot grid. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable comments

This allows you to enable or disable comment for the dashboard widget. For more details, refer to this refer to the following link: [Dashboard Widget Comments](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow Viewing of underlying data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin widget

This option allows you to pin the widget.

## Related links

Blog Post – <a href="https://www.boldbi.com/blog/7-unique-features-of-pivot-table" target="_blank">7 Unique Features of Pivot Table</a>
