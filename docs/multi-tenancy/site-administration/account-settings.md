---
layout: post
title: Accounts Configuration – Embedded BI | Bold BI Documentation
description: "Learn how to set up account activation for users in the Bold BI User Management Server, using either automatic activation or activation through user email."
platform: bold-bi
documentation: ug
---

# Accounts Configuration in User Management Server

This section explains the configuration needed to activate user accounts and user emails in the User Management Server.

## Account Activation Modes

There are two account activation modes available:

### Automatic Activation

When user activation is set to `Automatic Activation` mode, user accounts will be activated automatically when adding users in the User Management Server.

### Email Activation

When user activation is set to `Email Activation` mode, user accounts are not activated when adding users in the User Management Server. Instead, an account activation email with an activation link is sent to the email address to activate the user account.

The account will remain inactive until the user activates it from the activation email.

> **NOTE:** The default setting is `Automatic`.

![Accounts Settings](/static/assets/multi-tenancy/images/account-automatic-settings.png)

## User Email

This setting controls whether an email address is required for creating new users.

### Email Required

When the user email setting is set to `Required` mode, an email address is mandatory for adding users in the User Management Server.

> **NOTE:** When the account activation preference is email, an email address is mandatory for activating the account.

### Email Not Required

When the user email setting is set to `Not required` mode, an email address is not mandatory for adding users in the User Management Server.

> **NOTE:** The default setting is `Required`.

![Email Required Settings](/static/assets/multi-tenancy/images/email-required.png)

## System User Authentication

Enable the System User option to streamline authentication and enhance accessibility. This feature allows anonymous users to view embedded dashboards and access REST APIs while generating global access tokens for secure and efficient system-wide authentication.

![System user](/static/assets/multi-tenancy/images/system-user.png)