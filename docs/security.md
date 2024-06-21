---
layout: post
title: Understanding Bold BI Security – Embedded BI | Bold BI
description: Learn about the security of Bold BI Embedded in terms of authentication, authorization, data security, network security and more.
platform: bold-bi
documentation: ug
---

# Overview of Bold BI Security

The security is an important aspect of every software. This document explains the important security features such as authentication, authorization, data security, network security, and more provided by Bold BI Software to the customers.

## Authentication 
Authentication verifies the user's identity. Anyone who wants to access and manage the resource such as dashboards and data source must be an user of the Bold BI Server. Bold BI server can be configured to use local authentication or external authentication to validate the authenticity of the users.

### Local authentication
In local authentication, Bold BI server validates the user authentication by comparing the provided credentials with the details stored in Bold BI database.

### External authentication
Bold BI server can be configured with external authentications such as LDAP, Azure ADFS, OpenID, and OAuth. 

* LDAP   
Bold BI server can be configured to use LDAP for user authentication. Users are authenticated by submitting their credentials to Bold BI server, which will then attempt to bind to the LDAP instance using the user credentials. If the bind works and the credentials are valid, the server grants the user a session.

* Azure ADFS  
Bold BI server can be configured to use Azure Active Directory for importing users into Bold BI server and validating their authentication. Users will be logged into Bold BI server after validated and authenticated by the Microsoft by providing their credentials.

* OpenID connect   
OpenID connect is a simple identity layer on top of the OAuth 2.0 protocol. It allows client to login to Bold BI application after logged into their identity provider. You should configure the OpenID connect with Bold BI application to use OpenID connect with Bold BI Server.

* OAuth connect  
Bold BI supports OAuth 2.0 authorization code workflow for authorizing the third-party application users logging into Bold BI application. It allows client to login to Bold BI application after logged into their identity provider. You should configure OAuth 2.0 in Bold BI application to use OAuth connect with Bold BI server.

## Authorization
Authorization refers to which resources such as dashboards or data sources, the users can access on Bold BI server after authentication has been verified. 
Authorization includes:
-	What users are allowed to create new dashboard or manage existing dashboards.
-	What users are allowed to create new data sources or manage existing data sources.
-	What users are allowed to create new slide shows or manage existing slideshows.
-	What users are allowed to create new schedules or manage existing schedules.
-	What users are allowed to perform admin roles on Bold BI for creating tenant, adding the users, and configuring the server settings.

## Data security
Bold BI provides support to control which users can see the dashboards and data sources. For data sources that are connected to live databases, you can also control the users based on their permissions. There are read, write, create, and delete permissions that can be assigned to users and groups. Without the read permission, no user could see your data source and dashboards.

### Within the tenant
Bold BI server provides the flexible permission system. Using this, you can control the access to dashboard and data source. 

### Between the tenants
Every tenant user can only login to their tenant and access the resource. Each tenant has been deployed with its own database and resource, which ensures that one tenant data is not shared with other tenant. Also, users belong to one tenant can only see the users belong to the same tenant and share a dashboard to that tenant users. Users must have permissions to view and access the dashboard and resources created by another user on same tenant.

## Application security
Every Bold BI product installation will generate unique private keys in customer machine. These private keys will be used to encrypt and store the sensitive data such as password and database details.
Bold BI server uses the following encryptions to encrypt the secure information such as user password and database details. 
-	`Rijndael Encryption (256 bits)`
-	`RSA Cryptography (1024 bits)`
-	`AES Cryptography (128 bits)`

## Network security
Bold BI server provides the following network security.

### Client to Bold BI server
By default, the Bold BI server is configured with HTTP protocol, you should change the protocol to HTTPS by configuring SSL in Bold BI server. We recommend configuring Bold BI server for HTTPS for all communications. When Bold BI is configured for SSL, all content and communications between clients are encrypted using SSL, and the HTTPS protocol is used for requests and responses. 

### Resource access REST API
Bold BI server make the internal API call to access resource in web and mobile apps. The Bold BI server will accept all the connections that uses Transport Layer Security (TLS 1/1.1/1.2) encryption, but we recommend mandatory use of TLS 1.2 in Bold BI installed server.

### Bold BI server to database
Bold BI server can be connected to the database without SSL, but all the database connections support SSL offer encrypted data transfer. We recommend enable the SSL connection to your database while configuring the Bold BI server.

## Application monitoring

### Testing for vulnerability
We will do the regular penetration testing to identify the potential security issues and fix them. We perform this testing on Bold BI Software for at least every release update.

### Application logging
Bold BI server will generate log files when user interacts with the Bold BI application or an exception occurs.
1.	Debug log
2.	Error log

These logs will only include event performed, error occurred, and other operational logs, and will never collect any confidential information such as user password and database details. These logs will be requested by our support team to check the customer reported issue and provide the solution.

## Open source component usage
Bold BI Software is included with various open source components, which are licensed under the terms of applicable open source license agreements. Our legal team will verify and approve the use of such components in Bold BI software and also the usages are revisited and reviewed before every release.
