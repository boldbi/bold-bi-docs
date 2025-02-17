---
layout: post
title: API Reference – Members - JavaScript Embedding | Bold BI
description: Explore the JavaScript API reference for members that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---

# Members
<h2 class="doc-prop-wrapper" id="dashboardid" data-Path="dashboardid-dashboardId">
<a href="#dashboardid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardId</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

The ID of the dashboard, which needs to be embedded in a page from your Bold BI application, is required.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example**
   
```js  
var dashboard = BoldBI.create({
     dashboardId: "5cb065f7-dabb-4b0c-9b45-c60a5730e963"                
});
dashboard.loadDashboard();
```   
  
<h2 class="doc-prop-wrapper" id="dashboardpath" data-Path="dashboardpath-dashboardPath">
<a href="#dashboardpath" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardPath</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
	

This will store the dashboard path as the category name, followed by the dashboard name. 

<br>

**Syntax**

<li>/{category-name}/{dashboard-name}</li><br>

<br>

**Default value** : `empty`

<li>""</li><br>

**Example** 
   
```js   
var dashboard = BoldBI.create({
     dashboardPath: "/Samples/Sample Dashboard"
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="dashboardids" data-Path="dashboardids-dashboardIds">
<a href="#dashboardids" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardIds</span>

<span class="doc-prop-type"> `array of string []`
</span>

</h2>
    

The IDs of individual dashboards in the form of an array, which is used in the method [loadMultitabDashboard()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#loadmultitabdashboard) to embed programmatic multitab dashboard into your application.

<br>

**Default value** : `empty`

<li>[]</li><br>

**Example**
   
```js  
var dashboard = BoldBI.create({
     dashboardIds: ["5cb065f7-dabb-4b0c-9b45-c60a5730e963","47415a2c-d1de-478d-9d9e-5e6adc6e530d"]         
});
dashboard.loadMultitabDashboard();
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
	

The paths of individual dashboards in the form of an array, which is used in the method [loadMultitabDashboard()](/embedding-options/embedding-sdk/embedding-api-reference/methods/#loadmultitabdashboard) to embed programmatic multitab dashboard into your application.

<br>

**Default value** : `empty`

<li>[]</li><br>

**Example** 
   
```js   
var dashboard = BoldBI.create({
     dashboardPaths: ["/Samples/Sample Dashboard","/Support/Support Market Dashboard"]
});
dashboard.loadMultitabDashboard();
```

<h2 class="doc-prop-wrapper" id="disableautorecover" data-Path="disableautorecover-disableAutoRecover">
<a href="#disableautorecover" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>disableAutoRecover</span>

<span class="doc-prop-type"> `boolean`
</span>

</h2>

    
This specifies whether to show or hide the `Auto Recover` Popup in the Dashboard Designer.

<br>

**Default value** 

<li>false</li><br> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     disableAutoRecover: false,
});
dashboard.loadDesigner();
```

<h2 class="doc-prop-wrapper" id="embedcontainerid" data-Path="embedcontainerid-embedContainerId">
<a href="#embedcontainerid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>embedContainerId</span>

<span class="doc-prop-type"> `string`
</span>

</h2>

    
The ID of a div element in which the dashboard will be initialized and rendered.

<br>

**Default value** : `empty`

<li>""</li><br>

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
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>embedType</span>

<span class="doc-prop-type"> `object`
</span>

</h2>

    
There are two types of embedding available: `component` and `iframe`. In the component type, you will use the embedding SDK to render the dashboard. In the iframe type, you will load the dashboard URL in the iframe and the dashboard will be rendered.

<br>

**Possible values** 

<li>BoldBI.EmbedType.Component</li>
<li>BoldBI.EmbedType.IFrame</li><br>

<br>

**Default value** 

<li>BoldBI.EmbedType.Component</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     embedType: BoldBI.EmbedType.Component,        
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="environment" data-Path="environment-environment">
<a href="#environment" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>environment</span>

<span class="doc-prop-type"> `object`
</span>

</h2>

    
Environment refers to the type of Bold BI application. Bold BI offers both Cloud and Enterprise editions of the dashboard application. You need to assign your application type to this member.

<br>

**Possible values** 

<li>BoldBI.Environment.Cloud</li>
<li>BoldBI.Environment.Enterprise</li><br>

<br>

**Default value** 

<li>BoldBI.Environment.Enterprise</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     environment: BoldBI.Environment.Enterprise,        
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="expirationtime" data-Path="expirationtime-expirationTime">
<a href="#expirationtime" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>expirationTime</span>

<span class="doc-prop-type"> `number`
</span>

</h2>

    
Specifies the access token expiration time of the dashboard in seconds.

<br>

**Default value** 

<li>86400</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     expirationTime:100000,          
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="filterparameters" data-Path="filterparameters-filterParameters">
<a href="#filterparameters" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>filterParameters</span>

<span class="doc-prop-type"> `string`
</span>

</h2>


This member supports filtering the dashboard in the following cases.

1. Filtering with URL Parameter.
2. Filtering with Dashboard Parameter.
3. Filtering with Multiple URL Parameters.
4. Filtering with Multiple Dashboard Parameters.
5. Filtering with Combination of URL Parameter and Dashboard Parameter and vice versa.

<br>

**Default value** 

<li>""</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     filterParameters: "Continent=Asia,Africa,Europe"
});
dashboard.loadDashboard();
```

<table>
<thead>
<tr>
<th>Cases</th>
<th>Syntax</th>
<th>Example</th>
</tr>
</thead>
<tr>
<td><code>URL Parameter</code></td>
<td><code>{column_name}={value1},{value2},{value3}</code></td>
<td><code>

```js
var dashboard = BoldBI.create({
     filterParameters: "Continent=Asia,Africa,Europe"
});
dashboard.loadDashboard();
```

