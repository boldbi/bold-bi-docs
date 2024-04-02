---
layout: post
title: User Group Import from Active Directory | Bold BI Embedded
description: Learn how to search and import user groups from Active Directory into Bold BI Embedded. Only System Administrators can import AD groups.
platform: bold-bi
documentation: ug

---

# Active Directory Group Import

This section explains how to search for and import groups from Active Directory into the Bold BI application.

> **NOTE:**  An Active Directory connection must be configured in the [Active Directory Settings](/site-administration/user-directory-settings/active-directory/) on the `General` page in order to import groups. This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

Only users belonging to the `System Administrator` group can import Active Directory groups into the Bold BI application.

## Search Groups

You can search for Active Directory groups using one of the following properties and select them to import into the Bold BI application:

* Group name
* Group description

A maximum of 1000 groups will be searched and pulled from Active Directory in a single request. 

Bold BI Server will search for groups within the specified distinguished name provided in the Active Directory settings page and display the search results in the grid.

![Import groups from Active Directory Server](/static/assets/managing-resources/manage-groups/images/Searched-groups-list.png)  

## Import Groups

To import Active Directory groups into the Bold BI application, you must select the groups from the list and click on `Import Groups` at the top right corner.

![Import Groups from Active Directory](/static/assets/managing-resources/manage-groups/images/import-groups-from-active-directory.png)

Bold BI Server will import the selected groups and display a confirmation message.

![Success message after imported the Active Directory groups](/static/assets/managing-resources/manage-groups/images/Active-Directory-group-import-success-window.png#width=65%)  

The success message box will indicate which users were successfully imported and which were not imported into the Bold BI application.

## Duplicate Groups

Active Directory groups that have the same group name as the Bold BI application groups (which are already present) will be identified as duplicate groups and will not be permitted to be imported into the Bold BI application.

![Duplicated Active Directory Groups](/static/assets/managing-resources/manage-groups/images/Active-Directory-Duplicate-group.png)
