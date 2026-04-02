---
layout: post
title: Multitenancy – Embedded BI | Bold BI Documentation
description: Explore the multi-tenant support in Bold BI Enterprise that lets you deploy multiple tenants in same machine isolated from each other.
platform: bold-bi
documentation: ug

---

# Overview 	

Bold BI Enterprise Edition offers both single-site and multi-site support. The multi-site feature allows administrators to deploy multiple sites and manage their dashboards. Each site has its own database for managing dashboards and resources, isolating them from other sites within a single Bold BI deployment. This also allows organizations to create separate data views for different users. This is particularly useful for B2B2C companies, where data needs to be segmented for partners (B) and their customers (C).

## Architecture

### Single Site

The architecture of the Bold BI single-site solution is illustrated in the image provided. When using a single-site architecture, all the pre-configured dashboards and customer-created dashboards are saved in the single site.

![Singlesite Architecture](/static/assets/multi-tenancy/images/signle-site-architect.png)

### Multi Site

When using a multi-site architecture, the pre-configured dashboards and customer-created dashboards are saved in a separate site dedicated to each tenant or organization.

The architecture of the Bold BI multi-site solution is illustrated in the image provided. Each site is deployed with its own database and resources, ensuring data isolation between sites.

![Multisite Architecture](/static/assets/multi-tenancy/images/multi-site-architect.png)

To set up the multi-site solution, install and deploy the Bold BI Enterprise Edition, which will deploy the first site with the Identity Provider (IDP) application in an isolated database. Subsequently, other sites can be deployed with their own databases.

The Identity Provider (IDP) application is a core component of the multi-site solution, managing site and user identity.

> **NOTE:**  IDP can share the same database as the first BI site, but not with the two site applications.

### Which Option Should You Choose?

**Single-Site**

* Simple to manage Bold BI sites since only one site is used for all tenants and organizations.

* Suitable for customers who want to dynamically pass user session data and populate dashboard data.

**Multi-Site**

* Streamline the organization of custom dashboards created by customers.
* More involved maintenance of sites in Bold BI.
* Suitable for customers who need to create users in Bold BI and manage permissions.

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