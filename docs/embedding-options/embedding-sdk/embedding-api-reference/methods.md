---
layout: post
title: API Reference – Methods - JavaScript Embedding | Bold BI
description: Explore the JavaScript API reference for methods that can be used for embedding in Bold BI deployed in your server.
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

> **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

## clearAllFilter()

This method will clear all filters applied in the current dashboard.

**Example** 

```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.clearAllFilter();
```

## destroy()
    
This method will destroy the dashboard based on the provided dashboard object when calling the create method.

**Example** 
   
```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.destroy();   
```

## getInstance()
    
This method will return the object of the rendered dashboard using the container ID assigned to the dashboard options.

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

## getWidgetData()

This method will help you get the details of the widget in a `clientFnc` method with arguments.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.getWidgetData(widgetName, clientFnc, dashboardId); // widgetName ->Define the name of the widget to get data, clientFnc -> It acts as a method, in this method only details of the widget are passed in an argument. , dashboardId -> Define the unique id of the dashboard if it is present within the multitab dashboard.
```

## getWidgetInstance()

This method will be used to get an instance of that specific widget using its Id. To retrieve the widget details from a specific dashboard, please refer to this [REST API](/embedding-options/embedding-sdk/embedding-using-javascript/#how-to-get-widget-id).

**Example**

```js
var dashboard = BoldBI.create(options);
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "2583540a-f970-41a1-9fc8-31c0581e7aa3"; // For getting widget ID, refer mentioned REST API in description.
var widgetInstance = instance.getWidgetInstance(widgetId);
```

### setFilterParameters()

This method is used to set the filter parameters for the widget instance in the following cases.

* Filtering without column name.
* Filtering with one column name.
* Filtering with more than one column name.
To learn about the widget ID of the specific widget, please refer to this [link](/embedding-options/embedding-sdk/embedding-using-javascript/#how-to-get-widget-id).

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
> **Note:** To remove the specific widget instance, please check the [removeWidgetInstance](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference/methods/#removewidgetinstance) method.

## hidePopup()
    
This method will hide the current dashboard's waiting pop-up.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.hidePopup();
```

## hideWaitingIndicator()

This method will be used to eliminate the waiting indicator in dashboard embedding.

**Example**

```js
var dashboard = BoldBI.create({
   actionComplete: function (args) {
      if (args.eventType === "renderLayout") {
         var instance = BoldBI.getInstance("container");//container -> embed container id
         instance.hideWaitingIndicator();
      }
   },
});
dashboard.loadDashboard();
```

>**Note:** We have added support for the hideWaitingIndicator method to the dashboard and Multi-tab dashboard embedding.

## loadDashboard()
    
This method will display the dashboard based on the dashboard options provided when calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDashboard();   
```

## loadDashboardWidget()
    
This method will load the widget of the current dashboard.

**Example** 
   
```js
var dashboard = BoldBI.create(options);
dashboard.loadDashboardWidget("Sales by country");   
```

## loadDatasource()
    
This method will render the data source based on the options provided when calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDatasource();
```

## loadDesigner()
    
This method will create the dashboard designer based on the dashboard options provided when calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDesigner();
```

## loadMultitabDashboard()

This method will render a programmatic multitab dashboard using either [dashboard IDs](/embedding-options/embedding-sdk/embedding-api-reference/members/#dashboardids) or [dashboard Paths](/embedding-options/embedding-sdk/embedding-api-reference/members/#dashboardpaths) while calling the create method.

**Example** 

```js      
var dashboard = BoldBI.create({
     serverUrl: "https://boldbidemo/bi/site/site1",
     dashboardIds: ["5cb065f7-dabb-4b0c-9b45-c60a5730e963","47415a2c-d1de-478d-9d9e-5e6adc6e530d"], 
     embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
     environment: BoldBI.Environment.Enterprise,
     height: "800px",
     width: "1200px",
     authorizationServer: {
     url: "https://boldbidemo/authorize/server"
     },   
}); 
dashboard.loadMultitabDashboard();
```
>**Note:** To embed the multitab dashboard programmatically, either dashboardIds or dashboardPaths can be used.

To access additional details, please click on the following [Embedded multitab dashboard programmatically](/embedding-options/embedding-sdk/embedding-using-javascript/#embed-a-multitab-dashboard-programmatically).

## loadMultipleWidgets()

This method will load multiple widgets of the current dashboard with a single instance call.

**Example** 
   
```js
<div id="dashboard"></div>
<div id="widget1" style="height:500px;width:500px"></div> 
<div id="widget2" style="height:500px;width:500px"></div> 
<div id="widget3" style="height:500px;width:500px"></div>     
var dashboard = BoldBI.create({
   dashboardId: "5cb065f7-dabb-4b0c-9b45-c60a5730e963",
   embedContainerId: "dashboard",
   widgetList: [{widgetName: "Medal details by Country", containerId: "widget1" },
   {widgetName: "Total Medals by Country", containerId: "widget2" },
   {widgetName: "Country", containerId: "widget3" }],
  });
