---
layout: post
title: Web Bold Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Web Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
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

  ![Web Data Hub - BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click `Add Project` and provide the new project's name.
  
   ![Web Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Web` template.

  ![Web Data Hub - BoldBI](/static/assets/working-with-etl/images/web_addtemplate.png#max-width=100%)
  
### Configuration Parameters

| Parameter         | Description     |  
|--------------|-----------|
| **URL:**           |   Specify the URL of the web service from which data will be extracted. This URL should point to the API endpoint providing the required data.    |
| **Authentication (Optional):** |**Username:** If the web service requires basic authentication, provide the username here.  **Password:** Corresponding password for basic authentication.|
|**Request Type:**|Specify whether the connector should use the GET or POST method for making requests to the API. |
|**Parameters (Optional):**| Provide parameters required for the API call in JSON format - key-value pairs. These parameters are typically used for filtering or customizing the data returned by the API.
|**Data (Optional):**| If the API call requires any additional data to be sent, specify it here in JSON format - key-value pairs. This data might include payload or request body parameters.|
|**Headers (Optional):**| Include any custom headers required for the API call. These headers should be provided in JSON format, specifying key-value pairs such as content type or authentication tokens.|

  4. Update the details required in the template and Click Save, choose the desired destination to save the pipeline.

  ![Web Data Hub - BoldBI](/static/assets/working-with-etl/images/web_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

  
 
### Schedule Bold Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Web - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Web - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Web - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Web - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Web - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.

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
