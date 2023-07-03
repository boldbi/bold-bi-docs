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

This method will used to get instance of that specific widget using Id. To get the widget details from specific dashboard, please refer this [REST API](/embedding-options/embedding-sdk/embedding-a-widget/#how-to-get-widget-id).

**Example**

```js
var dashboard = BoldBI.create(options);
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "2583540a-f970-41a1-9fc8-31c0581e7aa3"; // For getting widget ID, refer mentioned REST API in description.
var widgetInstance = instance.getWidgetInstance(widgetId);
```

### setFilterParameters()

This method is used to set the filter parameters to the widget instance in the following cases.

* Filtering without column name.
* Filtering with one column name.
* Filtering with more than one column name.
To know about widget ID of the specific widget, please refer this [link](/embedding-options/embedding-sdk/embedding-a-widget/#how-to-get-widget-id).

To filter the widgets at `initial rendering`, you need to set filter parameters with widget instance like below.

**Example for filtering without column name**

```js
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "201ce4b3-f2f9-4a3b-98e7-05b5ba01f2ca";
var filtersValue = ["Average", "Good"]; 
var widgetInstance = instance.getWidgetInstance(widgetId).setFilterParameters(filtersValue);
```

**Example for filtering with one column name**

```js
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "201ce4b3-f2f9-4a3b-98e7-05b5ba01f2ca";
var filtersValue = ["Feedback=Average,Good"]; 
var widgetInstance = instance.getWidgetInstance(widgetId).setFilterParameters(filtersValue);
```

**Example for filtering with more than one column name**

```js
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "32ed09f7-49ef-4468-9c56-ccc376dbcaaa";
var filtersValue = ["Product=Carnarvon Tigers","Company=Hanari Carnes" ]; 
var widgetInstance = instance.getWidgetInstance(widgetId).setFilterParameters(filtersValue);
```

## updateWidgetFilters()

This method is used to update the dashboard with applied filter values in the On-Demand case. This would be used for any type of widget filtering cases.

**Example for updating the widget filtered values in dashboard**

```js
var instance = BoldBI.getInstance("container");
var widgetId1 = "201ce4b3-f2f9-4a3b-98e7-05b5ba01f2ca";
var filtersValue1 = ["Feedback=Average,Good"]; //single column with filter values
instance.getWidgetInstance(widgetId1).setFilterParameters(filtersValue1);
var widgetId2= "32ed09f7-49ef-4468-9c56-ccc376dbcaaa";
var filtersValue2 = ["Product=Carnarvon Tigers","Company=Hanari Carnes"]; //multiple columns with filter values
instance.getWidgetInstance(widgetId2).setFilterParameters(filtersValue2);
instance.updateWidgetFilters("container"); //container -> embed container id
```

>**Note:** Apply widget filters on both initial rendering and on-demand in the dashboard using a Web application. To know more details, please refer to [here](/faq/how-to-apply-widget-filters-using-both-initialrendering-and-ondemand-in-embedding/).

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

> **NOTE:** Customize the `createDashboardCategory()` in the dashboard designer using web application. To know more details, please refer to [here](/faq/how-to-create-own-publish-dialog-for-designer-embedding/).

## getDashboardCategories()

This method will be used to get the dashboard categories from the server. 

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

> **NOTE:** Customize the `getDashboardCategories()` in the dashboard designer using web application. To know more details, please refer to [here](/faq/how-to-create-own-publish-dialog-for-designer-embedding/).

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

> **NOTE:** Customize the `saveDashboard()` in the dashboard designer using web application. To know more details, please refer to [here](/faq/how-to-create-own-publish-dialog-for-designer-embedding/).

## destroyStyles()

This method will remove the styles applied from the dashboard, which instance created using the embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.destroyStyles();
```

## addStyles()

This method will apply or refresh the styles of the dashboard, which instance created using the embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.addStyles();
```

## getComments()

This method will get the specific widget and dashboard comments from the Bold BI Server.

**Example for getting normal dashboard comments**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var args = {'dashboardId': "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
var commentType= "dashboard";
instance.getComments(commentType, args, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while getting the specific dashboard comment.
}
```

**Example for getting multitab dashboard comments**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var args = {'dashboardId': "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
var commentType= "dashboard";
instance.getComments(commentType, args, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while getting the specific dashboard comment from the multitab dashboard.
}
```

**Example for getting widget comments from normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var args = {'widgetId': "7d118d8c-cee9-479e-befc-d2a46abc9aa5", 'dashboardId': "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
var commentType= "widget";
instance.getComments(commentType, args, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while getting the specific widget comment from the normal dashboard.
}
```

**Example for getting widget comments from multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var args = {'widgetId': "7d118d8c-cee9-479e-befc-d2a46abc9aa5", 'dashboardId': "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
var commentType= "widget";
instance.getComments(commentType, args, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while getting the specific widget comment from the multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>commentType</code></td>
<td><code>string</code></td>
<td>Defines the type of the comment whether it is <code>dashboard</code> or <code>widget</code>.</td>
</tr>
<tr>
<td><code>args</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <td><b>widgetId</b></td>
   <td>Defines the unique widget Id. It should be defined only while getting widget comment.</td>
   </tr>
   <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the unique dashboard Id.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of multitab dashboard. It should be defined only while getting multitab dashboard comment.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the dashboard as arguments.</td>
</tr>
</table>

## addDashboardComment()

This method will add the comment to the respective dashboard.

**Example for adding comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.addDashboardComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while adding the comment in the normal dashboard.
}
```

**Example for adding comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding multitab dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.addDashboardComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while adding the comment in the multitab dashboard.
}
```

**Example for replying comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "1"};
instance.addDashboardComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while replying the comment in the normal dashboard.
}
```

**Example for replying comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying multitab dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "1", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.addDashboardComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while replying the comment in the multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>addComment</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <td><b>content</b></td>
   <td>Defines the comment you want to add.</td>
   </tr>
   <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the unique dashboard Id.</td>
   </tr>
   <tr>
   <td><b>parentCommentId</b></td>
   <td>Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the dashboard comment. For other cases, it should be null.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of multitab dashboard. It should be defined only when adding multitab dashboard comment, for other cases it should be null.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the dashboard as arguments.</td>
</tr>
</table>

## editDashboardComment()

This method will edit the dashboard comment of the respective dashboard.

**Example for editing comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Edited dashboard comment", commentId: "2", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.editDashboardComment(editComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while editing the comment in the normal dashboard.
}
```

**Example for editing comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Edited multitab dashboard comment", commentId: "2", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.editDashboardComment(editComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while editing the comment in the multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>editComment</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <td><b>content</b></td>
   <td>Defines the comment you want to edit.</td>
   </tr>
   <tr>
   <td><b>commentId</b></td>
   <td>Defines the comment Id of the comment that you want to edit.</td>
   </tr>
   <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the unique dashboard Id.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab dashboard comment. For other cases, it should be null.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the dashboard as arguments.</td>
</tr>
</table>

## deleteDashboardComment()

This method will delete the dashboard comment of the respective dashboard.

**Example for deleting comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "3", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.deleteDashboardComment(deleteComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while deleting the comment in the normal dashboard.
}
```

**Example for deleting comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "3", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.deleteDashboardComment(deleteComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while deleting the comment in the multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>deleteComment</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <td><b>commentId</b></td>
   <td>Defines the comment Id of the comment that you want to delete.</td>
   </tr>
   <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the unique dashboard Id.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab dashboard comment. For other cases, it should be null.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><coe>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the dashboard as arguments.</td>
</tr>
</table>

## addWidgetComment()

This method will add the widget comment to the respective widget of the dashboard.

**Example for adding widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding widget comment in normal dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.addWidgetComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while adding the widget comment in the normal dashboard.
}
```

**Example for adding widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding widget comment in multitab dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.addWidgetComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while adding the widget comment in the multitab dashboard.
}
```

**Example for replying widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying widget comment in normal dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "4"};
instance.addWidgetComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while replying the widget comment in the normal dashboard.
}
```

**Example for replying widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying widget comment in multitab dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "4", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.addWidgetComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while replying the widget comment in the multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>addComment</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <td><b>content</b></td>
   <td>Defines the comment you want to add.</td>
   </tr>
   <tr>
   <td><b>widgetId</b></td>
   <td>Defines the unique widget Id.</td>
   </tr>
    <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the respective dashboard Id of the widget.</td>
   </tr>
   <tr>
   <td><b>parentCommentId</b></td>
   <td>Defines the comment Id of the comment for which reply comment is to be added. It should be defined only when adding reply to widget comment, for other cases it should be null.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab dashboard widget comment. For other cases, it should be null.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the widget as arguments.</td>
</tr>
</table>

## editWidgetComment()

This method will edit the widget comment of the respective widget of the dashboard.

**Example for editing widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Editing widget comment in normal dashboard", commentId: "5", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.editWidgetComment(editComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while editing the widget comment in the normal dashboard.
}
```

