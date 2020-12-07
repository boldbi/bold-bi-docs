---
layout: post
title: Active Directory User Groups Synchronization | Bold BI Docs 
description: Learn how to schedule the synchronization of users and groups from Active Directory with the users and groups in the Bold BI Server.
platform: bold-bi
documentation: ug
---

# Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Active Directory with the users and groups in the Bold BI Server.

> **NOTE:**  Please configure [Active Directory Settings](/embedded-bi/site-administration/active-directory/active-directory/), before you schedule synchronization of Active Directory users and groups.   

![Active Directory Synchronization Schedule](/static/assets/embedded/site-administration/images/active-directory-schedule-synchronization.png)

Users and groups of the specified distinguished name from Active Directory can be synchronized to update the details in the Server to make the details synchronized up to date.

The Active Directory Synchronization can be done for the below objects,
1. Users
2. Groups   

The users will be removed or added in the Bold BI Server based on its availability in the specified distinguished name from Active Directory during the synchronization process.

Please find more details on the synchronization of users and groups from Active Directory with Bold BI Server in the below links.

[Synchronize Active Directory Users](/embedded-bi/managing-resources/manage-users/synchronize-active-directory-users/)

[Synchronize Active Directory Groups](/embedded-bi/managing-resources/manage-groups/synchronize-active-directory-groups/)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, the users in the `System Administrator` group will be notified through email about the synchronization status.

## Enable/Disable Synchronization schedule 

Synchronization schedule can be enabled or disabled anytime from the top check box.
