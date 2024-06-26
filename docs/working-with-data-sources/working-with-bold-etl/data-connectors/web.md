---
layout: post
title: Web ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Web ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Web

The web connector fetches data from a REST API and supports nested JSON fields.

## Limitations

1. Currently supports Json response.

   
## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
url: URL
username: Username
password: Password
type: HHTP method either GET/POST
headers: Header parameters
params: Query Paramaeter value
data: Data value 
```


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: web
      #Json Response only supported
      connectorname: Web
      config:
        url: url
        # Basic Authentication
        username: username 
        password: password
        type: get 
        headers: { 'ContentType': 'application/json' } 
```
