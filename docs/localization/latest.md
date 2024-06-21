---
layout: post
title:  Localization Support in Embedded Bold BI v5.1+ | Bold BI Docs
description: Learn how to generate localization files for your (local) language, localize the Bold BI v5.1.55 or later versioned application deployed in your server.
platform: bold-bi
documentation: ug
---
# Localization Support in Bold BI Application

Localization is adapting a website into different linguistic and cultural contexts - involving much more than the simple text translation.

By default, the Bold BI application is available in `English(en-US)` localization.

Refer to the following documentation to add a new localization and edit the existing localization:

> **NOTE:** To apply localization files in Bold BI version 4.2.69 or earlier refer to [this](/embedded-bi/localization/v4.2.69-or-earlier/).
## Add a new localization

1. Create a folder called locale inside the app_data in the deployed location.
  ![locale folder location](/static/assets/embedded/localization/images/locale-folder-creation.png#width=65%)

2. Create a folder inside the locale folder and mention the folder name in the locale language code in which you want to generate the localization file.

   Please refer to this [link](https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a) for a sample language code. Here, create a folder called `fr-FR`, which represents the French language code.

   ![language region folder location](/static/assets/embedded/localization/images/french-language-region-folder-creation.png#width=65%)

3. Create application folders with the following names inside the language code folder for each service:
   * bi 
   * bi-dataservice
   * ums

    ![default application folder](/static/assets/embedded/localization/images/languag-region-folder-structure.png#width=65%)

4. To add `messages.pot` in above created application folder refer to [this](/embedded-bi/localization/latest/#how-to-add-the-default-locale-file-in-the-application-folder).

5. To create locale file `messages.po` from `messages.pot` either using manual edit option or online tool for the `BI` and `UMS` services refer to [this](/embedded-bi/localization/latest/#how-to-generate-the-localization-file-for-another-language).

 6. To create locale file `messages.po` from `default.po` either using manual edit option or online tool for the `Designer` service refer to [this](/embedded-bi/localization/latest/#how-to-generate-the-localization-file-for-another-language).

> **NOTE:**<br>
By default, the Bold BI is deployed in `C:\BoldServices` location for Windows and `/var/www/bold-services/application` location for Linux.
## How to add the default locale file in the application folder

1. BI Service
   * Copy the `messages.pot` file present in the folder `bi\web\locale\` and paste the file inside `app_data\locale\[language-folder]\bi\` folder.

     ![default bi messages pot file](/static/assets/embedded/localization/images/default-bi-messages-pot-file.png#width=65%)

2. UMS Service
   * Copy the `messages.pot` file present in the folder `idp\web\locale\` and paste the file inside `app_data\locale\[language-folder]\ums\` folder.

     ![default ums messages pot file](/static/assets/embedded/localization/images/default-ums-messages-pot-file.png#width=65%)

3. Designer Services
   * Copy the `default.po` file present in the folder `bi\dataservice\locale` and paste the file inside `app_data\locale\[language-folder]\bi-dataservice\` folder.

     ![default po file](/static/assets/embedded/localization/images/defaultpo-file.png)

   * Copy the `locale.js` file present in the folder `bi\dataservice\locale\en-us` and paste the file inside `app_data\locale\[language-folder]\bi-dataservice\` folder.

     ![locale js file](/static/assets/embedded/localization/images/locale-js.png)

## How to generate the localization file for another language

You can generate the localization file for the application in two ways as follows:
1. Manual edit
2. Auto-generate using online tools

> **NOTE:**<br>
•	After generating the `messages.po` file for `bi-dataservice` you need to run the locale utility. Refer to this [link](/embedded-bi/localization/latest/#how-to-generate-the-locale-js-file-for-bi-dataservice) to generate the locale js file.<br>
•	Restart the site to apply the generated language for the application.

### Manual edit

1. `BI` or `UMS`

   * Rename the above pasted  `messages.pot` file into `messages.po`. Here, the localization file has been generated for the `BI` service.

     ![default localization file](/static/assets/embedded/localization/images/change-the-pot-file-to-po-file.png#width=65%)

   `BI-DATASERVICE`

   * Rename the above pasted `default.po` file to `messages.po`.

     ![default localization file for bi-dataservice](/static/assets/embedded/localization/images/change-default-po-file-to-message-po-file.png#width=65%)

   There are two variables in this file : `msgid` and `msgstr`.

   `msgid` - It contains the product content in the default language.

   `msgstr` - It is empty and represents the translated language.

2. Convert the content in the `msgid` into the equivalent language of the desired localization support. Replace this converted content into the empty string in `msgtr`. 

3. Change the locale **Language** code in the top of the `messages.po` file.
Here, the sample converted locale file will appear as follows:

   ![change-message](/static/assets/embedded/localization/images/change-message-v5-1-55.png#width=65%)

### Auto-generate using any tools

1. `BI` or `UMS`

      * Rename the above pasted `messages.pot` file to `messages.po`.

   `BI-DATASERVICE`

      * Rename the above pasted `default.po` file to `messages.po`.

2. Use this online site https://www.matecat.com/ for generating the localization file.

3. Here, browse to select the `messages.po` file in the application folder.

   ![upload-default-file](/static/assets/embedded/localization/images/drag-locale-default-file.png)

4. Change the language in the `To` option, to the language that you want to generate the localization file.

   ![matecat-to](/static/assets/embedded/localization/images/matecat-to-option-v5-1-55.png)

5. Select the `Analyze` option and then click `Translate`.

   ![matecat-analyze](/static/assets/embedded/localization/images/matecat-analyze-v5-1-55.png)

   ![matecat-translate](/static/assets/embedded/localization/images/matecat-translate-v5-1-55.png)

6. Now, there is a download icon at the top of the page. Use it to download the file.

   ![download-file](/static/assets/embedded/localization/images/matecat-download-v5-1-55.png)

7. Change the downloaded file name to `messages.po` and paste it into the respective application folder inside the `app_data\locale\[language-folder]\`.

## How to generate the locale JS file for bi-DataService

1. Download the locale Utility from this [link](https://cdn.boldbi.com/downloads/utilities/BoldBI.Locale.Utility.zip) provided. Once the download is completed, extract the `.Zip` file.

2. Open the `appsettings.json` file in an editor and modify the `boldbi_custom_locale_path` as the deployed path of the application designer locale files and `boldbi_locale_path` locale as the deployed path of default designer locale files.

   ![locale-utility-appsettings](/static/assets/embedded/localization/images/custom-locale-path.png)

3. Then, run the `BoldBI.Locale.Utility.exe` file.

   ![locale-utility-file](/static/assets/embedded/localization/images/locale-utility-file.png)

4. Once, you have run the utility, a `locale.js` file will be generated in the newly created localized folder path of the designer locale `app_data\locale\[language-folder]\bi-dataservice\`.

   ![localizationgeneratefile](/static/assets/embedded/localization/images/localizationgeneratefile.png)

5. Open the `appsettings.json` file in an editor from the location `{Deployed Location}\bi\dataservice` and change the locale path as the app data location `../../app_data/locale` in the property `locale-path.`

   ![appsettings locale path](/static/assets/embedded/localization/images/appsettings-locale-path.png)

## Where to change the localization in the application

### Global language settings

After generating the localization file using the preceding steps, you can set the global language in the UMS application.

  ![global-language-setting](/static/assets/embedded/localization/images/global-language-setting-v5-1-55.png)

This language is applied to `UMS, BI, and Designer Service` when there is no language is selected in [site settings](/embedded-bi/localization/latest/#site-language-settings) or [user preference settings](/embedded-bi/localization/latest/#user-preference-settings) and the Application language should be set to `Inherit from global settings` in site settings.  

![site-language-inherit-setting](/static/assets/embedded/localization/images/site-language-inherit-setting.png)

### Site language settings

Change the localization on the site settings page. By default, the site language is selected with the English language. If you want to change language, you can change to the desired language after generating the localization file for the `BI` and `BI-DATASERVICE` services using the above steps.

Admins can enforce a language to all the users on the site. If the admin enforced a language, then the [user preference settings](/embedded-bi/localization/latest/#user-preference-settings) is disabled.

  ![site-language-setting](/static/assets/embedded/localization/images/site-language-setting-v5-1-55.png#width=65%)

### User preference settings

By clicking the `Update application language details through your account` link on the [profile page](/embedded-bi/managing-resources/user-profile/#language-settings), the user will be redirected to UMS profile page where **they can set their own** language preference.

  ![profile-site-setting](/static/assets/embedded/localization/images/profile-site-setting-v5-1-55.png)

A user can set any language as the preferred language and it will be applied on all the sites, but when the admin disables the user language preference on any site, then the user's preferred language will not be applied on that site.

![disable the user language preference](/static/assets/embedded/localization/images/disable-user-preference.png)