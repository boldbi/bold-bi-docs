---
layout: pos
title: Azure Maps – Embedded BI Visual | Bold BI Documentation
description: Learn how to enable and add an Azure Maps visual to Bold BI Embedded dashboard, configure data and other settings.
platform: bold-bi
control: Azure Maps
documentation: ug
---

# Configuring and Formatting Azure Maps

`Azure Maps` allows you to visualize markers based on latitude and longitude data. It also supports bubble layers for value-sized symbols and choropleth maps for region-based coloring.

*Figure: Azure Maps visualization with bubble layer examples*
![Default Azure Maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/default-azure-maps.png)

## How to get Azure Maps keys

To obtain `keys`, follow these steps:

1. Go to the Azure Portal at the following link: [Azure Portal](https://portal.azure.com).

2. Register or sign in using your Azure account.

3. In the left menu, click `Create a resource`. Search for `Azure Maps` and select it and click create.

4. Fill the below details

- **Subscription:** Choose your subscription.
- **Resource Group:** Select an existing group or create a new one.
- **Name:** Give your Maps account a unique name.
- **Pricing Tier:** Choose the appropriate tier.
- **Region:** Select your preferred region.

![Azure Maps My Keys](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azure-map-mykeys.png)

5. Click Review + Create, proceed to the next page, and then click Create.

6. After deployment, go to your Azure Maps account.

![Azure Maps Account](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azure-map-account.png)

7. In the left panel, select Authentication.

![Azure Maps Primary Key](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azure-map-primary-key.png)

8. You will see Primary Key and Secondary Key.

9. Copy the Primary Key to enable Azure Maps in your enterprise application.

## How to enable Azure Maps in Enterprise

To enable Azure Maps in your enterprise build, follow these steps:

1. Navigate to the dashboards page and click on the settings icon.

![Dashboard Settings Page](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/dashboard-settings.png)

2. Then select the `Widgets` section.

![Site Settings Page](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/site-settings-page.png)

3. And you can find the `Azure Maps` icon in the widget configuration page.

![Widget Configuration Page](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/widget-configuration-page.png)

4. Click on the check box, then the popup will be shown.

![Azure Maps icon](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azure-map-icon.png)

![Azure Key Upload Dialog](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/upload-azure-key-dialog.png)

5. Then add your key in the text box and click upload. Then the `Azure Maps` icon will be enabled.

![Azure Maps icon](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/enabled-azure-icon.png)

6. Then click save button to save your changes and now the `Azure Maps` will be enabled in the dashboards.

![Save Button](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/widget-save-button.png)

## How to configure the data table to Azure Maps widget

> **NOTE:**  Before adding the Azure Maps widget to the design layout, make sure to create the data source. Refer to this [section](/working-with-data-sources/creating-a-new-data-source/) to learn how to create a new data source.

> **IMPORTANT:**  To showcase Azure Maps, a minimum requirement of `one value` and `one name` or `one latitude` and `one longitude` or `one address` or `one postal code` field is needed.

The following steps explain the data configuration for Azure Maps:

### Step 1: Add an azure maps widget to the design canvas 

1.   Drag and drop the `Azure maps` control icon from the toolbox into the design panel. You can find control by searching in the toolbox.

![Adding Azure Maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/adding-azure-maps.png)

2.	Resize the widget as needed.

![Resizing Azure Maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/resizing-azure-maps.png)

### Step 2: Configuring data into the widget

1.	Click the `Properties` icon in the configuration panel.

![Properties click](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/designer-properties-button.png)

2.	The properties panel of the widget will be displayed. Switch to the `ASSIGN DATA` tab.

![Properties panel](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/properties-panel.png)

3.	The data tab will open, displaying available columns from the connected data source.

![Available fields list](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/available-fields-list.png)

#### Location Value

Drag an element from the measure or dimension section.

![Bind columns for LocationValue](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/location-value.png)

##### Renaming fields

Edit the configured field names using the `Rename` option in the settings menu.

![Rename](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/rename.png)

#### Location Name

Drag elements from the `Dimension` to the `Location Name` section.

![Add location name field](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/location-name-field.png)

Azure Maps will render accordingly.

![Azure map - Choropleth map demo](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/bubble-map.png)

You can add more than one value to the `Location Name` section. An alert message will appear to enable the drill-down option.

![Drill confirmation alert](/static/assets/visualizing-data/visualization-widgets/images/drillalert.png)

Click `Yes` to enable the option.

NOTE: If you click `No`, a single value will be added to the `Location Name` field(i.e. newly dropped column replace the existing one).

*Figure: Azure-map with drilled view of the selected area.*

![Drilled view](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/drilled-view.png)

##### Drill up

Once you've drilled down, you can drill up to the previous view using the breadcrumb navigator located at the top of the widget.

![Drill up](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/drillup.png)


#### Hidden Column

Hidden columns are useful when we don't want certain fields to participate in the visualization, but only to be used for [linking](#linking), [filtering](#filtering) and [view data](#view-data). 

![Hidden column](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/assigndata.png)

Both measure and dimension fields can be configured into the hidden column. For measure fields, all settings available for measure fields, except formatting and filtering, can be applied.

![measure](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/measure.png)

For dimension fields, only the following options are available.

![Dimension](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/dimension.png)

##### Linking

The primary use case of hidden columns is linking. When hidden columns are configured, the fields listed in the hidden columns are displayed in the linking section. By configuring a column in the linking section, we can pass the corresponding column value as a linking parameter.

**Measure Based Example:** If we want to pass the number of UnitsInStock as a URL parameter without impacting the visualization, we can configure UnitsInStock in the hidden columns and include it in the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/link-measure.png)

