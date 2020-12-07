---
layout: post
title: Application Startup – Embedded BI | Bold BI Documentation
description: Read this guide to learn how to setup the installed Bold BI Embedded application with admin account and data storage options to get started with Bold BI.
platform: bold-bi
documentation: ug
---

# Application Startup for Bold BI Enterprise

This topic describes how to startup the Bold BI Enterprise Application. 

Application startup screen helps you to configure storage options and admin account setup.

Application startup holds the storage options configuration for below application,
1. Bold ID - Manages user identities and sites
2. Bold BI - Manages dashboards, data sources, schedules and the user permissions.

## Storage Options

* SQL Server, Azure SQL
* PostgreSQL, Azure-PostgreSQL
* Amazon Aurora with PostgreSQL compatibility [(Please click here to know how to configure AWS Aurora)](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html)

> **NOTE:** To connect with PostgreSQL database you need to install PostgreSQL client library while installing the Bold BI Enterprise edition. Learn more [here](/embedded-bi/setup/installation-and-deployment/#client-libraries).

## Database Configuration for Bold ID

This configuration stores the user identities and sites details in the database. You can use anyone of the following database to configure the Bold ID.

[Click here to see the available storage options](/embedded-bi/application-startup/#storage-options)

You can connect to the existing server instance with the below options.

* Create new database.
* Use an existing database.

![SQL Server](/static/assets/embedded/application-startup/images/application-startup-step1.png)

> **NOTE:**  The credentials that is given to connect to the server instance must have permissions to
>* Create Database 
>* Create Table
>* Insert
>* Update Table
>* Alter Table
>* Select
>* Drop Table
>* Drop Database

> **IMPORTANT:**  The Bold BI server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold BI Server, choose the `Enable SSL` option to support encrypted data transfer.

## Storage Configuration for Bold ID

User can select the preferred storage type File Storage or Blob Storage to store the resource in Bold ID.  

![Site File Storage](/static/assets/embedded/application-startup/images/file-storage.png)  

N> By default storage type is `File Storage`.

User can select the Blob Storage by giving Azure Blob Credential in the required field  

![Site Blob Storage](/static/assets/embedded/application-startup/images/blob-storage.png)  

You can find the details on How to configure the Azure Blob [here](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)

## New User - System Administrator

New user should be created to access the Bold BI Sites and Dashboards with the details mentioned in the below image.  

![Admin User Registration](/static/assets/embedded/application-startup/images/application-startup-admin.png)

While creating this new user account, a new group `System Administrator` is also created.

By default, `System Administrator` group have permission to do the below 

* [Create Dashboards](/embedded-bi/managing-resources/manage-dashboards/open-dashboards/)
* [Create Data Sources](/embedded-bi/managing-resources/manage-data-sources/)
* [Create Schedules](/embedded-bi/managing-resources/manage-schedules/)
* [Create Slideshows](/embedded-bi/managing-resources/manage-slideshows/)
* [Create Users](/embedded-bi/managing-resources/manage-users/)
* [Create Groups](/embedded-bi/managing-resources/manage-groups/)
* [Manage Permissions for users and groups](/embedded-bi/managing-resources/share-dashboards/manage-permissions/)

The new user account created is assigned to this group by default. 

## Database Configuration for Bold BI

This configuration stores the dashboards, users and their access permissions in the database. You can use anyone of the following database to configure the Bold BI.

[Click here to see the available storage options](/embedded-bi/application-startup/#storage-options)

You can connect to the existing server instance with the below options.

* Create new database. 
* Use an existing database.

  ![SQL Server Site](/static/assets/embedded/application-startup/images/application-startup-site-registration.png)

> **NOTE:**  The credentials that is given to connect to the server instance must have permissions to
* Create Database 
* Create Table
* Insert
* Update Table
* Alter Table
* Select
* Drop Table
* Drop Database  

> **IMPORTANT:**  The Bold BI server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Bold BI Dashboard, choose the `Enable SSL` option to support encrypted data transfer.

## Storage Configuration for Bold BI

### File Storage

The default system is File Storage, in this the Dashboard Server stores the dashboards and data sources that are uploaded to the server in the following location in the installed machine.  

![Site File Storage](/static/assets/embedded/application-startup/images/file-storage-server.png)  

### Blob Storage

If the Dashboard Server wants to store the dashboards and data sources that are uploaded to the server in the blob storage location, need to provide details shown in below figure.

![Site Blob Storage](/static/assets/embedded/application-startup/images/blob-storage-server.png)  

You can find the details on How to configure the Azure Blob [here](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)

## Database Configuration for Data Store

`DataStore` is nothing but an intermediate database. Here, imported data from web data sources and statistic files are stored and you can update the data using scheduled refresh option.

This configuration stores the data in offline and helps to access the dashboards quickly. 

This is optional. You can skip this configuration by selecting the option `I will configure the data store later` or you can configure the connection and then proceed with the Next.

> **NOTE:**  Later, you can configure the `DataStore` once the application setup gets completed. Learn more [here](/embedded-bi/site-administration/datastore-settings/).

### Skip the Configuration

![Skip DataStore](/static/assets/embedded/application-startup/images/application-startup-datastore.png)

### Configuring the Data Store

You can use anyone of the following database to configure the Data Store.

[Click here to see the available storage options](/embedded-bi/application-startup/#storage-options)

You can connect to the existing server instance with the below options.

* Create new database. 
* Use an existing database.

![SQL Server DataStore](/static/assets/embedded/application-startup/images/application-sqlserver-startup-datastore.png)

> **NOTE:**  The credentials that is given to connect to the server instance must have permissions to
* Create Database 
* Create Table
* Insert
* Update Table
* Alter Table
* Select
* Drop Table
* Drop Database  

> **IMPORTANT:**  The Bold BI server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). While configuring the Data store, choose the `Enable SSL` option to support encrypted data transfer.

After proceeding with Next, the application will register and validate the site information. Once the process completed, you can able to  
* Manage sites – where you can manage permissions for the sites you have created 
* Go to Dashboards - where you can create, edit, update the dashboards and so on. 

![Launch Bold BI Dashboards](/static/assets/embedded/application-startup/images/launch-application.png)

## See Also

* [**Create another site in multi-tenant application**](/embedded-bi/multi-tenancy/create-new-site/)