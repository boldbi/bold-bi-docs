---
layout: post
title: Stripe ETL/Data Hub Connector – Embedded BI | Bold BI Learning
description: Learn how to use the Stripe ETL/Bold Data Hub connectors in Bold BI Enterprise Edition. Discover simple steps to integrate data smoothly and make the most of your analytics.
platform: bold-bi
documentation: ug

---

# Stripe

Stripe is an online payment platform that enables businesses to securely process and manage customer transactions over the Internet.

## Grab Credentials

1. Log in to your Stripe account.
2. Click on Settings in the top right corner.
3. Navigate to Developers in the top menu.
4. Choose "API Keys".
5. Under "Standard Keys", click on "Reveal test key" next to the Secret Key.
6. Make a note of the `API_secret_key` for configuring `secrets.toml`.

## Connection Properties

The configuration section in the YAML file includes the following properties:

```yaml
Connectorname: Stripe
Stripe_secret_key: Stripe secret key
```

## Metadata Properties

In this section, define the mode of data refresh. There are two modes: `INCREMENTAL` and `FULL_TABLE`.

<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>INCREMENTAL</td>
        <td>

```yaml
metadata:
    TableName:
        replication_method: INCREMENTAL
        replication_key: Column name
        replication_value: column value that data starts from
```
</td>
        <td>This mode will retrieve data from the date column specified in the replication key starting from the date indicated in the replication value. Once it is scheduled, the replication value will be automatically updated based on the imported data.</td>
    </tr>
    <tr>
        <td>FULL_TABLE</td>
        <td>

```yaml
      metadata:
    TableName:
        replication_method: FULL_TABLE
        replication_key: Column name
        replication_value: column value that data starts from
        interval_type: days/hours/minutes/year/month
        interval_value: integer value to add in interval type

```
</td>
        <td>This mode will fetch data from the date column mentioned in the replication key starting from the date specified in the replication value. Once scheduled, the replication value is automatically updated from the imported data.</td>
    </tr>
</table>

## Example
## ``FULL_TABLE``

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: stripe_data
      connectorname: stripe
      config:
        stripe_secret_key: <SECRET KEY>
      select:
         - TABLE1
         - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
          interval_type: days
          interval_value: 6
```

## INCREMENTAL

```yaml
version: 1
encrypt_credentials: false
plugins:
  extractors:
    - name: stripe_data
      connectorname: stripe
      config:
        stripe_secret_key: <SECRET KEY>
      select:
         - TABLE1
         - TABLE2
      metadata:
        TABLE1:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
        TABLE2:
          replication_method: FULL_TABLE
          replication_key: last_modified_on
          replication_value: 2023-07-19 00:00:00
```
## Configure the Data Hub to connect Stripe

  1. To start, Click the `Bold Data Hub` icon on the Navigation Pane.

  ![Stripe Data Hub - BoldBI](/static/assets/working-with-etl/images/boldbi_panel.png#max-width=100%)

  2. Click `Add Project` and provide the name for the new project.
  
   ![Stripe Data Hub - BoldBI](/static/assets/working-with-etl/images/addpipeline.png#max-width=100%)
  
  3. Select the newly created project and add the `Stripe` template.

  ![Stripe Data Hub - BoldBI](/static/assets/working-with-etl/images/stripe_addtemplate.png#max-width=100%)
  
  4. Update the stripe secret key in the template. Also, Update the resources on the `select` property and Click Save, choose the desired destination to save the pipeline.

  ![Stripe Data Hub - BoldBI](/static/assets/working-with-etl/images/stripe_yaml.png#max-width=100%)
  
  5. Creating a Pipeline in Bold Data Hub automatically creates a Data Source in Bold BI. The Bold BI Data Source is a live data source to the destination database used in Bold Data Hub. For more information on the relationship between Bold Data Hub Pipeline and the associated Data Sources in Bold BI , please refer to [Relationship between Bold Data Hub Pipeline and Associated Data Sources in Bold BI](https://help.boldbi.com/working-with-data-sources/working-with-bold-data-hub/relationship-between-bold-data-hub-pipeline-and-associated-data-sources-in-boldbi/)



```js
The available resources are supported in Stripe 
- Subscription 
- Account 
- Coupon 
- Customer 
- Product
- Price
- Event
- Invoice
- BalanceTransaction 
 ```

>**Warning:**
    1. The `Encrypt_Credentials` property should be set to false when updating the new access token on the template. If you have modified other properties, such as 'select' or 'account id', the `Encrypt_Credentials` property must be set to true.  
    2. The default lifetime of the access token is 1 hour. Therefore, you need to convert it to a long-lived access token in order to use the same token for 60 days. Existing tables should be maintained even if the token has expired or is being used as an invalid token. 

### Schedule Data Hub Job

1. To configure interval-based scheduling, click on the schedules tab and select the created pipeline and click on the schedule icon and configure it.

![Stripe - BoldBI](/static/assets/working-with-etl/images/schedule_schedules.png#max-width=100%)

![Stripe - BoldBI](/static/assets/working-with-etl/images/schedule_scheduledialog.png#max-width=100%)

2. For on-demand refresh, click `Run Now` button.

![Stripe - BoldBI](/static/assets/working-with-etl/images/schedule_runnow.png#max-width=100%).

3. The Schedule history can be checked using the history option as well as logs.

![Stripe - BoldBI](/static/assets/working-with-etl/images/schedule_history.png#max-width=100%)

4. Click on Logs to see if the run is completed and data source is created in Bold BI. 

![Stripe - BoldBI](/static/assets/working-with-etl/images/pipeline_DsCreated.png#max-width=100%)


5. Click `Edit DataSource` Option to view the created tables.
