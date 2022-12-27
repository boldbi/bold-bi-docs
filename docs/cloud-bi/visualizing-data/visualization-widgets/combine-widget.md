---
layout: post
title: Combine Widget – Cloud BI Visual | Bold BI Documentation
description: Learn how to use a combine widget to group a set of visuals in the dashboard for unique identity in Bold BI Cloud.
platform: bold-bi
documentation: ug
---
# How to configure combine widget 

Combine widget allows you to add multiple widgets in one container.

![Combine widgets](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets.png)

## How to add the combine widget

Drag the combine widget from dashboard's item panel, present under Miscellaneous group.

![combine widgets step](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-step.png)
 
Now resize the container as per requirement, in order to drag multiple widgets in it.

Combine widget needs at least two widgets to show the use case of the widget.

## How to configure the combine widget with multiple widgets

You can configure the combine widget by three methods:

1.  Configure the combine widget by dragging some other widgets from item panel. Assign your required data to configure the widgets.
![combine widget configure method 1a](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_1_a.png)   
![combine widget configure method 1b](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_1_b.png)  
For example (In previous image): There are multiple widgets like grid, combo box, text widget and line widget (used to separate widgets).

2.  Drag the already configured widgets from the design canvas into the combine widget.
![combine widget configure method 2](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_2.png)

3.  Drag existing panel widgets into the combine widget.
![combine widget configure method 3](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_3.png)

## Overlapping of widgets

You can overlap the widget inside the combine widget. Just drag one widget over another widget. The order, in which the widgets are placed over one another can be checked in the property panel of the same combine widget.

![overlapping of widgets](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_overlapping.png)

## How to format combine widget

You can format the combine widget for better illustration of the view that you require using settings available in the Properties tab.

## Basic settings

Ordering of widget allows you to make the widget move back and forth. 

The property panel of the combine widget shows the list of widgets, which is dragged into it.

![list of widgets](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_list_of_widgets.png)

A widget, which can be seen above all other widgets is present at the bottom of the list and widget, which is at the bottom of all other widgets is present at the top of the list on the property panel of the combine widget.

The combo box widget, which is seen above other widgets is at the bottom of the list as shown in the following image.

![combo box with highest z-index](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_more_z-index.png)

Now, the combo box widget is at the bottom of the combine widget and cannot be seen and it is at the top of the list as shown in the following image.

![combo box with lowest z-index](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_less_z-index.png)

## Container Appearance

This section customize `Container Appearance` for combine widget.

![combo box with lowest z-index](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combinewidgetcontainerappearence.png#max-width=54%)

### Show Border

This toggles the visibility of **border** surrounding the widget.

### Corner Radius

This apply specified **radius** to the widget corners if **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allows set **background image** for the combine widget.

### Background Color

This allows you to set **background color** to the combine widget.

### Transparency

This property specify **transparency** for `background color`.

### Show shadow

This property give **shadow** around the combine widget.

## Container actions

This section customize **Container actions** for combine widget.

![combo box with lowest z-index](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combinewidgetcontaineraction.png#max-width=54%)

### Allow Maximize View

This enables or disables **maximized mode** of the combine widget. The visibility of the maximize icon in the widget header will be defined based on the setting of the viewer.

### Allow Image Export

This enables or disables `Image export` option for the combine widget. Enabling this allows you to export view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

### Allow pdf Export

This enables or disables the `PDF export` option for the combine widget. Enabling this export view of widget to pdf format in the viewer.

### Enable Comments

This enables or disables `comment` for dashboard widget. For more details, refer to [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

### Pin widget

This allows you pin the widget.

## Export

Export the combine widget as image and PDF format.

![export of combine widgets](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_export.png)

Widgets inside combine widgets has also exporting support, in order to export the specific widget into image, PDF, CSV and Excel formats.

## Pin combine widget

Pin the combine widget by using the pin icon on the container. The pinned widget will be available on pin boards.

![pin combine widgets](/static/assets/cloud/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_pin.png)

> **NOTE:**  Points to be considered.
* There is no support to pin the widgets, which is inside the combine widget. 
* Initially, there will be no header present in the widgets inside the combine widget. If you need header, then you can enable it in the property panel for that specific widget.

Things which are not supported in combine widget:
1. Maximize the widget inside the combine widget.
2. Drag one combine widget over another combine widget.
3. Copy/Paste the combine widget when there is not enough space to be pasted.
4. Combine widget cannot be dropped from existing widgets panel when there is not enough space to be rendered.




