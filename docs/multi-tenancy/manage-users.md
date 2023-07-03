---
title: Manage users in Multi-tenancy of Embedded BI | Bold BI Docs
description: Learn here how to add, update, activate, delete users, grant access to the site and more in User Management Server of Embedded Bold BI.
canonical: "/managing-resources/manage-users/"
platform: bold-bi
documentation: ug
---

# Manage Users in UMS

This section explains how to add, update, activate and delete users.

Users can only be added/edited/deleted by those who are having UMS admin access.

## Add new users

New users can be added to UMS individually or in bulk by using CSV import.

### Add individual users

To add a new user in UMS, click `New User` and then `Add User` from the User Management page. 

The `Add User` dialog will be shown as in the image below.

![Add User Dialog Proceed](/static/assets/multi-tenancy/images/add-user-dialog-proceed.png#max-width=95%)

![Add User Dialog](/static/assets/multi-tenancy/images/add-user-dialog-save.png#max-width=95%)

![Add User Dialog](/static/assets/multi-tenancy/images/add-user-success-prompt.png#max-width=95%)

> **NOTE:**  
> * If the account activation mode is Automatic, then the new user will be automatically activated. 
> * If the activation type is Email, then the user will receive an email for activating their account. The user account will be activated after verifying the email. By default, the Account Activation Mode is Automatic.
> * Kindly refer to [Account settings](/site-administration/account-settings/) page for more details.

**Automatic activation**|**Email activation**
-----|-----
1. Fill the form with a Username, Email address, First name, Last name and password and then click on `Add`.|1. Fill the form with a Username, Email address, First name and Last name and then click on `Add`.
2. Please refer to [this](#password-requirement) section for password requirement.|2. To activate the user, please check [Activate Users](#activate-users) section for more details.

### Import users from CSV

To automate the process of adding a large number of users to UMS, you can download the CSV template file and add the users in it and then import the file.

> **NOTE:**  The section will explain on how to import the users from CSV file which can be downloaded from below location in UMS.

#### Add users from CSV file

In UMS, click `Import from csv`.

![Import from CSV - Goto Import CSV users page](/static/assets/multi-tenancy/images/goto-import-csv-users.png#max-width=95%)

### CSV file Requirements

The first row in the CSV template represents the column heading. UMS assumes that the data from the second line in the file represents the user.

We have the following columns are considered as mandatory in the downloaded CSV file.

**Automatic Activation**|**Email Activation**
:-----:|:-----:
Username|Full Name
Full Name|Email
Password|-

Follow the below steps to add users using the CSV template

1. Download CSV template.

	![Import from CSV - Download CSV template](/static/assets/multi-tenancy/images/download-csv-template.png#max-width=95%)

2. Add users in the CSV. Save the file and upload it.

	![Import from CSV - Add users into CSV file](/static/assets/multi-tenancy/images/csv-import-add-users.png#max-width=95%)

3. Once the file is uploaded the user details will be shown in the grid like in the below image. Click `Import Users` to add the users.

	![Import from CSV - User detail in grid](/static/assets/multi-tenancy/images/csv-import-proceed.png#max-width=95%)

4. After uploaded the users in UMS the results are displayed as below.

    ![Import from CSV - Success Message](/static/assets/multi-tenancy/images/csv-import-success-prompt.png#max-width=95%)
	
### Password Requirement
The password must meet the following requirements:

It must contain,

* At least 6 characters,
* 1 uppercase,
* 1 lowercase,
* 1 numeric,
* 1 special character.

![Password Requirement](/static/assets/multi-tenancy/images/user-add-dialog-password-validation.png#max-width=40%)

## Activate users
Once the user is added new account will be created for the user and an account activation email will be sent to the email address with an activation link to activate the Bold BI account.

The activation link sent to the user will be valid only for 2 days and if the user have not activated within the 2 days, a new activation link can be sent to the user from the user edit page.

The account will be on inactive status till the user activates the account from the activation email.

## Edit users
User profile details can be edited by the users edit page as shown in the below image.

![Edit User](/static/assets/multi-tenancy/images/edit-user-proceed.png#max-width=95%)

Username, First Name, Last Name, Phone number and profile picture of the user can be edited.

![Edit User Profile](/static/assets/multi-tenancy/images/edit-user.png#max-width=95%)

## Change Password 
If the users forgot their password, Administrators can able to reset the password for the users by using this option.

Please refer to [this](#password-requirement) section for password requirement.

![Change Password](/static/assets/multi-tenancy/images/change-password.png#max-width=95%)

## Two Factor Authentication
The user can enable [2FA](/embedded-bi/profile/#two-factor-authentication) for their account. If the user loses the recovery code or authenticator application, the admin can disable the 2FA or regenerate a new set of codes for the user. This can be done by using the Two-Factor Authentication tab in the `security` section.

### Regenerate Recovery code for user
To regenerate the recovery code for the user, view the user detail and click `Regenerate Recovery Code` in the Two Factor Authentication tab.

![2FA admin regenerate recovery code](/static/assets/multi-tenancy/images/regenerate-recovery-code-admin.png#max-width=95%)

Then click `yes` to generate a recovery code. After that, `copy` the newly generated code and share it with the user.

![2FA admin recovery code regenerated](/static/assets/multi-tenancy/images/recovery-code-regenerated-admin.png#max-width=95%)

### Disable Two Factor Authentication for user

To disable the Two-Factor Authentication for the user, click the `Remove Two-Factor Authentication` option and proceed with `yes`.

## Delete users
Users can be deleted from the UMS when the user no longer requires the access. Users can be deleted from the user management page by the `System Administrator`.

![Delete user by Admin](/static/assets/multi-tenancy/images/delete-user.png#max-width=95%)

> **Note:**  Once the user gets deleted by the `System Administrator` his access will be revoked from the sites that he belongs to.

## Grant user access to multiple sites

You can select single or multiple users in user management and provide access to multiple sites.

![Grant User Access](/static/assets/multi-tenancy/images/grant-user-access-proceed.png#max-width=95%)

Select the sites you need to provide access to the selected users and then select `Grant Access` button to proceed.

![Grant Access Select Sites](/static/assets/multi-tenancy/images/grant-access-select-site.png#max-width=95%)

> **NOTE:**  If the selected user has already access to that site, the process will be skipped.

After the process completion, you can see a detailed report on it. You can also download the report in CSV format.

![Grant Access Select Sites](/static/assets/multi-tenancy/images/grant-access-report.png#max-width=95%)

You can revoke access to the site by referring [here](/multi-tenancy/manage-sites/#revoke-access).
