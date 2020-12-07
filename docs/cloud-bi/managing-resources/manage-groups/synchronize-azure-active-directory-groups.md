---
layout: post
title: Azure AD Groups Synchronization – Cloud BI | Bold BI Docs
description: Learn how to synchronize the imported Azure Active Directory group and its users with the Azure Active Directory in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Azure Active Directory Group Synchronization

This section explains how to synchronize the imported Azure Active Directory group and its users with the Azure Active Directory.

> **NOTE:**  Before synchronizing the Azure Active Directory groups, follow the given steps:
> 1. Configure [Azure Active Directory Settings](/cloud-bi/site-administration/azure-active-directory/)
> 2. Import groups from the Azure Active Directory to the Bold BI by referring the following link [Active Directory Group Import](/cloud-bi/managing-resources/manage-groups/import-azure-active-directory-groups/).

You can navigate to the group synchronization page from groups page as shown in the below figure.

![Azure Active Directory Synchronization Link](/static/assets/cloud/managing-resources/manage-groups/images/Azure-Group-Synchronization-navigation.png)

## Synchronize Groups

Bold BI will list the Azure Active Directory groups that are already imported as shown in the below figure.

![Azure Active Directory Imported group list](/static/assets/cloud/managing-resources/manage-groups/images/Azure-Active-Direcory-Group-list.png)

Choose the groups you want to synchronize and click on `Synchronize` at the top. 

![Azure Active Directory Group Synchronize button](/static/assets/cloud/managing-resources/manage-groups/images/Azure-Group-Synchronize-button.png)

### Synchronization procedure

* Bold BI will update the group's name and description from the Azure Active Directory Server.

* Bold BI will delete the groups if the group has been deleted from the Azure Active Directory Server.

* Bold BI will delete the user from Bold BI group, if the user has been deleted from Azure Active Directory Server group. Bold BI will add the user into Bold BI, if a new user is added into the Azure Active Directory group. If the new user is not present in the Bold BI, then a new user account will be created in the Bold BI and will be added into the group. 

After synchronization completes, the number of groups modified, deleted, duplicated will be shown in the success message box as shown in the below figure.

![Synchronization confirmation window](/static/assets/cloud/managing-resources/manage-groups/images/Synchronize-azure-group-success-window.png)

## Duplicate Groups

Azure Active Directory groups who has the same group name as that of the Bold BI groups(which are already present) will be marked as duplicate groups and will not be allowed to synchronize with Azure Active Directory.

![Display Duplicated groups](/static/assets/cloud/managing-resources/manage-groups/images/highlight-duplicate-azure-group.png)