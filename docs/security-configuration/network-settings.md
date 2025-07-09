---
layout: post
title: How to configure IP Whitelisting in Embedded BI| Bold BI Docs
description: Learn about how to enable IP Whitelisting and allowing only specified IP addresses to access Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# IP Whitelisting configuration

IP whitelisting enables administrators to enforce IP-based access restrictions for the Bold BI application. It provides support to configure the required IP address from which the client can access the application. The IP whitelisting feature restricts access to the Bold BI application to specific IP addresses, improving application security by ensuring that only trusted and authorized users can access the application.

> **Warning:** Please ensure that once this feature is enabled, the current user's IP address is added before saving any changes.

When IP Whitelisting is enabled in Bold BI, it will allow site access only to the listed IP addresses and restrict access to the pages for IP addresses that are not whitelisted.

By default, IP whitelisting is disabled, and no restrictions are applied for rendering pages in the Bold BI application. 

![Content Security Policy settings for font](/static/assets/security-configuration/images/ip-whitelisting-options.png#width=55%)

## Enabling IP Whitelisting

`Enabling IP whitelisting` action will initiate the restriction of application access to only those IP addresses that are explicitly authorized.

![Content Security Policy settings for font](/static/assets/security-configuration/images/enabled-ip-whitelisting.png)


## Add IP Address

To add an IP address, click the `Add IP Address` button, which will open the `Add Rule` dialog. In the `Add Rule` dialog, specify the details of the rule.

![Content Security Policy settings for font](/static/assets/security-configuration/images/add-rule-button.png)

![Content Security Policy settings for font](/static/assets/security-configuration/images/add-rule-dialog.png)

`Rule Name`: Specify the valid rule name.

`IP Type`: Select the IP type either IPv4 or IPv6.

`IP Address`: Specify the valid IP Address based on the IP type you choose.

`Add Rule`: Once you have provided all required details, please click the `Add Rule` button. Once the rule is added, the values will be displayed in the grid.

![Content Security Policy settings for font](/static/assets/security-configuration/images/add-rule.png)

![Content Security Policy settings for font](/static/assets/security-configuration/images/added-rule-grid.png)

> **Note:** If current user's IP address is not listed in the grid, add the current user's IP address to the rule. The current user's IP address will be displayed on the message banner.

![Content Security Policy settings for font](/static/assets/security-configuration/images/user-ipaddress-info.png)

`Save`: After entering all valid requirements for IP whitelisting, click `Save` to apply these configurations to the application.

![Content Security Policy settings for font](/static/assets/security-configuration/images/save-changes-ip.png)

> **Important:** When you activate this feature, please note that IP whitelisting will not take effect immediately. To ensure uninterrupted access, be sure to specify the IP addresses that need to be whitelisted. Make sure that changes have been saved in order to apply these configurations effectively. This proactive step helps prevent unintentional access restrictions and ensures smooth implementation of your security settings.

## Edit Rule

To modify an existing rule, click `Edit` icon. On clicking edit icon in the grid `Edit Rules` dialog will open. 

![Content Security Policy settings for font](/static/assets/security-configuration/images/ipwhitelisting-edit.png)

In the `Edit Rule` dialog, update the rule details as needed. Once edited the rule need to `save` the changes.

![Content Security Policy settings for font](/static/assets/security-configuration/images/edit-rule-dialog.png)

## Delete Rule

To remove a rule from whitelisting. click `delete` icon. Once deleted the rule, need to `save` the changes.

> **Important:** If the user deletes the current user's IP address, the changes will not be saved when attempting to save the settings.

![Content Security Policy settings for font](/static/assets/security-configuration/images/ip-whitelisting-delete.png)

## Access Denied

When an unauthorized IP address attempts to access the Bold BI application, it will display an `Access Denied` page. This page serves as a notification that the IP address attempting to access is not authorized to view or interact with the application.

![Content Security Policy settings for font](/static/assets/security-configuration/images/access-denied-ipwhitelisting.png)