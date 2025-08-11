---
layout: post
title: Tooltip Customization – Embedded BI | Bold BI Documentation
description: Learn how to customize tooltip with different columns for different widgets in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/tooltip-customization/"
platform: bold-bi
documentation: ug

---

# Tooltip customization in the widgets

Tooltips help users understand the exact numerical representation of the data records displayed in the widgets. They are informative and provide a robust way for users to explore raw data for a specific period or point, instead of showing all records at once in the visual. 

Initially, the widgets show the configured data values and corresponding data points' category as default tooltip information when hovering the mouse, as shown in the screenshots below.

*Chart widget: Shows the total sales amount for the sold top 5 categories.* 
 ![Tooltip chart widget](/static/assets/visualizing-data/working-with-widgets/images/Tooltip01.png)

*Map widget: Shows the total number of medals won by each country during the 2016 Summer Olympics.*
 ![Tooltip map widget](/static/assets/visualizing-data/working-with-widgets/images/Tooltip02.png)

Additional information can be showcased in the tooltip without affecting the visualization of the configured widget.

To do this, configure additional tooltip fields in the applicable widgets. This will display extra information alongside the default tooltip information.

The following sections discuss how to add additional tooltip fields and how to format the data values displayed in the tooltip.

## How to configure additional tooltip fields in the widgets

1.	Open the dashboard in the ` Dashboard Designer`. 
2.	Select the `widget` in the design layout where you want to add additional tooltip fields.
3.	Click the `properties` icon as shown in the screenshot.
 ![Click properties option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip03.png)
4.	The properties pane will open. Click `ASSIGN DATA` to open the data pane. 
 ![Assign data click](/static/assets/visualizing-data/working-with-widgets/images/Tooltip04.png)
5.	Drag the fields you want to show as additional information in the widget's tooltip to the `Tooltip` section.
 ![Configure tooltip section](/static/assets/visualizing-data/working-with-widgets/images/Tooltip05.png)
6.	Now, the widget will be rendered and on mouse hover, it will show the additional information as tooltip points for the configured measure. 
 ![Widget with tooltip](/static/assets/visualizing-data/working-with-widgets/images/Tooltip06.png)

> **IMPORTANT:**
> * Only measure fields are allowed as additional tooltip fields. If a Dimension field is added to the tooltip section, it will only act as a measure field.
> * This section is optional. If no additional fields are required, you do not need to add any fields in the tooltip section.
> * Tooltip fields do not affect the visualization and values are displayed only in the tooltip points.
> * You can add any number of tooltip fields as needed.
> * All types of charts, Choropleth Map, Bubble Map, Map, Tree map, and Heat map support tooltip fields.
> * Tooltip fields are currently not supported in Radial Gauge, Grid, Pivot Grid, Image, Label, and filter widgets. 

## How to format the tooltip values
You can customize the tooltip field name and the format of the displayed data value. 

### Rename option

By using the `Rename` option provided in the `settings` menu, you can rename the tooltip field name.

To rename the tooltip field, follow these steps:
1.	Click on the `Settings` menu and select the `Rename` option as shown in the screenshot below. The text will then become editable.
 ![Field rename option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip07.png)
Now, the text will become editable. 
 ![Column rename option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip08.png)
2.	Enter the desired text and press `Enter` to save the changes.
 ![Editing field display name](/static/assets/visualizing-data/working-with-widgets/images/Tooltip09.png)
 
Widget tooltip after modifying the field name.
 ![Edited view](/static/assets/visualizing-data/working-with-widgets/images/Tooltip10.png)

### Changing the aggregation type
You can adjust the `summary type` of the measure field from the `settings` menu and refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details on aggregation types.
 ![Change aggregation type](/static/assets/visualizing-data/working-with-widgets/images/Tooltip11.png)

 ### Changing the first or last value of the dimension field

 You can choose the `First` or `Last` option from the `settings` menu as shown below. This option will be available for the dimension or date field.

![First and Last Option](/static/assets/visualizing-data/working-with-widgets/images/first-last-settings.png)

When the `First` option is chosen, the top value of the dimension or date field can be obtained based on the measure column configured in the `Value(s)` section, and the tooltip value will be displayed as shown in the screenshots below.

![First Settings Option](/static/assets/visualizing-data/working-with-widgets/images/first-settings.png)

![First Settings Option For Widgets](/static/assets/visualizing-data/working-with-widgets/images/first-settings-widgets.png)

When the `Last` option is selected, the last value of the dimension or date field can be obtained based on the measure column configured in the `Value(s)` section, and the tooltip value will be displayed as shown in the screenshots below.

![Last Settings Option](/static/assets/visualizing-data/working-with-widgets/images/last-settings.png)

![Last Settings Option For Widgets](/static/assets/visualizing-data/working-with-widgets/images/last-settings-widget.png)

For a date column, the `First` or `Last` value will be displayed in date time format as shown in the screenshot below.

![Last Option For Date Column](/static/assets/visualizing-data/working-with-widgets/images/last-settings-date-column.png)

### Measure formatting

The measure value can be formatted by selecting the `Format` option from the `settings` menu. 
 ![Measure formatting option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip12.png)

Refer to [this section](/visualizing-data/working-with-widgets/formatting-measure-type-column/) for more details on formatting.

Screenshot of the widget with applied measure formatting.

 ![After formatting](/static/assets/visualizing-data/working-with-widgets/images/Tooltip13.png)