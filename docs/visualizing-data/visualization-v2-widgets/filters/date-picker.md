---
layout: post
title: Date Picker (Modern) Widget | Bold BI Documentation
description: Learn how to configure data, selection modes, limit settings, filters, and widget behavior for the modern Date Picker in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/filters/date-picker/"
platform: bold-bi
control: Date Picker
documentation: ug
---

# Date Picker

The Date Picker allows users to select a date, month, or date range to filter and interact with dashboard data.

## Configuring Data

Configure the data for the Date Picker in the `ASSIGN DATA` tab.

| Data section | Requirement | Description |
|---|---|---|
| **Column** | Required | Specifies the date or date-time dimension field whose values are used by the Date Picker. |
| **Filters** | Optional | Allows you to apply additional filtering conditions to the Date Picker data. |

### Assigning Data

1. Drag and drop the **Date Picker** widget from the toolbox onto the design canvas.
2. Resize the widget as required.
3. Select the Date Picker widget and click the **Settings** icon to open the configuration panel.
4. Switch to the `ASSIGN DATA` tab.
5. Drag and drop a date or date-time dimension field into the `Column` section.
6. Optionally, add fields to the `Filters` section to apply additional filtering conditions.

---

### Field Settings

Click the `More options` icon for the assigned field to configure the following options.

- **Sort** – Sorts the date values in ascending or descending order. See [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).
- **Filter(s)** – Applies filter conditions to include or exclude specific date values. See [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-date-column).
- **Relative Dates** – Configures relative date ranges such as the current week or previous month. See [Relative Date Filter](/visualizing-data/working-with-widgets/configuring-widget-filters/#relative-date-filter).

---

## Formatting the Date Picker

You can format the Date Picker using the settings and property categories listed below.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

Configure the selection behavior and input-related settings of the Date Picker.

#### Range

Allows users to select a start date and an end date. Disable this option to allow selection of a single value.

#### Selection Mode

Determines the calendar view and the type of value that users can select.

- **Date** – Displays the date calendar and allows users to select individual dates.
- **Month** – Displays a month-based calendar and allows users to select months.

#### Limit Dates

Restricts selection to dates available in the assigned data-source field. Disable this option to allow selection outside the available data range.

#### Show Latest Date

Opens the Date Picker calendar at the latest date available in the assigned data-source field.

#### Limit Date Selection

Restricts the range users can select. This property is available when **Range** is enabled and provides the **Date Selection Mode** and **Custom Limit Days** settings.

#### Date Selection Mode

Determines the period within which an end date can be selected after a start date is chosen.

- **Weekly** – Allows date selection within the week of the selected start date.
- **Monthly** – Allows date selection within the month of the selected start date.
- **Custom** – Allows date selection for the number of days specified in **Custom Limit Days**.

#### Custom Limit Days

Specifies the number of days allowed in a custom date range. This property is enabled only when **Date Selection Mode** is set to **Custom**.

#### Place Holder

Specifies the text displayed when no value is selected. The default text is `Select Date`.

#### Enable RTL

Displays the Date Picker content from right to left.

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



