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
     embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
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

## getWidgetData()

This method will help you to get the detail of the widget in a `clientFnc` method with arguments.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.getWidgetData(widgetName, clientFnc, dashboardId); // widgetName ->Define the name of the widget to be Refresh , clientFnc -> It acts as a method, in this method only details of the widget are passed in an argument. , dashboardId -> Define the unique id of the dashboard if it is present within the multitab dashboard.
```


## refreshWidgetData()

This method will refresh the particular widgets in the current dashboard.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.refreshWidgetData(widgetNames, hideLoader, dashboardId); // widgetnames ->Define the name of the widget to be Refresh , hideLoader -> Define whether to show or hide loading indicator while processing , dashboardId -> Define the unique id of the dashboard if it is present within the multitab dashboard.
```

## exportDashboardAsPdf()

This method will export the dashboard as Pdf.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'fileName':"",'pageSize':"",'pageOrientation':"",'showAppliedFilters':};

instance.exportDashboardAsPdf(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>

<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multi-tab dashboard, and it is mandatory for a multi-tab dashboard and an empty string for other cases.</td>
</tr>

<tr>
<td><code>fileName</code></td>
<td>Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>

<tr>
<td><code>pageSize</code></td>
<td>Define the size of the page ('A3', 'A4', 'A5', 'Letter') and it is an optional parameter of string type.</td>
</tr>

<tr>
<td><code>pageOrientation</code></td>
<td>Define the page orientation ('Landscape,' 'Portrait'), and it is an optional parameter of string type.</td>
</tr>

<tr>
<td><code>showAppliedFilters</code></td>
<td>Define whether you need to export the dashboard with or without a filter, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

## exportDashboardAsImage()

This method will export dashboard as image.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'fileName':"",'exportImageFormat':"",'resolutionDpi':"",'showAppliedFilters':};

instance.exportDashboardAsImage(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multi-tab dashboard, and it is mandatory for a multi-tab dashboard and an empty string for other cases.</td>
</tr>
<tr>
<td><code>fileName</code></td>
<td> Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>exportImageFormat</code></td>
<td>Define the format of the image to be exported('jpg','png' and 'bmp') and its an optional parameter of string type.</td>
</tr>
<tr>
<td><code>resolutionDpi</code></td>
<td>Define the resolution of the image (Integer value above 96) and its an optional parameter of integer type.</td>
</tr>
<tr>
<td><code>showAppliedFilters</code></td>
<td>Define whether you need to export the dashboard with or without a filter, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

## exportDashboardAsExcel()

This method will export dashboard as excel.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'fileName':"",'fileType':""};

instance.exportDashboardAsExcel(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td> Define the unique id of the dashboard if it is present within the multi-tab dashboard, and it is mandatory for a multi-tab dashboard and an empty string for other cases.</td>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>fileType</code></td>
<td>Define the type of file to be exported ('xlsx','xls') and its an optional parameter of string type.</td>
</tr>
</table>

## exportWidgetAsPdf()

This method will export widget as PDF.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':"",'pageSize':"",'pageOrientation':"",'showAppliedFilters':};

instance.exportWidgetAsPdf(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multi-tab dashboard, and it is mandatory for a multi-tab dashboard and an empty string for other cases.</td>
</tr>
<tr>
<td><code>widgetName</code></td>
<td> Define the name of the widget to be exported and its a mandatory parameter of string type.</td>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>pageSize</code></td>
<td>Define the size of the page ('A3', 'A4', 'A5', 'Letter') and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>pageOrientation</code></td>
<td>Define the page orientation ('Landscape,' 'Portrait'), and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>showAppliedFilters</code></td>
<td>Define whether you need to export the dashboard with or without a filter, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

## exportWidgetAsImage()

This method will export widget as image.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':"",'exportImageFormat':"",'resolutionDpi':"",'showAppliedFilters':};

instance.exportWidgetAsImage(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td> Define the unique id of the dashboard if it is present within the multitab dashboard and,it is mandatory for multitab dashboard, pinboard and empty string for other cases.</td>
</tr>
<tr>
<td><code>widgetName</code></td>
<td>Define the name of the widget to be exported and its a mandatory parameter of string type.</td>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>exportImageFormat</code></td>
<td> Define the format of the image to be exported('jpg','png' and 'bmp') and its an optional parameter of string type.</td>
</tr>
<tr>
<td><code>resolutionDpi</code></td>
<td>Define the resolution of the image (Integer value above 96) and its an optional parameter of integer type.</td>
</tr>
<tr>
<td><code>showAppliedFilters</code></td>
<td>Define whether you need to export the dashboard with or without a filter, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

## exportWidgetAsExcel()

This method will export widget as excel.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':"",'fileType':""};

instance.exportWidgetAsExcel(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multitab dashboard and,it is mandatory for multitab dashboard, pinboard and empty string for other cases.</td>
</tr>
<tr>
<td><code>widgetName</code></td>
<td>Define the name of the widget to be exported and its a mandatory parameter of string type.</td>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>
<tr>
<td><code>fileType</code></td>
<td>Define the type of file to be exported ('xlsx','xls') and its an optional parameter of string type.</td>
</tr>

</table>

## exportWidgetAsCsv()

This method will export widget as Csv. 

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':""};

instance.exportWidgetAsCsv(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multitab dashboard and,it is mandatory for multitab dashboard, pinboard and empty string for other cases.</td>
</tr>
<tr>
<td><code>widgetName</code></td>
<td>Define the name of the widget to be exported and it is a mandatory parameter of string type.</td>
</tr>
<tr>
<td><code>fileName</code></td>
<td>Define the name of the file to be exported, and it is an optional parameter of string type.</td>
</tr>
</table>