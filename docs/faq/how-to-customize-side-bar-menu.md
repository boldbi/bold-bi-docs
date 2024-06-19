---
layout: post
title: Side Bar Menu customization – Embedded BI | Bold BI Docs
description: This page describes how to customize side bar menu based on user permission in the Bold BI Embedded.
platform: bold-bi
documentation: ug
---
# How to customize side bar menu based on user permission

This page describes how to customize side bar menu in the Bold BI application, based on user permission.

## Steps to customize side bar menu option based on user permission

1. Set the `<IsUserBasedMenu>` as true in the config file, which is available in the following location.
   * For Windows - `C:\BoldServices\app_data\bi\configuration`
   * For Linux - `/var/www/bold-services/application/app_data/bi/configuration/`

   ![User Based Menu](/bold-bi-docs/static/assets/embedded/faq/images/set-customized-side-bar-menu.png)

2. Restart the Bold BI Application in IIS.

   ![Restart IIS](/bold-bi-docs/static/assets/embedded/faq/images/restart-bold-bi-in-iis.png)

3. If the user does not have any kind of permission in the sense, the dashboards and pinboards options will be displayed.

   ![No Permission User Login](/bold-bi-docs/static/assets/embedded/faq/images/no-permission-user-login.png)

4. Hide the `Pinboards` option by setting the **ShowMenu** to **false** for the node **Pinboard** in the `custom_ui.json`, which will hide the Pinboard item for all users. Refer to this [section](https://help.boldbi.com/embedded-bi/user-interface-customization/) for customizing the `custom_ui.json` file.

   ![Hide Pinboard](/bold-bi-docs/static/assets/embedded/faq/images/pinboard-hide.png#max-width=30%)

   ![Hide Pinboard in Bold BI](/bold-bi-docs/static/assets/embedded/faq/images/hide-pinboard-bold-bi.png)

5. For example, if the user has any kind of permission in data sources in the sense, it will show data sources option.

   ![Data source Permission User](/bold-bi-docs/static/assets/embedded/faq/images/data-source-permission-login.png)

### Dashboard Dependent Menus:

If the user has permission to **Create Dashboard**, its dependent menu options **Add Dashboard and Publish** will be shown. In contrast, if the user has any other dashboard-related permissions (like Read, (Read and Write), and (Read, Write, and Delete)), then both options will not be shown.

   ![Dashboard Dependent Menus](/bold-bi-docs/static/assets/embedded/faq/images/create-dashboard-permission-menu-items.png)