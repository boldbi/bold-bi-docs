---
layout: post
title: Managing Groups – Embedded BI | Bold BI Documentation
description: Learn how to add, edit, delete groups and know how to assign users and manage permissions to groups in Bold BI Embedded.
canonical: "/managing-resources/manage-groups/"
platform: bold-bi
documentation: ug
---

# Manage Groups

This section explains how to add, edit, delete groups, as well as how to assign users and manage permissions for groups in Bold BI Embedded.

Groups are collections of users to which permissions can be assigned.

![Manage Groups](/static/assets/managing-resources/manage-groups/images/manage-groups.png)

## Add new group
To add a new group, click on `New Group` in the groups management page of Bold BI.
 
New groups can be added by providing a name and optional description for the group.
 
![Add Groups](/static/assets/managing-resources/manage-groups/images/add-group.png#width=55%)

Fill out the form with the name and description, then click on `Add`. A new group will be created, and you can[add users](/managing-resources/manage-groups/#assign-users) or [manage permissions](/managing-resources/manage-groups/#manage-permissions) for it.

## Edit group
Group Information can be edited on the group's edit page.
![Edit Group Page](/static/assets/managing-resources/manage-groups/images/edit-group-img.png)

![Edit Group](/static/assets/managing-resources/manage-groups/images/edit-group.png)

The group name and description can be edited on the group edit page. Additionally, users can be assigned or removed from the group on this page.

## Delete group
Groups can be deleted if they are no longer needed. You cannot delete the `System Administrator` group.

### From group management page

Clicking `Delete` from the context menu will delete a single group.
![Delete group from group management page](/static/assets/managing-resources/manage-groups/images/delete-group-1.png)

Additionally, you have the option to remove multiple groups by marking the checkboxes next to the groups you wish to delete and then selecting `Delete Groups` in the group list.
![Delete multiple group from group management page](/static/assets/managing-resources/manage-groups/images/delete-multiple-group.png)

### From group edit page

![Delete group from group edit page](/static/assets/managing-resources/manage-groups/images/delete-group-2.png)

## Assign users
Users can be assigned to the selected group by assigning the permissions of the group to them.

![Assign Users](/static/assets/managing-resources/manage-groups/images/manage-groups-assign-users.png)

![Add Users](/static/assets/managing-resources/manage-groups/images/manage-groups-add-users.png)

Click `Add user` to add a new user. It will add the user to both site and respective group.

![Add User](/static/assets/managing-resources/manage-groups/images/manage-add-user-third-party-group.png)

You can also add other directory users, such as local, Azure AD, Windows AD, OAuth, and Open ID to any third-party groups. However, those changes will not synchronize with the original directory. They will only be applied in Bold BI groups.

![Third Party User Restriction](/static/assets/managing-resources/manage-groups/images/manage-add-third-party-users.png)

Users can also be removed from the group if the user no longer needs the permissions of the group. Click on `Remove` next to the user in the group edit page to remove the user from the group.

You cannot remove users from a third-party group if they were added via the third-party application. However, you can remove users who were manually added from Bold BI.

![Assign Users](/static/assets/managing-resources/manage-groups/images/manage-groups-remove-users.png)

## Manage permissions

The `Manage Permissions` page for the group can be accessed from any of the following pages:

1. Click on `Actions` in the group management grid context menu and then select the `Manage Permissions` option.
![Manage Permissions](/static/assets/images/Manage-permissions-group-context.png)

2. Click on the group's name on the group listing page to go to the group profile page, and then select the `Manage Permissions` option from the Manage drop-down menu on the group profile page.
![Manage Permissions Group Edit](/static/assets/images/manage-permission-group-edit.png)

You can view the permissions assigned directly to the group in the manage permissions grid.

![Manage Permissions](/static/assets/images/Manage-permissions-group.png)

To add permissions to the group, click on `Add Permission`.

![Add Permission](/static/assets/working-with-dashboards/share-dashboards/images/add-permission-group.png#width=60%)

### Steps to add permission to the group

1. Select the entity.
2. Choose the scope if the entity is not of the `All Resource` or `All Settings` item type.
3. Select the access mode.
4. Click on `Add` to add the specified permission to the group.

You can also choose multiple scopes and entities to assign multiple permissions. For more information on how to add and manage permissions, please visit the [Manage Permissions](/managing-resources/manage-permissions/) page.