---
layout: post
title: Button Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Button widget visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/visualizing-data/visualization-widgets/button-widget/"
platform: bold-bi
control: Button Widget
documentation: ug

---

# Button Widget

The `Button widget` allows users to trigger actions and events within their dashboards. It enhances interactivity by enabling users to seamlessly navigate between different dashboards. Additionally, the purpose of the Button widget and the actions performed when clicking on it can be described in the tooltip.

## How to configure the button widget

Drag and drop the `Button Widget` control icon from the toolbox onto the design panel. You can locate the control by searching for it in the toolbox. The widget can be resized as required.

![Button Widget](/static/assets/visualizing-data/visualization-widgets/images/button-widget/button-widget-dragdrop.png)

Click the `Properties` button in the configuration panel's property pane to visualize the button widget more effectively.

## Basic Settings

The `tooltip` option in the Basic settings of the properties panel for the `Button widget` allows the user to add content that will be displayed while hovering over the widget, without any limits on the amount of text that can be added.

![Basic Settings Tooltip](/static/assets/visualizing-data/visualization-widgets/images/button-widget/basic-settings-tooltip.png)

## Border

Enabling the `Border` option in the Properties panel allows the user to add a border to the Button widget. We can customize the `Border color`, `Border Thickness`, and `Border Type` of the widget. By default, the Border Type is set to `Solid`, but it can be changed to `Dotted` or `Dashed`.

![Border Styles](/static/assets/visualizing-data/visualization-widgets/images/button-widget/border-styles.png)

## Text

The `Text` option in the properties panel allows user to change text styles using the following options.

![Text Properties](/static/assets/visualizing-data/visualization-widgets/images/button-widget/text-properties.png)

The default text of the `Button` can be changed to any desired text according to your preferences. The color and font size of the text can be adjusted using the `Color` and `Font Size` options in the Text section of the Properties panel.

![Text Styles](/static/assets/visualizing-data/visualization-widgets/images/button-widget/text-styles.png)

The `Horizontal Alignment` and `Vertical Alignment` options allow to align the text displayed in the Button widget. By default, both options are set to `center`, but they can also be changed to `Left` or `Right`.

![Text Alignment](/static/assets/visualizing-data/visualization-widgets/images/button-widget/text-alignment.png)

The padding of the text displayed in the button widget can be customized using the options `Padding Top`, `Padding Bottom`, `Padding Right`, and `Padding Left`. By default, all of these options are set to `0`.

![Text Padding Alignment](/static/assets/visualizing-data/visualization-widgets/images/button-widget/text-padding-alignment.png)

## Icon

Enabling the `Icon` option in the properties panel allows to include an icon in the button widget. By default, this option is disabled, and the `Icons` setting will be set to `Blanks`. So, no icons will be displayed in the button widget.

![Icon Properties](/static/assets/visualizing-data/visualization-widgets/images/button-widget/icon-properties.png)

By clicking on the `Icons` dropdown, the following icon options will be listed: `Right Arrow`, `Left Arrow`, `Undo`, `Redo`, `Help` and `Information`.

![List of Icon option](/static/assets/visualizing-data/visualization-widgets/images/button-widget/icon-option.png)

The color and size of the applied icon can be customized using the `Color` and `Icon Size` options in the Icon section of the Properties Panel.

![Icon Styles](/static/assets/visualizing-data/visualization-widgets/images/button-widget/icon-styles.png)

The `Icon Placement` will be set to `Custom` by default, so the icon will appear at the top of the Button widget. However, we can customize the `Icon Placement` to options such as `Left of Text`, `Right of Text`, `Above Text`, and `Below Text`.

![Icon Placement](/static/assets/visualizing-data/visualization-widgets/images/button-widget/icon-placement.png)

The `Horizontal Alignment` and `Vertical Alignment` options allows to align the icon added to the Button widget. By default, both options are set to `center`, but they can also be changed to `Left` or `Right`. Both Alignment option will be shown only for the `Icon Placement` as `Custom`.

![Icon alignment](/static/assets/visualizing-data/visualization-widgets/images/button-widget/icon-alignment.png)

The padding of the text displayed in the button widget can be customized using the options `Padding Top`, `Padding Bottom`, `Padding Right`, and `Padding Left`. By default, all of the mentioned options will be set to `0`.

![Icon Padding Alignment](/static/assets/visualizing-data/visualization-widgets/images/button-widget/icon-padding-alignment.png)

## Fill

Enabling the `Fill` option allows the user to add a background color or background image to the button widget.

![Fill option](/static/assets/visualizing-data/visualization-widgets/images/button-widget/fill-ui.png)

### Enable Background Color

Enabling the `Enable Background Color` option in the `Fill` section of the properties panel and applying a background color using the `Background Color` option allows users to change the background color of the button widget. The transparency of the background color can be adjusted using the `Transparency` option in the `Fill` section of the properties panel.

