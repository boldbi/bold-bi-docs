---
layout: post
title: Getting dashboard list for a user in a group | Bold BI
description: Learn how to get dashboard list that are accessible to a user based on associated group with the combination of different REST APIs.
platform: bold-bi
documentation: ug
---

# How to get the dashboard list based on group for the specific user

Currently, we are able to obtain the list of dashboards available to users directly from the REST API. However, we do not have a direct API to retrieve the list of dashboards available to a group if a user is a member of that group.

Please follow these steps to obtain the list of dashboards, along with the permissions specific to the group if the user is a member of it.

1. Generate the token using an email in the authorization server to impersonate the user. To access the API for generating the token, please visit this [link](/server-api-reference/v2.0/api-reference/). Once the authentication is successful, the token will be generated as shown in the following image.

    ![Token Generation](/static/assets/faq/images/access-token-generation.png)

2. Once the token is generated, identify whether the user is present in the group or not by passing the token in the authorization header to the [GetGroupsOfUsersAPI](/server-api-reference/v2.0/api-reference/), which returns a list of groups for the user ID. From the list of groups, we can identify whether the expected group has been returned from the API or not.

    ![Read Grouplist of the user](/static/assets/faq/images/group-list-of-the-user.png)

3. Next, we need to obtain the list of permissions assigned to the group. To do this, you must call this [API](/server-api-reference/v2.0/api-reference/) and retrieve the list of permissions as depicted in the following image.

    ![Get Group permission list of the user](/static/assets/faq/images/group-permission-list.png)

4. Next, invoke this [API](/server-api-reference/v2.0/api-reference/) to retrieve the list of dashboards accessible to the user and compare it with the permission list mentioned above. By doing so, we can obtain the list of dashboards.

    ![Read Userlist of the dashboard](/static/assets/faq/images/user-list-of-the-dashboard.png)

  The above API will return all the dashboards belonging to the user. If the group permission API returns the 'Specific Dashboard' as follows, we have to retrieve the list of item IDs with the same entity and filter out the same IDs from the result returned by the above API.

    ![Specific Dashboard list](/static/assets/faq/images/specific-dashboard-list.png)

  Once we compare both lists, we can then obtain the details of the permissions `(CanEdit/CanRead/CanDelete)` for the dashboard for the specific user belonging to the specific group.


