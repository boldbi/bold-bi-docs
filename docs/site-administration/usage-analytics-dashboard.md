---
layout: post
title: Usage Analytics Dashboard – Embedded BI | Bold BI Docs
description: Learn how to monitor dashboard activity and understand how users are interacting with dashboards in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Usage Analytics Dashboard

The usage analytics dashboard is predefined and allows you to monitor dashboard activity in order to better understand how users are interacting with dashboards.

The usage analytics dashboards can be found in the `Usage Analytics` category on the dashboard listing page.

![Usage Analytics Dashboard](/static/assets/site-administration/images/usage-analytics-dashboard.png#width=60%)

You can choose to show or hide the usage analytics category on the dashboard listing page by selecting the [Usage analytics](/site-administration/dashboard-settings/usage-analytics/) option in the dashboard settings page.

> **NOTE:**  The `Usage Analytics` option is available only to admin users, and usage analytics dashboards are read-only.

## Dashboard Usage Analytics

![Dashboard Usage Analytics1](/static/assets/site-administration/images/dashboard-usage-analytics1.png#width=60%)

![Dashboard Usage Analytics2](/static/assets/site-administration/images/dashboard-usage-analytics2.png#width=60%)


### Usage Analytics Dashboard Widgets Details

The following section explains the purpose of each widget in the dashboard.

<table>
        <tr>
            <th>
                <span style="font-weight:bold">Widgets</span>
            </th>
            <th>
                <span style="font-weight:bold">Description</span>
            </th>
        </tr>
        <tr>
            <td>
                Activity Date
            </td>
            <td>
                Filter the dashboard values based on weekly, monthly or any custom values.
            </td>
        </tr>
        <tr>
            <td>
                Total Dashboard Views
            </td>
            <td>
                The total number of dashboard views. A view is defined as a user rendering a dashboard.
            </td>
        </tr>
        <tr>
            <td>
                Unique Dashboard Views
            </td>
            <td>
                Total number of unique dashboard views by users.
            </td>
        </tr>
        <tr>
            <td>
                Dashboards Updated
            </td>
            <td>
                The total number of times, the dashboard gets modified.
            </td>
        </tr>
        <tr>
            <td>
                Total Shares
            </td>
            <td>
                Number of times the dashboards was shared with another user or group.
            </td>
        </tr>
        <tr>
            <td>
                Dashboards Created
            </td>
            <td>
                Total number of dashboards created.
            </td>
        </tr>
        <tr>
            <td>
                Dashboard Rollbacks
            </td>
            <td>
                Total number of dashboards rollbacked to previous version.
            </td>
        </tr>
        <tr>
            <td>
                Dashboard Deleted
            </td>
            <td>
                Total number of dashboards deleted.
            </td>
        </tr>
        <tr>
            <td>
                Copied Dashboards
            </td>
            <td>
                Total number of dashboards copied.
            </td>
        </tr>
        <tr>
            <td>
                Data Refreshes
            </td>
            <td>
                Total number of requests count and failed request count for data refreshes.
            </td>
        </tr>
        <tr>
            <td>
                Daily Dashboard Views
            </td>
            <td>
                Total number of daily dashboard views.
            </td>
        </tr>
        <tr>
            <td>
                Scheduled Exports Usage
            </td>
            <td>
                Scheduled Exports Usage for excel, pdf and image format in percentage.
            </td>
        </tr>
		<tr>
            <td>
                Scheduled Exports
            </td>
            <td>
                Total number of times scheduled dashboard exports count for excel, pdf and image format and failed request count.
            </td>
        </tr>
        <tr>
            <td>
                Active Creators
            </td>
            <td>
                Top active users based on dashboards created and edited.
            </td>
        </tr>
        <tr>
            <td>
                Active Visitors
            </td>
            <td>
                Top active users based on dashboard visits.
            </td>
        </tr>
        <tr>
            <td>
                Collaboration Activity
            </td>
            <td>
                Collaboration activity for comments in dashboard.
            </td>
        </tr>
        <tr>
            <td>
                Dashboard Visits by User
            </td>
            <td>
                Details of users and their dashboard visits.
            </td>
        </tr>
</table>

## Performance Monitoring Dashboard

The performance monitoring dashboard is predefined and allows you to monitor the performance of each dashboard in order to better understand which dashboard is affecting performance.

![Performance Monitoring Dashboard](/static/assets/site-administration/images/Performance_monitoring.png#width=60%)

### Performance Monitoring Dashboard Widgets Details

<table>
        <tr>
            <th>
                <span style="font-weight:bold">Widgets</span>
            </th>
            <th>
                <span style="font-weight:bold">Description</span>
            </th>
        </tr>
        <tr>
            <td>
                Filter Date
            </td>
            <td>
                Filter the data by start date.
            </td>
        </tr>
        <tr>
            <td>
                User
            </td>
            <td>
                Filter the data based on user.
            </td>
        </tr>
        <tr>
            <td>
                Query Execution Place
            </td>
            <td>
                Filter data based on query execution place.
            </td>
        </tr>
        <tr>
            <td>
                Query Status
            </td>
            <td>
                Filter Data based on successful or failed query request.
            </td>
        </tr>
        <tr>
            <td>
                Tenant
            </td>
            <td>
                Filter data based on tenant.
            </td>
        </tr>
        <tr>
            <td>
                Dashboard
            </td>
            <td>
                Filter data based on dashboard.
            </td>
        </tr>
        <tr>
            <td>
                Widget
            </td>
            <td>
                Filter data based on widget.
            </td>
        </tr>
        <tr>
            <td>
                Data Source
            </td>
            <td>
                Filter data based on Datasource.
            </td>
        </tr>
        <tr>
            <td>
                Slow Dashboard Based on Average Time
            </td>
            <td>
                Shows which dashboard ran slow with Query execution time.
            </td>
        </tr>
        <tr>
            <td>
                Slow Widget based on Average Time
            </td>
            <td>
                Shows which widget ran slow with Query execution time.
            </td>
        </tr>
        <tr>
            <td>
                Slow Data Source Based on Average Time
            </td>
            <td>
                Shows which data source ran slow with Query execution time.
            </td>
        </tr>
</table>

## Query Performance Tracking

The Query Performance Tracking is predefined and enables you to monitor the performance of each query to better understand which query impacts performance.

![Query Performance Tracking](/static/assets/site-administration/images/Query_performance.png#width=60%)

### Query Performance Tracking Widgets Details

<table>
        <tr>
            <th>
                <span style="font-weight:bold">Widgets</span>
            </th>
            <th>
                <span style="font-weight:bold">Description</span>
            </th>
        </tr>
        <tr>
            <td>
                Start Date
            </td>
            <td>
                Filter the data by start date.
            </td>
        </tr>
        <tr>
            <td>
                Tenant
            </td>
            <td>
                Filter the data based on tenant.
            </td>
        </tr>
        <tr>
            <td>
                Detailed Query Information
            </td>
            <td>
                Tracking ID represents each instance of Dashboard / Widgets being rendered/invoked at a time. Provides information about Dashboard name, widget name, Datasource name, query start and end time, Query execution time, Query status, and Query type (Widget/Dashboard).
            </td>
        </tr>
        <tr>
            <td>
                Executed Query by Tracking ID
            </td>
            <td>
                Tracking ID represents each instance of Dashboard / Widgets being rendered/invoked at a time. Provides executed query by tracking ID.
            </td>
        </tr>
</table>
