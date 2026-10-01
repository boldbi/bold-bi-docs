---
layout: post
title: Period Over Period (Modern) | Bold BI Documentation
description: Learn how to configure data, formatting, filters, and interactions for the modern Period Over Period widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/filters/period-over-period/"
platform: bold-bi
control: Period Over Period
documentation: ug
---

# Period Over Period

The Period Over Period widget allows users to select two time periods and compare data from a selected date range with data from a previous, subsequent, or custom comparison period.

![Period Over Period](/static/assets/visualizing-data/visualization-widgets/images/pop/pop.png)

## Configuring Data

Configure the data for the Period Over Period widget in the `ASSIGN DATA` tab.

| Data section | Requirement | Description |
|---|---|---|
| **Column** | Required | Specifies the date or date-time dimension used to calculate the comparison periods and filter linked widgets. |
| **Filters** | Optional | Allows you to apply additional filtering conditions to the Period Over Period data. |

### Assigning Data

1. Drag and drop the **Period Over Period** widget from the toolbox onto the design canvas.
2. Resize the widget as required.
3. Select the Period Over Period widget and click the **Settings** icon to open the configuration panel.
4. Switch to the `ASSIGN DATA` tab.
5. Drag and drop a date or date-time dimension field into the `Column` section.
6. Optionally, add fields to the `Filters` section to apply additional filtering conditions.

After a field is assigned, the widget calculates its default date range from the minimum and maximum dates in that field. At runtime, users can select relative or custom values for **Date Range** and **Compare To**. The assigned field is then used to apply both period filters to linked widgets.

---

## Formatting the Period Over Period

You can format the Period Over Period widget using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for information about configuring filter-related properties.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for information about configuring the appearance of the widget container.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for information about configuring the actions available for the widget container.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for information about configuring how the widget is displayed when no data is available.



