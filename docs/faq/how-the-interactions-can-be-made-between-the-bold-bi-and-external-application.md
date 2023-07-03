---
layout: post
title: Dashboard Interaction with Embedded Application | Bold BI Docs
description: Learn how to make Bold BI dashboard along with its widgets and the embedded application interact with each other using JavaScript APIs for embedding.
platform: bold-bi
documentation: ug
---

# How the interactions can be made between the Bold BI and external application?

In Bold BI, you can control the overall interaction between the dashboard widgets using the events. You can manipulate the dashboard widget elements on the client-side and can control their behavior also. Consider the following embedding sample, the Chart, and Cards controls are Bold BI widget controls and the other controls are JS controls. 

   ![Sample Dashboard](/static/assets/faq/images/sample-dashboard-for-seamless-interaction.png)

The above dashboard is available in this <a href="https://demo-interaction.boldbi.com/embed">link</a>.

JS controls data are loaded from the same database, which we used for the Bold BI widgets controls.

## Sample Working details:

1.	When we choose any value from the JS filter control except the Work Order number filter, Bold BI Card widgets data will be changed accordingly. 
2.	When we choose any value from the `Work Order Number` filter and click the `Work Order Number` column data from the Grid JS control, the Bold BI chart widget data will be changed accordingly.
3.	When we choose the value from the `Organization and Work Order Number` filters value, the Grid JS control data will be changed accordingly.
4.	If we change the organization value, the values of Work Order Number, Crew, and Zone will be changed automatically with the current range. The values will be changed according to this hierarchical order - `Organization -> Work Order Number -> Crew -> Zone`.
5.	We show the applied filter values as a Breadcrumb like in the following image.
![Apply filtering in the values](/static/assets/faq/images/show-filtered-values-in-breadcrumb-structure.png)
6.	Using this Breadcrumb, we can remove the child level of hierarchy filter.
7.	We can also show the filter overview options like in the following image. Using this, we can remove the particular filter value data.
![Show the Filter overview option](/static/assets/faq/images/filter-overview-option.png)
8. If we click any column from the Bold BI chart widget, it will navigate to the new page to render the Grid JS control with the clicked column value. In this case, we are able to pass the context values from the Bold BI widgets to external applications. And also, we can filter the data based on the applied filters and can show the filters data as follows,
![Linking the values in bar chart](/static/assets/faq/images/linking-in-bar-chart.png)
Also, you can refer to the this <a href='https://samples.boldbi.com/embed/javascript/user-interaction/url-linking'>Sample Browser</a>  to know more about the linking events to get the context values to pass to the external application.
9.	If we click the `Organization` data column in the grid, it will navigate to the home page with the existing and newly applied filter, and the home page sample data will render based on all filters.
10. If we click the `Home` or any value from the second-page breadcrumb, the filter values are removed in the home page based on the clicked context value.

