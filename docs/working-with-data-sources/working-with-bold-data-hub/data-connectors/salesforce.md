---
layout: post
title: Salesforce ETL/Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Salesforce ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Salesforce

[Salesforce](https://www.salesforce.com/) is a cloud platform that streamlines business operations and customer relationship management, encompassing sales, marketing, and customer service.

## Grab Credentials

To set up your pipeline, you'll need your Salesforce `user_name`, `password`, and `security_token`. Use your login credentials for the `user_name` and `password`.

### Obtain Security Token

Follow these steps to obtain the `security_token`:

1. Log into Salesforce with your credentials.
2. Click your profile picture/avatar at the top-right.
3. Select "Settings" from the drop-down.
4. Under "Personal Setup" in the sidebar, choose "My Personal Information" > "Reset My Security Token".
5. Click "Reset Security Token".
6. Check your email for the token sent by Salesforce.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: Salesforce
Username: UserName
Password: Password
Security_token: Salesforce security token
```

### Example Configuration

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: Salesforce_data
      connectorname: Salesforce
      config:
        username: <USERNAME>
        password: <PASSWORD>
        security_token: <SECURITY TOKEN>
      select:
        - TABLE1
        - TABLE2
```

## Configure the Data Hub to connect Salesforce

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Salesforce Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Salesforce Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Salesforce` template.

  ![Salesforce Data Hub - BoldBI](/static/assets/working-with-etl/images/salesforce_addtemplate.png#max-width=100%)
  
  4. Update the user name, password and security token in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

  ![Salesforce Data Hub - BoldBI](/static/assets/working-with-etl/images/salesforce_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)


```js
The available resources are supported in Salesforce
- User 
- UserRole 
- Lead 
- Contact 
- Campaign 
- Product2 
- Pricebook2 
- PricebookEntry 
- Opportunity 
- OpportunityLineItem
- OpportunityContactRole 
- CampaignMember 
- Account 
- CampaignMember 
- Task
- Event  
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Salesforce - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Salesforce - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Salesforce - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Salesforce - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Salesforce - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
