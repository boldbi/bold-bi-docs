---
layout: post
title: Doughnut Chart Widget (Modern) | Bold BI Documentation
description: Learn how to configure data, labels, formatting, legend settings, and interactions for the modern Doughnut Chart in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/proportion/doughnut-chart/"
platform: bold-bi
control: Doughnut Chart
documentation: ug
---

# Doughnut Chart

A Doughnut Chart represents values as proportional segments of a ring. The hollow center distinguishes it from a Pie Chart while retaining the same part-to-whole comparison.

![Doughnut Chart](/static/assets/visualizing-data/visualization-widgets/images/doughnut-chart/doughnutchart-column.png)

## Configuring Data

Configure the Doughnut Chart in the `ASSIGN DATA` tab. At least one field is required in `Values`.

| Data section | Requirement | Description |
|---|---|---|
| **Values** | Required | Accepts one or more measures or numeric expressions. Each value is aggregated and determines the size of a segment. |
| **Columns** | Optional | Accepts one or more dimensions that divide the values into categorized segments. Multiple fields create a drill-down hierarchy. |
| **Row** | Optional | Accepts one dimension and creates a separate Doughnut Chart for each distinct value. |
| **Hidden Column** | Optional | Accepts measures or dimensions used for filtering, linking, or underlying data without displaying them. |
| **Filters** | Optional | Accepts measures or dimensions and applies additional filtering conditions. |
| **Tooltip** | Optional | Accepts one or more measures shown as supplementary tooltip values. |

### Assigning Data

1. Drag the **Doughnut Chart** from the toolbox onto the design canvas.
2. Select the chart, click the **Settings** icon, and open the `ASSIGN DATA` tab.
3. Add a measure or numeric expression to `Values`.
4. Optionally, add dimensions to `Columns` for categorized segments and drill down.
5. Optionally, add a dimension to `Row` to create multiple charts.
6. Add fields to `Hidden Column`, `Filters`, or `Tooltip` as needed.

Without a `Columns` field, the configured `Values` fields form the segments. With a `Columns` field, the chart groups each measure by the distinct dimension values.

### Settings menu

Click the `More options` icon for an assigned field to access **Rename**, **Aggregation type**, **Sort**, **Filter(s)**, and **Format**, when supported. See [Aggregating Value Columns](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/), [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/), [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/), and [Formatting Measure Type Column](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

### Drill Down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.

## Formatting the Doughnut Chart

You can format the Doughnut Chart using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

#### Doughnut Radius

Controls the size of the opening at the center of the chart. The supported range is `0.1` through `0.9`.

For the remaining shared Basic Settings, refer to [Basic Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#basic-settings).

### Tooltip Settings

Configure tooltip visibility, content, and right-to-left display. Refer to [Tooltip Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#tooltip-settings) for more information.

### Series Settings

Configure the grid arrangement used when the widget displays multiple Doughnut Charts. Refer to [Series Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#series-settings) for more information.

### Legend Settings

Configure legend visibility, interaction, position, shape, title, and text behavior. Refer to [Legend Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#legend-settings) for more information.

### Series Palette

Configure the colors used by the chart segments. Refer to [Series Palette](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#series-palette) for more information.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for information about configuring navigation to another dashboard or URL.

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for information about configuring font-related properties.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for information about configuring filter-related properties.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for information about configuring the widget container.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for information about configuring viewer actions.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for information about configuring the widget when no data is available.

### Export Settings

Refer to [Export Options](/visualizing-data/visualization-v2-widgets/properties/export-options/) for information about configuring available export formats.

### View Underlying Data

Refer to [View Underlying Data](/visualizing-data/working-with-widgets/view-data/) for information about allowing viewers to inspect the chart's underlying records.





