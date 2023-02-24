---
layout: post
title: Manage Custom Theme for Dashboards using variables | Bold BI Docs
description: Learn how to a generate custom theme file, upload the generated file and manage custom theme for dashboards in User Management Server of Bold BI application.
platform: bold-bi
documentation: ug
---

# How to create a custom theme using variables for dashboards

Using the given variables, we can customize the BoldBI dashboards to meet your requirements. Follow the steps below to create a custom theme file.

1. Download the default `light` and `dark` files from the [Github repository](https://github.com/boldbi/boldbi-themestudio/releases) and extract them.

2. Copy all `CSS` files from the `light` folder inside the `themes` folder and paste them into the newly created folder. For example, create a new folder, `darkviolet` as follows.
![darkvioletfolder](/static/assets/embedded/multi-tenancy/images/look-and-feel/darkvioletfolder.png)

3. Open the `boldbi.application.definition.css` and `boldbi.core.definition.css` files in the `editor`, and then you can customize the color code in the provided variables. For example, customize the variables as follows.
![darkvioletapplication](/static/assets/embedded/multi-tenancy/images/look-and-feel/darkvioletapplication.png)
![darkvioletcore](/static/assets/embedded/multi-tenancy/images/look-and-feel/darkvioletcore.png)

4. Follow the steps provided in the `README.md` on [Github repository](https://github.com/bold-bi/boldbi-themestudio) to generate `boldbi.theme.definition.min.css`
![readmetext](/static/assets/embedded/multi-tenancy/images/look-and-feel/readmetheme.png)

5. Once you run the command from the `README.md` file, you can get the theme files from directory `{src directory}/assets/themese/{theme directory name}/boldbi.theme.definition.min.css`