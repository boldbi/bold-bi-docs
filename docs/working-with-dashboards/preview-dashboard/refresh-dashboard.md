---
layout: post
title: Automatic Refresh on Dashboards – Embedded BI | Bold BI
description: Learn how to enable automatic refresh of dashboard at scheduled intervals to get latest data in Bold BI Embedded.
canonical: "/working-with-dashboards/preview-dashboard/refresh-dashboard/"
platform: bold-bi
documentation: ug

---

# Refresh Dashboard

Bold BI allows you to configure the scheduled refresh of dashboard. Either the whole dashboard or specific widgets in a dashboard can be refreshed automatically based on a timer.

## How to enable automatic refresh for a dashboard?

To enable auto refresh for a dashboard, 

Open a dashboard for which automatic refresh need to be scheduled.

Click the `Refresh Settings` option in the tool bar to open the `Refresh Settings` dialog.

Select `Enable Autorefresh`. Click `OK`.

![Refresh setting](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting.png)

## How to set the timer for automatic refresh at common time interval?

Automatic refresh at `Common Time Interval` will be 30 seconds by default. To set a different time interval, 

Select `Enable Autorefresh` in `Refresh Settings` dialog.

Select `Common Time Interval` in the dialog.

Set the time interval ranging from a minimum of `30 seconds`. Click `OK`.

![Common time interval](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_timeinterval.png)

## How to enable automatic refresh at common time interval for particular widgets in a dashboard?

Automatic refresh at `Common Time Interval` for particular widgets alone can be configured through `Refresh Settings` dialog.

Select `Enable Autorefresh` in the dialog.

Select `Common Time Interval` in the dialog.

Select `Refresh Selected Widgets Only`. This will enable the widgets list below to it.

Select the widgets that you need to get refreshed automatically. Click `OK`.

![Selected widget](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_selectedwidget.png)

## How to enable automatic refresh at differed time interval for particular widgets in a dashboard?

Automatic refresh at `Differed Time Interval` for particular widgets alone can be configured through `Refresh Settings` dialog.

Select `Enable Autorefresh` in the dialog.

Select `Differed time interval` in the dialog. This will enable the list of widgets below it.

Select the widgets that you need to get refreshed automatically. Time interval will be enabled for each selected widget.

The default interval is set to `30 seconds`. Adjust the time interval, which can range from a minimum of 30 seconds. Click `OK`.

![Differed time interval](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_differedtimeinterval.png)

## How to enable automatic refresh only for any record insertion or deletion in the associated database?

Automatic refresh will keep track of changes in data even it is an update to existing record. To refresh only on new insertion or deletion of records,

Select `Enable Autorefresh` in the dialog.

Select `Refresh Selected Widgets Only` at `Common Time Interval` if required. This will enable the widgets list below to it. Select the widgets that you need to get refreshed at a common time automatically.

Similarly, select `Differed Time Interval` if required. This will enable the widgets listed below it. Select the widget and set the time to get refreshed automatically.

Select `Refresh Only for Insertion or Deletion of Rows`. Click `OK`.

![Insert or delete rows](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsetting_insertionordeletingofrows.png)

## How to hide loading indicator for automatic refresh?

Select `Enable Autorefresh` in the dialog.

Select the `Hide Loading Indicator` to hide the loading indicator while refreshing widgets based on the `Common Time Interval` or `Differed Time Interval`. Click `OK`.

![Hide loading indicator](/static/assets/working-with-dashboards/preview-dashboards/images/refreshsettingloadingindicator.png)