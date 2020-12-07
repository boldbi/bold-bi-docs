---
title: Managing Users and Groups – Cloud BI | Bold BI Documentation
description: Learn how to add, edit, activate, deactivate, delete users, assigning to groups and manage their permissions with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Manage Users in the Bold BI

This section explains on how to add, edit, activate, deactivate, delete users and also on how to manage the permissions and assign users to groups in the Bold BI Cloud.

Users can only be added/edited/deleted by the users, belonging to the `System Administrator` group.

![Manage Users](/static/assets/cloud/managing-resources/manage-users/images/manage-users.png)

## Add new users

New users can be added to the Bold BI individually or in bulk using CSV import

### Add individual users

To add new users to the Bold BI, click on `New User` and then `Create User` from the User Management page. 

The `Add User` dialog will be shown as like in the image below.

![Add User](/static/assets/cloud/managing-resources/manage-users/images/add-user.png)

Fill the form with Email address, First name and Last name and click on `Add`. 

New account will be created for the user and an account activation email will be sent to the email address with activation link to activate the Bold BI account.

The activation link sent to the user will be valid only for 2 days and if the user have not activated within the 2 days, a new activation link can be sent to the user from the user edit page. Check [Activate Users](#activate-users) section for more details.

The account will be in inactive status till the user activates the account from the activation email.

> **NOTE:**  User emails cannot be updated once created. Please make sure to provide the correct email id before create the user.

### Import users from CSV

To automate the process of adding large number of users to a Bold BI Cloud, you can download the CSV template file and add the users in it and then import the file.

You can navigate to user management page by click `User Management` drop down under the `Admin` menu as below.

![Import from CSV - Navigation](/static/assets/cloud/managing-resources/manage-users/images/usermanagement.png)

> **NOTE:**  The section will explain on how to import the users from CSV file which can be downloaded from below location in Bold BI application.

#### Add users from CSV file

In Bold BI, click `Import from csv`.

![Import from CSV - Goto Import CSV users page](/static/assets/cloud/managing-resources/manage-users/images/goto-import-csv-users.png)

### CSV file Requirements

The first row in the CSV template represents the column heading. Bold BI Cloud assumes that the data from the second line in the file represents the user.

We have the following columns are considered as mandatory in the downloaded CSV file.

* Email address
* Full Name

Follow the below steps to add users using the CSV template

1. Download CSV template.

	![Import from CSV - Download CSV template](/static/assets/cloud/managing-resources/manage-users/images/csv-import.png)

2. Add users in the CSV file.

	![Import from CSV - Add users into CSV file](/static/assets/cloud/managing-resources/manage-users/images/csv-import-add-users.png)

3. Save the CSV file and upload it.

	![Import from CSV - Upload CSV file](/static/assets/cloud/managing-resources/manage-users/images/csv-import-upload.png)

4. Once the file is uploaded the user details will be shown in the grid as like in the below image.

	![Import from CSV - User detail in grid](/static/assets/cloud/managing-resources/manage-users/images/csv-import-grid.png)

5. After uploaded the users in Bold BI the results are displayed as below.

    ![Import from CSV - Success Message](/static/assets/cloud/managing-resources/manage-users/images/import-csv-users-confirmation.png)
	
## Edit users
User profile details can be edited from the users edit page as shown in the below image.

![Edit User](/static/assets/cloud/managing-resources/manage-users/images/edit-user.png)

First Name, Last Name, Phone number and the login password for the user can be edited by the user belonging to the 'System Administrator' group.  
		
## Delete users
Users can be deleted from the Bold BI when the user no longer requires the access. Users can be deleted from the user management page or from the edit page.

### From user management page

![Delete user from user management page](/static/assets/cloud/managing-resources/manage-users/images/delete-user-1.png)

### From user edit page

![Delete user from user edit page](/static/assets/cloud/managing-resources/manage-users/images/delete-user-2.png)

## Deactivate users
Users can be deactivated at any time. Once deactivated, the user cannot log into the Bold BI.
To deactivate a user, select inactive from the status dropdown in the user edit page.

![Deactivate user account](/static/assets/cloud/managing-resources/manage-users/images/deactivate-user.png)

## Activate users
Inactive users can be activated by clicking on the `Resend Activation Code` button in the user edit page.

This will send an account activation email to the user with an activation link to activate the account and again this activation link will be valid only for 2 days.

If the user has not received the activation email within 2 days or missed to activate the account, the `System Administrator` has to resend the activation email to the user.

![Activate user account - Resend Activation code](/static/assets/cloud/managing-resources/manage-users/images/activate-user-resend.png)

## Change Password 
The administrator can change the user's password from Tenant management site as follows below,

Go to the UMS site by click on the profile as below,

![Manage Sites](/static/assets/cloud/managing-resources/manage-users/images/manage-sites-for-the-users.png)

Click the 'Users' option to manage the users.

![Goto users in sites](/static/assets/cloud/managing-resources/manage-users/images/goto-users-in-sites.png)

![Manage Users List](/static/assets/cloud/managing-resources/manage-users/images/manage-users-list.png)

Click the Name of the user to change the password. Click on the update button once the password entered.

![Goto name of the user](/static/assets/cloud/managing-resources/manage-users/images/goto-name-of-the-user.png)

![Change Password](/static/assets/cloud/managing-resources/manage-users/images/change-the-password.png)

## Manage permissions
Check the [Manage Permissions](/cloud-bi/working-with-dashboards/share-dashboards/manage-permissions/) section to learn how to manage permissions to an user.
	
## Assign users to group
Users can be assigned to one or many groups from the user management page.

![Assign group to selected users](/static/assets/cloud/managing-resources/manage-users/images/assign-group-to-users.png)

Users can be assigned to an existing group.

![Assign existing group to selected users](/static/assets/cloud/managing-resources/manage-users/images/assign-group-to-users-1.png)

A new group can also be created at this time and the selected users can be assigned to the new group.

![Assign new group to selected users](/static/assets/cloud/managing-resources/manage-users/images/assign-group-to-users-2.png)

> **NOTE:**  All the users in the group will have the permissions of assigned group.
