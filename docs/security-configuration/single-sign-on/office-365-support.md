---
layout: post
title: Single Sign-On with Office 365 Users and Groups | Bold BI
description: Learn how to configure user directory with Office 365 AD for SSO authentication to share dashboards and email reports with them.
platform: bold-bi
documentation: ug
lang: en
---

# Office 365 support for authentication

Bold BI Cloud supports adding Office 365 users and groups along with your users and groups, so that you can share dashboards and email reports with them. 

Bold BI Cloud supports to import Azure Active Directory users and let them Single Sign-On (federated identity) using their credentials into the Bold BI Cloud. As Office 365 uses the cloud-based user authentication service Azure Active Directory to manage users, Bold BI Cloud in turn supports the Office 365 users and groups to be imported and sign in into it.

> **NOTE:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

Bold BI Cloud supports the below from the Azure Active Directory

[Setup Azure Active Directory](/security-configuration/single-sign-on/azure-active-directory/) settings with the Bold BI Cloud.

[Import users](/managing-resources/manage-users/import-azure-active-directory-users/) from the Azure Active Directory.

[Import groups](/managing-resources/manage-groups/import-active-directory-groups/) from the Active Directory.

[Synchronize user details](/managing-resources/manage-users/synchronize-azure-active-directory-users/) with the Azure Active Directory.

[Synchronize group details and its users](/managing-resources/manage-groups/synchronize-active-directory-groups/) with the Azure Active Directory.

[Schedule the synchronization of user and groups](/site-administration/user-directory-settings/azure-active-directory/azure-active-directory-synchronization-schedule/) between the Bold BI and the Azure Active Directory.
