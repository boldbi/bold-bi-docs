---
layout: post
title: Font Settings - Widget Properties | Bold BI Documentation
description: Learn how font inheritance, font family, font style, and text sizing work for Bold BI Modern widgets.
canonical: "/visualizing-data/visualization-v2-widgets/properties/font-settings/"
platform: bold-bi
documentation: ug
---

# Font Settings

Font settings control how text is displayed in Modern widgets. Depending on the widget, you can configure font inheritance, font family, font style, automatic text sizing, and fixed font sizes for specific text elements.

Font settings in Modern widgets follow an inheritance model:

- **Dashboard font** provides the default font family and style.
- **Widget font** can inherit the dashboard font or override it for the widget.
- **Element font** can inherit the widget font or override it for a specific text element such as a legend, value label, caption, or axis title.

| Unsupported widgets |
|---|
| Image, Text, Line Widget, Button, Tab Widget, Q&A Widget, Date Picker, Period Over Period, Range Navigator |

> **Note:** The available font groups vary by widget type. For example, one widget may expose **Widget Font**, **Legend**, and **Value Label**, while another may expose **Measure**, **Caption**, or **Axis** font groups.

## Widget-level font settings

#### Use Dashboard Font Family and Style

Uses the dashboard-level font family and style for the widget. Keep this option enabled when the widget should follow the same typography as the rest of the dashboard.

#### Font Family

Selects the font family used by the widget. This property becomes available when **Use Dashboard Font Family and Style** is disabled.

#### Font Style

Applies font styling to the widget text. Supported style options include **Bold**, **Italic**, and **Underline**. This property becomes available when **Use Dashboard Font Family and Style** is disabled.

## Element-level font settings

Some widgets expose font settings for individual text elements. These element-level settings can inherit from the widget font or be customized independently.

Common element groups include:

- **Legend**
- **Legend Title**
- **Value Label**
- **Measure**
- **KPI Value**
- **Left Value**
- **Left Caption**
- **Right Value**
- **Right Caption**
- **Category Axis Label**
- **Category Axis Title**
- **Primary Axis Label**
- **Primary Axis Title**
- **Secondary Axis Label**
- **Secondary Axis Title**
- **Header**
- **Content**

#### Use Widget Font Family and Style

Uses the widget-level font family and style for the selected text element. Disable this option when the element must use a different font family or style from the rest of the widget.

#### Font Family

Selects the font family for the selected text element. This property becomes available when **Use Widget Font Family and Style** is disabled.

#### Font Style

Applies font styling to the selected text element. Supported style options include **Bold**, **Italic**, and **Underline**. This property becomes available when **Use Widget Font Family and Style** is disabled.

#### Auto Font Size

When enabled, Bold BI automatically calculates the font size for the selected text element based on the available widget space and display resolution. This option is available only for supported text elements.

#### Font Size

Becomes available when the corresponding **Auto Font Size** option is disabled. Use it to set a fixed size for the selected text element.

## How font inheritance works

Use the following pattern when configuring fonts:

1. Leave **Use Dashboard Font Family and Style** enabled to keep the entire widget aligned with the dashboard typography.
2. Disable it when the widget needs its own font family or font style.
3. For a specific text element, leave **Use Widget Font Family and Style** enabled to inherit the widget font.
4. Disable it only when that individual text element needs a separate font treatment.

This approach helps you avoid unnecessary overrides and keeps typography consistent across the dashboard.

> **Tip:** Use a fixed font size when you need visual consistency across a presentation or embedded view, and you know the target display resolution in advance.
