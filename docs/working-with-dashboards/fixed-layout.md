---
layout: post
title:  Fixed Layout Configuration – Embedded BI | Bold BI Learning
description: Discover how to modify your dashboard layout effortlessly using the Fixed Layout feature in Bold BI Embedded, ensuring a seamless user experience.
canonical: "/working-with-dashboards/fixed-layout/"
platform: bold-bi
documentation: ug

---

# Overview of Fixed Layout

When using a fixed layout, the dashboard can be viewed and designed according to the specified resolution settings, ensuring a consistent layout that appears as intended across different devices and screen sizes.

## Configuring Fixed Layout Settings

In the dashboard properties, navigate to the `Size` section, where you can select `Fixed` from the type dropdown menu.

![Fixed Layout Type Dropdown](/static/assets/working-with-dashboards/images/type_dropdown.png)

## Fixed

When the `Fixed` option is selected from the type dropdown menu, additional cells are added to both rows and columns to match the dashboard's height and width. The `Fixed` category offers three options:

1. Default dimensions.
2. Custom
3. Cell margin

### Default dimensions

Currently, we provide multiple default dimension values for the dashboard layout, each specifying its width and height. Users can select the appropriate dimension based on these default options.

<table style="margin: 14px 0px; width: 30%;">
<tr><td><b>Default dimensions</b></td></tr>
<tr><td>Full HD(1920 x 1080)</td></tr>
<tr><td>QHD(2560 x 1440)</td></tr>
<tr><td>4K(3840 x 2160)</td></tr>
<tr><td>UltraWide QHD(3440 x 1440)</td></tr>
<tr><td>UltraWide Full HD(2560 x 1080)</td></tr>
<tr><td>Generic Desktop(1366 x 768)</td></tr>
<tr><td>Desktop Browser(1000 x 800)</td></tr>
<tr><td>Full Screen(1024 x 768)</td></tr>
<tr><td>Laptop Browser(800 x 600)</td></tr>
<tr><td>Web Page Embedded(800 x 800)</td></tr>
<tr><td>Blog Embedded(650 x 860)</td></tr>
<tr><td>Small Blog Embedded(420 x 650)</td></tr>
<tr><td>Column(550 x 1000)</td></tr>
<tr><td>PowerPoint(1600 x 900)</td></tr>
<tr><td>Story(1016 x 964)</td></tr>
<tr><td>Letter Portrait(850 x 1100)</td></tr>
<tr><td>Letter Landscape(1100 x 850)</td></tr>
<tr><td>Legal Landscape(1150 x 700)</td></tr>
<tr><td>A3 Portrait(1169 x 1654)</td></tr>
<tr><td>A3 Landscape(1654 x 1169)</td></tr>
<tr><td>A4 Portrait(827 x 1169)</td></tr>
<tr><td>A4 Landscape(1169 x 827)</td></tr>
</table>

For example, if we choose the `Full Screen (1024 x 768)` option from the default dimensions, the dashboard will appear as shown in the screenshot below.

![Fixed Dropdown Desired Select](/static/assets/working-with-dashboards/images/fixed_dropdown_manual_select.png)

![Fixed Layout Desired View](/static/assets/working-with-dashboards/images/fixed_layout_manual_view_mode.png)

### Custom

You can select the custom option from the Fixed dropdown section or by changing the width and height using the numeric text box it'll considered as the custom option. By default, the layout is set to `Custom`, with a cell margin of `5` and the height and width adjusted based on the browser's dimensions.

![Fixed Layout Dropdown Select](/static/assets/working-with-dashboards/images/fixed_dropdown_select.png)

<b>Height and Width</b>

You can adjust the width and height of the layout using the numeric text boxes in the Size section of the dashboard properties, with a maximum limit of `5,000 pixels`. When you increase or decrease the width and height, the corresponding cells are added or removed from the columns and rows of the layout. Any changes made using the width and height text boxes will be treated as a `custom` layout, and the `Fixed` dropdown will automatically switch to `Custom`.

### Cell Margin

The cell margin allows reducing the gap between widgets on the dashboard, with a minimum value of `1` and a maximum of `5`.

For example, if we set the cell margin to `2`, the dashboard will appear as shown in the screenshot below:

![Cell Margin with 2](/static/assets/working-with-dashboards/images/fixed_layout_cell_margin_2.png)

If we set the cell margin to `5`, the dashboard will appear as shown in the screenshot below:

![Cell Margin with 3](/static/assets/working-with-dashboards/images/fixed_layout_cell_margin_5.png)

When increasing or decreasing the size of the cell margin, the corresponding cells will be added or removed from the columns and rows.

## Dashboard with Different Dimensions

When rendering the dashboard with different dimensions, it is displayed according to the configured width and height. When resizing the dashboard or zooming, the widget sizes remain unchanged.

For example, the image below shows the dashboard at 100% zoom size:

![Layout Upon Resize](/static/assets/working-with-dashboards/images/fixed_layout_manual_view_mode.png)

The image below shows the dashboard at 75% zoom size:

![Layout Upon Resize](/static/assets/working-with-dashboards/images/fixed_layout_upon_resize.png)

## Limitations:

1. PDF export at the dashboard level, pinboards, widget embedding, and `loadMultipleWidgets` embedding are not supported.
2. Increasing or decreasing the layout size will add or remove the corresponding rows and columns. If reducing the width or height affects any widgets, an alert message will notify the user to specify the number of rows or columns being removed or to reconfigure the affected widgets, as shown in the image below. Increasing the width or height will add the respective rows or columns while keeping the configured widgets unchanged.![Restriction Window](/static/assets/working-with-dashboards/images/restriction_window.png)