dashboard.loadMultipleWidgets();
```
>**Note:** To embed the necessary widgets, the client application should create a container where the widgets will be displayed. Height and Width must be added within the widget container. We have enhanced the performance of loading multiple widgets in the javascript embedding. Please note that support will work and take effect if the embed SDK Wrapper and Bold BI Server are on the same version effectively from v8.1.41

## loadView()
    
This method will render the dashboard with a view based on the view options provided while calling the create method.

**Example** 
  
```js      
var dashboard = BoldBI.create({
     serverUrl: "https://boldbidemo/bi/site/site1",
     viewId: "b64aebef-58ca-4033-b81a-39350c849b75", 
     embedContainerId: "dashboard_container",// This should be the container id where you want to embed the dashboard
     environment: BoldBI.Environment.Enterprise,
     height: "800px",
     width: "1200px",
     authorizationServer: {
     url: "https://boldbidemo/authorize/server"
     },   
}); 
dashboard.loadView();
```

For more details, please click on the following [Embedded the dashboard with views](/embedding-options/embedding-sdk/embedding-using-javascript/#embed-the-dashboard-with-view-in-your-application).

## refreshDashboard()
    
This method will refresh the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.refreshDashboard();   
```

## refreshWidgetData()

This method will refresh the specific widgets within the current dashboard.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.refreshWidgetData(widgetNames, hideLoader, dashboardId); // widgetnames ->Define the name of the widget to be Refresh , hideLoader -> Define whether to show or hide loading indicator while processing , dashboardId -> Define the unique id of the dashboard if it is present within the multitab dashboard.
```

## removeWidgetInstance()

This method will remove the existing widget instance from the embedded widget. If you are using the `getWidgetInstance` method along with `setFilterParameters`, and you subsequently want to destroy the instance, you can use this method.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.removeWidgetInstance(widgetId); // widgetId ->Define the unique id of the widget.
```

## resizeDashboard()
    
This method is used to resize the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.resizeDashboard();   
```

## saveDashboard()

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

> **NOTE:** Please customize the `saveDashboard()` function in the dashboard designer using the web application. For more details, please refer to [this documentation](https://support.boldbi.com/kb/article/16729/how-to-create-own-publish-dialog-for-designer-embedding).

## updateDatasource()
    
This method will update the current data source page using the outside page.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateDatasource();   
```
## updateDashboardTheme()

This method allows for updating the custom theme of the dashboard in the embedding without needing to reload the Bold BI instance. It is essential to provide the custom theme name as an argument.

**Syntax**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.updateDashboardTheme(dashboardtheme); //dashboardtheme -> name of the theme in BI server
```

**Example**

```js
var instance = BoldBI.getInstance("dashboard");
instance.updateDashboardTheme("dark");
```

> **NOTE:** In order to set a custom theme, you should upload the custom theme files in Bold BI Server. Please refer to this [link](/site-administration/look-and-feel-settings-in-embedded-analytics/#custom-theme) for more information on how to upload custom theme files.

## updateFilters()
    
This method will update the filter parameters of the current dashboard using the following cases.

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
```

</code></td>
</tr>
</table>

