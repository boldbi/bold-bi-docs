---
layout: post
title: Automatic Refresh on Dashboards – Embedded BI | Bold BI
description: Learn how to enable automatic refresh of dashboard at scheduled intervals to get latest data in Bold BI Embedded.
canonical: "/working-with-dashboards/preview-dashboard/refresh-dashboard/"
platform: bold-bi
documentation: ug

---

# Refresh Dashboard

Bold BI allows you to configure the scheduled refresh of a dashboard. Either the entire dashboard or specific widgets within a dashboard can be automatically refreshed based on a timer.

## How to enable automatic refresh for a dashboard?

To enable automatic refresh for a dashboard:

Open the dashboard for which automatic refresh needs to be scheduled.

Click on the `Refresh Settings` option in the toolbar to open the `Refresh Settings` dialog.

Select `Enable Autorefresh` and click `OK`.

![Refresh setting](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting.png)

## How to set the timer for automatic refresh at common time interval?

Automatic refresh at a common time interval will be set to 30 seconds by default. To set a different time interval,

Please select `Enable Autorefresh` in the `Refresh Settings` dialog.

Next, choose `Common Time Interval` in the dialog.

Set the time interval to a minimum of `30 seconds`. Then, click `OK`.

![Common time interval](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_timeinterval.png)

## How to enable automatic refresh at common time interval for particular widgets in a dashboard?

Automatic refresh at a `Common Time Interval` for specific widgets can be configured through the `Refresh Settings` dialog.

Select `Enable Autorefresh` in the dialog.

Select `Common Time Interval` in the dialog.

Select `Refresh Selected Widgets Only`. This will enable the widgets listed below to be refreshed.

Select the widgets that you want to be automatically refreshed. Click `OK`.

![Selected widget](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_selectedwidget.png)

## How to enable automatic refresh at differed time interval for particular widgets in a dashboard?

Automatic refresh at `Differed Time Interval` for specific widgets can be configured through the `Refresh Settings` dialog.

Select `Enable Autorefresh` in the dialog.

Choose a `Different time interval` in the dialog. This will activate the list of widgets below it.

Select the widgets that you want to be refreshed automatically. A time interval will be enabled for each selected widget.

The default interval is set to `30 seconds`. You can adjust the time interval, which can range from a minimum of 30 seconds. Click `OK`.

![Differed time interval](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_differedtimeinterval.png)

## How to enable automatic refresh only for any record insertion or deletion in the associated database?

Automatic refresh will keep track of changes in data, even if it is an update to an existing record. To refresh only on new insertions or deletions of records, 

select `Enable Autorefresh` in the dialog.

Select `Refresh Selected Widgets Only` at `Common Time Interval` if required. This will enable the widgets listed below to automatically refresh at a common time. Select the widgets that you need to be refreshed automatically.

Similarly, select `Different Time Interval` if required. This will enable the widgets listed below it. Select the widget and set the time for it to be refreshed automatically.

Select `Refresh Only for Insertion or Deletion of Rows` and click `OK`.

![Insert or delete rows](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_insertionordeletingofrows.png)

## How to hide loading indicator for automatic refresh?

Select `Enable Autorefresh` in the dialog.

Select `Hide Loading Indicator` to hide the loading indicator while refreshing widgets based on the `Common Time Interval` or `Diferred Time Interval`. Click `OK`.

![Hide loading indicator](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsettingloadingindicator.png)

## Refresh time updation in UI.

1. In dashboard banner:

    The refresh time will be updated on the dashboard banner as follows:

    ![Banner level view](/static/assets/working-with-dashboards/preview-dashboards/images/bannerpanel_refreshtime.png)

    The refresh time will be updated in the dashboard banner when the refresh setting is configured as follows:

    * When the `Common Time Interval` is active and the `Refresh Selected Widgets Only` option is disabled.

      ![Common time interval](/static/assets/working-with-dashboards/preview-dashboards/images/common_timeinterval.png)

    * When the `Common Time Interval` is active, the `Refresh Selected Widgets Only` option is enabled, and all of the widgets are selected.

      ![Select all widgets](/static/assets/working-with-dashboards/preview-dashboards/images/select_allwidgets.png)

2. In widget header:

    The refresh time will be updated on the widget header as follows:

    ![Widget level view](/static/assets/working-with-dashboards/preview-dashboards/images/widgetlevel_refreshtime.png)

    The refresh time on the widget header will be updated when the refresh setting is configured as follows:

    * When the `Differed Time Interval` option is enabled.

      ![Differed time interval](/static/assets/working-with-dashboards/preview-dashboards/images/differed_timeinterval.png)

    * When the `Common Time Interval` is active and the `Refresh Selected Widgets Only` option is enabled, but not all of the widgets are selected.

      ![Select particular widgets](/static/assets/working-with-dashboards/preview-dashboards/images/select_particularwidgets.png)

 > **NOTE:** This functionality will only work on BoldBI version 6.19 or higher.