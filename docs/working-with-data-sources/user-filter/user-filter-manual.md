---
layout: post
title: User Filter – Manual Mode – Embedded BI | Bold BI Docs
description: Learn how to create the user filter through manual mode configuration by restricting field values access to users/groups in Bold BI Embedded.
canonical: "/working-with-data-sources/user-filter/user-filter-manual/"
platform: bold-bi
documentation: ug

---

# Configure User Filter Manual Mode
Let's consider the <a href="https://www.boldbi.com/dashboard-examples/hospitality/hotel-revenue-management-dashboard" target="_blank">Hotel Revenue Management Dashboard</a> sample here. In this dashboard, we will configure the user filter so that the staff and managers can view the data specific to the continent.

To start, open the User Filter Dialog by following the steps mentioned [here](/working-with-data-sources/user-filter/#configuring-user-filter)

In the manual mode UI, we will first select the column to be used as the filter. In this case, we will choose the **Region** column. A name can also be set for the filter for better user understanding when multiple filters are created for the same dashboard.

![User Filter Manual Mode Select Column](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-select-column.png)

Once the column is selected, the User Group section and the Fields section will be enabled. The user can do the mapping for the user or group here.

![User Filter Manual Mode Select Column](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-option.png)

The selected column and the name of the filter will be shown in the tile on the left.

The filter can be set for each user or group by selecting the user or group and checking the required value in the fields section. In this example, we are focusing on applying the filter for the groups so that all users in the group will have data restrictions applied.

![User Filter Manual Mode Mapping](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-mapping.png)


## Users/Groups
All active users and groups on the Bold BI server will be listed. Users will be listed at the top followed by the groups.

![User Filter Manual User Options](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-user-options.png)

### Auto Mapping based on user email / full name (1)
When creating a data source with a column containing user email, full name, or group name, the auto map feature can be used to assign the filter automatically. This can be set by selecting the data column, clicking on the Auto Mapping icon, and selecting the type from the menu.

You can manually assign different values to users or groups as well, even after setting auto mapping. For those users or groups, the selected data will be shown.

To remove auto mapping, choose the **None** option from the menu.

![User Filter Manual User Options](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-auto-map.png)

> **NOTE:**  The mapping will only be shown in the UI if the settings match a result. If not, no indication will be shown.

### Filter(2)
Users and groups can be filtered using the filter icon to show all, mapped, or unmapped users and groups. Users are sorted in ascending order by default.

### Sort(3)
The users are sorted in ascending order by default, and this can be toggled using the sort icon.

### Refresh(4)
The user group list can be refreshed to get the latest list of users and groups from the server by clicking on the refresh icon. The configured settings will not be reset during this action.

### More Options(5)

#### Use filter from
You can merge or copy the settings applied to another user or group by using the **Use filter from** option in the view.
A dialog will pop up listing the users or groups that have the mapping configured. You can choose one or more users to merge with the selected user or group.

![User Filter Manual Use Filter From](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-use-filter-from.png)

#### View Users
You can view the list of users who are present in a group by using the **View Users** option. 

A dialog will pop up listing the users that belong to the group.

![User Filter Manual User in group](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-users-in-group.png)

> **IMPORTANT:**  If a user is present in multiple groups, the user will be able to see the data mapped in all the groups while viewing the dashboard.

#### Clear
You can remove the settings applied for the user by clicking the **Clear** option.


### Fields

The values of the column selected as the data column will be listed in the fields section. The action icons in the field section have the same behavior as those in the user group list section.

![User Filter Manual Fields](/static/assets/working-with-datasource/user-filter/images/user-filter-dlg-manual-fields.png)




### Inverting the data restriction
By default, when a user is not mapped with any data in the user filter, no data will be shown to the user when the dashboard is viewed. There will be cases where you will have to apply the restriction to a few users and let other users see the full data.

This can be achieved by checking the **Show all data for unmapped users or groups** option. Checking this option will remove the filter restriction for all the unmapped users or groups. Only the users who have any filter configured will see the restricted data. All other users will be able to see the data without any restrictions.

> **NOTE:**  When multiple filters are created for the data source, make sure to check the **Show all data for unmapped users or groups** option if the user has no mapping set in that filter setting. Failing to do so will result in a **No data available** message being shown to that user.

## Create User Filter Via Rest API - Manual Mode

Using the Rest API, add the user filter to the data source.

[Rest API - v4.0](/server-api-reference/v4.0/api-reference/)


1. To get the item ID, click the three dotted option and choose info.

    ![info](/static/assets/working-with-datasource/user-filter/images/info.png)

2. You can pass the values in JSON format.

If we don't give the "BasedOn" and "Mode", it will assign a default value as "BasedOn":"None" and "Mode":"Auto".

3. Using the Name option, we can give the filter a name.

### Parameters for adding user filter

<table>
   <tr>
   <th>Parameters</th>
   <th>Details</th>
   <th>Applicable Values</th>
   </tr>
   <tr>
   <td>Mode</br></br>
   <b>Mandatory</b> </td>
   <td>Default (Manual)</td>
   <td><code>string</code></td>
   </tr>
   <tr>
   <td>IsGroup</br></br>
   <b>Optional data</b> </td>
   <td>Denotes the user is Group or not.</td>
   <td><code>Boolean</code></td>
   </tr>
   <tr>
   <td>IsCheckAll</br></br>
   <b>Optional data</b> </td>
   <td>It represents whether all values in the column need to be checked for filtering.</td>
   <td><code>Boolean</code></td>
   </tr>
   <td>SelectedValues</br></br>
   <b>Mandatory</b> </td>
   <td>It represents the values in the columns that are going to be fetched using a filter.</td>
   <td><code>string</code></td>
   </tr>
   <tr>
   <td>IncludeFutureValues</br></br>
   <b>Optional data</b> </td>
   <td>It represents the values; items will be added in the future.</td>
   <td><code>Boolean</code></td>
   </tr>
   <tr>
   <td>RelativeDateFilter </br></br>
   <b>Optional data</b> </td>
   <td>It represents the value from which we are going to fetch data using relative filter options in the Date column.</td>
   <td><code>string</code></td>
   </tr>
   <tr>
   <td>UserId</br></br>
   <b>Mandatory</b> </td>
   <td>It represents the user ID we use for Bold BI to fetch Data using filter.</td>
   <td><code>string</code></td>
   </tr>
   <tr>
   <td>ShowRecordsToUnmappedUsers</br></br>
   <b>Optional</b> </td>
   <td>It represents the data that needs to be shown to other users in Bold BI.</td>
   <td><code>Boolean</code></td>
   </tr>
   <tr>
   <td>ColumnId</br></br>
   <b>Mandatory</b> </td>
   <td>It represents the column we are going to use for filtering.</td>
   <td><code>string</code></td>
   </tr>
   <tr>
   <td>Name</br></br>
   <b>Mandatory</b> </td>
   <td>It represents the name were going to assign for the filter.</td>
   <td><code>string</code></td>
   </tr>
   <tr>
   <td>BasedOn</br></br>
   <b>Mandatory</b> </td>
   <td>It represents the value needed to set the column with the user email, full name, or group name as the data column for the filter.</td>
   <td><code>String (None, FullName,Email,GroupName)</code></td>
   </tr>

   <tr>
   <td>GroupId</br></br>
   <b>Optional data</b> </td>
   <td>It represents the user Group we use for Bold BI to fetch Data using filter.</td>
   <td><code>string</code></td>
   </tr>
</table>

> **NOTE:**:
    1. Please note that the UserId or GroupId listed in the above JSON should be used in Bold BI as users or groups.

    2. Currently, the User filter API is supported only for Manual mode.

### Sample for creating User Filter via Rest Api using group Id

``` json
{
    "BasicFilters": [
        {
            "Mode": "Manual",
            "UserInfo": [
                {
                    "IsGroup": true,
                    "IsCheckAll": false,
                    "SelectedValues": [
                        "12345"
                    ],
                    "IncludeFutureValues": false,
                    "RelativeDateFilter": null,
                    "UserId": null,
                    "GroupId": "string"
                }
            ],
            "ShowRecordsToUnmappedUsers": true,
            "ColumnId": "string",
            "Name": "string",
            "BasedOn": "None"
        }
    ],
    "AdvancedFilter": null
}


```

### Sample for creating User filter with relative date

```json
{
    "BasicFilters": [
        {
            "Mode": "Manual",
            "UserInfo": [
                {
                    "IsGroup": false,
                    "IsCheckAll": false,
                    "SelectedValues": [],
                    "IncludeFutureValues": false,
                    "RelativeDateFilter": {
                        "RelativeDateFormat": "Month",
                        "DateInstance": "Past",
                        "StartDate": "07/25/1996 12:00 AM",
                        "EndDate": "10/24/1996 11:59 PM",
                        "Range": 3,
                        "UseAnchorDate": true,
                        "AnchorDate": "10/19/1996"
                    },
                    "UserId": "user@domain.com"
                }
            ],
            "ShowRecordsToUnmappedUsers": true,
            "ColumnId": "string",
            "Name": "string",
            "BasedOn": "None"
        }
    ],
    "AdvancedFilter": null
}