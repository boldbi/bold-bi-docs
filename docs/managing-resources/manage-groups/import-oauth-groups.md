---
layout: post
title: Import Groups from OAuth Provider – Embedded BI | Bold BI
description: Learn how to import a single group or bulk groups from an OAuth provider and update the authentication settings of OAuth 2.0 in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Import Group for OAuth 2.0

This section explains how to import a single group or bulk groups from an OAuth provider and update the authentication settings of OAuth 2.0 in Bold BI.

Select the `Import from OAuth` option from the `New Group` drop-down list on the Groups homepage.

![Import Oauth groups](/static/assets/managing-resources/manage-groups/images/import-Oauth-icon.png)

> **NOTE:** Before importing an OAuth group, you need to configure the `Group Import settings` in the authentication settings page. Refer to this link on [how to configure OAuth Authorization Settings](/security-configuration/single-sign-on/oauth-2.0-support/). This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Import Groups

To import the OAuth 2.0 groups, you can use both the Dashboard Server and User Management Server authentication providers. Choose the provider from the drop-down list at the top-left corner.

![Select Provider](/static/assets/managing-resources/manage-groups/images/Oauth-select-provider.png#width=65%)

Select the groups from the list and click on `Import groups` at the top-right corner.

![Import Oauth groups](/static/assets/managing-resources/manage-groups/images/Oauth-import-enable.png)

Bold BI imports the selected groups, and a confirmation message is displayed as shown in the following figure.

![Success message after imported the Oauth groups](/static/assets/managing-resources/manage-groups/images/Oauth-import-success.png#width=70%)

The success message box explains the status of the imported groups in Bold BI. Once you click on `OK` or the `Close Icon`, the list is reloaded and the imported groups disappear.

## To Update Authentication Settings

If you wish to update the OAuth settings, select the `Provider` from the drop-down list and click on `Modify`. This redirects you to the respective authentication settings page.

![Oauth Authenticate setting page](/static/assets/managing-resources/manage-groups/images/Oauth-group-modify.png#width=65%)