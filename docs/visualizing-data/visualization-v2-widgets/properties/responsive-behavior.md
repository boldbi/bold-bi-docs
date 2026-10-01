---
layout: post
title: Responsive Behavior – Widget Properties | Bold BI Documentation
description: Learn how Bold BI Modern widgets adapt their content and text when dashboard or widget dimensions change.
canonical: "/visualizing-data/visualization-v2-widgets/properties/responsive-behavior/"
platform: bold-bi
documentation: ug
---

# Responsive Behavior

Responsive behavior controls how a widget adapts when its container or the dashboard view area changes size. Bold BI recalculates the available plotting and content area when a widget is resized.

## Configuring responsive widgets

#### Resize the widget

Drag a widget edge or corner on the design canvas. Review the widget at the smallest size in which it will be used because labels, legends, and data points have less space at smaller dimensions.

#### Automatic font size

Allows supported text elements to scale for the available space and display resolution. See [Font Settings](../font-settings/).

#### Text overflow and wrapping

Use the widget's label overflow, trimming, maximum-width, or text-wrapping properties when long labels compete for space.

#### Legend position

Choose a position that preserves the plot area at the expected widget dimensions. See [Legend Settings](../legend-settings/).

#### Scrolling and page size

Use scrolling or page-size properties on supported widgets when all records cannot remain readable in the available area.

## Usage guidance

Validate the dashboard at its intended desktop, tablet, embedded, and presentation sizes. A layout that is readable on a wide designer canvas may require fewer visible labels, a different legend position, or scrolling in a smaller embedded container.
