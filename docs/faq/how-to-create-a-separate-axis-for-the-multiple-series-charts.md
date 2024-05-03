---
layout: post
title: Add a secondary axis in Column chart - Embedded BI | Bold BI Docs
description: Learn how to add a secondary axis in column chart to showcase multiple series in separate axes using Bold BI Embedded.
canonical: "/faq/how-to-create-a-separate-axis-for-the-multiple-series-charts/"
platform: bold-bi
documentation: ug
---

# How to create a separate axis for the multiple series charts?

The column chart allows you to create a separate axis for multiple series. 

Please follow these steps to create a separate axis in the column chart.

  * Drag and drop the column chart widget and bind the multiple measure values to it.

   ![Column Chart](/static/assets/faq/images/multiple-series-in-column-chart.png)
  
  * Go to the Properties panel, click the `Change` button in the `Chart Type and Axis` property. By default, the secondary axis option is not checked.

   ![Properties Panel](/static/assets/faq/images/click-the-change-button.png)  

   ![Chart Type And Axis Dialog](/static/assets/faq/images/chart-type-and-axis-settings-dialog-default-view.png)

  * To enable the `Secondary axis` option, select the checkbox and change the column axis chart type to `line`. Finally, click the `OK` button.

   ![Enable Secondary Axis](/static/assets/faq/images/chart-type-and-axis-dialog.png)

  * Once the `OK` button is clicked, the column chart will display a separate axis for the target column.

   ![Secondary axis in Column Chart](/static/assets/faq/images/secondary-axis-in-column-chart.png)

> **NOTE:** The `combination chart` also allows the user to create a separate axis for the multiple series charts. Please refer to this [link](/visualizing-data/visualization-widgets/combo-chart/) for more information.