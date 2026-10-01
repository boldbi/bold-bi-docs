---
layout: post
title: Inter-Widget Linking Widget Property | Bold BI Documentation
description: Learn how to configure inter-widget linking between supported Modern widgets and a Tab widget in Bold BI dashboards.
canonical: "/visualizing-data/visualization-v2-widgets/properties/inter-widget-linking/"
platform: bold-bi
documentation: ug
---

# Inter-Widget Linking

Inter-widget linking lets supported Modern widgets interact with a **Tab** widget. When a viewer selects a value in the linked widget, Bold BI can switch to a tab that matches the selected index and apply the related filter context to the widgets inside that tab.

This feature is useful when you want a selection in one widget to guide viewers to a specific tabbed view without asking them to switch tabs manually.

## Supported Widgets

The following Modern widgets support the **Inter-Widget Linking** option:

- Combo Box
- List Box
- KPI Card
- Number Card
- Radial Gauge
- Button
- Image

The **Tab** widget is the target widget used in the linking configuration.

## How Inter-Widget Linking Works

Inter-widget linking connects a supported source widget to one or more Tab widgets in the same dashboard.

- The source widget acts as the interaction trigger.
- The Tab widget acts as the linked target.
- Selecting a value can switch the active tab based on the selected index.
- The same interaction can also filter the widgets inside the selected tab, when applicable.

For example, when a viewer selects the second value in a Combo Box, Bold BI can switch to the second tab and apply the selected filter context to the widgets displayed there.

## Configure Inter-Widget Linking

1. Add and configure a supported source widget, such as a [Combo Box](/visualizing-data/visualization-v2-widgets/filters/combo-box/), [List Box](/visualizing-data/visualization-v2-widgets/filters/list-box/), [KPI Card](/visualizing-data/visualization-v2-widgets/cards/kpi-card/), [Number Card](/visualizing-data/visualization-v2-widgets/cards/number-card/), [Radial Gauge](/visualizing-data/visualization-v2-widgets/deviation/radial-gauge/), [Button](/visualizing-data/visualization-v2-widgets/miscellaneous/button-widget/), or [Image](/visualizing-data/visualization-v2-widgets/miscellaneous/image/).
2. Add and configure a [Tab widget](/visualizing-data/visualization-v2-widgets/miscellaneous/tab-widget/).
3. Open the supported source widget's properties and locate the **Inter-Widget Linking** section.
4. Enable inter-widget linking.
5. In **Widgets**, select the Tab widget that should respond to the interaction.
6. Choose the required action type.

## Properties

### Enable Inter-Widget Linking

Turns inter-widget linking on or off for the selected source widget. This option is disabled by default.

### Widgets

Lists the Tab widgets available in the current dashboard. Select the Tab widget that should respond when a viewer interacts with the source widget.

### Actions

Choose how the linked Tab widget responds to the interaction.

#### Default

Switches tabs based on the selected index from the source widget. For example, selecting the third item in the source widget switches the Tab widget to the third tab.

If the selected index is greater than the number of tabs, Bold BI switches to the last tab.

#### Custom

Switches to a specific tab index that you enter manually. Use this when every interaction should open the same tab regardless of which value the viewer selects in the source widget.

## Notes

- Configure inter-widget linking only after both the source widget and the Tab widget are added to the same dashboard.
- The available linking behavior depends on the selected source widget and its configured data.
- Use this feature together with standard filter interaction when you want the tab switch and data filtering to occur as part of the same viewer action.
