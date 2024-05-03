---
layout: post
title: How to create custom sort order in dashboard widget |Bold BI Docs 
description: Learn the steps for How to sort a column with custom order and how to visualize the data in dashboard widget using in Bold BI designer.
canonical: "/faq/how-to-create-custom-sort-order-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to create custom sort order in Bold BI

Sorting is the process of applying a certain order to a collection of items. BoldBI allows you to customize the [sorting](/visualizing-data/working-with-widgets/advanced-sorting/) behavior of dimension fields in each widget. You can [order](/visualizing-data/working-with-widgets/advanced-sorting/) them based on `alphabet or value`, `data source order`, or `field`.

Sometimes you may not prefer the existing order and may want to sort it in a different way. In such cases, you can always choose to custom sort your data. While this function is not a default feature in Bold BI, you can work around this limitation by creating a custom sort order and sorting the data in any way you choose.

Before proceeding with this example, please consider that Bold BI is connected to an `MS SQL data source` and the table named `ORDER DETAILS` has been added, as shown in the following screenshot.

![Order Details datasource](/static/assets/faq/images/order-details-datasource.png)

In this example, we have configured a column chart to show the details of advance and order amounts for the respective months as shown below:

![Order Details dashboard](/static/assets/faq/images/order-details-dashboard.png)

Here, we have March through July formatted as text and not specific to dates. Therefore, it will not be sorted from January through December. You can see that in our sort, it is organized alphabetically by the first letter of the month. This is because it does not recognize this as actual month data. By creating a custom sort order function, you can control all of that.

First, you need to create an [expression](/working-with-data-sources/data-modeling/configuring-expression-columns/) column like the one below to contain your sorting logic. 

**Sample Expression:** `IF([ORDER_MONTH] ='MAR', 1, IF([ORDER_MONTH] ='APR', 2, IF([ORDER_MONTH] ='MAY', 3, IF([ORDER_MONTH] ='JUN',4, IF([ORDER_MONTH] ='JUL', 5, 0)))))`

Once the `Expression` is created, sort the dimension values based on this expression. Follow the steps below to sort the `dimension` field based on the expression to achieve your requirement. 

1. Click on the Settings icon in the `dimension` field that needs to be sorted, and select the `Sort` option from the context menu as shown below.

     ![Sort Icon](/static/assets/faq/images/sort-icon.png)

2. The `Advanced Sorting` Options dialog will open as shown in the following image.
     
     ![Advanced sorting dialogue](/static/assets/faq/images/advanced-sorting.png)

3. Configure field-based `sorting` to order the data based on the `Min` of the expression field.

     ![Field based sorting configuration](/static/assets/faq/images/field-based-sorting.png)

4. After clicking the `Apply` option, you can see the sorted column from March to July.
    
     ![Custom sort dashboard](/static/assets/faq/images/custom-sorted-dashboard.png)


## Related links     

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Sort data using custom list](https://support.microsoft.com/en-us/office/sort-data-using-a-custom-list-cba3d67a-c5cb-406f-9b14-a02205834d72)

[Custom Sort Order in Excel](https://www.excel-easy.com/examples/custom-sort-order.html)
