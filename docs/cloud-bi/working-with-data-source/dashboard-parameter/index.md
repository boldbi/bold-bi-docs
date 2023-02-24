---
layout: post
title:  Dashboard parameters - Cloud BI| Bold BI Documentation
description: This section describes different use cases of dashboard parameters in dashboards using the Bold BI Cloud.
platform: bold-bi
documentation: ug
keywords: Dashboard parameter, dashboard, parameter, parameters, dynamic, configure dashboard parameter, query parameter
---

# Dashboard Parameters

Dashboard parameter is a global placeholder value such as a number, string, or date that can replace a constant value in expression, stored procedure, code view, and web URL. By default, dashboard will be rendered with default parameter value. You can change the parameter dynamically, while viewing the dashboard.

For example, you need to create an expression column that returns true if the production cost is greater than $30,000 otherwise return false. For this case, expression will be as follows.

`IF([Production Cost] > 30000, 'True', 'False')`

You can use the dashboard parameter for the constant value of "30000" as follows.

 `IF([Production Cost] > @{{:Parameter}}, 'True', 'False')`

Then, you can change the parameter value dynamically, while preview or viewing the dashboard.

You can even create a dynamic parameter using the list data source type that’s set to automatically refresh their current value or list of values when the value changed or filtered in data source level or user level.

You need to extract the results from the web API those are returns the user information based on the user id.

For example, you have the URL as follows.

`https://jsonplaceholder.typicode.com/users/1`
`https://jsonplaceholder.typicode.com/users/2`

For this scenario, you can create dashboard parameter with the user id list by choosing the iterative option in data source level. Now, you can create the web data source using the dashboard parameter in web URL as follows.

`https://jsonplaceholder.typicode.com/users/@{{:DsName.ParameterName}}`