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

![Import groups from Active Directory Server](/static/assets/managing-resources/manage-groups/images/active-directory-group-search.png)  

## Import Groups

To import Active Directory groups into the Bold BI application, you must select the groups from the list and click on `Import Selected Groups` at the top right corner in order to import the selected groups or click on `Import All Groups` at the top right corner in order to import all groups.

![Import Groups from Active Directory](/static/assets/managing-resources/manage-groups/images/active-directory-group-import-page.png)

Bold BI will import the chosen groups in the background as a job, and a confirmation dialog will be displayed as shown in the following figure.

![Confirmation dialog after import groups started](/static/assets/managing-resources/manage-groups/images/group-import-confirmation-dialog.png#width=70%)

You can view the status of the current import by clicking the `View Status` button in the confirmation dialog above. You will be taken to the bulk import job details page below, where you can view the details of the current import job. Please learn more about the [Bulk Import Result](/managing-resources/manage-groups/bulk-import-result/) page.

![Bulk user import job details page](/static/assets/managing-resources/manage-groups/images/group-import-result-active-directory.png#width=70%)

## Duplicate Groups

Active Directory groups that have the same group name as the Bold BI application groups (which are already present) will be identified as duplicate groups and will not be permitted to be imported into the Bold BI application.

![Duplicated Active Directory Groups](/static/assets/managing-resources/manage-groups/images/Active-Directory-Duplicate-group.png)
