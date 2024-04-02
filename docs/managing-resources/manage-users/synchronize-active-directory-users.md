---
layout: post
title: Active Directory Users Synchronization | Bold BI Embedded
description: Learn how to synchronize imported user details such as, first name, last name, email address, and contact number from Windows Active Directory in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Active Directory User Synchronization

This section explains how to synchronize the imported Active Directory user details with the Active Directory.

You can navigate to the user synchronization page from the users page.

![Active Directory Synchronization Link](/static/assets/managing-resources/manage-users/images/user-synchronisation-navigation-button.png#width=60%)

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Synchronize Users

Bold BI Server will list the Active Directory users that have already been imported.

![Active Directory Imported user list](/static/assets/managing-resources/manage-users/images/imported-user-list.png)

Choose the users you want to synchronize and click on `Synchronize` at the top. 

![Synchronize button](/static/assets/managing-resources/manage-users/images/Synchronize-button.png)

### Synchronization Procedure

* Bold BI Server will synchronize the user details - username, first name, last name, email address, and contact number with the Active Directory Server.

* Bold BI Server will delete the user if they have been deleted from the Active Directory Server.

After synchronization is complete, the number of users modified, deleted, and duplicated will be shown in the success message box.

![Synchronization confirmation window](/static/assets/managing-resources/manage-users/images/Synchronization-Confirmation-window.png#width=65%)

## Duplicate Users

Active Directory users who have the same username or email address as the Bold BI Server users (who are already present) will be marked as duplicate users and will not be allowed to synchronize into Active Directory.

![Display Duplicated users](/static/assets/managing-resources/manage-users/images/display-duplicate-message.png)
