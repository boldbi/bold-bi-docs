---
layout: post
title: API Reference – Events - JavaScript Embedding | Bold BI Docs
description: Explore the JavaScript API reference for events that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---

# Events

## dashboardSettings
### beforeIconRender

`dashboardSettings.beforeIconRender`
    
This event will be triggered before the dashboard banner icons were rendered.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewer's Object.</td>
</tr>
<tr>
<td class="name">iconsinformation</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Holds the information about the list of icons to be rendered in the Dashboard.</td>
</tr>
<tr>
<td class="name">enableComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the enableComment value.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          beforeIconRender: function (args) {
               // Write a code block to perform an operation before the dashboard banner icons were rendered
          } 
     }  
});
dashboard.loadDashboard();        
```

### onIconClick

`dashboardSettings.onIconClick`
    
This event will be triggered after an icon from the dashboard banner is clicked.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewer's Object.</td>
</tr>
<tr>
<td class="name">target</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Contains the parent element of the selected icon..</td>
</tr>
<tr>
<td class="name">name</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Contains the name of the icon clicked.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">headertext</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Contains the title of the dashboard.</td>
</tr>
<tr>
<td class="name">event</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Returns the current click event information.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          onIconClick: function (args) {
               // Write a code block to perform an operation after an icon from dashboard banner is clicked
          } 
     }  
});
dashboard.loadDashboard();        
```
## widgetSettings
### widgetSettings.beforeIconRender
    
This event will be triggered before the widget banner icons were rendered.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewer's Object.</td>
</tr>
<tr>
<td class="name">widgetInformation</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the current triggered widget information.</td>
</tr>
<tr>
<td class="name">uniqueId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current widget id.</td>
</tr>
<tr>
<td class="name">iconsinformation</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Holds the information about the list of icons to be rendered in the dashboard.</td>
</tr>
<tr>
<td class="name">isFilterWidget</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the true, if the current widget is filter.</td>
</tr>
<tr>
<td class="name">dashboardComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the dashboardComment value.</td>
</tr>
<tr>
<td class="name">enableComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the enableComment value.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          beforeIconRender: function (args) {
               // Write a code block to perform an operation before the widget banner icons were rendered
          } 
     }  
});
dashboard.loadDashboard();        
```

### widgetSettings.onIconClick
    
This event will be triggered after an icon from the widget banner is clicked.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewer's Object.</td>
</tr>
<tr>
<td class="name">target</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Contains the parent element of the selected icon..</td>
</tr>
<tr>
<td class="name">name</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Contains the name of the icon clicked.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">headertext</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Contains the title of the widget.</td>
</tr>
<tr>
<td class="name">event</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Returns the current click event information.</td>
</tr>
<tr>
<td class="name">widgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the id of the widget where the menu icon is clicked.</td>
</tr>
<tr>
<td class="name">dataWidgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the id of the widget where the menu icon is clicked.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     widgetSettings: {
          onIconClick: function (args) {
               // Write a code block to perform an operation after an icon from widget banner is clicked
          } 
     }  
});
dashboard.loadDashboard();        
```

## actionBegin
   
