---
layout: post
title: User Filter Overview – Embedded BI | Bold BI Documentation
description: Learn how to create the user filter to impose row-level security to the data when accessed through the dashboard in Bold BI Embedded.
canonical: "/working-with-data-source/user-filter/"
platform: bold-bi
documentation: ug
lang: en
---

# Getting Started With User Filter
The user filter provides row level security for the data used for creating the dashboards. So that we can restrict the data that will be visible to each user. Lets consider the [Hotel Revenue Management Dashboard](https://www.boldbi.com/solutions/hospitality/hotel-revenue-management-dashboard). In the dashboard we can restrict the revenue data for the hotels in different geographical area so that the managers and the staffs will be able to see only the data of the region that they are handling.


> **NOTE:**  The User filter will be applied to the result set of the Data Source and cannot be used for changing the connection string. You can use [Dynamic Connection String](/embedding-options/iframe-embedding/dynamic-connection-string/) Feature for this requirement.

 
## Configuring User Filter

The User Filter can be configured in a data source using the **Configure User Filters** dialog. To access the **Configure User Filters** dialog click on the **Configure User Filters** icon from the toolbar.

![Configure User Filters Menu](/static/assets/working-with-datasource/user-filter/images/user-filter-toolbar-icon.png)


To take advantage of the User Filters it is important that you are familiar with the main concepts, Users, Groups, Filters.

**Users** - The users who will be viewing the dashboard and data sources. In Bold BI the users are identified using the email of the user. [Know More](/managing-resources/manage-users/)

**Groups** -  The users who require same set of permissions can be put together into a group entity. The permissions defined for the group will be inherited by all the users present in the group. [Know More](/managing-resources/manage-groups/)

**Filters** - Filters are the actual restriction that will be applied to the data. In User Filter the filter will be applied using the AND logical operator if more than one filter column is configured (for manual, data source and query modes).


![Configure User Filters Empty Dialog](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-empty.png)


## Getting familiar with User Filter

### Modes
User Filter can be configured in any of the three modes that are available.

![User Filter Modes](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-modes.png)

#### Manual
This mode will suit most of the use cases where the applied filter will not be changing dynamically and the data is close to or purely static or the user data is present as a column within the data used for the dashboard (like email / full name). Lets consider our [Hotel Revenue Management Dashboard](https://www.boldbi.com/solutions/hospitality/hotel-revenue-management-dashboard) example here, in this case the data here is mostly static as the hotels are spanning across all the continents and the staff handling the hotel in each continent are restricted to their geography. For this dashboard the Manual mode will be suiting the most. Refer here to know more on [Manual Mode](/working-with-data-source/user-filter/user-filter-manual/) 

#### Data Source
This mode is well suited for the cases where the applied filters are more dynamic and the data used in the dashboard does not have any user information in any of its columns. Refer here to know more on [Data Source Mode](/working-with-data-source/user-filter/user-filter-advanced-data-source-mode/) 

#### Query

This mode is very similar to the Data Source mode, but this provides a much more advanced or super user control over the data used for the filtering. The user is given the power to write his own custom SQL query to fetch the data so the is provided with the liberty to apply filters or generate a dynamic column. Refer here to know more on [Query Mode](/working-with-data-source/user-filter/user-filter-advanced-query-mode/) 

> **IMPORTANT:**  Only one mode can be used for a data source. Switching to other mode will reset the already configured settings.

### Action Buttons
![User Filter Action Buttons](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-action-btns.png)
#### Reset Settings
This will remove all the applied settings done by the user and switch the user filter dialog to its initial state.

#### Save
This will validate the settings done by the user and saves the information in the data source.

#### Close
This will close the user filter dialog, reverting all the changes done by the user in the UI.


## Previewing dashboard
While previewing the dashboard you can try impersonating a user or group in the server, to have a glance at what that user or the users in that group will be able to see.

You can use the **Preview as** drop down to choose the user or group you want to impersonate. 

![User Based Filter Preview](/static/assets/working-with-datasource/user-filter/images/user-filter-preview-banner.png)

Let us consider our [Hotel Revenue Management Dashboard](https://www.boldbi.com/solutions/hospitality/hotel-revenue-management-dashboard) example here, since we have applied the user filter based on the groups we can choose a group name in the **Preview as** drop down to see how the users who belong to the group will be seeing in the dashboard.

![User Based Filter Preview](/static/assets/working-with-datasource/user-filter/images/user-filter-preview-sample-banner.png)