---
layout: post
title: Restricted Access to Dashboard – Cloud BI | Bold BI Learning
description: Learn how to enable restricted access to dashboard in Bold BI Cloud through restricting websites, IP addresses and applications.
platform: bold-bi
documentation: ug
---

# Advanced Dashboard Security

Dashboard security options control which websites, IP addresses, and applications can access or embed the dashboard. It is used to allow dashboards only for particular users who want to view it.

This section explains how to restrict dashboard access based on IP address and allow to embed the dashboard in a particular domain.

### Update security settings

1.  Click the Dashboards context menu and select `Security` to update security settings.

    ![Get Security Option](/static/assets/cloud/managing-resources/manage-dashboards/images/get-security-option.png)

2. Here, you can specify the domains you want to allow the dashboard to be embedded and the device IP address/range of IP 
addresses you want to allow the dashboard to view.

    ![Get Security Dialog](/static/assets/cloud/managing-resources/manage-dashboards/images/get-security-dialog.png)

3. Specify the device IP address/range of IP addresses you want to allow the dashboard to access.

4. Specify the domains you want to allow the dashboards to be embedded.

    ![Get Restricted Content](/static/assets/cloud/managing-resources/manage-dashboards/images/get-restricted-content.png)

## When to apply these settings

The restriction can be applied in three ways for the dashboards.

![Get Settings Dropdown](/static/assets/cloud/managing-resources/manage-dashboards/images/get-settings-dropdown.png)

### Always

The restriction will be applied to Private, Public, and Embed dashboards.

For example, specify the IP address that needs to be allowed in `Allow dashboard access from these IP addresses` field and choose `always` in the dropdown.

In this case, the dashboard can be viewed based on the IP address, which is specified in the `Allow dashboard access from these IP addresses`.
   
* The dashboard can be viewed for the allowed IP addresses.
* The access denied message will be shown for the request from the IP address, which is not mentioned in the `Allow dashboard access from these IP addresses`.

### When the dashboard is public and accessed anonymously

The restriction will be applied only to the public dashboards accessed anonymously (without login).

For example, specify the IP address that needs to be allowed in `Allow dashboard access from these IP addresses` field and choose `When the dashboard is public and accessed anonymously` in the dropdown.
    
In this case, the public dashboard which is accessed anonymously can be viewed based on the IP address which is specified in the `Allow dashboard access from these IP addresses` and it won't affect private dashboards and viewing the public dashboards with login.
   
* The public dashboard which is accessed anonymously can be viewed from the allowed IP addresses.
* The access denied message will be shown for the request from the IP address which is not mentioned in the `Allow dashboard access from these IP addresses`.

### When the dashboard is embedded

The restriction will be applied only to the embed dashboards. 

For example, specify the domain which the dashboard have to be embed in `Accept embedding requests from these websites` field and choose `When the dashboard is embedded` in the dropdown.

In this case, the dashboard can be embed in the domains which is specified in the `Accept embedding requests from these websites`.

* The dashboards embedded in the allowed domain can be viewed.
* The viewing of embed dashboards will be blocked by the browser for the domains which is not mentioned in the `Accept embedding requests from these websites`.

Learn more about the embedding the dashboard with advance dashboard security [here](/cloud-bi/iframe-based/embed-dashboards-with-advanced-security/).  

When the dashboard is viewed from the allowed IP address,

![dashboard-rendering-page](/static/assets/cloud/managing-resources/manage-dashboards/images/dashboard-rendering.png)

When the dashboard is viewed from the restricted IP address,

![access-denied-page](/static/assets/cloud/managing-resources/manage-dashboards/images/restriction-access-denied.png)