---
layout: post
title: Keyboard Navigation in Bold BI Dashboard Viewer | Bold BI Docs
description: Learn how to explore Bold BI dashboards with keyboard shortcuts in viewer mode for improved accessibility.
platform: bold-bi
documentation: ug
---

# Keyboard Navigation in Bold BI Dashboard Viewer

Bold BI now supports keyboard navigation in dashboard viewer mode with limited functionality.
This enhancement allows users to navigate dashboards without relying on a mouse and improves overall accessibility.

## Prerequisites

Before you begin, ensure the following are in place:
- A published dashboard that you can open in viewer mode.
- A supported browser with accessibility features (Microsoft Edge, Google Chrome, or Mozilla Firefox).


## Keyboard navigation

You can navigate dashboard elements in viewer using the following keys:

| Action | Shortcut |
|--------|----------|
| Move focus forward | `Tab` |
| Move focus backward | `Shift` + `Tab` |
| Navigate within menus | Arrow keys |
| Activate the focused item | `Enter` or `Space` |
| Close an open menu or dialog | `Esc` |

### Working with pop-ups and dialog

When a pop-up or dialog opens (for example, the **Export** window), focus moves to the first interactive element inside it. Continue using `Tab` or `Shift` + `Tab` to cycle through the available controls, and press `Enter` to confirm an action. Use `Esc` to close the dialog.

### Working with widgets

Widgets respond to the same keyboard patterns used elsewhere in the viewer:
1. Press `Tab` until the widget is outlined, indicating that it has focus.
2. Use `Shift` + `Tab` to return to the previous widget.


> **Note:** Keyboard navigation is currently available only in dashboard viewer mode and covers a limited set of interactions.
