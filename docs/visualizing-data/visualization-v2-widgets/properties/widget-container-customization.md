---
layout: post
title: Widget Container Customization | Bold BI Documentation
description: Learn how to configure general settings, container appearance, actions, export controls, and responsive behavior for modern Bold BI widgets.
canonical: "/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/"
platform: bold-bi
documentation: ug
---

# Widget Container Customization

## General Settings

The **General Settings** section appears at the top of every widget's Properties pane.

#### Widget Type

Displays the selected widget's type, such as **Bar Chart**, **Grid**, or **KPI Card**. This read-only value helps you confirm which Modern widget is currently selected before you configure its properties.

#### Unique Name

Displays the widget's unique identifier within the dashboard. Use this value when you need to distinguish one widget from another in advanced configuration scenarios such as URL-based interactions or widget-specific references.

#### Name

Sets the primary title displayed in the widget header bar. The title is shown to dashboard viewers unless **Show Header** is disabled in Container Actions.

#### Subtitle

Sets a secondary line of text displayed beneath the title in the header bar.

#### Description

Provides a tooltip-accessible description of the widget. Viewers can read this description by hovering over the information icon in the widget header (if shown).

## Container Appearance

Container Appearance settings control the visual frame that surrounds every Bold BI widget, including its title bar, background, border, padding, and the action icons available to dashboard viewers. These settings are separate from the chart or data visualization inside the container and apply uniformly to all widget types.

### Title Alignment

Sets the horizontal alignment of the widget title within the header bar. Options: **Left**, **Center**, **Right**.

### Title Color

Sets the font color of the widget title text.

### Title Auto Font Size

When enabled (the default), Bold BI automatically calculates the title font size based on the available widget space and viewing resolution.

#### Font Size

Becomes available when **Title Auto Font Size** is disabled. Use it to apply a fixed title font size. The accepted range is 10-44.

### Subtitle Auto Font Size

When enabled (the default), Bold BI automatically calculates the subtitle font size based on the available widget space and viewing resolution.

#### Font Size

Becomes available when **Subtitle Auto Font Size** is disabled. Use it to apply a fixed subtitle font size. The accepted range is 10-32.

### Auto Padding

When enabled (the default), the widget container padding adjusts automatically as the widget is resized.

#### Padding

Activates when **Auto Padding** is disabled. Sets the inner padding between the container border and the widget content area. The accepted range is 0-25.

### Show Border

Toggles the visibility of the border surrounding the widget container.

### Corner Radius

Sets the rounding radius of the widget container corners. Only active when **Show Border** is enabled. The accepted range is 0-10.

### Show Background Image

Toggles a custom background image for the widget. When enabled, a file picker appears to upload or select an image.

### Background Color

Sets the fill color of the widget container background. Accepts a color value from the picker or a hex code.

### Transparency

Controls the opacity of the **Background Color**. At 0 the background is fully opaque; at 100 it is fully transparent.

### Show Shadow

Toggles the drop shadow displayed around the widget container, giving it a raised appearance on the dashboard canvas.

## Container Actions

Container actions control the icons that appear in the widget header and the capabilities available to dashboard viewers at runtime.

#### Show Header

Toggles the visibility of the entire widget header bar, including the title, subtitle, and all action icons.

#### Allow Maximize View

When enabled, a maximize icon appears in the widget header. Clicking it expands the widget to fill the dashboard view area, allowing the viewer to inspect data in detail.

#### Allow CSV Export

When enabled, a CSV export icon appears in the widget header. Clicking it downloads the widget's summarized dataset as a `.csv` file.

#### Allow Excel Export

When enabled, an Excel export icon appears in the widget header. Clicking it downloads the widget's summarized dataset as an `.xlsx` or `.xls` file.

#### Allow Image Export

When enabled, an image export icon appears in the widget header. Clicking it downloads the current widget view as a `.jpg`, `.png`, or `.bmp` image file.

#### Allow PDF Export

When enabled, a PDF export icon appears in the widget header. Clicking it downloads the current widget view as a `.pdf` file.

#### Enable Comments

When enabled, viewers can add and view comments on the widget. For more details, refer to [Commenting Widget](/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

When enabled, viewers can inspect the raw row-level data behind the widget's aggregated values. For more details, refer to [View Data](/visualizing-data/working-with-widgets/view-data/).

#### Pin Widget

When enabled, a pin icon appears in the widget header, allowing viewers to pin the widget to a personal favorites board.

## Responsive Behaviour

Bold BI automatically hides certain widget elements when the widget is resized below threshold sizes to maintain readability:

- When the widget width is less than **7 columns** wide, Y-axis labels and Y-axis titles are hidden on chart widgets.
- When the widget height is less than **6 rows** tall, X-axis labels, X-axis titles, and gridlines are hidden on chart widgets.
