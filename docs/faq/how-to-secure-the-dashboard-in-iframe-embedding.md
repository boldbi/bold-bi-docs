---
layout: post
title:  How to secure the Dashboard in Iframe Embedding | Bold BI Docs
description: Learn how to secure or restrict the dashboard in Iframe embedding based on domains and IP addresses configuration in Bold BI application.
platform: bold-bi
documentation: ug
---

# How to secure the dashboard in iframe embedding
In Bold BI, there is support for a secure dashboard in iframe embedding. This will help to allow the dashboard for particular users who want to view the dashboard at the embedded level.

This part will explain how to restrict the dashboard based on domain and IP address and allow embedding a dashboard for a particular user.

## Steps to enable the security for embedding the dashboard
1. In Bold BI Server, click the context menu of the respective dashboard and choose the `Security` option.

    ![ClickSecurity](/static/assets/faq/images/dashboard_security_option.png)

2. In the Security dialog, you could see the Apply these settings dropdown, select your security restriction.

    ![RestrictionMethod](/static/assets/faq/images/security_settings_dropdown.png)


3. The security restriction for the dashboard can be applied in the following three ways. To learn more about these, please refer to this [link](/managing-resources/manage-dashboards/advanced-dashboard-security/#when-to-apply-these-settings).

    * `Always` - This would restrict the users from accessing the specific dashboard in private, public, and embedding ways.
    * `When the dashboard is public and accessed anonymously` - This would restrict users from accessing the specific public dashboard anonymously.
    * `When the dashboard is embedded` - This would restrict the users from accessing the specific dashboard in an embedding way.

4. For applying restrictions in embedding, you must select the `When the dashboard is embedded` option as follows.

    ![AddDomain](/static/assets/faq/images/security_settings_selection.png)


5. Here, specify the allowed `domains` accessed or embedded from known embed application domains.

    ![AddDomain](/static/assets/faq/images/secured_domains.png)


6. Here, specify the `device IP addresses` of the users allowed to embed the dashboard.

    ![AddIP](/static/assets/faq/images/secured_ipaddress.png)

7. Once you have added the Security settings for the dashboard, get the embed code from the desired dashboard, which you want to embed in your website. Get more details from the [link](/embedding-options/iframe-embedding/embedding-a-dashboard/#steps-to-embed-dashboard-in-view-mode-using-url) to know how to `Get Embed Code` from the dashboard. Then, embed the dashboard in your application.

8. The dashboard can be embedded only in `Domains` specified in the `Accept embedding requests from these websites` and the allowed `IP address` specified in `Allow dashboard access from these IP addresses`.

    ![AllowedDomainAndIP](/static/assets/faq/images/allowed_domains_ipaddresses.png)

9. The embedded dashboard will show an error or blocked warning message if other than specified Domains and IP Addresses are in the security settings.

    While accessing from unknown domains:

    ![BlockedDomain](/static/assets/faq/images/restricted_domain_page.png)

    While accessing from unknown IP Addresses:

    ![BlockedDomain](/static/assets/faq/images/restricted_ip_address.png)

    >**Note:**  The public dashboard will also get blocked for restricted domains and IP addresses in iframe embedding.