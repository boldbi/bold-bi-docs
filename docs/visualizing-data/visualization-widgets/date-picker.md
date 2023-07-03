---
layout: post
title: Date Picker Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Date Picker visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/visualizing-data/visualization-widgets/date-picker/"
platform: bold-bi
control: Date Picker
documentation: ug
lang: en
---

# Date Picker

Date Picker enables you to filter based on the single or range of date selection. 

![date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/datepicker.png)

## How to configure table data to date picker?

The following steps explain to configure the table data to date picker:

1.  Drag and drop the `Date Picker` from the toolbox at left into the design canvas and resize it to your required size.

![dragging date picker into canvas](/static/assets/visualizing-data/visualization-widgets/images/date-picker/drop-widgets.png)

2.  Click the `Data Source` button in the configuration panel.

![data source button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![create new button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![data source page](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![table dragged into table canvas](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![highlights widgets configuration button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![date picker assign data tab](/static/assets/visualizing-data/visualization-widgets/images/date-picker/datepickerdatatab.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![assigning fields to date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/datepickerassigndata.png)

9.  Drag and drop a date field from `Dimensions` into the `Columns` section.

![dragging fields to configure data for date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/configure-widget.png)


## How to configure relative dates to DatePicker?

Switch to the `Properties` pane and set the `Selection Type` as `Range`; Switch back to the `Data` pane; Click the `Settings` icon in the dropped date column and select `Relative Dates...` in the drop-down menu.

![showing relative dates menu](/static/assets/visualizing-data/visualization-widgets/images/date-picker/relativedatesdatepicker.png)

In the launched `Relative Date Options` window, configure the relative date and click Add. Repeat this process till the required set of relative dates are added.

![relative date options window](/static/assets/visualizing-data/visualization-widgets/images/date-picker/relativedatefilterwindow-datepicker.png)

![relative dates added in window](/static/assets/visualizing-data/visualization-widgets/images/date-picker/relativedateoptionsadded-datepicker.png)

You can see the added relative dates in the DatePicker as follows.  

![showcasing relative date options in date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/relativedateoptionsin-datepicker.png)

## How to configure custom relative dates to the DatePicker?

Switch to the  `Properties` pane and set the `Selection Type` as Range, and then switch back to the Data pane; Click the `Settings` icon in the dropped date column and select `Relative Dates...` in the drop-down menu.

![showing relative date options](/static/assets/visualizing-data/visualization-widgets/images/date-picker/relativedatesdatepicker.png)

In the launched `Relative Date Options` window, select the `Custom` option from the drop-down list.

![selecting custom option in relative dates window](/static/assets/visualizing-data/visualization-widgets/images/date-picker/customoptionin-relativedatefilter-datepicker.png)

Choose the start and end dates you like to set as custom range, set a name for the custom range, and then click `Add.` Repeat this process till the required set of custom relative dates are added.


![setting range for custom option](/static/assets/visualizing-data/visualization-widgets/images/date-picker/customdatelimits-relativedatefilter-datepicker.png)

![custom date option is added](/static/assets/visualizing-data/visualization-widgets/images/date-picker/customdateadded-relativedat-datepicker.png)

You can see the added custom relative dates in the DatePicker as follows.

![custom date option is displayed in date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/customrelativedatefilterdisplayed-datepicker.png)

### Filtering data

You can filter the data by using the `Filter` option.

![date picker Filter](/static/assets/visualizing-data/visualization-widgets/images/date-picker/filter-settings.png)

## How to format date picker?

You can format the Date Picker for a better illustration of the view that you require through the settings available in the `Properties` tab.

### General Settings

![date picker name](/static/assets/visualizing-data/visualization-widgets/images/date-picker/property.png)

#### Name

This allows you to set the `title` for this date picker widget.

![date picker name](/static/assets/visualizing-data/visualization-widgets/images/date-picker/Title.png)

#### Subtitle

This allows you to set the `subtitle` for this date picker widget.

![date picker name](/static/assets/visualizing-data/visualization-widgets/images/date-picker/Subtitle.png)

#### Description

This allows you to set the brief explanation about this date picker widget.

![date picker name](/static/assets/visualizing-data/visualization-widgets/images/date-picker/Description.png)

#### Basic Settings

![basic settings of date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/basic-settings.png)

#### Range

This allows you to toggle the selection type of Range.

**Single** – Single date can be bounded, if you disable the `Range` selection option.

![single date selction option](/static/assets/visualizing-data/visualization-widgets/images/date-picker/single-selection.png)

**Range** – A range of dates (two dates) can be bounded,if you enable the `Range` selection option.

![range date selection option](/static/assets/visualizing-data/visualization-widgets/images/date-picker/range-selection.png)

#### Highlight Available Dates

This allows you to enable the highlighting of available dates in the date picker.

![showcasing date picker highlighted date option](/static/assets/visualizing-data/visualization-widgets/images/date-picker/datepicker-high.png)

#### Limit Dates

This allows you to display only the limited dates (dates in the data source) in date picker, by default option will be enabled. If the option is enabled you can select the dates available in the data source.

![date range limit selection](/static/assets/visualizing-data/visualization-widgets/images/date-picker/datepicker-limit.png)

If you disable the Limit Dates option, there is no limit for the date range.

![disabling date range limit](/static/assets/visualizing-data/visualization-widgets/images/date-picker/datepicker-limitless.png)

#### Fixed Calendar Selection

If you enable the `Range` option, the `Fixed Calendar Selection` will be shown.

This allows you to select a date(start or end) without discarding your previous selection.

And you can only select a start date from the left calendar and the end date from the right calendar.

#### Show Latest Date 

The **show latest date** property shows the latest date in the datasource when you open the datepicker popup.

#### Filter

![filter configuration for date picker](/static/assets/visualizing-data/visualization-widgets/images/date-picker/filter.png)

#### Act as Master Widget

This allows you to define this date picker widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this date picker widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable Hierarchical Filtering

Using this option, you can enable or disable the hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the `Enable Hierarchical Filtering` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/date-picker/container-appearance.png)

#### Title Alignment

This allows you to handle the alignment of widget title to either `left, center, or right.`

#### Title Color

This allows you to apply the text `color` to the widget title.

#### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

#### Subtitle Auto Font Size

On enabling Auto Font Size , the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

#### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** to the date picker widget.

#### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

#### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/date-picker/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the date picker widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).
