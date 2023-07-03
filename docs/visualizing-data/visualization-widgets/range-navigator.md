---
layout: post
title: Range Navigator – Embedded BI | Bold BI Documentation
description: Learn how to create a Range Navigator visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/visualizing-data/visualization-widgets/range-navigator/"
platform: bold-bi
control: Range Navigator
documentation: ug
---

# Range Navigator

Range navigator control provides an effective interface for selecting a smaller range from a large collection. It is commonly used to filter the date range for which the data is visualized.

![Range Navigator](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/range-navigator.png)

## How to configure table data to range navigator?

To configure range navigator, a minimum requirement of value and column is needed.

The following procedure explains data configuration of Range Navigator:

1.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

2.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

3.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

4.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

5.  Drag your preferred table or view from the left panel from data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

6.  Drag and drop the `Range Navigator` control icon from the toolbox into the design panel. You can find control by searching in the toolbox.

![Range Navigator](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/drag-drop.png)

7.  Click the `Properties` button in the configuration panel, property panel opens. Now, switch to the `ASSIGN DATA` tab.

![Range Navigator properties button](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/range-assigndata.png)

8.  The data tab will be opened with available measures and dimensions from the connected data source.

![Range Navigator Assign data](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-assigndata.png)

### Adding value

Bind column through drag and drop element from the `Measures` section to `Value.`

![Range Navigator Value data](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-valuedata.png)

You can add more than one `Measures` into `Value.`

Click the `Settings` option to change required summary type from the available summary types shown in `Settings.`

![Range Navigator Summary type](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-sumtype.png)

Drag and drop element from the `Dimensions` or `Measures` field into the `Argument` section.

![Range Navigator Argument data](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-argdata.png)

`Dimensions` section is available only with date fields and icon in `Argument` section denotes the same.

![Range Navigator Argument Icon Info](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-argicon.png)

Click the `Settings` option to change required date format. You can also set the `Relative Date Filter.`

`Settings` icon is not applicable for `Measures` values.

![Range Navigator date Format](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigatordate.png)

Select the `Relative Date Filter` in the dropdown menu and click the `Edit` option to set relative date,

![Range Navigator relative date](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-relativedate.png)

Following window opens,

![Range Navigator relative date set](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-datefil.png)

In that window, you can set the `Range` and `Period` option. You can also set a Specific date by enabling the `Link to specific date` and click `OK` button.

Here is an illustration,

![Range Navigator](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/range-navigator.png)

## How to format Range Navigator?

You can format the Range Navigator for better illustration of the view that you require, through the settings available in the `Properties` tab.

### General Settings

![Range Navigator Name](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/property.png)

#### Name

This allows you to set the `title` for this range navigator widget.

![Range Navigator Name](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/Name.png)

#### Subtitle

This allows you to set the `subtitle` for this range navigator widget.

![Subtitle](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/subtitle.png)

#### Description

This allows you to set the brief explanation about this range navigator widget.

![description](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/Description.png)

### Color Settings

![Range Navigator Color Settings](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-basic-setting.png)

This allows you to customize Range chart series color.

**Label Color**

This allows you to customize the label color.

![Range Navigator Label Color Settings](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/label-color-option.png)

![Range Navigator Label Color](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/label-color.png)

### Axis Type Settings

![Range Navigator Axis Type Settings](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-axis.png)

You can change the range chart type as Area or Line or Step Line by dropdown.

![Range Navigator Chart Type Settings](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-charttype.png)

Here is an illustration,

![Range Navigator Line Type](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigator-line.png)

### Filter

![Range Navigator Filter Setting](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/navigatorfilter.png)

### Act as Master Widget

This allows you to define this range navigator widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

### Ignore Filter Actions

This allows you to define this range navigator widget to ignore responding to the filter actions applied on other widgets in a dashboard.

### Hierarchical Filter

Through this option, you can enable/disable the hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added.

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/container-appearance.png)

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

This allows you to set the **background color** to the range navigator widget.

#### Transparency

This property allows you to specifies the **transparency** for the `background color.`

### Show Shadow

This allows you to toggle the visibility of the `shadow` surrounding the widget.

#### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the range navigator widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/visualizing-data/working-with-widgets/commenting-widget/).