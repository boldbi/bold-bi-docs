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

![Import Users from Active Directory Server](/static/assets/managing-resources/manage-users/images/search-active-directory-user-import.png)

## Import Users

To import the Active Directory users into the Bold BI application, you have to choose the users from the list and click the `Import Selected Users` button to import selected users or click the `Import All Users` button to import all users.

![Import User from Active Directory](/static/assets/managing-resources/manage-users/images/import-user-from-window-ad.png)

Bold BI will import the chosen users in the background as a job and a confirmation dialog will be displayed as shown in the following figure.

![Confirmation dialog after import users started](/static/assets/managing-resources/manage-users/images/confirmation-dialogue-on-import-click.png#width=70%)

You can view the status of the current import by clicking the `View Status` button in the above confirmation dialog and you will be navigated to the below bulk import job details page where you can view the details of the current import job. Please learn more about the Bulk Import Result page [here](/managing-resources/manage-users/bulk-import-result/).

![Bulk user import job details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

> **NOTE:**  Bold BI application will rely on user email for authentication purpose. If the imported user doesn't have an email address, then the Bold BI server will auto-generate the email for that user. Example: if the username is `john` and domain name is `example.com`, then the user will be imported with auto-generated email `john@example.com`

## Modify Active Directory Connection

To modify Active Directory configuration settings, click `Modify` button as below,

![Modify Active Directory Configuration](/static/assets/managing-resources/manage-users/images/Modify-Active-Directory-Configuration.png)
