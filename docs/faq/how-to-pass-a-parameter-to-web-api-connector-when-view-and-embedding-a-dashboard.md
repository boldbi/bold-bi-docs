---
layout: post
title: How to pass parameter(s) to Web API connector | Bold BI Docs
description: Summarizes here how to configure dashboard or URL parameters to Web API connector and how to pass values for those parameter(s) during runtime in embedded view.
platform: bold-bi
documentation: ug
---

# How to pass a parameter to Web API connector when view and embedding a dashboard

You can pass the [Dashboard parameter](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/) value to the value of the [Web API](/working-with-data-sources/data-connectors/web/) URL parameter, POST Parameters, or Headers. Please follow these steps:

1. Firstly, create the Dashboard parameter by following the steps outlined in [section](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).

   ![Dashboard Parameter to pass in Web API](/static/assets/faq/images/parameter-to-pass-web-api.png)

2. Choose a **Web API data connection** in the connection panel to create a web data source, and enter the required URL with the necessary parameter name as displayed in the following screenshot.

   ![Web API Parameter Name](/static/assets/faq/images/web-api-paramter-name.png)

3. Now, type the `@` symbol near the parameter in the query string, and you will see the list of dashboard parameters from the data sources that have been added to your dashboard. From that list, choose the required parameter.

   ![Choose Parameter in en point](/static/assets/faq/images/choose-parameter-in-end-point.png)

   ![Pass Parameter in en point](/static/assets/faq/images/pass-parameter-in-end-point.png)

4. If the data source (which contains the dashboard parameter) is not currently in your dashboard or if you are creating a data source from the data source listing page, you can use the following syntax to incorporate the dashboard parameter in your web API wherever needed.

      `Syntax: @{{:DataSourceName.ParameterName}}` 

5. After configuring the dashboard parameters and completing the dashboard design, you can publish the dashboard to the server.

6. When you view the dashboard on the server, you can modify the value of the dashboard parameter if necessary. To modify the value, click on the icon highlighted below, and you will see the dashboard parameter pop-up window. Through this window, you can make changes to the parameter value.

   ![Dashboard View Parameter](/static/assets/faq/images/dashboard-view-parameter.png)

   ![Modify Dashboard Parameter](/static/assets/faq/images/modify-dashboard-parameter.png)

7. When you embed a dashboard into your application and would like to change the parameters' values based on the user, as shown in the screenshot below, you can pass the dashboard parameter values as mentioned in this [section](/getting-started/embedding-in-your-application/#how-to-pass-the-dashboard-parameter-and-url-filter-parameter-in-the-authorization-endpoint-dynamically). You can also find the syntax for passing the parameter values as follows:

   `Syntax: embedQuerString += "&embed_user_email=xxx@domain.com" + "&embed_datasource_filter=" + "[{&&ParameterName=Value&ParameterName=Value}]";`

   Also, find the screenshot of the sample code below.

   ![Web API Parameter Embedding](/static/assets/faq/images/web-api-parameter-embedding.png)

  A dashboard will be rendered based on the passed parameter values, as shown in the following screenshot.

   ![Web API Parameter Embedding](/static/assets/faq/images/embed-sample-parameter.png)

Here, `&&` indicates the Dashboard parameter and `&` indicates the URL parameter. Therefore, the web API connection will be changed based on the parameter value passed through the query string.