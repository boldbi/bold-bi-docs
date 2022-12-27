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

The following steps explain the data configuration of a map:

1.  Click the `Data Source` in the configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

2.  Click the `CREATE NEW` to launch a new connection from the connection-type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

3.  In the connection-type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type buttons shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

4.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect`.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

5.  Drag your preferred table or view from the left pane in the data design view and click `Save`.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

6.  Drag the `Map` control icon from the toolbox into the design panel. You can find control by searching in the toolbox.

![Adding Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/drag-drop.png)

7.  Click `Properties` in the configuration panel to open the property pane. Switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

The property panel renders as follows.

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-type.png)

click on the `Assign Data`.

![Choropleth map data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bublemapdatatab.png)

The data tab will be opened with available measures and dimensions from the connected data source.

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapassigndata.png)

Bind columns by dragging the element from the `Measures` section to `Location Value`.

![Bind columns for Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/values-for-bubblemap.png)

Drag the elements from the `Dimension` section to the `Location Name`.

![Add location name field](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/location-name-field.png)

You can use the aggregation function to change the `Location Value` of the column.

![Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-value.png)

You can use the `Filter` to filter the data. For more details, refer to this [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter for Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/filter-data.png)

You can format the values by selecting the `Format` option. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Format for Bubblemap](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/format-data.png)

You can use the `Filter(s)` option to filter the data. For more details, refer to this [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/configuring-widget-filters.png)

You can clear the filters by selecting the `Clear` options.

You can add more than one value to the `Location Name` field. The alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Location Name` field.

Here is an illustration,

**Choropleth map**

![Choropleth map demo](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap.png)

**Bubble map**

![Bubble map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap.png)

There is a section `Location Tooltip`, which is used to show the values of bound columns while rendering tooltips in a map widget.

![Bubble map Tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-tooltip.png)

Here, this value comes with a tooltip.

**Choropleth map**

![Choropleth map Tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-tooltipdata.png)

**Bubble map**

![Bubble map Tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubble-tooltipdata.png)

You can render markers with `Marker Latitude` and `Marker Longitude` data. 

Bind columns by dragging the element from the `Measures` or `Dimension` sections to `Marker Latitude` and `Marker Longitude`. This section allows both `Measures` and `Dimensions`. To render markers, both `Marker Latitude` and `Marker Longitude` sections should have data.

![Bubble map Latitude data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-lat.png)

![Bubble map Longitude data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/marker-longitude.png)

The map renders as follows.

**Choropleth map**

![Choropleth map Marker data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-marker.png)

**Bubble map**

![Bubble map Marker data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapmarker.png)

Marker has an individual tooltip. Bind data to a `Marker Tooltip` from the `Measures` or `Dimensions` sections.

![Bubble map Marker tooltip](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-markerdata.png)

![Bubble map Marker tooltip](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-markerdim.png)

You can use the aggregation function to change the `Marker Tooltip` Which column bounds from the `Measures` section.

![Bubble map Marker tooltip Data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemarker-tooltipagg.png)

You can filter the data using the `Filter` option for both `Measure` and `Dimensions` field data. For more details, refer to this [filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Bubble map Marker tooltip filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-marfil.png)

![Bubble map Marker tooltip filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-marfilter.png)

You can format the values by selecting the `Format` option for `Measure` field data. For more details, refer to the [measure format](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Bubble map Marker tooltip format](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-marformat.png)

Here, the marker tooltip shows data while the cursor hovers over the marker.

**Choropleth map**

![Choropleth map Marker tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-mardata.png)

**Bubble map**

![Bubble map Marker tooltip data](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-markerdata.png)

## How to format a map?

You can format the map for a better illustration of the view that you require using the settings available in the `Properties` tab.

#### General Settings

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/property.png)

#### Name

This allows you to set a `title` for the map widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Title.png)

#### Subtitle

This allow you to set a `subtitle` for the map widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Subtitle.png)

#### Description

This allows you to set a brief explanation about the map widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/Description.png)

