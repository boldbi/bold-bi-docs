---
layout: post
title: Dashboard Filtering – JavaScript Embedding | Bold BI Docs
description: Learn types of data filtering in JavaScript-based embedding of Bold BI dashboard in any of your business or Web applications.
platform: bold-bi
documentation: ug
---

# Types of data filtering in dashboard embedding

This section provides information on the various ways of data filtering to an embedded dashboard.

   1. <b>Server-side filtering</b>
        - <b>embed_datasource_filter:</b> Implementing server-side filtering when a user interacts with the dashboard by utilizing query parameters at the authorization endpoint.
   2. <b>Client-side filtering</b>
        - <b>filterParameters:</b> Applying filters when the dashboard rendering at intial level.
        - <b>updateFilters:</b> Updating the filters when the dashboard renders complete.

<table>
<thead>
<tr>
<th style="width: 22%;"></th>
<th style="width: 18%;">Filter API</th>
<th style="width: 45%;">Purpose</th>
<th style="width: 25%;">End user aware of filter values</th>
</tr>
</thead>
<tr>
<td><b>Server-Side</b></td>
<td><code>embed_datasource_filter</code></td>
<td>This Query parameter can be used when you intend to filter from the server side of embedding applications in a more secured way. In the Bold BI embedded application, you can pass the filter parameters from the AuthorizeAPI endpoint dynamically using the query parameter `embed_datasource_filter`.</td>
<td>No</td>
</tr>
<tr>
<td><b>Client-Side</b></td>
<td><code>filterParameters</code></td>
<td>This API member can be used when you intend to filter from the client side at the initial level rendering of the dashboard itself.</td>
<td>Yes</td>
</tr>
<tr>
</tr>
</table>

## Secured server side dashboard filtering

By this, you need to pass the filter value in the AuthorizeAPI endpoint. This type of filtering is more secure and can pass n number of filter values.

To pass filters to the `embed_datasource_filter` parameter in the AuthorizeAPI endpoint, refer to the following sample in C#(It differs based on your platform language). Here, we have to set both types of filters to the `embed_datasource_filter` property in the endpoint.

> **NOTE:** The end user was unable to make changes. We could prevent the user from changing the user ID and filter details.

  ```js
    public string AuthorizeAPI([FromBody] object embedQuerString)
    {
      var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());
      var embedQuery = embedClass.embedQuerString;
      // Using common read-only user as useremail
      embedQuery += "&embed_user_email=" + “readonlyuser@abc.com”;
      double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
      embedQuery += "&embed_datasource_filter=[{&ProductName=Alice Mutton}]";
      var embedDetailsFilter = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);
      using (var client = new HttpClient())
      {
        client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);
        client.DefaultRequestHeaders.Accept.Clear();
        var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;
        string resultContent = result.Content.ReadAsStringAsync().Result;
        return resultContent;
      }
    }

    public string GetSignatureUrl(string queryString)
    {
      if (queryString != null)
      {
        var encoding = new System.Text.UTF8Encoding();
        var keyBytes = encoding.GetBytes(_boldbiIProperties.EmbedSecret);
        var messageBytes = encoding.GetBytes(queryString);
        using (var hmacsha1 = new HMACSHA256(keyBytes))
        {
          var hashMessage = hmacsha1.ComputeHash(messageBytes);
          return Convert.ToBase64String(hashMessage);
        }
      }
      return string.Empty;
    }
  ```

> **NOTE:** Filter value should be enclosed with square and curly brackets as mentioned above. For more details, please refer [here](/getting-started/embedding-in-your-application/#how-to-pass-the-dashboard-parameter-and-url-filter-parameter-in-the-authorization-endpoint-dynamically).

## Client side dashboard filtering

This API member `filterParamters` can be used when you intend to filter from the client side at the initial level rendering itself. It can be achieved by using either a URL parameter or a dashboard parameter.

  ### Through URL parameter 

  This is an simplest way to apply a filter to the dashboard by using the known column name of the widget.

  To use a filter parameter, use the following syntax: `Column_Name=value1, value2,…, valueN`
   
  Filtering values can be single-valued and multiple-valued. For more details, please refer to the [URL Filter](/working-with-dashboards/preview-dashboard/urlparameters/).

  1. In the BoldBI.create() method of an embedded application, handle the filterParameters API as in the following example.
 
  ```js
    var dashboard = BoldBI.create({                            
      filterParameters: "ProductName=Alice Mutton",
    });                          
    dashboard.loadDashboard();
  ```

  2. This API can also handle multi-valued with column names whose values can be separated by a comma as in the following example.
  
  ```js
    var dashboard = BoldBI.create({                            
      filterParameters: "ProductName=Alice Mutton,Tofu",                          
    });                          
   dashboard.loadDashboard();
  ```

  ### Through dashboard parameter 

  Its a stored procedure of filter value, for this need to configure the dashboard parameter in the datasource level. This can be used when column name is unknown. For more details, Refer to the [configuring dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

  To use a dashboard parameter, use the following syntax:`dashboard_parameter_name=dashboard_parameter_value`
   
  where `dashboard_parameter_name` represents the saved dashboard parameter in datasource level.

  1. In the BoldBI.create() method of an embedded application, handle the filterParameters API as in the following example.

  ```js
    var dashboard = BoldBI.create({                            
      filterParameters: "dashboard_parameter_name=Alice Mutton",                     
    });                          
    dashboard.loadDashboard();
  ```

  > **NOTE:** Able to pass both parameter in the `filterParameters`API member. For more details, please refer [here](/embedding-options/embedding-sdk/embedding-api-reference/members/#filterparameters).

## Updating the filters from client side

This method can update the filters during on-demand cases after the dashboard has been rendered. Here, you can achieve this by using either the filter parameter, dashboard parameter, or both.

  1. Create a button on the view page with an on-click function in your external application.

  ```js
    <button onclick="updateFilterValues()">updateFilterValues</button>
  ```

  2. Invoke the `updateFilters` method to perform filtering. In the following example, there is a simple demonstration for applying the column name as ProductName and filter Value as Alice Mutton to update the filter value using the updateFilters method.

  ```js
    function updateFilterValues() 
    {
      var instance = BoldBI.getInstance("dashboard");
      instance.updateFilters("ProductName=Alice Mutton");
    }
  ```

 > **NOTE:** Able to pass both parameter in the  `updateFilters`API method. For more details, please refer [here](/embedding-options/embedding-sdk/embedding-api-reference/methods/#updatefilters).