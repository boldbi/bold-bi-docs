---
layout: post
title:  Localization – Embedded BI | Bold BI Documentation
description: Learn how to generate localization file for a language and localize Bold BI application deployed in your server.
platform: bold-bi
documentation: ug
---

# Localization Support in Bold BI Application

Localization is the process of adapting a website into different linguistic and cultural contexts - involving much more than the simple translation of the text.

By default, Bold BI application is available in `English(en-US)` localization.

Refer the following documentation, how to add a new localization and to edit the existing localization.

## How to generate the localization file for another language

We can generate the locale files in two ways as follow:

1. Manual edit
2. Auto-generate using online tools

Follow these common steps for both ways:

1. Create a new folder inside the locale folder, which present in the Bold BI application in the following location.

   Check the following location for Bold BI version 4.1.36 or later.

> **NOTE:** By default, the Bold BI is deployed in "C:\BoldServices" location for Windows.

| Application       	| Location                                                  	|
|-------------------	|-----------------------------------------------------------	|
| Idp                	| **`{Deployed Location}`**\idp\web\locale                  |
| Ums               	| **`{Deployed Location}`**\idp\ums\locale                  	|
| Bi                	| **`{Deployed Location}`**\bi\web\locale                    	|
| BiDesigner          | **`{Deployed Location}`**\bi\dataservice\locale            	|

   Check the following location for Bold BI Linux server.

> **NOTE:** By default, the Bold BI is deployed in "/var/www/bold-services/application" location for Linux.

| Application       	| Location                                                  |
|-------------------	|-----------------------------------------------------------|
| Idp                	| /var/www/bold-services/application/idp/web/locale      |
| Ums               	| /var/www/bold-services/application/idp/ums/locale         |
| Bi                	| /var/www/bold-services/application/bi/web/locale          |
| BiDesigner          | /var/www/bold-services/application/bi/dataservice/locale |


   Check the following location for Bold BI version below 4.1.36.

   > **NOTE:** By default, the Bold BI is deployed in "C:\Bold BI".

| Application       	| Location                                                  	|
|-------------------	|-----------------------------------------------------------	|
| IDP                	| **`{Deployed Location}`**\IDP\locale                     	|
| UMS               	| **`{Deployed Location}`**\IDP\UMS\locale                   	|
| Dashboard Server   	| **`{Deployed Location}`**\Dashboard Server\locale        	|
| Dashboard Designer  |	**`{Deployed Location}`**\Dashboard Designer\locale         |

2. Mention the folder name in the locale language code, for which language that you want to generate the localization file.

3. Here, created folder `fr-fr`, which represents the **French** language code.

   ![new-locale](/static/assets/embedded/localization/images/new-locale-folder.png)

### Manual edit

1. Copy the `default.po` file in locale folder and paste this file into the newly created folder, then change the name of the file as `messages.po`.

In this file, there are two variables present as `msgid` and `msgstr`.

`msgid`  - It contains the product content in the default language.

`msgstr` - It is empty, and it represents the translated language. 

2. Convert the content in the `msgid` into the equivalent language of the localization support that you want. Replace this converted content into the empty string in `msgtr`. 

3. Change the locale **Language** code in the top of the `messages.po` file.
Here, the sample converted locale file will be appeared as follows.

   ![change-message](/static/assets/embedded/localization/images/change-message.png#width=65%)

### Auto-generate using any tools

1. Use this online site https://www.matecat.com/ for generating the localization file.

2. Here, browse to select the `default.po` file in locale folder.

   ![upload-default-file](/static/assets/embedded/localization/images/drag-locale-default-file.png)

3. Change the language in `TO` option, to which language that you want to generate the localization file.

   ![matecat-to](/static/assets/embedded/localization/images/matecat-to-option.png)

4. Select `Analyze` option and then click `Translate`.

   ![matecat-analyze](/static/assets/embedded/localization/images/matecat-analyze.png)

   ![matecat-translate](/static/assets/embedded/localization/images/matecat-translate.png)

5. Now, top of the page, there is an icon for download, using it to download the file.

   ![download-file](/static/assets/embedded/localization/images/matecat-download.png)

6. Change the downloaded file name as `messages.po` and paste it into the newly created localize folder.

> **NOTE:** You should need to run the locale utility for Bold BI version 4.2.68 or later.

## How to generate the locale JS file

1. Download the locale Utility from this [link](http://files2.syncfusion.com/Installs/BoldBILocaleUtility.zip) provided. Once the download is completed, extract the `.Zip` file.

2. Open the `appsettings.json` file in an editor and modify the `boldbi_locale_path` as deployed path of the designer locale files.

  ![locale-utility-appsettings](/static/assets/embedded/localization/images/locale-utility-appsettings.png)

3. Then, run the `BoldBI.Locale.Utility.exe` file.

  ![locale-utility-file](/static/assets/embedded/localization/images/locale-utility-file.png)

4. Once, you have run the utility, a `locale.js` file will be generated in the newly created localize folder path of the designer locale.

## Where to change the localization in application

### Global language settings

In Bold UMS application, you can set the global language. This language is applied to `UMS, IDP, and Dashboard Server` when there is no language is selected in site settings or user preference settings.

  ![global-language-setting](/static/assets/embedded/localization/images/global-language-setting.png)

### Site language settings

Change the localization in site settings page. By default, site language settings inherit the language from global language settings. If you want to change language, then you can change to desire language.

Admin can enforce this language into all the users. If admin enforced this language, then user preference settings is disabled.

  ![site-language-setting](/static/assets/embedded/localization/images/site-language-setting.png#width=65%)

### User preference settings

User can set the language preference in the profile page. By clicking the `Account` presence on the profile page, it will be redirected to IDP profile page where user can set the own language preference.

  ![profile-site-setting](/static/assets/embedded/localization/images/profile-site-setting.png#width=55%)

A user can set any language as preferred language and it will be applied on all the sites, but when the admin disable the user language preference in any site, the user preferred language will be not applied at that site.