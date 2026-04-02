---
layout: post
title: API Reference Designer Methods - JavaScript Embedding | Bold BI
description: Explore the designer JavaScript API reference for methods that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---

# Methods

## create()
    
This method initializes the Dashboard Viewer options and returns the object for rendering the dashboard.

**Example** 
   
```js        
var dashboard = BoldBI.create({
     serverUrl: "http://localhost:51777/bi/site/site1",
     mode: BoldBI.Mode.Design,
     dashboardId: "755e99c7-f858-4058-958b-67577b283309",
     embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
     authorizationServer: {
     url: "http://example.come/authorize/server"
     }    
});   
```

> **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

## loadDesigner()
    
This method will create the dashboard designer based on the dashboard options provided when calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDesigner();
```

## getInstance()
    
This method will return the object of the rendered dashboard using the container ID assigned to the dashboard options.

**Example** 
   
```js
   var instance = BoldBI.getInstance("container"); //container -> embed container id
```

## dispose()
    
This method will destroy the dashboard based on the provided dashboard object when calling the create method.

**Example** 
   
```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.dispose();   
```

## resize()
    
This method is used to resize the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.resize();   
```

## publish()

This method is used to publish the dashboard to the server with the specified dashboard name, category, and desired dashboard name.

1. To Publish or Save the new dashboard. <br/>
2. To Publish or Save the existing dashboard. <br/>
3. To PublishAs or SaveAs the existing dashboard. <br/>
<table>
<thead>
<tr>
<th style="width: 20%;">Parameter</th>
<th style="width: 20%;">Type</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td><code>publishModel</code></td>
<td><code>object</code></td>
<td>This object contains the following Parameters:
<table style="border:none;">
<tr><td><b>category</b></td> <td>Set the name of the category in the dashboard will be published.</td></tr> 
<tr><td><b>categoryId</b></td> <td>Set the unique id of category in the dashboard will be published, the category Id taken from getDashboardCategories().</td></tr>
<tr><td><b>description</b></td> <td>Set the description in the dashboard will be published.</td></tr>
<tr><td><b>id</b></td> <td>Save the new dashboard - Dashboard Id value can be empty here. <br/>Save the existing dashboard - Dashboard Id value should be valid. <br/>SaveAs the existing dashboard - Dashboard Id value can be empty here.</td></tr> 
<tr><td><b>isPublic</b></td> <td>Need to set the publish dashboard as public or not.</td></tr>
<tr><td><b>name</b></td> <td>Set the Name of the dashboard in the dashboard will be published.</td></tr>
</table>
</td>
</tr>
<tr>
<td><code>containerId</code></td>
<td><code>string</code></td>
<td>Set the embed container id.</td>
</tr>
</table><br/>

**Example for Save the new dashboard**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
// For Save the New Dashboard case, Dashboard Id value is not needed
var publishModel = {category: "Sales",categoryId: "e6ed2f36-7205-423e-81e0-38a8ceb8e68c",description: "Published Using API",isPublic: false,name: "Publish API_01",eventType: "Save"}
instance.designer.publish(publishModel, containerId);
```

**Example for Save the existing dashboard**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
// For Save the Existing Dashboard case, Dashboard Id value is needed
var publishModel = {category: "Sales",categoryId: "e6ed2f36-7205-423e-81e0-38a8ceb8e68c",description: "Published Using API",id: '451e17e5-e59f-4090-84a2-cf5537876e59',isPublic: false,name: "Publish API_01",eventType: "Save"}
instance.designer.publish(publishModel, containerId);
```

**Example for SaveAs the existing dashboard**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
// For SaveAs the existing Dashboard case, Dashboard Id value is not needed
var publishModel = {category: "Sales",categoryId: "e6ed2f36-7205-423e-81e0-38a8ceb8e68c",description: "Published Using API",isPublic: false,name: "Publish API_01",eventType: "SaveAs"}
instance.designer.publish(publishModel, containerId);
```

> **NOTE:** Please customize the `publish()` function in the dashboard designer using the web application. For more details, please refer to [this documentation](https://support.boldbi.com/kb/article/16729/how-to-create-own-publish-dialog-for-designer-embedding).


## styles

### applyStyles()

This method will apply or refresh the styles of the dashboard, which was created using the embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.applyStyles();
```

### removeStyles()

This method will remove the styles applied from the dashboard, which were created using the embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.removeStyles();
```