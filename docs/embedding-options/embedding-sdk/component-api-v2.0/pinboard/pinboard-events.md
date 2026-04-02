---
layout: post
title: API Reference – Pinbaord Events - JavaScript Embedding | Bold BI
description: Explore the Pinbaord JavaScript API reference for events that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---
# Events
## onActionStart
   
This event will be triggered at the beginning of every viewer action, including connection, layout and dashboard rendering, popup opening and closing, refreshing, filtering, exporting, and more.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/component-api-v2.0/pinboard/pinboard-events/#event-types">event type</a> that triggered the event</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">This will contain the data related to the current event as like below.<br>
1. data <br>
2. element</td>
</tr>
<tr>
<td class="name">source.element</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event site UI element. If there involves no UI element will be returned as null</td>
</tr>
<tr>
<td class="name">source.data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     events: {
        onActionStart: function (args) {
          if (args.eventType === "clearAllFilter") {
               // Write a code block to perform any further actions.
          }
        }
     } 
});
dashboard.loadPinboard()
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
<td class="description">This event will trigger when you clear the individual filter in the filter overview.</td>
</tr>
<tr>
<td class="name">clearAllFilter</td>
<td class="description">This event will trigger when you clear all the filters in the filter overview drop-down.</td>
</tr>
<tr>
<td class="name">clearWidgetFilter</td>
<td class="description">This event will trigger when you clear the filter in the widget.</td>
</tr>
<tr>
<td class="name">exporting</td>
<td class="description">This event will trigger when the dashboard exporting gets started.</td>
</tr>
<tr>
<td class="name">datasourceConfiguration</td>
<td class="description">This event will trigger when the datasource icon is clicked.</td>
</tr>
</tbody>
</table>

## onActionComplete
   
This event will be triggered once all viewer actions have been completed.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">eventType</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/component-api-v2.0/pinboard/pinboard-events/#event-types-1">event type</a> that triggered the event</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">This will contain the data related to the current event as below.<br>
1. element<br>
2. data</td>
</tr>
<tr>
<td class="name">source.element</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event site UI element. If there involves no UI element will be returned as null</td>
</tr>
<tr>
<td class="name">source.data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     events:{
          onActionComplete: function (args) {
               if (args.eventType === "clearFilter") {
                    // Write a code block to perform any further actions.
               }
          }
     } 
});
dashboard.loadPinboard();
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
<td class="name">exporting</td>
<td class="description">This event will trigger when the dashboard exporting gets started.</td>
</tr>
<tr>
<td class="name">exportCompleted</td>
<td class="description">This event will trigger when the dashboard exporting gets completed.</td>
</tr>
<tr>
<td class="name">clearFilter</td>
<td class="description">This event will trigger when you clear the individual filter in the filter overview and gets completed.</td>
</tr>
<tr>
<td class="name">clearWidgetFilter</td>
<td class="description">This event will trigger when you clear the filter in the widget and gets completed.</td>
</tr>
<tr>
<td class="name">Save</td>
<td class="description">This event will trigger once the Publish option is clicked in dashboard designer mode.</td>
</tr>
<tr>
<td class="name">SaveAs</td>
<td class="description">This event will trigger once the Publish As option is clicked in dashboard designer mode.</td>
</tr>
</tbody>
</table>

