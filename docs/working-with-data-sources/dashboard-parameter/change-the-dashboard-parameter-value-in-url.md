---
layout: post
title: Change Dashboard Parameter value in URL - Embedded BI | Bold BI
description: This section describes about how to change the dashboard parameter value in Bold BI Embedded using URL. 
platform: bold-bi
documentation: ug
---

# Change the Dashboard Parameter value in URL

By utilizing dashboard parameters, the user can dynamically change the value of the URLs.

Parameters can be passed to a dashboard by including them in the dashboard URL. Passing parameter values within the URL will apply a filter in the dashboard upon initial load.

To set a dashboard parameter within a URL, use the following syntax:

<b>For single parameter:</b>

`<parameter1>=<value>`

<b>For multiple parameter:</b>

`<parameter1>=<value>&&<parameter>=<value>`

By using the syntax, you can pass the dashboard parameter value in the URL as follows.

`https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?&&<parameter1>=<value1>&&<parameter2>=<value2>`

![Dashboard parameter used in URL filter](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-for-url-update.png)

![Dashboard parameter in URl update before](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-before.png)

![Dashboard parameter in URl update after](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-url-update-after.png)

## Passing Stored Procedure parameter with URL using the Dashboard Parameter

You can pass the stored procedure parameters to a dashboard by including them in the dashboard URL. Passing parameter values within the URL will apply a filter in the dashboard upon the initial load.

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

The `IN` and `NOTIN` operators are supported for the [URL Filter](/working-with-dashboards/preview-dashboard/urlparameters/) in the dashboard parameter.

> **NOTE:**  The parameter name is case sensitive.
### Supported Data types

•	Character and String

•	Numeric

•	Date and time

•	Binary

For date type parameter values, you can provide the supported date format of the server where the query will be executed as the parameter value.

To append your query string to a URL, add a prefix (?) to the query string. If (?) is already present in the URL, add a prefix (&&) to the query string.

 `https://<servername>/dashboards/<dashboardid>/<category>/<dashboardname>?@<parameter1>=<value1>&&@<parameter2>=<value2>`

![Stored procedure URL parameter](/static/assets/working-with-datasource/dashboard-parameter/images/stored-procedure-url-parameter.png)

By using the dashboard parameter syntax, you can pass the dashboard parameter value in the URL as follows.

![Dashboard parametr in URL parameter](/static/assets/working-with-datasource/dashboard-parameter/images/dashboardparameter-in-url.png)

## Default parameters

Default parameters enhance the ability to filter the data based on the current user. They can be passed in a custom query and web URL. Currently, the default parameter is supported with:

<meta charset="utf-8"/>
<table>
    <tbody>
        <tr>
            <td align="center"><b>Name</b></td>
            <td align="center"><b>Syntax</b></td>
        </tr>
        <tr>
            <td align="left">Full Name</td>
            <td align="left">For the current user, use the following syntax to filter the data based on full name.<br><br>@{{:CURRENTUSER.FULLNAME}}
            <br><br></td>
        </tr>
        <tr>
            <td align="left">Email</td>
            <td align="left">For the current user, use the following syntax to filter the data based on email.<br><br>@{{:CURRENTUSER.EMAIL}}
            <br><br></td>
        </tr>
        <tr>
            <td align="left">Site URL</td>
            <td align="left">Use the following Syntax to filter the data based on the site URL.
            <br><br>@{{:CURRENTUSER.SITEURL}}
            <br><br></td>
        </tr>
        <tr>
            <td align="left">Browser Culture</td>
            <td align="left">Use the following Syntax to filter the data based on the browser culture.
            <br><br>@{{:CURRENTUSER.BROWSERCULTURE}}
            <br><br></td>
        </tr>
        <tr>
            <td align="left">Site Identifier</td>
            <td align="left">Use the following Syntax to filter the data based on the site identifier. Site Identifier is not applicable for cloud environment.
            <br><br>@{{:CURRENTUSER.SITEIDENTIFIER}}
            <br><br></td>
        </tr>
    </tbody>
</table>

### Default parameter in custom query

To include the default parameter, press `Shift+2` to list it along with the available user defined parameters. You can use this feature anywhere in the query editor window.

Alternatively, users can manually type the default parameter in the code view using the following syntax.

![Use default parameter in custom query](/static/assets/working-with-datasource/dashboard-parameter/images/default-parameter-code-view-listing.png)

### Default parameter in web URL

You can include the default parameter in the web URL with a live connection using the following syntax.

![Use default parameter in web URL](/static/assets/working-with-datasource/dashboard-parameter/images/default-parameter-web-url.png)

Here, the Sales Analysis Dashboard is rendered for two users with the full names **ALFKI** and **BERGS**. The default parameter is applied as follows.

![Use default parameter in Sales Analysis Dashboard](/static/assets/working-with-datasource/dashboard-parameter/images/default-parameter-code-view.png)

For the user **ALFKI**, the dashboard will be rendered as follows.

![Default parameter in Sales Analysis for ALFKI user](/static/assets/working-with-datasource/dashboard-parameter/images/default-parameter-sample-ALFKI.png)

For the user **BERGS**, the dashboard will be rendered as follows.

![Default parameter in Sales Analysis for BERGS user](/static/assets/working-with-datasource/dashboard-parameter/images/default-parameter-sample-BERGS.png)