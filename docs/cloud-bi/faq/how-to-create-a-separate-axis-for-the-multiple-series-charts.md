---
layout: post
title: Add a secondary axis in Column chart - Cloud BI | Bold BI Docs
description: Learn how to add a secondary axis in column chart to showcase multiple series in separate axes using Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# How to create a separate axis for the multiple series charts?

The column chart allows you to create a separate axis for the multiple series. 

Please follow these steps to create a separate axis in the column chart.

  * Drag and Drop the column chart widget and bind the multiple measure values in it.

   ![Column Chart](/static/assets/cloud/faq/images/multiple-series-in-column-chart.png)
  
  * Go to the Properties panel, Click the `Change` button in the `Chart Type and Axis` property. By default, the secondary axis option is not checked.

   ![Properties Panel](/static/assets/cloud/faq/images/click-the-change-button.png)  

   ![Chart Type And Axis Dialog](/static/assets/cloud/faq/images/chart-type-and-axis-settings-dialog-default-view.png)

  * Enable the `Secondary axis` option by selecting the checkbox and change the column axis chart type to `line` then click the `OK` button.

   ![Enable Secondary Axis](/static/assets/cloud/faq/images/chart-type-and-axis-dialog.png)

  * Once the `Ok` button is clicked, the column chart will show the separate axis for the target column.

   ![Secondary axis in Column Chart](/static/assets/cloud/faq/images/secondary-axis-in-column-chart.png)

> **NOTE:** `Combination chart` also allows the user a create a separate axis for the multiple series charts. Please refer to this <a href="https://help.boldbi.com/cloud-bi/visualizing-data/visualization-widgets/combo-chart/">link</a> for reference.