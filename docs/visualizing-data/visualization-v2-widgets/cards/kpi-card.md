---
layout: post
title: KPI Card (Modern) - Embedded BI Visual | Bold BI Documentation
description: Learn how to configure data, KPI values, indicators, formatting, and viewer actions for the modern KPI Card widget in Bold BI.
canonical: "/visualizing-data/visualization-v2-widgets/cards/kpi-card/"
platform: bold-bi
control: KPI Card
documentation: ug
---

# KPI Card

A KPI Card compares an actual value with a target value and presents the result as a compact performance indicator. It can display the difference, percentage change, direction indicator, supporting values, and a sparkline trend.

Use a KPI Card when:

- You need to compare current performance against a goal.
- Viewers need to identify high, neutral, or low performance quickly.
- You want to display a separate KPI Card for each member of a dimension, such as region or product.
- A sparkline can provide useful historical context for the KPI.

*KPI Card series view:*

![KPI Card Series View](/static/assets/visualizing-data/visualization-widgets/images/kpi-card/series-view.png)

*KPI Card single view:*

![KPI Card Single View](/static/assets/visualizing-data/visualization-widgets/images/kpi-card/single-card.png)

## Configuring Data

Configure the data for the KPI Card in the `ASSIGN DATA` tab. The widget requires an **Actual Value** and a **Target Value**.

| Data section | Requirement | Description |
|---|---|---|
| **Actual Value** | Required | Specifies the measure or numeric expression that represents the current performance value. |
| **Target Value** | Required | Specifies the measure or numeric expression used as the goal or comparison value. |
| **Series** | Optional | Specifies the dimension used to render a separate KPI Card for each distinct value. |
| **Tooltip** | Optional | Adds one or more measure values to the tooltip shown when a viewer points to the card. |
| **Sparkline** | Optional | Specifies the date, date-time, or numeric dimension used to plot the KPI trend. |
| **Image** | Optional | Specifies one or more dimension fields used to construct an image URL for each card. |
| **Background Image** | Optional | Specifies one or more dimension fields used to construct a background-image URL for each card. |
| **Filters** | Optional | Applies additional filtering conditions to the KPI Card data. |

### Assigning Data

1. Drag and drop the **KPI Card** widget from the toolbox onto the design canvas.
2. Resize the widget as required.
3. Select the KPI Card and click the **Settings** icon to open the configuration panel.
4. Switch to the `ASSIGN DATA` tab.
5. Drag and drop a measure or numeric expression into the `Actual Value` section.
6. Drag and drop a measure or numeric expression into the `Target Value` section.
7. Optionally, assign fields to `Series`, `Tooltip`, `Sparkline`, `Image`, and `Background Image` based on the information you want to display.
8. Optionally, add fields to the `Filters` section to apply additional filtering conditions.

Assigning a field to `Series` changes the widget from a single card to a collection of cards, with one card rendered for each distinct series value. Assigning a field to `Sparkline` displays the change in the actual value across that field.

### Settings menu

Click the `More options` icon for an assigned field to configure the available options. The options vary based on the field type and data section.

