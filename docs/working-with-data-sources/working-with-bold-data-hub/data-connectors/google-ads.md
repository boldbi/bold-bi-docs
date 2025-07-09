---
layout: post
title: Google Ads ETL/Bold Data Hub Connector – Bold BI Learning
description: Learn how to use the Google Ads ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---
# Google Ads

Google Ads is a service for online advertising that enables businesses to track and manage ad campaigns, providing data on ad performance and audience engagement across Google platforms.


### Grab Google OAuth 2.0 Credentials

To obtain API credentials using a GCP account, follow these steps: 

1. Sign in to [https://console.cloud.google.com](https://console.cloud.google.com).
2. Ensure you're logged in with the Google account associated with your project.

3. Select the project for which you want to find the OAuth 2.0 credentials.
4. In the left-hand navigation menu, go to "APIs & Services" and then select "Credentials."
5. On the "Credentials" page, you'll see a list of your credentials. Click on the name of the OAuth 2.0 client ID you're interested in.
6. This will open the details page for that client ID, where you can view the "Client ID" and "Client secret."


## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname: Google Ads
project_id: Project ID
client_id: Client id
client_secret: client secret
dev_token: dev token
customer_id: customer id
```

## Configure the Bold Data Hub to connect Google ADS

  1. Click the `Data Hub` icon on the Navigation Pane.

  ![Google Ads ETL- BoldBI](/static/assets/working-with-etl/images/clickdatahub.png#max-width=100%)

  2. Click Plus icon and provide the new project's name.
  
  ![Google Ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_addprojectDataHub.png#max-width=100%)
  
  3. Select the newly created project
  
  ![Google Ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_oauthconfiguration.png#max-width=100%)

  4. Enter the `Client ID` and `Client Secret` and click ok. The Template will be added with credentials.
  
  ![Google Ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_addTemplate.png#max-width=100%)


### Configuration Parameters

|  Parameters |  Description                                     |
|--------------------------------|---------------------------------------------|
| **Project ID:**                | Specify the Google Cloud Project ID associated with your Google Ads account. |
| **Client ID:**                 | Provide the client ID obtained from your Google Cloud Console for authenticating API access. |
| **Client Secret:**             | Provide the client secret obtained from your Google Cloud Console for authenticating API access. |
| **Dev Token:**                 | Specify the developer token assigned to your Google Ads account for accessing the API. |
| **Customer ID:**               | Provide the Google Ads customer ID of the account you want to access data for. |
| **Select:**                  |    **Tablename(s):**         Specify the resources to load data from the Google Ads. |

  5. Update the details required in the template. and save it to the BoldBI Data Store.

  ![Google Ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_updateDatahub.png#max-width=100%)

### Schedule Bold Data Hub Job

1. Click `Schedules` and select the created `googleads` project.

![Google Ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_scheduleDataHub.png#max-width=100%)

2. For an on-demand refresh, click Run icon.

![google ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_runDataHub.png#max-width=100%) 

3. Click the `Schedule` Icon to schedule the refresh hourly.

![google ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_schedule_refresh.png#max-width=100%)  

4. The data source was created by ETL in Bold BI.

![google ads ETL- BoldBI](/static/assets/working-with-etl/images/googleads_newdsDataHub.png#max-width=100%)  

5. Click the `Edit DataSource` Option to view the created table(s), such as the 'votes' table.

![PostgreSQL ETL- BoldBI](/static/assets/working-with-etl/images/googleads_tableDataHub.png#max-width=100%)