</code></td>
</tr>
<tr>
<td><code>Dashboard Parameter</code></td>
<td><code>{parameter_name}={parameter_value}</code></td>

<td> <code> For <b>Literals</b>

```js
var dashboard = BoldBI.create({
     filterParameters: "Department_DP=Sales"
});
dashboard.loadDashboard();
```
```js
var dashboard = BoldBI.create({
     filterParameters: "Department_DP=Sales,Marketing"
});
dashboard.loadDashboard();
```

For <b>List</b>

```js
var dashboard = BoldBI.create({
     filterParameters: "Department_DP=IN(Sales)"
});
dashboard.loadDashboard();
```
```js
var dashboard = BoldBI.create({
     filterParameters: "Department_DP=IN(Sales,Marketing)"
});
dashboard.loadDashboard();
```

</code></td>
</tr>
<tr>
<td><code>Multiple URL Parameters</code></td>
<td><code>{column_name1}={value1}&{column_name2}={value2}</code></td>
<td><code>

```js
var dashboard = BoldBI.create({
     filterParameters: "Continent=Asia&Direction=East"
});
dashboard.loadDashboard();
```

</code></td>
</tr>
<tr>
<td><code>Multiple Dashboard Parameters</code></td>
<td><code>{parameter_name}={parameter_value}&&{parameter_name1}={parameter_value1}</code></td>
<td><code>

```js
var dashboard = BoldBI.create({
     filterParameters: "Department_DP=Sales&&Feedback=Good"
});
dashboard.loadDashboard();
```

</code></td>
</tr>
<tr>
<td><code>Combination Of URL Parameter and Dashboard Parameter</code></td>
<td><code>{column_name}={value1},{value2},{value3}&&{parameter_name}={parameter_value}</code></td>
<td><code>

```js
var dashboard = BoldBI.create({
     filterParameters: "Continent=Asia,Africa,Europe&&Department_DP=Sales"
});
dashboard.loadDashboard();
```

</code></td>
</tr>
<tr>
<td><code>Combination Of Dashboard Parameter and URL Parameter</code></td>
<td><code>{parameter_name}={parameter_value}&{column_name}={value1},{value2},{value3}</code></td>
<td><code>

```js
var dashboard = BoldBI.create({
     filterParameters: "Department_DP=Sales&Continent=Asia,Africa,Europe"
});
dashboard.loadDashboard();
```

</code></td>
</tr>
</table>

<h2 class="doc-prop-wrapper" id="height" data-Path="height-height">
<a href="#height" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>height</span>

<span class="doc-prop-type"> `string`
</span>

</h2>

The height is an optional member of the API. You can define the height of the embedding module in either percentages or pixels, depending on your requirements. If you do not specify a height for the API, it will automatically take the dimensions of your embedding container. If no value is provided, it will inherit the height from the dimensions of the parent container of the embedding.

<br>

**Example** 

```js
var dashboard = BoldBI.create({
     height:"800px", //The dashboard is now rendered with a height of 800px
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="isbingmaprequired" data-Path="isbingmaprequired-isBingMapRequired">
<a href="#isbingmaprequired" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>isBingMapRequired</span>

<span class="doc-prop-type"> `boolean`
</span>

</h2>

Specifies whether the bingMap related files need to be downloaded or not.

**NOTE:** If your dashboard contains a bingMap widget, you should set it as true.

<br>

**Default value** 

<li>false</li><br> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     isBingMapRequired: false,
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="mode" data-Path="mode-mode">
<a href="#mode" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>mode</span>

<span class="doc-prop-type"> `object`
</span>

</h2>

    
Mode refers to the dashboard rendering mode, such as `view`, `design`, `connection`, and `datasource`. The default value was "view," which is used to render the dashboard for viewing.

<br>

**Possible values** 

<li>BoldBI.Mode.View</li>
<li>BoldBI.Mode.Design</li>
<li>BoldBI.Mode.Connection</li>
<li>BoldBI.Mode.DataSource</li><br>

<br>

**Default value** 

<li>BoldBI.Mode.View</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,        
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="nonce" data-Path="nonce-nonce">
<a href="#nonce" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>nonce</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

This API member allows you to bypass or load dependencies from the Bold BI server via the Embed SDK wrapper using a `nonce` source when the Content Security Policy is enabled in your application. Set any unique value here. The same unique value must be used in both the `nonce` member and meta tag as follows.

<br>

**Example**

```js  
<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'nonce-8beb50ac-fc1d-4106-ba6b-798835ac0c1b'">

var dashboard = BoldBI.create({
     nonce = "8beb50ac-fc1d-4106-ba6b-798835ac0c1b"
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="pinboardname" data-Path="pinboardname-pinboardName">
<a href="#pinboardname" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>pinboardName</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

The pinboard that needs to be embedded in a page from your Bold BI application needs to be named.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example**
   
```js  
var pinboard = BoldBI.create({
     pinboardName: "Pinboard Name"                
});
pinboard.loadPinboard();
```

<h2 class="doc-prop-wrapper" id="restrictmobileview" data-Path="restrictmobileview-restrictMobileView">
<a href="#restrictmobileview" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>restrictMobileView</span>

<span class="doc-prop-type"> `boolean`
</span>

</h2>


This property allows users to restrict the mobile view on desktop when the browser width reaches a specified pixel threshold.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     restrictMobileView: true,  
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="serverurl" data-Path="serverurl-serverUrl">
<a href="#serverurl" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>serverUrl</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

The Bold BI application URL needs to be assigned to this member.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     serverUrl: "https://mydashboard.com/bi/site/site1",
});
dashboard.loadDashboard();
```

<h2 class="doc-prop-wrapper" id="token" data-Path="token-token">
<a href="#token" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>token</span>

<span class="doc-prop-type"> `string`
</span>

</h2>

By using token API member, able to authenticate the dashboard in your application without implementing the AuthorizeAPI endpoint. Refer [token generation](/embedding-options/embedding-sdk/token-generation/) section for generating 2 different tokens.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example**

```js  
var dashboard = BoldBI.create({
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldm9wc0Bib2xkYmkuY29tIiwidXBuIjouYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSIsImF1ZCI6Imh0dHBzOi8vaG90Zml4LXdpbmRvd3MuYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSJ9.JzbqVr6Brv1mAEvnbHnE-FuShos", // Use the generated Personal Access token
});
dashboard.loadDashboard();

