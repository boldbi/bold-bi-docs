---
layout: post
title: Multitenancy – Adding a new tenant – Embedded BI | Bold BI
description: Learn how to add another site as part of multi-tenancy and configure separate database and data store with Bold BI Embedded.
platform: bold-bi
documentation: ug
---

# Creating a New Site in Bold BI Enterprise Edition

This section briefly explains the steps involved in creating a new site in Bold BI Enterprise multi-tenant application.

## Site creation

You can create another site in Bold BI Enterprise application by clicking the `Create Site` button in site management module.

![Create Site](/static/assets/embedded/multi-tenancy/images/create-button.png)

This step holds the site details such as tenant type, name, and identifier. Select the `Bold BI` tenant type in the drop down. The site identifier should be unique and it is a part of your site URL.

![Site Registration](/static/assets/embedded/multi-tenancy/images/site-creation.png)

## Select database 

This step stores the dashboards, users, and their access permissions in SQL Server Database. You can connect to the existing SQL Server instance with the below options:

* By creating new `Bold Bi Site` database.  
![Select Database](/static/assets/embedded/multi-tenancy/images/select-database.png)
* By choosing one of the database from `Select a Database` drop down for creating Bold BI Server tables in that database.  
![Select Database ExistingDb](/static/assets/embedded/multi-tenancy/images/select-database-existing.png)

> **NOTE:**  The credentials that is given to connect to the SQL Server instance must have permissions to
* Create Database 
* Create Table
* Insert
* Update Table
* Alter Table
* Select
* Drop Table
* Drop Database  

## Select data store

You can pull the data from 120+ connectors and save it offline to access the dashboards quickly. 

This is optional. You can skip this configuration by selecting the option `I will configure the data store later` and then proceed with the Next.

![SQL Server DataStore](/static/assets/embedded/multi-tenancy/images/select-datastore.png)

## Select storage

You need to provide the storage type as either file storage or blob storage, in which Bold BI application will store the resources, contents, and logs. For more information, please refer to this [link](/bold-bi/on-premise/faq/what-all-are-the-files-and-folders-will-be-generated-in-the-installed-machine).

![File storage type](/static/assets/embedded/multi-tenancy/images/select-storage-file.png)

![Blob storage type](/static/assets/embedded/multi-tenancy/images/select-storage-blob.png)

## Select administrator

This step is used to select the user to provide complete control over the site.

The selected users have the following permissions:
* [Create Dashboards](/embedded-bi/managing-resources/manage-dashboards/open-dashboards/)
* [Create Data Sources](/embedded-bi/managing-resources/manage-data-sources/)
* [Create Schedules](/embedded-bi/managing-resources/manage-schedules/)
* [Create Slideshows](/embedded-bi/managing-resources/manage-slideshows/)
* [Create Users](/embedded-bi/managing-resources/manage-users/)
* [Create Groups](/embedded-bi/managing-resources/manage-groups/)
* [Manage Permissions for users and groups](/embedded-bi/working-with-dashboards/share-dashboards/manage-permissions/)

After selecting the user, proceed with `Create and launch site`.

![Select Administrator](/static/assets/embedded/multi-tenancy/images/select-administrator.png)