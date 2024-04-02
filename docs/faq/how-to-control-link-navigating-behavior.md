---
layout: post
title: How to control link navigation behavior? | Bold BI Documentation
description: This page describes how to open the pages in the current tab that should open in a new tab in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to control link navigating behavior in Bold BI version above 5.2.48?

This page describes how to open the links in the current tab rather than in a new tab from the Bold BI Embed version above 5.2.48.

> **NOTE:**  We provided support to UMS starting from version 6.18.

## Steps to open the links in the current tab

1. Open the UMS `Settings` page using the link `{domain}/ums/administration`.

    ![Manage Sites Option](/static/assets/faq/images/manage-sites-settings.png)

2. Select `Configuration` from settings and choose `config.json` from the dropdown.

   >**Note:** From version 6.19.14, use the config.json and the config.xml for versions prior to this.

    ![Configuration Settings](/static/assets/faq/images/configuration-settings-page.png)

3. Set the `EnableSameTabLinkTarget` as true in the editor and `Save` the changes.

    ![Enable SameTab](/static/assets/faq/images/set-enable-application-true.png)

4. After completing the above steps, restart the site by using this [link](https://help.boldbi.com/faq/how-to-restart-the-bold-bi-embedded-application/). Upon restarting, access the Bold BI application, and the link will now open in the current tab.

   **For Example:** 

   * When `EnableSameTabLinkTarget: false` in config.json opens the `dashboard` from the dashboard listing page to view the dashboard data, it will open in the new tab. 

    * When `EnableSameTabLinkTarget: true` in config.json opens the `dashboard` from the dashboard listing page to view the dashboard data, it will now open in the current tab.

   > **NOTE:** This feature is useful for controlling the link navigation when the entire Bold BI Embed application is embedded in the IFrame. For more details about application embedding, refer to this [link](https://help.boldbi.com/embedding-options/application-embedding/).