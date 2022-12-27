---
layout: post
title: KPI Card Widget – Cloud BI | Bold BI Documentation
description: Learn how to create a KPI Card visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: KPI Card
documentation: ug
---

# KPI Card

`KPI Card` widget allows you to measure trends through key performance indicators (KPIs) like value and goal. The key metrics such as *revenue vs investment, target vs current value, and stocks vs demand* are generally displayed in the KPI Card widget.

The visualization of the KPI card widget is customizable, and you can format the values displayed in the widget using the provided options.

*KPI Card series view:* 

![KPI Card Series view](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/series-view.png)

*KPI card single view:*

![Single KPI Card](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/single-card.png)

## How to configure data into KPI card 

> **NOTE:** Before adding the card widget to the design layout, make sure to create the data source. You can refer to [this section](/embedded-bi/working-with-data-source/creating-a-new-data-source/) to learn how to create a new data source. 

> **IMPORTANT:** To showcase a KPI Card, a minimum requirement of both actual and target values is needed.

After creating a data source, follow the given steps to configure the data into the card widget:

1. Drag the `KPI Card` control icon from the tool box into the design panel. You can find the control in the tool box by search.

![Drag and drop](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/drop-widget.png)

2.	Resize the widget as required. 

![Resize card](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/resizing-widget.png)

3.	Click the `properties` button as shown in the following image. 

![ASSIGN DATA](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

4.	Now, the `properties pane` opens. 

![Properties pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/properties-pane.png)

5.	Click `ASSIGN DATA`. The data pane will be opened with the  list of available `measures` and `dimensions` from the added data sources. 

![Assign data click](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/assign-data-tab.png)

### Actual value

Drag the required field into the `Actual Values` section. 

![Configure actual value](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-actual-value.png)

You can change the `aggregation type`, `filter`, and `format` the data using the options provided in the settings menu. To open the `settings` menu, click the `settings` icon. 

![Settings menu](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/settings-menu.png)

Now, the menu will be shown.

![Settings menu items](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/menu-lists.png)

**Changing the aggregation type**: 

You can change the summary type of the dropped measure field by clicking the summary types listed in the menu. Refer [here](/embedded-bi/visualizing-data/working-with-widgets/aggregating-value-columns-based-on-type/) for more details on aggregation types. 

**Measure filtering**: 

You can use `Filter` option to filter the data by specifying the filter condition. Refer to this [page](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-measure-column), for detailed instruction on how to apply the measure filter.

**Measure formatting**

Select `Format` option to define the display format for the values in the column using the Measure Formatting window. To learn more about measure formatting, refer to [here](/embedded-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/). 

### Target value

Drag the required field into the `target value` section.

![Configure Target](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-target-value.png)

Now the KPI card widget will be rendered. 

![Card view](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configured-widget.png)

> **NOTE:**  The measure formatting option is not provided in the Target Value’s settings menu and the measure formatting applied for the actual value will also be applied to the target value. 

### Series value

Drag a dimension field into the series section to render a series of KPI Cards.

![Configure Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-series-value.png)

Now, the KPI card will be rendered as shown in the following image. 

![Series view](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configured-widget-series-view.png)

You can filter and sort the records using the settings menu items. 

![Settings options](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/settings-option.png)

**Sorting**: You can customize the `sorting` behavior of dimension fields in the KPI Card widget. You can also order them based on **alphabet** or **value**, **data source (default)**, or **field**. Refer to [here](/embedded-bi/visualizing-data/working-with-widgets/advanced-sorting/), for the detailed steps.

 Refer to this page to learn how to apply measure filter. 

**Filtering**: You can use the `Filter` option to `filter` the data by specifying the filter condition.

Refer to this [page](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) to learn how to apply measure filter. 

### Sparkline

You can use the `Sparkline` section to showcase the variation of measurement in the KPI Card widget.

![Configure Sparkline](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-sparkline.png)

![Card with Sparkline](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/card-with-sparkline.png)

### Image

The `image` section allows you to configure the image data for each KPI card or records. The image data may be the direct URL for the records or contains a part of the URL. 

#### Direct URL

In the following example, each country flag is displayed in the KPI card by configuring the **Country Image** field. The Country Image column from the data source contains the full URL of the country flag. 

Data screenshot 

![Example data](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/sample-widget.png)

Follow the given steps to show the country image in the KPI card series:

1. Configure the `Country Image` field into the `Image` section.

![Configure Image](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-image.png)

2.	Make sure whether the `pattern` text is properly updated in the `Properties` pane image section.

![Pattern](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/image-pattern.png)

3.	Now, the widget will be rendered with image data.

![Widget with Image](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/widget-with-image.png)

#### Partial image data 

If your data source contains the partial data of the URL means you need to enter the URL text with the proper patterns. 

For an example, consider the following data source. 

![Example data](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/sample-for-partial-image.png)

It contains the Players name and part of their image URL in the above columns. 
The full image URL for `Cristiano Ronaldo` is `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/345px-Cristiano_Ronaldo_2018.jpg` and the Player Image Column contains the information is `commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/345px-Cristiano_Ronaldo_2018.jpg`. So you need to enter the URL as `https://upload.wikimedia.org/wikipedia/{0}` Where the **{0}** indicates the first field in the Image

> **IMPORTANT:** 1)	You can add any number of fields in the image section and need to append {0}, {1} for the first , second fields configured in the image section.
> **IMPORTANT:** 2)	If more than one data is available for the record the first record with the highest measure will be used to display in the KPI Card widget. 

