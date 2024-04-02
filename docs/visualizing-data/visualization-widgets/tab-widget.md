---
layout: post
title: Adding a Tab Widget in Embedded Dashboard | Bold BI Docs
description: Learn about the Tab widget and know how to create, add, and configure data & other settings for the Tab widget while preparing a dashboard in Bold BI.
canonical: "/visualizing-data/visualization-widgets/tab-widget/"
platform: bold-bi
documentation: ug
---

# Tab Widget
Tab widget allows you to add multiple widgets in a single tab and multiple tabs within a single widget. It groups number of widgets in one place which reduces the large design area of the dashboard.

![Tab Widget](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/tab-widget.png#max-width=72%)

## How to add Tab Widget
You can drag and drop tab widget into the dashboard which is present under the `Miscellaneous` group in the left side item panel. Also, you can resize the dragged widget to add more widgets in the same tab.

![Add Tab Widget](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/add-tab-widget.png#max-width=65%)

## How to configure Tab Widget with multiple widgets
You can add multiple widgets in tabs using following three ways:
1. Configure tab widget by dragging some other widgets from the item panel. Assign required data to configure widgets.

    ![Method1 Tab Widget](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/method1-tab-widget.png#max-width=78%)

2. Drag the configured widgets from design canvas into the tab widget.
    ![Method2 Tab Widget](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/method2-tab-widget.png#max-width=95%)

3. Drag the existing panel widgets into the tab widget.
    ![Method3 Tab Widget](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/method3-tab-widget.png#max-width=85%)

## Tab Functionalities
Tab can be add or remove by using following options:
1. Add Tab.
2. Remove Tab.

### 1. Add Tab
Tab widget contains (+) icon at the right of last tab name. Click add icon and a new tab will be created.

![Add Tab](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/addicon-tab-widget.png#max-width=81%)

### 2. Remove Tab
Every tab is created with close icon at the right end of tab name. A tab can be removed by clicking close icon.

![Remove Tab](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/removeicon-tab-widget.png#max-width=81%)

## How to format tab widget
You can format the tab widget for better illustration of the view that you require using the settings available in Properties tab.

### Basic settings

![Tab Widget properties](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/tab-widget-properties.png#max-width=50%)

#### Tab Order
Tab Order helps to rearrange the created order of all tabs. Choose any one of the tab name and then click corresponding arrow icon wherever the tab get placed either upwards or downwards.

![Tab Order](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/before-taborder-tab-widget.png#max-width=87%)

After clicking arrow icon, the selected tab will be switched as shown in following image.

![Tab Order](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/after-taborder-tab-widget.png#max-width=87%)

#### Tab Rename
A tab name can be renamed by clicking the `edit icon` at the top right of the `Tab Order` section. Follow these steps to edit tab name:
1. Select tab name.
2. Click edit icon at the right side of `Tab Order` section.
3. Text box appears for the selected tab name.
4. Rename the tab name as shown in following image.

    ![Tab Rename](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/tabrename-tab-widget.png#max-width=90%)

#### Widget Order
Widget Order rearrange the number of widgets within a tab. You can overlap the widgets over one another in a tab. The order of the widgets can be changed by `Widget Order` section in property panel.

`Widget Order` listed the number of widgets inside a tab. You can rearrange the order by using arrow icons.

For example, the last dragged `Department` widget was placed at the bottom of the list and bound over the `Feedback Report` widget. Now select `Feedback Report` tab in the `Widget Order` section and then click the downward arrow icon which has to be shown in the following image.

![Widget Order](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/widgetorder-tab-widget.png#max-width=87%)

After clicking downward arrow icon, `Feedback Report` tab moves to bottom of the list and it appears over the `Department` widget within a `Patient Feedback` tab in tab widget.

![Overlapping widgets](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/overlapping-tab-widget.png#max-width=87%)


#### Hide Tab Header
When the `Hide Tab Header` checkbox is enabled, the tab header will be disabled.

![Hide tab header](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/hidetab-header-tab-widget.png#max-width=94%)

#### Header color and Font size
The color of the tab header can be changed by choosing color from `Header Color` and size of the tab font can be changed by selecting the `HeaderFontsize` option.

#### Active Tab
`Active Tab` sets the selected tab as default when the dashboard is rendered.

### Container Appearance
![Container Appearance](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/container-appearance-tab-widget.png#max-width=60%)

#### Auto Padding

On enabling Auto Padding, the padding of the widget container will be adjusted automatically if the size of the widget varies.

**Padding**

This allows you to customize the padding of the widget container if the **Auto Padding** is disabled. Value can be between 0 and 25.

#### Show Border
This allows you to toggle the visibility of the `border` surrounding the widget.

#### Corner Radius
This allows you to apply the specified radius to the widget corners if the Show Border is enabled. Value can be between 0 and 10.

#### Show Background Image
This allows to set the background image for the tab widget.

#### Show Background Color
This allows to set the background color to the tab widget.

#### Transparency
This property allows you to specifies the transparency for the background color.

#### Show Shadow
This allows you to toggle the visibility of the `shadow` surrounding the widget.

### Export
Export tab widget as <b>Image</b> and <b>PDF</b> format. Currently, active tab with widgets will get exported.

![Export Tab Widget](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/export-tab-widget.png)

## Inter widget linking support for the Tab widget
Inter widget linking support helps to link a few widgets(master widget) with a tab widget and switch the tabs in the tab widget based on the selected index value of the master widget. It also filters the data inside the tab widget at the same time the required tab is also switched. For Example, When selecting the second value from a combo box, the second value is filtered inside the tab widget, and also the second tab is switched.

![Inter widget linking](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking.png)

>**NOTE:**  The supported master widgets for linking with a tab widget are <b>Combo Box</b>, <b>List Box</b>, <b>KPI Card</b>, <b>Number Card</b> and <b>Radial Gauge</b>.

###  How to configure Inter Widget Linking
The tab widget can be configured with Inter Widget Linking support by using the following steps:
1. Drag and drop the master widget([Combo Box](/visualizing-data/visualization-widgets/combo-box/#combo-box),
[List Box](/visualizing-data/visualization-widgets/list-box/#list-box),
[KPI Card](/visualizing-data/visualization-widgets/kpi-card/#kpi-card),
[Number Card](/visualizing-data/visualization-widgets/number-card/#configuring-and-formatting-number-card-with-bold-bi),
[Radial Gauge](/visualizing-data/visualization-widgets/radial-gauge/#configuring-radial-gauge)) and configure data.
2. Drag and drop the [Tab Widget](/visualizing-data/visualization-widgets/tab-widget/#tab-widget) and configure it with widget data.
3. Open the master widget's property panel and find the `Inter Widget Linking` section.

![Inter widget linking configuration](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking-PropertPanel.png#max-width=87%)

### Enable Inter widget linking
This allows you to enable the inter widget linking support for the tab widget. By default, the `Enable` checkbox is maintained in an unchecked state.

### Widgets
The widgets section displays the list of tab widgets. You can choose the required tab widget for inter widget linking by enabling the `Enable` checkbox.

### Actions
There are two actions to configure the linking with the tab widget. When hovering over the `Info` icon, it displays the message about the following actions:
1. [Default](/visualizing-data/visualization-widgets/tab-widget/#default)
2. [Custom](/visualizing-data/visualization-widgets/tab-widget/#custom)

![Default option in Inter widget linking](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking-Info-Icon.png#max-width=87%)

The above actions are initially disabled and will be enabled by selecting any of the tab widgets under the `Widgets` section.

### Default
The `Default` action allows you to switch the tabs based on the selected index from the master widget. For example, when selecting the third value from the master widget, the third tab is switched in the tab widget.

![Default option in Inter widget linking](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking-Default-Option.png#max-width=87%)

![Default result in Inter widget linking](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking-Default-Result.png)

>**NOTE:**  If the selected index value is greater than tab count, the last tab will be switched.

### Custom
This allows you to switch the tab based on the specific index which can be entered in the text box under the `Custom` action. The textbox appears only by choosing the `Custom` action. This action switches to configured tab only, even choosing any value from the master widget. For example, enter a value `1` in the custom text box, then the first tab is switched only even selecting any other values in the combo box.

![Custom option in Inter widget linking](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking-Custom-Option.png#max-width=87%)

![Custom result in Inter widget linking](/static/assets/visualizing-data/visualization-widgets/images/tab-widget/InterWidgetLinking-Custom-Result.png)

