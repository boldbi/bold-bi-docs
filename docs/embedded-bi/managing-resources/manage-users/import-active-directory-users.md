---
title: User Import from Active Directory – Embedded BI | Bold BI
description: Learn how to import users from Windows Active Directory in Bold BI Embedded. Also know how to modify existing Windows Active Directory connection.
platform: bold-bi
documentation: ug
---

# Active Directory User Import

This section explains how to search and import users from Active Directory into the Bold BI Server.

> **NOTE:**  Active Directory connection has to be configured in the [Active Directory Settings](/embedded-bi/site-administration/active-directory/active-directory/) in the `General` page for importing users.

Users belonging to the `System Administrator` group only can import Active Directory users into the Bold BI Server.

## Search Users

You can search the Active Directory users with any one of the below properties and choose them to import into the Bold BI Server. 

* User name
* First name
* Last name
* Email Address
* Display name

A maximum of 1000 users will be searched and pulled from Active Directory in a single request. 

Bold BI Server will search the users within the specified distinguished name given in the Active Directory settings page and list the search results in the grid.

![Import Users from Active Directory Server](/static/assets/embedded/managing-resources/manage-users/images/Search-Active-Directory-User.png)

## Import Users

To import the Active Directory users into the Bold BI Server, you have to choose the users from the list and click on the `Import and Activate` button at the top right corner.

Bold BI Server will import the chosen users and a confirmation message will be displayed.

![Success message after imported the Active Directory users](/static/assets/embedded/managing-resources/manage-users/images/Active-Directory-User-imported.png)

> **NOTE:**  Bold BI server will rely on user email for authentication purpose. If imported user doesn't have any email address, then Bold BI server will auto generate the email for that user. Example: if username is `john` and domain name is `example.com`, then user will be imported with auto generated email `john@example.com`

## Duplicate Users

Active Directory users who has the same username or email address as that of the Bold BI Server users (who are already present) will be marked as duplicate users and will not be allowed to import into Bold BI Server.  

![Duplicated Active Directory Users](/static/assets/embedded/managing-resources/manage-users/images/Duplicated-Active-Directory-Users.png)

## Modify Active Directory Connection

To modify Active Directory configuration settings, click on the `Modify` link as below

![Modify Active Directory Configuration](/static/assets/embedded/managing-resources/manage-users/images/Modify-Active-Directory-Configuration.png)
