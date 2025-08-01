---
layout: post
title: API Reference – Events - JavaScript Embedding | Bold BI Docs
description: Explore the JavaScript API reference for events that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG

---

# Events

## actionBegin
   
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
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/embedding-api-reference/events/#event-types">event type</a> that triggered the event</td>
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


## actionComplete
   
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
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/embedding-api-reference/events/#event-types">event type</a> that triggered the event</td>
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

## ajaxBeforeLoad

 This event is used to customize headers in the AJAX call before sending them to the designer service.

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
<td class="name">args.headers</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Able to add new payload header.</td>
</tr>
<tr>
<td class="name">args.serviceAuthorizationToken</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the service AuthorizationToken value </td>
</tr>
<tr>
<td class="name">actionType</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds action type of the ajax call.</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     ajaxBeforeLoad: function (args) {
          // Write a code block to add a new payload header. 
          // var header = { Key : 'UserId', Value : '1005'};
          // args.headers.push(header);
     } 
});
dashboard.loadDashboard();
```

## beforeContextMenuRender
    
This event will be triggered before the dashboard context menu is rendered.

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">iconsinformation</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">set</td>
<td class="description">Holds the information about the list of icons to be rendered in the dashboard.</td>
</tr>
<tr>
<td class="name">enableComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">get</td>
<td class="description">Holds the enableComment value.</td>
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
     beforeContextMenuRender: function (args) {
          // Write a code block to perform an operation before the dashboard context menu is rendered 
     } 
});
dashboard.loadDashboard();        
```

## beforeDashboardMobileMenuOpen

This event will be triggered after the more options icon is clicked in the mobile view of the dashboard banner.

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
<td class="name">menuItems</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">array</span></td>
<td class ="access">get</td>
<td class="description">Will holds the array of menu list</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     beforeDashboardMobileMenuOpen: function (args) {
          // Write a code block to operate after more option from the dashboard banner is clicked in the mobile view.
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
<th>Access</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
</tr>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<td class="name">linkInfo</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">set</td>
<td class="description">Will holds the linking information</td>
</tr>
<tr>
<td class="name">masterWidgetInfo</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Will holds the master widget information, which includes the widget name, unique widget name, and filter information. The filter information contains the filter value, column name, and column type.</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">widgetId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current widget id information</td>
</tr>
<tr>
<td class="name">widgetName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current widget name information</td>
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
     beforeNavigateUrlLinking: function (args) {
          // Write a code block to perform an operation before the url linking navigation called. 
     } 
});
dashboard.loadDashboard();
```

## beforeViewdataIconRender

`beforeViewdataIconRender`
    
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
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
	  beforeViewdataIconRender: function (args) {
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
});
dashboard.loadDashboard();        
```

## onError

This event is used to catch any errors that may occur during the embedding process.

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
<td class="description">Holds the args Object like below. <br>
 1. args.errorStatus - Its boolean value if there is an error value is true. <br>
 2. args.StatusMessage - Holds the error details <br>
 3. args.StatusCode - Holds the status Code of the error.
</td>
</tr>
</tbody>
</table>

**Example: Try to embed the designer in view mode.** 
   
```js
var dashboard = BoldBI.create({
     dashboardId: "5cb065f7-dabb-4b0c-9b45-c60a5730e963",
     mode: BoldBI.Mode.view,
     onError: function (args) {
          // Expected Error details.
          //args.errorStatus will contains true value.
          //args.StatusMessage will contains "Error : Inavlid Embed Mode".
          //args.StatusCode will contains 500 as statusCode     
     } 
});
dashboard.loadDashboard();
```

