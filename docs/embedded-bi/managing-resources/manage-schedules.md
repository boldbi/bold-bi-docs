---
layout: post
title: Managing Schedules – Embedded BI | Bold BI Documentation
description: Learn how to create, edit, enable/disable, delete schedules and send schedule emails to distribution list in Bold BI Embedded. 
canonical: "/cloud-bi/managing-resources/manage-schedules/"
platform: bold-bi
documentation: ug
---

# Manage Schedules in the Bold BI  	

This section explains how to add, edit, and delete the schedules and also to run the schedules on-demand, enable or disable schedules, and show schedule run history in the Bold BI.

Schedules page displays the schedules that are accessible by the user depending on the user’s permission.

![Manage Schedules](/static/assets/embedded/managing-resources/images/manage-schedules.png)

## Add Schedules
Schedules can be created only if the user has `Create All Schedules` permission. Schedules can be created in three ways,
	
   * Add schedule from schedules page.
   * Add schedule from `+` button in the left side menu.
   * Add schedule from context menu of the respective dashboards.

### Add schedule from schedules page

* Click on the `Create Schedule` which is available in the top right corner of the schedules page.

	![Create Schedule](/static/assets/embedded/managing-resources/images/create-schedule-page.png)

### Add schedule from `+` button menu

* Click on the `+` button in the left side menu and choose `Schedule` under `Create` to add a Schedule.

	![Choose Schedule](/static/assets/embedded/managing-resources/images/choose-schedule.png)

* Select the required category from `Category` dropdown. After selecting the category, corresponding dashboards under that selected category will be displayed in the `Dashboard` dropdown,

	![Select Category](/static/assets/embedded/managing-resources/images/select-category.png)

* Select the required dashboard from the dropdown.

	![Select dashboard](/static/assets/embedded/managing-resources/images/select-dashboard.png)

### Add schedule from context menu of the respective dashboards

* Click on `Actions` button in the dashboards grid context menu and select `Create Schedule` to schedule the corresponding dashboard.

	![Create Schedule](/static/assets/embedded/managing-resources/images/create-schedule.png)

* Once dialog was opened, the category and dashboard values are selected by default,

	![Default Values](/static/assets/embedded/managing-resources/images/category-dashboard-preselect.png)

> **NOTE:**  Categories or Dashboards can be changed from schedule dialog box itself.

* After adding schedule details, click on the `Next` button in schedule dialog. 

## Customizing schedule email Content
	
* You can customize mail content that needs to be sent during schedule.

* Schedule mail content page will have default content as shown in the below image,

  ![Default Schedule Mail](/static/assets/embedded/managing-resources/images/default-mail-content.png)

* You can customize mail content by using bold, italic, points, numbers, font-size, code, quotation options as shown in below image.

  ![Customize Mail Content](/static/assets/embedded/managing-resources/images/customize-mail-content.png)

  ![Bold Style and Points](/static/assets/embedded/managing-resources/images/schedule-mail-bold-points.png)

* You can insert images and links if needed,

  ![Insert Image and Links](/static/assets/embedded/managing-resources/images/schedule-insert-image-links.png)

* With the help of `preview` option, we can visualize actual mail format while scheduling and `reset` if need to restore to the default content.

  ![Preview and Reset](/static/assets/embedded/managing-resources/images/schedule-preview-reset.png)

* After customizing mail content, click `Next` button in schedule dialog.

  ![Customize Page Next](/static/assets/embedded/managing-resources/images/schedule-next-btn.png)

* Select the recurrence type, recurrence, start and end dates, export formats and the users to which the exported dashboards and failure notification have to be emailed in the `Add Schedule` dialog box.
	* Dashboards can be scheduled hourly, daily, weekly, monthly and yearly
	* Dashboards can be exported as image, PDF and Excel
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to client Time Zone and shown in the right side for the user’s convenience 
	* Exported dashboards can be sent to individual users or groups or to external recipients along with the link the dashboard in the Bold BI through emails.
	
	![Choose Next](/static/assets/embedded/managing-resources/images/choose-next.png)

	![Add Schedule](/static/assets/embedded/managing-resources/images/add-schedule.png)

* When clicking on `Schedule`, the dashboard is scheduled in the selected recurrence.

> **NOTE:**  `Read Write Delete` permission for that `Specific Schedule` is added to the users by the person who created the schedule.

## Sending Schedule emails to Distribution list
Yes, we do support sending schedule emails to distribution list. You can configure the distribution list in the schedule recipient list as in the below two ways
	
1. We can add the distribution email directly in the external recipient option as below.
![Send Schedule](/static/assets/embedded/managing-resources/images/add-external-recipients.png)

2. We can add the new user with the distribution list email and add the user as a recipient to send the emails to the users in the distribution list.

## Sending Schedule failure notification to the owner and recipients
Supports sending schedule failure notification to schedule owner and recipients. After schedule export failure, the notification can be sent to the owner and recipients with a failure error message by an email.

![Schedule Failure Notification](/static/assets/embedded/managing-resources/images/failure-notification.png)

And also, Bold BI application deactivates the export schedule after limited consecutive failures and send the disable notification to the owner and recipients.

## Configure Schedule with Export Format
You can configure the export formats in the schedule.

![Schedule Image Export](/static/assets/embedded/managing-resources/images/export-image.png)

## Configure Schedule with Location Export
You can export the dashboards to an FTP location by configuring the FTP credentials while scheduling the dashboard export.

![Schedule Location Export](/static/assets/embedded/managing-resources/images/ftp-location.png)

## Edit Schedules
Category, dashboard, name, recurrence type, recurrence, start and end dates, export format and the recipients can be changed in the `Edit Schedule` dialog box.
	
## Run Now
Schedules can be made to run on demand by using `Run Now` option in the schedule grid context menu. Dashboard get exported in the format specified and sent to the recipients along with the link the dashboard in the Bold BI through emails.

![Run Now Schedule](/static/assets/embedded/managing-resources/images/run-now-schedule.png)

## Information of Schedule

You can see the information of respective Schedule in dialog box. Click `Actions` in the grid context menu and select `Info`.

![Schedule Info](/static/assets/embedded/managing-resources/images/schedule-info.png)

![Schedule Info Popup](/static/assets/embedded/managing-resources/images/schedule-info-popup.png)

## Run History
You can see the schedule run history information of corresponding schedule in the `Run History` option in the schedule grid context menu.

![Run History](/static/assets/embedded/managing-resources/images/run-history.png)
![Run History Info](/static/assets/embedded/managing-resources/images/run-history-info.png)

And, also you can see the failure information by clicking the failed link in run history dialog.

![Schedule Failure Info](/static/assets/embedded/managing-resources/images/schedule-failure-info.png)

## Enable or Disable Schedule
Schedules can be disabled at any time, which ignores any next occurrences. When enabled, it finds the next occurrence and run accordingly.

![Enable Disable Schedule](/static/assets/embedded/managing-resources/images/enable-disable-schedule.png)

## Delete Schedules
Schedules can be deleted from the Bold BI when it is no longer required.

Click the `Actions` button in the schedules grid context menu and select `Delete` to delete the schedule.

![Delete Schedule](/static/assets/embedded/managing-resources/images/delete-schedule.png)

## Data Alerts
Data alert provides the users to track certain conditions and helps responding to a specified recipients via mail when a certain predefined threshold is met. Please find more details on the [Data alerts](/embedded-bi/working-with-dashboards/data-alerts/).