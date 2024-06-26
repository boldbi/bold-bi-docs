---
layout: post
title: Sort by Fields in Widgets – Embedded BI | Bold BI Learning
description: Learn how to sort the widget-bounded data based on a field and visualize through Bold BI Embedded dashboard.
canonical: "/visualizing-data/working-with-widgets/advanced-sorting/"
platform: bold-bi
documentation: ug

---

# Sorting

You can customize the sorting behavior of dimension fields in each widget. You can order them based on alphabet or value, data source (default), or field.

## Dimension column

To customize the sorting behavior of dimension fields, drag and drop the `Dimension Field` into the control designer.

Click the `Settings` icon available in the `Columns`, `Rows`, or `Series` section, and select `Sort` from the context menu.

![Custom sort option](/static/assets/visualizing-data/working-with-widgets/images/Custom-sort-option.PNG)

The `Advanced Sorting Options` dialog will open as shown in the following image.

![Custom sort dialog](/static/assets/visualizing-data/working-with-widgets/images/Custom-sort-dialog.PNG)

The options available in the `Advanced Sorting Options` dialog are:

#### Sort order

 * `Ascending`: Displays the sorted results in ascending order.

 * `Descending`: Displays the sorted results in descending order.

#### Sort by

 * `Alphabetic`: Orders the data either in ascending or descending order based on the initial alphabet. You can apply this sorting for more than one string field. Here, the data has been ordered in a hierarchical pattern.

     ![Alphabetic sort](/static/assets/visualizing-data/working-with-widgets/images/Alphabetic-sort.PNG)

 * `Data source`: Places resultant data from the data source on query execution without performing any additional operations such as ascending or descending.

    ![Data source sort](/static/assets/visualizing-data/working-with-widgets/images/Data-source-sort.PNG)

 * `Field`: Orders the data based on the associated values of another measure or dimension field. For example, you can order several countries based on their freight values.

    For example, the sort dialog box shown below is configured to sort the “Ship Name” field based on the sum of the “Freight” measure in ascending order. The results will be displayed in such a way that the “Ship Name” with the lowest “Freight” value is displayed first and the “Ship Name” with the second lowest “Freight” value is displayed second, and so on.
    
    ![Sorting based on measure field](/static/assets/visualizing-data/working-with-widgets/images/sorting-measures.PNG)
    
    ![Grid after sorting](/static/assets/visualizing-data/working-with-widgets/images/sorted-result.PNG)

> **NOTE:**  Advanced sorting is not available for "date" type, "date time" type, raw data, and proportional charts such as pie, doughnut, pyramid, and funnel.
