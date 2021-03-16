---
layout: post
title: API Reference – Members - JavaScript Embedding | Bold BI
description: Explore the JavaScript API reference for members that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---

# Members

<h2 class="doc-prop-wrapper" id="serverurl" data-Path="serverurl-serverUrl">
<a href="#serverurl" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>serverUrl</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

Your Bold BI application URL needs to be assigned to this member.

**Default value** 

<li>""</li>

**Example** 
   
```js
var dashboard = BoldBI.create({
     serverUrl: "https://mydashboard.com/bi/site/site1",
});
dashboard.loadDashboard();
```
    
<h2 class="doc-prop-wrapper" id="dashboardid" data-Path="dashboardid-dashboardId">
<a href="#dashboardid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardId</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

The Id of the dashboard, which needs to be embedded in a page from your Bold BI application.

**Default value** 

<li>""</li>

**Example**
   
```js  
var dashboard = BoldBI.create({
     dashboardId: "5cb065f7-dabb-4b0c-9b45-c60a5730e963"                
});
dashboard.loadDashboard();
```   
  
<h2 class="doc-prop-wrapper" id="dashboardpath" data-Path="dashboardpath-dashboardPath">
<a href="#dashboardpath" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardPath</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
	

This will hold the dashboard path as category name followed by dashboard name. 

**Syntax**

<li>/{category-name}/{dashboard-name}</li>

**Default value** 

<li>""</li>

**Example** 
   
```js   
var dashboard = BoldBI.create({
     dashboardPath: "/Samples/Sample Dashboard"
});
dashboard.loadDashboard();
```	
  
<h2 class="doc-prop-wrapper" id="embedcontainerid" data-Path="embedcontainerid-embedContainerId">
<a href="#embedcontainerid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>embedContainerId</span>

<span class="doc-prop-type"> `string`
</span>

</h2>

    
The Id of a div element in which the dashboard will be initialized and rendered.

**Default value** 

<li>""</li>

**Example** 
   
```js
<div id="container"></div> 
<script> 
     // Embed Dashboard 
     var dashboard = BoldBI.create({
          embedContainerId: "container",        
     });
     dashboard.loadDashboard();
</script>
```

<h2 class="doc-prop-wrapper" id="embedtype" data-Path="embedtype-embedType">
<a href="#embedtype" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>embedType</span>

<span class="doc-prop-type"> `object`
</span>

</h2>

    
Providing the two types of embedding. One is `component` and the other is `iframe`. In component type, you will use the embedding SDK for rendering the dashboard. In iframe type, you will load the dashboard URL in the iframe and the dashboard will be rendered.

**Possible values** 

<li>BoldBI.EmbedType.Component</li>
<li>BoldBI.EmbedType.IFrame</li>

**Default value** 

<li>BoldBI.EmbedType.Component</li>

**Example** 
   
```js
var dashboard = BoldBI.create({
     embedType: BoldBI.EmbedType.Component,        
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="environment" data-Path="environment-environment">
<a href="#environment" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>environment</span>

<span class="doc-prop-type"> `object`
</span>

</h2>

    
Environment refers to the Bold BI application type. Bold BI offers Cloud and Enterprise editions of the dashboard application. You need to assign your application type in this member.

**Possible values** 

<li>BoldBI.Environment.Cloud</li>
<li>BoldBI.Environment.Enterprise</li>

**Default value** 

<li>BoldBI.Environment.Enterprise</li>

**Example** 
   
```js
var dashboard = BoldBI.create({
     environment: BoldBI.Environment.Enterprise,        
});
dashboard.loadDashboard();
```
	
<h2 class="doc-prop-wrapper" id="mode" data-Path="mode-mode">
<a href="#mode" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>mode</span>

<span class="doc-prop-type"> `object`
</span>

</h2>

    
Mode refers to the dashboard rendering mode such as `view`, `design`, `connection`, and `datasource`. The default value was view, which is used to render the dashboard for viewing.

**Possible values** 

<li>BoldBI.Mode.View</li>
<li>BoldBI.Mode.Design</li>
<li>BoldBI.Mode.Connection</li>
<li>BoldBI.Mode.DataSource</li>

**Default value** 

<li>BoldBI.Mode.View</li>

**Example** 
   
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,        
});
dashboard.loadDashboard();
```

## Set a Culture for the Current User in Embedding

You can set a culture for the current user using the API in embedding.
For example, if you configure the widget to showcase the currency value, it will be displayed with `Auto (English(en-US))` format by default as shown in the following image.

![Default Curreny Culture](/static/assets/embedded/javascript/images/default-curreny-culture.png)

And the values in the widget will be rendered as follows,

![Default Curreny Culture Grid](/static/assets/embedded/javascript/images/default-currency-culture-grid.png)

You can embed the Bold BI dashboards in your web page by following the steps in this [link](/embedded-bi/javascript-based/getting-started/).

After embedding the dashboard, you can change the culture settings on the embedding dashboard instance to get the desired currency format by passing it using the following highlighted API. 

