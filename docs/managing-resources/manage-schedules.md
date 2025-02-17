---
layout: post
title: Managing Schedules – Embedded BI | Bold BI Documentation
description: Learn how to create, edit, enable/disable, delete schedules and send schedule emails to distribution list in Bold BI Embedded. 
canonical: "/managing-resources/manage-schedules/"
platform: bold-bi
documentation: ug

---

# Manage Schedules in the Bold BI  	

This section explains how to add, edit, and delete schedules and also how to run the schedules on-demand, enable or disable schedules, and view schedule run history in the Bold BI platform.

The Schedules page displays the schedules that are accessible to the user based on their permissions.

![Manage Schedules](/static/assets/managing-resources/images/manage-schedules.png)

## Add Schedules
Schedules can only be created if the user has the `Create All Schedules` permission. Schedules can be added in three ways:
	
   * Add schedule from schedules page.
   * Add schedule from `+` button in the left side menu.
   * Add schedule from context menu of the respective dashboards.

### Add schedule from schedules page

* Click on the `Create Schedule` option in the top right corner of the Schedules page.

	![Create Schedule](/static/assets/managing-resources/images/create-schedule-page.png)

### Add schedule from `+` button menu

* Click on the `+` button in the left side menu and select `Schedule` under `Create` to add a schedule.

	![Choose Schedule](/static/assets/managing-resources/images/choose-schedule.png#width=50%)

* Choose the required category from the `Category` dropdown. Once a category is selected, the corresponding dashboards under that category will be displayed in the `Dashboard` dropdown. Once a dashboard is selected, the corresponding widget and views under the dashboard will be displayed in the `Widget` and `View` dropdown.

* Select the desired category from the dropdown.

	![Select Category](/static/assets/managing-resources/images/select-category.png)

* Select the desired dashboard from the dropdown.

	![Select dashboard](/static/assets/managing-resources/images/select-dashboard.png)

* Select the desired widget from the dropdown.

    ![Select widget](/static/assets/managing-resources/images/select-widget.png)
    
* Select the desired view form the dropdown.

    ![Select view](/static/assets/managing-resources/images/select-view.png)

* Provide the valid parameter. For instructions on how to create parameters in Bold BI, please refer to this [link](/working-with-data-sources/dashboard-parameter/).

![Provide parameter](/static/assets/managing-resources/images/parameter.png)

### Add schedule from dashboard viewer page

If the user has `Read` permission for a specific dashboard and `Create` permission for the schedule, then they can create a schedule in that dashboard.

To learn about creating a schedule on the dashboard viewer page, please check [the create schedule in dashboard viewer page](/working-with-dashboards/dashboard-schedule/)

### Add schedule from context menu of the respective dashboards

* Click on the `Actions` button in the dashboard grid context menu and choose `Create Schedule` to schedule the corresponding dashboard.

	![Create Schedule](/static/assets/managing-resources/images/create-schedule.png)

* Once the dialog is opened, the category and dashboard values are selected by default. The user can choose view and widget from the dropdown menu if needed.

	![Default Values](/static/assets/managing-resources/images/category-dashboard-preselect.png)

> **NOTE:** Categories, Dashboards, Views, Widgets and Parameter can be changed from schedule dialog box itself.

* After adding schedule details, click `Next` in the schedule dialog. 

## Customizing schedule email Content
	
* Customize the email content that needs to be sent during the schedule.

* The scheduled email content page will feature default content based on the selected system template, as shown in the following image. Additionally, users are not permitted to customize the default system template content.

  ![Default Schedule Mail](/static/assets/managing-resources/images/default-mail-content.png)

* You can also create a new template and select it from the dropdown menu to customize the email content.

  ![Choose template](/static/assets/managing-resources/images/choose-template.png)

* To customize the subject and body content of an email, you can enable the `Email Customization` toggle button.

  ![Customize Schedule Mail](/static/assets/managing-resources/images/customize-schedule-mail.png)

* To customize the subject, use the variables in the drop-down menu next to the subject field. Once you select a variable from the drop-down, the default subject content will be reset.

  ![Customize Mail Subject](/static/assets/managing-resources/images/customize-mail-subject.png#width=85%)

* Customize the email body content and enhance it by using bold, italic, bullet points, numbers, font size, code, and quotation options as shown in the following images.

  ![Customize Mail Content](/static/assets/managing-resources/images/customize-mail-content.png#width=85%)

  ![Bold Style and Points](/static/assets/managing-resources/images/schedule-mail-bold-points.png)

* Insert images and links if needed.

  ![Insert Image and Links](/static/assets/managing-resources/images/schedule-insert-image-links.png)

* With the help of the `Preview` option, visualize the actual email format while scheduling and `reset` if you need to restore to the default content.

  ![Preview and Reset](/static/assets/managing-resources/images/schedule-preview-reset.png)

* After customizing the email content, click `Next` in the schedule dialog.

  ![Customize Page Next](/static/assets/managing-resources/images/schedule-next-btn.png#width=85%)

* Select the recurrence type, recurrence, start and end dates, export formats, and the users to which the exported dashboards and failure notification have to be emailed in the `Add Schedule` dialog box.
	* Dashboards can be scheduled hourly, daily, weekly, monthly, and yearly.
	* Dashboards can be exported as an image, PDF, CSV, and Excel.
	* The Application Time Zone is displayed below the date picker. The start time of the schedule is converted to the client Time Zone and shown on the right side for the user's convenience.
	* Exported dashboards can be sent to individual users or groups or to external recipients along with the link to the dashboard in the Bold BI through emails.
	
	![Choose Next](/static/assets/managing-resources/images/choose-next.png)

	![Add Schedule](/static/assets/managing-resources/images/add-schedule.png)

* When clicking on `Schedule`, the dashboard is scheduled in the selected recurrence.

> **NOTE:**  `Read Write Delete` permission for that `Specific Schedule` is added to the users by the person who created the schedule.

## Sending Schedule emails to Distribution list
Yes, we do support sending schedule emails to a distribution list. You can configure the distribution list in the schedule recipient list in the following two ways:
	
1. We can add the distribution email directly in the external recipient option as below.
![Send Schedule](/static/assets/managing-resources/images/add-external-recipients.png)

2. We can add the new user with the distribution list email and add the user as a recipient to send the emails to the users in the distribution list.

## Sending Schedule failure notification to the owner and recipients
Supports sending schedule failure notifications to the schedule owner and recipients. After schedule export failure, the notification can be sent to the owner and recipients with a failure error message by email.

![Schedule Failure Notification](/static/assets/managing-resources/images/failure-notification.png)

Additionally, Bold BI application deactivates the export schedule after a limited number of consecutive failures and sends a disable notification to the owner and recipients.

## Configure Schedule with Export Format
You can configure the export formats in the schedule.

![Schedule Image Export](/static/assets/managing-resources/images/export-image.png)

## Other Destination Schedule Export

### FTP location export
You can export the dashboards to an FTP, FTPS, or SFTP location by configuring the respective server credentials while scheduling the dashboard export.

![Schedule Location Export](/static/assets/managing-resources/images/ftp-location.png)

### Webhook Notification
You can send a webhook notification for an export schedule or [data alerts](/working-with-dashboards/data-alerts/) by selecting the created webhook in the `Other Destinations` section.

![Select Webhook](/static/assets/managing-resources/images/webhook-notification.png)

#### Steps to configure webhook when adding or editing schedules

1. Select a previously created webhook from the Webhook list dropdown.

	![Select Webhook](/static/assets/managing-resources/images/select-webhook.png)

2. If you haven’t created any webhooks, you can create them by clicking the `Create` option. This will open the `Add Webhook` page in a new tab. Please visit the [Manage Webhook](/manage-webhooks/) for information on how to add a webhook.

	![Create Webhook](/static/assets/managing-resources/images/create-webhook.png)

3. After creating the webhook, you need to click the `Refresh` option for the created webhook to appear in the dropdown.

	![Refresh Webhook](/static/assets/managing-resources/images/refresh-webhook.png)

4. After selecting a webhook, you can see the selected webhook endpoint with request content type details in the info message section.

	![Configuration Message](/static/assets/managing-resources/images/webhook-configuration-message.png)

5. When running the schedule, Bold BI will call the webhook endpoint you selected with the selected or all payload data. Click on the [Webhook Payload](/manage-webhooks/webhook-payload/) to learn more about what the payload data sent to a webhook call is.

> **NOTE:**  `Time Driven Dashboard Export` event webhooks are listed only for normal schedules, and `Alert Driven Dashboard Export` event webhooks are listed only for data alert schedules.

## Edit Schedules
Category, dashboard name, recurrence type, recurrence, start and end dates, export format, and recipients can be changed in the `Edit Schedule` dialog box.
	
## Run Now
Schedules can be run on demand by using the `Run Now` option in the schedule grid context menu. The dashboard gets exported in the specified format and sent to the recipients along with a link to the dashboard in Bold BI through emails.

![Run Now Schedule](/static/assets/managing-resources/images/run-now-schedule.png)

## Information of Schedule

You can view the information of the respective schedule in the dialog box. Click on `Actions` in the grid context menu and select `Info`.

![Schedule Info](/static/assets/managing-resources/images/schedule-info.png#width=65%)

![Schedule Info Popup](/static/assets/managing-resources/images/schedule-info-popup.png#width=55%)

## Run History
You can view the schedule run history information of the corresponding schedule in the `Run History` option in the schedule grid context menu. 

![Run History](/static/assets/managing-resources/images/run-history.png)
![Run History Info](/static/assets/managing-resources/images/run-history-info.png)

You can also view failure information by clicking on the failed link in the run history dialog.

![Schedule Failure Info](/static/assets/managing-resources/images/schedule-failure-info.png)

## Enable or Disable Schedule
Schedules can be disabled at any time, which will ignore any upcoming occurrences. When enabled, it will find the next occurrence and run accordingly.

![Enable Disable Schedule](/static/assets/managing-resources/images/enable-disable-schedule.png)

## Delete Schedules
Schedules can be deleted from Bold BI when they are no longer needed. 

Click on the `Actions` button in the schedules grid context menu and select `Delete` to delete the schedule.

![Delete Schedule](/static/assets/managing-resources/images/delete-schedule.png)

## Data Alerts
Data Alert provides users with the ability to track specific conditions and helps them respond to specified recipients via email when a predefined threshold is met. For more details on [Data alerts](/working-with-dashboards/data-alerts/), please refer to the information provided.