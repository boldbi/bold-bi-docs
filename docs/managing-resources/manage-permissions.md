---
layout: post
title: Managing Users Permissions in Embedded BI | Bold BI Docs
description: Learn how to manage the permissions of the users and groups with needed scope to the corresponding entities in Bold BI Embedded.
canonical: "/managing-resources/manage-permissions/"
platform: bold-bi
documentation: ug
---

# Manage Permissions

This section explains the access modes, entities, scopes, and how to add permissions in Bold BI.

All permissions can be managed by users belonging to the `System administrator` group or users assigned the permission entity of `All Permissions`. Additionally, specific permissions for resources such as categories, dashboards, data sources, schedules, and slideshows can be managed by users assigned the permission entity of `Specific Permissions` for the corresponding resources.

Permissions can be directly added to both users and groups via the [Add Permission](/managing-resources/manage-permissions/#add-permissions) dialog.

![Add Permission Dialog](/static/assets/images/add-permission-dialog.png)

Permissions are classified in the following structure:
	
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

<tr>
<td>Download</td>
<td>Provides download permission for the chosen entity.</td>
</tr>
</table>

## Add permissions
The Add Permission section is divided into four sections:
1. All Resources
2. Specific Resources
3. All Settings
4. Specific Settings

> **NOTE:** It is not possible to select multiple access modes.

### All resources

To assign multiple permissions, select multiple resource entities and one access mode.
![All Resources](/static/assets/images/add-permission-all-resources.png)

### Specific resources

To assign multiple permissions for specific resources, select multiple scopes, one entity, and one access mode.
![Specific Resources](/static/assets/images/add-permission-specific-resources.png)

### All settings

Multiple entities and access modes cannot be selected in all settings. 
You can assign `Create` permission for All Groups, `Manage` permission for All Permissions or All Settings, and `Create and Manage` permission for Users and Groups.
![All Settings](/static/assets/images/add-permission-all-settings.png)

### Specific settings

To assign multiple permissions, select multiple scopes, one entity, and one access mode for specific settings.
![Specific Settings](/static/assets/images/add-permission-specific-settings.png)

## Manage permissions - Users

Please visit [Manage user permissions](/managing-resources/manage-users/#manage-permissions) for more information on how to add and manage permissions for a user.

## Manage permissions - Groups

Please visit [Manage group permissions](/managing-resources/manage-groups/#manage-permissions) for more information on how to add and manage permissions for a group.

