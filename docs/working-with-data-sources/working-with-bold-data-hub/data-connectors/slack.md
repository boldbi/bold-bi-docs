---
layout: post
title: Slack ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Slack ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Slack

Slack is a popular messaging and collaboration platform for teams and organizations.

## Grab User OAuth Token

To set up the pipeline, you need to create a Slack app in your workspace in order to obtain a user token for accessing the Slack API.

1. Go to your Slack workspace and click on the name at the top-left.
2. Select Tools > Customize Workspace.
3. From the top-left Menu, choose Configure apps.
4. Click on Build (top-right) > Create a New App.
5. Choose "From scratch", enter the "App Name", and select your target workspace.
6. Confirm by clicking on Create App.
7. Go to OAuth and Permissions under the Features section.
8. Assign the following scopes:

   | Name               | Description                                                |
   |--------------------|------------------------------------------------------------|
   | ``admin``              | Administer a workspace                                     |
   | ``channels:history``   | View messages and other content in public channels         |
   | ``groups:history``     | View messages and other content in private channels        |
   | ``im:history``        | View messages and other content in direct messages         |
   | ``mpim:history``       | View messages and other content in group direct messages    |
   | ``channels:read``      | View basic information about public channels in a workspace|
   | ``groups:read``        | View basic information about private channels              |
   | ``im:read``            | View basic information about direct messages                |
   | ``mpim:read``          | View basic information about group direct messages          |
   | ``users:read``         | View people in a workspace                                 |

   >**Note:** These scopes are adjustable; tailor them to fit your needs.

9. From the "OAuth & Permissions" section on the left, add the scopes and copy the User OAuth Token.

## Connection Properties

In the YAML file, the configuration section contains the following properties:

```yaml
Connectorname: Slack
Access_token: Slack Access token
```

### Example

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Slack_data
      connectorname: Slack
      config:
        access_token: <ACCESS TOKEN>
      select:
        - TABLE1
        - TABLE2
      properties:
        page_size: <>
        start_date: <>
        end_date: <>
```
