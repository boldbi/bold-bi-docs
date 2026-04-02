---
layout: post
title: Commenting on Dashboards – Embedded BI | Bold BI Learning
description: Learn how to enable commenting in a dashboard to collaborate with your team through user mentions in Bold BI Embedded.
canonical: "/working-with-dashboards/commenting-dashboard/"
platform: bold-bi
documentation: ug

---

# Collaborate with your team by enabling comments in dashboard

You can comment on a dashboard on the site. You can toggle this setting by selecting the `Enable Commenting` option in the properties tab of the dashboard.

## Commenting a dashboard

1. To enable comments on a dashboard, open the dashboard in design mode, go to the `Properties Tab` and enable the `Enable Commenting` option. This option is enabled by default.

    ![Enable Comments for Dashboard](/static/assets/working-with-dashboards/images/commenttinganddashboardwidget_dashboardmenu.PNG)

2. Once it is enabled and the dashboard is published, you could be able to see the dashboard comment icon in the view mode of dashboard.

    ![Comments for Dashboard in view mode](/static/assets/working-with-dashboards/images/comment_in_viewmode.png)

3. This feature promotes real-time discussions, enabling better decision-making and collaboration directly in the context of the data.

4. In Bold BI, users and groups with at least read permission for a specific dashboard will appear in the suggestion list when typing the “@” symbol in the comment section of a dashboard or widget. This feature facilitates effective team communication and collaboration by allowing users to tag relevant individuals or groups.

    ![Tag user in comments of Dashboard](/static/assets/working-with-dashboards/images/tag_user_dashboard_comment.png)

5. Users or groups without read permission for the dashboard will not appear in the suggestion list, ensuring suggestions are restricted to relevant participants.
    * For public dashboards:
         - All users and groups matching the search key will be shown in the suggestion list, even if they lack permission for the dashboard.
    * For private dashboards:
         - The suggestion list will include only users with direct permission for the dashboard. Users in groups that have read permission for the dashboard will not appear in the list unless granted direct access.


> **NOTE:**  Bold BI support commenting option for individual widgets, please refer to [documentation](https://help.boldbi.com/visualizing-data/working-with-widgets/commenting-widget/) for more details.
