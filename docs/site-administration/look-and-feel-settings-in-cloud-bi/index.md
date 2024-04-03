---
layout: post
title: Look and Feel Settings for Dashboards in Bold BI | Bold BI Docs
description: Learn how to customize the appearance of your Bold BI dashboards like font preferences and create a custom theme file, upload the created file, and manage a custom theme in Bold BI. Also learn about the application's default theme.
platform: bold-bi
documentation: ug
---

# Look and Feel Settings in Cloud Analytics Server

This page explains how to customize font and theme preferences in Cloud Analytics Server.

## Font

By default, the Bold BI application loads text using the Robotoregular font style. With this option, you can change the font style of the Bold BI application.

Please follow these steps to upload a new font style:

1. Go to the `Look and Feel settings` page and click the `Add a new font` option.

   ![Font Settings Cloud BI](/static/assets/site-administration/images/font-cloud.png)

2. Browse the font file and click `Upload` in the dialog box.

   ![Upload-font-dialog](/static/assets/white-label/images/upload-font-dialog.png)

3. The uploaded font file will be listed in the `Fonts` drop-down menu. Select the uploaded font and `save` the settings. The selected font style will be applied throughout your site.

   ![Font-style-dropdown](/static/assets/white-label/images/font-style-dropdown.png)

Here is a sample image after applying the font.

   ![Font Applied Cloud BI](/static/assets/white-label/images/after-font-cloud.png)

## Theme Mode

You can switch the application's theme from **light** to **dark mode** and vice versa under the look and feel settings. Additionally, you can change the **text color**, **active state**, and **hover state background color**. You can also change components like **switches**, **radio buttons**, **check boxes**, and **numeric text boxes** by using branding color. In the look and feel settings, the **dashboard theme** can also be changed.
   
## Switch Application Theme Mode

The application theme mode can be switched to either **light** or **dark mode**. By default, the light mode is applied.

In the default light mode, the application will have a light appearance with a blue variant as the branding color as shown in the image below.

![Mode light](/static/assets/site-administration/images/mode-light.png)

In the default dark mode, the application will have a dark appearance with a blue variant as the branding color as shown in the image below.

![Mode dark](/static/assets/site-administration/images/mode-dark-cloud.png)

## Custom Theme

By uploading a customized theme file using the `Manage` option, you can change the **branding color**, **text color**, **active state**, and **hover state background colors**, in addition to the light or dark mode. The background and surface areas are not customized and will always follow the selected mode.

Please follow the steps below to create and apply a custom theme for the application:
1. Click on the `Manage` option to open a dialog to upload your custom theme.
![Manage theme option](/static/assets/site-administration/images/manage-theme-option.png)

2. Download the theme template files from the link highlighted in the image.
![Download theme template](/static/assets/site-administration/images/theme-template-link.png)

3. Extract the downloaded zip folder. The extracted folder contains the CSS3 variables with color code values for each component shown in the image.
![Download theme template files](/static/assets/site-administration/images/theme-template-files.png)

4. Update the color code values according to your preference, and then upload the updated custom theme file into the application. Refer to the [Create application custom theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-application-theme/) section to learn more about customizing color codes to create your preferred custom theme.
![Manage app theme](/static/assets/site-administration/images/manage-app-theme-dialog.png)

5. The uploaded theme will be listed in the `Custom Theme` drop-down. Select the uploaded theme in the custom theme drop-down and save the settings.
 ![Select app theme](/static/assets/site-administration/images/select-app-theme-cloud.png)

Here is a sample image after applying the custom theme:

![Dark custom image](/static/assets/site-administration/images/dark-custom-image.png)


## Dashboard Theme

You can customize the dashboard theme that will be applied for dashboards in dashboard view mode. By default, the Default option will be selected.

Follow the steps to upload the generated custom theme file:

1.  Click on the `Manage` option next to `Dashboard Theme` under the `Look and Feel` settings.
![Manage-option-dashboard](/static/assets/site-administration/images/manage-option-dashboard.png)

2.  A dialog will appear as shown below. Choose the created custom theme file by clicking on the three dots and then click Upload. Please refer to the [Create dashboard custom theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-dashboard-theme/) section to learn how to create your preferred custom theme file for dashboards.
![uploadthemefile](/static/assets/site-administration/images/uploadthemefile.png)

3. The uploaded custom theme file will appear in the `Dashboard Theme` drop-down list. In the `Dashboard Theme` drop-down menu, select the uploaded theme, then save the settings.
![dashboardthemedarkviolet](/static/assets/site-administration/images/dashboardthemedarkviolet.png)

4. Your dashboard will be rendered according to your customized theme file. For example, the `darkviolet` theme is rendered as shown below.
![darkvioletthemedashboard](/static/assets/site-administration/images/darkvioletthemedashboard.png)


## **Please find the links below to learn more about custom themes.**

[How to create custom application theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-application-theme/)

[How to create custom dashboard theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-dashboard-theme/)

[custom theme viewer](/site-administration/look-and-feel-settings-in-cloud-bi/custom-theme-viewer/)