---
layout: post
title: Track Email Activity using Logs in UMS | Bold BI Doc
description: Learn how to use email activity logs in the User Management to track if emails were successfully sent to recipients and monitor delivery status.
platform: bold-bi
documentation: ug
---

# Email Activity Logs in User Management Server

The email activity logs allow us to track whether the email was sent to the recipients or not. The logs contain information about each email, including the **sender and recipient, date and time, status, and any associated error messages**.

You can view the details of the email activity logs by clicking the `Logs` tab on the Email Settings page in User Management Server.

> **NOTE:**  These email activity logs only show the status of whether the email was sent from the User Management Server to your SMTP configured server or not. If an email is sent from Bold BI to your SMTP server but the SMTP server is unable to deliver the email to the recipient, then the logs will not be shown here.
	
![Email Activity Logs](/static/assets/multi-tenancy/images/email-activity-logs.png#width=55%)

To view email logs for a specific event and date, follow these steps:

1. Open the Email Event drop-down and select any of the events you want. The default event is `All Event`.

    ![Email Event Dropdown](/static/assets/multi-tenancy/images/email-event-dropdown.png#width=40%)

2. Open the **Date Picker** Calendar to select a specific date range. Select the certain date range you want to filter.

    ![Email Logs Date Range](/static/assets/multi-tenancy/images/email-log-date-range-dialog.png#width=40%)

3. Click the `Apply` option to apply that date range.

    ![Email Logs Date Range Apply](/static/assets/multi-tenancy/images/email-logs-date-range-apply.png#width=40%)

4. Finally, click the `Apply` link button to see the email activity logs for the selected date range and event.

    ![Email Logs Apply](/static/assets/multi-tenancy/images/email-logs-apply.png#width=45%)

5. If you prefer, you can choose a predefined date range in the date range dialog box.

    ![Email Logs PreSet Range](/static/assets/multi-tenancy/images/email-logs-preset-range.png#width=40%)