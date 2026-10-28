---
layout: post
title: Azure AD Groups Synchronization – Embedded BI | Bold BI Docs
description: "Learn how to synchronize an imported Azure Active Directory group and its users with Azure Active Directory in Bold BI Embedded, step by step."
canonical: "/managing-resources/manage-groups/synchronize-azure-active-directory-groups/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory Groups Synchronization

This section explains how to synchronize the imported Azure Active Directory groups and their users with the Azure Active Directory.

> **NOTE:** Before synchronizing the Azure Active Directory groups, follow these steps:
> 1. Configure [Azure Active Directory Settings](/site-administration/user-directory-settings/azure-active-directory/).
> 2. Import groups from the Azure Active Directory to Bold BI by referring to the following link: [Active Directory Group Import](/managing-resources/manage-groups/import-azure-active-directory-groups/).

You can navigate to the group synchronization page from the groups page as shown in the following image.

![Azure Active Directory Synchronization Link](/static/assets/managing-resources/manage-groups/images/Azure-Group-Synchronization-navigation.png)

## Synchronize Groups

Bold BI lists the Azure Active Directory groups that are already imported as shown in the following image.

![Azure Active Directory Imported group list](/static/assets/managing-resources/manage-groups/images/Azure-Active-Direcory-Group-list.png)

Choose the groups you want to synchronize and click `Synchronize` at the top. 

![Azure Active Directory Group Synchronize button](/static/assets/managing-resources/manage-groups/images/Azure-Group-Synchronize-button.png)

### Synchronization Procedure

* Bold BI updates the group's name and description from the Azure Active Directory Server.

* Bold BI deletes the groups if the group has been deleted from the Azure Active Directory Server.

* Bold BI adds or deletes the user from the Bold BI group if the user has been added to or deleted from the Azure Active Directory Server group, respectively. 

    If the new user is not present in Bold BI, then a new user account is created in Bold BI and added to the group.

After synchronization is completed, the number of groups modified, deleted, and duplicated is shown in the success message box as shown in the following image.

![Synchronization confirmation window](/static/assets/managing-resources/manage-groups/images/Synchronize-azure-group-success-window.png#width=70%)

## Duplicate Groups

Azure Active Directory groups that have the same group name as that of the Bold BI groups (which are already present) are marked as duplicate groups and are not allowed to synchronize with Azure Active Directory.

![Display Duplicated groups](/static/assets/managing-resources/manage-groups/images/highlight-duplicate-azure-group.png)