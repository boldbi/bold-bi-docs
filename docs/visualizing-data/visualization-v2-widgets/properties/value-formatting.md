---
layout: post
title: Value Formatting – Widget Properties | Bold BI Documentation
description: Learn how to format measure values displayed on Bold BI Modern widgets using number, currency, percentage, and custom format patterns.
canonical: "/visualizing-data/visualization-v2-widgets/properties/value-formatting/"
platform: bold-bi
documentation: ug
---

# Value Formatting

Value formatting controls how numeric measure values are displayed in charts, grids, and cards. You can apply standard patterns such as currency symbols, thousands separators, and decimal precision, or build a custom format string for specialized output.

Formatting is applied via the **Measure Format** dialog, which you open by clicking the **Format** button in the widget's Properties pane or from the field settings menu in the Assign Data panel.

## Using the Measure Format Dialog

1. In the **Properties** pane, locate the **Formatting** or **Axis Format** section and click the **Format** button.  
   Alternatively, click the settings icon on a bound measure field in the **Assign Data** panel and choose **Format**.
2. The **Measure Format** dialog opens.
3. Select a format category and configure the options.
4. Click **OK** to apply.

For the full list of format categories (Number, Currency, Percentage, Date/Time, Custom), format codes, and examples, refer to the detailed [Measure Format documentation](/visualizing-data/working-with-widgets/formatting-measure-type-column/).

## Axis Format

The **Axis Format** button in the Axis Settings section applies the same Measure Format dialog to axis tick labels on the primary and secondary value axes. Use this to display axis labels in thousands (K), millions (M), or any other abbreviated format while keeping the full value visible in tooltips.

For more details, refer to [Axis Settings](/visualizing-data/visualization-v2-widgets/properties/axis-settings/#axis-format).
