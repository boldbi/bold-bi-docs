---
layout: post
title: Scheduling Azure AD Synchronization – Embedded BI | Bold BI
description: Learn how to schedule the synchronization of users and groups from Azure Active Directory with the users and groups in Bold BI Embedded.
canonical: "/site-administration/user-directory-settings/azure-active-directory/azure-active-directory-synchronization-schedule/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Azure Active Directory with the users and groups in Bold BI.

> **NOTE:** Before scheduling the synchronization of Azure Active Directory users and groups, follow these steps:
> 1. Configure [Azure Active Directory Settings](/site-administration/user-directory-settings/azure-active-directory/).
> 2. To synchronize Azure Active Directory users, you should import users from Azure Active Directory to Bold BI by referring to the following link: [Azure Active Directory User Import](/managing-resources/manage-users/import-azure-active-directory-users/).
> 3. To synchronize Azure Active Directory groups, you should import groups from Azure Active Directory to Bold BI by referring to the following link: [Azure Active Directory Group Import](/managing-resources/manage-groups/import-azure-active-directory-groups/).

![Active Directory Synchronization Schedule](/static/assets/site-administration/images/azure-active-directory-schedule-synchronization.png)

Users and groups from Azure Active Directory can be synchronized as per schedule to get the latest details of them into Bold BI.

Please find more details about the synchronization of users and groups from Azure Active Directory with Bold BI in the following links:
[Synchronize Active Directory Users](/managing-resources/manage-users/synchronize-azure-active-directory-users/)
[Synchronize Active Directory Groups](/managing-resources/manage-groups/synchronize-azure-active-directory-groups/)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, the users in the `System Administrator` group will be notified by email about the synchronization status.

## Enable/Disable Synchronization schedule 
The synchronization schedule can be enabled or disabled at any time using the checkbox at the top.