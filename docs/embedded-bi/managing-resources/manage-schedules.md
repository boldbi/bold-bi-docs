---
layout: post
title: Managing Schedules – Embedded BI | Bold BI Documentation
description: Learn how to create, edit, enable/disable, delete schedules and send schedule emails to distribution list in Bold BI Embedded. 
canonical: "/cloud-bi/managing-resources/manage-schedules/"
platform: bold-bi
documentation: ug
---

# Manage Schedules in the Bold BI  	

This section explains on how to add, edit, delete schedules and also on how to run the schedules on demand and enable or disable schedules in the Bold BI.

Schedules' page displays the schedules that are accessible by the user depending on the user’s permission.

![Manage Schedules](/static/assets/embedded/managing-resources/images/manage-schedules.png)

## Add Schedules
Schedules can be created only if the user has `Create All Schedules` permission. Schedules can be created in two ways,
	
   * Add schedule from `+` button in the left side menu.
   * Add schedule from context menu of the respective dashboards.
	
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

* Select the recurrence type, recurrence, start and end dates, export formats and the users to which the exported dashboards have to be emailed in the `Add Schedule` dialog box.
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

## Edit Schedules
Category, dashboard, name, recurrence type, recurrence, start and end dates, export format and the recipients can be changed in the `Edit Schedule` dialog box.
	
## Run Now
Schedules can be made to run on demand by using `Run Now` option in the schedule grid context menu. Dashboard get exported in the format specified and sent to the recipients along with the link the dashboard in the Bold BI through emails.

![Run Now Schedule](/static/assets/embedded/managing-resources/images/run-now-schedule.png)

## Enable or Disable Schedule
Schedules can be disabled at any time, which ignores any next occurrences. When enabled, it finds the next occurrence and run accordingly.

![Enable Disable Schedule](/static/assets/embedded/managing-resources/images/enable-disable-schedule.png)

## Delete Schedules
Schedules can be deleted from the Bold BI when it is no longer required.

Click the `Actions` button in the schedules grid context menu and select `Delete` to delete the schedule.

![Delete Schedule](/static/assets/embedded/managing-resources/images/delete-schedule.png)

## Data Alerts
Data alert provides the users to track certain conditions and helps responding to a specified recipients via mail when a certain predefined threshold is met. Please find more details on the [Data alerts](/bold-bi/data-alerts).
