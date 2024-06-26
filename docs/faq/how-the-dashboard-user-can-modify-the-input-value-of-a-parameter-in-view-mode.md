---
layout: post
title: Modify the parameter input in dashboard view mode | Bold BI Docs
description: This page summarizes how the user, can modify the input value for one or more parameter(s) of a dashboard in view mode of Bold BI application.
platform: bold-bi
documentation: ug
---

# How the dashboard user can modify the input value of a parameter in view mode

The dashboard user can modify the input value of a parameter in view mode using the [Literal](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/#literal-mode) type dashboard parameter support in the Bold BI application.

The following steps will help you achieve this goal:

1. Create the `Literal` type of dashboard parameter with the required data type value as demonstrated.

    ![Create Literal Dashboard Parameter](/static/assets/faq/images/create-literal-dashboard-parameter.png)

2. Create an expression with the created dashboard parameter and save the data source as shown below.

    ![Create Expression with Dashboard Parameter](/static/assets/faq/images/create-expression-with-dashboard-parameter.png)

3. Bind the expression to a Number Card widget as shown.

    ![Configure Number Card with Expression](/static/assets/faq/images/configure-number-card-with-expression.png)

4. In view mode, the widget will display values based on the default value of a parameter, as shown.

    ![Default Value of Param in View mode](/static/assets/faq/images/view-mode-default-value-of-param.png)

5. Change the input value of a parameter in view mode by using the `Dashboard Parameters` pop-up window and clicking the `Apply` button.

    ![Change the Parameter Value](/static/assets/faq/images/change-parameter-value.png)

6. Now, the widget will display values based on the entered value of a parameter.

    ![Widget After Changing Dashboard Parameter Value](/static/assets/faq/images/widget-after-changing-dp-value.png)