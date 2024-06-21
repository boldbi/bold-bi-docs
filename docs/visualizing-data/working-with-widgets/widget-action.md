---
layout: post
title: Menu Actions in Visuals – Embedded BI | Bold BI Docs
description: Learn about the menu actions to perform filtering, drill down, linking and view underlying data in Bold BI.
platform: bold-bi
documentation: ug
---

# Perform various actions through Widget Menu

You can perform various widget actions like `Filtering`, `Linking`, `Drill Down` and `Viewing Underlying Data` without resetting properties or data configuration of widgets each time from Designer. Now, you can configure all required widget action and perform all those actions from widget context menu which will be shown while clicking the respective widget area. 

![widget with all option](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_with_all_option.png)

Consider `Chart` widget, by default view data support enabled for all applicable widgets. So, without enabling filtering and linking supports if you select chart bar then it will open the underlying data popup automatically.

![widget selection](/static/assets/embedded/visualizing-data/working-with-widgets/images/chart_widget_bar_selection.png)

Here, `Germany` is selected and it's underlying data opened in popup.

![widget view data](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_view_data.png)

If you are enabling more than one actions to widget, then a `context menu` will get displayed on clicking the chart bar. For example, If you have enabled filtering, linking and view date option to `Chart`, then you will get the following menus.

![widget action with limited menu data](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_limited_menu.png)

Similarly, If you have enabled all widget actions of Chart, then you will get the following menus.

![widget with all option](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_with_all_option.png)

On clicking `Drill Down`, it's perform drill down action

![chart drill down](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_drilldown.png)

On clicking `Filter`, it's perform filter action to it's slave

![chart filter action](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_filtering.png)

On clicking `Link`, it navigates to respective page as per linking configuration

![chart linking](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_linking.png)

On clicking `View Underlying Data`, it's open underlying data information

![widget view data](/static/assets/embedded/visualizing-data/working-with-widgets/images/widget_action_view_data.png)






