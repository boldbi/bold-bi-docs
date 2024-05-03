---
layout: post
title:  Dashboard parameters - Embedded BI| Bold BI Documentation
description: This section describes different use cases of dashboard parameters in dashboards using the Bold BI Embedded.
canonical: "/working-with-data-sources/dashboard-parameter/"
platform: bold-bi
documentation: ug
keywords: Dashboard parameter, dashboard, parameter, parameters, dynamic, configure dashboard parameter, query parameter
---

# Dashboard Parameters

A dashboard parameter is a global placeholder value such as a number, string, or date that can replace a constant value in an expression, stored procedure, code view, and web URL. By default, the dashboard will be rendered with the default parameter value. You can change the parameter dynamically while viewing the dashboard.

For example, if you need to create an expression column that returns true if the production cost is greater than $30,000, otherwise return false, the expression will be as follows:

`IF([Production Cost] > 30000, 'True', 'False')`

You can use the dashboard parameter for the constant value of `30000` as follows:

 `IF([Production Cost] > @{{:Parameter}}, 'True', 'False')`

Then, you can change the parameter value dynamically while previewing or viewing the dashboard.

You can even create a dynamic parameter using the list data source type that is set to automatically refresh its current value or list of values when the value is changed or filtered at the data source level or user level.

If you need to extract results from a web API that returns user information based on the user ID, for example, with URLs like:

`https://jsonplaceholder.typicode.com/users/1`
`https://jsonplaceholder.typicode.com/users/2`

For this scenario, you can create a dashboard parameter with the user ID list by choosing the iterative option at the data source level. Now, you can create a web data source using the dashboard parameter in the web URL as follows:

`https://jsonplaceholder.typicode.com/users/@{{:DsName.ParameterName}}`