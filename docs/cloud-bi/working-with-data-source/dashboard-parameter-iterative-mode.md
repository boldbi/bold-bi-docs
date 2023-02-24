---
layout: post
title: Configure Iterative Mode for Dashboard | Cloud Bold BI Docs
description: This section describes different use cases of dashboard parameter to configure the dashboard is either interactive or non-interactive mode with Bold BI Cloud.
platform: bold-bi
documentation: ug
keywords: Dashboard parameter, dashboard, parameter, parameters, dynamic, configure dashboard parameter, query parameter, iterative.
---

# Dashboard Parameter – Iterative Mode

Iterative mode is a special feature that comes with the dashboard parameter. Iterative mode allows you to call an API iteratively by changing a particular query parameter or endpoint to bring all data into Bold BI. To see how dashboard parameter works, refer to the Configuring Dashboard Parameters.

> **NOTE:**  We are recommending the **Iterative mode** dashboard parameter only for the extract mode. If used in live mode, the dashboard loading performance will be affected based on the number of iterations.

## When to use Dashboard Parameter Iterative Mode?

Bold BI data source allows you to invoke a single API at a time. When connecting a data source in Bold BI, it will extract the data of a particular endpoint that was provided during the connection. But sometimes, it requires calling multiple APIs by just updating the query parameter or endpoint value alone. Here, the iterative mode comes into the play to achieve this. 

The iterative mode can be used only in the following cases,

1.  Call multiple similar endpoints by just updating values such as query parameter, header, and more.

2.  All APIs should return the same schema (Column name and type should be the same for all APIs).

## Use case

Consider a project management software provides an option to manage your project tasks on a sprint basis. You need to get all project information using the API endpoint. But the software allows you to get project IDs alone using the sprint API endpoint.

1.	Sprint API endpoint (It returns all the project ID and sprint metrics).
	
`https://{testapi}/sprint/{sprint_ID}`

2.	Project API endpoint (It return the project details based on ID).	

`https://{testapi}/project/{project_ID}`

Now, you can create a first data source with sprint API which returns project IDs in that sprint. You can configure dashboard parameters in the iterative mode with the project ID column. Using that dashboard parameter, you can simply create another data source with project endpoint to get project details for each project in that sprint. 


## Example

You can use the following API to see how the Dashboard Parameter Iterative mode works. This API returns all users in a single endpoint and also returns specific users based on ID.

`https://reqres.in/api/users`

`https://reqres.in/api/users/{ID}`

1.	Create a Web API data source using the API that returns all the users.
![Create Data Source](/static/assets/cloud/working-with-datasource/dashboard-parameter-iterative-mode/images/create-datasoure-source.png)

2.	Configure a dashboard parameter in the iterative mode using the column **id**.
![Configure Dashboard Paramater](/static/assets/cloud/working-with-datasource/dashboard-parameter-iterative-mode/images/configure-dashboard-parameter.png)
![Configure Dashboard Parameter Iterative Mode](/static/assets/cloud/working-with-datasource/dashboard-parameter-iterative-mode/images/configure-dashboard-parameter-iterative-mode.png)

3.	Now, click to continue to the dashboard and create another data source from the designer page with the dashboard parameter.
![Connect Dashboard Parameter in Designer Page](/static/assets/cloud/working-with-datasource/dashboard-parameter-iterative-mode/images/dashboard-parameter-designer-page.png)

> **NOTE:** You will see only single ID data in the data preview when connecting using the iterative mode dashboard parameter. But all data will gets extracted after a successful connection.

![Dashboard Parameter Preview Table](/static/assets/cloud/working-with-datasource/dashboard-parameter-iterative-mode/images/dashboard-parameter-preview-table.png)

![Dashboard Parameter Data Preview Table](/static/assets/cloud/working-with-datasource/dashboard-parameter-iterative-mode/images/dashboard-parameter-data-preview-table.png)

## Limitation

You cannot use multiple iterative parameters in a single connection. It will throw **Multiple dashboard parameter of list type not supported in Bold BI** error. 
