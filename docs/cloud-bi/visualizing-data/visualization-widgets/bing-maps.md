---
layout: post
title: Bing Maps – Cloud BI Visual | Bold BI Documentation
description: Learn how to enable and add a Bing Maps visual to Bold BI Cloud dashboard, configure data and other settings.
platform: bold-bi
control: Bing Maps
documentation: ug
---

# Configuring and Formatting Bing Maps

`Bing Maps` allows you to visualize the markers based on the latitude and longitude data.

*Figure: Default Bing maps visualization showing markers based on the configured latitude and longitude information*

![Default Bing Maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/default-bing-maps.png)

## How to configure the data table to Bing Maps widget

> **NOTE:**  Before adding the Bing maps widget to the design layout, make sure to **create the data source**. You can refer to this [section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a Bing maps, a minimum requirement of `one latitude` and `one longitude` fields are needed.

The following steps explains about data configuration of the Bing maps.

### Step 1: Add a bing maps widget to the design canvas 

1.   Drag and drop the `Bing maps` control icon from the toolbox into the design panel. You can find control by searching in the toolbox.

![Adding Bing Maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/adding-bing-maps.png)

2.	Resize the widget as required.

![Resizing Bing Maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/resizing-bing-maps.png)

### Step 2: Configuring data into the widget

1.	Click the `Properties` icon in the configuration panel.

![Properties click](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

2.	The properties panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.

![Properties panel](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/properties-panel.png)

3.	The data tab will be opened with available columns from the connected data source.

![Available fields list](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/available-fields-list.png)

### Location Value

An element can be dragged from the measure or dimension section.

![Bind columns for LocationValue](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/location-value.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

![Rename](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/rename.png)

### Location Name

Drag the elements from the `Dimension` to `Location Name` section.

![Add location name field](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/location-name-field.png)

Bing map will render as follows.

![Bing map - Choropleth map demo](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/choroplethmap.png)

You can add more than one value to the `Location Name` section. The alert message will be shown to enable the drill-down option.

![Drill confirmation alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/drillalert.png)

Click `Yes` to enable the option.

NOTE: If you click `No`, a single value will be added to the `Location Name` field(i.e. newly dropped column replace the existing one).

*Figure: Bing-map with drilled view of the selected area.*

![Drilled view](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/drilled-view.png)

### Latitude Section

Bind column by dragging and dropping the element from sections to `Latitude`.

![Latitude fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/latitude-fields.png)

> **NOTE:**  
* The field added in this section will act as a latitude value. 

### Longitude Section

Drag and drop the elements from sections to `Longitude` section.

![Longitude fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/longitude-fields.png)

> **NOTE:** 
* The field added in this section will act as a longitude value. 

*Image: Bing maps widget after configuring the mandatory fields.*

![Configured Bing maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/configured-widget.png)

### Address

Drag and drop the elements from sections to `Address` section. The field added here, will act as a address value.

![Address fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/address-fields.png)

Bing maps widget, after configuring the Address fields.

![Configured Bing maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/configured-address.png)

### Postal Code

Drag and drop the elements from other sections to `Postal Code` section. The field added here, will act as a postal code.

![Postal Code fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/postalcode-fields.png)

Image: Bing maps widget after configuring the Postal Code fields.

![Configured Bing maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/configured-postal-code.png)

### Marker Tooltip section

Drag and drop the elements from sections to the `Marker Tooltip` section. It will define the marker tooltip value in the bing maps. Also, it is an optional section.

![Marker Tooltip fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/marker-tooltip.png)

Image: Bing maps widget after configuring the market tooltip field

![Marker tooltip customized Bing maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/tooltip-customized-widget.png)

### Marker Image section

Drag and drop the elements from sections to the `Marker Image` section. It will define the marker in the bing maps. Also, it is an optional section.

![Marker Image fields](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/marker-image-field.png)

Image: Bing maps widget after configuring the marker Image field

![Marker Image customized Bing maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/marker-image-customization.png)

### Step 3(Optional): Settings menu options

You can `filter` and `sort` the data displayed in the widget from the settings menu options.  To open the settings menu, click the `settings` icon.

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Settings Menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/settings-menu.png)

## How to format Bing maps widget

You can format the `Bing maps` for better illustration of the view that you require using the settings available in the `Properties` tab.

### General settings

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/property.png)

#### Name

This allows you to set `title` for this Bing maps widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/Name.png)

#### Subtitle

This allows you to set `subtitle` for this Bing maps widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/Subtitle.png)

#### Description

This allows you to set brief explanation about this Bing maps widget.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/Description.png)

### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/basic-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in Bing map.

![General settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/tooltip.png)

### Map theme

This allows you to toggle the theme of the bing maps.

1.  Road Type

![Road Theme](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/road-theme.png)

2.  Aerial

![Aerial Theme](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/aerial-theme.png)

3.  Canvas Dark

![Canvas Dark Theme](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/canvas-dark-theme.png)

