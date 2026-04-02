---
layout: post
title: API Reference - Designer events JavaScript Embedding | Bold BI
description: Explore the Designer JavaScript API reference for events that can be used for embedding in Bold BI deployed in your server.
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
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-events/#event-types">event type</a> that triggered the event</td>
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
<td class="description">Will hold the current <a href="/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-events/#event-types">event type</a> that triggered the event</td>
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

## designer

### beforeToolbarButtonsRender
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
     events:{    
        designer:{
            beforeToolbarButtonsRender: function (args) {
                // Write a code block to add an external button before the dashboard banner buttons are rendered.
                // args.toolbarButtons.push({
                //   class:'new-btn-class',
                //   elementId:'new-button-id',
                //   label:'External Button',    
                // });
            }
        }
     } 
});
dashboard.loadDesigner();  
```

**Example For removing a button** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     events: {
        designer:{
          beforeToolbarButtonsRender: function (args) {
               //  Write a code block to remove an existing button before the dashboard banner buttons are rendered.
               // args.toolbarButtons.forEach(function (button, index, object) {
               //   if (button.label == "Preview") {
               //      object.splice(index, 1);
               //   }
               // });
          }
        }
     }
});
dashboard.loadDesigner();  
```

### beforeToolbarIconsRender
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
     events: {
          designer:{
            beforeToolbarIconsRender: function (args) {
               // Write a code block to add an external icon other than boldbi before the designer toolbar icons were rendered.
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
dashboard.loadDesigner();  
```

**Example for removing a icon from designer toolbar** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     events:{
          designer:{
            beforeToolbarIconsRender: function (args) {
               //  Write a code block to remove an existing icon before the designer toolbar icons are rendered.
               // args.toolbarIcons.forEach(function (icon, index, object) {
               //   if (icon.label == "Undo") {
               //      object.splice(index, 1);
               //   }
               // });
            }
          }
     }       
});
dashboard.loadDesigner();  
```

### beforePublishDialogOpen
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
     events:{ 
         designer:{
            beforePublishDialogOpen: function (args) {
               //Write a code block to perform an operation before publish the dashboard.
              //Write a code block to perform an operation before publish the dashboard.
            }
         } 
      } 
});
dashboard.loadDesigner();        
```

### onToolbarItemClick
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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-events/#dashboardproperties>object</a></span></td>
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
     events:{
          designer:{
            onToolbarItemClick: function (args) {
               // if (args.click == "Copy")
                    // Write a code block to perform an operation when the Copy icon from designer toolbar is clicked.
               // if (args.click == "Preview")
                    // Write a code block to perform an operation when the Preview button from designer toolbar is clicked.
            }
          }   
     }
});
dashboard.loadDesigner();        
```

### beforeWidgetsListed
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
     events:{ 
        designer:{
            beforeWidgetsListed: function (args) {
               // Write a code block to remove an 'Comparison' group before the widget panel is rendered.
               // args.widgetInfo.forEach(function (group, index, object) {
               //   if (group.GroupName == "Comparison") {
               //        object.splice(index, 1);
               //    }
               // });
            }
        }
     }
});
dashboard.loadDesigner();  
```

**Example for removing a existing widget from specific group** 
```js
var dashboard = BoldBI.create({
     mode: BoldBI.Mode.Design,
     events:{ 
          designer:{
            beforeWidgetsListed: function (args) {
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
     }
});
dashboard.loadDesigner();  
```

## filters

### onInteraction

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
<td class="type"><ts ref="ej.DashboardViewer.Model"/><span class="param-type"><a href=/embedding-options/embedding-sdk/component-api-v2.0/designer/designer-events/#dashboardproperties>object</a></span></td>
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
     events:{
          filters:{
            onInteraction: function (args) {
               // Write a code block to operate after a master widget interaction is completed.
            }
          } 
     }  
});
dashboard.loadDesigner();        
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