var dashboard = BoldBI.create({
     token: "NjQ2ZDgwZjgtN2Q3MS00ZDQwLWFkNTItYTdkNDRhOGE2NmVi", // Use the generated API key
});
dashboard.loadDashboard();
```

To learn about the available limited [supporting methods](/embedding-options/embedding-sdk/token-generation/#following-embedding-modules-is-achievable-by-using-token-api-member) in embedding.

<h2 class="doc-prop-wrapper" id="viewid" data-Path="viewid-viewId">
<a href="#viewid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>viewId</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    
 
The unique ID of a Dashboard View to render the dashboard with filter view applied.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example**
   
```js  
var dashboard = BoldBI.create({
     viewId:  "b64aebef-58ca-4033-b81a-39350c849b75"         
});
dashboard.loadView();
```   

<h2 class="doc-prop-wrapper" id="viewname" data-Path="viewname-viewName">
<a href="#viewname" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>viewName</span>

<span class="doc-prop-type"> `string`
</span>

</h2>
    

The name of a Dashboard View to render the dashboard with filter view applied.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example**
   
```js  
var dashboard = BoldBI.create({
     viewName : "view 1"       
});
dashboard.loadView();
```   

<h2 class="doc-prop-wrapper" id="widgetlist" data-Path="widgetlist-widgetList">
<a href="#widgetlist" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetList</span>

<span class="doc-prop-type"> `Array`
</span>

</h2>
	

This member will assist in loading the specific widgets of the single dashboard with a single instance call.

<br>

**Default value** : `empty`

<li>[]</li><br>

**Example** 
   
```js  
<div id="dashboard"></div>
<div id="widget1" style="height:500px;width:500px"></div> 
<div id="widget2" style="height:500px;width:500px"></div> 
<div id="widget3" style="height:500px;width:500px"></div>  
<script>  
var dashboard = BoldBI.create({
      dashboardId: "5cb065f7-dabb-4b0c-9b45-c60a5730e963",
      embedContainerId: "dashboard",
      widgetList: [{widgetName: "Medal details by Country", containerId: "widget1" },
                  {widgetName: "Total Medals by Country", containerId: "widget2" },
                  {widgetName: "Country", containerId: "widget3" }],
     });
dashboard.loadMultipleWidgets();
</script>
```

> **NOTE:** We have enhanced the performance of loading multiple widgets in the javascript embedding. Please note that support will work and take effect if the embed SDK Wrapper and Bold BI Server are on the same version effectively from v8.1.41

<h2 class="doc-prop-wrapper" id="width" data-Path="width-width">
<a href="#width" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>width</span>

<span class="doc-prop-type"> `string`
</span>

</h2>

The width is an optional member of the API. You can define the width of the embedding module in either percentages or pixels, depending on your requirements. If you do not specify a width for the API, it will automatically take the dimensions of your embedding container. If no value is provided, it will inherit the width from the dimensions of the parent container of the embedding.

<br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     width:"1200px", //The dashboard is now rendered with a width of 1200px.
});
dashboard.loadDashboard();
```

## authorizationServer

<h3 class="doc-prop-wrapper" id="headers" data-Path="authorizationserverheaders-authorizationServer.headers">
<a href="#headers" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>headers</span>

<span class="doc-prop-type"> `object`
</span>

</h3>

    
The `authorizationServer.headers` parameter, which is optional, is used to transmit any custom data or header values that need to be delivered to your embedding application's `AuthorizationServer`. As a result, you may find this value in the headers of the Authorization Server API. Please refer to the [Knowledge Base](https://support.boldbi.com/kb/article/12507/how-to-pass-custom-data-to-authorization-server) article.

<br>

**Default value** 

<li>{}</li><br>

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

<h3 class="doc-prop-wrapper" id="url" data-Path="authorizationserverurl-authorizationServer.url">
<a href="#url" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>url</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

    
Any application that embeds a Bold BI dashboard and widget needs to authenticate with the Bold BI server. This authentication flow requires sending confidential information such as user email, group details, and embed signature to the Bold BI server. Therefore, you must implement this authentication flow in your server application and provide the URL for connecting to your server in the Bold BI embed instance.

This property holds the URL of the embedding application that will implement authorization. Learn more about the [authorization server](/security-configuration/authorize-server/).

<br>

**Default value** : `empty`

<li>""</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     authorizationServer: {
          url:"https://serversample.com/embed-details/get",
     }
});
dashboard.loadDashboard();
```

## autoRefreshSettings

The auto refresh feature allows you to configure the scheduled refreshing process of the dashboard. It is used to refresh the data based on the specified time.

<h3 class="doc-prop-wrapper" id="enabled" data-Path="autorefreshsettingsenabled-autoRefreshSettings.enabled">
<a href="#enabled" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enabled</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to enable or disable the `autoRefreshSettings` option.

<br>

**Default value** 

<li>false</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     autoRefreshSettings:{
          enabled: false,
     }
});
dashboard.loadDashboard();
```

## autoRefreshSettings.hourlySchedule
	
<h3 class="doc-prop-wrapper" id="hours" data-Path="autorefreshsettingshourlyschedulehours-autoRefreshSettings.hourlySchedule.hours">
<a href="#hours" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hours</span>

