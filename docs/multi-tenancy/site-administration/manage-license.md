---
layout: post
title: Managing Licenses – On-Premises & Embedded | Bold BI Docs
description: Learn how to update Bold BI license yourself using the Bold account linked with your subscription in Bold BI application.
platform: bold-bi
documentation: ug
---

# Manage license in Bold BI

This topic explain how to update the license manually in `Bold BI Embedded.` 

Open your UMS application URL and login with the Site Administrator account.

Navigate to the `Settings` -> `Manage License`.

Please choose your preferred mode to update the license.
  1. [Update license from Online](#update-license-from-online)
  
  2. [Update license from License file](#update-license-from-license-file)

## Update license from Online

In the Manage license page, click `Check License`.
   
   ![License Update Settings](/bold-bi-docs/static/assets/embedded/multi-tenancy/images/manage-license-page.png#max-width=95%)

From the login pop-up, please login with your Bold ID account linked with your Bold BI subscription.
   
   ![License Update Login Popup](/bold-bi-docs/static/assets/embedded/multi-tenancy/images/update-license-login-popup.png#max-width=95%)

Once, you logged in successfully, the license will be updated in the application.

## Update license from License file

If you want to update the license in firewall restricted environments, you can use the offline unlock key to activate the account. Please download your offline unlock key [here](https://www.boldbi.com/account/downloads/embedded).

Click on `Upload` option to upload your license file.

![Unlock key option](/bold-bi-docs/static/assets/embedded/multi-tenancy/images/license-upload-option.png#max-width=95%)

Select your license file using the below option.

![Select Unlcok key file ](/bold-bi-docs/static/assets/embedded/multi-tenancy/images/license-upload-dialog.png#max-width=95%)

Once the unlock key is uploaded, click the **Update License** button for updating the license.

![Upload License](/bold-bi-docs/static/assets/embedded/multi-tenancy/images/upload-license.png#max-width=95%)

### Possible errors cases and their solution:

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please ensure to upload the valid unlock key file (lic) downloaded from [here](https://www.boldbi.com/account/downloads/embedded).    
|  Unlock Key Expired    | Your unlock key date was expired. Please download the new unlock key file from [here](https://www.boldbi.com/account/downloads/embedded).   |

If you are facing any issues, please [contact us](https://www.boldbi.com/support) to help you.