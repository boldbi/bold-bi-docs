---
layout: post
title: Understanding Bold BI Security – Cloud BI | Bold BI
description: Learn about the security of Bold BI Cloud in terms of authentication, authorization, data security, disaster recovery and more.
platform: bold-bi
documentation: ug
---

# Overview of Bold BI Security
Security is one of the biggest considerations for every SaaS (Software as a Service) product. We have built Bold BI SaaS on Microsoft Azure, which is committed to the highest levels of trust, transparency, standards conformance and regulatory compliance with the most comprehensive set of compliance offerings of any cloud service provider.  

This document explains the important security features handled by Bold BI for customers fulfillment such as azure security, authentication, authorization, data security, application security, disaster recovery and business continuity, network security, application monitoring, stripe payment gateway, and more.

## Azure security 
Azure Security Center is the first line of defense in protecting your Bold BI resources in Azure, which helps prevent, detect, and respond to threats with increased visibility into and control over the security of your Bold BI resources. It provides integrated security monitoring and policy management across our service, helps detect threats that might otherwise go unnoticed, and works with a broad ecosystem of security solutions.

## Authentication 
Authentication verifies the user's identity. Anyone who wants to access and manage the resource such as dashboards and data source must be user of the Bold BI cloud application. Bold BI cloud can be configured to use local authentication or external authentication to validate the authenticity of the user.  

### Local authentication
In local authentication, Bold BI cloud validates the user authentication by comparing provided credential with the details stored in Bold BI Azure’s SQL database.

### External authentication
Bold BI cloud can be configured with Azure Active Directory as external authentication provider.  

**Azure Active Directory**  
Bold BI Cloud can be configured to use Azure Active Directory for importing users into Bold BI cloud and validating their authentication. User will be logged into Bold BI cloud once they are validated and authenticated by Azure by proving their credentials.

## Authorization
Authorization refers to which resource such dashboard or data sources, users can access on Bold BI cloud after authentication has been verified.    
Authorization includes:
-	What users are allowed to create new dashboard or manage existing dashboards.
-	What users are allowed to create new data sources or manage existing data sources.
-	What users are allowed to create new slide shows or manage existing slideshows.
-	What users are allowed to create new the schedules or manage existing schedules.
-	What users are allowed to perform admin roles on Bold BI for adding the users and configuring the server settings.


## Data security
Bold BI cloud provides support to control which users can see which dashboards and data sources. For data sources that connect to live databases, you can also control the users based on their permissions. There are read, write, create, and delete permissions, which can be assigned to users and groups. Without the read permission, no user could see your data source and dashboards.

Bold BI does not see the following information except limited access with customer permission for support and troubleshooting:    
•	Tenant and its user’s information  
•	App configuration such as site setting, subscription details, and more.
•	Data sources and dashboard details has been added to the Bold BI application.    

### Azure database security
Security is a top concern for managing databases, and it has always been a priority for Azure SQL database. Azure SQL database supports connection security with firewall rules and connection encryption. All Azure SQL database are configured with firewall rule that only connection from Bold BI application should be allowed.  

Protection of database:  
Azure SQL database helps secure your data by providing encryption:  
•	For data in motion through Transport Layer Security (TLS).  
•	For data at rest through transparent data encryption.  
•	For data in use through Always Encrypted.  

### Within the Bold BI cloud application
Bold BI cloud provides the flexible permission system using which you can control the access to dashboard and data source.   

### Between the Bold BI cloud tenants
Every tenant user can only login to their tenant and access the resource. Each tenant has been deployed with its own database and resource storage, which ensures that one tenant data is not shared with other tenant. Also, users belong to one tenant can only see the users belong to the same tenant and share a dashboard to that tenant users. Users must have permissions to view and access the dashboard and resources created by another user on same tenant.

### Data isolation
Bold BI cloud uses Microsoft Azure cloud space for customers to store data in SQL database and Blob storage. Each customer's data is logically separated from other customers' data using their unique identity and this set of identity will be stored in another SQL database for lookup purpose. This ensures that no customer's service data becomes accessible to another customer. 

### Data retention and disposal
We hold your data in Bold BI cloud application as long as you choose to use Bold BI Services. Once you terminate your Bold BI cloud application, your data will get deleted from the Bold BI cloud based on the following scenarios:  
-	In case if you're unpaid for 60 days, we will terminate it after giving you prior notice and option to back-up your data.
-	In case you requested deletion before ending the trial period, your data will get deleted after 15 days by giving prior notice to you.
-	In case you requested deletion after ending the trial period, your data will get deleted on the next day from the requested day.

