---
title: User Import from Azure AD – Embedded BI | Bold BI Documentation
description: Learn how to import users from Azure Active Directory in Bold BI Embedded. Also know how to modify existing Azure Active Directory connection.
canonical: "/managing-resources/manage-users/import-azure-active-directory-users/"
platform: bold-bi
documentation: ug
---

# Azure Active Directory User Import

This section explains how to search and import users from Azure Active Directory into the Bold BI.

> **NOTE:**  Azure Active Directory connection has to be configured in the [Azure Active Directory Settings](/site-administration/user-directory-settings/azure-active-directory/) in the `General` page for importing users.

Users belonging to the `System Administrator` group only can import Azure Active Directory users into the Bold BI.

## Search Users

Initially, any Active Directory users cannot be displayed until searching for the user.

You can search the Azure Active Directory users with any one of the below properties and choose them to import into the Bold BI. 

* Username
* Email Address
* Full name

A maximum of 1000 users will be searched and pulled from Azure Active Directory in a single request. 

Bold BI will list the search results of the users in the grid as shown in the below figure.

> **NOTE:**  The search result will be based on "starts with" query. 

![Import Users from Azure Active Directory Server](/static/assets/managing-resources/manage-users/images/search-import-user-from-azure-active-directory.png)

## Import Users

To import the Azure Active Directory users into the Bold BI, you have to choose the users from the list and click the `Import Selected Users` button at the top to import specific users or you can import all the users by clicking on the `Import All Users` button.

![Import User from Azure Active Directory](/static/assets/managing-resources/manage-users/images/import-user-from-azure-active-directory-new.png)

Bold BI will import the chosen users in the background as a job and a confirmation dialog will be displayed as shown in the following figure.

![Confirmation dialog after import users started](/static/assets/managing-resources/manage-users/images/confirmation-dialogue-on-import-click.png#width=70%)

You can view the status of the current import by clicking on the `View Status` button in the above confirmation dialog and you will be navigated to the below bulk import job details page where you can view the details of the current import job. Please learn more about the Bulk Import Result page [here](/managing-resources/manage-users/bulk-import-result/).

![Bulk user import job details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

## Modify Azure Active Directory Connection

To modify Azure Active Directory configuration settings, click on the `Modify` link as below

![Modify Azure Active Directory Configuration](/static/assets/managing-resources/manage-users/images/Modify-Azure-Active-Directory-Configuration.png#width=55%)