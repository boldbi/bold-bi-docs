---
layout: post
title: Period Over Period Widget – Embedded BI | Bold BI Learning
description: Learn how to create a Period over Period visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/period-over-period/"
platform: bold-bi
control: Period Over Period
documentation: ug
---

# Period Over Period(PoP)

Period over Period support used to compare measure values for one period of time against the results from a previous or subsequent period of time. PoP widget used to choose two different time periods at a time.

![period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop.png)

## How to configure table data to Period over Period?

1.  Drag and drop the `Period Over Period` from the toolbox at left into the design canvas and resize it to your required size.

![dragging period over period into canvas](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-draganddrop.png)

2.  Click the `Data Source` button in the configuration panel.

![data source button](/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![create new button](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![data source list](/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![data source page](/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![table dragged into table canvas](/static/assets/embedded/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![highlights widgets configuration button](/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![period over period assign data tab](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-assigndata.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![assigning fields to period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/fieldlists.png)

9.  Drag and drop a date field from `Dimensions` into the `Columns` section.

![dragging fields to configure data for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/configure-widget.png)

### Binding Fields
On binding field to PoP widget, default date ranges calculated based on the bounded field and set as a selected filter.

![default date range for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-defaultdaterange-denote.png)

By default, the PoP widget renders with some default filter value and which can not be discarded. We allow only to reset the filters to default if we made changes. The default date range is calculated based on the days' pan between min and max dates of the bounded field.

You can select the Relative/Custom date ranges using the `Relative Combobox` or `Calendars.` We can select any date ranges irrespective of the bounded field. That field is used to calculate the default date ranges and filtering purposes.

![popup dialog for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-popup.png)


The following relative items are displayed under the Date Range:

![date range relative items for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-daterange-relativeitems.png)

The following relative items are displayed under the Compare To:

![date range relative items for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-customrange-relativeitems.png)  

In both relative items Combobox, the `Custom` will be selected automatically if you choose custom range from calendar or enter custom range manually using the `Combobox` input section.

> **IMPORTANT:**  
* PoP widget won't act as slave for any widget. 
* PoP always having some value selected by default it in. We can reset, but we can’t discard it’s filter values.
* No widget mapped as slave by default to PoP, we need to manually configure the required widgets as slave. 
* The widget acting as slave for PoP will display it’s virtual measure in view mode alone. 
* For now, PoP supported provided for Chart widget(except Combo and Radar Polar) alone.



## How 'Compare To' relative items range calculated?

`Compare To` relative items value calculated dynamically based on the date range selection from `Date Range.` You can see how it calculated for each relative item:

1. `Previous Period`:

It is calculated based on the number of days between the selected dates(start and end) of `Date Range.` For example, consider the `Date Range` selected value as `1-Jan-2019 to 10-Jan-2019.` Here, the number of days between the selected dates is 10. So, the `Previous Period` value for the selected range is `22-Dec-2018 to 31-Dec-2018.`

2. `Previous Year`:

It is a previous year date of the selected date values from the `Date Range.` For example, consider the `Date Range` selected value as `1-Jan-2019 to 10-Jan-2019.` Here, the year of start and end date value is 2019. So, the `Previous Year` value for the selected range is `1-Jan-2018 to 10-Jan-2018.`


## How the PoP filtering works in Slave Widget?

Comparison types of charts like `Bar,` `Column,` `Stacked Bar,` `Stacked Column,` `100% Stacked Bar,` and `100% Stacked Column.` Distribution types of charts `Line,` `Spline,` `Spline Area,` `Area,` `Stacked Area,` and `100% Stacked Area.` Proportional types of charts `Pie,` `Doughnut,` `Pyramid,` and `Funnel` and `Grid` can be slave widgets for `Period Over Period.` `KPI Card` can be slave for `Period Over Period` widget when `Actual Value` only configured in card.

Consider you configured `Column chart`, `Grid`, `KPICard.` You can change the `Column Chart`, `Grid`, `KPICard` as a slave for the `Period Over Period` widget by using the filter interaction window as shown below.

![Chart as slave widget in filter configuration](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-slavewidget.png)

Once you configured, the `Chart` color palette will be changed using the `PoP` selection colors(blue and green). The red information icon denotes that the chart virtual column value will not get a display in the design mode.

![chart color palette update for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-chartcolors.png)

Similarly, you can see an option to customize legend and palette for the virtual column which will be displayed in the Designer Preview/View Mode.

![chart custom legend for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-customlegend.png) 

![chart color palette option for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-colorpalette.png) 

![chart color palette option for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-colorpalettech.png) 

During interaction from the PoP widget, the chart will display two series. One having values filtered from `Date Range` and another one contains filtered values from `Compare To.`

![period over period workflow](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-workflow.png) 

The `Grid` color palette will be changed using the `PoP` selection colors(blue and green). The red information icon denotes that the chart virtual column value will not get a display in the design mode.

![Grid color palette update for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-gridcolors.png)

You can see a category to customize POP settings and palette for the grid which will be displayed in the Designer Preview/View Mode.

![Grid pop settings update for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-gridcolorpalette.png)

You can customize each column that is to be displayed in the Designer Preview/View Mode using the `Customize` option. If you click on the `Customize` option, the following window shows:

![Grid pop settings update for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-gridcustomize.png)

During interaction from the PoP widget, the grid will display two series for each column which are a slave to the POP. One has values filtered from the `Date Range` while another one contains filtered values from `Compare To.`

![period over period grid workflow](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-gridworkflow.png)

The `KPI Card` will be shown with the following information. You can visualize its value in Designer Preview/View Mode

![KPI Card info update for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-kpicard.png)

During interaction from the PoP widget, the KPI Card will display two series. One has values filtered from `Date Range` which displays as `Actual Value` while another one contains filtered values from `Compare To` which displays as `Target Value.`

![period over period kpicard workflow](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-kpicardworkflow.png)

Please find the response of different type of charts as slave of PoP widgets.

**Bar Chart**

![Bar chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-barslave.png)

**Line Chart**

![Line chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-linechartslav.png)

**Area Chart**

![Area chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-areaslave.png)

**Spline Chart**

![Spline chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-splineslave.png)

**Spline Area Chart**

![Spline Area chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-splineareaslave.png)

**Stacked column Chart**

![Stacked chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-slavestacked.png)

**Percent Stacked bar chart**

![Percent Stacked bar chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-percentchartslave.png)

Consider you have configured the `Proportional Chart` as a slave for the `Period Over Period` widget. Like the column, the line chart's color palette will not be changed. The Red information icon denotes that the comparison of period visualization will not be shown in the design mode.

![Proportion chart update in design mode](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-proportionalchart.png)

During the interaction of Pop Widget, the proportional chart will display two series. One shows values filtered from `Date Range` another one contains filtered values from `Compare To.`

![Proportional chart as slave widget](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/pop-proportional.png)

## How to format Period Over Period?

You can format the Period Over Period for better illustration of the view that you require, through the settings available in `Properties` tab.

### General Settings

![period over period name](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/generalsettings.png)

#### Name 
This option allows you to change the title for the Period Over Period.

#### Subtitle

Allows you to provide subtitle for Period Over Period.

#### Description

Allows you to provide a description about the Period Over Period.

### Filter

![filter configuration for period over period](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/filtersettings.png)

### Act as Master Widget 

This allows you to define this PoP as a master widget such that its filter action can be made to listen by other widgets in the dashboard.


#### Container Appearance

![Container Appearance](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/container-appearance.png)

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

This allows you to toggle the visibility of the `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** to the period over period widget.

#### Transparency

This property allows you to specify the **transparency** for the `background color.`

#### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

#### Container actions

![Container Actions](/static/assets/embedded/visualizing-data/visualization-widgets/images/pop/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the period over period widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).