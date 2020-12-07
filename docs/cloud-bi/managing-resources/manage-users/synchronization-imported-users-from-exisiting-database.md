---
layout: post
title: User Database Synchronization – Cloud BI | Bold BI Learning
description: Learn how to synchronize imported user details such as, first name, last name, email address, and contact number from existing database in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Synchronization of Imported Users From the Existing Database

This section explains how to synchronize the imported existing database users details with the Existing database.

You can navigate to the user synchronization page from users page as shown in the below figure.

![Imported Database Users Synchronization Link](/static/assets/cloud/managing-resources/manage-users/images/user-synchronisation-navigation-button-for-importdb.png)

## Synchronize Users

Bold BI will list the Imported Database users that are already imported as shown in the below figure.

![Imported user list from Existing Database](/static/assets/cloud/managing-resources/manage-users/images/Imported-db-users-list.png)

> **NOTE:**  Only users imported from the database configured in this organization are listed here.

Choose the users you want to synchronize and click on `Synchronize` at the top. 

![Synchronize button](/static/assets/cloud/managing-resources/manage-users/images/synchronize-button-of-dbusers.png)

### Synchronization procedure

* Bold BI will synchronize the user details - first name, last name, email address, contact number with the Existing Database.

* Bold BI will delete the user if the user has deleted from the Existing Database. 

After synchronization completes, the number of users modified, deleted, duplicated will be shown in the success message box as shown in the below figure.

![Synchronization confirmation window](/static/assets/cloud/managing-resources/manage-users/images/Synchronization-Confirmation-window-of-importdb.png)

## Duplicate Users

 Existing Database users who has the same email address as that of the Bold BI users(who are already present) will be marked as duplicate users and will not be allowed to synchronize with the imported existing database users.

![Display Duplicated users](/static/assets/cloud/managing-resources/manage-users/images/display-duplicate-message-of-importdb.png)