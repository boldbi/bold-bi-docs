---
layout: post
title: Visualizing Maps – Embedded BI | Bold BI Documentation
description: Learn how to create a Map visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/map/"
platform: bold-bi
control: Map
documentation: ug

---
#  Configuring and Formatting a Map

## Choropleth map

Choropleth maps allow you to display quantitative values encoded using a color scale.

![Choropleth Map](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap.png)

## Bubble map

Bubble maps allow you to showcase quantitative values encoded using bubble size.

![Bubble map](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap.png)

## How to change map type as choropleth or bubble?

You can change the map type to choropleth or bubble by using the `Map Type` property.

![Map Type](/static/assets/visualizing-data/visualization-widgets/images/map/map-type.png)

## How to configure the table data into a map?

To plot a map, you need a minimum requirement of 1 value and 1 shape. Dropping a dimension will display each region split by each of its items.

The following steps explain the data configuration of a map:

1.  Click on the `Data Source` in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

2.  Click on `CREATE NEW` to launch a new connection from the connection-type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

3.  In the connection-type panel, click on any one of the listed connection type buttons (Here, the `Microsoft Excel` Connection type is selected for demonstration).

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

4.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Click on `Connect`.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

5.  Drag your preferred table or view from the left pane in the data design view and click `Save.`

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

6.  Drag the `Map` control icon from the toolbox into the design panel. You can find the control by searching in the toolbox.

![Adding Bubblemap](/static/assets/visualizing-data/visualization-widgets/images/map/drag-drop.png)

7.  Click on `Properties` in the configuration panel to open the property pane. Switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

The property panel will render as follows.

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/map/map-type.png)

click on the `Assign Data.`

![Choropleth map data tab](/static/assets/visualizing-data/visualization-widgets/images/map/bublemapdatatab.png)

The data tab will be opened with available measures and dimensions from the connected data source.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemapassigndata.png)

Bind columns by dragging the element from the `Measures` section to `Location Value`.

![Bind columns for Bubblemap](/static/assets/visualizing-data/visualization-widgets/images/map/values-for-bubblemap.png)

Drag the elements from the `Dimension` section to `Location Name`.

![Add location name field](/static/assets/visualizing-data/visualization-widgets/images/map/location-name-field.png)

You can use the aggregation function to change the `Location Value` of the column.

![Value](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-value.png)

You can use the `filter` to filter the data. For more details, refer to this [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Filter for Bubblemap](/static/assets/visualizing-data/visualization-widgets/images/map/filter-data.png)

You can format the values by selecting the `Format` option. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Format for Bubblemap](/static/assets/visualizing-data/visualization-widgets/images/map/format-data.png)

You can use the `Filter(s)` option to filter the data. For more details, refer to this [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Configuring widget filters](/static/assets/visualizing-data/visualization-widgets/images/map/configuring-widget-filters.png)

You can clear the filters by selecting the `Clear` options.

