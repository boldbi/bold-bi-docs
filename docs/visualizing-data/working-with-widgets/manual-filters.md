---
layout: post
title: Filtering Widgets by Manual Filters - Embedded BI | Bold BI Docs
description: This page describes the manual filters in Bold BI On-premise version where fields can be added into filter section of a widget to apply filter based on them.
platform: bold-bi
documentation: ug
keywords: manual filters, widget filtering, filtering visuals
---

# Configuring manual filter in widgets

Starting from Bold BI [`v3.3.88`](https://www.boldbi.com/release-history/enterprise/3-3#3-3-88) you can filter the data bind to the widget by using any of the fields present in the data source. You can use single or multiple fields to filter the widget data. 

**Example:**

Here the chart widget shows Product Category with high sales. Using manual filters we can show the data of specific country, in this case we will be showing the data of `Germany` using the `Country` field.

*Chart widget: Shows the Categories with High Sales.* <br>
 ![Chart widget](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-not-applied-in-chart.png)

*Chart widget: Shows the Categories with High Sales in Germany.*<br>
 ![Chart widget with manual filter applied](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-applied-in-chart.png)

## How to configure the manual filter in widgets

1.	Open the dashboard in the ` Dashboard Designer`. 
2.	Select the  `widget` in the design layout in which you want to add manual filter. 
3.	Click the `properties` icon as shown in the following screenshot.<br>
 ![Click properties option](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-properties-icon.png)
4.	Now, click `ASSIGN DATA` to open the data panel.<br>
 ![Assign data click](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-assigndata.png)
5.	Drag the fields to the `Filters` section which you want to bind manual filter.<br>
 ![Configure manual filter section](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-column-dropped.png)
6. Select `Edit` option in `Filters` menu provided in the `settings` icon in the filter field.<br>
 ![Configure manual filter section](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-settings-icon.png)
7.  Now, apply filter condition in the filter dialog to the dropped column. <br>
 ![Configure manual filter section](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-dialog.png)<br>
  You can refer to [this section](/visualizing-data/working-with-widgets/configuring-widget-filters/) to learn more details about widget filtering.
8.	The widget will be rendered with the filter condition applied. 
 ![Widget with manual filter applied](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-applied-in-designer.png)

### Rename option

Using the `Rename` option provided in the `settings` menu, you can rename the manual filter's field name. 

To rename the manual filter's field, follow these steps:
1.	Click the `Settings` menu and select the `Rename` option as shown in the following screenshot.<br>
 ![Field rename option](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-settings-rename.png)
Now, the text will become editable. <br>
 ![Column rename option](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-settings-rename-editable.png)
2.	Enter the text you want, and press `Enter` to save the changes.<br>
 ![Editing field display name](/static/assets/visualizing-data/working-with-widgets/images/manual-filter-settings-renamed.png)

> **Note:**
>   * Multiple fields can be added in manual filter section as per requirement.
>   * This section is optional. Skip adding fields to manual filter section, if it is not require.
>   * Manual filter affects the visualization data in the widget.
>   * The filter fields, are not included on `View Underlying Data`.
>   * Widgets except image, text and line are supporting with manual filter section.
>   * Manual filter section is currently not supported with conditional filtering for the widgets. 

You can refer to [this section](/visualizing-data/working-with-widgets/configuring-widget-filters/) to learn more details about widget filtering. 