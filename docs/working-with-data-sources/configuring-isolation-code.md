---
layout: post
title: Row-level Security with Isolation Code | Bold BI Docs
description: Learn how to access restricted data across all dashboards based on isolation code applied at site level in Bold BI Embedded.
platform: bold-bi
documentation: ug
keywords: isolation, isolation code, isolation filter, row level security, row level
---

# Configure Isolation code in site level

Isolation code feature is to configure a row-level security for site level to apply all dashboards on the site. Here, you can set the filter value in a specific column of data source.
The UMS admin can apply the isolation code from site settings of the UMS site details page. The dashboard will be filtered based on the applied isolation code. If the column in the code doesn't match in data source level, then no data will be displayed in widgets.

> **NOTE:**  Isolation code will not apply while creating or editing the data source. Isolation code feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

Isolation code will be applied as follows.

![Apply Isolation Code](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/isolation-code-apply.png)

The dashboard will be rendered based on the applied isolation code and will show the data as follows.

![Apply Isolation Code in dashboard](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/isolation-code-apply-in-dashboard.png)

No records will be displayed in the dashboard if the isolation code does not match the data source column.

![Isolation Code not matched](/static/assets/working-with-datasource/combine-ds-and-isolation-code/images/isolation-code-not-matched.png)

## Syntax for isolation code

You can also use the [url filter parameter](/working-with-dashboards/preview-dashboard/urlparameters/#supported-operators) syntax in the isolation code.
