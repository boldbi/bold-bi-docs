---
layout: post
title: Account Settings – Embedded BI | Bold BI Documentation
description: Learn how to activate user accounts in the Bold BI server. There are two account activation modes available - Automatic and Email.
platform: bold-bi
documentation: ug
---

# Accounts Settings

This section explains the configuration needed to activate user accounts and user email in the Bold BI Server.

## Account activation modes

There are two account activation modes available:

### Automatic activation

When user activation is set to `Automatic Activation` mode, user accounts will be activated automatically when adding users in the Bold BI Server. However, account activation emails will not be sent.

### Email activation

When user activation is set to `Email Activation` mode, user accounts will not be activated when adding users in the Bold BI Server. Instead, an account activation email will be sent to the email address with an activation link to activate the user account. 

The account will remain in inactive status until the user activates the account from the activation email.

> **NOTE:** By default, the setting will be `Automatic`.

![Accounts Settings](/static/assets/site-administration/images/account-settings.png#width=60%)

## User Email

This setting controls whether an email address is required for creating new users or not.

### Email required

When the user email setting is set to `Required` mode, an email address is mandatory for adding users in the Bold BI server.

> **NOTE:** If the account activation preference is email, an email address is mandatory for activating the account.

### Email not required

When the user email setting is set to `Not required` mode, an email address is not mandatory for adding users in the Bold BI server.

> **NOTE:** By default, the setting will be `Required`. This setting option is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

![Email Settings](/static/assets/site-administration/images/email-required-settings.png#width=60%)

## Default Group

This setting ensures that users are automatically added to a selected group by default when they are added to the site. It simplifies user management by streamlining group assignments, ensuring consistent access permissions, and reducing manual configuration.

![Default Group](/static/assets/site-administration/images/default-group-settings.png#width=60%)

> **NOTE:** If you need to disable the settings select `None` for the dropdown and save the settings.