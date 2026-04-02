---
layout: post
title: Bold Data Hub - Frequently Asked Questions | Bold BI Docs
description: Explore frequently asked questions about Bold Data Hub, covering setup, data store configuration, datahub capabilities, supported connectors, and common issues.
platform: bold-bi
documentation: ug
---

# Frequently Asked Questions - Bold Data Hub

## Pipeline Execution Log Locations in Bold Data Hub?

Pipeline execution logs help you monitor ETL job activity, debug failures, analyze performance, and audit execution history. The storage location of these logs varies depending on the Bold BI version you are using.

### Versions Earlier Than Bold BI 15.1
In versions prior to 15.1, pipeline execution logs are stored in the ETL-specific folder within the `app_data` directory.

**Log Path**

`{Deployed Location}/app_data/etl/logs/{pipelineName}`

**Path Details**
- **{Deployed Location}**: The root installation directory where Bold BI is deployed.
    - Windows (default installation path): `C:\BoldServices\`
    - Linux (default installation path): `/var/www/boldbi/`
- **app_data/etl/logs/**: The directory dedicated to storing ETL pipeline execution logs.
- **{pipelineName}**: Each pipeline has a separate folder. Logs are organized by pipeline name for easier tracking and troubleshooting.

**Example**

Windows:

`C:\BoldServices\app_data\etl\logs\SalesPipeline`

Linux:

`/var/www/boldbi/app_data/etl/logs/SalesPipeline`

### Bold BI 15.1 and Later
Starting from version 15.1, the logging structure was reorganized to follow a standardized service-based logging format.

**Log Path**

`{Deployed Location}/app_data/logs/etl.service/{pipelineName}`

**Path Details**
- **{Deployed Location}**: The root installation directory where Bold BI is deployed.
    - Windows (default installation path): `C:\BoldServices\`
    - Linux (default installation path): `/var/www/boldbi/`
- **Changes Introduced in Version 15.1**:
    - Logs were moved under a centralized `logs` directory.
    - Each service now has its own folder.
    - ETL logs are grouped under `etl.service`.
- **{pipelineName}**: Each pipeline has a separate folder. Logs are organized by pipeline name for easier tracking and troubleshooting.

**Example**

Windows:

`C:\BoldServices\app_data\logs\etl.service\SalesPipeline`

Linux:

`/var/www/boldbi/app_data/logs/etl.service/SalesPipeline`