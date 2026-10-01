---
layout: post
title: Range Navigator Widget (Modern) | Bold BI Documentation
description: Learn how to configure assigned data, formatting, filters, and interactions for the modern Range Navigator widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/filters/range-navigator/"
platform: bold-bi
control: Range Navigator
documentation: ug
---

# Range Navigator

The Range Navigator allows users to select a smaller numeric or date range from a larger data set and filter linked dashboard widgets using the selected interval.

![Range Navigator](/static/assets/visualizing-data/visualization-widgets/images/range-navigator/range-navigator.png)

## Configuring Data

Configure the data for the Range Navigator in the `ASSIGN DATA` tab.

| Data section | Requirement | Description |
|---|---|---|
| **Value(s)** | Required | Specifies one or more measure or expression fields plotted in the Range Navigator overview. |
| **Argument** | Required | Specifies the numeric measure or date/date-time dimension used for the navigator axis and selected interval. |
| **Filters** | Optional | Allows you to apply additional filtering conditions to the Range Navigator data. |

### Assigning Data

1. Drag and drop the **Range Navigator** widget from the toolbox onto the design canvas.
2. Resize the widget as required.
3. Select the Range Navigator widget and click the **Settings** icon to open the configuration panel.
4. Switch to the `ASSIGN DATA` tab.
5. Drag and drop one or more measure or expression fields into the `Value(s)` section.
6. Drag and drop a numeric measure or date/date-time dimension into the `Argument` section.
7. Optionally, add fields to the `Filters` section to apply additional filtering conditions.

---

### Field Settings

Click the `More options` icon for an assigned field to configure the available options. The options vary based on the field type and data section.

- **Rename** — Overrides the display name of the assigned field.
- **Aggregation type** — Changes how a measure in the `Value(s)` section is summarized. See [Aggregating Value Columns](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/).
- **Filter(s)** — Applies filter conditions to include or exclude specific values. See [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/).
- **Format** — Changes the display format of an assigned measure or date field. See [Formatting Measure Type Column](/visualizing-data/working-with-widgets/formatting-measure-type-column/).
- **Relative Dates** — Configures a relative range when a date or date-time dimension is assigned to `Argument`. See [Relative Date Filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#relative-date-filter).

---

## Formatting the Range Navigator

You can format the Range Navigator using the property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for information about configuring font-related properties.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for information about configuring filter-related properties.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for information about configuring the appearance of the widget container.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for information about configuring the actions available for the widget container.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for information about configuring how the widget is displayed when no data is available.