![Culture Settings API](/static/assets/embedded/javascript/images/culture-settings-api.png)

After this, the values in the widget will be displayed as follows within your application.

![Modified Currency Culture](/static/assets/embedded/javascript/images/modified-currency-culture.png)


## dashboardSettings

<h3 class="doc-prop-wrapper" id="dashboardsettingsshowheader" data-Path="dashboardsettingsshowheader-dashboardSettings.showHeader">
<a href="#dashboardsettingsshowheader" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardSettings.showHeader</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Enable or disable the header panel in the Dashboard Viewer.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showHeader: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="dashboardsettingsshowexport" data-Path="dashboardsettingsshowexport-dashboardSettings.showExport">
<a href="#dashboardsettingsshowexport" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardSettings.showExport</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specifies whether to show or hide the `Export` icon in dashboard banner.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showExport: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="dashboardsettingsshowrefresh" data-Path="dashboardsettingsshowrefresh-dashboardSettings.showRefresh">
<a href="#dashboardsettingsshowrefresh" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardSettings.showRefresh</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Refresh` icon in dashboard banner.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showRefresh: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="dashboardsettingsshowmoreoption" data-Path="dashboardsettingsshowmoreoption-dashboardSettings.showMoreOption">
<a href="#dashboardsettingsshowmoreoption" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardSettings.showMoreOption</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Option` icon in dashboard banner.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showMoreOption: true,
     }
});
dashboard.loadDashboard();
```

## widgetSettings
<h3 class="doc-prop-wrapper" id="widgetsettingsshowexport" data-Path="widgetsettingsshowexport-widgetSettings.showExport">
<a href="#widgetsettingsshowexport" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetSettings.showExport</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specifies whether to show or hide the `Export` icon in widget banner.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showExport: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="widgetsettingsshowmoreoption" data-Path="widgetsettingsshowmoreoption-widgetSettings.showMoreOption">
<a href="#widgetsettingsshowmoreoption" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetSettings.showMoreOption</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Option` icon in widget banner.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showMoreOption: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="widgetsettingsshowfilter" data-Path="widgetsettingsshowfilter-widgetSettings.showFilter">
<a href="#widgetsettingsshowfilter" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetSettings.showFilter</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Clear Filter` icon in widget banner.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showFilter: true,
     }
});
dashboard.loadDashboard();
```
	
<h2 class="doc-prop-wrapper" id="filterparameters" data-Path="filterparameters-filterParameters">
<a href="#filterparameters" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>filterParameters</span>

<span class="doc-prop-type"> `string`
</span>

</h2>


Specifies the filter that has to be applied to the dashboard.    

**Default value** 

<li>""</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     filterParameters: "Continent=Asia,Africa,Europe"
});
dashboard.loadDashboard();
```

## dynamicConnection

Dashboard server provides dynamic connection string feature to fetch the data for rendering the dashboard.
	
<h3 class="doc-prop-wrapper" id="dynamicconnectionisenabled" data-Path="dynamicconnectionisenabled-dynamicConnection.isEnabled">
<a href="#dynamicconnectionisenabled" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dynamicConnection.isEnabled</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to enable or disable the dynamic connection string feature.

**Default value** 

<li>false</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     dynamicConnection: {
          isEnabled: false,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="dynamicconnectionidentity" data-Path="dynamicconnectionidentity-dynamicConnection.identity">
<a href="#dynamicconnectionidentity" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dynamicConnection.identity</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
This property, holds the values that will be passed to the API in dynamic connection string feature so that the user can use this identity in their API for validating and providing the required connection string.

**Default value** 

<li>""</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({     
     dynamicConnection: {
          isEnabled: true,
          identity: "",
     }
});
dashboard.loadDashboard();
```

## exportSettings

<h3 class="doc-prop-wrapper" id="exportsettingsshowexcel" data-Path="exportsettingsshowexcel-exportSettings.showExcel">
<a href="#exportsettingsshowexcel" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>exportSettings.showExcel</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Excel` export option.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showExcel: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="exportsettingsshowpdf" data-Path="exportsettingsshowpdf-exportSettings.showPDF">
<a href="#exportsettingsshowpdf" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>exportSettings.showPDF</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `PDF` export option.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showPDF: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="exportsettingsshowimage" data-Path="exportsettingsshowimage-exportSettings.showImage">
<a href="#exportsettingsshowimage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>exportSettings.showImage</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Image` export option.

**Default value** 

<li>true</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showImage: true,
     }
});
dashboard.loadDashboard();
```

<h1 class="doc-prop-wrapper" id="height" data-Path="height-height">
<a href="#height" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>height</span>

<span class="doc-prop-type"> `string`
</span>

</h1>
    

Set the height of the Dashboard Viewer in % or in pixels.

**Default value** 

<li>768px</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     height:"768px",
});
dashboard.loadDashboard();
```
	
<h1 class="doc-prop-wrapper" id="width" data-Path="width-width">
<a href="#width" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>width</span>

