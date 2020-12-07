---
layout: post
title: User Group Import from Active Directory | Bold BI Embedded
description: Learn how to search and import user groups from Active Directory into Bold BI Embedded. Only System Administrators can import AD groups.
platform: bold-bi
documentation: ug
---

# Active Directory Group Import

This section explains how to search and import groups from Active Directory into the Bold BI Server.

> **NOTE:**  Active Directory connection has to be configured in the [Active Directory Settings](/embedded-bi/site-administration/active-directory/) in the `General` page for importing groups.

Users belonging to the `System Administrator` group only can import Active Directory groups into the Bold BI Server.

## Search Groups

You can search the Active Directory groups with any one of the below properties and choose them to import into Bold BI Server.

* Group name
* Group description

A maximum of 1000 groups will be searched and pulled from Active Directory in a single request. 

Bold BI Server will search the groups within the specified distinguished name given in the Active Directory settings page and list the search results in the grid.

![Import groups from Active Directory Server](/static/assets/embedded/managing-resources/manage-groups/images/Searched-groups-list.png)  

## Import Groups

To import the Active Directory groups into the Bold BI Server, you have to choose the groups from the list and click on the `Import groups` button at the top right corner.

Bold BI Server will import the chosen groups and a confirmation message will be displayed.

![Success message after imported the Active Directory groups](/static/assets/embedded/managing-resources/manage-groups/images/Active-Directory-group-import-success-window.png)  

The success message box explains the users who all are get imported/not imported into the Bold BI server.

## Duplicate Groups

Active Directory groups who has the same group name as that of the Bold BI Server groups (which are already present) will be marked as duplicate groups and will not be allowed to import into the Bold BI Server.

![Duplicated Active Directory Groups](/static/assets/embedded/managing-resources/manage-groups/images/Active-Directory-Duplicate-group.png)
