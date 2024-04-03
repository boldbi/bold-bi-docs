---
layout: post
title: Visualizing Images – Embedded BI | Bold BI Documentation
description: Learn how to create an Image visual in Bold BI Embedded dashboard, configure data field and other settings.
canonical: "/visualizing-data/visualization-widgets/image/"
platform: bold-bi
control: Image
documentation: ug
---

# Image

Image allows you to display a both static and dynamic image within defined mode (default, fill, uniform and uniform to fill). 

![Image Widget](/static/assets/visualizing-data/visualization-widgets/images/image/image-widget.png)

You may add image of supported formats including, BMP, JPG, JPEG, GIF, EMF, JFIF, JPE, PNG, RLE, TIF, TIFF, WMF, DIB, and ICO from your local machine or column binding to the image widget.

The following steps represents to add Image to dashboard:

1.  Drag and drop the image widget into the Canvas.

![Image](/static/assets/visualizing-data/visualization-widgets/images/image/drop-widget.png)

2.  Click the `Data Source` button in the configuration panel.

![Data button](/static/assets/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![Data source button](/static/assets/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button shown.

![Data source list](/static/assets/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, click the `Save` button.

![Virtual table](/static/assets/visualizing-data/visualization-widgets/images/image/virtualtable.png)

7.  Click the `Properties` button in the configuration panel. 

![Designer properties](/static/assets/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

8.  Now, the property pane opens.

![Data tab](/static/assets/visualizing-data/visualization-widgets/images/image/imagedatatab.png)

## How to configure the data to Image widget?

You may browse the image or bind a datasource column that contains the image URL. 

You may assign a data by clicking the **Assign Data** button. 

![Assign Data](/static/assets/visualizing-data/visualization-widgets/images/image/assign-data.png)

Drag and drop image column from the `dimension` section to `Column` section.

![Configure widget](/static/assets/visualizing-data/visualization-widgets/images/image/configure-widget.png)

You can format the image for better illustration of the view that you require, through the settings available in Properties pane.

### Name

This allows you to set the `title` for this Image widget.

![Name](/static/assets/visualizing-data/visualization-widgets/images/image/title.png)

### Basic Settings

![Basic Settings](/static/assets/visualizing-data/visualization-widgets/images/image/basic-settings.png)

### Mode

You can customize the image showcase style through the `Mode` setting in the Design Tools pane or properties pane.

#### Default

The image will be displayed in its original size.

![Default](/static/assets/visualizing-data/visualization-widgets/images/image/image-widget.png)

#### Fill

The image will be filled in the available space.

![Fill](/static/assets/visualizing-data/visualization-widgets/images/image/fill.png)

#### Uniform to Fill

The image will be uniformly occupying the space but gets clipped, if it is larger than control

![Uniform to Fill](/static/assets/visualizing-data/visualization-widgets/images/image/uniform-to-fill.png)

#### Uniform 

The image sizes proportionally (without clipping) to best fit to the widget area.

![Uniform](/static/assets/visualizing-data/visualization-widgets/images/image/uniform.png)

### Image Source

### Local

 You can browse the image from your `local` system.

![Local Settings](/static/assets/visualizing-data/visualization-widgets/images/image/local-image-settings.png)

![Local](/static/assets/visualizing-data/visualization-widgets/images/image/local-image.png)

> **NOTE:** Image that having special characters in the file name is not supported in Dashboard Application.

### URL

You can give the `URL` of the image which must be a valid URL.

Ex: http://flagpedia.net/data/flags/normal/in.png

![URL](/static/assets/visualizing-data/visualization-widgets/images/image/url-image.png)

If you wish to provide tenant-specific images, you can utilize the dashboard parameter. We have added support for using the dashboard parameter in the URL field. 

For Example: you want to render the image located at `http://localhost:56372/bi/site/site1/get-client-logo`. The default dashboard parameter is `@{{:CURRENTUSER.SITEURL}}`.

When adding the URL in the image widget, the image will be displayed dynamically based on the tenant. The URL should be structured as follows: `@{{:CURRENTUSER.SITEURL}}/get-client-logo`.

![URL](/static/assets/visualizing-data/visualization-widgets/images/image/parameter.png)

The image widget rendered like below 

![URL](/static/assets/visualizing-data/visualization-widgets/images/image/image.png)

### Parameterized URL

Parameterized URL option allows the user to pick an image from the data source field to the image widget.

Through the column section in the assigned data, we can add N number of fields. The fields can be represented using the `{N-1}` parameter, starting from `{0}`.

In this example, we have two fields in a column section shown in the following illustration.

![Parameterized URL](/static/assets/visualizing-data/visualization-widgets/images/image/parameterized-url.png)

![Parameterized URL Default](/static/assets/visualizing-data/visualization-widgets/images/image/bind-to-check-placeholder-default.png)

 we can refer `Teams image` field filed with `{0}` parameter and `Players Image` field filed with `{1}` parameter.

![Placeholder](/static/assets/visualizing-data/visualization-widgets/images/image/bind-to-check-placeholder.png)

Using parameter `{1}` in the Parameterized URL pattern, we get the 1st value of `Players Image` field data as source for image widget.

![placeholder](/static/assets/visualizing-data/visualization-widgets/images/image/placeholder.png)
  
***Forming URI through placeholder***

EX: http://flagpedia.net/data/flags/normal/{0}.png

* `{0}` - This is representing the 1st field of the column section and gets the 1st value of that field to image widget.
* If the 1st value of the `{0}` parameter is `au`, the URL will be framed as http://flagpedia.net/data/flags/normal/au.png. This will be used on the image source.
* Remaining texts are constant value.

![URI Placeholder](/static/assets/visualizing-data/visualization-widgets/images/image/formed-url-settings.png)

> **Note:** Always remember that used parameter will get the 1st value of the field after considering all the dashboard filters.

### Tooltip Settings

`Show Tooltip` allows you to toggle the visibility of a tooltip on an image. The `text box` below the Show Tooltip option allows you to set the text that appears in the tooltip

![Showtooltip](/static/assets/visualizing-data/visualization-widgets/images/image/Show-tool-tip.png)

### Filter Settings

![Filter](/static/assets/visualizing-data/visualization-widgets/images/image/filter.png)

### IgnoreFilterActions

You can ignore the filter actions by enabling the IgnoreFilterActions property. Browse Image will not act as a slave widget.

### Link

![Link](/static/assets/visualizing-data/visualization-widgets/images/image/link.png)

Configure the linking to URL or dashboard with the widget using its settings. For more details, refer to the [Linking](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

### Container actions

![Container Actions](/static/assets/visualizing-data/visualization-widgets/images/image/pin-icon.png)

#### Pin Widget

This allows you to pin the widget.