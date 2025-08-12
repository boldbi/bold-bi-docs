---
layout: post
title: Jira ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Jira ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Jira

Jira by ``atlassian`` helps teams manage projects and tasks efficiently, prioritize work, and collaborate.

## Grab Credentials

1. Log in to your Jira account.
2. Navigate to the Jira project you have created.
3. Click on your profile picture in the top right corner, and choose `Manage Account`.
4. Go to the `Security` tab and select `Create and manage API tokens`.
5. Click `Create API Token`, provide a descriptive name and click the `Create` button.
6. Safely copy the newly generated access token.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
connector_name: jira
subdomain: Sub-Domain
email: Email account
api_token: API token
Queries: Queries
```


### Example Configuration

```yaml
version: 
encrypt_credentials: false
plugins:
  extractors:
    - name: jiradb
      connectorname: Jira
      config:
        subdomain: <SUB DOMAIN>
        email: <MAIL ID>
        api_token: <API TOKEN>
      properties:
        # queries: "created >= -30d order by created DESC"
        queries: <QUERY>
```