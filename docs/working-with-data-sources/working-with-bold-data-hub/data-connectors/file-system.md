---
layout: post
title: Reader source and FileSystem ETL/Bold Data Hub Connectors
description: Learn how to use the Reader source and FileSystem ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``FileSystem``:

This data source can easily stream files from the local ``filesystem`` using the reader source.

***The Reader source supports Four types of file extension:**
- Csv files
- Excel files
- Json files
- YAML files


### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: FileSystem
      connectorname: FileSystem
      config:
      properties:
        type: <csv/excel/jsonl/yaml>
        filepath: <Paste the copied file path>
        # sheetname is required for excel type
        sheetname:
```