4.  Canvas Light

![Canvas Light Theme](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/canvas-light-theme.png)

5.  Gray Scale

![Gray Scale Theme](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/gray-scale-theme.png)

### Show Zoom Icon

This allows you to show the zooming icons in bing maps.

![Zooming Icons](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/zooming-icons.png)

If you perform zoom in or zoom out using icons or mouse in design mode, then the same zoom level will be maintained in the view mode.

Zoom state in design mode.

![Zooming Design](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/zoomingdesign.png)

Zoom state in view mode.

![Zooming View](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/zooming-view.png)



### Disable Zooming and Panning

This disables the Zooming and Panning in maps.

### Map shape

This allows you to toggle the map shapes of the Bing Maps.

1. Choropleth

![Choropleth type bing map](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/choropleth-bing-map.png)

2. Bubble

![Bubble type bing map](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/bubble-bing-map.png)


#### Formatting

This section shows up when the `Location Value` and `Location Name` fields have values.

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/formatting.png)

#### Monochromatic

You can configure a single color palette whose saturation differs based on the value density.

![Monochromatic](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/monochromatic-single-color.png)

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/monochromatic-color-change.png)


#### Advanced Settings

This allows you to customize the map color with three different types:
gradient, rule, or individual. By default, the window renders with gradient type.

If you enable the option `Advanced`, the color customization window will render as follows.

![Advance Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/map-advance-settings.png)

![Advance Color Dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/advance-settings-dialog.png)

### Gradient

You can select the desired measures or dimensions field using the `Based On` dropdown. You can change the summary type. You can edit the `Low` and the `High` value and their colors. By default, the low value takes the minimum value of the map and the high value takes the maximum value of the map. The `Mid` can be enabled and can change its value and color can be changed. By default, the mid-color is disabled.

If you click save, the map will render as follows.

![Choropleth map Gradient Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/choroplethmap-gradient.png)

### Default color

![Default Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/map-defaultcolor.png)

The default color will apply for conditions not satisfied by the advance color customization.

### Rule

You can select the rule settings by clicking the `Rule` radio button. The color customization window renders as follows.

![Rule Color settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/map-rulesettings.png)

You can change `Based on field and summary type` as gradient type. The `Value Type` can be changed with value or percentage.

You can choose a series of colors with the `Fill` color picker using the multiple condition sets: greater than, less than, equal to, not equal to, between, Not between, greater than or equal to, and less than or equal to. You can customize the legend name by providing the necessary values inside the condition name. You can also add multiple conditions.

![Choropleth map Rule Color Setting changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/choroplethmap-rulesetchanges.png)

### Individual

You can select the rule settings by clicking the `Individual` radio button. The color customization window renders like this.

![Individual settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/map-individual-settings.png)

This type renders with the individual default color for each value of the map. You can change its color with the individual color pickers. If you want to reset your changes return to the default color using the `Reset`.

You can save your changes by clicking the `Save`. Now, the map renders with changes.

![Choropleth map Individual settings changes](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/choropleth-map-individualsetting.png)

### Marker Settings

![Marker Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/marker-settings.png)

### Marker Shape

This allow to change the marker shapes of the bing maps.

1.  Circle

![Circle shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/default-bing-maps.png)

2.  Diamond

![Diamond shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/diamond-shape.png)

3.  Star

![Star shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/star-shape.png)

4.  Triangle

![Triangle shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/triangle-shape.png)

5.  Image

![Image settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/image-settings.png)

![Image source](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/image-source-option.png)

This allow to upload the various type of Images.

*Image: Bing maps widget after applying the marker Image settings*

![Image customized bing maps](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/image-source.png)

### Color

This allows to change the marker color of the bing maps.

![Shape Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/shape-color-option.png)

![Shape Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/shape-color.png)

### Size 

This allows to change the marker size of the bing maps.

![Shape Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/shape-size-option.png)

![Shape Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/shape-size.png)

### Advanced Settings

Markers can be customized based on the conditions and the fields by enabling the advance settings check box.

1.  Based on the measure field.

![Marker Customization Based on measure field](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/marker-measure-field-latitude.png)

2.  Based on the dimension field.

![Marker Customization Based on dimension field](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/marker-measure-field.png)

#### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/link.png)

### To Configure Bing maps with address information

You can render the bing maps markers based only on the address information. For that, there are two sections `Address` and `Postal Code` added in the field containers section as shown in the following image,

![Bing maps address sectons](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/bing-maps-address-section.png)

Drag and drop the required fields to the respective field containers to render the bing maps markers. You can drag and drop either the `Address` field or `Postal Code` field, or both the fields.

After that configurations

![Bing maps with address information](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/bing-maps-after-address-configuration.png)

### Filter

![Filter Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/bing-maps/filter-section.png)

#### Act as master widget

This allows you to define the Bing Maps widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this Bing Maps widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical the `top N` filtering. While applying the `Top N` filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the Hierarchical Filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container appearance

This section contains the property for bing maps container's layout.

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