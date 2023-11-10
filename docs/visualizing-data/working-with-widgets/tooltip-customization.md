---
layout: post
title: Tooltip Customization – Embedded BI | Bold BI Documentation
description: Learn how to customize tooltip with different columns for different widgets in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/tooltip-customization/"
platform: bold-bi
documentation: ug

---

# Tooltip customization in the widgets

Tooltips help the users to know the exact numerical representation of the data records displayed in the widgets.  Tooltips are informative and a robust way to let the users to explore the raw data of a period or point when they need them instead of showing all the records at a same time in the visual. 

Initially, the widgets show the configured data values and the category of the corresponding data points as the default tooltip information, when you hover the mouse as shown in the following screenshots.

*Chart widget: Shows the total sales amount for the sold top 5 categories.* 
 ![Tooltip chart widget](/static/assets/visualizing-data/working-with-widgets/images/Tooltip01.png)

*Map widget: Shows the total number of medals won by each country during the 2016 Summer Olympics.*
 ![Tooltip map widget](/static/assets/visualizing-data/working-with-widgets/images/Tooltip02.png)

You should showcase the additional information in the tooltip without affecting the visualization of the configured widget.

To achieve this, you can configure the additional tooltip fields in the applicable widgets. It will show the additional information along with the default tooltip Information. 

The following sections discuss about how to add additional tooltip fields and how to format the data values displayed in the tooltip.

## How to configure additional tooltip fields in the widgets

1.	Open the dashboard in the ` Dashboard Designer`. 
2.	Select the  `widget` in the design layout in which you want to add additional tooltip fields. 
3.	Click the `properties` icon as shown in the following screenshot.
 ![Click properties option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip03.png)
4.	Now, the properties pane opens. Click `ASSIGN DATA` to open the data pane. 
 ![Assign data click](/static/assets/visualizing-data/working-with-widgets/images/Tooltip04.png)
5.	Drag the fields to the `Tooltip` section which you want to show in the widget’s tooltip as additional information.
 ![Configure tooltip section](/static/assets/visualizing-data/working-with-widgets/images/Tooltip05.png)
6.	Now, the widget will be rendered and on mouse hover, it will show the additional information as tooltip points for the configured measure. 
 ![Widget with tooltip](/static/assets/visualizing-data/working-with-widgets/images/Tooltip06.png)

> **IMPORTANT:** <br>
    1. Only measure fields are allowed as additional tooltip fields. If the Dimension field is added in the tooltip section, it will only act as a measure field.<br>
    2. This section is optional. If no additional fields are required, you need not add any fields in the tooltip section.<br>
    3. Tooltip fields do not affect the visualization and the values are displayed in the tooltip points only.<br> 
    4. You can add any number of tooltip fields as per requirement.<br>
    5. All type of charts, Choropleth Map, Bubble Map, Map, Tree map, and Heat map are supporting the tooltip fields.<br> 
    6. Tooltip fields are currently not supported in the KPI Card, Number Card, Radial Gauge, Grid, Pivot Grid, Image, Label, and the filter widgets. 

## How to format the tooltip values
You can customize the tooltip field name and the format of the displayed data value. 

### Rename option

Using the `Rename` option provided in the `settings` menu, you can rename the tooltip field name. 

To rename the tooltip field, follow these steps:
1.	Click the `Settings` menu and select the `Rename` option as shown in the following screenshot. 
 ![Field rename option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip07.png)
Now, the text will become editable. 
 ![Column rename option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip08.png)
2.	Enter the text you want, and press `Enter` to save the changes.
 ![Editing field display name](/static/assets/visualizing-data/working-with-widgets/images/Tooltip09.png)
 
Widget tooltip after modifying the field name
 ![Edited view](/static/assets/visualizing-data/working-with-widgets/images/Tooltip10.png)

### Changing the aggregation type
You can change the `summary type` of the measure field from the `settings` menu and refer to [this section](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) to learn more details on aggregation types.
 ![Change aggregation type](/static/assets/visualizing-data/working-with-widgets/images/Tooltip11.png)

 ### Changing the first or last value of the dimension field

 You can select `First` or `Last` option from the `settings` menu as follows. This option will be enabled for the dimension or date field.

![First and Last Option](/static/assets/visualizing-data/working-with-widgets/images/first-last-settings.png)

When the `First` option is selected, the top value of the dimension or date field can be obtained based on the measure column, configured in the `Value(s)` section and displays the tooltip value as shown in the following screenshots.

![First Settings Option](/static/assets/visualizing-data/working-with-widgets/images/first-settings.png)

![First Settings Option For Widgets](/static/assets/visualizing-data/working-with-widgets/images/first-settings-widgets.png)

When the `Last` option is selected, the last value of the dimension or date field can be obtained based on the measure column, configured in the `Value(s)` section and displays the tooltip value as shown in the following screenshots.

![Last Settings Option](/static/assets/visualizing-data/working-with-widgets/images/last-settings.png)

![Last Settings Option For Widgets](/static/assets/visualizing-data/working-with-widgets/images/last-settings-widget.png)

For date column, `First` or `Last` value will be shown in date time format as shown in the  following screenshot.

![Last Option For Date Column](/static/assets/visualizing-data/working-with-widgets/images/last-settings-date-column.png)

### Measure formatting

The measure value can be formatted by clicking the `Format` menu option from the `settings` menu. 
 ![Measure formatting option](/static/assets/visualizing-data/working-with-widgets/images/Tooltip12.png)

You can refer to [this section](/visualizing-data/working-with-widgets/formatting-measure-type-column/) to learn more details about formatting. 

Screenshot of the widget with applied measure formatting

 ![After formatting](/static/assets/visualizing-data/working-with-widgets/images/Tooltip13.png)