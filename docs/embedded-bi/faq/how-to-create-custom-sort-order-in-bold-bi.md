---
layout: post
title: How to create custom sort order in dashboard widget |Bold BI Docs 
description: Learn the steps for How to sort a column with custom order and how to visualize the data in dashboard widget using in Bold BI designer.
canonical: "/embedded-bi/faq/how-to-create-custom-sort-order-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to create custom sort order in Bold BI

Sorting is the process of applying some order to a collection of items. BoldBI allows you to customize the [sorting](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/) behavior of dimension fields in each widget. You can [order](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/) them based on `alphabet or value`, `data source order`, or `field`.

Sometimes you do not prefer the existing order and you want to sort it in a different order, then you can always choose to Custom Sort your data. Although this is not a default function within Bold BI, you can work around this limitation with creating custom sort order and sort data any way you choose.

To proceeding with this example, consider Bold BI is connected with `MS SQL data source` and the table named `ORDER DETAILS` is added as shown in the following screenshot.

![Order Details datasource](/static/assets/embedded/faq/images/order-details-datasource.png)

In this example, we have configured a column chart to show the details of advance and order amounts for the respective months as below:

![Order Details dashboard](/static/assets/embedded/faq/images/order-details-dashboard.png)

Here, we have March through July and it's formatted as text and does not date specific. So, it would not be sorted January through December. You can see in our sort it's sorted alphabetically by the first letter of the month. That's because it doesn't recognize this as actual month data. From, creating custom sort order function, you can control all of that.

First, you need to create an [expression](/embedded-bi/working-with-data-source/transforming-data/configuring-expression-columns/) column like below to house your sorting logic. 

**Sample Expression:** `IF([ORDER_MONTH] ='MAR', 1, IF([ORDER_MONTH] ='APR', 2, IF([ORDER_MONTH] ='MAY', 3, IF([ORDER_MONTH] ='JUN',4, IF([ORDER_MONTH] ='JUL', 5, 0)))))`

Once the `Expression` is created, Sort the dimension value based on this expression. follow the below steps for sort the `dimension` field based on the Expression to achieve your requirement. 

1. Click the Settings icon available in the `dimension` field which needs to be sort and select `Sort` option from the context menu like below.

     ![Sort Icon](/static/assets/embedded/faq/images/sort-icon.png)

2. The `Advanced Sorting` Options dialog will open as shown in the following image.
     
     ![Advanced sorting dialogue](/static/assets/embedded/faq/images/advanced-sorting.png)

3. Configure Field based `sorting` to Orders the data based on the `Min` of the Expression field.

     ![Field based sorting configuration](/static/assets/embedded/faq/images/field-based-sorting.png)

4. After click `Apply` option and you can see the sorted column March to July.
    
     ![Custom sort dashboard](/static/assets/embedded/faq/images/custom-sorted-dashboard.png)


## Related links     

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Sort data using custom list](https://support.microsoft.com/en-us/office/sort-data-using-a-custom-list-cba3d67a-c5cb-406f-9b14-a02205834d72)

[Custom Sort Order in Excel](https://www.excel-easy.com/examples/custom-sort-order.html)
