---
layout: post
title: Managing Schedules – Cloud BI | Bold BI Documentation
description: Learn how to create, edit, enable/disable, delete schedules and send schedule emails to distribution list in Bold BI Cloud. 
platform: bold-bi
documentation: ug
---

# Manage Schedules in the Bold BI  	

This section explains how to add, edit, and delete the schedules and also to run the schedules on-demand, enable or disable schedules, and show schedule run history in the Bold BI.

Schedules' page displays the schedules that are accessible by the user depending on the user’s permission.

![Manage Schedules](/static/assets/cloud/managing-resources/images/manage-schedules.png)

## Add Schedules
Schedules can be created only if the user has `Create All Schedules` permission. Schedules can be created in two ways,
	
	1.Add schedule from `+` button in the left side menu.
	
	2.Add schedule from context menu of the respective dashboards.
	
### Add schedule from `+` button menu

* Click on the `+` button in the left side menu and choose `Schedule` under `Create` to add a Schedule.

	![Choose Schedule](/static/assets/cloud/managing-resources/images/choose-schedule.png)

* Select the required category from `Category` dropdown. After selecting the category, corresponding dashboards under that selected category will be displayed in the `Dashboard` dropdown,

	![Select Category](/static/assets/cloud/managing-resources/images/select-category.png)

* Select the required dashboard from the dropdown.

	![Select dashboard](/static/assets/cloud/managing-resources/images/select-dashboard.png)

### Add schedule from context menu of the respective dashboards

* Click on `Actions` button in the dashboards grid context menu and select `Create Schedule` to schedule the corresponding dashboard.

	![Create Schedule](/static/assets/cloud/managing-resources/images/create-schedule.png)

* Once dialog was opened, the category and dashboard values are selected by default,

	![Default Values](/static/assets/cloud/managing-resources/images/category-dashboard-preselect.png)

> **NOTE:**  Categories or Dashboards can be changed from schedule dialog box itself.

* After adding schedule details, click `Next` in the schedule dialog.

## Customizing schedule email Content
	
* Customize the mail content that needs to be sent during the schedule.

