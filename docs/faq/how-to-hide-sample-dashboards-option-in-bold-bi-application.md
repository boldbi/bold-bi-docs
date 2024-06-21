---
layout: post
title: How to hide sample dashboards option in Bold BI? | Bold BI Docs
description: Learn how to hide the sample dashboards option by configuring a node on the BI configuration file in the Bold BI application.
platform: bold-bi
documentation: UG
---
# How to hide sample dashboards option in Bold BI application

Sample dashboards option is available in the `Create Dashboard` section, which is used to add sample dashboards to the site.

![Sample Dashboard Option](/static/assets/embedded/faq/images/sample-dashboard-option.png)

1. To hide sample dashboards option, go to the UMS `Settings` page.

    `Example: http://{yourdomain}/ums/administration`

    ![UMS Settings](/static/assets/embedded/faq/images/ums-settings.png)

2. Select the `Configuration` tab from settings menu and choose `bi/config.xml` on the `Search your files` drop-down.

    ![UMS BI Config](/static/assets/embedded/faq/images/ums-bi-config.png)

3. Set `true` to the `HideSampleDashboard` node, and then `Save` the bi/config.xml file.

    `<HideSampleDashboard>true</HideSampleDashboard>`

    ![Hide Sample Dashboard](/static/assets/embedded/faq/images/hide-sample-dashboard.png)

4. Restart the application and access the site. Refer to this [link](/embedded-bi/faq/how-to-restart-the-bold-bi-embedded-application/) to learn how to restart the Bold BI application.

The sample dashboard option will be hidden as in the following image.

![Hidden Sample Dashboard](/static/assets/embedded/faq/images/hidden-sample-dashboard.png)