#### Basic settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/basicsettings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in a map.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/tooltip.png)

#### Map type

You can choose the map type as choropleth or bubble map.

![Map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choropleth-maptype.png)

By setting the map type as `Bubble`, the show value label property will be hidden.

![Map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/type-change.png)

### Show legend

A Legend is a text used to describe the plotted data. It allows you to toggle the visibility of legend in the map.

![Map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/show-legend.png)

#### Show Label

This allows you to enable the visibility of `Data Labels`.

![Show Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/show-labels.png)

#### Label Color

This allows you to customize the data labels color.

![Value Labels Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/value-label-color-option.png)

![Value Labels Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/value-label-color.png)

### Enable Multi Selection

This option will be enabled only after you enable the `Act as Master Widget` option and this allows you to filter the multiple data by enabling the `Enable Multi Selection` option.

![Enable multi selection](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/multi-selection.png)

#### Shape kind

You can select any type of shape (country or continent or state) from the shape kind drop-down.

![Choropleth color](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemapshape.png)

#### Shape data

You can choose a shape for the selected country or continent or state. The combo box data shows based on the selected values in the `shape Kind`.

![Choropleth map field](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-field.png)

### Legend Settings

This section allows you to customize the legend in the map.

![Choropleth color](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/legend-settings.png)

#### Show legend

This allows you to toggle the visibility of legend in a map. By default, it will be enabled.

#### Type

It defines the legend type whether layers or marker. 

* If Location Value and Location Name alone are configured without Marker Latitude and Longitude, the legend type will be Layers by default. In this case, the Type option will not be shown.

![Layers Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/layers-legend.png)

* If Marker Latitude and Longitude alone bounded with advanced customization in the map without Location Name and Value configuration, the type will be Markers by default. In this case, the Type option will not be shown.

![Markers Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/markers-legend.png)

* If both Location Value and Location Name and Marker Latitude and Longitude with advanced customization configured, the Type option will be shown in `Legend Settings section`.In this case, Legend will be shown based on legend type. In below image, the legend will be shown for Layers by default.

![Legend Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-legend-type.png)

 For type `Markers`, legend will be shown as below.

![Legend Type Marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-legend-type-marker.png)


#### Show Title

This option allows you to toggle the visibility of legend title in a map.

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/show-title.png)

![Show Legend Title in Map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-show-title.png)

#### Title

This allows you to edit the legend title of a map.

![Map Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-customize-legend-title.png)

![Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-customize-legend.png)

#### Position

This provides the option to select the legend placement in a map.

![Legend position](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/legend-top.png)

![Legend position](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/legend-bottom.png)

### Marker Settings

If you bind the Marker latitude and Marker Longitude fields, the Marker settings category will be visible.

![Marker Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/marker-settings.png)

#### Marker Based Zoom

If you enable this option, the map will be automatically zoomed in to the marker area. Here in the following map widget, the map has a single marker. It will be useful for the filtering process.

![Map Zoom](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-zoomin.png)

By enabling this option, the map will be zoomed in on the area where the marker is placed.

![Map Zoom In](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/marker-zoomedin.png)

#### Marker Shape

This option allows you to customize the marker shape on the map.

![Map Shape Dropdown](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-markershape.png)

![Map Shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/marker-shape.png)

#### Color

This option allows you to customize the marker color.

#### Width

This option allows you to customize the marker width

#### Height

This option allows you to customize the marker height.

#### Advanced

This option allows you to customize the map marker.

If you enable the `Advanced` option, the color customization window will render as follows:

![Advance Marker settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-advance-marker-settings.png)

You can change based on the field and summary type.

You can choose a series of colors with the `Color` color picker using multiple condition sets for measure value: greater than, less than, equal to, not equal to, between, not between, greater than or equal to, less than or equal to. For Dimension values: starts with, ends with, contains, not contains, equals, not equals. You can customize the width and height of the marker.

You can customize the shape of the marker with the `Marker Shape` option or you can customize the shape as an image with the `Marker Image` option. You can also customize the legend name by providing the necessary values inside the condition name and you can also add multiple conditions.

