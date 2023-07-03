---
layout: post
title: Multitenancy – Embedded BI | Bold BI Documentation
description: Explore the multi-tenant support in Bold BI Enterprise that lets you deploy multiple tenants in same machine isolated from each other.
platform: bold-bi
documentation: ug
lang: en
---

# Overview 	

Bold BI Enterprise Edition has multi-tenant support, which allows administrator to deploy multiple tenants and manage their dashboards. Each tenant has its own database for managing its dashboards and resources so they are isolated from each other tenant under single Bold BI deployment.    

## Architecture

Architecture of the Bold BI multi-tenant solution is given in the following image. Each tenant has deployed with its own database and resource, which ensures the data isolation of one tenant from others.

![MultiTenant Architecture](/static/assets/multi-tenancy/images/multi-tenant-architect.png)

To setup multi-tenant solution, install and deploy the Bold BI Enterprise Edition, which will deploy the first tenant with Identity Provider (IDP) application in isolated database. Then, you can deploy many tenants with their own database. 

The Identity Provider (IDP) application is a core application of multi-tenant solution, which manages the tenant and its user identity.

> **NOTE:**  IDP and first BI tenant can share the same database, but you cannot share same database between the two tenant applications.

## Security

Bold BI multi-tenant product provides the security for both application and data.

### Application security

Every Bold BI product installation will generate unique private keys in customer machine. These private keys will be used to encrypt and store the sensitive data like password and connection string.

### Data security

Every tenant user can only login to their tenant and access the resource. Each tenant has been deployed with its own database and resource, which ensures that one tenant data is not shared with other tenant.

Also, users belong to one tenant can only see the users belong to the same tenant and share a dashboard to that tenant users. Users must have permissions to view and access the dashboard and resources created by other user on same tenant.  

## Adding new tenant

You can deploy new tenant in Bold BI Enterprise application by clicking the `Create Site` button in site management page. New tenant deployment will use own database and resource storage that is completely separated from other tenant. Learn more about creating new tenant [here](/multi-tenancy/create-new-site/).

![Create Site](/static/assets/multi-tenancy/images/create-button.png)

## Add or invite users

Users can only be added, edited, and deleted by the users belonging to the System Administrator group. You can invite the user to your tenant from other tenant by adding the user with same email address of existing user. In addition, user inviting mail can be send to that existing tenant user. Invited user can access resource in both tenants after the required permission (Read/Write/Delete) for that resource is granted.  

You can learn more about adding a new user to tenant [here](/managing-resources/manage-users/).   

> **NOTE:**  You can invite the user to certain tenant from other tenant.  

## Sharing the dashboard to tenant user

You can share the dashboard to user in same tenant or other tenant by two options:
1.	Within same tenant, you can share the dashboard to other user in same tenant by granting read permission to the particular dashboard. You can learn more about
[Manage Permissions](/working-with-dashboards/share-dashboards/manage-permissions/) here. 

2.	If you want to share the dashboard between other tenant by making the dashboard as public and share the dashboard link URL to users of other tenant. You can learn more about [Share Dashboard](/working-with-dashboards/share-dashboards/public-dashboards/) here.
 
## Embedded BI
Bold BI Multi-tenant solution provides option to embed resources (dashboard and data sources) inside the other applications. You can learn more about the embedding solution [here](/overview/).