For example, if you try to show the goals of each team and configure the player image in the image section, it will show top scorer image off each team as shown in the following screenshot. 

*Configure Image section:*

![Configure Image](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-image-field.png)

*Ensure pattern*

![Ensure pattern](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/ensure-pattern.png)

*Series view*

![Series view](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/image-in-series.png)

> **NOTE:** The image will be hidden automatically if the width of the KPI card is low. An information icon will display the image as highlighted in the following image.

### Background image

Like the image option, you can configure the background image of the KPI Card.

![Configure background](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/configure-background.png)

![Card with background](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/card-with-background.png)

## How to format KPI card 

You can format the KPI Card for better illustration of the view through the settings available in the Properties tab.

To format the KPI card, follow the given steps:

1.	Drag the KPI card into the canvas and resize it to your required size.

2.	Configure data into the KPI card.

3.	Focus the KPI card and click the settings icon.

![Settings icon click](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/settings-icon-click.png)

4.	Now, the Properties pane opens. 

![Opening properties pane](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/open-properties-pane.png)

### General properties

#### Name 

This option allows you to change the `title` for the KPI card.

#### Subtitle

This option allows you to provide the `subtitle` for the KPI card.

> **NOTE:** Subtitle will be shown only when the series section is configured. 

##### Description

This option allows you to provide the `description` about the KPI Card.

**Header properties**

![KPI card title](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/title.png)

**KPI card with the customized title, subtitle and description**

![KPI card subtitle](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/subtitle.png)

### Basic Settings

### Show Tooltip

This option allows you to toggle the visibility of tooltip in a card.

![Direction](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/tooltip.png)

### Color properties

![Direction](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/color-properties.png)

#### Direction

You can set the value label status to `High is Good` or `Low is Good`. The default setting is `High is Good`. This option is enabled only when you configured the actual value and target value.

![Direction](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/direction.png)

#### Direction colors

You can customize the color values for the `high`, `medium`, and `low` colors using the provided color pickers.

#### Separator color

Allows you to change the `separator` color. 

## How to apply conditional formatting in KPI card

By enabling the `advanced settings` in formatting, you can customize the color, styles, and highlighting the data based on the conditional range values

### How to enable advanced formatting

In the properties pane, check the `Advanced Setting` check box, which is located under the `formatting` section.

![Enable advance settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/enable-advance-settings.png)

This will open the `Conditional Formatting` dialog box. 

![Conditional formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/conditional-formatting.png)

#### Properties

You can customize more than one property using the rule based conditional formatting. 

- Title 
- Background 
- Sparkline (Applicable only when sparkline is configured)
- Icon 
- Icon color
- KPI Value
- Image
- Background image

#### Based on field 

You can choose the field from the Based On section to apply the conditions from the highlighted drop-down. 

![Based on field](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/based-on-field.png)

#### Summary type 

You can select the summary type for the selected measure field. 

