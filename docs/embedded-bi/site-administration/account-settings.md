---
layout: post
title: Account Settings – Embedded BI | Bold BI Documentation
description: Learn how to activate user accounts in the Bold BI server. There are two account activation modes available - Automatic and Email.
platform: bold-bi
documentation: ug
---

# Accounts Settings

This section explains the configuration to activate user accounts and user email in the Bold BI Server.

## Account activation modes

There are two account activation modes available:

### Automatic activation

When user activation is set to `Automatic Activation` mode, user accounts will be activated automatically while adding users in the Bold BI Server. But, account activation mails will not be sent.

### Email activation

When user activation set to `Email Activation` mode, user accounts will not be activated while adding users in the Bold BI Server and an account activation email will be sent to the email address with activation link to activate the user account.

The account will be in inactive status until the user activates the account from the activation email.

> **NOTE:** By default, the setting will be `Automatic`.

![Accounts Settings](/static/assets/embedded/site-administration/images/account-settings.png)

## User Email

This setting controls whether an email address is required for creating new users or not.

### Email required

When user email setting is set to `Required` mode, an email address is mandatory for adding users in the Bold BI server.

> **NOTE:** When the account activation preference is email, an email address is mandatory for activating the account.

### Email not required

When user email setting is set to `Not required` mode, an email address is not mandatory for adding users in the Bold BI server.

> **NOTE:** By default, the setting will be `Required`.

![Email Settings](/static/assets/embedded/site-administration/images/email-required-settings.png)