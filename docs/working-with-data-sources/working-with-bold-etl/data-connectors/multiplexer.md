---
layout: post
title: Mux ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Mux ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Mux``

``Mux `` is a video technology platform that provides infrastructure and tools for developers to build and stream high-quality video content.

## Grab Credentials

1. Sign in to ``mux.com``.
2. Click "Settings" at the bottom left, then select "Access Token".
3. Select "Generate new token".
4. Assign read permissions for ``Mux`` videos and data, and name the token.
5. Click "Generate token".
6. Copy the API access token and secret key for later configuration.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
connector_name: Mux
Mux_api_access_token: Access token
mux_api_secret_key: API secret key
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: mux_data
      connectorname: Mux
      config:
        mux_api_access_token: <API TOKEN>
        mux_api_secret_key: <SECRET KEY>
      select:
       -views/assets
```
