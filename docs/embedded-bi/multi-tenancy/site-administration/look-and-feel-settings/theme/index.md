---
layout: post
title: Application and Dashboard Theme – Bold ID | Bold BI Documentation
description: Discover how to create a custom theme file and upload the created theme file in User Management Server.
platform: bold-bi
documentation: ug
---

# Theme

You can switch the application's theme from light to dark mode and vice versa using this option.
Additionally, you can customize the **text color**, **active state**, and **hover state background color**, and you can also customize components like **switches**, **radio buttons**, **check boxes**, and **numeric text boxes** by using **branding color**. In this theme option, the **dashboard theme** can also be customized.
   
## Switch Application Theme Mode

Application theme mode can be switched either to **light** or **dark mode**. By default, light mode is applied.

In light default mode, the application will be in light appearance with blue variant as branding color as shown in image below.

![Light mode](/static/assets/embedded/multi-tenancy/images/look-and-feel/light-mode.png)

In dark default mode, the application will be in dark appearance with blue variant as branding color as shown in image below.

![Dark mode](/static/assets/embedded/multi-tenancy/images/look-and-feel/dark-mode.png)

## Custom Theme

You can upload the customized theme file using the `Manage` option in theme section. Using this, you can change the **branding color**, **text color**, **active state** and **hover state background colors** in addition to the light or dark mode. The background and surface areas are not customized, and it will always follow the selected mode.

Please follow the below steps to create and apply a custom theme for the application.
1.  Click on the `Manage` option to open a dialog to upload your custom theme.
![Manage theme option](/static/assets/embedded/multi-tenancy/images/look-and-feel/manage-theme-option.png)

2. Please download the theme template files from the link that is highlighted in the below image.
![Download theme template](/static/assets/embedded/multi-tenancy/images/look-and-feel/theme-template-link.png)

3. Extract the downloaded zip folder. The extracted folder contains the CSS3 variable with a color code value for each component, as shown in the following image.
![Download theme template files](/static/assets/embedded/multi-tenancy/images/look-and-feel/theme-template-files.png)

4. Please update the color code values per your preference and upload the updated custom theme file into the application. Please refer to the [Create application custom theme](/embedded-bi/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-application-theme/) section to learn more about how to customize color codes to create your preferred custom theme.
![Manage app theme](/static/assets/embedded/multi-tenancy/images/look-and-feel/manage-app-theme-dialog.png)

5. The uploaded theme will be listed in the `Custom Theme` drop-down. Select the uploaded theme in the custom theme drop-down and save the settings.
![Select app theme](/static/assets/embedded/multi-tenancy/images/look-and-feel/select-app-theme.png)

Here is a sample image after applying the custom theme.

![Dark custom image](/static/assets/embedded/multi-tenancy/images/look-and-feel/dark-custom-image.png)


## Dashboard Theme

You can customize the dashboard theme which will be applied to dashboards in dashboard view mode. By default, the `Default` option will be selected.

Follow the steps to upload generated custom theme file.

1.  Click the `Manage` option next to `Dashboard Theme` under the `Theme` section.
![Manage-option-dashboard](/static/assets/embedded/multi-tenancy/images/look-and-feel/manage-option-dashboard.png)

2.  A dialog will appear below. Choose the created custom theme file by clicking three dots and then click `Upload`. Please refer to the [Create dashboard custom theme](/embedded-bi/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-dashboard-theme/) section to learn about how to create your preferred custom theme file for dashboards.
![Upload dashboard theme](/static/assets/embedded/multi-tenancy/images/look-and-feel/upload-dashboard-theme.png)

3. The uploaded custom theme file will appear in the `Dashboard Theme` drop-down, as listed below. In the `Dashboard Theme` drop-down menu, choose the uploaded theme, then save the settings.
![Select dashboard theme](/static/assets/embedded/multi-tenancy/images/look-and-feel/select-dashboard-theme.png)

4. According to your customized theme file, the dashboard will be rendered. For example, the `darkviolet` theme is rendered as shown below.
![Dashboard custom image](/static/assets/embedded/multi-tenancy/images/look-and-feel/dashboard-custom-image.png)


## **Please find the links below to learn more about custom themes.**

[How to create custom application theme](/embedded-bi/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-application-theme/)

[How to create custom dashboard theme](/embedded-bi/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-dashboard-theme/)
