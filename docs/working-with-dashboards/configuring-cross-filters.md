---
layout: post
title: Creating Cross Filters for Dashboards– Embedded BI | Bold BI Docs
description: Learn how to create cross filters to configure a master-listener relationship between widgets in a dashboard in Bold BI Embedded.
canonical: "/working-with-dashboards/configuring-cross-filters/"
platform: bold-bi
documentation: ug

---

# Configuring Cross Filters for Dashboards

Cross filters allow you to control the interdependency of widgets in a dashboard concerning dynamic user interactions.

You can configure the dashboard filters through the `Cross Filter Configuration` window, which is accessed by selecting the `Filter` menu in the toolbar.

![Select Filter](/static/assets/working-with-dashboards/images/select-filter.png)

![Filter Configuration](/static/assets/working-with-dashboards/images/filter-configuration.png)

**Master widgets**

In the Filter Configuration window, the master widgets section contains the names of widgets whose `Act as Master Widget` property is enabled. Widgets added under this section will have a filter effect on user interaction. Any widgets not in the master widget section are designated as listeners in the listener widgets section.

You can explicitly add a widget to the master widgets section by clicking the highlighted icon.

![Adding widgets](/static/assets/working-with-dashboards/images/adding-widgets.png)

When selecting a widget, its associated filter profiles and listener widgets are displayed in their respective sections for customization.

![Remove Master Widget](/static/assets/working-with-dashboards/images/remove-master-widget.png)

To remove a selected widget from the master widgets section, use the `delete` option in its header.

> **NOTE:** Filter type widgets are automatically added for user convenience by default but can be removed if not needed.

**Filter profiles**

The filter profiles section contains a default profile that is automatically generated for the widget added in the master widgets section. This profile includes details about the filter criteria and listener widgets affected based on that criteria.

Filter criteria can be set through the bottom pane configuration.

![Filter Criteria](/static/assets/working-with-dashboards/images/filter-criteria.png)

This pane provides information about mapping a column in the current data source with the column in the target data source. By default, they are the same, and user interaction filtering is based on this. The default filter criteria can be customized by switching to the `Custom` option, where you can add, edit, and remove criteria.

![Custom option](/static/assets/working-with-dashboards/images/Custom-option.png)

To modify the default profile settings, remove it, or add a new profile, use the respective options in the header.

For additional insights, we can leverage two data sources, three grids, and two filter profiles. In one filter profile, we'll apply one data source, while in the other filter profile, we'll use another data source, as illustrated below. This configuration allows us to select the desired filters to refine our data within the Listener Widgets.

![Profile Filter](/static/assets/working-with-dashboards/images/Profile-filter.png)

![Profile Filter2](/static/assets/working-with-dashboards/images/Profile-filter2.png)

Through the use of the above two filter profiles, we can filter `Grid2` using the `productID` from one data source, and `Grid3` can be filtered using the `productName` from another data source, as depicted in the image below.

![Filter Profile Example](/static/assets/working-with-dashboards/images/Filter-Profile-Example.png)

Profiles can be renamed by double-clicking them.

![Rename profile](/static/assets/working-with-dashboards/images/Rename-profile.png)

> **NOTE:** If more than one filter profile is defined for a master widget, they will all have an interaction effect – all profiles that match the filter criteria will be applied.

**Listener widgets**

The Listener Widgets section contains a list of widget names other than the master widget. To map a widget to its corresponding master widget under a specified filter profile, select the checkbox next to the widget name. To disable a widget from responding to user interaction in the master widget, deselect the checkbox.

The `Check All` option next to the `Listener Widgets` label allows for customizing the selection of listener widgets by selecting or deselecting all widget names using this checkbox.

![Listener widget](/static/assets/working-with-dashboards/images/Listener-widget.png)

![Listener widget](/static/assets/working-with-dashboards/images/Listener-widget-few-selection.png)

**Cross Filters Example**

Consider the following scenario:

The `Engineer Performance` widget is designated as the listener widget for the `Team Leader Performance`, `Managers`, and `Project` widgets. Similarly, the `Team Leader Performance` widget is designated as the listener widget for the `Managers` and `Project` widgets, while the `Managers` widget is designated as the listener widget for the `Project` widget.

In this example, the `Engineer Performance` widget demonstrates Cross Filtering.

![Engineers Performance](/static/assets/working-with-dashboards/images/Engineers-Performance.png)

Let's examine how it functions:

When a filter is applied in the `Projects` widget, it filters the Managers, Team Leader Performance, and Engineer Performance widgets. The `Managers` widget displays information about `selected managers` for the chosen project, the `Team Leader Performance` widget exhibits `completed tasks by team leaders` under the chosen project, and the `Engineer Performance` widget displays `completed tasks by engineers` under the selected project.

![Projects Filter](/static/assets/working-with-dashboards/images/Projects-filter.png)

When a filter is applied in the Managers widget, it filters the Team Leader Performance and Engineer Performance widgets. The `Team Leader Performance` widget displays information about `completed tasks by team leaders` for selected managers, and the `Engineer Performance` widget exhibits `completed tasks by engineers` under the selected managers.

![Managers Filter](/static/assets/working-with-dashboards/images/Managers-filter.png)

When a filter is applied in the Team Leader Performance widget, it filters the Engineer Performance widget. The `Engineer Performance` widget displays `completed tasks by engineers` under the selected Team Leader from the Team Leader Performance widget.

![Team Leaders Filter](/static/assets/working-with-dashboards/images/TeamLeaders-filter.png)

**Filter Overview**

Accessing the `Filter Overview` pop-up in Build provides insights into filtered widgets and their locations. Users can save cross-filter dashboards to their user account, either as default or non-default. Default saves ensure applied filters remain active upon reopening the dashboard, and also, all filters can be cleared by selecting `CLEAR ALL` in the Filter Overview interface.

![Fiter Overview](/static/assets/working-with-dashboards/images/FiterOverview.png)

Clicking `View saved filters` displays saved filters. Users can copy, share, or delete cross-filter dashboards and manage default settings. If not set as default, the dashboard renders with initially configured filters.

![Saved View](/static/assets/working-with-dashboards/images/Saved-view.png)

> **NOTE:** We can remove the widget cross filter either by using the clear filter option in the widget or utilizing individual (cross marks) clear option in the Filter Overview.
>![Remove Widget Filter](/static/assets/working-with-dashboards/images/remove-widget-filter.png)