## onResize
This event will be triggered when you resize the pinboard.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
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
     events:{
          onResize: function (args) {
               // Write a code block to operate when you resize the pinboard.
          } 
     }
});
dashboard.loadPinboard();
```

## viewer
### beforeViewDataRender
    
This event will be triggered before the viewdata banner icons are rendered.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">iconsinformation</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">set</td>
<td class="description">Holds the information about the list of icons to be rendered in the Dashboard.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">set</td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
	  events:{
          viewer:{
               beforeViewDataRender: function (args) {
                    // Write a code block to perform an operation before the dashboard banner icons were rendered
                    // var icon = $("<div/>", {
                    //      "class": "su su-nav-schedule",
                    //      "data-tooltip": "NewCustomIcon",
                    //      "data-name": "schedule",
                    //      "data-event": true,
                    //      css: {
                    //          "font-size": "15px", "padding": "4px 4px", "margin": "14px 8px", "float": "left",
                    //          "line-height": "20px"
                    //      }
                    //  }).on("click", function () {
                    //      alert("Icon is triggered")
                    //  });
                    //  args.iconsinformation[0].items.push(icon);
               }
          }
     }  
});
dashboard.loadPinboard();        
```
## pinboard
### onLayoutChange
This event will be triggered when you change the layout of the pinboard.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
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
     events:{
          pinboard:{
               onLayoutChange: function (args) {
                    // Write a code block to operate when you change the layout of the pinboard.
               }
          }
     } 
});
dashboard.loadPinboard();
```

### onDrag
This event will be triggered when you perform the drag widget on the pinboard.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
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
     events:{
          pinboard:{
               onDrag: function (args) {
                    // Write a code block to operate when you drag the widget from the pinboard.
               }
          }
     } 
});
dashboard.loadPinboard();
```
### onDrop
This event will be triggered when you drop the widget.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
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
     events:{
          pinboard:{
               onDrop: function (args) {
                    // Write a code block to operate when you drop the widget in the pinboard.
               }
          }
     } 
});
dashboard.loadPinboard();
```

### onUnpin
This event will be triggered when you remove the widget from the pinboard.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
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
     events:{
          pinboard:{
               onUnpin: function (args) {
                    // Write a code block to perform an operation click the unpin widget.
               }
          }
     }
});
dashboard.loadPinboard();
```

## widget
### beforeContextMenuRender
This event will be triggered after clicking the control menu icon from the widget banner.
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-events/#dashboardproperties>object</a></span></td>
<td class="description">Holds the Dashboard Viewer's Object.</td>
</tr>
<tr>
<td class="name">header</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Contains the title of the widget.</td>
</tr>
<tr>
<td class="name">menuItem</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Contains array value present in the widget control menu.</td>
</tr>
<tr>
<td class="name">widgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the id of the widget where the menu icon is clicked.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
```js
var dashboard = BoldBI.create({
     events:{
          widget: {
               beforeContextMenuRender: function (args) {
                    // Write a code block to perform an operation after control menu icon from the widget banner is clicked.
               } 
          }  
     }
});
dashboard.loadPinboard();        
```
### onToolbarItemClick
    
This event will be triggered when an icon from the widget banner is clicked.
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">enum</span></td>
<td class= access>get</td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/dashboard/dashboard-events/#dashboardproperties>object</a></span></td>
<td class= access>get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">target</td>
<td class="type"><span class="param-type">array</span></td>
<td class= access>get</td>
<td class="description">Contains the parent element of the selected icon.</td>
</tr>
<tr>
<td class="name">name</td>
<td class="type"><span class="param-type">string</span></td>
<td class= access>get</td>
<td class="description">Contains the name of the icon clicked.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class= access>get</td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">headertext</td>
<td class="type"><span class="param-type">string</span></td>
<td class= access>get</td>
<td class="description">Contains the title of the widget.</td>
</tr>
<tr>
<td class="name">event</td>
<td class="type"><span class="param-type">object</span></td>
<td class= access>get</td>
<td class="description">Returns the current click event information as like below.<br>
1. type - It indicates the type of event, here it is click.<br>
2. currentTarget - It indicates the current DOM element</td>
</tr>
<tr>
<td class="name">widgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class= access>get</td>
<td class="description">Holds the id of the widget where the menu icon is clicked.</td>
</tr>
<tr>
<td class="name">dataWidgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class= access>get</td>
<td class="description">Holds the id of the widget where the menu icon is clicked.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class= access>set</td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 
   
```js
var dashboard = BoldBI.create({
     events:{
          widget: {
               onToolbarItemClick: function (args) {
                    // Write a code block to perform an operation after an icon from widget banner is clicked
               } 
          }  
     }
});
dashboard.loadPinboard();        
```