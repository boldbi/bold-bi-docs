---
layout: post
title: Guide to Track User Activity for Single Tenant | Bold BI Docs
description: Learn how to use Bold BI to monitor user activity for a single tenant, ensure security, compliance, and audit readiness with detailed insights for administrators.
platform: bold-bi
documentation: ug
---

# Activity Logs

The Audit Logs page allows administrators to track and review various user actions and changes within the system for a particular tenant. These logs help maintain accountability and transparency by providing a record of who performed what actions and when. The logs contain details about each activity, including the **User, Date and Time, Event Category, Event Type, Summary** and any associated Details.

> **NOTE:** This activity logs is applicable only for On-Premises Deployment.

   ![Activity Logs](/static/assets/site-administration/images/activity-logs.png#width=40%)

> **Note:** The Audit Logs are only visible to admin users. The settings and actions displayed in the logs are tenant-specific, meaning each tenant will only see activities relevant to their environment.

### How to Filter and View Activity Logs

1. Open the **Date Picker** Calendar to select a specific date range. Select the certain date range you want to filter.

   ![Audit Logs Date Range](/static/assets/site-administration/images/activity-log-date-range-dialog.png#width=40%)

2. Click the `Apply` option to apply that date range.

   ![Audit Logs Date Range Apply](/static/assets/site-administration/images/activity-logs-date-range-apply.png#width=40%)

3. If you prefer, you can choose a predefined date range in the date range dialog box.

   ![Audit Logs PreSet Range](/static/assets/site-administration/images/activity-logs-preset-range.png#width=40%)

4. You can reset the given date range by clicking the `Reset` in the dialog box. This will reset the dates you have selected.

   ![Audit Logs Reset](/static/assets/site-administration/images/activity-logs-reset.png#width=40%)

5. Open the `Event Category` drop-down and select the desired category to filter logs. Options include User, Permissions, and Settings. Choosing a category helps narrow down the log entries to only those that fall under that specific category.
   
   ![Event Category Dropdown](/static/assets/site-administration/images/activity-event-category.png#width=40%)

6. Open the `Event Type` drop-down and choose the specific type of event you want to filter. Options include Added, Updated, and Deleted. This allows you to view only the actions of a specific type within the chosen category.  
   
   ![Event Type Dropdown](/static/assets/site-administration/images/activity-event-type.png#width=40%)

7. Finally, click the `Apply` link button to see the audit activity logs for the selected date range and event.

   ![Audit Logs Apply](/static/assets/site-administration/images/activity-apply-button.png#width=45%)

8. Click the `Clear` button to remove all applied filters, resetting the view to display all activity logs without any filtering criteria.

   ![Logs Clear](/static/assets/site-administration/images/activity-log-clear.png#width=40%)

9. Click the `Refresh` button to update the logs and view the most recent entries.

   ![Logs Refresh](/static/assets/site-administration/images/activity-log-refresh.png#width=40%)

### Viewing Detailed Log Information

1. Click the `View` button on an activity log entry to open a dialog box displaying more detailed information about that specific log. The dialog box includes data such as the exact changes made, the user involved, and a timestamp.  

   ![Activity Logs view](/static/assets/site-administration/images/activity-log-view.png#width=80%)
   ![Activity Logs View Details](/static/assets/site-administration/images/activity-log-view-details.png#width=10%)


Please refer to the [UMS link](/multi-tenancy/site-administration/audit-logs/) to learn more about activity logs.