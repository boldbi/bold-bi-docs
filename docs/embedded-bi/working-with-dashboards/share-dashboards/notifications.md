---
layout: post
title: Managing Dashboard Notifications | Bold BI Embedded Docs
description: Learn how to configure notifications to notify the users of comments on dashboards and widgets in Bold BI Embedded.
canonical: "/cloud-bi/working-with-dashboards/share-dashboards/notifications/"
platform: bold-bi
documentation: ug
---

# Notifications for comments on the dashboards and widgets

This section explains how to configure notifications to notify the users of comments on dashboards and Widgets in Bold BI.

Notifications can be configured by both the `System Administrator` and users.

## Admin notification settings

you can configure how users receive notifications for comments from the admin notification settings page.

![Admin notification settings](/static/assets/embedded/working-with-dashboards/share-dashboards/images/notifications-admin-settings.png)

Let's look at the notification settings individually.

### System notifications

System notifications are the ones that appear in the bottom of the left sidebar above the user's profile picture once the user has logged in the Bold BI, as shown in the following image.  

![System notifications](/static/assets/embedded/working-with-dashboards/share-dashboards/images/notification.png)

### Mail notifications

Users are also notified about comments by mail.

### Autowatch comments on created items

This is a switch for monitoring the comments on items that users have created. Enabling this will send notifications for comments on all items.

### Autowatch comments on accessible items

This is a switch for watching the comments on items that users have access to. Enabling this will send notifications for comments on all items that users have access.

Now, let's look at the default and supported notification settings.

### Default Settings

This is the default settings applied to the user while they are added to Bold BI. Users can change this setting and make their own, or choose to inherit this setting anytime in their profile edit page.

### Allow or Restrict Settings

This is the master setting for Bold BI. Enabling or disabling any setting here will enable or disable it in Bold BI. This will override the default and user settings.

## User notification Settings

Configure how the current user receives notifications for comments from the user notification settings page.

Users can navigate to this page from the profile edit page as shown in the following image.

![User notification settings](/static/assets/embedded/working-with-dashboards/share-dashboards/images/notifications-user-settings-navigation.png)

Refer to the following image to see how to change the notification settings for the current users.

![User notification settings options](/static/assets/embedded/working-with-dashboards/share-dashboards/images/notifications-user-settings.png)

The Settings can be enabled, disabled or inherited from global settings which are the default settings of Bold BI.

### Specific watch

Apart from autowatch on created and accessible items, users can also watch a specific item.

![Dashboard Specific watch](/static/assets/embedded/working-with-dashboards/share-dashboards/images/notifications-specific-watch-button.png)

Users can toggle between a watch and no unwatch for a dashboard comment at any time.