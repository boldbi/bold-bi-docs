---
layout: post
title: Combine Widget – Embedded BI Visual | Bold BI Documentation
description: Learn how to use a combine widget to group a set of visuals in the dashboard for unique identity in Bold BI.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/combine-widget/"
platform: bold-bi
documentation: ug
---
# How to configure combine widget 

Combine widget allows you to add multiple widgets in one container.

![Combine widgets](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets.png)

## How to add the combine widget

Drag the combine widget from dashboard's item panel, present under Miscellaneous group.

![combine widgets step](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-step.png)
 
Now resize the container as per requirement, in order to drag multiple widgets in it.

Combine widget needs at least two widgets to show the use case of the widget.

## How to configure the combine widget with multiple widgets

You can configure the combine widget by three methods:

1.  Configure the combine widget by dragging some other widgets from item panel. Assign your required data to configure the widgets.
![combine widget configure method 1a](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_1_a.png)   
![combine widget configure method 1b](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_1_b.png)  
For example (In previous image): There are multiple widgets like grid, combo box, text widget and line widget (used to separate widgets).

2.  Drag the already configured widgets from the design canvas into the combine widget.
![combine widget configure method 2](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_2.png)

3.  Drag existing panel widgets into the combine widget.
![combine widget configure method 3](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine-widgets-configuremethod_3.png)

## Overlapping of widgets

You can overlap the widget inside the combine widget. Just drag one widget over another widget. The order, in which the widgets are placed over one another can be checked in the property panel of the same combine widget.

![overlapping of widgets](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_overlapping.png)

Ordering of widget allows you to make the widget move back and forth. 

The property panel of the combine widget shows the list of widgets, which is dragged into it.

![list of widgets](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_list_of_widgets.png)

A widget, which can be seen above all other widgets is present at the bottom of the list and widget, which is at the bottom of all other widgets is present at the top of the list on the property panel of the combine widget.

The combo box widget, which is seen above other widgets is at the bottom of the list as shown in the following image.

![combo box with highest z-index](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_more_z-index.png)

Now, the combo box widget is at the bottom of the combine widget and cannot be seen and it is at the top of the list as shown in the following image.

![combo box with lowest z-index](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_less_z-index.png)

## Export

Export the combine widget as image and PDF format.

![export of combine widgets](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_export.png)

Widgets inside combine widgets has also exporting support, in order to export the specific widget into image, PDF, CSV and Excel formats.

## Pin combine widget

Pin the combine widget by using the pin icon on the container. The pinned widget will be available on pin boards.

![pin combine widgets](/static/assets/embedded/visualizing-data/visualization-widgets/images/combine-widgets/combine_widgets_pin.png)

> **NOTE:**  Points to be considered.
* There is no support to pin the widgets, which is inside the combine widget. 
* Initially, there will be no header present in the widgets inside the combine widget. If you need header, then you can enable it in the property panel for that specific widget.

Things which are not supported in combine widget:
1. Maximize the widget inside the combine widget.
2. Drag one combine widget over another combine widget.
3. Copy/Paste the combine widget when there is not enough space to be pasted.
4. Combine widget cannot be dropped from existing widgets panel when there is not enough space to be rendered.




