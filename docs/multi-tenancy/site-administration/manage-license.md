---
layout: post
title: Managing Licenses – On-Premises & Embedded | Bold BI Docs
description: Learn how to update Bold BI license yourself using the Bold account linked with your subscription in Bold BI application.
platform: bold-bi
documentation: ug
---

# Manage license in Bold BI

This topic explains how to update the license manually in `Bold BI Embedded`.

Open your UMS application URL and log in with the Site Administrator account.

Navigate to the `Settings` -> `Manage License`.

Please select your preferred method for updating the license.
  1. [Update license from Online](#update-license-from-online)
  
  2. [Update license from License file](#update-license-from-license-file)

## Update license from Online

In the Manage License page, click on `Refresh License`.
   
   ![License Update Settings](/static/assets/multi-tenancy/images/manage-license-page.png#max-width=95%)

From the login pop-up, please log in with your Bold ID account that is linked to your Bold BI subscription.
   
   ![License Update Login Popup](/static/assets/multi-tenancy/images/update-license-login-popup.png#max-width=95%)

Once you have successfully logged in, the license will be updated in the application.

## Update license from License file

To update the license from a license file, you can use the offline unlock key to activate the account. Please download your offline unlock key [here](https://www.boldbi.com/account/downloads/embedded).

Click on the `Upload` option to upload your license file.

![Unlock key option](/static/assets/multi-tenancy/images/license-upload-option.png#max-width=95%)

Select your license file using the option below.

![Select Unlcok key file ](/static/assets/multi-tenancy/images/license-upload-dialog.png#max-width=95%)

Once the unlock key is uploaded, click on the **Update License** button to update the license.

![Upload License](/static/assets/multi-tenancy/images/upload-license.png#max-width=95%)

### Possible errors cases and their solution:

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please ensure to upload the valid unlock key file (lic) downloaded from [here](https://www.boldbi.com/account/downloads/embedded).    
|  Unlock Key Expired    | Your unlock key date was expired. Please download the new unlock key file from [here](https://www.boldbi.com/account/downloads/embedded).   |

If you are facing any issues, please [contact us](https://www.boldbi.com/support) for assistance.

### License Status Warning Icon

A warning icon appears in the top-right corner of the application to highlight license-related issues. This allows site administrators to quickly identify and address any license problems. The icon is consistently displayed across key sections, including Manage License, Dashboard, Designer, and UMS-level pages.

![License warning icon](/static/assets/multi-tenancy/images/license-warning-icon.png#max-width=95%)

![License warning icon in dashboard](/static/assets/multi-tenancy/images/license-warning-icon-dashboard.png#max-width=95%)

![License warning icon in designer](/static/assets/multi-tenancy/images/license-warning-icon-designer.png#max-width=95%)

### When the Warning Icon Appears

The warning icon is displayed in the following cases:

- When the **license has expired**.
- When the **trial period has ended**.

### License warning icon behavior

- Clicking the warning icon will display a popup with the below message. The **“here”** link redirects the user to the **Manage License** page.

- This allows users to take action such as renewing or activating their license.

![License warning icon popup](/static/assets/multi-tenancy/images/license-warning-icon-popup.png#max-width=95%)