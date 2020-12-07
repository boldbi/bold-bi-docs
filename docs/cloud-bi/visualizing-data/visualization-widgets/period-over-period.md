---
layout: post
title: Period Over Period Widget – Cloud BI | Bold BI Learning
description: Learn how to create a Period over Period visual in Bold BI Cloud dashboard, configure data field and other settings.
platform: bold-bi
control: Period Over Period
documentation: ug
---

# Period Over Period(PoP)

Period over Period support used to compare measure values for one period of time against the results from a previous or subsequent period of time. PoP widget used to choose two different time periods at a time.

![period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop.png)

## How to configure table data to Period over Period?

Drag and drop the `Period Over Period` from toolbox at left into design canvas and resize it to your required size.

![dragging period over period into canvas](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_draganddrop.png)

Click `Data Source` button in configuration panel.

![data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![create new button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![data source page](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![table dragged into table canvas](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![highlights widgets configuration button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![period over period assign data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_assigndata.png)

The data tab will be opened with available measures and dimensions from the connected data source

![assigning fields to period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/fieldlists.png)

Drag and drop a date field from `Dimensions` into `Columns` section.

![dragging fields to configure data for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/configure-widget.png)

On binding field to PoP widget, default date ranges calculated based on the bounded field and set as selected filter. 

![default date range for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_defaultdaterange_denote.png)

By default, PoP widget render with some default filter value and which can't be discard. We allow only to reset the filters to default if we made changes. The default date range calculated based on the days pan between min and max dates of the bounded field.

![reset and info icon for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_infoandclear_icon.png)


You can select the Relative/Custom date ranges using `Relative Combobox` or `Calendars`. We can select any date ranges irrespective of the bounded field. That field is used to calculated the default date ranges and filtering purpose.

![popup dialog for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_popup.png)


The following relative items displayed under Date Range:

![date range relative items for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_daterange_relativeitems.png)

The following relative items displayed under Compare To:

![date range relative items for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_customrange_relativeitems.png)  

In both relative items Combobox, `Custom` will be selected automatically if you choose custom range from calendar or enter custom range manually using `Combobox` input section.

> **IMPORTANT:**  
* PoP widget won't act as slave for any widget. 
* PoP always having some value selected by default it in. We can reset, but we can’t discard it’s filter values.
* No widget mapped as slave by default to PoP, we need to manually configure the required widgets as slave. 
* The widget acting as slave for PoP will display it’s virtual measure in view mode alone. 
* For now, PoP supported provided for Chart widget(except Combo and Radar Polar) alone.



## How 'Compare To' relative items range calculated?

`Compare To` relative items value calculated dynamically based on the date range selection from `Date Range`. You can see how it calculated for each relative item:

1. `Previous Period`: It is calculated based on the number of days between the selected dates(start and end) of `Date Range`. For example, consider `Date Range` selected value as `1-Jan-2019 to 10-Jan-2019`. Here, the number of days between the selected dates is 10. So, `Previous Period` value for the selected range is `22-Dec-2018 to 31-Dec-2018`.

2. `Previous Year`:
It is a previous year dates of the selected date values from `Date Range`. For example, consider `Date Range` selected value as `1-Jan-2019 to 10-Jan-2019`. Here, year of start and end date value is 2019. So, `Previous Year` value for the selected range is `1-Jan-2018 to 10-Jan-2018`.


## How the PoP filtering works in Slave Widget?
Comparison types of charts like `Bar`, `Column`, `Stacked Bar`, `Stacked Column`, `100% Stacked Bar`, `100% Stacked Column`, Distribution types of charts `Line`, `Spline`, `Spline Area`, `Area`, `Stacked Area`, `100% Stacked Area`, Proportional types of charts `Pie`, `Doughnut`, `Pyramid`, `Funnel` can be slave widget for `Period Over Period`.

Consider you configured `Column chart`. You can change `Column Chart` as slave for `Period Over Period` widget by using filter interaction window as shown below. 

![Chart as slave widget in filter configuration](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_slaveWidget.png)

 Once you configured, `Chart` color palette will be changed using `PoP` selection colors(blue and green). The red information icon denote that chart virtual column value won't get display in design mode.

![chart color palette update for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_chartcolors.png)

Similarly, you can see option to customize legend and palette for virtual column which will be displayed in Designer Preview/View Mode.

![chart custom legend for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_customlegend.png) 

![chart color palette option for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_colorpalette.png) 

![chart color palette option for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_colorpalettech.png) 

During interaction from PoP widget, chart will display two series. One having values filtered from `Date Range` and another one contains filtered values from `Compare To`.

![period over period workflow](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_workflow.png) 

Please find the response of different type of charts as slave for PoP widgets.

**Bar Chart**
![Bar chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_barSlave.png)

**Line Chart**
![Line chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_lineChartSlav.png)

**Area Chart**
![Area chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_areaSlave.png)

**Spline Chart**
![Spline chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_splineSlave.png)

**Spline Area Chart**
![Spline Area chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_splineAreaSlave.png)

**Stacked column Chart**
![Stacked chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_slaveStacked.png)

**Percent Stacked bar chart**
![Percent Stacked bar chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_percentChartSlave.png)

Consider you have configured `Proportional Chart` as slave for `Period Over Period` widget. Like column, line charts color palette will not be changed. The Red information icon denote that comparison of period visualization won't be shown in design mode.

![Proportion chart update in design mode](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_proportionalChart.png)

During interaction of Pop Widget, proportional chart will display two series. One shows values filtered from `Date Range` another one contains filtered values from `Compare To`.

![Proportional chart as slave widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_proportionalChartSlave.png)

## How to format Period Over Period?

You can format the Period Over Period for better illustration of the view that you require, through the settings available in `Properties` tab.

### General Settings

![period over period name](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_generalsettings.png)

#### Name 
This option allows you change the title for the Period Over Period.

#### Subtitle
Allows you provide subtitle for Period Over Period.

##### Description
Allows you provide description about the Period Over Period.

### Filter

![filter configuration for period over period](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_filtersettings.png)

### Act as Master Widget 

This allows you to define this PoP as a master widget such that its filter action can be made to listen by other widgets in the dashboard.


### Container Settings

![container settings for date picker](/static/assets/cloud/visualizing-data/visualization-widgets/images/pop/pop_containerappearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either left, center or right.

### Title Color

This allows you to apply text color to the widget title.

### Show Border

This allows you to toggle the visibility of border surrounding the widget.

### Corner Radius

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

### Enable Comments

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/)