<span class="doc-prop-type"> `string`
</span>

</h1>

    
Set the width of the Dashboard Viewer in % or in pixels.

**Default value** 

<li>1024px</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     width:"1024px",
});
dashboard.loadDashboard();
```
	
<h1 class="doc-prop-wrapper" id="theme" data-Path="theme-theme">
<a href="#theme" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>theme</span>

<span class="doc-prop-type"> `object`
</span>

</h1>

    
Bold BI provides dark theming support for Dashboard Viewer. So, user can choose the desired theming for their choice.

**Default value** 

<li>BoldBI.Theme.Light</li> 

**Possible values**

<li>BoldBI.Theme.Light</li> 
<li>BoldBI.Theme.Dark</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     theme:BoldBI.Theme.Dark,
});
dashboard.loadDashboard();
```

## authorizationServer
<h3 class="doc-prop-wrapper" id="authorizationserverurl" data-Path="authorizationserverurl-authorizationServer.url">
<a href="#authorizationserverurl" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>authorizationServer.url</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

    
Any application that embeds Bold BI dashboard and widget needs to be authenticated with Bold BI server and this authentication flow requires sending the confidential information like user email, group details, and embed signature to the Bold BI server. So, you need to implement this authentication flow in your server application and provide the URL for connecting to your server in Bold BI embed instance.

So this property holds the URL of the embedding application that will implement authorization. Learn more about the authorization server [here](/embedded-bi/javascript-based/authorize-server/).

**Default value** 

<li>""</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     authorizationServer: {
          url:"https://serversample.com/embed-details/get",
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="authorizationserverheaders" data-Path="authorizationserverheaders-authorizationServer.headers">
<a href="#authorizationserverheaders" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>authorizationServer.headers</span>

<span class="doc-prop-type"> `object`
</span>

</h3>

    
This property, holds the headers needs to be sent in your application while connecting to the authorization server. 

**Default value** 

<li>{}</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     authorizationServer:{
          headers: {
               "Authorization": "Bearer eDIHDIJAdjakdnajdbaidhoasjasajnsJNININfsbfskdnskdnskdn"
          }
     }
});
dashboard.loadDashboard();
```
	
<h2 class="doc-prop-wrapper" id="expirationtime" data-Path="expirationtime-expirationTime">
<a href="#expirationtime" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>expirationTime</span>

<span class="doc-prop-type"> `number`
</span>

</h2>

    
Specifies the access token expiration time of the dashboard in seconds.

**Default value** 

<li>86400</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     expirationTime:100000,          
});
dashboard.loadDashboard();
```

## autoRefreshSettings

The auto refresh allows you to configure the scheduled refreshing process of the dashboard. It is used to refresh the data based on the specified time.

<h3 class="doc-prop-wrapper" id="autorefreshsettingsenabled" data-Path="autorefreshsettingsenabled-autoRefreshSettings.enabled">
<a href="#autorefreshsettingsenabled" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>autoRefreshSettings.enabled</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to enable or disable the `autoRefreshSettings` option.

**Default value** 

<li>false</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     autoRefreshSettings:{
          enabled: false,
     }
});
dashboard.loadDashboard();
```
## hourlySchedule
	
<h3 class="doc-prop-wrapper" id="autorefreshsettingshourlyschedulehours" data-Path="autorefreshsettingshourlyschedulehours-autoRefreshSettings.hourlySchedule.hours">
<a href="#autorefreshsettingshourlyschedulehours" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>autoRefreshSettings.hourlySchedule.hours</span>

<span class="doc-prop-type"> `number`
</span>

</h3>

    
Specifies the hourly time interval for auto refreshing of data.

**Default value** 

<li>0</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     autoRefreshSettings:{
          enabled: true,
          hourlySchedule: {
               hours: 1,
          }
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="autorefreshsettingshourlyscheduleminutes" data-Path="autorefreshsettingshourlyscheduleminutes-autoRefreshSettings.hourlySchedule.minutes">
<a href="#autorefreshsettingshourlyscheduleminutes" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>autoRefreshSettings.hourlySchedule.minutes</span>

<span class="doc-prop-type"> `number`
</span>

</h3>

    
Specifies the minute by minute time interval for auto refreshing of data.

**Default value** 

<li>0</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     autoRefreshSettings:{
          enabled: true,
          hourlySchedule: {
               minutes: 10,
          }
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="autorefreshsettingshourlyscheduleseconds" data-Path="autorefreshsettingshourlyscheduleseconds-autoRefreshSettings.hourlySchedule.seconds">
<a href="#autorefreshsettingshourlyscheduleseconds" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>autoRefreshSettings.hourlySchedule.seconds</span>

<span class="doc-prop-type"> `number`
</span>

</h3>

    
Specifies the second by second time interval for auto refreshing of data.

**Default value** 

<li>0</li> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     autoRefreshSettings:{
          enabled: true,
          hourlySchedule: {
               seconds: 30,
          }
     }
});
dashboard.loadDashboard();
```