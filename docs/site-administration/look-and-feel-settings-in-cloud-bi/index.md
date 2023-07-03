---
layout: post
title: Look and Feel Settings for Dashboards & Apps | Cloud Bold BI Docs
description: Discover how to create a custom theme file, upload the created file, and manage a custom theme in Bold BI. Also learn about the application's default theme.
platform: bold-bi
documentation: ug
---

# Look and Feel Settings in Cloud Analytics Server

You can switch the application's theme from **light** to **dark mode** and vice versa, under the look and feel settings. Additionally, you can change the **text color**, **active state**, and **hover state background color**, and you can also change components like **switches**, **radio buttons**, **check boxes**, and **numeric text boxes** by using **branding color**. In this look and feel settings, the **dashboard theme** can also be changed.
   
## Switch Application Theme Mode

Application theme mode can be switched either to **light** or **dark mode**. By default, light mode is applied.

In light default mode, the application will be in light appearance with blue variant as branding color as shown in image below.

![Mode light](/static/assets/site-administration/images/mode-light.png)

In dark default mode, the application will be in dark appearance with blue variant as branding color as shown in image below.

![Mode dark](/static/assets/site-administration/images/mode-dark-cloud.png)

## Custom Theme

By uploading a customized theme file using the `Manage` option, you can change the **branding color**, **text color**, **active state** and **hover state background colors** in addition to the light or dark mode. The background and surface areas are not customized and will always follow the selected mode.

Please follow below steps to create and apply custom theme for application
1.  Click on `Manage` option to open a dialog to upload your custom theme.
![Manage theme option](/static/assets/site-administration/images/manage-theme-option.png)

2. Please download the theme template files from the link that is highlighted in the below image.
![Download theme template](/static/assets/site-administration/images/theme-template-link.png)

3. Extract the downloaded zip folder. The extracted folder contains the CSS3 variable with a color code value for each component as shown in the below image.
![Download theme template files](/static/assets/site-administration/images/theme-template-files.png)

4. Please update the color code values as per your preference and then upload the updated custom theme file into application. Please refer to the [Create application custom theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-application-theme/) section to learn more about how to customize color codes to create your preferred custom theme.
![Manage app theme](/static/assets/site-administration/images/manage-app-theme-dialog.png)

5. The uploaded theme will be listed in the `Custom Theme` drop-down. Select the uploaded theme in custom theme drop-down and save the settings.
 ![Select app theme](/static/assets/site-administration/images/select-app-theme-cloud.png)

Here is a sample image after applying the custom theme.

![Dark custom image](/static/assets/site-administration/images/dark-custom-image.png)


## Dashboard Theme

You can customize the dashboard theme which will be applied for dashboards in dashboard view mode. By default, `Default` option will be selected.

Follow the steps to upload generated custom theme file

1.  Click `Manage` option next to `Dashboard Theme` under the `Look and Feel` settings.
![Manage-option-dashboard](/static/assets/site-administration/images/manage-option-dashboard.png)

2.  A dialog will appear as below. Choose the created custom theme file by clicking three dots and then click `Upload`. Please refer to the [Create dashboard custom theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-dashboard-theme/) section to learn about how to create your preferred custom theme file for dashboards.
![uploadthemefile](/static/assets/site-administration/images/uploadthemefile.png)

3. The uploaded custom theme file will appear in the `Dashboard Theme` drop-down as listed below. In the `Dashboard Theme` drop-down menu, choose the uploaded theme, then save the settings.
![dashboardthemedarkviolet](/static/assets/site-administration/images/dashboardthemedarkviolet.png)

4. According to your customized theme file, the dashboard will be rendered. For example, `darkviolet` theme rendered as below.
![darkvioletthemedashboard](/static/assets/site-administration/images/darkvioletthemedashboard.png)


## **Please find the links below to learn more about custom themes.**

[How to create custom application theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-application-theme/)

[How to create custom dashboard theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-dashboard-theme/)

[custom theme viewer](/site-administration/look-and-feel-settings-in-cloud-bi/custom-theme-viewer/)