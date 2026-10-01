---
layout: post
title: Tooltip Settings - Widget Properties | Bold BI Documentation
description: Learn how to configure tooltip visibility, content, and display behavior for Bold BI Modern widgets.
canonical: "/visualizing-data/visualization-v2-widgets/properties/tooltip-settings/"
platform: bold-bi
documentation: ug
---

# Tooltip Settings

A tooltip appears when a user hovers over a data point on a widget. It provides the exact value, label, or additional context for that point without requiring the user to navigate away from the dashboard. Configuring tooltip settings lets you control what information is shown and how it is presented.

| Unsupported widgets |
|---|
| Radial Gauge, KPI Card, Number Card, Image, Text, Line Widget, Button, Tab Widget, Q&A Widget, Date Picker, Period Over Period, Range Navigator |

![Tooltip Settings panel](/static/assets/visualizing-data/visualization-widgets/images/tooltip-settings.png)

## Properties

#### Show Tooltip

Toggles the visibility of the tooltip. When disabled, no tooltip appears when hovering over data points.

![Show Tooltip toggle](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-tooltip.png)

#### Customize Tooltip

Opens a column selector that lets you choose which data fields appear inside the tooltip. By default, all configured fields are shown. Use this option to include additional context fields, such as a product code or region name, that are not plotted on the chart axes.

![Customize Tooltip](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-customize-tooltip-settings.png)

#### Enable RTL

Renders the tooltip content from right to left. Enable this when the dashboard is displayed in a right-to-left language such as Arabic or Hebrew.

![Tooltip RTL](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-rtl-tooltip.png)

#### Apply Legend Color

When enabled, the text and value inside the tooltip use the same color as the corresponding legend item. This makes it easier to associate tooltip values with their series when multiple series are plotted.

![Apply Legend Color in Tooltip](/static/assets/visualizing-data/visualization-widgets/images/bar-chart/bar-legend-tooltip.png)