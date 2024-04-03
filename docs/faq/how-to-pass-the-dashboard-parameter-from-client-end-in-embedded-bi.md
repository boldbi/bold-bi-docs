---
layout: post
title: How to pass dashboard parameter in JavaScript | Bold BI Docs
description: This page demonstrates how to pass and update the dashboard filter parameter(s) from client-end using JavaScript code for your embedded dashboard application.
platform: bold-bi
documentation: ug
---
# How to pass dashboard parameter from client-end in Embedded BI

## How to pass the filter parameters in Embedded BI

You can pass the javascript based dashboard parameters from the client-side itself. 

If you want to pass the dashboard parameters when loading the dashboard, you can use the [filterParameters](/embedding-options/embedding-sdk/embedding-api-reference/members/#filterparameters).

Here, your Dashboard parameter is named as "City", you have to pass the value as shown below inside the <b>renderDashboard</b> function,

![parameter code](/static/assets/faq/images/parameter-code.png)

Please find the filterParameters output dashboard as follows.

![parameter dashboard1](/static/assets/faq/images/parameter-dashboard1.png)

This could be changed depending on the [mode](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/#modes) (Literal/List) you configured in the dashboard parameter.

## How to update the filter parameters in Embedded BI

You can also use the following method to apply or [update filter parameter](/embedding-options/embedding-sdk/embedding-api-reference/methods/#updatefilters), after the dashboard has been rendered.

Make sure you provide the correct casing for the dashboard parameter, as it is case-sensitive.

**Example** 
   
```js
var instance = BoldBI.getInstance("dashboard"); //dashboard -> embed container id
instance.updateFilters("City=SOCORRO");   
```

Please find the following update filter parameters output dashboard.

![parameter dashboard3](/static/assets/faq/images/parameter-dashboard3.png)