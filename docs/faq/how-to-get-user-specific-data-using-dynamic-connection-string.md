---
layout: post
title: User Specific Data using Dynamic Connection String | Bold BI Docs
description: Learn how to get the user specific data for a user based on an applied custom attribute using dynamic connection string.
platform: bold-bi
documentation: ug
---

# How to get the user specific data using dynamic connection string?

Bold BI allows you to retrieve specific data for a user based on a custom attribute applied using a dynamic connection string by following these steps.

## Get the user specific data using dynamic connection string

1. Refer to the [Configuring Custom Attribute](/working-with-data-sources/configuring-custom-attribute/) to create **Site Level** custom attribute successfully.

2. Create a live mode connection with databases such as **MSSQL**, **MySQL**, **PostgreSQL**, etc.

3. In the connection input form, click the Dynamic Connection String switch to enable the Dynamic Connection String feature for the data source.

4. At the top of the dialog, there is a radio button to choose either the **External API** or **Custom Attribute** for the Dynamic Connection Configuration.

   ![Dynamic Connection String](/static/assets/faq/images/customattribute.png)

5. Select the **Custom Attribute** button for the Custom Attribute in Dynamic Connection Configuration.

   ![Dynamic Connection String](/static/assets/faq/images/customattributeconfiguration.png)

6. Enter the attribute name in the **Custom Attribute** section that was created in **Site**. Ensure that the [custom attribute](/working-with-data-sources/configuring-custom-attribute/) was created in **Site** for different **Users**.

7. At the bottom of the dialog, there is an option pinned to choose the Configuration Mode. Select the **Both** option in Configuration Mode and click **Save**.

8. After saving the configuration, refer to the **Uses of custom attribute** in [configuring custom attribute](/working-with-data-sources/configuring-custom-attribute/#uses-of-custom-attribute) to complete the configuration.

9. Then share the published dashboard with other users that was created on the site. Based on the user, Bold BI allows access to user-specific data.

