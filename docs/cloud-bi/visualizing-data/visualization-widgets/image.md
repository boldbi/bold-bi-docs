---
layout: post
title: Visualizing Images – Cloud BI | Bold BI Documentation
description: Learn how to create an Image visual in Bold BI Cloud dashboard, configure data field and other settings.
platform: bold-bi
control: Image
documentation: ug
---

# Image

Image allows you to display a both static and dynamic image within defined mode (default, fill, uniform and uniform to fill). 

![Image Widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/image-widget.png)

You may add image of supported formats including, BMP, JPG, JPEG, GIF, EMF, JFIF, JPE, PNG, RLE, TIF, TIFF, WMF, DIB, and ICO from your local machine or column binding to the image widget.

The following steps represents to add Image to dashboard.

Drag and drop the image widget into the Canvas.

## How to configure the data to Image widget?

You may browse the image or bind a datasource column that contains the image URL. 

You may assign a data by clicking **Assign Data** button. 

![Assign Data](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/assign-data.png)

 Drag and drop image column from dimension section to Column(s) section.

![Configure widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/configure-widget.png)

You can format the image for better illustration of the view that you require, through the settings available in Properties pane.

### Name

This allows you to set title for this Image widget.

![Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/title.png)

### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/basic-settings.png)

### Mode

You can customize the image showcase style through `Mode` setting in the Design Tools pane or properties pane.

#### Default

The image will be displayed in its original size.

![Default](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/image-widget.png)

#### Fill

The image will be filled in the available space.

![Fill](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/fill.png)

#### Uniform to Fill

The image will be uniformly occupying the space but gets clipped, if it is larger than control

![Uniform to Fill](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/uniform-to-fill.png)

#### Uniform 

The image sizes proportionally (without clipping) to best fit to the widget area.

![Uniform](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/uniform.png)

### Image Source

### Local

 You can browse the image from your local system.

![Local](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/local-image.png)

> **NOTE:** Image that having special characters in the file name is not supported in Dashboard Application.

### URL

You can give the url of the image which must be a valid url.

Ex: http://flagpedia.net/data/flags/normal/in.png

![URL](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/url-image.png)

### Parameterized URL

Parameterized URL images can be bind through this option and we can also able to add different columns value as a placeholder through the placeholder textbox.

![Parameterized URL](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/parameterized-url.png)

Forming URI through placeholder

EX: http://flagpedia.net/data/flags/normal/{0}.png

![Placeholder](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/bind-to-check-placeholder.png)

![placeholder](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/placeholder.png)

## Filter Settings

### IgnoreFilterActions

You can ignore the filter actions by enabling IgnoreFilterActions property. Browse Image will not act as a slave widget.

## Container Appearance

### Image Export

You can export the image widget as image.

### PDF Export

You can export the image widget as PDF.