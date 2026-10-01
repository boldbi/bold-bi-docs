---
layout: post
title: OpenAPI ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the OpenAPI ETL/Bold Data Hub connectors in Bold BI Server. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# OpenAPI

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
version: 1.0.1
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

## Configure the Bold Data Hub to connect OpenAPI

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![OpenAPI- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Pipeline` and provide the new pipeline's name.

  ![OpenAPI - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)

  3. Select the newly created pipeline and add the `OpenAPI` template.

  ![OpenAPI - BoldBI](/static/assets/working-with-etl/images/openapitemplate.png#max-width=100%)

  4. Update the Url and Path in the template

  5. Click Save and choose the desired destination to save the pipeline.

  ![OpenAPI - BoldBI](/static/assets/working-with-etl/images/csv_destination.png#max-width=100%)

  6. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).

  ![OpenAPI - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![OpenAPI - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![OpenAPI - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![OpenAPI - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%)

3. The Schedule history can be checked using the history option as well as logs.

![OpenAPI - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI.

![OpenAPI - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.