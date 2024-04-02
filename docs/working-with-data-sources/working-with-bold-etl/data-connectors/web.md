---
layout: post
title: Web ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Web ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Web

Web connector fetch data from REST API and it supports nested json fields. 

## Limitations

1. Currently supports Json response.

   
## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
url: URL
username: Username
password: Password
headers: Header parameters
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
        url: 
        # Basic Authentication
        username: username 
        password: password
        # Headers should be in json format => headers: { "ContentType": "application/json", "x-api-key": "somevalue" } 
        headers:
```