![Summary type](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/summary-type.png)

#### Value type

The value type drop-down allows you to choose whether you are going to apply the direct value (specific number like 3 goals, order ID 10248 ) or percentage (values above 30% or 50 %). 

![Value type](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/value-type.png)

#### Condition name

You can give a meaningful name to the applied conditions using the highlighted text box. 

![Condition name](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/condition-name.png)

#### Condition type

Choose the condition for measure field from the highlighted conditions. 

![Condition type](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/condition-type.png)

If you have selected the dimension as a based on field and want to use text condition, the following text-based conditions are available.

![Dimension condition](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/dimension-condition.png)

> **NOTE:** The text-based condition type will be enabled only when the dimension configured in the series field is used as the based on field. 

#### Value

Enter the condition value. 

#### Font style

Allows you to choose the title font style. (Bold, Italic, Underline, and Superscript).

#### Case-sensitivity

For the dimensions, `case-sensitive` option is provided to choose whether the entered value is case-sensitive or not. 

Select the checkbox provided near by the options to customize the properties, and similarly click Font Style icons for applying them, as shown in the following screenshot.

![Select properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/customize-properties.png)

Figure: *The KPI card series view with the applied conditional formatting*.

![KPI card after conditional formatting](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/formatted-result.png)

### Title properties

![Title properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/title-properties.png)

#### Show title

Allows you to choose whether the title needs to be shown or not in the KPI Card. 

### Show title for series card

The following screenshot shows the `title` for single card. 

![Series Card Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/title-series.png)

### Hide title

It allows you to `hide the title` by unchecking the show title property.

![Hide Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/hide-title.png)

#### Show title for single card

You can enter the value for the KPI card title. 

#### Color

Allow you to choose the KPI Card title value color. 

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Font size

You can customize the font size of the KPI card title by unchecking `Auto Font Size`.

![Single Card Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/title-single-card-properties.png)

Figure: **KPI card with customized title color and font size.**

![Single Card Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/title-single-card.png)

### Series settings

The `Series settings` option enabled only when you configure the **series** in `Assigned Data` tab.

![Series Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/series-settings.png)

### Fixed rows and columns 

If you enable the Fixed rows and columns, you can customize the rows and columns. The rows and columns are fixed based on the container size and the card size of the KPI card.

### Row count 

By enabling `Row Count`, you can set the count of the rows.

### Column count 

By enabling the `Column Count`, you can set the column count.

> **Note**: If the invalid columns and rows are given , the rows and columns reset to its default value. For example : If you given the number of rows as 6 and number of columns as 5 but your data count is only 20 . In this case the rows and columns will reset to its default value.

### Animation settings

![Animation Property](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/animation-property.png)

#### Enable animation

It animates the measure values when you enable the `Enable Animation`.

### Animation duration

Animation duration property specifies how long the animation cycle should last. The time is specified in seconds or milliseconds.

### KPI value properties

![KPI Values](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/kpi-value-properties.png)

#### Show value

Allows you to turn on or off the visibility of the `KPI value` in the KPI card. 

#### Type

The type drop-down allows you to choose the value which needs to be shown as the KPI value. The available options are: 

1.	Absolute difference. 
2.	Percent of difference. 
3.	Percent of target. 
4.	Actual value. 
5.	Target value. 
6.	Percent of change. 

Figure: *KPI card with different KPI types.*

![KPI types](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/kpi-value-types.png)

#### Color option

Allows you to customize the KPI value color. 

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Font Size

Provides the option to change the KPI value font size by unchecking `Auto Font Size`.

![KPI Customized Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/kpi-valuecustomized.png)

### Indicator properties

![Indicator Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/indicator-properties.png)

#### Show icon

Allows you to toggle the visibility of `icons` for the KPI values. 

#### Color option

Provides the option to customize the icon colors. 

**Direction color**: The colors from the direction settings will be applied. 

**Custom color**: You can customize the color values for the `High, Medium`, and `low` colors using the provided color pickers.

#### Indicators

You can customize the indicator for the `high, low and neutral` values from the set of different indicators. 

Figure: *Selecting the shape for the indicators.* 

![Choose indicator](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/choose-indicator.png)

Figure: **After customizing the indicator**

