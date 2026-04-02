---
layout: post
title: API Reference – Viewer Methods - JavaScript Embedding | Bold BI
description: Explore the JavaScript viewer API reference for methods that can be used for embedding in Bold BI deployed in your server.
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

## loadDashboard()
    
This method will display the dashboard based on the dashboard options provided when calling the create method.

**Example** 
   
```js      
var dashboard = BoldBI.create(options);
dashboard.loadDashboard();   
```
>**Note:** To embed the multitab dashboard using Bold BI Server version from 10.1.18, it is necessary to use the corresponding CDN link: https://cdn.boldbi.com/embedded-sdk/v10.1.18/boldbi-embed.js. If you are using a Bold BI Server version lower than 10.1.18, you can use the CDN link: https://cdn.boldbi.com/embedded-sdk/v9.1.73/boldbi-embed.js.

## loadView()
    
This method will render the dashboard with a view based on the view options provided while calling the create method.

**Example** 
  
```js      
var dashboard = BoldBI.create({
   serverUrl: "https://boldbidemo/bi/site/site1",
   viewId: "b64aebef-58ca-4033-b81a-39350c849b75", 
   embedContainerId: "dashboard_container", // This should be the container id where you want to embed the dashboard
   authorizationServer: {
      url: "https://boldbidemo/authorize/server"
   }
}); 
dashboard.loadView();
```

## getInstance()
    
This method will return the object of the rendered dashboard using the container ID assigned to the dashboard options.

**Example** 
   
```js
   var instance = BoldBI.getInstance("container"); //container -> embed container id
```

## applyTheme()

This method allows for updating the custom theme of the dashboard in the embedding without needing to reload the Bold BI instance. It is essential to provide the custom theme name as an argument.

**Syntax**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.applyTheme(dashboardtheme); //dashboardtheme -> name of the theme in BI server
```

**Example**

```js
var instance = BoldBI.getInstance("dashboard");
instance.applyTheme("dark");
```

> **NOTE:** In order to set a custom theme, you should upload the custom theme files in Bold BI Server. Please refer to this [link](/site-administration/look-and-feel-settings-in-embedded-analytics/#custom-theme) for more information on how to upload custom theme files.

## checkCompatibility()

> **NOTE:** This method will work from Embed SDK release v7.9

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

## hidePopup()
    
This method will hide the current dashboard's waiting pop-up.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.hidePopup();
```

## hideLoader()

This method will be used to eliminate the waiting indicator in dashboard embedding.

**Example**

```js
var dashboard = BoldBI.create({
   actionComplete: function (args) {
      if (args.eventType === "renderLayout") {
         var instance = BoldBI.getInstance("container");//container -> embed container id
         instance.hideLoader();
      }
   },
});
dashboard.loadDashboard();
```

>**Note:** We have added support for the hideLoader method to the dashboard and Multi-tab dashboard embedding.

## refresh()
    
This method will refresh the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.refresh();   
```

## resetFilter()
    
This method will clear all filters applied in the current dashboard.

**Example** 
   
```js        
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.resetFilter();
```

## resize()
    
This method is used to resize the current dashboard.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.resize();   
```

## updateFilters()
    
This method will update the filter parameters of the current dashboard using the following cases.

1. Filtering with URL Parameter.
2. Filtering with Dashboard Parameter.
3. Filtering with Combination of URL Parameter and Dashboard Parameter and vice-versa.

**Example** 
   
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.updateFilters("Continent=Asia,Africa,Europe");   
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
instance.viewer.updateFilters("Continent=Asia,Africa,Europe");   
```

</code></td>
</tr>
<tr>
<td><code>Dashboard Parameter</code></td>
<td><code>{parameter_name}={parameter_value}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.updateFilters("Department_DP=Sales");
```

</code></td>
</tr>
<tr>
<td><code>Combination Of URL Parameter and Dashboard Parameter</code></td>
<td><code>{column_name}={value1},{value2},{value3}&{parameter_name}={parameter_value}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.updateFilters("Continent=Asia,Africa,Europe&Department_DP=Sales");
```

</code></td>
</tr>
<tr>
<td><code>Combination Of Dashboard Parameter and URL Parameter</code></td>
<td><code>{parameter_name}={parameter_value}&{column_name}={value1},{value2},{value3}</code></td>
<td><code>

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.viewer.updateFilters("Department_DP=Sales&Continent=Asia,Africa,Europe");
```

</code></td>
</tr>
</table>

## category

### createCategory()

This method will be used to create a new category for the server.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.createCategory(categoryName, categoryDescription, callBackFnc, containerId);
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

