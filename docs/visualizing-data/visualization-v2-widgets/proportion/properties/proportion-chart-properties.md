---
layout: post
title: Proportion Chart Properties | Bold BI Documentation
description: Learn how to configure category-specific properties for modern Pie, Doughnut, Funnel, and Pyramid charts in Bold BI.
canonical: "/visualizing-data/visualization-v2-widgets/proportion/properties/proportion-chart-properties/"
platform: bold-bi
control: Proportion Charts
documentation: ug
---

# Properties

This page describes properties shared by the modern **Pie Chart**, **Doughnut Chart**, **Funnel Chart**, and **Pyramid Chart**. The groups follow the order in the `PROPERTIES` panel.

Global properties such as Link, Font Settings, Filter, and container settings are documented on their respective global property pages and linked from each chart page.

## Basic Settings

#### Chart Type

Changes the visualization between `Pie`, `Doughnut`, `Pyramid`, and `Funnel` without removing the assigned data.

#### Show Value Labels

Shows or hides information directly on each segment. Enabling it displays the label properties that follow.

#### Value Label Color

Sets the label text color.

#### Data Label

Selects the information displayed in each label. The options are `Category`, `Value`, `Percentage`, `Category And Value`, `Category And Percentage`, `Value And Percentage`, and `All Details`.

#### Show Value Label Suffix

Appends custom text to each value label.

#### Suffix Value

Specifies the appended text and is available when **Show Value Label Suffix** is enabled.

#### Chart Size

Controls how much of the plotting area is occupied by the chart. This property is available for Pie and Doughnut charts and supports values from `0.1` through `1.0`.

Pie and Doughnut labels appear outside the segments by default. Funnel and Pyramid labels appear inside the segments by default.

> **NOTE:** **Doughnut Radius** is available only for the Doughnut Chart and is documented on the [Doughnut Chart](/visualizing-data/visualization-v2-widgets/proportion/doughnut-chart/#basic-settings) page.

## Tooltip Settings

#### Show Tooltip

Displays information when a viewer points to a segment. Disabling it disables the remaining tooltip controls.

#### Customize Tooltip

Opens the tooltip designer for choosing and arranging the displayed information.

#### Enable RTL

Displays tooltip content from right to left.

Fields assigned to the `Tooltip` data section are included as supplementary values.

## Series Settings

This group is available when `Row` is configured or when multiple `Values` fields are used with a `Columns` field.

#### Fixed Rows and Columns

Arranges multiple charts in a fixed grid instead of allowing the layout to adjust automatically.

#### Row Count

Sets the number of charts displayed in each column. It is available when **Fixed Rows and Columns** is enabled.

#### Column Count

Sets the number of charts displayed in each row. It is available when **Fixed Rows and Columns** is enabled.

The supported range for row and column counts is `1` through `15`.

## Legend Settings

#### Show Legend

Shows or hides the legend. Enabling it displays the remaining legend properties.

#### Interactivity

Allows viewers to show or hide a segment by selecting its legend item.

#### Legend Label Color

Sets the legend text color.

#### Customize

Opens the legend customization dialog.

#### Legend Position

Places the legend at the `Top`, `Left`, `Right`, or `Bottom`.

#### Legend Alignment

Aligns the legend using `None`, `Near`, `Center`, or `Far`.

#### Legend Shape

Displays legend markers as a `Circle` or by `Series Type`.

#### Legend Title

Specifies the text displayed above the legend items.

#### Text Overflow

Handles overflowing legend text using `None`, `Trim`, or `Wrap`.

#### Text Width

Sets the available width for legend text.

## Series Palette

#### Use Default Palette

Applies the default chart colors. Disable it to choose custom colors when the chart is colored by configured values.

#### Color Palette

Opens the palette editor for selecting segment colors.

#### Advanced Settings

Enables data-driven color rules when a `Columns` field creates the segments.

Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for the available formatting modes.

#### Customize

Opens the conditional-formatting dialog for defining data conditions and colors.

