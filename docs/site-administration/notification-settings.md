---
layout: post
title: Managing Notification Settings in Embedded BI | Bold BI Docs
description: Learn how to configure and manage notification settings to notify the users of the various activities, such as data alerts, comments, etc., in Bold BI.
canonical: "/working-with-dashboards/share-dashboards/notifications/"
platform: bold-bi
documentation: ug
---

# Notifications for activities done in Bold BI

This section explains how to configure notification settings to notify users of various activities in Bold BI.

Notifications can be set up by the `System Administrator` in the notification settings page and by users on the user profile page.

## Site notifications settings

Admin can manage application notification preferences by enabling or disabling email and system notifications in site notification settings.
If settings are disabled in the site notification settings, user notification settings will be disabled, and they cannot change their notification setting preference.

![Site notification settings](/static/assets/site-administration/images/admin-notification-settings.png)

There are two different types of notification.
* Email Notifications
* System Notifications

### Email notifications

 Users will be notified of activities by email based on the settings configured here.

 ![Admin email notification settings](/static/assets/site-administration/images/admin-email-notifications.png)


### System notifications

System notifications will notify users of activity on comments based on the settings configured here.

![Admin system notification settings](/static/assets/site-administration/images/admin-system-notifications.png)

System notifications will appear at the top right corner near to the user's profile picture, as shown in the following image.

![Notifications section](/static/assets/site-administration/images/notifications-icon.png)

Users can navigate to the particular comment by clicking the dashboard name in the notification section. To configure the user notification settings, users can navigate to the profile page by clicking settings.

![Notifications section page](/static/assets/site-administration/images/notifications-section.png)

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

![Specific watch](/static/assets/site-administration/images/specific-watch.png)

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

![Disale user preference](/static/assets/site-administration/images/disable-user-notification-preference.png#width=55%)

## User notification settings

User can configure their own notification preferences in profile page `Notifications` tab. Please find more details in [user profile notifications](/managing-resources/user-profile/#notifications).