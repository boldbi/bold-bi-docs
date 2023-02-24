---
layout: post
title: User Profile Information – Bold ID | Bold BI Documentation
description: Learn about editing the user's profile details including picture, updating the language preferences for the user account, and changing the password in Bold BI.
platform: bold-bi
documentation: ug
---

# User Profile

This section will explain how to edit profile information, upload profile pictures, change passwords, enable 2FA, and update user preferences in your user profile.

## My profile

In this section, you can view the profile information.

### Edit Profile
To edit your profile, click `Edit Profile`, give your details, and `save.`
    ![My Profile tab](/static/assets/embedded/images/save-profile.png)

### Upload Profile Picture
To update your profile picture, click the pencil icon on your profile, upload the image, and click `save.`
    ![My Profile tab](/static/assets/embedded/images/save-profile-pic.png)

To delete your profile picture, click the delete icon on your profile and proceed with `yes.`
    ![My Profile tab](/static/assets/embedded/images/delete-profile-pic-dialog.png)

## Account Preference

In account preference, set the language preference for your profile.
    ![My Profile tab](/static/assets/embedded/images/account-preference.png)

## Security

In the Security section, update your password and enable 2FA for your account.

### Change Password

Go to the Change Password tab under the Security section and update the password.
    ![Change Password](/static/assets/embedded/images/change-password.png)

### Two Factor Authentication

Please refer to this  [link](/embedded-bi/multi-tenancy/two-factor-authentication/#two-factor-authentication) to learn about the 2FA implementation in Bold BI.

#### Enable Two Factor Authentication

1. Go to the Two-Factor Authentication tab under the security section.

2. Click on Enable Two-Factor Authentication.
    ![Two Factor Authentication tab](/static/assets/embedded/images/2fa-tab.png)

3. After that, using the authenticator application, scan the QR code or enter the key shown under the QR code, and the user account will be added to the authenticator application.
    ![Two Factor Authentication enable](/static/assets/embedded/images/2fa-enable.png)

4. Enter the verification code shown in the authenticator application and click **Activate**.
    ![Two Factor Authentication configuration code](/static/assets/embedded/images/2fa-configuration-code.png)

5. After enabling, the 10 recovery codes are generated. Copy the recovery codes and store them in a safe place.
    ![Two Factor Authentication Recovery code](/static/assets/embedded/images/2fa-recovery-code.png)

> **NOTE:** Each recovery code can be used at one time. Regenerate recovery codes using the `Regenerate Recovery Code` option from your profile.

#### Disable Two Factor Authentication

1. To disable 2FA, click on Remove Two-Factor Authentication.
    ![Two Factor Authentication remove](/static/assets/embedded/images/2fa-remove-with-code.png)

2. Enter the verification code shown in the authenticator application for the account and click **yes**.
    ![Two Factor Authentication remove dialog](/static/assets/embedded/images/2fa-remove-with-code-dialogbox.png)