<span class="doc-prop-type"> `number`
</span>

</h3>

    
Specifies the hourly time interval for automatically refreshing data.

<br>

**Default value** 

<li>0</li><br>

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

<h3 class="doc-prop-wrapper" id="minutes" data-Path="autorefreshsettingshourlyscheduleminutes-autoRefreshSettings.hourlySchedule.minutes">
<a href="#minutes" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>minutes</span>

<span class="doc-prop-type"> `number`
</span>

</h3>

    
Specifies the time interval, minute by minute, for automatically refreshing the data.

<br>

**Default value** 

<li>0</li><br>

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
	
<h3 class="doc-prop-wrapper" id="seconds" data-Path="autorefreshsettingshourlyscheduleseconds-autoRefreshSettings.hourlySchedule.seconds">
<a href="#seconds" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>seconds</span>

<span class="doc-prop-type"> `number`
</span>

</h3>

    
Specifies the time interval, second by second, for automatically refreshing the data.

<br>

**Default value** 

<li>0</li><br>

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

## dashboardSettings

<h3 class="doc-prop-wrapper" id="dashboardname" data-Path="dashboardsettingsdashboardname-dashboardSettings.dashboardName">
<a href="#dashboardname" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardName</span>

</h3>

<br>

Single Tab Dashboard

Specifies whether or not to update the Dashboards name in the header section.


**Default value** : `empty` 

<li>""</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          dashboardName: "name",
     }
});
dashboard.loadDashboard();
```

Multi Tab Dashboard

Specifies the unique ID of the dashboard if it is present within the multi-tab dashboard and mentions the name of the dashboard in which it should be rendered.

**Default value** 

<li>[]</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     dashboardSettings: {
       dashboardName: [
        { dashboardId: "fb63ae99-83b6-4752-97b7-890182a3729f", dashboardName: "value 1" },
        { dashboardId: "77fd95ce-ec8b-4f68-817c-f41cabfabd3a", dashboardName: "value 2" }  
       ]
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="enablefilteroverview" data-Path="dashboardsettingsenablefilteroverview-dashboardSettings.enablefilteroverview">
<a href="#enablefilteroverview" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableFilterOverview</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Filter Overview` icon in the dashboard banner.

<br>

**Default value** 

<li>true</li><br> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          enableFilterOverview: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="enablefullscreen" data-Path="dashboardsettingsenablefullscreen-dashboardSettings.enablefullscreen">
<a href="#enablefullscreen" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableFullScreen</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Full Screen` icon in dashboard banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          enableFullScreen: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="enabletheme" data-Path="dashboardsettingsenabletheme-dashboardSettings.enabletheme">
<a href="#enabletheme" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableTheme</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Theme` icon in the dashboard banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          enableTheme: false,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="fontfamily" data-Path="dashboardsettingsfontfamily-dashboardSettings.fontFamily">
<a href="#fontfamily" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>fontFamily</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

The Fontfamily member allows you to customize the font of the Bold BI embedded modules such as the viewer, designer, data source, and pinboard embedding.
<br>

**Default value** : `empty` 

<li>""</li><br>

> **NOTE:** Before customizing the font for embedding, you need to upload the font file to the Bold BI Server. Please refer to the [Font](/multi-tenancy/site-administration/look-and-feel-settings/font/) for further information on uploading the font family file. When embedding, use the name you provided for the font when uploading the font file to the server.

**Example** 

```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          fontFamily : "Patrick-hand"
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showdashboardparameter" data-Path="dashboardsettingsshowdashboardparameter-dashboardSettings.showdashboardparameter">
<a href="#showdashboardparameter" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showDashboardParameter</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Dashboard Parameter` icon in dashboard banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showDashboardParameter: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showexport" data-Path="dashboardsettingsshowexport-dashboardSettings.showExport">
<a href="#showexport" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showExport</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specifies whether to show or hide the `Export` icon in dashboard banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showExport: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showheader" data-Path="dashboardsettingsshowheader-dashboardSettings.showHeader">
<a href="#showheader" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showHeader</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
To enable or disable the header panel in the Dashboard Viewer.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showHeader: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showmetrics" data-Path="dashboardsettingsshowmetrics-dashboardSettings.showMetrics">
<a href="#showmetrics" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showMetrics</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specifies whether to show or hide the `Metrics` option in the dashboard banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showMetrics: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showmoreoption" data-Path="dashboardsettingsshowmoreoption-dashboardSettings.showMoreOption">
<a href="#showmoreoption" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showMoreOption</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Option` icon in dashboard banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showMoreOption: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showpreviewas" data-Path="dashboardsettingsshowpreviewas-dashboardSettings.showPreviewAs">
<a href="#showpreviewas" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showPreviewAs</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please indicate whether to display or hide the `PreviewAs` option in the designer preview.
<br>

**Default value** 

<li>true</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          showPreviewAs: true //By default, the previewAs button will be shown.
     }
});
dashboard.loadDesigner();
```

<h3 class="doc-prop-wrapper" id="showrefresh" data-Path="dashboardsettingsshowrefresh-dashboardSettings.showRefresh">
<a href="#showrefresh" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showRefresh</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Refresh` icon in dashboard banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          showRefresh: true,
     }
});
dashboard.loadDashboard();
```

## dashboardSettings.dataSourceConfig

