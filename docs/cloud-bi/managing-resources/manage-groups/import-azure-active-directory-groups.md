---
layout: post
title: User Group Import from Azure AD – Cloud BI | Bold BI Docs
description: Learn how to search and import user groups from Azure Active Directory into Bold BI Cloud. Only System Administrators can import Azure Active Directory groups.
platform: bold-bi
documentation: ug
---

# Azure Active Directory Group Import

This section explain on how to search and import groups from Azure Active Directory into the Bold BI.

> **NOTE:**  Azure Active Directory connection has to be configured in the [Azure Active Directory Settings](/cloud-bi/site-administration/azure-active-directory/) in the `General` page for importing groups.

Users belonging to the `System Administrator` group only can import Azure Active Directory groups into the Bold BI.

## Search Groups

Initially, any Active Directory groups cannot be displayed until searching for the group.

You can search the Azure Active Directory groups with any one of the below properties and choose them to import into Bold BI.

* Group name

A maximum of 1000 groups will be searched and pulled from Azure Active Directory in a single request. 

Bold BI will list the search results of the groups in the grid as shown in the below figure.

![Import groups from Azure Active Directory Server](/static/assets/cloud/managing-resources/manage-groups/images/Searched-azure-groups-list.png)

## Import Groups

To import the Azure Active Directory groups into the Bold BI, you have to choose the groups from the list and click on the `Import groups` button at the top right corner.

Bold BI will import the chosen groups and a confirmation message will be displayed as shown in the below figure.

![Success message after imported the Azure Active Directory groups](/static/assets/cloud/managing-resources/manage-groups/images/Azure-Active-Directory-group-import-success-window.png)

The success message box explains the users who all are get imported/not imported into the Bold BI.

## Duplicate Groups

Azure Active Directory groups who has the same groupname as that of the Bold BI groups(which are already present) will be marked as duplicate groups and will not be allowed to import into Bold BI.

![Duplicated Azure Active Directory Groups](/static/assets/cloud/managing-resources/manage-groups/images/Azure-Active-Directory-Duplicate-group.png)