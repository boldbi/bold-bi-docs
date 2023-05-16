---
layout: post
title: Localization for User Management Portal | Bold BI Docs
description: Learn how to add and delete the localization files for the User Management Server application. Also, learn about how to change the language for the application.
platform: bold-bi
documentation: ug
---

# Manage Localization

This section explains how to add, apply, and remove the localization files for the Bold BI application.

Localization is adapting a website into different linguistic and cultural contexts - involving much more than simple text translation.

## Add language

Please follow the steps below to add a language file to the application.

1. Go to the `Site` settings page, and Click the `Manage` option.

   ![Manage-option](/static/assets/embedded/multi-tenancy/images/manage-option.png#max-width=95%)

2. In the manage language dialog box, click the `Add Language` button to upload language.

   ![Upload-dialog-box](/static/assets/embedded/multi-tenancy/images/upload-dialog-box.png)

3. `Choose` the language from the dropdown and `Select` the file to upload. Here the zip file should have the allowed structure. Please refer to this [link](#localization-file-structure) to get the valid file structure.  

   ![Localization-select-file](/static/assets/embedded/multi-tenancy/images/localization-select-file.png#max-width=95%)

4. After uploading the file, Click `Upload`, and the language will be added to the application.
  
   ![Localization-dialog-box](/static/assets/embedded/multi-tenancy/images/localization-dialog-box.png)

>**Note:** The file should have all the bold bi service folder and `message.po` for all services.

### Localization file structure

1. Create application folders with the following names for each service:
    * bi
    * bi-dataservice
    * ums

   ![Localization-file-structure](/static/assets/embedded/multi-tenancy/images/localization-file-structure.png)

2. To create locale file `messages.po` from `messages.pot` either using a manual edit option or an online tool for the `BI` and `UMS` services, refer to [this](https://help.boldbi.com/embedded-bi/localization/latest/#how-to-generate-the-localization-file-for-another-language).

3. To create locale file `messages.po` from `default.po` either using a manual edit option or an online tool for the `Designer` service, refer to [this](https://help.boldbi.com/embedded-bi/localization/latest/#how-to-generate-the-localization-file-for-another-language).

4. After completing the above steps, please convert the service folders into zip and upload them into an application.

   ![Localization-zip-folder](/static/assets/embedded/multi-tenancy/images/localization-zip-folder.png)

## Delete language

To remove a language, `Select` the language and `Click` the `Remove` option. It has the option to remove single and multiple languages.

   ![Remove-localization](/static/assets/embedded/multi-tenancy/images/remove-localization.png)

> **NOTE:** You can not delete the current application language. If you want to remove the language, change the application language to `English` and delete it.

## Set localization in application

By default, the application will be in the English language. You can change the language at the global level or site level or user level.

Please refer to [this](https://help.boldbi.com/embedded-bi/localization/latest/#where-to-change-the-localization-in-the-application) to set the localization.

## Possible errors cases and their solution:

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please ensure to upload the valid zip file (zip).  
| Invalid File Error | Please refer [here](#localization-file-structure) to form the localization file structure.
