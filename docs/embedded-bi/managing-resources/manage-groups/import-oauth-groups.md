---
layout: post
title: Import Groups from OAuth Provider – Embedded BI | Bold BI
description: Learn how to import single group or bulk groups from OAuth provider and update the authentication settings of OAuth 2.0 in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Import Group for OAuth 2.0

This section explains how to import single group or bulk groups from OAuth provider and update the authentication settings of OAuth 2.0 in Bold BI.

Select the `Import from OAuth` option from `New Group` drop-down list on Groups homepage.

![Import Oauth groups](/static/assets/embedded/managing-resources/manage-groups/images/import-Oauth-icon.png)

> **NOTE:**  Before you import an OAuth group, first you need to configure the `Group Import settings` in authentication settings page. Refer this link [how to configure OAuth Authorization Settings](/embedded-bi/site-administration/sso/oauth-2.0-support/).

## Import groups

To import the OAuth 2.0 groups, you can use both Dashboard Server and User Management Servers authentication provider. Choose the provider from the drop-down list at the top left corner.

![Select Provider](/static/assets/embedded/managing-resources/manage-groups/images/Oauth-select-provider.png)

Choose the groups from the list and click the `Import groups` at the top right corner.

![Import Oauth groups](/static/assets/embedded/managing-resources/manage-groups/images/Oauth-import-enable.png)

Bold BI will import the chosen groups and a confirmation message will be displayed as shown in the following figure.

![Success message after imported the Oauth groups](/static/assets/embedded/managing-resources/manage-groups/images/Oauth-import-success.png)

The success message box explains the groups status, which were imported into the Bold BI. Once you click `OK` or `Close Icon`, list will be reloaded and imported groups will disappear.

## To update authentication settings

If you want to update the OAuth settings, select the `Provider` from drop-down list and click the `Modify`. It will redirect to respective authentication settings page.

![Oauth Authenticate setting page](/static/assets/embedded/managing-resources/manage-groups/images/Oauth-group-modify.png)