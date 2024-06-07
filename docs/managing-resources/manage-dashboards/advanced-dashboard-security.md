---
layout: post
title: Restricted Access to Dashboard – Embedded BI | Bold BI Docs
description: Learn how to enable restricted access to dashboard in Bold BI Embedded through restricting websites, IP addresses and applications.
canonical: "/managing-resources/manage-dashboards/advanced-dashboard-security/"
platform: bold-bi
documentation: ug
---

# Advanced Dashboard Security

Dashboard security options control which websites, IP addresses, and applications can access or embed the dashboard. They are used to allow dashboards only for particular users who want to view it.

This section explains how to restrict dashboard access based on IP address and allow the dashboard to be embedded in a particular domain.

### Update security settings

1.  Click the Dashboards context menu and select `Security` to update security settings.

    ![Get Security Option](/static/assets/managing-resources/manage-dashboards/images/get-security-option.png)

2. Here, you can specify the domains you want to allow the dashboard to be embedded in and the device IP address/range of IP addresses you want to allow the dashboard to view.

   ![Get Security Dialog](/static/assets/managing-resources/manage-dashboards/images/get-security-dialog.png#width=55%)

3. Specify the device IP address/range of IP addresses you want to allow the dashboard to access.

4. Specify the domains you want to allow the dashboards to be embedded in.

    ![Get Restricted Content](/static/assets/managing-resources/manage-dashboards/images/get-restricted-content.png#width=55%)

## When to apply these settings

The restrictions can be applied in three ways for the dashboards.

![Get Settings Dropdown](/static/assets/managing-resources/manage-dashboards/images/get-settings-dropdown.png#width=55%)

### Always

The restriction will be applied to Private, Public, and Embed dashboards.

For example, specify the IP address that needs to be allowed in the `Allow dashboard access from these IP addresses` field and choose `always` from the dropdown.

In this case, the dashboard can be viewed based on the specified IP address in the `Allow dashboard access from these IP addresses`.
   
* The dashboard can be viewed for the allowed IP addresses.
* An access denied message will be shown for requests from an IP address not mentioned in the `Allow dashboard access from these IP addresses`.

### When the dashboard is public and accessed anonymously

The restriction will only be applied to the public dashboards accessed anonymously (without login).

For example, specify the IP address that needs to be allowed in the `Allow dashboard access from these IP addresses` field and choose `When the dashboard is public and accessed anonymously` from the dropdown.
    
In this case, the public dashboard accessed anonymously can be viewed based on the specified IP address in the `Allow dashboard access from these IP addresses` without affecting private dashboards and viewing public dashboards with login.
   
* The public dashboard accessed anonymously can be viewed from the allowed IP addresses.
* An access denied message will be shown for requests from an IP address not mentioned in the `Allow dashboard access from these IP addresses`.

### When the dashboard is embedded

The restriction will only be applied to the embedded dashboards.

For example, specify the domain in the `Accept embedding requests from these websites` field where the dashboard should be embedded and choose `When the dashboard is embedded` from the dropdown.

In this case, the dashboard can be embedded in the specified domains in the `Accept embedding requests from these websites`.

* The dashboards embedded in the allowed domain can be viewed.
* The viewing of embedded dashboards will be blocked by the browser for domains not mentioned in the `Accept embedding requests from these websites`.

Learn more about embedding the dashboard with advanced security measures for [Secured Embedding](/embedding-options/iframe-embedding/secured-embedding/).

When the dashboard is viewed from the allowed IP address,

![dashboard-rendering-page](/static/assets/managing-resources/manage-dashboards/images/dashboard-rendering.png)

When the dashboard is viewed from the restricted IP address,

![access-denied-page](/static/assets/managing-resources/manage-dashboards/images/restriction-access-denied.png)