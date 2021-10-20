---
layout: post
title: API Reference – Methods - JavaScript Embedding | Bold BI
description: Explore the JavaScript API reference for methods that can be used for embedding in Bold BI deployed in your server.
platform: bold-bi
documentation: UG
---

# Methods
  
## create()
    
This method will initialize the Dashboard Viewer options and returns the object for rendering the dashboard.

**Example** 
   
```js        
var dashboard = BoldBI.create({
     serverUrl: "http://localhost:51777/bi/site/site1",
     dashboardId: "755e99c7-f858-4058-958b-67577b283309",
     embedContainerId: "dashboard-container",// This should be the container id where you want to embed the dashboard
     embedType: BoldBI.EmbedType.Component,
     environment: BoldBI.Environment.Enterprise,
     height: "800px",
     width: "1200px",
     authorizationServer: {
     url: "http://example.come/authorize/server"
     },
     expirationTime: "100000",     
});   
```

## loadDashboard()
    
This method will render the dashboard based on the dashboard options provided while calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDashboard();   
```

## loadDashboardWidget()
    
This method will load the widget of current dashboard.

**Example** 
   
```js
var dashboard = BoldBI.create(options);
dashboard.loadDashboardWidget("Sales by country");   
```

## loadDesigner()
    
This method will render the dashboard designer based on the dashboard options provided while calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDesigner();
```

## loadDatasource()
    
This method will render the data source based on the data source options provided while calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDatasource();
```

## loadPinboard()
    
This method will render the pinboard based on the provided pinboard name.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadPinboard();   
```

## getInstance()
    
This method will return the object of the rendered dashboard using the container id assigned to the dashboard options.

**Example** 
   
```js
<div id="container"></div> 
<script> 
     var dashboard = BoldBI.create({
     embedContainerId: "container",       
     });
     dashboard.loadDashboard();
     dashboard.getInstance("container");
</script> 
```

## destroy()
    
This method will destroy the dashboard based on the dashboard object provided while calling the create method.

**Example** 
   
```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.destroy();   
```

## updateFilters()
    
This method will update the filter parameters of current dashboard. [learn more details](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/)

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateFilters("Continent=Asia,Africa,Europe");   
```

## refreshDashboard()
    
This method will refresh the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.refreshDashboard();   
```

## addWidgetToPinboard()

This method will add the widgets into the existing pinboard.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.addWidgetToPinboard(dashboardId, widgetId, widgetName);
```

## updateDatasource()
    
This method will update the current data source page from the outside page.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateDatasource();   
```

## resizeDashboard()
    
This method will resize the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.resizeDashboard();   
```

## hidePopup()
    
This method will hide the current dashboard waiting pop-up.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.hidePopup();
```