* The schedule mail content page will have default content as shown in the following image.

  ![Default Schedule Mail](/static/assets/cloud/managing-resources/images/default-mail-content.png#width=85%)

* Use the default mail subject or customize it using the variables available in the drop-down next to the subject field. Once you select a variable from the variables drop-down, the default subject content will get reset.

  ![Customize Mail Subject](/static/assets/cloud/managing-resources/images/customize-mail-subject.png#width=85%)

* Customize the mail body content and enhance it by using bold, italic, points, numbers, font size, code, and quotation options as shown in the following images.

  ![Customize Mail Content](/static/assets/cloud/managing-resources/images/customize-mail-content.png#width=85%)

  ![Bold Style and Points](/static/assets/cloud/managing-resources/images/schedule-mail-bold-points.png)

* Insert images and links if needed.

  ![Insert Image and Links](/static/assets/cloud/managing-resources/images/schedule-insert-image-links.png)

* With the help of the `preview` option,visualize the actual mail format while scheduling and `reset` if you need to restore to the default content.

  ![Preview and Reset](/static/assets/cloud/managing-resources/images/schedule-preview-reset.png)

* After customizing the mail content, click `Next` in the schedule dialog.

  ![Customize Page Next](/static/assets/cloud/managing-resources/images/schedule-next-btn.png) 

* Select the recurrence type, recurrence, start and end dates, export formats and the users to which the exported dashboards and failure notification have to be emailed in the `Add Schedule` dialog box.
	* Dashboards can be scheduled hourly, daily, weekly, monthly, and yearly.
	* Dashboards can be exported as image, PDF, and Excel.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to client Time Zone and shown in the right side for the user’s convenience 
	* Exported dashboards can be sent to individual users or groups or to external recipients along with the link the dashboard in the Bold BI through emails.
	
	![Choose Next](/static/assets/cloud/managing-resources/images/choose-next.png)
	![Add Schedule](/static/assets/cloud/managing-resources/images/add-schedule.png)

* When clicking on `Schedule`, the dashboard is scheduled in the selected recurrence.

> **NOTE:**  `Read Write Delete` permission for that `Specific Schedule` is added to the users by the person who created the schedule.

## Sending Schedule emails to Distribution list
Yes, we do support sending schedule emails to distribution list. You can configure the distribution list in the schedule recipient list as in the below two ways
	
1. We can add the distribution email directly in the external recipient option as below.
![Send Schedule](/static/assets/cloud/managing-resources/images/add-external-recipients.png)

2. We can add the new user with the distribution list email and add the user as a recipient to send the emails to the users in the distribution list.

## Sending Schedule failure notification to the owner and recipients
Supports sending schedule failure notification to schedule owner and recipients. After schedule export failure, the notification can be sent to the owner and recipients with a failure error message by an email.

![Schedule Failure Notification](/static/assets/cloud/managing-resources/images/failure-notification.png)

And also, Bold BI application deactivates the export schedule after limited consecutive failures and send the disable notification to the owner and recipients.

## Configure Schedule with Export Format
You can configure the export formats in the schedule.

![Schedule Image Export](/static/assets/cloud/managing-resources/images/export-image.png)

## Other Destination Schedule Export
You can export the dashboards to the FTP location by configuring the FTP credentials while scheduling the dashboard export.

![Schedule Location Export](/static/assets/cloud/managing-resources/images/ftp-location.png)

### Webhook Notification
You can send a webhook notification for an export schedule or data alert by selecting the created webhook in `Other Destinations` section.

![Select Webhook](/static/assets/cloud/managing-resources/images/webhook-notification.png)

#### Steps to configure webhook when adding or editing schedules

1. Select previously created webhooks from the Webhook list dropdown.

	![Select Webhook](/static/assets/cloud/managing-resources/images/select-webhook.png)

2. If you haven't created any webhooks, you can create them by clicking the `Create` option. This will open the `Add Webhook` page in a new tab Please visit [Manage Webhook](/embedded-bi/webhook/) for how to add webhook.

	![Create Webhook](/static/assets/cloud/managing-resources/images/create-webhook.png)

3. After creating the webhook, you need to click the `Refresh` option for the created webhook to appear in the dropdown.

	![Refresh Webhook](/static/assets/cloud/managing-resources/images/refresh-webhook.png)

4. After selecting any of the webhooks, you can see the selected webhook endpoint with request content type details in the info message section.

	![Configuration Message](/static/assets/cloud/managing-resources/images/webhook-configuration-message.png)

5. When running the schedule, Bold BI will call the webhook endpoint you selected with the selected or all payload data. Click [here](/cloud-bi/webhook/webhook-payload/) to learn more about what is the payload data sent to a webhook call.

> **NOTE:**  Time Driven Dashboard Export event webhook get listed only for the normal schedule, and Alert Driven Dashboard Export event webhook get listed only for data alert schedule.

## Edit Schedules
Category, dashboard, name, recurrence type, recurrence, start and end dates, export format and the recipients can be changed in the `Edit Schedule` dialog box.
	
## Run Now
Schedules can be made to run on demand by using `Run Now` option in the schedule grid context menu. Dashboard get exported in the format specified and sent to the recipients along with the link the dashboard in the Bold BI through emails.

![Run Now Schedule](/static/assets/cloud/managing-resources/images/run-now-schedule.png)

## Run History
You can see the schedule run history information of corresponding schedule in the `Run History` option in the schedule grid context menu.

![Run History](/static/assets/cloud/managing-resources/images/run-history.png)
![Run History Info](/static/assets/cloud/managing-resources/images/run-history-info.png)

And, also you can see the failure information by clicking the failed link in run history dialog.

![Schedule Failure Info](/static/assets/cloud/managing-resources/images/schedule-failure-info.png)

## Enable or Disable Schedule
Schedules can be disabled at any time, which ignores any next occurrences. When enabled, it finds the next occurrence and run accordingly.

![Enable Disable Schedule](/static/assets/cloud/managing-resources/images/enable-disable-schedule.png)

## Delete Schedules
Schedules can be deleted from the Bold BI when it is no longer required.

Click the `Actions` button in the schedules grid context menu and select `Delete` to delete the schedule.

![Delete Schedule](/static/assets/cloud/managing-resources/images/delete-schedule.png)

## Data Alerts
Data alert provides the users to track certain conditions and helps responding to a specified recipients via mail when a certain predefined threshold is met. Please find more details on the [Data alerts](/embedded-bi/working-with-dashboards/data-alerts/).
