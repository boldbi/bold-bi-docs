---
layout: post
title: How to white label Bold BI | Bold BI Documentation
description: Learn how to white label Bold BI to match your application's branding, including logos, site name, copyright information, "powered by" information, themes, fonts, languages, date and time display formats, and domain.
platform: bold-bi
documentation: ug
---

# White labeling in Bold BI
Bold BI can be white-labeled to align with your application's branding. Your application will be prominently featured, ensuring that your clients enjoy a consistent and integrated experience with every engagement. Site administrators or users with permission to manage the settings can perform white-labeling.

## What areas in Bold BI can be white-labeled?
* [Site Name](/white-labeling-in-bold-bi/#site-name-customization)
* [Site Logo](/white-labeling-in-bold-bi/#site-logo-customization)
* [Powered by Information](/white-labeling-in-bold-bi/#powered-by-information-customization)
* [Copyright Information](/white-labeling-in-bold-bi/#copyright-information-customization)
* [Site Language](/white-labeling-in-bold-bi/#site-language-customization)
* [Date and Time Display Formats](/white-labeling-in-bold-bi/#date-and-time-display-formats-customization)
* [Site Domain](/white-labeling-in-bold-bi/#site-domain-customization)
* [Theme and Branding Colors](/white-labeling-in-bold-bi/#theme-and-branding-colors-customization)
* [Site Font](/white-labeling-in-bold-bi/#site-font-customization)
* [Use Your Own Credentials for Login](/white-labeling-in-bold-bi/#use-your-own-credentials-for-login)

## Site Name Customization
Name of the Bold BI site can be changed at any time on the `Site Settings` page under the `General` section. This will be shown in the title of the browser and email template content.
![General Settings](/static/assets/images/general-settings.png#width=65%)

Please refer to this [link](/site-administration/site-settings/#organization-name) to learn more about customizing the site name in Bold BI.

## Site Logo Customization
You can customize the Login screen logo, Header logo, Email logo, and Favicon in the Bold BI on the `Site Settings` page under the `Branding` section to match your application's branding. The default Bold BI logos will be displayed on Bold BI sites unless customized.
![White label logos](/static/assets/white-label/images/white-label-logo.png)

**Login Screen Logo**

The login page logo can be customized (ideal size: `200 x 40`). It will be used on the site's login page, as shown in the following image.
![Login Logo](/static/assets/white-label/images/login-logo.png)

**Header Logo**

The header logo can be customized (ideal size: `40 x 40`). It will be used at the top of the side navigation menu, as shown in the following image.
![Header Logo](/static/assets/white-label/images/header-logo.png)
        
**Favicon**

Favicon for the Bold BI site can be customized (ideal size: `40 x 40`). It will be used in the title of the browser, as shown in the following image.
![Favicon](/static/assets/white-label/images/favicon.png)

**Email Logo**

The email logo can be customized (ideal size: `200 x 40`). It will be used in the emails sent from your Bold BI site, as shown in the following image.
![Email Logo](/static/assets/white-label/images/email-logo.png)

**AI Logo**

The AI logo can be customized (ideal size: `40 x 40`). It will be used on the dashboard rendering page as logo for AI service, as shown in the following image.
![AI Logo](/static/assets/white-label/images/ai-logo.png)

Please refer to this [link](/site-administration/site-settings/#branding) to learn more about customizing the logo in Bold BI.

## Powered by Information Customization
The "Powered by" logo (ideal size: `100x25`) can be customized or disabled for Embedded BI on the `Site Settings` page under the `Branding` section. Cloud BI users can only hide the logo display.

![White label powered by](/static/assets/white-label/images/poweredby-logo.png)

Please refer to this [link](/site-administration/site-settings/#branding) to learn more about customizing the "Powered by" information in Bold BI.

## Copyright Information Customization
Copyright details can be changed or disabled for Embedded BI on the `Site Settings` page under the `Branding` section. Cloud BI users can only hide this information.

![White label copyright](/static/assets/white-label/images/copyright.png)

The "Powered by" logo and copyright information will be shown at the bottom of the site pages, as shown in the following image.
![Copyright and Poweredby](/static/assets/white-label/images/copyright-poweredby.png)

Please refer to this [link](/site-administration/site-settings/#branding) to learn more about customizing the copyright information in Bold BI.

## Site Language Customization
You can customize the language settings for application language and data language on the `Site settings` page under the `Language` section.

**Application Language Customization**

You can localize the Bold BI application to any culture by changing the language in the `Application language` section. Please click on the [localization](/localization/) to learn how to add a new localization or edit the existing localization in the Bold BI application. This language will be applied to the application user interface, including menu items, dialog boxes, toolboxes, and more.

![Application Language](/static/assets/images/site-application-language.png)

**Data Language Customization**

You can localize the date, number, and currency formats of the dashboards to any culture by changing the language in the `Data Language` section.

![Data Language](/static/assets/white-label/images/white-label-data-language.png)

Please refer to this [link](/site-administration/site-settings/#language) to learn more about customizing the languages in Bold BI.

## Date and Time Display Formats Customization
You can customize the time zone, date format, and time format of Bold BI on the `Site settings` page under the `Date and Time` section.

**Time Zone Customization**

The time zone for the Bold BI site can be customized. The Bold BI site sets the default time zone based on the time zone of the machine where Bold BI is deployed. By selecting `Inherit from browser time zone`, the Bold BI site will use the time zone from the browser.

**Date Format Customization**

The date format of the Bold BI site can be customized. The default date format for the Bold BI site will be `MM/DD/YYYY`. By selecting `Inherit from browser locale`, the Bold BI site will use the date format from the browser.

**Time Format Customization**

The time format of the Bold BI site can be customized. The default time format for the Bold BI site will be `12-hour`. By selecting `Inherit from browser locale`, the Bold BI site will use the time format from the browser.

![Date and Time Settings](/static/assets/images/date-and-time-settings.png#width=55%)

Please refer to this [link](/site-administration/site-settings/#date-and-time) to learn more about customizing the date and time display formats in Bold BI.

## Site Domain Customization
You can customize the domain in Bold BI to align your analytics platform by reinforcing brand recognition and credibility.

**Custom Domain in Embedded BI**

You can customize your bindings with either an IP address or a domain. Please follow this [link](https://support.boldbi.com/kb/article/16575/how-to-change-binding-in-bold-bi-embedded) to learn how to set up a custom domain in Embedded BI.

**Custom Domain in Cloud BI**

By default, the domain of the cloud site will be the subdomain of `boldbi.com` (e.g. https://demo.boldbi.com/). You can customize it on the `Site Settings` page under the `Domain` section. To set up the custom vanity domain, you will need a domain from a DNS provider, and Bold BI will provide an SSL certificate for your domain. Please follow the [Custom Domain in Cloud Analytics Server](/site-administration/custom-domain-in-cloud-bi/) to learn how to set up a custom domain in Cloud BI.
![Administration Page](/static/assets/site-administration/images/administration-page.png)

Please refer to the [Custom Domain in Cloud Analytics Server](/site-administration/custom-domain-in-cloud-bi/) to learn more about customizing the domain in Bold BI.

> **Note**: The logos, site name, copyright information, "powered by" information, languages, date and time display formats, and domain customizations can be updated on the `Site Settings` page by administrators or users with permission to manage the site settings.

## Theme and Branding Colors Customization 
You can switch the application and dashboard theme from **light** to **dark mode** and vice versa, under the `Look and Feel` settings. Additionally, you can change the **text color**, **active state**, and **hover state background color**. Furthermore, you can also customize components like **switches**, **radio buttons**, **check boxes**, and **numeric text boxes** by using **branding color** to align with your application's interface.

Here is a sample image after customizing theme branding color using a green variant in light mode.

![Light custom image](/static/assets/site-administration/images/light-custom-image.png#width=45%)

Here is a sample image after customizing theme branding color using a violet variant in dark mode.

![Dark custom image](/static/assets/site-administration/images/dark-custom-image.png)

**Please find the links below to learn more about custom themes.**

[How to create custom application theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-application-theme/)

[How to create custom dashboard theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-dashboard-theme/)

[How to upload custom theme files for Embedded BI on the UMS site settings page](/multi-tenancy/site-administration/look-and-feel-settings/)

## Site Font Customization
You can customize the font style to match your application's interface under the `Look and Feel` settings in the Bold BI.

Here is the sample image after applying the font.

   ![Font Applied Cloud BI](/static/assets/white-label/images/after-font-cloud.png)


**Font Customization in Embedded BI**

The font styles uploaded in **UMS site settings** will be listed in the `Fonts` drop-down list. The selected font style will be applied throughout your site.

![Font Settings Embedded BI](/static/assets/white-label/images/custom-font.png#width=45%)

Please click on the [Font](/multi-tenancy/site-administration/look-and-feel-settings/font/) to learn how to upload font styles on the **UMS site settings** page.

**Font Customization in Cloud BI**

You can upload your preferred font styles in `Look and Feel` settings and it will be listed in the `Fonts` drop-down list. The selected font style will be applied throughout your site.
![Font Settings Cloud BI](/static/assets/white-label/images/white-label-font-cloud.png)


**Please find the links below to learn more about custom fonts.**

[Look and Feel Settings in Cloud Analytics Server](/site-administration/look-and-feel-settings-in-cloud-bi/)

[Look and Feel Settings in Embedded Analytics](/site-administration/look-and-feel-settings-in-embedded-analytics/)

> **Note**: The font and theme customizations can be updated on the `Look And Feel` settings page by administrators or users with permission to manage the look and feel settings.

## Use Your Own Credentials for Login

You have the option to configure third-party identity providers within the site and select one as the default authentication provider for logging in to the BI site. Once the default authentication is established, the Bold BI application will automatically redirect users to the login page of the selected authentication provider instead of the default Bold BI login page. This way, you can use your own credentials for login.

To configure default authentication, it is necessary to set up a provider and enable one of the following identity providers. Otherwise, you will see a "No default Authentication Available" message in the drop-down.

You can configure and choose any of the following providers as the default authentication provider: 

[Azure Active Directory](/site-administration/user-directory-settings/azure-active-directory/)

[Windows Active Directory](/site-administration/user-directory-settings/active-directory/active-directory/)

[OAuth 2.0 Support](/security-configuration/single-sign-on/oauth-2.0-support/)

[OpenID Support](/security-configuration/single-sign-on/openid-support/)

![Default Authentication provider](/static/assets/white-label/images/default-auth.png)

> **NOTE:** If you want to skip default authentication after setting it, then use '`use_default_authentication=false`' in the login URL. (ex: `https://{yourdomain}/{site}/{site_identifier}login?use_default_authentication=false`).

## Common branding for multi-tenants

You can inherit the branding and settings configured in UMS for your BI sites using the `Inherit Global Settings` option. This allows you to maintain common branding and settings across your multi-tenant application.

Please follow this [link](/multi-tenancy/manage-sites/#settings) to learn how to manage `Inherit Global Settings` for an existing site.

![Inherit Settings](/static/assets/multi-tenancy/images/inherit-settings.png)