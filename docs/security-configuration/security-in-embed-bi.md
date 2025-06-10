---
layout: post
title: Understanding Bold BI Security – Embedded BI | Bold BI
description: Learn about the security of Bold BI Embedded in terms of authentication, authorization, data security, network security and more.
platform: bold-bi
documentation: ug
---

# Overview of Bold BI Security

Security is an important aspect of every software. This document explains the important security features provided by Bold BI Software to customers, such as authentication, authorization, data security, network security, and more.

## Enhancing Deployment and Data Security

When it comes to Business Intelligence solutions, deployment flexibility and data security are paramount. Bold BI is engineered for multi-cloud compatibility, allowing seamless hosting on leading cloud providers like Azure, AWS, and Google Cloud (GCP).

## Deployment Flexibility

Whether you choose to deploy within your preferred cloud environment or opt for on-premises hosting, Bold BI ensures that all data and services operate securely. Its versatility supports organizations with diverse infrastructure needs, adapting to their unique requirements.

## Offline Licensing for Secure Self-Hosting

Bold BI offers offline licensing, enabling self-hosted environments to operate independently of Bold BI servers. This means your data never leaves your servers, ensuring maximum security and full control over your business-critical information.

## Authentication 
Authentication verifies the user's identity. To access and manage resources such as dashboards and data sources, users must be registered users of the Bold BI Server. The Bold BI server can use local authentication or external authentication methods to validate user authenticity.

### Local authentication
In local authentication, the Bold BI server validates user authentication by comparing the provided credentials with the details stored in the Bold BI database.

### External authentication
The Bold BI server can be configured to use external authentication methods such as LDAP, Azure ADFS, OpenID, and OAuth. 

* LDAP   
The Bold BI server can be configured to use LDAP for user authentication. Users are authenticated by submitting their credentials to the Bold BI server, which then attempts to bind to the LDAP instance using the user credentials. If the bind is successful and the credentials are valid, the server grants the user a session.

* Azure ADFS  
The Bold BI server can be configured to use Azure Active Directory for importing users into the Bold BI server and validating their authentication. Users will be logged into the Bold BI server after validation and authentication by Microsoft, using their credentials.

* OpenID connect   
OpenID connect is a simple identity layer on top of the OAuth 2.0 protocol. It allows clients to log in to the Bold BI application after logging into their identity provider. You should configure the OpenID connect with the Bold BI application to use it with the Bold BI Server.

* OAuth connect  
Bold BI supports the OAuth 2.0 authorization code workflow for authorizing third-party application users to log into the Bold BI application. It allows clients to log in to the Bold BI application after logging into their identity provider. You should configure OAuth 2.0 in the Bold BI application to use OAuth connect with the Bold BI server.

## Authorization
Authorization refers to the resources, such as dashboards or data sources, that users can access on the Bold BI server after their authentication has been verified. Authorization includes:
-	What users are allowed to create new dashboard or manage existing dashboards.
-	What users are allowed to create new data sources or manage existing data sources.
-	What users are allowed to create new slide shows or manage existing slideshows.
-	What users are allowed to create new schedules or manage existing schedules.
-	What users are allowed to perform admin roles on Bold BI for creating tenant, adding the users, and configuring the server settings.

## User Access Control
Bold BI provides a comprehensive range of features for protecting your data and dashboards from unauthorized access. Our platform enables you to control user access to both dashboards and data sources, offering various permission levels to manage data access.

<table>
<tr>
<th style="width: 50%;">Within the tenant</th>
<th style="width: 50%;">Between the tenants</th>
</tr>
<tr>
<td>Bold BI server provides a flexible permission system. Using this, you can control access to the dashboard and data source.</td>
<td>Every tenant user can only log in to their tenant and access the resource. Each tenant has been deployed with its database and resource, which ensures that one tenant's data is not shared with other tenants. Also, users belonging to one tenant can only see the users who belong to the same tenant and share a dashboard with that tenant's users. Users must have permission to view and access the dashboard and resources created by another user on the same tenant.</td>
</tr>
</table>

