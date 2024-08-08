---
layout: post
title: Dashboard Performance Metrics – Embedded BI | Bold BI Docs
description: Learn how to view detailed performance metrics for overall layout rendering and the processing times for individual widgets of a Dashboard.
platform: bold-bi
documentation: ug
---

# Dashboard Performance Metrics

The Dashboard Performance Metrics pop-up allows you to view detailed performance metrics for overall layout rendering and parsing times as well as the processing times for individual widgets. The `Metrics` option is available in the drop-down menu located in the upper right corner of the dashboard title section.

![Metrics Option](/static/assets/working-with-dashboards/images/mertics-option.png)

By clicking `Metrics` option, Performance Metrics pop-up will be displayed as follows.

![Metrics Pop-Up](/static/assets/working-with-dashboards/images/metrics-pop-up.png)

## Mobile View Mode

For the mobile view mode, the option is included as shown below.

![Metrics Option in Mobile View](/static/assets/working-with-dashboards/images/mobile-view-mode-metrics.png)

## Performance Metrics Details

### Parsing time

Parsing time is measured from the initial load until the successful completion of the load dashboard API method call.

### Layout time

Layout time is calculated from the beginning of the layout render action until just before the widget data fetching call action.

### Widget Processing Metrics

In this section, you can view the processing time for each widget. The overall widget processing time is calculated as the sum of data fetching and rendering time. The total widget processing time will be displayed alongside the widget name.

![Widget Processing Time](/static/assets/working-with-dashboards/images/widget-processing-time.png)

#### Data Fetching

Data Fetching time includes querying and data processing time of a widget.

#### Querying

This displays the querying time at the moment of a particular widget’s data fetching.

#### Rendering

Rendering time is measured from the completion of the data fetching action to the point when the data is bound and displayed in the user interface.

>NOTE: The metrics data may vary depending on the data bindings and server responses, and it may also be affected by system performance.