<h3 class="doc-prop-wrapper" id="hidedatasourceconfig" data-Path="dashboardsettingsdatasourceconfighidedatasourceconfig-dashboardSettings.dataSourceConfig.hideDataSourceConfig">
<a href="#hidedatasourceconfig" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideDataSourceConfig</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please indicate whether you want to display or hide the `Data source` configuration button in the dashboard designer banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          dataSourceConfig :{
            hideDataSourceConfig: false // By default, the datasource configuration is shown.
          }
     }
});
dashboard.loadDesigner();
```

<h3 class="doc-prop-wrapper" id="hidesampledatasources" data-Path="dashboardsettingsdatasourceconfighidesamplesatasources-dashboardSettings.dataSourceConfig.hideSampleDataSources">
<a href="#hidesampledatasources" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideSampleDataSources</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please specify whether you want to display or hide the `Sample Datasources` option under the datasource configuration in the dashboard designer banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          dataSourceConfig :{
            hideSampleDataSources: false // By default, the sample datasource option is shown.
          }
     }
});
dashboard.loadDesigner();
```

<h3 class="doc-prop-wrapper" id="hidedatasourcelist" data-Path="dashboardsettingsdatasourceconfighidedatasourcelist-dashboardSettings.dataSourceConfig.hideDataSourceList">
<a href="#hidedatasourcelist" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideDataSourceList</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specify whether to show or hide the `Data source List` dropdown configuration in the dashboard designer banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          dataSourceConfig :{
            hideDataSourceList: false // By default, the datasource list dropdown is shown.
          }
     }
});
dashboard.loadDesigner();
```

<h3 class="doc-prop-wrapper" id="hideexpression" data-Path="dashboardsettingsdatasourceconfighideexpression-dashboardSettings.dataSourceConfig.hideExpression">
<a href="#hideexpression" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideExpression</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specify whether to show or hide the `Hide Expression` configuration button in the dashboard designer banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          dataSourceConfig :{
            hideExpression: false // By default, the add expression button is shown.
          }
     }
});
dashboard.loadDesigner();
```

## dashboardSettings.filterOverviewSettings

<h3 class="doc-prop-wrapper" id="showsaveasicon" data-Path="dashboardsettingsfilteroverviewsettingsshowsaveasicon-dashboardSettings.filterOverviewSettings.showSaveAsIcon">
<a href="#showsaveasicon" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showSaveAsIcon</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please specify whether you want to display or conceal the Save As option in the `filter overview` of the dashboard banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,
     dashboardSettings: {
          filterOverviewSettings :{
            showSaveAsIcon: true,// To enable save as option in filter overview
          }
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showsaveicon" data-Path="dashboardsettingsfilteroverviewsettingsshowsaveicon-dashboardSettings.filterOverviewSettings.showSaveIcon">
<a href="#showsaveicon" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showSaveIcon</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please indicate whether to display or hide the Save option in the `filter overview` section of the dashboard banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,
     dashboardSettings: {
          filterOverviewSettings :{
            showSaveIcon: true,// To enable save option in filter overview
          }
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showviewsavedfiltericon" data-Path="dashboardsettingsfilteroverviewsettingsshowviewsavedfiltericon-dashboardSettings.filterOverviewSettings.showViewSavedFilterIcon">
<a href="#showviewsavedfiltericon" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showViewSavedFilterIcon</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please indicate whether you want to display or hide the View Saved Filter option in the `filter overview` on the dashboard banner. When the View Saved Filter option is clicked, it will trigger the `onViewSavedFiltersClick` event. From there, you can customize the views dialog and perform additional actions.

<br>

**Default value** 

<li>false</li><br>

**Example** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,
     dashboardSettings: {
          filterOverviewSettings :{
            showViewSavedFilterIcon: true,// To enable view saved filters option in filter overview
          },
          onViewSavedFiltersClick: function(args) {
            // Retrieves the array of view information from 'args.viewInfos' and perform further actions.
             console.log(args.viewInfos); //The 'args.viewInfos' contains a list of views in the form of an array.
          },
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="dashboardsettingsfilteroverviewsettingsviewid" data-Path="dashboardsettingsfilteroverviewsettingsviewid-dashboardSettings.filterOverviewSettings.viewId">
<a href="#dashboardsettingsfilteroverviewsettingsviewid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardSettings.filterOverviewSettings.viewId</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

By using this member API, you can embed the dashboard with views. For that, you need to pass the `viewId` value, `viewName`, and query string in the `filterParameters`.

To obtain the view ID of a specific view from the URL of the corresponding dashboard in its view.

![viewID](/static/assets/javascript/images/ViewID.png)

For more details, Please refer to the [Knowledge Base](https://support.boldbi.com/agent/kb/14233) article to obtain the viewName and query string from the REST API.

<br>

**Default value** 

<li>""</li><br>

**Example** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,
     dashboardSettings: {
          filterOverviewSettings :{
            viewId: '0732e6c9-f7d6-469a-85e0-a7a4b22dbb2a' // View ID
            viewName: 'Filter View' // View name
          }
     },
     filterParameters: 'filterQuery=[{"ucn":"Column1","cn":"Orderdate","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["2022"]}}]', //query string of the respective view
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="dashboardsettingsfilteroverviewsettingsviewname" data-Path="dashboardsettingsfilteroverviewsettingsviewname-dashboardSettings.filterOverviewSettings.viewName">
<a href="#dashboardsettingsfilteroverviewsettingsviewname" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>dashboardSettings.filterOverviewSettings.viewName</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

By passing the value of `viewName` and the query string in the `filterParameters`, you can embed the dashboard with views.

For more details, please refer to the [Knowledge Base](https://support.boldbi.com/agent/kb/14233) article to retrieve the viewName and query string from the REST API.

<br>

**Default value** 

<li>""</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.View,
     dashboardSettings: {
          filterOverviewSettings :{
            viewName: 'Filter View' // View name
          }
     },
     filterParameters: 'filterQuery=[{"ucn":"Column1","cn":"Orderdate","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["2022"]}}]', //query string of the respective view
});
dashboard.loadDashboard();
```

## dashboardSettings.viewDataSettings

<h3 class="doc-prop-wrapper" id="enablecolumnselection" data-Path="dashboardsettingsviewdatasettingsenablecolumnselection-dashboardSettings.viewDataSettings.enableColumnSelection">
<a href="#enablecolumnselection" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableColumnSelection</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please specify whether to show or hide the "Select Column" button in the `view underlying data` of the widget, which will be used by both the viewer and designer of the dashboard.

<br>

**Default value** 

<li>true</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          viewDataSettings :{
            enableColumnSelection: false,//Select column button will be hidden in the dashboard designer.
          }
     }
});
dashboard.loadDesigner(); 

var dashboard = BoldBI.create({
     dashboardSettings: {
          viewDataSettings :{
            enableColumnSelection: false,//Select column button will be hidden in the dashboard viewer.
          }
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="enableexporting" data-Path="dashboardsettingsviewdatasettingsenableexporting-dashboardSettings.viewDataSettings.enableExporting">
<a href="#enableexporting" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableExporting</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

Please specify whether to show or hide the export option in the `view underlying data` of the widget, which will be used by both the viewer and the designer of the dashboard.

<br>

**Default value** 

<li>true</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          viewDataSettings :{
            enableExporting: false,//The Export option will be hidden in the dashboard designer.
          }
     }
});
dashboard.loadDesigner();

var dashboard = BoldBI.create({
     dashboardSettings: {
          viewDataSettings :{
            enableExporting: false,//The Export option will be hidden in the dashboard viewer.
          }
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showallcolumns" data-Path="dashboardsettingsviewdatasettingsshowallcolumns-dashboardSettings.viewDataSettings.showAllColumns">
<a href="#showallcolumns" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showAllColumns</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

To enable the display of all columns in the table in the `View Underlying Data` of the widget, which will be used by both the viewer and the designer of the dashboard.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          viewDataSettings :{
            showAllColumns: true,//Column options are all checked in the dashboard designer.
          }
     }
});
dashboard.loadDesigner();

var dashboard = BoldBI.create({
     dashboardSettings: {
          viewDataSettings : {
            showAllColumns: true,//Column options are all checked in the dashboard viewer.
          }
     }
});
dashboard.loadDashboard();
```

## dashboardSettings.widgetsPanel

<h3 class="doc-prop-wrapper" id="existingdashboards" data-Path="dashboardsettingswidgetspanelexistingdashboards-dashboardSettings.widgetsPanel.existingDashboards">
<a href="#existingdashboards" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>existingDashboards</span>

<span class="doc-prop-type"> `Array`
</span>

</h3>

The current dashboard widgets can be added to the existing panel tab in the designer settings.
<br>

**Default value** : `empty`

<li>[]</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          widgetsPanel :{
            existingDashboards: [], //Here you are able to pass the n number of dashboard ids.
          }
     }
});
dashboard.loadDesigner();
```

<h3 class="doc-prop-wrapper" id="hidedefaultwidgets" data-Path="dashboardsettingswidgetspanelhidedefaultwidgets-dashboardSettings.widgetsPanel.hideDefaultWidgets">
<a href="#hidedefaultwidgets" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideDefaultWidgets</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Please indicate whether to display or hide the `Default Widgets` panel tab in the dashboard designer banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          widgetsPanel :{
            hideDefaultWidgets: false // By default, the Default Widgets will be shown.
          }
     }
});
dashboard.loadDesigner();
```