### Object Level Security
In Bold BI, you can control users based on their permissions. There are read, write, create, and delete permissions that can be assigned to users and groups. Without the read permission, no user can see your dashboards.

Object Level Security allows administrators to control access to different dashboards within the Bold BI server for various users and groups. This includes the ability to share dashboards at both the individual user and group levels, with options to manage access rights for all users and define whether users can edit the dashboard.

>**Note**: For more information on how to share the dashboard with other users, please refer to the [Share Dashboards](/managing-resources/manage-dashboards/share-dashboards/).

### Data Level Security
In Bold BI, you can control users based on their permissions for data sources connected to live databases. There are read, write, create, and delete permissions that can be assigned to users and groups. Without the read permission, no user can see your data sources.

>**Note:** Bold BI only requires the minimum necessary permissions to read customer data, strictly adhering to the principle of least privilege. This access is used solely for troubleshooting and support, which minimizes the risk of unauthorized access and ensures data protection.

Data Level Security enables the enforcement of different levels of data visibility. By sharing a single dashboard with multiple users, each user can access only the data relevant to their specific requirements. This approach not only reduces development efforts but also enhances security measures.

>**Note:** Row Level security grants the user and group permissions to show only specific rows in the data. For more information, please refer to the [How to apply Row-level Security in Elastic search data source](https://support.boldbi.com/kb/article/16645/how-to-apply-row-level-security-in-elastic-search-data-source).

Bold BI also support offline installation process, that is it allows you to use the Bold BI application in environments where internet connectivity is not available. This is particularly beneficial for organizations that have strict data security policies and need to ensure that their data remains within their local network without any external access. By using an offline license key, you can activate and use Bold BI without needing to connect to the internet, thereby enhancing data security and compliance with internal policies. Additionally, the offline installation process ensures that sensitive data is not exposed to potential online threats, providing an extra layer of protection for your organization’s information. For more information, please refer to the [How to install Bold BI offline and activate it using an offline unlock key?](https://support.boldbi.com/kb/article/16076/how-to-install-bold-bi-offline-and-activate-it-using-an-offline-unlock-key).

## Application security
Every Bold BI product installation will generate unique private keys on the customer's machine. These private keys will be used to encrypt and store sensitive data, such as passwords and database details. 
The Bold BI server utilizes the following encryption methods to protect secure information, including user passwords and database details. 
-	`Rijndael Encryption (256 bits)`
-	`RSA Cryptography (1024 bits)`
-	`AES Cryptography (128 bits)`

## Network security
Bold BI server provides the following network security.

### Client to Bold BI server
By default, the Bold BI server is configured with the HTTP protocol. You should change the protocol to HTTPS by configuring SSL in the Bold BI server. We recommend configuring the Bold BI server for HTTPS for all communications. When Bold BI is configured for SSL, all content and communications between clients are encrypted using SSL, and the HTTPS protocol is used for requests and responses.

### Resource access REST API
The Bold BI server makes internal API calls to access resources in web and mobile apps. The Bold BI server will accept all connections that use Transport Layer Security (TLS 1/1.1/1.2) encryption, but we recommend mandatory use of TLS 1.2 in the Bold BI installed server.

### Bold BI server to database
The Bold BI server can be connected to the database without SSL, but all database connections that support SSL offer encrypted data transfer. We recommend enabling the SSL connection to your database while configuring the Bold BI server.

## Application monitoring

### Testing for vulnerability
We will regularly perform penetration testing to identify potential security issues and fix them. We perform this testing on the Bold BI Software for at least every release update.

### Application logging
Bold BI server will generate log files when user interacts with the Bold BI application or an exception occurs.
1.	Debug log
2.	Error log

These logs will only include the events performed, errors occurred, and other operational logs, and will never collect any confidential information such as user passwords and database details. Our support team will request these logs to check the customer reported issue and provide a solution.

## Open source component usage
Bold BI Software includes various open-source components, which are licensed under the terms of applicable open-source license agreements. Our legal team will verify and approve the use of such components in Bold BI software, and the usages are revisited and reviewed before every release.
