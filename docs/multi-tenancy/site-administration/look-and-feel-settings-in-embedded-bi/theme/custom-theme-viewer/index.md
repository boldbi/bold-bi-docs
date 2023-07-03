---
layout: post
title: Custom Themes for Dashboards Using CSS3 Variable | Embedded
description: Learn how to create a custom theme using CSS3 Variables and apply custom theme for your dashboards in the Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Dashboard Themes Using CSS3 variables in Bold BI Enterprise edition

The theme feature allows you to customize the appearance of the Bold BI Application. Switch the application’s theme from light to dark mode and vice versa under the `Look and Feel Settings`.

## How to apply Theme in application 
There are two ways to apply themes in the Bold BI application.
  1. Global theme settings
  2. Site theme settings

### Global theme settings

1. Set the `Theme` in the UMS settings under the `Look and Feel Settings`, and it will be applied to all sites in the Bold BI application.

   ![Global theme setting](/static/assets/multi-tenancy/dashboard-themes/images/globalsitetheme.png)

2. This `Theme` is applied to the `BI and Designer service` when there is no `Theme` option selected in the site settings and should be set as `Inherit from global settings` in the site settings under the `Look and Feel Settings`.
  
    ![Global theme inherit setting](/static/assets/multi-tenancy/dashboard-themes/images/globalsiteinherit.png)


### Site theme settings

   Change the `Theme` in the site settings under the `Look and Feel Settings`. If you want to change the `Theme` in the site settings, change to the desired `Custom Theme` and `Dashboard Theme` after generating and uploading the Theme file for the `BI and Designer Service`.
 
  ![Site theme setting](/static/assets/multi-tenancy/dashboard-themes/images/sitesetting.png)

## Limitations
 
The following items are not supported with the dashboard theme.

1. Newly implemented widgets like `Custom widgets.`

2. Deprecated widgets such as `Card and Maps.` –Syncfusion will not provide the support in the future.

## How to create custom Theme using CSS3 Variable 