This event will be triggered at the beginning of every viewer actions while applying connection, layout and dashboard rendering, popup opening and closing, refreshing, filtering, exporting and more.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will hold the current <a href="/embedded-bi/javascript-based/api-reference/events/#event-types">event type</a> that triggered the event</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">This will contain the data related to the current event</td>
</tr>
<tr>
<td class="name">Source.element</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the current event site UI element. If there involves no UI element will be returned as null</td>
</tr>
<tr>
<td class="name">Source.data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the current event data.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     actionBegin: function (args) {
          // Write a code block to perform an operation on beginning of every viewer actions 
     } 
});
dashboard.loadDashboard();    
```

### Event Types

<table class="params">
<thead>
<tr>
<th>Event Types</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">renderLayout</td>
<td class="description">This event will trigger when the layout of the dashboard started to render.</td>
</tr>
<tr>
<td class="name">renderDashboard</td>
<td class="description">This event will trigger when the dashboard started to render.</td>
</tr>
<tr>
<td class="name">renderWidget</td>
<td class="description">This event will trigger when the widget started to render.</td>
</tr>
<tr>
<td class="name">resizeDashboard</td>
<td class="description">This event will trigger when we invoke the resize dashboard method or when you resize the browser window.</td>
</tr>
<tr>
<td class="name">exportDialogOpen</td>
<td class="description">This event will trigger when the export dialog box opens, when you click on the export option in the context menu.</td>
</tr>
<tr>
<td class="name">exportDialogClose</td>
<td class="description">This event will trigger when the export dialog box closes.</td>
</tr>
<tr>
<td class="name">maximizeDialogOpen</td>
<td class="description">This event will trigger when the Maximize dialog box opens, when you click on the Maximize icon in the widget header.</td>
</tr>
<tr>
<td class="name">maximizeDialogClose</td>
<td class="description">This event will trigger when the Maximize dialog closes.</td>
</tr>
<tr>
<td class="name">filterOverViewOpen</td>
<td class="description">This event will trigger when the filter overview drop-down opens.</td>
</tr>
<tr>
<td class="name">filterOverViewClose</td>
<td class="description">This event will trigger when the filter overview drop-down closes.</td>
</tr>
<tr>
<td class="name">clearFilter</td>
<td class="description">This event will trigger when you clear the filters in each widget and also from the filter overview drop-down.</td>
</tr>
</tbody>
</table>


## actionComplete
   
This event will be triggered when all viewer actions are completed.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will hold the current <a href="/embedded-bi/javascript-based/api-reference/events/#event-types">event type</a> that triggered the event</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">This will contain the data related to the current event</td>
</tr>
<tr>
<td class="name">Source.element</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the current event site UI element. If there involves no UI element will be returned as null</td>
</tr>
<tr>
<td class="name">Source.data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the current event data.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     actionComplete: function (args) {
          // Write a code block to perform an operation on every viewer action which completes 
     } 
});
dashboard.loadDashboard(); 
```
### Event Types
<table class="params">
<thead>
<tr>
<th>Event Types</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">layoutRendered</td>
<td class="description">This event will trigger after the layout rendering is completed.</td>
</tr>
<tr>
<td class="name">dashboardRendered</td>
<td class="description">This event will trigger after the dashboard rendering is completed.</td>
</tr>
<tr>
<td class="name">viewDataDialogOpen</td>
<td class="description">This event will trigger when the ViewData dialog box opens, when you click on the ViewData option in the context menu.</td>
</tr>
<tr>
<td class="name">viewDataDialogClose</td>
<td class="description">This event will trigger when the ViewData dialog box closes.</td>
</tr>
<tr>
<td class="name">informationOpen</td>
<td class="description">This event will trigger when the information pop-up opens, when you click on the info icon.</td>
</tr>
<tr>
<td class="name">informationClose</td>
<td class="description">This event will trigger when the information pop-up closes.</td>
</tr>
<tr>
<td class="name">getLinkDialogOpen</td>
<td class="description">This event will trigger when the Get Link dialog box opens when you click the Get Link icon option in the context menu present on dashboard header.</td>
</tr>
<tr>
<td class="name">getLinkDialogClose</td>
<td class="description">This event will trigger when the Get Link dialog box closes.</td>
</tr>
<tr>
<td class="name">Exporting</td>
<td class="description">This event will trigger when the dashboard exporting gets started.</td>
</tr>
<tr>
<td class="name">exportCompleted</td>
<td class="description">This event will trigger when the dashboard exporting gets completed.</td>
</tr>
<tr>
<td class="name">clearAllFilter</td>
<td class="description">This event will trigger when you clear all the filters from the filter overview drop-down.</td>
</tr>
<tr>
<td class="name">clearIndividualFilter</td>
<td class="description">This event will trigger when you clear all the filters in each widget and also from the filter overview drop-down.</td>
</tr>
<tr>
<td class="name">interactionCompleted</td>
<td class="description">This event will trigger once the master widget interactions completed.</td>
</tr>
</tbody>
</table>

## beforeContextMenuRender
    
This event will be triggered before the dashboard context menu is rendered.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">iconsinformation</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Holds the information about the list of icons to be rendered in the dashboard.</td>
</tr>
<tr>
<td class="name">enableComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the enableComment value.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     beforeContextMenuRender: function (args) {
          // Write a code block to perform an operation before the dashboard context menu is rendered 
     } 
});
dashboard.loadDashboard();        
```

## beforeNavigateUrlLinking

This event will be triggered before the URL linking navigations are called.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">linkInfo</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Will holds the linking information</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object.</td>
</tr>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">widgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current widget id information</td>
</tr>
<tr>
<td class="name">widgetName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current widget name information</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     beforeNavigateUrlLinking: function (args) {
          // Write a code block to perform an operation before the url linking navigation called. 
     } 
});
dashboard.loadDashboard();
```

## beforeDashboardMobileMenuOpen