**Dimension Based Example:** If we want to pass the region as a URL parameter without influencing the visualization, we can configure the region in the hidden columns and incorporate it into the link.

![Linking](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/link-dimension.png)

##### Filtering

Hidden columns can also be used for filtering data in visualizations. To do this, configure hidden columns and click on the filter icon.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/filtericon.png)

Click the Custom button that is highlighted in the filter configuration dialog image below. It will display a list of all the fields that have been configured in the widget. Retain the field that is configured in the hidden column and remove the other fields. Finally, click the Update button.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/custom.png)

Now, we can see in the image below that the data is filtered based on the hidden column field instead of the actual column that we bound in the widget.

![Filtering](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/hidden-column-filter.png)

For more details about filtering the widget data, refer to the [Cross Filter Configuration documentation](/working-with-dashboards/configuring-cross-filters/).

##### View Data

You can view the data in the hidden columns in the underlying data view. This is useful for checking the data in more detail and can help you identify any issues with the data.

![View data](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/viewdata.png)

> **NOTE:** We do not recommend configuring lower hierarchy data in hidden columns, as indicated by the info icon in the `Hidden Column` section.

![Hidden Column ](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/info-icon.png)

The map below displays the unit price by continent without any hidden columns.

![Before](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/before.png)

If you configure lower hierarchy data (Country) in hidden columns, the data in the widgets will be duplicated and incorrect data will be displayed in the tooltip, as shown in the image below.

![After](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/after.png)

#### Latitude Section

To bind a column, drag and drop the element from the sections to the `Latitude` section.

![Latitude fields](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/latitude-fields.png)

> **NOTE:** The field added in this section will act as a latitude value. 

#### Longitude Section

Drag and drop the elements from the sections to the `Longitude` section.

![Longitude fields](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/longitude-fields.png)

> **NOTE:** The field added in this section will act as a longitude value. 

*Image: Azure maps widget after configuring the mandatory fields.*

![Configured Azure maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/configured-widget.png)

#### Address

Drag and drop the elements from the sections to the `Address` section. The field added here will act as an address value.

![Address fields](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/address-fields.png)

#### Postal Code

Drag and drop the elements from other sections to the `Postal Code` section. The field added here will act as a postal code.

![Postal Code fields](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/postalcode-fields.png)

Image: Azure maps widget after configuring the Address and Postal Code fields.

![Configured Azure maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/configured-postal-code.png)

#### Marker Size

If you want to adjust the size of the marker based on the data, you can configure the data in the `Marker Size` section. You can only configure the measured field for Marker Size.

![AzureMap Marker Size Container](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azure-map-markersize.png)

After configuring the marker size field, the Azure map will be rendered as follows.

![Map with Marker Size](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azure-map-with-marker-size.png)

> **Note:** After configuring the marker size, the marker size settings under the property panel will be automatically disabled.

#### Marker Tooltip section

Drag and drop the elements from the sections to the `Marker Tooltip` section. This will define the marker tooltip value in the Azure maps. This section is optional.

![Marker Tooltip fields](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-tooltip.png)

