---
layout: post
title: API Reference – programmatic multitab dashboard Methods | Bold BI
description: Explore the JavaScript programmatic multitab dashboard API reference for methods that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---
# Methods
## loadTabbedDashboards()
This method will render a programmatic multitab dashboard using either [dashboard IDs](/embedding-options/embedding-sdk/component-api-v2.0/multi-tab/multi-tab-members/#dashboardids) or [dashboard Paths](/embedding-options/embedding-sdk/component-api-v2.0/multi-tab/multi-tab-members/#dashboardpaths) while calling the create method.

**Example** 
```js      
var dashboard = BoldBI.create({
     serverUrl: "https://boldbidemo/bi/site/site1",
     dashboardIds: ["5cb065f7-dabb-4b0c-9b45-c60a5730e963","47415a2c-d1de-478d-9d9e-5e6adc6e530d"], 
     embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
     environment: BoldBI.Environment.Enterprise,
     height: "800px",
     width: "1200px",
     authorizationServer: {
          url: "https://boldbidemo/authorize/server"
     } 
}); 
dashboard.loadTabbedDashboards();
```

> **NOTE:**
> 1. To embed the multitab dashboard programmatically, either dashboardIds or dashboardPaths can be used.
> 2. To embed the multitab dashboard using Bold BI Server version from 10.1.18, it is necessary to use the corresponding CDN link: https://cdn.boldbi.com/embedded-sdk/v10.1.18/boldbi-embed.js. If you are using a Bold BI Server version lower than 10.1.18, you can use the CDN link: https://cdn.boldbi.com/embedded-sdk/v9.1.73/boldbi-embed.js.
To access additional details, please click on the following [Embedded multitab dashboard programmatically](/embedding-options/embedding-sdk/embed-different-components/embed-multi-tab-dashboard/).
Besides the `loadTabbedDashboards` method described above, all other methods available are identical to those used when embedding standard dashboards. For a complete list of supported methods, refer to the [dashboard method](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-methods/) documentation.