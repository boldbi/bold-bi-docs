---
layout: post
title: Hosting Bold BI as sub-application in IIS | Bold BI Docs
description: Learn how to host Bold BI as sub-application in IIS and configure Bold BI to run as sub-application in your server.
platform: bold-bi
documentation: ug
---

# How to host Bold BI Application as a Sub Application in IIS

The Bold BI Application can be hosted as a sub-application in IIS by following the steps below.

## Steps to Create Application Pools for Bold BI as Sub Application inside IIS

Each application in Bold BI will run on a separate application pool. To create an application pool, follow these steps:

1. Click on `Application Pools` and then right-click to select `Add Application Pool`.

   ![Add Application Pool](/static/assets/faq/images/add-application-pool.png)

2. Name the application pool and then click `OK`.

   ![Add Application Pool](/static/assets/faq/images/name-application-pool.png#width=55%)

3. Right-click the newly created application pool and then select `Advanced Settings`.

   ![Application Pool Advanced Settings](/static/assets/faq/images/application-pool-advanced-settings.png#width=55%)

4. Need to change the application pool type as `localSystem` as shown in the following image.

   ![Applicaion Pool Local System](/static/assets/faq/images/application-pool-local-system.png#width=55%)

You need to repeat the same procedure for creating application pools for the following Bold BI sub-applications:

   * IDP - Web
   * IDP - API
   * BI - Web
   * BI - API
   * BI - DataService
   * BI - Jobs
   * IDP - UMS
   * IDP - Windows Authentication

## Steps to Create a Bold BI Sub-Applications in IIS

Follow these steps to create a Bold BI sub-applications:

1. Right-click on the required application hosted in IIS, under which Bold BI will be running as a sub-application, and select `Add Application` as shown in the following image.

   ![Add new Application](/static/assets/faq/images/add-new-application.png#width=65%)

2. Fill out the following details and then click `Ok` as shown in the image below.

   * **Alias name** - Enter the name you would like to use as an alias for the domain.

   * **Application pool** - Application Pools are logical groupings of web applications that will execute in a common process.

   * **Physical path** - In the Physical Path box, click `Browse` to navigate the file system and locate the IDP - Web from the Bold BI deployed location.

    ![Saved new Application](/static/assets/faq/images/new-application-saved.png#width=65%)

> **NOTE:** 
> * `Alias` name should be in lowercase.
> * By default, the Bold BI is deployed in "C:\BoldServices" location for Windows.

3. Repeat the same procedure for the sub-application of Bold BI as given in the table below,

| Application Name     | Under Sub Application      | Application Pool |           Physical Path                      |
|-------------------   |-----------------------     |------------------|-------------------------------               |
| bold                 |	-                        | SubApp-BoldIDWeb     |  **`{Deployed Location}`**\idp\web       |
| api                  |	bold                     | SubApp-BoldIDApi     | **`{Deployed Location}`**\idp\api        |
| bi                   |	bold                     | SubApp-BoldBIWeb     | **`{Deployed Location}`**\bi\web         |
| api                  |  bi                        | SubApp-BoldBIApi     | **`{Deployed Location}`**\bi\api         |
| designer             |  bi          | SubApp-BoldBIDesigner| **`{Deployed Location}`**\bi\dataservice               |
| jobs                 |  bi          | SubApp-BoldBIJob     | **`{Deployed Location}`**\bi\jobs                      |
| ums                  |  bold        | SubApp-BoldUMS       | **`{Deployed Location}`**\idp\ums                      |
| windowsauthentication|  bold        | SubApp-BoldWinAuth   | **`{Deployed Location}`**\idp\windowsauthentication    |

4. Ensure that the **BI** application has sub-applications, as shown in the following image.

   ![Application Under BI](/static/assets/faq/images/application-under-bi.png#width=45%)

5. Finally, the sub-application structure has been successfully created, as shown in the following image.

   ![final-structure](/static/assets/faq/images/final-sub-application.png#width=45%)

## Configure Bold BI to run as the sub-application

1. Need to update the binding values in the configuration files at the deployed location.

2. Update the `Idp`, `Bi`, `BiDesigner`, and `Reports` values in the file located at.`{Deployed Location}\app_data\configuration\config.json`.

   >**Note:** Starting from version 6.19.14, use the config.json and config.xml for versions that came before this one.

   ![Config File Change](/static/assets/faq/images/config-file-change.png)

3. Update the binding values in the `product.json` file located at the following location: `{Deployed Location}\app_data\configuration\product.json`.

   ![product File Change](/static/assets/faq/images/product-file-change.png#width=65%)

> **IMPORTANT:**  Restart your site once all of the above steps have been completed.
