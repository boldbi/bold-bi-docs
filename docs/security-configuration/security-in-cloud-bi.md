---
layout: post
title: Understanding Bold BI Security – Cloud BI | Bold BI
description: Learn about the security of Bold BI Cloud in terms of authentication, authorization, data security, disaster recovery and more.
platform: bold-bi
documentation: ug
---

# Overview of Bold BI Security
Security is one of the most significant considerations for every SaaS (Software as a Service) product. We have constructed Bold BI SaaS on Microsoft Azure, which is dedicated to maintaining the highest levels of trust, transparency, standards conformity, and regulatory compliance. Microsoft Azure offers the most comprehensive range of compliance offerings among all cloud service providers. 

This document explains the important security features handled by Bold BI for customer fulfillment, such as Azure security, authentication, authorization, data security, application security, disaster recovery and business continuity, network security, application monitoring, Stripe payment gateway, and more.

## Azure security 
Azure Security Center is the primary defense in safeguarding your Bold BI resources in Azure. It aids in the prevention, detection, and response to threats by enhancing visibility and control over the security of your Bold BI resources. It offers integrated security monitoring and policy management throughout our service, identifies potential threats that may otherwise be overlooked, and collaborates with a diverse range of security solutions.

## Authentication 
Authentication verifies the user's identity. Anyone who wants to access and manage resources such as dashboards and data sources must be a user of the Bold BI cloud application. The Bold BI cloud can be configured to use either local authentication or external authentication to validate the authenticity of the user. 

### Local authentication
In local authentication, Bold BI Cloud validates the user's authentication by comparing the provided credentials with the details stored in Bold BI Azure's SQL database.

### External authentication
The Bold BI cloud can be configured with Azure Active Directory as an external authentication provider. 

**Azure Active Directory**  
Bold BI Cloud can be configured to use Azure Active Directory for importing users into Bold BI Cloud and validating their authentication. Users will be logged into Bold BI Cloud once they are validated and authenticated by Azure, by providing their credentials.

## Authorization
Authorization refers to the resources, such as dashboards or data sources, that users can access on Bold BI cloud after their authentication has been verified.    
Authorization includes:
-	What users are allowed to create new dashboard or manage existing dashboards.
-	What users are allowed to create new data sources or manage existing data sources.
-	What users are allowed to create new slide shows or manage existing slideshows.
-	What users are allowed to create new the schedules or manage existing schedules.
-	What users are allowed to perform admin roles on Bold BI for adding the users and configuring the server settings.


## Data security
Bold BI cloud provides support for controlling which users can see specific dashboards and data sources. For data sources that are connected to live databases, you can also manage user access based on their permissions. These permissions include read, write, create, and delete, and can be assigned to both individual users and groups. Without the read permission, no user would be able to view your data source or dashboards.

Bold BI does not have access to the following information unless granted limited access by the customer for the purposes of support and troubleshooting:   
•	Tenant and its user’s information  
•	App configuration such as site setting, subscription details, and more.
•	Data sources and dashboard details has been added to the Bold BI application.    

### Azure database security
Security is a major concern when it comes to managing databases, and it has always been a priority for Azure SQL Database. Azure SQL Database supports connection security through the use of firewall rules and connection encryption. All Azure SQL Databases are configured with a firewall rule that only allows connections from the Bold BI application.  

Protection of database:  
Azure SQL database helps secure your data by providing encryption:  
•	For data in motion through Transport Layer Security (TLS).  
•	For data at rest through transparent data encryption.  
•	For data in use through Always Encrypted.  

### Within the Bold BI cloud application
Bold BI cloud provides a flexible permission system that allows you to control access to dashboards and data sources.  

### Between the Bold BI cloud tenants
Every tenant user can only log in to their own tenant and access the resources. Each tenant has been deployed with its own database and resource storage, ensuring that one tenant's data is not shared with another tenant. Additionally, users belonging to one tenant can only see other users belonging to the same tenant and can share a dashboard with those users. Users must have permissions to view and access the dashboards and resources created by other users within the same tenant.

### Data isolation
Bold BI cloud utilizes Microsoft Azure cloud space to allow customers to store data in SQL database and Blob storage. Each customer's data is logically segregated from other customers' data using their unique identity, and this set of identities will be stored in another SQL database for lookup purposes. This guarantees that no customer's service data can be accessed by another customer.

### Data retention and disposal
We will store your data in the Bold BI cloud application for as long as you continue to use Bold BI Services. However, if you decide to terminate your Bold BI cloud application, your data will be deleted from the Bold BI cloud according to the following scenarios: 
-	In case if you're unpaid for 60 days, we will terminate it after giving you prior notice and option to back-up your data.
-	In case you requested deletion before ending the trial period, your data will get deleted after 15 days by giving prior notice to you.
-	In case you requested deletion after ending the trial period, your data will get deleted on the next day from the requested day.