<h3 class="doc-prop-wrapper" id="hideexistingwidgets" data-Path="dashboardsettingswidgetspanelhideexistingwidgets-dashboardSettings.widgetsPanel.hideExistingWidgets">
<a href="#hideexistingwidgets" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideExistingWidgets</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Please indicate whether you would like to display or conceal the `Existing Widgets` panel tab on the dashboard designer banner.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          widgetsPanel :{
            hideExistingWidgets: false // By default, the Existing Widgets will be shown.
          }
     }
});
dashboard.loadDesigner();
```

## datasource

<h3 class="doc-prop-wrapper" id="datasources" data-Path="datasources-datasources">
<a href="#datasources" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>datasources</span>

<span class="doc-prop-type"> `array`
</span>

</h3>

This property is used for adding multiple data sources to the designer page. You can customize the properties of the Datasource using the following options.

* `canEdit` - specifies whether to enable or disable the edit icon in the Datasource.
* `canDelete` - specifies whether to enable or disable the delete icon in the Datasource.

**Example** 

```js
var dashboard = BoldBI.create({
     datasources: [
          {"id": "348e414b-c8c6-4542-839a-2e12934fe64f", "canEdit": true, "canDelete": false},  
          {"id": "d9a28bba-e6dd-46c9-89d7-810ebb4796b3", "canEdit": false, "canDelete": true}
     ]
});
dashboard.loadDesigner();
```

## designCanvasSettings

<h3 class="doc-prop-wrapper" id="margin" data-Path="designcanvassettingsmargin-designCanvasSettings.margin">
<a href="#margin" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>margin</span>

<span class="doc-prop-type"> `integer`
</span>

</h3>

    
Customize the margins of the dashboard using the corresponding integer values.

<br>

**Default value** 

<li>null</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     designCanvasSettings: {
          margin: 30,
     }
});
dashboard.loadDashboard();
```

## dynamicConnection

The dashboard server provides a dynamic connection string feature for fetching the data used to render the dashboard.

<h3 class="doc-prop-wrapper" id="identity" data-Path="dynamicconnectionidentity-dynamicConnection.identity">
<a href="#identity" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>identity</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

    
This property holds the values that will be passed to the API in the dynamic connection string feature. This allows the user to use this identity in their API for validation and providing the required connection string.

<br>

**Default value** : `empty` 

<li>""</li><br>

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

<h3 class="doc-prop-wrapper" id="isenabled" data-Path="dynamicconnectionisenabled-dynamicConnection.isEnabled">
<a href="#isenabled" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>isEnabled</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to enable or disable the dynamic connection string feature.