## onLayoutChange

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
     onLayoutChange: function (args) {
          // Write a code block to operate when you change the layout of the pinboard.
     } 
});
dashboard.loadPinboard();
```

## dashboardSettings

### beforeDatasourceToolbarButtonsRendered

This event will be triggered before the datasource toolbar buttons are rendered. You can add or remove buttons in the toolbar with this event.

<table class="params">
<thead>
<tr>
<th style="width: 20%;">Name</th>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args.toolbarButtons</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Holds the details of datasource toolbar Buttons. <br>
     <table>
     <tr><td>args.toolbarButtons.class</td><td>Set the Class name of newly toolbar button.</td></tr>
     <tr><td>args.toolbarButtons.elementId</td><td>Set the Id of newly adding button.</td></tr>
     <tr><td>args.toolbarButtons.isActionBtn</td><td>Set <true>true</code> if the newly adding button wants to be in the group of the action buttons like Save, Cancel and Continue To Dashboard. Default value is false, since new button would be added at end of icon section.</td></tr>
     <tr><td>args.toolbarButtons.label</td><td>Set the Label of newly adding button.</td></tr>
     </table>
</td>
</tr>
</tbody>
</table>

**Example for adding new button in datasource toolbar** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,
     dashboardSettings: {
          beforeDatasourceToolbarButtonsRendered: function (args) {
               // Write a code block to add a new button before the datasource toolbar buttons were rendered.
               // args.toolbarButtons.push({
               //   class:'new-button-class',
               //   elementId:'new-button-id',
               //   isActionBtn:true,
               //   label:'External button'
               // });
          }
     }
});
dashboard.loadDatasource();  
```

**Example for removing a button from the datasource page** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,
     dashboardSettings: {
          beforeDatasourceToolbarButtonsRendered: function (args) {
               //  Write a code block to remove an existing button before the datasource tool toolbar buttons were rendered.
               // args.toolbarButtons.forEach(function (button, index, object) {
               //   if (button.label == "Cancel") {
               //      object.splice(index, 1);
               //   }
               // });
          }
     }
});
dashboard.loadDatasource();  
```

### beforeDatasourceToolbarIconsRendered

This event will be triggered before the datasource toolbar icons are rendered. You can add or remove icons in the toolbar using this event.

<table class="params">
<thead>
<tr>
<th style="width: 20%;">Name</th>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args.toolbarIcons</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Holds the details of the datasource toolbar Icons. <br>
     <table>
     <tr><td> args.toolbarIcons.class</td><td>Set the Class name of newly adding icon.</td></tr>
     <tr><td>args.toolbarIcons.elementId</td><td>Set the Id of newly adding icon.</td></tr>
     <tr><td>args.toolbarIcons.enableSeperator</td><td>Set <code>true</code> if the separator needed for the adding icon, otherwise set <code>false</code>.</td></tr>
     <tr><td>args.toolbarIcons.iconType</td><td>Set the icon type either <code>default</code> for BoldBI font icon or <code>custom</code> for custom or external font icon.</td></tr>
     <tr><td>args.toolbarIcons.iconTooltip</td><td>Set the tool-tip of newly adding toolbar icon.</td></tr>
     <tr><td>args.toolbarIcons.label</td><td>Set the icon name of newly adding icon.</td></tr>
     </table>
</td>
</tr>
</tbody>
</table>

**Example for adding new icon in datasource toolbar** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,
     dashboardSettings: {
          beforeDatasourceToolbarIconsRendered: function (args) {
               // Write a code block to add an external icon other than Bold BI before the data source toolbar icons are rendered.
               // args.toolbarIcons.push({
               //   class:'fa fa-comments',
               //   iconType:'custom',
               //   iconTooltip:'Comment',
               //   label:'Comment'
               // });
          }
     }
});
dashboard.loadDatasource();  
```

