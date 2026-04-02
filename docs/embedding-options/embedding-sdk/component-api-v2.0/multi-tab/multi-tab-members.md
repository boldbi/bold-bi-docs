---
layout: post
title: API Reference – MutiTab Dashboard Members | Bold BI
description: Explore the MutiTab Dashboard JavaScript API reference for members that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---
# Members
<h2 class="doc-prop-wrapper" id="dashboardids" data-Path="dashboardids-dashboardIds">
<a href="#dashboardids" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardIds</span>

<span class="doc-prop-type"> `array of string []`
</span>
</h2>
    
Specifies the value to set the IDs of individual dashboards in an array, used with the [loadTabbedDashboards()](/embedding-options/embedding-sdk/
different-components/embed-multi-tab-dashboard/) method to embed a programmatic multitab dashboard into your application.
- **Default**: `[]` (empty)

**Example**
   
```js  
var dashboard = BoldBI.create({
     dashboardIds: ["5cb065f7-dabb-4b0c-9b45-c60a5730e963","47415a2c-d1de-478d-9d9e-5e6adc6e530d"]         
});
dashboard.loadTabbedDashboards();
```   

<h2 class="doc-prop-wrapper" id="dashboardpaths" data-Path="dashboardpaths-dashboardPaths">
<a href="#dashboardpaths" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardPaths</span>

<span class="doc-prop-type"> `array of string []`
</span>
</h2>
     
Specifies the value to set the paths of individual dashboards in an array, used with the [loadTabbedDashboards()](/embedding-options/embedding-sdk/embed-different-components/embed-multi-tab-dashboard/) method to embed a programmatic multitab dashboard into your application.
- **Default**: `[]` (empty)

**Example** 
   
```js   
var dashboard = BoldBI.create({
     dashboardPaths: ["/Samples/Sample Dashboard","/Support/Support Market Dashboard"]
});
dashboard.loadTabbedDashboards();
```
> **Note**: Besides the `dashboardIds` and `dashboardPaths` members described above, all other members available are identical to those used when embedding standard dashboards. For a complete list of supported members, refer to the [dashboard members](/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-members/) documentation.