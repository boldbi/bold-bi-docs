---
layout: post
title: Workable ETL/Data Hub Connector | Bold BI Learning
description: Learn how to use the Workable ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Workable

**Description:**
Workable is an online platform for posting jobs and managing the hiring process. Employers can create job listings, receive applications, track candidates, collaborate with team members, schedule interviews, and manage the overall hiring workflow with Workable.

**Prerequisites:**
- Application: Python (>=3.10) and Pip
- Python package: source-workable

**Grab API credentials:**
1. Log into Workable.
2. Click the user icon at the top right and select "Settings".
3. Under "RECRUITING", select "Integrations" on the left.
4. Locate "ACCESS TOKEN" and generate a new token.
5. Carefully copy the new token for pipeline configuration.

**Connection Properties:**
- **Connector Name:** Workable
- **Access Token:** Workable Access token
- **Subdomain:** Workable sub-domain

**Example YAML Configuration:**

### Without Type: Start date
```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Workable_data
      connectorname: Workable
      config:
        access_token: <ACCESS TOKEN>
        sub_domain: <SUB DOMAIN>
      select:
       -Table1
       -Table2
      properties:
        since_timestamp: <>
      
```

### With Type: Start date

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Workable_data
      connectorname: Workable
      config:
        access_token: <ACCESS TOKEN>
        sub_domain: <SUB DOMAIN>
      select:
       -Table1
       -Table2
      properties:
        since_timestamp: <>
      
```

## Configure the Data Hub to connect Workable

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Workable Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Workable Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Workable` template.

  ![Workable Data Hub - BoldBI](/static/assets/working-with-etl/images/workable_addtemplate.png#max-width=100%)
  
  4. Update the subdomain and access token in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

   ![Workable Data Hub - BoldBI](/static/assets/working-with-etl/images/workable_yaml.png#max-width=100%)
   
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)



```js
The available resources are supported in Workable
- members 
- recruiters 
- stages 
- requisitions 
- jobs
- custom_attributes
- events
- candidates
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Workable - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Workable - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Workable - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Workable - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Workable - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
