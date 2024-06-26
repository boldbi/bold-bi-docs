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

1. Refer to the instructions on [Connecting to a data source](/working-with-data-sources/creating-a-new-data-source/) for a successful connection.

2. Drag and drop the table and click `Save` to save the data source, as shown in the image below.

	![Drag table](/static/assets/faq/images/median-table.png)

3. Drag and drop any [Widget](/visualizing-data/visualization-widgets/) and then click on the `Assign data` section.
	![Grid widget](/static/assets/faq/images/median-assign.png)

4. Assign values to the widget as shown in the following image.

    ![Assign values to widget](/static/assets/faq/images/median-assigndata.png#max-width=45%)

5. Click the `Settings` button and then select `Median` aggregation to retrieve the median value for the chosen column.
	![Assign Median aggregation](/static/assets/faq/images/median-button.png#max-width=45%)

6. Now you are able to view the median result of the measure column.
	![View Median result](/static/assets/faq/images/median-result.png)

## Limitations
We cannot use the median function with expressions created using multiple columns. It is supported for expressions created from a single column.