<br>

**Default value** 

<li>false</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dynamicConnection: {
          isEnabled: false,
     }
});
dashboard.loadDashboard();
```

## embedAiAssistant

<h2 class="doc-prop-wrapper" id="enableaiassistant" data-Path="enableaiassistant-enableAiAssistant">
<a href="#enableaiassistant" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableAiAssistant</span>

<span class="doc-prop-type"> `boolean`
</span>

</h2>


The AI Assistant enables users to generate widgets and modify their properties using natural language queries, making data visualization more intuitive and accessible. It is designed to enhance the widget creation and customization experience by leveraging advanced AI models. It offers both Cloud and Enterprise editions of the dashboard application. It supports only for dashboard viewer, dashboard designer, single widget, and pinboard embeddings. Please refer [here](https://help.boldbi.com/artificial-intelligence-and-machine-learning/activate-ai-feature/) to know more about this feature.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     embedAiAssistant: {
          enableAiAssistant: true
     }   
});
dashboard.loadDashboard();
```
> **Note** Until version 9.1.73, the AI Assistant could be enabled by initializing the `enableAiAssistant` property directly in the [create](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference/methods/#create) method. Starting from version 10.1.18, the `enableAiAssistant` property must be initialized within the `embedAiAssistant` property.

<h2 class="doc-prop-wrapper" id="hideaidatausage" data-Path="hideaidatausage-hideAiDataUsage">
<a href="#hideaidatausage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideAiDataUsage</span>

<span class="doc-prop-type"> `boolean`
</span>

</h2>


This specifies whether to show or hide the `AI Data Usage` icon in the AI Assistant window. To enable this, it is mandatory to use the [enableAiAssistant](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference/members/#enableaiassistant) member API.

<br>

**Default value** 

<li>false</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     embedAiAssistant: {
          enableAiAssistant: true,
          hideAiDataUsage: true
     }   
});
dashboard.loadDashboard();
```

## exportSettings

<h3 class="doc-prop-wrapper" id="showcsv" data-Path="exportsettingsshowcsv-exportSettings.showcsv">
<a href="#showcsv" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showCSV</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
This specifies whether to show or hide the `CSV` export option.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showCSV: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showexcel" data-Path="exportsettingsshowexcel-exportSettings.showExcel">
<a href="#showexcel" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showExcel</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Excel` export option.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showExcel: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="showimage" data-Path="exportsettingsshowimage-exportSettings.showImage">
<a href="#showimage" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showImage</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Image` export option.

<br>

**Default value** 

<li>true</li><br> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showImage: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showpdf" data-Path="exportsettingsshowpdf-exportSettings.showPDF">
<a href="#showpdf" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showPDF</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `PDF` export option.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     exportSettings: {
          showPDF: true,
     }
});
dashboard.loadDashboard();
```

## languageSettings

<h3 class="doc-prop-wrapper" id="hidelanguagedropdown" data-Path="languagesettingshidelanguagedropdown-languagesettings.hidelanguagedropdown">
<a href="#hidelanguagedropdown" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>hideLanguageDropdown</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


This property will display or hide the dashboard localization dropdown in the dashboard banner.

<br>

**Default value** 

<li>false</li><br>

Before setting the dashboard localization at the embedding level, you should configure the `Localize Dashboard` option in the dashboard designer of your Bold BI Server. By default, the dashboard localization dropdown is visible in the dashboard banner. To hide it, use the `hideLanguageDropdown` API at the embedding level.

**Example** 

```js
var dashboard = BoldBI.create({
     languageSettings:{
          hideLanguageDropdown: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="languagecode" data-Path="languagesettingslanguagecode-languagesettings.languagecode">
<a href="#languagecode" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>languageCode</span>

<span class="doc-prop-type"> `string`
</span>

</h3>


This property contains the values that will be passed to the dashboard to change its localization during the initial rendering.

<br>

**Default value** 

<li>""</li><br>

Before setting the dashboard localization at the embedding level, you should configure the `Localize Dashboard` option in the dashboard designer of your Bold BI Server. After doing so, you will be able to change the language using the `languageCode` API at the embedding level.

**Example**

```js
var dashboard = BoldBI.create({
     languageSettings:{
          languageCode: "fr-FR",
     }
});
dashboard.loadDashboard();
```

## localeSettings

The locale allows you to change the localization of the dashboard. It is used to modify the data based on the specified localization.

<h3 class="doc-prop-wrapper" id="applocale" data-Path="localesettingsapplocale-localesettings.applocale">
<a href="#applocale" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>appLocale</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

    
This property holds the values that will be passed to the dashboard in order to change the language of the dashboard. This can also be done in the dashboard designer, data source, or widget.

<br>

**Default value** 

<li>en-US</li><br>

Before setting the language of the dashboard at the embedding level, you should have or generate the respective language localization file in the installed location of your Bold BI Server. Please refer [here](/localization/latest/#add-a-new-localization) to generate a new locale file. Then, you will be able to change the language by using the `appLocale` API at the embedding level.

**Example** 
> **Note** To set the fr-FR language in the embedding, I have generated the respective locale file in the installed location of the Bold BI Server.
```js
var dashboard = BoldBI.create({
     localeSettings:{
          appLocale: "fr-FR",
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="culture" data-Path="localesettingsculture-localesettings.culture">
<a href="#culture" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>culture</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

    
This property holds the values that will be passed to the dashboard in order to change the dashboard's culture.

<br>

**Default value** 

<li>en-US</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     localeSettings:{
          culture: "en-US",
     }
});
dashboard.loadDashboard();
```

### Set a Culture for the Current User in Embedding

You can set the culture for the current user using the API in embedding. 
For example, if you configure the widget to display the currency value, it will be shown in the default `Auto (English(en-US))` format, as shown in the following image.

![Default Curreny Culture](/static/assets/javascript/images/default-curreny-culture.png)

The values in the widget will be rendered as follows.

![Default Curreny Culture Grid](/static/assets/javascript/images/default-currency-culture-grid.png)

You can embed the Bold BI dashboards in your web page by following the steps provided in this guide on [Embedding In Your Application](/getting-started/embedding-in-your-application/).

After embedding the dashboard, you can change the culture settings on the embedded dashboard instance to achieve the desired currency format by passing it through the highlighted API provided.

![Culture Settings API](/static/assets/javascript/images/culture-settings-api.png)

After this, the values in the widget will be displayed as follows within your application.

![Modified Currency Culture](/static/assets/javascript/images/modified-currency-culture.png)

## pinboardSettings

<h3 class="doc-prop-wrapper" id="enablepinboardheader" data-Path="pinboardsettingsenablepinboardheader-pinboardSettings.enablePinboardHeader">
<a href="#enablepinboardheader" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enablePinboardHeader</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Please enable or disable the header panel on the pinboard.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     pinboardSettings: {
          enablePinboardHeader: true,
     }
});
dashboard.loadPinboard();
```

<h3 class="doc-prop-wrapper" id="enableunpinwidget" data-Path="pinboardsettingsenableunpinwidget-pinboardSettings.enableUnpinWidget">
<a href="#enableunpinwidget" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>enableUnpinWidget</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Enable or disable the Unpin option on the Pinboard.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     pinboardSettings: {
          enableUnpinWidget: true,
     }
});
dashboard.loadPinboard();
```

## preConfiguredWidgets

Predefined or preconfigured widgets are a list of widgets that appear under the `Default Widget Panel` when initializing the dashboard designer itself. To do this, you need to create a dashboard called a template dashboard and configure the widgets that will be considered as predefined widgets for your designer.

<h3 class="doc-prop-wrapper" id="categoryname" data-Path="preconfiguredwidgetscategoryname-preConfiguredWidgets.categoryName">
<a href="#categoryname" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>categoryName</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

The name of the category where the widget to be added in designer.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     preConfiguredWidgets: {
          categoryName: "",
     }
});
dashboard.loadDesigner();
```

