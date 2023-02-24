---
layout: post
title: Modify the parameter input in dashboard view mode | Bold BI Docs
description: This page summarizes how the user, can modify the input value for one or more parameter(s) of a dashboard in view mode of Bold BI application.
platform: bold-bi
documentation: ug
---

# How the dashboard user can modify the input value of a parameter in view mode

The dashboard user can modify input value of a parameter in view mode using the [Literal](https://help.boldbi.com/embedded-bi/working-with-data-source/configuring-dashboard-parameters/#literal-mode) type dashboard parameter support in Bold BI application.

The following steps will help you achieve this:

1. Create the `Literal` type of dashboard parameter with the required data type value as shown

    ![Create Literal Dashboard Parameter](/static/assets/embedded/faq/images/create-literal-dashboard-parameter.png)

2. Create an expression with created dashboard parameter and save the data source as shown in the following.

    ![Create Expression with Dashboard Parameter](/static/assets/embedded/faq/images/create-expression-with-dashboard-parameter.png)

3. Bind the expression in a Number Card widget as shown.

    ![Configure Number Card with Expression](/static/assets/embedded/faq/images/configure-number-card-with-expression.png)

4. In view mode, the widget will show values based on the default value of a parameter as shown.

    ![Default Value of Param in View mode](/static/assets/embedded/faq/images/view-mode-default-value-of-param.png)

5. Change the input value of a parameter in view mode through `Dashboard Parameters` pop-up window and click `Apply` button

    ![Change the Parameter Value](/static/assets/embedded/faq/images/change-parameter-value.png)

6. Now, the widget will show values based on entered value of a parameter

    ![Widget After Changing Dashboard Parameter Value](/static/assets/embedded/faq/images/widget-after-changing-dp-value.png)