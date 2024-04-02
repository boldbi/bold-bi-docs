---
layout: post
title: Application Startup – Embedded BI | Bold BI Documentation
description: Read this guide to learn how to configure the installed Bold BI Embedded application with the admin account and data storage options to get started with Bold BI.
platform: bold-bi
documentation: ug
---

# Application Startup

> **NOTE:** To configure Bold BI v4.2.68 or earlier versions, please refer [here](/application-startup/v4.2.68-or-earlier/).

## License Activation

This topic explains how to activate the account and also how to start up the Bold BI Enterprise Application.

The Bold BI application can be activated either by using your login credentials or an offline unlock key.

> **NOTE:** If you have already installed Bold Reports on your machine, please go to [this section](#activate-bold-bi-license) to activate your Bold BI license.

## Using Login Credentials

To activate your subscription, you can sign in using your registered email address.

![Activate the account page](/static/assets/application-startup/images/application-startup-login.png) 

### Select login option

From the login window, select your account type and proceed to login.

* Bold BI Login Credentials
* Azure AD
* Syncfusion Login Credentials

![Application startup login form](/static/assets/application-startup/images/login-option.png)

### Select license

If you have multiple Bold BI licenses, then you will see this screen. To proceed with the application startup, select the corresponding license. Otherwise, you will be automatically redirected to the application startup screen.

![Select Portal License](/static/assets/application-startup/images/choose-the-plan.png)

## Offline Installation

> **NOTE:** The offline unlock key will be available for download on your account page under the Active subscription section, by default.

![Activate the account with Unlock key option](/static/assets/application-startup/images/application-startup-login-license.png)

If you are installing Bold BI in firewall-restricted environments, you can use an offline unlock key to activate the account.

![Unlock key file page](/static/assets/application-startup/images/offline-setup-page.png)

Once the unlock key has been uploaded, proceed to the next screen to configure the application.

![Select Unlcok key file ](/static/assets/application-startup/images/offline-setup.png)

### Possible errors cases and their solution

| Cases      | Solution                                            |
|-------------------  |-----------------------------------------------------------  |
| Invalid File Type | Please upload a valid unlock key file (lic).    
|  Unlock Key Expired    | Your unlock key date was expired. Please download the new unlock key file and upload.   |

> **NOTE:** If you are facing any other issues, please contact us [here](https://www.boldbi.com/support).

## No Trial or New Account Request

If you do not have a Bold BI account, you can request a new trial by clicking on this [link](https://www.boldbi.com/pricing).

![Activate the account with No Trail option](/static/assets/application-startup/images/application-startup-sign-up.png)

## Application Startup for Bold BI Enterprise

The application startup screen helps you configure the admin account setup, database configuration, and storage configuration.

## System Administrator Account

A new user should be created in order to access the Bold BI sites and dashboards, using the details mentioned in the following image.

![Admin User Registration](/static/assets/application-startup/images/application-startup-admin.png)

While creating this new user account, a new group called `System Administrator` will be created, and this group will have the following permissions.

* [Create Dashboards](/managing-resources/manage-dashboards/open-dashboards/)
* [Create Data Sources](/managing-resources/manage-data-sources/)
* [Create Schedules](/managing-resources/manage-schedules/)
* [Create Slideshows](/managing-resources/manage-slideshows/)
* [Create Users](/managing-resources/manage-users/)
* [Create Groups](/managing-resources/manage-groups/)
* [Manage Permissions for users and groups](/managing-resources/manage-permissions/)

By default, the newly created user account is assigned to this group.

## Database Configuration

This configuration helps you configure single or individual databases for Bold ID, Bold BI, and Data Store configuration.

The `Bold ID` database stores user identities, site details, and access information.

The `Bold BI` database stores the dashboards, users, and their access permissions.

The term `DataStore` refers to an intermediate database. Here, imported data from web data sources and statistic files is stored, and you can update the data using the scheduled refresh option. This database holds the data offline and helps you access the dashboards quickly.

[Click here to see the available database options](/application-startup/latest/#database-options)

To connect to an existing server instance, you have the following options:

* Create a new database.
* Use an existing database.

![SQL Server](/static/assets/application-startup/images/application-startup-step1.png)

> **NOTE:** The credentials used to connect to the server instance must have the permissions that are specified [here](/faq/what-are-the-database-permissions-required-to-set-up-bold-bi-embedded/).

> **IMPORTANT:**  The Bold BI server will accept all connections that use Transport Layer Security (TLS 1.1/1.2) encryption and AES Cryptography (128 bits). To support encrypted data transfer, select the `Enable SSL` option when configuring the Bold BI Server.

Here, the user can select either the simple or advanced mode for configuration.

### Simple mode

Please configure a single database for Bold ID, Bold BI, and Data Store.

This configuration will store the user identities, site details, dashboards, data store, and users along with their access permissions in a single database.

By default, in Simple mode, the sites will be deployed in the local file system.

![Simple Mode](/static/assets/application-startup/images/simple-mode.png)

### Advanced mode

Please configure individual databases for Bold ID, Bold BI, and Data Store. You can choose between the local file system and Azure Blob Storage for Bold ID and Bold BI.

The Bold ID database stores user identities and site details.

The Bold BI database stores dashboards, users, and their access permissions.

The Data Store database stores authentication information and data extracted from REST data sources.

![Advanced Mode](/static/assets/application-startup/images/advanced-mode.png)

#### Storage Configuration

In advanced mode, the user can select the preferred storage type, either File Storage or Blob Storage, to store the resource in Bold ID and Bold BI.

![Site File Storage](/static/assets/application-startup/images/file-storage.png)  

> **NOTE:** The default storage type is `File Storage`.

The user can select the Blob Storage by providing the Azure Blob Credential in the required field.  

![Site Blob Storage](/static/assets/application-startup/images/blob-storage.png)  

You can find the details on how to configure the Azure Blob [here](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal).

## Database Options

* SQL Server, Azure SQL
* PostgreSQL, Azure-PostgreSQL
* MySQL, Azure-MySQL
* Amazon Aurora with PostgreSQL compatibility [(Please click here to know how to configure AWS Aurora)](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html)

#### Supported Collation
Collation in a database server specifies how the data is sorted and compared in a database. The Bold BI application will perform the sorting using the general collation. The sorting results might not be accurate if the database server uses any other user specified rules or languages.

The Bold BI application requires specific collations based on the type of database server.

| Database       | Collation                                            |
|-------------------  |-----------------------------------------------------------  |
| SQL Server, Azure SQL | SQL_Latin1_General_CP1_CI_AS
| PostgreSQL, Azure-PostgreSQL | utf8mb4_general_ci
| MySQL | C



> **NOTE:** To connect to a PostgreSQL database, you need to install the PostgreSQL client library while installing the Bold BI Enterprise edition. Learn more [here](/deploying-bold-bi/deploying-in-windows/installation-and-deployment/#client-libraries).

After clicking Next, the application will register and validate the site information. Once the process is completed, you will be able to:
* Manage sites – where you can manage the permissions for the sites you have created. 
* Go to Dashboards - where you can create, edit, update the dashboards and so on. 

![Launch Bold BI Dashboards](/static/assets/application-startup/images/launch-application.png)

## Activate Bold BI license

You can activate your account by using either your login credentials or an offline unlock key.

Open the Manage License Page - `{domain}/ums/administration/license-settings`

Next, select the Embedded BI tab.

![BoldBI Embedded tab](/static/assets/application-startup/images/boldbi-embedded-tab.png)

### Activate Bold BI license using the login credential

To activate your subscription, you may sign in using your registered email address.

![Account activate using login](/static/assets/application-startup/images/activate-boldbi-account.png)

If you have multiple Bold BI licenses, you will see this screen and can select the corresponding license to activate Bold BI. Otherwise, your Bold BI license will be automatically activated.

![Choose Bold BI License](/static/assets/application-startup/images/choose-the-license.png) 

### Upload unlock key

> **NOTE:** The offline unlock key will be available for download on your account page under the Active subscription section, by default.

![Unlock Key option](/static/assets/application-startup/images/upload-unlock-key-option.png) 

Once the unlock key has been uploaded, click on `Upload License` to activate the Bold BI License.

![Updated Bold BI License](/static/assets/application-startup/images/update-license.png)

### Create site

Please refer to this [Create Site](/multi-tenancy/create-new-site/) document to create more sites/tenants.
