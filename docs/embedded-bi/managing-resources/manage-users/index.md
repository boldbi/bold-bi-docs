---
title: Managing Users and Groups – Embedded BI | Bold BI Learning
description: Learn how to add, edit, activate, deactivate, delete users, assigning to groups and manage their permissions with Bold BI Embedded.
canonical: "/cloud-bi/managing-resources/manage-users/"
platform: bold-bi
documentation: ug
---

# Manage Users in the Bold BI

This section explains how to add, edit, activate, deactivate, delete users and also to manage the permissions and assign users to groups in the Bold BI.

Users can only be added/edited/deleted by the users, belonging to the `System Administrator` group.

![Manage Users](/static/assets/embedded/managing-resources/manage-users/images/manage-users.png)

## Add new users

New users can be added to the Bold BI individually or in bulk using CSV import

### Add individual users

To add new users to the Bold BI, click `New User` and then `Add User` from the User Management page. 

The `Add User` dialog will be shown as like in the image below.

![Add User](/static/assets/embedded/managing-resources/manage-users/images/add-user.png)

Fill the form with email address, username, first name, and last name(optional) and click `Add`.  

> **NOTE:** An email address is mandatory only in [Email required](/embedded-bi/site-administration/account-settings/#email-required) mode.

New account will be created for the user and an account activation email will be sent to the email address with activation link to activate the Bold BI account.

The activation link sent to the user will be valid only for 2 days and if the user have not activated within the 2 days, a new activation link can be sent to the user from the user edit page. Check [Activate Users](#activate-users) section for more details.

The account will be in inactive status till the user activates the account from the activation email.

### Add individual users with password

To add users with the password, you have to set the Account Activation Mode to `Automatic` in the `Accounts` settings page.

![Automatic Activation](/static/assets/embedded/managing-resources/manage-users/images/enable-auto-activation.png)

Next, click `New User` and then `Add User` from the User Management page.

The `Add User` dialog box will be shown as like in the following image.

![Add User with password](/static/assets/embedded/managing-resources/manage-users/images/add-user-password.png)

The password must meet the following requirements:

It must contains,

* At least 6 characters
* 1 uppercase
* 1 lowercase
* 1 numeric
* 1 special character

### Import users from CSV

To automate the process of adding large number of users to a Bold BI, you can download the CSV template file and add the users in it and then import the file.

You can navigate to the user management page by clicking the `User Management` dropdown under the `Admin` menu as follows.

![Import from CSV - Navigation](/static/assets/embedded/managing-resources/manage-users/images/usermanagement.png)

> **NOTE:**  The section will explain on how to import the users from CSV file which can be downloaded from below location in Bold BI application.

#### Add users from CSV file

In `New User`, click `Import from CSV`.

![Import from CSV - Goto Import CSV users page](/static/assets/embedded/managing-resources/manage-users/images/goto-import-csv-users.png)

### CSV file Requirements

The first row in the CSV template represents the column heading. Bold BI assumes that the data from the second line in the file represents the user.

We have the following columns are considered as mandatory in the downloaded CSV file.

* Username
* Email address (It is mandatory only in [Email required](/embedded-bi/site-administration/account-settings/#email-required) mode.)
* Full Name
* Password (It is mandatory only in [Automatic activation](/embedded-bi/site-administration/account-settings/#automatic-activation) mode.)

Follow the below steps to add users using the CSV template

1. Download CSV template.

	![Import from CSV - Download CSV template](/static/assets/embedded/managing-resources/manage-users/images/csv-import.png)

2. Add users in the CSV file.

	![Import from CSV - Add users into CSV file](/static/assets/embedded/managing-resources/manage-users/images/csv-import-add-users.png)

3. Save the CSV file and upload it.

	![Import from CSV - Upload CSV file](/static/assets/embedded/managing-resources/manage-users/images/csv-import-upload.png)

4. Once the file is uploaded the user details will be shown in the grid as like in the below image.

	![Import from CSV - User detail in grid](/static/assets/embedded/managing-resources/manage-users/images/csv-import-grid.png)

5. Click `Import Users` to import users from the CSV file.

	![Import from CSV](/static/assets/embedded/managing-resources/manage-users/images/csv-import-users.png)

6. After uploading the users in Bold BI the results will be displayed as below.

    ![Import from CSV - Success Message](/static/assets/embedded/managing-resources/manage-users/images/import-csv-users-confirmation.png)
	
## Edit users
User profile details can be edited from the users edit page as shown in the below image.

![Edit User](/static/assets/embedded/managing-resources/manage-users/images/edit-user.png)

Username, first name, last name, email, phone number and the login password for the user can be edited by the user belonging to the 'System Administrator' group.  
		
## Remove User
Users can be removed from the particular site of Bold BI when the user is no longer required in the site. Users can be removed from the user management page or from the edit user page. Even though user removed from the site, the user will be available in the UMS.

### From user management page
Click `Delete` icon to remove the user from the user management page.

![Delete user from user management page](/static/assets/embedded/managing-resources/manage-users/images/delete-user-1.png)

### From user edit page
Click `Remove User` from the menu as shown in the image to remove the user from the user management page.

![Delete user from user edit page](/static/assets/embedded/managing-resources/manage-users/images/delete-user-2.png)

## Deactivate users
Users can be deactivated at any time. Once deactivated, the user cannot log into the Bold BI.

Click `Deactivate User` from the menu as shown in the image,

![Deactivate user account](/static/assets/embedded/managing-resources/manage-users/images/deactivate-user.png)

## Activate users
Inactive users can be activated by clicking on the `Resend Activation Code` button in the user edit page.

This will send an account activation email to the user with an activation link to activate the account and again this activation link will be valid only for 2 days.

If the user has not received the activation email within 2 days or missed to activate the account, the `System Administrator` has to resend the activation email to the user.

![Activate user account - Resend Activation code](/static/assets/embedded/managing-resources/manage-users/images/activate-user-resend.png)

## Change Password 
The administrator can change the user's password from Tenant management site as follows below,

1. Go to the UMS site by clicking profile as follows.

   ![Manage Sites](/static/assets/embedded/managing-resources/manage-users/images/manage-sites-for-the-users.png)

2. Click `Users` option to manage the users.

   ![Goto users in sites](/static/assets/embedded/managing-resources/manage-users/images/goto-users-in-sites.png)

   ![Manage Users List](/static/assets/embedded/managing-resources/manage-users/images/manage-users-list.png)

3. Click Name of the user to change the password. Click update button once the password entered.

   ![Goto name of the user](/static/assets/embedded/managing-resources/manage-users/images/goto-name-of-the-user.png)

   ![Change Password](/static/assets/embedded/managing-resources/manage-users/images/change-the-password.png)

## Manage permissions
Check the [Manage Permissions](/embedded-bi/working-with-dashboards/share-dashboards/manage-permissions/) section to learn how to manage permissions to an user.
	
## Assign users to group
* Users can be assigned to one or many groups from the user management page.

  ![Assign group to selected users](/static/assets/embedded/managing-resources/manage-users/images/assign-group-to-users.png)

* Users can be assigned to an existing group.

  ![Assign existing group to selected users](/static/assets/embedded/managing-resources/manage-users/images/assign-group-to-users-1.png)

* A new group can also be created at this time and the selected users can be assigned to the new group.

  ![Assign new group to selected users](/static/assets/embedded/managing-resources/manage-users/images/assign-group-to-users-2.png)

> **NOTE:**  All the users in the group will have the permissions of assigned group.
