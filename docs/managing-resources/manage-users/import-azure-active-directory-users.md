---
title: User Import from Azure AD – Embedded BI | Bold BI Documentation
description: Learn how to import users from Azure Active Directory in Bold BI Embedded. Also know how to modify existing Azure Active Directory connection.
canonical: "/managing-resources/manage-users/import-azure-active-directory-users/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory User Import

This section explains how to search for and import users from Azure Active Directory into Bold BI.

> **NOTE:**  Azure Active Directory connection has to be configured in the [Azure Active Directory Settings](/site-administration/user-directory-settings/azure-active-directory/) in the `General` page for importing users.

Only users belonging to the `System Administrator` group can import Azure Active Directory users into Bold BI.

## Search Users

Initially, Active Directory users will not be displayed until a search is conducted.

You can search for Azure Active Directory users using any of the following properties and choose to import them into Bold BI:

* Username
* Email Address
* Full name

A maximum of 1000 users will be searched and pulled from Azure Active Directory in a single request. 

Bold BI will display the search results of the users in a grid, as shown in the figure below.

> **NOTE:**  The search results will be based on a `starts with` query.

![Import Users from Azure Active Directory Server](/static/assets/managing-resources/manage-users/images/search-import-user-from-azure-active-directory.png)

## Import Users

To import Azure Active Directory users into Bold BI, you must select the users from the list and click the `Import Selected Users` button at the top to import specific users. Alternatively, you can import all users by clicking on the `Import All Users` button.

![Import User from Azure Active Directory](/static/assets/managing-resources/manage-users/images/import-user-from-azure-active-directory-new.png)

Bold BI will import the selected users in the background as a job, and a confirmation dialog will be displayed as shown in the following figure.

![Confirmation dialog after import users started](/static/assets/managing-resources/manage-users/images/confirmation-dialogue-on-import-click.png#width=70%)

You can check the status of the current import by clicking on the `View Status` button in the confirmation dialog above. This will take you to the bulk import job details page where you can see the specifics of the current import job. For more information about the [Bulk Import Result](/managing-resources/manage-users/bulk-import-result/) page.

![Bulk user import job details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

## Modify Azure Active Directory Connection

To adjust Azure Active Directory configuration settings, click on the `Modify` link below.

![Modify Azure Active Directory Configuration](/static/assets/managing-resources/manage-users/images/Modify-Azure-Active-Directory-Configuration.png#width=55%)