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

You may add the image of supported formats including, BMP, JPG, JPEG, GIF, EMF, JFIF, JPE, PNG, RLE, TIF, TIFF, WMF, DIB, and ICO from your local machine or column binding to the image widget.

The following steps represents to add Image to dashboard:

1.  Drag and drop the image widget into the Canvas.

![Image](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/drop-widget.png)


2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/virtualtable.png)

7.  Click the `Properties` button in the configuration panel. 

![Designer properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, the property pane opens.

![Data tab](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/imagedatatab.png)

## How to configure the data to Image widget?

You may browse the image or bind a datasource column that contains the image URL. 

You may assign a data by clicking the **Assign Data** tab. 

![Assign Data](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/assign-data.png)

Drag and drop image column from the `dimension` section to `Column` section.

![Configure widget](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/configure-widget.png)

You can `format` the image for better illustration of the view that you require, through the settings available in the `Properties` pane.

### Name

This allows you to set the `title` for this Image widget.

![Name](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/title.png)

### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/basic-settings.png)

### Mode

You can customize the image showcase style through the `Mode` settings in the Design Tools pane or properties pane.

#### Default

The image will be displayed in its original size.

![Default](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/image-widget.png)

#### Fill

The image will be filled in the available space.

![Fill](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/fill.png)

#### Uniform to Fill

The image will be uniformly occupying the space but gets clipped, if it is larger than control.

![Uniform to Fill](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/uniform-to-fill.png)

#### Uniform 

The image sizes proportionally (without clipping) to best fit to the widget area.

![Uniform](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/uniform.png)

### Image Source

### Local

 You can browse the image from your `local` system.

![Local Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/local-image-settings.png)

![Local](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/local-image.png)

> **NOTE:** Image that having special characters in the file name is not supported in Dashboard Application.

### URL

You can give the `URL` of the image which must be a valid URL.

Ex: http://flagpedia.net/data/flags/normal/in.png

![URL](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/url-image.png)

### Parameterized URL

Parameterized URL images can be bind through this option and we can also able to add different columns value as a placeholder through the placeholder textbox.

![Parameterized URL](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/parameterized-url.png)

*Forming URL through placeholder*

EX: http://flagpedia.net/data/flags/normal/{0}.png

![Placeholder](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/bind-to-check-placeholder.png)

![placeholder Image](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/placeholder.png)

### Filter Settings

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/filter.png)

### IgnoreFilterActions

You can ignore the filter actions by enabling the IgnoreFilterActions property. Browse Image will not act as a slave widget.

### Link

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/image/link.png)

To configure the linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).
