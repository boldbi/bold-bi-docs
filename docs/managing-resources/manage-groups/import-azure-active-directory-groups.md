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

![Import groups from Azure Active Directory Server](/static/assets/managing-resources/manage-groups/images/azure-active-directory-group-search.png)

## Import Groups

To import Azure Active Directory groups into the Bold BI application, you must select the groups from the list and click on `Import Selected Groups` at the top right corner in order to import the selected groups or click on `Import All Groups` at the top right corner in order to import all groups.

![Import Groups from Azure Active Directory](/static/assets/managing-resources/manage-groups/images/Azure-Group-import-page.png)

Bold BI will import the chosen groups in the background as a job, and a confirmation dialog will be displayed as shown in the following figure.

![Confirmation dialog after import groups started](/static/assets/managing-resources/manage-groups/images/group-import-confirmation-dialog.png#width=70%)

You can view the status of the current import by clicking the `View Status` button in the confirmation dialog above. You will be taken to the bulk import job details page below, where you can view the details of the current import job. Please learn more about the [Bulk Import Result](/managing-resources/manage-groups/bulk-import-result/) page.

![Bulk user import job details page](/static/assets/managing-resources/manage-groups/images/group-import-result-active-directory.png#width=70%)

## Duplicate Groups

Azure Active Directory groups that have the same group name as those of the Bold BI groups (which are already present) will be identified as duplicate groups and will not be permitted to be imported into Bold BI.

![Duplicated Azure Active Directory Groups](/static/assets/managing-resources/manage-groups/images/Azure-Active-Directory-Duplicate-group.png)