---
layout: post
title: Range Slider Widget – Cloud BI | Bold BI Documentation
description: Learn how to create a Range Slider visual in Bold BI Cloud dashboard, configure data field and other settings.
platform: bold-bi
control: Range Slider
documentation: ug
---

# Range Slider

Range Slider enables you to filter based on value or date range set through sliders. To configure a range slider, a minimum requirement of 1 column is needed.

![Range Slider](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/rangeslider.png)

## How to configure table data to range slider?

The following procedure illustrates data configuration of Range Slider.

Drag and drop `Range Slider` control icon from the tool box into design panel. You can find control in tool box by search.

![Drop Range Slider](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/drop-widget.png)

Click `Data Source` button in configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left pane from data design view, click `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Click `Properties` button in Configuration panel, property pane opens. Now, Switch to `ASSIGN DATA` tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/rangesliderdatatab.png)

The data tab will be opened with available measures and dimensions from the connected data source

![Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/rangesilderassigndata.png)

Bind column through drag and drop element from sections to `Columns` section.

![Configure Widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/configure-widget.png)

Here is an illustration,

![Configured Widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/configured-widget.png)


## How to format range slider?

You can format the Range Slider for better illustration of the view that you require, through the settings available in `Properties` tab. 

**General Settings**

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/general-settings.png)

**Name**

This allows you to set title for this range slider widget.

**Basic Settings**

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/basic-settings.png)

**Range Selection**

This allows you to toggle the selection type of `Range Selection`.

Single – Single value can be bounded, if you disable the `Range Selection` option.

**Range Slider with Single Pointer**

![Range Slider with Single Pointer](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/single-pointer.png)

Range – A range (two values) can be bounded, if you enable the `Range Selection` option.

**Range Slider with Range Pointer**

![Range Slider with Range Pointer](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/range-pointer.png)

**Orientation**

This allows you to toggle the orientation type of `Vertical Orientation` and `Horizontal Orientation`.

![Range Slider Orientation Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/orientation-type.png)

Orientation will be set based on the widget resolutions in `Auto` mode.

**Range Slider with Vertical Orientation**

![Range Slider with Vertical Orientation](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/rangeslider_vertical.png)

**Range Slider with Horizontal Orientation**

![Range Slider with Horizontal Orientation](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/range-pointer.png)

**Label Color**

This allows you to customize the label color.

![Range Slider with modified label color](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/label-color.png)

**Slider Color**

This allows you to customize the slider color.

![Range Slider with modified slider color](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/slider-color.png)

**Filter**

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/filter.png)

**Act as Master Widget**

This allows you to define this range slider widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this range slider widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Container Appearance** 

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-slider/container-settings.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Enable Comments**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/)