Image: Azure maps widget after configuring the market tooltip field

![Marker tooltip customized Azure maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/tooltip-customized-widget.png)

#### Marker Image section

Drag and drop the elements from the sections to the `Marker Image` section. This will define the marker in the Azure maps. This section is optional.

![Marker Image fields](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-image-field.png)

Image: Azure maps widget after configuring the marker Image field

![Marker Image customized Azure maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-image-customization.png)

### Step 3 (Optional): Settings menu options

You can `filter` and `sort` the data displayed in the widget from the settings menu options. To open the settings menu, click on the `settings` icon.

#### Filtering data

You can use Filters to change the values by selecting the `Filter` option. For more details, refer to [Measure filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) and [dimension filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).

![Settings Menu](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/settings-menu.png)

## How to format Azure maps widget

You can format the `Azure maps` for better illustration of the view that you require using the settings available in the `Properties` tab.

### General settings

![General settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/property.png)

#### Name

This allows you to set a `title` for this Azure maps widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/Name.png)

#### Subtitle

This allows you to set a `subtitle` for this Azure maps widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/Subtitle.png)

#### Description

This allows you to set a brief explanation about this Azure maps widget.

![General settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/Description.png)

### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/basic-settings.png)

#### Map theme

This allows you to toggle the theme of the Azure maps.

1.  Road

![Road Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/road-theme.png)

2.  Night

![Night Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/night-theme.png)

3.  Satellite

![Satellite Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/satelite-theme.png)

4.  Grayscale Dark

![Grayscale Dark Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/grayscale-dark-theme.png)

5.  Grayscale Light

![Grayscale Light Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/grayscale-light-theme.png)

6.  High Contrast

![High Contrast Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/high-contrast-dark-theme.png)

7.  Road Shaded Relief

![High Contrast Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/road-shaded-relief-theme.png)

8.  Satellite with Road Labels

![High Contrast Theme](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/satelite-with-road-labels.png)

#### Zoom Option

If you zoom in or out using mouse in design mode, the same zoom level will be maintained in view mode.

#### Disable Zooming and Panning

This option disables zooming and panning in maps.

#### Map shape

This option allows you to toggle the map shapes of Azure Maps.

1. Bubble

![Bubble type azure map](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/bubble-azure-map.png)

2. Choropleth

![Choropleth type azure map](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/choropleth-azure-map.png)

### Tooltip Settings

The Tooltip Settings section allows you to customize the appearance and behavior of tooltips in widget visualizations.

![Tooltip Settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/tooltip-settings.png)

#### Show Tooltip

This option allows you to toggle the visibility of tooltip in Azure map.

![Show Tooltip](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/tooltip.png)

#### Customize Tooltip

This option allows you to customize which columns are visible in the Azure Maps tooltip.

![Customize Tooltip](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/customize-tooltip.png)

#### Enable RTL

This option allows you to display fields and their data from right to left.

![Enaable RTL](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/rtl-tooltip.png)

### Formatting

This section appears when the `Location Value` and `Location Name` fields have values.

![Default Color settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/formatting.png)

#### Monochromatic

You can configure a single color palette with varying saturation based on value density.

![Monochromatic](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/monochromatic-single-color.png)

![Default Color settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/monochromatic-color-change.png)


#### Advanced Settings

This option allows you to customize the map color using three different types:
gradient, rule, or individual. By default, the window renders with the gradient type.

Enabling the `Advanced` option will cause the color customization window to render as follows:

![Advance Color settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/map-advance-settings.png)

![Advance Color Dialog](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/advance-settings-dialog.png)

#### Gradient

You can select the desired measures or dimensions field using the `Based On` dropdown. You can change the summary type. You can edit the `Low` and `High` values and their colors. By default, the low value takes the minimum value of the map and the high value takes the maximum value of the map. The `Mid` can be enabled and its value and color can be changed. By default, the mid color is disabled.

Clicking save will cause the map to render as follows:

![Choropleth map Gradient Color settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/choroplethmap-gradient.png)

#### Default color

![Default Color settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/map-defaultcolor.png)

The default color will be applied for conditions not satisfied by the advanced color customization.

#### Rule

You can select the rule settings by clicking the `Rule` radio button. The color customization window will render as follows:

![Rule Color settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/map-rulesettings.png)

You can change the `Based on field and summary type` to gradient type. The `Value Type` can be changed to value or percentage.

