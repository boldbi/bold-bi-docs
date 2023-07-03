---
layout: post
title: Creating Dashboard Filters – Embedded BI | Bold BI Docs
description: Learn how to create dashboard filters to configure master-listener relationship between widgets in a dashboard in Bold BI Embedded.
canonical: "/working-with-dashboards/configuring-dashboard-filters/"
platform: bold-bi
documentation: ug
lang: en
---

# Configuring Dashboard Filters

Dashboard filters allow you to control the interdependency of widgets in a dashboard with respect to dynamic user interactions. 

You can configure the dashboard filters through the `Filter Configuration` window that is launched by selecting the `Filter` menu in the tool bar.

![Select Filter](/static/assets/working-with-dashboards/images/select-filter.png)

![Filter Configuration](/static/assets/working-with-dashboards/images/filter-configuration.png)

**Master widgets**

In this window, the master widgets section holds the names of widgets whose `Act as Master Widget` property setting is enabled. If the widget is added under this section, it is subjected to have its filter effect on user interaction. The remaining widgets that are not under the master widget section are marked as listeners through the listener widgets section.

You can also add a widget into this section explicitly by clicking the highlighted icon.

![Adding widgets](/static/assets/working-with-dashboards/images/adding-widgets.png)

Selecting a widget show its associated filter profiles and listener widgets in respective sections; they are customized.

You can remove the selected widget from the master widgets section through the `Remove` in its header.

> **NOTE:**  Filter type widgets will get added automatically for user convenience, by default. You can remove it, if not required.

**Filter profiles**
 
The filter profiles section holds a default profile generated automatically for the widget that is added in the master widgets section. This profile holds the detail about the filter criteria and listener widgets to be affected based on that criteria.

Filter criteria can be set through the bottom pane configuration.

![Filter Criteria](/static/assets/working-with-dashboards/images/filter-criteria.png)

This pane holds the detail about mapping of a column in the current data source with the column in target data source, which is same by default, based on which the user interaction filtering works. You can also customize this default filter criteria by switching to `Custom` option, such as add, edit, and remove.

![Custom option](/static/assets/working-with-dashboards/images/Custom-option.png)

You can modify the default profile setting or remove the same or add a new profile through respective options in its header.

You can rename the profile by double-clicking it.

![Rename profile](/static/assets/working-with-dashboards/images/Rename-profile.png)

> **NOTE:**  If you define more than one filter profile for a master widget, it gets the interaction effect, i.e., all those filter profiles that match filter criteria will be filtered.

**Listener widgets**

Listener Widgets section holds the name list of widgets other than the master widget. Select the check box that besides to the respective widget name to map it to the respective master widget under the specified filter profile. To respond to user interaction in master widget, deselect the one that you do not want to respond to.

![Listener widget](/static/assets/working-with-dashboards/images/Listener-widget.png)

For example, Consider `Chart_1 widget` is marked as a listener widget to the `Grid_1 and ComboBox_1 widgets`, `Grid_1 widget` is marked as listener widget to the `ComboBox_1 widget`.

![Example for listener widget](/static/assets/working-with-dashboards/images/example-for-listener-widget.png)

While applying the filter in the grid widget, the chart widget will be filtered. Now, the chart widget contains the information about the selected ship name in the grid.

![Filtered result for Grid](/static/assets/working-with-dashboards/images/Filtered-result-for-Grid.png)

On selecting the data in the combo box, the chart widget and grid widget show the particular detail.

![Filtered result for Combo box](/static/assets/working-with-dashboards/images/Filtered-result-for-Combo-box.png)
