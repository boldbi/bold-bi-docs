---
layout: post
title: How to use Median aggregation in Bold BI | Bold BI Docs
description: Learn how to use the median aggregation for aggregating the results in dashboard designer in Bold BI.
platform: bold-bi
documentation: ug
---
# How to use Median aggregation in Bold BI

Bold BI application allows you to use Median aggregation by following these steps:

## Steps to use the Median aggregation in Bold BI

1. Refer to [Connecting to a data source](/working-with-data-source/creating-a-new-data-source/) for successful connection.

2. Drag and drop the table and click `Save` to save the data source as shown in the below image.

	![Drag table](/static/assets/faq/images/median-table.png)

3. Drag and drop any [Widget](/visualizing-data/visualization-widgets/) and click on the `Assign data` section.
	![Grid widget](/static/assets/faq/images/median-assign.png)

4. Assign values to the widget as shown in the following image.

    ![Assign values to widget](/static/assets/faq/images/median-assigndata.png#max-width=45%)

5. Click `Setting` button and click `Median` aggregation to get the median value for the selected column
	![Assign Median aggregation](/static/assets/faq/images/median-button.png#max-width=45%)

6. Now you can able to view the median result of the measure column.
	![View Median result](/static/assets/faq/images/median-result.png)

## Limitations
We cannot use median function with expressions created using multiple columns. It is supported for expressions created from single column.