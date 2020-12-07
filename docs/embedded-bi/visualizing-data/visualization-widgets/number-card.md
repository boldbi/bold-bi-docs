---
layout: post
title: Number Card – Embedded BI | Bold BI Documentation
description: Learn how to create a Number Card visual in Bold BI Embedded dashboard, configure data fields and other settings.
canonical: "/cloud-bi/visualizing-data/visualization-widgets/number-card/"
platform: bold-bi
control: Number Card
documentation: ug
---

# Configuring and formatting Number card with Bold BI

The `Number Card` widget is a very useful widget that allows you to showcase a single value or a series of measure values to the users in the dashboard. The key metrics such as *total sales amount, number of page visits, current month goal*, etc, are generally displayed in the card widgets. 

The visualization of the number card widget is customizable, and you can format the values displayed in the widget using the provided options.

a)	Multiple single number card widget in the GitHub dashboard.
![Number Card](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/single-card.png)

b)	Series of Number Card widget.
![Series Number card](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/series-card.png)

## How to configure data into the Number Card widget

To showcase a `Number Card`, a minimum requirement of one `measure` value is needed.

The following procedure illustrates data configuration of the card:

1.	Drag the `Number Card` control icon from the tool box into the design panel. You can find the control in the tool box by search.
![Drag and drop](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/drop-widget.png)

2.	Click `Data Sources` icon in the configuration panel.
![Data sources icon click](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/datasource-icon-click.png)

3.	Click `CREATE NEW` to launch a new connection from the connection-type panel.
![New data source](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/add-new-datasource.png)

4.	In the connection-type panel, click any one of the listed connection type buttons shown. Here, the `Microsoft Excel` connection type is selected for demonstration.
![Connection type](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/select-connection.png)

5.	In the `NEW DATA SOURCE` configuration panel, enter the required details.
![Enter data source details](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/enter-credentials.png)

6.	Click `Preview & Connect`. Now, the `Choose Table(s)` dialog will be shown.
![Choose tables](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/choose-tables.png)

7.	After selecting the required tables, click `Connect`.
![Click connect](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/connect-data-source.png)

8.	Drag your preferred table from the left pane to the data design view and click `Save`.
![Save data source](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/save-data-source.png)
Now, the data source is successfully created.

9.	Click the `Properties` icon in the configuration panel.
![Properties icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/properties-icon.png)
The properties panel of the widget will be displayed as shown in the following screenshot.
![Properties pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/properties-panel.png)

10.	Now, switch to the `ASSIGN DATA` tab.
![Assign Data click](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/assign-data-tab.png)
The data pane lists the available `measures` and `dimensions` from the data source. 

### Single number card
Drop the measure field data into the `Measure` section.
![Configure measure](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/configure-measures.png)

Now, the widget is rendered successfully with the default properties and formatting. 
![Number card data](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/configured-widget.png)

