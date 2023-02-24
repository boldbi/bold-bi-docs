---
layout: post
title: Text Filter – Cloud Dashboard Widget | Bold BI Docs
description: Learn how to create and add a Text Filter visual in an cloud dashboard, configure data fields and other settings using Bold BI application.
platform: bold-bi
control: Text Filter
documentation: ug
---

# Text Filter

Text Filter enables you to filter the items based on value typing in text box. To configure text filter, a minimum requirement of 1 column is needed. 

![TextFilter](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/textfilter.png)

## How to configure table data to text filter?

The following procedure explains the data configuration of the Text filter:

1.  Drag and drop the `Text Filter` widget from the toolbox into the design panel and resize it to your required size. You can find the widget in the toolbox by `search`.

![TextFilter](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png#max-width=79%)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. 

![Designer properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![TextFilter Datatab](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/textfilter-datatab.png)

9. The `ASSIGN DATA` tab will be opened with the available dimensions from the connected data source.

![TextFilter Assign Datatab](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/textfilter-assigndata.png)

### Adding Values

You can add the `Dimensions` to the `Column` section by dragging and dropping the required column.

![TextFilter Assign Datatab](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/configure-widget.png)

### Renaming field

The configured field name can be edited by using the Rename option provided in the settings menu.

![TextFilter Rename](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/textfilter-renameoption.png)

## Filtering Options

The text filter widget allows you to apply filtering for slave widgets by below filtering options.

***Contains***

It perform contains operation. By default, the text filter filtering option will be `contains`.

Syntax: [text]

![TextFilter contains](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/contains-option.png)

***Starts With***

It performs starts with operation.

Syntax: [text]*

![TextFilter starts with option](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/starts-with-option.png)

***Ends With***

It performs ends with operation.

Syntax: *[text]

![TextFilter ends with option](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/ends-with-option.png)

You can apply filter by initial selection.

![TextFilter Initial Selection](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/initial-selection.png)

## How to format Text Filter?

You can format the text filter for a better illustration of the view that you require through the settings available in the `Properties` tab. This pane can be opened from the design view by clicking the `Settings` icon at the top right corner of the widget.

### General Settings

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/property.png)

#### Name

This allows you to set the `title` for this text filter widget.

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/title.png)

#### Subtitle

This allows you to set the `subtitle` for this text filter widget.

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/subtitle.png)

#### Description

This allows you to set the brief explanation about this text filter widget.

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/Description.png)

#### Filter

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/filter.png)

#### Act as Master Widget

This allows you to define this text filter widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this text filter widget to ignore responding to the filter actions applied on other widgets in dashboard.

#### Enable Hierarchical Filtering

Using this option, you can enable or disable hierarchical top N filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When `Enable Hierarchical Filtering` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/container-appearance.png)

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

This allows you to toggle the visibility of `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** to the text filter widget.

#### Transparency

This property allows you to specifies the **transparency** for the `background color`.

#### Show Shadow

This property allows you to toggle the visibility of `shadow` for text filter widget.

#### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/text-filter/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the text filter widget. 

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

