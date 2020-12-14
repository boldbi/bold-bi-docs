---
layout: post
title: Auto-Saving Filters in Dashboard – Cloud BI | Bold BI Docs
description: Learn how to enable/disable auto-saving the filters applied at runtime in a dashboard in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Auto-save the filters of the dashboard

The filters applied in the dashboard can be saved automatically and the dashboard can be rendered with the last applied filters using the auto-save filter option.

## The following steps explains how Auto-save filter works

1. Enable `Auto-save filter` and disable the `default-views` as shown in the following image.

    ![Auto save filter enabled](/static/assets/cloud/site-administration/images/auto-save.png)

2. Open a dashboard.

3. Apply any filter and view the dashboard.

    ![Apply filter](/static/assets/cloud/site-administration/images/apply-filter.png)

4. Again open the dashboard, the dashboard will be rendered with the last applied filter to the dashboard.

    ![Applied filter](/static/assets/cloud/site-administration/images/applied-filter.png)

The auto-save filters can be controlled by both the administrator and the user. The following section explains the same. 

## Administrator control over auto-save filters

The administrator can control the auto-save filters of the dashboard globally using the Dashboard Settings tab in the settings page. If the administrator has enabled the `Auto-save filter` in the Dashboard Settings page, then the user can control the action of saving the filters applied to the dashboard in the profile page.

![Auto save filter enabled](/static/assets/cloud/site-administration/images/auto-save-settings.png)

## User control over auto-save filters

The user can control the auto-save filters of the dashboards using the Dashboard Settings in the user profile page. If the administrator has restricted, then the user cannot control the action of saving the filters applied to the dashboard.

![Auto save filter disabled](/static/assets/cloud/site-administration/images/auto-save-disabled.png)

> **NOTE:** If a dashboard has default views, it will not be rendered with the last applied filter in the dashboard. Hence, `Default Views` must be disabled in the Dashboard Settings page.
