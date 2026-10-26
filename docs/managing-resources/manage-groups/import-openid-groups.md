---
layout: post
title: Import Groups from OpenID Connect – Embedded BI | Bold BI
description: Learn how to import a single group or bulk groups from an OpenID provider and update the authentication settings of OpenID Connect in Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Import Group for OpenID Connect

This section explains how to import a single group or bulk groups from an OpenID provider and update the authentication settings of OpenID Connect in Bold BI.

Select the `Import from OpenID` option from the `New Group` drop-down list on the Groups homepage.

![Import OpenId groups](/static/assets/managing-resources/manage-groups/images/import-OpenId-icon.png)

> **NOTE:** Before importing an OpenID group, you need to configure the Group Import settings in the authentication settings page. Refer to this link on [how to configure OpenID Authorization Settings](/security-configuration/single-sign-on/openid-support/). This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Import Groups

To import the OpenID Connect groups, you can use both the Dashboard Server and User Management Server authentication providers. Choose the provider from the drop-down list at the top-left corner.

![Select Provider](/static/assets/managing-resources/manage-groups/images/Openid-select-provider.png#width=65%)

Choose the groups from the list and click `Import groups` at the top-right corner.

![Import OpenId groups](/static/assets/managing-resources/manage-groups/images/Openid-import-enable.png)

Bold BI imports the chosen groups, and a confirmation message is displayed as shown in the following figure.

![Success message after imported the OpenId groups](/static/assets/managing-resources/manage-groups/images/Openid-import-success.png#width=70%)

The success message box explains the group's status, which was imported into Bold BI. Once you click `OK` or the `Close Icon`, the list is reloaded and the imported groups disappear.

## To Update Authentication Settings

If you want to update the OpenID settings, select the `provider` from the drop-down list and click `Modify`. It redirects you to the respective authentication settings page.

![OpenId Authenticate setting page](/static/assets/managing-resources/manage-groups/images/Openid-group-modify.png#width=65%)