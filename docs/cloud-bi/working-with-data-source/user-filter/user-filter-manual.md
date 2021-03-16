---
layout: post
title: User Filter – Manual Mode – Cloud BI | Bold BI Documentation
description: Learn how to create the user filter through manual mode configuration by restricting field values access to users/groups in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Configure User Filter Manual Mode
Lets consider the [Hotel Revenue Management Dashboard](https://www.boldbi.com/solutions/hospitality/hotel-revenue-management-dashboard) sample here. In this dashboard we will be configuring the user filter so that the staff's and managers will be able to view the data configured for the specific continent.

For this we will starting off by opening the User Filter Dialog by following the steps mentioned in [here](/cloud-bi/working-with-data-source/user-filter/#configuring-user-filter).

In the manual mode UI we will first select the column that will be used as the filter, in this case we will be choosing the **Region** column. A name can also be set for the filter for better understanding by the user when multiple filters are created for the same dashboard.

![User Filter Manual Mode Select Column](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-select-column.png)

Once the column is selected the User Group section and the Fields section will be enabled. The user can do the mapping for the user or group here.

![User Filter Manual Mode Select Column](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-option.png)

The selected column and the name of the filter will be shown in the tile on the left.

The filter can be set for each user or group by first selecting the user or group and then checking the required value in the fields section. In this example we are focusing on applying the filter for the groups so that all the users in the group will be applied with the data restriction.

![User Filter Manual Mode Mapping](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-mapping.png)


## Users/Groups
All the users and groups that are active in the Bold BI server will be listed here. The users will be listed at the top of the list followed by the groups.

![User Filter Manual User Options](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-user-options.png)

### Auto Mapping based on user email / full name (1)
When creating a data source that already has a column with the user email, full name or the group name you can avoid manually assigning the filter to each user or group by using the auto map feature. For this you need to set the column with the user email or full name or group name as the data column for the filter. Then click on the Auto Mapping icon and select the type from the menu. 

You can manually assign a different value to the user or group as well, after setting auto mapping. For that user or group the selected data will also be shown.

To remove the auto mapping you can choose the **None** option from the menu.

![User Filter Manual User Options](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-auto-map.png)

> **NOTE:**  The mapping will be shown in UI only if the settings matches a result. If not no indication will be shown in the UI.

### Filter(2)
You can filter the users and groups using the filter icon. You can filter them to show all the users and groups, mapped users and groups or unmapped users and groups.

### Sort(3)
The users are sorted in ascending order by default, this can be toggled using the sort icon

### Refresh(4)
The user group list can be refreshed to get the latest list of users and groups from the server by clicking on the refresh icon. The configured settings will not be reset during this action.

### More Options(5)

#### Use filter from
You can merge or copy the settings applied to other user or group by using the **Use filter from** option in the view.
A dialog will be popping up that will list the users or groups that has the mapping configured. You can choose one or more users to merge with the selected user or group.

![User Filter Manual Use Filter From](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-use-filter-from.png)

#### View Users
You can peek and see the list of users who are present in a group by using the **View Users** option

A dialog will be popping up that will list the users that belong to the group.

![User Filter Manual User in group](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-users-in-group.png)

> **IMPORTANT:**  If a user is present in multiple groups, then the user will be able to see the data mapped in all the groups while viewing the dashboard.

#### Clear
You can remove the settings applied for the user by clicking the **Clear** option.


### Fields

The values of the column selected as the data column, will be listed out in the fields section. The action icons in the field section has the same behavior as that of the ones in the user group list section.

![User Filter Manual Fields](/static/assets/cloud/working-with-datasource/user-filter/images/user-filter-dlg-manual-fields.png)




### Inverting the data restriction
By default when a user is not mapped with any data in the user filter, no data will be shown to the user when the dashboard is viewed. There will be cases where you will have to apply the restriction to few users and let other users see the full data.

This can be achieved by checking the **Show all data for unmapped users or groups** option. Checking this option will remove the filter restriction to all the unmapped users or groups. Only the users who has any filter configured will be seeing the restricted data. All other users will be able to see the data without any restrictions.

> **NOTE:**  When multiple filters are created for the data source make sure that you check the **Show all data for unmapped users or groups** option if the user has no mapping set in that filter setting. Failing to do so will result in **No data available** message to be shown to that user.
