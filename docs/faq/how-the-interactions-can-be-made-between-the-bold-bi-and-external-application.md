---
layout: post
title: Dashboard Interaction with Embedded Application | Bold BI Docs
description: Learn how to make Bold BI dashboard along with its widgets and the embedded application interact with each other using JavaScript APIs for embedding.
platform: bold-bi
documentation: ug
---

# How the interactions can be made between the Bold BI and external application?

In Bold BI, you can control the overall interaction between the dashboard widgets using events. You can manipulate the dashboard widget elements on the client-side and control their behavior as well. In the following embedding sample, the Chart and Cards controls are Bold BI widget controls, while the other controls are JavaScript controls.

   ![Sample Dashboard](/static/assets/faq/images/sample-dashboard-for-seamless-interaction.png)

The above dashboard is available in this [link](https://demo-interaction.boldbi.com/embed)

The JS controls load data from the same database that we used for the Bold BI widgets controls.

## Sample Working details:

1.	When we select any value from the JS filter control other than the Work Order number filter, the data in the Bold BI Card widgets will be updated accordingly.
2.	When we select a value from the `Work Order Number` filter and then click on the data in the `Work Order Number` column of the Grid JS control, the data displayed in the Bold BI chart widget will be updated accordingly.
3.	When we select a value from the `Organization and Work Order Number` filters, the data in the Grid JS control will be updated accordingly.
4.	If we change the organizational value, the values of the Work Order Number, Crew, and Zone will be automatically changed within the current range. The values will be adjusted in the following hierarchical order: `Organization -> Work Order Number -> Crew -> Zone`.
5.	We display the applied filter values as a breadcrumb, as shown in the following image.
![Apply filtering in the values](/static/assets/faq/images/show-filtered-values-in-breadcrumb-structure.png)
6.	By using this Breadcrumb, we can remove the child level of hierarchy filter.
7.	Additionally, we can display the filter overview options, as shown in the following image. This will allow us to eliminate the specific filter value data.
![Show the Filter overview option](/static/assets/faq/images/filter-overview-option.png)
8. If we click on any column in the Bold BI chart widget, it will navigate to a new page where the Grid JS control will render with the value of the clicked column. In this scenario, we can pass the context values from the Bold BI widgets to external applications. Additionally, we can filter the data based on the applied filters and display the filtered data accordingly,
![Linking the values in bar chart](/static/assets/faq/images/linking-in-bar-chart.png)
Also, you can refer to the [Sample Browser](https://samples.boldbi.com/embed/javascript/user-interaction/url-linking) to learn more about linking events to obtain context values to pass to the external application. 
9.	If we click on the `Organization` data column in the grid, it will navigate to the home page with both existing and newly applied filters, and the home page sample data will render based on all filters. 
10. If we click on the `Home` button or any value from the breadcrumb on the second page, the filter values will be removed on the home page based on the clicked context value.

