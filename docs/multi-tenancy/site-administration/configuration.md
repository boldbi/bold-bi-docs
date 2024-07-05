---
layout: post
title: Update the Configuration in Embedded BI Apps | Bold BI Docs
description: Learn how to make your own configuration changes by following these guidelines to your embedded BI application.
platform: bold-bi
documentation: ug
---

# Configuration
 
This guide explains how to modify the configuration files in Bold BI Embedded.
 
> **NOTE:** This feature is available in On-Premises Deployment, but not in Syncfusion Managed Cloud Server.
 
## Steps to change the configuration
 
1. Go to the URL of your UMS application and sign in using the Site Administrator credentials.
 
   Navigate to `Settings` page and click on the `Configuration` option.
 
   ![Settings Configuration](/static/assets/multi-tenancy/images/settings-configuration.png)
 
2. In Configuration, you can modify the files listed below. From the dropdown, Select any file that you want to make changes.
 
   ![Configuration Files](/static/assets/multi-tenancy/images/configuration-files.png)
 
   ### product.json
 
   This file is used to store the application internal URL and product details.
 
   ![Product file](/static/assets/multi-tenancy/images/product-file.png)
 
   ### config.json
 
   The application operates based on this file, which stores the SQL configuration, DRM, and other configuration variables used by the application.
 
   ![Config file](/static/assets/multi-tenancy/images/config-file.png)
 
   ### known_domains.json
 
   This file contains the list of domains that are permitted to access the application.
 
   ![Known domains file](/static/assets/multi-tenancy/images/known-domains-file.png)
 
   ### custom_ui.json
 
   This file configures the Bold BI application user interface, custom menus, listing menu items, and dashboard previews etc.
 
   To learn more about customizing the Bold BI application user interface, kindly refer this page -  [UI Customization](/site-administration/user-interface-customization/)
 
   ![Custom UI file](/static/assets/multi-tenancy/images/custom-ui-file.png)
 
   ### bi/config.xml
 
   This file contains the configuration variables that are specific to a internal service.
 
   ![Config XML file](/static/assets/multi-tenancy/images/config-xml-file.png)
 
   ### robots.txt

   This file is a text file used by websites to instruct web crawlers and bots about which pages or sections of the site should not be crawled or indexed. It helps manage web traffic and protect sensitive or irrelevant parts of the site from being indexed by search engines.
 
   ![Robots file](/static/assets/multi-tenancy/images/robots-file.png)
 
   
3. Choose the variable that need to be modified in the configuration file. For instance, select AI Node and apply the required changes.
 
   ![Select Variable](/static/assets/multi-tenancy/images/select-variable.png)
 
4. Click the save button in the right corner to save your changes to the configuration file.
 
   ![Store Variable Values](/static/assets/multi-tenancy/images/store-variable-values.png)