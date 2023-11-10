---
layout: post
title: Various Data Filtering Types in Embedded Dashboard | Bold BI Docs
description: This tutorial describes the various data filtering types, client-side and server-side supported by Bold BI in an embedded dashboard.
platform: bold-bi
documentation: ug
---

# Exploring data filtering types in an embedded dashboard

   1. Client-side filtering
        - <b>filterParameters:</b> Applying filters when the dashboard first loads
        - <b>updateFilters:</b> Applying filters on the fly
   2. Server-side filtering
        - <b>embed_datasource_filter:</b> Applying the filter criteria on the server side when the user accesses the dashboard using the query parameter in the authorization endpoint.

<table>
<thead>
<tr>
<th style="width: 15%;"></th>
<th style="width: 30%;">Filter API</th>
<th style="width: 55%;">Purpose</th>
</tr>
</thead>
<tr>
<td rowspan="2"><b>Client-Side</b></td>
<td><code>filterParameters</code></td>
<td>This API member can be used when you intend to filter from the client side at the initial level rendering of the dashboard itself.</td>
</tr>
<tr>
<td><code>updateFilters</code></td>
<td>This API method can be used when you intend to filter from the client side on demand.</td>
</tr>
<tr>
<td><b>Server-Side</b></td>
<td><code>embed_datasource_filter</code></td>
<td>This Query parameter can be used when you intend to filter from the server side of embedding applications in a more secured way. In the Bold BI embedded application, you can pass the filter parameters from the authorization endpoint dynamically using the query parameter `embed_datasource_filter`.</td>
</tr>
</table>

**Note**: To learn more about URL parameters filtering, please refer to this [URL Parameter](https://help.boldbi.com/working-with-dashboards/preview-dashboard/urlparameters/) documentation.

## Client-side filtering
### Using the API member `filterParameters`

Applying filters directly from the client side during the initial rendering, use the `filterParameters`(client-side) API.

Example:

Set the filter value in the `filterParameters` member in `BoldBI.create()` method of an embedding. Please refer to the following code sample.

```js
var dashboard = BoldBI.create({                            
    filterParameters: "ProductName=Alice Mutton"                           
});                          
dashboard.loadDashboard();

```

In the code sample above, the `Parameter` is `ProductName` and the `ParameterValue` is `Alice Mutton`.

### Using the external on-demand method `updateFilters`

If you want to update the dashboard `on-demand`, you can use the `updateFilters()`(client-side) method. 

Example:

1. Create a button on the view page with an on-click function in your external application.

    ```js
    <button onclick="updateFilterValues()">updateFilterValues</button>

    ```

2. Invoke the `updateFilters` method to perform filtering. In the following example, there is a simple demonstration for applying the `Parameter` as `ProductName` and `ParameterValue` as `Alice Mutton` in an on-demand rendering case using updateFilters.

   ```js

    function updateFilterValues() {
    var instance = BoldBI.getInstance("dashboard");
    instance.updateFilters("ProductName=Alice Mutton");
    }

   ```

## Server-side filtering
### Using the query parameter `embed_datasource_filter`

Server-side filtering lets you ensure secured access for users to their data in the embedded dashboard. In the Bold BI embedded application, you can pass the filter parameters from the authorization endpoint dynamically using the query parameter `embed_datasource_filter`.

For example, a code snippet is provided. Additionally, I have attached image for further reference.

```js
  
public string GetDetails([FromBody] object embedQuerString) {
​   var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString()); 
   var embedQuery = embedClass.embedQuerString;           
   embedQuery += "&embed_user_email=" + EmbedProperties.UserEmail;// User your user-email as embed_user_email
   double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
   embedQuery += "&embed_server_timestamp=" + timeStamp;
   embedQuery += "&embed_datasource_filter="+ "[{&ProductName=Alice Mutton}]";            
   var embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);            
   using (var client = new HttpClient())            
   {                
   client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);                
   client.DefaultRequestHeaders.Accept.Clear();                
   var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;                
   string resultContent = result.Content.ReadAsStringAsync().Result;                
   return resultContent;            
   }       
   }

```

   ![embed_datasource_filter](/static/assets/faq/images/embed_datasource_filter.png)