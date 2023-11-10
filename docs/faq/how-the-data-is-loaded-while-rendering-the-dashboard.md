---
layout: post
title: Dashboard Data Loading Models - Embedded BI | Bold BI Docs
description: Learn the different modes of data loading - Live and Extract, available with Bold BI Embedded while rendering the dashboard.
canonical: "/faq/how-the-data-is-loaded-while-rendering-the-dashboard/"
platform: bold-bi
documentation: ug

---
# How the data is loaded while rendering the dashboard?
In this post, we will discuss about how the data is loaded in your dashboard.

In our Bold BI, dashboard will be rendered based on the data source connections and provided refresh options.

## Data Load for Live Mode connections
If you create a data source with live mode, data is loaded dynamically while rendering the dashboard. Live mode is applicable for the `SQL Data sources` which is listed in this [link](/working-with-data-source/data-connectors/).

## Data Load for Extract Mode connections
If you create a data source with an extract mode or web data sources or statistic files, data will be imported into an intermediate database. 

Currently, Bold BI designer extracts 50000 record initially and other records will be extracted in next iteration based on the [Refresh Settings](/working-with-data-source/data-connectors/sql-data-source/#sql-data-source-refresh-settings).In this case, dashboard is rendered with the imported data.

## Data Load with Scheduled Auto Refresh
Bold BI allows you to schedule auto refresh for your dashboard. Check the [Auto refresh](/working-with-dashboards/preview-dashboard/refresh-dashboard/) option to load the data with updated one based on the scheduling. 

## Help Link
[Sample data source creation with live and extract mode](/working-with-data-source/data-connectors/sql-data-source/)
