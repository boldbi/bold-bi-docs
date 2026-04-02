---
layout: post
title: API Reference – Datasource Methods-JavaScript Embedding | Bold BI
description: Explore the Datasource JavaScript API reference for methods that can be used for embedding in Bold BI deployed in your server.
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
     dashboardId: "755e99c7-f858-4058-958b-67577b283309",
     embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
     authorizationServer: {
          url: "http://example.come/authorize/server"
     }    
});   
```

## loadDatasource()
    
This method will render the data source based on the options provided when calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDatasource();
```

## getInstance()
    
This method will return the object of the rendered dashboard using the container ID assigned to the dashboard options.

**Example** 
   
```js
   var instance = BoldBI.getInstance("container"); //container -> embed container id
```

## checkCompatibility()
> **NOTE:** This method will work from Embed SDK release v13.1
This method will be used to ensure that the BoldBI server and SDK versions match. The result message will be shown in the console. It helps to identify and resolve problems related to version mismatch functionality.

**Example** 
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.checkCompatibility();   
```
1. If our BoldBI version is 7.9 and the SDK version is 7.9, then the following console message will be displayed: **Embedded SDK version matches with Bold BI Server version**
2. If our BoldBI version is 7.9 and the SDK version is 7.8, then the following console message will be displayed: **Embedded SDK version does not match with Bold BI Server version**

## dispose()
    
This method will destroy the datasource based on the provided datasource object when calling the create method.

**Example** 
   
```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.dispose();   
```

## refresh()
    
This method will update the current data source page using the outside page.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.dataSource.refresh();   
```

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