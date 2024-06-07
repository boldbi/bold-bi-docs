---
title: Managing Users and Groups – Embedded BI | Bold BI Learning
description: Learn how to add, edit, activate, deactivate, delete users, assigning to groups and manage their permissions with Bold BI Embedded.
canonical: "/managing-resources/manage-users/"
platform: bold-bi
documentation: ug
---

# Manage Users in the Bold BI

This section explains how to add, edit, activate, deactivate, delete users, and manage permissions and assign users to groups in Bold BI.

Users can only be added, edited, or deleted by users belonging to the `System Administrator` group.

![Manage Users](/static/assets/managing-resources/manage-users/images/manage-users.png)

## Add new users

New users can be added to Bold BI individually or in bulk using CSV import.

### Add individual users

To add individual users, click on `New User` and then select `Add User` from the User Management page.

The `Add User` dialog will be displayed as shown in the image below.

![Add User](/static/assets/managing-resources/manage-users/images/add-user.png#width=60%)

Fill out the form with the email address, username, first name, and last name (optional), then click on `Add`.

> **NOTE:** An email address is mandatory only in the [Email required](/site-administration/account-settings/#email-required) mode.  Users created with passwords in the Bold BI application will be considered local users.

A new account will be created for the user, and an account activation email will be sent to the email address with an activation link to activate the Bold BI account.

The activation link sent to the user will be valid for 2 days. If the user has not activated within 2 days, a new activation link can be sent from the user edit page. Please refer to the [Activate Users](#activate-users) section for more details.

The account will remain inactive until the user activates the account from the activation email.

### Add individual users with password

To add users with a password, you must set the Account Activation Mode to `Automatic` in the `Accounts` settings page.

![Automatic Activation](/static/assets/managing-resources/manage-users/images/enable-auto-activation.png)

Next, click on `New User` and then `Add User` from the User Management page.

The `Add User` dialog box will be displayed as shown in the following image.

![Add User with password](/static/assets/managing-resources/manage-users/images/add-user-password.png#width=45%)

The password must meet the following requirements:

It must contains,

* At least 6 characters
* 1 uppercase
* 1 lowercase
* 1 numeric
* 1 special character

### Add existing UMS user

Add an existing UMS user by using the `Add User` dialog to add them to the site.

If you enter the email address of a user already present in UMS, the remaining fields will be automatically filled in and disabled.

Verify the user information and click `Add`.

![User from UMS](/static/assets/managing-resources/manage-users/images/add-user-from-ums.png#width=50%)

To know how to add user in UMS refer [here](/multi-tenancy/manage-users/#add-new-users)

### Import users from CSV

To automate the process of adding a large number of users to Bold BI, download the CSV template file and add the users to it, then import the file.

Navigate to the user management page by clicking the `User Management` dropdown under the `Admin` menu.

![Import from CSV - Navigation](/static/assets/managing-resources/manage-users/images/usermanagement.png#width=55%)

> **NOTE:**  This section will explain how to import users from a CSV file, which can be downloaded from the following location in the Bold BI application. Users created with passwords in the Bold BI application will be considered local users.

#### Add users from CSV file

In the `New User` section, click on `Import from CSV`.

![Import from CSV - Goto Import CSV users page](/static/assets/managing-resources/manage-users/images/goto-import-csv-users.png)

### CSV file Requirements

The first row in the CSV template should represent the column headings. Bold BI assumes that the data from the second line in the file represents the user.

The following columns are considered mandatory in the downloaded CSV file:

* Username
* Email address (It is mandatory only in [Email required](/site-administration/account-settings/#email-required) mode.)
* Full Name
* Password (It is mandatory only in [Automatic activation](/site-administration/account-settings/#automatic-activation) mode.)

Follow the steps below to add users using the CSV template:

1. Download the CSV template.

	![Import from CSV - Download CSV template](/static/assets/managing-resources/manage-users/images/csv-import.png)

2. Add users to the CSV file.

	![Import from CSV - Add users into CSV file](/static/assets/managing-resources/manage-users/images/csv-import-add-users.png#width=40%)

3. Save the CSV file and upload it.

	![Import from CSV - Upload CSV file](/static/assets/managing-resources/manage-users/images/csv-import-upload.png#width=60%)

4. Once the file is uploaded, the user details will be displayed in the grid as shown in the image below.

	![Import from CSV - User detail in grid](/static/assets/managing-resources/manage-users/images/csv-import-grid.png)

5. Click on `Import Users` to import the users from the CSV file.

	![Import from CSV](/static/assets/managing-resources/manage-users/images/csv-import-users.png#width=60%)
    
Bold BI will import the selected users in the background as a job, and a confirmation dialog will appear as shown in the figure below.

  ![Confirmation dialog after import users started](/static/assets/managing-resources/manage-users/images/confirmation-dialogue-on-import-click.png#width=70%)

  You can check the status of the current import by clicking on the View Status button in the confirmation dialog. This will take you to the bulk import job details page where you can view the details of the current import job. Learn more about the [Bulk Import Result](/managing-resources/manage-users/bulk-import-result/) page.

  ![Bulk user import job details page](/static/assets/managing-resources/manage-users/images/import-job-details-page.png#width=70%)

## Edit users
User profile details can be edited from the user's edit page, as shown in the image below.

![Edit User](/static/assets/managing-resources/manage-users/images/edit-user.png)

The username, first name, last name, email, phone number, and login password for the user can be edited by users belonging to the `System Administrator` group.
		
## Remove User
Users can be removed from the Bold BI site when they are no longer required. This can be done from the user management page or the edit user page. Even if a user is removed from the site, they will still be available in the UMS.

### From user management page
Click on the `Remove User` icon to remove the user from the user management page.

![Delete user from user management page](/static/assets/managing-resources/manage-users/images/delete-user-1.png#width=60%)

### From user edit page
Click on `Remove User` from the menu as shown in the image to remove the user from the user management page.

![Delete user from user edit page](/static/assets/managing-resources/manage-users/images/delete-user-2.png)

## Deactivate users
Users can be deactivated at any time. Once deactivated, the user will not be able to log into Bold BI.

Click on `Deactivate User` from the menu as shown in the image.

![Deactivate user account](/static/assets/managing-resources/manage-users/images/deactivate-user.png)

## Activate users
Inactive users can be activated by clicking on the `Resend Activation Code` button on the user edit page.

This will send an account activation email to the user with an activation link to activate the account. This activation link will only be valid for 2 days.

If the user has not received the activation email within 2 days or has missed activating the account, the `System Administrator` must resend the activation email to the user.

![Activate user account - Resend Activation code](/static/assets/managing-resources/manage-users/images/activate-user-resend.png)

## Change Password 
To change a password, the administrator can follow these steps on the Tenant management site:

1. Go to the UMS site by clicking on the profile.

   ![Manage Sites](/static/assets/managing-resources/manage-users/images/manage-sites-for-the-users.png#width=60%)

2. Click on the `Users` option to manage users.

   ![Manage Users List](/static/assets/managing-resources/manage-users/images/manage-users-list.png)

3. Click on the name of the user to change the password. Enter the new password and click the update button.

   ![Goto name of the user](/static/assets/managing-resources/manage-users/images/goto-name-of-the-user.png)

   ![Change Password](/static/assets/managing-resources/manage-users/images/change-the-password.png)

## Manage permissions

The `Manage Permissions` page for the user can be accessed from any of the following pages:

1. Click on `Actions` in the user management grid context menu and select the `Manage Permissions` option.
![Manage Permissions](/static/assets/images/Manage-permissions-user-context.png)

2. Click on the user's name on the user listing page to navigate to the user profile page, then click on `Manage Permissions` on the user profile page.
![Manage Permissions Edit](/static/assets/images/manage-permission-user-edit.png)

In the Manage Permissions grid, you can find the permissions assigned directly to the user as well as the permissions that the user inherited from the assigned groups.

![Manage Permissions](/static/assets/images/manage-permission-user.png)

Click on `Add Permission` to add permissions to the user.

![Add Permission](/static/assets/working-with-dashboards/share-dashboards/images/add-permission-user.png)

### Steps to add permission to the user

1. Select the entity.
2. Select the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode.
4. Click on `Add` to add the specified permission to the user.

You can also select multiple scopes and entities to assign multiple permissions. For more information on how to add and manage permissions, please visit the [Manage Permissions](/managing-resources/manage-permissions/) page.
	
## Assign users to group
* Users can be assigned to one or multiple groups from the user management page.

  ![Assign group to selected users](/static/assets/managing-resources/manage-users/images/assign-group-to-users.png)

* Users can be assigned to an existing group.

  ![Assign existing group to selected users](/static/assets/managing-resources/manage-users/images/assign-group-to-users-1.png#width=65%)

* Users imported from the third-party provider cannot be added to a group imported from the same provider. If you want to map the user with the group, add the user to the group in your user directory provider and synchronize the changes.

  ![Assign existing group to selected users](/static/assets/managing-resources/manage-users/images/assign-group-to-user.png#width=65%)

* A new group can also be created at this time and the selected users can be assigned to the new group.

  ![Assign new group to selected users](/static/assets/managing-resources/manage-users/images/assign-group-to-users-2.png#width=65%)

> **NOTE:**  All users in the group will have the permissions assigned to the group.
