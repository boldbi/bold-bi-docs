---
layout: post
title: User Group Import from Azure AD – Embedded BI | Bold BI Docs
description: Learn how to search and import user groups from Azure Active Directory into Bold BI Embedded. Only System Administrators can import Azure Active Directory groups.
canonical: "/managing-resources/manage-groups/import-azure-active-directory-groups/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory Group Import

This section explains how to search for and import groups from Azure Active Directory into Bold BI.

> **NOTE:**  A connection to Azure Active Directory must be configured in the [Azure Active Directory Settings](/site-administration/user-directory-settings/azure-active-directory/) on the `General` page in order to import groups.

Only users belonging to the `System Administrator` group can import Azure Active Directory groups into Bold BI.

## Search Groups

Initially, Active Directory groups cannot be displayed through a simple search.

Azure Active Directory groups can be searched using any of the following properties and selected for import into Bold BI:

* Group name

A maximum of 1000 groups can be searched and pulled from Azure Active Directory in a single request.

Bold BI will display the search results of the groups in a grid format.

![Import groups from Azure Active Directory Server](/static/assets/managing-resources/manage-groups/images/Searched-azure-groups-list.png)

## Import Groups

To import Azure Active Directory groups into Bold BI, you must choose the groups from the list and click `Import groups` at the top right corner.

![Import Groups from Azure Active Directory](/static/assets/managing-resources/manage-groups/images/import-groups-from-azure-active-directory.png)

Bold BI will import the chosen groups and a confirmation message will be displayed as shown in the following image.

![Success message after imported the Azure Active Directory groups](/static/assets/managing-resources/manage-groups/images/Azure-Active-Directory-group-import-success-window.png#width=70%)

The success message box will provide information about which users were imported and which were not into Bold BI.

## Duplicate Groups

Azure Active Directory groups that have the same group name as those of the Bold BI groups (which are already present) will be identified as duplicate groups and will not be permitted to be imported into Bold BI.

![Duplicated Azure Active Directory Groups](/static/assets/managing-resources/manage-groups/images/Azure-Active-Directory-Duplicate-group.png)