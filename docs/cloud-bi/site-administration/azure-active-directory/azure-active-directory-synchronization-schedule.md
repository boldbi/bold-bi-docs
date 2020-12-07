---
layout: post
title: Scheduling Azure AD Synchronization – Cloud BI | Bold BI
description: Learn how to schedule the synchronization of users and groups from Azure Active Directory with the users and groups in Bold BI.
platform: bold-bi
documentation: ug
---

# Azure Active Directory Synchronization Schedule

This section explains how to schedule the synchronization of users and groups from Azure Active Directory with the users and groups in the Bold BI.

> **NOTE:**  Before scheduling the synchronization of Azure Active Directory users and groups, follow the given steps:
> 1. Configure [Azure Active Directory Settings](/cloud-bi/site-administration/azure-active-directory/)
> 2. To synchronize Azure Active Directory users, you should import users from the Azure Active Directory to the Bold BI by referring the following link [Azure Active Directory User Import](/cloud-bi/managing-resources/manage-users/import-azure-active-directory-users/)
> 3. To synchronize Azure Active Directory groups, you should import groups from the Azure Active Directory to the Bold BI by referring the following link [Azure Active Directory Group Import](/cloud-bi/managing-resources/manage-groups/import-azure-active-directory-groups/)

![Active Directory Synchronization Schedule](/static/assets/cloud/site-administration/images/azure-active-directory-schedule-synchronization.png)

Users and groups from Azure Active Directory can be synchronized on schedule to get the latest details of them into the Bold BI.

Please find more details on the synchronization of users and groups from Azure Active Directory with Bold BI in the below links.
[Synchronize Active Directory Users](/cloud-bi/managing-resources/manage-users/synchronize-azure-active-directory-users/)
[Synchronize Active Directory Groups](/cloud-bi/managing-resources/manage-groups/synchronize-azure-active-directory-groups/)

## Email Notifications

Once a scheduled recurrence of synchronization is completed, the users in the `System Administrator` group will be notified through email about the synchronization status.

## Enable/Disable Synchronization schedule 
Synchronization schedule can be enabled or disabled anytime from the top check box.