---
layout: post
title:  Configure Allow Known Domain List & Avoid SSRF | Bold BI Docs
description: Learn about how to configure the known domain list in Bold BI application to avoid Server-side request forgery (SSRF) attacks.
platform: bold-bi
documentation: ug
---

# Block Sending Data to Unknown Domain

The callback URL will be present throughout a certain workflow within the application, allowing the operation status and other data to be delivered back to the program via that URL (e.g., publishing dashboard from one server to another server). What if a scammer changes the URL and manages to regain access to the encrypted data? This is a type of Server-side request forgery (SSRF) attack.

A server-side request forgery (SSRF) attack is an attack that misuses server functionality to access or modify resources. By modifying the request URL, the attacker induces a server-side application to make requests to an unintended destination.

> **NOTE:** Domain Configuration support is available in Bold BI Embedded Analytics, but it is not available in Cloud Analytics Server.

## Avoid SSRF attack in Bold BI

This attack can be avoided by configuring known domains in Bold BI using a known domain JSON file.

### Steps to configure the Known Domain's

1. Please go to the UMS Administration page in Bold BI and click on the `Configuration` tab. You can configure a list of known domains in a JSON file here.

    ![UMS Settings](/static/assets/security-configuration/images/ums-settings.png#width=40%)

2. Please select the `known_domains.json` file to configure the list of allowed and denied domains on this page.

    ![Known Domain Json](/static/assets/security-configuration/images/known-domain-json.png#width=40%)

3. If you want to configure known domains in Bold BI, you must set the `Enabled` node to `true`.

    ![Known Domain Json Enable](/static/assets/security-configuration/images/known-domain-json-enable.png#width=40%)

4. You can add a list of denied domains to the `Deny` node. If you want to allow or deny all external domains, you can use the wildcard `*` in known domain JSON nodes. You can also use a wildcard with the subdomain, such as `(*.boldbi.com, *.*.boldbi.com)`.

    ![Denied Domains](/static/assets/security-configuration/images/denied-domains.png#width=40%)

5. You can add a list of allowed domains to the `Allow` node. You can add more than one domain by using a comma.

    ![Allowed Domains](/static/assets/security-configuration/images/allowed-domains.png#width=40%)

> **Important:**  By default, internal Bold BI domains are allowed, meaning domains from Bold BI sites.

6. After configuring, click the `Save` button to update the Known Domain JSON file.

    ![Save Known Domain Json](/static/assets/security-configuration/images/save-known-domain-json.png#width=40%)

> **Note:**  If you have configured the same domain in both the `Allow` and `Deny` lists, the domain will be denied as the denied list takes priority.