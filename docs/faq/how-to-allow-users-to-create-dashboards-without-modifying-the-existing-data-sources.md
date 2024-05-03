---
layout: post
title: Create dashboard without modifying data source | Embedded Bold BI
description: This page summarizes about how to allow some power users to create dashboards without modifying the existing data source in Embedded Bold BI Web designer.
canonical: "/faq/how-to-allow-users-to-create-dashboards-without-modifying-the-existing-data-sources/"
platform: bold-bi
documentation: ug
---

# How to allow users to create dashboards without modifying the existing data sources

You can grant specific users access to create their own dashboards without altering the existing data sources.

Please follow these steps:

1. First of all, grant the [user](/managing-resources/manage-permissions/#manage-permissions---users) permission with the necessary entity and access mode. In order to create a dashboard, you must provide the user with the `Create` permission.

**Entity**: `All Dashboard`

**Access Mode**: `Create`

![Create All Dashboards Access](/static/assets/faq/images/create-all-dashboards.png#width=400px;height=200px)

2. Afterwards, grant access to a specific data source with only `Read` permission, allowing the user to utilize the data source for creating dashboards without making any modifications.

**Entity**: `Specific Data source`

**Scope**: `{Data source name}` 

**Access Mode**: `Read`

![Provide Read Permission to User](/static/assets/faq/images/provide-read-permission-to-ds.png#width=400px;height=200px)