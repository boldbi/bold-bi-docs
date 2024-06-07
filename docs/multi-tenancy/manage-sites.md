---
layout: post
title: Manage sites in Multi-tenancy of Embedded BI | Bold BI Docs
description: Learn here how to manage the site information, isolation code, custom attribute, how to grant and revoke access to the site users and more in Embedded Bold BI. 
platform: bold-bi
documentation: ug
---

# Manage sites

This section briefly explains how to manage the sites and provides information about the site.

### Suspend Site

You can suspend the site by clicking the `Suspend` option in the Action Menu.

![Suspend Site](/static/assets/multi-tenancy/images/suspend-site.png#max-width=95%)

> **Warning :** If the site is suspended, users will not be able to access the site.

### Activate Site

You can activate the suspended site by clicking the `Activate` option.

![Activate Site](/static/assets/multi-tenancy/images/activate-site.png#max-width=95%)

### Edit Site

We are able to update the following information for the site using the `Edit` Site option:

* Site Name
* Site Domain
* Site Identifier
* Database User Credential

You can edit the site by clicking the `Edit` option in the menu.

![Edit Site Button](/static/assets/multi-tenancy/images/edit-site-button.png#max-width=95%)

After clicking the `Edit` option, the Edit Site dialog will open. Enter the site name, site domain, and site identifier in the next step and click the `Next` button to update the database user credential.

![Edit Site](/static/assets/multi-tenancy/images/edit-site.png#max-width=45%)

After entering your database credentials, click the `Update` button to update the site details.

![Edit Database](/static/assets/multi-tenancy/images/edit-database.png#max-width=65%)

### Delete Site

You can delete the site and its database by clicking the `Delete` option.

![Delete Site](/static/assets/multi-tenancy/images/delete-site.png#max-width=95%)

> **NOTE:** The database will not be deleted if there are any other tables present other than the Bold BI tables.

## Site Information

By clicking on the site name, you can view the site information.

![Site Name](/static/assets/multi-tenancy/images/site-name.png#max-width=95%)

### General

This section displays basic information about the site.

* Site Name
* Site Url
* Client id
* Client secret

![General Info](/static/assets/multi-tenancy/images/general-site-info.png#max-width=95%)

### Site Users 

This section shows the list of users who have access to the site.

![Site Users](/static/assets/multi-tenancy/images/site-users.png#max-width=95%)

#### Grant Access

You can grant access to users by clicking the `Grant Access` button for this site.

![Grant Access Option](/static/assets/multi-tenancy/images/grant-access-button.png#max-width=95%)

After clicking the button, select the users from the list and grant access to the site.

![Grant Access](/static/assets/multi-tenancy/images/grant-access.png#max-width=95%)

#### Revoke Access

You can remove access for a single user by clicking on the `Revoke Access` link.

![Revoke Single User](/static/assets/multi-tenancy/images/revoke-single-user.png#max-width=95%)

You can remove access for multiple users by clicking the `Revoke Access` button. 

![Revoke Multiple Users](/static/assets/multi-tenancy/images/revoke-multiple-users.png#max-width=95%)

#### Add User

To grant access to a new user, click the `Add User` button.

![Add User Button](/static/assets/multi-tenancy/images/add-user-button.png#max-width=95%)

You can add the user by selecting [Add User](/multi-tenancy/manage-users/#add-individual-users).

The user will be added and granted access to the site.

### Isolation Code

To learn about how to configure the Isolation Code, click on the [Isolation code](/working-with-data-sources/configuring-isolation-code/).

### Custom Attribute 

To learn how to configure the [Custom Attribute](/working-with-data-sources/configuring-custom-attribute/).

### Settings

The "Inherit Global Settings" feature allows for common branding and settings to be applied across your multi-tenant application. The Date and Time, Language, Look and Feel, Branding, Email, and Account Settings that are configured in UMS can be inherited by your BI site.

To inherit all global settings from UMS into an existing site, select "Inherit Global Settings". Alternatively, you can choose specific settings that you require from the global settings in UMS.

![Inherit Settings](/static/assets/multi-tenancy/images/inherit-settings.png)

After saving the settings, navigate to the BI site and verify the selected settings.

![Inherited Settings in BI](/static/assets/multi-tenancy/images/inherited-in-bi.png)