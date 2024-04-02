---
layout: post
title: Webhook Failure Handling and Logs – Embedded BI | Bold BI Docs
description: Learn how to handle webhook failures and how to read failure logs, which can be used to determine the cause of a webhook failure in Bold BI application.
platform: bold-bi
documentation: ug
---
# Webhook Failure Handling

## Webhook retry

The webhook is sent up to five times by the retry mechanism before failing with exponential backoff.

## Automatic Webhook Deactivation

If a webhook fails 20 times in a row, it updates the failure log and deactivates the webhook.

## Webhook Failure Logs

Webhook failure logs contain details about failed webhook attempts. If a webhook fails, you can examine the failure logs by clicking the `Failure Logs` tab on the Integration Settings page.

	
![Webhook Failure Logs](/static/assets/site-administration/images/webhook-failure-logs.png#width=60%)

To view webhook failure logs for a specific event and date, follow these steps:

1. Open the dropdown highlighted below and select any of the events you want. By default, all webhook event failure logs will be shown.

    ![Webhook Event Dropdown](/static/assets/site-administration/images/webhook-event-dropdown.png#width=50%)

2. Open the **Date Picker** Calendar to select a specific date range. Select the certain date range you want to filter. Click the `Apply` option to apply that date range.

    ![Webhook Failur Logs Date Range](/static/assets/site-administration/images/webhook-failure-log-date-range-dialog.png#width=50%)

3. Finally, click the `Apply` link button to see the webhook failure logs for the selected date range and event.

    ![Webhook Failure Logs Apply](/static/assets/site-administration/images/webhook-failure-logs-apply.png#width=50%)

4. If you want, you can choose a predefined date range in the date range dialog box.

    ![Webhook Failure Logs PreSet Range](/static/assets/site-administration/images/webhook-failure-logs-preset-range.png#width=50%)

5. You can reset the given date range by clicking the `Reset` in the dialog box. It will reset the dates you have selected.

    ![Webhook Failure Logs Reset](/static/assets/site-administration/images/webhook-failure-logs-reset.png#width=50%)
	
6. You can see detailed failure log details by clicking the `View` link option in the grid. It will display the Request Details of the webhook call as well as the Response Details received.

    ![Webhook Failure Logs View](/static/assets/site-administration/images/webhook-failure-logs-view.png#width=50%)

    ![Webhook Failure Logs Details](/static/assets/site-administration/images/webhook-failure-logs-details.png)