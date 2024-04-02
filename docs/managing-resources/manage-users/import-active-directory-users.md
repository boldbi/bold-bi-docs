---
title: User Import from Active Directory – Embedded BI | Bold BI
description: Learn how to import users from Windows Active Directory in Bold BI Embedded. Also know how to modify existing Windows Active Directory connection.
platform: bold-bi
documentation: ug
---

# Active Directory User Import

This section explains how to search for and import users from Active Directory into the Bold BI application.

> **NOTE:**  An Active Directory connection must be configured in the [Active Directory Settings](/site-administration/user-directory-settings/active-directory/active-directory/) on the `General` page in order to import users. This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

Only users belonging to the `System Administrator` group can import Active Directory users into the Bold BI application.

## Search Users

You can search for Active Directory users using any of the following properties and select them to import into the Bold BI application:

* User name
* First name
* Last name
* Email Address
* Display name

A maximum of 1000 users will be searched and retrieved from Active Directory in a single request.

The Bold BI application will search for users within the specified distinguished name provided in the Active Directory settings page and display the search results in the grid.

![Import Users from Active Directory Server](/static/assets/managing-resources/manage-users/images/search-active-directory-user-import.png)

## Import Users

To import Active Directory users into the Bold BI application, you need to select users from the list and click the `Import Selected Users` button to import the selected users or click the `Import All Users` button to import all users.

![Import User from Active Directory](/static/assets/managing-resources/manage-users/images/import-user-from-window-ad.png)

Bold BI will import the selected users in the background as a job, and a confirmation dialog will be shown as depicted in the following figure.

![Confirmation dialog after import users started](/static/assets/managing-resources/manage-users/images/confirmation-dialogue-on-import-click.png#width=70%)

You can view the status of the current import by clicking the `View Status` button in the confirmation dialog above. You will be taken to the bulk import job details page below, where you can view the details of the current import job. Please learn more about the Bulk Import Result page [here](/managing-resources/manage-users/bulk-import-result/).

![Bulk user import job details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

> **NOTE:**  The Bold BI application will rely on the user's email for authentication purposes. If the imported user does not have an email address, the Bold BI server will automatically generate an email for that user. For example, if the username is `John` and the domain name is `example.com`, then the user will be imported with the auto-generated email `john@example.com`.

## Modify Active Directory Connection

To modify Active Directory configuration settings, click the `Modify` button below.

![Modify Active Directory Configuration](/static/assets/managing-resources/manage-users/images/Modify-Active-Directory-Configuration.png)
