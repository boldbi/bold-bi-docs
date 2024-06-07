---
layout: post
title: Site settings customization in Bold BI | Bold BI Documentation
description: Learn how to customize the site settings in Bold BI to modify the organization name, header logo, favicon, email logo, time zone, and date/time display formats.
platform: bold-bi
documentation: ug
---

# Site Settings

This section explains how to customize the site settings to change the organization name, header logo, favicon, email logo, time zone, and date/time display formats.

### Organization Name
The organization's name will be used in the application for both page titles and email content, especially in the 'regards' section.

![Organization Name](/static/assets/images/organization-name.png)

### Resource Sorting
The sorting configuration will determine the arrangement of application resources, including dashboards, views, data sources, schedules, and slideshows

![Resource Sorting](/static/assets/images/resource-sorting.png)

### Sorting Type
The application will automatically arrange the resource based on its modified date by default. However, users have the option to switch the sorting criteria for the resource on the site to either name or modified date.

![SortingType](/static/assets/images/resource-type.png)

### Sorting Order
The application will automatically arrange the resource in descending order of its modified date by default. However, users have the option to switch the sorting order for the resource on the site to either ascending or descending.

![SortingOrder](/static/assets/images/resource-order.png)

## Date and Time

![Date and Time Settings](/static/assets/images/date-and-time-settings.png#width=55%)

### Time zone
The time zone for the Bold BI site can be changed. The Bold BI site sets the default time zone based on the time zone of the machine where Bold BI is deployed. By selecting `Inherit from browser time zone`, the Bold BI site will use the time zone from the browser.

![Time Zone](/static/assets/images/time-zone.png#width=50%)

### Date format
The date format of the Bold BI site can be changed. The default date format for the Bold BI site is `MM/DD/YYYY`. By selecting `Inherit from browser locale`, the Bold BI site will use the date format from the browser.

![Date Format](/static/assets/images/date-format.png#width=50%)

### Time format
The time format of the Bold BI site can be changed. The default time format for the Bold BI site is `12 hour`. By selecting `Inherit from browser locale`, the Bold BI site will use the time format from the browser.

![Time format](/static/assets/images/time-format.png#width=50%)

## Language

This section explains how to configure the language settings for application language and data language.

![Site Language](/static/assets/images/site-language.png)

### Application language
You can localize the Bold BI application to any culture by changing the language in the `Application language` section. Please click on the [localization](/localization/) to learn how to add a new localization or edit the existing localization in the Bold BI application. This language is used in the application user interface, such as menu items, dialog boxes, toolboxes, and so on.

![Application Language](/static/assets/images/site-application-language.png)

### Data language

You can localize the date, number, and currency formats of the dashboards to any culture by changing the language in the `Data Language` section.

![Data Language](/static/assets/white-label/images/white-label-data-language.png)

### Disable user preference

Enabling the `Disable user preference` option restricts the user’s language preference in the profile page, so the user’s language preference will not be applied to the site.

 ![Disable user Language Preference](/static/assets/images/disable-user-language.png)

Click [here](/managing-resources/user-profile/#language-settings) to learn more about user language preferences and branding.

## Branding

![Branding Settings](/static/assets/images/branding-settings.png#width=55%)

### Login screen logo
The login page logo image can be changed, with the preferred image size being `200 x 40` pixels. The Bold BI site will have the Bold BI login logo as the default.

### Header logo
The header logo image can be changed, with the preferred image size being `40 x 40` pixels. The Bold BI site will have the Bold BI logo as the default main screen logo.
		
### Favicon
The favicon for the Bold BI site can be changed, with the preferred image size being `40 x 40` pixels. The Bold BI site will have the Bold BI favicon as the default.

### Email logo
The email logo image can be changed, with the preferred image size being `200 x 40` pixels. The Bold BI site will have the Bold BI email logo as the default.

### Powered by Syncfusion
You can either change the powered by logo image with the preferred image size of `100 x 25`, or disable it by unchecking the option for Embedded BI. Cloud BI users can only disable it by unchecking the option.

![Powered By Logo](/static/assets/images/powered-by-logo.png)

### Copyright information
You can either change the copyright information with rebranded content, or disable it by unchecking the option. Cloud BI users can only disable it by unchecking the option.

![Copyright Info](/static/assets/images/copyright-info.png)

## Custom Domain for Cloud BI

![Administration Page](/static/assets/site-administration/images/administration-page.png)

Please follow the [Custom Domain in Cloud Analytics Server](/site-administration/custom-domain-in-cloud-bi/) to learn how to set up a custom domain in Cloud BI.