---
layout: post
title: Multitenancy – Adding a new tenant – Embedded BI | Bold BI
description: Learn how to add another site as part of multi-tenancy and configure separate database and data store with Bold BI Embedded.
platform: bold-bi
documentation: ug
lang: en
---

# Creating a New Site in Bold BI Enterprise Edition

This section briefly explains the steps involved in creating a new site in Bold BI Enterprise multi-tenant application.

## Site creation

You can create another site in Bold BI Enterprise application by clicking the `Create Site` button in site management module.

![Create Site](/static/assets/multi-tenancy/images/create-button.png#max-width=95%)

This step holds the site details such as tenant type, name, domain, and identifier. The site identifier should be unique and it is a part of your site URL. You can create a site using custom domains too.

Based on branding chosen, following information will be copied to the tenant.
* Localization
* Date Format
* Time Format
* Branding Images.

 Otherwise, default images and values will be used for the tenant branding.

![Site Registration](/static/assets/multi-tenancy/images/site-creation.png#max-width=45%)

## Select database 

This step helps you in configuring single or individual databases for the Bold BI Server and Data Store.

The dashboards, users, and access rights are all stored in SQL Server Database.

The Data Store database gathers data from over 120 connectors and stores it locally so dashboards can quickly access it.

The following options can be used to connect to an existing SQL Server instance:

* By creating new `Bold Bi Site` database.  
![Select Database](/static/assets/multi-tenancy/images/select-database.png#max-width=45%)
* By choosing one of the database from `Select a Database` drop down for creating Bold BI Server tables in that database.  
![Select Database ExistingDb](/static/assets/multi-tenancy/images/select-database-existing.png#max-width=45%)

> **NOTE:**  The credentials that is given to connect to the SQL Server instance must have permissions to
* Create Database 
* Create Table
* Insert
* Update Table
* Alter Table
* Select
* Drop Table
* Drop Database  

Here, you can select the simple or advanced mode for configuration.

### Simple mode

Configure a single database for Bold BI and Data Store.

The site's details, dashboards, data store, users, and their access permissions are all stored in a single database with this configuration.

![Simple Mode](/static/assets/multi-tenancy/images/simple-mode.png)

### Advanced mode

Configure individual databases for Bold BI and Data Store.

Dashboards, users, and their access permissions are all stored in the Bold BI database.

The authentication information and data collected from SQL and REST data sources are stored in the Data Store database.

![Advanced Mode](/static/assets/multi-tenancy/images/advanced-mode.png)

## Select storage

You need to provide the storage type as either file storage or blob storage, in which Bold BI application will store the resources, contents, and logs. For more information, please refer to this [link](/faq/what-all-are-the-files-and-folders-will-be-generated-in-the-installed-machine/).

![File storage type](/static/assets/multi-tenancy/images/select-storage-file.png#max-width=45%)

![Blob storage type](/static/assets/multi-tenancy/images/select-storage-blob.png#max-width=45%)

## Configure Isolation code and Custom Attribute in site 

You can skip this configuration directly by clicking `Next` button or you can configure the isolation code or custom attribute or can configure both and then proceed with the Next.

![Skip configure Isolation code and Custom Attribute](/static/assets/multi-tenancy/images/configure-isolation-and-attribute.png#max-width=45%)

### Isolation code

Isolation code feature is to configure a row-level security for site level to apply all dashboards on the site. Here, you can set the filter value in a specific column of data source. The UMS admin can apply the isolation code from site settings of the UMS site details page. The dashboard will be filtered based on the applied isolation code. If the column in the code does not match with the data source level, then no data will be displayed in widgets. Learn more from [here](/working-with-data-source/configuring-isolation-code/).

### Custom attribute

This can be set by the UMS admin for a site in the site details page. Learn more from [here](/working-with-data-source/configuring-custom-attribute/).

Attributes are name-value pairs that are associated with users, groups, and the sites (tenants).

![Configure Custom Attribute](/static/assets/multi-tenancy/images/custom-attribute.png#max-width=45%)

Name – Name of the attribute.

Value – Value of the attribute.

Description – Explaining the purpose for the attribute.

Encrypt – Store it as encrypted one in the database and the value will be shown as dots in the grid.

## Select administrator

This step is used to select the user to provide complete control over the site.

The selected users have the following permissions:
* [Create Dashboards](/managing-resources/manage-dashboards/open-dashboards/)
* [Create Data Sources](/managing-resources/manage-data-sources/)
* [Create Schedules](/managing-resources/manage-schedules/)
* [Create Slideshows](/managing-resources/manage-slideshows/)
* [Create Users](/managing-resources/manage-users/)
* [Create Groups](/managing-resources/manage-groups/)
* [Manage Permissions for users and groups](/working-with-dashboards/share-dashboards/manage-permissions/)

After selecting the user, proceed with `Create and launch site`.

![Select Administrator](/static/assets/multi-tenancy/images/select-administrator.png#max-width=45%)

The selected admin user(s) can access the resources and manage users, groups, and their permissions in the corresponding site alone.