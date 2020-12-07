---
layout: post
title: Visualizing Maps – Cloud BI | Bold BI Documentation
description: Learn how to create a Map visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Map
documentation: ug
---
#  Configuring and Formatting a Map

## Choropleth map

Choropleth maps allow you to showcase quantitative values encoded using color scale. 

![Choropleth Map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap.png)

## Bubble map

Bubble maps allow you to showcase quantitative values encoded using bubble size.

![Bubble map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap.png)

## How to change map type as choropleth or bubble?

You can change map type as choropleth or bubble by `Map Type` property.

![Map Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-type.png)

## How to configure the table data into a map?

To plot a map, a minimum requirement of 1 value and 1 shape are needed. Dropping a dimension will display each region split by each of its item.

The following steps explains the data configuration of a map.

Click `Data Source` in configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` to launch a new connection from the connection-type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection-type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type buttons shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect`.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane in the data design view and click `Save`.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Drag the `Map` control icon from the tool box into the design panel. You can find a control in the tool box by searching.

![Adding Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Adding-Bubblemap.png)

Click `Properties` in the configuration panel to open the property pane. Switch to `ASSIGN DATA` tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubbleMapPropertiesbutton.png)

 property panel render as follows.

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-type.png)

You can change map type as choropleth or bubble by `Map Type` property.

 click on `Assign Data`.

![Choropleth map data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/buublemapdatatab.png)

The data tab will be opened with available measures and dimensions from the connected data source

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapassigndata.png)

Bind columns by dragging the element from the `Measures` section to `Location Value`.

![Bind columns for Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Bind-columns-for-Bubblemap.png)

Drag the elements from the `Dimension` section to `Location Name`.

![Add location name field](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Add-location-name-field.png)

You can use the aggregation function to change the `Location Value` of the column.

![Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap_value.png)

You can use the `Filter` to filter the data. For more details, refer to this [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter for Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Filter-for-Bubblemap.png)

You can format the values by selecting the `Format` option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Format for Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Format-for-Bubblemap.png)

You can use the `Filter(s)` option to filter the data. For more details, refer to this [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/configuring-widget-filters.png)

You can clear the filters by selecting the `Clear` options.

