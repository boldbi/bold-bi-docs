---
layout: post
title: Text Filter – Embedded Dashboard Widget | Bold BI Docs
description: Learn how to create and add a Text Filter visual in an embedded dashboard, configure data fields and other settings using Bold BI application.
platform: bold-bi
control: Text Filter
documentation: ug
---

# Text Filter

Text Filter enables you to filter the items based on the value typed in the text box. To configure the text filter, a minimum requirement of 1 column is needed.

![TextFilter](/static/assets/visualizing-data/visualization-widgets/images/text-filter/textfilter.png)

## How to configure table data to text filter?

The following procedure explains the configuration of the data for the Text filter:

1.  Drag and drop the `Text Filter` widget from the toolbox into the design panel and resize it to your required size. You can find the widget in the toolbox by `search`.

![TextFilter](/static/assets/visualizing-data/visualization-widgets/images/text-filter/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png#max-width=79%)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click on any one of the listed connection type buttons (Here, the `Microsoft Excel` Connection type is selected for demonstration).

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill in the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane in the data design view, then click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel; the property pane will open.

![Designer properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, switch to the `ASSIGN DATA` tab.

![TextFilter Datatab](/static/assets/visualizing-data/visualization-widgets/images/text-filter/textfilter-datatab.png)

9. The `ASSIGN DATA` tab will open with the available dimensions from the connected data source.

![TextFilter Assign Datatab](/static/assets/visualizing-data/visualization-widgets/images/text-filter/textfilter-assigndata.png)

### Adding Values

You can add the `Dimensions` to the `Column` section by dragging and dropping the required column.

![TextFilter Assign Datatab](/static/assets/visualizing-data/visualization-widgets/images/text-filter/configure-widget.png)

### Renaming field

The configured field name can be edited using the Rename option provided in the settings menu.

![TextFilter Rename](/static/assets/visualizing-data/visualization-widgets/images/text-filter/textfilter-renameoption.png)

## Filtering Options

The text filter widget allows you to apply filtering for slave widgets with the following filtering options:

***Contains***

It performs a contains operation. By default, the text filter filtering option will be `contains`.

Syntax: [text]

![TextFilter contains](/static/assets/visualizing-data/visualization-widgets/images/text-filter/contains-option.png)

***Starts With***

It starts with the operation.

Syntax: [text]*

![TextFilter starts with option](/static/assets/visualizing-data/visualization-widgets/images/text-filter/starts-with-option.png)

***Ends With***

It ends with the operation.

Syntax: *[text]

![TextFilter ends with option](/static/assets/visualizing-data/visualization-widgets/images/text-filter/ends-with-option.png)

You can apply a filter by making an initial selection.

![TextFilter Initial Selection](/static/assets/visualizing-data/visualization-widgets/images/text-filter/initial-selection.png)

## How to format Text Filter?

You can format the text filter for a better illustration of the view that you require through the settings available in the `Properties` tab. This pane can be opened from the design view by clicking the `Settings` icon at the top right corner of the widget.

### General Settings

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/text-filter/property.png)

#### Name

This allows you to set the `title` for this text filter widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/text-filter/title.png)

#### Subtitle

This allows you to set the `subtitle` for this text filter widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/text-filter/subtitle.png)

#### Description

This allows you to set a brief explanation about this text filter widget.

![General Settings](/static/assets/visualizing-data/visualization-widgets/images/text-filter/Description.png)

#### Filter

![Filter](/static/assets/visualizing-data/visualization-widgets/images/text-filter/filter.png)

#### Act as Master Widget

This allows you to define this text filter widget as a master widget so that its filter action can be made to listen to other widgets in the dashboard.

#### Ignore Filter Actions

This allows you to define this text filter widget to ignore responding to the filter actions applied on other widgets in the dashboard.

#### Enable Hierarchical Filtering

Using this option, you can enable or disable hierarchical top N filtering. When applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added.

When `Enable Hierarchical Filtering` is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

#### Container Appearance

![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/text-filter/container-appearance.png)

#### Title Alignment

This allows you to handle the alignment of the widget title to either `left, center, or right.`

#### Title Color

This allows you to apply the text `color` to the widget title.

#### Title Auto Font Size

By enabling Auto Font Size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. The value can be between 10 and 44.

#### Subtitle Auto Font Size

By enabling Auto Font Size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. The value can be between 10 and 32.

#### Show Border

This allows you to toggle the visibility of the `border` surrounding the widget.

#### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. The value can be between 0 and 10.

#### Background Color

This allows you to set the **background color** for the text filter widget.

#### Transparency

This property allows you to specify the **transparency** for the `background color`.

#### Show Shadow

This property allows you to toggle the visibility of the `shadow` for the text filter widget.

#### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/text-filter/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the text filter widget. 

#### Enable Comments

This allows you to enable or disable `comments` for the dashboard widget. For more details, refer to the [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

