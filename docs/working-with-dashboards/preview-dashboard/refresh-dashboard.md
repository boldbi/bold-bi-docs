---
layout: post
title: Automatic Refresh on Dashboards – Embedded BI | Bold BI
description: Learn how to enable automatic refresh of dashboard at scheduled intervals to get latest data in Bold BI Embedded.
canonical: "/cloud-bi/working-with-dashboards/preview-dashboard/refresh-dashboard/"
platform: bold-bi
documentation: ug
---

# Refresh Dashboard

Bold BI allows you to configure the scheduled refresh of dashboard. Either the whole dashboard or specific widgets in a dashboard can be refreshed automatically based on a timer.

## How to enable automatic refresh for a dashboard?

To enable auto refresh for a dashboard, 

Open a dashboard for which automatic refresh need to be scheduled.

Click the `Refresh Settings` option in the tool bar to open the `Refresh Settings` dialog.

Select `Enable Autorefresh`. Click `Apply`.

![Refresh setting](/static/assets/embedded/working-with-dashboards/preview-dashboards/images/refreshsetting.PNG)

## How to set the timer for automatic refresh?

Time Interval for automatic refresh will be 30 seconds by default. To set a different time interval, 

Select `Enable Autorefresh` in `Refresh Settings` dialog.

Set the time interval ranging from a minimum of `30 seconds`. Click `Apply`.

![Time interval](/static/assets/embedded/working-with-dashboards/preview-dashboards/images/refreshsetting_timeinterval.PNG)

## How to enable automatic refresh for particular widgets in a dashboard?

Automatic refresh for particular widgets alone can be configured through `Refresh Settings` dialog.

Select `Enable Autorefresh` in the dialog.

Select `Refresh Selected Widgets Only`. This will enable the widgets list below to it.

Select the widgets that you need to get refreshed automatically. Click `Apply`.

![Selected widget](/static/assets/embedded/working-with-dashboards/preview-dashboards/images/refreshsetting_selectedwidget.PNG)

## How to enable automatic refresh only for any record insertion or deletion in the associated database?

Automatic refresh will keep track of changes in data even it is an update to existing record. To refresh only on new insertion or deletion of records,

Select `Enable Autorefresh` in the dialog.

Select `Refresh Selected Widgets Only` if required. This will enable the widgets list below to it. Select the widgets that you need to get refreshed automatically. 

Select `Refresh Only for Insertion/Deletion of Rows`. Click `Apply`.

![Insert or delete rows](/static/assets/embedded/working-with-dashboards/preview-dashboards/images/refreshsetting_insertionordeletingofrows.PNG)

