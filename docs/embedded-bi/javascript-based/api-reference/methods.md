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
    
This method will update the filter parameters of current dashboard by the following cases.

1. Filtering with URL Parameter.
2. Filtering with Dashboard Parameter.
3. Filtering with Combination of URL Parameter and Dashboard Parameter and vice-versa.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateFilters("Continent=Asia,Africa,Europe");   
```

<table>
<thead>
<tr>
<th>Cases</th>
<th>Syntax</th>
<th>Example</th>
</tr>
</thead>
<tr>
<td><code>URL Parameter</code></td>
<td><code>{column_name}={value1},{value2},{value3}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateFilters("Continent=Asia,Africa,Europe");   
```

</code></td>
</tr>
<tr>
<td><code>Dashboard Parameter</code></td>
<td><code>{parameter_name}={parameter_value}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateFilters("Department_DP=Sales");
```

</code></td>
</tr>
<tr>
<td><code>Combination Of URL Parameter and Dashboard Parameter</code></td>
<td><code>{column_name}={value1},{value2},{value3}&&{parameter_name}={parameter_value}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateFilters("Continent=Asia,Africa,Europe&Department_DP=Sales");
```

</code></td>
</tr>
<tr>
<td><code>Combination Of Dashboard Parameter and URL Parameter</code></td>
<td><code>{parameter_name}={parameter_value}&{column_name}={value1},{value2},{value3}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateFilters("Department_DP=Sales&Continent=Asia,Africa,Europe");
});
```

</code></td>
</tr>
</table>

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

## getWidgetInstance()

This method will used to get instance of that specific widget using Id.

**Example**

```js
var dashboard = BoldBI.create(options);
var widgetId = "2583540a-f970-41a1-9fc8-31c0581e7aa3"; // For getting widget ID please refer `How to get widget Id`.
var widgetInstance = dashboard.getWidgetInstance(widgetId);
```

### setFilterParameters()

This method is used to set the filter parameters to the widget instance. These filter parameters would be applied to the respective widget at the initial rendering.

If that widget acts as a master, the filter will be applied to the slave widgets.
To know about widget ID of the specific widget, please refer this [link](/embedded-bi/javascript-based/widget-embedding/#how-to-get-widget-id).

**NOTE:** Currently, we have provided support for the text field only.

**Example**

```js
var widgetId = "2583540a-f970-41a1-9fc8-31c0581e7aa3";
var filtersValue = ["Average", "Good"]; 
var widgetInstance = dashboard.getWidgetInstance(widgetId).setFilterParameters(filtersValue);
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

## createDashboardCategory()

This method will be used Create an new category to server. 

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.createDashboardCategory(categoryName, categoryDescription, callBackFnc, containerId);
function callBackFnc(args)
{
   // The parameter args contains the status whether category is added or not.
}
```

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td><code>categoryName</code></td>
<td><code>string</code></td>
<td>Need to set the name to create a new category in the server.</td>
</tr>
<tr>
<td><code>categoryDescription</code></td>
<td><code>string</code></td>
<td>Need to set the description of new category.</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>This method will act as call back function ,it will return the status of whether category is added or not.</td>
</tr>
<tr>
<td><code>containerId</code></td>
<td><code>string</code></td>
<td>Need to set embed container id.</td>
</tr>
</table>

## getDashboardCategories()

This method will be used to get the dashboard categories from server. 

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.getDashboardCategories(callBackFnc, containerId);
function callBackFnc(args)
{
   // The args parameter contains the list of categories available in the server as an array, which contains CategoryId and CategoryName
}
```

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>This method will act as call back function ,it will get the category list from the server.</td>
</tr>
<tr>
<td><code>containerId</code></td>
<td><code>string</code></td>
<td>Need to set the embed container id.</td>
</tr>
</table>

## saveDashboard()

This method is used to publish the dashboard to the server with the dashboard name into the desired category and desired dashboard name.

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
var publishModel = {category: "Sales",categoryId: "e6ed2f36-7205-423e-81e0-38a8ceb8e68c",description: "Published Using API",isPublic: false,name: "Publish API_01"}
instance.saveDashboard(publishModel, containerId);
```

**Example for Save the existing dashboard**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
// For Save the Existing Dashboard case, Dashboard Id value is needed
var publishModel = {category: "Sales",categoryId: "e6ed2f36-7205-423e-81e0-38a8ceb8e68c",description: "Published Using API",id: '451e17e5-e59f-4090-84a2-cf5537876e59',isPublic: false,name: "Publish API_01"}
instance.saveDashboard(publishModel, containerId);
```

**Example for SaveAs the existing dashboard**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
// For SaveAs the existing Dashboard case, Dashboard Id value is not needed
var publishModel = {category: "Sales",categoryId: "e6ed2f36-7205-423e-81e0-38a8ceb8e68c",description: "Published Using API",isPublic: false,name: "Publish API_01"}
instance.saveDashboard(publishModel, containerId);
```

## destroyStyles()

This method will remove the styles applied from the dashboard, which instance created using embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.destroyStyles();
```

## addStyles()

This method will apply or refresh the styles of the dashboard, which instance created using embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.addStyles();
```

