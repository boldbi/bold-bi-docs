---
layout: post
title: How to resolve no data to be displayed alert | Bold BI Docs
description: Learn how to resolve the no data to be displayed alert message shown in dashboard widget and identify the possible reasons in Bold BI dashboard application.
platform: bold-bi
documentation: ug
---
# How to resolve no data to be displayed:
The alert message `There is no data to be displayed` will appear in the widgets if no data is available in the source database due to some possible reasons.

> **NOTE:** You can customize the alert message shown in the widget by following the steps explained in this help documentation [section](/visualizing-data/working-with-widgets/customizing-container-appearance/#widgets-no-data-appearance-properties).

Please find the possible reasons for the `no data to display` alert message in the widgets and the steps to check and resolve the issue at the user's end.

## No data available in the database itself
In some cases, the database may be empty or have empty columns, which will cause the widget to display an alert message.

For example, consider the following sample table named `demo table` in `Microsoft SQL Server`. The table currently has no data available in the source database.

Please find the screenshot of the sample table in the following image:

![no-data-database](/static/assets/faq/images/no-data-database.png)

If you have created a `data source` using this connection string, configuring any fields from this data source in your `Dashboard widgets` will cause the no data to display alert to appear. 

To resolve the No data to display issue, please ensure that your datasource has proper data.

For example, use database servers such as `SQL Server` and `PostgreSQL` for `Live` connections, and source files like `CSV` and `Excel` for file-based connectors. Also, ensure your source cube is set up for `SSAS connectors` before connecting to the data source to prevent this warning.

If you are using a `Web API`, verify that the API endpoint is generating correct data.

## Applying filter values:

Another possible reason for the "No data" message in your visualizations is that you have applied a filter value that does not have any corresponding data available in your source database.

For example, take a look at the `Purchase Order Detail dashboard` shown in the screenshot below.

![PurchaseOrderDetaildashboard](/static/assets/faq/images/Purchase-Order-Detail-dashboard.png)

The `Master widget filter` has been configured to use the `date picker` widget for selecting a date value in the table. As a result, we can now view the dashboard with the data filtered accordingly.

![MasteWidgetfilterConfiguration](/static/assets/faq/images/Master-Widget-filter-Configuration.png)

When we apply a `filter` value that does not have any matching data in the table, it will result in no data being displayed

![No-data-displayed](/static/assets/faq/images/No-data-displayed.png)

To overcome the issue, Ensure that the filtered value matches the current dashboard data.

> **NOTE:** Sometimes, the alert message will appear when you are using other filter options with no equivalent table data, such as the relative date filter, condition-based filter, and item-based filters.

## User Restrictions:

The [User Filter](/working-with-data-sources/user-filter/) provides row-level security for the data used to create the dashboards, allowing us to restrict the data visible to each user. 

Lets consider the [Hotel Revenue Management Dashboard](https://www.boldbi.com/dashboard-examples/hospitality/hotel-revenue-management-dashboard).  Within the dashboard, we can limit the revenue data to the hotels in specific geographical areas. This way, managers and staff will only see the data relevant to the region they are responsible for.

So, when applying the user filter, please ensure that you have properly applied the filters for all the required users.

## Isolation code in site level:

The [Isolation code](/working-with-data-sources/configuring-isolation-code/) feature is used to configure row-level security for a site, allowing all dashboards on the site to apply this security measure. Users can set filter values in a specific column of the data source. The `User Management Server` admin can apply the isolation code from the site settings on the UMS site details page. The dashboard will then be filtered based on the applied isolation code. If the column in the code does not match at the data source level, `no data will be displayed` in the widgets. `Isolation code` will be applied as follows.

![Apply Isolation Code](/static/assets/faq/images/isolation-code-apply-configuration.png)

The dashboard will be rendered based on the applied isolation code. If the isolation code does not match the data source column, `No data to be displayed` will be shown on the dashboard.

You can resolve the `No data to be displayed` error by ensuring that there is data present in the database, using equivalent table data values in the filter options, and confirming that the data is accessible for that user. By doing so, we can avoid this alert message.

> **NOTE:** If you have checked the other possibilities and are still facing this issue, it may need to be validated. Therefore, we suggest that you contact Bold BI support by creating a support ticket. Please [contact us](https://www.boldbi.com/support) for assistance.
