---
layout: post
title: Strapi ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Strapi ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# ``Strapi``

Strapi is a headless CMS (Content Management System) that allows developers to create API-driven content management systems without writing much custom code.

## Grab API Token

1. Log in to ``Strapi``.
2. Click the settings icon in the sidebar.
3. Go to API tokens under global settings.
4. Create a new API token.
5. Fill in Name, Description, and Duration.
6. Choose a token type: Read Only, Full Access, or custom.
7. Save to view your API token.
8. Copy it for configuration.

## Connection Properties

In the YAML file, the configuration section contains the following properties:

```yaml
Connectorname: Strapi
Api_secret_key: API secret key
Domain: Domain
```

### Example

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Strapi_data
      connectorname: Strapi
      config:
        api_secret_key: <API SECRET KEY>
        domain: <DOMAIN>
      select:
        - TABLE1
        - TABLE2
```

## Configure the Data Hub to connect Strapi

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Strapi Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Strapi Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Strapi` template.

  ![Strapi Data Hub - BoldBI](/static/assets/working-with-etl/images/strapi_addtemplate.png#max-width=100%)
  
  4. Update the api secret key and domain in the template. Also, Update the resources on the `select` property and and Click Save, choose the desired destination to save the pipeline.
  
 5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)


>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Strapi - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Strapi - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Strapi - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Strapi - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Strapi - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
