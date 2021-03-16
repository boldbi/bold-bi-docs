---
layout: post
title: Managing Permissions – Embedded BI | Bold BI Documentation
description: Learn how to manage and share the permissions for users and groups with needed scope to the corresponding entities in Bold BI Embedded.
canonical: "/cloud-bi/working-with-dashboards/share-dashboards/manage-permissions/"
platform: bold-bi
documentation: ug
---

# Sharing Permissions

This section explains the access modes, entities & scopes and how to share the permissions for the users and groups.

Permissions can only be managed by the users belonging to the `System administrator` group. 

Permission can be directly added to both users and groups. Permissions are classified in the following structure.
	
Access Mode – Entity – Scope

## Access Modes

* Read – Provides read permission for the chosen entity.
* Read and Write – Provides read and write permission for the chosen entity.
* Read, Write and Delete – Provides read, write and delete permission for the chosen entity.
* Create – Provides permission to create the chosen entity.

## Entity

* All Dashboards – Provides permission to access all dashboards with the chosen access mode.
* Dashboards in Category – Provides permission to access dashboards in a specific category with chosen access mode.
* Specific Dashboard – Provides permission to access a specific dashboard with the chosen access mode.
* All Data Sources – Provides permission to access all data sources with the chosen access mode.
* Specific Data Source – Provides permission to access a specific data source with the chosen access mode.
* All Categories – Provides permission to access all categories with the chosen access mode.
* Specific Category – Provides permission to access a specific category with the chosen access mode.
* All Schedules – Provides permission to access all schedules with the chosen access mode.
* Specific Schedule – Provides permission to access a specific schedule with the chosen access mode.
* All Slideshows – Provides permission to access all slideshows with the chosen access mode.
* Specific Slideshow – Provides permission to access a specific slideshow with the chosen access mode.
	
## Scope

Scopes can be chosen for the below entities only. Other entities do not require to specify the scope.

* Dashboards in Category – A specific category has to be chosen to provide access to the dashboards in that category.
* Specific Dashboard – A specific dashboard has to be chosen to provide access to it.
* Specific Data Source – A specific data source has to be chosen to provide access to it.
* Specific Category – A specific category has to be chosen to provide access to it.
* Specific Schedule – A specific schedule has to be chosen to provide access to it.
* Specific Slideshow – A specific slideshow has to be chosen to provide access to it.

> **NOTE:**  Create access can only have the Scopes, All Dashboards, Dashboards in Category, All Data Sources, All Schedules, All Slideshows, and All Categories.

## Sharing Permissions - users

`Sharing Permissions` page for the user can be accessed from any one of the following places.

1. Context menu of the respective user in the users grid on the user management page  
![Manage Permissions](/static/assets/embedded/working-with-dashboards/share-dashboards/images/Manage-permissions-user-context.png)

2. On top right corner of the user profile edit page  
![Manage Permissions](/static/assets/embedded/working-with-dashboards/share-dashboards/images/Manage-permissions-user-edit.png)

Here you will find both the permissions assigned directly to the user and the permissions that the user got inherited from the groups assigned with.

![Manage Permissions](/static/assets/embedded/working-with-dashboards/share-dashboards/images/Manage-permissions-user.png)

Click on `Add Permission` to add permissions to the user. Add Permission dialog box is shown below.

![Add Permission](/static/assets/embedded/working-with-dashboards/share-dashboards/images/add-permission-user.png)

### Steps to add permission to the user

1. Select the entity.
2. Select the scope if the entity is not `All` item type.
3. Select the access mode.
4. Click on `Add` to add the framed permission to the user.

## Sharing Permissions - groups

`Sharing Permissions` page for the group can be accessed from any one of the following places.

1. Context menu of the respective group in the groups grid on the group management page
![Manage Permissions](/static/assets/embedded/working-with-dashboards/share-dashboards/images/Manage-permissions-group-context.png)
2. On top right corner of the group edit page
![Manage Permissions](/static/assets/embedded/working-with-dashboards/share-dashboards/images/Manage-permissions-group-edit.png)

Here you will find the permissions assigned directly to the group.

Please refer the below screenshot for the `Sharing Permissions` for the user page.

![Manage Permissions](/static/assets/embedded/working-with-dashboards/share-dashboards/images/Manage-permissions-group.png)

Click on `Add Permission` to add permissions to the group. Add Permission dialog box is shown below.

![Add Permission](/static/assets/embedded/working-with-dashboards/share-dashboards/images/add-permission-group.png)

### Steps to add permission to the group

1. Select the entity.
2. Select the scope if the entity is not `All` item type.
3. Select the access mode.
4. Click on `Add` to add the framed permission to the group.