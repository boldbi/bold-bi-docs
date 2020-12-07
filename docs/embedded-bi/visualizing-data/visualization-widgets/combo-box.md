---
layout: post
title: Combo Box Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Combo Box visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/combo-box/"
platform: bold-bi
control: Combo Box
documentation: ug
---

# Configuring Combo Box

Combo Box enables you to filter based on single or multiple items selection in dropdown list. To bind a combo box, a minimum requirement of 1 column is needed. 

![Combobox](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/combobox.png)

## How to configure table data to combo box?

The following procedure illustrates data configuration of Combo Box.

Drag and drop `Combo Box` widget from the tool box into design panel and resize into your required size. You can find widget in tool box by search. 

![Combobox](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/drop-widget.png)

Click `Data Source` button in configuration panel.

![Data button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![Designer properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/combodatatab.png)

The data tab will be opened with available measures and dimensions from the connected data source

![Assign data](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/comboassigndata.png)

Drag and drop a column from `Measures` or `Dimensions` to `Columns` section.

![Configure Combobox](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/configure-widget.png)

Define the `Sort` of the dropped column through `Sort` option in the `Settings` drop down menu. For more details refer [Sort](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sorting](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/sorting.png)

Define filter criteria through the `Filter(s)` menu item in the `Settings` drop down menu. For more details, refer [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filtering](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/filtering.png)


Clear the filters by selecting the `Show All Records` in the `Settings` dropdown menu.

## How to format combo box?

You can format the combo box for better illustration of the view that you require, through the settings available in `Properties` tab. This pane can be opened from design view through clicking the `Settings` icon at top right corner of the widget.

**General Settings**

![General Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/general-settings.png)

**Name**

This allows you to set title for this combo box widget.

**Basic Settings**

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/basic-settings.png)

**Enable Multi-select**

This allows you to define single/multiple item selection in dropdown list.

**Single Selection**

![Single Selection](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/single-selection.png)

**Multiple Selection**

Initially, all items in combo box selected. You can select/ unselect items by checking/unchecking items.

![Multiple Selection](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/combobox_multiselect.png)
 
 ***All*** - This allows you to select or unselect all items in the combo box.

**Allow Filter**

This allows you to enable a filter box for easy filtering of data.

**Filter**

![Filter](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/filter.png)

**Act as Master Widget**

This allows you to define this combo box widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this combo box widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Container Appearance**

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/combo-box/container-appearance.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/embedded-bi/working-with-widgets/commenting-widget/)