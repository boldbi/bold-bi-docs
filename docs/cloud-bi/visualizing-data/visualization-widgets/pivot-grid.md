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

![pivot-grid](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_demo.png)

## How to configure table data to pivot grid?

> **NOTE:** Before adding the card widget to the design layout, make sure to create the data source. You can refer to [this section](/cloud-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source. 

Pivot grid need a minimum of 1 value , 1 row and 1 column element to showcase proper pivot table details. The measure or expression field that you would like to analyze can be dropped into `Value(s)` field. The dimension that you would like to categorize the measure based on row and column can be dropped in `Row(s)` and `Column(s)` field.

Follow the steps to configure data to Pivot grid

Drag and drop the pivot grid widget into canvas and resize it to your required size

![pivot-grid_dragDrop](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_dragDrop.png)

To open Property pane, click `Properties` icon in Configuration panel, .

![configurationPanel_propertyIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/configurationPanel_propertyIcon.png)

Or click `Properties` icon from widget's top right corner

![pivot-grid_propertyIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_propertyIcon.png)

In property pane switch to `ASSIGN DATA` tab from `PROPERTIES`, to assign data to pivot grid data fields.

![pivot-grid_properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_properties.png)

The data tab will be opened with available measures and dimensions from the connected data source. Also it contains `Value(s)`, `Row(s)` and `Column(s)` field as mentioned earlier,

![pivot-grid_assignData](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_assignData.png)

**Adding data to Value(s) field**

You can add more than one `Measures` into `Value(s)` field by drag and drop the required measure.

![pivot-grid_bindValue](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_bindValue.png)


Now the pivot grid will be rendered like this for single data

![pivot-grid_valueRender](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_valueRender.png)

Pivot grid will be rendered like this, if more than one data bind to `Value(s)`

![pivot-grid_valueMultiRender](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_valueMultiRender.png)

If more than one data is added to `Value(s)` field and then grid column is separated based on the number of data attached to `Value(s)` field, as shown in above image.

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![pivot-grid_valueSettingIcon](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_valueSettingIcon.png)


You can filter the data to be displayed in pivot grid by using filter. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![pivot-grid_valueSettingFilter](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_valueSettingFilter.png)

You can format the data to be displayed in the pivot grid by using format option. For more details, refer [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![pivot-grid_valueSettingFormat](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_valueSettingFormat.png)


You can add more than one column from `Dimensions` field into `Value(s)` field.

**Adding Column(s)**

Adding single data to `Value(s)` and `Column(s)`

![pivot-grid_singleValuesColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_singleValuesColumn.png)


You can change the `Settings`.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Settings.png)

You can `Sort` the dimension data using `Sort` option under `Settings` menu list. To apply sorting for the data, refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/sortdimension.png)

You can apply filters by selecting filter in settings. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/configuring-widget-filters.png)


Similarly you can add the `Measures` and `Expressions` into columns field.

**Adding Row(s)**

You can drag and drop the `Measure` or `Dimension` into the `Row(s)` field. 

![pivot-grid_rowData](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_rowData.png)

You can apply [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) option for the rows field, if required.

**Adding Multiple Column(s)**

If more than one data is added to `Column(s)` field and then the arrow icon or node is prepended to each cell of the column header. A new tree view list will be opened when the arrow icon is clicked.

Adding Multiple data to `Column(s)` with single `Value(s)` and `Row(s)`

![pivot-grid_multipleColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_multipleColumn.png)


**Adding Multiple Row(s)**

If more than one data is added to `Row(s)` field and then the arrow icon or node is prepended to each cell of the row header. A new tree view list will be opened when the arrow icon is clicked.

Adding Multiple data to `Row(s)` with single `Value(s)` and `Column(s)`

![pivot-grid_multipleRow](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_multipleRow.png)


**Removing Data from Field**

To remove the added data from fields click the highlighted cross icon.

![pivot-grid_valueRemove](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_valueRemove.png)


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

![Pivot grid property Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-Name.png)


### Basic Settings

`Basic Settings` contains the general property for pivot grid, which includes value sorting, collapsing and expanding nodes state, saving the state of nodes and wrapping the text. 

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Basic-Settings.png)

#### Allow Value Sorting

If we click the column header, the value field get sorted as ascending or descending when the property `Allow Value Sorting` is enabled.

![pivot-grid_prop-basic-sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-basic-sorting.png)


#### Expand Nodes by Default

Nodes are expanded by default, if this property's checkbox is checked. 

![pivot-grid_prop-basic-nodes](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-basic-nodes.png)

#### Save Nodes State

This property restore the expanded and collapsed state of node even after reloading the dashboard.

#### Allow Text Wrap

By default, long texts get trimmed in pivot grid. But if the property `Allow Text Wrap` is enabled, then it displays a wrapped text instead of a trimmed one.

#### Allow Column Resize

You can resize the pivot grid by dragging vertical lines of pivot grid control. This option is not enabled by default.

#### Fit To Content
The columns in the pivot grid can be made to auto-size based on the length of the content of the column. This option is not enabled by default.

### Group Bar Settings

This section contains all the property related to group bar (i.e., row and column header), which includes show or hide, sorting and filtering properties for group bar.

![pivot-grid_prop-groupBar](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-groupBar.png)

#### Show Group Bar

If this property's checkbox is unchecked, and then the group bar (i.e., row and column header) is disabled as shown in below image. By checking this property the group bar will be displayed.

![pivot-grid_prop-group-show](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-group-show.png)

#### Allow Sorting

`Allow Sorting` allows user to enable and disable sorting property for group bar.

![pivot-grid_prop-group-sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-group-sorting.png)

#### Allow Filtering

`Allow Filtering` allows user to enable and disable Filtering property for group bar.

