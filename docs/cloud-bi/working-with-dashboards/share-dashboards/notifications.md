---
layout: post
title: Managing Dashboard Notifications – Cloud BI | Bold BI Docs
description: Learn how to configure notifications to notify the users of comments on dashboards and widgets in Bold BI Cloud.
canonical: "/cloud-bi/working-with-dashboards/share-dashboards/notifications/"
platform: bold-bi
documentation: ug
---

# Notifications for comments on the dashboards and widgets

This section explains how to configure notifications to notify the users of comments on dashboards and Widgets in Bold BI.

Notifications can be configured by both the `System Administrator` and users.

## Admin notification settings

Admin can manage application notification preferences by enabling or disabling email and system notifications in admin notification settings.
If settings are disabled in the admin notification settings, user notification settings will be disabled, and they cannot change their notification setting preference.

![Admin notification settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/admin-notification-settings.png)

There are two different types of notification.
* Email Notifications
* System Notifications

### Email notifications

 Users will be notified of activities by email based on the settings configured here.

 ![Admin email notification settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/admin-email-notifications.png)


### System notifications

System notifications will notify users of activity on comments based on the settings configured here.

![Admin system notification settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/admin-system-notifications.png)

System notifications will appear in the bottom left corner above the user's profile picture, as shown in the following image.

![Notifications section](/static/assets/cloud/working-with-dashboards/share-dashboards/images/notifications-icon.png)

Users can navigate to the particular comment by clicking the dashboard name in the notification section. To configure the user notification settings, users can navigate to the profile page by clicking settings.

![Notifications section page](/static/assets/cloud/working-with-dashboards/share-dashboards/images/notifications-section.png)

### List of notifications

#### Notify the owner when someone comments on the dashboard
Enabling this option will send an email or system notification to the owner of the dashboard when someone comments on it.

#### Notify users who have access to the dashboard when someone comments on it
Enabling this option will send an email or system notification to all users who have access to the dashboard whenever someone comments on it.

#### Notify the user when they are mentioned in a comment
Enabling this option will send an email or system notification to the user whenever someone mentions their name while commenting on the dashboard.

#### Notify the user about comments when they have watch enabled for the dashboard
Autowatch will be enabled for a comment on dashboards whenever you add comments to a dashboard you created or to which you have access. This setting is useful if you want to receive notifications for specific dashboards rather than all dashboards that you have created or have access to. You can disable the "Notify users who have access to the dashboard when someone comments on it" and "Notify the owner when someone comments on the dashboard" options and watch a specific dashboard comment.

#### Specific watch

Apart from autowatch on created and accessible items, users can also watch a specific item.

![Specific watch](/static/assets/cloud/working-with-dashboards/share-dashboards/images/specific-watch.png)

Users can toggle between a watch and unwatch for a dashboard comment at any time.

#### Enable data alert and scheduled export email notification
Enabling this option will send an email to the user for data alert and schedule export.

#### Notify the user when their profile is edited
Enabling this option will send an email to the user if their profile is edited.

#### Notify the user when a resource is shared with them
Enabling this option will send an email to the user whenever they are granted permissions for resources, users, groups, or settings.

#### User synchronization notification
Enabling this option will send an email to the user about user synchronization schedule.

### Disable user preference
Admin can choose whether to allow or restrict user notification preferences, found in the profile page `Notifications` tab. Enabling the `Disable User Preference ` will disable all user notification preference options and overrides them with application notification settings.

![Disable user preference](/static/assets/cloud/working-with-dashboards/share-dashboards/images/disable-user-notification-preference.png#width=55%)

## User notification settings

The user can configure their own notification preferences, but they can only enable or disable the options that have been enabled in the admin notification settings.

![Profile Notifications](/static/assets/cloud/working-with-dashboards/share-dashboards/images/user-profile-notifications.png)

There are two different types of notification.
* Email Notifications
* System Notifications

### Email notifications

Users will be notified of activities by email based on the settings configured here.

 ![Email notification settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/profile-email-notification.png)

### System notifications

System notifications will notify users of activity on comments based on the settings configured here.

![System notification settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/profile-system-notification.png)

System notifications will appear in the bottom left corner above the user's profile picture, as shown in the following image.

![Notifications section](/static/assets/cloud/working-with-dashboards/share-dashboards/images/notifications-icon.png)

Users can navigate to the particular comment by clicking the dashboard name in the notification section. To configure the user notification settings, users can navigate to the profile page by clicking settings.

![Notifications section page](/static/assets/cloud/working-with-dashboards/share-dashboards/images/notifications-section.png)

### List of notifications

#### Notify me when someone comments on my dashboard
Enabling this option will notify you via email or system notification when someone comments on the dashboard you have created.

#### Notify me when someone comments on a dashboard I have access to
Enabling this option will notify you via email or system notification when someone comments on the dashboard you have access to.

#### Notify me when someone mentions me in a comment
Enabling this option will notify you via email or system notification when someone mentions your name while commenting on a dashboard.

#### Notify me about comments when I have watch enabled for a dashboard
Autowatch will be enabled for a comment on dashboards whenever you add comments to a dashboard you created or to which you have access. This setting is useful if you want to receive notifications for specific dashboards rather than all dashboards that you have created or have access to. You can disable the "Notify me when someone comments on a dashboard I have access to" and "Notify me when someone comments on my dashboard" options and watch a specific dashboard comment. 

#### Specific watch

Apart from autowatch on created and accessible items, you can also watch a specific item.

![Specific watch](/static/assets/cloud/working-with-dashboards/share-dashboards/images/specific-watch.png)

You can toggle between a watch and unwatch for a dashboard comment at any time.

#### Enable data alert and scheduled export email notifications
Enabling this option will notify you via email for data alert and schedule export.

#### Notify me when my profile is edited
Enabling this option will notify you via email if your profile is edited.

#### Notify me when a resource is shared with me
Enabling this option will notify you via email whenever you are granted permissions for resources, users, groups, or settings.

#### User synchronization notification
Enabling this option will notify you via email about user synchronization schedule.

### Inherit from global settings

If a user wants to inherit the same settings as in the admin notification settings, he or she can do so by checking the "Inherit from global settings" option in Email Notifications and System Notifications.

![Inherit from global settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/inherit-notification.png)

### Disabled user notification preference
If the `Disable User Preference` is enabled in admin notification settings, then the user cannot modify the user notification preference settings.

![Disabled in site notification](/static/assets/cloud/working-with-dashboards/share-dashboards/images/notification-disabled-in-site.png)
