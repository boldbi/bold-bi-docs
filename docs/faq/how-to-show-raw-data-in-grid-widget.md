---
layout: post
title: How to show raw data in grid widget | Bold BI Docs
description: This page provides instructions on how to display raw data in the Bold BI application without grouping the columns.
platform: bold-bi
documentation: ug
---

# How to Show the Raw Data in the Grid widget

The Bold BI Application supports **displaying the data without grouping** the columns. 

Follow these steps to meet this requirement:

1. Drag and drop the columns in the Measures and Dimensions field.

![Drag and drop table in measure and dimention field](/static/assets/faq/images/drag-and-drop-columns.png)

2. The values of the selected columns are grouped before selecting the option to display raw data in the Grid Widget.

![grouped columns in grid widget](/static/assets/faq/images/group-columns-in-grid-widget.png)

3. Select the `properties` and enable the `Show Raw Data` option in the `BasicSettings`.

![enable show data option](/static/assets/faq/images/enable-show-rawdata-option.png)

4. The Grid widget displays columns of ungrouped raw data.

![ungrouped columns in grid widget](/static/assets/faq/images/ungrouped-columns.png)

>**Note:** When selecting the raw data option, the aggregation is eliminated, and the data is shown.