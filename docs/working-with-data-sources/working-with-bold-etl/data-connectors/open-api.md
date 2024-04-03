---
layout: post
title: OpenAPI ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the OpenAPI ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``OpenAPI``

``OpenAPI`` fetch data from ``OpenAPI`` ``3.x`` documents.

## ``OpenAPI`` features supported

1. All HTTP Methods
2. JSON and form bodies, path and query parameters
3. File uploads with ``multipart/form-data`` bodies
4. float, string, int, date, datetime, ``string enums``, and custom schemas or lists containing any of those
6. html/text or application/json responses containing any of the previous types
5. Basic or Bearer Authentication not supported

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
        ymlURL: 
        ymlPath: 
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: OpenAPI
      connectorname: OpenAPI
      config:
        ymlURL: 
        ymlPath: 
      select:
        - tablename
```