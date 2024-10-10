---
layout: post
title: Menu Actions in Visuals – Embedded BI | Bold BI Docs
description: Learn about the menu actions to perform filtering, drill down, linking and view underlying data in Bold BI.
platform: bold-bi
documentation: ug

---

# Perform various actions through Widget Menu

You can perform various widget actions such as `Filtering`, `Linking`, `Drill Down`, and `Viewing Underlying Data` without resetting the properties or data configuration of widgets each time from Designer. Now, you can configure all required widget actions and perform them from the widget context menu, which will be shown when clicking the respective widget area.

![widget with all option](/static/assets/visualizing-data/working-with-widgets/images/widget_action_with_all_option.png)

>Note: Once you've drilled down, you can drill up to the previous view using the breadcrumb navigator located at the top of the widget.
>![widget with drill up option](/static/assets/visualizing-data/working-with-widgets/images/Drill_Up.png)

For the `Chart` widget, by default, view data support is enabled for all applicable widgets. So, if you select a chart bar without enabling filtering and linking support, it will automatically open the underlying data popup.

![widget selection](/static/assets/visualizing-data/working-with-widgets/images/chart_widget_bar_selection.png)

For example, `Germany` is selected and its underlying data is opened in a popup.

![widget view data](/static/assets/visualizing-data/working-with-widgets/images/widget_action_view_data.png)

If you enable more than one action for a widget, a `context menu` will be displayed when clicking the chart bar. For instance, if you have enabled filtering, linking, and view date options for the `Chart`, you will see the following menus.

![widget action with limited menu data](/static/assets/visualizing-data/working-with-widgets/images/widget_action_limited_menu.png)

Similarly, if you have enabled all widget actions for the Chart, you will see the following menus.

![widget with all option](/static/assets/visualizing-data/working-with-widgets/images/widget_action_with_all_option.png)

When clicking `Drill Down`, it performs the drill-down action.

![chart drill down](/static/assets/visualizing-data/working-with-widgets/images/widget_action_drilldown.png)

When clicking `Filter`, it applies a filter action to its slave.

![chart filter action](/static/assets/visualizing-data/working-with-widgets/images/widget_action_filtering.png)

When clicking `Link`, it navigates to the respective page as per the linking configuration.

![chart linking](/static/assets/visualizing-data/working-with-widgets/images/widget_action_linking.png)

When clicking `View Underlying Data`, it opens the underlying data information.

![widget view data](/static/assets/visualizing-data/working-with-widgets/images/widget_action_view_data.png)






