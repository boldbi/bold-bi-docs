---
layout: post
title: Workable ETL/Data Hub Connector | Bold BI Learning
description: Learn how to use the Workable ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Workable

**Description:**
Workable is an online platform for posting jobs and managing the hiring process. Employers can create job listings, receive applications, track candidates, collaborate with team members, schedule interviews, and manage the overall hiring workflow with Workable.

**Prerequisites:**
- Application: Python (>=3.10) and Pip
- Python package: source-workable

**Grab API credentials:**
1. Log into Workable.
2. Click the user icon at the top right and select "Settings".
3. Under "RECRUITING", select "Integrations" on the left.
4. Locate "ACCESS TOKEN" and generate a new token.
5. Carefully copy the new token for pipeline configuration.

**Connection Properties:**
- **Connector Name:** Workable
- **Access Token:** Workable Access token
- **Subdomain:** Workable sub-domain

**Example YAML Configuration:**
### Without Type: Start date
```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Workable_data
      connectorname: Workable
      config:
        access_token: <ACCESS TOKEN>
        sub_domain: <SUB DOMAIN>
      select:
       -Table1
       -Table2
      properties:
        since_timestamp: <>
      
```
### With Type: Start date
```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Workable_data
      connectorname: Workable
      config:
        access_token: <ACCESS TOKEN>
        sub_domain: <SUB DOMAIN>
      select:
       -Table1
       -Table2
      properties:
        since_timestamp: <>
      
```