Create the custom theme in two ways:
1. Refer [this](/site-administration/look-and-feel-settings/create-custom-application-theme/#how-to-create-custom-application-theme) to create the application custom theme.
2. Refer [this](/site-administration/look-and-feel-settings/create-custom-dashboard-theme/#how-to-create-a-custom-theme-using-variables-for-dashboards) to create the dashboard custom theme.

Similarly, customize the `Theme` for widgets in the dashboard using the provided variables per your requirements. Follow these steps to create a custom theme file.

      
1. Download the default `light` and `dark` files from the [Github](https://github.com/boldbi/boldbi-themestudio/releases) release page and extract them.

    ![Download github image](/static/assets/multi-tenancy/dashboard-themes/images/download-github-link.png)

2. Within the `light` and `dark` folder, there are widgets folder.

3. Within the `widgets` folder, there is a `boldbi.widgets.core.definition.css` file. Open this in an `editor`. Then, customize the color code and font for all widgets in the provided variables.
 
      ![Widgets core file](/static/assets/multi-tenancy/dashboard-themes/images/widgetcorefile.png)

4. Separate files have been included for each widget to use if you want to customize a specific widget's properties.
      
	  ![Widgets file](/static/assets/multi-tenancy/dashboard-themes/images/widgetsfile.png)
      

> **NOTE:**  If the value for the property is left blank, then the default value is taken.
 
### Designer Font

Allows you to customize the font family for all the text elements in the dashboard.

```css3

:root{
    --designer-font-family:"";
    --designer-fontsrc:"";
}

```

### Dashboard banner

Allows you to customize the color and font of the dashboard header panel, the dashboard header text, and icons. 

Click the [Dashboard banner](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/boldbi.designer.banner.definition.css) to navigate the template file.
```css3

:root {
    --banner-background:var(--primary-background-color);
    --banner-textstyle-font-color:var(--primary-text-normal-color);
    --banner-textstyle-fontsize:"";
    --banner-textstyle-fontweight:"";
    --banner-textstyle-fontfamily:var(--designer-font-family);
    --banner-textstyle-fontsrc:var(--designer-fontsrc);
    --banner-icon-font-color:var(--hover-icon-color);
    --banner-icon-fontsize:"";
    --banner-icon-fontweight:"";
    --banner-icon-fontfamily:var(--designer-font-family);
    --banner-icon-fontsrc:var(--designer-fontsrc);
    --banner-icon-hover-font-color:var(--hover-icon-color);
    --banner-icon-hover-fontsize:"";
    --banner-icon-hover-fontweight:"";
    --banner-icon-hover-fontfamily:var(--designer-font-family);
    --banner-icon-hover-fontsrc:var(--designer-fontsrc);
    --banner-icon-hover-background:var(--hover-icon-background-color);
}

```
For example, here customized the color in the banner variable,

```css3

:root {
    --banner-textstyle-font-color:#0000FF;
    --banner-icon-font-color:#0000FF;
    --banner-icon-hover-font-color:#0000FF;
}

```

![Banner Color](/static/assets/multi-tenancy/dashboard-themes/images/Banner_Color.png)

### Data color palette

Defines the color palette for the widgets. 

Click the [Data color palette](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/boldbi.data.colorpalette.defintion.css) to navigate the template file.
```css3

:root {
    --designer-data-color-palette1: #826AF9;
    --designer-data-color-palette2: #2D99FF;
    --designer-data-color-palette3: #2CD9C5;
    --designer-data-color-palette4: #FF6C40;
    --designer-data-color-palette5: #FFE700;
    --designer-data-color-palette6: #F29D38;
    --designer-data-color-palette7: #FF4085;
}

```
For example, here customized the color in the data color palette variable,

```css3

:root {
    --designer-data-color-palette1: #0000FF; // #0000FF - Blue Color
    --designer-data-color-palette2: #000000; // #000000 - Black Color
}

```

![Data Palette](/static/assets/multi-tenancy/dashboard-themes/images/Color_Palette.png)

## Dashboard widgets

The `boldbi.widgets.core.definition.css` section allows you to configure the widget container properties like the container background, title or sub-title color and font, icon color and font, and the widget level properties like the axis properties, legend properties, and the data label properties.

### Widget common level properties

The color codes and font settings defined under the `boldbi.widgets.core.definition.css` section will be applied to all the applicable widgets unless it has been overridden at the widget-specific level. 

**Widgets core file Variables:**

Click the [Widget core](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.widgets.core.definition.css) to navigate the template file.
```css3

:root {
    --widget-primary-background:var(--primary-background-color);
    --widget-primary-font-color:#000000;
    --widget-secondary-font-color:var(--primary-text-normal-color);
    --widget-fontsize:"";
    --widget-fontweight:"";
    --widget-fontfamily:var(--designer-font-family);
    --widget-fontsrc:(--designer-fontsrc);
    --widget-icon-font-color:var(--hover-icon-color);
    --widget-icon-hover-font-color:var(--widget-icon-font-color);
    --widget-icon-hover-background:var(--hover-icon-background-color);
    --widget-axis-title-font-color:var(--widget-primary-font-color);
    --widget-label-primary-font-color:var(--widget-primary-font-color);
    --widget-label-secondary-font-color:#505D6F;
    --widget-axis-gridlines-color:#DFDFDF;
    --widget-axis-ticklines-color:var(--widget-axis-gridlines-color);
    --widget-legend-font-color:var(--widget-primary-font-color);  
    --widget-datavalue-background-color:var(--widget-primary-background);
    --widget-dataValue-font-color:var(--widget-primary-font-color);
    --widget-datavalue-hover-color:var(--widget-primary-font-color);
    --widget-datavalue-hover-background:var(--hover-bg-normal-color);
    --widget-selection-background-color:var(--active-bg-normal-color);
    --widget-selection-font-color:var(--active-text-normal-color);
}

```

### Widget specific level properties
  The `widgets` section allows you to customize the properties of a specific widget.
 
#### Chart Variables

Click the [Chart](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.chart.widgets.definition.css) to navigate the template file.
```css3

:root{
    --chart-widget-title-font-color:var(--widget-primary-font-color);
    --chart-widget-title-fontsize:var(--widget-fontsize);
    --chart-widget-title-fontweight:var(--widget-fontweight);
    --chart-widget-title-fontfamily:var(--widget-fontfamily);
    --chart-widget-title-fontsrc:var(--widget-fontsrc);
    --chart-widget-subtitle-font-color:var(--widget-primary-font-color);
    --chart-widget-subtitle-fontsize:var(--widget-fontsize);
    --chart-widget-subtitle-fontweight:var(--widget-fontweight);
    --chart-widget-subtitle-fontfamily:var(--widget-fontfamily);
    --chart-widget-subtitle-fontsrc:var(--widget-fontsrc);
    --chart-widget-axis-title-font-color:var(--widget-axis-title-font-color);
    --chart-widget-axis-title-fontsize:var(--widget-fontsize);
    --chart-widget-axis-title-fontweight:var(--widget-fontweight);
    --chart-widget-axis-title-fontfamily:var(--widget-fontfamily);
    --chart-widget-axis-title-fontsrc:var(--widget-fontsrc);
    --chart-widget-axis-gridlines-color:var(--widget-axis-gridlines-color);
    --chart-widget-axis-label-font-color:var(--widget-label-primary-font-color);
    --chart-widget-axis-label-fontsize:var(--widget-fontsize);
    --chart-widget-axis-label-fontweight:var(--widget-fontweight);
    --chart-widget-axis-label-fontfamily:var(--widget-fontfamily);
    --chart-widget-axis-label-fontsrc:var(--widget-fontsrc);
    --chart-widget-axis-ticklines-color:var(--widget-axis-ticklines-color);
    --chart-widget-datalabel-font-color:var(--widget-label-primary-font-color);
    --chart-widget-datalabel-fontsize:var(--widget-fontsize);
    --chart-widget-datalabel-fontweight:var(--widget-fontweight);
    --chart-widget-datalabel-fontfamily:var(--widget-fontfamily);
    --chart-widget-datalabel-fontsrc:var(--widget-fontsrc);
    --chart-widget-legend-font-color:var(--widget-legend-font-color);
    --chart-widget-legend-fontsize:var(--widget-fontsize);
    --chart-widget-legend-fontweight:var(--widget-fontweight);
    --chart-widget-legend-fontfamily:var(--widget-fontfamily);
    --chart-widget-legend-fontsrc:var(--widget-fontsrc);
    --chart-widget-legendtitle-fontsize:var(--widget-fontsize);
    --chart-widget-legendtitle-fontweight:var(--widget-fontweight);
    --chart-widget-legendtitle-fontfamily:var(--widget-fontfamily);
    --chart-widget-marker-color: #ffffff;
}

```

#### Map Variables

Click the [Map](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.map.widgets.definition.css) to navigate the template file.
```css3

:root {
    --map-widget-title-font-color: var(--widget-primary-font-color);
    --map-widget-title-fontsize: var(--widget-fontsize);
    --map-widget-title-fontweight: var(--widget-fontweight);
    --map-widget-title-fontfamily: var(--widget-fontfamily);
    --map-widget-title-fontsrc: var(--widget-fontsrc);
    --map-widget-subtitle-font-color: var(--widget-primary-font-color);
    --map-widget-subtitle-fontsize: var(--widget-fontsize);
    --map-widget-subtitle-fontweight: var(--widget-fontweight);
    --map-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --map-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --map-widget-datalabel-font-color: var(--widget-primary-font-color);
    --map-widget-datalabel-fontsize: var(--widget-fontsize);
    --map-widget-datalabel-fontweight: var(--widget-fontweight);
    --map-widget-datalabel-fontfamily: var(--widget-fontfamily);
    --map-widget-datalabel-fontsrc: var(--widget-fontsrc);
    --map-widget-legend-font-color: var(--widget-legend-font-color);
    --map-widget-legend-fontsize: var(--widget-fontsize);
    --map-widget-legend-fontweight: var(--widget-fontweight);
    --map-widget-legend-fontfamily: var(--widget-fontfamily);
    --map-widget-legend-fontsrc: var(--widget-fontsrc);
    --map-widget-legendtitle-fontsize: var(--widget-fontsize);
    --map-widget-legendtitle-fontweight: var(--widget-fontweight);
    --map-widget-legendtitle-fontfamily: var(--widget-fontfamily);
}

```

#### Tree Map Variables

Click the [Tree map](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.treemap.widgets.definition.css) to navigate the template file.
```css3

:root {
    --treemap-widget-title-font-color: var(--widget-primary-font-color);
    --treemap-widget-title-fontsize: var(--widget-fontsize);
    --treemap-widget-title-fontweight: var(--widget-fontweight);
    --treemap-widget-title-fontfamily: var(--widget-fontfamily);
    --treemap-widget-title-fontsrc: var(--widget-fontsrc);
    --treemap-widget-subtitle-font-color: var(--widget-primary-font-color);
    --treemap-widget-subtitle-fontsize: var(--widget-fontsize);
    --treemap-widget-subtitle-fontweight: var(--widget-fontweight);
    --treemap-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --treemap-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --treemap-widget-datalabel-font-color: var(--widget-primary-font-color);
    --treemap-widget-datalabel-fontsize: var(--widget-fontsize);
    --treemap-widget-datalabel-fontweight: var(--widget-fontweight);
    --treemap-widget-datalabel-fontfamily: var(--widget-fontfamily);
    --treemap-widget-datalabel-fontsrc: var(--widget-fontsrc);
    --treemap-widget-legend-fontsize: var(--widget-fontsize);
    --treemap-widget-legend-fontweight: var(--widget-fontweight);
    --treemap-widget-legend-fontfamily: var(--widget-fontfamily);
    --treemap-widget-legend-fontsrc: var(--widget-fontsrc);
    --treemap-widget-legendtitle-fontsize: var(--widget-fontsize);
    --treemap-widget-legendtitle-fontweight: var(--widget-fontweight);
    --treemap-widget-legendtitle-fontfamily: var(--widget-fontfamily);
    --treemap-widget-legendtitle-fontsrc: var(--widget-fontsrc);
}

```

#### Heat Map Variables

Click the [Heat map](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.heatmap.widgets.definition.css) to navigate the template file.
```css3

:root {
    --heatmap-widget-title-font-color: var(--widget-primary-font-color);
    --heatmap-widget-title-fontsize: var(--widget-fontsize);
    --heatmap-widget-title-fontweight: var(--widget-fontweight);
    --heatmap-widget-title-fontfamily: var(--widget-fontfamily);
    --heatmap-widget-title-fontsrc: var(--widget-fontsrc);
    --heatmap-widget-subtitle-font-color: var(--widget-primary-font-color);
    --heatmap-widget-subtitle-fontsize: var(--widget-fontsize);
    --heatmap-widget-subtitle-fontweight: var(--widget-fontweight);
    --heatmap-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --heatmap-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --heatmap-widget-axis-title-font-color: var(--widget-axis-title-font-color);
    --heatmap-widget-axis-title-fontsize: var(--widget-fontsize);
    --heatmap-widget-axis-title-fontweight: var(--widget-fontweight);
    --heatmap-widget-axis-title-fontfamily: var(--widget-fontfamily);
    --heatmap-widget-axis-title-fontsrc: var(--widget-fontsrc);
    --heatmap-widget-axis-label-font-color: var(--widget-label-primary-font-color);
    --heatmap-widget-axis-label-fontsize: var(--widget-fontsize);
    --heatmap-widget-axis-label-fontweight: var(--widget-fontweight);
    --heatmap-widget-axis-label-fontfamily: var(--widget-fontfamily);
    --heatmap-widget-axis-label-fontsrc: var(--widget-fontsrc);
    --heatmap-widget-datalabel-font-color: var(--widget-secondary-font-color);
    --heatmap-widget-datalabel-fontsize: var(--widget-fontsize);
    --heatmap-widget-datalabel-fontweight: var(--widget-fontweight);
    --heatmap-widget-datalabel-fontfamily: var(--widget-fontfamily);
    --heatmap-widget-datalabel-fontsrc: var(--widget-fontsrc);
    --heatmap-widget-emptyfill-color: #EEEEEE;
    --heatmap-widget-legend-font-color: var(--widget-legend-font-color);
    --heatmap-widget-legend-fontsize: var(--widget-fontsize);
    --heatmap-widget-legend-fontweight: var(--widget-fontweight);
    --heatmap-widget-legend-fontfamily: var(--widget-fontfamily);
    --heatmap-widget-legend-fontsrc: var(--widget-fontsrc);
}

```

#### Grid Variables

Click the [Grid](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.grid.widgets.definition.css) to navigate the template file.
```css3

:root {
    --grid-widget-title-font-color: var(--widget-primary-font-color);
    --grid-widget-title-fontsize: var(--widget-fontsize);
    --grid-widget-title-fontweight: var(--widget-fontweight);
    --grid-widget-title-fontfamily: var(--widget-fontfamily);
    --grid-widget-title-fontsrc: var(--widget-fontsrc);
    --grid-widget-subtitle-font-color: var(--widget-primary-font-color);
    --grid-widget-subtitle-fontsize: var(--widget-fontsize);
    --grid-widget-subtitle-fontweight: var(--widget-fontweight);
    --grid-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --grid-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --grid-widget-content-background: var(--widget-primary-background);
    --grid-widget-content-font-fontcolor: var(--widget-primary-font-color);
    --grid-widget-content-font-fontsize: var(--widget-fontsize);
    --grid-widget-content-font-fontweight: var(--widget-fontweight);
    --grid-widget-content-font-fontfamily: var(--widget-fontfamily);
    --grid-widget-content-font-fontsrc: var(--widget-fontsrc);
    --grid-widget-content-hover-background: var(--widget-primary-background);
    --grid-widget-content-hover-font-fontsize: var(--widget-fontsize);
    --grid-widget-content-hover-font-fontweight: var(--widget-fontweight);
    --grid-widget-content-hover-font-fontfamily: var(--widget-fontfamily);
    --grid-widget-content-hover-font-fontsrc: var(--widget-fontsrc);
    --grid-widget-content-selection-background: var(--widget-selection-background-color);
    --grid-widget-content-selection-font-color: var(--widget-primary-font-color);
    --grid-widget-content-selection-font-fontsize: var(--widget-fontsize);
    --grid-widget-content-selection-font-fontweight: var(--widget-fontweight);
    --grid-widget-content-selection-font-fontfamily: var(--widget-fontfamily);
    --grid-widget-content-selection-font-fontsrc: var(--widget-fontsrc);
    --grid-widget-filterbar-background: var(--widget-primary-background);
    --grid-widget-filterbar-border: var(--primary-border-color);
    --grid-widget-filterbar-font-color: var(--widget-primary-font-color);
    --grid-widget-filterbar-font-fontsize: var(--widget-fontsize);
    --grid-widget-filterbar-font-fontweight: var(--widget-fontweight);
    --grid-widget-filterbar-font-fontfamily: var(--widget-fontfamily);
    --grid-widget-filterbar-font-fontsrc: var(--widget-fontsrc);
    --grid-widget-header-background: #F3F7FA;
    --grid-widget-header-font-color: #2D3748;
    --grid-widget-header-font-fontsize: var(--widget-fontsize);
    --grid-widget-header-font-fontweight: var(--widget-fontweight);
    --grid-widget-header-font-fontfamily: var(--widget-fontfamily);
    --grid-widget-header-font-fontsrc: var(--widget-fontsrc);
}

```

#### Pivot Grid Variables

Click the [Pivot grid](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.pivotgrid.widgets.definition.css) to navigate the template file.
```css3

:root {
    --pivotgrid-widget-title-font-color: var(--widget-primary-font-color);
    --pivotgrid-widget-title-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-title-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-title-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-title-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-subtitle-font-color: var(--widget-primary-font-color);
    --pivotgrid-widget-subtitle-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-subtitle-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-border: "";
    --pivotgrid-widget-content-background: var(--widget-primary-background);
    --pivotgrid-widget-content-font-fontcolor: var(--widget-secondary-font-color);
    --pivotgrid-widget-content-font-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-content-font-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-content-font-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-content-font-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-content-hover-background: var(--widget-primary-background);
    --pivotgrid-widget-content-hover-font-color: var(--widget-secondary-font-color);
    --pivotgrid-widget-content-hover-font-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-content-hover-font-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-content-hover-font-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-content-hover-font-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-content-selection-background: var(--widget-selection-background-color);
    --pivotgrid-widget-content-selection-font-color: var(--widget-selection-font-color);
    --pivotgrid-widget-content-selection-font-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-content-selection-font-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-content-selection-font-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-content-selection-font-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-header-background: var(--hover-bg-normal-color);
    --pivotgrid-widget-header-font-color: var(--widget-secondary-font-color);
    --pivotgrid-widget-header-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-header-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-header-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-header-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-groupingbutton-background: var(--widget-primary-background);
    --pivotgrid-widget-groupingButton-font-color: #696969;
    --pivotgrid-widget-groupingButton-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-groupingButton-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-groupingButton-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-groupingButton-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-groupingButton-icon-font-color: var(--widget-icon-font-color);
    --pivotgrid-widget-groupingButton-icon-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-groupingButton-icon-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-groupingButton-icon-hover-background: var(--hover-bg-normal-color);
    --pivotgrid-widget-groupingButton-icon-hover-font-color: var(--widget-icon-font-color);
    --pivotgrid-widget-groupingButton-icon-hover-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-groupingButton-icon-hover-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-groupingpanel-background: #e9e9e9;
    --pivotgrid-widget-filterdialog-list-bordercolor: var(--secondary-border-color);
    --pivotgrid-widget-filterdialog-list-background: var(--primary-background-color);
    --pivotgrid-widget-filterdialog-list-font-color: var(--widget-secondary-font-color);
    --pivotgrid-widget-filterdialog-list-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-filterdialog-list-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-filterdialog-list-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-filterdialog-list-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-filterdialog-list-hover-background: var(--widget-datavalue-hover-background);
    --pivotgrid-widget-filterdialog-list-hover-font-color: var(--widget-secondary-font-color);
    --pivotgrid-widget-filterdialog-list-hover-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-filterdialog-list-hover-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-filterdialog-list-hover-fontfamily: var(--widget-fontfamily;
    --pivotgrid-widget-filterdialog-list-hover-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-filterdialog-list-selection-background: var(--widget-selection-background-color);
    --pivotgrid-widget-filterdialog-list-selection-font-color: var(--widget-selection-font-color);
    --pivotgrid-widget-filterdialog-list-selection-font-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-filterdialog-list-selection-font-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-filterdialog-list-selection-font-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-filterdialog-list-selection-font-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-filterdialog-list-downarrow-color: var(--active-icon-normal-color);
    --pivotgrid-widget-filterdialog-list-footer-background: var(--designer-header-background);
    --pivotgrid-widget-cancelbutton-background: var(--secondary-btn-bg-normal-color);
    --pivotgrid-widget-cancelbutton-font-color: var(--secondary-btn-text-normal-color);
    --pivotgrid-widget-cancelbutton-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-cancelbutton-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-cancelbutton-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-cancelbutton-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-cancelbutton-press-background: var(--secondary-btn-bg-normal-color);
    --pivotgrid-widget-cancelbutton-press-font-color: var(--secondary-btn-text-normal-color);
    --pivotgrid-widget-cancelbutton-hover-background: var(--secondary-btn-bg-hover-color);
    --pivotgrid-widget-cancelbutton-hover-font-color: var(--secondary-btn-text-hover-color);
    --pivotgrid-widget-cancelbutton-hover-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-cancelbutton-hover-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-cancelbutton-hover-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-cancelbutton-hover-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-okbutton-background: var(--primary-btn-bg-normal-color);
    --pivotgrid-widget-okbutton-font-color: var(--primary-btn-text-normal-color);
    --pivotgrid-widget-okbutton-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-okbutton-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-okbutton-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-okbutton-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-okbutton-press-background: var(--primary-btn-bg-normal-color);
    --pivotgrid-widget-okbutton-press-font-color: var(--primary-btn-text-normal-color);
    --pivotgrid-widget-okbutton-hover-background: var(--primary-btn-bg-hover-color);
    --pivotgrid-widget-okbutton-hover-font-color: var(--primary-btn-text-normal-color);
    --pivotgrid-widget-okbutton-hover-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-okbutton-hover-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-okbutton-hover-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-okbutton-hover-fontsrc: var(--widget-fontsrc);
    --pivotgrid-widget-filterdialog-header-background: var(--designer-header-background);
    --pivotgrid-widget-filterdialog-header-font-color: var(--widget-secondary-font-color);
    --pivotgrid-widget-filterdialog-header-fontsize: var(--widget-fontsize);
    --pivotgrid-widget-filterdialog-header-fontweight: var(--widget-fontweight);
    --pivotgrid-widget-filterdialog-header-fontfamily: var(--widget-fontfamily);
    --pivotgrid-widget-filterdialog-header-fontsrc: var(--widget-fontsrc);
}

```

#### List Box Variables

Click the [List box](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.listbox.widgets.definition.css) to navigate the template file.
```css3

:root {
    --listbox-widget-title-font-color: var(--widget-primary-font-color);
    --listbox-widget-title-fontsize: var(--widget-fontsize);
    --listbox-widget-title-fontweight: var(--widget-fontweight);
    --listbox-widget-title-fontfamily: var(--widget-fontfamily);
    --listbox-widget-title-fontsrc: var(--widget-fontsrc);
    --listbox-widget-subtitle-font-color: var(--widget-primary-font-color);
    --listbox-widget-subtitle-fontsize: var(--widget-fontsize);
    --listbox-widget-subtitle-fontweight: var(--widget-fontweight);
    --listbox-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --listbox-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --listbox-widget-dropdownlist-bordercolor: var(--secondary-border-color);
    --listbox-widget-dropdownlist-background: var(--widget-primary-background);
    --listbox-widget-dropdownlist-font-color: var(--widget-secondary-font-color);
    --listbox-widget-dropdownlist-fontsize: var(--widget-fontsize);
    --listbox-widget-dropdownlist-fontweight: var(--widget-fontweight);
    --listbox-widget-dropdownlist-fontfamily: var(--widget-fontfamily);
    --listbox-widget-dropdownlist-fontsrc: var(--widget-fontsrc);
    --listbox-widget-dropdownlist-hover-background: var(--widget-datavalue-hover-background);
    --listbox-widget-dropdownlist-hover-font-color: var(--widget-secondary-font-color);
    --listbox-widget-dropdownlist-hover-fontsize: var(--widget-fontsize);
    --listbox-widget-dropdownlist-hover-fontweight: var(--widget-fontweight);
    --listbox-widget-dropdownlist-hover-fontfamily: var(--widget-fontfamily);
    --listbox-widget-dropdownlist-hover-fontsrc: var(--widget-fontsrc);
    --listbox-widget-dropdownlist-selection-background: var(--widget-selection-background-color);
    --listbox-widget-dropdownlist-selection-font-color: var(--widget-selection-font-color);
    --listbox-widget-dropdownlist-selection-fontsize: var(--widget-fontsize);
    --listbox-widget-dropdownlist-selection-fontweight: var(--widget-fontweight);
    --listbox-widget-dropdownlist-selection-fontfamily: var(--widget-fontfamily);
    --listbox-widget-dropdownlist-selection-fontsrc: var(--widget-fontsrc);
    --listbox-widget-dropdownlist-downarrow-color: var(--active-icon-normal-color);
    --listbox-widget-checkbox-tick-color: var(--checkbox-btn-tick-color);
    --listbox-widget-checkbox-unchecked-bg: var(--checkbox-btn-unchecked-bg-color);
    --listbox-widget-checkbox-unchecked-border: var(--checkbox-btn-unchecked-border-color);
    --listbox-widget-checkbox-checked-bg: var(--checkbox-btn-checked-bg-color);
    --listbox-widget-checkbox-checked-border: var(--checkbox-btn-checked-border-color);
}

```

#### Combo Box Variables

Click the [Combo box](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.combobox.widgets.definition.css) to navigate the template file.
```css3

:root {
    --combobox-widget-title-font-color: var(--widget-primary-font-color);
    --combobox-widget-title-fontsize: var(--widget-fontsize);
    --combobox-widget-title-fontweight: var(--widget-fontweight);
    --combobox-widget-title-fontfamily: var(--widget-fontfamily);
    --combobox-widget-title-fontsrc: var(--widget-fontsrc);
    --combobox-widget-subtitle-font-color: var(--widget-primary-font-color);
    --combobox-widget-subtitle-fontsize: var(--widget-fontsize);
    --combobox-widget-subtitle-fontweight: var(--widget-fontweight);
    --combobox-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --combobox-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --combobox-widget-placeholder-text-color: var(--widget-secondary-font-color);
    --combobox-widget-border-color: var(--primary-border-color);
    --combobox-widget-box-shadow: var(--box-shadow);
    --combobox-widget-dropdownlist-border-color: var(--primary-border-color);
    --combobox-widget-dropdownlist-background: var(--widget-primary-background);
    --combobox-widget-dropdownlist-font-color: var(--widget-secondary-font-color);
    --combobox-widget-dropdownlist-fontsize: var(--widget-fontsize);
    --combobox-widget-dropdownlist-fontweight: var(--widget-fontweight);
    --combobox-widget-dropdownlist-fontfamily: var(--widget-fontfamily);
    --combobox-widget-dropdownlist-fontsrc: var(--widget-fontsrc);
    --combobox-widget-dropdownlist-hover-background: var(--widget-datavalue-hover-background);
    --combobox-widget-dropdownlist-hover-font-color: var(--widget-secondary-font-color);
    --combobox-widget-dropdownlist-hover-fontsize: var(--widget-fontsize);
    --combobox-widget-dropdownlist-hover-fontweight: var(--widget-fontweight);
    --combobox-widget-dropdownlist-hover-fontfamily: var(--widget-fontfamily);
    --combobox-widget-dropdownlist-hover-fontsrc: var(--widget-fontsrc);
    --combobox-widget-dropdownlist-selection-background: var(--widget-selection-background-color);
    --combobox-widget-dropdownlist-selection-font-color: var(--widget-selection-font-color);
    --combobox-widget-dropdownlist-selection-fontsize: var(--widget-fontsize);
    --combobox-widget-dropdownlist-selection-fontweight: var(--widget-fontweight);
    --combobox-widget-dropdownlist-selection-fontfamily: var(--widget-fontfamily);
    --combobox-widget-dropdownlist-selection-fontsrc: var(--widget-fontsrc);
    --combobox-widget-dropdownlist-downarrow-color: var(--active-icon-normal-color);
    --combobox-widget-checkbox-tick-color: var(--checkbox-btn-tick-color);
    --combobox-widget-checkbox-unchecked-bg: var(--checkbox-btn-unchecked-bg-color);
    --combobox-widget-checkbox-unchecked-border: var(--checkbox-btn-unchecked-border-color);
    --combobox-widget-checkbox-checked-bg: var(--checkbox-btn-checked-bg-color);
    --combobox-widget-checkbox-checked-border: var(--checkbox-btn-checked-border-color);
}

```

#### Date Picker Variables

Click the [Date picker](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.datepicker.widgets.definition.css) to navigate the template file.
```css3

:root {
    --datepicker-widget-title-font-color: var(--widget-primary-font-color);
    --datepicker-widget-title-fontsize: var(--widget-fontsize);
    --datepicker-widget-title-fontweight: var(--widget-fontweight);
    --datepicker-widget-title-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-title-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-subtitle-font-color: var(--widget-primary-font-color);
    --datepicker-widget-subtitle-fontsize: var(--widget-fontsize);
    --datepicker-widget-subtitle-fontweight: var(--widget-fontweight);
    --datepicker-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --ddatepicker-widget-placeholder-text-color: var(--widget-secondary-font-color);
    --datepicker-widget-textbox-border: var(--primary-border-color);
    --datepicker-widget-textbox-background: var(--widget-primary-background);
    --datepicker-widget-textbox-fontsize: var(--widget-fontsize);
    --datepicker-widget-textbox-fontweight: var(--widget-fontweight);
    --datepicker-widget-textbox-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-textbox-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-calendar-background: var(--widget-primary-background);
    --datepicker-widget-calender-border-color: var(--secondary-border-color);
    --datepicker-widget-weekheader-background: var(--widget-primary-background);
    --datepicker-widget-weekheader-font-color: #5e5e5e;
    --datepicker-widget-weekheader-fontsize: var(--widget-fontsize);
    --datepicker-widget-weekheader-fontweight: var(--widget-fontweight);
    --datepicker-widget-weekheader-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-weekheader-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-availabledates-border-color: var(--secondary-border-color);
    --datepicker-widget-availabledates-background: var(--widget-primary-background);
    --datepicker-widget-availabledates-font-color: var(--widget-secondary-font-color);
    --datepicker-widget-availabledates-fontsize: var(--widget-fontsize);
    --datepicker-widget-availabledates-fontweight: var(--widget-fontweight);
    --datepicker-widget-availabledates-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-availabledates-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-availabledates-hover-background: var(--widget-datavalue-hover-background);
    --datepicker-widget-availabledates-hover-font-color: var(--widget-secondary-font-color);
    --datepicker-widget-availabledates-hover-fontsize: var(--widget-fontsize);
    --datepicker-widget-availabledates-hover-fontweight: var(--widget-fontweight);
    --datepicker-widget-availabledates-hover-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-availabledates-hover-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-availabledates-selection-background: var(--widget-selection-background-color);
    --datepicker-widget-availabledates-selection-font-color: var(--widget-selection-font-color);
    --datepicker-widget-availabledates-selection-fontsize: var(--widget-fontsize);
    --datepicker-widget-availabledates-selection-fontweight: var(--widget-fontweight);
    --datepicker-widget-availabledates-selection-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-availabledates-selection-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-availabledates-downArrow-Color: var(--active-icon-normal-color);
    --datepicker-widget-unavailabledays-background: var(--widget-primary-background);
    --datepicker-widget-unavailabledays-font-color: #D8D8D8;
    --datepicker-widget-unavailabledays-fontsize: var(--widget-fontsize);
    --datepicker-widget-unavailabledays-fontweight: var(--widget-fontweight);
    --datepicker-widget-unavailabledays-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-unavailabledays-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-othermonthdays-background: var(--widget-primary-background);
    --datepicker-widget-othermonthdays-font-color: #999999;
    --datepicker-widget-othermonthdays-fontsize: var(--widget-fontsize);
    --datepicker-widget-othermonthdays-fontweight: var(--widget-fontweight);
    --datepicker-widget-othermonthdays-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-othermonthdays-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-icon-fontsize: var(--widget-fontsize);
    --datepicker-widget-icon-fontweight: var(--widget-fontweight);
    --datepicker-widget-icon-hover-fontsize: var(--widget-fontsize);
    --datepicker-widget-icon-hover-fontweight: var(--widget-fontweight);
    --datepicker-widget-cancelbutton-background: var(--secondary-btn-bg-normal-color);
    --datepicker-widget-cancelbutton-font-color: var(--secondary-btn-text-normal-color);
    --datepicker-widget-cancelbutton-fontsize: var(--widget-fontsize);
    --datepicker-widget-cancelbutton-fontweight: var(--widget-fontweight);
    --datepicker-widget-cancelbutton-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-cancelbutton-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-cancelbutton-press-background: var(--secondary-btn-bg-normal-color);
    --datepicker-widget-cancelbutton-press-font-color: var(--secondary-btn-text-normal-color);
    --datepicker-widget-cancelbutton-hover-background: var(--secondary-btn-bg-hover-color);
    --datepicker-widget-cancelbutton-hover-font-color: var(--secondary-btn-text-hover-color);
    --datepicker-widget-cancelbutton-hover-fontsize: var(--widget-fontsize);
    --datepicker-widget-cancelbutton-hover-fontweight: var(--widget-fontweight);
    --datepicker-widget-cancelbutton-hover-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-cancelbutton-hover-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-okbutton-background: var(--primary-btn-bg-normal-color);
    --datepicker-widget-okbutton-font-color: var(--primary-btn-text-normal-color);
    --datepicker-widget-okbutton-fontsize: var(--widget-fontsize);
    --datepicker-widget-okbutton-fontweight: var(--widget-fontweight);
    --datepicker-widget-okbutton-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-okbutton-fontsrc: var(--widget-fontsrc);
    --datepicker-widget-okbutton-press-background: var(--primary-btn-bg-normal-color);
    --datepicker-widget-okbutton-press-font-color: var(--primary-btn-text-normal-color);
    --datepicker-widget-okbutton-hover-background: var(--primary-btn-bg-hover-color);
    --datepicker-widget-okbutton-hover-font-color: var(--primary-btn-text-hover-color);
    --datepicker-widget-okbutton-hover-fontsize: var(--widget-fontsize);
    --datepicker-widget-okbutton-hover-fontweight: var(--widget-fontweight);
    --datepicker-widget-okbutton-hover-fontfamily: var(--widget-fontfamily);
    --datepicker-widget-okbutton-hover-fontsrc: var(--widget-fontsrc);
}

```


#### KPI Card Variables

Click the [KPI card](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.kpi.widgets.definition.css) to navigate the template file.
```css3

:root {
    --kpicard-widget-header-title-font-color: var(--widget-primary-font-color);
    --kpicard-widget-header-title-fontsize: var(--widget-fontsize);
    --kpicard-widget-header-title-fontweight: var(--widget-fontweight);
    --kpicard-widget-header-title-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-header-title-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-subtitle-font-color: var(--widget-primary-font-color);
    --kpicard-widget-subtitle-fontsize: var(--widget-fontsize);
    --kpicard-widget-subtitle-fontweight: var(--widget-fontweight);
    --kpicard-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-border: var(--secondary-border-color);
    --kpicard-widget-leftlabel-font-color: var(--widget-label-secondary-font-color);
    --kpicard-widget-leftlabel-fontsize: var(--widget-fontsize);
    --kpicard-widget-leftlabel-fontweight: var(--widget-fontweight);
    --kpicard-widget-leftlabel-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-leftlabel-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-leftvalue-font-color: var(--widget-label-secondary-font-color);
    --kpicard-widget-leftvalue-fontsize: var(--widget-fontsize);
    --kpicard-widget-leftvalue-fontweight: var(--widget-fontweight);
    --kpicard-widget-leftvalue-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-leftvalue-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-rightlabel-font-color: var(--widget-label-secondary-font-color);
    --kpicard-widget-rightlabel-fontsize: var(--widget-fontsize);
    --kpicard-widget-rightlabel-fontweight: var(--widget-fontweight);
    --kpicard-widget-rightlabel-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-rightlabel-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-rightvalue-font-color: var(--widget-label-secondary-font-color);
    --kpicard-widget-rightvalue-fontsize: var(--widget-fontsize);
    --kpicard-widget-rightvalue-fontweight: var(--widget-fontweight);
    --kpicard-widget-rightvalue-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-rightvalue-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-kpivalue-font-color: var(--widget-label-secondary-font-color);
    --kpicard-widget-kpivalue-fontsize: var(--widget-fontsize);
    --kpicard-widget-kpivalue-fontweight: var(--widget-fontweight);
    --kpicard-widget-kpivalue-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-kpivalue-fontsrc: var(--widget-fontsrc);
    --kpicard-widget-seperator-color: #9AA1A9;
    --kpicard-widget-title-font-color: var(--widget-label-secondary-font-color);
    --kpicard-widget-title-fontsize: var(--widget-fontsize);
    --kpicard-widget-title-fontweight: var(--widget-fontweight);
    --kpicard-widget-title-fontfamily: var(--widget-fontfamily);
    --kpicard-widget-title-fontsrc: var(--widget-fontsrc);
}

```

#### Number Card Variables

Click the [Number card](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.numbercard.widgets.definition.css) to navigate the template file.
```css3

:root {
    --numbercard-widget-header-title-font-color: var(--widget-primary-font-color);
    --numbercard-widget-header-title-fontsize: var(--widget-fontsize);
    --numbercard-widget-header-title-fontweight: var(--widget-fontweight);
    --numbercard-widget-header-title-fontfamily: var(--widget-fontfamily);
    --numbercard-widget-header-title-fontsrc: var(--widget-fontsrc);
    --numbercard-widget-subtitle-font-color: var(--widget-primary-font-color);
    --numbercard-widget-subtitle-fontsize: var(--widget-fontsize);
    --numbercard-widget-subtitle-fontweight: var(--widget-fontweight);
    --numbercard-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --numbercard-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --numbercard-widget-border: var(--secondary-border-color);
    --numbercard-widget-rightvalue-font-color: var(--widget-label-secondary-font-color);
    --numbercard-widget-rightvalue-fontsize: var(--widget-fontsize);
    --numbercard-widget-rightvalue-fontweight: var(--widget-fontweight);
    --numbercard-widget-rightvalue-fontfamily: var(--widget-fontfamily);
    --numbercard-widget-rightvalue-fontsrc: var(--widget-fontsrc);
    --numbercard-widget-title-font-color: var(--widget-label-secondary-font-color);
    --numbercard-widget-title-fontsize: var(--widget-fontsize);
    --numbercard-widget-title-fontweight: var(--widget-fontweight);
    --numbercard-widget-title-fontfamily: var(--widget-fontfamily);
    --numbercard-widget-title-fontsrc: var(--widget-fontsrc);
}

```

#### Range Slider Variables

Click the [Range slider](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.rangeslider.widgets.definition.css) to navigate the template file.
```css3

:root {
    --rangeslider-widget-title-font-color: var(--widget-primary-font-color);
    --rangeslider-widget-title-fontsize: var(--widget-fontsize);
    --rangeslider-widget-title-fontweight: var(--widget-fontweight);
    --rangeslider-widget-title-fontfamily: var(--widget-fontfamily);
    --rangeslider-widget-title-fontsrc: var(--widget-fontsrc);
    --rangeslider-widget-subtitle-font-color: var(--widget-primary-font-color);
    --rangeslider-widget-subtitle-fontsize: var(--widget-fontsize);
    --rangeslider-widget-subtitle-fontweight: var(--widget-fontweight);
    --rangeslider-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --rangeslider-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --rangeslider-widget-slider-background: #dbdbdb;
    --rangeslider-widget-range-color: #826AF9;
    --rangeslider-widget-handle-background: var(--widget-primary-background);
    --rangeslider-widget-handle-border: #826AF9;
    --rangeslider-widget-label-background: var(--widget-primary-background);
    --rangeslider-widget-label-font-color: var(--widget-label-primary-font-color);
    --rangeslider-widget-label-fontsize: var(--widget-fontsize);
    --rangeslider-widget-label-fontweight: var(--widget-fontweight);
    --rangeslider-widget-label-fontfamily: var(--widget-fontfamily);
    --rangeslider-widget-label-fontsrc: var(--widget-fontsrc);
}

```
#### Range Navigator Variables

Click the [Range navigator](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.rangenavigator.widgets.definition.css) to navigate the template file.
```css3

:root {
    --rangenavigator-widget-title-font-color: var(--widget-primary-font-color);
    --rangenavigator-widget-title-fontsize: var(--widget-fontsize);
    --rangenavigator-widget-title-fontweight: var(--widget-fontweight);
    --rangenavigator-widget-title-fontfamily: var(--widget-fontfamily);
    --rangenavigator-widget-title-fontsrc: var(--widget-fontsrc);
    --rangenavigator-widget-subtitle-font-color: var(--widget-primary-font-color);
    --rangenavigator-widget-subtitle-fontsize: var(--widget-fontsize);
    --rangenavigator-widget-subtitle-fontweight: var(--widget-fontweight);
    --rangenavigator-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --rangenavigator-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --rangenavigator-widget-content-fontsize: var(--widget-fontsize);
    --rangenavigator-widget-content-fontweight: var(--widget-fontweight);
    --rangenavigator-widget-content-fontfamily: var(--widget-fontfamily);
    --rangenavigator-widget-content-fontsrc: var(--widget-fontsrc);
}

```

#### Circular Gauge Variables

Click the [Circular gauge](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.circularguage.widgets.definition.css) to navigate the template file.
```css3

:root {
    --circulargauge-widget-header-title-font-color: var(--widget-primary-font-color);
    --circulargauge-widget-header-title-fontsize: var(--widget-fontsize);
    --circulargauge-widget-header-title-fontweight: var(--widget-fontweight);
    --circulargauge-widget-header-title-fontfamily: var(--widget-fontfamily);
    --circulargauge-widget-header-title-fontsrc: var(--widget-fontsrc);
    --circulargauge-widget-subtitle-font-color: var(--widget-primary-font-color);
    --circulargauge-widget-subtitle-fontsize: var(--widget-fontsize);
    --circulargauge-widget-subtitle-fontweight: var(--widget-fontweight);
    --circulargauge-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --circulargauge-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --circulargauge-widget-needle-pointer-background: var(--widget-label-secondary-font-color);
    --circulargauge-widget-scale-background: #E0E0E0;
    --circulargauge-widget-target-pointer-background: #424242;
    --circulargauge-widget-label-font-color: var(--widget-label-secondary-font-color);
    --circulargauge-widget-label-fontsize: var(--widget-fontsize);
    --circulargauge-widget-label-fontweight: var(--widget-fontweight);
    --circulargauge-widget-label-fontfamily: var(--widget-fontfamily);
    --circulargauge-widget-label-fontsrc: var(--widget-fontsrc);
    --circulargauge-widget-title-color: var(--widget-primary-font-color);
    --circulargauge-widget-title-fontsize: var(--widget-fontsize);
    --circulargauge-widget-title-fontweight: var(--widget-fontweight);
    --circulargauge-widget-title-fontfamily: var(--widget-fontfamily);
    --circulargauge-widget-title-fontsrc: var(--widget-fontsrc);
    --circulargauge-widget-value-font-color: var(--widget-label-secondary-font-color);
    --circulargauge-widget-value-fontsize: var(--widget-fontsize);
    --circulargauge-widget-value-fontweight: var(--widget-fontweight);
    --circulargauge-widget-value-fontfamily: var(--widget-fontfamily);
    --circulargauge-widget-value-fontsrc: var(--widget-fontsrc);
    --circulargauge-widget-differencevalue-fontsize: var(--widget-fontsize);
    --circulargauge-widget-differencevalue-fontweight: var(--widget-fontweight);
    --circulargauge-widget-differencevalue-fontfamily: var(--widget-fontfamily);
    --circulargauge-widget-differencevalue-fontsrc: var(--widget-fontsrc);
    --circulargauge-widget-differencevalue-low-color: #FF6C40;
    --circulargauge-widget-differencevalue-medium-color: #FFE700;
    --circulargauge-widget-differencevalue-high-color: #2CD9C5;
}

```

#### Radar Polar Variables

Click the [Radar polar](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.radarpolar.widgets.definition.css) to navigate the template file.
```css3

:root {
    --radarpolar-widget-title-font-color: var(--widget-primary-font-color);
    --radarpolar-widget-title-fontsize: var(--widget-fontsize);
    --radarpolar-widget-title-fontweight: var(--widget-fontweight);
    --radarpolar-widget-title-fontfamily: var(--widget-fontfamily);
    --radarpolar-widget-title-fontsrc: var(--widget-fontsrc);
    --radarpolar-widget-subtitle-font-color: var(--widget-primary-font-color);
    --radarpolar-widget-subtitle-fontsize: var(--widget-fontsize);
    --radarpolar-widget-subtitle-fontweight: var(--widget-fontweight);
    --radarpolar-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --radarpolar-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --radarpolar-widget-axis-label-font-color: var(--widget-label-primary-font-color);
    --radarpolar-widget-axis-label-fontsize: var(--widget-fontsize);
    --radarpolar-widget-axis-label-fontweight: var(--widget-fontweight);
    --radarpolar-widget-axis-label-fontfamily: var(--widget-fontfamily);
    --radarpolar-widget-axis-label-fontsrc: var(--widget-fontsrc);
    --radarpolar-widget-axis-ticklines-color: var(--widget-axis-ticklines-color);
    --radarpolar-widget-axis-gridlines-color: var(--widget-axis-gridlines-color);
    --radarpolar-widget-datalabel-font-color: var(--widget-label-primary-font-color);
    --radarpolar-widget-datalabel-fontsize: var(--widget-fontsize);
    --radarpolar-widget-datalabel-fontweight: var(--widget-fontweight);
    --radarpolar-widget-datalabel-fontfamily: var(--widget-fontfamily);
    --radarpolar-widget-datalabel-fontsrc: var(--widget-fontsrc);
    --radarpolar-widget-legend-font-color: var(--widget-legend-font-color);
    --radarpolar-widget-legend-fontsize: var(--widget-fontsize);
    --radarpolar-widget-legend-fontweight: var(--widget-fontweight);
    --radarpolar-widget-legend-fontfamily: var(--widget-fontfamily);
    --radarpolar-widget-legend-fontsrc: var(--widget-fontsrc);
    --radarpolar-widget-marker-color: #ffffff;
}

```

#### Combo Chart Variables

Click the [Combo chart](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.combochart.widgets.definition.css) to navigate the template file.
```css3

:root {
    --combochart-widget-title-font-color: var(--widget-primary-font-color);
    --combochart-widget-title-fontsize: var(--widget-fontsize);
    --combochart-widget-title-fontweight: var(--widget-fontweight);
    --combochart-widget-title-fontfamily: var(--widget-fontfamily);
    --combochart-widget-title-fontsrc: var(--widget-fontsrc);
    --combochart-widget-subtitle-font-color: var(--widget-primary-font-color);
    --combochart-widget-subtitle-fontsize: var(--widget-fontsize);
    --combochart-widget-subtitle-fontweight: var(--widget-fontweight);
    --combochart-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --combochart-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --combochart-widget-axis-title-font-color: var(--widget-label-primary-font-color);
    --combochart-widget-axis-title-fontsize: var(--widget-fontsize);
    --combochart-widget-axis-title-fontweight: var(--widget-fontweight);
    --combochart-widget-axis-title-fontfamily: var(--widget-fontfamily);
    --combochart-widget-axis-title-fontsrc: var(--widget-fontsrc);
    --combochart-widget-axis-gridlines-color: var(--widget-axis-gridlines-color);
    --combochart-widget-axis-label-font-color: var(--widget-label-primary-font-color);
    --combochart-widget-axis-label-fontsize: var(--widget-fontsize);
    --combochart-widget-axis-label-fontweight: var(--widget-fontweight);
    --combochart-widget-axis-label-fontfamily: var(--widget-fontfamily);
    --combochart-widget-axis-label-fontsrc: var(--widget-fontsrc);
    --combochart-widget-axis-ticklines-color: var(--widget-axis-ticklines-color);
    --combochart-widget-datalabel-font-color: var(--widget-label-primary-font-color);
    --combochart-widget-datalabel-fontsize: var(--widget-fontsize);
    --combochart-widget-datalabel-fontweight: var(--widget-fontweight);
    --combochart-widget-datalabel-fontfamily: var(--widget-fontfamily);
    --combochart-widget-datalabel-fontsrc: var(--widget-fontsrc);
    --combochart-widget-legend-font-color: var(--widget-legend-font-color);
    --combochart-widget-legend-fontsize: var(--widget-fontsize);
    --combochart-widget-legend-fontweight: var(--widget-fontweight);
    --combochart-widget-legend-fontfamily: var(--widget-fontfamily);
    --combochart-widget-legend-fontsrc: var(--widget-fontsrc);
    --combochart-widget-legendtitle-fontsize: var(--widget-fontsize);
    --combochart-widget-legendtitle-fontweight: var(--widget-fontweight);
    --combochart-widget-legendtitle-fontfamily: var(--widget-fontfamily);
    --combochart-widget-marker-color: #ffffff;
}

```

#### Period Over Period Variables

Click the [Period Over Period](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.pop.widget.definition.css) to navigate the template file.
```css3

:root {
    --pop-widget-title-font-color: var(--widget-primary-font-color);
    --pop-widget-title-fontsize: var(--widget-fontsize);
    --pop-widget-title-fontweight: var(--widget-fontweight);
    --pop-widget-title-fontfamily: var(--widget-fontfamily);
    --pop-widget-title-fontsrc: var(--widget-fontsrc);
    --pop-widget-subtitle-font-color: var(--widget-primary-font-color);
    --pop-widget-subtitle-fontsize: var(--widget-fontsize);
    --pop-widget-subtitle-fontweight: var(--widget-fontweight);
    --pop-widget-subtitle-fontfamily: var(--widget-fontfamily);
    --pop-widget-subtitle-fontsrc: var(--widget-fontsrc);
    --pop-widgetcontainer-daterangelabel-font-color: var(--widget-label-secondary-font-color);
    --pop-widgetcontainer-daterangelabel-fontsize: var(--widget-fontsize);
    --pop-widgetcontainer-daterangelabel-fontweight: var(--widget-fontweight);
    --pop-widgetcontainer-daterangelabel-fontfamily: var(--widget-fontfamily);
    --pop-widgetcontainer-daterangelabel-fontsrc: var(--widget-fontsrc);
    --pop-widgetcontainer-comparerangelabel-font-color: var(--widget-label-secondary-font-color);
    --pop-widgetcontainer-comparerangelabel-fontsize: var(--widget-fontsize);
    --pop-widgetcontainer-comparerangelabel-fontweight: var(--widget-fontweight);
    --pop-widgetcontainer-comparerangelabel-fontfamily: var(--widget-fontfamily);
    --pop-widgetcontainer-comparerangelabel-fontsrc: var(--widget-fontsrc);
    --pop-widgetcontainer-vslabel-font-color: var(--widget-label-secondary-font-color);
    --pop-widgetcontainer-vslabel-fontsize: var(--widget-fontsize);
    --pop-widgetcontainer-vslabel-fontweight: var(--widget-fontweight);
    --pop-widgetcontainer-vslabel-fontfamily: var(--widget-fontfamily);
    --pop-widgetcontainer-vslabel-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-header-Background: var(--widget-primary-background);
    --pop-widget-dialog-daterange-relativeheader-background: #CCFAFF;
    --pop-widget-dialog-daterange-relativeheader-label-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-daterange-relativeheader-label-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-daterange-relativeheader-label-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-daterange-relativeheader-label-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-daterange-relativeheader-label-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-daterange-relativelabel-font-color: var(--secondary-text-normal-color);
    --pop-widget-dialog-daterange-relativelabel-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-daterange-relativelabel-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-daterange-relativelabel-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-daterange-relativelabel-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-daterange-relativecombobox-background: var(--widget-primary-background);
    --pop-widget-dialog-daterange-relativecombobox-textbox-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-daterange-relativecombobox-textbox-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-daterange-relativecombobox-textbox-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-daterange-relativecombobox-textbox-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-daterange-relativecombobox-textbox-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-daterange-relativecombobox-popup-background: var(--widget-primary-background);
    --pop-widget-dialog-daterange-relativecombobox-popup-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-daterange-relativecombobox-popup-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-daterange-relativecombobox-popup-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-daterange-relativecombobox-popup-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-daterange-relativecombobox-popup-fontsrc: var(--widget-fontsrc);
    --pop-widget-daterange-calender-highlight-color: #CCFAFF;
    --pop-widget-daterange-calender-selection-color: #2D99FF;
    --pop-widget-daterange-calender-weekheader-font-color: var(--secondary-text-normal-color);
    --pop-widget-daterange-calender-weekheader-fontsize: var(--widget-fontsize);
    --pop-widget-daterange-calender-weekheader-fontweight: var(--widget-fontweight);
    --pop-widget-daterange-calender-weekheader-fontfamily: var(--widget-fontfamily);
    --pop-widget-daterange-calender-weekheader-fontsrc: var(--widget-fontsrc);
    --pop-widget-daterange-calender-content-hover-color: var(--widget-icon-hover-background);
    --pop-widget-daterange-calender-content-datatext-font-color: var(--widget-secondary-font-color);
    --pop-widget-daterange-calender-content-datatext-fontsize: var(--widget-fontsize);
    --pop-widget-daterange-calender-content-datatext-fontweight: var(--widget-fontweight);
    --pop-widget-daterange-calender-content-datatext-fontfamily: var(--widget-fontfamily);
    --pop-widget-daterange-calender-content-datatext-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-comparerange-relativeheader-background: #C0F2DC;
    --pop-widget-dialog-comparerange-relativeheader-label-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-comparerange-relativeheader-label-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-comparerange-relativeheader-label-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-comparerange-relativeheader-label-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-comparerange-relativeheader-label-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-comparerange-relativelabel-font-color: var(--secondary-text-normal-color);
    --pop-widget-dialog-comparerange-relativelabel-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-comparerange-relativelabel-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-comparerange-relativelabel-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-comparerange-relativelabel-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-comparerange-relativecombobox-background: var(--widget-primary-background);
    --pop-widget-dialog-comparerange-relativecombobox-textbox-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-comparerange-relativecombobox-textbox-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-comparerange-relativecombobox-textbox-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-comparerange-relativecombobox-textbox-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-comparerange-relativecombobox-textbox-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-comparerange-relativecombobox-popup-background: var(--widget-primary-background);
    --pop-widget-dialog-comparerange-relativecombobox-popup-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-comparerange-relativecombobox-popup-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-comparerange-relativecombobox-popup-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-comparerange-relativecombobox-popup-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-comparerange-relativecombobox-popup-fontsrc: var(--widget-fontsrc);
    --pop-widget-comparerange-calender-highlight-color: #c0f2dc;
    --pop-widget-comparerange-calender-selection-color: #2cd9c5;
    --pop-widget-comparerange-calender-weekheader-font-color: var(--secondary-text-normal-color);
    --pop-widget-comparerange-calender-weekheader-fontsize: var(--widget-fontsize);
    --pop-widget-comparerange-calender-weekheader-fontweight: var(--widget-fontweight);
    --pop-widget-comparerange-calender-weekheader-fontfamily: var(--widget-fontfamily);
    --pop-widget-comparerange-calender-weekheader-fontsrc: var(--widget-fontsrc);
    --pop-widget-comparerange-calender-content-hover-color: var(--widget-icon-hover-background);
    --pop-widget-comparerange-calender-content-datatext-font-color: var(--widget-secondary-font-color);
    --pop-widget-comparerange-calender-content-datatext-fontsize: var(--widget-fontsize);
    --pop-widget-comparerange-calender-content-datatext-fontweight: var(--widget-fontweight);
    --pop-widget-comparerange-calender-content-datatext-fontfamily: var(--widget-fontfamily);
    --pop-widget-comparerange-calender-content-datatext-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-vslabel-font-color: var(--widget-secondary-font-color);
    --pop-widget-dialog-vslabel-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-vslabel-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-vslabel-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-vslabel-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-footer-background: var(--widget-primary-background);
    --pop-widget-dialog-okbutton-background: var(--primary-btn-bg-normal-color);
    --pop-widget-dialog-okbutton-hovercolor: var(--primary-btn-bg-hover-color);
    --pop-widget-dialog-okbutton-font-color: var(--primary-btn-text-normal-color);
    --pop-widget-dialog-okbutton-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-okbutton-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-okbutton-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-okbutton-fontsrc: var(--widget-fontsrc);
    --pop-widget-dialog-cancelbutton-background: var(--secondary-btn-bg-normal-color);
    --pop-widget-dialog-cancelbutton-hover-bg-color:var(--secondary-btn-bg-hover-color);
    --pop-widget-dialog-cancelbutton-font-color: var(--secondary-btn-text-normal-color);
    --pop-widget-dialog-cancelbutton-fontsize: var(--widget-fontsize);
    --pop-widget-dialog-cancelbutton-fontweight: var(--widget-fontweight);
    --pop-widget-dialog-cancelbutton-fontfamily: var(--widget-fontfamily);
    --pop-widget-dialog-cancelbutton-fontsrc: var(--widget-fontsrc);
}

```

#### Tab widget Variables

Click the [Tab widget](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.tab.widget.definition.css) to navigate the template file.
```css3

:root {
    --tab-widget-tab-header-color:var(--primary-text-normal-color);
    --tab-widget-tab-header-fontsize:var(--widget-fontsize);
    --tab-widget-tab-header-fontweight:var(--widget-fontweight);
    --tab-widget-tab-header-fontfamily:var(--widget-fontfamily);
    --tab-widget-tab-header-fontsrc:var(--widget-fontsrc);
    --tab-widget-tab-header-selection-color: var(--primary-branding-color);
}

```

#### Text Filter Variables

Click the [Text Filter](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.textfilter.widgets.definition.css) to navigate the template file.
```css3

:root {
    --textfilter-widget-title-font-color:var(--widget-primary-font-color);
    --textfilter-widget-title-fontsize:var(--widget-fontsize);
    --textfilter-widget-title-fontweight:var(--widget-fontweight);
    --textfilter-widget-title-fontfamily:var(--widget-fontfamily);
    --textfilter-widget-title-fontsrc:var(--widget-fontsrc);
    --textfilter-widget-subtitle-font-color:var(--widget-primary-font-color);
    --textfilter-widget-subtitle-fontsize:var(--widget-fontsize);
    --textfilter-widget-subtitle-fontweight:var(--widget-fontweight);
    --textfilter-widget-subtitle-fontfamily:var(--widget-fontfamily);
    --textfilter-widget-subtitle-fontsrc:var(--widget-fontsrc);
    --textfilter-widget-placeholder-text-color:var(--widget-secondary-font-color);
    --textfilter-widget-border-color:var(--primary-border-color);
    --textfilter-widget-background:var(--widget-primary-background);
    --textfilter-widget-font-color:var(--widget-secondary-font-color);
    --textfilter-widget-fontsize:var(--widget-fontsize);
    --textfilter-widget-fontweight:var(--widget-fontweight);
    --textfilter-widget-fontfamily:var(--widget-fontfamily);
    --textfilter-widget-fontsrc:var(--widget-fontsrc);
}

```

#### Scatter widget variables

Click the [Scatter](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.scatter.widgets.definition.css) to navigate the template file.
```css3

:root {
    --scatter-widget-title-font-color:var(--widget-primary-font-color);
    --scatter-widget-title-fontsize:var(--widget-fontsize);
    --scatter-widget-title-fontweight:var(--widget-fontweight);
    --scatter-widget-title-fontfamily:var(--widget-fontfamily);
    --scatter-widget-title-fontsrc:var(--widget-fontsrc);
    --scatter-widget-subtitle-font-color:var(--widget-primary-font-color);
    --scatter-widget-subtitle-fontsize:var(--widget-fontsize);
    --scatter-widget-subtitle-fontweight:var(--widget-fontweight);
    --scatter-widget-subtitle-fontfamily:var(--widget-fontfamily);
    --scatter-widget-subtitle-fontsrc:var(--widget-fontsrc);
    --scatter-widget-axis-title-font-color:var(--widget-axis-title-font-color);
    --scatter-widget-axis-title-fontsize:var(--widget-fontsize);
    --scatter-widget-axis-title-fontweight:var(--widget-fontweight);
    --scatter-widget-axis-title-fontfamily:var(--widget-fontfamily);
    --scatter-widget-axis-title-fontsrc:var(--widget-fontsrc);
    --scatter-widget-axis-label-font-color:var(--widget-label-primary-font-color);
    --scatter-widget-axis-label-fontsize:var(--widget-fontsize);
    --scatter-widget-axis-label-fontweight:var(--widget-fontweight);
    --scatter-widget-axis-label-fontfamily:var(--widget-fontfamily);
    --scatter-widget-axis-label-fontsrc:var(--widget-fontsrc);
    --scatter-widget-axis-gridlines-color:var(--widget-axis-gridlines-color);
    --scatter-widget-datalabel-font-color:var(--widget-label-primary-font-color);
    --scatter-widget-datalabel-fontsize:var(--widget-fontsize);
    --scatter-widget-datalabel-fontweight:var(--widget-fontweight);
    --scatter-widget-datalabel-fontfamily:var(--widget-fontfamily);
    --scatter-widget-datalabel-fontsrc:var(--widget-fontsrc);
    --scatter-widget-legend-font-color:var(--widget-legend-font-color);
    --scatter-widget-legend-fontsize:var(--widget-fontsize);
    --scatter-widget-legend-fontweight:var(--widget-fontweight);
    --scatter-widget-legend-fontfamily:var(--widget-fontfamily);
    --scatter-widget-legend-fontsrc:var(--widget-fontsrc);
}

```

#### RTE widget variables

Click the [RTE](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.rte.widgets.definition.css) to navigate the template file.
```css3

:root {
    --rte-widget-content-font-color:var(--widget-primary-font-color);
    --rte-widget-content-fontweight:var(--widget-fontweight);
    --rte-widget-content-fontfamily:var(--widget-fontfamily);
    --rte-widget-content-fontsrc:var(--widget-fontsrc);
}

```

#### Filter Overview variables

Click the [Filter overview](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.filteroverview.definition.css) to navigate the template file.
```css3

:root {
	--filteroverview-background:var(--secondary-background-color);
	--filteroverview-font-color:var(--primary-text-normal-color);
	--filteroverview-title-fontsize:var(--widget-fontsize);
	--filteroverview-title-fontweight:var(--widget-fontweight);
	--filteroverview-title-fontfamily:var(--widget-fontfamily);
	--filteroverview-title-fontsrc:var(--widget-fontsrc);
	--filteroverview-content-widgettitle-fontsize:var(--widget-fontsize);
	--filteroverview-content-widgettitle-fontweight:var(--widget-fontweight);
	--filteroverview-content-widgettitle-fontfamily:var(--widget-fontfamily);
	--filteroverview-content-widgettitle-fontsrc:var(--widget-fontsrc);
	--filteroverview-content-columnname-fontsize:var(--widget-fontsize);
	--filteroverview-content-columnname-fontweight:var(--widget-fontweight);
	--filteroverview-content-columnname-fontfamily:var(--widget-fontfamily);
	--filteroverview-content-columnname-fontsrc:var(--widget-fontsrc);
	--filteroverview-content-values-fontsize:var(--widget-fontsize);
	--filteroverview-content-values-fontweight:var(--widget-fontweight);
	--filteroverview-content-values-fontfamily:var(--widget-fontfamily);
	--filteroverview-content-values-fontsrc:var(--widget-fontsrc);
	--filteroverview-icon-font-color:var(--active-icon-normal-color);
	--filteroverview-icon-fontsize:var(--widget-fontsize);
	--filteroverview-icon-fontweight:var(--widget-fontweight);
}

```

#### Dashboard Menu variables

Click the [Dashboard Menu](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.designer.menualertdialog.definition.css) to navigate the template file.
```css3

:root {
  --menu-background:var(--primary-background-color);
  --menu-font-color:var(--widget-primary-font-color);
  --menu-fontsize:var(--widget-fontsize);
  --menu-fontweight:var(--widget-fontweight);
  --menu-fontfamily:var(--widget-fontfamily);
  --menu-fontsrc:var(--widget-fontsrc);
  --menu-border:var(--primary-border-color);
  --menu-hover-font-color:var(--widget-primary-font-color);
  --menu-hover-fontsize:var(--widget-fontsize);
  --menu-hover-fontweight:var(--widget-fontweight);
  --menu-hover-fontfamily:var(--widget-fontfamily);
  --menu-hover-fontsrc:var(--widget-fontsrc);
  --menu-hover-background:var(--hover-bg-normal-color);
}

```

#### Dashboard Tooltip variables

Click the [Dashboard Tooltip](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.tooltip.definition.css) to navigate the    template file.
```css3

:root {
 --tooltip-background:var(--primary-background-color);
 --tooltip-font-color:var(--primary-text-normal-color);
 --tooltip-fontsize:var(--widget-fontsize);
 --tooltip-fontweight:var(--widget-fontweight);
 --tooltip-fontfamily:var(--widget-fontfamily);
 --tooltip-fontsrc:var(--widget-fontsrc);
 --tooltip-border:var(--primary-border-color);
}

```

#### Dashboard Error dialog variables

Click the [Dashboard Error dialog](https://github.com/boldbi/boldbi-themestudio/blob/main/themes/light/widgets/boldbi.designer.menualertdialog.definition.css) to navigate the template file.
```css3

:root {
  --alertdialog-footer-background:var(--designer-header-background);
  --alertdialog-content-background:var(--primary-background-color);
  --alertdialog-content-font-color:var(--widget-secondary-font-color);
  --alertdialog-content-fontsize:var(--widget-fontsize);
  --alertdialog-content-fontweight:var(--widget-fontweight);
  --alertdialog-content-fontfamily:var(--widget-fontfamily);
  --alertdialog-content-fontsrc:var(--widget-fontsrc);
  --alertdialog-error-content-background:var(--primary-background-color);
  --alertdialog-error-font-color:var(--widget-secondary-font-color);
  --alertdialog-error-fontsize:var(--widget-fontsize);
  --alertdialog-error-fontweight:var(--widget-fontweight);
  --alertdialog-error-fontfamily:var(--widget-fontfamily);
  --alertdialog-error-fontsrc:var(--widget-fontsrc);
   --alertdialog-header-background:var(--designer-header-background);
  --alertdialog-header-font-color:var(--widget-secondary-font-color);
  --alertdialog-header-fontsize:var(--widget-fontsize);
  --alertdialog-header-fontweight:var(--widget-fontweight);
  --alertdialog-header-fontfamily:var(--widget-fontfamily);
  --alertdialog-header-fontsrc:var(--widget-fontsrc);
  --alertdialog-copybutton-background:var(--secondary-btn-bg-normal-color);
  --alertdialog-copybutton-font-color:var(--secondary-btn-text-normal-color);
  --alertdialog-copybutton-fontsize:var(--widget-fontsize);
  --alertdialog-copybutton-fontweight:var(--widget-fontweight);
  --alertdialog-copybutton-fontfamily:var(--widget-fontfamily);
  --alertdialog-copybutton-fontsrc:var(--widget-fontsrc);
  --alertdialog-copybutton-press-background:var(--secondary-btn-bg-normal-color);
  --alertdialog-copybutton-press-font-color:var(--secondary-btn-text-normal-color);
  --alertdialog-copybutton-hover-background:var(--secondary-btn-bg-hover-color);
  --alertdialog-copybutton-hover-font-color:var(--secondary-btn-text-hover-color);
  --alertdialog-copybutton-hover-fontsize:var(--widget-fontsize);
  --alertdialog-copybutton-hover-fontweight:var(--widget-fontweight);
  --alertdialog-copybutton-hover-fontfamily:var(--widget-fontfamily);
  --alertdialog-copybutton-hover-fontsrc:var(--widget-fontsrc);
  --alertdialog-okbutton-background:var(--primary-btn-bg-normal-color);
  --alertdialog-okbutton-font-color:var(--primary-btn-text-normal-color);
  --alertdialog-okbutton-fontsize:var(--widget-fontsize);
  --alertdialog-okbutton-fontweight:var(--widget-fontweight);
  --alertdialog-okbutton-fontfamily:var(--widget-fontfamily);
  --alertdialog-okbutton-fontsrc:var(--widget-fontsrc);
  --alertdialog-okbutton-press-background:var(--primary-btn-bg-normal-color);
  --alertdialog-okbutton-press-font-color:var(--primary-btn-text-normal-color);
  --alertdialog-okbutton-hover-background:var(--primary-btn-bg-hover-color);
  --alertdialog-okbutton-hover-font-color:var(--primary-btn-text-hover-color);
  --alertdialog-okbutton-hover-fontsize:var(--widget-fontsize);
  --alertdialog-okbutton-hover-fontweight:var(--widget-fontweight);
  --alertdialog-okbutton-hover-fontfamily:var(--widget-fontfamily);
  --alertdialog-okbutton-hover-fontsrc:var(--widget-fontsrc);
}

```