You can change the `aggregation type` of the measure section from the settings menu as shown in the following screenshot. Refer to [this section](/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details.
![Change aggregation](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/change-aggregation.png)

> **NOTE:**  Refer to the following sections to learn more about how to filter and format data.
> **NOTE:** 
> **NOTE:** [Measure filter](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column) 
> **NOTE:** 
> **NOTE:** [Measure Formatting](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/)


### Series number cards
The Series section allows you to plot a `series` of cards over the dropped field. In this following example, the team-wise goals are displayed in the card.
![Configure series](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/configure-series.png)

### Sparkline
You can use the `Sparkline` section to showcase the variation of measurement in the Number Card widget.
![Configure sparkline](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/configure-sparkline.png)

Now, the card will be rendered with the sparkline. 
![Sparkline view](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/sparkline-view.png)

### Image
The `Image` section allows you to configure the image data for each number card/records. The image data may be the direct URL for the records or contains the part of the URL. 

#### Direct URL
In the following example, each country flag is displayed in the number card by configuring the Country Image field. The Country Image column from the data source contains the full URL of the country flag. 

Data screenshot
![Example data](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/sample-data-url.png)

Follow the given steps to show the country image in the Number card series:

1.	Configure the Country Image field into the Image section.
![Configure Image](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/configure-image.png)

2.	Make sure whether the pattern text is properly updated.
![Pattern text](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/pattern-text.png)
Now, the widget will be rendered with image data. 
![Pattern Image](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/pattern-image.png)



#### Partial Image data 
If your data source contains the partial data of the URL, enter the URL text with the proper patterns.
For example, consider the following data source. 
![Example data](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/sample-image-data.png)

It contains the Players name and part of their image URL in the above columns. 
The full Image URL for `Cristiano Ronaldo` is `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/345px-Cristiano_Ronaldo_2018.jpg` and the Player Image Column contains the information `commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/345px-Cristiano_Ronaldo_2018.jpg`. So, you should enter the URL as `https://upload.wikimedia.org/wikipedia/{0}`, where the *{0}* indicates the first field in the image section.

> **NOTE:** - You can add any number of fields in the image section and need to append {0}, {1} for the 1st, 2nd fields configured in the image section. 
> **NOTE:** -  If more than one data is available in the record, the first record with the highest measure will be displayed in the Number Card widget.

For example, if you try to show the Goals of each team and configure the player image in the image section. It will show top scorer image of each team as shown in the following screenshot. 

![Series with image](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/image-in-series.png)

*Configure Image Section*
![Configure Image source](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/configure-image-field.png)

*Update Image Pattern*
![Update image pattern](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/update-image-pattern.png)

*Final view* 
![Image view](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/image-view.png)


> **NOTE:**  The image will be hidden automatically, if the width of the number card is low. An information icon will display the message as highlighted in the following image.
![Information icon](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/info-icon.png)

#### Background image
Like the image option, you can also configure the `background image` of the Number Card.
![Background image](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/background-image.png)

#### Plot Area
`Plot area` option allows you to choose whether the background needs to apply for the whole Number Card or except the image data. You can find the difference from the following images.

##### Card background
![Card plot area](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/card-plot-area.png)

##### Complete
![Complete plot area](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/complete-background.png)

## How to format the Number Card widget

To format the properties of the Number Card widget, switch to the `PROPERTIES` tab.
![properties pane](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/switchto-properties-tab.png)

### General properties

The following highlighted section in the image allows you to modify the widgets name, subtitle, and to add useful description.
![general properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/general-properties.png)

The following screenshot shows the Number Card widget, after modifying the header properties.
![Header properties customized](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/header-properties.png)

#### Measure properties
![Measure properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/measure-properties.png)

### Show Measure
You can also toggle the measure card visibility in the Number Card widget by using the Show Measure check box.

From the measure property section, you can customize the font size and color of the measure values displayed in the Number Card widget.

The following image shows the Number Card widget, after modifying the color and font size of the measure value.
![Measure properties customized](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/properties-customized-widget.png)


![Measure hidden](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/hidden-measure.png)

### Title properties

You can customize the font color and size of the title. You can also enable or disable the title.

The following image shows the Number Card widget after modifying the color and font size of the title value.

![Title properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/title.png) 

The following image shows the Number Card widget after unchecking the title value.
![Hide title](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/hide-title.png)

### Image properties
#### Show Image

If the Show Image check box is unchecked, then the image is not displayed in the Number Card.
![Image properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/show-image.png)

#### Image Mode
You can customize the image showcase style through the ode setting.

*Default*: The image will be displayed in its original size.

*Fill*: The image will be filled in the available space.

*Uniform to fill*: The image will be uniformly occupying the space but gets clipped, if it is larger than control.

*Uniform*: The image sizes proportionally (without clipping) to best fit to the widget area.

![Image modes](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/image-modes.png)

#### Image

##### Browse Image
You can browse the image from the local system.
![Browse Image](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/browse-image.png)

##### URL
You can enter the direct URL of the image. 
![URL text box](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/url-text-box.png)
![Entered URL](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/enter-url.png)

##### Pattern
You can use the pattern as explained in the Image data section. 

### Background properties
#### Background Image 
The background image properties are same as the Number card’s image properties.

#### Background color
Allows you to set a solid color as the background and to change the transparency of the color.
![Background color](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/background-color.png)

> **NOTE:** If both the background image and background color are enabled in the widget, then based on the transparency of the background image and the selected image mode, either the background image alone will appear in the widget or both the background color and image will appear in the Number Card.

### Sparkline properties
Sparkline in the Number Card widget can be turned off by unchecking the Show Sparkline check box. The color of the sparkline and the transparency can be customized using the provided options.
![Sparkline properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/sparkline-properties.png)

### URL linking
You can navigate to the related web page by clicking the image widget and providing the valid URL in the URL textbox. This section provides more details about the URL linking.

### Filter interaction properties
The Number Card widget can be set to act as a master widget by selecting the `Act as Master Widget` check box. Enabling the `Ignore Filter Actions` check box, enable the Number Card widget not to be filtered by any other master widgets during the interaction time in both preview and published modes.

> **NOTE:**  Act as Master Widget check box will be enabled only when the Series section is configured.

![Filter properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/filter-properties.png)

### Container properties
Container options allow you to choose the container settings such as color, border, and to enable export, and comment check boxes by setting the proper values.
To learn more about commenting options, refer to this link.

> **NOTE:** The exporting options, title container properties, commenting, and view data options are available only when the Series is configured.

![Container properties](/static/assets/embedded/visualizing-data/visualization-widgets/images/number-card/container-properties.png)

## Related links
Blog post - [https://www.boldbi.com/blog/turn-on-insights-using-the-right-card-widget](https://www.boldbi.com/blog/turn-on-insights-using-the-right-card-widget)