## Application security
Bold BI cloud utilizes the following encryptions to secure sensitive information, including user passwords and database details:   
-	`Rijndael Encryption (256 bits)`
-	`RSA Cryptography (1024 bits)`
-	`AES Cryptography (128 bits)`

### Secure by design
Every change and new feature is governed by a change management policy that ensures all application changes are authorized before being implemented into production. Our Software Development Life Cycle (SDLC) mandates adherence to secure coding guidelines and requires the screening of code changes for potential security issues using our code analyzer tools, vulnerability scanners, and manual review processes.  

## People processes
The Bold BI security team has years of experience in operating data centers and continually improves our processes over time. Employee access is logged, and passwords are strictly regulated. We limit access to data only for a select few employees who require such access to provide support and troubleshooting on behalf of our customers.

## Disaster recovery and business continuity
SQL databases are protected by automated backups, which create full backups every week, differential backups every 12 hours, and transaction log backups every 5-10 minutes. Azure has backups for the last 35 days of your database changes. The backups are stored in `RA-GRS storage blobs`, which are replicated to a paired data center for protection against a data center outage. When you restore a database, the service determines which full, differential, and transaction log backups need to be restored.

Read-access geo-redundant storage `(RA-GRS)` guarantees a minimum of 99.99% availability for your data. Geo-redundant storage replicates your data in various regions to ensure constant availability, even in the event of a catastrophic incident that affects the original storage location. In addition to data redundancy, we have a business continuity plan in place for our major operations, including support and infrastructure management. 

## Network Security
Bold BI cloud relies on Azure network security and infrastructure to help protect your data against the most sophisticated electronic attacks. The Bold BI cloud provides the following network security measures. 

### Secure transit
All data transmitted to the servers over public networks is protected using strong encryption protocols. We require all connections to our servers to use Transport Layer Security (TLS 1.2) encryption with strong ciphers for web access, API access, mobile apps, and IMAP/POP/SMTP email client access. This ensures a secure connection by allowing authentication of both parties involved and encrypting data before transfer. 

### Client to Bold BI Cloud
The Bold BI cloud is configured with the HTTPS protocol, and we are also using the HTTP/2 protocol for encrypted connections, which enhances user and application security. The Bold BI cloud application is configured with SSL, ensuring that all content and communications between clients are encrypted. Additionally, the HTTPS protocol is utilized for both requests and responses.

Bold BI with HTTPS is secured using the Transport Layer Security protocol, which provides three key layers of protection: 
•	Encryption: Encrypting the exchanged data to keep it secure from eavesdroppers.   
•	Data integrity: Data cannot be modified or corrupted during transfer, intentionally or otherwise, without being detected.  
•	Authentication: Proves that your users communicate with the intended website.

### Resource access REST API
Bold BI cloud makes the internal API call to access resource in web and mobile apps using secure connection. The Bold BI cloud will only accept all the connection that uses TLS 1.2 (Transport Layer Security) or above encryption.

### Bold BI cloud to database
The Bold BI cloud database contains the most important data because it connects to the database with an SSL connection, which offers encrypted data transfer between the application and the database. The Bold BI cloud database has been configured and protected on Azure using a firewall that only allows access from the same Azure environment.

## Application monitoring

### Logging and monitoring 
Since we are utilizing Azure infrastructure, it is able to monitor and analyze information that is collected from our services, internal network traffic, and the usage of devices and terminals. We record this information in the form of event logs, audit logs, fault logs, administrator logs, and operator logs. These logs are then stored in a secure server that is isolated from complete system access. This is done in order to centrally manage access control and verify availability.

### Malware and spam protection 
Microsoft Antimalware for Azure is a single-agent solution for applications and tenant environments. It is designed to run in the background without human intervention. Protection can be deployed based on the needs of application workloads, with options for basic secure-by-default or advanced custom configuration, including antimalware monitoring. 

Azure scans all user files using its automated scanning system. This system is designed to prevent the spread of malware through the Bold BI ecosystem. Azure's antimalware engine regularly receives updates from external threat intelligence sources and scans files for blacklisted signatures and malicious patterns.

## Stripe payment gateway
Cards are a popular method of online payment with global reach. We use the Stripe Payment Gateway method for our SaaS business, as it is the best software platform for running an internet business. The Stripe Payment Gateway has been integrated using the Stripe APIs and their client libraries. 

When you provide us with your card details, we encrypt them with secure encryption keys and send them to Stripe for payment processing. We can assure you that we do not store or have access to your card details. Your card details are only handled by Stripe Payment Gateways.  

Stripe has been audited by a `PCI-certified` auditor and is certified to PCI Service Provider Level 1. This is the highest level of certification available in the payments industry.  

## Open source component usage
The Bold BI SaaS product includes various open source components. These components are licensed under the terms of applicable open source license agreements. Our legal team verifies and approves the use of these components in the Bold BI cloud application. The usage of these components is revisited and reviewed before every release. 