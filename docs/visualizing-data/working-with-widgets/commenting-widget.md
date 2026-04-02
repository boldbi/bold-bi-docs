---
layout: post
title: Commenting in Widget – Embedded BI | Bold BI Documentation
description: Learn how to add comment to a widget and collaborate with your team through user mentions in Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/commenting-widget/"
platform: bold-bi
documentation: ug
---

# Collaborate with your team by enabling comments in the Widgets

You can comment on individual widgets on the site. You can toggle the `Enable Comments` option in the properties tab of individual widgets.

## Commenting a widget

1. To enable comment for specific widget of dashboard, open the dashboard in design mode, click on the specific widget and go to the `Properties Tab`, select `Enable Comments` under the `Container Actions` section. This option is enabled by default.

    ![Enable Comments for Widgets](/static/assets/visualizing-data/working-with-widgets/images/enable-comment.png)

2. Once it is enabled and the dashboard is published, you could be able to see the comment icon in respective widget.

    ![Comments for Dashboard in view mode](/static/assets/visualizing-data/working-with-widgets/images/comment_in_viewmode.png)

3. This feature promotes real-time discussions, enabling better decision-making and collaboration directly in the context of the data.

4. In Bold BI, users and groups with at least read permission for a specific dashboard will appear in the suggestion list when typing the “@” symbol in the comment section of a dashboard or widget. This feature facilitates effective team communication and collaboration by allowing users to tag relevant individuals or groups.

    ![Tag user in comments of Dashboard](/static/assets/visualizing-data/working-with-widgets/images/tag_user_dashboard_comment.png)

5. Users or groups without read permission for the dashboard will not appear in the suggestion list, ensuring suggestions are restricted to relevant participants.
    * For public dashboards:
         - All users and groups matching the search key will be shown in the suggestion list, even if they lack permission for the dashboard.
    * For private dashboards:
         - The suggestion list will include only users with direct permission for the dashboard. Users in groups that have read permission for the dashboard will not appear in the list unless granted direct access.


> **NOTE:**  Label widgets do not have commenting support.