## updateWidgetFilters()

This method is used to update the dashboard with applied filter values in the On-Demand case. It can be used for any type of widget filtering cases.

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

>**Note:** Please apply widget filters on both the initial rendering and on-demand in the dashboard using a web application. For more details, please refer to [this documentation](https://support.boldbi.com/kb/article/16759/how-to-apply-widget-filters-using-both-initialrendering-and-ondemand-in-embedding).

## validateServerAndWrapperVersion()

> **NOTE:** This method will work from Embed SDK release v7.9

This method will be used to ensure that the BoldBI server and SDK versions match. The result message will be shown in the console. It helps to identify and resolve problems related to version mismatch functionality.

**Example** 

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.validateServerAndWrapperVersion();   
```
1. If our BoldBI version is 7.9 and the SDK version is 7.9, then the following console message will be displayed: **Embedded SDK version matches with Bold BI Server version**

2. If our BoldBI version is 7.9 and the SDK version is 7.8, then the following console message will be displayed: **Embedded SDK version does not match with Bold BI Server version**

## category

### createDashboardCategory()

This method will be used to create a new category for the server.

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

> **NOTE:** To customize the `createDashboardCategory()` in the dashboard designer using the web application, please refer to the details provided [this documentation](https://support.boldbi.com/kb/article/16729/how-to-create-own-publish-dialog-for-designer-embedding).

### getDashboardCategories()

This method will be utilized to retrieve the dashboard categories from the server.

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

> **NOTE:** Customize the `getDashboardCategories()` function in the dashboard designer using the web application. For more information, please refer to [this documentation](https://support.boldbi.com/kb/article/16729/how-to-create-own-publish-dialog-for-designer-embedding).

## comment

### addDashboardComment()

This method will add the comment to the corresponding dashboard.

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

### addWidgetComment()

This method will add the comment widget to the corresponding widget on the dashboard.

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

### deleteDashboardComment()

This method will delete the comment on the respective dashboard.

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

### deleteWidgetComment()

This method will delete the comment for the respective widget on the dashboard.

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

### editDashboardComment()

This method will edit the comment of the corresponding dashboard on the dashboard.

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

### editWidgetComment()

This method will edit the comment of the respective widget on the dashboard.

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

### getComments()

This method will retrieve the specific widget and dashboard comments from the Bold BI Server.

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

## export

### exportDashboardAsExcel()

This method will export the dashboard as an Excel file.

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

### exportDashboardAsImage()

This method will export the dashboard as an image.

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
<td>Define whether you need to export the dashboard with or without a filter information, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

### exportDashboardAsPdf()

This method will export the dashboard as a PDF.

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
<td>Define whether you need to export the dashboard with or without a filter information, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

### exportWidgetAsCsv()

This method will export the widget as a CSV file. 

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

### exportWidgetAsExcel()

This method will export the widget as an Excel file.

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

### exportWidgetAsImage()

This method will export the widget as an image.

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
<td>Define whether you need to export the dashboard with or without a filter information, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

### exportWidgetAsPdf()

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
<td>Define whether you need to export the dashboard with or without a filter information, and it is an optional parameter of Boolean type.</td>
</tr>
</table>

## pinboard

### addWidgetToPinboard()

This method will add the widgets to the existing pinboard.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.addWidgetToPinboard(dashboardId, widgetId, widgetName);
```

### loadPinboard()
    
This method will display the pinboard according to the given pinboard name.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadPinboard();   
```

## styles

### addStyles()

This method will apply or refresh the styles of the dashboard, which was created using the embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.addStyles();
```

### destroyStyles()

This method will remove the styles applied from the dashboard, which were created using the embed container Id.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.destroyStyles();
```

## view

### deleteFilterView()
This method removes the filter view from the dashboard.

**Example**

```js
var instance = BoldBI.getInstance("dashboard"); //embedContainerId -> 'dashboard'
var viewId= "2182319f-2bb3-49ae-b05c-2bec3f03fd1f"; // Get the view id from the getViewsByDashboardId() API. For know more above the API, refer getViewsByDashboard().
instance.deleteFilterView(viewId, "callBackFunc");

function callBackFunc(viewId) {
   /* Add custom functionalities with the viewId for further actions */
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>viewId</code></td>
<td><code>string</code></td>
<td>Defines the unique ID of the view.</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the view id of the view as arguments.</td>
</tr>
</table>

### getViewByViewId()
This method will retrieve the information of a specific filter view.

**Example**

```js
var instance = BoldBI.getInstance("dashboard"); //embedContainerId -> 'dashboard'
var viewId= "2182319f-2bb3-49ae-b05c-2bec3f03fd1f"; // Get the view id from the getViewsByDashboardId() API. For know more above the API, refer getViewsByDashboard().
instance.getViewByViewId(viewId, "callBackFunc");

function callBackFunc(view) {
   var itemId = view.ItemId; // Get dashboard id of the view
   var viewId = view.ViewId; // Get view id of the view
   var viewName = view.ViewName; // Get view name of the view
   var queryString = view.QueryString; // Get query string of the view

   /* Add custom functionalities with the above view details for further actions */
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>viewId</code></td>
<td><code>string</code></td>
<td>Defines the unique ID of the view.</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the view details of the view as arguments.</td>
</tr>
</table>

### getViewsByDashboardId()
This method retrieves the filter view items of a specific dashboard.

**Example**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerId -> 'dashboard'
var itemId= "2db7d4eb-017d-4a3e-b567-d88cd8600d89"; // for multitab dashboard, need to set the active-tabbed child dashboard id.
instance.getViewsByDashboardId(itemId, "callBackFunc");

function callBackFunc(views) {
   var view = {};
   if(views != undefined) {
      views.forEach(data => {
         view["ItemId"] = data.ItemId, // Get dashboard id of the view
         view["ViewId"] = data.ViewId, // Get view id of the view
         view["ViewName"] = data.ViewName, // Get view name of the view
         view["QueryString"] = data.QueryString // Get query string of the view
      });

      /* Add custom functionalities with the above view details for further actions */
   }
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>itemId</code></td>
<td><code>string</code></td>
<td>Defines the unique ID of the dashboard and for multitab dashboards, it must defines the active-tabbed child dashboard id.</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the dashboard views details as arguments.</td>
</tr>
</table>

### saveAsFilterView()
This method will clone the existing filter view on the dashboard and save it with a new name.

>**Note:** Please refer to the [knowledge base](https://support.boldbi.com/agent/kb/14233) article to obtain the viewName and QueryString from the REST API using the ViewID.

**Example for cloning an existing view of the normal dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var viewParameters = { 
   ViewName: "Filter View", // view name
   ItemId: instance.embedOptions.dashboardId, // Get the dashboard ID from the embedOptions 
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]' // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
};
instance.saveAsFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewName = view.ViewName; // Get the view name of the saved view
   var viewId = view.ViewId; // Get the view id of the saved view
   var itemId = view.ItemId; // Get the item id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

> **NOTE:** If you want to save the view as the default for the embedded dashboard, you must enable the `Default view` option in the `Dashboard settings.` Learn more about the [Default View](/site-administration/dashboard-settings/default-views/).

**Example for cloning an existing view as default to the dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var viewParameters = { 
   ViewName: "Filter View", // view name
   ItemId: instance.embedOptions.dashboardId, // Get the dashboard ID from the embedOptions 
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]', // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
   IsDefault: true // You can set your view as DefaultView after the default view option is enabled in dashboard settings in the Bold BI server. Otherwise, it will be false as the default value.
};
instance.saveAsFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewName = view.ViewName; // Get the view name of the saved view
   var viewId = view.ViewId; // Get the view id of the saved view
   var itemId = view.ItemId; // Get the item id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

**Example for cloning an existing view of the multitab dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var viewParameters = { 
   ViewName: "Filter View", // view name
   ItemId: instance.embedOptions.dashboardId, // Get the dashboard ID from the embedOptions 
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]', // Get the filter query string from the arguments of 'beforeSaveAsViewDialogOpen' event. For know more about the event, refer beforeSaveAsViewDialogOpen
   ChildItemId: instance.getActiveChildDashboardId() // Get the active-tabbed child dashboard id from BoldBI instance
};
instance.saveAsFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewName = view.ViewName; // Get the view name of the saved view
   var viewId = view.ViewId; // Get the view id of the saved view
   var itemId = view.ItemId; // Get the item id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>viewParameters</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <th>Parameter</td>
   <th>Type</th>
   <th>Description</td>
   </tr>
   <tr>
   <td>ViewName</td>
   <td><code>string</code></td>
   <td>Defines the name of the view.</td>
   </tr>
   <tr>
   <td>ItemId</td>
   <td><code>string</code></td>
   <td>Defines the unique ID of the dashboard.</td>
   </tr>
   <tr>
   <td>QueryString</td>
   <td><code>string</code></td>
   <td>Defines the filter query associated with the view.</td>
   </tr>
   <tr>
   <td>ChildItemId</td>
   <td><code>string</code></td>
   <td>Defines the unique ID of the active-tabbed child dashboard. It should only be defined when saving views in multitab dashboard. In other cases, it should be empty.</td>
   </tr>
   <tr>
   <td>IsDefault</td>
   <td><code>string</code></td>
   <td>By default, it would be false. You can set as your view as DefaultView after the Default view option is enabled in Dashboard settings in the Bold BI server, otherwise view not saved as DefaultView of the dashboard.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the cloned view details in the dashboard as arguments.</td>
</tr>
</table>

### saveFilterView()
This method will save the filter view onto the dashboard.

> **NOTE:** Please refer to the [knowledge base](https://support.boldbi.com/agent/kb/14233) article to obtain the viewName and QueryString from the REST API by using the viewId if the view details already exist in Bold BI.

**Example for saving view to the normal dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var viewParameters = { 
   ViewName: "Filter View", // view name
   ItemId: instance.embedOptions.dashboardId, // Get the dashboard ID from the embedOptions 
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]' // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
};
instance.saveFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewName = view.ViewName; // Get the view name of the saved view
   var viewId = view.ViewId; // Get the view id of the saved view
   var itemId = view.ItemId; // Get the item id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

> **NOTE:** If you want to save the view as the default for the embedded dashboard, you must enable the `Default view` option in `Dashboard settings`. Learn more about the [Default View](/site-administration/dashboard-settings/default-views/).

**Example for saving view as default to the dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var viewParameters = { 
   ViewName: "Filter View", // view name
   ItemId: instance.embedOptions.dashboardId, // Get the dashboard ID from the embedOptions 
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]', // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
   IsDefault: true // You can set your view as DefaultView after the default view option is enabled in dashboard settings in the Bold BI server. Otherwise, it will be false as the default value.
instance.saveFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewName = view.ViewName; // Get the view name of the saved view
   var viewId = view.ViewId; // Get the view id of the saved view
   var itemId = view.ItemId; // Get the item id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

**Example for saving view to the multitab dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var viewParameters = { 
   ViewName: "Filter View", // view name
   ItemId: instance.embedOptions.dashboardId, // Get the dashboard ID from the embedOptions 
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]', // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
   ChildItemId: instance.getActiveChildDashboardId(), // Get the active-tabbed child dashboard id from BoldBI instance
};
instance.saveFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewName = view.ViewName; // Get the view name of the saved view
   var viewId = view.ViewId; // Get the view id of the saved view
   var itemId = view.ItemId; // Get the item id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>viewParameters</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <th>Parameter</td>
   <th>Type</th>
   <th>Description</td>
   </tr>
   <tr>
   <td>ViewName</td>
   <td><code>string</code></td>
   <td>Defines the name of the view.</td>
   </tr>
   <tr>
   <td>ItemId</td>
   <td><code>string</code></td>
   <td>Defines the unique ID of the dashboard.</td>
   </tr>
   <tr>
   <td>QueryString</td>
   <td><code>string</code></td>
   <td>Defines the filter query associated with the view.</td>
   </tr>
   <tr>
   <td>ChildItemId</td>
   <td><code>string</code></td>
   <td>Defines the unique dashboard ID of the active-tabbed child dashboard. It should only be defined when saving multitab dashboard views. In other cases, it should be empty.</td>
   </tr>
   <tr>
   <td>IsDefault</td>
   <td><code>string</code></td>
   <td>By default, it would be false. You can set as your view as DefaultView after the Default view option is enabled in Dashboard settings in the Bold BI server, otherwise view not saved as DefaultView of the dashboard.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the saved view details in the dashboard as arguments.</td>
</tr>
</table>

### updateFilterView()
This method will update the current filter view on the dashboard.

**Example for update the existing view to the dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var updateViewDashboardID = instance.isMultiTab ? instance.getActiveChildDashboardId() : instance.embedOptions.dashboardId; //For multitab, get the active-tabbed child dashboard ID.
var viewParameters = { 
   ViewId: "78ed603f-7834-4fc7-b611-3fe7ffdea399", // Get the view id from the arguments of 'beforeSaveViewDialogOpen' event while updating the view. For know more about the event, refer beforeSaveViewDialogOpen
   DashboardId: updateViewDashboardID,
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]' // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
};
instance.updateFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewId = view.ViewId; // Get the view id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

**Example for update the existing view as default to the dashboard**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerID -> 'dashboard'
var updateViewDashboardID = instance.isMultiTab ? instance.getActiveChildDashboardId() : instance.embedOptions.dashboardId; //For multitab, get the active-tabbed child dashboard ID.
var viewParameters = { 
   ViewId: "78ed603f-7834-4fc7-b611-3fe7ffdea399", // Get the view id from the arguments of 'beforeSaveViewDialogOpen' event while updating the view. For know more about the event, refer beforeSaveViewDialogOpen
   DashboardId: updateViewDashboardID,
   QueryString: 'filterQuery=[{"ucn":"Column1","cn":"ProductName","rn":"ComboBox2","ir":false,"ims":false,"fi":"92884626db4ffba31a49504a4864e4","ipw":false,"dimfi":{"c":"Include","t":["Product A"]}}]', // Get the filter query string from the arguments of 'beforeSaveViewDialogOpen' event. For know more about the event, refer beforeSaveViewDialogOpen
   IsDefault: true // You can set your view as DefaultView after the default view option is enabled in dashboard settings in the Bold BI server. Otherwise, it will be false as the default value.
};
instance.updateFilterView(viewParameters, "callBackFunc");

function callBackFunc(view, status) {
   var viewId = view.ViewId; // Get the view id of the saved view
   var statusMessage = status; // Get the status message of the saved view

   /* Add custom functionalities with the above response for further actions */
}
```

<table>
<tr>
<th style="width: 20%;">Parameter</td>
<th style="width: 20%;">Type</th>
<th style="width: 60%;">Description</td>
</tr>
<tr>
<td><code>viewParameters</code></td>
<td><code>object</code></td>
<td>The object contains the following parameters.<br>
   <table>
   <tr>
   <th>Parameter</td>
   <th>Type</th>
   <th>Description</td>
   </tr>
   <tr>
   <td>ViewId</td>
   <td><code>string</code></td>
   <td>Defines the unique ID of the view.</td>
   </tr>
   <tr>
   <td>ItemId</td>
   <td><code>string</code></td>
   <td>Defines the unique ID of the dashboard, and for multitab dashboards, it must define the active-tabbed child dashboard ID.</td>
   </tr>
   <tr>
   <td>QueryString</td>
   <td><code>string</code></td>
   <td>Defines the filter query associated with the view.</td>
   </tr>
   <tr>
   <td>IsDefault</td>
   <td><code>string</code></td>
   <td>By default, it would be false. You can set as your view as DefaultView after the Default view option is enabled in Dashboard settings in the Bold BI server, otherwise view not saved as DefaultView of the dashboard.</td>
   </tr>
   </table>
</td>
</tr>
<tr>
<td><code>callBackFnc</code></td>
<td><code>string</code></td>
<td>Denotes the callback method name that must be defined. It will return the updated view details in the dashboard as arguments.</td>
</tr>
</table>