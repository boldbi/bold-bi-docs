---
layout: post
title: Managing Permissions – Cloud BI | Bold BI Documentation
description: Learn how to manage the permissions of the users and groups with needed scope to the corresponding entities in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Manage Permissions

This section explains the access modes, entities and scopes, and also how to manage the permissions of the users and groups.

All permissions can be managed by the users belonging to the `System administrator` group or users assigned with the permission entity of `All Permissions`. Also, specific permissions of the resource such as category, dashboards, data sources, schedules, and slideshows can be managed by the users assigned with permission entity of `Specific Permissions` of the corresponding resources.

Permission can be directly added to both users and groups. Permissions are classified in the following structure.

![Add Permission Dialog](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-dialog.png)
	
Permissions are classified in the following structure.
	
* Entity – Scope – Access Mode

## Entity

<table>
<tr>
<td width = 250px><strong>Entity</td>
<td><strong>Description</td>
</tr>

<tr>
<td>All Categories</td>
<td>Provides permission to access all categories with the chosen access mode.</td>
</tr>

<tr>
<td>All Dashboards</td>
<td>Provides permission to access all dashboards with the chosen access mode.</td>
</tr>

<tr>
<td>All Data Sources</td>
<td>Provides permission to access all data sources with the chosen access mode.</td>
</tr>

<tr>
<td>All Schedules</td>
<td>Provides permission to access all schedules with the chosen access mode.</td>
</tr>

<tr>
<td>All Slideshows</td>
<td>Provides permission to access all slideshows with the chosen access mode.</td>
</tr>

<tr>
<td>All Groups</td>
<td>Provides permission to create new groups except for import groups from third parties.</td>
</tr>

<tr>
<td>All Permissions</td>
<td>Provides you to delegate permission for all resources on the users and groups manage permission page using the Manage access mode. The permission will only be available if the user has the Specific Group permission or the Create and Manage permission for Users and Groups.</td>
</tr>

<tr>
<td>All Settings</td>
<td>Provides permission to access all settings pages with the Manage access mode.</td>
</tr>

<tr>
<td>Users and Groups</td>
<td>Provides permission to access user and group management pages with the Create and Manage access mode except for the manage permission page. If you want to access the manage permission page, then you need delegate permission.</td>
</tr>

<tr>
<td>Dashboards in Category</td>
<td>Provides permission to access dashboards in a specific category</td>
</tr>

<tr>
<td>Specific Category</td>
<td>Provides permission to access a specific category with the chosen access mode.</td>
</tr>

<tr>
<td>Specific Dashboard</td>
<td>Provides permission to access a specific dashboard with the chosen access mode.</td>
</tr>

<tr>
<td>Specific Data Source</td>
<td>Provides permission to access a specific data source with the chosen access mode.</td>
</tr>

<tr>
<td>Specific Schedule</td>
<td>Provides permission to access a specific schedule with the chosen access mode.</td>
</tr>

<tr>
<td>Specific Slideshow</td>
<td>Provides permission to access a specific slideshow with the chosen access mode.</td>
</tr>

<tr>
<td>Specific Group</td>
<td>Provides permission to access specific groups with the Manage access mode except for the manage permission page. If you want to access the manage permission page, then you need delegate permission.</td>
</tr>

<tr>
<td>Specific Permissions</td>
<td>Provides permission with the Manage access mode to delegate permission for specific resource on users and groups manage permission page. The permission will only be available if the user has the Specific Group permission or the Create and Manage permission for Users and Groups.</td>
</tr>

<tr>
<td>Specific Settings</td>
<td>Provides permission to access specific settings page with the Manage access mode.</td>
</tr>
</table>

## Scope

Scope selection is only available for `Specific Resources` and `Specific Settings` types.

## Access Mode

<table>
<tr>
<td width = 250px><strong>Access Mode</td>
<td><strong>Description</td>
</tr>

<tr>
<td>Read</td>
<td>Provides read permission for the chosen entity.</td>
</tr>

<tr>
<td>Read and Write</td>
<td>Provides read and write permission for the chosen entity.</td>
</tr>

<tr>
<td>Read, Write and Delete</td>
<td>Provides read, write and delete permission for the chosen entity.</td>
</tr>

<tr>
<td>Create</td>
<td>Provides permission to create the chosen entity.</td>
</tr>

<tr>
<td>Manage</td>
<td>Provides permission to manage the chosen entity.</td>
</tr>

<tr>
<td>Create and Manage</td>
<td>Provides permission to create and manage the users and groups entity</td>
</tr>
</table>

## Add permissions
The add permission section is divided into four sections.
1. All Resources
2. Specific Resources
3. All Settings
4. Specific Settings

> **NOTE:** It is not possible to select multiple access modes.

### All resources

To assign multiple permissions, select multiple resource entities and one access mode.
![All Resources](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-all-resources.png)

### Specific resources

To assign multiple permissions for specific resources, select multiple scopes, one entity, and one access mode.
![Specific Resources](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-specific-resources.png)

### All settings

Multiple entities and access modes cannot be selected in all settings.
You can assign `Create` permission for All Groups, `Manage` permission for All Permissions or All Settings, and `Create and Manage` permission for User and Groups.
![All Settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-all-settings.png)

### Specific settings

To assign multiple permissions, select multiple scopes, one entity, and one access mode.
![Specific Settings](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-specific-settings.png)

## Manage Permissions - users

`Manage Permissions` page for the user can be accessed from any one of the following pages.

1.  Click `Actions` in the user management grid context menu and select the `Manage Permissions` option.
![Manage Permissions](/static/assets/cloud/working-with-dashboards/share-dashboards/images/Manage-permissions-user-context.png)

2.  Click the user's name on the user listing page to navigate to the user profile page, and then click `Manage Permissions` on the user profile page. 
![Manage Permissions](/static/assets/cloud/working-with-dashboards/share-dashboards/images/Manage-permissions-user-edit.png)

In the manage permissions grid, you can find the permissions assigned directly to the user and the permissions that the user inherited from the groups assigned.

![Manage Permissions](/static/assets/cloud/working-with-dashboards/share-dashboards/images/manage-permission-user.png)

Click `Add Permission` to add permissions to the user.

![Add Permission](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-user.png)

### Steps to add permission to the user

1. Select the entity.
2. Select the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode.
4. Click `Add` to add the framed permission to the user.

## Manage Permissions - groups

`Manage Permissions` page for the group can be accessed from any one of the following pages.

1. Click `Actions` in the group management grid context menu and select the `Manage Permissions` option.
![Manage Permissions](/static/assets/cloud/working-with-dashboards/share-dashboards/images/Manage-permissions-group-context.png)

2. Click the group's name on the group listing page to navigate to the group profile page, and then select the `Manage Permissions` option from the Manage drop-down on the group profile page.
![Manage Permissions Group Edit](/static/assets/cloud/working-with-dashboards/share-dashboards/images/manage-permission-group-edit.png)

You can find the permissions assigned directly to the group in the manage permissions grid.

![Manage Permissions](/static/assets/cloud/working-with-dashboards/share-dashboards/images/Manage-permissions-group.png)

Click `Add Permission` to add permissions to the group.

![Add Permission](/static/assets/cloud/working-with-dashboards/share-dashboards/images/add-permission-group.png#width=60%)

### Steps to add permission to the group

1. Select the entity.
2. Select the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode.
4. Click `Add` to add the framed permission to the group.