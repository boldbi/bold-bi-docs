---
layout: post
title: Manage sites in Multi-tenancy of Embedded BI | Bold BI Docs
description: Learn here how to manage the site information, isolation code, custom attribute, how to grant and revoke access to the site users and more in Embedded Bold BI. 
platform: bold-bi
documentation: ug
---

# Manage sites

This section briefly explains how to manage the sites and information about the site.

### Suspend Site

You can suspend the site by clicking the `Suspend` option in Action Menu.

![Suspend Site](/static/assets/embedded/multi-tenancy/images/suspend-site.png#max-width=95%)

> **Warning :** If the site is suspended, users cannot access the site.

### Activate Site

You can activate the suspended site by clicking the `Activate` option.

![Activate Site](/static/assets/embedded/multi-tenancy/images/activate-site.png#max-width=95%)

### Edit Site

We can able to update the following information for the site using the `Edit` Site option.

* Site Name
* Site Domain
* Site Identifier
* Database User Credential

You can edit the site by clicking the `Edit` option in the menu.

![Edit Site Button](/static/assets/embedded/multi-tenancy/images/edit-site-button.png#max-width=95%)

After clicking the `Edit` option, Edit Site dialog will open. Enter the site name, site domain, and site identifier in the below step and click `Next` button to update the database user credential.

![Edit Site](/static/assets/embedded/multi-tenancy/images/edit-site.png#max-width=45%)

After entering your database credential, click `Update` button to update the site details.

![Edit Database](/static/assets/embedded/multi-tenancy/images/edit-database.png#max-width=45%)

### Delete Site

You can delete the site and it's database by clicking the `Delete` option.

![Delete Site](/static/assets/embedded/multi-tenancy/images/delete-site.png#max-width=95%)

> **NOTE:** Database will not be deleted if there are any other tables present other than the Bold BI tables.

## Site Information

By clicking the site name, you can see the site information.

![Site Name](/static/assets/embedded/multi-tenancy/images/site-name.png#max-width=95%)

### General

This section displays the basic information about the site.

* Site Name
* Site Url
* Client id
* Client secret

![General Info](/static/assets/embedded/multi-tenancy/images/general-site-info.png#max-width=95%)

### Site Users 

This section shows the users list which have access to the site.

![Site Users](/static/assets/embedded/multi-tenancy/images/site-users.png#max-width=95%)

#### Grant Access

You can grant access to the users by clicking `Grant Access` button for this site.

![Grant Access Option](/static/assets/embedded/multi-tenancy/images/grant-access-button.png#max-width=95%)

After clicking the button, select the users from the list and grant access to the site.

![Grant Access](/static/assets/embedded/multi-tenancy/images/grant-access.png#max-width=95%)

#### Revoke Access

You can remove access for single user by clicking this link `Revoke Access`.

![Revoke Single User](/static/assets/embedded/multi-tenancy/images/revoke-single-user.png#max-width=95%)

You can remove access for multiple users by clicking the `Revoke Access` button. 

![Revoke Multiple Users](/static/assets/embedded/multi-tenancy/images/revoke-multiple-users.png#max-width=95%)

#### Add User

To grant access to new user, click the `Add User` button.

![Add User Button](/static/assets/embedded/multi-tenancy/images/add-user-button.png#max-width=95%)

You can add the user by referring [Add User](/embedded-bi/multi-tenancy/manage-users/#add-individual-users)

The user will be added and have access to the site.

### Isolation Code

You can learn about how to configure Isolation code [here](/embedded-bi/working-with-data-source/configuring-isolation-code/)

### Custom Attribute 

You can learn about how to configure Custom Attribute [here](/embedded-bi/working-with-data-source/configuring-custom-attribute/)