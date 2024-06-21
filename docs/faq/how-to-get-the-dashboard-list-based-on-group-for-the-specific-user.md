---
layout: post
title: Getting dashboard list for a user in a group | Bold BI
description: Learn how to get dashboard list that are accessible to a user based on associated group with the combination of different REST APIs.
platform: bold-bi
documentation: ug
---

# How to get the dashboard list based on group for the specific user

Right now, we could be able to get the list of dashboards available to the users from the REST API directly. But we do not have a direct API to get the list of dashboards available to the group if the user is present in it.

So, please follow these steps to get the list of dashboards along with the permissions specific to the group if the user is present in it.

1. Generate the token with an email in the authorization server to impersonate the user. API to generate the token, please visit this <a href="https://help.boldbi.com/embedded-bi/rest-api-reference/v2.0/api-reference/#operation/Authentication">link</a>. Once the authentication succeeds, then the token will be generated as shown in the following image,

    ![Token Generation](/static/assets/embedded/faq/images/access-token-generation.png)

2. Once the token is generated, identify whether the user is present in the group or not. By passing the token in the authorization header to this <a href="https://help.boldbi.com/embedded-bi/rest-api-reference/v2.0/api-reference/#operation/Users_GetGroupsOfUser">GetGroupsOfUsersAPI</a> which returns list of groups for the user id. From the list of groups, we can identify whether the expected group has returned from the API or not.

    ![Read Grouplist of the user](/static/assets/embedded/faq/images/group-list-of-the-user.png)

3. Next, we must get the list of permissions assigned to the group. For this, you must invoke this <a href="https://help.boldbi.com/embedded-bi/rest-api-reference/v2.0/api-reference/#operation/Permission_GetGroupPermission">API</a> and get the list of permissions as shown in the following image.

    ![Get Group permission list of the user](/static/assets/embedded/faq/images/group-permission-list.png)

4. Then, invoke this <a href="https://help.boldbi.com/embedded-bi/rest-api-reference/v2.0/api-reference/#operation/Items_GetItems">API</a> to get the list of dashboards accessible to the user and compare with the above permission list, and we can get the list of dashboards.

    ![Read Userlist of the dashboard](/static/assets/embedded/faq/images/user-list-of-the-dashboard.png)

   The above API will return all the dashboards belongs to the user. If the group permission API returns the ‘Specific Dashboard’ as follows, we have to get the list of item ids with the same entity and filter the same ids from the result returned from the above API.

    ![Specific Dashboard list](/static/assets/embedded/faq/images/specific-dashboard-list.png)

   Once we compared both lists, then we can get the details of the permission `(CanEdit/CanRead/CanDelete)` for the dashboard for the specific user belongs to the specific group.


