---
layout: post
title: Custom Theme for a Dashboard - Cloud BI | Bold BI Docs
description: Learn how to a generate custom theme file, upload the generated file and manage custom theme for your dashboards in Cloud based Bold BI application.
platform: bold-bi
documentation: ug
---

# How to create a custom theme using variables for dashboards

You can customize your dashboard based on your requirement to BoldBI dashboards using the provided variables. Follow the steps to create a custom theme file

1. Download the default `light` and `dark` files from the [Github repository](https://github.com/boldbi/boldbi-themestudio/releases) and extract them.

2. Copy all `CSS` files from the `light` folder inside `themes` folder and paste them into the newly created folder. For example, create a new folder `darkviolet` like below
![darkvioletfolder](/static/assets/site-administration/images/darkvioletfolder.png)

3. Open the `boldbi.application.definition.css` and `boldbi.core.definition.css` files in the `editor`, then you can customize the color code in the provided variables. For example, customize the variables like below
![darkvioletapplication](/static/assets/site-administration/images/darkvioletapplication.png)
![darkvioletcore](/static/assets/site-administration/images/darkvioletcore.png)

4. Follow the steps provided in the `README.md` on [Github repository](https://github.com/boldbi/boldbi-themestudio) to generate `boldbi.theme.definition.min.css`
![readmetext](/static/assets/site-administration/images/readmetheme.png)

5. Once you run the command from the `README.md` file, you can get the theme files from directory `{src directory}/assets/theme/{theme directory name}/boldbi.theme.definition.min.css`