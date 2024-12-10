---
layout: post
title: Single and Multisite – JavaScript Embedding | Bold BI Docs
description: Learn single and multisite in JavaScript-based embedding of Bold BI dashboard in any of your business or Web applications.
platform: bold-bi
documentation: ug
---

# Relationship between number of sites in Bold and Embedding in application

Bold BI is a multi-site application that will be created with a minimum of one site upon installation and configuration. When using Bold BI for embedding, the site architecture can either consist of a single site for all customer tenants/organizations (single-site embedding) or one site per customer tenant/organization (multi-site embedding).

## Single Site:

When using a single-site architecture for embedding, all the pre-configured dashboards and customer-created dashboards are saved in the single site to which the customer application is connected.

## Multi Site:

When using a multi-site architecture for embedding, the pre-configured dashboards and customer-created dashboards are saved in a separate site dedicated to each tenant or organization.

## Which Option Should You Choose?

### Single-Site

- Simple to manage Bold BI sites since only one site is used for all tenants and organizations.
- Suitable for customers who want to dynamically pass user session data and populate dashboard data.

### Multi-Site

- Streamline the organization of custom dashboards created by customers.
- More involved maintenance of sites in Bold BI.
- Suitable for customers who need to create users in Bold BI and manage permissions.