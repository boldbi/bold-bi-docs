---
layout: post
title: Guide to Track User Activity Across Tenants | Bold BI Docs
description: Learn how to track user activity across tenants in Bold BI using Audit Logs, enabling administrators to monitor actions for improved security.
platform: bold-bi
documentation: ug
---

# Activity Logs

The Audit Logs page allows administrators to track and review various user actions and changes within the system for all tenants, including activities specific to the UMS (User Management System) page. This comprehensive view helps maintain accountability and transparency by providing a detailed record of who performed what actions and when. The logs contain information about each activity, including the **User, Date and Time, Event Category, Event Type, Summary** and any associated Details.

> **Note:** The Audit Logs are visible only to admin users. They include records for all tenants within the system and UMS activities, ensuring a complete overview of user actions and system changes across different environments.

   ![Activity Logs](/static/assets/multi-tenancy/images/activity-logs.png#width=60%)

### How to Filter and View Activity Logs

1. Open the **Date Picker** Calendar to select a specific date range. Select the certain date range you want to filter.

   ![Audit Logs Date Range](/static/assets/multi-tenancy/images/activity-log-date-range-dialog.png#width=40%)

2. Click the `Apply` option to apply that date range.

   ![Audit Logs Date Range Apply](/static/assets/multi-tenancy/images/activity-logs-date-range-apply.png#width=40%)

3. Open the `Event Category` drop-down and select the desired category to filter logs. Options include User, Permissions, and Settings. Choosing a category helps narrow down the log entries to only those that fall under that specific category.
   
   ![Event Category Dropdown](/static/assets/multi-tenancy/images/activity-event-category.png#width=40%)

4. Open the `Event Type` drop-down and choose the specific type of event you want to filter. Options include Added, Updated, and Deleted. This allows you to view only the actions of a specific type within the chosen category.  

   ![Event Type Dropdown](/static/assets/multi-tenancy/images/activity-event-type.png#width=40%)

5. Finally, click the `Apply` link button to see the audit activity logs for the selected date range and event.

   ![Audit Logs Apply](/static/assets/multi-tenancy/images/activity-apply-button.png#width=45%)

6. Click the `Clear` button to remove all applied filters, resetting the view to display all activity logs without any filtering criteria.

   ![Logs Clear](/static/assets/multi-tenancy/images/activity-log-clear.png#width=40%)

7. Click the `Refresh` button to update the logs and view the most recent entries.  

   ![Logs Refresh](/static/assets/multi-tenancy/images/activity-log-refresh.png#width=40%)

### Viewing Detailed Log Information

1. Click the `View` button on an activity log entry to open a dialog box displaying more detailed information about that specific  log. The dialog box includes data such as the exact changes made, the user involved, and a timestamp. 

   ![Activity Logs view](/static/assets/multi-tenancy/images/activity-log-view.png#width=80%)
   ![Activity Log Details](/static/assets/multi-tenancy/images/activity-log-view-details.png#width=40%)