---
layout: post
title: Managing Groups – Embedded BI | Bold BI Documentation
description: Learn how to add, edit, delete groups and know how to assign users and manage permissions to groups in Bold BI Embedded.
canonical: "/cloud-bi/managing-resources/manage-groups/"
platform: bold-bi
documentation: ug
---

# Manage Groups

This section explains on how to add, edit, delete groups and also on how to assign users and manage permissions to groups in the Bold BI Embedded.

Groups is a collection of users to which permissions can be assigned.

![Manage Groups](/static/assets/embedded/managing-resources/manage-groups/images/manage-groups.png)

## Add new group
To add new group to the Bold BI, click on `New Group` in the groups management page.
 
New groups can be added by providing name and description(optional) for the group.
 
![Add Groups](/static/assets/embedded/managing-resources/manage-groups/images/add-group.png#width=55%)

Fill the form with name and description and click on `Add`. New group will be created and you can [add users](/embedded-bi/managing-resources/manage-groups/#assign-users) or [manage permissions](/embedded-bi/managing-resources/manage-groups/#manage-permissions) for it.

## Edit group
Group Information can be edited from the group's edit page.
![Edit Group Page](/static/assets/embedded/managing-resources/manage-groups/images/edit-group-img.png)

![Edit Group](/static/assets/embedded/managing-resources/manage-groups/images/edit-group.png)

Group name and description can be edited in the group edit page. In addition to that, users can also be assigned or removed from the group in this page.

## Delete group
Groups can be deleted if it is no longer needed. You cannot delete the `System Administrator` group.

### From group management page

![Delete group from group management page](/static/assets/embedded/managing-resources/manage-groups/images/delete-group-1.png)

### From group edit page

![Delete group from group edit page](/static/assets/embedded/managing-resources/manage-groups/images/delete-group-2.png)

## Assign users
Users can be assigned to the selected group there by assigning the permissions of the group to the users.

![Assign Users](/static/assets/embedded/managing-resources/manage-groups/images/manage-groups-assign-users.png)

![Add Users](/static/assets/embedded/managing-resources/manage-groups/images/manage-groups-add-users.png)

Users can also be removed from the group if the user no longer needs the permissions of the group. Click on `Remove` next to the user in the group edit page to remove the user from the group.

![Assign Users](/static/assets/embedded/managing-resources/manage-groups/images/manage-groups-remove-users.png)

## Manage permissions

`Manage Permissions` page for the group can be accessed from any one of the following pages.

1. Click `Actions` in the group management grid context menu and select the `Manage Permissions` option.
![Manage Permissions](/static/assets/embedded/images/Manage-permissions-group-context.png)

2. Click the group's name on the group listing page to navigate to the group profile page, and then select the `Manage Permissions` option from the Manage drop-down on the group profile page.
![Manage Permissions Group Edit](/static/assets/embedded/images/manage-permission-group-edit.png)

You can find the permissions assigned directly to the group in the manage permissions grid.

![Manage Permissions](/static/assets/embedded/images/Manage-permissions-group.png)

Click `Add Permission` to add permissions to the group.

![Add Permission](/static/assets/embedded/working-with-dashboards/share-dashboards/images/add-permission-group.png#width=60%)

### Steps to add permission to the group

1. Select the entity.
2. Select the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode.
4. Click `Add` to add the framed permission to the group.

You can also select multiple scopes and entities to assign multiple permissions. Please visit [Manage Permissions](/embedded-bi/manage-permissions/) for more information on how to add and manage permissions.