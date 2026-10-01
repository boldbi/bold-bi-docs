---
layout: post
title: Line Chart (Modern) - Embedded BI Visual | Bold BI Documentation
description: Learn how to configure data, trend settings, forecast support, formatting, drill-down, and interactions for the modern Line Chart in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/distribution/line-chart/"
platform: bold-bi
control: Line Chart
documentation: ug
---

# Line Chart

A Line Chart connects data points with straight lines. It is commonly used to show trends, changes, and comparisons across time or another ordered category.

![Line Chart](/static/assets/visualizing-data/visualization-v2-widgets/images/line-chart/line-chart.png)

## Configuring Data

Configure the Line Chart in the `ASSIGN DATA` tab. At least one field is required in `Values`.

| Data section | Requirement | Description |
|---|---|---|
| **Values** | Required | Accepts one or more measures or numeric expressions. Each field is aggregated and plotted as a line series. |
| **Columns** | Optional | Accepts one or more dimensions for the category axis. Multiple fields create a drill-down hierarchy. |
| **Row** | Optional | Accepts one dimension and splits each value into series based on its distinct values. |
| **Hidden Column** | Optional | Accepts measures or dimensions used without plotting them. |
| **Filters** | Optional | Accepts measures or dimensions for additional filtering. |
| **Tooltip** | Optional | Accepts measures shown as supplementary tooltip values. |

### Assigning Data

1. Add the **Line Chart** to the design canvas and open its `ASSIGN DATA` tab.
2. Add one or more measures or numeric expressions to `Values`.
3. Optionally, add dimensions to `Columns` for the category axis and drill down.
4. Optionally, add one dimension to `Row` to create additional line series.
5. Add fields to `Hidden Column`, `Filters`, or `Tooltip` as needed.

### Settings menu

Use the `More options` icon to configure **Rename**, **Aggregation type**, **Sort**, **Filter(s)**, and **Format**, when supported. With `Row` configured, **Exclude Rows** is available for eligible `Sum` and `Count` fields. See [Data Configuration](/visualizing-data/visualization-v2-widgets/properties/data-configuration/).

### Drill Down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.

## Formatting the Line Chart

You can format the Line Chart using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure chart type and axis assignment, labels, markers, missing values, scrolling, and line style. Refer to [Basic Settings](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#basic-settings) for more information.

### Tooltip Settings

Configure tooltip visibility, content, color, direction, and shared display. Refer to [Tooltip Settings](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#tooltip-settings) for more information.

### Legend Settings

Configure legend visibility, interaction, position, shape, title, and text behavior. Refer to [Legend Settings](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#legend-settings) for more information.

### Forecast Settings

Configure predicted points, confidence, seasonality, and forecast appearance for an eligible Line Chart. Refer to [Forecast Settings](/visualizing-data/visualization-v2-widgets/properties/forecast-settings/) for more information.

### Series Palette

Configure series colors when `Row` is assigned. Refer to [Series Palette](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#series-palette) for more information.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for information about configuring navigation from a data point.

### Axis

Configure category and value axes, secondary-axis behavior, formats, and axis ranges. Refer to [Axis](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#axis) for more information.

### Grid Lines

Configure primary, secondary, and category-axis grid lines. Refer to [Grid Lines](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#grid-lines) for more information.

### Trendline

Add a trendline when the Line Chart has an eligible data configuration. Refer to [Trendline](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#trendline) for more information.

### Formatting

Configure the colors used by line series. Refer to [Formatting](/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/#formatting) for more information.

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





