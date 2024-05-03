---
layout: post
title: Virtual Scrolling with Widgets - Embedded BI | Bold BI Docs
description: This page describes the Virtual Scrolling technique utilized by the widgets in Bold BI Embedded dashboards.
platform: Bold BI
documentation: ug
---

# Virtual Scrolling

Virtual scrolling enhances the user experience within the dashboard interface without compromising performance. Initially, when dealing with large amounts of data, widgets render only limited datasets. As the user scrolls, virtual scrolling dynamically fetches and displays relevant portions of data, optimizing memory usage and rendering performance by loading and rendering only the data currently visible to the user.

## Supported Widgets for Virtual Scrolling

Several widgets in Bold BI utilize the virtual scrolling technique to improve performance and optimize resource usage. Widgets that support virtual scrolling include:

- Grid
- Chart
- Combo Box
- List Box 

> **Note:** Pivot Grid is excluded from the virtual scrolling technique, as it is limited to 50,000 records.

Virtual scrolling relies on the page size of the widget and occurs only when the page size is less than the total number of data records.

![Grid1](/static/assets/visualizing-data/working-with-widgets/images/grid.gif)

![Chart1](/static/assets/visualizing-data/working-with-widgets/images/chart.gif)

![ComboBox1](/static/assets/visualizing-data/working-with-widgets/images/combo-box.gif)

![ListBox1](/static/assets/visualizing-data/working-with-widgets/images/list-box.gif)

## Reducing the Page Size

To reduce the page size, adjust the settings in the Property Panel. For Charts, the default page size is 200 records under Basic Settings, while for Grids, it's 100 records. Grid's page size settings are accessible under Page Settings, as illustrated below:

![Chart Page Size](/static/assets/visualizing-data/working-with-widgets/images/Chart-page-size.png)
![Grid Page Size](/static/assets/visualizing-data/working-with-widgets/images/grid-page-size.png)

> **Note:** There is no option to adjust the page size for Combo Box and List Box widgets, and it is not possible to disable the virtual scrolling for these widgets.

## Disabling Virtual Scrolling

In Bold BI, the virtual scrolling technique is enabled by default. However, if the user prefers not to utilize this technique, they must ensure that the user data is not infinite. Additionally, increasing the widget's page size beyond the total number of data records will disable virtual scrolling.