![Custom indicator](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/custom-indicator.png)

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Font size

Provides the option to change the font size of the indicators by unchecking `Auto Font Size`. 

![Indicator font size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/indicator-fontsize.png)

### Left value properties

![Left Value Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/left-value-properties.png)

#### Type

The type drop-down allows you to choose the value, which needs to be shown as the left side value. The available options are:

1.	Absolute difference. 
2.	Percent of difference. 
3.	Percent of target. 
4.	Actual value. 
5.	Target value. 
6.	Percent of change. 

#### Show value

Allows the options to toggle the visibility of the left value. 

#### Value color option

Provides the option to customize the left value colors. 

####  Direction color 

The colors from the direction settings will be applied. 

#### Custom color

You can customize the left value color using the provided color pickers.

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Font size

The option to change the left value font size by unchecking `Auto Font Size`. 

![Left Value font size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/leftvalue-fontsize.png)

#### Show caption

Allows you to choose whether to show the caption for the left value or not. 

#### Value

Provides the option to modify the caption for the left value.

#### Caption color option

Provides the option to customize the left value caption colors. 

#### Caption color

From the provided color pickers, you can customize the right value caption color.

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Caption font size

The option to change the left value caption font size by unchecking `Auto Font Size`.

![Left caption Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/left-caption-fontsize.png)

*After customizing the Left Value in KPI card*

![Left Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/left-value.png)

### Right value properties

![Right Value Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/right-value-properties.png)

#### Type

The type drop-down allows you to choose the value which needs to be shown as the `right-side` value. The available options are. 

1.	Absolute difference. 
2.	Percent of difference. 
3.	Percent of target. 
4.	Actual value. 
5.	Target value. 
6.	Percent of change. 

#### Show Value

Allows the options to toggle the visibility of the right value. 

#### Value color option

Provides the option to customize the right value colors. 

#### Direction color

The colors from the direction settings will be applied. 

#### Custom color

You can customize the right value caption color using the provided color pickers.

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Font size

The option to change the right value font size by unchecking `Auto Font Size`.

![Right Value Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/right-value-fontsize.png)

#### Show caption

Allows you to choose whether to show the caption for the right value or not. 

#### Value

Provides the option to modify the caption for the right value. 

#### Caption color option

Provides the option to customize the right value caption colors. 

#### Caption color

From the provided color pickers, you can customize the right value caption color.

### Auto Font Size

On enabling this property, the font size of the KPI card title varies based on the screen resolution.

Use Case: 

If we have created a dashboard with KPI card which can be viewed by different clients of different screen resolution and we wants the title to be adjusted with respect to their resolution then we can use this option.

### Auto font size at 3840 x 2160

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-resolution.png)

### Auto font size at 1366 x 768

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize-diff.png)

### Auto font size at 1920 x 1080

![Auto Font Size](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/autofontsize.png)

#### Caption font size

The option to change the right value caption font size by unchecking `Auto Font Size`.

![Right caption Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/right-caption-fontsize.png)

*After customizing the Right Value in KPI card*

![Right Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/right-value.png)

### Image properties

![Image Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/image-properties.png)

#### Show image

Provides the option to change the visibility of the image within the KPI Card widget. 

#### Image mode

Allows you to choose the image mode. 

**Default** - Displays the image in its original size.

**Fill** - Fills the image in the available space.

**Uniform to fill** - Fills the image uniformly in the space. But, the image gets clipped, if it is larger than control. 

**Uniform** - Sets the image size proportionally (without clipping) to fit to the widget area.

#### Image

Provides three different options to select the image source: 

1.	Browse Image: Selects the image from the `local` disk. 

2.	Direct URL: Enter the `URL` of the image source. 

3.	Pattern: Enter the URL consists of `pattern text {0}` denoting the fields configured in the image data section. 

**After customizing the Image in KPI card**

![Image Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/image-customization.png)


### Background properties

![Background Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/background-properties.png)

#### Show image

Provides the option to change the visibility of the background image within the KPI Card widget. 

#### Image mode

Allows you to choose the image mode from the options `Default, Fill, Uniform to fill, and Uniform`.

#### Image

Provides the following three different options to select the image source. 

1.	Browse Image: Selects the image from the `local` disk. 