This event will be triggered after a More option icon from the dashboard banner is clicked.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">data</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">array</span></td>
<td class="description">Will holds the array of menu list</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     beforeDashboardMobileMenuOpen: function (args) {
          // Write a code block to perform an operation before the url linking navigation called. 
     } 
});
dashboard.loadDashboard();
```

## beforeFilterApply

This event will be triggered before the filter is applied.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object.</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">This will contain the data related to the current event</td>
</tr>
<tr>
<td class="name">Source.data</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">Source.data.widgetName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the interacted widget name information</td>
</tr>
<tr>
<td class="name">Source.data.widgetProperties</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Widget properties of interacted widget.</td>
</tr>
<tr>
<td class="name">source.data.selectedFilterValues</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Holds the Filter Values of interacted widget.</td>
</tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     beforeFilterApply: function (args) {
          // Write a code block to perform an operation before the dashboard context menu is rendered 
     } 
});
dashboard.loadDashboard();        
```

## afterFilterApply

This event will be triggered after the filter is applied.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object.</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">This will contain the data related to the current event</td>
</tr>
<tr>
<td class="name">Source.data</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">Source.data.widgetName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the interacted widget name information</td>
</tr>
<tr>
<td class="name">Source.data.widgetProperties</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Widget properties of interacted widget.</td>
</tr>
<tr>
<td class="name">source.data.selectedFilterValues</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Holds the Filter Values of interacted widget.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     afterFilterApply: function (args) {
          // Write a code block to perform an operation before the dashboard context menu is rendered 
     } 
});
dashboard.loadDashboard();        
```


## beforeDatasourceSave

This event will be triggered before the data source save action is called.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object.</td>
</tr>
<tr>
<td class="name">designer</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the information about the dashboard designer .</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     beforeDatasourceSave: function (args) {
          // Write a code block to perform an operation before the data source save action is called 
     } 
});
dashboard.loadDatasource();
```

## afterDatasourceSave

This event will be triggered after the data source save action is called.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">Enum</span></td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object.</td>
</tr>
<tr>
<td class="name">designer</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the information about the dashboard designer .</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
<tr>
<td class="name">dataSourceId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current data source id.</td>
</tr>
<tr>
<td class="name">schema</td>
<td class="type"><span class="param-type">object</span></td>
<td class="description">Holds the current data source schema information</td>
</tr>
<td class="name">status</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="description">Holds the status of the data source save action</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     afterDatasourceSave: function (args) {
          // Write a code block to perform an operation after the data source save action is called
     } 
});
dashboard.loadDatasource();
```

## onUnpin

This event will be triggered when you unpin the widget from the pinboard.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object as follows.<br>
 1. ServerUrl - Bold BI server URL is passed to render the dashboard. <br>
 2. itemId - Unique id of the Bold BI Dashboard. <br>
 3. dashboardName - Unique name of the Bold BI Dashboard.
</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     onUnpin: function (args) {
          // Write a code block to perform an operation click the unpin widget.
     } 
});
dashboard.loadPinboard();
```

## onDrag

This event will be triggered when you perform the drag widget from the pinboard.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object as follows. <br>
 1. ServerUrl - Bold BI server URL is passed to render the dashboard. <br>
 2. itemId - Unique id of the BoldBI Dashboard. <br>
 3. dashboardName - Unique name of the BoldBI Dashboard.
</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     onDrag: function (args) {
          // Write a code block to perform an operation click the unpin widget.
     } 
});
dashboard.loadPinboard();
```

## onDrop

This event will be triggered when you drop the widget.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object as follows. <br>
 1. ServerUrl - Bold BI server URL is passed to render the dashboard. <br>
 2. itemId - Unique id of the BoldBI Dashboard. <br>
 3. dashboardName - Unique name of the BoldBI Dashboard.
</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     onDrop: function (args) {
          // Write a code block to perform an operation click the unpin widget.
     } 
});
dashboard.loadPinboard();
```

## onLayoutChange

This event will be triggered when you change the layout of the pinboard.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object like below. <br>
 1. ServerUrl - BoldBI server URL passed to render the dashboard. <br>
 2. itemId - Unique id of the BoldBI Dashboard. <br>
 3. dashboardName - Unique name of the BoldBI Dashboard.
</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     onLayoutChange: function (args) {
          // Write a code block to perform an operation click the unpin widget.
     } 
});
dashboard.loadPinboard();
```

## onResize

This event will be triggered when you resize the pinboard.

<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="description">Holds the Dashboard Viewers Object like below. <br>
 1. ServerUrl - BoldBI server URL passed to render the dashboard. <br>
 2. itemId - Unique id of the BoldBI Dashboard. <br>
 3. dashboardName - Unique name of the BoldBI Dashboard.
</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     onResize: function (args) {
          // Write a code block to perform an operation click the unpin widget.
     } 
});
dashboard.loadPinboard();
```