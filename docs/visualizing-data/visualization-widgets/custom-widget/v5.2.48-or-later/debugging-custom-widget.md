---
layout: post
title: How to debug the custom widgets in designer | Bold BI Docs
description: Find the steps to debug the custom widgets using the developer tool in Bold BI Dashboard Designer by navigating inspect element option.
platform: bold-bi
control: Custom Widget
documentation: ug
---

# Debugging the Custom widget through designer
* [Create a new Custom widget](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/debugging-custom-widget/#create-a-custom-widget) 
* [Add debugger in the source file](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/debugging-custom-widget/#add-debugger-in-the-source-file) 
* [Publish the Custom widget](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/create-new-custom-widget/#publish-custom-widget) 
* [Debug the custom widget](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/debugging-custom-widget/#debug-the-custom-widget) 

## create a custom widget 

 Follow the steps mentioned in the [link](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/create-new-custom-widget/#creating-a-new-widget) to create a new custom widget 

## Add debugger in the source file 

 Place the `debugger` in the `src/sourcefile.js` of the custom widget. 

## Publish the custom widget 

 Follow the steps mentioned in the [link](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/create-new-custom-widget/#publish-custom-widget) to publish the custom widget.

## Debug the custom widget 

 Navigate to the Bold BI Designer. 

 Right click on the browser and click on `Inspect`.

 Now drag and drop the custom widget in the designer to debug the code as in the image below:

 ![Custom_widget debugging](/static/assets/visualizing-data/visualization-widgets/images/custom-widget/Customwidget_Debugger_Updated.png)

 Now we can debug the init and update methods in the custom widget.  

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