**Example for editing widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Editing widget comment in multitab dashboard", commentId: "5", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.editWidgetComment(editComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while editing the widget comment in thbe multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>editComment</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <td><b>content</b></td>
   <td>Defines the comment you want to add.</td>
   </tr>
   <tr>
   <td><b>commentId</b></td>
   <td>Defines the comment Id of the comment that you want to edit.</td>
   </tr>
   <tr>
   <td><b>widgetId</b></td>
   <td>Defines the unique widget Id.</td>
   </tr>
   <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the respective dashboard Id of the widget.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of the multitab dashboard. It should be defined only when editing multitab dashboard comments. For other cases, it should be null.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><coe>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the widget as arguments.</td>
</tr>
</table>

## deleteWidgetComment()

This method will delete the widget comment of the respective widget of the dashboard.

**Example for deleting widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "6", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.deleteWidgetComment(deleteComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while deleting the widget comment in the normal dashboard.
}
```

**Example for deleting widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "6", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.deleteWidgetComment(deleteComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while deleting the widget comment in the multitab dashboard.
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>deleteComment</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <td><b>commentId</b></td>
   <td>Defines the comment Id of the comment that you want to delete.</td>
   </tr>
   <tr>
   <td><b>widgetId</b></td>
   <td>Defines the unique widget Id.</td>
   </tr>
   <tr>
   <td><b>dashboardId</b></td>
   <td>Defines the respective dashboard Id of the widget.</td>
   </tr>
   <tr>
   <td><b>multitabDashboardId</b></td>
   <td>Defines the unique id of the multitab dashboard. It should be defined only when deleting multitab dashboard comments. For other cases, it should be null.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td>string</td>
<td>Denotes the callback method name that must be defined. It will return the updated comments in the widget as arguments.</td>
</tr>
</table>