---
layout: post
title: Treemap (Modern) - Embedded BI Visual | Bold BI Documentation
description: Learn how to configure hierarchical data, labels, color settings, formatting, and interactions for the modern Treemap widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/relationship/tree-map/"
platform: bold-bi
control: Tree Map
documentation: ug
---

# Tree Map

A Tree Map displays hierarchical categories as nested rectangles whose sizes represent measure values. Use it to compare proportions while preserving category structure.

![Tree Map](/static/assets/visualizing-data/visualization-widgets/images/tree-map/tree-map-widget.png)

## Configuring Data

| Data section | Requirement | Description |
|---|---|---|
| **Value** | Required | Measure that controls rectangle size. |
| **Column** | Required | Dimension that defines groups. Multiple fields create a hierarchy. |
| **Hidden Column** | Optional | Field used without displaying it. |
| **Filters** | Optional | Fields used to restrict Tree Map data. |
| **Tooltip** | Optional | Additional fields displayed in the tooltip. |

### Assigning Data

1. Add the **Tree Map** to the canvas and open **ASSIGN DATA**.
2. Add a measure to **Value** and a dimension to **Column**.
3. Optionally add fields to **Hidden Column**, **Filters**, and **Tooltip**.

### Field Settings

Use a field's settings menu to configure supported rename, aggregation, sorting, filtering, relative-date, and formatting options. See [Configuring Data](/visualizing-data/visualization-v2-widgets/properties/data-configuration/).

### Drill Down

Widgets that support hierarchies enable drill-down when multiple dimension fields are assigned to the hierarchy data section. Select a data point to move to the next level, and use the widget breadcrumb to return to a previous level.

## Formatting the Tree Map

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

#### Show Legend

Displays the Tree Map legend.

#### Label Color

Sets the text color of group and value labels.

#### Show Value Label

Displays the assigned measure value inside each rectangle.

#### Enable Text Wrap

Wraps labels that exceed the available rectangle width.

#### Enable Drill Down

Lets viewers navigate between hierarchy levels. It is available when a value and more than one column field are assigned.

### Tooltip Settings

#### Show Tooltip

Displays information when a viewer points to a Tree Map rectangle.

#### Customize Tooltip

Opens the tooltip editor for arranging and formatting tooltip content.

#### Enable RTL

Displays tooltip content from right to left.

### Formatting

#### Formatting

Selects **Monochromatic** or **Advanced** color formatting. Monochromatic formatting uses shades of one color; Advanced formatting applies value-based colors and rules through **Customize**. Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for the available advanced formatting modes.

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for Tree Map fonts.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for filter behavior.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for item navigation.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for widget-container styling.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for viewer actions.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for empty-state settings.

### Export Settings

Refer to [Export Options](/visualizing-data/visualization-v2-widgets/properties/export-options/) for export settings.

### View Underlying Data

Refer to [View Underlying Data](/visualizing-data/working-with-widgets/view-data/) for access to Tree Map records.



