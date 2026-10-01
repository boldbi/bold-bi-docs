---
layout: post
title: 100% Stacked Column (Modern) | Bold BI Documentation
description: Learn how to configure data, chart settings, formatting, drill-down, and interactions for the modern 100% Stacked Column Chart in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/comparison/100-stacked-column-chart/"
platform: bold-bi
control: 100% Stacked Column Chart
documentation: ug
---

# 100% Stacked Column Chart

A 100% Stacked Column Chart displays each category as a vertical column normalized to 100%. Its segments show the percentage contribution of each series.

![100% Stacked Column Chart](/static/assets/visualizing-data/visualization-v2-widgets/images/100-stacked-column-chart/hundredstacked-columnchart.png)

## Configuring Data

Configure the chart in the `ASSIGN DATA` tab. At least one field is required in `Values`.

| Data section | Requirement | Description |
|---|---|---|
| **Values** | Required | Accepts one or more measures or numeric expressions. Values are aggregated and normalized within each category. |
| **Columns** | Optional | Accepts one or more category dimensions. Multiple fields create a drill-down hierarchy. |
| **Row** | Optional | Accepts one dimension and creates additional percentage segments from its distinct values. |
| **Hidden Column** | Optional | Accepts measures or dimensions used without plotting them. |
| **Filters** | Optional | Accepts measures or dimensions for additional filtering. |
| **Tooltip** | Optional | Accepts measures shown as supplementary tooltip values. |

### Assigning Data

1. Add the **100% Stacked Column Chart** to the design canvas and open its `ASSIGN DATA` tab.
2. Add one or more measures or numeric expressions to `Values`.
3. Optionally, add dimensions to `Columns` for categories and drill down.
4. Optionally, add one dimension to `Row` to create additional segments.
5. Add fields to `Hidden Column`, `Filters`, or `Tooltip` as needed.

### Settings menu

Use the `More options` icon to configure **Rename**, **Aggregation type**, **Sort**, **Filter(s)**, and **Format**, when supported. **Exclude Rows** is not available for percentage series. See [Data Configuration](/visualizing-data/visualization-v2-widgets/properties/data-configuration/).

### Drill Down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.

## Formatting the 100% Stacked Column Chart

You can format the 100% Stacked Column Chart using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure chart type, labels, hover scaling, missing values, scrolling, column size, border, and corner radius. Refer to [Basic Settings](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#basic-settings) for more information.

### Tooltip Settings

Configure tooltip visibility, original-value display, content, color, direction, and shared display. Refer to [Tooltip Settings](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#tooltip-settings) for more information.

### Legend Settings

Configure legend visibility, interaction, position, shape, title, and text behavior. Refer to [Legend Settings](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#legend-settings) for more information.

### Series Palette

Configure series colors when `Row` is assigned. Refer to [Series Palette](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#series-palette) for more information.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for information about configuring navigation from a data point.

### Axis

Configure category and percentage axes, formats, and axis ranges. Refer to [Axis](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#axis) for more information.

### Grid Lines

Configure primary and category-axis grid lines. Refer to [Grid Lines](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#grid-lines) for more information.

### Formatting

Configure the colors used by percentage series. Refer to [Formatting](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#formatting) for more information.

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for information about configuring chart fonts.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for information about configuring filter-related properties.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for information about configuring the widget container.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for information about configuring viewer actions.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for information about configuring the chart when no data is available.

### Export Settings

Refer to [Export Options](/visualizing-data/visualization-v2-widgets/properties/export-options/) for information about configuring available export formats.

### View Underlying Data

Refer to [View Underlying Data](/visualizing-data/working-with-widgets/view-data/) for information about allowing viewers to inspect the chart's underlying records.





