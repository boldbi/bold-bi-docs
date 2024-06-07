---
layout: post
title: How to hide sample dashboards option in Bold BI? | Bold BI Docs
description: Learn how to hide the sample dashboards option by configuring a node on the BI configuration file in the Bold BI application.
platform: bold-bi
documentation: UG
---
# How to hide sample dashboards option in Bold BI application

The option for sample dashboards is available in the `Create Dashboard` section, allowing users to add sample dashboards to the site.

![Sample Dashboard Option](/static/assets/faq/images/sample-dashboard-option.png)

1. To hide sample dashboards option, go to the UMS `Settings` page.

    `Example: http://{yourdomain}/ums/administration`

    ![UMS Settings](/static/assets/faq/images/ums-settings.png)

2. Select the `Configuration` tab from the settings menu and choose `bi/config.xml` from the `Search your files` drop-down menu.

    ![UMS BI Config](/static/assets/faq/images/ums-bi-config.png)

3. Set the `HideSampleDashboard`  node to `true`, then `save` the bi/config.xml file.

    `<HideSampleDashboard>true</HideSampleDashboard>`

    ![Hide Sample Dashboard](/static/assets/faq/images/hide-sample-dashboard.png)

4. Restart the application and access the site. Please refer to the instructions on [how to restart the Bold BI](/faq/how-to-restart-the-bold-bi-embedded-application/) application for more information.

The sample dashboard option will be hidden as in the following image.

![Hidden Sample Dashboard](/static/assets/faq/images/hidden-sample-dashboard.png)