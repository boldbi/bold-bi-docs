---
layout: post
title: List Box Widget – Cloud BI | Bold BI Documentation
description: Learn how to create a List Box visual in Bold BI Cloud dashboard, configure data field and other settings.
platform: bold-bi
control: List Box
documentation: ug
---

# List Box

List Box enables you to filter based on single or multiple items selection in a list. To configure a list box, a minimum requirement of 1 column is needed.

![List Box](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/listbox.png)

## How to configure the table data to list box?

The following procedure illustrates data configuration of List Box.

1.  Drag and drop `List Box` control icon from the tool box into design panel. You can find control in tool box by search. 

![List Box](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/drop-widget.png)

2.  Click `Data Source` button in configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click `CREATE NEW` button to launch a New Connection from connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click `Properties` button in Configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![Designer properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/listdatatab.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/assign-data.png)

9.  Drag and drop a column from `Measures` or `Dimensions` to `Columns` section.

![Configure Widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/configure-widget.png)

Define the `Sort` of the dropped column through the `Sort` option in the `Settings` drop down menu. For more details refer [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column)

![Sorting](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/sorting.png)

You can use the filters by selecting the `Filter(s)` option. For more details, refer [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Filtering](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/filtering.png)

You can clear the filters by selecting the `Show All Records` option.

## How to format list box?

You can format the List box for a better illustration of the view that you require, through the settings available in the `Properties` tab. This pane can be opened from the design view by clicking the `Settings` icon at the top right corner of the widget.

### General Settings

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/general-settings.png)

#### Name

This allows you to set the `title` for the list box widget.

#### Subtitle

This allows you to set the `subtitle` for the list box widget.

#### Description

This allows you to set the brief explanation about the list box widget.

#### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/basic-settings.png)

#### Enable Multi-select

`Enable Multi-Select` allows you to select one or more items in the dropdown list.

#### Single Selection

![Single Selection](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/single-selection.png)

#### Multiple Selection

You can select the multiple items in the list box.

![Multiple Selection](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/multi-selection.png)

### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/filter.png)

#### Act as Master Widget

This allows you to define this list box widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this list box widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable the hierarchical `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done as flat or hierarchy of added dimension columns.

When the hierarchical filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/container-settings.png)

#### Title Alignment

This allows you to handle the alignment of widget title to either `left, center, or right.`

#### Title Color

This allows you to apply the text `color` to the widget title.

#### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

#### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

#### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** to the list box widget.

#### Transparency

This property allows you to specify the **transparency** for the `background color.`

#### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/list-box/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the list box widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).