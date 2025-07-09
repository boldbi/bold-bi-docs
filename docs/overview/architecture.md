---
layout: post
title: Bold BI High Level Architecture | Bold BI Documentation
description: Study the overview of the system architecture, highlighting key components and their roles in the data flow process.
canonical: "/overview/"
platform: bold-bi
documentation: ug
---

# Bold BI Architecture User Guide

Bold BI is a comprehensive business intelligence platform designed to help organizations integrate, analyze, and visualize data. This document provides a detailed overview of the system architecture, highlighting key components and their roles in the data flow process.

## System Architecture Overview

The architecture consists of several core components that work together to provide seamless data integration, transformation, storage, and visualization. The major components include:

![ Bold BI Architecture](/static/assets/overview/images/architecture-of-boldBI.png)

### 1. Bold ID

Bold ID is the identity and access management service that ensures secure authentication and authorization.
- **Identity Service** – Manages user authentication and access control.
- **Site Catalog** – Stores site-specific configurations and user access information.


### 2. Load Balancer

Distributes incoming user requests across multiple servers to ensure optimal performance and high availability.

### 3. Metadata Server

The Metadata Server maintains site-related configurations and settings.
- Stores metadata for different sites (e.g., Site A, Site B).
- Handles read/update requests for site configurations.


### 4. Dashboard Server

The central component responsible for rendering dashboards and handling user interactions.
- Retrieves metadata and data for dashboards.
- Manages user dashboard requests and visualization rendering.


### 5. Data Store Server

The primary storage system for structured data.
- Stores and retrieves data specific to different sites.
- Supports read and write operations for Site A and Site B.


### 6. Data Viewer Service

A service that facilitates dashboard data retrieval and visualization.
- Fetches data from the Data Store Server.
- Supports live data connections for real-time updates.

### 7. Data Refresh Service

Automates data updates for dashboards.
- Refreshes data periodically from APIs or database connections.
- Works with the scheduler to trigger updates at defined intervals.

### 8. Scheduler

Handles scheduled data refresh operations.
- Ensures timely updates of dashboards based on user-defined schedules.

### 9. Bold Data Hub Process

A critical component for data transformation and optimization.
- **Fetch Data**: Extracts data from multiple sources, including relational databases, REST APIs, and data warehouses.
- **Restructure Data**: Organizes data into optimized structures for analytics.
- **Load Data**: Inserts structured data into the data warehouse for fast querying.

### 10. Relational Database

Stores raw and processed data from various sources.
- Supports structured storage in formats like flat files, XML files, and external databases.

### 11. External Data Sources

Data can be fetched from multiple external sources, including:
- Customer SQL-based databases.
- REST API sources such as Salesforce and HubSpot.
- Data warehouses for centralized storage.


## Workflow Overview

This section outlines the typical flow of user interaction, data processing, and dashboard rendering within the Bold BI environment.

### 1. Dashboard Access Flow

- The user logs in through the Bold BI dashboard interface using Bold ID.
- The login request is sent to the Identity Service, which verifies user credentials.
- The Metadata Server confirms the site and user permissions.
- The Load Balancer directs the request to the appropriate Dashboard Server.
- The Dashboard Server retrieves configuration details and prepares the environment.
- The Data Viewer Service fetches data either from the Data Store Server or through a live data source.
- The dashboard loads and displays the data to the user.


### 2. Scheduled Data Refresh Flow

- The Scheduler triggers automatic refreshes based on predefined intervals.
- The Data Refresh Service pulls updated data from connected sources such as:
        - Customer databases
        - REST APIs
		- Relational data sources
- Refreshed data is stored in the Data Store for quick access during dashboard rendering.



### 3. ETL and Data Preparation with Bold Data Hub

- Data is collected from various input sources.
- The Bold Data Hub processes the data by extracting, transforming and loading it.
- Structured data is then loaded into the Data Warehouse, ready for analytics and visualization.
Bold BI’s architecture ensures a seamless, secure, and efficient data analysis experience. By integrating various data sources, optimizing storage, and automating refresh cycles, the platform provides real-time analytics capabilities for users across different domains.




