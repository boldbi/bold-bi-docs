---
layout: post
title: How to hide release alert banner in Bold BI app? | Bold BI Docs
description: Learn how to hide the release alert banner by configuring a node on the BI configuration file in the Bold BI application.
platform: bold-bi
documentation: UG
---
# How to hide release alert banner in Bold BI application

## Release alert banner

The release alert banner will show the details about the latest release version and its key features. It will appear on your site pages when the latest version is released in Bold BI.

![Release Banner](/static/assets/faq/images/release-banner.png)

## Hide release alert banner

1. To hide release banner alert banner, go to the UMS `Settings` page.

    `Example: http://{yourdomain}/ums/administration`

    ![UMS Settings](/static/assets/faq/images/ums-settings.png)

2. Select the `Configuration` tab from settings menu and choose `bi/config.xml` on the `Search your files` drop-down.

    ![UMS BI Config](/static/assets/faq/images/ums-bi-config.png)

3. Set `true` to the `HideReleaseAlert` node, then `Save` the bi/config.xml file.

    `<HideReleaseAlert>true</HideReleaseAlert>`

    ![Hide Release Alert](/static/assets/faq/images/hide-release-alert.png)

4. Restart the application, then access the site. Refer to this [link](/faq/how-to-restart-the-bold-bi-embedded-application/) to learn how to restart the Bold BI application.

