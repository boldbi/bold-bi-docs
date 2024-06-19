---
layout: post
title: Configure Data Cache Settings – Embedded BI | Bold BI Docs
description: Learn how to configure the data cache settings to improve dashboard performance by caching widget data during the interactions in a dashboard in the Bold BI.
platform: bold-bi
documentation: UG
---

# Configure Data Cache Settings

This section explains on how to configure the Data cache settings to improve dashboard performance by caching widget data during the interactions in a dashboard in the Bold BI.

The Data Cache allows you to improve the dashboard performance by caching the result of each widget and keeping the cached data in a dashboard for a particular amount of time. 

## Mode selection
The mode should be either `in-memory` or `redis`. The widget data will be cached based on the selected mode.

### Cache configuration
1. Go to the `Data Process` settings on the server page and select the `Data Cache Configuration` tab.

    The Data cache can be achieved through two modes:
    1. In-Memory
    2. Redis

    **In-Memory**

    The `In-Memory` is the default cache memory for dashboards. It stores the data in the internal cache storage. You should configure the `CacheMode` property for the `in-memory` mode selection.
    
    **Redis**

    The Data is cached in an external server named `Redis`. Redis is an open-source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine. Learn more about `Redis` and its installation [here](https://redis.io/).

    ![DataCache configuration](/bold-bi-docs/static/assets/embedded/site-administration/images/datacache_configuration.png#max-width=100%)

2. In `Redis` mode, find the connection string and test connection options. It will help to check whether it is a valid connection string or not.

    ![Redis test connection](/bold-bi-docs/static/assets/embedded/site-administration/images/Redis_Mode.png#max-width=70%)

3. The data refreshed time is provided on the dashboard view page. Disable the data refreshed time by clicking the checkbox.

    ![DataCache refreshed time](/bold-bi-docs/static/assets/embedded/site-administration/images/display_refresh_time.png#max-width=70%)

4. By clicking the clear cache option, all dashboard cached memory should be cleared when the data cache is in an ON state.

    ![Clear datacache](/bold-bi-docs/static/assets/embedded/site-administration/images/clear_cache.png#max-width=70%)

>**NOTE:** `Clear cache` option is visible only when the cache is present.

Please find more details about [Data cache](/embedded-bi/working-with-dashboards/data-cache/).