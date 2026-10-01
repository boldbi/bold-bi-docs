---
layout: post
title: Data Configuration – Widget Properties | Bold BI Documentation
description: Learn how to assign fields, aggregate measures, sort, filter, format, and configure drill-down for Bold BI Modern widgets.
canonical: "/visualizing-data/visualization-v2-widgets/properties/data-configuration/"
platform: bold-bi
documentation: ug
---

# Data Configuration

Data configuration determines which fields a widget displays and how Bold BI summarizes and groups those fields. The available data sections depend on the selected widget.

| Unsupported widgets |
|---|
| Image, Text, Line Widget, Button, Tab Widget, and Q&A Widget |

## Assigning data

1. Add a widget to the design canvas.
2. Select the widget and open **ASSIGN DATA**.
3. Drag fields from the data source into the required data sections.
4. Add optional fields when the visual needs grouping, series, tooltips, images, targets, or other supporting values.

The widget page identifies its supported data sections and minimum field requirements.

## Field settings

Select the settings icon beside an assigned field to configure the options supported by that field and widget.

#### Rename

Changes the field name displayed in the widget without modifying the source column.

#### Aggregation

Controls how a measure is summarized, such as Sum, Average, Minimum, Maximum, or Count. See [Aggregating Value Columns](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/).

#### Sort

Orders dimension values or summarized measures. See [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/).

#### Filter

Restricts the records used by the widget. See [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/).

#### Format

Controls how numeric or date values are displayed. See [Value Formatting](../value-formatting/).

#### Remove

Removes the field from the data section.

## Drill-down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.
