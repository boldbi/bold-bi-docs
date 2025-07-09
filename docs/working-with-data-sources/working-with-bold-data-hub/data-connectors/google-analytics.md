---
layout: post
title: Google Analytics Data Hub Connector Bold BI Learning
description: Learn how to use the Google Analytics Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Google Analytics Source

Google Analytics is a service for web analytics that tracks and provides data regarding user engagement with your website or application.

### Service Account Credential

Service account credentials are more suitable for server-to-server interactions.

### Grab Google Service Account Credentials

To obtain API credentials using a GCP service account, follow these steps:

1. Sign in to [https://console.cloud.google.com](https://console.cloud.google.com).
2. Create a service account if necessary.
3. Enable the "Google Analytics API" (refer to Google documentation for detailed instructions).
4. Generate credentials:
   - Navigate to IAM & Admin in the console's left panel, and then select Service Accounts.
   - Find the service account you want to use and click on the three-dot menu under the "Actions" column.
   - Create a new JSON key by selecting "Manage Keys" > "ADD KEY" > "CREATE".
   - Download the ".json" file containing the necessary credentials for future use.


## Share the Google Analytics Property with the API

>**Note:** For service account authentication, use the `client_email`. 

1. Log into your Google Analytics account.
2. Choose the website property you wish to share.
3. In the lower-left corner, click on the “Admin” tab.
4. In the “Account” column, go to “Account Access Management.”
5. Find and click on the blue “+” icon in the top right corner of the screen.
6. Choose “Add users” and enter the email from the service account or OAuth authentication methods. Make sure to grant at least viewer privileges. Ensure to grant at least viewer privileges.
7. Complete the process by clicking “Add” in the top right corner.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: Google_analytics
project_id: ID of the project
client_email: Email of the client
private_key: Private key
```


### Example Configuration

<b> For Service Account : </b>

```yaml
version: 1.0.1
encrypt_credentials: false
direct_target_import: false
union_all_tables: true
add_dbname_column: false
direct_load_to_destination: true
plugins:
 extractors:
   - name: <NAME>
     connectorname: Google Analytics
     config:
       project_id: <PROJECT ID>
       client_email: <CLIENT EMAIL>
       private_key:  <PRIVATE KEY>
       type: Service
     properties:
       property_id: <PROPERTY ID>
       queries: "[{'resource_name':'sample_analytics_data1','dimensions':['browser','city'],'metrics':['totalUsers','transactions']},{'resource_name':'sample_analytics_data2','dimensions':['browser','city','dateHour'],'metrics':['totalUsers']}]"
       start_date: <START DATE>
```

<b> For OAuth Account : </b>

```yaml
version: 1.0.1
encrypt_credentials: false
direct_target_import: false
union_all_tables: true
add_dbname_column: false
direct_load_to_destination: true
plugins:
 extractors:
   - name: <NAME>
     connectorname: Google Analytics
     config:
       project_id: <PROJECT ID>
       client_id: <CLIENT ID>
       client_secret: <CLIENT SECRET>
       type: OAuth
     properties:
       property_id: <PROPERTY ID>
       queries: "[{'resource_name':'sample_analytics_data1','dimensions':['browser','city'],'metrics':['totalUsers','transactions']},{'resource_name':'sample_analytics_data2','dimensions':['browser','city','dateHour'],'metrics':['totalUsers']}]"
       start_date: <START DATE>
```

## Configure the Data Hub to connect Google Analytics

#### OAuth Authentication with Google Analytics

1. Double Click on the connector, which will prompt a Authentication Setup window.

  ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/oauth_details.png#max-width=100%)

2. Fill the Client ID and Client Secret and click Ok.

  ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/authentication.png#max-width=100%)

3. Click on Allow in the authorization window to accept the scopes requested by Bold DataHub.

4. Update the project ID, client ID and client secret in the template. Also, Update the resources on the `properties` property and Click Save and choose the desired destination to save the pipeline.

  ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/analytics_auth_template.png#max-width=100%)
  
5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI]

(https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)

   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

#### Service Authentication with Google Analytics

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Google Analytics` template.

  ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/analytics_service_template.png#max-width=100%)
  
  4. Update the project ID, client email and private key secret in the template. Also, Update the resources on the `properties` property and save it to the BoldBI Data Store.

  ![Google Analytics Data Hub - BoldBI](/static/assets/working-with-etl/images/analytics_yaml.png#max-width=100%)

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Google Analytics - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Google Analytics - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Google Analytics - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Google Analytics - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Google Analytics - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
