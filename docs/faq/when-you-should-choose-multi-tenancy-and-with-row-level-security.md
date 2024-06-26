---
layout: post
title: Multi-tenancy and Row-level Security – Embedded BI | Bold BI Docs
description: Learn when to use multi-tenancy with different customers and row-level security in embedded scenarios with Bold BI.
platform: bold-bi
documentation: ug
---

# When you should choose multi-tenancy and with row-level security

## Multi-tenancy

Multi-tenant support enables the administrator to deploy multiple tenants to serve multiple customers. If you want to establish the Bold BI application with your customers and share the admin privilege to manage the Dashboards and users from their end, you can utilize the multi-tenancy feature in Bold BI.

For example, if your Bold BI Server is bound to the `company.com` domain, you can create multiple tenants for your customers with different sub domains like `client1.company.com` and `client2.company.com`. This will allow each customer to use their own databases to create the required dashboards.

Bold BI's multi-tenant support ensures the security of both the application and data. You can learn more about [Multi-Tenancy](/multi-tenancy/).

## Row-level Security

If you would like to embed the Bold BI Dashboard into your application and distribute it to your customers, and you would like to filter the data based on your customers, then you can make use of Row-level security. Row-level security can be applied from multiple layers,

1. [Isolation code](/working-with-data-sources/configuring-isolation-code/) - The UMS admin can apply the isolation code to any site from the site settings.
2. [Custom Attribute](/working-with-data-sources/configuring-custom-attribute/) - The Bold BI admin can set a custom attribute that can be applied at the data source query level based on the user and groups.
3. [User-based filters(Row-level security)](/working-with-data-sources/user-filter/) - User-based filters can be configured when designing the dashboard.

Row-level filtering can be applied within the hierarchy mentioned above.


