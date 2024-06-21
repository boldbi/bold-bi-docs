---
layout: post
title: How to resolve no data to be displayed alert | Bold BI Docs
description: Learn how to resolve the no data to be displayed alert message shown in dashboard widget and identify the possible reasons in Bold BI dashboard application.
platform: bold-bi
documentation: ug
---
# How to resolve no data to be displayed:
The alert message `There is no data to be displayed` will appear in the widgets if no data is available in the source database due to some possible reasons.

> **NOTE:** You can customize your alert message shown in the widget by referring to steps explained this help documentation [section](https://help.boldbi.com/embedded-bi/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties).

Please find the possible reasons for the `no data to display` alert message in the widgets and the steps to check and resolve the issue at the user end.

## No data available in the database itself
In some cases, the database may be empty or have empty columns, which will cause the widget to throw an alert message.

For example, consider the following sample table named `demo table` in the `Microsoft SQL Server`, and the table has no data available in the source database.

Please find the screenshot of the sample table in the following screenshot:

![no-data-database](/static/assets/embedded/faq/images/no-data-database.png)

Consider you have created a `data source` using this connection string and configuring any fields from this data source in your `Dashboard widgets` will be causing the no data to display alert. 

To overcome the No data to display issue, please ensure that your datasource having proper data.

For example, Database servers such as `SQL server` database, `PostgreSQL` server database for `Live` connections and source files like `CSV` and `Excel` for file-based connectors, and your source Cube for `SSAS connectors` data before connecting the data source to avoid this warning.

If you are using `Web API`, please make sure the API Endpoint is producing proper data.

## Applying filter values:

Another possible reason for the No data message in your visualizations is that you have applied the filter value that contains no equivalent data available in your source database.

For example, consider the `Purchase Order Detail dashboard` shown in the following screenshot.

![PurchaseOrderDetaildashboard](/static/assets/embedded/faq/images/Purchase-Order-Detail-dashboard.png)

Here, `Master widget filter` has been configured for date value using the `date picker` widget with a date in the table and we can see the dashboard with filtered data.

![MasteWidgetfilterConfiguration](/static/assets/embedded/faq/images/Master-Widget-filter-Configuration.png)

When we have applied the `filter` value that contains no equivalent data in the table, it will be causing the no data to display.

![No-data-displayed](/static/assets/embedded/faq/images/No-data-displayed.png)

To overcome the issue, Ensure that the filtered value matches the current dashboard data.

> **NOTE:** Sometimes the alert message will appear when you are using other filter options with no equivalent table data like relative date filter, condition-based filter, and item-based filters.

## User Restrictions:

The [User Filter](https://help.boldbi.com/cloud-bi/working-with-data-source/user-filter/) provides row level security for the data used for creating the dashboards. So that we can restrict the data that will be visible to each user. 

Lets consider the [Hotel Revenue Management Dashboard](https://www.boldbi.com/solutions/hospitality/hotel-revenue-management-dashboard). In the dashboard we can restrict the revenue data for the hotels in different geographical area so that the managers and the staffs will be able to see only the data of the region that they are handling.

So, while applying the user filter, please make sure you have applied the filters properly for all the required users.

## Isolation code in site level:

[Isolation code](https://help.boldbi.com/embedded-bi/working-with-data-source/configuring-isolation-code/) feature is to configure a row-level security for site level to apply all dashboards on the site. Here, you can set the filter value in a specific column of data source. The `User Management Server` admin can apply the isolation code from site settings of the UMS site details page. The dashboard will be filtered based on the applied isolation code. If the column in the code doesn't match in data source level, then `no data will be displayed` in widgets.

`Isolation code` will be applied as follows.

![Apply Isolation Code](/static/assets/embedded/faq/images/isolation-code-apply-configuration.png)

The dashboard will be rendered based on the applied isolation code.`No data to be displayed` will be shown in the dashboard if the isolation code does not match the data source column.

You can resolve the `No data to be displayed` error by ensuring the presence of data in the database, using equivalent table data value in the filter options and whether the data is accessible for that user we can avoid this alert message.

> **NOTE:** If you have checked the other possibilities and still facing this issue means it needs to be validated. So, we suggested you contact Bold BI support by creating a support ticket [contact us](https://www.boldbi.com/support).
