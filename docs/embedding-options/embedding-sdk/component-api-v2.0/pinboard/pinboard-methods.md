---
layout: post
title: API Reference – Pinbaord Methods - JavaScript Embedding | Bold BI
description: Explore the Pinbaord JavaScript API reference for methods that can be used for embedding in Bold BI deployed in your server.
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

## loadPinboard()
    
This method will display the pinboard according to the given pinboard name.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadPinboard();   
```

## getInstance()
    
This method will return the object of the rendered dashboard using the container ID assigned to the dashboard options.

**Example** 
   
```js
   var instance = BoldBI.getInstance("container"); //container -> embed container id
```

## checkCompatibility()
> **NOTE:** This method will work from Embed SDK release v7.9.
This method will be used to ensure that the BoldBI server and SDK versions match. The result message will be shown in the console. It helps to identify and resolve problems related to version mismatch functionality.

**Example** 
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.checkCompatibility();   
```
1. If our BoldBI version is 7.9 and the SDK version is 7.9, then the following console message will be displayed: **Embedded SDK version matches with Bold BI Server version**
2. If our BoldBI version is 7.9 and the SDK version is 7.8, then the following console message will be displayed: **Embedded SDK version does not match with Bold BI Server version**

## dispose()
    
This method will destroy the dashboard based on the provided dashboard object when calling the create method.

**Example** 
   
```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.dispose();   
```

## export
### exportAsCSV()
This method will export the widget as a CSV file. 

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container
var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':""};
instance.viewer.exportAsCSV(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multitab dashboard and the widget id if it is present within the pinboard. It is mandatory for the multitab dashboard, pinboard, and empty string for other cases.</td>
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

### exportAsExcel()
This method will export the widget as an Excel file.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container
var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':"",'fileType':""};
instance.viewer.exportAsExcel(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multitab dashboard and the widget id if it is present within the pinboard. It is mandatory for the multitab dashboard, pinboard, and empty string for other cases.</td>
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

### exportAsImage()
This method will export the widget as an image.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container
var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':"",'exportImageFormat':"",'resolutionDpi':"",'showAppliedFilters':};
instance.viewer.exportAsImage(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td> Define the unique id of the dashboard if it is present within the multitab dashboard and the widget id if it is present within the pinboard. It is mandatory for the multitab dashboard, pinboard, and empty string for other cases.</td>
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
<td>Define whether you need to export the dashboard with or without a filter information, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

### exportAsPdf()
This method will export widget as PDF.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container
var exportInformation ={'dashboardId':"",'widgetName':"",'fileName':"",'pageSize':"",'pageOrientation':"",'showAppliedFilters':};
instance.viewer.exportAsPdf(exportInformation);
```
<table>
<tr>
<td>Parameter</td>
<td>Description</td>
</tr>
<tr>
<td><code>dashboardId</code></td>
<td>Define the unique id of the dashboard if it is present within the multitab dashboard and the widget id if it is present within the pinboard. It is mandatory for the multitab dashboard, pinboard, and empty string for other cases.</td>
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
<td>Define whether you need to export the dashboard with or without a filter information, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

## pinboard
### addWidget()
This method will add the widgets to the existing pinboard.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.pinboard.addWidget(dashboardId, widgetId, widgetName);
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