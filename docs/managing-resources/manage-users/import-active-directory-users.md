---
title: User Import from Active Directory – Embedded BI | Bold BI
description: Learn how to import users from Windows Active Directory in Bold BI Embedded. Also know how to modify existing Windows Active Directory connection.
platform: bold-bi
documentation: ug
---

# Active Directory User Import

This section explains how to search and import users from Active Directory into the Bold BI application.

> **NOTE:**  Active Directory connection has to be configured in the [Active Directory Settings](/site-administration/user-directory-settings/active-directory/active-directory/) in the `General` page for importing users. This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

Users belonging to the `System Administrator` group only can import Active Directory users into the Bold BI application.

## Search Users

You can search the Active Directory users with any one of the below properties and choose them to import into the Bold BI application. 

* User name
* First name
* Last name
* Email Address
* Display name

A maximum of 1000 users will be searched and pulled from Active Directory in a single request. 

Bold BI application will search the users within the specified distinguished name given in the Active Directory settings page and list the search results in the grid.

![Import Users from Active Directory Server](/static/assets/managing-resources/manage-users/images/Search-Active-Directory-User.png)

## Import Users

To import the Active Directory users into the Bold BI application, you have to choose the users from the list and click `Import` button at the top right corner.

![Import User from Active Directory](/static/assets/managing-resources/manage-users/images/import-user-from-active-directory.png)

Bold BI application will import the chosen users and a confirmation message will be displayed.

![Success message after imported the Active Directory users](/static/assets/managing-resources/manage-users/images/Active-Directory-User-imported.png#width=60%)

> **NOTE:**  Bold BI application will rely on user email for authentication purpose. If imported user doesn't have any email address, then Bold BI server will auto generate the email for that user. Example: if username is `john` and domain name is `example.com`, then user will be imported with auto generated email `john@example.com`

## Duplicate Users

Active Directory users who has the same username or email address as that of the Bold BI application users (who are already present) will be marked as duplicate users and will not be allowed to import into Bold BI application. 

![Duplicated Active Directory Users](/static/assets/managing-resources/manage-users/images/Duplicated-Active-Directory-Users.png#width=60%)

## Modify Active Directory Connection

To modify Active Directory configuration settings, click `Modify` button as below,

![Modify Active Directory Configuration](/static/assets/managing-resources/manage-users/images/Modify-Active-Directory-Configuration.png)
