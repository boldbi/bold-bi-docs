---
layout: post
title: How to show raw data in grid widget | Bold BI Docs
description: This page provides instructions on how to display raw data in the Bold BI application without grouping the columns.
platform: bold-bi
documentation: ug
---

# How to Show the Raw Data in the Grid widget

The Bold BI Application supports **displaying the data without grouping** the column. 

Follow these steps to achieve this requirement:

1. Drag and drop the columns in the Measures and Dimensions field.

![Drag and drop table in measure and dimention field](/static/assets/embedded/faq/images/drag-and-drop-columns.png)

2. The values of the chosen columns are grouped before choosing the option to display raw data in the Grid Widget.

![grouped columns in grid widget](/static/assets/embedded/faq/images/group-columns-in-grid-widget.png)

3. Select the `properties` and enable the `Show Raw Data` option in the `BasicSettings`.

![enable show data option](/static/assets/embedded/faq/images/enable-show-rawdata-option.png)

4. The Grid widget displays ungrouped columns of the raw data.

![ungrouped columns in grid widget](/static/assets/embedded/faq/images/ungrouped-columns.png)

>**Note:** When choosing the raw data option, the aggregation is removed, and the data is displayed.