![Background Color](/static/assets/visualizing-data/visualization-widgets/images/button-widget/background-color.png)

### Enable Background Image

Enabling the `Enable Background Image` option in the `Fill` section of the properties panel and applying the background image using the `Local` or `URL` options allows users to change the background image of the button widget.

1. By selecting the `Image Type` as `Local`, the user can choose an image from their local device by browsing for it. This image can then be applied as the background image of the button widget.

![Local Background Image](/static/assets/visualizing-data/visualization-widgets/images/button-widget/local-background-image.png)

2. By selecting the `Image Type` as `URL` and entering the image URL in the `Background Image URL` text box, the user can set the background image for the button widget.

![URL Background Image](/static/assets/visualizing-data/visualization-widgets/images/button-widget/url-background-image.png)

Based on the aforementioned `Image Type` option, the background image will be applied to the button widget, as illustrated below.

![Local and URL Background Image](/static/assets/visualizing-data/visualization-widgets/images/button-widget/local-url-background-image.png)

Using the `Mode` option in the `Fill` section. The mode can be customized as listed below.

1. Default
The image will be displayed in its original size.

2. Fill
The image will be filled in the available space.

3. Uniform to Fill
The image will uniformly occupy the space but may get clipped if it is larger than the control.

4. Uniform
The image sizes proportionally (without clipping) to best fit the widget area.

There is an option to rotate the background image in the Button widget according to your preference to `0`, `90`, `180`, or `270` degrees.

![Image Rotation](/static/assets/visualizing-data/visualization-widgets/images/button-widget/image-rotation.png)


## Link

The Link option in the button widget allows users to navigate to a specified link or dashboard when the widget is clicked.

There are two options available:
1. Dashboard
2. URL

### Dashboard

In the dashboard section, users can select the dashboard they wish to navigate to using the button widget. The selected dashboard will be rendered using the same instance as the parent dashboard. Users can also pass filter details from the parent dashboard to the target dashboard.

**How to configure**

In the properties of the button widget, where you will find the "Select Dashboard" option under the "Link" category. Clicking on "Select Dashboard" will open a dialog box displaying relevant categories and dashboards based on user permissions. Users can either double-click a dashboard file to select it or choose the dashboard and click the "Apply" button at the bottom of the dialog. 

![Select button](/static/assets/visualizing-data/visualization-widgets/images/button-widget/select_button.png)

![Select dashboard](/static/assets/visualizing-data/visualization-widgets/images/button-widget/select_dashboard.png)

**Pass Filter Details**

While navigating between dashboards, you can pass filter information from one dashboard to the target dashboard. For example, consider a combo box filter widget filtering the country values to Brazil. After navigation, the same filter will be applied to the child dashboard.

![Parent dashboard](/static/assets/visualizing-data/visualization-widgets/images/button-widget/filter-image-one.png)

![Child dashboard](/static/assets/visualizing-data/visualization-widgets/images/button-widget/filter-image-two.png)

If no filter widgets are present in the child dashboard to receive filters from the parent dashboard, the passed filter will act as a URL filter to filter the child dashboard.

![Filtering URL](/static/assets/visualizing-data/visualization-widgets/images/button-widget/filter-image-url.png)

> **NOTE:**
> 1. To pass filters between dashboards, users must configure the same data source for all dashboards.
> 2. If a URL filter is applied to the navigating dashboard, only the filter is applied; the URL will not change.

### URL

![Link URL](/static/assets/visualizing-data/visualization-widgets/images/button-widget/link-url.png)

The URL to be navigated should be entered in the `URL` text box, after which the `Mode` can be selected. This selection determines how the added URL will be displayed: in a `New Tab`, `Same Page`, `Current Frame`, `Parent Frame`, `Pop Up`, or `New Window`. Based on the selected mode, the URL entered in the text box will be rendered when the button widget is clicked.

### Include Master Widget Filters

This option allows the selected filter values from the chosen master widget to be automatically passed to the navigated dashboard via the `URL parameters`, without the need to manually append parameters. It applies to both `Dashboard` and `URL` navigation types.

![Include Master Widget Filters](/static/assets/visualizing-data/visualization-widgets/images/button-widget/IncludeMasterWidgetsFilter.png)

You can select the master widgets from the `Choose Master Widgets` dropdown. It will display the configured master widgets in the current dashboard. By default, all widgets are selected.

![Choose Master Widgets](/static/assets/visualizing-data/visualization-widgets/images/button-widget/Choosemasterwidgets.png)

For example, in the dashboard shown below, the Year-configured filter widget is used as the chosen master widget for the slave widget, with 2024 selected as the value. Upon navigation, the selected value is automatically passed to the destination dashboard via a `URL parameter`.

![Example Passing Filter](/static/assets/visualizing-data/visualization-widgets/images/button-widget/examplefilterurl.png)

> **NOTE:** If the selected master widgets are not filtered, then no values should be passed to the `Dashboard` or `URL`.

