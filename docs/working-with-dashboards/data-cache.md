---
layout: post
title: Enabling Data Caching in Dashboard Widget | Bold BI Docs
description: Learn how Data Cache support is used to improve dashboard performance by caching widget data during the interactions in a dashboard in the Bold BI application.
platform: bold-bi
documentation: ug
---

# Data Cache in Dashboard
Data Cache allows you to improve the dashboard performance by caching the result of each widget and keeping the cached data in a dashboard for a particular amount of time. When the Data Cache is `ON`, it stores widget data during the first dashboard rendering time and it will fetch the data from the cache without hitting the actual data server for the next dashboard load. Hence, it reduces widgets' loading time and performance hit in the data server.

> **Note:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

## How to configure Data Cache
Data Cache can be configured by using the `Data Cache Settings` dialog which is opened by clicking the `Data Cache` icon from the toolbar.

![DataCache icon](/static/assets/working-with-dashboards/images/DataCache-toolbar-icon.png)

By clicking the `Data Cache` icon, the `Data Cache Settings` dialog will be opened as follows:

![DataCache settings dialog](/static/assets/working-with-dashboards/images/DataCache-settings-dialog.png#max-width=62%)

Click `Apply` button to save the data cache configuration.

`Data Cache Settings` dialog has two states as follows:
1. OFF
2. ON

### OFF state
The OFF state cannot store the data of a widget. You can enable it when there is no need for caching data.

### ON state
The ON state caching widget data and the cached result will be applied in the rendering of the dashboard. The Data Cache has an expiration time of up to 60 minutes and the default time is set as 30 minutes.

![DataCache ON state](/static/assets/working-with-dashboards/images/DataCache-ON-state.png#max-width=62%)

After `Data Cache` is enabled, when opening the dashboard in view mode, the `Data Cache refresh time` will be shown in the nearby dashboard theme, which indicates that the `Data Cache` is in the `ON` state.

![DataCache marker](/static/assets/working-with-dashboards/images/DataCache-cachemark.png#max-width=100%)

### Data Cache refresh time
The data cache refresh time represents when the data fetch live data from the data server. It will be displayed based on the user's browser time zone. We can disable the refresh time by unchecking the Display refresh time option in [Cache configuration](/working-with-dashboards/data-cache/#cache-configuration).

>**NOTE:** By default the Display refresh time option is enabled. 

## How to fetch Live data when Data Cache is enabled
When `Data Cache` is enabled, data will be retrieved from the cache. If you want to get live data from the data server, use the `Clear cache and refresh` option from the toolbar in view mode. When refreshing the dashboard from the `Clear cache and refresh` option from the toolbar, it will get the data from the data server and store them in a cache. You can find the Clear cache and refresh option as shown in the following image:

![DataCache refresh option](/static/assets/working-with-dashboards/images/DataCache-refresh-option.png#max-width=100%)

## Cache Mode Configuration
Data cache can be achieved through two modes:
1. In-Memory
2. Redis

### In-Memory
The `In-Memory` is the default cache memory for dashboards. It stores the data in the internal cache storage. You should configure the `CacheMode` property for the `inmemory` mode selection. Please find more details about [Mode Selection](/working-with-dashboards/data-cache/#mode-selection).

### Redis
Data is cached in an external server named `Redis`. Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Learn more about `Redis` and it's installation [here](https://redis.io/).

After installation, you should start the Redis server as shown in the following image:
![DataCache Redis server](/static/assets/working-with-dashboards/images/DataCache-Redis-server.png#max-width=70%)

## Mode selection
Mode should be either `inmemory` or `redis`, the widget data will be cached based on the selected mode.

### Cache configuration
1. Go to the `Data Process` settings on the server page and select the `Data Cache Configuration` tab.

    ![DataCache configuration](/static/assets/working-with-dashboards/images/datacache_configuration.png#max-width=100%)

2. In `Redis` mode, you can find the connection string and test connection options. It'll help to check whether it is a valid connection string or not.

    ![Redis test connection](/static/assets/working-with-dashboards/images/Redis_Mode.png#max-width=70%)

3. We have provided data refreshed time in the dashboard view page, and you can also disable the data refreshed time by clicking the checkbox.

    ![DataCache refreshed time](/static/assets/working-with-dashboards/images/display_refresh_time.png#max-width=70%)

4. By clicking the clear cache option, all dashboard cached memory should be cleared when the data cache is in an ON state.

    ![Clear datacache](/static/assets/working-with-dashboards/images/clear_cache.png#max-width=70%)

>**NOTE:** `Clear cache` option is visible only when data is available in cache.
 