You can choose a series of colors using the `Fill` color picker for multiple condition sets: greater than, less than, equal to, not equal to, between, not between, greater than or equal to, and less than or equal to. You can customize the legend name by providing the necessary values inside the condition name. You can also add multiple conditions.

![Choropleth map Rule Color Setting changes](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/choroplethmap-rulesetchanges.png)

#### Individual

You can select the rule settings by clicking the `Individual` radio button. The color customization window will render like this:

![Individual settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/map-individual-settings.png)

This type renders with the individual default color for each value of the map. You can change the color using the individual color pickers. If you want to reset your changes, return to the default color using the `Reset` button.

Save your changes by clicking `Save`. Now, the map will render with the changes.

![Choropleth map Individual settings changes](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/choropleth-map-individualsetting.png)

### Marker Settings

![Marker Settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-settings.png)

#### Marker Shape

This option allows you to change the marker shapes of Azure Maps.

1.  Circle

![Circle shape](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/circle-shape.png)

2.  Diamond

![Diamond shape](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/diamond-shape.png)

3.  Star

![Star shape](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/star-shape.png)

4.  Triangle

![Triangle shape](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/triangle-shape.png)

5.  Image

![Image settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/image-settings.png)

![Image source](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/image-source-option.png)

This option allows you to upload various types of images.

*Image: Azure maps widget after applying the marker Image settings*

![Local image upload](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/local-image.png)

![Image customized azure maps](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/image-source.png)

#### Color

This option allows you to change the marker color of Azure Maps.

![Shape Color](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/shape-color-option.png)

![Shape Color](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/shape-color.png)

#### Size 

This option allows you to change the marker size of Azure Maps. When configuring data into `Marker Size`, this property will be disabled.

![Shape Size](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/shape-size-option.png)

![Shape Size](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/shape-size.png)

> **Note:** Marker Settings will only be visible by configuring either latitude and longitude or address and postal code.

#### Advanced Settings(Marker)

##### Rule
Markers can be customized based on conditions and fields by enabling the advanced settings checkbox.

1.  Based on the measure field.

![Marker Customization Based on measure field](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-measure-field-latitude.png)

![Marker Customization Based on measure field](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-measure-field-map.png)

2.  Based on the dimension field.

![Marker Customization Based on dimension field](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-dimension-field.png)

![Marker Customization Based on dimension field](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/marker-dimension-field-map.png)

##### Individual

This option allows you to customize the map marker color individually based on the selected column values.

For example, if you have three types of signal strength options in your data and you want to display marker colors based on the three types, you can select the `Signal Strength` column in the based selection and assign a color for each type of signal strength option.

![Individual Marker settings](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/map-individualcolor-settings.png)

Now, the map marker color is rendered with these changes.

![Individual Marker Color](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/azuremap-individualcolor.png)

### Link

You can enable linking and configure it to navigate to a general URL with or without parameters. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/) section.

![Link](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/link.png)

### Filter

![Filter Option](/static/assets/visualizing-data/visualization-widgets/images/azure-maps/filter-section.png)

#### Act as master widget

This allows you to define the Azure Maps widget as a master widget, so that its filter action can be listened to by other widgets in the dashboard.

#### Ignore filter actions

This allows you to define this Azure Maps widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Enable hierarchical filtering

Using this option, you can enable or disable hierarchical `top N` filtering. When applying the `Top N` filter with multiple dimension columns, the returned data can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the Hierarchical Filter option is enabled, the `Top N` will be applied for each individual column separately based on the number set for each column.

### Container appearance

This section contains the property for azure maps container's layout.

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/container-appearance.png)

#### Title Alignment

This allows you to handle the alignment of the widget **left, center,** or **right**.

#### Title Color

This allows you to apply the text `color` to the widget title.

#### Title Auto Font Size

When Auto Font Size is enabled, the font size of the title will be adjusted automatically if the screen resolution varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

#### Subtitle Auto Font Size

When Auto Font Size is enabled, the font size of the subtitle will be adjusted automatically if the screen resolution varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

#### Auto Padding

When Auto Padding is enabled, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. The value can be between 0 and 25.

#### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 100.

#### Show Background Image

This allows you to set the **background image** for the map widget.

#### Background Color

This allows you to set the **background color** for the map widget.

#### Transparency

This property allows you to change the transparency from 0.0 to 1.0.

#### Show Shadow

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