---
layout: post
title: Import Users from Database – Embedded BI | Bold BI Learning
description: Learn how to import users from database in Bold BI Embedded. Also know how to modify existing database connection.
canonical: "/managing-resources/manage-users/import-database-users/"
platform: bold-bi
documentation: ug
---

# User Import from a Database

This section explains how to import users from a database into Bold BI Embedded.

Only users belonging to the `System Administrator` group can import users from the database into Bold BI.

## Listing Database Users

To add new users to Bold BI, click on `New User` and then `Import from Database` from the User Management page.

![Add New Users](/static/assets/managing-resources/manage-users/images/add-new-users.png#width=50%)

The link will redirect to another page that will look like the following:

![Import Users from Database - Home](/static/assets/managing-resources/manage-users/images/import-users-home.png)


## Select Users and Import

After selecting columns, the data retrieved from the database will be shown in the Grid. Select the users to be imported and click on `Import Selected Users` to import the selected users, or you can import all the users by clicking on the `Import All Users` button.

![Import Database Users](/static/assets/managing-resources/manage-users/images/import-from-database-users.png)


Bold BI will import the chosen users in the background as a job, and a confirmation dialog will be displayed as shown in the following figure.

![Confirmation dialog after import users started](/static/assets/managing-resources/manage-users/images/confirmation-dialogue-on-import-click.png#width=70%)

You can view the status of the current import by clicking on the `View Status` button in the above confirmation dialog, and you will be navigated to the bulk import job details page where you can view the details of the current import job. Please learn more about the [Bulk Import Result](/managing-resources/manage-users/bulk-import-result/) page.

![Bulk user import job details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

## Modify Existing Database Connection

To modify existing database configuration settings, click on the `Modify` link as shown below.

![Modify Database Configuration](/static/assets/managing-resources/manage-users/images/Modify-Database-settings-Configuration.png)