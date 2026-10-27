---
layout: post
title: White-Labeling in Bold BI with Your Branding | Bold BI Docs
description: "Learn how to white-label Bold BI with your logos, site name, colors, fonts, languages, date formats and domain in Site Settings and Look and Feel."
platform: bold-bi
documentation: ug
---

# White-Labeling in Bold BI
You can white-label Bold BI by changing its logos, site name, colors, fonts, languages, date formats and domain to match your application. Your clients then see your branding on the login page, dashboards, admin panel and emails. Site administrators or users with permission to manage the settings can perform white-labeling.

## What Areas in Bold BI Can Be White-Labeled?
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
You can change the Bold BI site name at any time on the `Site Settings` page under the `General` section. The site name appears in the browser title and in the email template content.
![General Settings](/static/assets/images/general-settings.png#width=65%)

For more detail, see [Site settings: organization name](/site-administration/site-settings/#organization-name).

## Site Logo Customization
You can customize the Login screen logo, Header logo, Email logo, and Favicon in Bold BI on the `Site Settings` page under the `Branding` section to match your application's branding. The default Bold BI logos are displayed on Bold BI sites unless customized.
![White label logos](/static/assets/white-label/images/white-label-logo.png)

**Login Screen Logo**

The login page logo can be customized (ideal size: `200 x 40`). The login logo appears on the site's login page, as shown in the following image.
![Login Logo](/static/assets/white-label/images/login-logo.png)

**Header Logo**

The header logo can be customized (ideal size: `40 x 40`). The header logo appears at the top of the side navigation menu, as shown in the following image.
![Header Logo](/static/assets/white-label/images/header-logo.png)
        
**Favicon**

The favicon for the Bold BI site can be customized (ideal size: `40 x 40`). The favicon appears in the browser tab, as shown in the following image.
![Favicon](/static/assets/white-label/images/favicon.png)

**Email Logo**

The email logo can be customized (ideal size: `200 x 40`). The email logo appears in emails sent from your Bold BI site, as shown in the following image.
![Email Logo](/static/assets/white-label/images/email-logo.png)

**AI Logo**

The AI logo can be customized (ideal size: `40 x 40`). The AI logo appears on the dashboard rendering page as the logo for the AI service, as shown in the following image.
![AI Logo](/static/assets/white-label/images/ai-logo.png)

For more detail, see [Site settings: branding](/site-administration/site-settings/#branding).

## Powered by Information Customization
The "Powered by" logo (ideal size: `100x25`) can be customized or disabled for Embedded BI on the `Site Settings` page under the `Branding` section. Cloud Edition users can only hide the logo display.

![White label powered by](/static/assets/white-label/images/poweredby-logo.png)

For more detail, see [Site settings: branding](/site-administration/site-settings/#branding).

## Copyright Information Customization
Copyright details can be changed or disabled for Embedded BI on the `Site Settings` page under the `Branding` section. Cloud Edition users can only hide this information.

![White label copyright](/static/assets/white-label/images/copyright.png)

The "Powered by" logo and copyright information are shown at the bottom of the site pages, as shown in the following image.
![Copyright and Poweredby](/static/assets/white-label/images/copyright-poweredby.png)

For more detail, see [Site settings: branding](/site-administration/site-settings/#branding).

## Site Language Customization
You can customize the language settings for application language and data language on the `Site settings` page under the `Language` section.

**Application Language Customization**

You can localize the Bold BI application to any culture by changing the language in the `Application language` section. Read the [localization guide](/localization/) to learn how to add or edit a localization in the Bold BI application. This language is applied to the application user interface, including menu items, dialog boxes, toolboxes, and more.

![Application Language](/static/assets/images/site-application-language.png)

**Data Language Customization**

You can localize the date, number, and currency formats of the dashboards to any culture by changing the language in the `Data Language` section.

![Data Language](/static/assets/white-label/images/white-label-data-language.png)

For more detail, see [Site settings: language](/site-administration/site-settings/#language).

## Date and Time Display Formats Customization
You can customize the time zone, date format, and time format of Bold BI on the `Site settings` page under the `Date and Time` section.

**Time Zone Customization**

The time zone for the Bold BI site can be customized. The Bold BI site sets the default time zone based on the time zone of the machine where Bold BI is deployed. By selecting `Inherit from browser time zone`, the Bold BI site uses the time zone from the browser.

**Date Format Customization**

The date format of the Bold BI site can be customized. The default date format for the Bold BI site is `MM/DD/YYYY`. By selecting `Inherit from browser locale`, the Bold BI site uses the date format from the browser.

**Time Format Customization**

The time format of the Bold BI site can be customized. The default time format for the Bold BI site is `12-hour`. By selecting `Inherit from browser locale`, the Bold BI site uses the time format from the browser.

![Date and Time Settings](/static/assets/images/date-and-time-settings.png#width=55%)

For more detail, see [Site settings: date and time](/site-administration/site-settings/#date-and-time).

## Site Domain Customization
You can customize the domain in Bold BI so your analytics platform uses your brand. Custom domain mapping is supported, for example `analytics.yourproduct.com`.

**Custom Domain in Embedded BI**

You can customize your bindings with either an IP address or a domain. To set up a custom domain in Embedded BI, see [Knowledge base article: how to change binding in Embedded BI](https://support.boldbi.com/kb/article/16575/how-to-change-binding-in-bold-bi-embedded).

**Custom Domain in Cloud Edition**

By default, the domain of the cloud site is a subdomain of `boldbi.com` (for example, https://demo.boldbi.com/). You can customize it on the `Site Settings` page under the `Domain` section. To set up the custom vanity domain, you will need a domain from a DNS provider, and Bold BI will provide an SSL certificate for your domain. Follow the [Custom Domain in Cloud Analytics Server](/site-administration/custom-domain-in-cloud-bi/) guide to set up a custom domain in Cloud Edition.
![Administration Page](/static/assets/site-administration/images/administration-page.png)

For more detail, see [Custom Domain in Cloud Analytics Server](/site-administration/custom-domain-in-cloud-bi/).

> **NOTE:** The logos, site name, copyright information, "powered by" information, languages, date and time display formats, and domain can be updated on the `Site Settings` page. Administrators, or users with permission to manage the site settings, can make these changes.

## Theme and Branding Colors Customization 
You can switch the application and dashboard theme from **light** to **dark mode** and vice versa, under the `Look and Feel` settings. Additionally, you can change the **text color**, **active state**, and **hover state background color**. Furthermore, you can also customize components like **switches**, **radio buttons**, **checkboxes**, and **numeric text boxes** by using **branding color** to align with your application's interface.

The following image shows the theme after the branding color is changed to green in light mode.

![Light mode theme with green branding color](/static/assets/site-administration/images/light-custom-image.png#width=45%)

The following image shows the theme after the branding color is changed to violet in dark mode.

![Dark mode theme with violet branding color](/static/assets/site-administration/images/dark-custom-image.png)

**Learn more about custom themes:**

[How to create a custom application theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-application-theme/)

[How to create a custom dashboard theme](/site-administration/look-and-feel-settings-in-cloud-bi/create-custom-dashboard-theme/)

[How to upload custom theme files for Embedded BI on the UMS site settings page](/multi-tenancy/site-administration/look-and-feel-settings/)

## Site Font Customization
You can customize the font style to match your application's interface under the `Look and Feel` settings in Bold BI.

The following image shows the font applied in Cloud Edition.

   ![Font applied in Cloud Edition](/static/assets/white-label/images/after-font-cloud.png)


**Font Customization in Embedded BI**

The font styles uploaded in **UMS site settings** are listed in the `Fonts` drop-down list. The selected font style is applied throughout your site.

![Font settings in Embedded BI](/static/assets/white-label/images/custom-font.png#width=45%)

To upload font styles on the **UMS site settings** page, see the [Font page](/multi-tenancy/site-administration/look-and-feel-settings/font/).

**Font Customization in Cloud Edition**

You can upload your preferred font styles in the `Look and Feel` settings, and they are listed in the `Fonts` drop-down list. The selected font style is applied throughout your site.
![Font settings in Cloud Edition](/static/assets/white-label/images/white-label-font-cloud.png)


**Learn more about custom fonts:**

[Look and Feel Settings in Cloud Analytics Server](/site-administration/look-and-feel-settings-in-cloud-bi/)

[Look and Feel Settings in Embedded Analytics](/site-administration/look-and-feel-settings-in-embedded-analytics/)

> **NOTE:** The font and theme customizations can be updated on the `Look And Feel` settings page by administrators or users with permission to manage the look and feel settings.

## Use Your Own Credentials for Login

You have the option to configure third-party identity providers within the site and select one as the default authentication provider for logging in to the BI site. Once the default authentication is established, the Bold BI application automatically redirects users to the login page of the selected authentication provider instead of the default Bold BI login page. This way, you can use your own credentials for login.

To configure default authentication, set up and enable one of the following identity providers. Otherwise, you will see a "No default Authentication Available" message in the drop-down.

You can configure and choose any of the following providers as the default authentication provider: 

[Azure Active Directory](/site-administration/user-directory-settings/azure-active-directory/)

[Windows Active Directory](/site-administration/user-directory-settings/active-directory/active-directory/)

[OAuth 2.0 Support](/security-configuration/single-sign-on/oauth-2.0-support/)

[OpenID Support](/security-configuration/single-sign-on/openid-support/)

![Default Authentication provider](/static/assets/white-label/images/default-auth.png)

> **NOTE:** If you want to skip default authentication after setting it, use `use_default_authentication=false` in the login URL (for example, `https://{yourdomain}/{site}/{site_identifier}login?use_default_authentication=false`).

## Common Branding for Multi-Tenants

You can inherit the branding and settings configured in UMS for your BI sites using the `Inherit Global Settings` option. This allows you to maintain common branding and settings across your multi-tenant application.

To manage `Inherit Global Settings` for an existing site, see [Manage sites: settings](/multi-tenancy/manage-sites/#settings).

![Inherit Global Settings option for a BI site](/static/assets/multi-tenancy/images/inherit-settings.png)