---
layout: post
title:  Localization Support in Embedded Bold BI v5.1+ | Bold BI Docs
description: Learn how to generate localization files for your (local) language, localize the Bold BI v5.1.55 or later versioned application deployed in your server.
platform: bold-bi
documentation: ug
---
# Localization Support in Bold BI Application

Localization involves adapting a website into different linguistic and cultural contexts, which goes beyond simple text translation.

By default, the Bold BI application is available in `English (en-US)` localization.

Please refer to the following documentation to add a new localization or edit the existing localization:

> **NOTE:** For applying localization files in Bold BI version 4.2.69 or earlier, Please refer to the Bold BI version [4.2.69 or earlier](/localization/v4.2.69-or-earlier/) guide.
## Add a new localization

1. Create a folder named locale inside the app_data folder in the deployed location.
  ![locale folder location](/static/assets/localization/images/locale-folder-creation.png#width=65%)

2. Create a folder inside the locale folder and specify the folder name in the locale language code in which you wish to generate the localization file.

   Please refer to the [sample](https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a) language code. For example, create a folder called `fr-FR` to represent the French language code.

   ![language region folder location](/static/assets/localization/images/french-language-region-folder-creation.png#width=65%)

3. Create application folders with the following names inside the language code folder for each service:
   * bi 
   * bi-dataservice
   * ums

    ![default application folder](/static/assets/localization/images/languag-region-folder-structure.png#width=65%)

4. To add `messages.pot` in the application folder created above, please refer to  [this](/localization/latest/#how-to-add-the-default-locale-file-in-the-application-folder).

5. To create a locale file `messages.po` from `messages.pot`, either use the manual edit option or an online tool for the `BI` and `UMS` services. Refer to [this](/localization/latest/#how-to-generate-the-localization-file-for-another-language) for guidance.

 6. To create a locale file `messages.po` from `default.po`, either use the manual edit option or an online tool for the `Designer` service. Refer to [this](/localization/latest/#how-to-generate-the-localization-file-for-another-language) for instructions.

> **NOTE:** By default, Bold BI is deployed in` C:\BoldServices` for Windows and `/var/www/bold-services/application` for Linux.
## How to add the default locale file in the application folder

1. BI Service
   * Copy the `messages.pot` file from the `bi\web\locale\` folder and paste it inside `app_data\locale\[language-folder]\bi\` folder.

     ![default bi messages pot file](/static/assets/localization/images/default-bi-messages-pot-file.png#width=65%)

2. UMS Service
   * Copy the `messages.pot` file from the `idp\web\locale\` folder and paste it inside `app_data\locale\[language-folder]\ums\` folder.

     ![default ums messages pot file](/static/assets/localization/images/default-ums-messages-pot-file.png#width=65%)

3. Designer Services
   * Copy the `default.po` file from the `bi\dataservice\locale` folder and paste it inside `app_data\locale\[language-folder]\bi-dataservice\` folder.  

     ![default po file](/static/assets/localization/images/defaultpo-file.png)

   * Copy the `locale.js` file from the `bi\dataservice\locale\en-us` folder and paste it inside `app_data\locale\[language-folder]\bi-dataservice\` folder.

     ![locale js file](/static/assets/localization/images/locale-js.png)

## How to generate the localization file for another language

You can generate the localization file for the application in two ways:
1. Manual edit
2. Auto-generate using online tools

> **NOTE:**<br>
> •	After generating the `messages.po` file for `bi-dataservice` you need to run the locale utility. Refer to this [link](#how-to-generate-the-locale-js-file-for-bi-dataservice) to generate the locale js file.<br>
> •	Restart the site to apply the generated language for the application.

### Manual edit

1. `BI` or `UMS`

   * Rename the `messages.pot` file to `messages.po`. This will generate the localization file for the `BI` service.

     ![default localization file](/static/assets/localization/images/change-the-pot-file-to-po-file.png#width=65%)

   `BI-DATASERVICE`

   * Rename the `default.po` file to `messages.po`.

     ![default localization file for bi-dataservice](/static/assets/localization/images/change-default-po-file-to-message-po-file.png#width=65%)

   The file contains two variables: `msgid` and `msgstr`.

   `msgid` contains the product content in the default language.

   `msgstr` is empty and represents the translated language.

2. Convert the content in `msgid` to the equivalent language of the desired localization support. Replace this converted content into the empty string in `msgstr`.

3. Change the locale **Language** code at the top of the `messages.po` file.
Here, the sample converted locale file will appear as follows:

   ![change-message](/static/assets/localization/images/change-message-v5-1-55.png#width=65%)

### Auto-generate using any tools

1. `BI` or `UMS`

      * Rename the `messages.pot` file to `messages.po`.

   `BI-DATASERVICE`

      * Rename the previously pasted `default.po` file to `messages.po`.

2. Use the online [site](https://www.matecat.com/) to generate the localization file.

3. Browse to select the `messages.po` file in the application folder on the site.

   ![upload-default-file](/static/assets/localization/images/drag-locale-default-file.png)

4. Change the language in the `To` option to the desired language for generating the localization file.

   ![matecat-to](/static/assets/localization/images/matecat-to-option-v5-1-55.png)

5. Select the `Analyze` option and then click `Translate`.

   ![matecat-analyze](/static/assets/localization/images/matecat-analyze-v5-1-55.png)

   ![matecat-translate](/static/assets/localization/images/matecat-translate-v5-1-55.png)

6. At the top of the page, there is a download icon. Use it to download the file.

   ![download-file](/static/assets/localization/images/matecat-download-v5-1-55.png)

7. Change the downloaded file name to `messages.po` and paste it into the respective application folder inside the `app_data\locale\[language-folder]\`.

## How to Generate Locale Files for Bold BI Services

### 1. Download the Locale Utility
Download the locale utility from the GitHub repository: https://github.com/boldbi/localization-creation by cloning the repository or downloading it as a ZIP and extracting it locally.

### 2. Prepare Source Locale Files
Copy the required source locale files from your BoldServices build folders and paste them into the localization-creation folder.

**Example source files:**

- Copy `/bi/dataservice/locale/en-us/locale.js` → keep the name as `locale.js`
- Copy `/bi/web/locale/en-US/messages.po` → rename to `bi.po`
- Copy `/idp/ums/locale/en-us/messages.po` → rename to `ums.po`

> **NOTE:** By default, Bold BI is deployed in `C:\BoldServices` for Windows and `/var/www/bold-services/application` for Linux.

### 3. Configure Azure Translator
Update the `config.json` file in the sample folder with your Azure Translator details.

**Example configuration:**

```json
{
  "Translator": {
    "Endpoint": "https://api.cognitive.microsofttranslator.com/",
    "SubscriptionKey": "YOUR_SUBSCRIPTION_KEY",
    "Region": "YOUR_RESOURCE_REGION",
    "Culture": ["fr-FR"],
    "IsServerAndUMS": true
  }
}
```

### 4. Start the Localization Process
Execute the localization application:

```
Localization.exe
```

- The utility calls the Azure Translator API
- Generates translated locale files for all languages specified in `Translator.Culture`

### 5. Output Structure
The generated files will be placed inside the `Translated_locale` folder.

**Example structure:**

```
Translated_locale/
  └── fr-FR/
      ├── bi/
      ├── bi-dataservice/
      └── ums/
```

### 6. Deploy Locale Files
Move the generated culture folder into your application directory:

```
app_data\locale\fr-FR
```

**Final structure:**

- `app_data\locale\fr-FR\bi\`
- `app_data\locale\fr-FR\bi-dataservice\`
- `app_data\locale\fr-FR\ums\`

### 7. Update Locale Path Configuration
Open the `appsettings.json` file in an editor from the location `{Deployed Location}\bi\dataservice` and change the locale path as the app data location `../../app_data/locale` in the property `locale-path.`

   ![appsettings locale path](/static/assets/localization/images/appsettings-locale-path.png)

### 8. Restart Services
Restart the Bold BI site/services to apply the new localization changes.

> **NOTE:**<br>
> - Ensure `SubscriptionKey` and `Region` are set when using Azure Translator.
> - The utility will generate locale files for every language in the `Translator.Culture` array.

## Where to change the localization in the application

### Global language settings

After generating the localization file using the preceding steps, you can set the global language in the UMS application.

  ![global-language-setting](/static/assets/localization/images/global-language-setting-v5-1-55.png)

This language is applied to `UMS, BI, and Designer Service` when there is no language is selected in [site settings](/localization/latest/#site-language-settings) or [user preference settings](/localization/latest/#user-preference-settings) and the Application language should be set to `Inherit from global settings` in site settings.  

![site-language-inherit-setting](/static/assets/localization/images/site-language-inherit-setting.png)

### Site language settings

Change the localization on the site settings page. By default, the site language is selected as English. If you want to change the language, you can switch to the desired language after generating the localization file for the `BI` and `BI-DATASERVICE` services using the above steps.

Admins can enforce a language for all users on the site. If the admin enforces a language, then the [user preference settings](/localization/latest/#user-preference-settings) are disabled.

  ![site-language-setting](/static/assets/localization/images/site-language-setting-v5-1-55.png#width=65%)

### User preference settings

By clicking the `Update application language details through your account` link on the [profile page](/managing-resources/user-profile/#language-settings), the user will be redirected to the UMS profile page where **they can set their own** language preference.

  ![profile-site-setting](/static/assets/localization/images/profile-site-setting-v5-1-55.png)

A user can set any language as the preferred language, and it will be applied to all sites. However, if the admin disables the user language preference on any site, then the user's preferred language will not be applied on that site.

![disable the user language preference](/static/assets/localization/images/disable-user-preference.png)