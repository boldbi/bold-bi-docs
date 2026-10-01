---
layout: post
title: Filter Settings - Widget Properties | Bold BI Documentation
description: Learn how to configure master widget behavior, filter action responses, and hierarchical Top N filtering in Bold BI Modern widgets.
canonical: "/visualizing-data/visualization-v2-widgets/properties/filter-settings/"
platform: bold-bi
documentation: ug
---

# Filter Settings

Filter settings control how a widget participates in the dashboard's cross-filtering system. In Bold BI, clicking a data point on one widget can filter the data displayed by other widgets on the same dashboard. The filter settings panel lets you configure which widgets broadcast filter events and which widgets listen to them.

| Unsupported widgets |
|---|
| Image, Text, Line Widget, Button, Tab Widget |

## Properties

#### Act as Master Widget

When enabled, this widget broadcasts filter events when a user clicks a data point. Other widgets on the dashboard that are not set to **Ignore Filter Actions** will update their data in response.

Use this setting to create drill-through dashboards where a summary chart controls the detail widgets around it.

#### Ignore Filter Actions

When enabled, this widget does not respond to filter events from other widgets. The widget always displays its full dataset regardless of what a user has clicked elsewhere on the dashboard.

Use this setting to keep a reference widget (such as a total or baseline chart) constant while other widgets are filtered interactively.

#### Hierarchical Filter

Controls how **Top N** filtering behaves when multiple dimension columns are configured in the Columns section.

- **Enabled** - Top N is applied independently to each dimension column in the hierarchy. Each column returns up to N records relative to its own context.
- **Disabled** - Top N is applied as a flat filter across all dimension columns combined, returning the overall top N records without regard to hierarchy.

> **Example:** A chart with Region -> Country dimensions and Top 5 applied: with Hierarchical Filter enabled, each region returns up to 5 countries. With it disabled, only the top 5 country records overall are returned.
