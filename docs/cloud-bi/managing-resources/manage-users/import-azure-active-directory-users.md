---
title: User Import from Azure Active Directory – Cloud BI | Bold BI
description: Learn how to import users from Azure Active Directory in Bold BI Cloud. Also know how to modify existing Azure Active Directory connection.
platform: bold-bi
documentation: ug
---

# Azure Active Directory User Import

This section explains how to search and import users from Azure Active Directory into the Bold BI Cloud.

> **NOTE:**  Azure Active Directory connection has to be configured in the [Azure Active Directory Settings](/cloud-bi/site-administration/azure-active-directory) in the `General` page for importing users.

Users belonging to the `System Administrator` group only can import Azure Active Directory users into the Bold BI.

## Search Users

Initially, any Active Directory users cannot be displayed until searching for the user.

You can search the Azure Active Directory users with any one of the below properties and choose them to import into the Bold BI. 

* Email Address
* Full name

A maximum of 1000 users will be searched and pulled from Azure Active Directory in a single request. 

Bold BI will list the search results of the users in the grid as shown in the below figure.

> **NOTE:**  The search result will be based on "starts with" query. 

![Import Users from Azure Active Directory Server](/static/assets/cloud/managing-resources/manage-users/images/Search-Azure-Active-Directory-User.png)

## Import Users

To import the Azure Active Directory users into the Bold BI, you have to choose the users from the list and click on the `Import and Activate` button at the top right corner.

Bold BI will import the chosen users and a confirmation message will be displayed as shown in the below figure.

![Success message after imported the Azure Active Directory users](/static/assets/cloud/managing-resources/manage-users/images/Azure-Active-Directory-User-imported.png)

## Duplicate Users

Azure Active Directory users who has the same  email address as that of the Bold BI users(who are already present) will be marked as duplicate users and will not be allowed to import into Bold BI.  

![Duplicated Azure Active Directory Users](/static/assets/cloud/managing-resources/manage-users/images/Duplicated-Azure-Active-Directory-Users.png)

## Modify Azure Active Directory Connection

To modify Azure Active Directory configuration settings, click on the `Modify` link as below

![Modify Azure Active Directory Configuration](/static/assets/cloud/managing-resources/manage-users/images/Modify-Azure-Active-Directory-Configuration.png)