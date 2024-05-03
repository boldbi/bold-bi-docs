---
layout: post
title: List Box Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a List Box visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/visualizing-data/visualization-widgets/list-box/"
platform: bold-bi
control: List Box
documentation: ug

---

# List Box

List Box enables you to filter based on single or multiple item selection in a list. To configure a list box, a minimum requirement of 1 column is needed.

![List Box](/static/assets/visualizing-data/visualization-widgets/images/list-box/listbox.png)

## How to configure the table data to list box?

The following procedure illustrates the data configuration of a List Box:

1.  Drag and drop the `List Box` control icon from the toolbox into the design panel. You can find the control in the toolbox by searching.

![List Box](/static/assets/visualizing-data/visualization-widgets/images/list-box/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a New Connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons (Here `Microsoft Excel` Connection type is selected for demonstration).

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the Configuration panel, the property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/list-box/listdatatab.png)

8.  The data tab will open with available measures and dimensions from the connected data source.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/list-box/assign-data.png)

9.  Drag and drop a column from `Measures` or `Dimensions` to the `Columns` section.

![Configure Widget](/static/assets/visualizing-data/visualization-widgets/images/list-box/configure-widget.png)

Define the `sort` of the dropped column through the `Sort` option in the `Settings` dropdown menu. For more details, refer to [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column)

![Sorting](/static/assets/visualizing-data/visualization-widgets/images/list-box/sorting.png)

You can use the filters by selecting the `Filter(s)` option. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/list-box/filtering.png)

You can clear the filters by selecting the `Show All Records` option.

## How to configure relative dates to list box?

Click the `Settings` icon in the dropped date value and select `Relative Dates` from the dropdown menu.

![showing relative dates menu](/static/assets/visualizing-data/visualization-widgets/images/list-box/relativedates-listbox.png)

In the launched `Relative Date Options` window, configure the relative date and click Add. Repeat this process until the required set of relative dates is added.

![relative date options window](/static/assets/visualizing-data/visualization-widgets/images/list-box/relativedatefilterwindow-listbox.png)

![relative dates added in window](/static/assets/visualizing-data/visualization-widgets/images/list-box/relativedateoptionsadded-listbox.png)

You can see the added relative dates in the list box as follows:

![showing relative date options in listbox](/static/assets/visualizing-data/visualization-widgets/images/list-box/relativedateoptions-in-listbox.png)

> **Note:** If Multi-selection is enabled, then the applied relative dates will be removed.

## How to configure custom relative dates to the list box?

Click the `Settings` icon in the dropped date value and select `Relative Dates` in the drop-down menu.

![showing relative dates menu](/static/assets/visualizing-data/visualization-widgets/images/list-box/relativedates-listbox.png)

In the launched `Relative Date Options` window, select the `Custom` option from the drop-down list.

![selecting custom option in relative dates window](/static/assets/visualizing-data/visualization-widgets/images/list-box/customoptionin-relativedatefilter-listbox.png)

Choose the start and end dates you would like to set as a custom range, set a name for the custom range, and then click `Add`. Repeat this process until the required set of custom relative dates is added.


![setting range for custom option](/static/assets/visualizing-data/visualization-widgets/images/list-box/customdatelimits-relativedates-listbox.png)

![custom date option is added](/static/assets/visualizing-data/visualization-widgets/images/list-box/customdateadded-relativedates-listbox.png)

You can see the added custom relative dates in the list box as follows:

![custom date option is displayed in list box](/static/assets/visualizing-data/visualization-widgets/images/list-box/customrelativedate-listbox.png)

> **Note:** If Multi-selection is enabled, then the applied relative dates will be removed.

## How to format list box?

You can format the List box for a better illustration of the view that you require, through the settings available in the `Properties` tab. This pane can be opened from the design view by clicking the `Settings` icon at the top right corner of the widget.

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/list-box/property.png)

#### Name

This allows you to set the `title` for the list box widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/list-box/title.png)

#### Subtitle

This allows you to set the `subtitle` for the list box widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/list-box/subtitle.png)

#### Description

This allows you to set a brief explanation about the list box widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/list-box/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/list-box/basic-settings.png)

#### Enable Multi-select

`Enable Multi-Select` allows you to select one or more items in the dropdown list.

#### Single Selection

![Single Selection](/static/assets/visualizing-data/visualization-widgets/images/list-box/single-selection.png)

#### Multiple Selection

You can select multiple items in the list box.

![Multiple Selection](/static/assets/visualizing-data/visualization-widgets/images/list-box/multi-selection.png)

### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/list-box/filter.png)

#### Act as Master Widget

This allows you to define this list box widget as a master widget so that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this list box widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable the hierarchical `Top N` filtering. When the hierarchical filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

When the hierarchical filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/list-box/container-settings.png)

#### Title Alignment

This allows you to handle the alignment of the widget title to either `left, center, or right.`

#### Title Color

This allows you to apply the text `color` to the widget title.

#### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

#### Subtitle Auto Font Size

When Auto Font Size is enabled, the font size of the subtitle will adjust automatically if the screen resolution varies.

**Font Size**

This feature allows you to set the font size for the widget title if the **Subtitle Auto Font Size** is disabled. The value can range from 10 to 32.

#### Show Border

This feature allows you to show or hide the `border` around the widget.

#### Corner Radius

This feature allows you to set the `radius` for the corners of the widget if the **Show Border** is enabled. The value can range from 0 to 10.

#### Background Color

This feature allows you to choose the **background color** for the list box widget.

#### Transparency

This property allows you to adjust the **transparency** of the `background color`.

#### Show Shadow

This feature allows you to show or hide the `shadow` around the widget.

#### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/list-box/container-actions.png)

#### Show Header

This feature allows you to enable or disable the `widget title` for the list box widget.

#### Enable Comments

This feature allows you to enable or disable `comments` for the dashboard widget. For more details, please refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).