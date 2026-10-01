---
layout: post
title: Comparison Chart Properties | Bold BI Documentation
description: Learn the shared comparison chart properties used by modern Bar, Column, Stacked, 100% Stacked, and Radar Polar widgets in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/comparison/properties/comparison-chart-properties/"
platform: bold-bi
control: Comparison Charts
documentation: ug
---

# Properties

This page describes the properties shared by the modern **Bar Chart**, **Column Chart**, **Stacked Bar Chart**, **Stacked Column Chart**, **100% Stacked Bar Chart**, and **100% Stacked Column Chart**.

Widget-specific property behavior that does not apply across this shared comparison-chart set is documented on the respective widget page.

## Basic Settings

#### Chart Type and Axis

Opens the series configuration dialog. Select a compatible chart type and assign each series to the primary or secondary value axis. This property is hidden during drill down. A 100% stacked series cannot use the secondary axis.

#### Enable Animation

Animates the chart when it loads or refreshes.

#### Show Value Labels

Displays the measure value on each bar or column. Enabling it displays the related label properties.

#### Value Label Color

Sets the value-label text color.

#### Value Label Position

Places labels automatically or at the `Top`, `Middle`, `Bottom`, or `Outer` position. The available positions depend on the selected series type.

#### Value Label Rotation

Rotates labels by `-90°`, `-45°`, `0°`, `+45°`, or `+90°`.

#### Value Label Overflow Mode

Determines whether a label that does not fit remains visible or is hidden.

#### Show Value Label Suffix

Appends custom text to each value label.

#### Suffix Value

Specifies the appended text and is available when **Show Value Label Suffix** is enabled.

#### Enable Point Hover Scale

Enlarges a bar or column when a viewer points to it.

#### Point Hover Scale Factor

Sets the hover enlargement and is available when point-hover scaling is enabled.

#### Show Items With No Data

Retains category members that do not contain a measure value.

#### Show Today Line

Displays a line for the current date when the category axis uses a supported date field.

#### Today Line Style

Opens the line-style settings and is available when **Show Today Line** is enabled.

#### Empty Point Mode

Displays missing values as `Gap`, `Zero`, or `Average`.

#### Column Width

Sets the relative thickness of bars or columns from `0.1` through `1.0`.

#### Column Spacing

Sets the space between adjacent bars or columns from `0.1` through `1.0`.

#### Page Size

Sets the number of category records loaded on a chart page.

#### Inverse Scroll

Starts a scrollable chart at the opposite end of the category range.

#### Chart Border

Configures the outline drawn around each bar or column.

#### Series Corner Radius

Rounds bar or column corners. In a stacked chart, rounding applies to the exposed edge of the stack.

## Tooltip Settings

#### Show Tooltip

Displays information when a viewer points to a data point. Disabling it disables the remaining tooltip controls.

#### Customize Tooltip

Opens the tooltip designer for choosing and arranging tooltip content.

#### Show Value in Tooltip

Includes the original measure value with its percentage. This property applies to 100% Stacked Bar and 100% Stacked Column charts.

#### Enable RTL

Displays tooltip content from right to left.

#### Enable Legend Color

Displays the corresponding series color in the tooltip.

#### Shared Tooltip

Displays all series values for the selected category in one tooltip.

## Legend Settings

#### Show Legend

Shows or hides the legend. Enabling it displays the remaining legend properties.

#### Interactivity

Allows viewers to show or hide a series by selecting its legend item. It is unavailable when the active color settings prevent series-level interaction.

#### Legend Label Color

Sets the legend text color.

#### Customize

Opens the legend editor for changing individual legend text.

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

This category is available when both `Values` and `Row` fields are configured.

#### Use Default Palette

Applies the default series colors. Disable it to configure custom colors.

#### Color Mapping Type

Applies colors by data value or series index.

#### Color Palette

Opens the palette editor for selecting series colors.

## Axis

#### Title Color

Sets the category and value-axis title color.

#### Label Color

Sets the axis-label color.

#### Show Axis Border

Shows or hides the chart-axis border.

#### Show Category Axis

Shows or hides the category axis and its labels.

#### Show Axis Title

Shows or hides the category-axis title.

#### Axis Title

Specifies the category-axis title text.

#### Label Overflow Mode

Handles category labels that exceed the available space using the supported automatic, trim, or hide behavior.

#### Enable Trim

Shortens long category labels.

#### Label Maximum Width

Sets the width at which a category label is trimmed. It is enabled when **Enable Trim** is selected.

#### Label Rotation

Rotates category labels using the selected angle.

#### Auto Interval

Automatically calculates the interval between category labels.

#### Interval

Sets the number of category positions between displayed labels and is available when **Auto Interval** is disabled.

#### Show Primary Value Axis

Shows or hides the primary value axis.

#### Primary Inverse Axis

Reverses the primary value-axis direction.

#### Show Primary Axis Title

Shows or hides the primary value-axis title.

#### Primary Axis Title

Specifies the primary value-axis title text.

#### Primary Axis Type

Selects a `Linear` or `Logarithmic` scale when the configured series supports it.

#### Primary Axis Format

Opens the number-format settings for primary-axis values.

Equivalent secondary-axis properties appear when a series is assigned to the secondary axis.

### Axis Range Settings

#### Minimum

Sets the lowest value displayed on the selected value axis.

#### Maximum

Sets the highest value displayed on the selected value axis.

#### Interval

Sets the step between axis tick marks.

Leave a range value empty to calculate it automatically. Supported numeric dashboard parameters can also supply these values.

## Grid Lines

#### Primary Value Axis

Shows or hides grid lines aligned with the primary value axis.

#### Secondary Value Axis

Shows or hides secondary-axis grid lines and is available when a secondary axis is configured.

#### Category Axis

Shows or hides grid lines aligned with the category axis.

#### Grid Line Style

Selects the supported line pattern.

#### Grid Line Color

Sets the grid-line color.

## Trendline

This category is available for an eligible non-stacked Bar or Column series when exactly one `Columns` field is configured and no `Row` field is assigned.

#### Series

Selects the source series used to calculate the trendline.

#### Type

Selects the trendline calculation type.

#### Color

Sets the trendline color. The trendline dialog contains the additional supported line and legend settings.

## Formatting

#### Series Color

Sets the color of each configured series.

#### Advanced Settings

Opens gradient or rule-based color settings. It is available for supported configurations without a `Row` field.

Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for the available formatting modes.
