---
layout: post
title: Auto-Saving Filters in Dashboard – Embedded BI | Bold BI Docs
description: Learn how to enable/disable auto-saving the filters applied at runtime in a dashboard in Bold BI Embedded.
canonical: "/site-administration/dashboard-settings/auto-save-filter/"
platform: bold-bi
documentation: ug
---

# Auto-save the filters of the dashboard

The filters applied in the dashboard can be saved automatically, and the dashboard can be rendered with the last applied filters using the auto-save filter option.

## The following steps explains how Auto-save filter works

1. Enable the `Auto-save filter` and disable the `default views` as shown in the image.

    ![Auto save filter enabled](/static/assets/site-administration/images/auto-save.png)

2. Open a dashboard.

3. Apply any filter and view the dashboard.

    ![Apply filter](/static/assets/site-administration/images/apply-filter.png#width=65%)

4. Open the dashboard again, and it will be rendered with the last applied filter.

    ![Applied filter](/static/assets/site-administration/images/applied-filter.png#width=65%)

The auto-save filters can be controlled by both the administrator and the user. The following sections explain how:

## Administrator control over auto-save filters

The administrator can globally control the auto-save filters of the dashboard using the Dashboard Settings tab on the settings page. If the administrator enables the `Auto-save filter` in the Dashboard Settings page, the user can control the action of saving the filters applied to the dashboard on the profile page.

![Auto save filter enabled](/static/assets/site-administration/images/auto-save-settings.png)

## User control over auto-save filters

The user can control the auto-save filters of the dashboards using the Dashboard Settings on the user profile page. If the administrator has restricted the option, the user cannot control the action of saving the filters applied to the dashboard. For more details, please visit [here](/managing-resources/user-profile/#dashboard-settings).

> **NOTE:** If a dashboard has default views, it will not be rendered with the last applied filter. Therefore, `Default views` must be disabled in the Dashboard Settings page.
