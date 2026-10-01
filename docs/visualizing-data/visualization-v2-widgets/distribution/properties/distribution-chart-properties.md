---
layout: post
title: Distribution Chart Properties | Bold BI Documentation
description: Learn the shared distribution chart properties used by modern Area, Line, Spline, Stacked Area, and Scatter widgets in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/distribution/properties/distribution-chart-properties/"
platform: bold-bi
control: Distribution Charts
documentation: ug
---

# Properties

This page describes the properties shared by the modern **Area Chart**, **Stacked Area Chart**, **100% Stacked Area Chart**, **Line Chart**, **Spline Chart**, and **Spline Area Chart**.

Widget-specific property behavior that does not apply across this shared distribution-chart set is documented on the respective widget page.

## Basic Settings

#### Chart Type and Axis

Opens a dialog for changing each configured series to a compatible chart type and assigning eligible series to the primary or secondary value axis. It is available after a value is configured and is hidden while the chart is drilled down. A 100% stacked series cannot use the secondary axis.

#### Enable Animation

Animates the series when the chart loads or refreshes.

#### Show Value Labels

Displays values at the chart data points. Enabling it displays the label properties that follow.

#### Value Label Color

Sets the label text color.

#### Value Label Position

Places labels automatically or at the `Top`, `Middle`, `Bottom`, or `Outer` position. The automatic position is `Top` except for 100% Stacked Area, where it is `Bottom`.

#### Value Label Rotation

Rotates value labels by the selected angle.

#### Show Value Label Suffix

Appends custom text to each value label.

#### Suffix Value

Specifies the appended text and is available when **Show Value Label Suffix** is enabled.

#### Show Marker

Shows or hides a marker at each plotted data point.

#### Show Items With No Data

Displays category members even when they do not have a value.

#### Show Today Line

Displays a line for the current date when the category axis uses a supported date field.

#### Today Line Style

Opens the style settings for the today line and is available when **Show Today Line** is enabled.

#### Empty Point Mode

Displays missing values as `Gap`, `Zero`, `Average`, or `Connect`, depending on the series type. `Connect` is available for Area, Stacked Area, Line, Spline, and Spline Area charts, but not for 100% Stacked Area.

#### Page Size

Sets the number of category records loaded per chart page.

#### Inverse Scroll

Starts the chart at the opposite end of its scrollable category range.

#### Line Style

Opens the line width and dash-style controls. It is available for Line and Spline charts.

#### Chart Border

Configures the outline of the filled area. It is available for Area and Spline Area charts.

## Tooltip Settings

#### Show Tooltip

Displays information when a viewer points to a data point. Disabling it disables the remaining tooltip controls.

#### Customize Tooltip

Opens the tooltip designer for choosing and arranging tooltip content.

#### Enable RTL

Displays tooltip content from right to left.

#### Enable Legend Color

Uses the corresponding series color in the tooltip.

#### Shared Tooltip

Displays all series values for the pointed category in one tooltip. It is disabled while forecasting is enabled.

## Legend Settings

#### Show Legend

Shows or hides the legend. Enabling it displays the remaining legend properties.

#### Interactivity

Allows viewers to show or hide a series by selecting its legend item. It is unavailable when advanced color settings prevent series-level interaction.

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

## Forecast Settings

This group is available for Line and Spline charts when there is one `Values` field, one supported numeric or date/time `Columns` field, no `Row` field, and the chart is not acting as a Period Over Period slave widget.

#### Enable Forecast

Enables forecast calculation and displays the configuration properties that follow.

#### Forecast Length

Sets the number of future points included in the forecast.

#### Confidence Interval

Sets the confidence percentage used for the predicted range.

#### Legend Text

Specifies the legend text for the forecast series.

#### Seasonality

Sets or automatically determines the repeating pattern used by the forecast.

#### Apply

Applies the forecast configuration.

#### Show Forecast

Shows or hides the predicted series after the forecast is applied.

#### Show Confidence

Shows or hides the confidence band.

#### Confidence Band Style

Displays the confidence band using the supported fill or line style.

## Series Palette

This group is available when both `Values` and `Row` are configured.

#### Use Default Palette

Uses the default series colors. Disable it to configure custom colors.

#### Color Mapping Type

Applies custom colors by data value or series index.

#### Color Palette

Opens the palette editor for selecting series colors.

## Axis

#### Title Color

Sets the category-axis title color.

#### Label Color

Sets the category-axis label color.

#### Show Axis Border

Shows or hides the chart-axis border.

#### Show Category Axis

Shows or hides the category axis and its labels.

#### Show Axis Title

Shows or hides the category-axis title.

#### Axis Title

Specifies the category-axis title text.

#### Label Overflow Mode

Controls how category labels that exceed the available space are displayed.

#### Enable Trim

Shortens long category labels.

#### Label Maximum Width

Sets the width used before a category label is trimmed.

#### Label Rotation

Rotates category labels by the selected angle.

#### Auto Interval

Automatically calculates the interval between category labels. Disable it to enable **Interval**.

#### Interval

Sets the number of category positions between displayed labels.

#### Show Primary Value Axis

Shows or hides the primary value axis and provides access to its range settings.

#### Primary Inverse Axis

Reverses the direction of the primary value axis.

#### Show Primary Axis Title

Shows or hides the primary-axis title.

#### Primary Axis Title

Specifies the primary-axis title text.

#### Primary Axis Type

Uses a `Linear` or `Logarithmic` scale. It is hidden when all series on the axis are percentage series.

#### Primary Axis Format

Opens the formatting options for primary-axis values.

Equivalent secondary-axis properties appear when a configured series uses the secondary axis. A 100% stacked series cannot use the secondary axis.

### Axis Range Settings

Open the range settings for the primary or configured secondary value axis to override its automatically calculated scale.

#### Minimum

Sets the lowest value shown on the axis.

#### Maximum

Sets the highest value shown on the axis.

#### Interval

Sets the step between axis tick marks.

Leave a value empty to calculate it automatically. Number-type single, range, and data-source dashboard parameters can also supply these values.

## Grid Lines

#### Primary Value Axis

Shows or hides grid lines aligned with the primary value axis.

#### Secondary Value Axis

Shows or hides secondary-axis grid lines and is available when a secondary axis is configured.

#### Category Axis

Shows or hides grid lines aligned with the category axis. Category grid lines are enabled by default for the Area chart family.

#### Grid Line Style

Selects the line pattern used by enabled grid lines.

#### Grid Line Color

Sets the grid-line color.

## Trendline

This group is available for eligible Area, Line, Spline, and Spline Area charts when exactly one `Columns` field is configured and no `Row` field is assigned. It is not available for Stacked Area or 100% Stacked Area charts.

Use the add action to create a trendline, or select an existing trendline to edit or remove it.

#### Series

Selects the chart series used to calculate the trendline.

#### Type

Selects the trendline calculation type.

#### Color

Sets the trendline color. Additional dialog settings control its line appearance and legend text when supported.

## Formatting

This group is available when `Values` is configured and `Row` is not configured.

#### Series Color

Sets the color of each configured series.

Advanced conditional formatting is not normally available for distribution series. It appears only if an eligible single series is changed to a normal Bar or Column series through **Chart Type and Axis**.

Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for the available formatting modes.
