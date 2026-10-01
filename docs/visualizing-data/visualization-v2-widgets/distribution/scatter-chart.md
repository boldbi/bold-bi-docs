---
layout: post
title: Scatter Chart (Modern) Widget | Bold BI Documentation
description: Learn how to configure data, axis settings, formatting, tooltip settings, and interactions for the modern Scatter Chart in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/distribution/scatter-chart/"
platform: bold-bi
control: Scatter Chart
documentation: ug
---

# Scatter Chart

A Scatter Chart plots data points using X- and Y-axis values, helping viewers identify relationships, clusters, and outliers. Assigning a measure to `Size` displays the points as bubbles and represents an additional value through bubble size.

![Scatter Chart](/static/assets/visualizing-data/visualization-widgets/images/scatter-chart/scatter-chart-view.png)

## Configuring Data

Configure the Scatter Chart in the `ASSIGN DATA` tab. One field is required in both `Y-Axis` and `X-Axis`.

| Data section | Requirement | Description |
|---|---|---|
| **Y-Axis** | Required | Accepts one measure and controls the vertical position of each point. |
| **X-Axis** | Required | Accepts one measure or dimension and controls the horizontal position of each point. A numeric field produces a value axis; other supported fields produce a category axis. |
| **Label** | Optional | Accepts one dimension and identifies the individual points. It cannot be used when `X-Axis` contains a dimension or when either axis uses the `None` summary type. |
| **Row** | Optional | Accepts one field and splits the plotted points into separate color-coded series based on its distinct values. |
| **Size** | Optional | Accepts one measure and controls point size. Adding this field changes the visualization from scatter points to bubbles. |
| **Hidden Column** | Optional | Accepts measures or dimensions used for linking, filtering, or underlying data without plotting them. |
| **Filters** | Optional | Accepts measures or dimensions and applies additional filtering conditions. |
| **Tooltip** | Optional | Accepts one or more fields displayed as supplementary tooltip information without changing the visualization. |

### Assigning Data

1. Drag the **Scatter Chart** from the toolbox onto the design canvas.
2. Select the chart, click the **Settings** icon, and open the `ASSIGN DATA` tab.
3. Add a measure to `Y-Axis`.
4. Add a measure or dimension to `X-Axis`.
5. Optionally, add a dimension to `Label` to identify individual points.
6. Optionally, add a field to `Row` to create multiple series.
7. Optionally, add a measure to `Size` to display a Bubble Chart.
8. Add fields to `Hidden Column`, `Filters`, or `Tooltip` as needed.

### Settings menu

Click the `More options` icon for an assigned field to access **Rename**, **Aggregation type**, **Sort**, **Filter(s)**, and **Format**, when supported. See [Aggregating Value Columns](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/), [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/), [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/), and [Formatting Measure Type Column](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

The `None` summary type is available for fields assigned to `X-Axis` and `Y-Axis`. Remove the `Label` field before using `None` on either axis. Settings that change sorting, filtering, relative dates, or measure formatting are unavailable for fields in `Hidden Column`.

## Formatting the Scatter Chart

You can format the Scatter Chart using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

#### Show Value Labels

Displays a label beside each scatter point or bubble.

#### Series Shape

Opens the shape selector for customizing scatter-point markers. It is available only when `Size` is not configured; bubbles use their own circular representation.

#### Show Axis Border

Shows or hides the border lines for the chart axes.

### Tooltip Settings

#### Show Tooltip

Displays the X-axis, Y-axis, and other configured information when a viewer points to a scatter point or bubble. Disabling it disables the remaining tooltip controls.

#### Customize Tooltip

Opens the tooltip designer for choosing and arranging the fields displayed in the tooltip.

#### Enable RTL

Displays tooltip content from right to left.

### Legend Settings

The Scatter Chart displays a legend when `Row` is configured and creates multiple series.

#### Show Legend

Shows or hides the series legend. Enabling it makes the position setting available.

#### Interactivity

Lets viewers show or hide a series by selecting its legend item. It is unavailable when advanced color settings prevent series-level interaction.

#### Position

Places the legend automatically or at the `Top`, `Bottom`, `Left`, or `Right` of the chart.

### X-Axis Settings

#### Show X Axis

Shows or hides the horizontal axis. Disabling it hides the remaining X-axis controls.

#### Show Axis Title

Shows or hides the X-axis title.

#### Axis Title

Specifies a custom X-axis title. When left empty, the assigned field name is used.

#### Label Rotation

Rotates X-axis labels using the selected automatic or fixed angle.

#### Axis Format

Opens formatting options for the X-axis values.

#### Axis Range

Opens the range dialog for setting the X-axis `Minimum`, `Maximum`, and `Interval`. It is available when the X-axis is visible and uses a numeric field. Leave a value empty to calculate it automatically; supported number-type dashboard parameters can also supply the values.

### Y-Axis Settings

#### Show Y Axis

Shows or hides the vertical axis. Disabling it hides the remaining Y-axis controls.

#### Show Axis Title

Shows or hides the Y-axis title.

#### Axis Title

Specifies a custom Y-axis title. When left empty, the assigned measure name is used.

#### Axis Format

Opens formatting options for the Y-axis values.

#### Axis Range

Opens the range dialog for setting the Y-axis `Minimum`, `Maximum`, and `Interval`. Leave a value empty to calculate it automatically; supported number-type dashboard parameters can also supply the values.

#### Opposed Axis

Moves the Y-axis from its default side of the chart to the opposite side.

### Grid Lines

#### Category Axis

Shows or hides grid lines aligned with the X-axis values.

#### Primary Value Axis

Shows or hides grid lines aligned with the Y-axis values.

### Formatting

This group is available when `Row` is not configured.

#### Color Settings

Sets the color used for scatter points or bubbles. Use its advanced settings to apply supported gradient, rule-based, or individual colors based on data values.

Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for the available formatting modes.

### Series Palette

This group is available when `Row` is configured.

#### Use Default Palette

Uses the default colors for the scatter series. Disable it to display the custom palette editor.

#### Color Palette

Opens the palette editor for assigning a color to each series created by the `Row` field.

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for information about configuring chart fonts.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for information about configuring navigation from a data point.

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





