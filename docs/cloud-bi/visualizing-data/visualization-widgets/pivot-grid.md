---
layout: post
title: Pivot Table Visual – Cloud BI Widget | Bold BI Learning
description: Learn how to create a Pivot Table visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Pivot Grid
documentation: ug
---

# Configuring Pivot Grid

Pivot grid allows you to display summarized data in cross tabular format i.e., in rows and columns.

![pivot-grid](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid-demo.png)

## How to configure table data to pivot grid?

> **NOTE:** Before adding the Pivot grid widget to the design layout, make sure to create the data source. You can refer to [this section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source. 

Pivot grid need a minimum of 1 value , 1 row and 1 column element to showcase proper pivot table details. The measure or expression field that you would like to analyze can be dropped into `Value(s)` field. The dimension that you would like to categorize the measure based on row and column can be dropped in `Row(s)` and `Column(s)` field.

The following steps explain how to configure the data to a Pivot grid:

1.  Drag and drop the pivot grid widget into a canvas and resize it to your required size.

![pivot-grid_dragDrop](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/drop-widget.png)

2.  To open the Property pane, click the `Properties` icon in the Configuration panel.

![configurationPanel_propertyIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

3.  In the property pane, switch to the `ASSIGN DATA` tab from the `PROPERTIES`, to assign data to the pivot grid data fields.

![pivot-grid_properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/properties.png)

4.  The `ASSIGN DATA` tab will be opened with available measures and dimensions from the connected data source. Also it contains `Value(s)`, `Row(s)`, and `Column(s)` field as mentioned earlier.

![pivot-grid_assignData](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/assign-data.png)

#### Adding data to Value(s) field

You can add more than one `Measures` into `Value(s)` field by drag and drop the required measure.

![pivot-grid_bindValue](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/bindValue.png)


Now the pivot grid will be rendered like this for single data

![pivot-grid_valueRender](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-value-render.png)

Pivot grid will be rendered like this, if more than one data bind to `Value(s)`

![pivot-grid_valueMultiRender](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridmultirender.png)

If more than one data is added to `Value(s)` field and then grid column is separated based on the number of data attached to `Value(s)` field, as shown in above image.

Click the `Settings` option to change the name by using the `Rename` option and the required summary type from the available summary types shown in `Settings`.

![pivot-grid_valueSettingIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/settings-value.png)

#### Filtering data 

You can filter the data to be displayed in pivot grid by using filter. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![pivot-grid_valueSettingFilter](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridfilter.png)

#### Formatting data

You can format the data to be displayed in the pivot grid by using format option. For more details, refer [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![pivot-grid_valueSettingFormat](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridformat.png)


You can add more than one column from `Dimensions` field into `Value(s)` field.

### Adding Column(s)

Adding single data to `Value(s)` and `Column(s)`

![pivot-gridsingleValuesColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridsinglevaluecolumn.png)

![pivot-grid-singleValuesColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridsinglevaluecolumn-change.png)

You can change the `Settings`.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/rename.png)

#### Sorting data

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/sortdimension.png)

#### Filtering data

You can apply filters by selecting the filter in settings. For more details, refer to the [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/configuring-widget-filters.png)


Similarly, you can add the `Measures` and `Expressions` into the `column(s)` field.

#### Adding Row(s)

You can drag and drop the `Measure` or `Dimension` into the `Row(s)` field. 

![pivot-grid_rowData](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/rowdata.png)

You can apply [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

#### Adding Multiple Column(s)

If more than one data is added to `Column(s)` field and then the arrow icon or node is prepended to each cell of the column header. A new tree view list will be opened when the arrow icon is clicked.

Adding Multiple data to `Column(s)` with single `Value(s)` and `Row(s)`

![pivot-grid_multipleColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridmultiplecolumn.png)


#### Adding Multiple Row(s)

If more than one data is added to `Row(s)` field and then the arrow icon or node is prepended to each cell of the row header. A new tree view list will be opened when the arrow icon is clicked.

Adding Multiple data to `Row(s)` with single `Value(s)` and `Column(s)`

![pivot-grid_multipleRow](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridmultiplerow.png)

#### Hidden column section

You can drag and drop the elements to `Hidden Columns` if required. Based on the hidden column elements, the values will be shown.

### Tooltip section

You can configure the `tooltip` section to showcase the additional information in the widget’s tooltip without affecting the visualization. Refer to [this section](/embedded-bi/visualizing-data/working-with-widgets/tooltip-customization/) for more details on configuring the tooltip fields.

### Removing Data from Field

To remove the added data from fields click the highlighted cross icon.

![pivot-grid_valueRemove](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-remove.png)

> **Important** 

### Data Limit

 * For now, the pivot grid has a limitation of data up to 10K records.

## How to format pivot grid?

Pivot grid can be formatted for better illustration of the view, through the settings available in Properties tab.

To format pivot grid follow the below steps

1.	Drag and drop the pivot grid into canvas and resize it to your required size.

2.	Click on Settings icon and Configure the data from `ASSIGN DATA` tab as mentioned in previous section, then switch back to `PROPERTIES` tab.


The property window will be opened.

![Property window](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-property-window.png)

You can see the list of properties available for the widget with default value.

### General Settings

Name, Subtitle and Description for pivot-grid can be given through these properties.

![Pivot grid property Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/property.png)

#### Name 

This allows you to set `title` for this pivot-grid widget.

![Pivot grid property Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Name.png)

#### Subtitle

This allows you to set `subtitle` for this pivot-grid widget.

![Pivot grid property Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Subtitle.png)

#### Description

This allows you to set brief explanation about this pivot-grid widget.

![Pivot grid property Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Description.png)

### Basic Settings

`Basic Settings` contains the general property for pivot grid, which includes value sorting, collapsing and expanding nodes state, saving the state of nodes and wrapping the text. 

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in the pivot grid.

![Pivot grid property Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/tooltip.png)

#### Allow Value Sorting

If we click the column header, the value field get sorted as ascending or descending when the property `Allow Value Sorting` is enabled.

![pivot-grid_prop-basic-sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/value-sorting.png)


#### Expand Nodes by Default

Nodes are expanded by default, if this property's checkbox is checked. 

![pivot-grid_prop-basic-nodes](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-gridnodes.png)

By enabling `Expand nodes` property, **Save Nodes state** property will be hidden.

![pivot-grid_prop-basic-nodes](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-node.png)

#### Save Nodes State

This property restore the expanded and collapsed state of node even after reloading the dashboard.

#### Allow Text Wrap

By default, long texts get trimmed in pivot grid. But if the property `Allow Text Wrap` is enabled, then it displays a wrapped text instead of a trimmed one.

> **NOTE:** If you enable `Allow Text Wrap` property, `Row Height` property from content settings will be disabled.

#### Allow Column Resize

You can resize the pivot grid by dragging the vertical lines of the pivot grid control.

#### Fit To Content

The columns in the pivot grid can be made to auto-size based on the length of the content of the column.

![pivot-grid_prop-basic-nodes](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/fits-content.png)

> **Note**: The `Virtualization` dynamically loads the given data when you scroll down the pivot grid. If any one of these properties **(Fit to content, allow text wrap, and allow column resize)** is enabled then the `virtualization` disables. Also, we do not recommend these properties **(Fit to content, allow text wrap, and allow column resize)** when using a large number of records.

> **NOTE:** If you enable this property, **Column Width**, **Header Column Width** will be disabled.

### Show Values in Rows

It shows the values in rows.

![pivot-grid_prop-basic-nodes](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/values-rows.png)

#### Hide Empty Headers

This option allows you to hide 'null' or ‘empty’ headers, if it is present in the pivot grid table.

In the following image, the column headers have ‘(Null)’ values in data. 

![pivot-grid empty header cell](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-null-headers.png)

By enabling this option, the (Null) header column gets hidden.

![Pivot-grid empty header cell hidden](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-null-headers-hidden.png)

#### Empty Cell Content

This option allows you to set value for the empty cells in the pivot grid.

![Pivot-grid empty cell content value](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-empty-content-value.png)

### Content Settings

This section allows you to customize the height and width of the pivot grid cells.

![pivot-grid-content-settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/content-settings.png)

#### Row Height

This option allows you to customize the height of content rows in the pivot grid.

#### Content Column Width

This option allows you to customize the width of the content columns.

#### Row Header Width

This option allows you to customize the width of row headers (first column) in the pivot grid.

Pivot grid with default value.

![Pivot content settings default](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-content-settings-default.png)

Pivot grid with customized value

![Pivot content settings default](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-content-settings-customize.png)

### Group Bar Settings

This section contains all the property related to group bar (i.e., row and column header), which includes show or hide, sorting and filtering properties for group bar.

![pivot-grid_prop-groupBar](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/groupbar.png)

#### Show Group Bar

If this property's checkbox is unchecked, and then the group bar (i.e., row and column header) is disabled as shown in below image. By checking this property the group bar will be displayed.

![pivot-grid_prop-group-show](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/prop-group-show.png)

#### Allow Sorting

`Allow Sorting` allows user to enable and disable sorting property for group bar.

![pivot-grid_prop-group-sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/group-sorting.png)

#### Allow Filtering

`Allow Filtering` allows user to enable and disable Filtering property for group bar.

![pivot-grid_prop-group-filtering](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/group-filtering.png)

#### Grand Total Settings

This section contain the show and hide properties for grand and sub totals of rows and columns.

![pivot-grid_prop-grandTotal](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/grand-total.png)

#### Show Row Grand Totals

This property allows user to show or hide row's grand total. The row's grand total in the below image will be disabled if this property is unchecked.

![pivot-grid_prop-grand-row](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/grand-total-row.png)

#### Show Column Grand Totals

This property allows user to show or hide column's grand total. The column's grand total in the below image will be disabled if this property is unchecked.

![pivot-grid_prop-grand-column](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/prop-grand-column.png)

#### Show Row Sub Totals

This property allows user to show or hide row's sub total. The below image is an example for disabled sub total for row.

![pivot-grid_prop-grand-subRow](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/row-subtotals.png)

#### Show Column Sub Totals

This property allows user to show or hide column's sub total. The below image is an example for disabled sub total for column.

![pivot-grid_prop-grand-subColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/subcolumntotal.png)

### Edit Field Settings

You can edit the field settings.

![Edit Field Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/edit-fieldsettings.png)

![Edit Field Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/edit-field-settings-change.png)

#### Show No Data Item

`Show No Data Item` displays the empty data cell of selected `Name` from `Edit Field Settings`. For example, if the ShipCity's `Show No Data Item` is checked and then it displays all the empty data points as empty cell similar to the below image.

![pivot-grid_prop-edit-noDataItem](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/nodata.png)

In the above image other than Campinas, all other cities have empty data and so it displayed as empty cells. 

### Alignment Settings

This allows you to align Column header, Row header and Values to either left, right, or center.

![pivot-alignment-settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-alignment-settings.png)

***Row Header*** - You can align row header to either left, center, or right. By default, it will be Left.

***Column Header*** - You can align column header to either left, center, or right. By default, it will be Left.

***Value*** - You can align Value cells to either left, center, or right. By default, it will be Right.

### Formatting

This section explains how to format the pivot grid cells. 

![Formatting properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/formatting-properties.png)


#### Group panel background color

This allows you to select the color for the group panel’s background. The default value is `#e9e9e9`. 

![Group panel background color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/group-panel.png)

#### Header background color

This allows you to select the color for the header row’s background. The default value is `#eeeeee`. 

![Header background color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/background-color.png)


#### Header foreground color

This allows you to select the color for the header row’s foreground. The default value is `#333333`. 

![Header foreground color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/foreground-color.png)

#### Column representation

You can define the column value represented as simple text or condition-based formatted text. This lists out the columns added to the pivot grid widget.

![Columns list](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/columns-list.png)

#### Value 

Select value as display type to get the column values represented as it is.

#### Advance setting

Select Advance setting to configure conditions and apply color to the cells based on that. Click [here](/embedded-bi/visualizing-data/visualization-widgets/grid/#how-to-apply-conditional-formatting-in-grid) for more details.  

![Advanced settings  widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/advanced-settings-widget.png)

### Pivot Grid as Heatmap

Using the conditional formatting, you can customize the pivot grid as a Heatmap.

![pivot grid As Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap.png)

### How to configure pivot grid as a heatmap

1. In the `properties` panel, under the `Formatting` section select the field name that configured in value, then click the `Advanced Setting` radio button.

![Enable Advanced Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-field-selection.png)

2. Click the `Customize` button, now the `Advanced Setting` will open.

![Advanced settings applied widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/advanced-settings.png)

3. Customize the colors as per your needs and click the save button.

![Advanced Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-customized-conditional-formatting.png)

### Pivot Grid Datetime Hierarchy Fields

It can be achieved by applying date formatting for configured fields.

![Pivot Grid Datetime hierarchy](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy.png)

### How to do pivot grid datetime hierarchy

1. configure the date fields as follows,

![Assign Data Section](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-row-section-before.png)

2. Click the settings menu icon and select the date format based on the hierarchy.

![Assign Data settings menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-field-settings.png)

3. Do the same for remaining fields.

### Font settings

This section allows you to customize the height and width of the pivot grid content.

![Font settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/font-settings.png)

Pivot grid with auto font-size.

![Auto font size](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/auto-font-size.png)

#### Header

***Auto Font Size and Font Size***

By default, the auto font size property is enabled. So, the font size of the headers will be rendered based on the resolution. If this property is unchecked, the font size of the header can be customizable.

![Header Font settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/header-font-size.png)

#### Content

***Auto Font Size and Font Size***

By default, the auto font size property is enabled. So, the font size of the pivot grid content elements will be calculated based on the resolution. If this property is unchecked, the font size can be customizable.

![Content Font settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/content-font-size.png)

### Link

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer to [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![pivot-grid_prop-link](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/linking.png)

### Filter

`Filter` allows you to apply the filtering based on data field.

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/filtering.png)

#### Act as Master Widget

This allows you to define this pivot grid widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this pivot grid widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

## How to apply conditional formatting in pivot grid

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, click the `Advanced Setting` radio button.

![Enable advance settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/enableadvancesettings.png)

2. This will open the `Conditional Formatting` dialog.

![Conditional formatting window](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/formatting-window.png)

3. Select the `mode` and enter the conditions as required and click the `Save` button to apply.

4. Now, the widget visualization will be updated based on the conditions.

![Widget after applying  conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/applied-conditions.png)

Refer to the following sections for the detailed steps on using the [Gradient](/embedded-bi/visualizing-data/visualization-widgets/pivot-grid/#gradient-mode) and [Rule](/embedded-bi/visualizing-data/visualization-widgets/pivot-grid/#rule-based-condition-mode) modes. 

#### Gradient mode

You can customize the background color of the pivot grid cells using the gradient based conditional formatting. This is the default mode. 

#### Based on field

The configured value fields. Based on field option cannot be changed in the conditional formatting dialog. 

#### Summary type

The summary type of the configured value field. 

#### Low, mid, and high values

You can define your range by entering the low, mid, and high values. 

> **NOTE:** It is optional, if no value is entered then the ranges will be auto calculated based on the minimum and maximum values from the data source. 

#### Rule based condition mode

This allows you to customize the `cell colors and value font style` of the pivot grid cells based on one or more numerical / text conditions.

![Rule mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/rulemode.png)

#### Condition name

You can give a meaningful name to the applied conditions.

#### Condition type

Choose the condition for measure field from the highlighted conditions.

![Condition type](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/condition-add.png)

#### Value

You can mention the condition value.

#### Foreground

Allows you to define the pivot grid cell foreground for this condition. 

#### Background

Allows you to define the pivot grid cell background for this condition. 

#### Font style

Allows you to choose the title font style. (`Bold, Italic, Underline, and Superscript`).

#### Add condition

Click `Add Condition` to specify add new condition.

![Add condition](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/condition-add-rule.png)

#### Delete condition

Click the delete button to remove the existing condition. 

![Delete condition](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/deletecondition.png)

### Container appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title alignment

This allows you to handle the alignment of widget title to either **left, center, or right**.

### Title color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified font size to the widget title, if the `Title Auto Font Size` is disabled. The value can range between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the `Subtitle Auto Font Size` is disabled. The value can range between 10 and 32.

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the border surrounding the widget.

### Corner Radius

This allows you to apply the specified radius to the widget corners if the `Show Border` is enabled. The value can range between 0 and 10.

### Transparency

You can change the transparency from 0 to 1.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show header

This allows you to enable or disable the widget title of the pivot grid. 

#### Allow maximize view

This allows you to enable or disable the maximized mode of the pivot grid. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV export

This allows you to enable or disable the CSV export option for the pivot grid. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel export

This allows you to enable or disable the Excel export option for the pivot grid. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format in the viewer.

#### Allow image export

This allows you to enable or disable the image export option for the pivot grid. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in the viewer.

#### Allow PDF export

This allows you to enable or disable the PDF export option for the pivot grid. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable comments

This allows you to enable or disable comment for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow Viewing of underlying data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin widget

This allows you to pin the widget.

## Related links

Blog Post – [https://www.boldbi.com/blog/7-unique-features-of-pivot-table](https://www.boldbi.com/blog/7-unique-features-of-pivot-table)