---
layout: post
title: API Reference – Widget Methods - JavaScript Embedding | Bold BI
description: Explore the JavaScript Widget API reference for methods that can be used for embedding in Bold BI deployed in your server.
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
     embedToken:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldm9wc0Bib2xkYmkuY29tIiwidXBuIjouYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSIsImF1ZCI6Imh0dHBzOi8vaG90Zml4LXdpbmRvd3MuYm9sZGJpZGVtby5jb20vYmkvc2l0ZS9zaXRlMSJ9.JzbqVr6Brv1mAEvnbHnE-FuShos",
});   
```

> **NOTE:** By default, `BoldBI.Environment.Enterprise` is used for the Environment API member. For Cloud sites, you must set the Environment member value to `BoldBI.Environment.Cloud`.

## loadWidget()
    
This method will load the widget of the current dashboard.

**Example** 
   
```js
var dashboard = BoldBI.create(options);
dashboard.loadWidget("Sales by country");   
```

## getInstance()

This method will be used to get an instance of that specific widget using its Id. To retrieve the widget details from a specific dashboard, please refer to this [REST API](/embedding-options/embedding-sdk/embed-different-components/embed-dashboard-widget/#how-to-get-widget-id).

**Example**

```js
var dashboard = BoldBI.create(options);
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "2583540a-f970-41a1-9fc8-31c0581e7aa3"; // For getting widget ID, refer mentioned REST API in description.
var widgetInstance = instance.widget.getInstance(widgetId);
```
### setFilters()
This method is used to set the filter parameters for the widget instance in the following cases.
* Filtering without column name.
* Filtering with one column name.
* Filtering with more than one column name.
To learn about the widget ID of the specific widget, please refer to this [link](/embedding-options/embedding-sdk/embed-different-components/embed-dashboard-widget/#how-to-get-widget-id).
To filter the widgets at `initial rendering`, you need to set filter parameters with widget instance like below.
**Example for filtering without column name**
```js
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "201ce4b3-f2f9-4a3b-98e7-05b5ba01f2ca";
var filtersValue = ["Average", "Good"]; 
var widgetInstance = instance.widget.getInstance(widgetId).setFilters(filtersValue);
```
**Example for filtering with one column name**
```js
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "201ce4b3-f2f9-4a3b-98e7-05b5ba01f2ca";
var filtersValue = ["Feedback=Average,Good"]; 
var widgetInstance = instance.widget.getInstance(widgetId).setFilters(filtersValue);
```
**Example for filtering with more than one column name**
```js
var instance = BoldBI.getInstance("container"); // container -> embed container id
var widgetId = "32ed09f7-49ef-4468-9c56-ccc376dbcaaa";
var filtersValue = ["Product=Carnarvon Tigers","Company=Hanari Carnes" ]; 
var widgetInstance = instance.widget.getInstance(widgetId).setFilters(filtersValue);
```
> **Note:** To remove the specific widget instance, please check the [dispose](/embedding-options/embedding-sdk/component-api-v2.0/widget/widget-methods/#dispose) method.

## dispose()

This method will remove the existing widget instance from the embedded widget. If you are using the `widget.getInstance` method along with `setFilters`, and you subsequently want to destroy the instance, you can use this method.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.widget.dispose(widgetId); // widgetId ->Define the unique id of the widget.
```

## fetchData()

This method will help you get the details of the widget in a `clientFnc` method with arguments.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.widget.fetchData(widgetName, clientFnc, dashboardId); // widgetName ->Define the name of the widget to get data, clientFnc -> It acts as a method, in this method only details of the widget are passed in an argument. , dashboardId -> Define the unique id of the dashboard if it is present within the multitab dashboard.
```

## loadWidgets()

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
dashboard.loadWidgets();
```
>**Note:** To embed the necessary widgets, the client application should create a container where the widgets will be displayed. Height and Width must be added within the widget container. We have enhanced the performance of loading multiple widgets in the javascript embedding. Please note that support will work and take effect if the embed SDK Wrapper and Bold BI Server are on the same version effectively from v8.1.41

## refresh()

This method will refresh the specific widgets within the current dashboard.

**Example**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.widget.refresh(widgetNames, hideLoader, dashboardId); // widgetnames ->Define the name of the widget to be Refresh , hideLoader -> Define whether to show or hide loading indicator while processing , dashboardId -> Define the unique id of the dashboard if it is present within the multitab dashboard.
```

## updatefilters()

This method is used to update the dashboard with applied filter values in the On-Demand case. It can be used for any type of widget filtering cases.

**Example for updating the widget filtered values in dashboard**

```js
var instance = BoldBI.getInstance("container");
var widgetId1 = "201ce4b3-f2f9-4a3b-98e7-05b5ba01f2ca";
var filtersValue1 = ["Feedback=Average,Good"]; //single column with filter values
instance.widget.getInstance(widgetId1).setFilters(filtersValue1);
var widgetId2= "32ed09f7-49ef-4468-9c56-ccc376dbcaaa";
var filtersValue2 = ["Product=Carnarvon Tigers","Company=Hanari Carnes"]; //multiple columns with filter values
instance.widget.getInstance(widgetId2).setFilters(filtersValue2);
instance.widget.updatefilters("container"); //container -> embed container id
```

>**Note:** Please apply widget filters on both the initial rendering and on-demand in the dashboard using a web application. For more details, please refer to [this documentation](https://support.boldbi.com/kb/article/16759/how-to-apply-widget-filters-using-both-initialrendering-and-ondemand-in-embedding).

## Comment

### addComment()

This method will add the comment widget to the corresponding widget on the dashboard.

**Example for adding widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding widget comment in normal dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.viewer.addComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while adding the widget comment in the normal dashboard.
}
```

**Example for adding widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding widget comment in multitab dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.addComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while adding the widget comment in the multitab dashboard.
}
```

**Example for replying widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying widget comment in normal dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "4"};
instance.viewer.addComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while replying the widget comment in the normal dashboard.
}
```

**Example for replying widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying widget comment in multitab dashboard", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "4", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.addComment(addComment, "callBackFnc");

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

### deleteComment()

This method will delete the comment for the respective widget on the dashboard.

**Example for deleting widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "6", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.viewer.deleteComment(deleteComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while deleting the widget comment in the normal dashboard.
}
```

**Example for deleting widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "6", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.deleteComment(deleteComment, "callBackFnc");

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

### editComment()

This method will edit the comment of the respective widget on the dashboard.

**Example for editing widget comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Editing widget comment in normal dashboard", commentId: "5", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.viewer.editComment(editComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the widget as arguments.
   // Write a code block to perform an operation while editing the widget comment in the normal dashboard.
}
```

**Example for editing widget comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Editing widget comment in multitab dashboard", commentId: "5", widgetId: "7d118d8c-cee9-479e-befc-d2a46abc9aa5", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.editComment(editComment, "callBackFnc");

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

### fetchComments()

This method will retrieve the specific widget  comments from the Bold BI Server.

**Example for getting widget comments from normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var args = {'widgetId': "7d118d8c-cee9-479e-befc-d2a46abc9aa5", 'dashboardId': "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
var commentType= "widget";
instance.viewer.fetchComments(commentType, args, "callBackFnc");

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
instance.viewer.fetchComments(commentType, args, "callBackFnc");

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

## Export

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