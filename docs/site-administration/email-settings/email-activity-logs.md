---
layout: post
title: Track email activity using logs – Embedded BI | Bold BI Docs 
description: Learn about email activity logs, which help us track whether emails were sent to the recipients or not in Bold BI for its activities.
platform: bold-bi
documentation: ug
---

# Email Activity Logs

The email activity logs allow us to track whether the email was sent to the recipients or not. Logs contain information about each email, including the **sender and recipient, date and time, status, and any associated error messages**.

You can see the details of the email activity logs by clicking the `Logs` tab on the Email Settings page.

> **NOTE:**  This email activity logs only show the status of whether the email was sent from the Bold BI server to your SMTP configured server or not. If an email is sent from the Bold BI to your SMTP server, but the SMTP server is unable to deliver the email to the recipient, then the logs will not be shown here. This settings option is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.
	
![Email Activity Logs](/static/assets/site-administration/images/email-activity-logs.png#width=55%)

You can view email logs for a specific event and date by following the steps:

1. Open the Email Event drop-down and select any of the events you want. The default event is `All Event`.

    ![Email Event Dropdown](/static/assets/site-administration/images/email-event-dropdown.png#width=40%)

2. Open the **Date Picker** Calendar to select a specific date range. Select the certain date range you want to filter.

    ![Email Logs Date Range](/static/assets/site-administration/images/email-log-date-range-dialog.png#width=40%)

3. Then, to apply that date range, click the `Apply` option.

    ![Email Logs Date Range Apply](/static/assets/site-administration/images/email-logs-date-range-apply.png#width=40%)

4. Finally, click the `Apply` link button to see the email activity logs for the selected date range and event.

    ![Email Logs Apply](/static/assets/site-administration/images/email-logs-apply.png#width=45%)

5. If you want, you can choose a predefined date ranger in the date range dialog box.

    ![Email Logs PreSet Range](/static/assets/site-administration/images/email-logs-preset-range.png#width=40%)

6. You can reset the given date range by clicking the `Reset` in the dialog box. It will reset the dates you have selected.

    ![Email Logs Reset](/static/assets/site-administration/images/email-logs-reset.png#width=40%)