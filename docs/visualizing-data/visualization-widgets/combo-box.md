---
layout: post
title: Combo Box Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Combo Box visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/visualizing-data/visualization-widgets/combo-box/"
platform: bold-bi
control: Combo Box
documentation: ug

---

# Combo Box

Combo box enables you to filter the items based on single or multiple items selection in the dropdown list. To bind a combo box, a minimum requirement of 1 column is needed.

![Combobox](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combobox.png)

## How to configure table data to combo box?

The following procedure explains the data configuration of the Combo box:

1.  Drag and drop the `Combo Box` widget from the tool box into design panel and resize into your required size. You can find the widget in tool box by `search`. 

![Combobox](/static/assets/visualizing-data/visualization-widgets/images/combo-box/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. 

![Designer properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combodatatab.png)

9.  The `ASSIGN DATA` tab will be opened with the available measures and dimensions from the connected data source.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/combo-box/comboassigndata.png)

### Adding Values 

You can add the `Measures` or `Dimensions` to the `Columns` section by dragging and dropping the required column.

![Configure Combobox](/static/assets/visualizing-data/visualization-widgets/images/combo-box/configure-widget.png)

### Sorting data

Define the `Sort` of the dropped column through the Sort option in the Settings dropdown menu. For more details, refer to the [Sort](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sorting](/static/assets/visualizing-data/visualization-widgets/images/combo-box/sorting.png)

### Filtering data

Define filter criteria through the `Filter(s)` menu item in the `Settings` drop down menu. For more details, refer to the [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/combo-box/filtering.png)

Clear the filters by selecting the `Show All Records` in the `Settings` dropdown menu.

## How to configure relative dates to Combobox?

Click the `Settings` icon in the dropped date value and select `Relative Dates` in the drop-down menu.

![showing relative dates menu](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combobox-relativedates.png)

In the launched `Relative Date Options` window, configure the relative date and click Add. Repeat this process till the required set of relative dates are added.

![relative date options window](/static/assets/visualizing-data/visualization-widgets/images/combo-box/relativedatefilterwindow-combobox.png)

![relative dates added in window](/static/assets/visualizing-data/visualization-widgets/images/combo-box/relativedateoptionsadded-combobox.png)

You can see the added relative dates in the combo box as follows.  

![showing relative date options in combobox](/static/assets/visualizing-data/visualization-widgets/images/combo-box/relativedateoptions-in-combobox.png)

**Note:** If Multi selection is enabled, then the applied relative dates will be removed.

## How to configure custom relative dates to the Combobox?

Click the `Settings` icon in the dropped date value and select `Relative Dates` in the drop-down menu.

![showing relative dates menu](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combobox-relativedates.png)

In the launched `Relative Date Options` window, select the `Custom` option from the drop-down list.

![selecting custom option in relative dates window](/static/assets/visualizing-data/visualization-widgets/images/combo-box/customoptionin-relativedatefilter-combobox.png)

Choose the start and end dates you like to set as custom range, set a name for the custom range, and then click `Add.` Repeat this process till the required set of custom relative dates are added.


![setting range for custom option](/static/assets/visualizing-data/visualization-widgets/images/combo-box/customdatelimits-relativedates-combobox.png)

![custom date option is added](/static/assets/visualizing-data/visualization-widgets/images/combo-box/customdateadded-relativedates-combobox.png)

You can see the added custom relative dates in the combo box as follows.

![custom date option is displayed in combo box](/static/assets/visualizing-data/visualization-widgets/images/combo-box/customrelativedate-combobox.png)

**Note:** If Multi selection is enabled, then the applied relative dates will be removed.

## How to format combo box?

You can format the combo box for a better illustration of the view that you require through the settings available in the `Properties` tab. This pane can be opened from the design view by clicking the `Settings` icon at the top right corner of the widget.

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-box/property.png)

#### Name

This allows you to set the `title` for this combo box widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-box/title.png)

#### Subtitle

This allows you to set the `subtitle` for this combo box widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-box/Subtitle.png)

#### Description

This allows you to set the brief explanation about this combo box widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-box/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/combo-box/basic-settings.png)

#### Enable Multi-select

`Enable Multi-Select` allows you to select the one or more items in the dropdown list.

#### Single Selection

![Single Selection](/static/assets/visualizing-data/visualization-widgets/images/combo-box/single-selection.png)

#### Multiple Selection

You can able to select the multiple items in the combo box.

![Multiple Selection](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combobox-multiselect.png)

 ***All*** - This allows you to select or unselect all the items in the combo box.

![Multiple Selection All](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combobox-multiselect-all.png)

#### Allow Filter

This allows you to enable a `filter` box for easy filtering of data.

#### Place Holder

The `PlaceHolder` property of a combo box provides context about the user's selection. The placeholder text in the Place Holder text box and combo box is set to `All` by default.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combox-placeholder.png)

#### Customizing Text for Multiple Combo Boxes Simultaneously

If you have multiple combo boxes in your dashboard and you want to customize the placeholder text for all of them at once, [localize](/localization/) the `defaultplaceHolderText` property in the locale file. This property allows you to set a default placeholder text for all combo boxes in your dashboard.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-box/multi-combox-placeholder-before.png)
![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-box/multi-combox-placeholder-locale-customize.png)
![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-box/multi-combox-placeholder-after.png)

#### Customizing Text for a Particular Combo Box

This property can be customized to suit the needs of your dashboard. For example, if you have a combo box for selecting a country, the placeholder text could be 'Select your country.' This gives you clear instructions on what action you need to take.

![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-box/combox-placeholder-customize.png)

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/combo-box/filter.png)

#### Act as Master Widget

This allows you to define this combo box widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this combo box widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable Hierarchical Filtering

Using this option, you can enable or disable hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When `Enable Hierarchical Filtering` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/combo-box/container-appearance.png)

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

This allows you to toggle the visibility of the `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** to the combo box widget.

#### Transparency

This property allows you to specifies the **transparency** for the `background color`.

#### Show Shadow

This allows you to toggle the visibility of `shadow` surrounding the widget.

#### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/combo-box/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the combo box widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).