---
layout: post
title: Change Dashboard Parameter value in URL - Embedded BI | Bold BI
description: This section describes about how to change the dashboard parameter value in Bold BI Embedded using URL. 
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

![Dashboard parameter used in URL filter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-for-url-update.png)

![Dashboard parameter in URl update before](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-before.png)

![Dashboard parameter in URl update after](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-after.png)

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

For date type parameter values, you can provide the server (where the query will be executed) supported date format as parameter value.

To append your query string with URL, add a prefix (?) to the query string. If (?) is already there in the URL, add a prefix (&&) to the query string.

 `https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?@<parameter1>=<value1>&&@<parameter2>=<value2>`

![Stored procedure URL parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/stored-procedure-url-parameter.png)

Using the dashboard parameter syntax, you can pass the dashboard parameter value in URL as follows.

![Dashboard parametr in URL parameter](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/dashboardparameter-in-url.png)

## Default parameters

Default parameters enhances to filter the data based on the current user. It can be passed in custom query and web URL. Currently, the default parameter is supported with,

•   Full name

•   Email

For the current user, use the following syntax to filter the data based on full name.

Syntax: `@{{:CURRENTUSER.FULLNAME}}`

For the current user, use the following syntax to filter the data based on email.

Syntax: `@{{:CURRENTUSER.EMAIL}}`


### Default parameter in custom query

Include the default parameter by pressing the key `Shift+2`, to list the default parameter along with the available user defined parameters. You can use it anywhere in query editor window.

Another way is, user can manually type the default parameter in code view using the following syntax.

![Use default parameter in custom query](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-code-view-listing.png)

### Default parameter in web URL

You can include the default parameter in the web URL with live connection using the following syntax.

![Use default parameter in web URL](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-web-url.png)

Here, Sales Analysis Dashboard is rendered for two users with full name **ALFKI** and **BERGS**. The default parameter is applied as follows.

![Use default parameter in Sales Analysis Dashboard](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-code-view.png)

For the user **ALFKI**, the dashboard will be rendered as follows.

![Default parameter in Sales Analysis for ALFKI user](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-sample-ALFKI.png)

For the user **BERGS**, the dashboard will be rendered as follows.

![Default parameter in Sales Analysis for BERGS user](/static/assets/embedded/working-with-datasource/dashboard-parameter/images/default-parameter-sample-BERGS.png)