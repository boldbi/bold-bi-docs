---
layout: post
title: Accounts configuration – Embedded BI | Bold BI Documentation
description: Learn how to activate User Management Server user accounts. There are two modes of account activation available - automatic and user email.
platform: bold-bi
documentation: ug
---

# Accounts configuration in User Management Server

This section explains the configuration to activate user accounts and user email in the User Management Server.

## Account activation modes

There are two account activation modes available:

### Automatic activation

When user activation is set to `Automatic Activation` mode, user accounts will be activated automatically while adding users in the User Management Server.

### Email activation

When user activation is set to `Email Activation` mode, user accounts are not activated while adding users in User Management Server, and an account activation email with an activation link is sent to the email address to activate the user account.

The account will be in inactive status until the user activates the account from the activation email.

> **NOTE:** By default, the setting will be `Automatic`.

![Accounts Settings](/static/assets/multi-tenancy/images/account-automatic-settings.png)

## User email

This setting controls whether an email address is required for creating new users or not.

### Email required

When the user email setting is set to `Required` mode, an email address is mandatory for adding users in User Management Server.

> **NOTE:** When the account activation preference is email, an email address is mandatory for activating the account.

### Email not required

When user email setting is set to `Not required` mode, an email address is not mandatory for adding users in the User Management Server.

> **NOTE:** By default, the setting will be `Required`.

![Email Required Settings](/static/assets/multi-tenancy/images/email-required.png)