---
layout: post
title: How to pass parameter(s) to Web API connector | Bold BI Docs
description: Summarizes here how to configure dashboard or URL parameters to Web API connector and how to pass values for those parameter(s) during runtime in embedded view.
platform: bold-bi
documentation: ug
---

# How to pass a parameter to Web API connector when view and embedding a dashboard

You can pass the [Dashboard parameter](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) value to the value of [Web API](/working-with-data-sources/data-connectors/web/) URL parameter/POST Parameters/Headers. Please follow these steps:

1. First of all, create the Dashboard parameter by following the steps mentioned in this [section](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

   ![Dashboard Parameter to pass in Web API](/static/assets/faq/images/parameter-to-pass-web-api.png)

2. Choose a **Web API data connection** in the connection panel to create a web data source and enter the required URL with the required parameter name as shown in the following screenshot.

   ![Web API Parameter Name](/static/assets/faq/images/web-api-paramter-name.png)

3. Now, type the `@` symbol near the parameter in the query string and you can see the list of dashboard parameters from the data sources that are added to your dashboard. From that list, choose the required parameter.

   ![Choose Parameter in en point](/static/assets/faq/images/choose-parameter-in-end-point.png)

   ![Pass Parameter in en point](/static/assets/faq/images/pass-parameter-in-end-point.png)

4. If the data source (which has the dashboard parameter) is not present in your current dashboard or you are creating a data source from the data source listing page, use the following syntax to use the dashboard parameter in your web API wherever you want. 

      `Syntax: @{{:DataSourceName.ParameterName}}` 

5. After configuring the dashboard parameter and completing the dashboard designing, you can publish the dashboard into the server.

6. When you view the dashboard on the server, you can modify the value of the dashboard parameter if required. To modify the value, click on the below-highlighted icon, you can view the dashboard parameter pop-up window. Through this window, you can modify the value of a parameter.

   ![Dashboard View Parameter](/static/assets/faq/images/dashboard-view-parameter.png)

   ![Modify Dashboard Parameter](/static/assets/faq/images/modify-dashboard-parameter.png)

7. When you embed a dashboard into your application and would like to change the parameters' values based on the user like below screen shot, you can pass the dashboard parameter values as mentioned in this [section](/getting-started/embedding-in-your-application/#how-to-pass-the-dashboard-parameter-and-url-filter-parameter-in-the-authorization-end-point-dynamically). You can also find the Syntax for passing the parameter values as follows,

   `Syntax: embedQuerString += "&embed_user_email=xxx@domain.com" + "&embed_datasource_filter=" + "[{&&ParameterName=Value&ParameterName=Value}]";`

   Also, find the sample code screenshot as follows

   ![Web API Parameter Embedding](/static/assets/faq/images/web-api-parameter-embedding.png)

   A dashboard will render based on the passed parameter values as shown in the following screenshot.

   ![Web API Parameter Embedding](/static/assets/faq/images/embed-sample-parameter.png)

Here, the `&&` indicates the Dashboard parameter and `&` indicates the URL parameter. So based on the parameter value passed through the query string, the web API connection will be changed.