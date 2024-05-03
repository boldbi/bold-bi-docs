---
layout: post
title: Linking URL and Dashboard in Iframe Embedding | Bold BI Docs
description: Learn how to use the linked URLs and dashboards in iframe embedding from Bold BI Server. Also, learn how to open any linked URL inside the popup instead a tab.
platform: bold-bi
documentation: ug
---

# How to use linking URL and dashboard in iframe Embedding
In iframe embedding, there is support for linking dashboard URLs, which allows you to open the specified dashboard in a popup window. It also supports opening any URL inside the popup using linking support.

## Please follow the steps for using Linking in Iframe
1. In Bold BI Server, the user can edit the dashboard, select a widget, and click on the widget settings. They should then enable the Link feature, add the linked URL in the URL text box, select the `Popup` target, and add a `Title` for the popup. For further information, please refer [here](/visualizing-data/working-with-widgets/linking-urls-and-dashboards/#pop-up).

    ![EnableLinking](/static/assets/faq/images/enable_linking_propertypanel.png)

2. Next, `publish` the changes and display the dashboard on the viewer page.

3. To render the desired dashboard in an iframe, click the `Share` option in the dashboard and select `Get Embed Code`.

    ![ShareOption](/static/assets/faq/images/click_share_option_dshboard.png) 
    ![GetEmbedCode](/static/assets/faq/images/click_get_embed_code.png) 

4. Copy the embed URL by clicking the `copy` icon in the Embed Code dialog. Embed the copied code into your web application and then run the application.

    ![GetEmbedCode](/static/assets/faq/images/copy_embed_code_url.png)

5.	Once the dashboard has been rendered in your application, click on the widget column to open the widget action context menu and select the Link option.

    ![LinkingDashboard](/static/assets/faq/images/click_linking_option_dashboard.png)

6.	The linked dashboard will open in a `Popup` with a `Title` similar to the image below.

    ![PopupDashboard](/static/assets/faq/images/get_popup_dashboard.png)