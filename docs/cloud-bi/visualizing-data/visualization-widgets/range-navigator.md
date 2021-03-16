---
layout: post
title: Range Navigator – Cloud BI | Bold BI Documentation
description: Learn how to create a Range Navigator visual in Bold BI Cloud dashboard, configure data field and other settings.
platform: bold-bi
control: Range Navigator
documentation: ug
---

# Range Navigator

Range navigator control provides an effective interface for selecting a smaller range from a large collection. It is commonly used to filter the date range for which the data is visualized.

![Range Navigator](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/rangeNavigator.png)

## How to configure table data to range navigator?

To configure range navigator, a minimum requirement of value and column is needed.

The following procedure illustrates data configuration of Range Navigator.

Click `Data Source` button in configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

Click `CREATE NEW` button to launch a new connection from connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

In the connection type panel, click any one (Here `Microsoft SQL` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click `Connect` button

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/Connectbutton.png)

Drag your preferred table or view from the left panel from data design view, click `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

Drag and drop `Range Navigator` control icon from tool box into design panel. You can find control in tool box by search.

![Range Navigator](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/rangeNavigator_img.png)

Click `Properties` button in configuration panel, property panel opens. Now, Switch to `ASSIGN DATA` tab.

![Range Navigator properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/rangeNavigator_prop.png)

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/rangeNavigator_assigndata.png)

The data tab will be opened with available measures and dimensions from the connected data source

![Range Navigator Assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorAssignData.png)

Bind column through drag and drop element from `Measures` section to `Value`.

![Range Navigator Value data](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorValuedata.png)

You can add more than one `Measures` into `Value`.

Click the `Settings` option to change required summary type from the available summary types shown in `Settings`.

![Range Navigator Summary type](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorSumType.png)

Drag and drop element from `Dimensions` or `Measures` field into `Argument` section.

![Range Navigator Argument data](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorArgdata.png)

![Range Navigator Argument data](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorMeasure.png)

Click the `Settings` option to change required date format. You can also set `Relative Date Filter`.

`Settings` icon is not applicable for `Measures` values.

![Range Navigator date Format](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatordate.png)

![Range Navigator Value section](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorArg.png)

Select `Relative Date Filter` in the drop-down menu and click `Edit` option to set relative date,

![Range Navigator relative date](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorRelativeDate.png)

Following window opens,

![Range Navigator relative date set](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorDatefil.png)

In that window, you can set `Range` and `Period` option. You can also set Specific date by enabling `Link to specific date` and click `OK` button.

Here is an illustration,

![Range Navigator](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/rangeNavigator.png)

## How to format Range Navigator?

You can format the Range Navigator for better illustration of the view that you require, through the settings available in `Properties` tab.

**General Settings**

![Range Navigator Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorName.png)

**Name**

This allows you to set title for this Range Navigator widget.

**Color Settings**

![Range Navigator Color Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorBasicSetting.png)

This allows you to customize Range chart series color.

**Label Color**

This allows you to customize the label color.

![Range Navigator Label Color Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/label-color-option.png)

![Range Navigator Label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/label-color.png)

**Axis Type Settings**

![Range Navigator Axis Type Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorAxis.png)

You can change range chart type as Area or Line or Step Line by dropdown.

![Range Navigator Chart Type Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorChartType.png)

Here is an illustration,

![Range Navigator Line Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorLine.png)

**Filter**  

![Range Navigator Filter Setting](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorfilter.png)

**Act as Master Widget**

This allows you to define this range navigator widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this range navigator widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Hierarchical Filter**

Through this option, you can enable/disable hierarchical top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. 

When `Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

**Container Appearance** 

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/range-navigator/navigatorContainersetting.png)

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
