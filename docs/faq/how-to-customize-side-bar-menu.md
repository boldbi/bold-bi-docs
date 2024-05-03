---
layout: post
title: Side Bar Menu customization – Embedded BI | Bold BI Docs
description: This page describes how to customize side bar menu based on user permission in the Bold BI Embedded.
platform: bold-bi
documentation: ug
---
# How to customize side bar menu based on user permission

This page describes how to customize the sidebar menu in the Bold BI application based on user permissions.

## Steps to customize side bar menu option based on user permission

1. Set the `<IsUserBasedMenu>` to true in the config file, which is located in the following location.
   * For Windows - `C:\BoldServices\app_data\bi\configuration`
   * For Linux - `/var/www/bold-services/application/app_data/bi/configuration/`

   ![User Based Menu](/static/assets/faq/images/set-customized-side-bar-menu.png)

2. Restart the Bold BI Application in IIS.

   ![Restart IIS](/static/assets/faq/images/restart-bold-bi-in-iis.png)

3. If the user does not have any kind of permission, the dashboards and pinboards options will be displayed.

   ![No Permission User Login](/static/assets/faq/images/no-permission-user-login.png)

4. Hide the `Pinboards` option by setting the **ShowMenu** to **false** for the node **Pinboard** in the `custom_ui.json`. This will hide the Pinboard item for all users. Please refer to this [section](/site-administration/user-interface-customization/) for information on customizing the `custom_ui.json` file.

   ![Hide Pinboard](/static/assets/faq/images/pinboard-hide.png#max-width=30%)

   ![Hide Pinboard in Bold BI](/static/assets/faq/images/hide-pinboard-bold-bi.png)

5. For example, if the user has any type of permission for data sources, it will display the option for data sources.

   ![Data source Permission User](/static/assets/faq/images/data-source-permission-login.png)

### Dashboard Dependent Menus:

If the user has permission to **create a dashboard**, the dependent menu options **Add Dashboard and Publish** will be shown. However, if the user has any other dashboard-related permissions (such as Read, Read and Write, or Read, Write, and Delete), then both options will not be shown.

   ![Dashboard Dependent Menus](/static/assets/faq/images/create-dashboard-permission-menu-items.png)