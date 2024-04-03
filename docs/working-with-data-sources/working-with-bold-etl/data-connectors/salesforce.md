---
layout: post
title: Salesforce ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Salesforce ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Salesforce

[Salesforce](https://www.salesforce.com/) is a cloud platform that streamlines business operations and customer relationship management, encompassing sales, marketing, and customer service.

## Grab Credentials

To set up your pipeline, you'll need your Salesforce `user_name`, `password`, and `security_token`. Use your login credentials for `user_name` and `password`.

### Obtain Security Token

Follow these steps to obtain the `security_token`:

1. Log into Salesforce with your credentials.
2. Click your profile picture/avatar at the top-right.
3. Select "Settings" from the drop-down.
4. Under "Personal Setup" in the sidebar, choose "My Personal Information" > "Reset My Security Token".
5. Click "Reset Security Token".
6. Check your email for the token sent by Salesforce.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname: Salesforce
Username: UserName
Password: Password
Security_token: Salesforce security token
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Salesforce_data
      connectorname: Salesforce
      config:
        username: <USERNAME>
        password: <PASSWORD>
        security_token: <SECURITY TOKEN>
      select:
        - TABLE1
        - TABLE2
```
