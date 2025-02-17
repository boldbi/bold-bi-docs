---
layout: post
title: Mux Bold Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Mux Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Mux``

``Mux `` is a video technology platform that provides infrastructure and tools for developers to build and stream high-quality video content.

## Grab Credentials

1. Sign in to ``mux.com``.
2. Click on "Settings" at the bottom left, then select "Access Token".
3. Select "Generate new token".
4. Assign read permissions for `Mux` videos and data, and give the token a name.
5. Click on "Generate token".
6. Copy the API access token and secret key for later configuration.

## Connection Properties

The `config` section in a YAML file includes the following properties:

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

## Configure the Data Hub to connect Mux

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Mux Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Mux Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Mux` template.

  ![Mux Data Hub - BoldBI](/static/assets/working-with-etl/images/mux_addtemplate.png#max-width=100%)
  
  4. Update the Mux Api Access Token and Key in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

  ![Mux Data Hub - BoldBI](/static/assets/working-with-etl/images/mux_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

  

```js
The available resources are supported in Mux
- asset 
- video
- view
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Mux - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Mux - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Mux - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Mux - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Mux - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.