> **NOTE:**
> 1. If the `categoryName` already exists, the predefined widgets have been added to that category.
> 2. If the `categoryName` does not exist in the panel, the widgets are added by creating a new category with the given name.
> 3. Otherwise, the widgets were added to the `Miscellaneous` category by default.

<h3 class="doc-prop-wrapper" id="preconfiguredwidgetsdashboardid" data-Path="preconfiguredwidgetsdashboardid-preConfiguredWidgets.dashboardId">
<a href="#preconfiguredwidgetsdashboardid" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>preConfiguredWidgets.dashboardId</span>

<span class="doc-prop-type"> `string`
</span>

</h3>


The preconfigured widgets will be listed from the mentioned dashboard ID within the embedded dashboard designer in your application.

<br>

**Default value** : `empty`

<li>""</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     preConfiguredWidgets: {
          dashboardId: "",
     }
});
dashboard.loadDesigner();
```

## widgetContainerSettings

<h3 class="doc-prop-wrapper" id="boxshadow" data-Path="widgetcontainersettingsboxshadow-widgetContainerSettings.boxShadow">
<a href="#boxshadow" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>boxShadow</span>

<span class="doc-prop-type"> `string`
</span>

</h3>

    
Customize the box shadow of the widgets.

<br>

**Default value** 

<li>""</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetContainerSettings: {
          boxShadow: "10px 10px lightblue",
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="widgetcontainersettingsmargin" data-Path="widgetcontainersettingsmargin-widgetContainerSettings.margin">
<a href="#widgetcontainersettingsmargin" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetContainerSettings.margin</span>

<span class="doc-prop-type"> `integer`
</span>

</h3>

    
Customize the margins of the widget with the corresponding integer values.

**NOTE:** It is not necessary to specify the px suffix. it supports only integer values.

<br>

**Default value** 

<li>null</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetContainerSettings: {
          margin: 20,
     }
});
dashboard.loadDashboard();
```

## widgetSettings

<h3 class="doc-prop-wrapper" id="widgetsettingsshowexport" data-Path="widgetsettingsshowexport-widgetSettings.showExport">
<a href="#widgetsettingsshowexport" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetSettings.showExport</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>


Specifies whether to show or hide the `Export` icon in widget banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showExport: true,
     }
});
dashboard.loadDashboard();
```
	
<h3 class="doc-prop-wrapper" id="showfilter" data-Path="widgetsettingsshowfilter-widgetSettings.showFilter">
<a href="#showfilter" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showFilter</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Clear Filter` icon in widget banner.

<br>

**Default value** 

<li>true</li><br> 

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showFilter: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="showmaximize" data-Path="widgetsettingsshowmaximize-widgetSettings.showMaximize">
<a href="#showmaximize" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>showMaximize</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Maximize` icon in widget banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showMaximize: true,
     }
});
dashboard.loadDashboard();
```

<h3 class="doc-prop-wrapper" id="widgetsettingsshowmoreoption" data-Path="widgetsettingsshowmoreoption-widgetSettings.showMoreOption">
<a href="#widgetsettingsshowmoreoption" aria-hidden="true" class="anchor">
<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" style="display: none;">
<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 .72-2 .25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 .5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 3h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
</svg>
</a><span class='doc-prop-name'>widgetSettings.showMoreOption</span>

<span class="doc-prop-type"> `boolean`
</span>

</h3>

    
Specifies whether to show or hide the `Option` icon in widget banner.

<br>

**Default value** 

<li>true</li><br>

**Example** 

```js
var dashboard = BoldBI.create({
     widgetSettings: {
          showMoreOption: true,
     }
});
dashboard.loadDashboard();
```
