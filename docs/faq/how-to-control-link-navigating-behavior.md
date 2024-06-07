---
layout: post
title: How to control link navigation behavior? | Bold BI Documentation
description: This page describes how to open the pages in the current tab that should open in a new tab in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to control link navigating behavior in Bold BI version above 5.2.48?

This page describes how to open the links in the current tab rather than in a new tab from the Bold BI Embed version above 5.2.48.

> **NOTE:**  We have been providing support to UMS since version 6.18.

## Steps to open the links in the current tab

1. Open the UMS `Settings` page using the link `{domain}/ums/administration`.

    ![Manage Sites Option](/static/assets/faq/images/manage-sites-settings.png)

2. Select `Configuration` from settings and choose `config.json` from the dropdown.

   >**Note:** Starting from version 6.19.14, utilize the config.json and config.xml files for versions that came before this.

    ![Configuration Settings](/static/assets/faq/images/configuration-settings-page.png)

3. Set the `EnableSameTabLinkTarget` to true in the editor and then `save` the changes.

    ![Enable SameTab](/static/assets/faq/images/set-enable-application-true.png)

4. After completing the above steps, To learn [how to restart the Bold BI](/faq/how-to-restart-the-bold-bi-embedded-application/) application. Once restarted, access the Bold BI application, and the link will now open in the current tab.

   **For Example:** 

   * When `EnableSameTabLinkTarget: false` is set in config.json, opening the `dashboard` from the dashboard listing page to view the dashboard data will result in it opening in a new tab. 

    * When `EnableSameTabLinkTarget: true` is set in config.json, opening the dashboard from the dashboard listing page to view the dashboard data will now open in the current tab.

   > **NOTE:** This feature is useful for controlling link navigation when the entire Bold BI Embed application is embedded in the IFrame. For more details about [Application Embedding](/embedding-options/application-embedding/).