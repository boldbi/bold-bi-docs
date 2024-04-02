---
layout: post
title: View Your Profile and Access Permissions | Bold BI Embedded
description: Learn how to view and edit your profile, view your access permissions and change password in Bold BI.
platform: bold-bi
documentation: ug
---

# User Profile in the Bold BI

This section explains how to view the profile, edit the profile details, edit the profile settings, set user notification preferences, view my permissions, connect sites, connect accounts, and change the password for the user profile in Bold BI.

## Profile details

You can view the profile, edit the profile details, and change the password.

### View profile
You can view the profile details in this page.

![View Profile](/static/assets/managing-resources/images/view-user-profile.png#width=55%)
 
### Edit profile
You can edit the profile details in Bold BI account. Click `Edit Account` in profile page, it will be redirected to IDP profile page where you can edit your profile.

![Cloud Account](/static/assets/managing-resources/images/syncfusion-cloud-account-button.png#width=55%)

Username, first name, last name, phone number, and profile picture can be changed on the Bold BI profile page.

![Edit Profile](/static/assets/managing-resources/images/edit-user-profile.png)

## Settings
The Application language, Data language, Default pinboard, and Autosave filter settings can be edited in Profile settings.

![Profile Settings](/static/assets/managing-resources/images/profile-settings.png#width=60%)

### Language settings
This section explains how to configure the language settings for the application language and data language.

#### Application language
This language is used in the user interface of an application, such as menu items, dialog boxes, toolboxes, and so on. 
You can update the application language preference by clicking `Update application language details through your account`. It will redirect you to the IDP profile page where you can set your own language preference.

#### Data language
This language is used in date, number, and currency formats. 
You can update the data language preference by clicking `Update data language details through your account`. 
It will redirect you to the IDP profile page where you can set your own language preference.

You can configure the settings as shown in the following images.

![Profile Language Preference](/static/assets/managing-resources/images/profile-language-preference.png)

![Language Preference](/static/assets/managing-resources/images/language-preference.png)

> **NOTE:**  Make sure the `Disable user language preference` option is disabled in the site settings to apply the user preference language on your site. For more details, please visit [here](/localization/latest/#site-language-settings).

### Default pinboard
Users can select a default pinboard by choosing one of the added pinboards from the drop-down.

![Default Pinboard](/static/assets/managing-resources/images/default-pinboard.png)

The default pinboard will be loaded when the user navigates to the Pinboard page. Click [here](/managing-resources/manage-pinboards/) to learn more about pinboards.

### Dashboard settings
#### AutoSave filter
The user can control auto-save filters of the dashboards using the Dashboard Settings on this page.

The dashboards will be rendered with the last applied filters by the users.
![Autosave Filter](/static/assets/managing-resources/images/auto-save-filter.png)

If the administrator has restricted the AutoSave filter option in site settings, then the user cannot control the action of saving the filters applied to the dashboard.
![Autosave Filter Disabled](/static/assets/managing-resources/images/auto-save-filter-disabled.png)

> **NOTE:** If a dashboard has default views, it will not be rendered with the last applied filter in the dashboard. Hence, `Default Views` must be disabled on the Dashboard Settings page of the site settings.


## Notifications

The user can configure their own notification preferences, but they can only enable or disable the options that have been enabled in the site notification settings.

![Profile Notifications](/static/assets/managing-resources/images/user-profile-notifications.png)

There are two different types of notifications:
* Email Notifications
* System Notifications

### Email notifications

Users will be notified of activities by email based on the settings configured here.

 ![Email notification settings](/static/assets/managing-resources/images/profile-email-notification.png)

### System notifications

System notifications will notify users of activity on comments based on the settings configured here.

![System notification settings](/static/assets/managing-resources/images/profile-system-notification.png)

System notifications will appear in the top right corner near the user's profile picture, as shown in the following image.

![Notifications section](/static/assets/managing-resources/images/notifications-icon.png)

Users can navigate to the particular comment by clicking the dashboard name in the notification section. To configure the user notification settings, users can navigate to the profile page by clicking settings.

![Notifications section page](/static/assets/managing-resources/images/notifications-section.png)

### List of notifications

#### Notify me when someone comments on my dashboard
Enabling this option will notify you via email or system notification when someone comments on the dashboard you have created.

#### Notify me when someone comments on a dashboard I have access to
Enabling this option will notify you via email or system notification when someone comments on the dashboard you have access to.

#### Notify me when someone mentions me in a comment
Enabling this option will notify you via email or system notification when someone mentions your name while commenting on a dashboard.

#### Notify me about comments when I have watch enabled for a dashboard
Autowatch will be enabled for a comment on dashboards whenever you add comments to a dashboard you created or to which you have access. This setting is useful if you want to receive notifications for specific dashboards rather than all dashboards that you have created or have access to. You can disable the “Notify me when someone comments on a dashboard I have access to” and “Notify me when someone comments on my dashboard” options and watch a specific dashboard comment.

#### Specific watch

Apart from autowatch on created and accessible items, you can also watch a specific item.

![Specific watch](/static/assets/site-administration/images/specific-watch.png)

You can toggle between watch and unwatch for a dashboard comment at any time.

#### Enable data alert and scheduled export email notifications
Enabling this option will notify you via email for data alert and schedule export.

#### Notify me when my profile is edited
Enabling this option will notify you via email if your profile is edited.

#### Notify me when a resource is shared with me
Enabling this option will notify you via email whenever you are granted permissions for resources, users, groups, or settings.

#### User synchronization notification
Enabling this option will notify you via email about user synchronization schedule.

### Inherit from global settings

If a user wants to inherit the same settings as in the site notification settings, he or she can do so by checking the "Inherit from global settings" option in Email Notifications and System Notifications.

![Inherit from global settings](/static/assets/managing-resources/images/inherit-notification.png)

### Disabled user notification preference
If the `Disable User Preference` is enabled in site notification settings, the user cannot modify the user notification preference settings.

![Disabled in site notification](/static/assets/managing-resources/images/notification-disabled-in-site.png)

     
## Change Password
The password to log in to Bold BI can be changed on the Bold BI change password page.

![Change Password In Profile](/static/assets/managing-resources/images/change-password-button.png)

Clicking on `Change Password` will redirect you to the IDP profile page where you can change your password.

![Change Password](/static/assets/managing-resources/images/edit-user-profile-password.png)

> **NOTE:**  Administrator privileged users can change the password from the UMS Site. For more details, please visit [here](/managing-resources/manage-users/#change-password)

## Forgot Password
If you forgot your password, you can reset it by following the steps below:

1. Click on the cannot access your account option on the login page.

   ![Cannot access your account](/static/assets/managing-resources/images/recover-account-option.png#width=60%)

2. Enter your email to receive the reset password link. After entering your email, click on `Send recovery link`.

   ![Email Form](/static/assets/managing-resources/images/recover-option.png#width=60%)

3. After the confirmation page, you will receive an email to reset your password.

   ![Email Link](/static/assets/managing-resources/images/reset-password-mail.png#width=60%)

4. You can reset your password by clicking on the link in the email you received.

   ![Reset Password](/static/assets/managing-resources/images/reset-password-page.png#width=60%)

   > **NOTE:**  The forgot password option is restricted for third-party user directories.
   
## My Permissions
Users can view their access permission list for each resource such as Dashboards, Data Sources, Widgets, and Schedules in Bold BI.

![My Permissions](/static/assets/managing-resources/images/my-permission.png)

## Connected Accounts
You can manage the external OAuth accounts that you have granted access to in Bold BI. Please find more details on the [Connected accounts](/working-with-data-sources/working-with-connected-accounts/) page.

## Connected sites

You can add, edit, delete, and view the list of external sites on the connected sites page.

![Connected sites](/static/assets/managing-resources/images/connected-sites.png)

## Add External BI Sites

Add a site created in Bold BI servers as an external site on the `Connected Sites` page.

![Add New Site](/static/assets/managing-resources/images/add-new-site.png)

To add an external BI site, click on `Add new site`, fill in the required details as shown in the image, then click `Save`.

* Name - Enter the name that you want for external site.
* Client ID - Enter the Client Id of the site.
* Client Secret - Enter the Client Secret of the site.
* Site URL - Enter the URL of the site.

![Add External sites](/static/assets/managing-resources/images/add-external-bi-site.png)

## Edit External Site

To edit an external site, click on `Actions` and then select `Edit` from the site listing grid. 
![Edit External sites](/static/assets/managing-resources/images/edit-external-site.png)

Edit the site details, then click `Save`. You will need to re-enter the site’s `Client Secret` to edit the connected site.
![Edit External site Dialog](/static/assets/managing-resources/images/edit-external-site-dialog.png)

## Delete External Site

To delete an external site, click on `Actions`, select `Delete` from the site listing grid, then click `Yes` in the `Delete Connected` Site dialog.

![Delete External sites](/static/assets/managing-resources/images/delete-external-site.png)

![Delete External sites Dialog](/static/assets/managing-resources/images/delete-external-site-dialog.png)


