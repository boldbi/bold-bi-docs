---
layout: post
title:  Data Security Configuration – Embedded BI | Bold BI Docs
description: Learn how to enable data security through global embed configuration and access custom attribute, isolation code using configuration based embed support.
platform: bold-bi
documentation: ug
---

# Data Security Configuration

This section explains how to enable global embed configuration and embed the dashboard with global custom attributes and isolation code using the configuration file.

> **NOTE:** The Data Security Configuration is not available in Cloud Analytics Server, but it is available in Bold BI Embedded Analytics.

## Enable global embed configuration

Go to the settings page in UMS and click on `Embed` to enable the global embed configuration within that page.

![Enable global embed authentication](/static/assets/data-security-configuration/images/global-embed-support.png)

* **Enable embed authentication:** Enable or disable global embed authentication. Dashboards from any site can be embedded using the global embed authentication.

* **Embed configuration:** Attributes and isolation code can be configured for any site at any level (user, group, or site) using this embed configuration file.

* **Embed secret:** Dashboards from any site can be embedded using the embed secret.

## Get an embed secret code

1. Click `Generate Secret` button.

    ![Generate secret code](/static/assets/data-security-configuration/images/generate-secret-code.png#width=55%)

2. By clicking on it, the secret code will be generated. Save the secret key safely, as it cannot be retrieved or restored.                   

    ![Copy secret code](/static/assets/data-security-configuration/images/copy-secret-code.png#width=55%)

3. Once the secret code has been generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/static/assets/data-security-configuration/images/reset-secret-code.png#width=55%)

> **Warning :** Resetting this code would cause the previously functioning embedded dashboards to stop working.

You can download the sample template file to generate the embed configuration file using the `Download` button.

![Download template](/static/assets/data-security-configuration/images/embed-configuration.png#width=55%)

## How to use embed configuration file

The embed configuration file can be used to globally set the [attributes](/working-with-data-sources/configuring-custom-attribute/#uses-of-custom-attribute) and [isolation code](/working-with-data-sources/configuring-isolation-code/) for all sites in a common place. 

If you need an existing embed configuration file, please refer to the `template.json` file located in the following location.

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

![Sample embed config](/static/assets/data-security-configuration/images/sample-embed-config.png#width=45%)

**IsConfigurationBaseEmbed:**  It is used to enable or disable the configuration-based embedding. If it is true, the dashboard uses the attributes and isolation code defined in the embed configuration file. Otherwise, the dashboard uses the values from the site's user and group profile pages.

**EmbeddingProfile:** Attributes and isolation code can be defined in the embedding profile. It is possible to create multiple embedding profiles with different names.

* **Name:** Please provide the name of the embedding profile. It will be used to refer to the embedding profile in the user, group, or site profiles.

* **IsolationCode:** Please provide the isolation code for the embedding profile. Please refer to [this page](/working-with-data-sources/configuring-isolation-code/) to learn about the isolation code. 

* **Attributes:** Please provide the attributes for the embedding profile. Please refer to [this page](/working-with-data-sources/configuring-custom-attribute/#uses-of-custom-attribute) to learn about the attributes. 

## Embedding scope hierarchy

Embedding scope can be defined at three levels:

1. Users Profile
2. Groups Profile
3. Sites Profile

The embedding profile will be selected and applied to render the dashboards based on these levels.

## Users Profile

The user's email and the defined embedding profile name are provided. When the mentioned user renders the dashboard, the attributes and isolation code defined in the embedding profiles will be used to render the dashboard.

![Users profile](/static/assets/data-security-configuration/images/users-profile.png#width=45%)

## Groups Profile

The group name and the defined embedding profile name are provided. When a user from the mentioned group renders the dashboard, the attributes and isolation code defined in the embedding profiles will be used to render the dashboard.

![Groups profile](/static/assets/data-security-configuration/images/groups-profile.png#width=45%)

## Sites Profile

The site name and the defined embedding profile name are provided. When the user from the mentioned site renders the dashboard, the attributes and isolation code defined in the embedding profiles will be used to render the dashboard.

![Sites profile](/static/assets/data-security-configuration/images/sites-profile.png#width=45%)

According to the hierarchy mentioned above, the system will choose the embedding profile and update the dashboard accordingly. The priority order will be `Users Profile`, `Groups Profile` and the `Sites profile`.