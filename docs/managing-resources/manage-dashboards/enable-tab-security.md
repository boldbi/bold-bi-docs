---
layout: post
title: Restrict Access to Tabs in Multi-tab Dashboard | Bold BI Docs
description: Learn how to grant a multi-tab dashboard's tabs restricted access with a specified permission and view those tabs in Bold BI application.
canonical: "/managing-resources/manage-dashboards/enable-tab-security/"
platform: bold-bi
documentation: ug
---

# Multitab Tab Security

This section explains how to enable tab-level security, which restricts tab visibility to users with the individual dashboard permission when dashboards are added as tabs.

> **NOTE:**  All tabs will be visible to the dashboard owner and administrators. Public dashboards added as tabs will also be visible.

### Enable Tab Security

1.  By default, all child dashboards (tabs) will be visible in the multitab if the user has access to a multitab dashboard.

2.  Click the Multitab Dashboard context menu and select `Tab Security`.

    ![Tab Security Menu](/static/assets/managing-resources/manage-dashboards/images/tab-security-menu.png)

3.  Now, `Enable` the tab-level security checkbox and click `Save`.

    ![Get Security Dialog](/static/assets/managing-resources/manage-dashboards/images/enable-tab-security.png)

4. Once you enable this feature, the individual dashboard will only render based on its permissions within the multitab dashboard.

    ![Multitab dashboard render](/static/assets/managing-resources/manage-dashboards/images/individual-dashboard-render.png)

    If there are no permissions granted for all the individual dashboards, an access denied page will be displayed.

    ![Access Denied Page](/static/assets/managing-resources/manage-dashboards/images/enabled-tab-security-render.png)


