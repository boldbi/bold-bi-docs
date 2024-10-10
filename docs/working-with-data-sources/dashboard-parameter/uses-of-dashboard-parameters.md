---
layout: post
title: Uses of Dashboard Parameters - Embedded BI | Bold BI Learning
description: This section describes about how to use the dashboard parameters in dashboards using Bold BI Embedded. 
platform: bold-bi
documentation: ug
---

# Uses of Dashboard parameters

Dashboard parameters can be utilized in expressions, stored procedures, and custom queries.

## Expression

Select the parameter from the `Column Settings` or use the following syntax to create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) with a dashboard parameter.

 Syntax: `@{{:ParameterName}}`

 For a `range` type parameter, the syntax should be provided as follows:

 Syntax:`@{{:ParameterName.START}}` or `@{{:ParameterName.END}}`

![Use dashboard parameter in expression column](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-expression.png)

> **NOTE:** Those parameters, which are created using the [list mode](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/#list-mode), will not be used in expression.

## Stored Procedure

Choose the parameter option from the [stored procedure](/working-with-data-sources/connecting-to-stored-procedures/) parameter window. Available parameters will be listed in the value drop-down box.

![Use dashboard parameter in stored procedure](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-SP.png)

You can use the range type parameters as follows.

![Range type parameter in stored procedure](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-SP-range.png)

## Data Filter

You can use parameters in the `Data filter` to filter records. To configure the `Data filter`, refer to the [configuring data filters](/working-with-data-sources/data-modeling/configuring-data-filters/#parameters) section.

## Custom Query

Type `@` to list the available parameters. You can use it anywhere in the query editor window.

Another way is, users can manually type the required parameter in code view using the syntax.

Syntax: `@{{:ParameterName}}`

 For range type parameter, the syntax should be provided as follows:

Syntax: `@{{:ParameterName.START}}` or `@{{:ParameterName.END}}`

![Use dashboard parameter in code view](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-code-view.png)

## Conditions to use list-mode type with multiple selected values

`Expression`: You can use the **CONCAT** function.

Example: `CONCAT([Parameter1])`

`Stored Procedure`:  You should create a stored procedure using the logic trick. Because SQL stored procedure accepts only a single object as a parameter. However, you can pass multiple values as comma-separated single strings to the parameter by a trick.

`Custom Query`: You can use this dashboard parameter with multiple values only using IN query.

Example: `Select * from Table_Name where ColumnName in (@{{:ParameterName}})`

### Data source Connection window

Utilize the dashboard parameter within the Data Source Connection interface to set up the Dynamic Connection String interface for the External API detailed as follows:

### SQL Data Sources Configuration
Configure the following properties:

1. Username.
2. Password.
3. Servername.
4. Port.
5. Database.
6. Maxrows.
7. CommandTimeout.
8. AdvancedSettings.

![sqlCustom](/static/assets/working-with-datasource/dashboard-parameter/images/msSql-dashboard-parameter.png#max-width=52%)

### External API Dynamic Connection String Interface
Configure the following properties:

1. URL.
2. Header(s).
3. Username.
4. Password.

![Dynamic connection](/static/assets/working-with-datasource/dashboard-parameter/images/dynamicconnection.png)

We have implemented IntelliSense support for the dashboard parameter, allowing users to type '@' within the All SQL data source properties to display the dashboard parameter.

![Intellisense Support](/static/assets/working-with-datasource/dashboard-parameter/images/intellisense.png)

>**Note** Dashboard parameter support is not available for connections using SSH or SSL modes.

### WEB DataSources
Configure the following properties:

1. URL.
2. Header(s).
3. Parameter(s).
4. Raw.
5. Username.
6. Password.
7. Servername.
8. Database.
9. APItokenbearer.
10. Apikey.
11. Hostname.
12. Authtoken.
13. Accesstoken.
14. Authsecret.
15. Authid.
16. Accountid.
17. AppId.
18. Authentication.
19. Sitetoken.
20. Chainid.
21. Cloudtoken.

![WebCustom](/static/assets/working-with-datasource/dashboard-parameter/images/webds-dashboard-parameter.png#max-width=52%)

We have implemented IntelliSense support for the dashboard parameter, allowing users to type `@` within the web data source properties to display the dashboard parameter.

![Intellisense Support](/static/assets/working-with-datasource/dashboard-parameter/images/webintellisense.png)

>**Note** Dashboard parameter support has been incorporated for both internal and external site publishing of data sources. Additionally, we have enabled features for downloading and uploading.

When uploading a dashboard to a different site with a dashboard parameter, ensure that you create the same dashboard parameter name and its corresponding value.

Use the following syntax for the dashboard parameter.

Syntax: `@{{:ParameterName}}`

When a simple dashboard is created here, data is retrieved based on the condition for column `id` as given in the dashboard parameter sectors.

>**Note**: The dashboard parameters can be used for the creation of all data sources. Please refer to this [Datasource connector page](/working-with-data-sources/data-connectors/) to create a data source using a **dashboard parameter**.

## Widgets

Dashboard parameters can be directly assigned to the following widgets from the parameters section.
- [Combo Box](/visualizing-data/visualization-widgets/combo-box/)
- [Date Picker](/visualizing-data/visualization-widgets/date-picker/)

For other widgets, we can create [expressions](/working-with-data-sources/dashboard-parameter/uses-of-dashboard-parameters/#expression) using the dashboard parameter and assign them to any widgets.