**Example for removing a icon from the datasource toolbar** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,
     dashboardSettings: {
          beforeDatasourceToolbarIconsRendered: function (args) {
               //  Write a code block to remove an existing button before the datasource toolbar icons were rendered.
               // args.toolbarIcons.forEach(function (icon, index, object) {
               //   if (icon.label == "Run") {
               //      object.splice(index, 1);
               //   }
               // });
          }
     }
});
dashboard.loadDatasource();  
```

### beforeDesignerToolbarButtonsRendered

This event will be triggered before the toolbar buttons are rendered.

<table class="params">
<thead>
<tr>
<th style="width:20%;">Name</th>
<th style="width:20%;">Type</th>
<th style="width:60%;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args.toolbarButtons</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Holds the details all the tool bar Buttons. <br>
<table>
    <tr><td>args.toolbarButtons.class</td><td>Set the Class name of newly adding tool bar button</td></tr>
    <tr><td>args.toolbarButtons.elementId</td><td>Set the Id of newly adding tool bar button.</td></tr>
    <tr><td>args.toolbarButtons.label</td><td>Set the Label of newly adding tool bar button.</td></tr>
</table>
</td>
</tr>
</tbody>
</table>

**Example For adding new button** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {    
          beforeDesignerToolbarButtons: function (args) {
               // Write a code block to add an external button before the dashboard banner buttons are rendered.
               // args.toolbarButtons.push({
               //   class:'new-btn-class',
               //   elementId:'new-button-id',
               //   label:'External Button',    
               // });
          }
     } 
});
dashboard.loadDesigner();  
```

**Example For removing a button** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          beforeDesignerToolbarButtons: function (args) {
               //  Write a code block to remove an existing button before the dashboard banner buttons are rendered.
               // args.toolbarButtons.forEach(function (button, index, object) {
               //   if (button.label == "Preview") {
               //      object.splice(index, 1);
               //   }
               // });
          }
     }
});
dashboard.loadDesigner();  
```

### beforeDesignerToolbarIconsRendered

This event will be triggered before the designer toolbar icons are rendered. You can add or remove icons in the toolbar using this event.

<table class="params">
<thead>
<tr>
<th style="width: 20%;">Name</th>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args.toolbarIcons</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Holds the details of the designer toolbar Icons.<br>
     <table>
     <tr><td>args.toolbarIcons.class</td><td>Set the Class name of newly adding icon.</td></tr>
     <tr><td>args.toolbarIcons.elementId</td><td>Set the id of newly adding icon.</td></tr>
     <tr><td>args.toolbarIcons.enableSeperator</td><td>Set <code>true</code> if the seperator needed for the adding icon, otherwise set <code>false</code>.<br>Note: It will not shows at the last positioned icon even if it is enabled.</td></tr>
     <tr><td>args.toolbarIcons.iconType</td><td>Set the icon type either <code>default</code> which represents BoldBI font icon or <code>custom</code> which represents custom or external font icon.</td></tr>
     <tr><td>args.toolbarIcons.iconTooltip</td><td>Set the tool-tip of newly adding icon.</td></tr>
     <tr><td>args.toolbarIcons.label</td><td>Set the icon name of newly adding icon.</td></tr>
     </table>
</td>
</tr>
</tbody>
</table>

**Example for adding new icon in designer toolbar** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          beforeDesignerToolbarIconsRendered: function (args) {
               // Write a code block to add an external icon other than boldbi before the designer toolbar icons were rendered.
               // args.toolbarIcons.push({
               //   class:'fa fa-comments',
               //   iconType:'custom',
               //   iconTooltip:'Comment',
               //   label:'Comment'
               // });   
          }
     }
});
dashboard.loadDesigner();  
```

**Example for removing a icon from designer toolbar** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          beforeDesignerToolbarIconsRendered: function (args) {
               //  Write a code block to remove an existing icon before the designer toolbar icons are rendered.
               // args.toolbarIcons.forEach(function (icon, index, object) {
               //   if (icon.label == "Undo") {
               //      object.splice(index, 1);
               //   }
               // });
          }
     }       
});
dashboard.loadDesigner();  
```

### beforeIconRender

`dashboardSettings.beforeIconRender`
    
This event will be triggered before the dashboard banner icons are rendered.

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
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
<td class="name">enableComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">get</td>
<td class="description">Holds the enableComment value.</td>
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
     dashboardSettings: {
          beforeIconRender: function (args) {
               // Write a code block to perform an operation before the dashboard banner icons were rendered
          } 
     }  
});
dashboard.loadDashboard();        
```

### beforePublishAs

This event will be triggered by the following actions. <br>

1. To `Publish` or `Save` the new dashboard.<br>
2. To `PublishAs` or `SaveAs` the existing dashboards.

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
<td class="name">args.source.data.dashboardId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the unique GUID for the dashboard.</td>
</tr>
<tr>
<td class="name">args.source.data.dashboardName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the name of the dashboard.</td>
</tr>
<tr>
<td class="name">args.source.data.dashboardDescription</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the description of the dashboard.</td>
</tr>
<tr>
<td class="name">args.source.data.isPublicDashboard</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the dashboard is public or not.</td>
</tr>
</tbody>
</table>

 **Example** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     dashboardSettings:
      { 
         beforePublishAs: function (args) {
               //Write a code block to perform an operation before publish the dashboard.
              //Write a code block to perform an operation before publish the dashboard.
         } 
      } 
});
dashboard.loadDesigner();        
```

### beforeSaveAsViewDialogOpen

`dashboardSettings.beforeSaveAsViewDialogOpen`

This event will be triggered when the save as icon in the filter overview panel is clicked.

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
<td class="type"><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">viewId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the Id of the view.</td>
</tr>
<tr>
<td class="name">viewName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the name of the view.</td>
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
    dashboardSettings: {
        beforeSaveAsViewDialogOpen: function(args) {
            // embedContainerID -> 'dashboard'
            var instance = BoldBI.getInstance('dashboard');

            // Get the dashboard ID from the embedOptions
            var itemId = instance.embedOptions.dashboardId;

            // Get the encrypted filter querystring from the event arguments
            var queryString = args.data.encryptedData;

            // Determine the active-tabbed child dashboard ID if it's a multi-tab dashboard
            var childItemId = instance.isMultiTab ? instance._getActiveChildDashboardId() : '';

            // You can set your view as DefaultView after the default view option is enabled in dashboard settings in the Bold BI server. Otherwise, it will be false as the default value.
            var isDefaultView = true;

            /* Add custom functionality for cloning the view into the dashboard */

            // Call the API method ('saveFilterView') to save as the view and specify a callback function ('callBackFunction') to handle the response and perform further actions.
            instance.saveAsFilterView({
                'ViewName': 'Filter View name',
                'ItemId': itemId,
                'QueryString': queryString,
                'ChildItemId': childItemId,
                'IsDefault': isDefaultView
            }, 'callBackFunction');
        }
    }
});
dashboard.loadDashboard();

function callBackFunction() {
    //To perform any further actions.
}
```

### beforeSaveViewDialogOpen

`dashboardSettings.beforeSaveViewDialogOpen`

This event will be triggered when the save icon in the filter overview panel is clicked.

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
<td class="type"><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will hold the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">viewId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the Id of the view if the view has already been saved.</td>
</tr>
<tr>
<td class="name">viewName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the name of the view if the view has already been saved.</td>
</tr>
<tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">set</td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example for saving a new view** 
   
```js
var dashboard = BoldBI.create({
    dashboardSettings: {
        beforeSaveViewDialogOpen: function(args) {
            // embedContainerID -> 'dashboard'
            var instance = BoldBI.getInstance('dashboard');

            // Get the dashboard ID from the embedOptions.
            var itemId = instance.embedOptions.dashboardId;

            // Get the encrypted filter querystring from the event arguments.
            var queryString = args.data.encryptedData;

            // Determine the active-tabbed child dashboard ID if it is a multi-tab dashboard.
            var childItemId = instance.isMultiTab ? instance._getActiveChildDashboardId() : '';

            // You can set your view as DefaultView after the default view option is enabled in dashboard settings in the Bold BI server. Otherwise, it will be false as the default value.
            var isDefaultView = true;

            /* Add custom functionality for saving the view into the dashboard */

            // Call the API method ('saveFilterView') to save the view and specify a callback function ('callBackFunction') to handle the response and perform further actions.
            instance.saveFilterView({
                'ViewName': 'Filter View name',
                'ItemId': itemId,
                'QueryString': queryString,
                'ChildItemId': childItemId,
                'IsDefault': isDefaultView
            }, 'callBackFunction');
        }
    }
});
dashboard.loadDashboard();

function callBackFunction() {
    //To perform any further actions.
}
```

**Example for updating the existing view** 
   
```js
var dashboard = BoldBI.create({
     dashboardSettings: {
          beforeSaveViewDialogOpen: function(args) {
               // embedContainerID -> 'dashboard'
               var instance = BoldBI.getInstance('dashboard');

               // Get the view ID from the event arguments.
               var viewId = args.viewId;

               // Determine the active-tabbed child dashboard ID if it is a multi-tab dashboard.
               var dashboardId = instance.isMultiTab ? instance._getActiveChildDashboardId() : instance.embedOptions.dashboardId;

               // Get the encrypted filter querystring from the event arguments
               var queryString = args.data.encryptedData;

              // You can set your view as DefaultView after the default view option is enabled in dashboard settings in the Bold BI server. Otherwise, it will be false as the default value.
               var isDefaultView = true;

               /* Add custom functionality for updating the view in the dashboard */

               // Call the API method ('updateFilterView') to update the view and specify a callback function ('callBackFunction') to handle the response and perform further actions.
               instance.updateFilterView({
                    'ViewId': viewId,
                    'DashboardId': dashboardId,
                    'QueryString': queryString,
                    'IsDefault': isDefaultView
               }, 'callBackFunction');
          }
     }
});
dashboard.loadDashboard();

function callBackFunction() {
    //To perform any further actions.
}
```

### onIconClick

`dashboardSettings.onIconClick`
    
This event will be triggered when an icon from the dashboard banner is clicked.

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">target</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">get</td>
<td class="description">Contains the parent element of the selected icon..</td>
</tr>
<tr>
<td class="name">name</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Contains the name of the icon clicked.</td>
</tr>
<tr>
<td class="name">dashboardPath</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current dashboard path value.</td>
</tr>
<tr>
<td class="name">headertext</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Contains the title of the dashboard.</td>
</tr>
<tr>
<td class="name">event</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Returns the current click event information like below.
1. currentTarget - It indicates the current DOM element <br>
2. type - It indicates the click event.<br>
</td>
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
     dashboardSettings: {
          onIconClick: function (args) {
               // Write a code block to perform an operation after an icon from dashboard banner is clicked
          } 
     }  
});
dashboard.loadDashboard();        
```

### onInteraction

`dashboardSettings.onInteraction`

This event will be triggered once the master widget applying and clearing filters are completed.

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
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Will holds the current event type that triggered the event.</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">source.data</td>
<td class="type"><span class="param-type">object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the master widget and its filter values details.</td>
</tr>
<tr>
<td class="name">type</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the parent event type of the current event.</td>
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
     dashboardSettings: {
          onInteraction: function (args) {
               // Write a code block to operate after a master widget interaction is completed.
          } 
     }  
});
dashboard.loadDashboard();        
```

### onViewSavedFiltersClick

`dashboardSettings.onViewSavedFiltersClick`

This event will be triggered when the "view saved filters" icon in the filter overview panel is clicked.

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
<td class="type"><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">viewInfos</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">get</td>
<td class="description">Retrieves the array of views information.</td>
</tr>
<tr>
<td class="name">data</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">target</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">get</td>
<td class="description">Holds the target of the current element in html.</td>
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
     dashboardSettings: {
          onViewSavedFiltersClick: function(args) {
               // Retrieves the array of view information from 'args.viewInfos' and perform further actions.
               console.log(args.viewInfos); //The 'args.viewInfos' contains a list of views in the form of an array.
          }
     }
});
dashboard.loadDashboard();        
```

### toolbarClick

This event will be triggered when the designer toolbar icon/button is clicked.

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
<td class="name">click</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the name of the icon/button clicked.</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard designer's object.</td>
</tr>
<tr>
<td class="name">target</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">get</td>
<td class="description">Contains the parent element of the selected icon/button.</td>
</tr>
<tr>
<td class="name">type</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">enum</span></td>
<td class="access">get</td>
<td class="description">Holds the current event type.</td>
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
     mode: BoldBI.Mode.Design,
     dashboardSettings: {
          toolbarClick: function (args) {
               // if (args.click == "Copy")
                    // Write a code block to perform an operation when the Copy icon from designer toolbar is clicked.
               // if (args.click == "Preview")
                    // Write a code block to perform an operation when the Preview button from designer toolbar is clicked.
          }   
     }
});
dashboard.loadDesigner();        
```

## datasource

### afterDatasourceSave

This event will be triggered after the save action of the data source is called.

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
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#datasourceproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the Data source Viewer's Object.</td>
</tr>
<tr>
<td class="name">designer</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the information about the dashboard designer .</td>
</tr>
<tr>
<td class="name">dataSourceId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current data source id.</td>
</tr>
<tr>
<td class="name">schema</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current data source schema information such as data base table name, table Id, and so on.</td>
</tr>
<td class="name">status</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">get</td>
<td class="description">Holds the status of the data source save action</td>
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
     mode: BoldBI.Mode.DataSource,
     afterDatasourceSave: function (args) {
          // Write a code block to perform an operation after the data source save action is called
     } 
});
dashboard.loadDatasource();
```

### beforeDatasourceSave

This event will be triggered before the save action of the data source is called.

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
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#datasourceproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the Data source Viewer's Object.</td>
</tr>
<tr>
<td class="name">designer</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the information about the dashboard designer.</td>
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
     mode: BoldBI.Mode.DataSource,
     beforeDatasourceSave: function (args) {
          // Write a code block to perform an operation before the data source save action is called 
     } 
});
dashboard.loadDatasource();
```

## filter

### afterFilterApply

This event will be triggered after the filter has been applied.

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
<td class="description">Will holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">This will contain the data related to the current event<br>
1. element - Which holds the DOM element.<br>
2. data </td>
</tr>
<tr>
<td class="name">source.data</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">source.data.widgetName</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the interacted widget name information</td>
</tr>
<tr>
<td class="name">source.data.widgetProperties</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the Widget properties of interacted widget as like,UniqueId which represent Widget Id of the interacted widget.</td>
</tr>
<tr>
<td class="name">source.data.selectedFilterValues</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">set</td>
<td class="description">Holds the filter values of interacted widget and able to modify the filter values here.</td>
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
     afterFilterApply: function (args) {
          // Write a code block to operate after the filter is applied.
     } 
});
dashboard.loadDashboard();        
```

### beforeFilterApply

This event will be triggered before the filter is applied.

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
<td class ="access">get</td>
<td class="description">Holds the current event type that triggered the event</td>
</tr>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>

<td class ="access">get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">source</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class ="access">get</td>
<td class="description">This will contain the data related to the current event as like below.<br>
1. element -  Which holds the DOM elements.<br>
2. data</td>
</tr>
<tr>
<td class="name">source.data</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class ="access">get</td>
<td class="description">Holds the current event data.</td>
</tr>
<tr>
<td class="name">source.data.widgetName</td>
<td class="type"><span class="param-type">string</span></td>
<td class ="access">get</td>
<td class="description">Holds the interacted widget name information</td>
</tr>
<tr>
<td class="name">source.data.widgetProperties</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type">object</span></td>
<td class ="access">get</td>
<td class="description">Holds the Widget properties of interacted widget as like below.<br>
1. UniqueId - It denotes the interacted widget Id</td>
</tr>
<tr>
<td class="name">source.data.selectedFilterValues</td>
<td class="type"><span class="param-type">array</span></td>
<td class ="access">get</td>
<td class="description">Holds the Filter Values of interacted widget.</td>
</tr>
<td class="name">cancel</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class ="access">set</td>
<td class="description">Holds the cancel value of the current operation.</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     beforeFilterApply: function (args) {
          // Write a code block to operate before the filter is applied. 
     } 
});
dashboard.loadDashboard();        
```

## pinboard

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
     onDrag: function (args) {
          // Write a code block to operate when you drag the widget from the pinboard.
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
     onDrop: function (args) {
          // Write a code block to operate when you drop the widget in the pinboard.
     } 
});
dashboard.loadPinboard();
```

### onResize

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
     onResize: function (args) {
          // Write a code block to operate when you resize the pinboard.
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
     onUnpin: function (args) {
          // Write a code block to perform an operation click the unpin widget.
     } 
});
dashboard.loadPinboard();
```

## widgetSettings

### beforeWidgetItemsListed

This event will be triggered before the widget item panel is rendered. You will be able to remove a specific group or specific widget item in the item panel using the event.

>**Note**: This event will be triggered again if the preConfiguredWidgets API is enabled.

<table class="params">
<thead>
<tr>
<th style="width: 20%;">Name</th>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">args.widgetInfo</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Holds the details of the widget groups like GroupName and GroupId.
</td>
</tr>
<tr>
<td class="name">args.widgetInfo.Items</td>
<td class="type"><span class="param-type">array[]</span></td>
<td class="description">Holds the details of the widget items like id, tooltip, widgetDisplayName and so on.
</td>
</tr>
</tbody>
</table>

**Example for removing a existing group** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     widgetSettings: { 
          beforeWidgetItemsListed: function (args) {
               // Write a code block to remove an 'Comparison' group before the widget panel is rendered.
               // args.widgetInfo.forEach(function (group, index, object) {
               //   if (group.GroupName == "Comparison") {
               //        object.splice(index, 1);
               //    }
               // });
          }
     }
});
dashboard.loadDesigner();  
```

**Example for removing a existing widget from specific group** 

```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     widgetSettings: { 
          beforeWidgetItemsListed: function (args) {
               //  Write a code block to remove an 'Bar' widget before the widget panel is rendered.
               // args.widgetInfo.forEach(function (group, gIndex, gObject) {
               //   if (group.GroupName == "Comparison") {
               //        group.Items.forEach(function (item, iIndex, iObject) {
               //             if (item.widgetDisplayName == "Bar") {
               //                  iObject.splice(iIndex, 1);
               //             }
               //        });
               //   }
               // });
          }
     }
});
dashboard.loadDesigner();  
```

### beforeWidgetLayoutRender

This event will be triggered before the layout of widget is rendered in the mobile view. You will be able to resize a specific widgets or all widget item using the event.

<table class="params">
<thead>
<tr>
<th style="width: 20%;">Name</th>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name">category</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Specifies which category the widget belongs to, like Filters or Cards.</td>
</tr>
<td class="name">Id</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current widget id.</td>
<tr>
<td class="name">model</td>
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<td class="name">Name</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Holds the current widget name.</td>
<tr>
<td class="name">size.MobileHeightFactor</td>
<td class="type"><span class="param-type">int</span></td>
<td class="description">Defines the scaling factor for widget height as a percentage.</td>
</tr>
</tbody>
</table>

**Example** 

```js
var dashboard = BoldBI.create({
     widgetSettings: { 
          beforeWidgetLayoutRender: function (args) {
               // Write a code block to operate before widget layout renderd in the mobile view.
               // if (args.category === 'Filters') {
               // This doubles the height of the widget by setting MobileHeightFactor to 2
               //     args.size.MobileHeightFactor = 2;
               //}               
          }
     }
});
dashboard.loadDashboard();  
```

### widgetSettings.beforeIconRender
    
This event will be triggered before the widget banner icons are rendered.

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="access"> get</td>
<td class="description">Holds the dashboard viewer's object.</td>
</tr>
<tr>
<td class="name">widgetInformation</td>
<td class="type"><span class="param-type">object</span></td>
<td class="access">get</td>
<td class="description">Holds the current triggered widget information as like below.<br>
1. fontColor - Color of font in widget.<br>
2. fontFamily - fontFamily of the text in the widget<br>
3. type - Indicates the type of the widget like, grid, chart and so on,..</td>
</tr>
<tr>
<td class="name">uniqueId</td>
<td class="type"><span class="param-type">string</span></td>
<td class="access">get</td>
<td class="description">Holds the current widget id.</td>
</tr>
<tr>
<td class="name">iconsinformation</td>
<td class="type"><span class="param-type">array</span></td>
<td class="access">set</td>
<td class="description">Holds the information about the list of icons to be rendered in the dashboard.</td>
</tr>
<tr>
<td class="name">isFilterWidget</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">get</td>
<td class="description">Holds the true, if the current widget is filter.</td>
</tr>
<tr>
<td class="name">dashboardComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">get</td>
<td class="description">Holds the dashboardComment value.</td>
</tr>
<tr>
<td class="name">enableComment</td>
<td class="type"><span class="param-type">boolean</span></td>
<td class="access">get</td>
<td class="description">Holds the enableComment value.</td>
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
     widgetSettings: {
          beforeIconRender: function (args) {
               // Write a code block to perform an operation before the widget banner icons were rendered
          } 
     }  
});
dashboard.loadDashboard();        
```

### widgetSettings.beforeWidgetControlMenuOpen

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
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
     widgetSettings: {
          beforeWidgetControlMenuOpen: function (args) {
               // Write a code block to perform an operation after control menu icon from the widget banner is clicked.
          } 
     }  
});
dashboard.loadDashboard();        
```

### widgetSettings.onIconClick
    
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
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
     widgetSettings: {
          onIconClick: function (args) {
               // Write a code block to perform an operation after an icon from widget banner is clicked
          } 
     }  
});
dashboard.loadDashboard();        
```

### widgetSettings.onWidgetControlMenuClick

This event will be triggered after clicking any option from the control menu icon in the widget banner.

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/embedding-api-reference/events/#dashboardproperties>object</a></span></td>
<td class="description">Holds the Dashboard Viewer's Object.</td>
</tr>
<tr>
<td class="name">header</td>
<td class="type"><span class="param-type">string</span></td>
<td class="description">Contains the title of the widget.</td>
</tr>
<tr>
<td class="name">menu</td>
<td class="type"><span class="param-type">array</span></td>
<td class="description">Contains details of newly added button in widget control menu.</td>
</tr>
<tr>
<td class="name">widgetId</td>
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
          onWidgetControlMenuClick: function (args) {
               // Write a code block to perform an operation after any option from control menu icon from widget banner is clicked.
          } 
          dashboard.loadDashboard();
     }  
});
```

## properties

### DashboardProperties
This section describes the dashboard properties of the viewer object correctly.
<table>
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
               <td class="name">serverUrl</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the Bold BI server URL.</td>
          </tr>
           <tr>
               <td class="name">itemId </td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the unique id of the dashboard.</td>
          </tr>
          <tr>
               <td class="name">dashboardDescription  </td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the description of dashboard.</td>
          </tr>
          <tr>
               <td class="name">dashboardName  </td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the name of the dashboard is rendered.</td>
          </tr>
          <tr>
               <td class="name">environment</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the embedding environment type.</td>
          </tr>
          <tr>
               <td class="name">mode</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description"> Hold the mode of the dashboard.</td>
          </tr>
     </tbody>
</table>

### DatasourceProperties
This section describes the data source properties of the viewer object.
<table>
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
               <td class="name">serverUrl</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the Bold BI server URL.</td>
          </tr>
           <tr>
               <td class="name">datasource</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the unique id of the data source.</td>
          </tr>
          <tr>
               <td class="name">datasourceName</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description"> Hold the data source name.</td>
          </tr>
          <tr>
               <td class="name">environment</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description">Hold the embedding environment type.</td>
          </tr>
          <tr>
               <td class="name">mode</td>
               <td class="type">string</td>
               <td class="access">get</td>
               <td class="description"> Hold the mode of the data source.</td>
          </tr>
     </tbody>
</table>