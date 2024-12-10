---
layout: post
title: Matomo ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Matomo ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Matomo``

``Matomo`` is a free and open-source web analytics platform that provides detailed insights into website and application performance with features like visitor maps, site search analytics, real-time visitor tracking, and custom reports.

## Grab Credentials

1. Sign in to ``Matomo``.
2. Click on the Administration settings icon located at the top right.
3. Navigate to "Personal > Security" on the left menu.
4. Find and select "Auth Tokens > Create a New Token."
5. Verify with your password.
6. Add a descriptive label for your new token.
7. Click "Create New Token."
8. Your token is displayed.
9. Copy the access token.
10. Your ``Matomo`` URL is the web address in your browser when logged into ``Matomo``, typically "https://mycompany.matomo.cloud/".
11. The `site_id` is a unique ID for each monitored site in ``Matomo``, found in the URL or via ``Administration > Measureables > Manage under ID``.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
connector_name: Matomo
Api_token: Access token
url: URL
queries: Queries
Site_id: ID of the site
Live_events_site_id: ID of the Live events site
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Matomo_data
      connectorname: Matomo
      config:
        api_token: <API TOKEN>
        url: <URL>
      properties:
        type: <REPORTS/VISITS>
        queries: <QUERIES>
        site_id: <SITE ID>
        initial_load_past_days: <LOAD PAST DAYS>
        live_events_site_id: <LIVE EVENTS SITE ID>
```
