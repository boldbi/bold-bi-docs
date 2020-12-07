---
layout: post
title: Date Picker Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Date Picker visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/date-picker/"
platform: bold-bi
control: Date Picker
documentation: ug
---

# Date Picker

Date Picker enables you to filter based on the single or range of date selection. 

![date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/datepicker.png)

## How to configure table data to date picker?

Drag and drop the `Date Picker` from toolbox at left into design canvas and resize it to your required size.

![dragging date picker into canvas](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/drop-widgets.png)

Click `Data Source` button in configuration panel.

![data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![create new button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![data source page](/static/assets/embedded/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![table dragged into table canvas](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![highlights widgets configuration button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![date picker assign data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/datepickerdatatab.png)

The data tab will be opened with available measures and dimensions from the connected data source

![assigning fields to date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/datepickerassigndata.png)

Drag and drop a date field from `Dimensions` into `Columns` section.

![dragging fields to configure data for date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/configure-widget.png)


## How to configure relative dates to DatePicker?

Switch to the `Properties` pane and set the `Selection Type` as `Range`; Switch back to the `Data` pane; Click the `Settings` icon in the dropped date column and select `Relative Dates...` in the drop-down menu.

![showing relative dates menu](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/relativedatesdatepicker.png)

In the launched `Relative Date Options` window, configure the relative date and click Add. Repeat this process till the required set of relative dates are added.

![relative date options window](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/relativedatefilterwindow_datepicker.png)

![relative dates added in window](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/relativedateoptionsadded_datepicker.png)

You can see the added relative dates in the DatePicker as follows.  

![showcasing relative date options in date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/relativedateoptionsin_datepicker.png)

## How to configure custom relative dates to the DatePicker?

Switch to the  `Properties` pane and set the `Selection Type` as Range, and then switch back to the Data pane; Click the `Settings` icon in the dropped date column and select `Relative Dates...` in the drop-down menu.

![showing relative date options](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/customrelativedatesdatepicker.png)

In the launched `Relative Date Options` window, select the `Custom` option from drop-down List.

![selecting custom option in relative dates window](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/customoptionin_relativedatefilter_datepicker.png)

Choose the start and end dates you like to set as custom range, set a name for the custom range, and then click `Add`. Repeat this process till the required set of custom 
relative dates are added.

![setting range for custom option](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/customdatelimits_relativedatefilter_datepicker.png)

![custom date option is added](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/customdateadded_relativedate_datepicker.png)

You can see the added custom relative dates in the DatePicker as follows.

![custom date option is displayed in date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/customrelativedatefilterdisplayed_datepicker.png)



## How to format date picker?

You can format the Date Picker for better illustration of the view that you require, through the settings available in `Properties` tab.

**General Settings**

![date picker name](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/general-settings.png)

**Name**

This allows you to set title for this Date Picker widget.

**Basic Settings**

![basic settings of date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/basic-settings.png)

**Range**

This allows you to toggle the selection type of Range.

**Single** – Single date can be bounded, if you disable the `Range` selection option.

![single date selction option](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/single-selection.png)

**Range** – A range of dates (two dates) can be bounded,if you enable the `Range` selection option.

![range date selection option](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/range-selection.png)

**Highlight Available Dates**

This allows you to enable the highlighting of available dates in date picker.

![showcasing date picker highlighted date option](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/datepicker_high.png)

**Limit Dates**

This allows you to display only the limited dates (dates in the datasource) in date picker, by default option will be enabled. If option is enabled you can select the dates available in the data source.

![date range limit selection](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/datepicker_limit.png)

If you disable the Limit Dates option, there is no limit for the date range.

![disabling date range limit](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/datepicker_limitless.png)

**Filter**

![filter configuration for date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/filter.png)

**Act as Master Widget**

This allows you to define this date picker widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this date picker widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Container Settings**

![container settings for date picker](/static/assets/embedded/visualizing-data/visualization-widgets/images/date-picker/container-settings.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/embedded-bi/working-with-widgets/commenting-widget/)






