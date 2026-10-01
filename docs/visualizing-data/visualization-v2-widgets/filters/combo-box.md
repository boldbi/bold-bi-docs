---
layout: post
title: Combo Box Filter Widget (Modern) | Bold BI Documentation
description: Learn how to configure data, field settings, formatting, filters, and widget behavior for the modern Combo Box widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/filters/combo-box/"
platform: bold-bi
control: Combo Box
documentation: ug
---

# Combo Box

The Combo Box allows users to select one or more values from a drop-down list to filter and interact with dashboard data.

## Configuring Data

Configure the data for the Combo Box in the `ASSIGN DATA` tab.

| Data section | Requirement | Description |
|---|---|---|
| **Value** | Required | Specifies the measure or dimension field whose values are used by the Combo Box. |
| **Display Column** | Optional | Specifies the field whose values are displayed in the Combo Box. |
| **Filters** | Optional | Allows you to apply additional filtering conditions to the Combo Box data. |

### Assigning Data

1. Drag and drop the **Combo Box** widget from the toolbox onto the design canvas.
2. Resize the widget as required.
3. Select the Combo Box widget and click the **Settings** icon to open the configuration panel.
4. Switch to the `ASSIGN DATA` tab.
5. Drag and drop a measure or dimension field into the `Value` section.
6. Optionally, drag and drop a field into the `Display Column` section.
7. Optionally, add fields to the `Filters` section to apply additional filtering conditions.

---

### Field Settings

Click the `More options` icon for a field to configure the following options.

- **Sort** – Sorts the values in ascending or descending order. See [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).
- **Filter(s)** – Applies filter conditions to include or exclude specific values. See [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).
- **Relative Dates** – Configures relative date ranges when a date dimension is used. See [Relative Date Filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#relative-date-filter).

---

## Formatting the Combo Box

You can format the Combo Box using the settings and property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure the basic behavior and input-related settings of the Combo Box.

#### Enable Multiselect

Allows users to select multiple values from the Combo Box. Disable this option to allow only a single selection.

#### Allow Filter

Displays a search field for filtering values in the drop-down list.

#### Show All

Adds an **All** option at the top of the list to clear the selection filter.

#### Place Holder

Specifies the text displayed when no value is selected.

#### Enable RTL

Displays the Combo Box content from right to left.

### Font Settings

Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for information about configuring font-related properties.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for information about configuring filter-related properties.

### Inter-Widget Linking

Refer to [Inter-Widget Linking](/visualizing-data/visualization-v2-widgets/properties/inter-widget-linking/) for information about linking the Combo Box to a Tab widget.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for information about configuring the appearance of the widget container.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for information about configuring the actions available for the widget container.

### No Data Appearance

Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for information about configuring how the widget is displayed when no data is available.



