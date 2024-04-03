---
layout: post
title: Active Directory User Groups Synchronization | Bold BI Docs 
description: Learn how to schedule the synchronization of users and groups from Active Directory with the users and groups in the Bold BI Server.
platform: bold-bi
documentation: ug
---

# Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Active Directory with the users and groups in the Bold BI Server.

> **NOTE:**  Please configure [Active Directory Settings](/site-administration/user-directory-settings/active-directory/active-directory/) before scheduling the synchronization of Active Directory users and groups. This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.
 

![Active Directory Synchronization Schedule](/static/assets/site-administration/images/active-directory-schedule-synchronization.png)

Users and groups of the specified distinguished name from Active Directory can be synchronized to update the details in the Server to ensure the details are up to date.

Active Directory Synchronization can be done for the following objects:
1. Users
2. Groups   

During the synchronization process, users will be removed or added in the Bold BI Server based on their availability in the specified distinguished name from Active Directory.

For more details on synchronizing users and groups from Active Directory with the Bold BI Server, please refer to the following links:

[Synchronize Active Directory Users](/managing-resources/manage-users/synchronize-active-directory-users/)

[Synchronize Active Directory Groups](/managing-resources/manage-groups/synchronize-active-directory-groups/)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, users in the `System Administrator` group will be notified through email about the synchronization status.

## Enable/Disable Synchronization schedule 

The synchronization schedule can be enabled or disabled at any time using the top checkbox.
