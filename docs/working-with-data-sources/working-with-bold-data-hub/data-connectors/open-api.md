---
layout: post
title: OpenAPI ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the OpenAPI ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``OpenAPI``

``OpenAPI`` fetch data from ``OpenAPI`` ``3.x`` documents.

## ``OpenAPI`` features supported

1. All HTTP methods are supported.
2. JSON and form bodies, path and query parameters are accepted.
3. File uploads can be done with `multipart/form-data` bodies.
4. Supported data types include float, string, int, date, datetime, `string enums`, and custom schemas or lists containing any of those.
6. Responses can be in html/text or application/json format containing any of the mentioned types.
5. Basic or Bearer Authentication is not supported.

## Connection Properties

The `config` section in a YAML file includes the following properties:

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
