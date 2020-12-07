---
layout: post
title:  iFrame-based Data Source Designer Embedding Sample | Bold BI
description: Learn how to embed the data source module in your application using iFrame such that a data source can be created or edited.
platform: bold-bi
documentation: ug
---

# Data Source Embedding Sample
This section explains how to embed the Bold BI data source into the sample application by integrating the item listing and designing modules.  
 

![DatasourceListingSample](/static/assets/embedded/iFrame-based/images/datasource-sample.png)

## Prerequisite
You need to follow the below steps before running the given sample:

*	Download the sample from [here](https://redirect.boldbi.com/?id=6003).
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

2. After updating the required value, open the `DataSourceListing.html` in any browser.  
  
> **NOTE:**  The user credentials given in the script file is for demo purpose only. We recommend you to update this value in server-side code and generate the token for a production application.  

## User authorization token
User authorization token will be generated with user email and password, and this token will be used for data source listing. Refer to the following code snippet for generating the user authorization token.  
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
Data source item listing can be integrated into your application by calling the `GetItem` API endpoint. We have called this endpoint by generating the authorization token from the given user credentials. Refer to the following code snippet.  
```js  
function showDatasourceListing() {
	var doContinue = true;
	$.ajax({
		type: "GET",
		url: dashboardServerApiUrl +"/v2.0/items?ItemType=datasource",
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', "bearer "+accessToken)
		},
		success: function (data) {
			datasource = data;
			if (datasource != "") {           
                for(var i=0;i<datasource.length;i++){				
                    var divDom=$("<div class='datasource-item'>").attr({
                        Name : datasource[i].Name,
                        ItemId : datasource[i].Id
                    });
                    divDom.html(datasource[i].Name);
                    $("#panel").append(divDom);            
                }
            }
        }
    });
}
```  

In this sample code snippet, we are collecting the below property for each data source, and add this property as attribute in `html` node. This property will be used to open the data source in edit mode.  
<table>
  <tbody>
    <tr>
        <td align="left">Name</td>
        <td align="left">Name of the Data source</td>
    </tr>
    <tr>
        <td align="left">ItemId</td>
        <td align="left">Unique id of the data source. This will be used for editing the data source</td>
    </tr>
  </tbody>
</table>

> **NOTE:**  Other properties in the code snippet will be loaded from `property.js`  file

##  Creating data source
We are making the URL to open the create datasource page when user click the create button. Refer to the following code snippet.  
```js  
$(document).on("click","#create-datasource",function(){
    openDesignerForCreate();
})

function openDesignerForCreate() {
    $("#datasource").html("");
    $("#datasource").css("height",window.innerHeight-48); //change this value to dynamically set the height of the data source rendernig dom
	var divIFrame = $("<iframe src='" + baseUrl + "/datasource-designer/connection?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#datasource").append(divIFrame);
} 
```  

##  Editing data source
To edit the data source, pass item ID and name in the embed URL. We are getting the required value from the attribute when user click the data source and create the embed URL using this value and append this code into application. Refer to the following code snippet.  
```js
$(document).on("click",".datasource-item",function(){
    $(".datasource-item").removeClass("active");
    $(this).addClass("active");
    id=$(this).attr("ItemId");
    name=$(this).attr("Name");
    openDesignerForEdit(id, name);
});

function openDesignerForEdit(itemId, name) {
    $("#datasource").html("");
    $("#datasource").css("height",window.innerHeight-48); //change this value to dynamically set the height of the data source rendernig dom
	var divIFrame = $("<iframe src='" + baseUrl + "/datasource-designer/" + itemId + "/" + name + "?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#datasource").append(divIFrame);
}
```