---
layout: post
title: Creating Dashboard Filters – Embedded BI | Bold BI Docs
description: Learn how to create dashboard filters to configure master-listener relationship between widgets in a dashboard in Bold BI Embedded.
canonical: "/working-with-dashboards/configuring-dashboard-filters/"
platform: bold-bi
documentation: ug

---

# Configuring Dashboard Filters

Dashboard filters allow you to control the interdependency of widgets in a dashboard with regard to dynamic user interactions.

You can configure the dashboard filters through the `Filter Configuration` window, which is accessed by selecting the `Filter` menu in the toolbar.

![Select Filter](/static/assets/working-with-dashboards/images/select-filter.png)

![Filter Configuration](/static/assets/working-with-dashboards/images/filter-configuration.png)

**Master widgets**

In the Filter Configuration window, the master widgets section contains the names of widgets whose `Act as Master Widget` property is enabled. Widgets added under this section will have a filter effect on user interaction. Any widgets not in the master widget section are designated as listeners in the listener widgets section.

You can explicitly add a widget to the master widgets section by clicking the highlighted icon.

![Adding widgets](/static/assets/working-with-dashboards/images/adding-widgets.png)

When selecting a widget, its associated filter profiles and listener widgets are displayed in their respective sections for customization.

To remove a selected widget from the master widgets section, use the `Remove` option in its header.

> **NOTE:**  Filter type widgets are automatically added for user convenience by default, but can be removed if not needed.

**Filter profiles**
 
The filter profiles section contains a default profile that is automatically generated for the widget added in the master widgets section. This profile includes details about the filter criteria and listener widgets affected based on that criteria.

Filter criteria can be set through the bottom pane configuration.

![Filter Criteria](/static/assets/working-with-dashboards/images/filter-criteria.png)

This pane provides information about mapping a column in the current data source with the column in the target data source. By default, they are the same, and user interaction filtering is based on this. The default filter criteria can be customized by switching to the `Custom` option, where you can add, edit, and remove criteria.

![Custom option](/static/assets/working-with-dashboards/images/Custom-option.png)

To modify the default profile settings, remove it, or add a new profile, use the respective options in the header.

Profiles can be renamed by double-clicking them.

![Rename profile](/static/assets/working-with-dashboards/images/Rename-profile.png)

> **NOTE:**  If more than one filter profile is defined for a master widget, they will all have an interaction effect – all profiles that match the filter criteria will be applied.

**Listener widgets**

The Listener Widgets section contains a list of widget names other than the master widget. To map a widget to its corresponding master widget under a specified filter profile, select the checkbox next to the widget name. To disable a widget from responding to user interaction in the master widget, deselect the checkbox.

The `Check All` option next to the `Listener Widgets` label allows for customizing the selection of listener widgets by selecting or deselecting all widget names using this checkbox.

![Listener widget](/static/assets/working-with-dashboards/images/Listener-widget.png)

![Listener widget](/static/assets/working-with-dashboards/images/Listener-widget-few-selection.png)

For example, consider that the `Chart_1 widget` is designated as a listener widget for the `Grid_1 and ComboBox_1 widgets`, and the `Grid_1 widget` is designated as a listener widget for the `ComboBox_1 widget`.

![Example for listener widget](/static/assets/working-with-dashboards/images/example-for-listener-widget.png)

When applying a filter in the grid widget, the chart widget will also be filtered. The chart widget will then display information about the selected ship name in the grid.

![Filtered result for Grid](/static/assets/working-with-dashboards/images/Filtered-result-for-Grid.png)

Upon selecting data in the combo box, both the chart widget and grid widget will display the specific details.

![Filtered result for Combo box](/static/assets/working-with-dashboards/images/Filtered-result-for-Combo-box.png)