## Application security
Bold BI cloud uses the following encryptions to encrypt the secure information such as user password and database details:   
-	`Rijndael Encryption (256 bits)`
-	`RSA Cryptography (1024 bits)`
-	`AES Cryptography (128 bits)`

### Secure by design
Every change and new feature is governed by a change management policy to check all application changes are authorized before implementation into production. Our Software Development Life Cycle (SDLC) mandates adherence to secure coding guidelines and screening of code changes for potential security issues with our code analyzer tools, vulnerability scanners, and manual review processes.  

## People processes
Bold BI security team has years of experience in operating data centers and continually improves our processes over time. Employee access is logged and passwords are strictly regulated. We limit access data to only a few of these employees, who need such access to provide support and troubleshooting on our customer’ behalf. 

## Disaster recovery and business continuity
SQL databases protected by automated backups, to create full backups every week, differential backups every 12 hours, and transaction log backups every 5-10 minutes. Azure have backups for last 35 days of your database changes. The backups are stored in `RA-GRS storage blobs` that are replicated to a paired data center for protection against a data center outage. When you restore a database, the service figures out which full, differential, and transaction log backups need to be restored.  

Read-access geo-redundant storage`(RA-GRS)` guarantees at least 99.99% of availability of your data. Geo-redundant storage replicates your data in different regions to check it is always available and should a catastrophic event compromise the original storage location. In addition to the redundancy of data, there is a business continuity plan for our major operations such as support and infrastructure management.  

## Network Security
Bold BI cloud relies on Azure network security and infrastructure helps protect your data against the most sophisticated electronic attacks. Bold BI cloud provides the following network security.  

### Secure transit
Every data transmitted to the servers over public networks is protected using the strong encryption protocols. We mandate all connections to our servers use the Transport Layer Security (TLS 1.2) encryption with strong ciphers for all connections including web access, API access, mobile apps, and IMAP/POP/SMTP email client access. This ensures a secure connection by allowing the authentication of both parties involved in the connection and by encrypting data to be transferred.  

### Client to Bold BI Cloud
The Bold BI cloud is configured with HTTPS protocol and also we are using HTTP/2 protocol by encrypted connections, increasing user and application security. Bold BI cloud application is configured with SSL, all content and communications between clients are encrypted using SSL, and the HTTPS protocol is used for requests and responses. 

Bold BI with HTTPS is secured using the Transport Layer Security protocol, which provides three key layers of protection:  
•	Encryption: Encrypting the exchanged data to keep it secure from eavesdroppers.   
•	Data integrity: Data cannot be modified or corrupted during transfer, intentionally or otherwise, without being detected.  
•	Authentication: Proves that your users communicate with the intended website.

### Resource access REST API
Bold BI cloud makes the internal API call to access resource in web and mobile apps using secure connection. The Bold BI cloud will only accept all the connection that uses TLS 1.2 (Transport Layer Security) or above encryption.

### Bold BI cloud to database
Bold BI cloud database contains the most important data in it since Bold BI cloud connects to database with SSL connection, which offers the encrypted data transfer between application and database. Bold BI cloud database has been configured and protected on Azure using firewall by allowing the access only from same Azure environment.

## Application monitoring

### Logging and monitoring 
As we are using Azure infrastructure, which monitor and analyze information gathered from services, internal traffic in our network, and usage of devices and terminals. We record this information in the form of event logs, audit logs, fault logs, administrator logs, and operator logs and store these logs in a secure server isolated from full system access to manage access control centrally and check the availability.  

### Malware and spam protection 
Microsoft Antimalware for Azure is a single-agent solution for applications and tenant environments, designed to run in the background without human intervention. Protection may be deployed based on the needs of application workloads, with basic secure-by-default or advanced custom configuration including antimalware monitoring.  

Azure scan all user files using their automated scanning system that is designed to stop malware from being spread through Bold BI ecosystem. Azure’s antimalware engine receives regular updates from external threat intelligence sources and scans files against the blacklisted signatures and malicious patterns.

## Stripe payment gateway
Cards are one of the most popular ways to pay online with broad global reach. The Stripe Payment Gateway method is used for our SaaS business, which is the best software platform for running an internet business. The Stripe Payment Gateway has been integrated using the Stripe APIs and their client libraries.  

We get the card detail and encrypt with the sort of secure encryption keys and send to the stripe for payment processing. So, we have provided assurance that we do not store and could not see your card details anymore from our side. Your card details to be handled only by Stripe Payment Gateways.  

Stripe has been audited by a `PCI-certified` auditor and is certified to PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry.  

## Open source component usage
Bold BI SaaS product is included with various open source components. Such components are licensed under the terms of applicable open source license agreements. Our legal team will verify and approve the use of such component in Bold BI cloud application. Such component usages are revisited and reviewed before every release.  