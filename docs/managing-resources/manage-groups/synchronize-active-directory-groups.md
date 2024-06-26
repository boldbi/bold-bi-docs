---
layout: post
title: AD Groups Synchronization – Embedded BI | Bold BI Learning
description: Learn how to synchronize the imported Active Directory group and its users with the Active Directory in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Active Directory Group Synchronization

This section explains how to synchronize the imported Active Directory group and its users with the Active Directory.

You can navigate to the group synchronization page from the groups page.

![Active Directory Synchronization Link](/static/assets/managing-resources/manage-groups/images/Group-Synchronization-navigation.png)

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Synchronize Groups

Bold BI Server will list the Active Directory groups that are already imported.

![Active Directory Imported group list](/static/assets/managing-resources/manage-groups/images/Active-Direcory-Group-list.png)

Choose the groups you want to synchronize and click on `Synchronize` at the top. 

![Active Directory Group Synchronize button](/static/assets/managing-resources/manage-groups/images/Group-Synchronize-button.png)

### Synchronization Procedure

* Bold BI Server will update the users in the group, the group’s name, and description from the Active Directory Server.

* Bold BI Server will delete the groups if the group has been deleted from the Active Directory Server.

* Bold BI Server will delete the user from the Server group if the user has been deleted from the Active Directory Server group. Bold BI Server will add the user into the Server if a new user is added to the Active Directory group. If the new user is not present in the Bold BI Server, then a new user account will be created in the Bold BI Server and added to the group. 

After synchronization completes, the number of groups modified, deleted, duplicated will be shown in the success message box.

![Synchronization confirmation window](/static/assets/managing-resources/manage-groups/images/Synchronize-group-success-window.png#width=65%)

## Duplicate Groups

Active Directory groups that have the same group name as those of the Bold BI Server groups (which are already present) will be marked as duplicate groups and will not be allowed to synchronize with Active Directory.

![Display Duplicated groups](/static/assets/managing-resources/manage-groups/images/highlight-duplicate-group.png)
