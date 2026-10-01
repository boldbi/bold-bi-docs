---
layout: post
title: Image Display Widget (Modern) | Bold BI Documentation
description: Learn how to configure fixed, remote, and data-driven images, plus formatting, filters, and actions for the modern Image widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/miscellaneous/image/"
platform: bold-bi
control: Image
documentation: ug
---

# Image Widget

The Image widget displays a local, remote, or data-driven image. Use it for branding, product images, status indicators, or navigation.

![Image Widget](/static/assets/visualizing-data/visualization-widgets/images/image/image-widget.png)

## Configuring Data

| Data section | Requirement | Description |
|---|---|---|
| **Column** | Optional | Dimension containing the value used to build a dynamic image URL. |

### Assigning Data

1. Add the **Image** widget to the canvas.
2. Open **ASSIGN DATA** and add a dimension to **Column** when the image must respond to data or filters.
3. Leave **Column** empty to display a fixed local or remote image.

### Field Settings

Use the field menu for the supported filtering and relative-date options. The displayed image changes according to the selected field value and URL pattern.

## Formatting the Image Widget

### General Settings

Refer to [General Settings](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#general-settings) for information about configuring the widget type, unique name, title, subtitle, and description shown for the widget.

### Basic Settings

#### Mode

Controls how the image fits its container: **Default**, **Fill**, **Uniform**, or **Uniform To Fill**.

#### Image Source

Selects **Local**, **URL**, or **Parameterized URL**.

#### Browse

Selects an image from the local system when **Image Source** is Local.

#### Image URL

Specifies the web address when **Image Source** is URL.

#### Pattern

Builds a dynamic image URL from assigned fields or dashboard parameters when **Image Source** is Parameterized URL.

#### Image Rotation

Rotates the image by `0`, `90`, `180`, or `270` degrees.

### Tooltip Settings

#### Show Tooltip

Displays text when a viewer points to the image.

#### Tooltip Text

Specifies that text and is available when **Show Tooltip** is enabled.

### Padding Settings

#### Top
 the top padding between the image and the widget boundary from `0` through 50 pixels.

#### Bottom
 the bottom padding between the image and the widget boundary from `0` through 50 pixels.

#### Right
 the right padding between the image and the widget boundary from `0` through 50 pixels.

#### Left
 the left padding between the image and the widget boundary from `0` through 50 pixels.

### Filter

Refer to [Filter Settings](/visualizing-data/visualization-v2-widgets/properties/filter-settings/) for filter behavior.

### Link

Refer to [Linking](/visualizing-data/visualization-v2-widgets/properties/linking/) for image-click navigation.

### Inter-Widget Linking

Refer to [Inter-Widget Linking](/visualizing-data/visualization-v2-widgets/properties/inter-widget-linking/) for information about linking the Image widget to a Tab widget.

### Container Appearance

Refer to [Container Appearance](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-appearance) for widget-container styling.

### Container Actions

Refer to [Container Actions](/visualizing-data/visualization-v2-widgets/properties/widget-container-customization/#container-actions) for viewer actions.




