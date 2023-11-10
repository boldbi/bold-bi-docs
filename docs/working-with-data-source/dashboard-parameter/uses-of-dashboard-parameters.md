---
layout: post
title: Uses of Dashboard Parameters - Embedded BI | Bold BI Learning
description: This section describes about how to use the dashboard parameters in dashboards using Bold BI Embedded. 
platform: bold-bi
documentation: ug
---

# Uses of Dashboard parameters

The dashboard parameters can be used in the expression, stored procedures and custom query.

## Expression

Select the parameter from the `Column Settings` or use the following syntax to create a [expression](/working-with-data-source/transforming-data/configuring-expression-columns/) with dashboard parameter.

 Syntax: `@{{:ParameterName}}`

 For `range` type parameter, syntax should be provided as follows.

 Syntax:`@{{:ParameterName.START}}` or `@{{:ParameterName.END}}`

![Use dashboard parameter in expression column](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-expression.png)

> **NOTE:** Those parameters, which are created using the [list mode](/working-with-data-source/dashboard-parameter/configuring-dashboard-parameters/#list-mode), will not be used in expression.

## Stored Procedure

Choose the parameter option from the [stored procedure](/working-with-data-source/connecting-to-stored-procedures/) parameter window. Available parameter will be listed in value drop-down box.

![Use dashboard parameter in stored procedure](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-in-SP.png)

You can use the range type parameters as follows.

![Range type parameter in stored procedure](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-SP-range.png)

## Data Filter

You can use parameters in the `Data filter` to filter records. To configure the `Data filter`, refer to the [configuring data filters](/working-with-data-source/transforming-data/configuring-data-filters/#parameters) section.

## Custom Query

Type `@` to list the available parameters. You can use it anywhere in the query editor window.

Another way is, user can manually type the required parameter in code view using the syntax.

Syntax: `@{{:ParameterName}}`

 For range type parameter, syntax should be provided as follows.

Syntax: `@{{:ParameterName.START}}` or `@{{:ParameterName.END}}`

![Use dashboard parameter in code view](/static/assets/working-with-datasource/dashboard-parameter/images/dashboard-parameter-code-view.png)

## Conditions to use list-mode type with multiple selected values

`Expression`: You can prefer the **‘CONCAT’** function.

Example: `CONCAT([Parameter1])`

`Stored Procedure`:  You should create a stored procedure using the logic trick. Because SQL stored procedure accepts only a single object as a parameter. However, you can pass multiple values as comma separated single strings to the parameter by a trick.

`Custom Query`: You can use this dashboard parameter with multiple values only using IN query.

Example: `Select * from Table_Name where ColumnName in (@{{:ParameterName}})`