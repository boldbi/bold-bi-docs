---
layout: post
title: Column Chart (Modern) Widget | Bold BI Documentation
description: Learn how to configure data, chart settings, formatting, drill-down, filters, and interactions for the modern Column Chart in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/comparison/column-chart/"
platform: bold-bi
control: Column Chart
documentation: ug
---

# Column Chart

A Column Chart compares values across categories using vertical columns. It is useful for comparing discrete categories and showing changes across an ordered category axis.

![Column Chart](/static/assets/visualizing-data/visualization-v2-widgets/images/column-chart/column-chart-view.png)

## Configuring Data

Configure the Column Chart in the `ASSIGN DATA` tab. At least one field is required in `Values`.

| Data section | Requirement | Description |
|---|---|---|
| **Values** | Required | Accepts one or more measures or numeric expressions. Each field is aggregated and plotted as a series. |
| **Columns** | Optional | Accepts one or more dimensions for the category axis. Multiple fields create a drill-down hierarchy. |
| **Row** | Optional | Accepts one dimension and splits each value into series based on its distinct values. |
| **Hidden Column** | Optional | Accepts measures or dimensions used for filtering, linking, or underlying data without plotting them. |
| **Filters** | Optional | Accepts measures or dimensions and applies additional filtering conditions. |
| **Tooltip** | Optional | Accepts one or more measures shown as supplementary tooltip values. |

### Assigning Data

1. Drag the **Column Chart** from the toolbox onto the design canvas.
2. Select the chart, click the **Settings** icon, and open the `ASSIGN DATA` tab.
3. Add one or more measures or numeric expressions to `Values`.
4. Optionally, add dimensions to `Columns` to group columns and create drill-down levels.
5. Optionally, add one dimension to `Row` to split the values into additional series.
6. Add fields to `Hidden Column`, `Filters`, or `Tooltip` as needed.

Multiple `Values` fields create multiple column series. A `Row` field creates a series for each distinct row value.

### Settings menu

Click the `More options` icon for an assigned field to access **Rename**, **Aggregation type**, **Sort**, **Filter(s)**, and **Format**, when supported. When `Row` is configured, **Exclude Rows** is available for eligible `Sum` and `Count` value fields. See [Data Configuration](/visualizing-data/visualization-v2-widgets/properties/data-configuration/) for related field settings.

### Drill Down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.

## Formatting the Column Chart

You can format the Column Chart using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure chart type and axis assignment, value labels, hover scaling, missing values, scrolling, column size, border, and corner radius. Refer to [Basic Settings](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#basic-settings) for more information.

### Tooltip Settings

Configure tooltip visibility, content, color, direction, and shared display. Refer to [Tooltip Settings](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#tooltip-settings) for more information.

### Legend Settings

Configure legend visibility, interaction, position, shape, title, and text behavior. Refer to [Legend Settings](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#legend-settings) for more information.

### Series Palette

Configure series colors when `Row` is assigned. Refer to [Series Palette](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#series-palette) for more information.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for information about configuring navigation from a data point.

### Axis

Configure category and value axes, secondary-axis behavior, formats, and axis ranges. Refer to [Axis](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#axis) for more information.

### Grid Lines

Configure primary, secondary, and category-axis grid lines. Refer to [Grid Lines](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#grid-lines) for more information.

### Trendline

Add a trendline when the Column Chart has an eligible non-stacked data configuration. Refer to [Trendline](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#trendline) for more information.

### Formatting

Configure series colors and eligible advanced color rules. Refer to [Formatting](/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/#formatting) for more information.

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