You can add more than one value to the `Location Name` field. The alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Location Name` field.

Here is an illustration,

Choropleth map

![Choropleth map demo](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap.png)

Bubble map

![Bubble map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap.png)

There is a section `Location Tooltip` used to show the values of bound columns while rendering tooltips in a map widget.

![Bubble map Tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapTooltip.png)

Here, this value comes with a tooltip.

Choropleth map

![Choropleth map Tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmapTooltipdata.png)

Bubble map

![Bubble map Tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemaptooltipdata.png)

You can render markers with `Marker Latitude` and `Marker Longitude` data. 

Bind columns by dragging element from the `Measures` or `Dimension` sections to `Marker Latitude` and `Marker Longitude`. This section allows both `Measures` and `Dimensions`. To render markers, both `Marker Latitude` and `Marker Longitude` sections should have data.

![Bubble map Latitude data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapLat.png)

![Bubble map Longitude data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapLong.png)

the map renders as follows.

Choropleth map

![Choropleth map Marker data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmapMarker.png)

Bubble map

![Bubble map Marker data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapmarker.png)

Marker have individual tooltip. Bind data to a `Marker Tooltip` from the `Measures` or `Dimensions` sections.

![Bubble map Marker tooltip](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapMarkerdata.png)

![Bubble map Marker tooltip](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapMarkerdim.png)

You can use the aggregation function to change the `Marker Tooltip` Which column bounds from `Measures` section.

![Bubble map Marker tooltip Data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubbleMarkertoltipAgg.png)

You can filter the data using the `Filter` option for both `Measure` and `Dimensions` field data. For more details, refer to this [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Bubble map Marker tooltip filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapMarfil.png)

![Bubble map Marker tooltip filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapMarfilter.png)

You can format the values by selecting the `Format` option for `Measure` field data. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)

![Bubble map Marker tooltip format](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapMarformat.png)

Here, the marker tooltip shows data while the cursor hovers over the marker.

Choropleth map

![Choropleth map Marker tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmapMardata.png)

Bubble map

![Bubble map Marker tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapMardata.png)

## How to format a map?

You can format the map for better illustration of the view that you require using the settings available in the `Properties` tab.

**General Settings**

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapname.png)

**Name**

This allows you to set a title for the map widget.

**Subtitle**

This allow you to set a subtitle for the map widget.

**Description**

This allows you to set a brief explanation about the map widget.

**Basic settings**

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Basic-Settings.png)

**Map type**

You can choose the map type as choropleth or bubble map.

![Map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethMapType.png)

**Shape kind**

You can select any type of shape (country or continent or state) from the shape kind drop-down.

![Choropleth color](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapshape.png)

**Shape data**

You can choose a map listed in the combo box for the map.

![Choropleth map field](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap_field.png)

**Link**

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap_link.png)

**Color settings**

This section shows up when `Location Value` and `Location Name` field have values.

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapColorset.png)

**Monochromatic**

You can configure a single color palette whose saturation differs based on the value density.

**Advanced**

This allows you to customize map color with three different types:
gradient, rule, or individual. By default, the window renders with gradient type.

If you enable the option `Advanced`, the color customization window will render as follows.

![Advance Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map_advWindow.png)

***Gradient***

You can select based on which field to apply gradient color by `Based On` drop down. You can change the summary type. You can edit the `Low` and the `High` value and their colors. By default, the low value takes the minimum value of the map and the high value takes the maximum value of the map. `Mid` can be enable and can change its value and color can be changed. By default, mid-color is disabled.

If you click save, the map will renders as follows.

Choropleth map

![Choropleth map Gradient Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-gradient.png)

Bubble map

![Bubble map Gradient Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-gradient.png)

***Default color***

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-defaultcolor.png)

Default color will apply for conditions not satisfied by advance color customization.

***Rule***

You can select rule settings by clicking the `Rule` radio button. The color customization window renders as follows.

![Rule Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-rulesettings.png)

You can change based on field and summary type as gradient type. The `Value Type` can be change with value or percentage.

You can choose a series of colors with the `Fill` color picker using multiple condition sets: greater than, less than, equal to, not equal to, between, Not between, greater than or equal to, less than or equal to. You can customize the legend name by providing necessary values inside condition name. You can also add multiple conditions.

![Rule Color changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-rulechange.png)

If you click save, the map widget renders like this.

Choropleth map

![Choropleth map Rule Color Setting changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-rulesetchanges.png)

Bubble map

![Bubble map Rule Color Setting changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-rulesetchanges.png)

***Individual***

You can select the rule settings by clicking `Individual` radio button. The color customization window renders like this.

![Individual settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-IndividualSettings.png)

This type renders with the individual default color for each value of the map. You can change its color with individual color pickers. If you want to reset your changes return to the default color with `Reset`.

You can save your changes by clicking `Save`. Now, the map renders with changes.

Choropleth map

![Choropleth map Individual settings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choropleth-mapIndividualsetting.png)

Bubble map

![Bubble map Individual settings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-individualsetting.png)

**Filter**     

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/filter.png)

**Filter act as master widget**

This allows you to define the map widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore filter actions**

This allows you to set the map widget to ignore the filter actions applied on other widgets in the dashboard.

**Filter Interaction**

By enabling the `Act as Mater Widget` option, map will act as master.

Select shape to filtering interaction, the menu will be shown like this.

![Context Menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/filteringMenuMap.png)

Click the `Filtering` option in the menu and interaction of filtering like this.

![Filter interaction](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-filterinteraction.png)

If you enable `Act as Mater Widget` option, `Enable Multi Selection` will be shown.

![Multi Selection Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-multiselectoption.png)

This option allows using multiple filter interactions.

Consider if you clicked one shape in the map widget already, then click another shape and select the `Filtering` option on the menu. Now, the slave widget will respond like this.

![Slave for Multi Selection](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-multiselectfilter.png)

**Container appearance**

![Container appearance properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/ContainerAppearance.png)

**Title alignment**

This allows you to set the alignment of a widget title to either the left, center or right.

**Title color**

This allows you to apply text color to the widget title.

**Show border**

This allows you to apply a specified radius to the widget corners, if the **Show Border** property is enabled, then the value can be between 0 and 10.

**Corner radius**

This allows you to apply a specified radius to the widget corners. The value can be between 0 and 10.

**Show maximize**

This allows you to enable or disable the maximized mode of the map widget. The visibility of the maximize icon in the widget header will be defined based on this setting. Clicking this icon in viewer will show the maximized view of the map widget.

**CSV export**

This allows you to enable or disable the CSV export option for the map widget. Enabling this allows you to export the summarized data of the widget view to CSV format.

**Excel export**

This allows you to enable or disable the Excel export option for the map widget. Enabling this allows you to export the summarized data of the widget view to (.xlsx or .xls) format.

**Image export**

This allows you to enable or disable the image export option for the map widget. Enabling this allows you to export the view of the widget to image format (.jpg), (.png), or (.bmp) in viewer.

**Enable comments**

This allows you to enable or disable comment for the dashboard widget. For more details, refer [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/)






