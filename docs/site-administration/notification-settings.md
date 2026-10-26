---
layout: post
title: Managing Notification Settings in Embedded BI | Bold BI Docs
description: Learn how to configure and manage notification settings to notify the users of the various activities, such as data alerts, comments, etc., in Bold BI.
canonical: "/site-administration/notification-settings/"
platform: bold-bi
documentation: ug
---

# Notifications for Activities Done in Bold BI

This section explains how to configure notification settings to notify users of various activities in Bold BI.

Notifications can be set up by the `System Administrator` in the notification settings page and by users on the user profile page.

## Site Notifications Settings

The Admin can manage application notification preferences by enabling or disabling email and system notifications in the site notification settings.
If settings are disabled in the site notification settings, user notification settings are disabled, and they cannot change their notification setting preference.

![Site notification settings](/static/assets/site-administration/images/admin-notification-settings.png)

There are two different types of notification.
* Email Notifications
* System Notifications

### Email Notifications

 Users are notified of activities by email based on the settings configured here.

 ![Admin email notification settings](/static/assets/site-administration/images/admin-email-notifications.png)


### System Notifications

System notifications will inform users of activity on comments based on the settings configured here.

![Admin system notification settings](/static/assets/site-administration/images/admin-system-notifications.png)

System notifications appear at the top-right corner near the user’s profile picture, as shown in the following image.

![Notifications section](/static/assets/site-administration/images/notifications-icon.png)

Users can navigate to a specific comment by clicking the dashboard name in the notification section. To configure user notification settings, users can navigate to the profile page by clicking on settings.

![Notifications section page](/static/assets/site-administration/images/notifications-section.png)

### List of Notifications

#### Notify the Owner When Someone Comments on the Dashboard
Enabling this option will send an email or system notification to the dashboard owner when someone comments on it.

#### Notify Users Who Have Access to the Dashboard When Someone Comments on It
Enabling this option will send an email or system notification to all users who have access to the dashboard whenever someone comments on it.

#### Notify the User When They Are Mentioned in a Comment
Enabling this option will send an email or system notification to the user whenever someone mentions their name in a comment on the dashboard.

#### Notify the User About Comments When They Have Watch Enabled for the Dashboard
Autowatch is enabled for comments on dashboards whenever a user adds comments to a dashboard they created or have access to. This setting is useful for receiving notifications for specific dashboards rather than all dashboards. Users can disable other notification options and watch a specific dashboard comment.

#### Specific Watch

Apart from autowatch on created and accessible items, users can also watch a specific item.

![Specific watch](/static/assets/site-administration/images/specific-watch.png)

Users can toggle between watching and not watching a dashboard comment at any time.

#### Enable Data Alert and Scheduled Export Email Notification
Enabling this option will send an email to the user for data alerts and scheduled exports.

#### Notify the User When Their Profile Is Edited
Enabling this option will send an email to the user if their profile is edited.

#### Notify the User When a Resource Is Shared with Them
Enabling this option will send an email to the user whenever they are granted permissions for resources, users, groups, or settings.

#### User Synchronization Notification
Enabling this option will send an email to the user about the user synchronization schedule.

#### Enable Notification for API Key Expiration
Enabling this option will notify you via email and system notification when the token validity for the API key has expired or is about to expire.

### Disable User Preference
Admins can choose to allow or restrict user notification preferences found on the profile page `Notifications` tab. Enabling the `Disable User Preference` will disable all user notification preference options and override them with application notification settings.

![Disale user preference](/static/assets/site-administration/images/disable-user-notification-preference.png#width=55%)

## User Notification Settings

Users can configure their own notification preferences on the profile page `Notifications` tab. More details can be found in the [user profile notifications](/managing-resources/user-profile/#notifications).