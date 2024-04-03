---
layout: post
title: User Database Synchronization – Embedded BI | Bold BI Docs
description: Learn how to synchronize imported user details such as, first name, last name, email address, and contact number from existing database in Bold BI Embedded.
canonical: "/managing-resources/manage-users/synchronization-imported-users-from-exisiting-database/"
platform: bold-bi
documentation: ug
---

# Synchronization of Imported Users From the Existing Database

This section explains how to synchronize the imported existing database users' details with the existing database.

You can navigate to the user synchronization page from the users page, as shown in the figure below.

![Imported Database Users Synchronization Link](/static/assets/managing-resources/manage-users/images/user-synchronisation-navigation-button-for-importdb.png#width=60%)

## Synchronize Users

Bold BI will list the imported database users that are already imported, as shown in the figure below.

![Imported user list from Existing Database](/static/assets/managing-resources/manage-users/images/Imported-db-users-list.png)

> **NOTE:**  Only users imported from the database configured in this organization are listed here.

Choose the users you want to synchronize and click on `Synchronize` at the top.

![Synchronize button](/static/assets/managing-resources/manage-users/images/synchronize-button-of-dbusers.png)

### Synchronization procedure

* Bold BI will synchronize the user details - username, first name, last name, email address, and contact number with the existing database users.

* Bold BI will delete the user if the user has been deleted from the existing database.

After synchronization completes, the number of users modified, deleted, duplicated will be shown in the success message box, as shown in the figure below.

![Synchronization confirmation window](/static/assets/managing-resources/manage-users/images/Synchronization-Confirmation-window-of-importdb.png#width=60%)

## Duplicate Users

 Existing database users who have the same username or email address as the Bold BI users (who are already present) will be marked as duplicate users and will not be allowed to synchronize with the imported existing database users.

![Display Duplicated Username](/static/assets/managing-resources/manage-users/images/display-duplicate-usernameof-importdb.png)

![Display Duplicated users](/static/assets/managing-resources/manage-users/images/display-duplicate-message-of-importdb.png)