2.	Direct URL: Enter the `URL` of the image source. 

3.	Pattern: Enter the URL which consists of `pattern text {0}` denoting the fields configured in the image data section.

#### Color

Allows you to choose the background color for the KPI Card widget. 

> **NOTE:**  If both the background image and background color are enabled in the widget, then based on the transparency of the background image and the selected image mode, either the background image alone will appear in the widget or both the background color and image will appear in the KPI Card.

#### Transparency 

You can change the transparency of the color.

**After customizing the Image in KPI card**

![Background Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/background-custom-properties.png)

### Sparkline properties

![Sparkline Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/sparkline-custom-properties.png)

#### Show sparkline

Provides the option to choose whether to show the sparkline in the KPI Card or not. 

#### Color option 

Allows you to customize the sparkline color in the KPI Card. 

#### Opacity

You can change the opacity of the sparkline color. 

![Card with Sparkline](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/card-custom-spark-line.png)


### Link properties

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to [linking URLs](/embedded-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link Properties](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/link.png)

### Filter properties

The KPI Card widget can be set to act as a master widget by checking the `Act as Master Widget` check box. Enabling the `Ignore Filter Actions` check box, enable the KPI card widget not to be filtered by any other master widgets during the interaction time in both preview and published modes.

> **NOTE:**  Act as Master Widget check box will be enabled only when the Series section is configured. 

### KPI Card with fixed target value and actual value

You can create fixed target value and actual value in KPI Card using expressions.

The following steps illustrates how to add the fixed value:

1. Click the `fx expression` in the **Assign Data**.

![Expression](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/expression.png)

2. Add the name and expression, then click `Save`.

![Expression Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/expression-value.png)

3. You can view the added value in the measure section in assigned data tab. Drag the added measures in the `Value(s)` section.

![Added Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/add-value.png)

4. Change the aggregation type to Min or Max.

**Fixed Value for Number card**

![Fixed Value](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/maximum-value.png)

### Container appearance

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/container-appearance.png)

### Title Auto Font Size

On enabling Auto Font size, the font size of the title will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified font size to the widget title, if the `Title Auto Font Size` is disabled. The value ranges between 10 and 44.

### Subtitle Auto Font Size

On enabling Auto Font size, the font size of the subtitle will be adjusted automatically if the resolution of the screen varies.

**Font Size**

This allows you to apply the specified font size to the widget title, if the `Subtitle Auto Font Size` is disabled. The value ranges between 10 and 32.

### Show Border

This allows you to toggle the visibility of the border that surrounds the widget.

### Corner Radius

This allows you to apply the specified radius to the widget corners, if the `Show Border` is enabled. The value ranges between 0 and 10.

### Container actions

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/container-actions.png)

#### Show header

This allows you to enable or disable the widget title of the KPI Card widget. 

#### Allow maximize view

The visibility of the` maximize icon` in the widget header will be defined based on the settings in the viewer.

#### Allow CSV export

This allows you to enable or disable the `CSV export` option for the KPI Card widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel export

This allows you to enable or disable the `Excel export` option for the KPI Card widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image export

This allows you to enable or disable the `image export` option for the KPI Card widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF export

This allows you to enable or disable the `PDF export` option for the KPI Card widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/embedded-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow view underlying data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin widget

This allows you to pin the widget.

## Related links

Blog post - [https://www.boldbi.com/blog/turn-on-insights-using-the-right-card-widget](https://www.boldbi.com/blog/turn-on-insights-using-the-right-card-widget)

#### Responsive Behavior

We hide the widget elements based on the size of the widget for better readability.

Depending on the size of the widget, the card will be displayed either in Default or Horizontal or Vertical Layout.

When the card width is more than '447 px' and its height is less than '296 px', the card will be shown in a horizontal layout.

![Widget Element](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/value.png)

When the card height is more than '296 px', the card will be shown in a vertical layout.

![Widget Element](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/card-value.png)

If the size of the card does not have enough space to show all the elements, it will hide the elements with respect to the size based on the following order: Sparkline, Actual, and Target value container. The card title is shown in the image.

![Widget Element](/static/assets/cloud/visualizing-data/visualization-widgets/images/kpi-card/priority.png)