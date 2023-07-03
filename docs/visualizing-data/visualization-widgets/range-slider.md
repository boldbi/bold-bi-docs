---
layout: post
title: Range Slider Widget – Embedded BI | Bold BI Documentation
description: Learn how to create a Range Slider visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/visualizing-data/visualization-widgets/range-slider/"
platform: bold-bi
control: Range Slider
documentation: ug
lang: en
---

# Range Slider

Range Slider enables you to filter based on value or date range set through sliders. To configure a range slider, a minimum requirement of 1 column is needed.

![Range Slider](/static/assets/visualizing-data/visualization-widgets/images/range-slider/rangeslider.png)

## How to configure table data to range slider?

The following procedure explains the data configuration of Range Slider.

1.  Drag and drop the `Range Slider` control icon from the toolbox into design panel. You can find control by searching in the toolbox.

![Drop Range Slider](/static/assets/visualizing-data/visualization-widgets/images/range-slider/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/range-slider/rangesliderdatatab.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![Assign data](/static/assets/visualizing-data/visualization-widgets/images/range-slider/rangesilderassigndata.png)

9.  Bind column through drag and drop element from the sections to `Columns` section.

![Configure Widget](/static/assets/visualizing-data/visualization-widgets/images/range-slider/configure-widget.png)

Here is an illustration,

![Configured Widget](/static/assets/visualizing-data/visualization-widgets/images/range-slider/configured-widget.png)


## How to format range slider?

You can format the Range Slider for better illustration of the view that you require, through the settings available in the `Properties` tab.

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/range-slider/property.png)

#### Name

This allows you to set the `title` for this range slider widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/range-slider/Name.png)

#### Subtitle

This allows you to set the `subtitle` for this range slider widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/range-slider/subtitle.png)

#### Description

This allows you to set the brief explanation about this range slider widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/range-slider/Description.png)

#### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/range-slider/basic-settings.png)

#### Range Selection

This allows you to toggle the selection type of `Range Selection.`

Single – Single value can be bounded, if you disable the `Range Selection` option.

**Range Slider with Single Pointer**

![Range Slider with Single Pointer](/static/assets/visualizing-data/visualization-widgets/images/range-slider/single-pointer.png)

Range – A range (two values) can be bounded, if you enable the `Range Selection` option.

**Range Slider with Range Pointer**

![Range Slider with Range Pointer](/static/assets/visualizing-data/visualization-widgets/images/range-slider/range-pointer.png)

#### Orientation

This allows you to toggle the orientation type of `Vertical Orientation` and `Horizontal Orientation.`

![Range Slider Orientation Type](/static/assets/visualizing-data/visualization-widgets/images/range-slider/orientation-type.png)

Orientation will be set based on the widget resolutions in the`Auto` mode.

#### Range Slider with Vertical Orientation

![Range Slider with Vertical Orientation](/static/assets/visualizing-data/visualization-widgets/images/range-slider/rangeslider-vertical.png)

#### Range Slider with Horizontal Orientation

![Range Slider with Horizontal Orientation](/static/assets/visualizing-data/visualization-widgets/images/range-slider/range-pointer.png)

#### Label Color

This allows you to customize the label color.

![Range Slider with modified label color](/static/assets/visualizing-data/visualization-widgets/images/range-slider/label-color-option.png)

![Range Slider with modified label color](/static/assets/visualizing-data/visualization-widgets/images/range-slider/label-color.png)

#### Slider Color

This allows you to customize the slider color.

![Range Slider with modified slider color](/static/assets/visualizing-data/visualization-widgets/images/range-slider/slider-color-option.png)

![Range Slider with modified slider color](/static/assets/visualizing-data/visualization-widgets/images/range-slider/slider-color.png)

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/range-slider/filter.png)

#### Act as Master Widget

This allows you to define this range slider widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this range slider widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable Hierarchical Filtering

Using this option, you can enable or disable the hierarchical top N filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When the `Enable Hierarchical Filtering` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/range-slider/container-appearance.png)

#### Title Alignment

This allows you to handle the alignment of widget title to either `left, center, or right.`

#### Title Color

This allows you to apply the text `color` to the widget title.

#### Title Auto Font Size

On enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

#### Subtitle Auto Font Size

On enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

#### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** to the range slider widget.

#### Transparency

This property allows you to specify the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

#### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/range-slider/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the range slider widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).