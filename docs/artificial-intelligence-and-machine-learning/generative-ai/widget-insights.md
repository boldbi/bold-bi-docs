---
layout: post
title: A Comprehensive Guide to Widget Insights  | Bold BI Docs
description: Learn how to make the most of widget insights on your dashboard for better data visualization and decision-making.
canonical: "/artificial-intelligence-and-machine-learning/generative-ai/widget-insights/"
platform: bold-bi
documentation: ug
---
 
# Using the Widget Insight in Dashboard
 
To utilize the widget summary feature, you need to configure the AI. Please consult the  [Configure AI Feature Guide](/artificial-intelligence-and-machine-learning/configure-ai/) for comprehensive instructions.
 
## Managing Widget Insight Visibility
 
- You can control the visibility of the widget insights by using the Enable/Disable `Enable Summarize` checkbox located in the Properties Panel, specifically under the `AI-Powered Summarization` section.
 
![Widget-insight-Property](/static/assets/artificial-intelligence-and-machine-learning/images/generative-ai/widget-insights/widget-insight-property.png)
 
- To modify this setting, simply select the widget and click the property panel icon to toggle the checkbox. By default, this option is enabled, which means widget summaries will be displayed in both View Mode and Preview Mode. If you prefer to hide the widget insights, just uncheck the box to disable it for the selected widget.
 
>**NOTE** : The following widgets are not supported for widget insights: Combined widget, Image widget, RTE widget, Line widget, Button widget, Tab widget, Combo Box, PoP, List Box, Text Filter, Range Slider, Date Picker, Range Navigator, Number Card, and KPI Card.
 
 
## How to View and Use Widget Insights
 
1. To enter Preview Mode, simply click the preview icon in the top-left corner of the designer dashboard.
 
2. Located the Widget Summary icon by hovering over the widget header, then click on it to view the insights.

![Widget-insight-Icon](/static/assets/artificial-intelligence-and-machine-learning/images/generative-ai/widget-insights/widget-insight-icon.png)
 
![Widget-insight](/static/assets/artificial-intelligence-and-machine-learning/images/generative-ai/widget-insights/widget-insight.png)
 
3. The widget insight provides trends, anomalies, and statistical data related to the widget. These summaries help you easily understand the widget's data.
 
4. In order to see widget summaries in View Mode, you must first publish the dashboard. The publish option can be found in the top-left corner of the dashboard designer.
 
5. After publishing the dashboard, find the Widget Summary icon by hovering the widget header and click on it to access the insights similar to the preview mode.
 
6. Once a widget insight is generated, you can give your feedback by clicking the `like` or `dislike` buttons found in the footer of the insight summary container.
 
7. You can also `copy` your text for your reference by clicking the copy icon.
 
## How data handled for generate widget insight
 
To create a widget summary, the following information is used: axis data points, column names, widget title, and widget type. This data is processed using AI to generate insights for the widget.