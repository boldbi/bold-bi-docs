---
layout: post
title: Facebook Ads ETL Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Facebook Ads ETL connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Facebook Ads:

Facebook Ads is the advertising platform that allows businesses and individuals to create targeted ads on Facebook and its affiliated apps, such as Instagram and Messenger.

## Grab credentials
### Grab Account ID

1. Ensure you have Ads Manager activated for your Facebook account.

2. Locate your account ID, which is a lengthy number. You can find it by clicking on the Account Overview dropdown in Ads Manager or by checking the link address. For example, https://adsmanager.facebook.com/adsmanager/manage/accounts?act=10150974068878324.

3. Copy the account ID.

### Grab Access_Token

1. Please sign up for a developer account on https://developers.facebook.com.
2. Log in to your developer account and click on **My Apps** located in the top right corner.
3. Create an app, choose **Other** as the type, select **`Business`** as the category, and click **Next**.
4. Enter the name of your app and select the associated business manager account.
5. Navigate to the **`Basic`** settings in the left-hand side menu.
6. Copy the **`App ID`** and **`App secret`**. 
7. Next, obtain a short-lived access token at https://developers.facebook.com/tools/explorer/.
8. Select the created app, add **`ads_read`** and **`lead_retrieval`** permissions, and generate a short-lived access token.
9. Copy the access token.

## Connection Properties

In a YAML file, the `config` section contains the following properties:

```yaml
Connectorname**: FacebookAds
Access_token**: FacebookAds access token
Client_id**: Client’s id
Client_secret**: Client’s secret
Account_id**: FacebookAds Account ID
```
## Incremental Mode:
`	`The Facebook ads doesn’t support incremental mode and Facebook insights supports incremental mode.
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