![Rule Color changes for marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-markerrulechange.png)

If you click save, the map widget will render like this:

![Rule Color changes for marker in map](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-markerrule.png)

#### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-link.png)

#### Formatting

This section shows up when the `Location Value` and `Location Name` fields have values.

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/bubblemap-colorset.png)

#### Monochromatic

You can configure a single color palette whose saturation differs based on the value density.

![Monochromatic](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/monochromatic-single-color.png)

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/monochromatic-color-change.png)


#### Advanced Settings

This allows you to customize the map color with three different types:
gradient, rule, or individual. By default, the window renders with gradient type.

If you enable the option `Advanced`, the color customization window will render as follows.

![Advance Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-advance-settings.png)

![Advance Color Dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/advance-settings-dialog.png)

### Gradient

You can select based on which field to apply gradient color by the `Based On` dropdown. You can change the summary type. You can edit the `Low` and the `High` value and their colors. By default, the low value takes the minimum value of the map and the high value takes the maximum value of the map. `Mid` can be enabled and can change its value and color can be changed. By default, mid-color is disabled.

If you click save, the map will render as follows.

**Choropleth map**

![Choropleth map Gradient Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-gradient.png)

**Bubble map**

![Bubble map Gradient Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-gradient.png)

### Default color

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-defaultcolor.png)

The default color will apply for the conditions that are not satisfied by the advance color customization.

### Rule

You can select the rule settings by clicking the `Rule` radio button. The color customization window renders as follows.

![Rule Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-rulesettings.png)

You can change based on field and summary type as gradient type. The `Value Type` can be change with value or percentage.

You can choose a series of colors with the `Fill` color picker using multiple condition sets: greater than, less than, equal to, not equal to, between, Not between, greater than or equal to, less than or equal to. You can customize the legend name by providing necessary values inside condition name. You can also add multiple conditions.

![Rule Color changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-rulechange.png)

If you click save the map widget will render like this.

**Choropleth map**

![Choropleth map Rule Color Setting changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choroplethmap-rulesetchanges.png)

**Bubble map**

![Bubble map Rule Color Setting changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-rulesetchanges.png)

### Individual

You can select the rule settings by clicking the `Individual` radio button. The color customization window renders like this.

![Individual settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-individual-settings.png)

This type renders with the individual default color for each value of the map. You can change its color with individual color pickers. If you want to reset your changes return to the default color with `Reset`.

You can save your changes by clicking `Save`. Now, the map renders with changes.

**Choropleth map**

![Choropleth map Individual settings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/choropleth-map-individualsetting.png)

**Bubble map**

![Bubble map Individual settings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-individualsetting.png)

### Filter    

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/filter.png)

#### Act as Master Widget

This allows you to define the map widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

Select a shape to filter interaction, the menu will be shown as follows.

![Context Menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/filtering-menumap.png)

![Filter interaction](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-filterinteraction.png)

If you enable `Act as Mater Widget` option, `Enable Multi Selection` will be shown.

![Multi Selection Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-multiselectoption.png)

This option allows using multiple filter interactions.

Consider if you clicked one shape in the map widget already, then click another shape and select the `Filtering` option on the menu. Now, the slave widget will respond like this.

![Slave for Multi Selection](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/map-multiselectfilter.png)

#### Ignore filter actions

It defines the map widget to ignore the filter actions applied to other widgets in the dashboard.

#### Enable Hierarchical Filter

Through this option, you can enable or disable hierarchical the `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the Hierarchical Filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,** or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allow you to set the **background image** for the map widget.

### Background Color

This allows you to set the **background color** to the map widget.

### Transparency

This property allows you to change the transparency from 0.0 to 1.0.

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the map. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the map widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the map widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the map widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the map widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the map widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/embedded-bi/visualizing-data/working-with-widgets/view-data/).

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the map has been placed with less than 7 rows map legend will be hidden.

![Widget Element](/static/assets/cloud/visualizing-data/visualization-widgets/images/map/legend.png)