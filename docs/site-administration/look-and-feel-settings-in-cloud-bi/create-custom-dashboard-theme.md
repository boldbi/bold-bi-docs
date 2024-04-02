---
layout: post
title: Custom Theme for a Dashboard - Cloud BI | Bold BI Docs
description: Learn how to a generate custom theme file, upload the generated file and manage custom theme for your dashboards in Cloud based Bold BI application.
platform: bold-bi
documentation: ug
---

# How to create a custom theme using variables for dashboards

You can customize your dashboard in BoldBI using the provided variables to create a custom theme. Follow these steps:

1. Download the default `light` and `dark` files from the [Github repository](https://github.com/boldbi/boldbi-themestudio/releases) and extract them.

2. Copy all `CSS` files from the `light` folder inside the `themes` folder and paste them into a newly created folder. For example, create a new folder called `darkviolet`.
![darkvioletfolder](/static/assets/site-administration/images/darkvioletfolder.png)

3. Open the `boldbi.application.definition.css` and `boldbi.core.definition.css` files in an `editor` and customize the color code in the provided variables.
![darkvioletapplication](/static/assets/site-administration/images/darkvioletapplication.png)
![darkvioletcore](/static/assets/site-administration/images/darkvioletcore.png)

4. Follow the steps outlined in the `README.md` on the [Github repository](https://github.com/boldbi/boldbi-themestudio) to generate `boldbi.theme.definition.min.css`.
![readmetext](/static/assets/site-administration/images/readmetheme.png)

5. After running the command from the `README.md` file, you can find the theme files in the directory `{src directory}/assets/theme/{theme directory name}/boldbi.theme.definition.min.css`.