![pivot-grid_prop-group-filtering](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-group-filtering.png)


#### Grand Total Settings

This section contain the show and hide properties for grand and sub totals of rows and columns.

![pivot-grid_prop-grandTotal](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-grandTotal.png)

#### Show Row Grand Totals

This property allows user to show or hide row's grand total. The row's grand total in the below image will be disabled if this property is unchecked.

![pivot-grid_prop-grand-row](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-grand-row.png)

#### Show Column Grand Totals

This property allows user to show or hide column's grand total. The column's grand total in the below image will be disabled if this property is unchecked.

![pivot-grid_prop-grand-column](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-grand-column.png)


#### Show Row Sub Totals

This property allows user to show or hide row's sub total. The below image is an example for disabled sub total for row.

![pivot-grid_prop-grand-subRow](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-grand-subRow.png)

#### Show Column Sub Totals

This property allows user to show or hide column's sub total. The below image is an example for disabled sub total for column.

![pivot-grid_prop-grand-subColumn](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-grand-subColumn.png)

### Edit Field Settings

#### Show No Data Item

`Show No Data Item` displays the empty data cell of selected `Name` from `Edit Field Settings`. For example, if the ShipCity's `Show No Data Item` is checked and then it displays all the empty data points as empty cell similar to the below image.

![pivot-grid_prop-edit-noDataItem](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-edit-noDataItem.png)

In the above image other than Campinas, all other cities have empty data and so it displayed as empty cells. 

### Formatting

This section explains how to format the pivot grid cells. 

![Formatting properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Formatting-properties.png)


#### Group panel background color
This allows you to select the color for the group panel’s background. The default value is `#e9e9e9`. 

![Group panel background color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Group-panel.png)

#### Header background color
This allows you to select the color for the header row’s background. The default value is `#eeeeee`. 

![Header background color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Header-background-color.png)


#### Header foreground color
This allows you to select the color for the header row’s foreground. The default value is `#333333`. 

![Header foreground color](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Header-foreground-color.png)

#### Column representation
You can define the column value represented as simple text or condition-based formatted text. This lists out the columns added to the pivot grid widget.

![Columns list](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Columns-list.png)

#### Value 
Select value as display type to get the column values represented as it is.

#### Advance setting
Select Advance setting to configure conditions and apply color to the cells based on that. Click here for more details. 

![Advanced settings applied widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Advanced-settings.png)

## Pivot Grid as Heatmap

Using the conditional formatting, you can customize the pivot grid as a Heatmap.

![pivot grid As Heatmap](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap.png)

### How to configure pivot grid as a heatmap

1. In the `properties` panel, under the `Formatting` section select the field name that configured in value, then click the `Advanced Setting` radio button.
![Enable Advanced Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-field-selection.png)

2. Click the `Customize` button, now the `Advanced Setting` will open.
![Advanced Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-default-conditional-formatting.png)

3. Customize the colors as per your needs and click the save button.
![Advanced Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-heatmap-customized-conditional-formatting.png)

## Pivot Grid Datetime Hierarchy Fields

It can be achieved by applying date formatting for configured fields.

![Pivot Grid Datetime hierarchy](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy.png)

### How to do pivot grid datetime hierarchy
1. configure the date fields as follows,
![Assign Data Section](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-row-section-before.png)

2. Click the settings menu icon and select the date format based on the hierarchy.
![Assign Data settings menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-field-settings.png)

3. Do the same for remaining fields.
![Assign Data Section](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-date-hierarchy-row-section-after.png)

### Link

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![pivot-grid_prop-link](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/pivot-grid_prop-link.png)

### Filter

`Filter` allows user to apply filtering based on data field.

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Filter.png)

#### Act as Master Widget

This allows you to define this pivot grid widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this pivot grid widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Hierarchical Filter

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Container Appearance

This section contain the property for pivot grid container's layout.

![Container appearance properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/ContainerAppearance.png)

This allows you to customize the widget container appearance, widget title’s properties and provides options to enable/ disable widget exporting options. For more detailed information, refer to [container appearance properties](/cloud-bi/visualizing-data/working-with-widgets/customizing-container-appearance/). 

## How to apply conditional formatting in pivot grid

In case, if you have the requirement to highlight any data based on some conditions, you might be required to enable the advanced formatting option.

### How to enable advanced formatting

1. In the `properties` pane, under the `Formatting` section, click the `Advanced Setting` radio button.
![Enable advance settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Enable-advance-settings.png)

2. This will open the `Conditional Formatting` dialog.
![Conditional formatting window](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/formatting-window.png)

3. Select the `mode` and enter the conditions as required and click the `Save` button to apply.
![Save changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Save-changes.png)

4. Now, the widget visualization will be updated based on the conditions.
![Widget after applying  conditions](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/applied-conditions.png)

Refer to the following sections for the detailed steps on using the [Gradient](/cloud-bi/visualizing-data/visualization-widgets/pivot-grid/#gradient-mode) and [Rule](/cloud-bi/visualizing-data/visualization-widgets/pivot-grid/#rule-based-condition-mode) modes. 

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

![Rule mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Rule-mode.png)

#### Condition name
You can give a meaningful name to the applied conditions.

#### Condition type
Choose the condition for measure field from the highlighted conditions.

![Condition type](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Condition-type.png)

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

![Add condition](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Add-condition.png)

#### Delete condition
Click the delete button to remove the existing condition. 

![Delete condition](/static/assets/cloud/visualizing-data/visualization-widgets/images/pivot-grid/Delete-condition.png)

## Related links
Blog Post – [https://www.boldbi.com/blog/7-unique-features-of-pivot-table](https://www.boldbi.com/blog/7-unique-features-of-pivot-table)