---
layout: post
title: Change the Dashboard Parameter value in URL - Cloud BI | Bold BI
description: This section describes about how to change the dashboard parameter value in Bold BI Cloud using URL. 
platform: bold-bi
documentation: ug
---

# Change the Dashboard Parameter value in URL

By using dashboard parameters the user can change the value of the URLs dynamically.

You can pass the parameters to a dashboard by including them in a dashboard URL. Passing parameter values within the URL will apply a filter in the dashboard on the initial load itself.

To set a dashboard parameter within a URL, use the following syntax:

<b>For single parameter:</b>

`<parameter1>=<value>`

<b>For multiple parameter:</b>

`<parameter1>=<value>&&<parameter>=<value>`

Using the syntax, you can pass the dashboard parameter value in the URL as follows.

`https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?&&<parameter1>=<value1>&&<parameter2>=<value2>`

![Dashboard parameter used in URL filter](/static/assets/cloud/working-with-datasource/dashboard-parameter/images/dashboard-parameter-for-url-update.png)

![Dashboard parameter in URl update before](/static/assets/cloud/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-before.png)

![Dashboard parameter in URl update after](/static/assets/cloud/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-after.png)

## Passing Stored Procedure parameter with URL using the Dashboard Parameter

You can pass the stored procedure parameters to a dashboard by including them in a dashboard URL. Passing parameter values within the URL will apply a filter in the dashboard on the initial load itself. 

To set a dashboard parameter within a URL, use the following syntax:

<b>For single parameter:</b>

`@<parameter>=<value>`

<b>For multiple parameter:</b>

`@<parameter1>=<value1>&&@<parameter2>=<value2>`

<b>For dashboard parameter:</b>

`@<parameter>=<@{{:DashboardParameterName}}>`

### Supported Functions

•	IN

•	NOTIN

`IN` and `NOTIN` operators are supported for [URL Filter](../../working-with-dashboards/preview-dashboard/urlparameters.md) in dashboard parameter.

> **NOTE:**  Parameter name is case sensitive.
### Supported Data types

•	Character and String

•	Numeric

•	Date and time

•	Binary

For date type parameter values, you can provide the server (where the query will be executed) supported date format as a parameter value.

To append your query string with URL, add a prefix (?) to the query string. If (?) is already there in the URL, add a prefix (&&) to the query string.

 `https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?@<parameter1>=<value1>&&@<parameter2>=<value2>`

![Stored procedure URL parameter](/static/assets/cloud/working-with-datasource/dashboard-parameter/images/stored-procedure-url-parameter.png)

Using the dashboard parameter syntax, you can pass the dashboard parameter value in the URL as follows.

![Dashboard parametr in URL parameter](/static/assets/cloud/working-with-datasource/dashboard-parameter/images/dashboardparameter-in-url.png)