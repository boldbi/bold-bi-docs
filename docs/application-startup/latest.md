---
layout: post
title: Application Startup – Embedded BI | Bold BI Documentation
description: Read this guide to learn how to configure the installed Bold BI Embedded application with the admin account and data storage options to get started with Bold BI.
platform: bold-bi
documentation: ug
---

# Application Startup

> **NOTE:** To configure the Bold BI v4.2.68 or earlier versions, please refer [here](/embedded-bi/application-startup/v4.2.68-or-earlier/).

## License Activation

This topic explains how to activate the account and also how to startup the Bold BI Enterprise Application.

Bold BI application can be activated either by using your login credentials or by offline unlock key.

> **NOTE:** If you have already installed Bold Reports in your machine, please go to the [this section](/embedded-bi/application-startup/latest/#activate-bold-bi-license) to activate your Bold BI license.

## Using Login Credentials

You can sign in with your registered email address to activate your subscription.

![Activate the account page](/static/assets/embedded/application-startup/images/application-startup-login.png) 

### Select login option

From the login window, choose your account type and proceed to login.

* Bold BI Login Credentials
* Azure AD
* Syncfusion Login Credentials

![Application startup login form](/static/assets/embedded/application-startup/images/login-option.png)

### Select license

If you are having multiple Bold BI licenses, then you will be getting this screen. To proceed with application startup, select the corresponding license. Otherwise, you will be automatically redirected to the application startup screen.

![Select Portal License](/static/assets/embedded/application-startup/images/choose-the-plan.png)

## Offline Installation

> **NOTE:** Offline unlock key is only available for selected customers. [Please contact us](https://www.boldbi.com/support) to get access to offline unlock key.

![Activate the account with Unlock key option](/static/assets/embedded/application-startup/images/application-startup-login-license.png)

If you are installing the Bold BI in firewall restricted environments, you can use offline unlock key to activate the account. Please download your offline unlock key [here](https://www.boldbi.com/account/downloads/embedded).

![Unlock key file page](/static/assets/embedded/application-startup/images/offline-setup-page.png)

Once the unlock key is uploaded, proceed to the next screen for configuring the application.

![Select Unlcok key file ](/static/assets/embedded/application-startup/images/offline-setup.png)

### Possible errors cases and their solution

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please upload the valid unlock key file (lic) downloaded from [here](https://www.boldbi.com/account/downloads/embedded).    
|  Unlock Key Expired    | Your unlock key date was expired. Please download the new unlock key file from [here](https://www.boldbi.com/account/downloads/embedded).   |

> **NOTE:** If you are facing any other issues, please contact us from [here](https://www.boldbi.com/support).

## No Trial or New Account Request

If you do not have an account for Bold BI, you can request a new trial from this [link](https://www.boldbi.com/embedded/pricing).

![Activate the account with No Trail option](/static/assets/embedded/application-startup/images/application-startup-sign-up.png)

## Application Startup for Bold BI Enterprise

Application startup screen helps you to configure admin account setup, database configuration, and storage configuration.

## System Administrator Account

A new user should be created to access the Bold BI sites and dashboards with the details mentioned in the following image.

![Admin User Registration](/static/assets/embedded/application-startup/images/application-startup-admin.png)

While creating this new user account, a new group called `System Administrator`  will be created, and this group will have following permissions:

* [Create Dashboards](/embedded-bi/managing-resources/manage-dashboards/open-dashboards/)
* [Create Data Sources](/embedded-bi/managing-resources/manage-data-sources/)
* [Create Schedules](/embedded-bi/managing-resources/manage-schedules/)
* [Create Slideshows](/embedded-bi/managing-resources/manage-slideshows/)
* [Create Users](/embedded-bi/managing-resources/manage-users/)
* [Create Groups](/embedded-bi/managing-resources/manage-groups/)
* [Manage Permissions for users and groups](/embedded-bi/working-with-dashboards/share-dashboards/manage-permissions/)

By default, the new user account created is assigned to this group.

## Database Configuration

This configuration helps you to configure single or individual databases for Bold ID, Bold BI, and Data Store configuration.

`Bold ID` database stores the user identities, site details, and their access information.

`Bold BI` database stores the dashboards, users, and their access permissions.

The term `DataStore` refers to an intermediate database. Here, imported data from web data sources and statistic files are stored, and you can update the data using the scheduled refresh option. This database holds the data offline and helps you to access the dashboards quickly.

[Click here to see the available database options](/embedded-bi/application-startup/latest/#database-options)

You can connect to an existing server instance using the following options:

* Create a new database.
* Use an existing database.

![SQL Server](/static/assets/embedded/application-startup/images/application-startup-step1.png)

> **NOTE:** The credentials used to connect to the server instance must have the permissions specified [here](/embedded-bi/faq/what-are-the-database-permissions-required-to-set-up-bold-bi-embedded/).

> **IMPORTANT:**  The Bold BI server will accept all the connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). To support encrypted data transfer, select the `Enable SSL` option When configuring the Bold BI Server.

Here, user can select simple or advanced mode for configuration.

### Simple mode

Configure a single database for Bold ID, Bold BI, and Data Store.

This configuration stores the user identities, sites details, dashboards, datastore, users and their access permissions in a single database.

In Simple mode by default, the sites will be deployed in the local file system.

![Simple Mode](/static/assets/embedded/application-startup/images/simple-mode.png)

### Advanced mode

Configure individual databases for Bold ID, Bold BI, and Data Store and choose between local file system and Azure Blob Storage for Bold ID and Bold BI.

Bold ID database stores user identities and sites details.

Bold BI database stores dashboards, users, and their access permissions.

The Data Store database stores the authentication information and data extracted from REST data sources.

![Advanced Mode](/static/assets/embedded/application-startup/images/advanced-mode.png)

#### Storage Configuration

In advanced mode, the user can select the preferred storage type, either File Storage or Blob Storage, to store the resource in Bold ID and Bold BI.

![Site File Storage](/static/assets/embedded/application-startup/images/file-storage.png)  

> **NOTE:** By default storage type is `File Storage`.

User can select the Blob Storage by giving Azure Blob Credential in the required field.  

![Site Blob Storage](/static/assets/embedded/application-startup/images/blob-storage.png)  

You can find the details how to configure the Azure Blob [here](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal).

## Database Options

* SQL Server, Azure SQL
* PostgreSQL, Azure-PostgreSQL
* MySQL, Azure-MySQL
* Amazon Aurora with PostgreSQL compatibility [(Please click here to know how to configure AWS Aurora)](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html)

#### Supported Collation
Collation in a database server specifies how the data is sorted and compared in a database. The Bold BI application will perform the sorting in the general collation. The sorting results might not be accurate if the database server uses any other user-specified rules or languages.

The Bold BI application requires the following collations depending on the type of database server.

| Database       | Collation                                            |
|-------------------  |-----------------------------------------------------------  |
| SQL Server, Azure SQL | SQL_Latin1_General_CP1_CI_AS
| PostgreSQL, Azure-PostgreSQL | utf8mb4_general_ci
| MySQL | C



> **NOTE:** To connect to a PostgreSQL database, you need to install PostgreSQL client library while installing the Bold BI Enterprise edition. Learn more [here](/embedded-bi/setup/deploying-in-windows/installation-and-deployment/#client-libraries).

After clicking Next, the application will register and validate the site information. Once the process is completed, you can able to
* Manage sites – where you can manage the permissions for the sites you have created. 
* Go to Dashboards - where you can create, edit, update the dashboards and so on. 

![Launch Bold BI Dashboards](/static/assets/embedded/application-startup/images/launch-application.png)

## Activate Bold BI license

You can activate your account either by using your login credentials or by offline unlock key.

Open the Manage License Page - `{domain}/ums/administration/license-settings`

Then, choose the Embedded BI tab.

![BoldBI Embedded tab](/static/assets/embedded/application-startup/images/boldbi-embedded-tab.png)

### Activate Bold BI license using the login credential

You can sign in with your registered email address to activate your subscription.

![Account activate using login](/static/assets/embedded/application-startup/images/activate-boldbi-account.png)

If you are having multiple Bold BI licenses, then you will be getting this screen and select the corresponding license to activate the Bold BI. Otherwise, your Bold BI license will be automatically activated.

![Choose Bold BI License](/static/assets/embedded/application-startup/images/choose-the-license.png) 

### Upload unlock key

> **NOTE:** Offline unlock key is only available for selected customers. Please contact us(https://www.boldbi.com/support) to get access to the offline unlock key.

![Unlock Key option](/static/assets/embedded/application-startup/images/upload-unlock-key-option.png) 

Once the unlock key is uploaded, click `Upload License` for activating the Bold BI License.

![Updated Bold BI License](/static/assets/embedded/application-startup/images/update-license.png)

### Create site

Please refer to this [Create Site](/embedded-bi/multi-tenancy/create-new-site/) document to create a new Bold BI site.

## See Also

* [**Create another site in multi-tenant application**](/embedded-bi/multi-tenancy/create-new-site/)