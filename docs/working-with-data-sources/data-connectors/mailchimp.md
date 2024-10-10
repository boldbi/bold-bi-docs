---
layout: post
title: Mailchimp – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Mailchimp service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Mailchimp data source
The Bold BI dashboard designer supports connecting to Mailchimp web services through the REST API. 

## Choose Mailchimp data source
To configure the Mailchimp data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Mailchimp** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/mailchimp/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/mailchimp/ChooseDS_server.png)

## Create Mailchimp data source

Once you click the Mailchimp data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Mailchimp data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Mailchimp REST API endpoint in the URL textbox. Refer to the [Mailchimp API documentation](https://developer.mailchimp.com/documentation/mailchimp/guides/) for more details.

    Example: `https://<:us_id>.mailchimp.com/3.0/campaigns`   

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Mailchimp data source. This value is used to fetch the data from Mailchimp data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in **Authentication type** combo box.
7. Enter a valid **User Name, API Key** to access the endpoint in your account.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/mailchimp/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Key for connecting Mailchimp data source?

1. Login to your [**Mailchimp**](https://login.mailchimp.com/) account. Go to *Account -> Profile*.
2. In account details page, navigate to *Extras -> API Keys*.
3. Locate the *API Key* under the *Your API Keys* section.
4. Click on *Create A Key* to generate a new API Key.
5. Use this Key as the **API Key** in the Mailchimp data source within the Bold BI Dashboard.

![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/mailchimp/APIKey.png)

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

Replace &lt;:us_id&gt; with your Mailchimp domain.

`https://your-domain.api.mailchimp.com/3.0/campaigns`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.mailchimp.com/documentation/mailchimp/guides/)

### Sample queries

**Contacts**

`https://your-domain.api.mailchimp.com/3.0/lists/93d6e1fdb4/members`

**Tags**

`https://your-domain.api.mailchimp.com/3.0/lists/93d6e1fdb4/members/%3c;subscriber_hash%3e;/tags`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Mailchimp Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/mailchimp/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/mailchimp/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Mailchimp API Best practices](https://developer.mailchimp.com/documentation/mailchimp/guides/mailchimp-api-best-practices/)

[Mailchimp Integration](https://www.boldbi.com/integrations/mailchimp?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimailchimpintegration)