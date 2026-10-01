---
layout: post
title: Conditional Formatting Widget Properties | Bold BI
description: Learn how to apply rule-based, gradient, and individual color formatting to Bold BI Modern chart widgets using conditional formatting.
canonical: "/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/"
platform: bold-bi
documentation: ug
---

# Conditional Formatting

Conditional formatting lets you override a widget's default series colors based on data values. Use it to highlight breaches of a target, color-code performance bands (red/amber/green), or assign a unique color to each data point. This makes patterns and outliers immediately visible without the viewer needing to scan a data table.

| Widgets without conditional formatting |
|---|
| Pivot Grid, Radial Gauge, Image, Text, Line Widget, Button, Tab Widget, Q&A Widget, Combo Box, List Box, Text Filter, Date Picker, Period Over Period, Range Navigator |

## Widget-specific Advanced Settings

Use the following widget pages to find the **Advanced Settings** entry point for each supported Modern widget:

- Comparison charts: [Bar Chart](/visualizing-data/visualization-v2-widgets/comparison/bar-chart/#formatting), [Column Chart](/visualizing-data/visualization-v2-widgets/comparison/column-chart/#formatting), [Stacked Bar Chart](/visualizing-data/visualization-v2-widgets/comparison/stacked-bar-chart/#formatting), [Stacked Column Chart](/visualizing-data/visualization-v2-widgets/comparison/stacked-column-chart/#formatting), [100% Stacked Bar Chart](/visualizing-data/visualization-v2-widgets/comparison/100-stacked-bar-chart/#formatting), [100% Stacked Column Chart](/visualizing-data/visualization-v2-widgets/comparison/100-stacked-column-chart/#formatting), [Radar Chart](/visualizing-data/visualization-v2-widgets/comparison/radar-polar-chart/#formatting), [Polar Chart](/visualizing-data/visualization-v2-widgets/comparison/radar-polar-chart/#formatting), and [Combo Chart](/visualizing-data/visualization-v2-widgets/composition/combo-chart/#formatting)
- Proportion charts: [Pie Chart](/visualizing-data/visualization-v2-widgets/proportion/pie-chart/#series-palette), [Doughnut Chart](/visualizing-data/visualization-v2-widgets/proportion/doughnut-chart/#series-palette), [Funnel Chart](/visualizing-data/visualization-v2-widgets/proportion/funnel-chart/#series-palette), and [Pyramid Chart](/visualizing-data/visualization-v2-widgets/proportion/pyramid-chart/#series-palette)
- Distribution charts: [Scatter Chart](/visualizing-data/visualization-v2-widgets/distribution/scatter-chart/#formatting)
- Relationship widgets: [Map](/visualizing-data/visualization-v2-widgets/relationship/map/#formatting), [Azure Maps](/visualizing-data/visualization-v2-widgets/relationship/azure-maps/#formatting), [Heatmap](/visualizing-data/visualization-v2-widgets/relationship/heat-map/#formatting), [Treemap](/visualizing-data/visualization-v2-widgets/relationship/tree-map/#formatting), and [Grid](/visualizing-data/visualization-v2-widgets/relationship/grid/#formatting)
- Cards: [Number Card](/visualizing-data/visualization-v2-widgets/cards/number-card/#formatting) and [KPI Card](/visualizing-data/visualization-v2-widgets/cards/kpi-card/#formatting)

> **Availability:** The **Advanced Setting** checkbox is enabled only when exactly **one column** and **one row** are configured on the chart.

## Enabling Advanced Formatting

1. In the **Properties** pane, locate the **Formatting** section and check the **Advanced Setting** checkbox.
2. The **Conditional Formatting** dialog opens.
3. Choose a mode, configure the required conditions, and click **Save**.
4. The chart updates immediately to reflect the applied rules.

## Formatting Modes

### Gradient Mode

Applies a smooth color gradient across a continuous numeric range. Use this to visualize the relative magnitude of values - for example, coloring low sales red, mid-range amber, and high sales green.

#### Based On Field

Selects the measure or dimension field used to drive the color gradient.

#### Summary Type

Sets the aggregation type applied to the selected measure field (Sum, Average, Count, etc.).

#### Low / Mid / High Values

Defines the value boundaries for the gradient. If left empty, Bold BI calculates boundaries automatically from the data minimum and maximum.

#### Legend Title

Sets the label displayed in the gradient legend strip shown on the chart.

---

### Rule-Based Mode

Applies a discrete fill color to data points that satisfy one or more conditional rules. Rules are evaluated in order; the first matching rule wins.

#### Value Type

Sets whether condition comparisons use **Direct Value** (the raw data value) or **Percentage** (the value as a percentage of the total).

#### Condition Name

A descriptive label for the rule, shown in the formatting dialog.

#### Condition Type

The comparison operator for the rule. Available operators include: Greater Than, Less Than, Equal To, Not Equal To, Between, and others. When a dimension field is selected as the **Based On** field, text-based conditions become available.

#### Value

The threshold value to compare against.

#### Case Sensitive

When a dimension is selected as the **Based On** field, controls whether the text comparison is case-sensitive.

#### Fill Color

The color applied to data points that match the condition. Click the color swatch to open the color picker.

#### Add / Delete Condition

Click **Add** to append a new rule to the list. Click the delete icon next to a rule to remove it.

---

### Individual Mode

Assigns a specific color to each data record. Useful for categorical data where each member of the dimension needs a distinct, semantically meaningful color (for example, assigning brand colors to product categories).

> **Note:** Only the top 100 records are listed in the Individual mode dialog.

#### Color Mapping Type

#### Data

- **Data** - Maps colors to values. A record always receives the same color regardless of its position in the sorted data.
- **Index** - Maps colors to positions. The first record always gets the first color, the second record gets the second color, and so on. After 15 positions the colors repeat. Suitable for small, stable datasets.

#### Color

Click the color swatch beside each record to assign a custom color.

#### Reset

Reverts all individual color assignments to the default series palette.
