---
layout: post
title:  Configure Allow Known Domain List & Avoid SSRF | Bold BI Docs
description: Learn about how to configure the known domain list in Bold BI application to avoid Server-side request forgery (SSRF) attacks.
platform: bold-bi
documentation: ug
---

# Block Sending Data to Unknown Domain

The callback URL will be present throughout certain workflow within the application, allowing operation status and other data to be delivered back to the program via that URL (ex: Publishing dashboard from one server to another server). What if a scammer changes the URL and manages to regain access to the encrypted data? This is a kind of Server-side request forgery (SSRF) attack.

A Server-side request forgery (SSRF) attack is an attack that misuses server functionality to access or modify resources. By modifying the request URL, the attacker induces a server-side application to make requests to an unintended destination.

## Avoid SSRF attack in Bold BI

This attack can be avoided by configuring known domains in Bold BI in a known domain JSON file.

### Steps to configure the Known Domain's

1. Go to the UMS Administration page in Bold BI and click on the `Configuration` tab. A list of known domains in a JSON file can be configured here.

    ![UMS Settings](/static/assets/embedded/security-configuration/images/ums-settings.png#width=40%)

2. Select the `known_domains.json` file to configure the allowed and denied domain list on this page.

    ![Known Domain Json](/static/assets/embedded/security-configuration/images/known-domain-json.png#width=40%)

3. If you want to configure known domains in Bold BI, you must set the `Enabled` node to `true`.

    ![Known Domain Json Enable](/static/assets/embedded/security-configuration/images/known-domain-json-enable.png#width=40%)

4. You can add a list of denied domains to the `Deny` node. If you want to allow or deny all external domains, you can use wildcard `*` in known domain JSON nodes. You can also use a wildcard with the subdomain `(*.boldbi.com, *.*.boldbi.com)`.

    ![Denied Domains](/static/assets/embedded/security-configuration/images/denied-domains.png#width=40%)

5. You can add a list of allowed domains to the `Allow` node. You can add more than one domain with a comma. 

    ![Allowed Domains](/static/assets/embedded/security-configuration/images/allowed-domains.png#width=40%)

> **Important:**  Internal Bold BI domains are allowed by default, i.e. domains from Bold BI sites.

6. Once configured, click the `Save` button to update the Known Domain JSON file.

    ![Save Known Domain Json](/static/assets/embedded/security-configuration/images/save-known-domain-json.png#width=40%)

> **Note:**  If you have configured the same domain in both `Allow` and `Deny`, the domain will be denied as the denied list takes first priority. 