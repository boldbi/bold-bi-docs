---
layout: post
title: Embed Settings – Embedded BI | Bold BI Documentation
description: Learn how to enable the embed authentication and generate the secret code using the embed settings in the Bold BI server.
canonical: "/cloud-bi/site-administration/embed-settings/"
platform: bold-bi
documentation: ug
---

# Embed Settings to generate Embed Secret key

This section explains on how to enable the embed authentication and generate the secret code in the Bold BI Server. 

## Get embed secret code

1. Go to the settings page and click `Embed`. Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/bold-bi-docs/static/assets/embedded/site-administration/images/enable-embed-option.png)

2. Click `Generate Secret` button.

    ![Generate secret code](/bold-bi-docs/static/assets/embedded/site-administration/images/generate-secret-code.png)

3. On clicking it, the secret code will be generated. Save the secret key safely, as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/bold-bi-docs/static/assets/embedded/site-administration/images/copy-secret-code.png)

4. Once the secret code is generated, it can be reset by clicking the `Regenerate` button.

    ![Reset secret code](/bold-bi-docs/static/assets/embedded/site-administration/images/reset-secret-code.png)

> **Warning :** Resetting this code will break the previously working embedded dashboards.

## Get Embed Configuration File

1. Go to the settings page and click `Embed`. Enable the `Enable embed authentication` under that page.

2. Click `Download` available in Embed Configuration option.

    ![Embed Config file](/bold-bi-docs/static/assets/embedded/site-administration/images/embedconfig_file.png#max-width=65%)

3. Once button is clicked, an Embed Configuration pop-up will be generated, from which you need to select the category and appropriate dashboard name. Then, click `Download Json File` at the bottom of the pop-up.

    ![EmbedConfig popup](/bold-bi-docs/static/assets/embedded/site-administration/images/embedconfig_popup.png#max-width=65%)

4. Copy the downloaded` embedConfig.json file`, which is generated from the embed settings page of the Bold BI server, and paste it into the App_Data folder of a sample  [application](https://github.com/boldbi/samples/tree/development/SDK%20Samples/C%23/ASP.NET%20Core).

### Properties configured in sample
The following properties are used in `embedConfig.json file`:

<meta charset="utf-8"/>
        <table>
        <tbody>
            <tr>
                <td align="left">ServerUrl</td>
                <td align="left">Dashboard Server URL (Eg: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
            </tr>
            <tr>
                <td align="left">SiteIdentifier</td>
                <td align="left">For Bold BI On-Premise Edition, it should be like  <code>site/site1</code>.For Bold BI Cloud, it should be an empty string.</td>
            </tr>
            <tr>
            <td align="left">Environment</td>
                <td align="left">Your Bold BI application environment. (If Cloud, use <code>cloud</code>; if On-Premise, use <code>enterprise</code>)</td>
            </tr>
            <tr>
                <td align="left">UserEmail</td>
                <td align="left">The email of the user. The dashboard will be rendered on behalf of this user.</td>
            </tr>        
            <tr>
            <td align="left">EmbedSecret</td>
                <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in same page</td>
            </tr> 
            <tr>
                <td align="left">DashboardId</td>
                <td align="left">Item id of the dashboard to be embedded in your application.</td>
            </tr>  
            <tr>
                <td align="left">EmbedType</td>
                <td align="left">BoldBI.EmbedType.Component.</td>
            </tr>
            <tr>
                <td align="left">ExpirationTime</td>
                <td align="left">Token expiration time.</td>
            </tr> 
        </tbody>
        </table>

> **NOTE:** This embed feature will be available only in the Embedded BI Plan.

## Get common embed secret code from UMS

This common embed secret code would help you to embed the dashboard from multiple sites with the same embed secret code. If you reset the common embed secret code, it will break the previously working embedded dashboards in all the sites. 

1. Click the profile icon and select the `Manage sites(Admin access)` option, then it would open the UMS sites page in a new tab.

    ![Navigate to sites](/bold-bi-docs/static/assets/embedded/site-administration/images/navigate-sites.png)

2. In UMS, go to the settings page and click `Embed.` Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/bold-bi-docs/static/assets/embedded/site-administration/images/ums-enable-embed.png)

3. Click the `Generate Secret` button.

    ![Generate secret code](/bold-bi-docs/static/assets/embedded/site-administration/images/ums-generate-secret-code.png)

4. On clicking it, the secret code will be generated. Save the secret key safely as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/bold-bi-docs/static/assets/embedded/site-administration/images/ums-copy-secret-code.png)

5. Once the secret code is generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/bold-bi-docs/static/assets/embedded/site-administration/images/ums-reset-secret-code.png)

> **Warning:** Resetting this common embed code will break previously working embedded dashboards across multiple sites.