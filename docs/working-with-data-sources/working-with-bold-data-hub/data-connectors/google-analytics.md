---
layout: post
title: Google Analytics ETL/Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Google Analytics ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Google Analytics Source

Google Analytics is a service for web analytics that tracks and provides data regarding user engagement with your website or application.

### Service Account Credential

Service account credentials are more suitable for server-to-server interactions.

### Grab Google Service Account Credentials

To obtain API credentials using a GCP service account, follow these steps:

1. Sign in to [https://console.cloud.google.com](https://console.cloud.google.com).
2. Create a service account if necessary.
3. Enable the "Google Analytics API" (refer to Google documentation for detailed instructions).
4. Generate credentials:
   - Navigate to IAM & Admin in the console's left panel, and then select Service Accounts.
   - Find the service account you want to use and click on the three-dot menu under the "Actions" column.
   - Create a new JSON key by selecting "Manage Keys" > "ADD KEY" > "CREATE".
   - Download the ".json" file containing the necessary credentials for future use.


## Share the Google Analytics Property with the API

>**Note:** For service account authentication, use the `client_email`. 

1. Log into your Google Analytics account.
2. Choose the website property you wish to share.
3. In the lower-left corner, click on the “Admin” tab.
4. In the “Account” column, go to “Account Access Management.”
5. Find and click on the blue “+” icon in the top right corner of the screen.
6. Choose “Add users” and enter the email from the service account or OAuth authentication methods. Make sure to grant at least viewer privileges. Ensure to grant at least viewer privileges.
7. Complete the process by clicking “Add” in the top right corner.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: Google_analytics
project_id: ID of the project
client_email: Email of the client
private_key: Private key
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Google_analytics_data
      connectorname: Google Analytics
      config:
        project_id: <PROJECT ID>
        client_email: <CLIENT EMAIL>
        private_key: <PRIVATE KEY>
      properties:
        property_id: <PROPERTY ID>
        query:
          - resource_name: sample_analytics_data1
            dimensions: ["browser", "city"]
            metrics: ["totalUsers", "transactions"]
          - resource_name: sample_analytics_data2
            dimensions: ["browser", "city", "dateHour"]
            metrics: ["totalUsers"]
        start_date: <START DATE>
```
