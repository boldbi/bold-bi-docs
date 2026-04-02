---
layout: post
title: Screen Reader Support in Dashboard Viewer | Bold BI Docs
description: Learn how to use screen readers like NVDA to navigate Bold BI dashboards in viewer mode for improved accessibility.
platform: bold-bi
documentation: ug
---

# Screen Reader Support in Dashboard Viewer

Bold BI now supports screen readers in dashboard viewer mode with limited functionality.
This enhancement allows users to navigate dashboards without relying on a mouse and ensures better usability for users with visual impairments.

## Prerequisites

Before you begin, ensure the following are in place:
- A published dashboard that you can open in viewer mode.
- A supported browser with accessibility features (Microsoft Edge, Google Chrome, or Mozilla Firefox).
- Optional: A screen reader such as [NVDA](https://www.nvaccess.org/) for spoken feedback while navigating.

## Using a screen reader

Screen reader tools such as **NVDA** can be used to read dashboard content while navigating in viewer mode:
1. Launch NVDA before opening the dashboard.
2. Use `Tab` and `Shift` + `Tab` to move through controls; NVDA announces each control name, role, and state.
3. Within menus or dialog, use the arrow keys to explore available options. NVDA reads each item as you move.
4. As you move between widgets, NVDA announces the widget title, subtitle, and description so you can confirm context before taking action.

> **Note:** Screen reader support is currently available only in dashboard viewer mode and covers a limited set of interactions.