You can add more than one value to the `Location Name` field. The alert message will be shown to enable the drill-down option. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Location Name` field.

Here is an illustration,

**Choropleth map**

![Choropleth map demo](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap.png)

**Bubble map**

![Bubble map](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap.png)

There is a section called `Location Tooltip`, which is used to show the values of bound columns while rendering tooltips in a map widget.

![Bubble map Tooltip data](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-tooltip.png)

Here, this value comes with a tooltip.

**Choropleth map**

![Choropleth map Tooltip data](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap-tooltipdata.png)

**Bubble map**

![Bubble map Tooltip data](/static/assets/visualizing-data/visualization-widgets/images/map/bubble-tooltipdata.png)

You can render markers with `Marker Latitude` and `Marker Longitude` data. 

Bind columns by dragging the element from the `Measures` or `Dimension` sections to `Marker Latitude` and `Marker Longitude.` This section allows both `Measures` and `Dimensions.` To render markers, both `Marker Latitude` and `Marker Longitude` sections should have data.

![Bubble map Latitude data](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-lat.png)

![Bubble map Longitude data](/static/assets/visualizing-data/visualization-widgets/images/map/marker-longitude.png)

The map renders as follows.

**Choropleth map**

![Choropleth map Marker data](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap-marker.png)

**Bubble map**

![Bubble map Marker data](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemapmarker.png)

Each marker has an individual tooltip. Bind data to a `Marker Tooltip` from the `Measures` or `Dimensions` sections.

## Marker Size

If you wish to modify the size of the marker according to the data, then you can configure that data in the `Marker Size` section. You can only configure the measured field for Marker Size.

![Map Marker Size Container](/static/assets/visualizing-data/visualization-widgets/images/map/markersize.png)

After configuring the marker size field, the map renders as follows:

![Map with Marker Size](/static/assets/visualizing-data/visualization-widgets/images/map/mapwithmarkersize.png)

> **Note:** After configuring the marker size, the width and height of the marker settings under the property panel will be disabled automatically.

![Bubble map Marker tooltip](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-markerdata.png)

![Bubble map Marker tooltip](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-markerdim.png)

You can use the aggregation function to change the column bounds in the `Marker Tooltip` from the `Measures section`.

![Bubble map Marker tooltip Data](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemarker-tooltipagg.png)

To filter the data, you can use the `Filter` option for both `Measure` and `Dimensions` field data. For more details, refer to this [filter](/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Bubble map Marker tooltip filter](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-marfil.png)

![Bubble map Marker tooltip filter](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-marfilter.png)

You can format the values by selecting the `Format` option for `Measure` field data. For more details, refer to the [measure format](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Bubble map Marker tooltip format](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-marformat.png)

Here, the marker tooltip shows data while the cursor hovers over the marker.

**Choropleth map**

![Choropleth map Marker tooltip data](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap-mardata.png)

**Bubble map**

![Bubble map Marker tooltip data](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-markerdata.png)

## Hidden Column

Hidden columns are useful when we don't want certain fields to be part of the visualization, but only used for [linking](#linking), [filtering](#filtering) and [view data](#view-data).

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/map/assigndata.png)

We can configure both measure and dimension fields into the hidden column. For measures, we have all the settings available except for formatting and filtering.

![Measure](/static/assets/visualizing-data/visualization-widgets/images/map/measure.png)

For dimension fields, we only have the following options.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/map/dimension.png)

#### Linking

Linking is the primary use case for hidden columns. When configuring hidden columns, the fields are listed in the linking section. By configuring a column in linking, we can pass the corresponding column value in the linking parameter.

**Measure Based Example:** If we want to pass the number of UnitsInStock as a URL parameter without influencing the visualization, we can configure UnitsInStock in the hidden columns and incorporate it into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/map/link-measure.png)

**Dimension Based Example:** If we want to pass the region as a URL parameter without influencing the visualization, we can configure the region in the hidden columns and incorporate it into the link.

![linking](/static/assets/visualizing-data/visualization-widgets/images/map/link-dimension.png)

#### Filtering

You can use hidden columns to filter data in the visualizations. Configure hidden columns and click the below filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/map/filtericon.png)

Click on the Custom button highlighted in the filter configuration dialog image below. It will display a list of all the fields that are configured in the widget. Keep the field that is configured in the hidden column and remove the other fields. Then, click on the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/map/custom.png)

Now, in the image below, we can see that the data is filtered based on the field in the hidden column instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/map/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/)

#### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.

![View date](/static/assets/visualizing-data/visualization-widgets/images/map/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the info icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/map/info-icon.png)

The map below displays the unit price by ship country without hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/map/before.png)

If we configure lower hierarchy data (Ship City) in hidden columns, the data configured in the widgets gets duplicated, and incorrect data is displayed in the tooltip, as shown in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/map/after.png)

## How to format a map?

You can format the map for a better illustration of the view that you require using the settings available in the `Properties` tab.

#### General Settings

![General settings](/static/assets/visualizing-data/visualization-widgets/images/map/property.png)

#### Name

This allows you to set a `title` for the map widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/map/Title.png)

#### Subtitle

This allows you to set a `subtitle` for the map widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/map/Subtitle.png)

#### Description

This allows you to set a brief explanation about the map widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/map/Description.png)

#### Basic settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/map/basicsettings.png)

#### Show Tooltip

This option allows you to toggle the visibility of the tooltip in a map.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/map/tooltip.png)

#### Map type

You can choose the map type as choropleth or bubble map.

![Map](/static/assets/visualizing-data/visualization-widgets/images/map/choropleth-maptype.png)

By setting the map type as `Bubble`, the show value label property will be hidden.

![Map](/static/assets/visualizing-data/visualization-widgets/images/map/type-change.png)

### Show legend

A legend is a text used to describe the plotted data. It allows you to toggle the visibility of the legend in the map.

![Map](/static/assets/visualizing-data/visualization-widgets/images/map/show-legend.png)

#### Enable Zooming

This allows you to toggle the visibility of zooming buttons.

![Map](/static/assets/visualizing-data/visualization-widgets/images/map/enableZooming-enable-option.png)

#### Show Label

This allows you to enable the visibility of `Data Labels.`

![Show Labels](/static/assets/visualizing-data/visualization-widgets/images/map/show-labels.png)

#### Label Color

This allows you to customize the color of the data labels.

![Value Labels Color](/static/assets/visualizing-data/visualization-widgets/images/map/value-label-color-option.png)

![Value Labels Color](/static/assets/visualizing-data/visualization-widgets/images/map/value-label-color.png)

### Enable Multi Selection

This option will only be enabled after you enable the `Act as Master Widget` option, and it allows you to filter multiple data by enabling the `Enable Multi Selection` option.

![Enable multi selection](/static/assets/visualizing-data/visualization-widgets/images/map/multi-selection.png)

#### Shape kind

You can select any type of shape (country, continent, or state) from the shape kind drop-down.

![Choropleth color](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemapshape.png)

#### Shape data

You can choose a shape for the selected country, continent, or state. The combo box data is based on the selected values in the `shape Kind`.

![Choropleth map field](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-field.png)

### How to add new shape files

If you want to load new map shape files into the map, for example, if you wish to load the India shape file with district split-ups instead of states, follow these steps:

1. Download the India map shape file with district split-ups from any open-source website.

2. Convert the downloaded shape files to `GeoJSON` format using any open-source tool.

3. Extract the downloaded shape file folder and rename to `customindia.js`. Ensure that the file name is in lowercase and spaces are replaced with underscores (e.g., `south_africa.js`).

    ![Rename shapefile](/static/assets/visualizing-data/visualization-widgets/images/map/shapefile-name.png)

4. Open the `customindia.js` file and add the following text at the beginning: `ejdashboard.Customindia =` and then save the file.

    ![shapefile Text](/static/assets/visualizing-data/visualization-widgets/images/map/shapefilename-text.png)

5. Copy this `customindia.js` file and paste it into the `app_data/bi/shapefiles` path.

    ![new shape file added](/static/assets/visualizing-data/visualization-widgets/images/map/newshapeadded.png)

6. Next, add the customized shape name to the `shapefile.json` file. The `text` is only for display purposes, and the `value` should be similar to the shape file text (e.g., the value should be `Customindia` if we use the `ejdashboard.Customindia` as the starting text).

7. The shape file name should be added based on the shape kind. For example, since India is a country, the shape name should be added to the country collections in the JSON file.

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/newshapeaddedjson.png)

8. Reload the dashboard page and go to the property panel. Now, you should see the customized shape name that we added in the `shapefile.json` in the shape data dropdown. 
    If you don't add the shape name to the `shapefile.json` file, the shape name will not be listed in the `shape data` dropdown.

    ![Rename shape file](/static/assets/visualizing-data/visualization-widgets/images/map/dropdown.png)

9. Click on the shape name and the customized shape will be rendered in the map widget based on the data configuration.

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/customindia.png)

### Drill down configuration

By default, the state shapes in India are divided into districts. However, if you prefer to drill the state shapes with city divisions instead of districts (e.g., if you want to drill the shape of `Tamil Nadu` with city divisions instead of districts), follow these steps:

1. Download the `Tamil Nadu` shape file with the city division from any open-source website.

2. Convert the downloaded shape files to the `GeoJSON` format using any open-source tool.

3. Extract it and rename the file to `customindia_tamil_nadu.js`. Ensure that the file name is in lowercase and spaces are replaced with underscores (e.g., `south_africa.js`). 

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/rename.png)

4. Open this file and add the following text at the beginning: `ejdashboard.Customindia_Tamil_Nadu =` and then save the file.

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/new-tamil.png)

5. Include this file name into `India.js` for drill down. Open that file and search for `Tamil Nadu`. Then, go to the end of that line and change this text: `"shapeName":"Customindia_Tamil_Nadu"` instead of `"shapeName":"India_Tamil_Nadu"`.

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/worldmapcountry.png)

6. Save this file. Then copy this file and paste it into the `app_data/bi/shapefiles` path.

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/finalpath.png)

7. Please reload the dashboard page and drill the India shape in the world map. Then drill the `Tamil Nadu` shape in India. The `Tamil Nadu` shape will be displayed with city divisions instead of districts.

    ![drilldown shape file](/static/assets/visualizing-data/visualization-widgets/images/map/tamil-drill.png)

8. To load only the `Tamil Nadu` state with city divisions, you need to include the shape file name in the `shapefile.json` file. Add the shape file name to the state collections in the JSON file, as `Tamil Nadu` is a state.

    ![Json shape file name](/static/assets/visualizing-data/visualization-widgets/images/map/tamil-dropdown.png)

9. After adding the shape file name, reload the dashboard page and go to the property panel. Change the shape kind based on the shape name you added in the `shapefile.json` file. Now, the customized shape name should be visible in the `shape data` dropdown. If the shape name is not added to the `shapefile.json` file, it will not appear in the shape data dropdown.

    ![Rename shape file](/static/assets/visualizing-data/visualization-widgets/images/map/tamil-drop.png)

10. Once you see the customized shape name in the dropdown, click on it, and the customized shape will be rendered on the map widget based on the data configuration.

    ![drilldown shape file](/static/assets/visualizing-data/visualization-widgets/images/map/drilldown.png)

### How to add customized shape in world map country

If you want to view the customized India shape while drilling India on the world map, follow these steps:

1. You should have customized the India shape files.

2. Open the `world_map_country.js` file and search for India.

3. Change the shape name to `Customindia`.

    ![worldmap shape file](/static/assets/visualizing-data/visualization-widgets/images/map/worldmapshapename.png)

4. Save it and refresh the dashboard. Configure the drill down with any data. Click the India shape on the world map, and the customized shape will be rendered.

    ![worldmap file](/static/assets/visualizing-data/visualization-widgets/images/map/worldmap.png)

### Legend Settings

This section allows you to customize the legend in the map.

![Choropleth color](/static/assets/visualizing-data/visualization-widgets/images/map/legend-settings.png)

#### Show legend

This allows you to toggle the visibility of the legend in a map. By default, it will be enabled.

#### Type

It defines the legend type whether layers or marker. 

* If Location Value and Location Name are configured without Marker Latitude and Longitude, the legend type will be Layers by default. In this case, the Type option will not be shown.

![Layers Legend](/static/assets/visualizing-data/visualization-widgets/images/map/layers-legend.png)

* If Marker Latitude and Longitude are bounded with advanced customization in the map without Location Name and Value configuration, the type will be Markers by default. In this case, the Type option will not be shown.

![Markers Legend](/static/assets/visualizing-data/visualization-widgets/images/map/markers-legend.png)

* If both Location Value and Location Name and Marker Latitude and Longitude with advanced customization are configured, the Type option will be shown in the `Legend Settings section`. In this case, the legend will be shown based on the legend type.

![Legend Type](/static/assets/visualizing-data/visualization-widgets/images/map/map-legend-type.png)

 For type `Markers`, the legend will be shown as below.

![Legend Type Marker](/static/assets/visualizing-data/visualization-widgets/images/map/map-legend-type-marker.png)


#### Show Title

This option allows you to toggle the visibility of the legend title in a map.

![Show Legend Title](/static/assets/visualizing-data/visualization-widgets/images/map/show-title.png)

![Show Legend Title in Map](/static/assets/visualizing-data/visualization-widgets/images/map/map-show-title.png)

#### Title

This allows you to edit the legend title of a map.

![Map Legend Title](/static/assets/visualizing-data/visualization-widgets/images/map/map-customize-legend-title.png)

![Legend Title](/static/assets/visualizing-data/visualization-widgets/images/map/map-customize-legend.png)

#### Position

This provides the option to select the legend placement in a map.

![Legend position](/static/assets/visualizing-data/visualization-widgets/images/map/legend-top.png)

![Legend position](/static/assets/visualizing-data/visualization-widgets/images/map/legend-bottom.png)

### Marker Settings

If you bind the Marker latitude and Marker Longitude fields, the Marker settings category will be visible.

![Marker Settings](/static/assets/visualizing-data/visualization-widgets/images/map/marker-settings.png)


#### Marker Based Zoom

If you enable this option, the map will automatically zoom in to the marker area. Here, in the following map widget, the map has a single marker. It will be useful for the filtering process.

![Map Zoom](/static/assets/visualizing-data/visualization-widgets/images/map/map-zoomin.png)

By enabling this option, the map will be zoomed in on the area where the marker is placed.

![Map Zoom In](/static/assets/visualizing-data/visualization-widgets/images/map/marker-zoomedin.png)

#### Marker Shape

This option allows you to customize the marker shape on the map.

![Map Shape Dropdown](/static/assets/visualizing-data/visualization-widgets/images/map/map-markershape.png)

![Map Shape](/static/assets/visualizing-data/visualization-widgets/images/map/marker-shape.png)

#### Color

This option allows you to customize the marker color.

#### Width

This option allows you to customize the marker width. When configuring data into `Marker size`, this property will be disabled.

#### Height

This option allows you to customize the marker height. When configuring data into `Marker size`, this property will be disabled.

#### Advanced

### Rule

This option allows you to customize the map marker.

If you enable the `Advanced` option, the color customization window will render as follows:

![Advance Marker settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-advance-marker-settings.png)

You can change based on the field and summary type.

You can choose a series of colors with the `Color` color picker using multiple condition sets for measure value: greater than, less than, equal to, not equal to, between, not between, greater than or equal to, less than or equal to. For Dimension values: starts with, ends with, contains, not contains, equals, not equals. You can customize the width and height of the marker.

You can customize the shape of the marker with the `Marker Shape` option or you can customize the shape as an image with the `Marker Image` option. You can also customize the legend name by providing the necessary values inside the condition name and you can also add multiple conditions.

![Rule Color changes for marker](/static/assets/visualizing-data/visualization-widgets/images/map/map-markerrulechange.png)

If you click save, the map widget will render like this:

![Rule Color changes for marker in map](/static/assets/visualizing-data/visualization-widgets/images/map/map-markerrule.png)

### Individual

This option allows you to customize the map marker color individually based on the selected column values.

For example, if you have three types of signal strength options in your data and you want to display marker colors based on the three types, you can select the `Signal Strength` column in the based selection and then assign a color for each type of signal strength option.

![Individual Marker settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-individualcolor-settings.png)

Now, the map marker color renders with these changes.

![Individual Marker Color](/static/assets/visualizing-data/visualization-widgets/images/map/mapmarker-individualcolor.png)

#### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-link.png)

#### Formatting

This section shows up when the `Location Value` and `Location Name` fields have values.

![Default Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/bubblemap-colorset.png)

#### Monochromatic

You can configure a single color palette whose saturation differs based on the value density.

![Monochromatic](/static/assets/visualizing-data/visualization-widgets/images/map/monochromatic-single-color.png)

![Default Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/monochromatic-color-change.png)


#### Advanced Settings

This allows you to customize the map color with three different types:
gradient, rule, or individual. By default, the window renders with gradient type.

If you enable the option `Advanced,` the color customization window will render as follows.

![Advance Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-advance-settings.png)

![Advance Color Dialog](/static/assets/visualizing-data/visualization-widgets/images/map/advance-settings-dialog.png)

### Gradient

You can select based on which field to apply gradient color by the `Based On` dropdown. You can change the summary type. You can edit the `Low` and the `High` value and their colors. By default, the low value takes the minimum value of the map and the high value takes the maximum value of the map. `Mid` can be enabled and can change its value and color can be changed. By default, mid-color is disabled.

If you click save, the map will render as follows.

**Choropleth map**

![Choropleth map Gradient Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap-gradient.png)

**Bubble map**

![Bubble map Gradient Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-gradient.png)

### Default color

![Default Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-defaultcolor.png)

The default color will apply for the conditions that are not satisfied by the advance color customization.

### Rule

You can select the rule settings by clicking the `Rule` radio button. The color customization window renders as follows.

![Rule Color settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-rulesettings.png)

You can change based on field and summary type as gradient type. The `Value Type` can be change with value or percentage.

You can choose a series of colors with the `Fill` color picker using multiple condition sets: greater than, less than, equal to, not equal to, between, Not between, greater than or equal to, less than or equal to. You can customize the legend name by providing necessary values inside condition name. You can also add multiple conditions.

![Rule Color changes](/static/assets/visualizing-data/visualization-widgets/images/map/map-rulechange.png)

If you click save the map widget will render like this.

**Choropleth map**

![Choropleth map Rule Color Setting changes](/static/assets/visualizing-data/visualization-widgets/images/map/choroplethmap-rulesetchanges.png)

**Bubble map**

![Bubble map Rule Color Setting changes](/static/assets/visualizing-data/visualization-widgets/images/map/map-rulesetchanges.png)

### Individual

You can select the rule settings by clicking the `Individual` radio button. The color customization window renders like this.

![Individual settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-individual-settings.png)

This type renders with the individual default color for each value of the map. You can change its color with individual color pickers. If you want to reset your changes return to the default color with `Reset.`

You can save your changes by clicking `Save.` Now, the map renders with changes.

**Choropleth map**

![Choropleth map Individual settings changes](/static/assets/visualizing-data/visualization-widgets/images/map/choropleth-map-individualsetting.png)

**Bubble map**

![Bubble map Individual settings changes](/static/assets/visualizing-data/visualization-widgets/images/map/map-individualsetting.png)

### Font settings

This section allows you to customize the font size of map elements.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/map/font-settings.png)

#### Auto Font Size and Font Size
 
By default, the 'Auto Font Size' property is enabled. The Auto Font Size property is used to set Font Size based on dashboard viewing client machine resolution.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-auto-font-settings.png)

If the user wants to customize or set a Fixed Font Size, the user needs to disable Auto Font Size and set the required Font Size. In the image below, I have set different font sizes for Legend, Legend Title, and Value Label.

![Font settings](/static/assets/visualizing-data/visualization-widgets/images/map/map-customize-font-settings.png)

### Filter    

![Filter](/static/assets/visualizing-data/visualization-widgets/images/map/filter.png)

#### Act as Master Widget

This allows you to define the map widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

Select a shape to filter interaction, the menu will be shown as follows.

![Context Menu](/static/assets/visualizing-data/visualization-widgets/images/map/filtering-menumap.png)

![Filter interaction](/static/assets/visualizing-data/visualization-widgets/images/map/map-filterinteraction.png)

If you enable `Act as Mater Widget` option, `Enable Multi Selection` will be shown.

![Multi Selection Option](/static/assets/visualizing-data/visualization-widgets/images/map/map-multiselectoption.png)

This option allows using multiple filter interactions.

Consider if you clicked one shape in the map widget already, then click another shape and select the `Filtering` option on the menu. Now, the slave widget will respond like this.

![Slave for Multi Selection](/static/assets/visualizing-data/visualization-widgets/images/map/map-multiselectfilter.png)

#### Ignore filter actions

It defines the map widget to ignore the filter actions applied to other widgets in the dashboard.

#### Enable Hierarchical Filter

Through this option, you can enable or disable hierarchical the `Top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of added dimension columns.

When the Hierarchical Filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

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

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/container-actions.png)

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

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

To learn more about viewing the underlying widget data, refer to the [view data documentation](/visualizing-data/working-with-widgets/view-data/).

#### Pin Widget

This allows you to pin the widget.

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

When the map has been placed with less than 7 rows map legend will be hidden.

![Widget Element](/static/assets/visualizing-data/visualization-widgets/images/map/legend.png)
