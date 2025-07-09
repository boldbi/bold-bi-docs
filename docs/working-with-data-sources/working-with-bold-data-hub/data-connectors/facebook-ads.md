---
layout: post
title: Facebook Ads Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Facebook Ads Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Facebook Ads:

Facebook Ads is the advertising platform that allows businesses and individuals to create targeted ads on Facebook and its affiliated apps, such as Instagram and Messenger.

## Grab credentials
### Grab Account ID

1. Ensure you have Ads Manager activated for your Facebook account.

2. Locate your account ID, which is a lengthy number. You can find it by clicking on the Account Overview dropdown in Ads Manager or by checking the link address. For example, ``adsmanager.facebook.com/adsmanager/manage/accounts?act={accountId}``.

3. Copy the account ID.

### Grab Access_Token

1. Please sign up for a developer account at https://developers.facebook.com.
2. Log in to your developer account and click on **My Apps** in the top right corner.
3. Create an app, choose **Other** as the type, select **`Business`** as the category, and click **Next**.
4. Enter the name of your app and select the associated business manager account.
5. Navigate to the **`Basic`** settings in the left-hand side menu.
6. Copy the **`App ID`** and **`App secret`**. 
7. Next, obtain a short-lived access token at https://developers.facebook.com/tools/explorer/.
8. Select the created app, add **`ads_read`** and **`lead_retrieval`** permissions, and generate a short-lived access token.
9. Copy the access token.

## Connection Properties

The `config` section in a YAML file includes the following properties:

```yaml
Connectorname**: FacebookAds
Access_token**: FacebookAds access token
Client_id**: Client’s id
Client_secret**: Client’s secret
Account_id**: FacebookAds Account ID
```
## Incremental Mode:
The Facebook ads doesn’t support incremental mode and Facebook insights supports incremental mode.
```yaml
properties:
        type: insights
        initial_load_past_days: 30
        attribution_window_days_lag: 7
        time_increment_days: 1
```
The incremental mode loads the new data instead of loading the entire dataset. In the given example, the initial load is set to 30 days. It loads the data for the past 30 days, which is incremented daily since the time increment day is set to one. The attribution is how far the system should go back to consider data attribution.

## Example Configuration

## Facebook ads

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: fb_data
      connectorname: FacebookAds
      config:
        access_token: <ACCESS TOKEN>
        client_id: <CLIENT ID>
        client_secret: <CLIENT SECRET>
        account_id: <ACCOUNT ID>
      select:
        - ads
        - ads1
```

## Facebook insights

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: fb_data
      connectorname: FacebookAds
      config:
        access_token: <ACCESS TOKEN>
        client_id: <CLIENT ID>
        client_secret: <CLIENT SECRET>
        account_id: <ACCOUNT ID>
      properties:
        type: insights
        initial_load_past_days: 30
        attribution_window_days_lag: 7
        time_increment_days: 1
```
## Configure the Data Hub to connect Facebook Ads

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Facebook ADs](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Pipeline` and provide the name for the new pipeline.
  
   ![Facebook ADs](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Facebook Ads` template.

  ![Facebook ADs](/static/assets/working-with-etl/images/fbads_Template.png#max-width=100%)
  
  4. Update the access token and account ID in the template. Also, Update the resources on the `select` property and Click Save and choose the desired destination to save the pipeline.

  ![Facebook ADs](/static/assets/working-with-etl/images/fbtemplate.png#max-width=100%)

```js
The available resources are supported in Facebook Ads 
- campaigns 
- ads 
- ad_creatives 
- leads 
- ad_sets 
 ```
 
 5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/).

   ![FileSystem - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Facebook ADs](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Facebook ADs](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Facebook ADs](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Facebook ADs](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Facebook ADs](/static/assets/working-with-etl/images/fbads_EditDatasource.png#max-width=100%)

5. Click `Edit DataSource` Option to view the created tables.

![Facebook ADs](/static/assets/working-with-etl/images/fbads_DsCreated.png#max-width=100%)  

6. Click `Edit DataSource` Option to view the created tables, such as 'Campaigns' and 'Adsets' tables.

![Facebook ADs](/static/assets/working-with-etl/images/fbads_EditDatasource.png#max-width=100%)  

## Reference

1. Facebook Get Started - https://developers.facebook.com/docs/graph-api/get-started 
2. Long-Lived Access Token - https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/
