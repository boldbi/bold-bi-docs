---
layout: post
title:  How to secure the Dashboard in Iframe Embedding | Bold BI Docs
description: Learn how to secure or restrict the dashboard in Iframe embedding based on domains and IP addresses configuration in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to secure the dashboard in iframe embedding
In Bold BI, there is support for securely embedding a dashboard in an iframe. This feature allows specific users to view the dashboard at the embedded level.

This section will explain how to restrict the dashboard based on domain and IP address, and allow embedding a dashboard for a specific user.

## Steps to enable the security for embedding the dashboard
1. In Bold BI Server, click on the context menu of the respective dashboard and select the `Security` option.

    ![ClickSecurity](/static/assets/faq/images/dashboard_security_option.png)

2. In the Security dialog, you will see the Apply these settings dropdown. Please select your security restriction.

    ![RestrictionMethod](/static/assets/faq/images/security_settings_dropdown.png)


3. The security restriction for the dashboard can be applied in following three ways. To learn more about these, please refer to this [link](/managing-resources/manage-dashboards/advanced-dashboard-security/#when-to-apply-these-settings).

    * `Always` - This would restrict users from accessing the specific dashboard privately, publicly, and through embedding.
    * `When the dashboard is public and accessed anonymously` - This would restrict users from accessing the specific public dashboard anonymously.
    * `When the dashboard is embedded` - This would restrict users from accessing the specific dashboard in an embedded manner.

4. To apply restrictions in embedding, you must select the `When the dashboard is embedded` option as follows.

    ![AddDomain](/static/assets/faq/images/security_settings_selection.png)


5. Here, specify the allowed `domains` that can be accessed or embedded from known embedded application domains.

    ![AddDomain](/static/assets/faq/images/secured_domains.png)


6. Here, please specify the `device IP addresses` of the users who are allowed to embed the dashboard.

    ![AddIP](/static/assets/faq/images/secured_ipaddress.png)

7. Once you have added the Security settings for the dashboard, get the embed code from the desired dashboard, which you want to embed in your website. Get more details from the [link](/embedding-options/iframe-embedding/embedding-a-dashboard/#steps-to-embed-dashboard-in-view-mode-using-url) to know how to `Get Embed Code` from the dashboard. Then, embed the dashboard in your application.

8. The dashboard can only be embedded in `Domains` specified in the `Accept embedding requests from these websites` section and in the allowed `IP addresses` specified in the `Allow dashboard access from these IP addresses` section.

    ![AllowedDomainAndIP](/static/assets/faq/images/allowed_domains_ipaddresses.png)

9. The embedded dashboard will display an error or blocked warning message if domains and IP addresses other than those specified are found in the security settings.

    While accessing from unknown domains:

    ![BlockedDomain](/static/assets/faq/images/restricted_domain_page.png)

    While accessing from unknown IP Addresses:

    ![BlockedDomain](/static/assets/faq/images/restricted_ip_address.png)

    >**Note:**  The public dashboard will also be blocked for restricted domains and IP addresses when embedded in an iframe.