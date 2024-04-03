---
layout: post
title: Enabling Data Caching in Dashboard Widget | Bold BI Docs
description: Learn how Data Cache support is used to improve dashboard performance by caching widget data during the interactions in a dashboard in the Bold BI application.
platform: bold-bi
documentation: ug
---

# Data Cache in Dashboard
The Data Cache allows you to enhance dashboard performance by caching the results of each widget and retaining the cached data in a dashboard for a specific amount of time. When the Data Cache is turned `ON`, it saves widget data during the initial dashboard rendering, and it will retrieve the data from the cache without accessing the actual data server for subsequent dashboard loads. This helps to reduce loading time for widgets and lessen the impact on the data server's performance.

## How to configure Data Cache
You can use the `Data Cache Settings` dialog which can be accessed by clicking on the `Data Cache` icon in the toolbar.

![DataCache icon](/static/assets/working-with-dashboards/images/DataCache-toolbar-icon.png)

By clicking on the `Data Cache` icon, the `Data Cache Settings` dialog will open as follows:

![DataCache settings dialog](/static/assets/working-with-dashboards/images/DataCache-settings-dialog.png#max-width=62%)

Click the `Apply` button to save the data cache configuration. data cache configuration.

The `Data Cache Settings` dialog has two states as follows:
1. OFF
2. ON

### OFF state
The OFF state cannot store the data of a widget. You can enable it when there is no need for caching data.

### ON state
The ON state caching widget data and the cached result will be applied to the dashboard rendering. Additionally, configure [Scheduling](/working-with-dashboards/data-cache/#schedule-configuration) options to update the live data in the cache for each occurrence.

![DataCache ON state](/static/assets/working-with-dashboards/images/DataCache-ON-state.png#max-width=62%)

### Schedule configuration
Configure four types of schedules: hourly, daily, weekly, and monthly. With each scheduled occurrence, it retrieves live data from the data server and updates the cache accordingly. This ensures that the data comes from the cache with the latest live data whenever a dashboard is rendered.

By default, the recurrence interval is set to 15 minutes. During these scheduled runs, the [Dashboard views](/working-with-dashboards/data-cache/#dashboard-views) and default filter data are also cached.

![DataCache Schedule](/static/assets/working-with-dashboards/images/DataCache-schedule.png#max-width=62%)

>**NOTE:** <li> While scheduling, it doesn't consider the user-based filter. </br> <li> The schedule runs with the user permission who created it. </br> <li> When publishing, live data is updated into the cache if the cache is enabled.

After `Data Cache` is enabled, when opening the dashboard in view mode, the `Data Cache refresh time` will be shown in the nearby dashboard theme, which indicates that the `Data Cache` is in the `ON` state.

![DataCache marker](/static/assets/working-with-dashboards/images/DataCache-cachemark.png#max-width=100%)

### Data Cache refresh time
The data cache refresh time represents when the data fetch live data from the data server. It will be displayed based on the user’s browser time zone. The refresh time can be disabled by unchecking the Display refresh time option in [Cache configuration](/working-with-dashboards/data-cache/#cache-configuration).

>**NOTE:** By default, the Display refresh time option is enabled.

### Dashboard views
When the schedule is configured, saved dashboard views and default filters data are fetched from the live server and updated into the cache for every occurrence. This ensures that the dashboard views remains consistently updated with the latest information. Please find more details about adding dashboard views [here](/managing-resources/manage-dashboards/manage-dashboard-views/#add-dashboard-views).

For example, if the dashboard has views as follows:

![Dashboard views](/static/assets/working-with-dashboards/images/dashboard_views.png#max-width=100%)

>**NOTE:** The dashboard views and default filters data will still fetch live data from the server even if the `Clear cache and refresh` option is selected from the toolbar.

## How to fetch Live data when Data Cache is enabled
When `Data Cache` is enabled, data will be retrieved from the cache. If you want to get live data from the data server, use the `Clear cache and refresh` option from the toolbar in view mode. When refreshing the dashboard from the `Clear cache and refresh` option from the toolbar, it will get the data from the data server and store them in a cache. You can find the `Clear cache and refresh option` as shown in the following image:

When selecting the `Clear cache and refresh` option from the toolbar, a toast message will promptly appear, indicating that the refreshing process has commenced. Find the clear cache and refresh option as shown in the following image:

![DataCache refresh request](/static/assets/working-with-dashboards/images/datacache_request.png#max-width=100%)

A toast message will be displayed after the refresh request fetches the live data and updates it in the cache. This notification confirms the completion of the refresh process. Click `Click here` within the toast message to refresh the dashboard widgets and retrieve the updated cached data.

![DataCache refresh response](/static/assets/working-with-dashboards/images/datacache_response.png#max-width=100%)

## Cache Mode Configuration
Data cache can be achieved through two modes:
1. In-Memory
2. Redis

### In-Memory
The `In-Memory` mode is the default cache memory for dashboards. It stores the data in the internal cache storage. You should configure the `CacheMode` property for the `in-memory` mode selection. Please find more details about [Mode Selection](/working-with-dashboards/data-cache/#mode-selection).

### Redis
Data is cached in an external server named `Redis`. Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Learn more about `Redis` and its installation [here](https://redis.io/).

After installation, you should start the Redis server as shown in the following image:
![DataCache Redis server](/static/assets/working-with-dashboards/images/DataCache-Redis-server.png#max-width=70%)

## Mode selection
The mode should be either `in-memory` or `Redis`; the widget data will be cached based on the selected mode.

### Cache configuration
Go to the `Data Process` settings on the server page and select the `Data Cache Configuration` tab.

    ![DataCache configuration](/static/assets/working-with-dashboards/images/datacache_configuration.png#max-width=100%)

2. In `Redis` mode, you can find the connection string and test connection options. This will help to check whether it is a valid connection string or not.

    ![Redis test connection](/static/assets/working-with-dashboards/images/Redis_Mode.png#max-width=70%)

3. We have provided the data refreshed time on the dashboard view page, and you can also disable the data refreshed time by clicking the checkbox.

    ![DataCache refreshed time](/static/assets/working-with-dashboards/images/display_refresh_time.png#max-width=70%)

4. By clicking the clear cache option, all dashboard cached memory should be cleared when the data cache is in the ON state.

    ![Clear datacache](/static/assets/working-with-dashboards/images/clear_cache.png#max-width=70%)

>**NOTE:** The `Clear cache` option is visible only when data is available in the cache.
 