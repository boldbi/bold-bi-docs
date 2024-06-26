---
layout: post
title: How to edit & update the existing custom widgets | Bold BI Docs
description: Find the steps to edit the existing custom widgets and update them thorough the widget settings page by using the edit icon in the dashboard or APIs available.
platform: bold-bi
control: Custom Widget
documentation: ug
---

# Editing the existing custom widget 

 To edit or modify the existing custom widget, follow these steps:

  * [Unpack the custom widget](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/editing-existing-custom-widget/#unpack-the-custom-widget)

  * [Modify the widget and pack it to *.bicw file ](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/editing-existing-custom-widget/#modify-the-custom-widget-and-convert-it-to-bicw-file)

  * [Upload the edited widget in the widget settings](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/editing-existing-custom-widget/#upload-the-edited-widget-in-the-widget-settings)
    
> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Unpack the custom widget 
  
 To modify or reconfigure the custom widget, you should unpack the custom widget which is in the *.bicw format.

## Steps to unpack the custom widget

 Rename the extension of the provided ‘.bicw’ to ‘.zip’ as shown in the image below:

  ![Zipped Custom Widget](/static/assets/visualizing-data/visualization-widgets/images/custom-widget/zipped-custom-widget.png)

 Now, right-click on the renamed widget as shown in the image. Click ‘Extract All’ to view the source file.

  ![Extract Custom Widget](/static/assets/visualizing-data/visualization-widgets/images/custom-widget/extract-custom-widget.png)

 You can find the unpacked Sunburst chart custom widget and its source file as shown in the image below.

  ![Unpacked Custom Widget](/static/assets/visualizing-data/visualization-widgets/images/custom-widget/unpacked-custom-widget.png)

## Modify the custom widget and convert it to *.bicw file 

 In the unpacked custom widget, make necessary changes and convert the custom widget to a *.bicw file by following the steps mentioned in the link [here](/visualizing-data/visualization-widgets/custom-widget/v5.2.48-or-later/create-new-custom-widget/#converting-the-widget-to-a-bicw-file).

## Upload the edited widget in the widget settings
 
 You can click on the edit icon as shown in the image below to add the updated custom widget.
  
  ![Edit Icon](/static/assets/visualizing-data/visualization-widgets/images/custom-widget/edit-icon.png)

 > **NOTE:**  The edited custom widget guid ID and the updated custom widget guid ID should be the same. ![Same guid ID for edited Custom Widget](/static/assets/visualizing-data/visualization-widgets/images/custom-widget/same-guid-ID.png)


  