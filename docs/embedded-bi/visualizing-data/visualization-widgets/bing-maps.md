---
layout: post
title: Bing Maps – Embedded BI Visual | Bold BI Documentation
description: Learn how to enable and add a Bing Maps visual to Bold BI Embedded dashboard, configure data and other settings.
platform: bold-bi
control: Bing Maps
documentation: ug
---

# Configuring and Formatting Bing Maps

`Bing Maps` allows you to visualize the markers based on the latitude and longitude data.

*Figure: Default Bing maps visualization showing markers based on the configured latitude and longitude information*

![Default Bing Maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/default-bing-maps.png)

## How to get Bing Maps keys
You need to follow these steps to get `keys`,

1. Go to the Bing Maps `Dev` Center at  https://www.bingmapsportal.com/.

2. Register or sign in using your Microsoft account.

3. Select `My keys` under `My Account`.

![Bing Maps My Keys](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/bing_map_my_keys.png)

4. Select the option to `create a new key`.

5. Provide the required details in the following form,

![Bing Maps Key Form](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/bing_map_key.png)

6. Click the Create button. The created new key will be displayed in the following list. Use this key to authenticate your Bing Maps.

![Bing Maps Keys List](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/bing_map_key_list.png)

## How to enable Bing Maps by configuring the web config file in Enterprise
To enable the bing maps in your enterprise build, you need to follow these steps.

1.  Open the below mentioned file in your enterprise build location,
[`Installed_Directory`\ Bold BI\Dashboard Designer\Web.config]
![web.config file in build](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/webconfig.png)

2.  Set `widget:bing_map:enable` key value as true.
![Enable Key](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/enable-key-for-bingmaps.png)

3.  Provide your bing maps key here.
![Set Key](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/set-key-for-bingmaps.png)

Then launch your build and you find the bing maps in design panel.

## How to configure the data table to Bing Maps widget

> **NOTE:**  Before adding the Bing maps widget to the design layout, make sure to **create the data source**. You can refer to this [section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase a Bing maps, a minimum requirement of `one latitude` and `one longitude` fields are needed.

The following steps explains about data configuration of the Bing maps.

### Step 1: Add a bing maps widget to the design canvas 

1.	Drag and drop the `Bing maps` control icon from the tool box into design panel. You can find control in tool box by search.
![Adding Bing Maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/adding-bing-maps.png)

2.	Resize the widget as required.
![Resizing Bing Maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/resizing-bing-maps.png)

### Step 2: Configuring data into the widget

1.	Click the `Properties` icon in the configuration panel.
![Properties click](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/properties-click.png)

2.	The properties panel of the widget will be displayed as shown in the following screenshot. Now, switch to the `ASSIGN DATA` tab.
![Properties panel](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/properties-panel.png)

3.	The data tab will be opened with available columns from the connected data source.
![Available fields list](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/available-fields-list.png)

#### Latitude section

Bind column by dragging and dropping the element from sections to `Latitude`.

![Latitude fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/latitude-fields.png)

> **NOTE:**  
* The field added in this section will act as a latitude value. 
* It is a mandatory section for widget visualization and only one value can be configured. 

#### Longitude section

Drag and drop the elements from sections to `Longitude` section.

![Longitude fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/longitude-fields.png)

> **NOTE:** 
* The field added in this section will act as a longitude value. 
* It is a mandatory section and only one value can be configured

*Image: Bing maps widget after configuring the mandatory fields.*

![Configured Bing maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/configured-widget.png)

#### Marker Tooltip section
Drag and drop the elements from sections to `Marker Tooltip` section. It will define the marker tooltip value in the bing maps. Also, it is an optional section. 

![Marker Tooltip fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/marker-tooltip.png)

*Image: Bing maps widget after configuring the market tooltip field*

![Marker tooltip customized Bing maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/tooltip-customized-widget.png)

#### Marker Image section
Drag and drop the elements from sections to `Marker Image` section. It will define the marker in the bing maps. Also, it is an optional section. 

![Marker Image fields](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/marker-image-field.png)

*Image: Bing maps widget after configuring the marker Image field*

![Marker Image customized Bing maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/marker-image-customization.png)

### Step 3(Optional): Settings menu options

You can `filter` and `sort` the data displayed in the widget from the settings menu options.  To open the settings menu, click the `settings` icon.

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Settings Menu](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/settings-menu.png)

## How to format Bing maps widget

You can format the `Bing maps` for better illustration of the view that you require using the settings available in the `Properties` tab.

### General settings

![General settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/general-settings.png)

#### Name
This allows you to set `title` for this Bing maps widget.

#### Subtitle
This allows you to set `subtitle` for this Bing maps widget. It is optional.

#### Description
This allows you to set brief explanation about this Bing maps widget. It is optional.

### Basic Settings

![Basic Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/basic-settings.png)

### Map theme
This allows you to toggle the theme of the bing maps.

1.  Road Type
![Road Theme](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/road-theme.png)

2.  Aerial
![Aerial Theme](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/aerial-theme.png)

3.  Canvas Dark
![Canvas Dark Theme](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/canvas-dark-theme.png)

4.  Canvas Light
![Canvas Light Theme](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/canvas-light-theme.png)

5.  Gray Scale
![Gray Scale Theme](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/gray-scale-theme.png)

### Show Zoom Icon
This allow to show the zooming Icons in bing maps.

![Zooming Icons](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/zooming-icons.png)

### Marker Settings

![Marker Settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/marker-settings.png)

### Marker Shape
This allow to change the marker shapes of the bing maps.

1.  Circle
![Circle shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/default-bing-maps.png)

2.  Diamond
![Diamond shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/diamond-shape.png)

3.  Star
![Star shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/star-shape.png)

4.  Triangle
![Triangle shape](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/triangle-shape.png)

5.  Image
![Image settings](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/image-settings.png)
![Image source](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/image-source.png)
This allow to upload the various type of Images.

*Image: Bing maps widget after applying the marker Image settings*

![Image customized bing maps](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/image-customized-widget.png)

### Color
This allows to change the marker color of the bing maps.
![Shape Color](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/shape-color.png)

### Size 
This allows to change the marker size of the bing maps.
![Shape Size](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/shape-size.png)

### Advanced Settings
Markers can be customized based on the conditions and the fields by enabling the advance settings check box.

1.  Based on measure field
![Marker Customization Based on measure field](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/marker-measure-field.png)

2.  Based on dimension field
![Marker Customization Based on dimension field](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/marker-dimension-field.png)

### To Configure Bing maps with address information
You can render the bing maps markers based only on the address information. For that, there are two sections `Address` and `Postal Code` added in the field containers section as shown in the following image,

![Bing maps address sectons](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/bing-maps-address-section.png)

Drag and drop the required fields to the respective field containers to render the bing maps markers. You can drag and drop either the `Address` field or `Postal Code` field, or both the fields.

![Bing maps address configuration](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/bing-maps-address-configuration.png)

After that configurations

![Bing maps with address information](/static/assets/embedded/visualizing-data/visualization-widgets/images/bing-maps/bing-maps-after-address-configuration.png)

### Container appearance

This section contains the property for bing maps container's layout.

![Container appearance properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/ContainerAppearance.png)

This allows you to customize the widget container appearance, widget title’s properties and provides options to enable/ disable widget exporting options. For more detailed information, refer to [container appearance properties](/embedded-bi/visualizing-data/working-with-widgets/customizing-container-appearance/).




