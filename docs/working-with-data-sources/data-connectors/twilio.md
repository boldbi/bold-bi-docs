---
layout: post
title: Twilio – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Twilio using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Twilio data source
Bold BI dashboard designer supports connecting Twilio web services through REST API. 

## Choose Twilio data source
To configure the Twilio data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Twilio** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Twilio/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Twilio/ChooseDS_Server.png)


## Create Twilio data source
After you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a Twilio data source.
1. Enter a name and description (optional) for the data source.
2. Click the **Resources** dropdown box and choose the required endpoint.
3. Click the **Custom Url** to enter the URL manually. Refer to the [Twilio API documentation](https://www.twilio.com/docs/api) for more details.

   Example: `https://api.twilio.com/2010-04-01/Accounts/<:youraccountsid>/Calls.json`

4. Select the **GET** method for the REST API in **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Twilio data source. This value is used to fetch the data from the Twilio data source via pagination.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Account SID** and **Auth Token**. Find the details for providing *Account SID* and *Auth Token* from [here](/working-with-data-sources/data-connectors/twilio/#how-to-get-credentials-for-connecting-the-twilio-data-source).

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Twilio/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How to get Credentials for connecting the Twilio Data source
1. Login to [Twilio](https://www.twilio.com/login) account.
2. Go to *Console Dashboard > Settings > API Credentials*.
2. Use this *Account SID* and *Auth Token* in Twilio data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/Twilio/Credentials.png)

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to query the call details, query the <i>/Calls.json</i> endpoint.
2. From the listed information get the ID of the specific call.

Replace it in the URL to query a particular payment:

`https://api.twilio.com/2010-04-01/Accounts/<:youraccountsid>/Calls/<:specificcallid>.json`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://www.twilio.com/docs/api)

### Sample queries
**Fetch Call Details**

`https://api.twilio.com/2010-04-01/Accounts/ACygdygeu62gdhbs/Calls.json`

**Fetch Message Details**

`https://api.twilio.com/2010-04-01/Accounts/ACygdygeu62gdhbs/Messages.json`

**Feedback about specific call**

`https://api.twilio.com/2010-04-01/Accounts/ACygdygeu62gdhbs/Calls/CAdjns42hHVBSJwnIsb/Feedback.json`

**Media Resource - Fetch media such as image of specific message**

`https://api.twilio.com/2010-04-01/Accounts/ACygdygeu62gdhbs/Messages/MMjhdioneo62jdibJGSUS/Media/MEjhsdjjkds652haHHSIn.json`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Twilio Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Twilio/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Twilio/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Blog Post](https://www.boldbi.com/blog/twilio-dashboard-example-with-bold-bi)

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Twilio Rate Limits and Message Queues](https://support.twilio.com/hc/en-us/articles/115002943027-Understanding-Twilio-Rate-Limits-and-Message-Queues)

[Twilio Sending and Receiving limitations on Calls and SMS Messages](https://support.twilio.com/hc/en-us/articles/223183648-Sending-and-Receiving-Limitations-on-Calls-and-SMS-Messages) 

[Twilio Integration](https://www.boldbi.com/integrations/twilio?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbitwiliointegration)