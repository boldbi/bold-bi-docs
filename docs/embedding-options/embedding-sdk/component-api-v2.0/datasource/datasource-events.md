---
layout: post
title: API Reference - Datasource Events JavaScript Embedding | Bold BI
description: Explore the Datasource JavaScript API reference for events that can be used for embedding in Bold BI deployed in your server.
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
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-events/#event-types">event type</a> that triggered the event</td>
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
          if (args.eventType === "dataSourceSaveAction") {
               // Write a code block to perform any further actions.
          }
        }
     } 
});
dashboard.loadDatasource();    
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
<td class="name">dataSourceSaveAction</td>
<td class="description">This event will trigger when the save icon in clicked.</td>
</tr>
<tr>
<td class="name">CancelDataSource</td>
<td class="description">This event will trigger when the cancel icon in clicked.</td>
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
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-events/#event-types">event type</a> that triggered the event</td>
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
               if (args.eventType === "dataSourceSaveAction") {
                    // Write a code block to perform any further actions.
               }
          }
     } 
});
dashboard.loadDatasource(); 
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
<td class="name">dataSourceSaveAction</td>
<td class="description">This event will trigger when the save action is completed.</td>
</tr>
<tr>
<td class="name">SaveConnection</td>
<td class="description">This event will trigger when the new connection is saved.</td>
</tr>
</tbody>
</table>

## datasource
### beforeToolbarButtonsRender
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
     events: {
        datasource:{
            beforeToolbarButtonsRender: function (args) {
               // Write a code block to add a new button before the datasource toolbar buttons were rendered.
               // args.toolbarButtons.push({
               //   class:'new-button-class',
               //   elementId:'new-button-id',
               //   isActionBtn:true,
               //   label:'External button'
               // });
            }
        }
     }
});
dashboard.loadDatasource();  
```

**Example for removing a button from the datasource page** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,
     events: {
        datasource:{
            beforeToolbarButtonsRender: function (args) {
                //  Write a code block to remove an existing button before the datasource tool toolbar buttons were rendered.
                // args.toolbarButtons.forEach(function (button, index, object) {
                //   if (button.label == "Cancel") {
                //      object.splice(index, 1);
                //   }
                // });
            }
        }
     }
});
dashboard.loadDatasource();  
```

### beforeToolbarIconsRender
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
     events: {
        datasource:{
            beforeToolbarIconsRender: function (args) {
               // Write a code block to add an external icon other than Bold BI before the data source toolbar icons are rendered.
               // args.toolbarIcons.push({
               //   class:'fa fa-comments',
               //   iconType:'custom',
               //   iconTooltip:'Comment',
               //   label:'Comment'
               // });
            }
        }
     }
});
dashboard.loadDatasource();  
```
**Example for removing a icon from the datasource toolbar** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.DataSource,
     events: {
            datasource:{
                beforeToolbarIconsRender: function (args) {
                    //  Write a code block to remove an existing button before the datasource toolbar icons were rendered.
                    // args.toolbarIcons.forEach(function (icon, index, object) {
                    //   if (icon.label == "Run") {
                    //      object.splice(index, 1);
                    //   }
                    // });
                }
          }
     }
});
dashboard.loadDatasource();  
```

### onToolbarItemClick
This event will be triggered when the datasource toolbar icon/button is clicked.
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-events/#datasourceproperties>object</a></span></td>
<td class="access">get</td>
<td class="description">Holds the `Datsource's` object.</td>
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
     mode: BoldBI.Mode.DataSource,
     events: {
          datasource:{
                onToolbarItemClick: function (args) {
                    // if (args.click == "Copy")
                            // Write a code block to perform an operation when the Copy icon from designer toolbar is clicked.
                    // if (args.click == "Preview")
                            // Write a code block to perform an operation when the Preview button from designer toolbar is clicked.
                }
          }   
     }
});
dashboard.loadDatasource();        
```

### afterSave
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-events/#datasourceproperties>object</a></span></td>
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
     events:{
        datasource:{
            afterSave: function (args) {
                // Write a code block to perform an operation after the data source save action is called
            }
        }
     } 
});
dashboard.loadDatasource();
```

### beforeSave
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/datasource/datasource-events/#datasourceproperties>object</a></span></td>
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
     events:{
        datasource:{
            beforeSave: function (args) {
                // Write a code block to perform an operation before the data source save action is called 
            }
        }
     } 
});
dashboard.loadDatasource();
```

## properties
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