- **Rename** — Overrides the display name of the assigned field.
- **Aggregation type** — Changes how a measure is summarized. See [Aggregating Value Columns](/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/).
- **Sort** — Configures the order of values in a dimension field. See [Advanced Sorting](/visualizing-data/working-with-widgets/advanced-sorting/).
- **Filter(s)** — Applies field-level conditions to include or exclude values. See [Configuring Widget Filters](/visualizing-data/working-with-widgets/configuring-widget-filters/).
- **Format** — Changes the display format of the `Actual Value`. See [Formatting Measure Type Column](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

> **NOTE:** The `Format` option is not available for `Target Value`. The format applied to `Actual Value` is also applied to `Target Value`.

---

## Formatting the KPI Card

You can format the KPI Card using the property categories listed below. The categories are presented in the same order as the `PROPERTIES` panel.

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

#### Fit to Content

Automatically adjusts the font sizes of the card elements to fit the available space. Individual font-size properties are disabled while this option is enabled.

#### Text Overflow Mode

Controls content that does not fit within the card. Select `Trim` to shorten overflowing text or `Hide` to hide it.

### Tooltip Settings

Configure whether the tooltip is displayed, customize its content, and enable right-to-left tooltip rendering. Refer to [Tooltip Settings](/visualizing-data/visualization-v2-widgets/properties/tooltip-settings/) for more information.

### Color Settings

#### Direction

Determines how the KPI status is evaluated. Select `High is Good` when values above the target indicate better performance, or `Low is Good` when lower values are preferred.

#### High Color
Defines the color used when the KPI is in a high or positive state.

#### Medium Color
Defines the color used when the KPI is in a neutral or warning state.

#### Low Color
Defines the color used when the KPI is in a low or negative state.

#### Separator

Sets the color of the separator displayed between the left and right supporting values.

### Formatting

#### Advanced Settings

Enables rule-based color customization for configured KPI Card elements. Click `Customize` to define conditions based on the KPI value and apply colors to supported elements such as the title, background, sparkline, indicator, and KPI value.

Refer to [Conditional Formatting](/visualizing-data/visualization-v2-widgets/properties/conditional-formatting/) for the supported formatting modes.

### Font Settings

Configure the widget font family and style, or use the dashboard font settings. Element-level font controls are available for the title, KPI value, left and right values, and their captions. Refer to [Font Settings](/visualizing-data/visualization-v2-widgets/properties/font-settings/) for more information.

### Title

#### Show Title

Shows or hides the card title.

#### Title Text

Specifies the title displayed on a single KPI Card. When `Series` is configured, the corresponding series value is used as the card title.

#### Color

Sets the title color.

#### Auto Font Size

Automatically calculates and adjusts the title font size to fit the available card space.

#### Font Size

Lets you set a fixed title font size after **Auto Font Size** is disabled.

### Animation Settings

#### Enable Animation

Animates the KPI value when the widget loads or refreshes.

#### Animation Duration

Specifies how long the animation runs. The supported duration is from 1,000 through 5,000 milliseconds.

### KPI Value

#### Show Value

Shows or hides the primary KPI value.

#### Type

Determines the value displayed as the KPI. The available types are `Absolute Difference`, `Percent of Difference`, `Percent of Target`, `Actual Value`, `Target Value`, and `Percent of Change`.

#### Color Option

Select `Direction Color` to use the high, medium, or low status color. Select `Custom Color` to apply a fixed color.

#### Auto Font Size

Automatically calculates and adjusts the KPI value font size to fit the available card space.

#### Font Size

Lets you set a fixed KPI value font size after **Auto Font Size** is disabled.

### Indicator

#### Show Icon

Shows or hides the status indicator.

#### Placement

Places the indicator beside the `Left Value`, `Right Value`, or `KPI Value`.

#### Position

Places the indicator on the left or right side of the selected value.

#### Color Option

Uses either the direction color or a custom color for the indicator.

#### High
Selects the icon used when the KPI is in a high or positive state.

#### Low
Selects the icon used when the KPI is in a low or negative state.

#### Neutral
Selects the icon used when the KPI is in a neutral state.

#### Auto Font Size

Automatically calculates and adjusts the indicator size to fit the available card space.

#### Font Size

Lets you set a fixed indicator size after **Auto Font Size** is disabled.

### Left Value

#### Type

Selects the calculation or source value displayed on the left. It supports the same value types as the primary KPI value.

#### Show Value

Shows or hides the left supporting value.

#### Value Color Option

Uses the direction color or a custom color for the value.

#### Auto Font Size

And **Value Font Size** — Control automatic or fixed sizing of the left value.

#### Show Caption

Shows or hides the caption below the left value.

#### Caption Text

Specifies the caption text. The default caption is `Actual Value`.

#### Caption Color Option

Uses the direction color or a custom color for the caption.

#### Auto Font Size

And **Caption Font Size** — Control automatic or fixed sizing of the caption.

### Right Value

#### Type

Selects the calculation or source value displayed on the right. It supports the same value types as the primary KPI value.

#### Show Value

Shows or hides the right supporting value.

#### Value Color Option

Uses the direction color or a custom color for the value.

#### Auto Font Size

And **Value Font Size** — Control automatic or fixed sizing of the right value.

#### Show Caption

Shows or hides the caption below the right value.

#### Caption Text

Specifies the caption text. The default caption is `Target Value`.

#### Caption Color Option

Uses the direction color or a custom color for the caption.

#### Auto Font Size

And **Caption Font Size** — Control automatic or fixed sizing of the caption.

### Image

#### Show Image

Shows or hides the image displayed in the card.

#### Image Mode

Controls how the image fits within its available area. The available modes are `Default`, `Fill`, `Uniform`, and `Uniform To Fill`.

#### Image Alignment

Places the image on the left or right side of the card.

#### Image

Selects `Local`, `URL`, or `Parameterized URL` as the image source. The related browse, URL, or pattern property is displayed based on the selected source.

When using a parameterized URL, add placeholders such as `{0}` and `{1}` to insert the values of fields assigned to the `Image` data section.

### Background

#### Show Image

Shows or hides the background image.

#### Image Mode

Controls how the background image fits within the card. The available modes are `Default`, `Fill`, `Uniform`, and `Uniform To Fill`.

#### Image

Selects `Local`, `URL`, or `Parameterized URL` as the background-image source. The related browse, URL, or pattern property is displayed based on the selected source.

#### Color

Sets the card background color.

#### Transparency

Controls the transparency of the background color and image from `0` through `1`.

### Sparkline

These properties are applicable when a field is assigned to the `Sparkline` data section.

#### Show Sparkline

Shows or hides the trend sparkline.

#### Show Sparkline Background

Displays the sparkline as a background layer behind the card content.

#### Color Option

Uses the KPI direction color or a custom color for the sparkline.

#### Opacity

Controls the sparkline opacity from `0` through `1`.

### Link

Enables navigation to another dashboard or a URL when a viewer selects a KPI Card. Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for configuration details.

### Inter-Widget Linking

Refer to [Inter-Widget Linking](/visualizing-data/visualization-v2-widgets/properties/inter-widget-linking/) for information about linking the KPI Card to a Tab widget.

### Filter

Configures the KPI Card as a master widget, controls whether it responds to other master widgets, and enables hierarchical filtering. The master-widget option is available when `Series` is configured. Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for more information.

### Container Appearance

Configures the title, subtitle, padding, border, corner radius, shadow, and mobile height of the widget container. Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for more information.

### Container Actions

Controls viewer actions such as maximize, commenting, and pinning the widget. Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for more information.

### No Data Appearance

Configures the message, font size, text color, image, and header displayed when the KPI Card has no data. Refer to [No Data Appearance](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties) for more information.

### Export Settings

Controls the export formats available to viewers, including CSV, Excel, PowerPoint, image, and PDF. PDF page size and orientation can also be configured. Refer to [Export Options](/visualizing-data/visualization-v2-widgets/properties/export-options/) for more information.

### View Underlying Data

Controls whether viewers can inspect the records behind the KPI Card. You can allow exporting, allow column selection, choose whether the action is available from the widget header, card selection, or both, and configure the columns displayed in the underlying-data view. Refer to [View Underlying Data](/visualizing-data/working-with-widgets/view-data/) for more information.








