---
layout: post
title: Web ETL/Bold Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Web ETL/Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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

## Configure the Bold Data Hub to connect Web

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![Web ETL - BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_addprojectDataHub.png#max-width=100%)
  
  3. Select the newly created project and add the `Web` template.

  ![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_addtempleteDataHub.png#max-width=100%)
  
### Configuration Parameters

| Parameter         | Description     |  
|--------------|-----------|
| **URL:**           |   Specify the URL of the web service from which data will be extracted. This URL should point to the API endpoint providing the required data.    |
| **Authentication (Optional):** |**Username:** If the web service requires basic authentication, provide the username here.  **Password:** Corresponding password for basic authentication.|
|**Request Type:**|Specify whether the connector should use the GET or POST method for making requests to the API. |
|**Parameters (Optional):**| Provide parameters required for the API call in JSON format - key-value pairs. These parameters are typically used for filtering or customizing the data returned by the API.
|**Data (Optional):**| If the API call requires any additional data to be sent, specify it here in JSON format - key-value pairs. This data might include payload or request body parameters.|
|**Headers (Optional):**| Include any custom headers required for the API call. These headers should be provided in JSON format, specifying key-value pairs such as content type or authentication tokens.|

  4. Update the details required in the template. and save it to the BoldBI Data Store.

  ![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_updateDataHub.png#max-width=100%)

### Schedule Bold Data Hub Job

1. Click `Schedules` and select the created `web` project.

![Web ETL - BoldBI](/static/assets/working-with-etl/images/Webetl_scheduleDataHub.png#max-width=100%)

2. For an on-demand refresh, click `Run Now`.

![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_runscheduleDataHub.png#max-width=100%)  

3. After, Complete the on-demand refresh.

![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_refreshcompleteDataHub.png#max-width=100%)  

4. Click the `Schedule` option to schedule the refresh hourly.

![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_schedulerefresh.png#max-width=100%)  

5. The data source was created by ETL in Bold BI.

![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_newdsDataHub.png#max-width=100%)  

6. Click the `Edit DataSource` Option to view the created tables, such as the 'web_result' table.

![Web ETL - BoldBI](/static/assets/working-with-etl/images/webetl_tableDataHub.png#max-width=100%)

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
