---
layout: post
title: Stripe – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Stripe service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Stripe data source
The Bold BI dashboard designer supports connecting to Stripe web services through the REST API. 

## Choose Stripe data source
To configure the Stripe data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Stripe** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Stripe/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Stripe/ChooseDS_Server.png)

## Create Stripe data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Stripe data source.
1. Enter a name and description (optional) for the data source.
2. Choose The Extract Engine.
3. Click the **API Endpoints** down drop box and choose the required endpoint.
4. Click **Custom Url** to enter the URL manually. Refer to the [Stripe API documentation](https://stripe.com/docs/api) for more details.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Stripe data source. This value is used to fetch the data from Stripe data source via pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.
9. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Account Key**.

  ![Data Source Preview](/static/assets/working-with-datasource/data-connectors/images/Stripe/DataSourcesView.png)

## Extract Engine
You can connect to the data source using one of the following extract methods:
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

- When the data refresh is configured for data sources that uses the Data Hub Extract Engine, the refresh will be managed within the Data Hub.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Stripe Data source?
1. Login to your [Stripe](https://dashboard.stripe.com/login) account. Go to *Developers -> API Keys*.
2. Utilize this *Secret Key* as the **Account Key** in the Stripe data source within the Bold BI Dashboard.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/Stripe/APIKey.png)

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Setting up the URL

1. For example, in order to retrieve specific payments_intents details, you can query the */payments_intents* endpoint.
2. Obtain the id of the specific payments_intents from the provided information.

Replace it in the URL to query a particular payment:

[https://api.stripe.com/v1/payment_intents/&lt;:payment_intents_id&gt;](https://api.stripe.com/v1/payment_intents/%3c:payment_intents_id%3e)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://stripe.com/docs/api)

### Sample queries
**Charges**

`https://api.stripe.com/v1/charges`

**Balance**

`https://api.stripe.com/v1/balance`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Stripe Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Stripe/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Stripe/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/stripe?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbistripeintegration" target="_blank">Stripe Integration</a>