---
layout: post
title: Text Filter (Modern) Widget | Bold BI Documentation
description: Learn how to configure data, input settings, filters, and widget behavior for the modern Text Filter widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/filters/text-filter/"
platform: bold-bi
control: Text Filter
documentation: ug
---

# Text Filter

The Text Filter allows users to enter text and filter matching dimension values across linked widgets in a dashboard.

## Configuring Data

Configure the data for the Text Filter in the `ASSIGN DATA` tab.

| Data section | Requirement | Description |
|---|---|---|
| **Column** | Required | Specifies the string or dimension field whose values are searched by the Text Filter. |

### Assigning Data

1. Drag and drop the **Text Filter** widget from the toolbox onto the design canvas.
2. Resize the widget as required.
3. Select the Text Filter widget and click the **Settings** icon to open the configuration panel.
4. Switch to the `ASSIGN DATA` tab.
5. Drag and drop a string or dimension field into the `Column` section.

---

### Field Settings

Click the `More options` icon for the assigned field to configure the following option.

- **Rename** – Overrides the display name of the assigned field.

---

## Formatting the Text Filter

You can format the Text Filter using the settings and property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure the input-related setting of the Text Filter.

#### Placeholder

Specifies the hint text displayed in the empty Text Filter input before a user enters a value. The default text is `Search`.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for information about configuring filter-related properties.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for information about configuring the appearance of the widget container.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for information about configuring the actions available for the widget container.