> **NOTE:** To customize the `createCategory()` in the dashboard designer using the web application, please refer to the details provided [this documentation](https://support.boldbi.com/kb/article/16729/how-to-create-own-publish-dialog-for-designer-embedding).

### fetchCategories()

This method will be utilized to retrieve the dashboard categories from the server.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
instance.fetchCategories(callBackFnc, containerId);
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

> **NOTE:** Customize the `fetchCategories()` function in the dashboard designer using the web application. For more information, please refer to [this documentation](https://support.boldbi.com/kb/article/16729/how-to-create-own-publish-dialog-for-designer-embedding).

## comment

### addComment()

This method will add the comment to the corresponding dashboard.

**Example for adding comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.viewer.addComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while adding the comment in the normal dashboard.
}
```

**Example for adding comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Adding multitab dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.addComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while adding the comment in the multitab dashboard.
}
```

**Example for replying comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "1"};
instance.viewer.addComment(addComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while replying the comment in the normal dashboard.
}
```

**Example for replying comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var addComment = {content: "Replying multitab dashboard comment", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", parentCommentId: "1", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.addComment(addComment, "callBackFnc");

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


### deleteComment()

This method will delete the comment on the respective dashboard.

**Example for deleting comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "3", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.viewer.deleteComment(deleteComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while deleting the comment in the normal dashboard.
}
```

**Example for deleting comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var deleteComment = {commentId: "3", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.deleteComment(deleteComment, "callBackFnc");

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

### editComment()

This method will edit the comment of the corresponding dashboard on the dashboard.

**Example for editing comment in normal dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Edited dashboard comment", commentId: "2", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
instance.viewer.editComment(editComment, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while editing the comment in the normal dashboard.
}
```

**Example for editing comment in multitab dashboard**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var editComment = {content: "Edited multitab dashboard comment", commentId: "2", dashboardId: "f3968817-f3e0-4747-9d7a-d89a6098bb12", multitabDashboardId: "59c94463-0da5-4cf5-a5a5-cbc3ed901ad6"};
instance.viewer.editComment(editComment, "callBackFnc");

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

### fetchComments()

This method will retrieve the specific widget and dashboard comments from the Bold BI Server.

**Example for getting normal dashboard comments**

```js
var instance = BoldBI.getInstance("container"); //container -> embed container id
var args = {'dashboardId': "f3968817-f3e0-4747-9d7a-d89a6098bb12"};
var commentType= "dashboard";
instance.viewer.fetchComments(commentType, args, "callBackFnc");

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
instance.viewer.fetchComments(commentType, args, "callBackFnc");

function callBackFnc(args) {
   // It will return the updated comments in the dashboard as arguments.
   // Write a code block to perform an operation while getting the specific dashboard comment from the multitab dashboard.
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

### exportAsExcel()

This method will export the dashboard as an Excel file.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'fileName':"",'fileType':""};

instance.viewer.exportAsExcel(exportInformation);
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

### exportAsImage()

This method will export the dashboard as an image.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'fileName':"",'exportImageFormat':"",'resolutionDpi':"",'showAppliedFilters':};

instance.viewer.exportAsImage(exportInformation);
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

### exportAsPdf()

This method will export the dashboard as a PDF.

**Example**
```js
var instance = BoldBI.getInstance("container"); //container -> embed container

var exportInformation ={'dashboardId':"",'fileName':"",'pageSize':"",'pageOrientation':"",'showAppliedFilters':};

instance.viewer.exportAsPdf(exportInformation);
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

## view

### delete()
This method removes the filter view from the dashboard.

**Example**

```js
var instance = BoldBI.getInstance("dashboard"); //embedContainerId -> 'dashboard'
var viewId= "2182319f-2bb3-49ae-b05c-2bec3f03fd1f"; // Get the view id from the getViewsByDashboardId() API. For know more above the API, refer getViewsByDashboard().
instance.view.delete(viewId, "callBackFunc"); 

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

### fetchById()
This method will retrieve the information of a specific filter view.

**Example**

```js
var instance = BoldBI.getInstance("dashboard"); //embedContainerId -> 'dashboard'
var viewId= "2182319f-2bb3-49ae-b05c-2bec3f03fd1f"; // Get the view id from the getViewsByDashboardId() API. For know more above the API, refer getViewsByDashboard().
instance.view.fetchById(viewId, "callBackFunc");

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

### fetchByDashboardId()
This method retrieves the filter view items of a specific dashboard.

**Example**

```js
var instance = BoldBI.getInstance("dashboard"); // embedContainerId -> 'dashboard'
var itemId= "2db7d4eb-017d-4a3e-b567-d88cd8600d89"; // for multitab dashboard, need to set the active-tabbed child dashboard id.
instance.view.fetchByDashboardId(itemId, "callBackFunc");

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

### saveAs()
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
instance.view.saveAs(viewParameters, "callBackFunc");

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
instance.view.saveAs(viewParameters, "callBackFunc");

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
instance.view.saveAs(viewParameters, "callBackFunc");

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

### save()
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
instance.view.save(viewParameters, "callBackFunc");

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
}
instance.view.save(viewParameters, "callBackFunc");

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
instance.view.save(viewParameters, "callBackFunc");

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

### update()
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
instance.view.update(viewParameters, "callBackFunc");

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
instance.view.update(viewParameters, "callBackFunc");

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

## widget

### widget.updatefilters()

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