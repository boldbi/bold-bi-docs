---
layout: post
title: Localization for User Management Portal | Bold BI Docs
description: Learn how to add and delete the localization files for the User Management Server application. Also, learn about how to change the language for the application.
platform: bold-bi
documentation: ug
---

# Manage Localization

This section explains how to add, apply, and remove the localization files for the Bold BI application.

Localization involves adapting a website into different linguistic and cultural contexts, which goes beyond simple text translation.

## Add language

To add a language file to the application, please follow these steps:

1. Go to the `Site` Settings page and click on the `Manage` option.

   ![Manage-option](/static/assets/multi-tenancy/images/manage-option.png#max-width=95%)

2. In the Manage Language dialog box, click the `Add Language` button to upload the language file.

   ![Upload-dialog-box](/static/assets/multi-tenancy/images/upload-dialog-box.png)

3. `Choose` the language from the dropdown and `select` the file to upload. The zip file should have the correct structure. Refer to this [link](#localization-file-structure) for the valid file structure.

   ![Localization-select-file](/static/assets/multi-tenancy/images/localization-select-file.png#max-width=95%)

4. After uploading the file, Click `Upload`, and the language will be added to the application.
  
   ![Localization-dialog-box](/static/assets/multi-tenancy/images/localization-dialog-box.png)

>**Note:** The file should include all the Bold BI service folders and `message.po` for all services.

### Localization file structure

1. Create application folders with the following names for each service:
    * bi
    * bi-dataservice
    * ums

   ![Localization-file-structure](/static/assets/multi-tenancy/images/localization-file-structure.png)

2. To create a locale file `messages.po` from `messages.pot`, you can either use manual editing or an online tool for the `BI` and `UMS` services. Refer to [this](/localization/latest/#how-to-generate-the-localization-file-for-another-language) for instructions.

3. To create a locale file `messages.po` from `default.po`  you can either use manual editing or an online tool for the `Designer` service. Refer to [this](/localization/latest/#how-to-generate-the-localization-file-for-another-language) for instructions.

4. After completing the above steps, please convert the service folders into a zip file and upload them to the application.

   ![Localization-zip-folder](/static/assets/multi-tenancy/images/localization-zip-folder.png)

## Delete language

To remove a language, `Select` the language and `Click` the `Remove` option. You have the option to remove single or multiple languages.

   ![Remove-localization](/static/assets/multi-tenancy/images/remove-localization.png)

> **NOTE:** You cannot delete the current application language. If you want to remove a language, change the application language to `English` and then delete it.

## Set localization in application

To set localization in the application, by default, the application will be in English. You can change the language at the global, site, or user level.

Please refer to [this](/localization/latest/#where-to-change-the-localization-in-the-application) for instructions on setting localization.

## Possible errors cases and their solution:

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please ensure to upload the valid zip file (zip).  
| Invalid File Error | Please refer [here](#localization-file-structure) to form the localization file structure.