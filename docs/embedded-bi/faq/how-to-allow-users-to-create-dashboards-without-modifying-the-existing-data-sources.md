---
layout: post
title: Create dashboard without modifying data source | Embedded Bold BI
description: This page summarizes about how to allow some power users to create dashboards without modifying the existing data source in Embedded Bold BI Web designer.
canonical: "/cloud-bi/faq/how-to-allow-users-to-create-dashboards-without-modifying-the-existing-data-sources/"
platform: bold-bi
documentation: ug
---

# How to allow users to create dashboards without modifying the existing data sources

You can provide access to the specific users to create their dashboards without modifying the existing data sources.

Please follow these steps:

1. First of all, provide permission to the [user](https://help.boldbi.com/embedded-bi/working-with-dashboards/share-dashboards/manage-permissions/#manage-permissions---users) with the required entity and access mode. To create a dashboard, you need to provide the `Create` permission for the user.

**Entity**: `All Dashboard`

**Access Mode**: `Create`

![Create All Dashboards Access](/static/assets/embedded/faq/images/create-all-dashboards.png#width=400px;height=200px)

2. After this, provide access to a particular data source with the `Read` permission alone, so that the user can use the existing data source for dashboard creation without modifying it.

**Entity**: `Specific Data source`

**Scope**: `{Data source name}` 

**Access Mode**: `Read`

![Provide Read Permission to User](/static/assets/embedded/faq/images/provide-read-permission-to-ds.png#width=400px;height=200px)