---
layout: post
title: Pie Chart (Modern) - Embedded BI Visual | Bold BI Documentation
description: Learn how to configure data, labels, palette settings, formatting, and interactions for the modern Pie Chart in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/proportion/pie-chart/"
platform: bold-bi
control: Pie Chart
documentation: ug
---

# Pie Chart

A Pie Chart represents values as slices of a circle. The size of each slice shows its contribution to the total, making it useful for comparing part-to-whole relationships across a small number of categories.

![Pie Chart](/static/assets/visualizing-data/visualization-widgets/images/pie-chart/pie-chart.png)

## Configuring Data

Configure the Pie Chart in the `ASSIGN DATA` tab. At least one field is required in `Values`.

| Data section | Requirement | Description |
|---|---|---|
| **Values** | Required | Accepts one or more measures or numeric expressions. Each value is aggregated and determines the size of a segment. |
| **Columns** | Optional | Accepts one or more dimensions that divide the values into categorized segments. Multiple fields create a drill-down hierarchy. |
| **Row** | Optional | Accepts one dimension and creates a separate Pie Chart for each distinct value. |
| **Hidden Column** | Optional | Accepts measures or dimensions used for filtering, linking, or underlying data without displaying them in the chart. |
| **Filters** | Optional | Accepts measures or dimensions and applies additional filtering conditions. |
| **Tooltip** | Optional | Accepts one or more measures shown as supplementary tooltip values. |

### Assigning Data

1. Drag the **Pie Chart** from the toolbox onto the design canvas.
2. Select the chart and click the **Settings** icon.
3. Switch to the `ASSIGN DATA` tab.
4. Add a measure or numeric expression to `Values`.
5. Optionally, add dimensions to `Columns` to create categorized segments and a drill-down hierarchy.
6. Optionally, add a dimension to `Row` to create multiple charts.
7. Add fields to `Hidden Column`, `Filters`, or `Tooltip` as needed.

Without a `Columns` field, the configured `Values` fields form the segments. With a `Columns` field, the chart groups each measure by the distinct dimension values.

### Settings menu

Click the `More options` icon for an assigned field to access the options supported by that field and data section:

- **Rename** — Overrides the field's display name.
- **Aggregation type** — Changes how a measure is summarized. See [Aggregating Value Columns](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/).
- **Sort** — Changes the order of dimension values. See [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/).
- **Filter(s)** — Applies field-level filter conditions. See [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/).
- **Format** — Changes the displayed measure format. See [Formatting Measure Type Column](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

### Drill Down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.

> **NOTE:** Avoid placing a lower-level hierarchy field in `Hidden Column` than the field displayed in `Columns`, because this can produce duplicate grouped values.

## Formatting the Pie Chart

You can format the Pie Chart using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure the chart type, value labels, label content, suffix, and chart size. Refer to [Basic Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#basic-settings) for more information.

### Tooltip Settings

Configure tooltip visibility, content, and right-to-left display. Refer to [Tooltip Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#tooltip-settings) for more information.

### Series Settings

Configure the grid arrangement used when the widget displays multiple Pie Charts. Refer to [Series Settings](/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/#series-settings) for more information.

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





