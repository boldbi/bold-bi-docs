---
layout: post
title: Multitenancy – Embedded BI | Bold BI Documentation
description: Explore the multi-tenant support in Bold BI Enterprise that lets you deploy multiple tenants in same machine isolated from each other.
platform: bold-bi
documentation: ug

---

# Overview 	

Bold BI Enterprise Edition offers multi-tenant support, allowing administrators to deploy multiple tenants and manage their dashboards. Each tenant has its own database for managing dashboards and resources, isolating them from other tenants under a single Bold BI deployment.    

## Architecture

The architecture of the Bold BI multi-tenant solution is illustrated in the image provided. Each tenant is deployed with its own database and resources, ensuring data isolation between tenants.

![MultiTenant Architecture](/static/assets/multi-tenancy/images/multi-tenant-architect.png)

To set up the multi-tenant solution, install and deploy the Bold BI Enterprise Edition, which will deploy the first tenant with the Identity Provider (IDP) application in an isolated database. Subsequently, other tenants can be deployed with their own databases.

The Identity Provider (IDP) application is a core component of the multi-tenant solution, managing tenant and user identity.

> **NOTE:**  IDP can share the same database as the first BI tenant, but not with the two tenant applications.

## Security

Bold BI's multi-tenant product provides security for both the application and data.

### Application security

Every Bold BI product installation will generate unique private keys on the customer's machine. These private keys will be used to encrypt and store sensitive data such as passwords and connection strings.

### Data security

Each tenant user can only log in to their own tenant and access their resources. Each tenant has its own database and resources, ensuring that one tenant's data is not shared with another tenant.

Users belonging to the same tenant can only see users from that same tenant and share dashboards with those users. Users must have the proper permissions to view and access the dashboards and resources created by other users within the same tenant. 

## Adding new tenant

To deploy a new tenant in Bold BI Enterprise application, click the `Create Site` button on the site management page. The new tenant deployment will use its own database and resource storage that is completely separate from other tenants. Learn more about creating a [new tenant](/multi-tenancy/create-new-site/).

![Create Site](/static/assets/multi-tenancy/images/create-button.png)

## Add or invite users

Users can only be added, edited, and deleted by users belonging to the System Administrator group. You can invite a user to your tenant from another tenant by adding the user with the same email address as an existing user. Additionally, an invitation email can be sent to that existing tenant user. The invited user can access resources in both tenants after the required permissions (Read/Write/Delete) for that resource are granted.

Learn more about how to add a new user to a tenant in order to [Manage Users](/managing-resources/manage-users/).

> **NOTE:**  You can invite a user to a certain tenant from another tenant. 

## Sharing the dashboard to tenant user

You can share the dashboard to user in same tenant or other tenant by two options:
1.	Within the same tenant, you can share the dashboard with other users in the same tenant by granting read permission to that particular dashboard. Learn more about [Manage Permissions](/managing-resources/manage-permissions/) here. 

2.	If you want to share the dashboard with users from another tenant, make the dashboard public and share the dashboard link URL with users from the other tenant. Learn more [Share Dashboard](/working-with-dashboards/share-dashboards/public-dashboards/) here.
 
## Embedded BI
Bold BI's Multi-tenant solution provides the option to embed resources (dashboards and data sources) within other applications. Learn more about the [Overview of Bold BI](/overview/).