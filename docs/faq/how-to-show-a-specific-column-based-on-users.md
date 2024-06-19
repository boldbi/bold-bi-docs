---
layout: post
title: How to show a specific column based on users | Bold BI Docs
description: This page demonstrates the user level attribute feature to show or hide a specific column in a dashboard based on users which are configured at Bold BI Server.
platform: bold-bi
documentation: ug
---
# How to show a specific column based on users

You can use the user level attribute feature to show a specific column based on users. This method also allows you to hide specific columns dependent on the user.

Please follow the steps to show a specific column based on users:

1. First, you need to [create custom attribute](https://help.boldbi.com/cloud-bi/working-with-data-source/configuring-custom-attribute/#custom-attribute-hierarchy) for user-level as follows.

     ![hide attribute for first user](/bold-bi-docs/static/assets/embedded/faq/images/show-attribute-for-first-user.png)

    ![hide attribute for second user](/bold-bi-docs/static/assets/embedded/faq/images/show-attribute-for-second-user.png)

2. Use the custom attribute name instead of the column name in code view as follows.

    ![hide expression](/bold-bi-docs/static/assets/embedded/faq/images/show-query.png)

3. Then, you need to [configure](https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/#configuring-expression-column-in-widgets) this new column to your grid widget. Click the preview option and when switching the user in preview mode, the column value is updated based on the user level custom attribute.

    ![hide output for first user](/bold-bi-docs/static/assets/embedded/faq/images/show-output-for-first-user.png)

    ![hide output for second user](/bold-bi-docs/static/assets/embedded/faq/images/show-output-for-second-user.png)