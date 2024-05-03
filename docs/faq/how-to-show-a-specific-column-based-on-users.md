---
layout: post
title: How to show a specific column based on users | Bold BI Docs
description: This page demonstrates the user level attribute feature to show or hide a specific column in a dashboard based on users which are configured at Bold BI Server.
platform: bold-bi
documentation: ug
---
# How to show a specific column based on users

You can use the user level attribute feature to display a specific column based on users. This method also allows you to hide specific columns depending on the user.

Please follow the steps to display a specific column based on the users.

1. First, you need to [create custom attribute](/working-with-data-sources/configuring-custom-attribute/#custom-attribute-hierarchy) for user-level as follows.

     ![hide attribute for first user](/static/assets/faq/images/show-attribute-for-first-user.png)

    ![hide attribute for second user](/static/assets/faq/images/show-attribute-for-second-user.png)

2. Use the custom attribute name instead of the column name in code view as follows.

    ![hide expression](/static/assets/faq/images/show-query.png)

3. Next, you need to [configure](/working-with-data-sources/data-modeling/configuring-expression-columns/#configuring-expression-column-in-widgets) this new column in your grid widget. Click on the preview option, and when you switch the user to preview mode, the column value will be updated based on the user's custom attribute level.

    ![hide output for first user](/static/assets/faq/images/show-output-for-first-user.png)

    ![hide output for second user](/static/assets/faq/images/show-output-for-second-user.png)