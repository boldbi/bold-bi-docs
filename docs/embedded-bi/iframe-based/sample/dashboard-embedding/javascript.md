---
layout: post
title:  Dashboard Embedding Example in JavaScript app | Bold BI Docs
description: Explore the embedded samples and learn how to embed the dashboard and data source of Bold BI application in a JavaScript based Web applications using iFrame.
platform: bold-bi
documentation: ug
---

# Dashboard Embedding Sample
This section explains how to embed the Bold BI dashboard into sample application by integrating the Item Listing, Designing and Viewing modules.  

![DashboardListingSample](/static/assets/embedded/iFrame-based/sample/images/dashboard-sample.png)

## Prerequisites
You need to follow the below steps before running the given sample:   
*	Download the sample from [here](https://redirect.boldbi.com/?id=6002).
*   For Cloud, You should have existing Bold BI Cloud application.  
*	For On-Premise, You should install the latest Bold BI Enterprise build 2.8.14 or later.  

## Site variable
1. Update your site variable in `property.js` file in the extracted location **`{Extracted Location}\scripts\property.js`**  
```js  
var rootUrl = "http://localhost:63893/bi";
var siteIdentifier = "site/site1";
var email = "Enter user email address here";
var password = "Enter user passowrd here";  
var environment = "cloud or on-premise";  
```  
Please refer below table for value of the above properties based on your application.   
<meta charset="utf-8"/>
<table>
  <tbody>
  <tr>
  <th>Application URL(hostname)</th> 
  <th>Root URL</th>
  <th>Site Identifier</th>
  <th>Email</th>
  <th>Password</th>
  <th>Environment</th>   
  </tr>
  <tr>       
        <td align="left">http://localhost:63893/bi/site/site1 (Bold BI Enterprise)</td>
        <td align="left">http://localhost:63893/bi</td>
        <td align="left">site/site1</td>
        <td align="left">user email</td>
        <td align="left">user password</td>
        <td align="left">on-premise</td>
  </tr>
  <tr>       
        <td align="left">https://example.boldbi.com/bi
(Bold BI Cloud)</td>
        <td align="left">https://example.boldbi.com/bi</td>
        <td align="left">-</td>
        <td align="left">user email</td>
        <td align="left">user password</td>
        <td align="left">cloud</td>
  </tr>
  </tbody>
</table>  

2. After updating the required value, open the `DashboardListing.html` in any browser.  

> **NOTE:**  The user credentials given in the script file is for demo purpose only. We recommend you to update this value in server-side code and generate the token for a production application.  

## User authorization token
User authorization token will be generated with user email and password, and this token will be used for dashboard listing, dashboard rendering, and designing the dashboard. Refer to the following code snippet for generating the user authorization token.  
```js  
function getToken() {
    var getDesignerToken = "";
    var apiRequest = {
        UserId: email,
        Password: password
    };
    $.ajax({
        type: "POST",
        async: false,
        url: dashboardServerApiUrl + "/get-user-key",
        data: apiRequest,
        success: function(data) {
            accessToken = JSON.parse(data.Token).access_token;
        }
    });
}
```  

## Item listing
Dashboard item listing can be integrated into your application by calling the `GetItem` API endpoint. We have called this endpoint by generating the authorization token from the given user credentials. Refer to the following code snippet.  
```js  
function showDashboardListing() {
	var doContinue = true;
	$.ajax({
		type: "GET",
		url: dashboardServerApiUrl +"/v2.0/items?ItemType=dashboard",
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', "bearer "+accessToken)
		},
		success: function (data) {
			dashboard = data;
			if (dashboard != "") {  
                for(var i=0;i<dashboard.length;i++){
				    var dashboardPath = dashboard[i].ItemLocation.split("\\");	
                    var divDom=$("<div class='dashboard-item'>").attr({
                        Name : dashboard[i].Name,
                        ItemId : dashboardPath[dashboardPath.length - 2],
						Category : dashboard[i].CategoryName
                    });
                    divDom.html(dashboard[i].Name);
                    $("#panel").append(divDom);            
                }
            }
        }
    });
}
```  

In this sample code snippet, we are collecting the below property for each dashboard, and adding this property as attribute to HTML node. This property will be used to open the dashboard in edit mode and view mode.   
<table>
  <tbody>
    <tr>
        <td align="left">Name</td>
        <td align="left">Name of the Dashboard</td>
    </tr>
    <tr>
        <td align="left">ItemId</td>
        <td align="left">Unique id of the dashboard. This will be used for editing and rendering dashboards</td>
    </tr>
    <tr>
        <td align="left">Category</td>
        <td align="left">Category name of the dashboard</td>
    </tr>
  </tbody>
</table>

> **NOTE:**  Other properties in the code snippet will be loaded from `property.js` file.

##  Viewing Dashboard
To render the dashboard, pass the dashboard ID, category name, and  dashboard name in the embed URL. We are getting the required value from the attribute when user click the dashboard and create the embed URL using this value and append this code into application. Refer to the following code snippet.  
```js  
$(document).on("click",".dashboard-item",function(){
    $(".dashboard-item").removeClass("active");
    $(this).addClass("active");
    id=$(this).attr("ItemId");
    name=$(this).attr("Name");
	category=$(this).attr("Category");
    renderDashboard(id,name,category);
});

function renderDashboard(itemId, name, category) {
    $("#dashboard").html("");
    $("#dashboard").css("height",window.innerHeight-48); //change this value to dynamically set the height of the dashboard rendernig dom
	var iFrameElement = $("<iframe src='" + baseUrl + "/dashboards/" + itemId + "/" + category + "/" + name + "?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#dashboard").append(iFrameElement);       
} 
```  

##  Creating Dashboard
We are making the URL to open the dashboard designer when user click the create button and append this code into application. Refer to the following code snippet. 
```js  
$(document).on("click","#create-dashboard",function(){
    openDesignerForCreate();
})

function openDesignerForCreate() {
    $("#dashboard").html("");
    $("#dashboard").css("height",window.innerHeight-48); //change this value to dynamically set the height of the dashboard rendernig dom
	var iFrameElement = $("<iframe src='" + baseUrl + "/dashboard-designer?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#dashboard").append(iFrameElement);
} 
```  

##  Editing Dashboard
To edit the dashboard, pass item ID, name, and category in the embed URL. We are getting the required value from the attribute when user click the dashboard and create the embed URL using this value and append this code into application. Refer to the following code snippet.  
```js  
$(document).on("click","#edit-dashboard",function(){  
    openDesignerForEdit(id, name, category)
});

function openDesignerForEdit(itemId, name, category) {
    $("#dashboard").html("");
    $("#dashboard").css("height",window.innerHeight-48); //change this value to dynamically set the height of the dashboard rendernig dom
	var iFrameElement = $("<iframe src='" + baseUrl + "/dashboard-designer/" + itemId + "/" + category + "/" + name + "?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#dashboard").append(iFrameElement);
}
```  