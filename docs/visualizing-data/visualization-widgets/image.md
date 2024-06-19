---
layout: post
title: Visualizing Images – Embedded BI | Bold BI Documentation
description: Learn how to create an Image visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/image/"
platform: bold-bi
control: Image
documentation: ug
---

# Image

Image allows you to display a both static and dynamic image within defined mode (default, fill, uniform and uniform to fill). 

![Image Widget](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/image-widget.png)

You may add image of supported formats including, BMP, JPG, JPEG, GIF, EMF, JFIF, JPE, PNG, RLE, TIF, TIFF, WMF, DIB, and ICO from your local machine or column binding to the image widget.

The following steps represents to add Image to dashboard:

1.  Drag and drop the image widget into the Canvas.

![Image](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/virtualtable.png)

7.  Click the `Properties` button in the configuration panel. 

![Designer properties](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, the property pane opens.

![Data tab](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/imagedatatab.png)

## How to configure the data to Image widget?

You may browse the image or bind a datasource column that contains the image URL. 

You may assign a data by clicking the **Assign Data** button. 

![Assign Data](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/assign-data.png)

Drag and drop image column from the `dimension` section to `Column` section.

![Configure widget](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/configure-widget.png)

You can format the image for better illustration of the view that you require, through the settings available in Properties pane.

### Name

This allows you to set the `title` for this Image widget.

![Name](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/title.png)

### Basic Settings

![Basic Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/basic-settings.png)

### Mode

You can customize the image showcase style through the `Mode` setting in the Design Tools pane or properties pane.

#### Default

The image will be displayed in its original size.

![Default](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/image-widget.png)

#### Fill

The image will be filled in the available space.

![Fill](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/fill.png)

#### Uniform to Fill

The image will be uniformly occupying the space but gets clipped, if it is larger than control

![Uniform to Fill](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/uniform-to-fill.png)

#### Uniform 

The image sizes proportionally (without clipping) to best fit to the widget area.

![Uniform](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/uniform.png)

### Image Source

### Local

 You can browse the image from your `local` system.

![Local Settings](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/local-image-settings.png)

![Local](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/local-image.png)

> **NOTE:** Image that having special characters in the file name is not supported in Dashboard Application.

### URL

You can give the `URL` of the image which must be a valid URL.

Ex: http://flagpedia.net/data/flags/normal/in.png

![URL](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/url-image.png)

### Parameterized URL

Parameterized URL images can be bind through this option and we can also able to add different columns value as a placeholder through the placeholder textbox.

![Parameterized URL](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/parameterized-url.png)

*Forming URI through placeholder*

EX: http://flagpedia.net/data/flags/normal/{0}.png

![Placeholder](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/bind-to-check-placeholder.png)

![placeholder](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/placeholder.png)

### Filter Settings

![Filter](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/filter.png)

### IgnoreFilterActions

You can ignore the filter actions by enabling the IgnoreFilterActions property. Browse Image will not act as a slave widget.

### Link

![Link](/bold-bi-docs/static/assets/embedded/visualizing-data/visualization-widgets/images/image/link.png)

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).