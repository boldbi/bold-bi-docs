---
layout: post
title:  Data Security Configuration – Embedded BI | Bold BI Docs
description: Learn how to enable data security through global embed configuration and access custom attribute, isolation code using configuration based embed support.
platform: bold-bi
documentation: ug
---

# Data Security Configuration

This section explains how to enable global embed configuration and embed the dashboard with global custom attribute and isolation code using the configuration file.

## Enable global embed configuration

Go to the settings page in ums and click `Embed` for enabling the global embed configuration under that page.

![Enable global embed authentication](/static/assets/embedded/data-security-configuration/images/global-embed-support.png)

* **Enable embed authentication:** Enable or Disable the global embed authentication. Dashboards from any site can be embed using the global embed authentication.

* **Embed configuration:** Attributes and isolation code can be configured for any site at any levels (user or group or site) using this embed configuration file.

* **Embed secret:** Dashboards from any sites can be embed using the embed secret.

## Get an embed secret code

1. Click `Generate Secret` button.

    ![Generate secret code](/static/assets/embedded/data-security-configuration/images/generate-secret-code.png)

2. By clicking it, the secret code will be generated. Save the secret key safely, as it cannot be retrieved or restored.                    

    ![Copy secret code](/static/assets/embedded/data-security-configuration/images/copy-secret-code.png)

3. Once the secret code is generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/static/assets/embedded/data-security-configuration/images/reset-secret-code.png)

> **Warning :** Resetting this code will break the previously working embedded dashboards.

You can download the sample template file to generate embed configuration file using the `Download template` option.

![Download template](/static/assets/embedded/data-security-configuration/images/embed-configuration.png)

## How to use embed configuration file

The embed configuration file can be used to set the [attributes](/embedded-bi/working-with-data-source/configuring-custom-attribute/#uses-of-custom-attribute) and [isolation code](/embedded-bi/working-with-data-source/configuring-isolation-code/) globally for all sites in a common place.

If you need an existing embed configuration file, then refer to this `template.json` file from the following location.

<table>
    <tr>
        <td>
            <span style="font-weight:bold">Hosted Environment</span>
        </td>
        <td>
            <span style="font-weight:bold">Location</span>
        </td>
    </tr>
    <tr>
        <td>
           Windows
        </td>
        <td>
            Check this location for Bold BI version 4.1.36 or later "{application-installed-drive}\BoldServices\app_data\idp\content\uploadedfiles".<br/>
            Check this location for Bold BI version below 4.1.36 "{application-installed-drive}\Bold BI\IDP\App_Data\Content\UploadedFiles".
        </td>
    </tr>
    <tr>
        <td>
            Linux
        </td>
        <td>
            /var/www/bold-services/application/app_data/idp/content/uploadedfiles
        </td>
    </tr>
</table>

![Sample embed config](/static/assets/embedded/data-security-configuration/images/sample-embed-config.png)

**IsConfigurationBaseEmbed:**  It is used to enable or disable the configuration based embedding. If it is true, the dashboard uses the attributes and isolation code defined in the embed configuration file. Otherwise, dashboard uses the values from the site's user and group profile pages.

**EmbeddingProfile:** Attributes and Isolation code can be defined in the embedding profile. You can create multiple embedding profiles with different names.

* **Name:** Provide the name of the embedding profile. It will be used for referring the embedding profile in the users, groups or sites profile.

* **IsolationCode:** Provide the isolation code for the embedding profile. Please refer to [this page](/embedded-bi/working-with-data-source/configuring-isolation-code/) to know about the isolation code.

* **Attributes:** Provide the attributes for the embedding profile. Please refer to [this page](/embedded-bi/working-with-data-source/configuring-custom-attribute/#uses-of-custom-attribute) to know about the attributes.

## Embedding scope hierarchy

Embedding scope can be defined in three levels: 

1. Users Profile
2. Groups Profile
3. Sites Profile

Based on these levels, the embedding profile will be selected and applied to render the dashboards.

## Users Profile

Provides the user's email and the defined embedding profile name. When the mentioned user renders the dashboard, the attributes and isolation code defined in the embedding profiles will be used to render the dashboard.

![Users profile](/static/assets/embedded/data-security-configuration/images/users-profile.png)

## Groups Profile

Provides the group name and the defined embedding profile name. When the user from the mentioned group renders the dashboard, the attributes and isolation code defined in the embedding profiles will be used to render the dashboard.

![Groups profile](/static/assets/embedded/data-security-configuration/images/groups-profile.png)

## Sites Profile

Provides the site name and the defined embedding profile name. When the user from the mentioned site renders the dashboard, the attributes and isolation code defined in the embedding profiles will be used to render the dashboard.

![Sites profile](/static/assets/embedded/data-security-configuration/images/sites-profile.png)

Based on the above hierarchy, it will select the embedding profile and reflect the changes in the dashboard. The priority order will be `Users Profile`, `Groups Profile` and the `Sites profile`.