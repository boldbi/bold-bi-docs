---
layout: post
title: Embed Settings – Embedded BI | Bold BI Documentation
description: Learn how to enable the embed authentication and generate the secret code using the embed settings in the Bold BI server.
canonical: "/site-administration/embed-settings/"
platform: bold-bi
documentation: ug

---

# Embed Settings to generate Embed Secret key

This section explains how to enable embed authentication and generate the secret code in the Bold BI Server.

## Get embed secret code

1. Go to the settings page and click on `Embed`. Enable the `Enable embed authentication` option on that page.

    ![Enable embed authentication](/static/assets/site-administration/images/enable-embed-option.png)

2. Click on the `Generate Secret` button.

    ![Generate secret code](/static/assets/site-administration/images/generate-secret-code.png)

3. After clicking it, the secret code will be generated. Save the secret key securely, as it cannot be retrieved or restored once generated.               

    ![Copy secret code](/static/assets/site-administration/images/copy-secret-code.png)

4. Once the secret code is generated, it can be reset by clicking the `Regenerate` button.

    ![Reset secret code](/static/assets/site-administration/images/reset-secret-code.png)

> **Warning :** Resetting this code will disrupt the previously working embedded dashboards.

## Get Embed Configuration File

1. Go to the settings page and click on `Embed`. Enable the `Enable embed authentication` option on that page.

2. Click on `Download` in the Embed Configuration section.

    ![Embed Config file](/static/assets/site-administration/images/embedconfig_file.png#max-width=65%)

3. After clicking the button, an Embed Configuration pop-up will appear. Select the category and appropriate dashboard name, then click on `Download Json File` at the bottom of the pop-up.

    ![EmbedConfig popup](/static/assets/site-administration/images/embedconfig_popup.png#max-width=65%)

4. Copy the downloaded `embedConfig.json file`, generated from the embed settings page of the Bold BI server, and paste it into the App_Data folder of a sample [application](https://github.com/boldbi/samples/tree/development/SDK%20Samples/C%23/ASP.NET%20Core).

### Properties configured in sample
The following properties are used in the `embedConfig.json` file:

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


## Get common embed secret code from UMS

This common embed secret code will help you embed the dashboard from multiple sites using the same code. If you reset the common embed secret code, it will break the previously embedded dashboards on all sites.

1. Click on the profile icon and select the `Manage sites (Admin access)` option to open the UMS sites page in a new tab.

    ![Navigate to sites](/static/assets/site-administration/images/navigate-sites.png)

2. In UMS, go to the settings page and click on `Embed`. Enable the option for `Enable embed authentication` on that page.

    ![Enable embed authentication](/static/assets/site-administration/images/ums-enable-embed.png)

3. Click on the `Generate Secret` button.

    ![Generate secret code](/static/assets/site-administration/images/ums-generate-secret-code.png)

4. Once clicked, the secret code will be generated. Make sure to save the secret key securely as it cannot be retrieved or restored once generated.                   

    ![Copy secret code](/static/assets/site-administration/images/ums-copy-secret-code.png)

5. If needed, the secret code can be reset by clicking on the `Reset Secret` button.

    ![Reset secret code](/static/assets/site-administration/images/ums-reset-secret-code.png)

> **Warning:** Resetting this common embed code will break previously working embedded dashboards across multiple sites.