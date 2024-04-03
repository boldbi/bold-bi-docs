---
layout: post
title: Application and Dashboard Theme – Bold ID | Bold BI Documentation
description: Discover how to create a custom theme file and upload the created theme file in User Management Server.
platform: bold-bi
documentation: ug
---

# Theme

You can switch the application's theme from light to dark mode and vice versa using this option. Additionally, you can customize the **text color**, **active state**, and **hover state background color**. You can also customize components such as **switches**, **radio buttons**, **check boxes**, and **numeric text boxes** by using **branding colors**. The **dashboard theme** can also be customized in this option.
   
## Switch Application Theme Mode

The application theme mode can be switched to either **light** or **dark mode**. By default, the light mode is applied.

In the default light mode, the application will have a light appearance with the blue variant as the branding color, as shown in the image below.

![Light mode](/static/assets/multi-tenancy/images/look-and-feel/light-mode.png)

In dark default mode, the application will have a dark appearance with a blue variant as the branding color, as shown in the image below.

![Dark mode](/static/assets/multi-tenancy/images/look-and-feel/dark-mode.png)

## Custom Theme

You can upload a customized theme file using the `Manage` option in the theme section. With this feature, you can change the **branding color**, **text color**, **active state**, and **hover state background colors**, in addition to choosing between light or dark mode. The background and surface areas cannot be customized and will always follow the selected mode.

Please follow the steps below to create and apply a custom theme for the application:
1. Click on the `Manage` option to open a dialog for uploading your custom theme.
![Manage theme option](/static/assets/multi-tenancy/images/look-and-feel/manage-theme-option.png)

2. Download the theme template files from the link highlighted in the image below.
![Download theme template](/static/assets/multi-tenancy/images/look-and-feel/theme-template-link.png)

3. Extract the downloaded zip folder. The extracted folder contains CSS3 variables with color code values for each component, as shown in the image.
![Download theme template files](/static/assets/multi-tenancy/images/look-and-feel/theme-template-files.png)

4. Update the color code values according to your preference and upload the updated custom theme file into the application. Refer to the [Create application custom theme](/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-application-theme/) section to learn more about customizing color codes to create your preferred theme.
![Manage app theme](/static/assets/multi-tenancy/images/look-and-feel/manage-app-theme-dialog.png)

5. The uploaded theme will be listed in the `Custom Theme` drop-down. Select the uploaded theme in the custom theme drop-down and save the settings.
![Select app theme](/static/assets/multi-tenancy/images/look-and-feel/select-app-theme.png)

Here is a sample image after applying the custom theme.

![Dark custom image](/static/assets/multi-tenancy/images/look-and-feel/dark-custom-image.png)


## Dashboard Theme

You can customize the dashboard theme that will be applied to dashboards in dashboard view mode. By default, the Default option will be selected.

Follow these steps to upload the generated custom theme file:

1.  Click the `Manage` option next to `Dashboard Theme` under the `Theme` section.
![Manage-option-dashboard](/static/assets/multi-tenancy/images/look-and-feel/manage-option-dashboard.png)

2.  A dialog will appear below. Choose the created custom theme file by clicking three dots and then click `Upload`. Please refer to the [Create dashboard custom theme](/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-dashboard-theme/) section to learn how to create your preferred custom theme file for dashboards.
![Upload dashboard theme](/static/assets/multi-tenancy/images/look-and-feel/upload-dashboard-theme.png)

3. The uploaded custom theme file will appear in the `Dashboard Theme` drop-down, as listed below. In the `Dashboard Theme` drop-down menu, choose the uploaded theme, then save the settings.
![Select dashboard theme](/static/assets/multi-tenancy/images/look-and-feel/select-dashboard-theme.png)

4. The dashboard will be rendered according to your customized theme file. For example, the `darkviolet` theme is rendered as shown below.
![Dashboard custom image](/static/assets/multi-tenancy/images/look-and-feel/dashboard-custom-image.png)


## **Please find the links below to learn more about custom themes.**

[How to create custom application theme](/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-application-theme/)

[How to create custom dashboard theme](/multi-tenancy/site-administration/look-and-feel-settings/theme/create-custom-dashboard-theme/)
